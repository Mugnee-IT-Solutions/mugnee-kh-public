/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import PaSystemClient from "../products/pa-system/PaSystemClient";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/pa-system/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "PA System Cambodia | Price, Design & Installation",
  description:
    "PA system Cambodia with amplifiers, speakers, paging microphones, zone planning, installation, and quotation support for schools, factories, malls, and offices.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/pa-system/",
      "km-kh": "/km/pa-system/",
      "x-default": "/pa-system/",
    },
  },
  openGraph: {
    title: "PA System Cambodia | Price, Design & Installation",
    description:
      "Public address system solutions in Cambodia with speakers, amplifiers, paging, zone design, installation, and local support by Mugnee Cambodia.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "PA System Solutions in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PA System Cambodia | Price, Design & Installation",
    description:
      "Public address system solutions in Cambodia with speakers, amplifiers, paging, installation, and quotation support.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PaSystemClient />;
}



