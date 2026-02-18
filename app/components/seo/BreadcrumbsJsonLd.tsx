"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import JsonLd from "./JsonLd";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const SEGMENT_LABELS: Record<string, { en: string; km: string }> = {
  products: { en: "Products", km: "áž•áž›áž·ážáž•áž›" },
  catalog: { en: "Catalog", km: "áž€áž¶ážáž¶áž¡áž»áž€" },
  "led-display": { en: "LED Display", km: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED" },
  "indoor-led-display": { en: "Indoor LED Display", km: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED ážáž¶áž„áž€áŸ’áž“áž»áž„" },
  "outdoor-led-display": { en: "Outdoor LED Display", km: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED ážáž¶áž„áž€áŸ’ážšáŸ…" },
  "receiving-card": { en: "Receiving Card", km: "áž€áž¶ážáž‘áž‘áž½áž›ážŸáž‰áŸ’áž‰áž¶" },
  "video-processor": { en: "Video Processor", km: "áž§áž”áž€ážšážŽáŸážŠáŸ†ážŽáž¾ážšáž€áž¶ážšážœáž¸ážŠáŸáž¢áž¼" },
  "power-supply": { en: "Power Supply", km: "áž§áž”áž€ážšážŽáŸáž•áŸ’áž‚ážáŸ‹áž•áŸ’áž‚áž„áŸ‹ážáž¶áž˜áž–áž›" },
  "interactive-flat-panel": { en: "Interactive Flat Panel", km: "áž¢áŸáž€áŸ’ážšáž„áŸ‹áž¢áž“áŸ’ážážšáž€áž˜áŸ’áž˜" },
  "pa-system": { en: "PA System", km: "áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA" },
  "turnstile-gate": { en: "Turnstile Gate", km: "áž…áŸ’ážšáž€áž‘áŸ’ážœáž¶ážš Turnstile" },
  solutions: { en: "Solutions", km: "ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™" },
  service: { en: "Service & Support", km: "ážŸáŸážœáž¶áž€áž˜áŸ’áž˜ áž“áž·áž„áž‚áž¶áŸ†áž‘áŸ’ážš" },
  about: { en: "About", km: "áž¢áŸ†áž–áž¸áž™áž¾áž„" },
  "message-from-ceo": { en: "Message from CEO", km: "ážŸáž¶ážšáž–áž¸ CEO" },
  contact: { en: "Contact", km: "áž‘áž¶áž€áŸ‹áž‘áž„áž™áž¾áž„" },
  projects: { en: "Projects", km: "áž‚áž˜áŸ’ážšáŸ„áž„" },
};

function prettifySegment(segment: string) {
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (ch) => ch.toUpperCase());
}

export default function BreadcrumbsJsonLd() {
  const pathname = usePathname() || "/";

  const jsonLd = useMemo(() => {
    const cleanPath = pathname.replace(/\/+$/, "") || "/";
    const segments = cleanPath === "/" ? [] : cleanPath.split("/").filter(Boolean);

    const itemListElement = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      ...segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}/`;
        const label = SEGMENT_LABELS[segment]?.en || prettifySegment(segment);
        return {
          "@type": "ListItem",
          position: index + 2,
          name: label,
          item: `${SITE_URL}${href}`,
        };
      }),
    ];

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    };
  }, [pathname]);

  return <JsonLd id="global-breadcrumbs-jsonld" data={jsonLd} />;
}


