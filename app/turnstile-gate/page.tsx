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

const PAGE_PATH = "/turnstile-gate";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "Commercial Turnstile Gate Cambodia | Supply & Installation",
  description:
    "Professional turnstile gate solutions in Cambodia for offices, factories, schools, and public venues. Flap, tripod, speed, and full-height turnstiles with RFID, QR, biometric integration, and installation support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Turnstile Gate in Cambodia",
    description:
      "Secure entry control with flap, tripod, speed, and full-height turnstiles. Integration with access control and attendance systems.",
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
    title: "Turnstile Gate in Cambodia",
    description:
      "Secure entry control with flap, tripod, speed, and full-height turnstiles. Integration with access control and attendance systems.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <TurnstileGateClient />;
}



