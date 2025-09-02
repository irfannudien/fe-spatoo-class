/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  images: {
    domains: ["www.domain.com", "localhost"],
  },
};

export default nextConfig;
