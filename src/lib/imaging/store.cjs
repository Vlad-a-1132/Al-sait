'use strict';

// Shared by Next route handlers, the maintenance CLI and integration tests.
// Metadata is a small atomic file per record; file bodies are never buffered in RAM.
const fs = require('node:fs/promises');
const { createReadStream, constants } = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { randomUUID, randomBytes, createHash, scrypt, timingSafeEqual } = require('node:crypto');
const { promisify } = require('node:util');
const derive = promisify(scrypt);
const MAX_FILE_SIZE = 400 * 1024 * 1024;
const CHUNK_SIZE = 4 * 1024 * 1024;
const SESSION_MS = 8 * 60 * 60 * 1000;
const UPLOAD_MS = 48 * 60 * 60 * 1000;
const COOKIE = 'altamed_imaging_session';
const UUID = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/;
const HASH = /^[a-f0-9]{64}$/;
const digest = value => createHash('sha256').update(value).digest('hex');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

class ImagingError extends Error {
  constructor(status, code, message) { super(message); this.status = status; this.code = code; }
}
const fail = (status, code, message) => { throw new ImagingError(status, code, message); };
async function readJson(filename, fallback = null) {
  try { return JSON.parse(await fs.readFile(filename, 'utf8')); }
  catch (error) { if (error.code === 'ENOENT') return fallback; throw error; }
}
async function atomicJson(filename, value) {
  const temp = filename + '.' + randomUUID() + '.tmp';
  const handle = await fs.open(temp, 'wx', 0o600);
  try { await handle.writeFile(JSON.stringify(value)); await handle.sync(); }
  finally { await handle.close(); }
  try {
    await fs.rename(temp, filename);
    // Persist directory entries on Linux as well as file contents. Windows cannot fsync a directory.
    if (process.platform !== 'win32') {
      const directory = await fs.open(path.dirname(filename), 'r');
      try { await directory.sync(); } finally { await directory.close(); }
    }
  } finally { await fs.unlink(temp).catch(error => { if (error.code !== 'ENOENT') throw error; }); }
}
async function passwordHash(password) {
  const salt = randomBytes(16).toString('hex');
  const key = await derive(password, salt, 64, { N: 16384, r: 8, p: 1 });
  return `scrypt$${salt}$${key.toString('hex')}`;
}
async function passwordMatches(password, encoded) {
  const [, salt, expected] = encoded.split('$');
  const key = await derive(password, salt, 64, { N: 16384, r: 8, p: 1 });
  return timingSafeEqual(key, Buffer.from(expected, 'hex'));
}
function safeName(value) {
  if (typeof value !== 'string') fail(400, 'invalid_name', 'Укажите имя файла.');
  const cleaned = Buffer.from(value, 'utf8').toString('utf8').normalize('NFC').replace(/[\\/\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069<>:"|?*]/g, '_').trim().replace(/^\.+|[. ]+$/g, '');
  const name = Array.from(cleaned).slice(0, 180).join('');
  if (!name) fail(400, 'invalid_name', 'Недопустимое имя файла.');
  return name;
}
function username(value) {
  if (typeof value !== 'string' || !/^[a-zA-Z0-9_.-]{3,50}$/.test(value)) fail(400, 'invalid_username', 'Логин: 3–50 латинских букв, цифр или знаков . _ -');
  return value.toLowerCase();
}
const publicUser = user => ({ id: user.id, username: user.username, role: user.role, disabled: user.disabled, createdAt: user.createdAt });

class ImagingStore {
  constructor(options = {}) {
    this.root = path.resolve(options.root || process.env.IMAGING_DATA_DIR || path.join(process.cwd(), '..', 'altamed-imaging-private'));
    this.testMode = options.testMode ?? (process.env.IMAGING_TEST_MODE === '1' || (process.env.IMAGING_TEST_MODE !== '0' && process.env.NODE_ENV !== 'production'));
    this.quota = options.quota || Number(process.env.IMAGING_QUOTA_BYTES || 10 * 1024 ** 3);
    this.reserve = options.reserve ?? 512 * 1024 ** 2;
    this.ready = null;
  }
  p(...parts) { return path.join(this.root, ...parts); }
  async init() {
    if (!this.ready) this.ready = this.initialize().catch(error => { this.ready = null; throw error; });
    await this.ready;
  }
  async initialize() {
    const project = path.resolve(process.cwd());
    const inProject = candidate => {
      const relative = path.relative(project, candidate);
      return !relative || (relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative));
    };
    if (inProject(this.root) || !Number.isSafeInteger(this.quota) || this.quota < MAX_FILE_SIZE) fail(503, 'storage_config', 'Хранилище должно находиться вне папки проекта; проверьте квоту.');
    await fs.mkdir(this.root, { recursive: true, mode: 0o700 });
    const real = await fs.realpath(this.root);
    if (inProject(real)) fail(503, 'storage_config', 'Закрытое хранилище не может находиться внутри проекта.');
    for (const folder of ['locks', 'uploads', 'partials', 'files', 'blobs', 'sessions', 'limits', 'keys']) {
      await fs.mkdir(this.p(folder), { recursive: true, mode: 0o700 });
      if ((await fs.lstat(this.p(folder))).isSymbolicLink()) fail(503, 'storage_config', 'Ссылки на папки в хранилище запрещены.');
    }
    await this.lock('accounts', async () => {
      const existingUsers = await readJson(this.p('users.json'));
      if (existingUsers) {
        // Moving the test store to production must not silently preserve root/root access.
        if (!this.testMode) for (const user of existingUsers.filter(user => !user.disabled)) {
          if (await passwordMatches('root', user.password)) fail(503, 'test_credentials', 'Сначала замените тестовый пароль root через локальную команду reset-password.');
        }
        return;
      }
      const login = username(process.env.IMAGING_BOOTSTRAP_USER || 'root');
      const password = process.env.IMAGING_BOOTSTRAP_PASSWORD || (this.testMode ? 'root' : '');
      if (!password || (!this.testMode && (password.length < 12 || password === 'root'))) fail(503, 'bootstrap_required', 'Перед запуском задайте IMAGING_BOOTSTRAP_PASSWORD (не менее 12 символов).');
      await atomicJson(this.p('users.json'), [{ id: randomUUID(), username: login, password: await passwordHash(password), role: 'admin', disabled: false, createdAt: new Date().toISOString() }]);
      await atomicJson(this.p('tokens.json'), []);
    });
  }
  async lock(key, action) {
    const folder = this.p('locks', digest(key));
    const owner = { pid: process.pid, host: os.hostname(), nonce: randomUUID() };
    const started = Date.now();
    while (true) {
      try { await fs.mkdir(folder, { mode: 0o700 }); break; }
      catch (error) {
        if (error.code !== 'EEXIST') throw error;
        const previous = await readJson(path.join(folder, 'owner.json'));
        let dead = false;
        if (previous?.host === os.hostname()) {
          try { process.kill(previous.pid, 0); } catch (error) { dead = error.code === 'ESRCH'; }
        } else if (!previous) {
          try { dead = Date.now() - (await fs.stat(folder)).mtimeMs > 30000; } catch { /* another worker released it */ }
        }
        if (dead) {
          // Serialize reclamation: two surviving workers must never remove a new worker's lock.
          const guard = folder + '.reclaim';
          let acquired = false;
          try { await fs.mkdir(guard, { mode: 0o700 }); acquired = true; }
          catch (error) { if (error.code !== 'EEXIST') throw error; }
          if (acquired) {
            try {
              const latest = await readJson(path.join(folder, 'owner.json'));
              let stillDead = false;
              if (latest?.host === os.hostname()) {
                try { process.kill(latest.pid, 0); } catch (error) { stillDead = error.code === 'ESRCH'; }
              } else if (!latest) {
                try { stillDead = Date.now() - (await fs.stat(folder)).mtimeMs > 30000; } catch { /* released */ }
              }
              if (stillDead) await fs.rm(folder, { recursive: true, force: true });
            } finally { await fs.rmdir(guard); }
          }
          await delay(40); continue;
        }
        if (Date.now() - started > 15000) fail(423, 'busy', 'Операция уже выполняется. Повторите запрос.');
        await delay(40);
      }
    }
    try { await atomicJson(path.join(folder, 'owner.json'), owner); return await action(); }
    finally {
      const current = await readJson(path.join(folder, 'owner.json'));
      if (!current || current.nonce === owner.nonce) await fs.rm(folder, { recursive: true, force: true });
    }
  }
  async audit(event, actor, details = {}) {
    await this.init();
    await this.lock('audit', async () => {
      const file = this.p('audit.jsonl');
      const size = await fs.stat(file).then(s => s.size).catch(error => { if (error.code === 'ENOENT') return 0; throw error; });
      if (size > 10 * 1024 ** 2) {
        await fs.unlink(this.p('audit.5.jsonl')).catch(error => { if (error.code !== 'ENOENT') throw error; });
        for (let i = 4; i >= 1; i--) await fs.rename(this.p(`audit.${i}.jsonl`), this.p(`audit.${i + 1}.jsonl`)).catch(error => { if (error.code !== 'ENOENT') throw error; });
        await fs.rename(file, this.p('audit.1.jsonl'));
      }
      const allowed = {};
      // Never log credentials, original names, search text, bodies or arbitrary errors.
      for (const key of ['uploadId', 'fileId', 'size', 'offset', 'code', 'targetId']) if (details[key] !== undefined) allowed[key] = String(details[key]).slice(0, 100);
      await fs.appendFile(file, JSON.stringify({ at: new Date().toISOString(), event, actor: actor?.id || 'anonymous', ...allowed }) + '\n', { mode: 0o600 });
    });
  }
  async limited(key, maximum, window = 15 * 60 * 1000) {
    return this.lock('rate:' + key, async () => {
      const file = this.p('limits', digest(key) + '.json');
      let record = await readJson(file);
      if (!record || record.until <= Date.now()) record = { count: 0, until: Date.now() + window };
      if (record.count >= maximum) fail(429, 'rate_limited', 'Слишком много попыток. Повторите позже.');
      record.count++;
      await atomicJson(file, record);
    });
  }
  async login(login, password, address = 'local') {
    await this.init();
    if (typeof password !== 'string' || password.length > 256 || typeof login !== 'string' || login.length > 100) fail(401, 'invalid_login', 'Неверный логин или пароль.');
    await this.limited('login-address:' + address, 50);
    await this.limited('login-user:' + login.toLowerCase(), 20);
    const users = await readJson(this.p('users.json'));
    const user = users.find(item => item.username === login.toLowerCase());
    const valid = await passwordMatches(password, (user || users[0]).password);
    if (!user || user.disabled || !valid) { await this.audit('login_failed', null); fail(401, 'invalid_login', 'Неверный логин или пароль.'); }
    const token = randomBytes(32).toString('hex');
    await atomicJson(this.p('sessions', digest(token) + '.json'), { userId: user.id, expiresAt: Date.now() + SESSION_MS });
    await this.audit('login', user);
    return { token, user: publicUser(user) };
  }
  async session(token) {
    await this.init();
    if (typeof token !== 'string' || !HASH.test(token)) return null;
    const record = await readJson(this.p('sessions', digest(token) + '.json'));
    if (!record || record.expiresAt <= Date.now()) return null;
    const users = await readJson(this.p('users.json'));
    const user = users.find(item => item.id === record.userId && !item.disabled);
    return user ? publicUser(user) : null;
  }
  async logout(token) {
    if (HASH.test(token || '')) await fs.unlink(this.p('sessions', digest(token) + '.json')).catch(error => { if (error.code !== 'ENOENT') throw error; });
  }
  async users() { await this.init(); return (await readJson(this.p('users.json'))).map(publicUser); }
  async createUser(login, password, role = 'staff') {
    await this.init();
    const name = username(login);
    if (typeof password !== 'string' || password.length < 10 || password.length > 256) fail(400, 'weak_password', 'Пароль сотрудника должен содержать от 10 до 256 символов.');
    if (!['admin', 'staff'].includes(role)) fail(400, 'invalid_role', 'Неизвестная роль.');
    return this.lock('accounts', async () => {
      const users = await readJson(this.p('users.json'));
      if (users.length >= 200) fail(409, 'user_limit', 'Достигнут лимит сотрудников.');
      if (users.some(user => user.username === name)) fail(409, 'user_exists', 'Такой логин уже существует.');
      const user = { id: randomUUID(), username: name, password: await passwordHash(password), role, disabled: false, createdAt: new Date().toISOString() };
      users.push(user); await atomicJson(this.p('users.json'), users); return publicUser(user);
    });
  }
  async updateUser(id, update, actor) {
    await this.init();
    return this.lock('accounts', async () => {
      const users = await readJson(this.p('users.json'));
      const user = users.find(item => item.id === id);
      if (!user) fail(404, 'not_found', 'Сотрудник не найден.');
      if (typeof update.disabled === 'boolean') {
        if (update.disabled && (id === actor?.id || (user.role === 'admin' && !users.some(item => item.id !== id && item.role === 'admin' && !item.disabled)))) fail(409, 'last_admin', 'Нельзя отключить себя или последнего администратора.');
        user.disabled = update.disabled;
      }
      if (update.password !== undefined) {
        if (typeof update.password !== 'string' || update.password.length < 10 || update.password.length > 256) fail(400, 'weak_password', 'Новый пароль: не менее 10 символов.');
        user.password = await passwordHash(update.password);
      }
      await atomicJson(this.p('users.json'), users);
      // Revoke sessions after password reset or disable, even if the user is later re-enabled.
      if (update.password !== undefined || update.disabled === true) for (const name of await fs.readdir(this.p('sessions'))) {
        if (!HASH.test(name.replace(/\.json$/, ''))) continue;
        const file = this.p('sessions', name);
        if ((await readJson(file))?.userId === id) await fs.unlink(file).catch(error => { if (error.code !== 'ENOENT') throw error; });
      }
      return publicUser(user);
    });
  }
  async tokens() { await this.init(); return (await readJson(this.p('tokens.json'))).map(({ hash, ...token }) => token); }
  async createToken(label) {
    await this.init();
    const name = safeName(label);
    return this.lock('accounts', async () => {
      const tokens = await readJson(this.p('tokens.json'));
      if (tokens.filter(token => !token.revoked).length >= 100) fail(409, 'token_limit', 'Достигнут лимит токенов.');
      const token = 'img_' + randomBytes(32).toString('hex');
      const record = { id: randomUUID(), label: name, hash: digest(token), createdAt: new Date().toISOString(), revoked: false };
      tokens.push(record); await atomicJson(this.p('tokens.json'), tokens);
      return { id: record.id, label: name, token };
    });
  }
  async revokeToken(id) {
    await this.init();
    await this.lock('accounts', async () => {
      const tokens = await readJson(this.p('tokens.json'));
      const token = tokens.find(item => item.id === id);
      if (!token) fail(404, 'not_found', 'Токен не найден.');
      token.revoked = true; await atomicJson(this.p('tokens.json'), tokens);
    });
  }
  async uploader(token) {
    await this.init();
    if (typeof token !== 'string' || !/^img_[a-f0-9]{64}$/.test(token)) return null;
    const hashed = digest(token);
    const item = (await readJson(this.p('tokens.json'))).find(item => !item.revoked && item.hash === hashed);
    return item ? { id: 'token:' + item.id, role: 'uploader' } : null;
  }
  async file(id) {
    if (!HASH.test(id || '')) fail(404, 'not_found', 'Файл не найден.');
    const item = await readJson(this.p('files', id + '.json'));
    if (!item) fail(404, 'not_found', 'Файл не найден.');
    return item;
  }
  async listFiles(query = '', page = 1) {
    await this.init();
    const items = [];
    for (const name of await fs.readdir(this.p('files'))) if (/^[a-f0-9]{64}\.json$/.test(name)) {
      const item = await readJson(this.p('files', name));
      if (item) items.push(item);
    }
    const totalBytes = items.reduce((sum, item) => sum + item.size, 0);
    const filtered = items.filter(item => item.name.toLocaleLowerCase('ru').includes(String(query).slice(0, 180).toLocaleLowerCase('ru'))).sort((a, b) => b.createdAt.localeCompare(a.createdAt) || a.id.localeCompare(b.id));
    const pages = Math.max(1, Math.ceil(filtered.length / 20));
    const current = Math.max(1, Math.min(pages, Number.isSafeInteger(page) ? page : 1));
    return { files: filtered.slice((current - 1) * 20, current * 20), page: current, pages, total: filtered.length, archiveCount: items.length, totalBytes, quotaBytes: this.quota };
  }
  async createUpload(actor, input) {
    await this.init();
    const name = safeName(input.name);
    const { size, sha256 } = input;
    if (!Number.isSafeInteger(size) || size < 1 || size > MAX_FILE_SIZE) fail(413, 'size_limit', 'Размер файла должен быть от 1 байта до 400 МиБ (419430400 байт).');
    if (typeof sha256 !== 'string' || !HASH.test(sha256)) fail(400, 'invalid_hash', 'Нужна контрольная сумма SHA-256 в нижнем регистре.');
    await this.limited('uploads:' + actor.id, 120, 60000);
    await this.cleanup();
    return this.lock('catalog', async () => {
      const existing = await readJson(this.p('files', sha256 + '.json'));
      if (existing) {
        if (existing.size !== size) fail(409, 'size_mismatch', 'Размер не совпадает с контрольной суммой.');
        await this.audit('upload_duplicate_detected', actor, { fileId: existing.id, size });
        return { status: 'complete', fileId: existing.id, duplicate: true, offset: size, size };
      }
      const key = digest(actor.id + ':' + sha256);
      const previous = await readJson(this.p('keys', key + '.json'));
      if (previous) {
        const upload = await readJson(this.p('uploads', previous.id + '.json'));
        if (upload && upload.status === 'pending' && upload.expiresAt > Date.now()) {
          if (upload.size !== size) fail(409, 'size_mismatch', 'Размер не совпадает с начатой загрузкой.');
          return this.uploadResult(upload);
        }
      }
      let allocated = 0, active = 0, owned = 0;
      const archiveFiles = (await fs.readdir(this.p('files'))).filter(file => /^[a-f0-9]{64}\.json$/.test(file));
      if (archiveFiles.length >= 10000) fail(409, 'catalog_limit', 'Достигнут лимит 10000 файлов в архиве.');
      for (const file of archiveFiles) allocated += (await readJson(this.p('files', file))).size;
      for (const file of await fs.readdir(this.p('uploads'))) if (UUID.test(file.replace(/\.json$/, ''))) {
        const upload = await readJson(this.p('uploads', file));
        if (upload?.status === 'pending') { allocated += upload.size; active++; if (upload.owner === actor.id) owned++; }
      }
      if (owned >= 10 || active >= 100) fail(429, 'upload_limit', 'Слишком много незавершённых загрузок.');
      if (allocated + size > this.quota) fail(507, 'quota_exceeded', 'Недостаточно места в квоте архива.');
      const disk = await fs.statfs(this.root);
      if (Number(disk.bavail) * Number(disk.bsize) < size + this.reserve) fail(507, 'disk_full', 'Недостаточно свободного места на диске.');
      const upload = { id: randomUUID(), owner: actor.id, name, size, sha256, offset: 0, status: 'pending', createdAt: new Date().toISOString(), expiresAt: Date.now() + UPLOAD_MS };
      const body = await fs.open(this.p('partials', upload.id + '.part'), 'wx', 0o600); await body.close();
      await atomicJson(this.p('uploads', upload.id + '.json'), upload);
      await atomicJson(this.p('keys', key + '.json'), { id: upload.id });
      await this.audit('upload_created', actor, { uploadId: upload.id, size });
      return this.uploadResult(upload);
    });
  }
  uploadResult(upload) { return { id: upload.id, status: upload.status, offset: upload.offset, size: upload.size, expiresAt: new Date(upload.expiresAt).toISOString(), ...(upload.fileId ? { fileId: upload.fileId, duplicate: Boolean(upload.duplicate) } : {}) }; }
  async upload(actor, id) {
    if (!UUID.test(id || '')) fail(404, 'not_found', 'Загрузка не найдена.');
    const upload = await readJson(this.p('uploads', id + '.json'));
    if (!upload || upload.owner !== actor.id) fail(404, 'not_found', 'Загрузка не найдена.');
    if (upload.status === 'pending' && upload.expiresAt <= Date.now()) fail(410, 'upload_expired', 'Время загрузки истекло. Начните заново.');
    return upload;
  }
  async append(actor, id, offset, source, declaredLength) {
    return this.lock('upload:' + id, async () => {
      const upload = await this.upload(actor, id);
      if (upload.status !== 'pending') fail(409, 'upload_closed', 'Загрузка уже завершена или отменена.');
      if (!Number.isSafeInteger(offset) || offset !== upload.offset) fail(409, 'offset_mismatch', 'Смещение не совпало. Запросите текущее состояние загрузки.');
      if (declaredLength !== null && (!Number.isSafeInteger(declaredLength) || declaredLength < 1 || declaredLength > CHUNK_SIZE || offset + declaredLength > upload.size)) fail(413, 'chunk_limit', 'Размер части превышает допустимый.');
      const handle = await fs.open(this.p('partials', id + '.part'), constants.O_RDWR | (constants.O_NOFOLLOW || 0));
      let received = 0;
      try {
        if ((await handle.stat()).size < offset) fail(409, 'upload_corrupt', 'Временный файл повреждён. Начните загрузку заново.');
        await handle.truncate(offset); // Discard an uncommitted tail left by a crashed worker.
        for await (const bytes of source) {
          const chunk = Buffer.from(bytes);
          received += chunk.length;
          if (received > CHUNK_SIZE || offset + received > upload.size) fail(413, 'chunk_limit', 'Превышен допустимый размер части или файла.');
          let written = 0;
          while (written < chunk.length) {
            const result = await handle.write(chunk, written, chunk.length - written, offset + received - chunk.length + written);
            if (!result.bytesWritten) throw new Error('short_write');
            written += result.bytesWritten;
          }
        }
        if (!received || (declaredLength !== null && received !== declaredLength)) fail(400, 'incomplete_chunk', 'Часть файла получена не полностью. Повторите её.');
        await handle.sync();
        upload.offset += received;
        upload.expiresAt = Date.now() + UPLOAD_MS;
        await atomicJson(this.p('uploads', id + '.json'), upload);
      } catch (error) {
        // A rename may already be committed when a subsequent directory fsync reports an error.
        // Never truncate bytes whose new offset was actually saved.
        const saved = await readJson(this.p('uploads', id + '.json')).catch(() => null);
        if (saved?.offset === offset) { await handle.truncate(offset); await handle.sync(); }
        await this.audit('upload_chunk_failed', actor, { uploadId: id, offset, code: error.code || 'interrupted' });
        throw error;
      } finally { await handle.close(); }
      return this.uploadResult(upload);
    });
  }
  async complete(actor, id) {
    return this.lock('upload:' + id, async () => {
      const upload = await this.upload(actor, id);
      if (upload.status === 'complete') return this.uploadResult(upload);
      if (upload.status !== 'pending' || upload.offset !== upload.size) fail(409, 'upload_incomplete', 'Файл ещё не загружен полностью.');
      let body = this.p('partials', id + '.part');
      try { await fs.access(body); } catch (error) {
        if (error.code !== 'ENOENT') throw error;
        body = this.p('blobs', upload.sha256 + '.bin'); // Recover a crash after rename but before committing metadata.
      }
      const hash = createHash('sha256'); let count = 0;
      for await (const bytes of createReadStream(body, { highWaterMark: 256 * 1024 })) { hash.update(bytes); count += bytes.length; }
      if (count !== upload.size || hash.digest('hex') !== upload.sha256) {
        await this.audit('upload_checksum_failed', actor, { uploadId: id });
        fail(422, 'checksum_mismatch', 'Контрольная сумма не совпала. Отмените загрузку и повторите передачу.');
      }
      return this.lock('catalog', async () => {
        const metaFile = this.p('files', upload.sha256 + '.json');
        let file = await readJson(metaFile);
        const duplicate = Boolean(file);
        const target = this.p('blobs', upload.sha256 + '.bin');
        if (!file) {
          if (body !== target) await fs.rename(body, target);
          file = { id: upload.sha256, name: upload.name, size: upload.size, sha256: upload.sha256, createdAt: new Date().toISOString(), uploadedBy: actor.id, mime: await sniff(target) };
          await atomicJson(metaFile, file);
        } else if (body !== target) await fs.unlink(body).catch(error => { if (error.code !== 'ENOENT') throw error; });
        upload.status = 'complete'; upload.fileId = file.id; upload.duplicate = duplicate;
        await atomicJson(this.p('uploads', id + '.json'), upload);
        await this.audit(duplicate ? 'upload_duplicate' : 'upload_complete', actor, { uploadId: id, fileId: file.id, size: file.size });
        return this.uploadResult(upload);
      });
    });
  }
  async cancel(actor, id) {
    return this.lock('upload:' + id, async () => {
      const upload = await this.upload(actor, id);
      if (upload.status !== 'pending') fail(409, 'upload_closed', 'Загрузка уже завершена или отменена.');
      upload.status = 'cancelled';
      await atomicJson(this.p('uploads', id + '.json'), upload);
      await fs.unlink(this.p('partials', id + '.part')).catch(error => { if (error.code !== 'ENOENT') throw error; });
      await this.audit('upload_cancelled', actor, { uploadId: id });
    });
  }
  async cleanup() {
    await this.init();
    let removed = 0;
    for (const filename of await fs.readdir(this.p('uploads'))) {
      const id = filename.replace(/\.json$/, ''); if (!UUID.test(id)) continue;
      const initial = await readJson(this.p('uploads', filename));
      if (initial?.status !== 'pending' || initial.expiresAt > Date.now()) continue;
      await this.lock('upload:' + id, async () => {
        const record = await readJson(this.p('uploads', filename));
        if (record?.status !== 'pending' || record.expiresAt > Date.now()) return;
        record.status = 'expired'; await atomicJson(this.p('uploads', filename), record);
        await fs.unlink(this.p('partials', id + '.part')).catch(error => { if (error.code !== 'ENOENT') throw error; });
        removed++;
      });
    }
    for (const folder of ['sessions', 'limits']) for (const name of await fs.readdir(this.p(folder))) {
      if (!/^[a-f0-9]{64}\.json$/.test(name)) continue;
      const filename = this.p(folder, name), item = await readJson(filename);
      if (item && (item.expiresAt || item.until) < Date.now()) await fs.unlink(filename).catch(error => { if (error.code !== 'ENOENT') throw error; });
    }
    if (removed) await this.audit('uploads_expired', null, { size: removed });
    return removed;
  }
}

async function sniff(filename) {
  const handle = await fs.open(filename, 'r');
  try {
    const header = Buffer.alloc(16); const { bytesRead } = await handle.read(header, 0, 16, 0);
    if (bytesRead >= 8 && header.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) return 'image/png';
    if (bytesRead >= 3 && header[0] === 255 && header[1] === 216 && header[2] === 255) return 'image/jpeg';
    if (/^GIF8[79]a/.test(header.toString('ascii', 0, 6))) return 'image/gif';
    if (header.toString('ascii', 0, 4) === 'RIFF' && header.toString('ascii', 8, 12) === 'WEBP') return 'image/webp';
    if (header.toString('ascii', 0, 5) === '%PDF-') return 'application/pdf';
    return 'application/octet-stream';
  } finally { await handle.close(); }
}

module.exports = { ImagingStore, ImagingError, MAX_FILE_SIZE, CHUNK_SIZE, SESSION_MS, COOKIE, safeName, atomicJson, digest };
