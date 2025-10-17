// next.config.js
import type { NextConfig } from "next";
// const { i18n } = require('./next-i18next.config');

const nextConfig: NextConfig = {
  /* config options here */
  // i18n,
  reactStrictMode: true,
  experimental: {
    // enable App Router features if needed
  },
  eslint: {
    // ✅ Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;