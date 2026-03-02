import type { Metadata } from "next";
import ProjectsClient from "../../projects/ProjectsClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/projects/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "គម្រោងនៅកម្ពុជា | Mugnee Cambodia",
  description:
    "មើលគម្រោងយោងរបស់ Mugnee Cambodia សម្រាប់ការអនុវត្ត LED Display, Digital Signage, PA Systems និង Access Control នៅកម្ពុជា។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: "/projects/",
      km: PAGE_PATH,
      "x-default": "/projects/",
    },
  },
  robots: { index: true, follow: true },
};

export default function KmProjectsPage() {
  return <ProjectsClient forcedLang="km" />;
}
