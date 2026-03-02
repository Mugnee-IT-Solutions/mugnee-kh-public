import type { Metadata } from "next";
import MessageFromCeoClient from "../../../about/message-from-ceo/MessageFromCeoClient";
import { SITE_URL } from "../../../lib/site";

const PAGE_PATH = "/km/about/message-from-ceo/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "សារពី CEO | Mugnee Cambodia",
  description:
    "អានសារពី CEO របស់ Mugnee Cambodia អំពីចក្ខុវិស័យ នវានុវត្តន៍ និងភាពជាដៃគូបច្ចេកវិទ្យារយៈពេលវែង។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: "/about/message-from-ceo/",
      km: PAGE_PATH,
      "x-default": "/about/message-from-ceo/",
    },
  },
  robots: { index: true, follow: true },
};

export default function KmMessageFromCeoPage() {
  return <MessageFromCeoClient forcedLang="km" />;
}
