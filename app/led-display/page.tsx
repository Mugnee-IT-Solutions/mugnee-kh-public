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
const LED_DISPLAY_META_TITLE =
  "LED Display Cambodia | LED Screen Supplier Phnom Penh";
const LED_DISPLAY_META_DESCRIPTION =
  "Looking for a reliable LED display supplier in Cambodia? Mugnee Multiple Co., Ltd provides indoor & outdoor LED screens, LED advertising screen solutions, video walls and installation services in Phnom Penh.";

export function generateMetadata(): Metadata {
  return {
    title: LED_DISPLAY_META_TITLE,
    description: LED_DISPLAY_META_DESCRIPTION,
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
      "LED advertising screen Cambodia",
      "indoor LED display Cambodia",
      "outdoor LED billboard Cambodia",
      "LED video wall Cambodia",
      "digital signage Cambodia",
      "LED installation Phnom Penh",
    ],
    alternates: {
      canonical: `${SITE_URL}/led-display/`,
      languages: {
        "en-kh": `${SITE_URL}/led-display/`,
        "km-kh": `${SITE_URL}/km/led-display/`,
        "x-default": `${SITE_URL}/led-display/`,
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: LED_DISPLAY_META_TITLE,
      description: LED_DISPLAY_META_DESCRIPTION,
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
      description: LED_DISPLAY_META_DESCRIPTION,
      images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
    },
  };
}

export default function Page() {
  return <LedDisplayClient currentYearEn={currentYear} />;
}
