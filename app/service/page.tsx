/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import ServiceClient from "./ServiceClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/service";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Service & Support in Cambodia | Installation, AMC, Warranty",
  description:
    "Mugnee Cambodia provides installation, commissioning, AMC, troubleshooting, and warranty support for LED display, signage, PA, and access control systems across Cambodia.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: PAGE_PATH,
      km: `${PAGE_PATH}?lang=km`,
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    title: "Service & Support in Cambodia | Installation, AMC, Warranty",
    description:
      "Cambodia-wide service support: site survey, installation, preventive maintenance, troubleshooting, spare parts, and warranty services.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Service and Support in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service & Support in Cambodia | Installation, AMC, Warranty",
    description:
      "Cambodia-wide service support: site survey, installation, preventive maintenance, troubleshooting, spare parts, and warranty services.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ServiceClient />;
}


