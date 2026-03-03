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
  title: "Commercial PA System Cambodia | Design Supply & Installation",
  description:
    "Professional PA system solutions in Cambodia: amplifiers, mixers, speakers, microphones, and accessories. Designed for clear announcements in factories, schools, malls, and offices with expert installation support.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/pa-system/",
      "km-kh": "/km/pa-system/",
      "x-default": "/pa-system/",
    },
  },
  openGraph: {
    title: "PA System in Cambodia",
    description:
      "Clear, reliable public address systems for factories, schools, malls, and offices. Complete supply, design, and installation support by Mugnee Cambodia.",
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
    title: "PA System in Cambodia",
    description:
      "Clear, reliable public address systems for factories, schools, malls, and offices. Complete supply, design, and installation support by Mugnee Cambodia.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PaSystemClient />;
}



