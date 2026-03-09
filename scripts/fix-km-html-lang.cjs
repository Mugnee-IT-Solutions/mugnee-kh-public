/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const kmOutDir = path.join(root, "out", "km");

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

function setLangKmInHtml(html) {
  if (!html.includes("<html")) return { changed: false, html };

  // Only update the first <html ...> tag.
  const updated = html.replace(/<html\b([^>]*)>/i, (match, attrs) => {
    if (/lang\s*=\s*"km"/i.test(attrs)) return match;
    if (/lang\s*=\s*"[^"]*"/i.test(attrs)) {
      return `<html${attrs.replace(/lang\s*=\s*"[^"]*"/i, 'lang="km"')}>`;
    }
    return `<html lang="km"${attrs}>`;
  });

  return { changed: updated !== html, html: updated };
}

function run() {
  if (!fs.existsSync(kmOutDir)) {
    console.log("[fix-km-html-lang] out/km directory not found. Skipping.");
    return;
  }

  const htmlFiles = collectHtmlFiles(kmOutDir);
  if (htmlFiles.length === 0) {
    console.log("[fix-km-html-lang] No HTML files found under out/km. Skipping.");
    return;
  }

  let updatedCount = 0;

  for (const filePath of htmlFiles) {
    const original = fs.readFileSync(filePath, "utf8");
    const { changed, html } = setLangKmInHtml(original);
    if (!changed) continue;
    fs.writeFileSync(filePath, html, "utf8");
    updatedCount += 1;
  }

  console.log(`[fix-km-html-lang] Updated ${updatedCount}/${htmlFiles.length} Khmer HTML files.`);
}

run();
