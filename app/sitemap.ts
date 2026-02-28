import type { MetadataRoute } from "next";
import { PRODUCTS } from "./data/products";
import { SITE_URL } from "./lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    "/",
    "/products",
    "/led-display",
    "/indoor-led-display",
    "/outdoor-led-display",
    "/receiving-card",
    "/video-processor",
    "/power-supply",
    "/interactive-flat-panel",
    "/pa-system",
    "/turnstile-gate",
    "/solutions",
    "/solutions/indoor-communication-solutions-cambodia",
    "/solutions/outdoor-campaign-solutions-cambodia",
    "/solutions/retail-digital-signage-cambodia",
    "/solutions/hotel-display-solutions-cambodia",
    "/solutions/factory-pa-announcement-cambodia",
    "/solutions/office-access-control-cambodia",
    "/solutions/education-smart-classroom-cambodia",
    "/service",
    "/projects",
    "/about",
    "/about/message-from-ceo",
    "/contact",
  ];

  const productRoutes = PRODUCTS.map((p) => `/products/catalog/${p.slug}`);
  const allRoutes = Array.from(new Set([...coreRoutes, ...productRoutes]));

  const now = new Date();

  return allRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith("/products/catalog/") ? "weekly" : "monthly",
    priority: route === "/led-display" ? 1 : route === "/" ? 0.9 : 0.8,
  }));
}
