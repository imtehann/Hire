/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      // Add your Supabase project URL domain here
      // e.g., 'xxxxxxxxxxx.supabase.co'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig
