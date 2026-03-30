/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "..", "out");
const GSC_TABLE = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "Downloads",
  "GSC report",
  "mugneekh.com-Coverage-Drilldown-2026-03-30",
  "Table.csv"
);

function parseCsvLines(text) {
  // Simple CSV: we only need first column (URL). URL doesn't contain commas.
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const out = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const url = line.split(",")[0].trim();
    if (url) out.push(url);
  }
  return out;
}

function normalizeHost(hostname) {
  return hostname.replace(/^www\./i, "").toLowerCase();
}

function ensureTrailingSlash(p) {
  if (!p) return "/";
  if (p === "/") return "/";
  return p.endsWith("/") ? p : `${p}/`;
}

function toOutIndexPath(urlStr) {
  // Map URL path => out/<path>/index.html (assuming trailingSlash export).
  const u = new URL(urlStr);
  const pathname = u.pathname;
  const relPath = ensureTrailingSlash(pathname);
  const outPath = path.join(OUT_DIR, relPath, "index.html");
  return outPath;
}

function extractCanonicalHref(html) {
  const m = html.match(/rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  return m?.[1] ?? null;
}

function hasNoindexMeta(html) {
  // Detect common patterns: <meta name="robots" content="noindex,...">
  return /<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*\bnoindex\b/i.test(html);
}

function readSitemapLocs() {
  const sitemapPath = path.join(OUT_DIR, "sitemap.xml");
  if (!fs.existsSync(sitemapPath)) return new Set();
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const locs = [];
  const re = /<loc>\s*([^<]+)\s*<\/loc>/gi;
  let match;
  while ((match = re.exec(xml))) locs.push(match[1]);
  const set = new Set();
  for (const loc of locs) {
    try {
      const u = new URL(loc);
      const host = normalizeHost(u.hostname);
      const p = ensureTrailingSlash(u.pathname);
      set.add(`${host}${p}`);
    } catch {
      // ignore
    }
  }
  return set;
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`[audit-gsc-discovered-not-indexed] Missing out/ at ${OUT_DIR}`);
    process.exit(2);
  }
  if (!fs.existsSync(GSC_TABLE)) {
    console.error(
      `[audit-gsc-discovered-not-indexed] Missing GSC Table.csv. Expected at:\n${GSC_TABLE}`
    );
    process.exit(2);
  }

  const tableText = fs.readFileSync(GSC_TABLE, "utf8");
  const urls = parseCsvLines(tableText);
  console.log(`[audit-gsc-discovered-not-indexed] URLs loaded: ${urls.length}`);

  const sitemapSet = readSitemapLocs();

  let missingInOut = [];
  let noindexMeta = [];
  let canonicalMismatch = [];
  let missingInSitemap = [];

  for (const urlStr of urls) {
    let u;
    try {
      u = new URL(urlStr);
    } catch {
      continue;
    }

    const host = normalizeHost(u.hostname);
    const expectedPath = ensureTrailingSlash(u.pathname);
    const outIndexPath = toOutIndexPath(urlStr);

    const sitemapKey = `${host}${expectedPath}`;
    if (!sitemapSet.has(sitemapKey)) missingInSitemap.push(urlStr);

    if (!fs.existsSync(outIndexPath)) {
      missingInOut.push(urlStr);
      continue;
    }

    // Read only enough to detect robots/canonical.
    const html = fs.readFileSync(outIndexPath, "utf8");
    if (hasNoindexMeta(html)) noindexMeta.push(urlStr);

    const canonical = extractCanonicalHref(html);
    if (canonical) {
      try {
        const cu = new URL(canonical);
        const canHost = normalizeHost(cu.hostname);
        const canPath = ensureTrailingSlash(cu.pathname);
        if (canHost !== host || canPath !== expectedPath) {
          canonicalMismatch.push(urlStr);
        }
      } catch {
        // If canonical isn't a full URL, ignore mismatch.
      }
    }
  }

  function printTop(title, arr) {
    console.log(`${title}: ${arr.length}`);
    for (const x of arr.slice(0, 8)) console.log(`  - ${x}`);
    if (arr.length > 8) console.log(`  ...and ${arr.length - 8} more`);
  }

  console.log("---- Summary ----");
  printTop("Missing in out/ (no exported HTML)", missingInOut);
  printTop("Has noindex meta", noindexMeta);
  printTop("Canonical mismatch", canonicalMismatch);
  printTop("Missing in sitemap.xml", missingInSitemap);

  const totalIssues =
    missingInOut.length + noindexMeta.length + canonicalMismatch.length + missingInSitemap.length;
  console.log(`[audit-gsc-discovered-not-indexed] Total issues occurrences: ${totalIssues}`);
}

main();

