import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
  trailingSlash: false,
  // Compressão e otimizações
  compress: true,
  poweredByHeader: false,
  // Headers não funcionam com output: "export"
  // Os headers de segurança devem ser configurados no servidor web (Nginx, Apache, etc.)
};

export default nextConfig;
