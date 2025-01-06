/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/my_portfolio",
  assetPrefix: "/my_portfolio",
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
