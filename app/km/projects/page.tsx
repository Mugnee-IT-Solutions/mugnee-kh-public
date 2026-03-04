import type { Metadata } from "next";
import ProjectsClient from "../../projects/ProjectsClient";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/projects/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "គម្រោងនៅកម្ពុជា | Mugnee Cambodia",
  description:
    "មើលគម្រោងអនុវត្តរបស់ Mugnee Cambodia សម្រាប់អេក្រង់ LED ស្លាកឌីជីថល ប្រព័ន្ធសំឡេង និងប្រព័ន្ធគ្រប់គ្រងចូលចេញនៅកម្ពុជា។",
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
