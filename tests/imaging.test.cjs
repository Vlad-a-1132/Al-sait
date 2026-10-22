'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const { createHash } = require('node:crypto');
const { ImagingStore, MAX_FILE_SIZE, atomicJson, safeName } = require('../src/lib/imaging/store.cjs');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const bytes = async function* (value) { yield value; };

function loader() {
  const cache = new Map();
  function load(filename) {
    filename = path.resolve(filename);
    if (cache.has(filename)) return cache.get(filename).exports;
    const module = { exports: {} }; cache.set(filename, module);
    const localRequire = name => {
      if (name.startsWith('@/')) return load(path.join('src', name.slice(2) + '.ts'));
      if (name.endsWith('.cjs')) return require(path.resolve(path.dirname(filename), name));
      if (name.startsWith('.')) return load(path.resolve(path.dirname(filename), name + '.ts'));
      return require(name);
    };
    const code = ts.transpileModule(require('node:fs').readFileSync(filename, 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText;
    vm.runInNewContext(code, { module, exports: module.exports, require: localRequire, process, console, Buffer, URL, URLSearchParams, Headers, Request, Response, Date, Error, SyntaxError, Number, JSON, Uint8Array, ReadableStream, TextDecoder, setTimeout, clearTimeout }, { filename });
    return module.exports;
  }
  return load;
}

test('imaging: server authorization, durable resumable upload and private content', async t => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'altamed-imaging-test-'));
  const oldDir = process.env.IMAGING_DATA_DIR, oldMode = process.env.IMAGING_TEST_MODE;
  process.env.IMAGING_DATA_DIR = directory; process.env.IMAGING_TEST_MODE = '1';
  const load = loader(), routes = load('src/app/api/imaging/[[...path]]/route.ts');
  const store = new ImagingStore({ root: directory, testMode: true, reserve: 0 });
  let cookie, token, staffCookie, admin, staffId;
  const call = (route, options = {}) => {
    const { method = 'GET', body, auth = cookie, headers = {} } = options;
    const requestHeaders = { host: 'localhost:3136', ...headers };
    if (auth?.startsWith('img_')) requestHeaders.authorization = 'Bearer ' + auth;
    else if (auth) requestHeaders.cookie = auth;
    let data = body;
    if (body && !Buffer.isBuffer(body)) { data = JSON.stringify(body); requestHeaders['content-type'] = 'application/json'; }
    if (!['GET', 'HEAD'].includes(method) && !auth?.startsWith('img_')) { requestHeaders.origin = 'http://localhost:3136'; requestHeaders['x-imaging-request'] = '1'; }
    const request = new Request('http://localhost:3136/api/imaging/' + route, { method, headers: requestHeaders, ...(data !== undefined ? { body: data } : {}) });
    return routes[method](request, { params: { path: route.split('/') } });
  };
  const result = async response => ({ status: response.status, body: await response.json() });
  try {
    await t.test('login is server-side, opaque and HttpOnly; wrong password is rejected', async () => {
      assert.equal((await call('files', { auth: null })).status, 401);
      assert.equal((await call('session', { method: 'POST', auth: null, body: { username: 'root', password: 'wrong' } })).status, 401);
      const response = await call('session', { method: 'POST', auth: null, body: { username: 'root', password: 'root' } });
      assert.equal(response.status, 200); const setCookie = response.headers.get('set-cookie');
      assert.match(setCookie, /HttpOnly/i); assert.match(setCookie, /SameSite=strict/i);
      cookie = setCookie.split(';')[0]; admin = (await response.json()).user;
      assert(!cookie.includes('root')); assert.equal(admin.role, 'admin');
      const saved = await fs.readFile(path.join(directory, 'users.json'), 'utf8'); assert(!saved.includes('"password":"root"')); assert.match(saved, /scrypt\$/);
    });
    await t.test('CSRF rejected and staff has no administration privileges', async () => {
      const request = new Request('http://localhost:3136/api/imaging/tokens', { method: 'POST', headers: { cookie, 'content-type': 'application/json' }, body: '{"label":"bad"}' });
      assert.equal((await routes.POST(request, { params: { path: ['tokens'] } })).status, 403);
      const response = await result(await call('staff', { method: 'POST', body: { username: 'test-staff', password: 'Test-Password-123', role: 'staff' } }));
      assert.equal(response.status, 201); staffId = response.body.user.id;
      const login = await call('session', { method: 'POST', auth: null, body: { username: 'test-staff', password: 'Test-Password-123' } });
      staffCookie = login.headers.get('set-cookie').split(';')[0];
      assert.equal((await call('files', { auth: staffCookie })).status, 200);
      assert.equal((await call('staff', { auth: staffCookie })).status, 403);
      assert.equal((await call('tokens', { auth: staffCookie, method: 'POST', body: { label: 'no' } })).status, 403);
      assert.equal((await call('staff/' + admin.id, { method: 'PATCH', body: { disabled: true } })).status, 409);
    });
    await t.test('uploader token can only upload and tokens are stored as hashes', async () => {
      const response = await result(await call('tokens', { method: 'POST', body: { label: 'test-transmitter' } }));
      assert.equal(response.status, 201); token = response.body;
      assert(!String(await fs.readFile(path.join(directory, 'tokens.json'))).includes(token.token));
      for (const route of ['files', 'staff', 'tokens', 'session', 'pdf-assets/worker/pdf.worker.min.mjs', 'files/' + 'a'.repeat(64) + '/content']) assert.equal((await call(route, { auth: token.token })).status, 403, route);
      assert.equal((await call('pdf-assets/worker/pdf.worker.min.mjs', { auth: null })).status, 401);
      const worker = await call('pdf-assets/worker/pdf.worker.min.mjs', { auth: staffCookie });
      assert.equal(worker.status, 200); assert.equal(worker.headers.get('content-type'), 'text/javascript');
      await worker.body.cancel();
    });
    const data = Buffer.from('TEST ONLY: protected file, no patient data.');
    let upload, fileId;
    await t.test('pending uploads are hidden, offsets checked, names normalized and size limited', async () => {
      assert.equal((await call('uploads', { method: 'POST', auth: token.token, body: { name: 'too-big', size: MAX_FILE_SIZE + 1, sha256: hash(data) } })).status, 413);
      assert.equal((await call('uploads', { method: 'POST', auth: token.token, body: { name: 'empty', size: 0, sha256: hash(data) } })).status, 413);
      const response = await result(await call('uploads', { method: 'POST', auth: token.token, body: { name: '../../TEST\r\n.html', size: data.length, sha256: hash(data) } }));
      assert.equal(response.status, 201); upload = response.body;
      assert.equal((await (await call('files')).json()).total, 0);
      const early = await call('uploads/' + upload.id + '/complete', { method: 'POST', auth: token.token }); assert.equal(early.status, 409);
      const mismatch = await call('uploads/' + upload.id, { method: 'PATCH', auth: token.token, headers: { 'content-type': 'application/offset+octet-stream', 'upload-offset': '1' }, body: data.subarray(0, 5) });
      assert.equal(mismatch.status, 409);
      const next = await call('uploads/' + upload.id, { method: 'PATCH', auth: token.token, headers: { 'content-type': 'application/offset+octet-stream', 'upload-offset': '0' }, body: data.subarray(0, 10) }); assert.equal(next.status, 204);
    });
    await t.test('interrupted chunk rolls back and a restarted store resumes committed bytes', async () => {
      const actor = await store.uploader(token.token);
      async function* interrupted() { yield data.subarray(10, 15); throw new Error('simulated network interruption'); }
      await assert.rejects(store.append(actor, upload.id, 10, interrupted(), null));
      assert.equal((await fs.stat(path.join(directory, 'partials', upload.id + '.part'))).size, 10);
      // Simulated process death: uncommitted tail is not a valid offset.
      await fs.appendFile(path.join(directory, 'partials', upload.id + '.part'), Buffer.from('uncommitted'));
      const restarted = new ImagingStore({ root: directory, testMode: true, reserve: 0 }); await restarted.init();
      assert.equal((await restarted.upload(actor, upload.id)).offset, 10);
      await restarted.append(actor, upload.id, 10, bytes(data.subarray(10)), data.length - 10);
      const done = await restarted.complete(actor, upload.id); fileId = done.fileId; assert.equal(done.status, 'complete');
      assert.equal((await restarted.complete(actor, upload.id)).fileId, fileId);
      const file = await restarted.file(fileId); assert(!/[\\/\r\n]/.test(file.name)); assert.equal(file.mime, 'application/octet-stream');
    });
    await t.test('protected download, exact bytes, range, HEAD and HTML forced as attachment', async () => {
      assert.equal((await call('files/' + fileId + '/content', { auth: null })).status, 401);
      const response = await call('files/' + fileId + '/content');
      assert.equal(response.status, 200); assert.match(response.headers.get('content-disposition'), /^attachment;/);
      assert.match(response.headers.get('cache-control'), /no-store/); assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
      assert.match(response.headers.get('content-security-policy'), /sandbox/);
      assert.deepEqual(Buffer.from(await response.arrayBuffer()), data);
      const partial = await call('files/' + fileId + '/content', { headers: { range: 'bytes=3-9' } });
      assert.equal(partial.status, 206); assert.deepEqual(Buffer.from(await partial.arrayBuffer()), data.subarray(3, 10));
      assert.equal((await call('files/' + fileId + '/content', { headers: { range: 'bytes=999-1000' } })).status, 416);
      assert.equal((await call('files/' + fileId + '/content', { method: 'HEAD' })).headers.get('content-length'), String(data.length));
    });
    await t.test('duplicate detection and upload ownership survive a second instance', async () => {
      const again = await result(await call('uploads', { method: 'POST', auth: token.token, body: { name: 'renamed.bin', size: data.length, sha256: hash(data) } }));
      assert.equal(again.body.duplicate, true); assert.equal(again.body.fileId, fileId);
      assert.equal((await (await call('files')).json()).archiveCount, 1);
      const other = (await result(await call('tokens', { method: 'POST', body: { label: 'other-transmitter' } }))).body;
      assert.equal((await call('uploads/' + upload.id, { auth: other.token })).status, 404);
    });
    await t.test('checksum failure never appears in archive; expiry removes the partial', async () => {
      const actor = await store.uploader(token.token), bad = Buffer.from('incorrect content');
      const pending = await store.createUpload(actor, { name: 'bad.bin', size: bad.length, sha256: hash(Buffer.alloc(bad.length, 1)) });
      await store.append(actor, pending.id, 0, bytes(bad), bad.length);
      await assert.rejects(store.complete(actor, pending.id), error => error.status === 422);
      assert.equal((await store.listFiles()).archiveCount, 1);
      const recordPath = path.join(directory, 'uploads', pending.id + '.json');
      const record = JSON.parse(await fs.readFile(recordPath, 'utf8')); record.expiresAt = Date.now() - 1; await atomicJson(recordPath, record);
      assert.equal(await store.cleanup(), 1);
      await assert.rejects(fs.stat(path.join(directory, 'partials', pending.id + '.part')), error => error.code === 'ENOENT');
    });
    await t.test('concurrent chunks at the same offset cannot corrupt an upload', async () => {
      const actor = await store.uploader(token.token), data = Buffer.from('concurrent test');
      const pending = await store.createUpload(actor, { name: 'concurrent.bin', size: data.length, sha256: hash(data) });
      const attempts = await Promise.allSettled([store.append(actor, pending.id, 0, bytes(data), data.length), store.append(actor, pending.id, 0, bytes(data), data.length)]);
      assert.equal(attempts.filter(item => item.status === 'fulfilled').length, 1);
      assert.equal(attempts.find(item => item.status === 'rejected').reason.status, 409);
      await store.complete(actor, pending.id);
    });
    await t.test('disable revokes existing sessions, including after re-enable; token revocation immediate', async () => {
      await call('staff/' + staffId, { method: 'PATCH', body: { disabled: true } });
      assert.equal((await call('files', { auth: staffCookie })).status, 401);
      await call('staff/' + staffId, { method: 'PATCH', body: { disabled: false } });
      assert.equal((await call('files', { auth: staffCookie })).status, 401);
      await call('tokens/' + token.id, { method: 'DELETE' });
      assert.equal((await call('uploads/' + upload.id, { auth: token.token })).status, 401);
      await call('session', { method: 'DELETE' });
      assert.equal((await call('files')).status, 401);
      const log = await fs.readFile(path.join(directory, 'audit.jsonl'), 'utf8');
      assert(!log.includes('Test-Password-123')); assert(!log.includes(token.token)); assert(!log.includes('TEST\r\n.html'));
      assert.match(log, /upload_complete/); assert.match(log, /upload_chunk_failed/);
    });
    await t.test('store rejects any storage directory inside the public project', async () => {
      const bad = new ImagingStore({ root: path.join(process.cwd(), 'public', 'private-files') });
      await assert.rejects(bad.init(), error => error.code === 'storage_config');
    });
    await t.test('production refuses a test store with root/root and malformed Unicode cannot break download headers', async () => {
      const strict = new ImagingStore({ root: directory, testMode: false });
      await assert.rejects(strict.init(), error => error.code === 'test_credentials');
      assert.doesNotThrow(() => encodeURIComponent(safeName('test\ud800-file.png')));
      assert.doesNotThrow(() => encodeURIComponent(safeName('😺'.repeat(200))));
    });
  } finally {
    oldDir === undefined ? delete process.env.IMAGING_DATA_DIR : process.env.IMAGING_DATA_DIR = oldDir;
    oldMode === undefined ? delete process.env.IMAGING_TEST_MODE : process.env.IMAGING_TEST_MODE = oldMode;
    // Only the mkdtemp directory created by this test, outside the project, is removed.
    assert(path.resolve(directory).startsWith(path.resolve(os.tmpdir()) + path.sep));
    await fs.rm(directory, { recursive: true, force: true });
  }
});
