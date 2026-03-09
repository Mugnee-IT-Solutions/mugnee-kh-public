import type { Metadata } from "next";
import ProductsClient from "../../products/ProductsClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/products/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ផលិតផលបច្ចេកវិទ្យាសម្រាប់អាជីវកម្មនៅកម្ពុជា | តម្លៃ និងសេវាដំឡើង",
  description:
    "ជ្រើសរើសផលិតផលពី Mugnee Cambodia រួមមាន LED Display, Video Wall, Interactive Flat Panel, PA System, Turnstile Gate និងគ្រឿងបន្លាស់ LED ដោយមានតម្លៃល្អ និងសេវាបន្ទាប់ពីលក់នៅកម្ពុជា។",
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
