/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "..", "out");

const ASSET_EXT_RE =
  /\.(?:xml|txt|webmanifest|php|css|js|png|jpe?g|webp|svg|gif|ico|json|map|pdf|woff2?|ttf|eot)(?:$|\?)/i;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const out = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function stripHashQuery(url) {
  const q = url.indexOf("?");
  const h = url.indexOf("#");
  const cut = Math.min(q === -1 ? url.length : q, h === -1 ? url.length : h);
  return url.slice(0, cut);
}

function toRouteFromIndexHtml(htmlPath) {
  const rel = path.relative(OUT_DIR, htmlPath).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  if (!rel.endsWith("/index.html")) return null;
  return `/${rel.slice(0, -"/index.html".length)}/`;
}

function hrefToRoute(href) {
  const clean = stripHashQuery((href || "").trim());
  if (!clean) return null;
  if (clean.startsWith("#")) return null;
  if (/^(?:mailto:|tel:|javascript:)/i.test(clean)) return null;
  if (/^https?:\/\//i.test(clean)) return null;
  if (!clean.startsWith("/")) return null;
  if (clean.startsWith("//")) return null;
  if (clean.startsWith("/_next/")) return null;
  if (ASSET_EXT_RE.test(clean)) return null;
  if (clean === "/") return "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`[audit-inlinks] Missing out/ folder at ${OUT_DIR}. Run STATIC_EXPORT=true npm run build first.`);
    process.exit(2);
  }

  const allFiles = walk(OUT_DIR);
  const htmlFiles = allFiles.filter((p) => p.toLowerCase().endsWith(".html"));
  const indexFiles = htmlFiles.filter((p) => path.basename(p).toLowerCase() === "index.html");

  const routeExists = new Set();
  for (const file of indexFiles) {
    const route = toRouteFromIndexHtml(file);
    if (!route) continue;
    // Ignore the exported Next `_not-found` folder and obvious placeholders.
    if (route.startsWith("/_not-found/")) continue;
    routeExists.add(route);
  }

  const inlinks = new Map(); // route -> Set<sourceRoute>
  const hrefRe = /\shref\s*=\s*["']([^"']+)["']/gi;

  for (const file of indexFiles) {
    const sourceRoute = toRouteFromIndexHtml(file);
    if (!sourceRoute) continue;

    const html = fs.readFileSync(file, "utf8");
    hrefRe.lastIndex = 0;
    let m;
    while ((m = hrefRe.exec(html))) {
      const href = m[1] || "";
      const targetRoute = hrefToRoute(href);
      if (!targetRoute) continue;
      if (!routeExists.has(targetRoute)) continue;

      const sources = inlinks.get(targetRoute) || new Set();
      sources.add(sourceRoute);
      inlinks.set(targetRoute, sources);
    }
  }

  const orphan = [];
  for (const route of routeExists) {
    if (route === "/") continue;
    if (route === "/404/") continue;
    const sources = inlinks.get(route);
    if (!sources || sources.size === 0) orphan.push(route);
  }

  orphan.sort();

  console.log(`[audit-inlinks] Routes (index.html): ${routeExists.size}`);
  console.log(`[audit-inlinks] Orphan routes (0 inlinks): ${orphan.length}`);

  if (orphan.length) {
    console.log("[audit-inlinks] First orphan routes:");
    for (const r of orphan.slice(0, 80)) console.log(`  - ${r}`);
    process.exit(1);
  }
}

main();
