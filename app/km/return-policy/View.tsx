import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/seo/JsonLd";
import FAQJsonLd from "../../components/seo/FAQJsonLd";
import { SITE_URL } from "../../lib/site";

const PAGE_PATH = "/km/return-policy/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const LAST_UPDATED = "2026-03-05";

export const metadata: Metadata = {
  title: "គោលការណ៍មិនអាចត្រឡប់ និងមិនសងប្រាក់ | Mugnee Cambodia",
  description:
    "Mugnee Cambodia អនុវត្តគោលការណ៍មិនអាចត្រឡប់ទំនិញ និងមិនសងប្រាក់នៅកម្ពុជា ជាមួយដំណើរការគាំទ្របច្ចេកទេសច្បាស់លាស់សម្រាប់អតិថិជន។",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en-KH": "/return-policy/",
      "km-KH": PAGE_PATH,
      "x-default": "/return-policy/",
    },
  },
  openGraph: {
    title: "គោលការណ៍មិនអាចត្រឡប់ និងមិនសងប្រាក់ | Mugnee Cambodia",
    description:
      "គោលការណ៍មិនអាចត្រឡប់ទំនិញ និងមិនសងប្រាក់នៅកម្ពុជា ជាមួយជំហានគាំទ្របច្ចេកទេស និងដំណោះស្រាយបញ្ហាបន្ទាប់ពីលក់។",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "article",
    images: [{ url: `${SITE_URL}/images/hero/cambodia-led-hero.webp`, width: 1200, height: 630, alt: "Return policy of Mugnee Cambodia in Khmer" }],
  },
  twitter: {
    card: "summary",
    title: "គោលការណ៍មិនអាចត្រឡប់ និងមិនសងប្រាក់ | Mugnee Cambodia",
    description: "គោលការណ៍មិនអាចត្រឡប់ទំនិញ និងមិនសងប្រាក់ សម្រាប់ផលិតផលដែលបានប្រគល់នៅកម្ពុជា។",
    images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
  },
  robots: { index: true, follow: true },
};

const POLICY_HIGHLIGHTS = [
  {
    label: "ជម្រើសត្រឡប់ទំនិញ",
    value: "មិនមាន",
    detail: "ទំនិញដែលបានប្រគល់រួច គឺជាការលក់ចុងក្រោយ មិនអាចត្រឡប់បានទេ។",
  },
  {
    label: "ជម្រើសសងប្រាក់",
    value: "មិនមាន",
    detail: "បន្ទាប់ពីបញ្ជាក់ការបញ្ជាទិញ និងប្រគល់ទំនិញ ការទូទាត់មិនអាចសងវិញបានទេ។",
  },
  {
    label: "ពេលឆ្លើយតបគាំទ្រ",
    value: "ក្នុងរយៈពេល 24 ម៉ោង",
    detail: "ក្រុមការងារយើងផ្តល់ការវិភាគ និងដោះស្រាយបញ្ហាបច្ចេកទេស។",
  },
];

const SUPPORT_STEPS: Array<{ title: string; detail: string }> = [
  {
    title: "រាយការណ៍បញ្ហា",
    detail: "ទាក់ទងក្រុមគាំទ្រ ហើយផ្តល់លេខវិក្កយបត្រ កាលបរិច្ឆេទប្រគល់ និងទីតាំងគម្រោង។",
  },
  {
    title: "ផ្ញើភស្តុតាងបញ្ហា",
    detail: "ផ្ញើរូបភាព/វីដេអូច្បាស់ លេខម៉ូឌែល/លេខស៊េរី និងពិពណ៌នាបញ្ហាខ្លីៗ។",
  },
  {
    title: "វាយតម្លៃបច្ចេកទេស",
    detail: "វិស្វករយើងពិនិត្យពីចម្ងាយជាមុន ហើយរៀបចំចុះទីតាំងបើចាំបាច់។",
  },
  {
    title: "ដំណោះស្រាយ និងតាមដាន",
    detail: "យើងអនុវត្តដំណោះស្រាយតាមលក្ខខណ្ឌធានា និងកិច្ចព្រមព្រៀងពាណិជ្ជកម្ម។",
  },
];

const REQUIRED_DOCUMENTS = [
  "វិក្កយបត្រ ឬឯកសារយោងការទិញ",
  "ឯកសារប្រគល់ទំនិញ ឬឯកសារប្រគល់ការងារ (បើមាន)",
  "រូបភាពម៉ូឌែល និងលេខស៊េរី",
  "រូបភាព/វីដេអូបញ្ហា និងការពិពណ៌នាខ្លី",
  "ឈ្មោះ និងលេខទូរស័ព្ទអ្នកទំនាក់ទំនងនៅទីតាំង",
];

