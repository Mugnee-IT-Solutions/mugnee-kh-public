/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import InteractiveFlatPanelClient from "../products/interactive-flat-panel/InteractiveFlatPanelClient";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/interactive-flat-panel";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Interactive Flat Panel in Cambodia | Smart Board for School & Office",
  description:
    "Interactive Flat Panel (IFP) in Cambodia for classrooms, meeting rooms and training centers. 4K touchscreen smart board with Android OS, wireless screen sharing, built-in whiteboard and local installation & support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Interactive Flat Panel in Cambodia - Smart Board for School & Office",
    description:
      "4K touchscreen interactive flat panels for education and corporate use. Installation, wall mount/stand setup, training and after-sales support in Cambodia.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function Page() {
  return <InteractiveFlatPanelClient />;
}


