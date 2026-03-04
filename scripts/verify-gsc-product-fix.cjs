/* eslint-disable no-console */
const https = require("https");
const http = require("http");

const SITE_URL = (process.env.VERIFY_SITE_URL || "https://mugneekh.com").replace(/\/$/, "");
const SAMPLE_SLUG = process.env.VERIFY_PRODUCT_SLUG || "p3-indoor-led-display-module";

const oldUrl = `${SITE_URL}/products/catalog/${SAMPLE_SLUG}/`;
const newUrl = `${SITE_URL}/products/${SAMPLE_SLUG}/`;

function request(url, method = "GET", maxRedirects = 8) {
  const client = url.startsWith("https:") ? https : http;
  return new Promise((resolve, reject) => {
    const req = client.request(
      url,
      { method, headers: { "User-Agent": "mugnee-gsc-verify/1.0" } },
      (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", async () => {
          const body = Buffer.concat(chunks).toString("utf8");
          const status = res.statusCode || 0;
          const location = res.headers.location || "";

          if (
            maxRedirects > 0 &&
            status >= 300 &&
            status < 400 &&
            typeof location === "string" &&
            location.length > 0
          ) {
            const nextUrl = new URL(location, url).toString();
            try {
              const redirected = await request(nextUrl, method, maxRedirects - 1);
              resolve({
                ...redirected,
                redirectChain: [{ status, url, location }, ...(redirected.redirectChain || [])],
              });
            } catch (e) {
              reject(e);
            }
            return;
          }

          resolve({ status, url, location, body, headers: res.headers, redirectChain: [] });
        });
      }
    );
    req.on("error", reject);
    req.end();
  });
}

function hasProductJsonLd(html) {
  return /"@type"\s*:\s*"Product"/.test(html);
}

async function run() {
  console.log(`Verifying site: ${SITE_URL}`);
  console.log(`Sample slug: ${SAMPLE_SLUG}`);
  console.log("");

  const oldRes = await request(oldUrl, "GET");
  const newRes = await request(newUrl, "GET");

  const oldFinalUrl = oldRes.redirectChain.length
    ? oldRes.redirectChain[oldRes.redirectChain.length - 1].location
    : oldRes.url;

  const checks = [
    {
      name: "Old catalog URL returns redirect",
      ok: oldRes.redirectChain.length > 0,
      details: `${oldUrl} => status ${oldRes.status}`,
    },
    {
      name: "Old catalog URL redirects to /products/:slug/",
      ok: /\/products\/[^/]+\/?$/.test(oldFinalUrl),
      details: `final location: ${oldFinalUrl}`,
    },
    {
      name: "New product URL is reachable (200)",
      ok: newRes.status === 200,
      details: `${newUrl} => status ${newRes.status}`,
    },
    {
      name: "No Product JSON-LD on old URL final HTML",
      ok: !hasProductJsonLd(oldRes.body),
      details: `Product JSON-LD found: ${hasProductJsonLd(oldRes.body)}`,
    },
    {
      name: "No Product JSON-LD on new URL HTML",
      ok: !hasProductJsonLd(newRes.body),
      details: `Product JSON-LD found: ${hasProductJsonLd(newRes.body)}`,
    },
  ];

  let failed = 0;
  for (const c of checks) {
    if (c.ok) {
      console.log(`[PASS] ${c.name}`);
    } else {
      failed += 1;
      console.log(`[FAIL] ${c.name}`);
    }
    console.log(`       ${c.details}`);
  }

  console.log("");
  if (failed > 0) {
    console.error(`Verification failed (${failed} checks).`);
    process.exit(1);
  }
  console.log("Verification passed. Ready for GSC Validate Fix.");
}

run().catch((err) => {
  console.error("Verification error:", err.message || err);
  process.exit(1);
});
