type EventParams = Record<string, string | number | boolean | undefined>;

type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const maybe = (window as Window & { gtag?: GtagFn }).gtag;
  return typeof maybe === "function" ? maybe : null;
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", eventName, params);
}

