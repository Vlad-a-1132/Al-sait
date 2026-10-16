'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackMetrikaPage } from '@/lib/analytics/metrika';

export default function YandexMetrika() {
  const pathname = usePathname();
  const search = useSearchParams()?.toString() || '';
  useEffect(() => { if (pathname) trackMetrikaPage(pathname, search); }, [pathname, search]);

  return null;
}


