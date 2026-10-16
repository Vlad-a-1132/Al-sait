import type { AnalyticsContext } from './shared';

/** Coarse browser/OS categories only. Never persist the full User-Agent or a fingerprint. */
export function technology(userAgent: string, touchPoints = 0): Pick<AnalyticsContext, 'browser' | 'browserVersion' | 'os' | 'device'> {
  const families = [
    ['Yandex', /YaBrowser\/(\d+)/i], ['Edge', /Edg(?:A|iOS)?\/(\d+)/i],
    ['Opera', /(?:OPR|OPiOS)\/(\d+)/i], ['Samsung', /SamsungBrowser\/(\d+)/i],
    ['Firefox', /(?:Firefox|FxiOS)\/(\d+)/i], ['Chrome', /(?:Chrome|CriOS)\/(\d+)/i],
    ['Safari', /Version\/(\d+).*Safari/i],
  ] as const;
  let browser: AnalyticsContext['browser'] = userAgent ? 'Other' : 'Unknown';
  let browserVersion = '';
  for (const [name, pattern] of families) {
    const match = userAgent.match(pattern);
    if (match) { browser = name; browserVersion = match[1]; break; }
  }
  const ipad = /iPad/i.test(userAgent) || (/Macintosh/i.test(userAgent) && touchPoints > 1);
  const os = /android/i.test(userAgent) ? 'Android' : ipad || /iPhone|iPod/i.test(userAgent) ? 'iOS' : /Windows/i.test(userAgent) ? 'Windows' : /Macintosh|Mac OS X/i.test(userAgent) ? 'macOS' : /Linux/i.test(userAgent) ? 'Linux' : userAgent ? 'Other' : 'Unknown';
  const device = ipad || /tablet|android(?!.*mobile)/i.test(userAgent) ? 'tablet' : /mobile|iphone|ipod/i.test(userAgent) ? 'mobile' : 'desktop';
  return { browser, browserVersion, os, device };
}
