/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/video-processor/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "LED Video Processor Cambodia | Best Price & Installation",
  description:
    "Professional LED video processors in Cambodia for smooth scaling, multi-input switching, and stable LED wall output. Ideal for indoor & outdoor LED displays with expert setup support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "LED Video Processor Cambodia | Best Price & Installation",
    description:
      "Reliable video processors for LED walls with multi-input switching, clean scaling, and stable output. Expert configuration & support by Mugnee Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "LED Video Processor in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Video Processor Cambodia | Best Price & Installation",
    description:
      "Reliable video processors for LED walls with multi-input switching, clean scaling, and stable output. Expert configuration & support by Mugnee Cambodia.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export { default } from "../../../led-display/video-processor/page";
