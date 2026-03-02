/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "../../lib/site";

const TARGET_PATH = "/solutions/office-access-control-cambodia/";
const TARGET_URL = `${SITE_URL}${TARGET_PATH}`;

export const metadata: Metadata = {
  title: "Access Control Solutions in Cambodia | Mugnee Cambodia",
  description:
    "Office access control solution references and implementation support in Cambodia.",
  alternates: {
    canonical: TARGET_URL,
    languages: {
      en: "/solutions/office-access-control-cambodia/",
      km: "/km/solutions/office-access-control-cambodia/",
      "x-default": "/solutions/office-access-control-cambodia/",
    },
  },
  robots: { index: false, follow: true },
};

export default function AccessControlLegacyPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Access Control Solutions
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This product page has moved to our dedicated solutions page.
        </p>
        <Link
          href={TARGET_PATH}
          className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Go To Solution Page
        </Link>
      </section>
    </main>
  );
}
