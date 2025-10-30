import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  basePath: "/lp",
  assetPrefix: "/lp",
  reactStrictMode: true,
  experimental: {
    runtime: 'edge'
  }
};

export default nextConfig;

initOpenNextCloudflareForDev();