const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ВАЖНО: Статический экспорт отключен, так как используются API routes для отправки email
  // Если нужен статический экспорт, раскомментируйте строки ниже и удалите API routes
  // ...(process.env.NODE_ENV === 'production' && {
  //   output: 'export',
  //   trailingSlash: true,
  //   distDir: 'out',
  // }),
  
  // Image settings
  images: {
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  
  // Webpack configuration for path aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
  
  // TypeScript support
  typescript: {
    ignoreBuildErrors: false,
  },
  
  async rewrites() {
    return [
      // Статьи остаются физически в /articles/*, но доступны пользователю как /blog/*
      {
        source: '/blog/:slug*',
        destination: '/articles/:slug*',
      },
    ];
  },

  async headers() {
    return [
      {
        // Gallery filenames include their content hash; originals are untouched.
        source: '/images/gallery-optimized/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },

  async redirects() {
    return [
      // Старый порядок выдачи справок заменён актуальным документом клиники.
      {
        source: '/images/documents/poryadk-vydachi-spravok-i-medicinskih-zaklyuchenii.pdf',
        destination: '/images/documents/poryadok-vydachi-spravok-i-medicinskih-zaklyucheniy-altamed-s-2026.docx',
        permanent: true,
      },
      // Redirect old pregnancy article slug to new one (public URL)
      {
        source: '/blog/vedenie-beremennosti-v-odintsovo',
        destination: '/blog/kak-prohodit-vedenie-beremennosti',
        permanent: true,
      },
      // Не даем индексировать и показывать /articles/* пользователю — используем /blog/*
      {
        source: '/articles/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
    ];
  },

  // ESLint settings
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
