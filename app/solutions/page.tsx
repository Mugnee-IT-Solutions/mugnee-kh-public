/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/solutions/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Cambodia Solutions | LED Display & Access Control",
  description:
    "Cambodia-ready solutions for LED display, digital signage, smart classrooms, access control, PA systems, and turnstile gates.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": PAGE_PATH,
      "km-kh": `/km/solutions/`,
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    title: "Solutions in Cambodia | LED Display, Digital Signage, Access Control",
    description:
      "Local Cambodia solutions for LED display, digital signage, smart classrooms, access control, PA systems, and turnstile gates with end-to-end delivery.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Solutions in Cambodia by Mugnee Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions in Cambodia | LED Display, Digital Signage, Access Control",
    description:
      "Local Cambodia solutions for LED display, digital signage, smart classrooms, access control, PA systems, and turnstile gates with end-to-end delivery.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <SolutionsClient forcedLang="en" />;
}


