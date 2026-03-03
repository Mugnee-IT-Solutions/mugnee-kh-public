/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/led-display/power-supply/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "LED Power Supply Cambodia | Best Price & Installation",
  description:
    "High-quality LED power supplies in Cambodia for indoor and outdoor LED displays. Stable voltage, safety protections, and expert selection support for long-term reliability.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/power-supply/",
      "km-kh": "/km/led-display/power-supply/",
      "x-default": "/led-display/power-supply/",
    },
  },
  openGraph: {
    title: "LED Power Supply Cambodia | Best Price & Installation",
    description:
      "Reliable LED power supplies for video walls and signage with stable output, safety protections, and professional support.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "LED Power Supply in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Power Supply Cambodia | Best Price & Installation",
    description:
      "Reliable LED power supplies for video walls and signage with stable output, safety protections, and professional support.",
    images: [OG_IMAGE],
  },
  robots: { index: false, follow: true },
};

export { default } from "../../../led-display/power-supply/page";
