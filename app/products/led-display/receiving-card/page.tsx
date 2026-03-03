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

const PAGE_PATH = "/led-display/receiving-card/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "LED Receiving Card Cambodia | Best Price & Installation",
  description:
    "High-performance LED receiving cards for indoor and outdoor LED displays in Cambodia. Stable data transfer, wide IC compatibility, flexible scan modes, and professional setup support.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/led-display/receiving-card/",
      "km-kh": "/km/led-display/receiving-card/",
      "x-default": "/led-display/receiving-card/",
    },
  },
  openGraph: {
    title: "LED Receiving Card Cambodia | Best Price & Installation",
    description:
      "Reliable receiving cards for LED video walls with stable data transfer, wide module compatibility, and expert configuration support.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "LED Receiving Card in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Receiving Card Cambodia | Best Price & Installation",
    description:
      "Reliable receiving cards for LED video walls with stable data transfer, wide module compatibility, and expert configuration support.",
    images: [OG_IMAGE],
  },
  robots: { index: false, follow: true },
};

export { default } from "../../../led-display/receiving-card/page";
