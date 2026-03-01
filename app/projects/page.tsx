/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { SITE_URL } from "../lib/site";

const PAGE_PATH = "/projects/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Projects in Cambodia | Mugnee Cambodia",
  description:
    "Explore Mugnee Cambodia project references for LED display, digital signage, PA systems, and access control implementations.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: PAGE_PATH,
      km: `${PAGE_PATH}?lang=km`,
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    title: "Projects in Cambodia | Mugnee Cambodia",
    description:
      "See completed and ongoing technology projects by Mugnee Cambodia across LED display, PA, signage, and access control.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero/cambodia-led-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Mugnee Cambodia project portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects in Cambodia | Mugnee Cambodia",
    description:
      "Project references for LED display, digital signage, PA systems, and access control in Cambodia.",
    images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
  },
  robots: { index: true, follow: true },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
