import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "./lib/site";

const PAGE_URL = `${SITE_URL}/404/`;
const OG_IMAGE = `${SITE_URL}/images/hero/cambodia-led-hero.webp`;

export const metadata: Metadata = {
  title: "404 Page Not Found | Mugnee Cambodia",
  description:
    "The page you are looking for could not be found on Mugnee Cambodia. Return to the homepage to explore products, solutions, and support information.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "404 Page Not Found | Mugnee Cambodia",
    description:
      "The requested page could not be found on Mugnee Cambodia. Return to the homepage to browse products, solutions, and support information.",
    url: PAGE_URL,
    type: "website",
    siteName: "Mugnee Cambodia",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "404 page not found" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 Page Not Found | Mugnee Cambodia",
    description:
      "The requested page could not be found on Mugnee Cambodia. Return to the homepage to browse products, solutions, and support information.",
    images: [OG_IMAGE],
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm font-semibold text-slate-600">404</p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-slate-600">
          The page you are looking for does not exist.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
