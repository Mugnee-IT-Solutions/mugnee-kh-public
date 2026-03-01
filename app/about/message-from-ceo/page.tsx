/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import MessageFromCeoClient from "./MessageFromCeoClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/about/message-from-ceo/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Message from CEO | Mugnee Cambodia",
  description:
    "Read the CEO message from Mugnee Cambodia about vision, innovation, customer commitment, and long-term technology partnership.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Message from CEO | Mugnee Cambodia",
    description:
      "A leadership message on innovation, integrity, and building reliable LED, signage, PA, and access control solutions in Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Message from CEO - Mugnee Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Message from CEO | Mugnee Cambodia",
    description:
      "A leadership message on innovation, integrity, and building reliable LED, signage, PA, and access control solutions in Cambodia.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <MessageFromCeoClient />;
}


