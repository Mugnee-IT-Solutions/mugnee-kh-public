"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "../../components/layout/LanguageProvider";

const EN = {
  eyebrow: "Leadership Message",
  title: "Message from CEO",
  subtitle:
    "A message from our founder on Mugnee Cambodia's long-term commitment and international growth journey.",
  greeting: "Dear Valued Clients & Partners,",
  p1:
    "I am Saiful Islam Shajib, Founder & CEO of Mugnee Cambodia, officially operating under Mugnee Multiple Co. Ltd. (Cambodia). Mugnee began its journey in 2016 with a clear vision - to deliver reliable, high-quality digital display and smart technology solutions for institutions, businesses, and communities. Over the years, through Mugnee Multiple Ltd. (Bangladesh), we have successfully completed hundreds of projects serving government organizations, corporate clients, educational institutions, and industrial sectors.",
  p2:
    "My connection with Cambodia is also personal. Cambodia was the first country I visited outside Bangladesh. From that very first visit, I developed a deep appreciation for the Cambodian people - their kindness, culture, simplicity, and hospitality. That experience created a lasting connection with this country and inspired me to establish Mugnee Cambodia, not just as a business venture, but as a long-term commitment to contribute positively to Cambodia's growing digital infrastructure.",
  p3:
    "Our expansion into Cambodia marks an important milestone in our international journey. At Mugnee Cambodia, our commitment is simple: to provide professional LED display solutions, interactive flat panels, PA systems, access control, and integrated technology services - backed by engineering expertise, transparent pricing, and dependable after-sales support. We believe long-term success comes from trust, quality workmanship, and strong partnerships. Every project we undertake is handled with careful planning, certified components, skilled installation teams, and ongoing technical support.",
  p4:
    "Cambodia is a growing market with tremendous potential, and we are proud to support its digital transformation by delivering modern, efficient, and sustainable solutions. Thank you for your trust in Mugnee Cambodia. We look forward to building lasting partnerships together.",
  signatureName: "Saiful Islam Shajib",
  signatureRole: "Founder & CEO, Mugnee Multiple Co. Ltd., Cambodia",
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
      <section className="border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {t.eyebrow}
          </p>
          <h1 className="mt-1.5 text-3xl font-bold tracking-tight sm:text-[2.05rem]">{t.title}</h1>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
            <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <Image
                  src="/images/about/ceo-saiful-islam-shajib.webp"
                  alt="Saiful Islam Shajib, Founder and CEO"
                  width={800}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-slate-900">Saiful Islam Shajib</p>
                <p className="text-xs text-slate-600">Founder & CEO</p>
              </div>
            </aside>

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
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
