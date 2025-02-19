/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This will ignore all ESLint checks during the build
  },
}

module.exports = nextConfig
