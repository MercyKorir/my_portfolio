/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/my_portfolio' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    BASE_PATH: isProd ? '/my_portfolio' : '',
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
};

module.exports = nextConfig;
