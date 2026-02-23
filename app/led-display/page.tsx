import type { Metadata } from "next";
import LedDisplayClient from "../products/led-display/LedDisplayClient";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "LED Display Price in Cambodia 2026",
  description:
    "LED display solutions in Cambodia for indoor video wall, outdoor billboard, and commercial signage with BOQ planning, installation, commissioning, and local after-sales support.",
  keywords: [
    "LED display Cambodia",
    "LED screen Cambodia",
    "LED display price Cambodia",
    "LED Screen Supplier Cambodia",
    "LED Billboard Cambodia",
    "Outdoor LED Display Cambodia",
    "Indoor LED Video Wall Cambodia",
    "LED Display Phnom Penh",
    "LED Screen Phnom Penh",
    "indoor LED display Cambodia",
    "outdoor LED billboard Cambodia",
    "LED video wall Cambodia",
    "digital signage Cambodia",
    "LED installation Phnom Penh",
  ],
  alternates: {
    canonical: `${SITE_URL}/led-display`,
    languages: {
      en: `${SITE_URL}/led-display`,
      km: `${SITE_URL}/led-display?lang=km`,
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "LED Display Price in Cambodia 2026",
    description:
      "Cambodia-focused LED display solutions for retail, corporate, hotels, events, and outdoor advertising with local engineering and after-sales support.",
    url: `${SITE_URL}/led-display`,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero/cambodia-led-hero.webp`,
        width: 1200,
        height: 630,
        alt: "LED display solutions in Cambodia by Mugnee Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Display Price in Cambodia 2026",
    description:
      "Indoor and outdoor LED display solutions in Cambodia with project-based quotation and local support.",
    images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
  },
};

export default function Page() {
  return <LedDisplayClient />;
}
