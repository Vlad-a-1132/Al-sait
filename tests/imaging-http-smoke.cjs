'use strict';

// Explicit, slower integration check. Starts/stops ONLY its own localhost Next process.
// Leaves a clearly named 400 MiB TEST file in the LOCAL archive for manual review.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const net = require('node:net');
const http = require('node:http');
const { spawn, execFileSync } = require('node:child_process');
const { randomUUID, createHash } = require('node:crypto');
const { MAX_FILE_SIZE, CHUNK_SIZE } = require('../src/lib/imaging/store.cjs');
const base = 'http://127.0.0.1:3137';
const storeRoot = path.resolve(process.cwd(), '..', 'altamed-imaging-private');
const output = path.resolve('tmp', 'imaging-check-20261022');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let server, cookie, token, logTail = '';

async function request(route, options = {}) {
  const response = await fetch(base + '/api/imaging' + route, {
    ...options,
    headers: { ...(options.bearer ? { Authorization: 'Bearer ' + options.bearer } : cookie ? { Cookie: cookie } : {}), ...(options.method && !options.bearer ? { Origin: base, 'X-Imaging-Request': '1' } : {}), ...options.headers },
    signal: AbortSignal.timeout(90000),
  });
  return response;
}
const json = body => ({ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
async function start() {
  logTail = '';
  server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', '--hostname', '127.0.0.1', '--port', '3137'], {
    cwd: process.cwd(), windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1', NEXT_DIST_DIR: '.next-imaging-smoke', NEXT_TSCONFIG_PATH: 'tmp/imaging-check-20261022/tsconfig.json', IMAGING_DATA_DIR: storeRoot, IMAGING_TEST_MODE: '1' },
  });
  for (const stream of [server.stdout, server.stderr]) stream.on('data', bytes => { logTail = (logTail + String(bytes)).slice(-2500); });
  const deadline = Date.now() + 120000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) throw new Error('Local test server exited: ' + logTail);
    try { const response = await request('/session'); if ([200, 401].includes(response.status)) return; if (response.status >= 500) throw new Error(await response.text()); }
    catch (error) { if (error.message.includes('bootstrap')) throw error; }
    await wait(300);
  }
  throw new Error('Local test server did not become ready: ' + logTail);
}
async function stop() {
  if (!server || server.exitCode !== null) return;
  const ownPid = server.pid;
  if (process.platform === 'win32') {
    try { execFileSync('taskkill', ['/PID', String(ownPid), '/T', '/F'], { windowsHide: true, stdio: 'ignore' }); } catch (error) { if (server.exitCode === null) throw error; }
  } else {
    // Next dev has a worker child. Linux test runners should use a separate process group.
    execFileSync('pkill', ['-TERM', '-P', String(ownPid)], { stdio: 'ignore' }); server.kill('SIGTERM');
  }
  await wait(600); server = null;
}

