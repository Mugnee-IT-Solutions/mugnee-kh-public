import type { MetadataRoute } from "next";
import { existsSync, statSync } from "fs";
import path from "path";
import { PRODUCTS } from "./data/products";
import { SITE_URL } from "./lib/site";

export const dynamic = "force-static";

function getFileModified(relativePath: string) {
  if (!relativePath) return null;
  const absolutePath = path.join(process.cwd(), relativePath);
  if (!existsSync(absolutePath)) return null;
  return statSync(absolutePath).mtime;
}

function toCanonicalRoute(route: string) {
  if (route === "/") return "/";
  return route.endsWith("/") ? route : `${route}/`;
}

function stripTrailingSlash(route: string) {
  if (route === "/") return route;
  return route.endsWith("/") ? route.slice(0, -1) : route;
}

function stripLocalePrefix(route: string) {
  if (route === "/km" || route === "/km/") return "/";
  if (route.startsWith("/km/")) return route.slice(3) || "/";
  return route;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    "/",
    "/products",
    "/led-display",
    "/led-display/indoor-led-display",
    "/led-display/outdoor-led-display",
    "/led-display/receiving-card",
    "/led-display/video-processor",
    "/led-display/power-supply",
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

  const productRoutes = PRODUCTS.map((p) => toCanonicalRoute(`/products/${p.slug}`));
  const kmCoreRoutes = [
    "/km",
    ...coreRoutes.filter((route) => route !== "/").map((route) => `/km${route}`),
  ].map(toCanonicalRoute);
  const kmProductRoutes = PRODUCTS.map((p) => toCanonicalRoute(`/km/products/${p.slug}`));
  const allRoutes = Array.from(
    new Set([...coreRoutes.map(toCanonicalRoute), ...productRoutes, ...kmCoreRoutes, ...kmProductRoutes])
  );
  const fallbackLastModified =
    getFileModified("app/layout.tsx") || getFileModified("app/page.tsx") || new Date("2026-01-01");
  const productDataModified = getFileModified("app/data/products.ts") || fallbackLastModified;
  const routeToSource = new Map<string, string>([
    ["/", "app/page.tsx"],
    ["/products", "app/products/page.tsx"],
    ["/led-display", "app/led-display/page.tsx"],
    ["/led-display/indoor-led-display", "app/led-display/indoor-led-display/page.tsx"],
    ["/led-display/outdoor-led-display", "app/led-display/outdoor-led-display/page.tsx"],
    ["/led-display/receiving-card", "app/led-display/receiving-card/page.tsx"],
    ["/led-display/video-processor", "app/led-display/video-processor/page.tsx"],
    ["/led-display/power-supply", "app/led-display/power-supply/page.tsx"],
    ["/interactive-flat-panel", "app/interactive-flat-panel/page.tsx"],
    ["/pa-system", "app/pa-system/page.tsx"],
    ["/turnstile-gate", "app/turnstile-gate/page.tsx"],
    ["/solutions", "app/solutions/page.tsx"],
    ["/service", "app/service/page.tsx"],
    ["/projects", "app/projects/page.tsx"],
    ["/about", "app/about/page.tsx"],
    ["/about/message-from-ceo", "app/about/message-from-ceo/page.tsx"],
    ["/contact", "app/contact/page.tsx"],
    ["/solutions/indoor-communication-solutions-cambodia", "app/content/solutions/digital-signage-cambodia.ts"],
    ["/solutions/outdoor-campaign-solutions-cambodia", "app/content/solutions/led-billboard-cambodia.ts"],
    ["/solutions/retail-digital-signage-cambodia", "app/content/solutions/digital-signage-cambodia.ts"],
    ["/solutions/hotel-display-solutions-cambodia", "app/content/solutions/digital-signage-cambodia.ts"],
    ["/solutions/factory-pa-announcement-cambodia", "app/content/solutions/pa-system-cambodia.ts"],
    ["/solutions/office-access-control-cambodia", "app/content/solutions/access-control-cambodia.ts"],
    ["/solutions/education-smart-classroom-cambodia", "app/content/solutions/smart-classroom-cambodia.ts"],
  ]);

  return allRoutes.map((route) => ({
    url: `${SITE_URL}${toCanonicalRoute(route)}`,
    lastModified: stripLocalePrefix(stripTrailingSlash(route)).startsWith("/products/")
      ? productDataModified
      : getFileModified(routeToSource.get(stripLocalePrefix(stripTrailingSlash(route))) || "") || fallbackLastModified,
    changeFrequency: stripLocalePrefix(stripTrailingSlash(route)).startsWith("/products/") ? "weekly" : "monthly",
    priority: stripLocalePrefix(stripTrailingSlash(route)) === "/led-display" ? 1 : stripLocalePrefix(stripTrailingSlash(route)) === "/" ? 0.9 : 0.8,
  }));
}
