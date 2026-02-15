import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mugneecambodia.com";

  const routes = [
    "/",
    "/products",
    "/led-display",
    "/interactive-flat-panel",
    "/pa-system",
    "/turnstile-gate",
    "/solutions",
    "/service",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
