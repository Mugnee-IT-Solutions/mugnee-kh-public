/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import InteractiveFlatPanelClient from "../products/interactive-flat-panel/InteractiveFlatPanelClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/interactive-flat-panel/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Interactive Flat Panel in Cambodia | Smart Board for School & Office",
  description:
    "Interactive Flat Panel (IFP) in Cambodia for classrooms, meeting rooms and training centers. 4K touchscreen smart board with Android OS, wireless screen sharing, built-in whiteboard, smart board price in Cambodia guidance, and local installation & support.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/interactive-flat-panel/",
      "km-kh": "/km/interactive-flat-panel/",
      "x-default": "/interactive-flat-panel/",
    },
  },
  openGraph: {
    title: "Interactive Flat Panel in Cambodia - Smart Board for School & Office",
    description:
      "4K touchscreen interactive flat panels for education and corporate use, with smart board price in Cambodia guidance, installation, wall mount/stand setup, training, and after-sales support.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Interactive Flat Panel in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Flat Panel in Cambodia - Smart Board for School & Office",
    description:
      "4K touchscreen interactive flat panels for education and corporate use, with smart board price in Cambodia guidance, installation, wall mount/stand setup, training, and after-sales support.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <InteractiveFlatPanelClient />;
}

