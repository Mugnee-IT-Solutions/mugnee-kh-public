/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import LedDisplayClient from "../products/led-display/LedDisplayClient";
import { SITE_URL } from "../lib/site";

const currentYear = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  timeZone: "Asia/Phnom_Penh",
}).format(new Date());
const LED_DISPLAY_META_TITLE = `LED Display Cambodia: Price, Installation & Video Wall (${currentYear})`;

export function generateMetadata(): Metadata {
  return {
    title: LED_DISPLAY_META_TITLE,
    description:
      "LED display solutions in Cambodia with project-based price planning, engineering BOQ, installation, commissioning, and after-sales support for indoor video walls and outdoor billboards.",
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
      canonical: `${SITE_URL}/led-display/`,
      languages: {
        en: `${SITE_URL}/led-display/`,
        km: `${SITE_URL}/km/led-display/`,
        "x-default": `${SITE_URL}/led-display/`,
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: LED_DISPLAY_META_TITLE,
      description:
        "Cambodia-focused LED display solutions for retail, corporate, hotel, public, and event projects with local engineering, BOQ planning, and installation support.",
      url: `${SITE_URL}/led-display/`,
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
      title: LED_DISPLAY_META_TITLE,
      description:
        "Indoor and outdoor LED display solutions in Cambodia with BOQ-based quotation, installation, and local support.",
      images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
    },
  };
}

export default function Page() {
  return <LedDisplayClient currentYearEn={currentYear} />;
}
