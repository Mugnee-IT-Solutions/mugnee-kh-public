"use client";

import { useEffect } from "react";

const RELOAD_GUARD_KEY = "mugnee_chunk_recovery_once";

function reloadOnceWithCacheBuster() {
  try {
    if (sessionStorage.getItem(RELOAD_GUARD_KEY) === "1") return;
    sessionStorage.setItem(RELOAD_GUARD_KEY, "1");

    const url = new URL(window.location.href);
    url.searchParams.set("_v", Date.now().toString());
    window.location.replace(url.toString());
  } catch {
    // Fallback if sessionStorage is blocked.
    window.location.reload();
  }
}

function isChunkLoadMessage(message: string) {
  const normalized = message.toLowerCase();
  return (
    normalized.includes("chunkloaderror") ||
    normalized.includes("loading chunk") ||
    normalized.includes("failed to fetch dynamically imported module")
  );
}

export default function ChunkRecovery() {
  useEffect(() => {
    // Remove previously registered service workers from older builds/plugins.
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
        .catch(() => undefined);
    }

    const onError = (event: ErrorEvent) => {
      const target = event.target as HTMLScriptElement | null;
      const src = target?.src ?? "";
      const message = event.message ?? "";

      if (src.includes("/_next/static/chunks/") || isChunkLoadMessage(message)) {
        reloadOnceWithCacheBuster();
      }
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason =
        typeof event.reason === "string"
          ? event.reason
          : event.reason instanceof Error
            ? event.reason.message
            : "";

      if (isChunkLoadMessage(reason)) {
        reloadOnceWithCacheBuster();
      }
    };

    window.addEventListener("error", onError, true);
    window.addEventListener("unhandledrejection", onUnhandledRejection);

    return () => {
      window.removeEventListener("error", onError, true);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return null;
}
