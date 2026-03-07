/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const sourcePath = path.join(root, ".htaccess");
const outDir = path.join(root, "out");
const targetPath = path.join(outDir, ".htaccess");

function run() {
  if (!fs.existsSync(sourcePath)) {
    console.log("[sync-htaccess] Root .htaccess not found. Skipping.");
    return;
  }

  if (!fs.existsSync(outDir)) {
    console.log("[sync-htaccess] out/ directory not found. Skipping.");
    return;
  }

  fs.copyFileSync(sourcePath, targetPath);
  console.log("[sync-htaccess] Copied .htaccess to out/.htaccess");
}

run();
