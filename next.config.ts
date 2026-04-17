import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["gray-matter", "remark", "remark-html"],
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
