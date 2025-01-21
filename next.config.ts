import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: '/personal_website',
  assetPrefix: '/personal_website/',
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
