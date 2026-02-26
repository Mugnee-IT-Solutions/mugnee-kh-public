/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import { SITE_URL } from "../lib/site";

const PAGE_PATH = "/products";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Products in Cambodia | Mugnee Cambodia",
  description:
    "Browse Mugnee Cambodia product catalog for LED display, interactive flat panel, PA system, turnstile gate, and related components.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: PAGE_PATH,
      km: `${PAGE_PATH}?lang=km`,
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    title: "Products in Cambodia | Mugnee Cambodia",
    description:
      "Browse LED display, interactive flat panels, PA systems, turnstile gates, and related components from Mugnee Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero/cambodia-led-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Mugnee Cambodia product catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products in Cambodia | Mugnee Cambodia",
    description:
      "Explore Mugnee Cambodia product categories for LED display, PA, IFP, and access solutions.",
    images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
  },
  robots: { index: true, follow: true },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
