/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: [  
      'cdn.sanity.io', 
      'images.unsplash.com',
      "tailwindui.com"
    ],
  },
}

module.exports = nextConfig