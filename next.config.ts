import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.mugnee.com" },
      { protocol: "https", hostname: "mugnee.com" },
    ],
  },
};

export default nextConfig;
