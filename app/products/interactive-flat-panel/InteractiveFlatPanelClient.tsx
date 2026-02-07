"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLang } from "../../components/layout/LanguageProvider";
import { IFP_PRODUCTS, type IFPProduct } from "./ifpProducts";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };

export default function InteractiveFlatPanelClient() {
  const { lang } = useLang();

  const t = useMemo(() => {
    const en = {
      breadcrumb: "Products",
      badge: "Cambodia • Interactive Flat Panel • Smart Board",
      h1: "Interactive Flat Panel in Cambodia",
      sub:
        "4K touchscreen Interactive Flat Panels (IFP) for classrooms, meeting rooms and training centers. Built-in whiteboard, wireless screen sharing and reliable installation with local after-sales support.",
      cta1: "Get a Free Quotation",
      cta2: "View IFP Models",
      serving: "Serving: Phnom Penh • Siem Reap • Sihanoukville",

      seoTitle: "Smart Board & Interactive Display Solutions",
      seoText:
        "Interactive Flat Panels (also called smart boards) are designed for modern teaching and collaboration. For Cambodia projects, we recommend choosing the right screen size, touch performance, connectivity ports and mounting method. We supply, install and support interactive panels for schools, universities, offices and training centers with project-based quotation.",

      keyTitle: "Key Specifications (Interactive Flat Panel)",
      keySub:
        "Common requirements for smooth writing, clear visuals and reliable daily operation.",
      k1: "Display & Resolution",
      k1d: "4K UHD display with anti-glare glass for clear viewing in bright rooms.",
      k2: "Touch Performance",
      k2d: "Multi-touch support for smooth writing, annotation and collaboration.",
      k3: "Operating System",
      k3d: "Android built-in; OPS/PC optional for Windows apps and advanced meetings.",
      k4: "Connectivity",
      k4d: "HDMI/USB/USB-C, Wi-Fi/LAN, screen sharing options and audio output.",

      productTitle: "Interactive Flat Panel Models",
      productSub:
        "Select a size based on room dimension and viewing distance. For exact recommendation, contact us with room size and use-case.",

      useTitle: "Best Use Cases in Cambodia",
      useSub:
        "Where Interactive Flat Panels deliver the most value for communication and learning.",
      u1: "Schools & Smart Classrooms",
      u1d: "Teach with whiteboard, annotation, multimedia and interactive lessons.",
      u2: "Meeting Rooms & Boardrooms",
      u2d: "Present, annotate, collaborate and share screens wirelessly.",
      u3: "Training Centers",
      u3d: "Interactive sessions with clear visuals and hands-on demonstration.",
      u4: "Government & Institutions",
      u4d: "Reliable daily usage for briefings, reporting and presentations.",

      compareTitle: "Interactive Flat Panel vs Projector",
      compareSub:
        "Why many schools and offices in Cambodia upgrade to smart interactive panels.",
      cA: "Brighter & clearer in daylight rooms",
      cB: "No lamp replacement, lower maintenance",
      cC: "Touch writing + annotation built-in",
      cD: "Wireless sharing + multiple device support",

      setupTitle: "Installation, Setup & Training",
      setupSub:
        "We ensure safe mounting, correct wiring and provide user training for smooth operation.",
      s1: "Site check & mounting plan",
      s2: "Wall mount / floor stand setup",
      s3: "Apps, Wi-Fi/LAN and screen sharing configuration",
      s4: "Teacher/staff training and handover",

      softwareTitle: "Software & Compatibility",
      softwareSub:
        "Works with laptops, smartphones and popular meeting/learning workflows.",
      sw1: "Whiteboard + annotation apps",
      sw2: "Wireless casting (Windows/macOS/Android/iOS)",
      sw3: "OPS/PC option for Windows applications",
      sw4: "HDMI/USB-C support for quick plug & play",

      faqTitle: "FAQ — Interactive Flat Panel",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Share your room size, preferred screen size and usage (classroom or meeting). We’ll recommend the best model with installation and support options.",
      finalCta: "Contact & Get Quote",
      seeProjects: "See Projects",
      note:
        "Note: Final configuration (ports, OPS, mount type) depends on project requirements.",
    };

    const km = {
      breadcrumb: "ផលិតផល",
      badge: "កម្ពុជា • Interactive Flat Panel • Smart Board",
      h1: "Interactive Flat Panel នៅកម្ពុជា",
      sub:
        "4K touchscreen Interactive Flat Panel (IFP) សម្រាប់ classroom, meeting room និង training center។ Built-in whiteboard, wireless screen sharing এবং installation + support ក្នុងស្រុក।",
      cta1: "ស្នើសុំតម្លៃ (Free)",
      cta2: "មើល IFP Models",
      serving: "សេវាកម្ម៖ Phnom Penh • Siem Reap • Sihanoukville",

      seoTitle: "Smart Board & Interactive Display Solutions",
      seoText:
        "Interactive Flat Panel (smart board) គឺសម្រាប់ការបង្រៀន និងការសហការ modern។ ជ្រើស model ត្រូវគិតពី screen size, touch performance, connectivity ports និង mounting method។ យើងផ្គត់ផ្គង់ ដំឡើង និង support សម្រាប់ schools, universities, offices និង training centers ជាមួយ quotation តាមគម្រោង។",

      keyTitle: "Key Specifications (Interactive Flat Panel)",
      keySub:
        "តម្រូវការសម្រាប់ writing ស្មੂត និងរូបភាពច្បាស់សម្រាប់ប្រើរៀងរាល់ថ្ងៃ។",
      k1: "Display & Resolution",
      k1d: "4K UHD + anti-glare glass សម្រាប់មើលច្បាស់នៅបន្ទប់ភ្លឺ។",
      k2: "Touch Performance",
      k2d: "Multi-touch សម្រាប់សរសេរ/annotation និង collaboration។",
      k3: "Operating System",
      k3d: "Android built-in; OPS/PC optional សម្រាប់ Windows apps។",
      k4: "Connectivity",
      k4d: "HDMI/USB/USB-C, Wi-Fi/LAN, screen sharing និង audio output។",

      productTitle: "Interactive Flat Panel Models",
      productSub:
        "ជ្រើសទំហំតាម room size និង viewing distance។ សូមផ្ញើ room size + use-case ដើម្បីណែនាំបានត្រឹមត្រូវ។",

      useTitle: "Best Use Cases in Cambodia",
      useSub:
        "កន្លែងដែល IFP ផ្តល់ value ខ្ពស់សម្រាប់ learning និង presentation។",
      u1: "Schools & Smart Classrooms",
      u1d: "Whiteboard, annotation, multimedia និង interactive lessons។",
      u2: "Meeting Rooms & Boardrooms",
      u2d: "Presentation + collaboration + wireless sharing។",
      u3: "Training Centers",
      u3d: "Training sessions ជាមួយ visuals ច្បាស់ និង demonstration។",
      u4: "Government & Institutions",
      u4d: "ប្រើប្រាស់រៀងរាល់ថ្ងៃសម្រាប់ briefings និង reporting។",

      compareTitle: "Interactive Flat Panel vs Projector",
      compareSub:
        "ហេតុអ្វី schools/offices នៅកម្ពុជា upgrade ទៅ smart panel។",
      cA: "មើលច្បាស់នៅបន្ទប់ភ្លឺ",
      cB: "maintenance តិច (no lamp)",
      cC: "Touch writing + annotation built-in",
      cD: "Wireless sharing + multi-device",

      setupTitle: "Installation, Setup & Training",
      setupSub:
        "ដំឡើងសុវត្ថិភាព, wiring ត្រឹមត្រូវ និងបង្រៀនប្រើប្រាស់។",
      s1: "Site check & mounting plan",
      s2: "Wall mount / floor stand setup",
      s3: "Wi-Fi/LAN + screen sharing configuration",
      s4: "Teacher/staff training and handover",

      softwareTitle: "Software & Compatibility",
      softwareSub:
        "Support laptops/phones និង meeting/learning workflow ពេញនិយម។",
      sw1: "Whiteboard + annotation apps",
      sw2: "Wireless casting (Windows/macOS/Android/iOS)",
      sw3: "OPS/PC option for Windows applications",
      sw4: "HDMI/USB-C plug & play",

      faqTitle: "FAQ — Interactive Flat Panel",
      finalTitle: "ស្នើសុំ Quotation តាមគម្រោង",
      finalSub:
        "ផ្ញើ room size, screen size និង use-case (classroom/meeting)। យើងនឹងណែនាំ model + installation + support options។",
      finalCta: "ទំនាក់ទំនង & ស្នើសុំតម្លៃ",
      seeProjects: "មើលគម្រោង",
      note:
        "ចំណាំ៖ Final configuration (ports, OPS, mount type) តាម project requirement។",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const faqs: FAQ[] = [
    {
      qEn: "Which size is best for a classroom in Cambodia?",
      aEn:
        "Most classrooms choose 65–75 inch depending on room depth and student seating distance. We recommend after checking room size and viewing angle.",
      qKm: "Classroom សម្រាប់ size មួយណាល្អ?",
      aKm:
        "ភាគច្រើន classroom ជ្រើស 65–75 inch តាម room depth និងចម្ងាយអង្គុយ។ យើងណែនាំក្រោយពិនិត្យ room size។",
    },
    {
      qEn: "Do you provide wall mount or floor stand installation?",
      aEn:
        "Yes. We provide wall mount and floor stand setup with safe wiring, power routing and proper finishing.",
      qKm: "មាន wall mount / floor stand installation ដែរឬទេ?",
      aKm:
        "មាន។ យើងដំឡើង wall mount និង floor stand ជាមួយ wiring និង finishing ត្រឹមត្រូវ។",
    },
    {
      qEn: "Can it connect to laptops and phones wirelessly?",
      aEn:
        "Yes. Most panels support wireless screen sharing and also offer HDMI/USB-C for plug & play.",
      qKm: "Laptop/phone wireless connect បានទេ?",
      aKm:
        "បាន។ មាន wireless screen sharing និង HDMI/USB-C សម្រាប់ plug & play។",
    },
    {
      qEn: "Do you provide training and after-sales support in Cambodia?",
      aEn:
        "Yes. We provide user training, configuration support and maintenance options (AMC) depending on project needs.",
      qKm: "Training + after-sales support មានទេ?",
      aKm:
        "មាន។ មាន training, configuration support និង maintenance options (AMC) តាមគម្រោង។",
    },
  ];

  const jsonLd = useMemo(() => {
    const base =
      (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
        "http://localhost:3000") + "/products/interactive-flat-panel";

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item:
            process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
            "http://localhost:3000",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item:
            (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
              "http://localhost:3000") + "/products",
        },
        { "@type": "ListItem", position: 3, name: "Interactive Flat Panel", item: base },
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

    return { breadcrumb, faqSchema };
  }, [faqs, lang]);

  return (
    <main className="bg-white text-slate-900">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faqSchema) }}
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
            <span className="font-semibold text-slate-700">Interactive Flat Panel</span>
          </div>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] text-slate-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            {t.badge}
          </div>

          <div className="mt-4 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {t.h1}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-700/90 sm:text-base">
                {t.sub}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <Link
                  href="/contact"
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
                <div className="text-sm font-bold text-slate-900">{t.seoTitle}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.seoText}</p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                <div className="text-base font-bold text-slate-900">{t.keyTitle}</div>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{t.keySub}</p>

                <div className="mt-4 grid gap-3">
                  <SpecRow title={t.k1} desc={t.k1d} />
                  <SpecRow title={t.k2} desc={t.k2d} />
                  <SpecRow title={t.k3} desc={t.k3d} />
                  <SpecRow title={t.k4} desc={t.k4d} />
                </div>

                <div className="mt-4">
                  <Link
                    href="/contact"
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

      {/* PRODUCT GRID */}
      <section id="models" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.productTitle}
          </h2>
          <p className="mt-2 text-slate-600">{t.productSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {IFP_PRODUCTS.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500">{t.note}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {t.finalCta}
            </Link>
            <Link
              href="/projects"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {t.seeProjects}
            </Link>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.useTitle}
          </h2>
          <p className="mt-2 text-slate-600">{t.useSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <UseCaseCard title={t.u1} desc={t.u1d} chips={["Education", "Whiteboard", "Interactive"]} />
            <UseCaseCard title={t.u2} desc={t.u2d} chips={["Meeting", "Presentation", "Wireless share"]} />
            <UseCaseCard title={t.u3} desc={t.u3d} chips={["Training", "Annotation", "4K"]} />
            <UseCaseCard title={t.u4} desc={t.u4d} chips={["Institution", "Daily use", "Reliable"]} />
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.compareTitle}
          </h2>
          <p className="mt-2 text-slate-600">{t.compareSub}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <MiniCard text={t.cA} />
            <MiniCard text={t.cB} />
            <MiniCard text={t.cC} />
            <MiniCard text={t.cD} />
          </div>
        </div>
      </section>

      {/* SETUP */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.setupTitle}
          </h2>
          <p className="mt-2 text-slate-600">{t.setupSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n="01" title={t.s1} desc="" />
            <StepCard n="02" title={t.s2} desc="" />
            <StepCard n="03" title={t.s3} desc="" />
            <StepCard n="04" title={t.s4} desc="" />
          </div>
        </div>
      </section>

      {/* SOFTWARE */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.softwareTitle}
          </h2>
          <p className="mt-2 text-slate-600">{t.softwareSub}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <MiniCard text={t.sw1} />
            <MiniCard text={t.sw2} />
            <MiniCard text={t.sw3} />
            <MiniCard text={t.sw4} />
          </div>
        </div>
      </section>

      {/* FAQ + FINAL CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.faqTitle}
          </h2>

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

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">{t.finalTitle}</h3>
            <p className="mt-2 text-slate-600">{t.finalSub}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {t.finalCta}
              </Link>
              <Link
                href="/projects"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                {t.seeProjects}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ======================
   Small UI components
   ====================== */

function SpecRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3">
      <div className="text-sm font-bold text-slate-900">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</div>
    </div>
  );
}

function ProductCard({ p }: { p: IFPProduct }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{p.name}</div>

      <div className="mt-2 grid gap-1 text-xs text-slate-600">
        <div>
          <span className="font-semibold text-slate-900">Size:</span> {p.size}
        </div>
        <div>
          <span className="font-semibold text-slate-900">Resolution:</span>{" "}
          {p.resolution}
        </div>
        <div>
          <span className="font-semibold text-slate-900">Touch:</span> {p.touch}
        </div>
        <div>
          <span className="font-semibold text-slate-900">OS:</span> {p.os}
        </div>
        <div className="pt-1">
          <span className="font-semibold text-slate-900">Best for:</span>{" "}
          {p.bestFor}
        </div>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-600">
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="mt-4">
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}

function UseCaseCard({
  title,
  desc,
  chips,
}: {
  title: string;
  desc: string;
  chips: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {chips.map((c) => (
          <span
            key={c}
            className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function StepCard({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-semibold text-slate-500">{n}</div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{title}</div>
      {desc ? <p className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</p> : null}
    </div>
  );
}

function MiniCard({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
      {text}
    </div>
  );
}
