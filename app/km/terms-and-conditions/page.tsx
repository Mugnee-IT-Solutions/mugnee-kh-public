import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/seo/JsonLd";
import FAQJsonLd from "../../components/seo/FAQJsonLd";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/terms-and-conditions/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀង 2026 | Mugnee Cambodia",
  description:
    "អានលក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងរបស់ Mugnee Cambodia សម្រាប់ការបញ្ជាទិញ ការទូទាត់ ការដឹកជញ្ជូន ការធានា និងសេវាគាំទ្រផលិតផលបច្ចេកវិទ្យានៅកម្ពុជា។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-kh": "/terms-and-conditions/",
      "km-kh": PAGE_PATH,
      "x-default": "/terms-and-conditions/",
    },
  },
  openGraph: {
    title: "លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀង 2026 | Mugnee Cambodia",
    description:
      "គោលការណ៍ក្រុមហ៊ុនសម្រាប់ការទូទាត់ ការធានា និងសេវាបច្ចេកទេសសម្រាប់គម្រោងអាជីវកម្មនៅកម្ពុជា។",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "article",
    images: [{ url: `${SITE_URL}/images/hero/cambodia-led-hero.webp`, width: 1200, height: 630, alt: "Terms and conditions of Mugnee Cambodia in Khmer" }],
  },
  twitter: {
    card: "summary",
    title: "លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀង 2026 | Mugnee Cambodia",
    description: "លក្ខខណ្ឌពាណិជ្ជកម្ម និងគោលការណ៍ធានារបស់ Mugnee Cambodia សម្រាប់ទីផ្សារកម្ពុជា។",
    images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
  },
  robots: { index: true, follow: true },
};

const POLICY_HIGHLIGHTS = [
  {
    label: "គោលការណ៍ទូទាត់",
    value: "50% + 50%",
    detail: "បង់មុន 50% និងបង់បញ្ចប់ 50% ពេលដឹកជញ្ជូនប្រគល់ទំនិញ។",
  },
  {
    label: "ការគាំទ្រសេវា",
    value: "ទូទាំងប្រទេសកម្ពុជា",
    detail: "មានសេវាបច្ចេកទេសនៅភ្នំពេញ និងខេត្តផ្សេងៗ តាមវិសាលភាពគម្រោង។",
  },
  {
    label: "មូលដ្ឋានកិច្ចសន្យា",
    value: "BOQ + កិច្ចសន្យាចុះហត្ថលេខា",
    detail: "ការអនុវត្តចុងក្រោយអាស្រ័យលើ BOQ និងកិច្ចសន្យាដែលបានអនុម័ត។",
  },
];

