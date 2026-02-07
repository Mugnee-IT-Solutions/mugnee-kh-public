// app/products/outdoor-led-display/page.tsx
import type { Metadata } from "next";
import OutdoorLedDisplayClient from "./OutdoorLedDisplayClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/products/outdoor-led-display";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Outdoor LED Display in Cambodia | LED Billboard & Digital Signage",
  description:
    "Outdoor LED display solutions in Cambodia for roadside billboards, building facade screens and outdoor digital signage. Weatherproof IP-rated panels, high brightness, structure design, installation and local after-sales support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Outdoor LED Display in Cambodia — LED Billboard & Digital Signage",
    description:
      "High brightness outdoor LED screens with IP protection, structure design, installation, commissioning and after-sales support in Cambodia.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function Page() {
  return <OutdoorLedDisplayClient />;
}
