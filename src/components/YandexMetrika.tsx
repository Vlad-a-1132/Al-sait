'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

const METRIKA_ID = 105270439;

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.toString();

  useEffect(() => {
    const allowed = new Set(['lab_add','lab_remove','lab_call','lab_booking','lab_copy_list']);
    const handler = (event: Event) => {
      const name = (event as CustomEvent<{event?:string}>).detail?.event;
      // Only the action name; never transmit test names, selections, search text or patient data.
      if (name && allowed.has(name) && typeof window.ym === 'function') window.ym(METRIKA_ID, 'reachGoal', name);
    };
    window.addEventListener('altamed:analytics', handler);
    return () => window.removeEventListener('altamed:analytics', handler);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.ym !== 'function') {
      return;
    }

    const url = search && search.length > 0 ? `${pathname}?${search}` : pathname;
    window.ym(METRIKA_ID, 'hit', url);
  }, [pathname, search]);

  return null;
}


