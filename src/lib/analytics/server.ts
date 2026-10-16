import 'server-only';

import { createHash, timingSafeEqual } from 'node:crypto';
import { promises as fs, createReadStream } from 'node:fs';
import path from 'node:path';
import { createInterface } from 'node:readline';
import { cleanLabel, cleanPath, cleanTag, FORM_LABELS, moscowDay, RETENTION_DAYS } from './shared';
import type { AnalyticsEvent, AnalyticsForm, DeviceType, EventType } from './shared';

const ID = /^[a-zA-Z0-9_-]{8,80}$/;
const PUBLIC_TYPES = new Set(['pageview', 'click', 'form_submit', 'custom']);
const ACTIONS = new Set(['button_click', 'phone_click', 'email_click', 'messenger_click', 'download_click', 'booking_click', 'internal_link', 'external_link', 'lab_add', 'lab_remove', 'lab_call', 'lab_booking', 'lab_copy_list']);
const BOTS = /bot|crawler|spider|headless|lighthouse|uptime|monitoring|facebookexternalhit/i;
const limits = new Map<string, { count: number; expires: number }>();
let lastPrune = '';

export const PRIVATE_HEADERS = {
  'Cache-Control': 'private, no-store, max-age=0',
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
  'Vary': 'Authorization',
};

export function analyticsDirectory(): string {
  return path.resolve(process.env.ANALYTICS_DATA_DIR || path.join(process.cwd(), 'data', 'analytics'));
}

export function pricesAuthorized(request: Request): boolean {
  const user = process.env.PRICES_TEST_USER?.trim();
  const pass = process.env.PRICES_TEST_PASS?.trim();
  if (!user || !pass) return false;
  const auth = request.headers.get('authorization');
  if (!auth?.startsWith('Basic ')) return false;
  const received = Buffer.from(auth.slice(6), 'base64').toString('utf8');
  const hash = (value: string) => createHash('sha256').update(value).digest();
  return timingSafeEqual(hash(received), hash(`${user}:${pass}`));
}

export function sameOrigin(request: Request): boolean {
  const fetchSite = request.headers.get('sec-fetch-site');
  if (fetchSite && fetchSite !== 'same-origin' && fetchSite !== 'none') return false;
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  try {
    const incoming = new URL(origin || referer || '');
    const host = request.headers.get('host') || new URL(request.url).host;
    // Only the canonical site, or the exact request host during local development.
    return incoming.host === host || ['altamed-c.ru', 'www.altamed-c.ru'].includes(incoming.hostname);
  } catch {
    return !origin && fetchSite === 'same-origin';
  }
}

export function isBot(request: Request): boolean {
  return BOTS.test(request.headers.get('user-agent') || '');
}

export function allowBatch(request: Request, count: number): boolean {
  const now = Date.now();
  if (limits.size > 10000) {
    for (const [key, entry] of limits) if (entry.expires <= now) limits.delete(key);
    if (limits.size > 10000) return false;
  }
  // The address is used only for a short-lived, in-memory abuse limit. It is never stored in analytics.
  const address = request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const key = createHash('sha256').update(address).digest('hex');
  const previous = limits.get(key);
  const entry = previous && previous.expires > now ? previous : { count: 0, expires: now + 60000 };
  entry.count += count;
  limits.set(key, entry);
  return entry.count <= 3000;
}

