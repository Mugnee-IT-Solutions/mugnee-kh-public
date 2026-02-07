"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLang } from "../../components/layout/LanguageProvider";
import { OUTDOOR_PRODUCTS, type OutdoorProduct } from "./outdoorProducts";
import ProductGrid from "../../components/sections/ProductGrid";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };

export default function OutdoorLedDisplayClient() {
  const { lang } = useLang();

  const t = useMemo(() => {
    const en = {
      breadcrumb: "Products",
      badge: "Cambodia • Outdoor LED • LED Billboard",
      h1: "Outdoor LED Display in Cambodia",
      sub:
        "Weatherproof outdoor LED display solutions for roadside billboards, building facade screens and outdoor digital signage. We handle site survey, structure design, installation, commissioning and local after-sales support.",
      cta1: "Get a Free Quotation",
      cta2: "View Outdoor LED Panels",
      serving: "Serving: Phnom Penh • Siem Reap • Sihanoukville",

      seoBlockTitle: "Outdoor LED Screen & Billboard Solutions",
      seoBlock:
        "Outdoor LED screens are widely used across Cambodia for high-visibility advertising and public messaging. Choosing the right outdoor LED display depends on viewing distance, pixel pitch, brightness (nits), IP protection and safe steel structure. We recommend specifications after a site survey to ensure correct size, cabinet layout, power planning and long-term reliability.",

      highlightsTitle: "What You Get",
      hA: "High brightness for daylight visibility",
      hB: "IP-rated protection for rain & dust",
      hC: "Structure design & safe installation",
      hD: "Local support + spare parts planning",

      specTitle: "Key Specifications (Outdoor)",
      specSub:
        "These are common outdoor requirements for stable performance in heat, dust and humidity.",
      s1: "Brightness",
      s1d: "Typically 5500–8000 nits depending on location and sunlight.",
      s2: "Protection (IP Rating)",
      s2d: "IP65 front protection is common for outdoor billboard screens.",
      s3: "Pixel Pitch",
      s3d: "Select pitch by viewing distance (e.g., P4 city roads, P6–P10 highways).",
      s4: "Structure & Safety",
      s4d: "Steel structure, wind load, grounding and lightning protection are critical.",

      productTitle: "Outdoor LED Display Panels",
      productSub:
        "Choose a panel option by viewing distance and budget. For accurate recommendation, contact us with location + screen size.",
      gridNote:
        "Note: Specifications vary by model and project requirement. We provide final configuration after survey.",

      useTitle: "Best Use Cases in Cambodia",
      useSub:
        "Outdoor LED display applications that deliver strong visibility and ROI.",
      u1: "Roadside & Highway LED Billboards",
      u1d: "Large-format advertising for long-distance viewing and high traffic.",
      u2: "Building Facade & Rooftop Screens",
      u2d: "High brightness screens with safe mounting and structure engineering.",
      u3: "Outdoor Digital Signage for Retail",
      u3d: "Promotions, brand visuals and announcements with full-day visibility.",
      u4: "Public Information & Smart City",
      u4d: "City messaging, events, notices and campaign communications.",

      processTitle: "Project Delivery (Survey → Installation)",
      processSub:
        "A structured workflow for correct configuration, safe installation and stable performance.",
      p1: "Site Survey & Measurement",
      p1d: "We check viewing distance, sunlight direction, power route and mounting area.",
      p2: "Design & Proposal",
      p2d: "We propose pixel pitch, screen size, cabinet layout and structure concept.",
      p3: "Installation & Commissioning",
      p3d: "Proper wiring, grounding, calibration and content testing.",
      p4: "Training & After-Sales Support",
      p4d: "Operator training, maintenance options (AMC) and support planning.",

      maintTitle: "Maintenance & AMC Support",
      maintSub:
        "Outdoor screens run long hours—regular inspection helps prevent downtime and increases lifespan.",
      m1: "Preventive maintenance schedule",
      m2: "Spare parts planning (modules, power, controller)",
      m3: "On-site troubleshooting & remote guidance",
      m4: "Cleaning & protection checks (IP sealing)",

      faqTitle: "FAQ — Outdoor LED Display",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Share your location, screen size and purpose. We’ll recommend suitable pixel pitch, brightness and structure with a project-based quotation.",
      finalCta: "Contact & Get Quote",
      seeProjects: "See Projects",
    };

    const km = {
      breadcrumb: "ផលិតផល",
      badge: "កម្ពុជា • Outdoor LED • Billboard",
      h1: "អេក្រង់ LED ក្រៅអគារ នៅកម្ពុជា",
      sub:
        "ដំណោះស្រាយអេក្រង់ LED ក្រៅអគារ សម្រាប់ billboard ផ្លូវធំ, rooftop និង outdoor digital signage។ យើងធ្វើ site survey, structure design, installation, commissioning និង after-sales support ក្នុងស្រុក។",
      cta1: "ស្នើសុំតម្លៃ (Free)",
      cta2: "មើល Outdoor LED Panels",
      serving: "សេវាកម្ម៖ Phnom Penh • Siem Reap • Sihanoukville",

      seoBlockTitle: "ដំណោះស្រាយ Outdoor LED Screen & Billboard",
      seoBlock:
        "Outdoor LED screens ពេញនិយមនៅកម្ពុជា សម្រាប់ពាណិជ្ជកម្ម និងសារសាធារណៈ។ ការជ្រើស outdoor LED display ត្រូវពិចារណា viewing distance, pixel pitch, brightness (nits), IP protection និងសុវត្ថិភាពរចនាសម្ព័ន្ធ។ យើងណែនាំ specs បន្ទាប់ពី site survey ដើម្បីបានទំហំ, layout និង power planning ត្រឹមត្រូវ។",

      highlightsTitle: "អត្ថប្រយោជន៍ដែលអ្នកទទួលបាន",
      hA: "ភ្លឺខ្ពស់ មើលច្បាស់ពេលថ្ងៃ",
      hB: "IP-rated ការពារទឹក និងធូលី",
      hC: "Structure design + ដំឡើងសុវត្ថិភាព",
      hD: "Support ក្នុងស្រុក + spare parts planning",

      specTitle: "ស្ដង់ដារសំខាន់ៗ (Outdoor)",
      specSub:
        "តម្រូវការសម្រាប់ដំណើរការស្ថេរភាព ក្នុងកំដៅ ធូលី និងសំណើម។",
      s1: "Brightness",
      s1d: "ប្រហែល 5500–8000 nits តាមទីតាំង និងពន្លឺថ្ងៃ។",
      s2: "IP Rating",
      s2d: "IP65 ជាទូទៅសម្រាប់ outdoor billboard screens។",
      s3: "Pixel Pitch",
      s3d: "ជ្រើសតាម viewing distance (P4 ក្នុងទីក្រុង, P6–P10 ផ្លូវធំ)។",
      s4: "Structure & Safety",
      s4d: "Steel structure, wind load, grounding និង lightning protection សំខាន់។",

      productTitle: "Outdoor LED Display Panels",
      productSub:
        "ជ្រើស panel តាម viewing distance និងថវិកា។ សម្រាប់ត្រឹមត្រូវ សូមផ្ញើ location + screen size។",
      gridNote:
        "ចំណាំ៖ specs អាចប្រែប្រួលតាម model និង project requirement។ Final config ក្រោយ survey។",

      useTitle: "ការប្រើប្រាស់ល្អបំផុតនៅកម្ពុជា",
      useSub:
        "Use cases ដែលអាចផ្តល់ visibility ខ្ពស់ និង ROI ល្អ។",
      u1: "Roadside & Highway LED Billboards",
      u1d: "Billboard ទំហំធំ សម្រាប់មើលឆ្ងាយ និងចរាចរណ៍ខ្ពស់។",
      u2: "Building Facade & Rooftop Screens",
      u2d: "ភ្លឺខ្ពស់ និង mounting/structure engineering សុវត្ថិភាព។",
      u3: "Outdoor Digital Signage for Retail",
      u3d: "ផ្សព្វផ្សាយ និងសារផ្សេងៗ មើលច្បាស់ពេញថ្ងៃ។",
      u4: "Public Information & Smart City",
      u4d: "សារសាធារណៈ, event notices និង campaign messaging។",

      processTitle: "ដំណើរការគម្រោង (Survey → Installation)",
      processSub:
        "Workflow ត្រឹមត្រូវសម្រាប់ config ត្រឹមត្រូវ និងដំណើរការស្ថេរភាព។",
      p1: "Site Survey & Measurement",
      p1d: "ពិនិត្យ viewing distance, sunlight, power route និង mounting area។",
      p2: "Design & Proposal",
      p2d: "ណែនាំ pixel pitch, screen size, cabinet layout និង structure concept។",
      p3: "Installation & Commissioning",
      p3d: "Wiring/grounding, calibration និង content testing។",
      p4: "Training & After-Sales Support",
      p4d: "បង្រៀនប្រើ និង maintenance options (AMC) + support planning។",

      maintTitle: "Maintenance & AMC Support",
      maintSub:
        "Outdoor screens ដំណើរការយូរ—ការថែទាំទៀងទាត់ កាត់បន្ថយ downtime និងបន្ថែម lifespan។",
      m1: "Preventive maintenance schedule",
      m2: "Spare parts planning (modules, power, controller)",
      m3: "On-site troubleshooting & remote guidance",
      m4: "Cleaning & IP sealing checks",

      faqTitle: "FAQ — Outdoor LED Display",
      finalTitle: "ស្នើសុំ Quotation តាមគម្រោង",
      finalSub:
        "ផ្ញើ location, screen size និង use-case។ យើងនឹងណែនាំ pixel pitch, brightness និង structure ជាមួយ quotation តាមគម្រោង។",
      finalCta: "ទំនាក់ទំនង & ស្នើសុំតម្លៃ",
      seeProjects: "មើលគម្រោង",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const faqs: FAQ[] = [
    {
      qEn: "Which pixel pitch is best for outdoor LED billboards?",
      aEn:
        "Pixel pitch depends on viewing distance. City roads often use P4–P6. Highways and very long viewing distances commonly use P8–P10.",
      qKm: "Outdoor billboard សម្រាប់ pixel pitch មួយណាល្អ?",
      aKm:
        "Pixel pitch ពឹងផ្អែកលើចម្ងាយមើល។ ក្នុងទីក្រុងភាគច្រើន P4–P6។ ផ្លូវធំ/មើលឆ្ងាយ P8–P10 ជាទូទៅ។",
    },
    {
      qEn: "How much brightness do outdoor LED screens need?",
      aEn:
        "Most outdoor screens are designed around 5500–8000 nits depending on sunlight, orientation and installation height.",
      qKm: "Outdoor LED ត្រូវការភ្លឺ (brightness) ប៉ុន្មាន?",
      aKm:
        "ជាទូទៅ outdoor screens ប្រហែល 5500–8000 nits តាមពន្លឺថ្ងៃ និងទីតាំងដំឡើង។",
    },
    {
      qEn: "Do you provide structure design and installation?",
      aEn:
        "Yes. We handle site survey, steel structure concept, safe mounting, wiring, grounding and commissioning.",
      qKm: "មាន structure design និង installation ដែរឬទេ?",
      aKm:
        "មាន។ យើងធ្វើ survey, structure concept, mounting, wiring/grounding និង commissioning។",
    },
    {
      qEn: "Do you provide after-sales support in Cambodia?",
      aEn:
        "Yes. We provide local support and maintenance options (AMC) with spare parts planning to reduce downtime.",
      qKm: "មាន after-sales support នៅកម្ពុជា ដែរឬទេ?",
      aKm:
        "មាន។ មាន support ក្នុងស្រុក និង maintenance options (AMC) + spare parts planning។",
    },
  ];

  // ✅ Breadcrumb JSON-LD + FAQ JSON-LD (safe)
  const jsonLd = useMemo(() => {
    const base =
      (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
        "http://localhost:3000") + "/products/outdoor-led-display";

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
            "http://localhost:3000"),
        },
        { "@type": "ListItem", position: 2, name: "Products", item: (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000") + "/products" },
        { "@type": "ListItem", position: 3, name: "Outdoor LED Display", item: base },
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
            <span className="font-semibold text-slate-700">Outdoor LED Display</span>
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

              <div className="mt-4 flex flex-wrap gap-2">
                <Chip text={t.hA} />
                <Chip text={t.hB} />
                <Chip text={t.hC} />
                <Chip text={t.hD} />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <Link
                  href="/contact"
                  className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  {t.cta1}
                </Link>
                <a
                  href="#panels"
                  className="rounded-xl border border-slate-200 bg-white/85 px-4 py-2.5 text-sm font-semibold text-slate-900 backdrop-blur hover:bg-white"
                >
                  {t.cta2}
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-600">{t.serving}</p>

              {/* SEO block */}
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white/85 p-4 backdrop-blur">
                <div className="text-sm font-bold text-slate-900">{t.seoBlockTitle}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t.seoBlock}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                <div className="text-base font-bold text-slate-900">{t.specTitle}</div>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{t.specSub}</p>

                <div className="mt-4 grid gap-3">
                  <SpecRow title={t.s1} desc={t.s1d} />
                  <SpecRow title={t.s2} desc={t.s2d} />
                  <SpecRow title={t.s3} desc={t.s3d} />
                  <SpecRow title={t.s4} desc={t.s4d} />
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
      <section id="panels" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.productTitle}
          </h2>
          <p className="mt-2 text-slate-600">{t.productSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OUTDOOR_PRODUCTS.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500">{t.gridNote}</p>

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
            <UseCaseCard title={t.u1} desc={t.u1d} chips={["Outdoor", "High visibility", "Long distance"]} />
            <UseCaseCard title={t.u2} desc={t.u2d} chips={["Outdoor", "Structure", "Safety"]} />
            <UseCaseCard title={t.u3} desc={t.u3d} chips={["Digital signage", "Retail", "Daylight"]} />
            <UseCaseCard title={t.u4} desc={t.u4d} chips={["Public info", "Events", "Smart city"]} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.processTitle}
          </h2>
          <p className="mt-2 text-slate-600">{t.processSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n="01" title={t.p1} desc={t.p1d} />
            <StepCard n="02" title={t.p2} desc={t.p2d} />
            <StepCard n="03" title={t.p3} desc={t.p3d} />
            <StepCard n="04" title={t.p4} desc={t.p4d} />
          </div>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.maintTitle}
          </h2>
          <p className="mt-2 text-slate-600">{t.maintSub}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <MiniCard text={t.m1} />
            <MiniCard text={t.m2} />
            <MiniCard text={t.m3} />
            <MiniCard text={t.m4} />
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en" ? "Outdoor LED Products" : "ផលិតផល LED ខាងក្រៅ"}
          </h2>
          <p className="mt-2 text-slate-600">
            {lang === "en"
              ? "Browse outdoor LED modules for billboards, rooftops and large-format screens. No public pricing—request a quotation."
              : "មើលម៉ូឌុល LED ខាងក្រៅសម្រាប់ប៊ីលបត និងអេក្រង់ធំៗ។ មិនបង្ហាញតម្លៃសាធារណៈ—សូមស្នើសុំតម្លៃ។"}
          </p>

          <div className="mt-6">
            <ProductGrid
              categoryId="outdoor_led_display"
              showCategoryFilters={false}
              showSort={false}
              columns={3}
            />
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

function Chip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700">
      {text}
    </span>
  );
}

function SpecRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3">
      <div className="text-sm font-bold text-slate-900">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</div>
    </div>
  );
}

function ProductCard({ p }: { p: OutdoorProduct }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{p.name}</div>
      <div className="mt-2 grid gap-1 text-xs text-slate-600">
        <div>
          <span className="font-semibold text-slate-900">Pixel Pitch:</span>{" "}
          {p.pitch}
        </div>
        <div>
          <span className="font-semibold text-slate-900">Brightness:</span>{" "}
          {p.brightness}
        </div>
        <div>
          <span className="font-semibold text-slate-900">Protection:</span>{" "}
          {p.ip}
        </div>
        <div>
          <span className="font-semibold text-slate-900">Cabinet:</span>{" "}
          {p.cabinet}
        </div>
        <div className="pt-1">
          <span className="font-semibold text-slate-900">Best for:</span>{" "}
          {p.bestFor}
        </div>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-slate-500">{p.note}</p>

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
      <p className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</p>
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
