/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ✅ Ignore TypeScript build errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Ignore ESLint build errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;