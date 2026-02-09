"use client";

"use client";

import Link from "next/link";
import { useMemo } from "react";
import ProductGrid from "../../components/sections/ProductGrid";
import { useLang } from "../../components/layout/LanguageProvider";
import { PRODUCTS } from "../../data/products";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };

export default function PaSystemClient() {
  const { lang } = useLang();

  const t = useMemo(() => {
    const en = {
      breadcrumb: "Products",
      badge: "Cambodia - PA System - Public Address",
      h1: "PA System in Cambodia",
      sub:
        "Professional public address systems for factories, schools, hospitals, malls, hotels, offices, and public venues. We supply mixers, power amplifiers, speakers, paging microphones, and accessories with installation and after-sales support in Cambodia.",
      cta1: "Get a Free Quotation",
      cta2: "View PA System Products",
      serving: "Serving: Phnom Penh - Siem Reap - Sihanoukville",

      quickTitle: "Browse PA system categories and related services",
      quickSub:
        "Quick links help you reach speakers, amplifiers, microphones, and installation support.",

      specsTitle: "PA System Specifications for Cambodia",
      specsSub:
        "Use these practical ranges to plan clear paging, safety alerts, and daily announcements for indoor and outdoor sites.",
      sCard1t: "System Type",
      sCard1d: "Public address, paging, and background audio solutions.",
      sCard2t: "Speaker Types",
      sCard2d: "Ceiling, wall, pendant, and outdoor horn speakers.",
      sCard3t: "Coverage Planning",
      sCard3d: "Zone-based layout for clear audio in each area.",
      sCard4t: "Priority & Emergency",
      sCard4d: "Priority paging, override channels, and alerts.",
      sCard5t: "Microphones",
      sCard5d: "Paging mics, gooseneck, and wireless options.",
      sCard6t: "Installation",
      sCard6d: "Proper cabling, tuning, and commissioning support.",

      basicsLabel: "PA SYSTEM BASICS",
      basicsTitle: "What Is a PA System?",
      basicsDesc:
        "A PA (Public Address) system amplifies and distributes voice and background audio to multiple speakers across a facility. It is essential for announcements, safety alerts, paging, and clear communication in busy environments.",
      howTitle: "How Does a PA System Work?",
      howDesc:
        "Sources like microphones and music players feed a mixer, then a power amplifier drives speakers across zones. A controller manages priorities, paging, and emergency overrides so key messages reach the right areas.",
      benefitTitle: "Key Benefits for Cambodia Sites",
      b1: "Clear announcements for safety and daily operations",
      b2: "Multi-zone control for offices, factories, and campuses",
      b3: "Flexible indoor and outdoor speaker options",
      b4: "Scalable from small buildings to large facilities",
      b5: "Improved coordination during emergencies",

      guideTitle: "Speaker Type & Coverage Guide",
      guideSub:
        "Choose speaker types based on distance, noise level, and installation environment.",
      guideRows: [
        ["Classrooms & Meeting Rooms", "Ceiling / Wall Speakers", "Clear voice and even coverage"],
        ["Corridors & Lobbies", "Wall Speakers", "Directional paging for walkways"],
        ["Factories & Warehouses", "Horn Speakers", "High-output audio in noisy areas"],
        ["Outdoor Yards & Gates", "Weatherproof Horn Speakers", "Long-throw coverage"],
        ["Retail & Malls", "Ceiling / Pendant Speakers", "Balanced paging and background audio"],
      ] as [string, string, string][],

      compTitle: "Key Components & Capabilities",
      compSub:
        "Build a reliable PA setup with the right mix of audio sources, amplifiers, speakers, paging microphones, and zone control.",
      c1: "Mixers & Amplifiers",
      c1d: "Core audio processing and stable power output for clean sound.",
      c2: "Paging Microphones",
      c2d: "Clear voice announcements from reception desks and control rooms.",
      c3: "Wall & Ceiling Speakers",
      c3d: "Indoor coverage for classrooms, offices, corridors, and retail.",
      c4: "Horn Speakers",
      c4d: "High-output outdoor audio for factories and large yards.",
      c5: "Zone Controllers",
      c5d: "Select areas, schedule paging, and set priority channels.",
      c6: "Cables & Accessories",
      c6d: "Reliable wiring, mounts, racks, and connectors for clean installs.",

      chooseTitle: "How to Choose the Right PA System",
      chooseSub:
        "A short checklist to avoid wrong device selection and ensure clear coverage.",
      s1: "Coverage area and number of zones",
      s2: "Indoor vs outdoor speaker types",
      s3: "Power and wattage requirements",
      s4: "Emergency priority and backup needs",
      s5: "Integration with security or fire systems",

      gridTitle: "PA System Products",
      gridSub:
        "Browse amplifiers, mixers, speakers, microphones, and accessories for Cambodia projects.",

      useTitle: "Where PA Systems Are Used",
      useSub:
        "Common PA system deployments for public facilities and commercial sites in Cambodia.",
      u1t: "Factories & Warehouses",
      u1d: "Shift calls, safety alerts, and production announcements.",
      u2t: "Schools & Campuses",
      u2d: "Classroom paging, assembly alerts, and campus-wide messages.",
      u3t: "Hospitals & Clinics",
      u3d: "Emergency alerts, staff coordination, and patient announcements.",
      u4t: "Retail & Shopping Malls",
      u4d: "Customer announcements, promotions, and background audio.",
      u5t: "Hotels & Public Venues",
      u5d: "Event announcements, guest communication, and zoned paging.",
      u6t: "Airports & Government",
      u6d: "Public announcements and safety messaging in large facilities.",

      processTitle: "Installation, Setup & Training",
      processSub:
        "A structured workflow for stable operation, clean wiring, and clear audio.",
      p1: "Site survey and coverage planning",
      p2: "System design and equipment selection",
      p3: "Installation, wiring, and tuning",
      p4: "User training and handover support",

      faqTitle: "FAQ - PA System",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Share your building size, zones, and use-case (factory, school, office, or mall). We will recommend the right PA system and provide a clear quotation.",
      finalCta: "Contact & Get Quotation",
      viewProducts: "View Products",
      note:
        "Note: Final quotation depends on coverage area, zone count, speaker type, cabling distance, and installation requirements.",
      getQuote: "Get Quotation",
    };

    const km = {
      breadcrumb: "ផលិតផល",
      badge: "Cambodia - PA System - Public Address",
      h1: "PA System in Cambodia",
      sub:
        "Professional public address systems for factories, schools, hospitals, malls, hotels, offices, and public venues. We supply mixers, power amplifiers, speakers, paging microphones, and accessories with installation and after-sales support in Cambodia.",
      cta1: "Get a Free Quotation",
      cta2: "View PA System Products",
      serving: "Serving: Phnom Penh - Siem Reap - Sihanoukville",

      quickTitle: "Browse PA system categories and related services",
      quickSub:
        "Quick links help you reach speakers, amplifiers, microphones, and installation support.",

      specsTitle: "PA System Specifications for Cambodia",
      specsSub:
        "Use these practical ranges to plan clear paging, safety alerts, and daily announcements for indoor and outdoor sites.",
      sCard1t: "System Type",
      sCard1d: "Public address, paging, and background audio solutions.",
      sCard2t: "Speaker Types",
      sCard2d: "Ceiling, wall, pendant, and outdoor horn speakers.",
      sCard3t: "Coverage Planning",
      sCard3d: "Zone-based layout for clear audio in each area.",
      sCard4t: "Priority & Emergency",
      sCard4d: "Priority paging, override channels, and alerts.",
      sCard5t: "Microphones",
      sCard5d: "Paging mics, gooseneck, and wireless options.",
      sCard6t: "Installation",
      sCard6d: "Proper cabling, tuning, and commissioning support.",

      basicsLabel: "PA SYSTEM BASICS",
      basicsTitle: "What Is a PA System?",
      basicsDesc:
        "A PA (Public Address) system amplifies and distributes voice and background audio to multiple speakers across a facility. It is essential for announcements, safety alerts, paging, and clear communication in busy environments.",
      howTitle: "How Does a PA System Work?",
      howDesc:
        "Sources like microphones and music players feed a mixer, then a power amplifier drives speakers across zones. A controller manages priorities, paging, and emergency overrides so key messages reach the right areas.",
      benefitTitle: "Key Benefits for Cambodia Sites",
      b1: "Clear announcements for safety and daily operations",
      b2: "Multi-zone control for offices, factories, and campuses",
      b3: "Flexible indoor and outdoor speaker options",
      b4: "Scalable from small buildings to large facilities",
      b5: "Improved coordination during emergencies",

      guideTitle: "Speaker Type & Coverage Guide",
      guideSub:
        "Choose speaker types based on distance, noise level, and installation environment.",
      guideRows: [
        ["Classrooms & Meeting Rooms", "Ceiling / Wall Speakers", "Clear voice and even coverage"],
        ["Corridors & Lobbies", "Wall Speakers", "Directional paging for walkways"],
        ["Factories & Warehouses", "Horn Speakers", "High-output audio in noisy areas"],
        ["Outdoor Yards & Gates", "Weatherproof Horn Speakers", "Long-throw coverage"],
        ["Retail & Malls", "Ceiling / Pendant Speakers", "Balanced paging and background audio"],
      ] as [string, string, string][],

      compTitle: "Key Components & Capabilities",
      compSub:
        "Build a reliable PA setup with the right mix of audio sources, amplifiers, speakers, paging microphones, and zone control.",
      c1: "Mixers & Amplifiers",
      c1d: "Core audio processing and stable power output for clean sound.",
      c2: "Paging Microphones",
      c2d: "Clear voice announcements from reception desks and control rooms.",
      c3: "Wall & Ceiling Speakers",
      c3d: "Indoor coverage for classrooms, offices, corridors, and retail.",
      c4: "Horn Speakers",
      c4d: "High-output outdoor audio for factories and large yards.",
      c5: "Zone Controllers",
      c5d: "Select areas, schedule paging, and set priority channels.",
      c6: "Cables & Accessories",
      c6d: "Reliable wiring, mounts, racks, and connectors for clean installs.",

      chooseTitle: "How to Choose the Right PA System",
      chooseSub:
        "A short checklist to avoid wrong device selection and ensure clear coverage.",
      s1: "Coverage area and number of zones",
      s2: "Indoor vs outdoor speaker types",
      s3: "Power and wattage requirements",
      s4: "Emergency priority and backup needs",
      s5: "Integration with security or fire systems",

      gridTitle: "PA System Products",
      gridSub:
        "Browse amplifiers, mixers, speakers, microphones, and accessories for Cambodia projects.",

      useTitle: "Where PA Systems Are Used",
      useSub:
        "Common PA system deployments for public facilities and commercial sites in Cambodia.",
      u1t: "Factories & Warehouses",
      u1d: "Shift calls, safety alerts, and production announcements.",
      u2t: "Schools & Campuses",
      u2d: "Classroom paging, assembly alerts, and campus-wide messages.",
      u3t: "Hospitals & Clinics",
      u3d: "Emergency alerts, staff coordination, and patient announcements.",
      u4t: "Retail & Shopping Malls",
      u4d: "Customer announcements, promotions, and background audio.",
      u5t: "Hotels & Public Venues",
      u5d: "Event announcements, guest communication, and zoned paging.",
      u6t: "Airports & Government",
      u6d: "Public announcements and safety messaging in large facilities.",

      processTitle: "Installation, Setup & Training",
      processSub:
        "A structured workflow for stable operation, clean wiring, and clear audio.",
      p1: "Site survey and coverage planning",
      p2: "System design and equipment selection",
      p3: "Installation, wiring, and tuning",
      p4: "User training and handover support",

      faqTitle: "FAQ - PA System",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Share your building size, zones, and use-case (factory, school, office, or mall). We will recommend the right PA system and provide a clear quotation.",
      finalCta: "Contact & Get Quotation",
      viewProducts: "View Products",
      note:
        "Note: Final quotation depends on coverage area, zone count, speaker type, cabling distance, and installation requirements.",
      getQuote: "Get Quotation",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const faqs: FAQ[] = useMemo(
    () => [
      {
        qEn: "What is a PA system used for?",
        aEn:
          "A PA system delivers clear announcements and emergency alerts across buildings or outdoor areas. It is widely used for safety, paging, and coordination.",
        qKm: "What is a PA system used for?",
        aKm:
          "A PA system delivers clear announcements and emergency alerts across buildings or outdoor areas. It is widely used for safety, paging, and coordination.",
      },
      {
        qEn: "Can you design a PA system for my building?",
        aEn:
          "Yes. We provide site assessment, zone planning, speaker placement, and full installation for optimal clarity.",
        qKm: "Can you design a PA system for my building?",
        aKm:
          "Yes. We provide site assessment, zone planning, speaker placement, and full installation for optimal clarity.",
      },
      {
        qEn: "Do you install indoor and outdoor PA systems?",
        aEn:
          "Yes. We supply and install indoor wall or ceiling speakers and outdoor horn speakers depending on your environment.",
        qKm: "Do you install indoor and outdoor PA systems?",
        aKm:
          "Yes. We supply and install indoor wall or ceiling speakers and outdoor horn speakers depending on your environment.",
      },
      {
        qEn: "How many zones can a PA system support?",
        aEn:
          "That depends on the amplifier and controller. We design multi-zone systems for campuses, factories, and malls.",
        qKm: "How many zones can a PA system support?",
        aKm:
          "That depends on the amplifier and controller. We design multi-zone systems for campuses, factories, and malls.",
      },
      {
        qEn: "Which PA system components are most important?",
        aEn:
          "Key components include mixers, power amplifiers, speakers, paging microphones, and zone controllers. The right mix depends on coverage, noise level, and emergency needs.",
        qKm: "Which PA system components are most important?",
        aKm:
          "Key components include mixers, power amplifiers, speakers, paging microphones, and zone controllers. The right mix depends on coverage, noise level, and emergency needs.",
      },
      {
        qEn: "Can a PA system be used for both announcements and background music?",
        aEn:
          "Yes. Most systems can handle paging plus background audio by using separate inputs and zone control for different areas.",
        qKm: "Can a PA system be used for both announcements and background music?",
        aKm:
          "Yes. Most systems can handle paging plus background audio by using separate inputs and zone control for different areas.",
      },
      {
        qEn: "Do you provide after-sales support in Cambodia?",
        aEn:
          "Yes. We provide commissioning, training, and maintenance options after installation.",
        qKm: "Do you provide after-sales support in Cambodia?",
        aKm:
          "Yes. We provide commissioning, training, and maintenance options after installation.",
      },
    ],
    []
  );

  const jsonLd = useMemo(() => {
    const site =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
    const url = site + "/products/pa-system";

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site },
        { "@type": "ListItem", position: 2, name: "Products", item: site + "/products" },
        { "@type": "ListItem", position: 3, name: "PA System", item: url },
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

    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: PRODUCTS.filter((p) => p.primaryCategoryId === "pa_system")
        .slice(0, 8)
        .map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: lang === "en" ? p.titleEn : p.titleKm,
          url: url + "#products",
        })),
    };

    return { breadcrumb, faqSchema, itemList };
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.itemList) }}
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
            <span className="font-semibold text-slate-700">PA System</span>
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
                  href="/contact"
                  className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  {t.cta1}
                </Link>
                <a
                  href="#products"
                  className="rounded-xl border border-slate-200 bg-white/85 px-4 py-2.5 text-sm font-semibold text-slate-900 backdrop-blur hover:bg-white"
                >
                  {t.cta2}
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-600">{t.serving}</p>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white/85 p-4 backdrop-blur">
                <div className="text-sm font-bold text-slate-900">{t.compTitle}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.compSub}</p>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <KeyRow title={t.c1} desc={t.c1d} />
                  <KeyRow title={t.c2} desc={t.c2d} />
                  <KeyRow title={t.c3} desc={t.c3d} />
                  <KeyRow title={t.c4} desc={t.c4d} />
                  <KeyRow title={t.c5} desc={t.c5d} />
                  <KeyRow title={t.c6} desc={t.c6d} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                <div className="text-base font-bold text-slate-900">{t.chooseTitle}</div>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{t.chooseSub}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {[t.s1, t.s2, t.s3, t.s4, t.s5].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

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

      {/* QUICK LINKS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-4 lg:px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">{t.quickTitle}</div>
                <div className="mt-1 text-xs text-slate-600">{t.quickSub}</div>
              </div>
              <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 sm:block">
                Quick Links
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { label: "Specifications", href: "#specs" },
                { label: "Basics", href: "#basics" },
                { label: "Coverage Guide", href: "#coverage-guide" },
                { label: "Use Cases", href: "#use-cases" },
                { label: "Products", href: "#products" },
                { label: "Process", href: "#process" },
                { label: "FAQ", href: "#faq" },
                { label: "Get Quotation", href: "#contact" },
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

      {/* SPECS */}
      <section id="specs" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.specsTitle}</h2>
          <p className="mt-2 text-slate-600">{t.specsSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SpecCard title={t.sCard1t} desc={t.sCard1d} />
            <SpecCard title={t.sCard2t} desc={t.sCard2d} />
            <SpecCard title={t.sCard3t} desc={t.sCard3d} />
            <SpecCard title={t.sCard4t} desc={t.sCard4d} />
            <SpecCard title={t.sCard5t} desc={t.sCard5d} />
            <SpecCard title={t.sCard6t} desc={t.sCard6d} />
          </div>
        </div>
      </section>

      {/* BASICS */}
      <section id="basics" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {t.basicsLabel}
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {t.basicsTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.basicsDesc}
              </p>

              <h3 className="mt-6 text-lg font-semibold text-slate-900">{t.howTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.howDesc}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">{t.benefitTitle}</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {[t.b1, t.b2, t.b3, t.b4, t.b5].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE GUIDE */}
      <section id="coverage-guide" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.guideTitle}</h2>
          <p className="mt-2 text-slate-600">{t.guideSub}</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 gap-0 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
              <div>Area Type</div>
              <div>Recommended Speaker</div>
              <div>Typical Use</div>
            </div>
            <div className="divide-y divide-slate-200 text-sm text-slate-700">
              {t.guideRows.map((row) => (
                <div key={row[0]} className="grid grid-cols-3 gap-0 px-4 py-3">
                  <div className="font-semibold text-slate-900">{row[0]}</div>
                  <div>{row[1]}</div>
                  <div>{row[2]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" className="border-t border-slate-200 bg-slate-50">
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

      {/* PRODUCTS */}
      <section id="products" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.gridTitle}</h2>
          <p className="mt-2 text-slate-600">{t.gridSub}</p>

          <div className="mt-6">
            <ProductGrid
              columns={3}
              pageSize={9}
              allowedCategoryIds={["pa_system"]}
              filterCategoryIds={["pa_system"]}
              showCategoryFilters
              showSort
              showPagination
            />
          </div>

          <p className="mt-4 text-xs text-slate-500">{t.note}</p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-t border-slate-200 bg-slate-50">
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

      {/* FAQ */}
      <section id="faq" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.faqTitle}</h2>

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
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">{t.finalTitle}</h3>
            <p className="mt-2 text-slate-600">{t.finalSub}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {t.finalCta}
              </Link>
              <a
                href="#products"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                {t.viewProducts}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function KeyRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3">
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

function SpecCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="spec-card rounded-2xl bg-white p-5 shadow-sm">
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
