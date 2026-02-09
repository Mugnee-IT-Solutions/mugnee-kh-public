"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLang } from "../../components/layout/LanguageProvider";
import ProductGrid from "../../components/sections/ProductGrid";
import { PRODUCTS } from "../../data/products";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };

export default function InteractiveFlatPanelClient() {
  const { lang } = useLang();

  const t = useMemo(() => {
    const en = {
      breadcrumb: "Interactive Flat Panel",
      badge: "Cambodia - Interactive Flat Panel - Smart Board",
      h1: "Interactive Flat Panel Price in Cambodia",
      sub:
        "4K UHD interactive flat panels (smart boards) for classrooms, meeting rooms, training centers, and hospitals. Multi-touch writing, wireless screen sharing, and Android with optional OPS/Windows help teams collaborate and teach with clarity.",
      cta1: "Get a Free Quotation",
      cta2: "View IFP Models",
      serving: "Serving: Phnom Penh - Siem Reap - Sihanoukville",

      seoTitle: "Smart Board & Interactive Display Solutions",
      seoText:
        "Interactive flat panels (smart boards) are 4K touch displays built for modern teaching and collaboration. Choose screen size, touch performance, operating system, and connectivity based on room size and use case. Popular sizes include 65, 75, 86, 98, and 110 inches.",

      keyTitle: "Interactive Flat Panel Specifications for Cambodia",
      keySub:
        "Common requirements for smooth writing, clear visuals, and reliable daily operation.",
      k1: "Display & Resolution",
      k1d: "4K UHD panels with wide viewing angles for clear visibility.",
      k2: "Touch Performance",
      k2d: "20 to 40-point multi-touch with fast response for writing and collaboration.",
      k3: "Operating System",
      k3d: "Android built-in with optional OPS/Windows support.",
      k4: "Connectivity",
      k4d: "HDMI, USB, USB-C, LAN, and wireless connectivity options.",

      productTitle: "Interactive Flat Panel Models",
      productSub:
        "Select a size based on room dimensions and viewing distance. Share room size and use case for the right recommendation.",

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
        "We ensure safe mounting, correct wiring, and user training for smooth operation.",
      s1: "Site check & mounting plan",
      s2: "Wall mount / floor stand setup",
      s3: "Apps, Wi-Fi/LAN and screen sharing configuration",
      s4: "Teacher/staff training and handover",

      softwareTitle: "Software & Compatibility",
      softwareSub:
        "Works with laptops, smartphones, and popular meeting or learning workflows.",
      sw1: "Whiteboard + annotation apps",
      sw2: "Wireless casting (Windows/macOS/Android/iOS)",
      sw3: "OPS/PC option for Windows applications",
      sw4: "HDMI/USB-C support for quick plug & play",

      faqTitle: "FAQ - Interactive Flat Panel",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Share your room size, preferred screen size, and usage (classroom or meeting). We will recommend the best model with installation and support options.",
      finalCta: "Contact & Get Quotation",
      seeProjects: "See Projects",
      note:
        "Note: Final configuration (ports, OPS, mount type) depends on project requirements.",
    };

    const km = {
      breadcrumb: "Interactive Flat Panel",
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

      keyTitle: "Interactive Flat Panel Specifications for Cambodia",
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

      faqTitle: "FAQ - Interactive Flat Panel",
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

  const ifpProducts = useMemo(
    () =>
      PRODUCTS.filter((p) => p.categoryIds.includes("smart_board")).sort((a, b) => {
        const aSize = parseInt(
          a.specs.find((s) => s.labelEn === "Display Size")?.valueEn || "0",
          10
        );
        const bSize = parseInt(
          b.specs.find((s) => s.labelEn === "Display Size")?.valueEn || "0",
          10
        );
        return aSize - bSize;
      }),
    []
  );

  const getSpecValue = (label: string, fallback = "-") => {
    return (p: (typeof ifpProducts)[number]) =>
      p.specs.find((s) => s.labelEn === label)?.valueEn || fallback;
  };

  const [viewDistance, setViewDistance] = useState("");

  const recommendedSize = useMemo(() => {
    const distance = Number.parseFloat(viewDistance);
    if (!Number.isFinite(distance)) return null;
    if (distance <= 2) return "55-65 inch";
    if (distance <= 3) return "65-75 inch";
    if (distance <= 4) return "75-86 inch";
    if (distance <= 5) return "86-98 inch";
    return "98-110 inch";
  }, [viewDistance]);

    const faqs: FAQ[] = [
    {
      qEn: "What size interactive flat panel should I choose for a classroom?",
      aEn:
        "Choose based on viewing distance and room size. Common classroom sizes range from 65 to 86 inch, while larger halls often use 98 to 110 inch.",
      qKm: "What size interactive flat panel should I choose for a classroom?",
      aKm:
        "Choose based on viewing distance and room size. Common classroom sizes range from 65 to 86 inch, while larger halls often use 98 to 110 inch.",
    },
    {
      qEn: "How far should students sit from a smart board?",
      aEn:
        "Viewing distance depends on screen size. As a general guide, 65-inch panels suit around 2 to 3.5 meters, 75-inch suits around 2.5 to 4 meters, and 86-inch around 3 to 5 meters.",
      qKm: "How far should students sit from a smart board?",
      aKm:
        "Viewing distance depends on screen size. As a general guide, 65-inch panels suit around 2 to 3.5 meters, 75-inch suits around 2.5 to 4 meters, and 86-inch around 3 to 5 meters.",
    },
    {
      qEn: "Do interactive flat panels support Android and Windows?",
      aEn:
        "Most models include Android, and many offer OPS/Windows compatibility. Check the exact model for OS version and OPS options.",
      qKm: "Do interactive flat panels support Android and Windows?",
      aKm:
        "Most models include Android, and many offer OPS/Windows compatibility. Check the exact model for OS version and OPS options.",
    },
    {
      qEn: "How many touch points does an IFP support?",
      aEn:
        "Multi-touch is standard. For example, some models support 20-point touch, and higher-end models support 40-point touch.",
      qKm: "How many touch points does an IFP support?",
      aKm:
        "Multi-touch is standard. For example, some models support 20-point touch, and higher-end models support 40-point touch.",
    },
    {
      qEn: "Can I connect laptops and phones wirelessly?",
      aEn:
        "Yes. Many models support wireless screen sharing, plus HDMI and USB-C for plug-and-play connectivity.",
      qKm: "Can I connect laptops and phones wirelessly?",
      aKm:
        "Yes. Many models support wireless screen sharing, plus HDMI and USB-C for plug-and-play connectivity.",
    },
    {
      qEn: "Do you provide installation and user training in Cambodia?",
      aEn:
        "Yes. We provide installation, configuration, and training for classrooms, meeting rooms, and training centers.",
      qKm: "Do you provide installation and user training in Cambodia?",
      aKm:
        "Yes. We provide installation, configuration, and training for classrooms, meeting rooms, and training centers.",
    },
    {
      qEn: "What are the key ports I should check?",
      aEn:
        "Look for HDMI, USB, USB-C, and LAN connectivity. These cover most classroom and meeting room setups.",
      qKm: "What are the key ports I should check?",
      aKm:
        "Look for HDMI, USB, USB-C, and LAN connectivity. These cover most classroom and meeting room setups.",
    },
    {
      qEn: "Do you offer warranty and after-sales support?",
      aEn:
        "Yes. Warranty terms depend on the model and project scope. We share the coverage details during quotation.",
      qKm: "Do you offer warranty and after-sales support?",
      aKm:
        "Yes. Warranty terms depend on the model and project scope. We share the coverage details during quotation.",
    },
  ];

  const jsonLd = useMemo(() => {
    const base =
      (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
        "http://localhost:3000") + "/interactive-flat-panel";

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
        { "@type": "ListItem", position: 2, name: "Interactive Flat Panel", item: base },
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

    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Mugnee Cambodia",
      url: base,
      areaServed: ["Phnom Penh", "Siem Reap", "Sihanoukville"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          availableLanguage: ["en", "km"],
        },
      ],
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Interactive Flat Panel Installation",
      serviceType: "Interactive Flat Panel Solutions",
      areaServed: ["Phnom Penh", "Siem Reap", "Sihanoukville"],
      provider: {
        "@type": "Organization",
        name: "Mugnee Cambodia",
      },
    };

    return { breadcrumb, faqSchema, orgSchema, serviceSchema };
  }, [faqs, lang]);

  return (
    <main className="bg-white text-slate-900">
      <style jsx global>{`
        .quick-link {
          position: relative;
          border: 1px solid transparent;
          background:
            linear-gradient(#fff, #fff) padding-box,
            linear-gradient(
              90deg,
              rgba(14, 116, 144, 0),
              rgba(14, 116, 144, 0.85),
              rgba(2, 132, 199, 0.9),
              rgba(14, 116, 144, 0)
            )
              border-box;
          background-size: 100% 100%, 240% 240%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .quick-link:hover {
          animation: quickLinkBorder 1.2s linear infinite;
          box-shadow: 0 10px 24px rgba(2, 6, 23, 0.08);
        }
        @keyframes quickLinkBorder {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 0 0, 220% 0;
          }
        }

        .spec-card {
          position: relative;
          border: 1px solid transparent;
          background:
            linear-gradient(#fff, #fff) padding-box,
            linear-gradient(
              120deg,
              rgba(14, 116, 144, 0.1),
              rgba(2, 132, 199, 0.45),
              rgba(59, 130, 246, 0.45),
              rgba(14, 116, 144, 0.1)
            )
              border-box;
          background-size: 100% 100%, 260% 260%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .spec-card:hover {
          animation: specBorder 2s linear infinite;
          box-shadow: 0 12px 28px rgba(2, 6, 23, 0.12);
        }
        @keyframes specBorder {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 0 0, 260% 0;
          }
        }
      `}</style>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.serviceSchema) }}
      />

      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">{t.breadcrumb}</span>
          </div>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            {t.badge}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.h1}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.sub}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {t.cta1}
            </Link>
            <a
              href="#models"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              {t.cta2}
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-600">{t.serving}</p>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-sm font-bold text-slate-900">{t.seoTitle}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.seoText}</p>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section id="models" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Interactive Flat Panel Products
          </h2>
          <div className="mt-6">
            <ProductGrid
              columns={3}
              pageSize={9}
              allowedCategoryIds={["smart_board", "interactive_panel"]}
              filterCategoryIds={["smart_board", "interactive_panel"]}
              showCategoryFilters
              showSort
              showPagination
            />
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-4 lg:px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Quick Links for Interactive Flat Panel
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  Jump to the buying guide, decision matrix, specs, and support details.
                </div>
              </div>
              <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 sm:block">
                Quick Links
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { label: "Buying Guide", href: "#buying-guide" },
                { label: "Decision Matrix", href: "#decision-matrix" },
                { label: "Specs Comparison", href: "#specs-comparison" },
                { label: "Installation", href: "#installation" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Warranty & Support", href: "#warranty-support" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="quick-link rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS IFP */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Interactive Flat Panel Basics
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                What Is an Interactive Flat Panel (IFP)?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                An interactive flat panel is a large 4K touchscreen display that combines
                a digital whiteboard, presentation screen, and collaboration tools in one
                device. It is commonly used in classrooms, meeting rooms, training centers,
                and healthcare briefings because it supports real-time writing, annotation,
                and wireless screen sharing.
              </p>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                How Does an Interactive Flat Panel Work?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                The panel uses a high-resolution LCD with a multi-touch layer that detects
                finger or stylus input. Built-in Android software runs whiteboard and
                collaboration apps, while HDMI/USB-C/LAN ports and wireless casting allow
                laptops and phones to share content instantly. Optional OPS/Windows modules
                turn the screen into a full PC for advanced applications.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:mt-20">
              <div className="text-sm font-semibold text-slate-900">
                Key Benefits for Cambodia Buyers
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {[
                  "4K UHD clarity for classrooms and meetings",
                  "Multi-touch writing and annotation",
                  "Wireless screen sharing and plug-and-play ports",
                  "Android built-in with optional OPS/Windows",
                  "Lower maintenance than projector systems",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DECISION MATRIX */}
      <section id="decision-matrix" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Interactive Flat Panel Use-Case Selection Guide
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Match your environment to the best screen size and features. This quick matrix
            helps you shortlist the right interactive flat panel.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 bg-slate-100 text-sm font-semibold text-slate-900 sm:grid-cols-3">
              <div className="p-3">Use Case</div>
              <div className="p-3">Recommended Size</div>
              <div className="p-3">Key Focus</div>
            </div>
            {[
              ["Classrooms", "65 - 86 inch", "4K clarity, multi-touch, whiteboard tools"],
              ["Meeting Rooms", "65 - 75 inch", "Wireless sharing, HDMI/USB-C"],
              ["Training Centers", "75 - 98 inch", "Large visibility, multi-user touch"],
              ["Auditoriums", "98 - 110 inch", "Ultra-large screen, wide viewing angle"],
              ["Hospitals", "65 - 86 inch", "Clean visuals, quick annotation"],
            ].map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-1 border-t border-slate-200 text-sm text-slate-700 sm:grid-cols-3"
              >
                <div className="p-3 font-semibold text-slate-900">{row[0]}</div>
                <div className="p-3">{row[1]}</div>
                <div className="p-3">{row[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* SPECS COMPARISON */}
      <section id="specs-comparison" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Interactive Flat Panel Specifications Comparison by Size
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Compare size, 4K resolution, touch points, OS support, and connectivity to
            select the best interactive flat panel for classrooms, meeting rooms, and
            training centers in Cambodia.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white">
            <div className="hidden sm:block">
              <div className="grid grid-cols-3 bg-slate-100 text-sm font-semibold text-slate-900">
                <div className="p-3">Model</div>
                <div className="p-3">Best Use</div>
                <div className="p-3">Highlights</div>
              </div>
              {ifpProducts.map((p) => {
                const highlights = p.featuresEn.slice(0, 2).join(" • ");
                return (
                  <div
                    key={p.id}
                    className="grid grid-cols-3 border-t border-slate-200 text-sm text-slate-700"
                  >
                    <div className="p-3 font-semibold text-slate-900">{p.titleEn}</div>
                    <div className="p-3">{p.shortDescEn}</div>
                    <div className="p-3">{highlights}</div>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-3 p-3 sm:hidden">
              {ifpProducts.map((p) => (
                <div
                  key={p.id}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700"
                >
                  <div className="text-sm font-semibold text-slate-900">{p.titleEn}</div>
                  <div className="mt-2 grid gap-2">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold text-slate-700">Best Use</span>
                      <span className="text-right">{p.shortDescEn}</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold text-slate-700">Highlights</span>
                      <span className="text-right">
                        {p.featuresEn.slice(0, 2).join(" • ")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUYING GUIDE */}
      <section id="buying-guide" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Buying Guide
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                Screen Size & Viewing Distance Guide
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Choose the screen size based on seating distance, room size, and content
                type. Classroom environments often use 65-86 inch, while auditoriums and
                large training halls prefer 98-110 inch panels.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="grid grid-cols-1 bg-slate-100 text-sm font-semibold text-slate-900 sm:grid-cols-3">
                  <div className="p-3">Viewing Distance</div>
                  <div className="p-3">Recommended Size</div>
                  <div className="p-3">Typical Room</div>
                </div>
                {[
                  ["1.5 - 2 m", "55 - 65 inch", "Small classrooms"],
                  ["2 - 3 m", "65 - 75 inch", "Standard classrooms"],
                  ["3 - 4 m", "75 - 86 inch", "Training rooms"],
                  ["4 - 5 m", "86 - 98 inch", "Large classrooms"],
                  ["5 m+", "98 - 110 inch", "Auditoriums & halls"],
                ].map((row) => (
                  <div
                    key={row[0]}
                    className="grid grid-cols-1 border-t border-slate-200 text-sm text-slate-700 sm:grid-cols-3"
                  >
                    <div className="p-3 font-semibold text-slate-900">{row[0]}</div>
                    <div className="p-3">{row[1]}</div>
                    <div className="p-3">{row[2]}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                Quick Recommendation Calculator
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Enter the approximate viewing distance (meters). We will suggest a screen
                size range.
              </p>
              <label className="mt-4 block text-xs font-semibold text-slate-700">
                Viewing distance (m)
              </label>
              <input
                value={viewDistance}
                onChange={(e) => setViewDistance(e.target.value)}
                inputMode="decimal"
                placeholder="e.g. 3.5"
                className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
              />
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 shadow-sm">
                <div className="h-1 w-full rounded-full bg-gradient-to-r from-slate-900 via-sky-500 to-cyan-500" />
                <div className="mt-3">
                  {recommendedSize
                    ? `Recommended size: ${recommendedSize}`
                    : "Enter a viewing distance to get a recommendation."}
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Final size depends on content type, audience seating, and room lighting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SETUP */}
      <section id="installation" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.setupTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            End-to-end installation for interactive flat panels in Cambodia includes site
            survey, mounting, cabling, network setup, and user training. We optimize the
            screen height, viewing angle, and cable routing to ensure reliable daily use
            for classrooms, meeting rooms, and training centers.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard
              n="01"
              title="Site survey and room assessment"
              desc="Measure room size, seating distance, wall strength, and lighting. Confirm the best screen size, mounting height, and cable path."
            />
            <StepCard
              n="02"
              title="Wall mount or floor stand setup"
              desc="Install wall brackets or floor stand with safe load rating, correct tilt, and clean finishing for professional presentation spaces."
            />
            <StepCard
              n="03"
              title="Power, network, and OPS setup"
              desc="Connect power, LAN/Wi-Fi, HDMI/USB-C, and configure Android or OPS/Windows for content sharing and classroom apps."
            />
            <StepCard
              n="04"
              title="User training and handover"
              desc="Hands-on training for whiteboard tools, wireless casting, file sharing, and daily maintenance checks for smooth operation."
            />
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Interactive Flat Panel Use Cases in Cambodia (Education, Corporate, Healthcare)
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Real-world scenarios where interactive flat panels improve teaching, training,
            and presentation workflows across Cambodia schools, offices, and hospitals.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "School Classroom Upgrade",
                "65-86 inch 4K smart boards with multi-touch writing, annotation, and wireless casting for daily lessons. Supports whiteboard apps, lesson playback, and interactive teaching.",
                ["Education", "Whiteboard", "4K"],
              ],
              [
                "Corporate Meeting Room",
                "65-75 inch interactive panels with HDMI/USB-C, LAN/Wi-Fi, and screen sharing for presentations, brainstorming, and hybrid meetings.",
                ["Meeting", "Wireless", "USB-C"],
              ],
              [
                "Training Center",
                "75-98 inch panels for clear visibility, multi-user collaboration, and hands-on demonstrations during workshops and onboarding.",
                ["Training", "Multi-touch", "Large screen"],
              ],
              [
                "Hospital Briefing Room",
                "65-86 inch panels for clinical training, medical briefings, and patient education with quick annotation and reliable daily use.",
                ["Healthcare", "Briefing", "Reliable"],
              ],
            ].map(([title, desc, chips]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WARRANTY & POLICY */}
      <section id="warranty-support" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Interactive Flat Panel Warranty, Support & After-Sales Service in Cambodia
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Our interactive flat panel service in Cambodia covers quotation, delivery,
            installation, training, and long-term support. We focus on reliable classroom
            and meeting room operations with clear warranty terms, responsive on-site
            service, and optional maintenance plans.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Warranty Coverage & Documentation",
                "Warranty depends on the chosen model, configuration, and usage. We provide clear coverage details, warranty duration, and scope during quotation and handover.",
              ],
              [
                "On-site Support & Troubleshooting",
                "Our team handles installation, calibration, firmware checks, and troubleshooting to keep smart boards stable for daily classroom and office use.",
              ],
              [
                "Maintenance & AMC Plans",
                "Preventive maintenance, cleaning guidance, and AMC plans are available for schools, universities, and corporate deployments.",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + FINAL CTA */}
      <section id="faq" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.faqTitle}
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
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
                      v
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
                href="/interactive-flat-panel#models"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                View Products
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














