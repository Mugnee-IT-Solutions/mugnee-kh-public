const fs = require("fs");
const path = require("path");

const ROOTS = ["app", "scripts"];
const SKIP_DIRS = new Set(["node_modules", ".next", "out", ".git"]);
const EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md"]);

const BAD_SEQUENCES = [
  "\u00C3\u0192",
  "\u00C3\u201A",
  "\u00E2\u20AC\u2122",
  "\u00E2\u20AC\u0153",
  "\u00E2\u20AC\u201D",
  "\u00C3\u00A1\u00C5\u00BE",
  "\u00C3\u00A1\u0178",
  "\u00E1\u017E",
  "\uFFFD",
];

const offenders = [];

function walk(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(fullPath);
      continue;
    }
    if (!EXTENSIONS.has(path.extname(fullPath))) continue;
    const content = fs.readFileSync(fullPath, "utf8");
    if (BAD_SEQUENCES.some((s) => content.includes(s))) offenders.push(fullPath);
  }
}

for (const root of ROOTS) walk(root);

if (offenders.length > 0) {
  console.error("Detected possible mojibake/encoding issues in:");
  for (const filePath of offenders) console.error(`- ${filePath}`);
  process.exit(1);
}

console.log("Encoding check passed: no mojibake signatures found.");
