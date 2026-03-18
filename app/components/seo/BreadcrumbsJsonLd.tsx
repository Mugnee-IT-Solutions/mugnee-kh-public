"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import JsonLd from "./JsonLd";
import { SITE_URL } from "../../lib/site";

const SEGMENT_LABELS: Record<string, { en: string; km: string }> = {
  products: { en: "Products", km: "ផលិតផល" },
  catalog: { en: "Catalog", km: "កាតាឡុក" },
  "led-display": { en: "LED Display", km: "អេក្រង់ LED" },
  "indoor-led-display": { en: "Indoor LED Display", km: "អេក្រង់ LED ខាងក្នុង" },
  "outdoor-led-display": { en: "Outdoor LED Display", km: "អេក្រង់ LED ខាងក្រៅ" },
  "receiving-card": { en: "Receiving Card", km: "កាតទទួលសញ្ញា" },
  "video-processor": { en: "Video Processor", km: "ឧបករណ៍ដំណើរការវីដេអូ" },
  "power-supply": { en: "Power Supply", km: "ឧបករណ៍ផ្គត់ផ្គង់ថាមពល" },
  "interactive-flat-panel": { en: "Interactive Flat Panel", km: "អេក្រង់អន្តរកម្ម" },
  "pa-system": { en: "PA System", km: "ប្រព័ន្ធ PA" },
  "turnstile-gate": { en: "Turnstile Gate", km: "ច្រកទ្វារ Turnstile" },
  solutions: { en: "Solutions", km: "ដំណោះស្រាយ" },
  service: { en: "Service & Support", km: "សេវាកម្ម និងគាំទ្រ" },
  about: { en: "About", km: "អំពីយើង" },
  "message-from-ceo": { en: "Message from CEO", km: "សារពី CEO" },
  contact: { en: "Contact", km: "ទាក់ទងយើង" },
  projects: { en: "Projects", km: "គម្រោង" },
  blog: { en: "Blog", km: "ប្លក់" },
  "return-policy": { en: "Return Policy", km: "គោលការណ៍ត្រឡប់ទំនិញ" },
  "terms-and-conditions": { en: "Terms & Conditions", km: "លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀង" },
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
    const segments =
      cleanPath === "/"
        ? []
        : cleanPath
            .split("/")
            .filter(Boolean)
            .map((segment) => decodeURIComponent(segment));

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
      "@id": `${SITE_URL}${cleanPath}#breadcrumb`,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement,
    };
  }, [pathname]);

  return <JsonLd id="global-breadcrumbs-jsonld" data={jsonLd} />;
}


