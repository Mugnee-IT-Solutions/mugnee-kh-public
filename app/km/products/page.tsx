import type { Metadata } from "next";
import ProductsClient from "../../products/ProductsClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/products/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ផលិតផលបច្ចេកវិទ្យានៅកម្ពុជា | Mugnee Cambodia",
  description:
    "ស្វែងរកផលិតផលរបស់ Mugnee Cambodia សម្រាប់អេក្រង់ LED អេក្រង់អន្តរកម្ម ប្រព័ន្ធសំឡេង ច្រកសុវត្ថិភាព និងគ្រឿងបន្លាស់ពាក់ព័ន្ធ។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/products/",
      "km-kh": PAGE_PATH,
      "x-default": "/products/",
    },
  },
  robots: { index: true, follow: true },
};

export default function KmProductsPage() {
  return <ProductsClient forcedLang="km" />;
}
