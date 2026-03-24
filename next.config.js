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
  
  // ESLint settings
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig 