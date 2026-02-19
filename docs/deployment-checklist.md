# Mugnee KH Deployment Checklist (Static Export)

## 1) Build
- Run: `npm run build`
- Confirm `out/` is generated

## 2) Upload Package
- Upload contents of `out/` to your domain document root (`public_html`), not inside a subfolder
- Or upload `deploy-mugnee-kh-static.zip` and extract in `public_html`

## 3) Critical Files
- Confirm these exist after upload:
  - `.htaccess`
  - `robots.txt`
  - `sitemap.xml`
  - `led-display/index.html`

## 4) Redirect/Canonical Checks
- Test these URLs should return server-side `301`:
  - `/products/led-display/` -> `/led-display/`
  - `/products/indoor-led-display/` -> `/led-display/indoor-led-display/`
  - `/products/outdoor-led-display/` -> `/led-display/outdoor-led-display/`

## 5) SEO Validation
- Check page source for `/led-display/`:
  - canonical URL points to `/led-display/`
  - LocalBusiness + Service + FAQ schema present
- Confirm `sitemap.xml` contains `/led-display/`

## 6) Google Search Console (Post Deploy)
- Inspect and request indexing for:
  - `/`
  - `/led-display/`
  - `/led-display/indoor-led-display/`
  - `/led-display/outdoor-led-display/`
- Submit sitemap: `https://mugneekh.com/sitemap.xml`