const TERMS_SECTIONS: Array<{ title: string; content: string[] }> = [
  {
    title: "1. ការយល់ព្រមលក្ខខណ្ឌ",
    content: [
      "ពេលអតិថិជនអនុម័ត Quotation, Purchase Order ឬចុះហត្ថលេខាលើកិច្ចសន្យា មានន័យថាយល់ព្រមលក្ខខណ្ឌទាំងនេះ។",
      "លក្ខខណ្ឌបន្ថែមពីភាគីអតិថិជន មានសុពលភាពតែប៉ុណ្ណោះនៅពេល Mugnee Cambodia យល់ព្រមជាលាយលក្ខណ៍អក្សរ។",
    ],
  },
  {
    title: "2. វិសាលភាពសេវាកម្ម",
    content: [
      "Mugnee Cambodia ផ្គត់ផ្គង់ដំណោះស្រាយ LED Display, Digital Signage, Interactive Flat Panel, PA System និង Access Control។",
      "វិសាលភាពការងារចុងក្រោយកំណត់តាម BOQ លក្ខណៈបច្ចេកទេស និងឯកសារពាណិជ្ជកម្មដែលបានអនុម័ត។",
    ],
  },
  {
    title: "3. តម្លៃ និងគោលការណ៍ទូទាត់",
    content: [
      "តម្លៃទាំងអស់អាស្រ័យលើ Quotation ដែលបានអនុម័ត ហើយអាចរួមបញ្ចូលថ្លៃទំនិញ ដឹកជញ្ជូន ដំឡើង និងពន្ធតាមការកំណត់។",
      "គោលការណ៍ទូទាត់: អតិថិជនត្រូវបង់ប្រាក់មុន 50% ដើម្បីបញ្ជាក់ការបញ្ជាទិញ និងចាប់ផ្តើមដំណើរការ។",
      "ប្រាក់នៅសល់ 50% ត្រូវបង់បញ្ចប់ពេញលេញនៅពេលដឹកជញ្ជូនប្រគល់ទំនិញ។",
      "ការបង់ប្រាក់យឺតអាចបណ្តាលឱ្យពន្យារពេលដឹកជញ្ជូន កាលវិភាគដំឡើង និងការប្រគល់ការងារ។",
    ],
  },
  {
    title: "4. ការដឹកជញ្ជូន ដំឡើង និងប្រគល់ការងារ",
    content: [
      "ពេលវេលាដឹកជញ្ជូនជាការប៉ាន់ស្មាន ហើយអាចប្រែប្រួលតាមការនាំចូល ការដឹកជញ្ជូន និងស្ថានភាពត្រៀមទីតាំង។",
      "អតិថិជនត្រូវត្រៀមទីតាំង សុវត្ថិភាព អគ្គិសនី បណ្ដាញ និងការងារសំណង់ដែលពាក់ព័ន្ធឱ្យរួចរាល់។",
      "ការប្រគល់ការងារចាត់ទុកថាបញ្ចប់ បន្ទាប់ពីធ្វើ Commissioning Test និងចុះហត្ថលេខាទទួលស្គាល់ពីភាគីទាំងពីរ។",
    ],
  },
  {
    title: "5. គោលការណ៍ធានា និងករណីមិនគ្របដណ្តប់",
    content: [
      "ការធានាអាចទាមទារបានតែសម្រាប់ករណីមាន defect ពិតប្រាកដពីផលិតផល ក្រោមការប្រើប្រាស់ធម្មតាប៉ុណ្ណោះ។",
      "ការធានាមិនគ្របដណ្តប់លើ physical damage គ្រប់ប្រភេទ។",
      "ការធានាមិនគ្របដណ្តប់លើការខូចខាតដោយគ្រោះធម្មជាតិ ឬ force majeure ទេ។",
      "ការខូចខាតដោយការប្រើប្រាស់ខុសបំណង ការគ្រប់គ្រងមិនត្រឹមត្រូវ ឬកែប្រែដោយគ្មានការអនុញ្ញាត មិនស្ថិតក្រោមការធានា។",
    ],
  },
  {
    title: "6. គោលការណ៍សេវា និងការគាំទ្រ",
    content: [
      "Mugnee Cambodia ផ្តល់សេវា និងការគាំទ្របច្ចេកទេសតាមបណ្ដាញផ្លូវការរបស់ក្រុមហ៊ុន ស្របតាមវិសាលភាពគម្រោង និងលក្ខខណ្ឌដែលបានចុះហត្ថលេខា។",
      "សេវារួមមានការណែនាំ troubleshooting, remote diagnosis និងរៀបចំ onsite service នៅពេលចាំបាច់។",
      "ពេលវេលាឆ្លើយតបអាស្រ័យលើប្រភេទបញ្ហា ទីតាំងគម្រោង និងការមានស្តុកគ្រឿងបន្លាស់។",
      "សំណើសេវាត្រូវភ្ជាប់ invoice/order reference និងរូបភាព ឬវីដេអូបញ្ហាច្បាស់លាស់ ដើម្បីដោះស្រាយបានលឿន។",
    ],
  },
  {
    title: "7. ភារកិច្ចរបស់អតិថិជន",
    content: [
      "អតិថិជនទទួលខុសត្រូវលើការអនុម័តឯកសារទាន់ពេល ការត្រៀមទីតាំង និងការផ្តល់ព័ត៌មានគម្រោងឱ្យត្រឹមត្រូវ។",
      "ការពន្យារពេលដោយសារភាគីអតិថិជនអាចប៉ះពាល់ដល់កាលវិភាគ និងតម្លៃការងារ។",
    ],
  },
  {
    title: "8. សិទ្ធិបញ្ញា និងមាតិកា",
    content: [
      "ឯកសារបច្ចេកទេស គំនូសប្លង់ ឯកសារដំណើរការ និងការកំណត់ប្រព័ន្ធរបស់ Mugnee Cambodia គឺស្ថិតក្រោមសិទ្ធិបញ្ញារបស់ក្រុមហ៊ុន លុះត្រាតែមានការផ្ទេរសិទ្ធិជាលាយលក្ខណ៍អក្សរ។",
      "អតិថិជនទទួលខុសត្រូវលើសិទ្ធិប្រើប្រាស់មាតិកា (រូបភាព វីដេអូ ឬសារផ្សព្វផ្សាយ) ដែលបង្ហាញលើប្រព័ន្ធ។",
    ],
  },
  {
    title: "9. ការបោះបង់ កែប្រែ និងបញ្ចប់កិច្ចសន្យា",
    content: [
      "ការបោះបង់ការបញ្ជាទិញបន្ទាប់ពីអនុម័ត អាចមានថ្លៃបោះបង់ ឬថ្លៃទិញទុកជាមុនដែលមិនអាចសងវិញបាន។",
      "ការកែប្រែវិសាលភាពការងារបន្ទាប់ពីអនុម័ត ត្រូវចាត់ទុកជាការកែប្រែសំណើ និងអាចប៉ះពាល់តម្លៃ និងកាលវិភាគ។",
      "ភាគីណាមួយអាចបញ្ចប់កិច្ចសន្យា ប្រសិនបើមានការរំលោភលក្ខខណ្ឌសំខាន់ និងមិនកែតម្រូវក្នុងរយៈពេលសមស្រប។",
    ],
  },
  {
    title: "10. ដែនកំណត់ទំនួលខុសត្រូវ",
    content: [
      "Mugnee Cambodia មិនទទួលខុសត្រូវចំពោះការខូចខាតប្រយោល ដូចជាការខាតបង់ចំណូល ឬការរាំងស្ទះអាជីវកម្មឡើយ។",
      "ទំនួលខុសត្រូវអតិបរមា ត្រូវកំណត់មិនលើសតម្លៃវិក្កយបត្រនៃទំនិញ ឬសេវាដែលពាក់ព័ន្ធ។",
    ],
  },
  {
    title: "11. ច្បាប់អនុវត្ត និងដំណោះស្រាយវិវាទ",
    content: [
      "លក្ខខណ្ឌទាំងនេះស្ថិតក្រោមច្បាប់នៃព្រះរាជាណាចក្រកម្ពុជា។",
      "ភាគីទាំងពីរត្រូវព្យាយាមដោះស្រាយដោយការពិភាក្សាជាមុនសិន មុននឹងបន្តទៅនីតិវិធីផ្លូវច្បាប់ដែលមានសមត្ថកិច្ច។",
    ],
  },
];

