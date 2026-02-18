import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/contact";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Contact Mugnee Cambodia | Sales & Support",
  description:
    "Contact Mugnee Cambodia for LED display, digital signage, smart classroom, PA system, and access control solutions. Get quotation, installation support, or service assistance.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Contact Mugnee Cambodia",
    description:
      "Reach Mugnee Cambodia for sales, service, and project inquiries with local support and fast response.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <ContactClient />;
}


