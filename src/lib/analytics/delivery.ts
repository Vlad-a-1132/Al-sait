'use client';

import { cleanPath, DELIVERY_TTL } from './shared';
import type { AnalyticsEvent } from './shared';

const PREFIX = 'altamed.analytics.pending.';
const MAX_PENDING = 200;
const pending = new Map<string, AnalyticsEvent>();
const KEYS = ['id', 'type', 'timestamp', 'visitorId', 'sessionId', 'path', 'source', 'medium', 'campaign', 'referrer', 'device', 'browser', 'browserVersion', 'os', 'landingPath', 'placement', 'form', 'action', 'label', 'target', 'buttonId', 'errorCode', 'field', 'status'];
let restored = false;
let timer: ReturnType<typeof setTimeout> | undefined;
let inFlight: Promise<void> | undefined;
let failures = 0;

function remove(id: string) {
  pending.delete(id);
  try { localStorage.removeItem(PREFIX + id); } catch { /* memory fallback */ }
}
function trim() {
  for (const [id, event] of pending) if (Date.now() - Date.parse(event.timestamp) > DELIVERY_TTL) remove(id);
  while (pending.size > MAX_PENDING) remove(pending.keys().next().value!);
}
function restore() {
  if (restored) return;
  restored = true;
  try {
    const keys: string[] = [];
    for (let index = 0; index < localStorage.length; index++) { const key = localStorage.key(index); if (key?.startsWith(PREFIX)) keys.push(key); }
    const events: AnalyticsEvent[] = [];
    for (const key of keys) {
      try {
        const raw = JSON.parse(localStorage.getItem(key) || 'null');
        if (!raw || typeof raw.id !== 'string' || !/^[a-zA-Z0-9_-]{8,80}$/.test(raw.id) || key !== PREFIX + raw.id || !cleanPath(raw.path) || !Number.isFinite(Date.parse(raw.timestamp)) || raw.type === 'form_success') throw new Error('invalid');
        events.push(Object.fromEntries(KEYS.filter(name => raw[name] !== undefined).map(name => [name, raw[name]])) as unknown as AnalyticsEvent);
      } catch { localStorage.removeItem(key); }
    }
    events.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
    for (const event of events) pending.set(event.id, event);
    trim();
  } catch { /* storage can be denied without disabling in-memory delivery */ }
}
function schedule(delay: number) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => { timer = undefined; void flushAnalytics(); }, delay);
}
function batch(): AnalyticsEvent[] {
  trim();
  const events: AnalyticsEvent[] = [];
  for (const event of pending.values()) {
    if (events.length >= 20) break;
    if (new Blob([JSON.stringify({ events: [...events, event] })]).size > 20000) {
      if (events.length) break;
      remove(event.id);
      continue;
    }
    events.push(event);
  }
  return events;
}

export function queueAnalyticsEvent(event: AnalyticsEvent) {
  restore();
  pending.set(event.id, event);
  // One key per event avoids lost writes when several tabs are active at once.
  try { localStorage.setItem(PREFIX + event.id, JSON.stringify(event)); } catch { /* memory fallback */ }
  trim();
  if (pending.size >= 20) void flushAnalytics(); else if (!timer) schedule(1000);
}

export async function flushAnalytics(): Promise<void> {
  restore();
  if (inFlight) return inFlight;
  if (timer) clearTimeout(timer);
  timer = undefined;
  const events = batch();
  if (!events.length) return;
  let delay = 100;
  async function send() {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(new URL('/api/site-analytics', location.origin).href, {
        method: 'POST', body: JSON.stringify({ events }), headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin', keepalive: true, signal: controller.signal,
      });
      if (response.ok || (response.status >= 400 && response.status < 500 && ![408, 429].includes(response.status))) {
        for (const event of events) remove(event.id);
        failures = 0;
      } else {
        throw new Error('retry');
      }
    } catch {
      failures++;
      delay = Math.min(60000, 2000 * 2 ** Math.min(failures - 1, 5));
    } finally { clearTimeout(timeout); }
  }
  inFlight = send().finally(() => {
    inFlight = undefined;
    if (pending.size) schedule(delay);
  });
  return inFlight;
}

export function flushAnalyticsOnExit() {
  restore();
  const events = batch();
  if (!events.length) return;
  // A successful beacon means queued by the browser, not acknowledged by our server.
  // Keep these IDs until an acknowledged fetch; replay is deduplicated in reports.
  try {
    if (navigator.sendBeacon?.(new URL('/api/site-analytics', location.origin).href, new Blob([JSON.stringify({ events })], { type: 'application/json' }))) return;
  } catch { /* normal fetch fallback */ }
  void flushAnalytics();
}
