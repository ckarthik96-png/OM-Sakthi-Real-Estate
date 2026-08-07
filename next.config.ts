import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/OM-Sakthi-Real-Estate",
  assetPrefix: "/OM-Sakthi-Real-Estate",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
