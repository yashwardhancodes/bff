/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove or comment out 'output: "export"'
  // Remove 'images: { unoptimized: true }' if you want image optimization
};
module.exports = nextConfig;