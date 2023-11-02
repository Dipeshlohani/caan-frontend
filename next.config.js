/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ['localhost'],
  },
  remotePatterns: [{
    protocol: 'https',
    hostname: 'http://localhost:1337/api/activities',
  }],
};

module.exports = nextConfig;
