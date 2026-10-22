import { NextResponse } from 'next/server';
import { open } from 'node:fs/promises';
import { Readable } from 'node:stream';
import path from 'node:path';
import { imagingStore as store, ImagingError, PRIVATE_HEADERS, COOKIE, SESSION_MS, MAX_FILE_SIZE, CHUNK_SIZE, sessionCookie, requestOrigin, browserMutation, readSmallJson, bodyChunks } from '@/lib/imaging/server';
import type { ImagingActor, ImagingUser } from '@/lib/imaging/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const json = (body: unknown, status = 200, extra: Record<string, string> = {}) => NextResponse.json(body, { status, headers: { ...PRIVATE_HEADERS, ...extra } });
function error(status: number, code: string, message: string): never { throw new ImagingError(status, code, message); }

async function content(request: Request, id: string, actor: ImagingActor) {
  const file = await store.file(id);
  const handle = await open(store.p('blobs', id + '.bin'), 'r');
  const headers = new Headers(PRIVATE_HEADERS);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Content-Type', file.mime);
  headers.set('Content-Security-Policy', "default-src 'none'; sandbox; frame-ancestors 'self'");
  const preview = file.mime.startsWith('image/') || file.mime === 'application/pdf';
  const download = new URL(request.url).searchParams.get('download') === '1' || !preview;
  const encoded = encodeURIComponent(file.name).replace(/['()*]/g, character => '%' + character.charCodeAt(0).toString(16).toUpperCase());
  headers.set('Content-Disposition', `${download ? 'attachment' : 'inline'}; filename="file"; filename*=UTF-8''${encoded}`);
  let start = 0, end = file.size - 1, status = 200;
  try {
    if ((await handle.stat()).size !== file.size) error(503, 'file_unavailable', 'Файл временно недоступен.');
    const range = request.headers.get('range');
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (!match || (!match[1] && !match[2])) error(416, 'invalid_range', 'Недопустимый диапазон.');
      if (!match[1]) { const suffix = Number(match[2]); if (!Number.isSafeInteger(suffix) || suffix < 1) error(416, 'invalid_range', 'Недопустимый диапазон.'); start = Math.max(0, file.size - suffix); }
      else { start = Number(match[1]); end = match[2] ? Math.min(Number(match[2]), end) : end; }
      if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= file.size) error(416, 'invalid_range', 'Недопустимый диапазон.');
      headers.set('Content-Range', `bytes ${start}-${end}/${file.size}`); status = 206;
    }
    headers.set('Content-Length', String(end - start + 1));
    if (request.method === 'HEAD') { await handle.close(); return new Response(null, { status, headers }); }
    await store.audit(download ? 'file_download' : 'file_preview', actor, { fileId: id });
    const stream = handle.createReadStream({ start, end, highWaterMark: 256 * 1024 });
    return new Response(Readable.toWeb(stream) as ReadableStream<Uint8Array>, { status, headers });
  } catch (problem) {
    await handle.close();
    if (problem instanceof ImagingError && problem.status === 416) {
      headers.set('Content-Range', `bytes */${file.size}`); headers.delete('Content-Length'); headers.delete('Content-Disposition');
      return new Response(null, { status: 416, headers });
    }
    throw problem;
  }
}

