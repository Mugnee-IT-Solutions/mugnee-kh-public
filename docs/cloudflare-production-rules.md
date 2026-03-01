# Cloudflare Production Rules (mugneekh.com)

Apply these rules in Cloudflare Dashboard to complete the live fixes.

## 1) Single-hop www -> non-www + HTTPS
Create a **Redirect Rule** at highest priority:

- If incoming requests match:
  - `http.host eq "www.mugneekh.com"`
- Then:
  - **301**
  - Destination URL: `https://mugneekh.com${uri}`

This removes the current `http://www -> https://www -> https://mugneekh.com` 2-hop chain.

## 2) HTTPS + HSTS at edge
In **SSL/TLS**:

- `Always Use HTTPS`: `On`
- `Automatic HTTPS Rewrites`: `On`
- `Minimum TLS Version`: `TLS 1.2` (or higher)

In **Transform Rules > Response Header Modification** add:

- Header: `Strict-Transport-Security`
- Value: `max-age=31536000; includeSubDomains; preload`
- Action: `Set static`

## 3) Cache policy (fix stale HTML)
Create **Cache Rules** in this order:

1. Rule: Bypass HTML
   - Expression:
     - `http.request.uri.path matches "^/$|^/.+/$"`
   - Action:
     - `Cache eligibility: Bypass cache`

2. Rule: robots/sitemap short cache
   - Expression:
     - `http.request.uri.path in {"/robots.txt" "/sitemap.xml"}`
   - Action:
     - `Edge TTL: 1 hour`
     - `Browser TTL: Respect origin` (or 1 hour)

3. Rule: static assets cache
   - Expression:
     - `http.request.uri.path matches "^/_next/static/|^/images/|\\.(css|js|webp|png|jpg|jpeg|svg|ico)$"`
   - Action:
     - `Cache eligibility: Eligible for cache`
     - `Edge TTL: 1 month`

After rule changes, run **Purge Cache > Purge Everything** once.

## 4) Verification commands
Run and confirm:

```powershell
curl.exe -I http://www.mugneekh.com
curl.exe -I https://mugneekh.com
curl.exe -I https://mugneekh.com/robots.txt
curl.exe -I https://mugneekh.com/sitemap.xml
```

Expected:

- `http://www.mugneekh.com` -> single `301` to `https://mugneekh.com/...`
- `Strict-Transport-Security` present on HTTPS responses
- HTML should not return long edge cache (`cf-cache-status: HIT` with month TTL should stop for HTML)
- `robots.txt` and `sitemap.xml` cache around 1 hour
