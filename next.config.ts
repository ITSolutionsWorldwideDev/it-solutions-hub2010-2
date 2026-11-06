/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'], // ✅ add karo - "Improve image delivery" insight fix hoga
  },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
    // agar react-icons use kar rahe ho, wo bhi add karo:
    // 'react-icons/fa': { transform: 'react-icons/fa/{{member}}' },
  },
};

module.exports = withBundleAnalyzer(nextConfig);