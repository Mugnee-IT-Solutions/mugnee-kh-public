/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const outDir = path.join(root, "out");
const kmDir = path.join(outDir, "km");

function collectHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectHtmlFiles(fullPath));
      continue;
    }
    if (entry.isFile() && fullPath.toLowerCase().endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}

function readHtmlLang(filePath) {
  const html = fs.readFileSync(filePath, "utf8");
  const match = html.match(/<html\b[^>]*\blang="([^"]+)"/i);
  return match ? match[1].toLowerCase() : null;
}

function isUnderKmDir(filePath) {
  const normalizedFile = path.normalize(filePath).toLowerCase();
  const normalizedKm = `${path.normalize(kmDir).toLowerCase()}${path.sep}`;
  return normalizedFile.startsWith(normalizedKm);
}

function run() {
  if (!fs.existsSync(outDir)) {
    console.error("[verify-html-lang-output] out/ directory not found. Static output is required.");
    process.exit(1);
  }

  if (!fs.existsSync(kmDir)) {
    console.error("[verify-html-lang-output] out/km directory not found. Khmer static output is required.");
    process.exit(1);
  }

  const htmlFiles = collectHtmlFiles(outDir);
  if (htmlFiles.length === 0) {
    console.error("[verify-html-lang-output] No HTML files found under out/.");
    process.exit(1);
  }

  const errors = [];
  let kmCount = 0;
  let nonKmCount = 0;

  for (const filePath of htmlFiles) {
    const lang = readHtmlLang(filePath);
    const expected = isUnderKmDir(filePath) ? "km" : "en";

    if (expected === "km") kmCount += 1;
    else nonKmCount += 1;

    if (lang !== expected) {
      errors.push(`${path.relative(root, filePath)} expected=${expected} actual=${lang ?? "missing"}`);
    }
  }

  if (kmCount === 0) {
    console.error("[verify-html-lang-output] No Khmer HTML files found under out/km.");
    process.exit(1);
  }

  if (errors.length > 0) {
    console.error("[verify-html-lang-output] HTML lang verification failed:");
    for (const line of errors.slice(0, 20)) console.error(` - ${line}`);
    if (errors.length > 20) console.error(` ...and ${errors.length - 20} more`);
    process.exit(1);
  }

  console.log(
    `[verify-html-lang-output] Passed. km=${kmCount} files lang=\"km\", non-km=${nonKmCount} files lang=\"en\".`
  );
}

run();
