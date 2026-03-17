const FALLBACK_SITE_URL = "https://mugneekh.com";

function normalizeSiteUrl(raw: string) {
  const trimmed = raw.trim();
  if (!trimmed) return FALLBACK_SITE_URL;

  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const url = new URL(candidate);

    // Enforce a single canonical host for production.
    if (url.hostname.toLowerCase() === "www.mugneekh.com") {
      url.hostname = "mugneekh.com";
    }

    url.protocol = "https:";
    url.search = "";
    url.hash = "";

    const pathPart = url.pathname === "/" ? "" : url.pathname.replace(/\/$/, "");
    return `${url.origin}${pathPart}`;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  return raw ? normalizeSiteUrl(raw) : FALLBACK_SITE_URL;
}

export const SITE_URL = getSiteUrl();