export async function readLimitedJson(request: Request, limit = 24576): Promise<unknown> {
  if (Number(request.headers.get('content-length') || 0) > limit) throw new Error('payload_too_large');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('invalid_payload');
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > limit) { await reader.cancel(); throw new Error('payload_too_large'); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export function normalizeEvent(input: unknown, serverEvent = false, now = new Date()): AnalyticsEvent | null {
  if (!input || typeof input !== 'object') return null;
  const raw = input as Record<string, unknown>;
  if (typeof raw.id !== 'string' || !ID.test(raw.id) || typeof raw.visitorId !== 'string' || !ID.test(raw.visitorId) || typeof raw.sessionId !== 'string' || !ID.test(raw.sessionId)) return null;
  if (!PUBLIC_TYPES.has(String(raw.type)) && !(serverEvent && raw.type === 'form_success')) return null;
  const page = cleanPath(raw.path);
  if (!page) return null;
  const form = typeof raw.form === 'string' && Object.prototype.hasOwnProperty.call(FORM_LABELS, raw.form) ? raw.form as AnalyticsForm : undefined;
  if ((raw.type === 'form_submit' || raw.type === 'form_success') && !form) return null;
  const action = typeof raw.action === 'string' && ACTIONS.has(raw.action) ? raw.action : undefined;
  if ((raw.type === 'click' || raw.type === 'custom') && !action) return null;
  if (raw.type === 'custom' && !action?.startsWith('lab_')) return null;
  const parsedTime = typeof raw.timestamp === 'string' ? new Date(raw.timestamp) : now;
  // Client clocks cannot place events in future reports or inject arbitrary historical traffic.
  const timestamp = Number.isFinite(parsedTime.getTime()) && parsedTime.getTime() <= now.getTime() + 60000 && parsedTime.getTime() >= now.getTime() - 3600000 ? parsedTime.toISOString() : now.toISOString();
  const device: DeviceType = raw.device === 'mobile' || raw.device === 'tablet' ? raw.device : 'desktop';
  let target = '';
  if (raw.type === 'click' && typeof raw.target === 'string') {
    if (action === 'phone_click') target = 'tel:';
    else if (action === 'email_click') target = 'mailto:';
    else if (raw.target.startsWith('/')) target = cleanPath(raw.target) || '';
    else if (/^[a-z0-9.-]{1,150}$/i.test(raw.target)) target = raw.target.toLowerCase();
  }
  return {
    id: raw.id, visitorId: raw.visitorId, sessionId: raw.sessionId, path: page,
    type: raw.type as EventType, timestamp, device,
    source: cleanTag(raw.source) || 'direct', medium: cleanTag(raw.medium) || 'none',
    campaign: cleanTag(raw.campaign), referrer: typeof raw.referrer === 'string' && /^[a-z0-9.-]{1,150}$/i.test(raw.referrer) ? raw.referrer.toLowerCase() : '',
    ...(form ? { form } : {}), ...(action ? { action, target, label: cleanLabel(raw.label) } : {}),
  };
}

async function prune(directory: string, today: string) {
  if (lastPrune === today) return;
  lastPrune = today;
  const cutoff = moscowDay(new Date(Date.now() - RETENTION_DAYS * 86400000));
  try {
    const names = await fs.readdir(directory);
    await Promise.all(names.filter(name => /^\d{4}-\d{2}-\d{2}\.jsonl$/.test(name) && name.slice(0, 10) < cutoff).map(name => fs.unlink(path.join(directory, name))));
  } catch (error) { console.error('Analytics retention:', error); }
}

/** Append-only daily logs prevent concurrent visits from overwriting one another. */
export async function appendEvents(events: AnalyticsEvent[]): Promise<void> {
  if (!events.length) return;
  const directory = analyticsDirectory();
  await fs.mkdir(directory, { recursive: true });
  const byDay = new Map<string, AnalyticsEvent[]>();
  for (const event of events) {
    const day = moscowDay(new Date(event.timestamp));
    const list = byDay.get(day) || [];
    list.push(event); byDay.set(day, list);
  }
  for (const [day, list] of byDay) {
    await fs.appendFile(path.join(directory, `${day}.jsonl`), list.map(event => JSON.stringify(event) + '\n').join(''), { encoding: 'utf8', mode: 0o600 });
  }
  await prune(directory, moscowDay());
}

/** Runs after the lead was saved, independently of SMTP delivery or client-side JS. */
export async function recordSavedForm(context: unknown, submissionId: string): Promise<void> {
  const event = normalizeEvent({ ...(context && typeof context === 'object' ? context : {}), id: `form-${submissionId}`, type: 'form_success', timestamp: new Date().toISOString() }, true);
  if (event) await appendEvents([event]);
}

export async function* readDay(day: string): AsyncGenerator<AnalyticsEvent> {
  const filename = path.join(analyticsDirectory(), `${day}.jsonl`);
  try { await fs.access(filename); } catch (error) { if ((error as NodeJS.ErrnoException).code === 'ENOENT') return; throw error; }
  const stream = createReadStream(filename, { encoding: 'utf8' });
  const lines = createInterface({ input: stream, crlfDelay: Infinity });
  try {
    for await (const line of lines) {
      if (!line.trim()) continue;
      let event: AnalyticsEvent;
      try { event = JSON.parse(line) as AnalyticsEvent; } catch { continue; } // a partially appended final line is read on the next refresh
      if (event.id && event.visitorId && event.sessionId && event.timestamp && event.path && !isNaN(Date.parse(event.timestamp))) yield event;
    }
  } finally { lines.close(); stream.destroy(); }
}

export async function firstEventTime(): Promise<string | null> {
  try {
    const names = (await fs.readdir(analyticsDirectory())).filter(name => /^\d{4}-\d{2}-\d{2}\.jsonl$/.test(name)).sort();
    for (const name of names) for await (const event of readDay(name.slice(0, 10))) return event.timestamp;
    return null;
  } catch (error) { if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null; throw error; }
}
