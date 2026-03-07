import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const isDev = process.env.NODE_ENV !== "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ""}https: blob:`,
  "style-src 'self' 'unsafe-inline' https:",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  "connect-src 'self' https: ws: wss:",
  "frame-src 'self' https:",
  "form-action 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

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
        async headers() {
          return [
            {
              source: "/:path*",
              headers: securityHeaders,
            },
          ];
        },
        async redirects() {
          return [
            {
              source: "/products/catalog/:slug",
              destination: "/products/:slug/",
              permanent: true,
            },
            {
              source: "/km/products/catalog/:slug",
              destination: "/km/products/:slug/",
              permanent: true,
            },
            {
              source: "/products/p10-outdoor-led-sign-board-price-in-bd",
              destination: "/products/p10-outdoor-led-sign-board-price-in-cambodia/",
              permanent: true,
            },
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
