import type { Metadata } from "next";
import TurnstileGateClient from "../products/turnstile-gate/TurnstileGateClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/turnstile-gate";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Turnstile Gate in Cambodia | Access Control & Entry Solutions",
  description:
    "Professional turnstile gate solutions in Cambodia for offices, factories, schools, and public venues. Flap, tripod, speed, and full-height turnstiles with RFID, QR, biometric integration, and installation support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Turnstile Gate in Cambodia",
    description:
      "Secure entry control with flap, tripod, speed, and full-height turnstiles. Integration with access control and attendance systems.",
    url: PAGE_URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <TurnstileGateClient />;
}