const SUPPORT_SCOPE = [
  "ពិគ្រោះ និងដោះស្រាយបច្ចេកទេសសម្រាប់ទំនិញដែលបានដំឡើង ឬប្រគល់",
  "សេវាកម្មធានាតាមស្ថានភាពផលិតផល និងកិច្ចព្រមព្រៀងដែលបានចុះហត្ថលេខា",
  "ចុះពិនិត្យនៅទីតាំងនៅពេលដោះស្រាយពីចម្ងាយមិនទាន់បាន",
  "តាមដានករណីតាមឆានែលផ្លូវការជាមួយលេខយោង",
];

const NOT_AVAILABLE = [
  "ការត្រឡប់ទំនិញដែលបានប្រគល់រួច",
  "ការសងប្រាក់បន្ទាប់ពីបញ្ជាក់ការបញ្ជាទិញ ការដំណើរការ ឬការប្រគល់",
  "ការសងប្រាក់សម្រាប់ការដំឡើងរួច និងថ្លៃការងារដែលបានប្រើប្រាស់",
  "ការសងប្រាក់សម្រាប់ទំនិញបញ្ជាទិញពិសេស ឬផលិតតាមគម្រោង",
];

const FAQ_ITEMS = [
  {
    question: "តើមានសេវាត្រឡប់ទំនិញទេ?",
    answer: "មិនមានទេ។ ទំនិញដែលបានប្រគល់រួច ត្រូវចាត់ទុកជាការលក់ចុងក្រោយ។",
  },
  {
    question: "តើមានការសងប្រាក់សម្រាប់ទំនិញដែលបានប្រគល់ទេ?",
    answer: "មិនមានទេ។ បន្ទាប់ពីបញ្ជាក់ការបញ្ជាទិញ និងប្រគល់រួច ការទូទាត់មិនអាចសងវិញបានទេ។",
  },
  {
    question: "បើទំនិញមានបញ្ហាបច្ចេកទេស តើត្រូវធ្វើដូចម្តេច?",
    answer:
      "សូមទាក់ទងក្រុមគាំទ្រដោយផ្តល់ព័ត៌មានវិក្កយបត្រ លេខស៊េរី និងភស្តុតាងបញ្ហា ដើម្បីឱ្យយើងជួយដោះស្រាយតាមលក្ខខណ្ឌធានា។",
  },
  {
    question: "តើអាចសងប្រាក់ថ្លៃដំឡើង ឬថ្លៃសេវាកម្មបានទេ?",
    answer:
      "មិនអាចទេ លើកលែងតែមានការកំណត់ជាក់លាក់ក្នុងកិច្ចសន្យាដែលបានចុះហត្ថលេខា។",
  },
  {
    question: "តើអាចបោះបង់ ហើយសងប្រាក់ក្រោយពេលបញ្ជាទិញចាប់ផ្តើមដំណើរការបានទេ?",
    answer:
      "មិនអាចបានទេ។ បើត្រូវការជំនួយបន្ទាន់ សូមទាក់ទងក្រុមគាំទ្រភ្លាមៗ។",
  },
  {
    question: "ត្រូវផ្ញើឯកសារអ្វីខ្លះសម្រាប់សំណើគាំទ្រ?",
    answer:
      "សូមផ្ញើវិក្កយបត្រ/ភស្តុតាងទិញ ឯកសារប្រគល់ រូបម៉ូឌែល/លេខស៊េរី និងរូបភាព ឬវីដេអូបញ្ហាច្បាស់។",
  },
  {
    question: "បើករណីយឺត តើខ្ញុំអាចតាមដានបានដូចម្តេច?",
    answer: "សូមទាក់ទងតាមទំព័រ Contact ជាមួយលេខយោងករណី ដើម្បីឱ្យក្រុមការងារតាមដានបន្ត។",
  },
];

const RELATED_PAGES = [
  {
    href: "/km/service/",
    title: "សេវាកម្ម និងការគាំទ្រ",
    detail: "ស្វែងយល់អំពីដំណើរការគាំទ្រ និងការឆ្លើយតបទូទាំងកម្ពុជា។",
  },
  {
    href: "/km/terms-and-conditions/",
    title: "លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀង",
    detail: "លក្ខខណ្ឌពាណិជ្ជកម្ម គោលការណ៍លក់ចុងក្រោយ និងដែនកំណត់ការធានា។",
  },
  {
    href: "/km/contact/",
    title: "ទាក់ទងផ្នែកគាំទ្រ",
    detail: "ផ្ញើព័ត៌មានបញ្ហាបច្ចេកទេសជាមួយរូបភាព/វីដេអូ ដើម្បីពន្លឿនការពិនិត្យ។",
  },
];

