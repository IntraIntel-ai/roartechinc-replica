import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // often required if exporting or relying on external CDN without Next.js Image Optimization server
  }
};

export default nextConfig;
