/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/EdsonLucasbd/newPortfolio/blob/main/public/images/*'
      }
    ]
  }
}

module.exports = nextConfig