async function handler(request: Request, context: { params: { path?: string[] } }) {
  let actor: ImagingActor | null = null;
  try {
    const origin = requestOrigin(request);
    const parts = context.params.path || [], route = parts.join('/'), method = request.method;
    if (route === 'session' && method === 'POST') {
      browserMutation(request);
      const input = await readSmallJson(request);
      const address = process.env.IMAGING_TRUST_PROXY === '1' ? request.headers.get('x-real-ip') || 'unknown' : 'local';
      const result = await store.login(input.username, input.password, address);
      const response = json({ user: result.user, testMode: store.testMode, maxFileSize: MAX_FILE_SIZE, chunkSize: CHUNK_SIZE });
      response.cookies.set(COOKIE, result.token, { httpOnly: true, sameSite: 'strict', secure: origin.startsWith('https:'), path: '/', maxAge: SESSION_MS / 1000 });
      return response;
    }
    const authorization = request.headers.get('authorization');
    if (authorization) {
      if (!authorization.startsWith('Bearer ')) error(401, 'unauthorized', 'Нужен токен Bearer.');
      actor = await store.uploader(authorization.slice(7));
    } else actor = await store.session(sessionCookie(request));
    if (!actor) error(401, 'unauthorized', 'Войдите в раздел.');
    if (actor.role === 'uploader' && parts[0] !== 'uploads') error(403, 'upload_only', 'Токен разрешает только загрузку файлов.');
    const mutation = !['GET', 'HEAD', 'OPTIONS'].includes(method);
    if (mutation && actor.role !== 'uploader') browserMutation(request);
    if (request.headers.has('origin') && request.headers.get('origin') !== origin) error(403, 'origin_rejected', 'Другой источник запрещён.');

    if (route === 'session' && method === 'GET') return json({ user: actor, testMode: store.testMode, maxFileSize: MAX_FILE_SIZE, chunkSize: CHUNK_SIZE });
    if (route === 'session' && method === 'DELETE') {
      await store.logout(sessionCookie(request)); await store.audit('logout', actor);
      const response = json({ ok: true }); response.cookies.set(COOKIE, '', { httpOnly: true, sameSite: 'strict', secure: origin.startsWith('https:'), path: '/', maxAge: 0 }); return response;
    }
    if (route === 'files' && method === 'GET') {
      const url = new URL(request.url);
      return json(await store.listFiles(url.searchParams.get('q') || '', Number(url.searchParams.get('page') || 1)));
    }
    if (parts[0] === 'pdf-assets' && parts.length === 3 && method === 'GET') {
      const [, folder, name] = parts;
      const worker = folder === 'worker' && name === 'pdf.worker.min.mjs';
      if (!worker && (!['cmaps', 'standard_fonts', 'wasm'].includes(folder) || !/^[A-Za-z0-9_.-]{1,100}\.(bcmap|ttf|pfb|wasm)$/.test(name))) error(404, 'not_found', 'Ресурс не найден.');
      const handle = await open(path.join(process.cwd(), 'node_modules', 'pdfjs-dist', worker ? 'legacy/build' : folder, name), 'r').catch(() => null);
      if (!handle) error(404, 'not_found', 'Ресурс не найден.');
      const stats = await handle.stat();
      if (stats.size > 8 * 1024 ** 2 || !stats.isFile()) { await handle.close(); error(404, 'not_found', 'Ресурс не найден.'); }
      return new Response(Readable.toWeb(handle.createReadStream()) as ReadableStream<Uint8Array>, { headers: { ...PRIVATE_HEADERS, 'Content-Type': worker ? 'text/javascript' : name.endsWith('.wasm') ? 'application/wasm' : 'application/octet-stream', 'Content-Length': String(stats.size) } });
    }
    if (parts[0] === 'files' && parts.length === 3 && parts[2] === 'content' && ['GET', 'HEAD'].includes(method)) return await content(request, parts[1], actor);

    if (route === 'uploads' && method === 'POST') return json(await store.createUpload(actor, await readSmallJson(request)), 201);
    if (parts[0] === 'uploads' && parts.length === 2) {
      const id = parts[1];
      if (['GET', 'HEAD'].includes(method)) {
        const item = await store.upload(actor, id), result = store.uploadResult(item);
        const headers = { ...PRIVATE_HEADERS, 'Upload-Offset': String(result.offset), 'Upload-Length': String(result.size) };
        return method === 'HEAD' ? new Response(null, { status: 200, headers }) : json(result, 200, headers);
      }
      if (method === 'PATCH') {
        if (request.headers.get('content-type') !== 'application/offset+octet-stream') error(415, 'chunk_type', 'Ожидается application/offset+octet-stream.');
        const offset = request.headers.get('upload-offset');
        if (!offset || !/^\d+$/.test(offset)) error(400, 'invalid_offset', 'Нужен заголовок Upload-Offset.');
        const length = request.headers.get('content-length');
        if (length !== null && !/^\d+$/.test(length)) error(400, 'invalid_length', 'Некорректный Content-Length.');
        const result = await store.append(actor, id, Number(offset), bodyChunks(request), length === null ? null : Number(length));
        return new Response(null, { status: 204, headers: { ...PRIVATE_HEADERS, 'Upload-Offset': String(result.offset) } });
      }
      if (method === 'DELETE') { await store.cancel(actor, id); return json({ ok: true }); }
    }
    if (parts[0] === 'uploads' && parts.length === 3 && parts[2] === 'complete' && method === 'POST') return json(await store.complete(actor, parts[1]));

    if (['staff', 'tokens', 'cleanup'].includes(parts[0])) {
      if (actor.role !== 'admin') error(403, 'admin_required', 'Требуются права администратора.');
      if (route === 'staff' && method === 'GET') return json({ users: await store.users() });
      if (route === 'staff' && method === 'POST') {
        const input = await readSmallJson(request), user = await store.createUser(input.username, input.password, input.role);
        await store.audit('staff_created', actor, { targetId: user.id }); return json({ user }, 201);
      }
      if (parts[0] === 'staff' && parts.length === 2 && method === 'PATCH') {
        const input = await readSmallJson(request);
        if (input.password !== undefined && typeof input.password !== 'string') error(400, 'invalid_password', 'Некорректный пароль.');
        const user = await store.updateUser(parts[1], { disabled: typeof input.disabled === 'boolean' ? input.disabled : undefined, password: input.password as string | undefined }, actor as ImagingUser);
        await store.audit('staff_updated', actor, { targetId: user.id }); return json({ user });
      }
      if (route === 'tokens' && method === 'GET') return json({ tokens: await store.tokens() });
      if (route === 'tokens' && method === 'POST') {
        const input = await readSmallJson(request), token = await store.createToken(input.label);
        await store.audit('token_created', actor, { targetId: token.id }); return json(token, 201);
      }
      if (parts[0] === 'tokens' && parts.length === 2 && method === 'DELETE') {
        await store.revokeToken(parts[1]); await store.audit('token_revoked', actor, { targetId: parts[1] }); return json({ ok: true });
      }
      if (route === 'cleanup' && method === 'POST') return json({ expiredUploadsRemoved: await store.cleanup() });
    }
    return json({ error: { code: 'not_found', message: 'Неизвестный маршрут или метод.' } }, 404);
  } catch (problem) {
    const known = problem instanceof ImagingError;
    const status = known ? problem.status : 503, code = known ? problem.code : 'storage_unavailable';
    await store.audit('request_failed', actor, { code }).catch(() => { console.error('Imaging audit unavailable'); });
    if (!known) console.error('Imaging operation failed:', problem instanceof Error ? (problem as NodeJS.ErrnoException).code || problem.name : 'unknown');
    return json({ error: { code, message: known ? problem.message : 'Хранилище временно недоступно. Повторите запрос.' } }, status, status === 429 ? { 'Retry-After': '900' } : {});
  }
}

export { handler as GET, handler as POST, handler as PATCH, handler as DELETE, handler as HEAD };
