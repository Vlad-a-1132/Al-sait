import type { ImagingActor, ImagingFile, ImagingUser, ImagingToken, FileList, UploadResult } from './types';

interface ImagingStorage {
  root: string;
  testMode: boolean;
  init(): Promise<void>;
  p(...parts: string[]): string;
  login(login: unknown, password: unknown, address: string): Promise<{ token: string; user: ImagingUser }>;
  session(token?: string): Promise<ImagingUser | null>;
  logout(token?: string): Promise<void>;
  users(): Promise<ImagingUser[]>;
  createUser(login: unknown, password: unknown, role?: unknown): Promise<ImagingUser>;
  updateUser(id: string, update: { disabled?: boolean; password?: string }, actor: ImagingActor): Promise<ImagingUser>;
  tokens(): Promise<ImagingToken[]>;
  createToken(label: unknown): Promise<{ id: string; label: string; token: string }>;
  revokeToken(id: string): Promise<void>;
  uploader(token: string): Promise<ImagingActor | null>;
  file(id: string): Promise<ImagingFile>;
  listFiles(query: string, page: number): Promise<FileList>;
  createUpload(actor: ImagingActor, input: unknown): Promise<UploadResult>;
  upload(actor: ImagingActor, id: string): Promise<UploadResult>;
  uploadResult(input: unknown): UploadResult;
  append(actor: ImagingActor, id: string, offset: number, source: AsyncIterable<Uint8Array>, length: number | null): Promise<UploadResult>;
  complete(actor: ImagingActor, id: string): Promise<UploadResult>;
  cancel(actor: ImagingActor, id: string): Promise<void>;
  cleanup(): Promise<number>;
  audit(event: string, actor: ImagingActor | null, details?: Record<string, unknown>): Promise<void>;
}

const core = require('./store.cjs') as {
  ImagingStore: new () => ImagingStorage;
  ImagingError: new (status: number, code: string, message: string) => Error & { status: number; code: string };
  MAX_FILE_SIZE: number; CHUNK_SIZE: number; SESSION_MS: number; COOKIE: string;
};

export const imagingStore = new core.ImagingStore();
export const { ImagingError, MAX_FILE_SIZE, CHUNK_SIZE, SESSION_MS, COOKIE } = core;

export const PRIVATE_HEADERS = {
  'Cache-Control': 'private, no-store, max-age=0',
  'X-Content-Type-Options': 'nosniff',
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
  'Referrer-Policy': 'no-referrer',
  'Vary': 'Cookie, Authorization',
};

export function sessionCookie(request: Request): string | undefined {
  return request.headers.get('cookie')?.split(';').map(value => value.trim()).find(value => value.startsWith(COOKIE + '='))?.slice(COOKIE.length + 1);
}

function localHost(host: string) { return ['localhost', '127.0.0.1', '[::1]'].includes(host); }

export function requestOrigin(request: Request): string {
  const url = new URL(request.url);
  const host = request.headers.get('host') || url.host;
  if (localHost(url.hostname) && localHost(new URL('http://' + host).hostname)) return new URL('http://' + host).origin;
  const configured = process.env.IMAGING_ORIGIN;
  if (!configured || new URL(configured).protocol !== 'https:') throw new ImagingError(503, 'https_required', 'Для внешнего доступа настройте HTTPS и IMAGING_ORIGIN.');
  const origin = new URL(configured).origin;
  const actualProtocol = process.env.IMAGING_TRUST_PROXY === '1' ? request.headers.get('x-forwarded-proto') : url.protocol.replace(':', '');
  if (host !== new URL(origin).host || actualProtocol !== 'https') throw new ImagingError(403, 'https_required', 'Разрешён только настроенный HTTPS-адрес.');
  if (imagingStore.testMode && process.env.IMAGING_ENABLE_REMOTE_TEST !== '1') throw new ImagingError(403, 'local_test_only', 'Тестовый режим доступен только локально.');
  return origin;
}

export function browserMutation(request: Request) {
  const origin = requestOrigin(request);
  if (request.headers.get('origin') !== origin || request.headers.get('x-imaging-request') !== '1') throw new ImagingError(403, 'origin_rejected', 'Запрос отклонён. Обновите страницу.');
}

export async function readSmallJson(request: Request): Promise<Record<string, unknown>> {
  if (!request.headers.get('content-type')?.startsWith('application/json')) throw new ImagingError(415, 'json_required', 'Ожидается application/json.');
  const reader = request.body?.getReader();
  if (!reader) throw new ImagingError(400, 'invalid_json', 'Пустой запрос.');
  const parts: Uint8Array[] = []; let length = 0;
  try {
    while (true) {
      const { done, value } = await reader.read(); if (done) break;
      length += value.length;
      if (length > 8192) throw new ImagingError(413, 'json_limit', 'Слишком большой запрос.');
      parts.push(value);
    }
  } finally { await reader.cancel().catch(() => {}); reader.releaseLock(); }
  try {
    const body = JSON.parse(Buffer.concat(parts).toString('utf8'));
    if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('object_required');
    return body;
  } catch { throw new ImagingError(400, 'invalid_json', 'Некорректный JSON.'); }
}

export async function* bodyChunks(request: Request): AsyncGenerator<Uint8Array> {
  const reader = request.body?.getReader();
  if (!reader) throw new ImagingError(400, 'empty_chunk', 'Пустая часть файла.');
  try { while (true) { const { done, value } = await reader.read(); if (done) break; yield value; } }
  finally { await reader.cancel().catch(() => {}); reader.releaseLock(); }
}
