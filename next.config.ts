import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/TCG26",
  assetPrefix: "/TCG26",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
