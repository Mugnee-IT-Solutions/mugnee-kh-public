import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/solutions";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Solutions in Cambodia | LED Display, Digital Signage, Access Control",
  description:
    "Explore Cambodia-ready solutions from Mugnee Cambodia: LED display, digital signage, smart classroom, access control, PA systems, and turnstile gates. Local design, installation, and long-term support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Solutions in Cambodia | LED Display, Digital Signage, Access Control",
    description:
      "Local Cambodia solutions for LED display, digital signage, smart classrooms, access control, PA systems, and turnstile gates with end-to-end delivery.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <SolutionsClient />;
}


