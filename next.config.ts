import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cto",
  assetPrefix: "/cto",
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
};

export default nextConfig;
