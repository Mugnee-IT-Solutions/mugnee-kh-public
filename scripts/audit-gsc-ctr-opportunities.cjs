/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const DOWNLOAD_ROOT = path.resolve("C:\\Users\\Mugnee\\Downloads\\GSC report");

function readCsv(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const header = lines[0].split(",").map((s) => s.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(","); // values here are simple (URLs, numbers, %)
    const row = {};
    for (let j = 0; j < header.length; j++) row[header[j]] = cols[j];
    rows.push(row);
  }
  return rows;
}

function parsePct(raw) {
  if (!raw) return null;
  const v = String(raw).trim();
  if (!v) return null;
  const n = Number(v.replace("%", ""));
  return Number.isFinite(n) ? n : null;
}

function parseNum(raw) {
  if (raw == null) return null;
  const v = String(raw).trim();
  if (!v) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function summarizeDeviceFolder(folderName) {
  const folder = folderName;
  const filters = readCsv(path.join(folder, "Filters.csv"));
  let device = "unknown";
  for (const r of filters) {
    if (r.Filter === "Device") device = r.Value;
  }

  const pages = readCsv(path.join(folder, "Pages.csv"));
  const queries = readCsv(path.join(folder, "Queries.csv"));

  // Identify top CTR opportunities:
  // - Impressions high (>=10) and CTR low (<=2%)
  // - position between 4 and 20 (so changing snippet can help)
  const pageOpps = [];
  for (const p of pages) {
    const url = p[Object.keys(p)[0]]; // "Top pages" header oddities are already fixed by CSV.
    const clicks = parseNum(p.Clicks);
    const impressions = parseNum(p.Impressions);
    const ctr = parsePct(p.CTR);
    const position = parseNum(p.Position);
    // URL field in Pages.csv is first column "Top pages" (named "Top pages")
    const url2 = p["Top pages"] ?? p["Top pages".toString()] ?? p["Top pages "] ?? url;
    const finalUrl = url2 || url;
    if (!finalUrl) continue;
    if (impressions == null || impressions < 10) continue;
    if (ctr == null || ctr > 2) continue;
    if (position == null) continue;
    pageOpps.push({ url: finalUrl, clicks: clicks ?? 0, impressions, ctr, position });
  }

  pageOpps.sort((a, b) => {
    // prioritize impressions descending then position ascending then ctr ascending
    if (b.impressions !== a.impressions) return b.impressions - a.impressions;
    if (a.position !== b.position) return a.position - b.position;
    return a.ctr - b.ctr;
  });

  const topQueries = [];
  for (const q of queries) {
    const query = q["Top queries"] ?? q["Top queries "] ?? q["Top queries".toString()];
    const clicks = parseNum(q.Clicks);
    const impressions = parseNum(q.Impressions);
    const ctr = parsePct(q.CTR);
    const position = parseNum(q.Position);
    if (!query) continue;
    if (impressions == null || impressions < 10) continue;
    if (ctr == null || ctr > 2) continue;
    if (position == null) continue;
    topQueries.push({ query, clicks: clicks ?? 0, impressions, ctr, position });
  }

  topQueries.sort((a, b) => {
    if (b.impressions !== a.impressions) return b.impressions - a.impressions;
    if (a.position !== b.position) return a.position - b.position;
    return a.ctr - b.ctr;
  });

  return { device, pageOpps, topQueries };
}

function main() {
  function walk(dir) {
    const out = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        out.push(...walk(full));
      } else {
        if (ent.name.toLowerCase() === "pages.csv") out.push(full);
      }
    }
    return out;
  }

  const pagesCsvPaths = walk(DOWNLOAD_ROOT);
  console.log(`[audit-gsc-ctr-opportunities] Found Pages.csv files: ${pagesCsvPaths.length}`);
  // Use parent folder for each Pages.csv found
  const candidateFolders = Array.from(
    new Set(pagesCsvPaths.map((p) => path.dirname(p)))
  );

  const results = candidateFolders.map((folderPath) => summarizeDeviceFolder(folderPath));

  for (const r of results) {
    console.log(`\n=== Device: ${r.device} ===`);
    console.log(`Pages low-CTR opps (impr>=10, CTR<=2%): ${r.pageOpps.length}`);
    for (const item of r.pageOpps.slice(0, 10)) {
      console.log(`  - ${item.url} | impr=${item.impressions} ctr=${item.ctr}% pos=${item.position} clicks=${item.clicks}`);
    }
    console.log(`Queries low-CTR opps (impr>=10, CTR<=2%): ${r.topQueries.length}`);
    for (const item of r.topQueries.slice(0, 10)) {
      console.log(`  - ${item.query} | impr=${item.impressions} ctr=${item.ctr}% pos=${item.position} clicks=${item.clicks}`);
    }
  }
}

main();