const FAQ_ITEMS = [
  {
    question: "តើការទូទាត់ត្រូវបង់យ៉ាងដូចម្តេច?",
    answer: "គោលការណ៍ទូទាត់គឺ 50% បង់មុន និង 50% បង់បញ្ចប់ពេលដឹកជញ្ជូនប្រគល់ទំនិញ។",
  },
  {
    question: "តើករណីណាខ្លះដែលមិនស្ថិតក្រោមការធានា?",
    answer: "Physical damage, ការខូចខាតដោយគ្រោះធម្មជាតិ និងការប្រើប្រាស់ខុសបំណង មិនស្ថិតក្រោមការធានាទេ។",
  },
  {
    question: "តើករណីណាដែលអាច claim warranty បាន?",
    answer: "អាច claim បានតែករណីមាន product defect ពិតប្រាកដក្រោមការប្រើប្រាស់ធម្មតាប៉ុណ្ណោះ។",
  },
  {
    question: "សេវា support របស់ក្រុមហ៊ុនមានអ្វីខ្លះ?",
    answer:
      "មាន troubleshooting, remote diagnosis និង onsite service តាមតម្រូវការ និងវិសាលភាពដែលបានព្រមព្រៀង។",
  },
  {
    question: "បើចង់សួរបន្ថែមអំពីលក្ខខណ្ឌ ត្រូវទាក់ទងដូចម្តេច?",
    answer: "សូមទាក់ទងតាមទំព័រ Contact ផ្លូវការរបស់ Mugnee Cambodia ដើម្បីទទួលការពន្យល់បន្ថែម។",
  },
];

