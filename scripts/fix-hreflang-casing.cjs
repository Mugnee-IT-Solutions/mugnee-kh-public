/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const REPLACEMENTS = [
  { from: 'hrefLang="en-kh"', to: 'hrefLang="en-KH"' },
  { from: 'hrefLang="km-kh"', to: 'hrefLang="km-KH"' },
  { from: '"en-kh":', to: '"en-KH":' },
  { from: '"km-kh":', to: '"km-KH":' },
];

const SKIP_DIRS = new Set([
  "node_modules",
  ".next",
  "out",
  "dist",
  "coverage",
  ".git",
]);

function walk(rootDir) {
  const results = [];
  const stack = [rootDir];
  while (stack.length) {
    const dir = stack.pop();
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        if (SKIP_DIRS.has(ent.name)) continue;
        stack.push(full);
        continue;
      }
      if (!ent.isFile()) continue;
      const ext = path.extname(ent.name).toLowerCase();
      if (![".ts", ".tsx", ".js", ".jsx"].includes(ext)) continue;
      if (ent.name.toLowerCase().endsWith(".bak")) continue;
      results.push(full);
    }
  }
  return results;
}

function applyReplacements(text) {
  let out = text;
  let didChange = false;
  for (const r of REPLACEMENTS) {
    if (out.includes(r.from)) {
      out = out.split(r.from).join(r.to);
      didChange = true;
    }
  }
  return { out, didChange };
}

function main() {
  const root = path.resolve(__dirname, "..");
  const files = walk(root);
  let changedCount = 0;
  let totalReplaced = 0;

  for (const file of files) {
    const before = fs.readFileSync(file, "utf8");
    const { out, didChange } = applyReplacements(before);
    if (didChange) {
      // Count rough replacement occurrences by re-running includes checks
      let diff = 0;
      for (const r of REPLACEMENTS) diff += before.split(r.from).length - 1;
      totalReplaced += diff;
      fs.writeFileSync(file, out, "utf8");
      changedCount += 1;
      console.log(`[fix-hreflang-casing] updated: ${path.relative(root, file)}`);
    }
  }

  console.log(
    `[fix-hreflang-casing] Done. Files updated: ${changedCount}, replacements (approx): ${totalReplaced}`
  );
}

main();

