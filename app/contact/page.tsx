/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/contact/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Contact Mugnee Cambodia | Sales & Support",
  description:
    "Contact Mugnee Cambodia for LED display, digital signage, smart classroom, PA system, and access control solutions. Get quotation, installation support, or service assistance.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: PAGE_PATH,
      km: `/km/contact/`,
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    title: "Contact Mugnee Cambodia",
    description:
      "Reach Mugnee Cambodia for sales, service, and project inquiries with local support and fast response.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Contact Mugnee Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mugnee Cambodia",
    description:
      "Reach Mugnee Cambodia for sales, service, and project inquiries with local support and fast response.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ContactClient />;
}


