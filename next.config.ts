// next.config.js
/** @type {import('next.config.next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // enable App Router features if needed
  },
  eslint: {
    // ✅ Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  // Images ke remote domains ki configuration bhi यहीं add kar dein jo pichla error tha:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;