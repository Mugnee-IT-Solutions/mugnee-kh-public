const FALLBACK_SITE_URL = "https://mugneekh.com";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || FALLBACK_SITE_URL;
}

export const SITE_URL = getSiteUrl();


