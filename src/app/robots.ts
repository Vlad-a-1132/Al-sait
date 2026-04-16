import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://altamed-c.ru';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/search',
          '/call-center',
          '/articles',
          '/_next/',
          '/admin/',
          '/prices',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/search',
          '/call-center',
          '/articles',
          '/_next/',
          '/admin/',
          '/prices',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/search',
          '/call-center',
          '/articles',
          '/_next/',
          '/admin/',
          '/prices',
        ],
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: [
          '/api/',
          '/search',
          '/call-center',
          '/articles',
          '/_next/',
          '/admin/',
          '/prices',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

