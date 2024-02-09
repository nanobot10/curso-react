/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif'],
    domains: ['res.cloudinary.com']
  }
};

export default nextConfig;
