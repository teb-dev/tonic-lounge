/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['i.imgur.com', 'localhost', 'www.thomas-henry.com'],
  },
};

module.exports = nextConfig;
