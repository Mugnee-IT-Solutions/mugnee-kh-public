"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLang } from "../../components/layout/LanguageProvider";
import { ACCESS_CONTROL_ITEMS } from "./accessControlData";
import { SITE_URL } from "../../lib/site";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };

export default function AccessControlClient() {
  const { lang } = useLang();

  const t = useMemo(() => {
    const en = {
      breadcrumb: "Products",
      badge: "Cambodia • Access Control • Door Security",
      h1: "Access Control System in Cambodia",
      sub:
        "Door access control, RFID card/QR/face recognition and attendance-ready solutions for offices, factories, hotels and schools. We handle site survey, installation, commissioning and local after-sales support.",
      cta1: "Get a Free Quotation",
      cta2: "View Models",
      serving: "Serving: Phnom Penh • Siem Reap • Sihanoukville",

      kTitle: "Key Components & Capabilities",
      kSub:
        "Build a reliable access control setup with the right controller, readers, locks and safety design.",
      k1: "កុងត្រូល័រ និងរេឡេទ្វារ",
      k1d: "1–4 door controllers (expandable), door relay, anti-passback (model dependent).",
      k2: "Credentials",
      k2d: "RFID card, PIN, QR, face recognition and attendance integration options.",
      k3: "Door hardware",
      k3d: "Magnetic lock, electric strike, exit button, door sensor, emergency release planning.",
      k4: "Software & reporting",
      k4d: "User roles, access schedules, logs/export, and project-based configuration.",

      useTitle: "Where Access Control Works Best",
      useSub:
        "Common use-cases in Cambodia—plan by door count, users, and security level.",
      u1t: "Office & Corporate Buildings",
      u1d: "Staff entry, server rooms, restricted areas, visitor logs.",
      u2t: "Factories & Warehouses",
      u2d: "Shift attendance, gate access, multi-door control, safety compliance.",
      u3t: "Hotels & Apartments",
      u3d: "Staff zones, service doors, lift access, time-based permissions.",
      u4t: "Schools & Campuses",
      u4d: "Classroom/lab access, attendance terminals, admin control.",
      u5t: "Banks & Sensitive Facilities",
      u5d: "Access schedules, audit logs, strict door hardware planning.",
      u6t: "Turnstile & Entry Gates",
      u6d: "Relay integration with turnstile gates for controlled entry.",

      chooseTitle: "How to Choose the Right Access Control System",
      chooseSub:
        "Simple checklist to avoid wrong device selection and reduce rework cost.",
      c1: "How many doors & users?",
      c1d: "Choose controller capacity + credential type (card/face/QR) based on users & doors.",
      c2: "Online vs offline system",
      c2d: "Networked systems enable central control & reporting. Offline works for small sites.",
      c3: "Door type & lock selection",
      c3d: "Glass/wood/metal doors need different brackets and lock types (maglock/strike).",
      c4: "Safety & power design",
      c4d: "Grounding, cable routing, power rating and emergency release planning are critical.",

      gridTitle: "Popular Access Control Models",
      gridSub:
        "Pick a starting point. Final model selection depends on site conditions and integration requirements.",

      processTitle: "Our Delivery Process",
      processSub:
        "A structured workflow for stable operation and clean installation.",
      p1: "Site Survey & Requirement",
      p2: "System Design & Quotation",
      p3: "Installation & Commissioning",
      p4: "Training & After-Sales Support",

      faqTitle: "FAQ — Access Control System",
      finalTitle: "Plan Your Access Control Project",
      finalSub:
        "Send door count, location, credential preference (card/face/QR), and any existing system details. We will propose compatible devices and a project-based quotation.",
      finalCta: "Contact & Get Quote",
      seeProjects: "See Projects",
      note:
        "Note: Final bill depends on door count, cable distance, lock type, network plan and site safety requirements.",
      viewDetails: "View details",
      getQuote: "Get quote",
    };

    const km = {
      breadcrumb: "ផលិតផល",
      badge: "កម្ពុជា • Access Control • សុវត្ថិភាពទ្វារ",
      h1: "ប្រព័ន្ធ Access Control នៅកម្ពុជា",
      sub:
        "ដំណោះស្រាយគ្រប់គ្រងការចូលទ្វារ (Door Access), RFID/QR/ស្គាល់មុខ និង Attendance-ready សម្រាប់ការិយាល័យ រោងចក្រ សណ្ឋាគារ និងសាលារៀន។ យើងធ្វើ site survey, installation, commissioning និង after-sales support ក្នុងស្រុក។",
      cta1: "ស្នើសុំតម្លៃ (Free)",
      cta2: "មើលម៉ូដែល",
      serving: "សេវាកម្ម៖ Phnom Penh • Siem Reap • Sihanoukville",

      kTitle: "សមាសធាតុសំខាន់ៗ & សមត្ថភាព",
      kSub:
        "បង្កើតប្រព័ន្ធមានស្ថេរភាព ដោយជ្រើស controller, reader, lock និងការរចនាសុវត្ថិភាពឲ្យត្រឹមត្រូវ។",
      k1: "កុងត្រូល័រ និងរេឡេទ្វារ",
      k1d: "Controller ១–៤ ទ្វារ (អាចបន្ថែម), door relay, anti-passback (អាស្រ័យម៉ូដែល)।",
      k2: "វិធីផ្ទៀងផ្ទាត់សិទ្ធិចូល",
      k2d: "RFID card, PIN, QR, ស្គាល់មុខ និងជម្រើសភ្ជាប់ attendance។",
      k3: "គ្រឿងបរិក្ខារទ្វារ",
      k3d: "Maglock, electric strike, exit button, door sensor និងផែនការ emergency release។",
      k4: "កម្មវិធី និងរបាយការណ៍",
      k4d: "User role, access schedule, logs/export និង setup តាមគម្រោង។",

      useTitle: "កន្លែងដែល Access Control សមស្រប",
      useSub:
        "ករណីប្រើប្រាស់ពេញនិយមនៅកម្ពុជា—គ្រោងតាមចំនួនទ្វារ អ្នកប្រើ និងកម្រិតសុវត្ថិភាព។",
      u1t: "ការិយាល័យ & អគារក្រុមហ៊ុន",
      u1d: "ច្រកបុគ្គលិក, server room, តំបន់មានកំណត់ និង visitor logs។",
      u2t: "រោងចក្រ & ឃ្លាំង",
      u2d: "attendance ក្រុមម៉ោង, gate access, គ្រប់គ្រងច្រើនទ្វារ និង compliance។",
      u3t: "សណ្ឋាគារ & អាផាតមិន",
      u3d: "តំបន់បុគ្គលិក, service door, lift access និង permission តាមម៉ោង។",
      u4t: "សាលារៀន & Campus",
      u4d: "lab/classroom access, attendance terminal និង admin control។",
      u5t: "ធនាគារ & ទីតាំងសន្តិសុខខ្ពស់",
      u5d: "access schedule, audit log និងការជ្រើស lock ត្រឹមត្រូវ។",
      u6t: "ច្រកបង្វិល និងច្រកចេញចូល",
      u6d: "ភ្ជាប់ relay ជាមួយ turnstile gate សម្រាប់ចូល-ចេញត្រឹមត្រូវ។",

      chooseTitle: "របៀបជ្រើសប្រព័ន្ធ Access Control ឲ្យត្រឹមត្រូវ",
      chooseSub:
        "បញ្ជីពិនិត្យសាមញ្ញ ដើម្បីជៀសវាងជ្រើសខុស និងកាត់បន្ថយថ្លៃ rework។",
      c1: "មានប៉ុន្មានទ្វារ & អ្នកប្រើ?",
      c1d: "ជ្រើស capacity controller + credential (កាត/មុខ/QR) តាម doors & users។",
      c2: "ប្រព័ន្ធអនឡាញ និងអอฟឡាញ",
      c2d: "Networked system អាចគ្រប់គ្រងមជ្ឈមណ្ឌល និង report។ Offline សមស្របសម្រាប់ site តូច។",
      c3: "ប្រភេទទ្វារ & ជ្រើស lock",
      c3d: "ទ្វារកញ្ចក់/ឈើ/ដែក ត្រូវការ bracket និង lock ប្រភេទខុសគ្នា (maglock/strike)។",
      c4: "សុវត្ថិភាព & power design",
      c4d: "Grounding, cable routing, power rating និង emergency release គឺសំខាន់។",

      gridTitle: "ម៉ូដែល Access Control ពេញនិយម",
      gridSub:
        "ជ្រើសជាចំណុចចាប់ផ្តើម។ ការជ្រើសចុងក្រោយអាស្រ័យលើ site និង integration requirement។",

      processTitle: "ដំណើរការដឹកជញ្ជូនគម្រោង",
      processSub:
        "Workflow ត្រឹមត្រូវ សម្រាប់ការដំណើរការស្ថេរភាព និងដំឡើងស្អាត។",
      p1: "Site Survey & តម្រូវការ",
      p2: "រចនា System & Quotation",
      p3: "ដំឡើង & Commissioning",
      p4: "បង្រៀនប្រើ & After-Sales Support",

      faqTitle: "សំណួរញឹកញាប់អំពីប្រព័ន្ធគ្រប់គ្រងការចូលចេញ",
      finalTitle: "រៀបចំគម្រោង Access Control របស់អ្នក",
      finalSub:
        "ផ្ញើចំនួនទ្វារ, ទីតាំង, credential (កាត/មុខ/QR) និងព័ត៌មានប្រព័ន្ធដែលមានស្រាប់។ យើងនឹងស្នើម៉ូដែលឆបគ្នា និង quotation តាមគម្រោង។",
      finalCta: "ទំនាក់ទំនង & ស្នើសុំតម្លៃ",
      seeProjects: "មើលគម្រោង",
      note:
        "ចំណាំ៖ ថ្លៃចុងក្រោយអាស្រ័យលើចំនួនទ្វារ ចម្ងាយខ្សែ ប្រភេទ lock network plan និងសុវត្ថិភាពទីតាំង។",
      viewDetails: "មើលព័ត៌មានលម្អិត",
      getQuote: "ស្នើសុំតម្លៃ",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const faqs: FAQ[] = useMemo(
    () => [
    {
      qEn: "Which access control is better—RFID or Face recognition?",
      aEn:
        "RFID is budget-friendly and easy to maintain. Face recognition is faster for attendance-heavy sites and improves convenience. We recommend based on doors, users and policy.",
      qKm: "RFID ល្អជាងឬ Face recognition ល្អជាង?",
      aKm:
        "RFID សន្សំថវិកា និងថែទាំងាយ។ Face recognition លឿនសម្រាប់ site មាន attendance ច្រើន និងងាយស្រួលប្រើ។ យើងណែនាំតាម doors, users និង policy។",
    },
    {
      qEn: "Can you integrate access control with attendance?",
      aEn:
        "Yes. Many terminals/controllers support attendance logs. We can configure users, schedules and export/report options.",
      qKm: "អាចភ្ជាប់ access control ជាមួយ attendance បានទេ?",
      aKm:
        "បាន។ ឧបករណ៍ជាច្រើនគាំទ្រ logs សម្រាប់ attendance។ យើងអាច setup users, schedules និង export/report។",
    },
    {
      qEn: "Do you provide installation and after-sales support in Cambodia?",
      aEn:
        "Yes. We handle site survey, wiring checks, commissioning and provide maintenance options with local support.",
      qKm: "មានសេវាដំឡើង និង after-sales support នៅកម្ពុជាដែរឬទេ?",
      aKm:
        "មាន។ យើងធ្វើ site survey, ពិនិត្យ wiring, commissioning និងមានជម្រើសថែទាំជាមួយ support ក្នុងស្រុក។",
    },
    {
      qEn: "What information should I send for a quotation?",
      aEn:
        "Door count, door type (glass/wood/metal), credential choice, user count and whether you need online reporting.",
      qKm: "ត្រូវផ្ញើព័ត៌មានអ្វីខ្លះសម្រាប់ quotation?",
      aKm:
        "ចំនួនទ្វារ, ប្រភេទទ្វារ (កញ្ចក់/ឈើ/ដែក), credential, ចំនួនអ្នកប្រើ និងតម្រូវការ online reporting។",
    },
    ],
    []
  );

  const jsonLd = useMemo(() => {
    const site = SITE_URL;
    const url = `${site}/products/access-control-system/`;
    const serviceAreas = ["Phnom Penh", "Siem Reap", "Sihanoukville"].map((name) => ({
      "@type": "AdministrativeArea",
      name,
    }));

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site },
        { "@type": "ListItem", position: 2, name: "Products", item: `${site}/products/` },
        { "@type": "ListItem", position: 3, name: "Access Control System", item: url },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: lang === "en" ? f.qEn : f.qKm,
        acceptedAnswer: {
          "@type": "Answer",
          text: lang === "en" ? f.aEn : f.aKm,
        },
      })),
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: lang === "en" ? "Access Control System Solutions in Cambodia" : "ដំណោះស្រាយប្រព័ន្ធ Access Control នៅកម្ពុជា",
      serviceType: "Access Control System Installation",
      url,
      description: lang === "en" ? t.sub : t.kSub,
      areaServed: serviceAreas,
      provider: {
        "@id": `${site}#organization`,
      },
    };

    return { breadcrumb, faqSchema, serviceSchema };
  }, [faqs, lang]);

  return (
    <div className="bg-white text-slate-900">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.serviceSchema) }}
      />
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,132,199,0.14),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.07),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_1px_1px,rgba(0,0,0,.28)_1px,transparent_0)] [background-size:18px_18px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="text-xs text-slate-500">
            {t.breadcrumb} <span className="mx-1">/</span>
            <span className="font-semibold text-slate-700">Access Control System</span>
          </div>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] text-slate-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            {t.badge}
          </div>

          <div className="mt-4 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.h1}</h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-700/90 sm:text-base">
                {t.sub}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <Link
                  href="/contact/"
                  className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  {t.cta1}
                </Link>
                <a
                  href="#models"
                  className="rounded-xl border border-slate-200 bg-white/85 px-4 py-2.5 text-sm font-semibold text-slate-900 backdrop-blur hover:bg-white"
                >
                  {t.cta2}
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-600">{t.serving}</p>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white/85 p-4 backdrop-blur">
                <div className="text-sm font-bold text-slate-900">{t.kTitle}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.kSub}</p>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <KeyRow title={t.k1} desc={t.k1d} />
                  <KeyRow title={t.k2} desc={t.k2d} />
                  <KeyRow title={t.k3} desc={t.k3d} />
                  <KeyRow title={t.k4} desc={t.k4d} />
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                <div className="text-base font-bold text-slate-900">{t.chooseTitle}</div>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{t.chooseSub}</p>

                <div className="mt-4 grid gap-3">
                  <GuideRow title={t.c1} desc={t.c1d} />
                  <GuideRow title={t.c2} desc={t.c2d} />
                  <GuideRow title={t.c3} desc={t.c3d} />
                  <GuideRow title={t.c4} desc={t.c4d} />
                </div>

                <div className="mt-4">
                  <Link
                    href="/contact/"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    {t.finalCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.useTitle}</h2>
          <p className="mt-2 text-slate-600">{t.useSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <UseCard title={t.u1t} desc={t.u1d} />
            <UseCard title={t.u2t} desc={t.u2d} />
            <UseCard title={t.u3t} desc={t.u3d} />
            <UseCard title={t.u4t} desc={t.u4d} />
            <UseCard title={t.u5t} desc={t.u5d} />
            <UseCard title={t.u6t} desc={t.u6d} />
          </div>
        </div>
      </section>

      {/* MODELS GRID */}
      <section id="models" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.gridTitle}</h2>
          <p className="mt-2 text-slate-600">{t.gridSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ACCESS_CONTROL_ITEMS.map((p) => (
              <ProductCard
                key={p.id}
                title={lang === "en" ? p.titleEn : p.titleKm}
                short={lang === "en" ? p.shortEn : p.shortKm}
                bestFor={lang === "en" ? p.bestForEn : p.bestForKm}
                highlights={lang === "en" ? p.highlightsEn : p.highlightsKm}
                specs={p.specs.map((s) => ({
                  k: lang === "en" ? s.kEn : s.kKm,
                  v: lang === "en" ? s.vEn : s.vKm,
                }))}
                tags={lang === "en" ? p.tagsEn : p.tagsKm}
                ctaLabel={t.getQuote}
              />
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500">{t.note}</p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.processTitle}</h2>
          <p className="mt-2 text-slate-600">{t.processSub}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n="01" title={t.p1} />
            <StepCard n="02" title={t.p2} />
            <StepCard n="03" title={t.p3} />
            <StepCard n="04" title={t.p4} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">{t.finalTitle}</h3>
            <p className="mt-2 text-slate-600">{t.finalSub}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {t.finalCta}
              </Link>
              <Link
                href="/projects/"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                {t.seeProjects}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.faqTitle}</h2>

          <div className="mt-6 grid gap-3">
            {faqs.map((f) => (
              <details
                key={f.qEn}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <summary className="cursor-pointer list-none">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-sm font-semibold text-slate-900">
                      {lang === "en" ? f.qEn : f.qKm}
                    </div>
                    <span className="mt-0.5 text-slate-400 transition group-open:rotate-180">
                      ▾
                    </span>
                  </div>
                  <div className="mt-2 hidden h-px w-full bg-slate-100 group-open:block" />
                </summary>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {lang === "en" ? f.aEn : f.aKm}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ======================
   Small UI components
   ====================== */

function KeyRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3">
      <div className="text-sm font-bold text-slate-900">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</div>
    </div>
  );
}

function GuideRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
      <div className="text-sm font-bold text-slate-900">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</div>
    </div>
  );
}

function UseCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function StepCard({ n, title }: { n: string; title: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-semibold text-slate-500">{n}</div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{title}</div>
    </div>
  );
}

function ProductCard({
  title,
  short,
  bestFor,
  highlights,
  specs,
  tags,
  ctaLabel,
}: {
  title: string;
  short: string;
  bestFor: string;
  highlights: string[];
  specs: { k: string; v: string }[];
  tags: string[];
  ctaLabel: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="p-5">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{short}</p>

        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          <div className="text-xs font-semibold text-slate-700">Best for</div>
          <div className="mt-1 text-sm text-slate-700">{bestFor}</div>
        </div>

        <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-600">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="mt-4 grid gap-2">
          {specs.slice(0, 3).map((s) => (
            <div key={s.k} className="flex items-start justify-between gap-3 text-xs">
              <span className="font-semibold text-slate-700">{s.k}</span>
              <span className="text-slate-600">{s.v}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-2">
          <Link
            href="/contact/"
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
