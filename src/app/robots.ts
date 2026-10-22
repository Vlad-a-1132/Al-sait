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
          '/admin/',
          '/prices',
          '/imaging',
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
          '/admin/',
          '/prices',
          '/imaging',
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
          '/admin/',
          '/prices',
          '/imaging',
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
          '/admin/',
          '/prices',
          '/imaging',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

