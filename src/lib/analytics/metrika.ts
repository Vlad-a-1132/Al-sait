'use client';

import { cleanPath, cleanTag, goalForEvent } from './shared';
import type { AnalyticsEvent } from './shared';

export const METRIKA_ID = 105270439;
type MetrikaFunction = ((...args: unknown[]) => void) & { a?: unknown[][]; l?: number };
declare global { interface Window { ym?: MetrikaFunction; __altamedMetrikaInitialized?: boolean } }
let lastRoute = '';
let loadRetries = 0;
let retryTimer: ReturnType<typeof setTimeout> | undefined;
let fieldsObserver: MutationObserver | undefined;
const confirmed = new Set<string>();
const FORM_EVENTS = new Set(['form_view', 'form_click', 'form_start', 'form_submit', 'form_error']);
const LAB_EVENTS = new Set(['lab_add', 'lab_remove', 'lab_call', 'lab_booking', 'lab_copy_list']);

function allowedPage(): boolean {
  return typeof window !== 'undefined' && Boolean(cleanPath(location.pathname)) && ['altamed-c.ru', 'www.altamed-c.ru'].includes(location.hostname);
}

function protectFields() {
  const mask = () => document.querySelectorAll('input, textarea').forEach(field => field.classList.add('ym-disable-keys'));
  mask();
  if (!fieldsObserver && typeof MutationObserver !== 'undefined') {
    fieldsObserver = new MutationObserver(mask);
    fieldsObserver.observe(document.body, { childList: true, subtree: true });
  }
}

function loadLibrary() {
  if (!allowedPage() || document.getElementById('altamed-metrika-tag')) return;
  const script = document.createElement('script');
  script.id = 'altamed-metrika-tag'; script.async = true;
  script.src = `https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}`;
  script.dataset.state = 'loading';
  script.onload = () => { script.dataset.state = 'loaded'; loadRetries = 0; };
  script.onerror = () => {
    script.remove();
    if (allowedPage() && loadRetries++ < 3) retryTimer = setTimeout(loadLibrary, 5000);
  };
  document.head.appendChild(script);
}

function stopMetrika() {
  lastRoute = '';
  if (retryTimer) { clearTimeout(retryTimer); retryTimer = undefined; }
  fieldsObserver?.disconnect(); fieldsObserver = undefined;
  if (typeof window !== 'undefined' && window.__altamedMetrikaInitialized) {
    window.ym?.(METRIKA_ID, 'destruct');
    window.__altamedMetrikaInitialized = false;
  }
}

function ensureMetrika(): MetrikaFunction | null {
  if (!allowedPage()) return null;
  protectFields();
  if (!window.ym) {
    const queued: MetrikaFunction = (...args) => { (queued.a ||= []).push(args); };
    queued.l = Date.now();
    window.ym = queued;
  }
  if (!window.__altamedMetrikaInitialized) {
    window.__altamedMetrikaInitialized = true;
    window.ym(METRIKA_ID, 'init', { defer: true, ssr: true, webvisor: true, clickmap: true, trackLinks: true, ecommerce: 'dataLayer', accurateTrackBounce: true, triggerEvent: true });
  }
  loadLibrary();
  return window.ym;
}

export function metrikaPageUrl(pathname: string, search: string): string | null {
  const path = cleanPath(pathname);
  if (!path) return null;
  const input = new URLSearchParams(search), output = new URLSearchParams();
  for (const name of ['utm_source', 'utm_medium', 'utm_campaign']) {
    const value = cleanTag(input.get(name)); if (value) output.set(name, value);
  }
  // Advertising IDs are needed for Yandex attribution; they never enter our own event log.
  for (const name of ['yclid', 'gclid']) {
    const value = input.get(name); if (value && /^[a-zA-Z0-9_-]{1,256}$/.test(value)) output.set(name, value);
  }
  const query = output.toString();
  return path + (query ? `?${query}` : '');
}

export function trackMetrikaPage(pathname: string, search: string) {
  const url = metrikaPageUrl(pathname, search);
  if (!url) { stopMetrika(); return; }
  const route = `${pathname}?${search}`;
  if (route === lastRoute) return;
  try {
    const counter = ensureMetrika();
    if (!counter) return;
    const pageUrl = new URL(url, location.origin).href;
    counter(METRIKA_ID, 'hit', pageUrl, { callback: () => {
      // Non-sensitive DOM diagnostics: confirms the real library processed the queued view.
      const script = document.getElementById('altamed-metrika-tag');
      if (script && allowedPage()) script.dataset.lastHit = pageUrl;
    } });
    lastRoute = route;
  } catch { /* never block navigation */ }
}

export function trackMetrikaEvent(event: AnalyticsEvent) {
  let goal: string | null = goalForEvent(event);
  if (FORM_EVENTS.has(event.type)) goal = event.type;
  if (event.type === 'custom' && event.action && LAB_EVENTS.has(event.action)) goal = event.action;
  if (!goal) return;
  try {
    ensureMetrika()?.(METRIKA_ID, 'reachGoal', goal, {
      page: event.path, form: event.form || '', placement: event.placement || 'unknown',
      button_id: event.buttonId || '', error_code: event.errorCode || '', field: event.field || '',
    });
  } catch { /* own server analytics remains independent of third-party delivery */ }
}

/** Only invoke after the appointment API returned its saved ID. Our server log is authoritative. */
export function confirmMetrikaSubmission(event: AnalyticsEvent, submissionId: string) {
  if (!/^[a-zA-Z0-9_-]{1,80}$/.test(submissionId) || confirmed.has(submissionId)) return;
  confirmed.add(submissionId);
  if (confirmed.size > 500) confirmed.delete(confirmed.values().next().value!);
  trackMetrikaEvent({ ...event, type: 'form_success' });
}
