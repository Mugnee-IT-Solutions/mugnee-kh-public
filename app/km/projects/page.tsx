import type { Metadata } from "next";
import ProjectsClient from "../../projects/ProjectsClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/projects/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "គម្រោងអនុវត្តជាក់ស្តែងនៅកម្ពុជា | LED Display និងដំណោះស្រាយសុវត្ថិភាព",
  description:
    "មើលគម្រោងដែល Mugnee Cambodia បានរចនា និងដំឡើងសម្រាប់អេក្រង់ LED, Digital Signage, PA System និង Turnstile Gate នៅកម្ពុជា ដើម្បីជួយអ្នកសម្រេចចិត្តទិញបានលឿនជាងមុន។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/projects/",
      "km-kh": PAGE_PATH,
      "x-default": "/projects/",
    },
  },
  robots: { index: true, follow: true },
};

export default function KmProjectsPage() {
  return <ProjectsClient forcedLang="km" />;
}
