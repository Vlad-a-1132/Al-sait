'use client';

import { cleanLabel, cleanPath, getAttribution, SESSION_TIMEOUT, VISITOR_LIFETIME } from './shared';
import type { AnalyticsContext, AnalyticsEvent, AnalyticsForm, Attribution, EventType } from './shared';

const VISITOR_KEY = 'altamed.analytics.visitor';
const SESSION_KEY = 'altamed.analytics.session';
const ENDPOINT = '/api/site-analytics';
type Visit = Attribution & { id: string; lastActivity: number; visitorId: string };
let visitor: { id: string; createdAt: number } | undefined;
let visit: Visit | undefined;
let queue: AnalyticsEvent[] = [];
let timer: ReturnType<typeof setTimeout> | undefined;

function id() {
  return typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `a${Date.now().toString(36)}${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`;
}
function read(key: string): unknown {
  try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; }
}
function write(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* memory fallback for restricted storage */ }
}
function identifiers() {
  const now = Date.now();
  const savedVisitor = read(VISITOR_KEY) as typeof visitor;
  if (savedVisitor && typeof savedVisitor.id === 'string' && now - savedVisitor.createdAt < VISITOR_LIFETIME) visitor = savedVisitor;
  if (!visitor || now - visitor.createdAt >= VISITOR_LIFETIME) visitor = { id: id(), createdAt: now };
  write(VISITOR_KEY, visitor);
  const savedVisit = read(SESSION_KEY) as Visit | null;
  if (savedVisit?.visitorId === visitor.id && now - savedVisit.lastActivity < SESSION_TIMEOUT) visit = savedVisit;
  if (!visit || visit.visitorId !== visitor.id || now - visit.lastActivity >= SESSION_TIMEOUT) {
    visit = { id: id(), visitorId: visitor.id, lastActivity: now, ...getAttribution(location.search, document.referrer, location.hostname) };
  }
  visit.lastActivity = now;
  write(SESSION_KEY, visit);
  return { visitor, visit };
}
function context(): AnalyticsContext | null {
  if (typeof window === 'undefined') return null;
  const path = cleanPath(location.pathname);
  if (!path || navigator.webdriver || /bot|crawler|spider|headless|lighthouse/i.test(navigator.userAgent)) return null;
  const { visitor: person, visit: session } = identifiers();
  const device = /ipad|tablet|android(?!.*mobile)/i.test(navigator.userAgent) ? 'tablet' : /mobile|iphone|ipod/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
  return { visitorId: person.id, sessionId: session.id, path, device, source: session.source, medium: session.medium, campaign: session.campaign, referrer: session.referrer };
}

export function trackAnalytics(type: Exclude<EventType, 'form_success'>, details: Partial<Pick<AnalyticsEvent, 'action' | 'label' | 'target' | 'form'>> = {}) {
  const current = context();
  if (!current) return;
  queue.push({ ...current, ...details, id: id(), type, timestamp: new Date().toISOString() });
  if (queue.length >= 20) flushAnalytics();
  else if (!timer) timer = setTimeout(flushAnalytics, 1500);
}

export function flushAnalytics() {
  if (timer) clearTimeout(timer);
  timer = undefined;
  if (!queue.length) return;
  const events: AnalyticsEvent[] = [];
  // Keep batches below both the server limit and the browser's shared beacon budget.
  while (queue.length && events.length < 20) {
    if (new Blob([JSON.stringify({ events: [...events, queue[0]] })]).size > 20000) {
      if (!events.length) queue.shift();
      break;
    }
    events.push(queue.shift()!);
  }
  if (!events.length) return;
  const body = JSON.stringify({ events });
  const endpoint = new URL(ENDPOINT, location.origin).href;
  // Beacon survives navigation. Fetch is the fallback when the beacon queue is full.
  let sent = false;
  try { sent = typeof navigator.sendBeacon === 'function' && navigator.sendBeacon(endpoint, new Blob([body], { type: 'application/json' })); } catch { /* fallback */ }
  if (!sent) void fetch(endpoint, { method: 'POST', body, headers: { 'Content-Type': 'application/json' }, keepalive: true, credentials: 'same-origin' }).catch(() => {});
  if (queue.length && !timer) timer = setTimeout(flushAnalytics, 100);
}

/** Called only when a validated lead form actually sends a request. No form values. */
export function getAnalyticsContext(form: AnalyticsForm): (AnalyticsContext & { form: AnalyticsForm }) | undefined {
  const current = context();
  if (!current) return undefined;
  trackAnalytics('form_submit', { form });
  flushAnalytics();
  return { ...current, form };
}

export function trackClick(element: Element) {
  if (element.closest('[data-analytics-ignore], [contenteditable="true"]')) return;
  const href = element.getAttribute('href');
  let target = '';
  let action = 'button_click';
  if (href) {
    if (/^tel:/i.test(href)) { action = 'phone_click'; target = 'tel:'; }
    else if (/^mailto:/i.test(href)) { action = 'email_click'; target = 'mailto:'; }
    else {
      try {
        const url = new URL(href, location.href);
        if (!['https:', 'http:'].includes(url.protocol)) return;
        if (url.origin === location.origin) {
          const path = cleanPath(url.pathname);
          if (!path) return;
          action = /\.(pdf|docx?|xlsx?)$/i.test(path) ? 'download_click' : path === '/appointments' ? 'booking_click' : 'internal_link';
          target = path;
        } else {
          action = /(^|\.)(t\.me|wa\.me|whatsapp\.com|telegram\.me|vk\.me|max\.ru)$/.test(url.hostname) ? 'messenger_click' : 'external_link';
          // External paths can contain phone numbers (wa.me), emails or personal identifiers.
          target = url.hostname;
        }
      } catch { return; }
    }
  }
  const label = cleanLabel(element.getAttribute('data-analytics-label') || element.getAttribute('aria-label') || element.textContent || '', 100);
  trackAnalytics('click', { action, target, label });
}
