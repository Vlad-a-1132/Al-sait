'use client';

import { cleanLabel, cleanPath, getAttribution, SESSION_TIMEOUT, VISITOR_LIFETIME } from './shared';
import type { AnalyticsContext, AnalyticsEvent, AnalyticsForm, EventType, FormErrorCode } from './shared';
import { technology } from './technology';
import { flushAnalytics, queueAnalyticsEvent } from './delivery';
import { confirmMetrikaSubmission, trackMetrikaEvent } from './metrika';

export { flushAnalytics, flushAnalyticsOnExit } from './delivery';
const VISITOR_KEY = 'altamed.analytics.visitor';
const SESSION_KEY = 'altamed.analytics.session';
type Visit = ReturnType<typeof getAttribution> & { id: string; lastActivity: number; visitorId: string; landingPath?: string };
let visitor: { id: string; createdAt: number } | undefined;
let visit: Visit | undefined;
const stages = new Map<string, number>();
const validId = (value: unknown): value is string => typeof value === 'string' && /^[a-zA-Z0-9_-]{8,80}$/.test(value);

function id() {
  return typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : 'a' + Date.now().toString(36) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
}
function read(key: string): unknown {
  try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; }
}
function write(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* memory fallback */ }
}
function identifiers() {
  const now = Date.now();
  const savedVisitor = read(VISITOR_KEY) as typeof visitor;
  if (savedVisitor && validId(savedVisitor.id) && Number.isFinite(savedVisitor.createdAt) && savedVisitor.createdAt <= now && now - savedVisitor.createdAt < VISITOR_LIFETIME) visitor = savedVisitor;
  if (!visitor || now - visitor.createdAt >= VISITOR_LIFETIME) visitor = { id: id(), createdAt: now };
  write(VISITOR_KEY, visitor);
  const savedVisit = read(SESSION_KEY) as Visit | null;
  if (savedVisit?.visitorId === visitor.id && validId(savedVisit.id) && savedVisit.lastActivity <= now && now - savedVisit.lastActivity < SESSION_TIMEOUT) visit = savedVisit;
  if (!visit || visit.visitorId !== visitor.id || now - visit.lastActivity >= SESSION_TIMEOUT) {
    visit = { id: id(), visitorId: visitor.id, lastActivity: now, landingPath: cleanPath(location.pathname) || undefined, ...getAttribution(location.search, document.referrer, location.hostname) };
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
  return {
    visitorId: person.id, sessionId: session.id, path, ...technology(navigator.userAgent, navigator.maxTouchPoints || 0),
    source: session.source, medium: session.medium, campaign: session.campaign, referrer: session.referrer,
    ...(session.landingPath ? { landingPath: session.landingPath } : {}),
  };
}

export function elementPlacement(element?: Element | null): string {
  const explicit = element?.closest('[data-analytics-placement]')?.getAttribute('data-analytics-placement');
  if (explicit && /^[a-zA-Z0-9_:-]{1,64}$/.test(explicit)) return explicit;
  if (element?.closest('[data-mobile-bottom-nav]')) return 'mobile_nav';
  if (element?.closest('header')) return 'header';
  if (element?.closest('footer')) return 'footer';
  const section = element?.closest('section');
  if (section) {
    const sections = Array.from(document.querySelectorAll('main section'));
    return 'section_' + Math.max(1, sections.indexOf(section) + 1);
  }
  return 'content';
}

type Details = Partial<Pick<AnalyticsEvent, 'action' | 'label' | 'target' | 'form' | 'placement' | 'buttonId' | 'errorCode' | 'field' | 'status'>>;
function record(current: AnalyticsContext, type: Exclude<EventType, 'form_success'>, details: Details = {}) {
  const event: AnalyticsEvent = { ...current, ...details, id: id(), type, timestamp: new Date().toISOString() };
  queueAnalyticsEvent(event);
  if (type !== 'pageview') trackMetrikaEvent(event);
}
export function trackAnalytics(type: Exclude<EventType, 'form_success'>, details: Details = {}) {
  try { const current = context(); if (current) record(current, type, details); } catch { /* analytics never blocks the site */ }
}

/** Unique visits at each observed form stage, without reading any field values. */
export function trackFormStage(form: AnalyticsForm, type: 'form_view' | 'form_click' | 'form_start', element?: Element | null) {
  try {
    const current = context(); if (!current) return;
    const placement = elementPlacement(element);
    const key = [current.sessionId, current.path, form, placement, type].join('|');
    if (stages.has(key)) return;
    stages.set(key, Date.now());
    if (stages.size > 2000) stages.delete(stages.keys().next().value!);
    record(current, type, { form, placement });
  } catch { /* optional tracking */ }
}

/** Called only when a validated lead form actually sends its API request. */
export function getAnalyticsContext(form: AnalyticsForm, element?: Element | null): (AnalyticsContext & { form: AnalyticsForm }) | undefined {
  try {
    const current = context(); if (!current) return undefined;
    const node = element || document.querySelector?.('[data-analytics-form="' + form + '"]');
    const placement = form === 'chat' ? 'chat' : elementPlacement(node);
    const enriched = { ...current, form, placement };
    record(enriched, 'form_submit');
    void flushAnalytics();
    return enriched;
  } catch { return undefined; }
}

export function confirmAnalyticsSubmission(current: AnalyticsContext | undefined, submissionId: unknown) {
  if (!current?.form || typeof submissionId !== 'string') return;
  confirmMetrikaSubmission({ ...current, type: 'form_success', id: id(), timestamp: new Date().toISOString() }, submissionId);
}

export function recordFormError(form: AnalyticsForm, errorCode: FormErrorCode, options: { context?: AnalyticsContext; field?: AnalyticsEvent['field']; status?: number; element?: Element } = {}) {
  try {
    const current = options.context || context(); if (!current) return;
    const node = options.element || document.querySelector?.('[data-analytics-form="' + form + '"]');
    record(current, 'form_error', { form, placement: current.placement || (form === 'chat' ? 'chat' : elementPlacement(node)), errorCode, field: options.field || 'other', ...(options.status ? { status: options.status } : {}) });
  } catch { /* no patient values or raw error messages enter analytics */ }
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
          const path = cleanPath(url.pathname); if (!path) return;
          action = /\.(pdf|docx?|xlsx?)$/i.test(path) ? 'download_click' : path === '/appointments' || /#(?:appointment|booking|zapis|form)/i.test(url.hash) ? 'booking_click' : 'internal_link';
          target = path;
        } else {
          action = url.hostname === 'online.altamed-c.ru' ? 'booking_click' : /(^|\.)(t\.me|wa\.me|whatsapp\.com|telegram\.me|vk\.me|max\.ru)$/.test(url.hostname) ? 'messenger_click' : 'external_link';
          target = url.hostname;
        }
      } catch { return; }
    }
  }
  const placement = elementPlacement(element);
  const explicitId = element.getAttribute('data-analytics-id');
  const scope = element.closest('[data-analytics-placement], header, footer, main') || document.body;
  const index = Array.from(scope.querySelectorAll('a,button,[role="button"]')).indexOf(element);
  const buttonId = explicitId && /^[a-zA-Z0-9_:-]{1,64}$/.test(explicitId) ? explicitId : placement + ':' + action + ':' + Math.max(0, index);
  const label = cleanLabel(element.getAttribute('data-analytics-label') || element.getAttribute('aria-label') || element.textContent || '', 100);
  trackAnalytics('click', { action, target, label, placement, buttonId });
}
