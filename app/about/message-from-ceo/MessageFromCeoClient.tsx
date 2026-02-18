"use client";

import Link from "next/link";
import { useLang } from "../../components/layout/LanguageProvider";

const EN = {
  eyebrow: "Leadership Message",
  title: "Message from CEO",
  subtitle:
    "A note from our founder on vision, innovation, and long-term partnership with clients in Cambodia.",
  greeting: "Dear Valued Clients and Partners,",
  p1:
    "I am Saiful Islam Shajib, Founder and CEO of Mugnee Group. What started in 2014 with a small engineering-driven team has grown into a trusted technology solutions organization focused on LED display, digital signage, smart classroom systems, PA systems, and access control.",
  p2:
    "At Mugnee Cambodia, our commitment is simple: deliver practical, high-performance, and reliable solutions that create measurable value for every project. We focus on real site conditions, transparent execution, and professional standards from survey and design to installation, commissioning, training, and long-term after-sales support.",
  p3:
    "We believe technology should be clear, scalable, and useful in daily operations. That is why we continuously improve our systems, engineering process, and service workflow to help businesses and institutions communicate better, operate more efficiently, and grow with confidence.",
  p4:
    "Thank you for your trust in Mugnee Cambodia. We look forward to building long-term partnerships and supporting your next project with integrity, innovation, and accountability.",
  signatureName: "Saiful Islam Shajib",
  signatureRole: "Founder & CEO, Mugnee Group",
  cta1: "Contact Us",
  cta2: "View Solutions",
};

const KM = {
  eyebrow: "សារពីថ្នាក់ដឹកនាំ",
  title: "សារពី CEO",
  subtitle:
    "សារពីអ្នកបង្កើតក្រុមហ៊ុន អំពីចក្ខុវិស័យ នវានុវត្តន៍ និងភាពជាដៃគូរយៈពេលវែងជាមួយអតិថិជននៅកម្ពុជា។",
  greeting: "ជូនចំពោះអតិថិជន និងដៃគូសហការដ៏មានតម្លៃ,",
  p1:
    "ខ្ញុំបាទឈ្មោះ Saiful Islam Shajib ជាអ្នកបង្កើត និង CEO នៃ Mugnee Group។ ចាប់ពីការចាប់ផ្តើមនៅឆ្នាំ 2014 ជាមួយក្រុមវិស្វករតូចមួយ ក្រុមហ៊ុនបានរីកចម្រើនទៅជាអង្គភាពដំណោះស្រាយបច្ចេកវិទ្យាដែលអាចទុកចិត្តបាន ក្នុងវិស័យ LED Display, Digital Signage, Smart Classroom, PA System និង Access Control។",
  p2:
    "នៅ Mugnee Cambodia ការប្តេជ្ញាចិត្តរបស់យើងគឺច្បាស់លាស់៖ ផ្តល់ដំណោះស្រាយជាក់ស្តែង មានប្រសិទ្ធភាពខ្ពស់ និងមានស្ថិរភាព ដើម្បីបង្កើតតម្លៃពិតសម្រាប់គម្រោងនីមួយៗ។ យើងផ្តោតលើលក្ខខណ្ឌទីតាំងពិត ការអនុវត្តមានតម្លាភាព និងស្តង់ដារវិជ្ជាជីវៈ ចាប់ពីការស្ទង់ទីតាំង រចនា ដំឡើង បើកប្រើប្រាស់ បណ្តុះបណ្តាល និងសេវាកម្មបន្ទាប់ពីលក់។",
  p3:
    "យើងជឿថា បច្ចេកវិទ្យាគួរតែមានភាពច្បាស់ សមស្របនឹងការពង្រីក និងអាចប្រើប្រាស់បានពិតក្នុងប្រតិបត្តិការប្រចាំថ្ងៃ។ ដូច្នេះយើងបន្តអភិវឌ្ឍប្រព័ន្ធ ដំណើរការវិស្វកម្ម និងសេវាកម្ម ដើម្បីជួយអាជីវកម្ម និងស្ថាប័នឱ្យមានទំនាក់ទំនងប្រសើរឡើង ប្រតិបត្តិការមានប្រសិទ្ធភាព និងរីកចម្រើនដោយទំនុកចិត្ត។",
  p4:
    "សូមអរគុណចំពោះការជឿទុកចិត្តលើ Mugnee Cambodia។ យើងរង់ចាំបន្តកសាងភាពជាដៃគូរយៈពេលវែង និងគាំទ្រគម្រោងបន្ទាប់របស់អ្នក ដោយសុចរិតភាព នវានុវត្តន៍ និងការទទួលខុសត្រូវ។",
  signatureName: "Saiful Islam Shajib",
  signatureRole: "អ្នកបង្កើត និង CEO, Mugnee Group",
  cta1: "ទាក់ទងយើង",
  cta2: "មើលដំណោះស្រាយ",
};

export default function MessageFromCeoClient() {
  const { lang } = useLang();
  const t = lang === "km" ? KM : EN;

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {t.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base font-semibold text-slate-900">{t.greeting}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">{t.p1}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">{t.p2}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">{t.p3}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">{t.p4}</p>

            <div className="mt-8 border-t border-slate-200 pt-5">
              <p className="text-sm font-semibold text-slate-900">{t.signatureName}</p>
              <p className="text-sm text-slate-600">{t.signatureRole}</p>
            </div>
          </article>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {t.cta1}
            </Link>
            <Link
              href="/solutions"
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {t.cta2}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

