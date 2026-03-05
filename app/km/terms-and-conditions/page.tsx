import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/seo/JsonLd";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/terms-and-conditions/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀង | Mugnee Cambodia",
  description:
    "អានលក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងរបស់ Mugnee Cambodia សម្រាប់ការផ្គត់ផ្គង់ផលិតផល ការដំឡើងគម្រោង ការធានា និងសេវាកម្មគាំទ្រនៅកម្ពុជា។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/terms-and-conditions/",
      "km-kh": PAGE_PATH,
      "x-default": "/terms-and-conditions/",
    },
  },
  robots: { index: true, follow: true },
};

export default function KmTermsAndConditionsPage() {
  return (
    <div className="bg-slate-50">
      <JsonLd
        id="km-terms-jsonld"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀង | Mugnee Cambodia",
          url: PAGE_URL,
          inLanguage: "km",
        }}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Legal</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀង
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            លក្ខខណ្ឌទាំងនេះអនុវត្តសម្រាប់ការលក់ផលិតផល ការដំឡើងគម្រោង និងសេវាកម្មគាំទ្ររបស់ Mugnee Cambodia នៅទូទាំងប្រទេសកម្ពុជា។
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">1. វិសាលភាពសេវាកម្ម</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Mugnee Cambodia ផ្តល់ដំណោះស្រាយ LED Display, Digital Signage, Interactive Flat Panel, PA System និង Access
            Control។ វិសាលភាពការងារចុងក្រោយអាស្រ័យលើសម្រង់តម្លៃ និងកិច្ចសន្យាដែលបានអនុម័ត។
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">2. សម្រង់តម្លៃ និងការទូទាត់</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
            <li>សម្រង់តម្លៃមានសុពលភាពតាមរយៈពេលដែលបានបញ្ជាក់ក្នុងឯកសារផ្លូវការ។</li>
            <li>ការចាប់ផ្តើមគម្រោងអាចត្រូវការប្រាក់កក់តាមលក្ខខណ្ឌកិច្ចសន្យា។</li>
            <li>ការទូទាត់យឺតអាចប៉ះពាល់ដល់ពេលវេលាដឹកជញ្ជូន និងដំឡើង។</li>
            <li>ពន្ធ ការដឹកជញ្ជូន និងចំណាយត្រៀមទីតាំង គឺអនុវត្តតាម BOQ/Quotation។</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">3. ការដំឡើង និងប្រគល់ការងារ</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            អតិថិជនត្រូវផ្តល់សិទ្ធិចូលកន្លែង សុវត្ថិភាពទីតាំង និងលក្ខខណ្ឌអគ្គិសនីសមស្រប។ ការងារត្រូវចាត់ទុកថាបានបញ្ចប់បន្ទាប់ពី
            Commissioning Checklist និងឯកសារប្រគល់ការងារត្រូវបានចុះហត្ថលេខា។
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">4. ការធានា និងការលើកលែង</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            ការធានាគ្របដណ្តប់កំហុសផលិតកម្មក្រោមការប្រើប្រាស់ធម្មតា ប៉ុន្តែមិនគ្របដណ្តប់ការខូចខាតពីគ្រោះថ្នាក់ អគ្គិសនីមិនស្ថេរភាព
            ការកែប្រែដោយគ្មានអនុញ្ញាត ឬកត្តាអាសន្នផ្សេងៗ។
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">5. ទំនាក់ទំនងជំនួយ</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            សម្រាប់ការបញ្ជាក់កិច្ចសន្យា ឬបញ្ហាសេវាកម្ម សូមទាក់ទងតាម{" "}
            <Link href="/km/contact" className="font-semibold text-sky-700 no-underline hover:text-sky-800 hover:no-underline">
              ទំព័រទំនាក់ទំនងផ្លូវការ
            </Link>
            ។
          </p>
        </div>
      </section>
    </div>
  );
}
