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
  const re = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html))) {
    const raw = (match[1] || "").trim();
    if (raw) results.push(raw);
  }
  return results;
}

function getExpectedLanguageFromPath(relPath) {
  if (relPath.startsWith("km/") || relPath.startsWith("km\\")) return "km";
  return "en";
}

function normalizeLangToShort(token) {
  if (typeof token !== "string") return null;
  const t = token.trim().toLowerCase();
  if (!t) return null;
  if (t === "en" || t.startsWith("en-")) return "en";
  if (t === "km" || t.startsWith("km-")) return "km";
  // Some code might include "Khmer" / "English" as a string value.
  if (t.includes("khmer") || t.includes("កម្ពុជា") || t.includes("cambodia")) {
    // "cambodia" isn't language-specific, so don't treat it as km by itself.
    // But if "khmer" is present, it's safe to infer km.
    if (t.includes("khmer")) return "km";
  }
  return null;
}

function normalizeLangValues(value) {
  if (value == null) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.filter((v) => typeof v === "string");
  return [];
}

function langListMatchesExpected(langTokens, expectedShort) {
  for (const token of langTokens) {
    const short = normalizeLangToShort(token);
    if (short === expectedShort) return true;
  }
  return false;
}

function traverse(node, cb, pathParts = []) {
  if (node == null) return;

  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) traverse(node[i], cb, pathParts.concat(`[${i}]`));
    return;
  }

  if (typeof node !== "object") return;

  for (const [key, val] of Object.entries(node)) {
    cb({ key, val, pathParts, keyPath: pathParts.concat(key) });
    traverse(val, cb, pathParts.concat(key));
  }
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`[audit-structured-data-language] Missing out/ folder at ${OUT_DIR}.`);
    process.exit(2);
  }

  const htmlFiles = walk(OUT_DIR);
  let checkedHtml = 0;
  let mismatches = [];
  let ignoredNestedFaqMismatches = 0;
  let totalLanguageFields = 0;

  for (const filePath of htmlFiles) {
    const rel = path.relative(OUT_DIR, filePath).replace(/\\/g, "/");
    const expected = getExpectedLanguageFromPath(rel);

    const html = fs.readFileSync(filePath, "utf8");
    const jsonLds = extractJsonLd(html);
    if (!jsonLds.length) continue;

    checkedHtml += 1;

    for (const raw of jsonLds) {
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch {
        // Ignore here; audit-jsonld.cjs already ensures JSON-LD validity.
        continue;
      }

      traverse(parsed, ({ key, val, keyPath }) => {
        if (key !== "inLanguage" && key !== "language") return;
        totalLanguageFields += 1;

        const tokens = normalizeLangValues(val);
        if (tokens.length === 0) return; // nothing to validate

        const ok = langListMatchesExpected(tokens, expected);
        if (!ok) {
          const pathStr = keyPath.join(".");
          // We intentionally do not fail on nested FAQ question/answer languages:
          // Home/KM pages may include both EN+KM FAQ entries.
          const isNestedFaqLang =
            pathStr.includes("mainEntity") || pathStr.includes("acceptedAnswer");
          if (isNestedFaqLang) {
            ignoredNestedFaqMismatches += 1;
            return;
          }

          mismatches.push({
            file: rel,
            expected,
            actual: tokens.join(","),
            fieldPath: pathStr,
            field: key,
          });
        }
      });
    }
  }

  console.log(`[audit-structured-data-language] HTML scanned (with JSON-LD): ${checkedHtml}`);
  console.log(`[audit-structured-data-language] Language fields checked: ${totalLanguageFields}`);

  if (mismatches.length) {
    console.error(`[audit-structured-data-language] Mismatches found: ${mismatches.length}`);
    for (const m of mismatches.slice(0, 50)) {
      console.error(`  - ${m.file} expected=${m.expected} actual=${m.actual} field=${m.field} (${m.fieldPath})`);
    }
    if (mismatches.length > 50) console.error(`  ...and ${mismatches.length - 50} more`);
    process.exit(1);
  }

  if (ignoredNestedFaqMismatches) {
    console.warn(
      `[audit-structured-data-language] Note: ignored ${ignoredNestedFaqMismatches} nested FAQ question/answer language mismatches.`
    );
  }

  console.log("[audit-structured-data-language] Passed: language fields match expected page language.");
}

main();

