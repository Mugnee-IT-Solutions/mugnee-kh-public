/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "..", "out");

const HTML_EXT = ".html";
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

function resolveOutTarget(href) {
  if (href === "/") return path.join(OUT_DIR, "index.html");
  const clean = stripHashQuery(href);
  if (!clean.startsWith("/")) return null;
  if (clean.startsWith("//")) return null;
  if (clean.startsWith("/_next/")) return null;

  const withoutLeading = clean.replace(/^\/+/, "");

  if (ASSET_EXT_RE.test(clean)) {
    return path.join(OUT_DIR, withoutLeading);
  }

  if (clean.endsWith("/")) {
    return path.join(OUT_DIR, withoutLeading, "index.html");
  }

  // Trailing-slash site: tolerate missing trailing slash by mapping to /path/index.html
  return path.join(OUT_DIR, withoutLeading, "index.html");
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`[audit] Missing out/ folder at ${OUT_DIR}. Run STATIC_EXPORT=true npm run build first.`);
    process.exit(2);
  }

  const htmlFiles = walk(OUT_DIR).filter((p) => p.toLowerCase().endsWith(HTML_EXT));

  const missing = new Map(); // target -> Set<source>
  const emailProtectionHits = [];

  const hrefRe = /\shref\s*=\s*["']([^"']+)["']/gi;

  for (const file of htmlFiles) {
    const relSource = path.relative(OUT_DIR, file).replace(/\\/g, "/");
    const html = fs.readFileSync(file, "utf8");

    if (html.includes("/cdn-cgi/l/email-protection")) {
      emailProtectionHits.push(relSource);
    }

    hrefRe.lastIndex = 0;
    let m;
    while ((m = hrefRe.exec(html))) {
      const raw = m[1] || "";
      const href = raw.trim();
      if (!href) continue;
      if (href.startsWith("#")) continue;
      if (/^(?:mailto:|tel:|javascript:)/i.test(href)) continue;
      if (/^https?:\/\//i.test(href)) continue;

      const target = resolveOutTarget(href);
      if (!target) continue;
      if (fs.existsSync(target)) continue;

      const sources = missing.get(target) ?? new Set();
      sources.add(relSource);
      missing.set(target, sources);
    }
  }

  console.log(`[audit] HTML files scanned: ${htmlFiles.length}`);
  console.log(`[audit] Missing internal targets: ${missing.size}`);
  console.log(`[audit] Cloudflare email-protection references: ${emailProtectionHits.length}`);

  if (emailProtectionHits.length) {
    console.log("[audit] First email-protection hits:");
    for (const hit of emailProtectionHits.slice(0, 10)) console.log(`  - ${hit}`);
  }

  if (missing.size) {
    console.log("[audit] First missing targets:");
    let shown = 0;
    for (const [target, sources] of missing) {
      const relTarget = path.relative(OUT_DIR, target).replace(/\\/g, "/");
      console.log(`  - ${relTarget} (from ${Array.from(sources).slice(0, 3).join(", ")}${sources.size > 3 ? ", ..." : ""})`);
      shown += 1;
      if (shown >= 40) break;
    }
    process.exit(1);
  }
}

main();