async function main() {
  await fs.mkdir(output, { recursive: true });
  await fs.writeFile(path.join(output, 'tsconfig.json'), JSON.stringify({ extends: '../../tsconfig.json', compilerOptions: { incremental: false }, include: ['../../next-env.d.ts', '../../src/**/*.ts', '../../src/**/*.tsx'], exclude: ['../../node_modules'] }));
  await new Promise((resolve, reject) => { const probe = net.createServer(); probe.on('error', reject); probe.listen(3137, '127.0.0.1', () => probe.close(resolve)); });
  const checks = [], started = Date.now();
  const check = message => { checks.push(message); console.log(message); };
  try {
    await start();
    let response = await request('/session', json({ username: 'root', password: 'root' })); assert.equal(response.status, 200);
    cookie = response.headers.get('set-cookie').split(';')[0];
    response = await request('/tokens', json({ label: 'LOCAL SMOKE TEST — revoked after check' })); assert.equal(response.status, 201); token = await response.json();
    assert.equal((await request('/files', { bearer: token.token })).status, 403);
    check('Upload-only token cannot list the archive.');

    const block = Buffer.alloc(CHUNK_SIZE, 0x5a); block.write('TEST FILE — NO PATIENT DATA — ' + randomUUID(), 0, 'utf8');
    const checksum = createHash('sha256'); for (let i = 0; i < MAX_FILE_SIZE / CHUNK_SIZE; i++) checksum.update(block);
    const sha256 = checksum.digest('hex');
    const specification = { name: 'ТЕСТ — передача 400 МиБ.bin', size: MAX_FILE_SIZE, sha256 };
    response = await request('/uploads', { ...json(specification), bearer: token.token }); assert.equal(response.status, 201); const upload = await response.json(); assert(upload.id);
    const patch = offset => request('/uploads/' + upload.id, { method: 'PATCH', bearer: token.token, headers: { 'Content-Type': 'application/offset+octet-stream', 'Upload-Offset': String(offset) }, body: block });
    assert.equal((await patch(0)).status, 204);
    // Kill the actual Next worker while it is receiving an unfinished next chunk.
    const broken = http.request(base + '/api/imaging/uploads/' + upload.id, { method: 'PATCH', headers: { Authorization: 'Bearer ' + token.token, 'Content-Type': 'application/offset+octet-stream', 'Content-Length': String(CHUNK_SIZE), 'Upload-Offset': String(CHUNK_SIZE) } });
    broken.on('error', () => {}); broken.flushHeaders(); broken.write(block.subarray(0, 256 * 1024));
    await wait(700);
    await stop(); broken.destroy();
    check('Local Next process interrupted during an active chunk.');
    await start();
    response = await request('/uploads/' + upload.id, { bearer: token.token }); assert.equal(response.status, 200); const resumed = await response.json(); assert.equal(resumed.offset, CHUNK_SIZE);
    check('After restart, committed offset is exactly 4194304 bytes; session and upload token persisted.');
    for (let offset = resumed.offset; offset < MAX_FILE_SIZE; offset += CHUNK_SIZE) {
      const response = await patch(offset); assert.equal(response.status, 204, await response.text());
      if ((offset + CHUNK_SIZE) % (100 * 1024 ** 2) === 0) console.log('Uploaded:', (offset + CHUNK_SIZE) / 1024 ** 2, 'MiB');
    }
    response = await request('/uploads/' + upload.id + '/complete', { method: 'POST', bearer: token.token }); assert.equal(response.status, 200); const done = await response.json(); assert.equal(done.status, 'complete');
    check('400 MiB file committed only after the server verified SHA-256.');
    response = await fetch(base + '/api/imaging/files/' + done.fileId + '/content'); assert.equal(response.status, 401);
    response = await request('/files/' + done.fileId + '/content'); assert.equal(response.status, 200); assert.equal(Number(response.headers.get('content-length')), MAX_FILE_SIZE);
    const downloaded = createHash('sha256'); let downloadedBytes = 0;
    for await (const bytes of response.body) { downloaded.update(bytes); downloadedBytes += bytes.length; }
    assert.equal(downloadedBytes, MAX_FILE_SIZE); assert.equal(downloaded.digest('hex'), sha256);
    check('Protected streamed download: 419430400 bytes; SHA-256 matches the source.');
    response = await request('/uploads', { ...json(specification), bearer: token.token }); const duplicate = await response.json(); assert.equal(duplicate.duplicate, true); assert.equal(duplicate.fileId, done.fileId);
    response = await request('/files?q=' + encodeURIComponent(specification.name)); assert.equal((await response.json()).files.filter(file => file.sha256 === sha256).length, 1);
    check('Sending the same file again creates no duplicate.');
    response = await request('/files/' + done.fileId + '/content', { headers: { Range: 'bytes=0-255' } }); assert.equal(response.status, 206); assert.deepEqual(Buffer.from(await response.arrayBuffer()), block.subarray(0, 256));
    check('Authenticated range download returns the exact requested bytes.');
    await request('/tokens/' + token.id, { method: 'DELETE' }); assert.equal((await request('/uploads/' + upload.id, { bearer: token.token })).status, 401);
    check('Revoked transmitter token immediately rejected.');
    const report = { at: new Date().toISOString(), transport: 'localhost HTTP (production HTTPS not deployed)', bytes: MAX_FILE_SIZE, sha256, fileId: done.fileId, resumedFrom: resumed.offset, durationSeconds: (Date.now() - started) / 1000, checks };
    await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
    console.log('PASS. Report:', path.join(output, 'report.json'));
  } finally {
    if (server && token) await request('/tokens/' + token.id, { method: 'DELETE' }).catch(() => {});
    await stop();
  }
}
main().catch(error => { console.error(error); if (logTail) console.error(logTail); process.exitCode = 1; });
