/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "..", "out");

function walk(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) files.push(...walk(full));
    else if (ent.isFile() && ent.name.toLowerCase().endsWith(".html")) files.push(full);
  }
  return files;
}

function countMatches(haystack, needles) {
  const counts = {};
  for (const n of needles) counts[n] = 0;
  for (const n of needles) {
    let idx = 0;
    while (true) {
      const next = haystack.indexOf(n, idx);
      if (next === -1) break;
      counts[n] += 1;
      idx = next + n.length;
    }
  }
  return counts;
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`[audit-next-image-out] Missing out/ at ${OUT_DIR}`);
    process.exit(2);
  }

  const htmlFiles = walk(OUT_DIR);
  const needles = ["data-nimg", "/_next/image", "srcset="];
  const totals = Object.fromEntries(needles.map((n) => [n, 0]));
  let checkedFiles = 0;
  let filesWithNextImage = 0;

  for (const filePath of htmlFiles) {
    const html = fs.readFileSync(filePath, "utf8");
    checkedFiles += 1;
    const counts = countMatches(html, needles);
    for (const n of needles) totals[n] += counts[n];
    if (counts["data-nimg"] > 0 || counts["/_next/image"] > 0) filesWithNextImage += 1;
  }

  console.log(`[audit-next-image-out] HTML scanned: ${checkedFiles}`);
  console.log(`[audit-next-image-out] Files with next/image markers: ${filesWithNextImage}`);
  console.log(`[audit-next-image-out] Totals:`);
  for (const n of needles) {
    console.log(`  - ${n}: ${totals[n]}`);
  }

  const hasOptimizerRoute = totals["/_next/image"] > 0;
  const hasSrcset = totals["srcset="] > 0;
  console.log(
    `[audit-next-image-out] Summary: optimizerRoute=${hasOptimizerRoute} srcsetPresent=${hasSrcset} (unoptimized is likely enabled)`
  );
}

main();

