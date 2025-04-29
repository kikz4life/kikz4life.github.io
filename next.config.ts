const withPWA = require('next-pwa')({
  dest:"public",
  register:true,
  skipWaiting:true,
  disable:process.env.NODE_ENV === 'development'
})

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = withPWA(nextConfig);
