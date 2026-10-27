'use client';

import { useLayoutEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackMetrikaPage } from '@/lib/analytics/metrika';

export default function YandexMetrika() {
  const pathname = usePathname();
  const search = useSearchParams()?.toString() || '';
  useLayoutEffect(() => { if (pathname) trackMetrikaPage(pathname, search); }, [pathname, search]);

  return null;
}


