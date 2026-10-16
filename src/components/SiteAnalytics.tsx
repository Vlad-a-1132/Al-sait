'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { flushAnalytics, trackAnalytics, trackClick } from '@/lib/analytics/client';
import { cleanPath } from '@/lib/analytics/shared';

const LAB_ACTIONS = new Set(['lab_add', 'lab_remove', 'lab_call', 'lab_booking', 'lab_copy_list']);

export default function SiteAnalytics() {
  const pathname = usePathname();
  const search = useSearchParams()?.toString() || '';
  const lastRoute = useRef('');

  useEffect(() => {
    const key = `${pathname}?${search}`;
    if (key === lastRoute.current) return;
    lastRoute.current = key;
    if (cleanPath(pathname)) trackAnalytics('pageview');
  }, [pathname, search]);

  useEffect(() => {
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest('a, button, [role="button"], [data-analytics-label]');
      if (element) trackClick(element);
    };
    const custom = (event: Event) => {
      const action = (event as CustomEvent<{ event?: string }>).detail?.event;
      if (action && LAB_ACTIONS.has(action)) trackAnalytics('custom', { action, label: action });
    };
    const hidden = () => { if (document.visibilityState === 'hidden') flushAnalytics(); };
    document.addEventListener('click', click, true);
    document.addEventListener('visibilitychange', hidden);
    window.addEventListener('pagehide', flushAnalytics);
    window.addEventListener('altamed:analytics', custom);
    return () => {
      document.removeEventListener('click', click, true);
      document.removeEventListener('visibilitychange', hidden);
      window.removeEventListener('pagehide', flushAnalytics);
      window.removeEventListener('altamed:analytics', custom);
      flushAnalytics();
    };
  }, []);
  return null;
}
