import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
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
  ...(!isStaticExport
    ? {
        async redirects() {
          return [
            { source: "/indoor-led-display", destination: "/led-display/indoor-led-display/", permanent: true },
            { source: "/outdoor-led-display", destination: "/led-display/outdoor-led-display/", permanent: true },
            { source: "/receiving-card", destination: "/led-display/receiving-card/", permanent: true },
            { source: "/video-processor", destination: "/led-display/video-processor/", permanent: true },
            { source: "/power-supply", destination: "/led-display/power-supply/", permanent: true },
            { source: "/products/led-display", destination: "/led-display/", permanent: true },
            {
              source: "/products/led-display/indoor-led-display",
              destination: "/led-display/indoor-led-display/",
              permanent: true,
            },
            {
              source: "/products/led-display/outdoor-led-display",
              destination: "/led-display/outdoor-led-display/",
              permanent: true,
            },
            {
              source: "/products/led-display/receiving-card",
              destination: "/led-display/receiving-card/",
              permanent: true,
            },
            {
              source: "/products/led-display/video-processor",
              destination: "/led-display/video-processor/",
              permanent: true,
            },
            {
              source: "/products/led-display/power-supply",
              destination: "/led-display/power-supply/",
              permanent: true,
            },
            { source: "/products/interactive-flat-panel", destination: "/interactive-flat-panel/", permanent: true },
            { source: "/products/pa-system", destination: "/pa-system/", permanent: true },
            { source: "/products/turnstile-gate", destination: "/turnstile-gate/", permanent: true },
            {
              source: "/products/access-control-system",
              destination: "/solutions/office-access-control-cambodia/",
              permanent: true,
            },
          ];
        },
      }
    : { output: "export" }),
};

export default nextConfig;
