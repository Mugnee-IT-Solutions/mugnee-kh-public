import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/seo/JsonLd";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/blog/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "ប្លក់ និងមគ្គុទេសក៍ | Mugnee Cambodia",
  description:
    "ស្វែងយល់អត្ថបទប្លក់ និងមគ្គុទេសក៍របស់ Mugnee Cambodia សម្រាប់ LED Display, Smart Classroom, PA System និង Access Control នៅកម្ពុជា។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/blog/",
      "km-kh": PAGE_PATH,
      "x-default": "/blog/",
    },
  },
  robots: { index: true, follow: true },
};

const RESOURCES = [
  {
    title: "មគ្គុទេសក៍ជ្រើសរើស LED Display នៅកម្ពុជា",
    description:
      "យល់ដឹងពីការជ្រើស Pixel Pitch, Brightness និង Cabinet Type សម្រាប់ទីតាំងក្នុង/ក្រៅអគារ។",
    href: "/km/led-display",
  },
  {
    title: "ការរៀបចំ PA System សម្រាប់សាលា និងរោងចក្រ",
    description:
      "បញ្ជីត្រួតពិនិត្យសម្រាប់ Zone, Amplifier Capacity និង Workflow នៃការប្រកាសសំឡេង។",
    href: "/km/pa-system",
  },
  {
    title: "Interactive Flat Panel សម្រាប់ Smart Classroom",
    description:
      "វិធីជ្រើសទំហំ និងការរៀបចំប្រើប្រាស់សម្រាប់គ្រឹះស្ថានអប់រំនៅកម្ពុជា។",
    href: "/km/interactive-flat-panel",
  },
  {
    title: "ជ្រើសរើស Turnstile Gate សម្រាប់ការិយាល័យ",
    description:
      "ប្រៀបធៀប Tripod, Flap និង Speed Gate ជាមួយតម្រូវការគម្រោងពិតប្រាកដ។",
    href: "/km/turnstile-gate",
  },
];

export default function KmBlogPage() {
  return (
    <div className="bg-slate-50">
      <JsonLd
        id="km-blog-page-jsonld"
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Mugnee Cambodia Blog",
          url: PAGE_URL,
          inLanguage: "km",
        }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Insights</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            ប្លក់ និងមគ្គុទេសក៍បច្ចេកវិទ្យាសម្រាប់កម្ពុជា
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
            មាតិកានេះជួយអាជីវកម្ម សាលារៀន និងអង្គភាពផ្សេងៗ ជ្រើសរើសដំណោះស្រាយបច្ចេកវិទ្យាដែលសមស្របសម្រាប់គម្រោងពិតនៅកម្ពុជា។
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {RESOURCES.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-slate-800 hover:no-underline"
              >
                អានទំព័រពាក់ព័ន្ធ
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">ត្រូវការការណែនាំជាក់លាក់?</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            ផ្ញើប្រភេទគម្រោង ទីតាំង និងថវិការបស់អ្នក ហើយក្រុមការងារយើងនឹងណែនាំជម្រើសសមស្រប។
          </p>
          <Link
            href="/km/contact"
            className="mt-4 inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 no-underline transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900 hover:no-underline"
          >
            ទាក់ទង Mugnee Cambodia
          </Link>
        </div>
      </section>
    </div>
  );
}
