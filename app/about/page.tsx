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

const PAGE_PATH = "/about";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "About Mugnee Cambodia | Mission, Vision & Company Story",
  description:
    "Mugnee Cambodia, an affiliate company of Mugnee Multiple, delivers LED display, digital signage, smart classroom, PA system, and access control solutions with end-to-end service across Cambodia.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "About Mugnee Cambodia",
    description:
      "Mugnee Cambodia is an affiliate company of Mugnee Multiple with mission, vision, values, and service capabilities for LED display, signage, smart classroom, PA, and access control in Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AboutClient />;
}


