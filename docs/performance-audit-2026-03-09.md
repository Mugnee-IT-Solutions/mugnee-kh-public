# Performance Audit Report
Date: 2026-03-09
Project: mugnee-kh
Auditor: Codex (local environment audit)

## Scope
- Build stability and generation performance
- Server response time snapshot (local `next start`)
- Static output weight (`out/`)
- JS/CSS payload footprint (`.next/static`)
- Cache header behavior snapshot

## Method
- Ran `npm run build` (production build pipeline)
- Measured selected routes with `Invoke-WebRequest` timing (cold + warm local requests)
- Collected largest files from `out/` and `.next/static/chunks`
- Checked header behavior with `curl -I` and `Invoke-WebRequest -Method Head`

## Build Status
- Result: PASS
- `next build --webpack` compiled successfully
- 520 static pages generated
- Khmer encoding/integrity checks passed
- Postbuild HTML lang verification passed (`/km` => `lang="km"`, others => `lang="en"`)

## Local Response Snapshot
Environment note: local machine results, not field RUM.

### Cold request timings
- `/` -> 1629.39 ms, 152467 bytes
- `/km/` -> 528.30 ms, 152915 bytes
- `/led-display/` -> 740.08 ms, 172749 bytes
- `/km/led-display/` -> 417.60 ms, 210563 bytes
- `/contact/` -> 646.30 ms, 88936 bytes
- `/km/contact/` -> 561.50 ms, 91395 bytes

### Warm request timings
- `/` -> 555.49 ms, 152338 bytes
- `/km/` -> 549.66 ms, 152926 bytes
- `/led-display/` -> 519.37 ms, 172750 bytes
- `/km/led-display/` -> 335.53 ms, 210559 bytes
- `/contact/` -> 220.15 ms, 88937 bytes
- `/km/contact/` -> 239.21 ms, 91395 bytes

## Payload and Asset Footprint
- `out/` total: 89.76 MB
- `.next/` total: 520.63 MB (build artifacts, not all shipped to user)
- JS in `.next/static`: 104 files, 1.77 MB total, 7 files > 100 KB
- CSS in `.next/static`: 1 file, 63.28 KB

### Largest static-export HTML files
- `out/blog/index.html` -> 229791 bytes
- `out/km/led-display/indoor-led-display/index.html` -> 210031 bytes
- `out/km/led-display/outdoor-led-display/index.html` -> 209504 bytes
- `out/km/led-display/index.html` -> 187334 bytes

### Images
- Total images in `out/images`: 144
- >200 KB images: 14
- >300 KB images: 0
- Total image weight: 8.68 MB

## Cache/Header Snapshot (local `next start`)
- HTML routes: `Cache-Control: no-store, must-revalidate`
- JS chunk sample (`/_next/static/chunks/main-app.js`): `Cache-Control: no-store, must-revalidate`
- Static image sample: `Cache-Control: public, max-age=0`

## Findings
1. Medium: cache policy in local `next start` is conservative (`no-store`) for HTML and JS sample.
2. Medium: several critical landing pages have large HTML (>180 KB), likely increasing TTFB and parsing cost.
3. Low/Medium: 14 images are still >200 KB (acceptable but can be reduced further for slower networks).
4. Good: JS and CSS totals are moderate for this site size; no obvious bundle explosion.
5. Good: build pipeline, i18n integrity, and static generation are stable.

## Risk Assessment
- Deployment readiness: GOOD for static export flow.
- Performance risk: MODERATE on slower mobile networks due to heavy HTML and conservative cache behavior in server mode.

## Priority Recommendations
1. High impact:
   - Ensure CDN/server cache headers for static assets (`_next/static`, images, fonts) are long-lived with immutable hashing.
2. High impact:
   - Reduce HTML size of heavy pages (`/blog`, `/km/led-display/*`) by trimming above-the-fold payload and large inline blocks.
3. Medium impact:
   - Convert non-critical sections to lazy-loaded client components or deferred hydration where possible.
4. Medium impact:
   - Recompress top 14 heavy images to target 120-180 KB where visual quality allows.
5. Validation step:
   - Run Lighthouse mobile (real browser) on production URL and compare before/after for LCP, TBT, CLS.

## Limitations
- This report does not include CrUX field data.
- Lighthouse/PageSpeed synthetic scores were not executed in this environment.
- Header behavior for final production may differ if served from Apache/CDN after export.
