/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', 'localhost', 'www.thomas-henry.com'],
  },
};

module.exports = nextConfig;
