import type { Metadata } from "next";
import ProductsClient from "../../products/ProductsClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/products/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ផលិតផលបច្ចេកវិទ្យានៅកម្ពុជា | Mugnee Cambodia",
  description:
    "ស្វែងរកកាតាឡុកផលិតផលរបស់ Mugnee Cambodia សម្រាប់ LED Display, Interactive Flat Panel, PA System, Turnstile Gate និងគ្រឿងបន្លាស់ពាក់ព័ន្ធ។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: "/products/",
      km: PAGE_PATH,
      "x-default": "/products/",
    },
  },
  robots: { index: true, follow: true },
};

export default function KmProductsPage() {
  return <ProductsClient forcedLang="km" />;
}
