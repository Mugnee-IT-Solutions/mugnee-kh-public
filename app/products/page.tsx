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

export const metadata: Metadata = {
  title: "Products in Cambodia | Mugnee Cambodia",
  description:
    "Browse Mugnee Cambodia product catalog for LED display, interactive flat panel, PA system, turnstile gate, and related components.",
  alternates: { canonical: `${SITE_URL}/products` },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
