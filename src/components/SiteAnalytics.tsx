'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { flushAnalytics, flushAnalyticsOnExit, recordFormError, trackAnalytics, trackClick, trackFormStage } from '@/lib/analytics/client';
import { cleanPath, FORM_LABELS } from '@/lib/analytics/shared';
import type { AnalyticsForm } from '@/lib/analytics/shared';

const LAB_ACTIONS = new Set(['lab_add', 'lab_remove', 'lab_call', 'lab_booking', 'lab_copy_list']);

export default function SiteAnalytics() {
  const pathname = usePathname();
  const search = useSearchParams()?.toString() || '';
  const lastRoute = useRef('');
  const refreshForms = useRef<(() => void) | undefined>();

  useEffect(() => {
    const key = `${pathname}?${search}`;
    if (key === lastRoute.current) return;
    lastRoute.current = key;
    if (cleanPath(pathname)) trackAnalytics('pageview');
    refreshForms.current?.();
  }, [pathname, search]);

  useEffect(() => {
    void flushAnalytics();
    const formFor = (element: Element) => {
      const form = element.closest<HTMLFormElement>('form[data-analytics-form]');
      const name = form?.getAttribute('data-analytics-form');
      return form && name && Object.prototype.hasOwnProperty.call(FORM_LABELS, name) ? { form, name: name as AnalyticsForm } : null;
    };
    const pointer = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const target = formFor(event.target);
      if (target) trackFormStage(target.name, 'form_click', target.form);
    };
    const input = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      const target = formFor(event.target);
      if (target) trackFormStage(target.name, 'form_start', target.form);
    };
    const invalid = (event: Event) => {
      if (!(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) return;
      const target = formFor(event.target);
      if (!target) return;
      const input = event.target;
      const name = (input.getAttribute('name') || input.getAttribute('id') || '').toLowerCase();
      const field = /phone|tel/.test(name) ? 'phone' : /email/.test(name) ? 'email' : /name/.test(name) ? 'name' : /consent/.test(name) ? 'consent' : /message|notes/.test(name) ? 'message' : 'other';
      recordFormError(target.name, input.validity.valueMissing ? 'required' : 'format', { field, element: target.form });
    };
    const visible = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.1) continue;
        const target = formFor(entry.target);
        if (target) trackFormStage(target.name, 'form_view', target.form);
      }
    }, { threshold: 0.1 });
    const observed = new Set<Element>();
    const observe = () => {
      const current = new Set(document.querySelectorAll('form[data-analytics-form]'));
      for (const form of observed) if (!current.has(form)) { visible?.unobserve(form); observed.delete(form); }
      for (const form of current) {
        if (visible) {
          if (observed.has(form)) continue;
          observed.add(form); visible.observe(form);
        } else {
          const rect = form.getBoundingClientRect();
          const height = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          if (rect.height > 0 && rect.width > 0 && height >= rect.height * 0.1 && rect.right > 0 && rect.left < window.innerWidth) {
            const target = formFor(form); if (target) trackFormStage(target.name, 'form_view', form);
          }
        }
      }
    };
    refreshForms.current = () => {
      for (const form of observed) visible?.unobserve(form);
      observed.clear(); observe();
    };
    observe();
    if (!visible) {
      window.addEventListener('scroll', observe, { capture: true, passive: true });
      window.addEventListener('resize', observe);
    }
    const mutations = new MutationObserver(observe);
    mutations.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-analytics-form'] });
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest('a, button, [role="button"], [data-analytics-label]');
      if (element) trackClick(element);
    };
    const custom = (event: Event) => {
      const action = (event as CustomEvent<{ event?: string }>).detail?.event;
      if (action && LAB_ACTIONS.has(action)) trackAnalytics('custom', { action, label: action });
    };
    const hidden = () => { if (document.visibilityState === 'hidden') flushAnalyticsOnExit(); else void flushAnalytics(); };
    const online = () => { void flushAnalytics(); };
    document.addEventListener('click', click, true);
    document.addEventListener('pointerdown', pointer, true);
    document.addEventListener('input', input, true);
    document.addEventListener('invalid', invalid, true);
    document.addEventListener('visibilitychange', hidden);
    window.addEventListener('pagehide', flushAnalyticsOnExit);
    window.addEventListener('online', online);
    window.addEventListener('altamed:analytics', custom);
    return () => {
      document.removeEventListener('click', click, true);
      document.removeEventListener('pointerdown', pointer, true);
      document.removeEventListener('input', input, true);
      document.removeEventListener('invalid', invalid, true);
      document.removeEventListener('visibilitychange', hidden);
      window.removeEventListener('pagehide', flushAnalyticsOnExit);
      window.removeEventListener('online', online);
      window.removeEventListener('altamed:analytics', custom);
      visible?.disconnect(); mutations.disconnect();
      refreshForms.current = undefined;
      if (!visible) { window.removeEventListener('scroll', observe, true); window.removeEventListener('resize', observe); }
      void flushAnalytics();
    };
  }, []);
  return null;
}
