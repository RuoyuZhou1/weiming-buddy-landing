/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/weiming-buddy-landing',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
