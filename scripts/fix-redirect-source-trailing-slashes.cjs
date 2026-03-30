/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

const SKIP_DIRS = new Set([
  "node_modules",
  ".next",
  "out",
  "dist",
  "coverage",
  ".git",
]);

// Keep this intentionally narrow: only fix the exact trailing-slash-less patterns
// that show up as GSC "Page with redirect" sources.
const REPLACEMENTS = [
  { from: 'toLangHref("/contact")', to: 'toLangHref("/contact/")' },
  { from: 'toLangHref("/service")', to: 'toLangHref("/service/")' },
  { from: 'toLangHref("/turnstile-gate")', to: 'toLangHref("/turnstile-gate/")' },
  { from: 'toLangHref("/interactive-flat-panel")', to: 'toLangHref("/interactive-flat-panel/")' },
  { from: 'toLangHref("/led-display/outdoor-led-display")', to: 'toLangHref("/led-display/outdoor-led-display/")' },
  { from: 'toLangHref("/led-display/receiving-card")', to: 'toLangHref("/led-display/receiving-card/")' },

  { from: 'href: "/contact"', to: 'href: "/contact/"' },
  { from: 'href: "/service"', to: 'href: "/service/"' },
  { from: 'href: "/turnstile-gate"', to: 'href: "/turnstile-gate/"' },
  { from: 'href: "/interactive-flat-panel"', to: 'href: "/interactive-flat-panel/"' },
  { from: 'href: "/led-display/outdoor-led-display"', to: 'href: "/led-display/outdoor-led-display/"' },
  { from: 'href: "/led-display/receiving-card"', to: 'href: "/led-display/receiving-card/"' },
];

function walk(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue;
      out.push(...walk(full));
      continue;
    }
    if (!ent.isFile()) continue;
    const ext = path.extname(ent.name).toLowerCase();
    if (![".ts", ".tsx", ".js", ".jsx"].includes(ext)) continue;
    if (ent.name.toLowerCase().endsWith(".bak")) continue;
    out.push(full);
  }
  return out;
}

function applyReplacements(text) {
  let next = text;
  let changed = false;
  let approx = 0;
  for (const r of REPLACEMENTS) {
    if (next.includes(r.from)) {
      approx += next.split(r.from).length - 1;
      next = next.split(r.from).join(r.to);
      changed = true;
    }
  }
  return { next, changed, approx };
}

function main() {
  const files = walk(ROOT);
  let updatedFiles = 0;
  let totalApproxReplacements = 0;

  for (const file of files) {
    const before = fs.readFileSync(file, "utf8");
    const { next, changed, approx } = applyReplacements(before);
    if (!changed) continue;
    fs.writeFileSync(file, next, "utf8");
    updatedFiles += 1;
    totalApproxReplacements += approx;
    console.log(`[fix-redirect-source-trailing-slashes] updated: ${path.relative(ROOT, file)}`);
  }

  console.log(
    `[fix-redirect-source-trailing-slashes] Done. Files updated: ${updatedFiles}, replacements (approx): ${totalApproxReplacements}`
  );
}

main();

