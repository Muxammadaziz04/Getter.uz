/** @type {import('next').NextConfig} */

const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  env: {
    COOKIE_TIME: 30 * 24 * 60 * 60,
  },
  images: {
    domains:["localhost"]
  }
}

module.exports = nextConfig