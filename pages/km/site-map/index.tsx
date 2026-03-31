import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import SiteHeader from "../../../app/components/layout/Header";
import SiteFooter from "../../../app/components/layout/Footer";
import SitewideJsonLd from "../../../app/components/seo/SitewideJsonLd";
import { SITE_URL } from "../../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Site Map (KM) | Mugnee Cambodia";
const description =
  "ទំព័រតំណភ្ជាប់សំខាន់ៗសម្រាប់ Mugnee Cambodia (KM) ដើម្បីរកមើលទំព័រដំណោះស្រាយ ផលិតផល និងមគ្គុទេសក៍បានលឿន។";

const SECTIONS: Array<{ title: string; links: Array<{ href: string; label: string }> }> = [
  {
    title: "ទំព័រសំខាន់ៗ",
    links: [
      { href: "/km/", label: "ទំព័រដើម (KM)" },
      { href: "/km/led-display/", label: "អេក្រង់ LED (KM)" },
      { href: "/km/products/", label: "ផលិតផល (KM)" },
      { href: "/km/solutions/", label: "ដំណោះស្រាយ (KM)" },
      { href: "/km/service/", label: "សេវាកម្ម និងគាំទ្រ (KM)" },
      { href: "/km/contact/", label: "ទំនាក់ទំនង (KM)" },
      { href: "/km/about/", label: "អំពីយើង (KM)" },
      { href: "/km/blog/", label: "ប្លក់ (KM)" },
    ],
  },
  {
    title: "Solutions (Cambodia)",
    links: [
      { href: "/km/solutions/office-access-control-cambodia/", label: "Access Control (KM)" },
      { href: "/km/solutions/education-smart-classroom-cambodia/", label: "Smart Classroom (KM)" },
      { href: "/km/solutions/factory-pa-announcement-cambodia/", label: "Factory PA (KM)" },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/km/blog/led-display-cambodia-guide/", label: "មគ្គុទេសក៍ LED Display (KM)" },
      { href: "/km/blog/led-display-price-cambodia/", label: "តម្លៃ LED Display (KM)" },
      { href: "/km/blog/pixel-pitch-led-display-guide/", label: "Pixel Pitch Guide (KM)" },
    ],
  },
  {
    title: "Featured product pages",
    links: [
      { href: "/km/products/smart-board-55/", label: 'Smart Board 55" (KM)' },
      { href: "/km/products/smart-board-65/", label: 'Smart Board 65" (KM)' },
      { href: "/km/products/skyworth-smart-board-4k-75/", label: 'Skyworth 75" 4K Smart Board (KM)' },
      { href: "/km/products/tripod-turnstiles-2/", label: "Tripod Turnstiles (KM)" },
      { href: "/km/products/scheduler-based-audio-control-system/", label: "Scheduler Based Audio Control (KM)" },
    ],
  },
  {
    title: "Policies",
    links: [
      { href: "/km/return-policy/", label: "Return Policy (KM)" },
      { href: "/km/terms-and-conditions/", label: "Terms & Conditions (KM)" },
    ],
  },
  {
    title: "English versions",
    links: [{ href: "/site-map/", label: "Site Map (EN)" }],
  },
];

export default function KmSiteMapPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/km/site-map/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/site-map/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/site-map/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/site-map/`} />
      </Head>

      <div className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <ClientEnhancements />
        <SiteHeader />
        <main
          id="app-scroll-root"
          className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden bg-slate-50"
        >
          <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Site Map (KM)</h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
              ប្រើទំព័រនេះដើម្បីរកមើលទំព័រសំខាន់ៗ ដំណោះស្រាយ ផលិតផល និងមគ្គុទេសក៍បានរហ័ស។
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {SECTIONS.map((section) => (
                <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
                  <ul className="mt-3 space-y-2 text-sm">
                    {section.links.map((item) => (
                      <li key={item.href}>
                        <Link className="text-sky-700 no-underline hover:underline" href={item.href}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <SiteFooter />
        </main>
      </div>
    </>
  );
}

