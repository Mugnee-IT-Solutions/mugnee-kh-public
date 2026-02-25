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

export const metadata: Metadata = {
  title: "Service & Support in Cambodia | Installation, AMC, Warranty",
  description:
    "Mugnee Cambodia provides installation, commissioning, AMC, troubleshooting, and warranty support for LED display, signage, PA, and access control systems across Cambodia.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Service & Support in Cambodia | Installation, AMC, Warranty",
    description:
      "Cambodia-wide service support: site survey, installation, preventive maintenance, troubleshooting, spare parts, and warranty services.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ServiceClient />;
}


