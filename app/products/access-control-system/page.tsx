// app/products/access-control-system/page.tsx
import type { Metadata } from "next";
import AccessControlClient from "./AccessControlClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/products/access-control-system";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Access Control System in Cambodia | Door, RFID, Face & Attendance - Mugnee",
  description:
    "Access control system in Cambodia for office, factory, hotel and schools: door access, RFID/QR/Face, attendance integration, installation & after-sales support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Access Control System in Cambodia - Installation + Support",
    description:
      "RFID / Face recognition / Door lock access control with local installation, commissioning and maintenance options.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AccessControlClient />;
}

