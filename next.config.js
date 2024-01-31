/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "cdn1.iconfinder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn4.iconfinder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.drupal.org",
        port: "",
        pathname: "/files/project-images/**",
      }
    ],
  },
}

module.exports = nextConfig
