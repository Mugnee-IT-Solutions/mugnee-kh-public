import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/products/led-display", destination: "/led-display/", permanent: true },
      { source: "/products/indoor-led-display", destination: "/indoor-led-display/", permanent: true },
      { source: "/products/outdoor-led-display", destination: "/outdoor-led-display/", permanent: true },
      { source: "/products/led-display/receiving-card", destination: "/receiving-card/", permanent: true },
      { source: "/products/led-display/video-processor", destination: "/video-processor/", permanent: true },
      { source: "/products/led-display/power-supply", destination: "/power-supply/", permanent: true },
      { source: "/led-display/indoor-led-display", destination: "/indoor-led-display/", permanent: true },
      { source: "/led-display/outdoor-led-display", destination: "/outdoor-led-display/", permanent: true },
      { source: "/led-display/receiving-card", destination: "/receiving-card/", permanent: true },
      { source: "/led-display/video-processor", destination: "/video-processor/", permanent: true },
      { source: "/led-display/power-supply", destination: "/power-supply/", permanent: true },
    ];
  },
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
