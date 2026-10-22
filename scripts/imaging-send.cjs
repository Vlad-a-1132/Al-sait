#!/usr/bin/env node
'use strict';

// Reference sender: one file, streaming SHA-256, committed-offset resume, no third-party dependencies.
const fs = require('node:fs/promises');
const { createReadStream } = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { MAX_FILE_SIZE, CHUNK_SIZE } = require('../src/lib/imaging/store.cjs');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sendFile(base, token, filename, progress = console.log) {
  const url = new URL(base);
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && ['127.0.0.1', 'localhost', '[::1]'].includes(url.hostname))) throw new Error('HTTPS is required outside localhost.');
  const stat = await fs.stat(filename);
  if (!stat.isFile() || stat.size < 1 || stat.size > MAX_FILE_SIZE) throw new Error('File must be between 1 byte and 400 MiB.');
  const checksum = createHash('sha256');
  for await (const bytes of createReadStream(filename)) checksum.update(bytes);
  const sha256 = checksum.digest('hex');
  const request = async (route, options = {}) => {
    const response = await fetch(new URL('api/imaging' + route, url.origin + '/'), {
      ...options,
      headers: { Authorization: `Bearer ${token}`, ...options.headers },
      signal: AbortSignal.timeout(120000),
      ...(options.body && typeof options.body !== 'string' ? { duplex: 'half' } : {}),
    });
    if (!response.ok) {
      const result = await response.json().catch(() => null);
      const error = new Error(result?.error?.message || `HTTP ${response.status}`);
      error.status = response.status; throw error;
    }
    return response.status === 204 ? null : response.json();
  };
  const json = value => ({ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(value) });
  const retry = async (route, options) => {
    for (let attempt = 0; ; attempt++) {
      try { return await request(route, options); }
      catch (error) {
        if (attempt >= 4 || (error.status && ![423, 429, 503].includes(error.status))) throw error;
        await wait(Math.min(10000, 500 * 2 ** attempt));
      }
    }
  };
  const upload = await retry('/uploads', json({ name: path.basename(filename), size: stat.size, sha256 }));
  if (upload.status === 'complete') { progress('Already uploaded.'); return upload; }
  let offset = upload.offset, failures = 0;
  while (offset < stat.size) {
    const length = Math.min(CHUNK_SIZE, stat.size - offset);
    try {
      await request(`/uploads/${upload.id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/offset+octet-stream', 'Upload-Offset': String(offset), 'Content-Length': String(length) },
        body: createReadStream(filename, { start: offset, end: offset + length - 1, highWaterMark: 256 * 1024 }),
      });
      offset += length; failures = 0; progress(`${offset}/${stat.size}`);
    } catch (error) {
      if (error.status && ![409, 423, 429, 503].includes(error.status)) throw error;
      if (++failures > 5) throw error;
      await wait(Math.min(10000, 500 * 2 ** failures));
      offset = (await retry(`/uploads/${upload.id}`)).offset;
    }
  }
  // Repeat completion safely if the first response was lost.
  let result;
  for (let attempt = 0; attempt < 3; attempt++) {
    try { result = await request(`/uploads/${upload.id}/complete`, { method: 'POST' }); break; }
    catch (error) { if (attempt === 2 || (error.status && ![423, 503].includes(error.status))) throw error; await wait(1000); }
  }
  progress('Complete. SHA-256: ' + sha256);
  return result;
}

module.exports = { sendFile };
if (require.main === module) {
  const [base, filename] = process.argv.slice(2);
  if (!base || !filename || !process.env.IMAGING_UPLOAD_TOKEN) {
    console.error('Set IMAGING_UPLOAD_TOKEN; run: node scripts/imaging-send.cjs https://site.example path/to/file'); process.exitCode = 1;
  } else sendFile(base, process.env.IMAGING_UPLOAD_TOKEN, filename).then(result => console.log(JSON.stringify(result))).catch(error => { console.error(error.message); process.exitCode = 1; });
}
