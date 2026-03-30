/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.resolve(__dirname, "..", "out");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) files.push(...walk(full));
    else if (ent.isFile() && ent.name.toLowerCase().endsWith(".html")) files.push(full);
  }
  return files;
}

function extractJsonLd(html) {
  const results = [];
  // Captures: <script type="application/ld+json"> ... </script>
  const re = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html))) {
    const raw = (match[1] || "").trim();
    if (raw) results.push(raw);
  }
  return results;
}

function isFaqPage(node) {
  return node && node["@type"] === "FAQPage";
}

function iterFaqPages(parsed) {
  if (!parsed) return [];
  if (isFaqPage(parsed)) return [parsed];
  if (Array.isArray(parsed["@graph"])) {
    return parsed["@graph"].filter((n) => isFaqPage(n));
  }
  return [];
}

function getExpectedLanguageFromPath(relPath) {
  // Expect Khmer pages under out/km to use inLanguage=km for FAQPage.
  if (relPath.startsWith("km/")) return "km";
  return "en";
}

function normalizeInLanguage(value) {
  // FAQJsonLd typically emits a string, but other inline JSON-LD might emit an array.
  if (!value) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.filter((v) => typeof v === "string");
  return [];
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`[audit-faq-inlanguage] Missing out/ folder at ${OUT_DIR}.`);
    process.exit(2);
  }

  const htmlFiles = walk(OUT_DIR);
  let totalFaqPages = 0;
  const mismatches = [];
  const warnings = [];

  for (const filePath of htmlFiles) {
    const rel = path.relative(OUT_DIR, filePath).replace(/\\/g, "/");
    const expected = getExpectedLanguageFromPath(rel);

    const html = fs.readFileSync(filePath, "utf8");
    const jsonLds = extractJsonLd(html);

    for (const raw of jsonLds) {
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch {
        // Keep this script focused on language mismatch; invalid JSON-LD is handled elsewhere.
        continue;
      }

      const faqPages = iterFaqPages(parsed);
      for (const faq of faqPages) {
        totalFaqPages += 1;
        const langs = normalizeInLanguage(faq.inLanguage);
        if (langs.length === 0) {
          warnings.push({
            file: rel,
            expected,
            actual: faq.inLanguage ?? "missing",
          });
          continue;
        }
        if (!langs.includes(expected)) {
          mismatches.push({
            file: rel,
            expected,
            actual: langs.join(","),
          });
        }
      }
    }
  }

  console.log(`[audit-faq-inlanguage] FAQPage blocks checked: ${totalFaqPages}`);
  if (mismatches.length) {
    console.error(`[audit-faq-inlanguage] Language mismatches found: ${mismatches.length}`);
    for (const m of mismatches.slice(0, 40)) {
      console.error(`  - ${m.file}: expected=${m.expected} actual=${m.actual}`);
    }
    if (mismatches.length > 40) console.error(`  ...and ${mismatches.length - 40} more`);
    process.exit(1);
  }

  if (warnings.length) {
    console.warn(`[audit-faq-inlanguage] Warnings (FAQPage blocks missing inLanguage): ${warnings.length}`);
    for (const w of warnings.slice(0, 20)) {
      console.warn(`  - ${w.file}: expected=${w.expected}`);
    }
  }

  console.log("[audit-faq-inlanguage] Passed: FAQPage inLanguage includes expected language.");
}

main();

