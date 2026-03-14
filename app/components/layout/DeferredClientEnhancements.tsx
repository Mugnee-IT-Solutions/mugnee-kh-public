"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ClientEnhancements = dynamic(() => import("./ClientEnhancements"), {
  ssr: false,
  loading: () => null,
});

export default function DeferredClientEnhancements() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    let cancelled = false;
    let timeoutId: number | undefined;

    const mount = () => {
      if (!cancelled) setReady(true);
    };

    if (typeof win.requestIdleCallback === "function") {
      const idleId = win.requestIdleCallback(mount, { timeout: 1200 });
      return () => {
        cancelled = true;
        win.cancelIdleCallback?.(idleId);
      };
    }

    timeoutId = win.setTimeout(mount, 250);
    return () => {
      cancelled = true;
      if (timeoutId) win.clearTimeout(timeoutId);
    };
  }, []);

  return ready ? <ClientEnhancements /> : null;
}
