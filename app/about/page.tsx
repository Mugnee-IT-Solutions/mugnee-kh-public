/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/about/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "About Mugnee Cambodia | Mission, Vision & Company Story",
  description:
    "Learn about Mugnee Cambodia, our mission, values, and experience delivering LED display and business technology solutions across Cambodia.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": PAGE_PATH,
      "km-kh": `/km/about/`,
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    title: "About Mugnee Cambodia",
    description:
      "Learn about Mugnee Cambodia, our mission, values, and service capability for LED display and business technology solutions.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "About Mugnee Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mugnee Cambodia",
    description:
      "Learn about Mugnee Cambodia, our mission, values, and service capability for LED display and business technology solutions.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AboutClient lang="en" />;
}


