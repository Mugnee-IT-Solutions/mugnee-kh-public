import type { Metadata } from "next";
import Link from "next/link";
import FAQJsonLd from "../../components/seo/FAQJsonLd";
import JsonLd from "../../components/seo/JsonLd";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/blog/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ប្លក់ និងមគ្គុទេសក៍បច្ចេកវិទ្យា កម្ពុជា | Mugnee Cambodia",
  description:
    "ស្វែងយល់អត្ថបទ និងមគ្គុទេសក៍សម្រាប់ទីផ្សារកម្ពុជា អំពី LED Display, PA System, Interactive Flat Panel និង Access Control ពី Mugnee Cambodia។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/blog/",
      "km-kh": PAGE_PATH,
      "x-default": "/blog/",
    },
  },
  openGraph: {
    title: "ប្លក់ និងមគ្គុទេសក៍បច្ចេកវិទ្យា កម្ពុជា | Mugnee Cambodia",
    description:
      "មគ្គុទេសក៍ជាក់ស្តែងសម្រាប់ការជ្រើសរើស និងដំឡើងប្រព័ន្ធ LED, PA, Interactive Flat Panel និង Access Control នៅកម្ពុជា។",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero/cambodia-led-billboard-advertising.webp`,
        width: 1200,
        height: 630,
        alt: "ប្លក់ Mugnee Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ប្លក់ និងមគ្គុទេសក៍បច្ចេកវិទ្យា កម្ពុជា | Mugnee Cambodia",
    description:
      "អានមគ្គុទេសក៍ទីផ្សារកម្ពុជា និងដំណោះស្រាយជាក់ស្តែងពី Mugnee Cambodia។",
    images: [`${SITE_URL}/images/hero/cambodia-led-billboard-advertising.webp`],
  },
  keywords: [
    "ប្លក់បច្ចេកវិទ្យា កម្ពុជា",
    "មគ្គុទេសក៍ LED Display កម្ពុជា",
    "PA System កម្ពុជា",
    "Interactive Flat Panel កម្ពុជា",
    "Turnstile Gate កម្ពុជា",
    "Digital Signage កម្ពុជា",
  ],
  robots: { index: true, follow: true },
};

const FEATURED_GUIDES = [
  {
    title: "មគ្គុទេសក៍ជ្រើសរើស LED Display នៅកម្ពុជា: Pitch, Brightness និងថវិកា",
    description:
      "ប្រៀបធៀប Indoor និង Outdoor LED តាមលក្ខខណ្ឌទីតាំងកម្ពុជា ចម្ងាយមើល និងថ្លៃដំណើរការរយៈពេលវែង។",
    href: "/km/led-display",
    cta: "អានមគ្គុទេសក៍ LED",
  },
  {
    title: "ការរៀបចំ PA System សម្រាប់សាលារៀន រោងចក្រ និងអគារអាជីវកម្ម",
    description:
      "យល់ពីការបែងចែក Zone កំណត់កម្លាំង Amplifier លំដាប់ប្រកាសបន្ទាន់ និងគុណភាពសំឡេង។",
    href: "/km/pa-system",
    cta: "អានមគ្គុទេសក៍ PA",
  },
  {
    title: "Interactive Flat Panel សម្រាប់ Smart Classroom និងបន្ទប់ប្រជុំ",
    description:
      "ជ្រើសទំហំអេក្រង់ និង Software សមស្របសម្រាប់មាតិកាភាសាខ្មែរ និងអង់គ្លេសក្នុងកម្ពុជា។",
    href: "/km/interactive-flat-panel",
    cta: "អានមគ្គុទេសក៍ IFP",
  },
  {
    title: "មគ្គុទេសក៍ Turnstile Gate និង Access Control សម្រាប់ការិយាល័យ",
    description:
      "វាយតម្លៃ Tripod, Flap និង Speed Gate ជាមួយ RFID, Biometric និងលំហូរការងារភ្ញៀវចូលចេញ។",
    href: "/km/turnstile-gate",
    cta: "អានមគ្គុទេសក៍ Access",
  },
];

const MARKET_SIGNALS = [
  {
    title: "ផ្អែកលើលក្ខខណ្ឌពិតនៅកម្ពុជា",
    description: "មាតិកាត្រូវបានរៀបចំតាមអាកាសធាតុក្តៅ សំណើម ធូលី និងចរាចរណ៍មើលឃើញជាក់ស្តែង។",
  },
  {
    title: "ផ្តោតលើការសម្រេចចិត្តរបស់ក្រុមហ៊ុន",
    description: "ជួយក្រុមគ្រប់គ្រង និង Procurement យល់ច្បាស់ពី Scope ថ្លៃដើម និងអាទិភាពអនុវត្តន៍។",
  },
  {
    title: "អនុវត្តបានពិត មិនមែនទ្រឹស្តី",
    description: "ផ្តោតលើ Workflow ដំឡើង ការបញ្ចូលប្រព័ន្ធ និងការគាំទ្របន្ទាប់ពីដាក់ឱ្យប្រើ។",
  },
];

const INTENT_CLUSTERS = [
  {
    title: "ការធ្វើផែនការ LED និង Digital Signage",
    links: [
      { label: "ទំព័រ LED Display", href: "/km/led-display" },
      { label: "Indoor LED Display", href: "/km/led-display/indoor-led-display" },
      { label: "Outdoor LED Display", href: "/km/led-display/outdoor-led-display" },
      { label: "កាតាឡុកផលិតផល", href: "/km/products" },
    ],
  },
  {
    title: "ប្រព័ន្ធសំឡេង ថ្នាក់រៀន និងការគ្រប់គ្រងចូលចេញ",
    links: [
      { label: "ទំព័រ PA System", href: "/km/pa-system" },
      { label: "Interactive Flat Panel", href: "/km/interactive-flat-panel" },
      { label: "ទំព័រ Turnstile Gate", href: "/km/turnstile-gate" },
      { label: "ដំណោះស្រាយកម្ពុជា", href: "/km/solutions" },
    ],
  },
];

const EXECUTION_FRAMEWORK = [
  {
    step: "1. សិក្សាតម្រូវការគម្រោង",
    detail: "កំណត់គោលដៅ អ្នកប្រើប្រាស់ ទីតាំង និង KPI មុនពេលជ្រើសរើសផលិតផល។",
  },
  {
    step: "2. កំណត់ Scope បច្ចេកទេស និង BOQ",
    detail: "បំលែងតម្រូវការទៅជា Pixel Pitch, Zone Design, Controller Logic និងផែនទីថាមពល។",
  },
  {
    step: "3. ដំឡើង និងបញ្ចូលប្រព័ន្ធ",
    detail: "រៀបចំម៉ោន វាយខ្សែ Setup Software និងភ្ជាប់ជាមួយប្រព័ន្ធដែលមានស្រាប់។",
  },
  {
    step: "4. គាំទ្រ និងបង្កើនប្រសិទ្ធភាព",
    detail: "ដាក់ SOP បណ្តុះបណ្តាលអ្នកប្រើ និងផែនការថែទាំដើម្បីរក្សា Uptime ឱ្យមានស្ថេរភាព។",
  },
];

const FAQS = [
  {
    question: "តើអ្នកណាគួរអានមគ្គុទេសក៍ក្នុងប្លក់នេះ?",
    answer:
      "មាតិកានេះសមស្របសម្រាប់ម្ចាស់អាជីវកម្ម អ្នកគ្រប់គ្រងគម្រោង ក្រុម Procurement សាលារៀន និងក្រុម Facility នៅកម្ពុជា។",
  },
  {
    question: "តើមាតិកានេះផ្អែកលើទីផ្សារកម្ពុជាមែនទេ?",
    answer:
      "មែន។ អត្ថបទផ្អែកលើលក្ខខណ្ឌទីតាំង អាកាសធាតុ ថវិកា និងដំណើរការអនុវត្តន៍ជាក់ស្តែងនៅកម្ពុជា។",
  },
  {
    question: "បន្ទាប់ពីអានមគ្គុទេសក៍ អាចស្នើសុំការណែនាំតាមគម្រោងបានទេ?",
    answer:
      "បាន។ អ្នកអាចផ្ញើព័ត៌មានអំពីទីតាំង ប្រភេទគម្រោង និងពេលវេលាត្រូវការ ដើម្បីទទួលបានការណែនាំសមស្រប។",
  },
  {
    question: "តើមានទាំងព័ត៌មានកម្រិតផលិតផល និងកម្រិតដំណោះស្រាយដែរឬទេ?",
    answer:
      "មាន។ យើងគ្របដណ្តប់ទាំងការជ្រើសផលិតផល និងការធ្វើផែនការដំណោះស្រាយ ដូចជា Integration, Rollout និងផែនការគាំទ្ររយៈពេលវែង។",
  },
];

export default function KmBlogPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <JsonLd
        id="km-blog-page-jsonld"
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              "@id": `${PAGE_URL}#blog`,
              name: "Mugnee Cambodia Blog",
              url: PAGE_URL,
              inLanguage: "km",
              about: ["LED display Cambodia", "PA system Cambodia", "Interactive flat panel Cambodia"],
              publisher: {
                "@type": "Organization",
                name: "Mugnee Cambodia",
                url: SITE_URL,
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${PAGE_URL}#breadcrumb`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "ទំព័រដើម", item: `${SITE_URL}/km/` },
                { "@type": "ListItem", position: 2, name: "ប្លក់", item: PAGE_URL },
              ],
            },
            {
              "@type": "ItemList",
              "@id": `${PAGE_URL}#featured-guides`,
              name: "មគ្គុទេសក៍ពិសេសសម្រាប់កម្ពុជា",
              itemListElement: FEATURED_GUIDES.map((guide, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: guide.title,
                url: `${SITE_URL}${guide.href}`,
              })),
            },
          ],
        }}
      />
      <FAQJsonLd id="km-blog-faq-jsonld" items={FAQS.map((item) => ({ ...item, language: "km" as const }))} />

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <li>
                <Link href="/km/" className="hover:text-slate-700">
                  ទំព័រដើម
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-slate-700">ប្លក់</li>
            </ol>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Insights</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl [text-align:justify]">
            ប្លក់បច្ចេកវិទ្យាកម្ពុជា សម្រាប់ការសម្រេចចិត្តអាជីវកម្មឆ្លាតវៃ
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base [text-align:justify]">
            ស្វែងយល់មគ្គុទេសក៍ផ្តោតលើអាជីវកម្មពី Mugnee Cambodia អំពី LED Display, Digital Signage, PA System,
            Interactive Flat Panel និង Access Control។ ទំព័រនេះត្រូវបានរៀបចំសម្រាប់ការធ្វើផែនការគម្រោងនៅកម្ពុជា
            ដោយផ្តោតលើការអនុវត្តន៍ជាក់ស្តែង ភាពច្បាស់លាស់ផ្នែក Procurement និងរចនាសម្ព័ន្ធ SEO Topic Cluster។
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/km/contact"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
            >
              ស្នើសុំការពិគ្រោះគម្រោង
            </Link>
            <Link
              href="/km/solutions"
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
            >
              មើលដំណោះស្រាយកម្ពុជា
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              មាតិកាផ្តោតលើទីផ្សារកម្ពុជា សម្រាប់ក្រុមហ៊ុន
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              រចនាសម្ព័ន្ធអត្ថបទរបស់យើងជួយឱ្យក្រុមការងារផ្លាស់ពីការស្វែងយល់ទៅការសម្រេចចិត្ត ដោយមាន Scope
              បច្ចេកទេស និងផែនការអនុវត្តច្បាស់លាស់។
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {MARKET_SIGNALS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                >
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Quick Access</h3>
            <ul className="mt-4 space-y-2">
              {INTENT_CLUSTERS.flatMap((cluster) => cluster.links).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 no-underline transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 hover:no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            មគ្គុទេសក៍ពិសេសសម្រាប់ការសម្រេចចិត្ត និងការទិញនៅកម្ពុជា
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            ចាប់ផ្តើមពីមគ្គុទេសក៍ដែលត្រូវនឹងគោលបំណងអាជីវកម្មរបស់អ្នក បន្ទាប់មកបន្តទៅទំព័រដំណោះស្រាយ
            និងផលិតផលសម្រាប់កំណត់ Scope បច្ចេកទេស។
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {FEATURED_GUIDES.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-slate-800 hover:no-underline"
                >
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Workflow អនុវត្តគម្រោងបច្ចេកវិទ្យា នៅកម្ពុជា
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            ប្រើ Framework នេះជាបញ្ជីពិនិត្យសម្រាប់គម្រោងស្ថាប័ន និងអាជីវកម្មនៅភ្នំពេញ និងទូទាំងប្រទេស។
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXECUTION_FRAMEWORK.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
              >
                <h3 className="text-sm font-semibold text-slate-900">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">សំណួរដែលសួរញឹកញាប់</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {FAQS.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition open:border-sky-300 open:shadow-md"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  <div className="flex items-center justify-between gap-3">
                    <span>{item.question}</span>
                    <span className="text-slate-400 transition-transform group-open:rotate-180">v</span>
                  </div>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              ត្រូវការការណែនាំផ្តោតលើក្រុមហ៊ុន សម្រាប់គម្រោងនៅកម្ពុជា?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              ផ្ញើព័ត៌មានវិស័យ ទីតាំង និងគោលបំណងរបស់អ្នក។ Mugnee Cambodia នឹងណែនាំផ្លូវដំណោះស្រាយ ថវិកា
              និង Workflow អនុវត្តសមស្រប។
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/km/contact"
                className="inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                ទាក់ទង Mugnee Cambodia
              </Link>
              <Link
                href="/km/products"
                className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
              >
                មើលផលិតផល
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
