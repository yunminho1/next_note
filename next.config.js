/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/product/delete_from",
        destination: "/product",
        permanent: true,
      },
      {
        source: "/product/delete",
        destination: "/product",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ellie",
        destination: "/product",
      },
    ];
  },
};

module.exports = nextConfig;
