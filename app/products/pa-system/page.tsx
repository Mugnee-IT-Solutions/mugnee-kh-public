import type { Metadata } from "next";
import PaSystemClient from "./PaSystemClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/products/pa-system";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "PA System in Cambodia | Public Address Solutions & Installation",
  description:
    "Professional PA system solutions in Cambodia: amplifiers, mixers, speakers, microphones, and accessories. Designed for clear announcements in factories, schools, malls, and offices with expert installation support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "PA System in Cambodia",
    description:
      "Clear, reliable public address systems for factories, schools, malls, and offices. Complete supply, design, and installation support by Mugnee Cambodia.",
    url: PAGE_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <PaSystemClient />;
}
