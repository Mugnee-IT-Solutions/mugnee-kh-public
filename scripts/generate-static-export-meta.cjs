/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

function normalizeSiteUrl(raw) {
  const value = (raw || "https://mugneekh.com").trim();
  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(candidate);
    if (url.hostname.toLowerCase() === "www.mugneekh.com") url.hostname = "mugneekh.com";

    url.protocol = "https:";
    url.search = "";
    url.hash = "";

    // Always return a base URL with NO trailing slash.
    // This prevents sitemap entries like `https://mugneekh.com//path/` if the env is misconfigured.
    return url.origin;
  } catch {
    return "https://mugneekh.com";
  }
}

function toRouteFromHtml(outDir, htmlFilePath) {
  const rel = path.relative(outDir, htmlFilePath).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  if (!rel.endsWith("/index.html")) return null;
  const route = `/${rel.slice(0, -"/index.html".length)}/`;
  return route;
}

function walkHtmlFiles(dir) {
  const results = [];
  const stack = [dir];

  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        // Exclude Next static assets and obvious non-page dirs.
        if (entry.name === "_next") continue;
        if (entry.name === "_not-found") continue;
        stack.push(full);
        continue;
      }
      if (!entry.isFile()) continue;
      if (entry.name !== "index.html") continue;
      results.push(full);
    }
  }

  return results;
}

function xmlEscape(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function shouldExcludeRoute(route) {
  // Keep the sitemap clean: no 404/not-found and no private export artifacts.
  if (!route) return true;
  if (route === "/404/" || route.startsWith("/404/")) return true;
  if (route.startsWith("/tmp_")) return true;
  return false;
}

function generateSitemapXml({ siteUrl, urls }) {
  const header =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const footer = "</urlset>\n";
  const body = urls
    .map(({ loc, lastmod }) => {
      const parts = [
        "  <url>",
        `    <loc>${xmlEscape(loc)}</loc>`,
        lastmod ? `    <lastmod>${xmlEscape(lastmod)}</lastmod>` : null,
        "  </url>",
      ].filter(Boolean);
      return parts.join("\n");
    })
    .join("\n");

  return header + body + "\n" + footer;
}

function generateRobotsTxt({ siteUrl }) {
  return [
    "User-agent: *",
    "Allow: /",
    "Disallow: /tmp_*.html",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");
}

function generateManifestJson() {
  // Mirrors app/manifest.ts (static export can't rely on route handlers when App Router is disabled).
  return {
    name: "Mugnee Cambodia",
    short_name: "Mugnee KH",
    description: "LED Display & Smart Solutions in Cambodia",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [{ src: "/images/fav.webp", type: "image/webp" }],
  };
}

function run() {
  const isStaticExport = process.env.STATIC_EXPORT === "true";
  if (!isStaticExport) {
    console.log("[generate-static-export-meta] STATIC_EXPORT!=true, skipping.");
    return;
  }

  const root = process.cwd();
  const outDir = path.join(root, "out");
  if (!fs.existsSync(outDir)) {
    console.log("[generate-static-export-meta] out/ not found, skipping.");
    return;
  }

  const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  const htmlFiles = walkHtmlFiles(outDir);

  const urlItems = [];
  for (const file of htmlFiles) {
    const route = toRouteFromHtml(outDir, file);
    if (shouldExcludeRoute(route)) continue;

    const stat = fs.statSync(file);
    // YYYY-MM-DD for sitemap.
    const lastmod = new Date(stat.mtime).toISOString().slice(0, 10);
    urlItems.push({ route, lastmod });
  }

  // Stable ordering helps diffing.
  urlItems.sort((a, b) => (a.route < b.route ? -1 : a.route > b.route ? 1 : 0));

  const sitemapXml = generateSitemapXml({
    siteUrl,
    urls: urlItems.map((u) => ({ loc: `${siteUrl}${u.route}`, lastmod: u.lastmod })),
  });

  fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemapXml, "utf8");
  fs.writeFileSync(path.join(outDir, "robots.txt"), generateRobotsTxt({ siteUrl }), "utf8");
  fs.writeFileSync(
    path.join(outDir, "manifest.webmanifest"),
    JSON.stringify(generateManifestJson(), null, 2),
    "utf8",
  );

  console.log(
    `[generate-static-export-meta] Wrote sitemap.xml (${urlItems.length} urls), robots.txt, manifest.webmanifest`,
  );
}

run();
