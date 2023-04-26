/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  skipWaiting: true,
  runtimeCaching: [
    ...runtimeCaching,
    {
      urlPattern: /https:\/\/api.themoviedb.org\/.*/,
      handler: "NetworkFirst",
    },
  ],
  buildExcludes: [/middleware-manifest.json$/],
  disable:process.env.NODE_ENV!=='production'
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
});

module.exports = nextConfig;
