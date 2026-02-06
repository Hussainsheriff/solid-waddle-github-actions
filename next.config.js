/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  experimental: {
    optimizeFonts: false,
  },
}

module.exports = nextConfig
