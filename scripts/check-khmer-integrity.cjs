const fs = require("fs");
const path = require("path");

const ROOT = "app";
const SKIP_DIRS = new Set(["node_modules", ".next", "out", ".git"]);
const EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md"]);

const KM_MARKERS = [
  /const\s+KM\s*=/,
  /const\s+km\s*=/,
  /\b(?:qKm|aKm|titleKm|labelKm|descriptionKm)\s*:\s*["'`]/,
  /\b(?:heroTitleOverrideKm|heroIntroOverrideKm|trustTitleOverrideKm|trustDescOverrideKm)\s*=\s*["'`]/,
  /\b(?:faqItemsOverrideKm|internalLinkClusterOverrideKm)\s*=\s*{/,
];

const TRIPLE_QUESTION = /\?{3,}/;
const KHMER_RE = /[\u1780-\u17FF]/;

const issues = [];

function walk(dirPath, outFiles) {
  if (!fs.existsSync(dirPath)) return;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(fullPath, outFiles);
      continue;
    }
    if (!EXTENSIONS.has(path.extname(fullPath))) continue;
    outFiles.push(fullPath);
  }
}

const files = [];
walk(ROOT, files);

for (const filePath of files) {
  const content = fs.readFileSync(filePath, "utf8");
  const hasKmMarkers = KM_MARKERS.some((marker) => marker.test(content));

  if (!hasKmMarkers) continue;

  if (TRIPLE_QUESTION.test(content)) {
    issues.push(
      `${filePath}: contains repeated "?" characters in a Khmer-localized file (possible corruption).`
    );
  }

  if (!KHMER_RE.test(content)) {
    issues.push(
      `${filePath}: has Khmer localization markers but no Khmer Unicode characters.`
    );
  }
}

if (issues.length > 0) {
  console.error("Khmer integrity check failed:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log("Khmer integrity check passed.");
