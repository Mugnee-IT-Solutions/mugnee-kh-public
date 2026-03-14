/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import TurnstileGateClient from "../products/turnstile-gate/TurnstileGateClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/turnstile-gate/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Turnstile Gate Cambodia | Price & Installation",
  description:
    "Turnstile gate Cambodia with speed gate, flap barrier, tripod turnstile, RFID, biometric integration, installation, and quotation support.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/turnstile-gate/",
      "km-kh": "/km/turnstile-gate/",
      "x-default": "/turnstile-gate/",
    },
  },
  openGraph: {
    title: "Turnstile Gate Cambodia | Price & Installation",
    description:
      "Turnstile gate and access control solutions in Cambodia with speed gate, flap barrier, RFID, biometric integration, and local installation.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Turnstile Gate Solutions in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnstile Gate Cambodia | Price & Installation",
    description:
      "Turnstile gate solutions in Cambodia with RFID, biometric integration, installation, and quotation support.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <TurnstileGateClient />;
}