export default function KmReturnPolicyPage() {
  return (
    <div className="bg-slate-50">
      <JsonLd
        id="km-return-policy-jsonld"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "គោលការណ៍មិនអាចត្រឡប់ និងមិនសងប្រាក់ | Mugnee Cambodia",
          url: PAGE_URL,
          inLanguage: "km",
          dateModified: LAST_UPDATED,
          about: {
            "@type": "Thing",
            name: "គោលការណ៍មិនអាចត្រឡប់ទំនិញ និងមិនសងប្រាក់ ជាមួយដំណើរការគាំទ្របច្ចេកទេស",
          },
          areaServed: {
            "@type": "Country",
            name: "Cambodia",
          },
        }}
      />
      <FAQJsonLd id="km-return-policy-faq-jsonld" pageLanguage="km" items={FAQ_ITEMS.map((item) => ({ ...item, language: "km" }))} />

      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="w-full max-w-none">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">គោលការណ៍</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              គោលការណ៍លក់ចុងក្រោយ និងការគាំទ្រ នៅកម្ពុជា
            </h1>
            <p className="mt-4 text-justify text-base leading-relaxed text-slate-700">
              Mugnee Cambodia អនុវត្តគោលការណ៍មិនអាចត្រឡប់ទំនិញ និងមិនសងប្រាក់ សម្រាប់ទំនិញដែលក្រុមហ៊ុនផ្គត់ផ្គង់ទាំងអស់។
              បន្ទាប់ពីបញ្ជាក់ការបញ្ជាទិញ និងប្រគល់ទំនិញរួច មិនមានជម្រើសត្រឡប់ ឬសងប្រាក់ទេ។ សម្រាប់បញ្ហាបច្ចេកទេស
              ក្រុមគាំទ្ររបស់យើងនឹងជួយដោះស្រាយតាមលក្ខខណ្ឌធានា និងកិច្ចព្រមព្រៀងដែលបានចុះហត្ថលេខា។
            </p>
          </div>

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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">អ្វីដែលយើងផ្តល់ជូន</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {SUPPORT_SCOPE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">អ្វីដែលមិនមាន</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {NOT_AVAILABLE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">ដំណើរការគាំទ្របញ្ហា</h2>
          <ol className="mt-4 space-y-4">
            {SUPPORT_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">ឯកសារត្រូវមានសម្រាប់ដំណើរការលឿន</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {REQUIRED_DOCUMENTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">ចំណាំគោលការណ៍លក់ចុងក្រោយ</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
              {NOT_AVAILABLE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">ពេលវេលាគាំទ្រដែលរំពឹងទុក</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-900">ដំណាក់កាល</th>
                  <th className="px-4 py-3 font-semibold text-slate-900">រយៈពេលជាមធ្យម</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-4 py-3 text-slate-700">ការឆ្លើយតបដំបូង</td>
                  <td className="px-4 py-3 text-slate-700">ក្នុងរយៈពេល 24 ម៉ោង</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">ការវាយតម្លៃបច្ចេកទេស</td>
                  <td className="px-4 py-3 text-slate-700">2-5 ថ្ងៃធ្វើការ (អាស្រ័យលើភស្តុតាង និងការចូលទីតាំង)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">សកម្មភាពសេវាកម្ម និងជំហានបន្ទាប់</td>
                  <td className="px-4 py-3 text-slate-700">បន្ទាប់ពីបញ្ចប់ការវាយតម្លៃ និងបញ្ជាក់លទ្ធភាព</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">ចំណាំគោលការណ៍</td>
                  <td className="px-4 py-3 text-slate-700">មិនអាចត្រឡប់ទំនិញ និងមិនសងប្រាក់ សម្រាប់ទំនិញដែលបានប្រគល់រួច</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            ពេលវេលាអាចប្រែប្រួលទៅតាមភូមិសាស្ត្រ និងកាលវិភាគដឹកជញ្ជូនរបស់ភាគីទីបី។
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white shadow-sm">
          <h2 className="text-xl font-bold text-white">ត្រូវការជំនួយបច្ចេកទេស?</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-100">
            ដោយសារមិនមានជម្រើសត្រឡប់ទំនិញ និងសងប្រាក់ សូមផ្ញើព័ត៌មានបញ្ហាបច្ចេកទេសតាម{" "}
            <Link
              href="/km/contact/"
              className="font-semibold text-sky-300 no-underline hover:text-sky-200 hover:no-underline"
            >
              ទំព័រ Contact
            </Link>{" "}
            រួមទាំងទីតាំងគម្រោង លេខវិក្កយបត្រ និងភស្តុតាងបញ្ហា។
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/km/contact/"
              className="inline-flex rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-900 no-underline transition hover:bg-slate-100 hover:no-underline"
            >
              ស្នើសុំជំនួយបច្ចេកទេស
            </Link>
            <Link
              href="/km/service/"
              className="inline-flex rounded-xl border border-slate-400 px-4 py-2 text-xs font-semibold text-white no-underline transition hover:border-slate-200 hover:no-underline"
            >
              មើលវិសាលភាពសេវាកម្ម
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">ទំព័រគោលការណ៍ និងការគាំទ្រពាក់ព័ន្ធ</h2>
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
          <h2 className="text-xl font-bold text-slate-900">សំណួរដែលសួរញឹកញាប់</h2>
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