const RELATED_PAGES = [
  {
    href: "/km/return-policy/",
    title: "គោលការណ៍ប្តូរទំនិញ",
    detail: "មើលព័ត៌មានអំពីការប្តូរ/សងប្រាក់ និងការគាំទ្រពាក់ព័ន្ធ។",
  },
  {
    href: "/km/service/",
    title: "សេវា និងការគាំទ្រ",
    detail: "ស្វែងយល់អំពីការថែទាំ និងដំណើរការគាំទ្របច្ចេកទេស។",
  },
  {
    href: "/km/contact/",
    title: "ទាក់ទងក្រុមហ៊ុន",
    detail: "ទាក់ទងក្រុមការងាររបស់យើងសម្រាប់ការពិគ្រោះ និងជំនួយ។",
  },
];

export default function KmTermsAndConditionsPage() {
  return (
    <div className="bg-slate-50">
      <JsonLd
        id="km-terms-jsonld"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀង 2026 | Mugnee Cambodia",
          url: PAGE_URL,
          inLanguage: "km",
          dateModified: "2026-03-07",
          about: "លក្ខខណ្ឌបញ្ជាទិញ ការទូទាត់ ការធានា និងសេវាគាំទ្រនៅកម្ពុជា",
          areaServed: {
            "@type": "Country",
            name: "Cambodia",
          },
        }}
      />
      <FAQJsonLd id="km-terms-faq-jsonld" pageLanguage="km" items={FAQ_ITEMS.map((item) => ({ ...item, language: "km" }))} />

      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">Legal Policy</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-4xl">
            លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀងរបស់ Mugnee Cambodia
          </h1>
          <p className="mt-4 w-full text-justify text-base leading-relaxed text-slate-700">
            លក្ខខណ្ឌទាំងនេះអនុវត្តសម្រាប់ការអនុម័តសម្រង់តម្លៃ ការទូទាត់ ការដឹកជញ្ជូន ការដំឡើង ការធានា និងកាតព្វកិច្ចផ្លូវច្បាប់
            សម្រាប់គម្រោងរបស់ Mugnee Cambodia នៅភ្នំពេញ សៀមរាប ព្រះសីហនុ និងទូទាំងប្រទេសកម្ពុជា។
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {POLICY_HIGHLIGHTS.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-lg font-bold text-slate-900">{item.value}</p>
                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">សេចក្តីជូនដំណឹងសំខាន់</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            មុនពេលបញ្ជាក់ការបញ្ជាទិញ សូមពិនិត្យលក្ខខណ្ឌទាំងនេះជាមួយ Quotation, BOQ, គោលការណ៍ធានា និងគោលការណ៍សេវាកម្ម។
            ប្រសិនបើមានការខុសគ្នា លក្ខខណ្ឌក្នុងកិច្ចសន្យាដែលបានចុះហត្ថលេខា នឹងមានអាទិភាព។
          </p>
        </div>

        <div className="space-y-5">
          {TERMS_SECTIONS.map((section) => (
            <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                {section.content.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-sm">
          <h2 className="text-xl font-bold text-white">ត្រូវការពន្យល់បន្ថែមអំពីកិច្ចសន្យា?</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-100">
            ក្រុមពាណិជ្ជកម្ម និងបច្ចេកទេសរបស់យើងអាចជួយពន្យល់បន្ថែមអំពីលក្ខខណ្ឌទូទាត់ ដឹកជញ្ជូន ការធានា និងសេវាគាំទ្រ។
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/km/contact/"
              className="inline-flex rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-900 no-underline transition hover:bg-slate-100 hover:no-underline"
            >
              ស្នើសុំការពន្យល់
            </Link>
            <Link
              href="/km/service/"
              className="inline-flex rounded-xl border border-slate-400 px-4 py-2 text-xs font-semibold text-white no-underline transition hover:border-slate-200 hover:no-underline"
            >
              មើលវិសាលភាពសេវា
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">ទំព័រពាក់ព័ន្ធ</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {RELATED_PAGES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 no-underline transition hover:border-sky-300 hover:bg-sky-50 hover:no-underline"
              >
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">សំណួរញឹកញាប់</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group rounded-xl border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  <div className="flex items-center justify-between gap-3">
                    <span>{item.question}</span>
                    <span className="text-slate-400 transition-transform duration-300 group-open:rotate-180">v</span>
                  </div>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
