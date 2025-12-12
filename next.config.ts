import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    qualities: [50, 100],
    unoptimized: false,
  },
};

export default nextConfig;
