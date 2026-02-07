import type { Metadata } from "next";
import LedDisplayClient from "../products/led-display/LedDisplayClient";

/** ✅ Set this in production:
 * NEXT_PUBLIC_SITE_URL=https://mugnee.com.kh
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const metadata: Metadata = {
  title: "LED Display in Cambodia | Indoor & Outdoor LED Screen Solutions",
  description:
    "Premium indoor LED video walls and outdoor LED billboards in Cambodia with site survey, design, installation, commissioning and local after-sales support. Get a free quotation.",
  alternates: {
    canonical: `${SITE_URL}/led-display`,
  },
  openGraph: {
    title: "LED Display in Cambodia — Indoor & Outdoor LED Screen Solutions",
    description:
      "LED display solutions for retail, malls, hotels, events and outdoor advertising—engineered, installed and supported locally in Cambodia.",
    url: `${SITE_URL}/led-display`,
    type: "website",
  },
};

export default function Page() {
  return <LedDisplayClient />;
}
