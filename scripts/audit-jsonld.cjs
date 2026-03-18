/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "..", "out");

function walkIndexHtml(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const out = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walkIndexHtml(full));
    else if (ent.isFile() && ent.name.toLowerCase() === "index.html") out.push(full);
  }
  return out;
}

function extractJsonLd(html) {
  const results = [];
  const re = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html))) {
    const raw = (match[1] || "").trim();
    if (raw) results.push(raw);
  }
  return results;
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`[audit-jsonld] Missing out/ folder at ${OUT_DIR}. Run STATIC_EXPORT=true npm run build first.`);
    process.exit(2);
  }

  const files = walkIndexHtml(OUT_DIR);

  let totalBlocks = 0;
  const invalid = [];
  const doubleSlashUrls = [];

  for (const file of files) {
    const rel = path.relative(OUT_DIR, file).replace(/\\/g, "/");
    const html = fs.readFileSync(file, "utf8");
    const blocks = extractJsonLd(html);
    totalBlocks += blocks.length;

    for (const raw of blocks) {
      try {
        const parsed = JSON.parse(raw);
        const serialized = JSON.stringify(parsed);
        if (serialized.includes("https://mugneekh.com//")) {
          doubleSlashUrls.push(rel);
        }
      } catch (e) {
        invalid.push({ file: rel, error: e && e.message ? e.message : String(e) });
        break;
      }
    }
  }

  console.log(`[audit-jsonld] HTML files scanned: ${files.length}`);
  console.log(`[audit-jsonld] JSON-LD blocks found: ${totalBlocks}`);
  console.log(`[audit-jsonld] Invalid JSON-LD pages: ${invalid.length}`);
  console.log(`[audit-jsonld] JSON-LD with double-slash URLs: ${doubleSlashUrls.length}`);

  if (invalid.length) {
    console.log("[audit-jsonld] First invalid pages:");
    for (const item of invalid.slice(0, 20)) console.log(`  - ${item.file}: ${item.error}`);
  }
  if (doubleSlashUrls.length) {
    console.log("[audit-jsonld] First double-slash pages:");
    for (const file of doubleSlashUrls.slice(0, 20)) console.log(`  - ${file}`);
  }

  if (invalid.length || doubleSlashUrls.length) process.exit(1);
}

main();

