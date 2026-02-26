import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "www.mugneekh.com" },
      { protocol: "https", hostname: "mugneekh.com" },
      { protocol: "https", hostname: "www.mri.co.jp" },
      { protocol: "https", hostname: "mri.co.jp" },
    ],
  },
};

export default nextConfig;
