/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true 
  },
  async redirects() {
    return [
      {
        source: '/admin/dashboard',
        destination: '/admin/dashboard/turns',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
