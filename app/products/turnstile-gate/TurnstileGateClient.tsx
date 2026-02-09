
"use client";

import Link from "next/link";
import { useMemo } from "react";
import ProductGrid from "../../components/sections/ProductGrid";
import { useLang } from "../../components/layout/LanguageProvider";
import { PRODUCTS } from "../../data/products";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };

export default function TurnstileGateClient() {
  const { lang } = useLang();

  const t = useMemo(() => {
    const en = {
      breadcrumb: "Products",
      badge: "Cambodia - Turnstile Gate - Access Control",
      h1: "Turnstile Gate in Cambodia",
      sub:
        "Secure, controlled entry solutions for offices, factories, schools, transport hubs, and public venues. We supply flap barriers, tripod turnstiles, speed gates, and full-height turnstiles with RFID, QR, and biometric integration plus local installation and after-sales support.",
      cta1: "Get a Free Quotation",
      cta2: "View Turnstile Products",
      serving: "Serving: Phnom Penh - Siem Reap - Sihanoukville",

      quickTitle: "Browse turnstile categories and access control services",
      quickSub:
        "Quick links help you reach gate types, integrations, products, and support.",

      specsTitle: "Turnstile Gate Specifications for Cambodia",
      specsSub:
        "Plan entry control with the right gate type, throughput, and security level for indoor and outdoor sites.",
      sCard1t: "Gate Types",
      sCard1d: "Tripod, flap barrier, speed gate, full-height, and swing gates.",
      sCard2t: "Access Methods",
      sCard2d: "RFID cards, QR tickets, fingerprint, and face recognition.",
      sCard3t: "Safety & Emergency",
      sCard3d: "Fire alarm linkage, emergency release, and fail-safe modes.",
      sCard4t: "Usage Environment",
      sCard4d: "Indoor lobbies, outdoor yards, schools, factories, stations.",
      sCard5t: "Throughput",
      sCard5d: "Optimized lanes for controlled traffic flow and queuing.",
      sCard6t: "Installation",
      sCard6d: "Proper foundations, wiring, controller setup, and testing.",

      basicsLabel: "TURNSTILE BASICS",
      basicsTitle: "What Is a Turnstile Gate?",
      basicsDesc:
        "A turnstile gate controls the flow of people into secure areas. It prevents unauthorized entry, improves safety, and can integrate with access control, attendance, and visitor management systems.",
      howTitle: "How Does a Turnstile Gate Work?",
      howDesc:
        "The gate receives a signal from an access device (RFID, QR, biometric). If authorized, the barrier unlocks and allows entry while logging the event. System controllers handle access rules, time schedules, and reports.",
      benefitTitle: "Key Benefits for Cambodia Sites",
      b1: "Controlled entry and reduced tailgating",
      b2: "Faster flow in busy locations",
      b3: "Integration with attendance and visitor systems",
      b4: "Durable stainless-steel construction options",
      b5: "Emergency release and safety compliance",

      typesTitle: "Types of Turnstile Gates",
      typesSub:
        "Choose a gate type based on security level, traffic volume, and site aesthetics.",
      t1: "Tripod Turnstile",
      t1d: "Cost-effective entry control for staff entrances and schools.",
      t2: "Flap Barrier",
      t2d: "Premium, fast access for office lobbies and public buildings.",
      t3: "Speed Gate",
      t3d: "High-speed lanes for transport hubs and corporate HQs.",
      t4: "Full-Height Turnstile",
      t4d: "Maximum security for factories and restricted zones.",
      t5: "Swing Gate / Optical",
      t5d: "Accessible lanes for wheelchair users and wide entry.",

      useTitle: "Where Turnstile Gates Are Used",
      useSub:
        "Common deployment scenarios for turnstile gates in Cambodia.",
      u1t: "Factories & Industrial Zones",
      u1d: "Shift entry control, attendance integration, and safety compliance.",
      u2t: "Schools & Campuses",
      u2d: "Student access control and visitor management.",
      u3t: "Offices & Corporate Buildings",
      u3d: "Secure lobby access and staff-only zones.",
      u4t: "Public Venues & Stadiums",
      u4d: "Ticketed entry and crowd flow management.",
      u5t: "Hospitals & Public Institutions",
      u5d: "Restricted area access and staff tracking.",
      u6t: "Transport Hubs",
      u6d: "Fast, controlled access at stations and terminals.",

      integrationsTitle: "Integration Options",
      integrationsSub:
        "Turnstiles can work with multiple access methods and back-office systems.",
      i1: "RFID cards and keyfobs",
      i2: "QR code tickets and mobile passes",
      i3: "Fingerprint or face recognition",
      i4: "Visitor management systems",
      i5: "Attendance and payroll software",
      i6: "Fire alarm and emergency release",

      chooseTitle: "How to Choose the Right Turnstile Gate",
      chooseSub:
        "A short checklist to avoid wrong selection and ensure smooth access flow.",
      c1: "Traffic volume and required throughput",
      c2: "Security level (low, medium, high)",
      c3: "Indoor vs outdoor installation",
      c4: "Access method (RFID/QR/biometric)",
      c5: "Integration with attendance or visitor systems",
      c6: "Power and network availability",

      gridTitle: "Turnstile Gate Products",
      gridSub:
        "Browse turnstile gate models for offices, factories, schools, and public venues.",

      processTitle: "Installation, Setup & Training",
      processSub:
        "A structured workflow for stable operation, clean wiring, and smooth entry flow.",
      p1: "Site survey and traffic study",
      p2: "Gate selection and layout design",
      p3: "Installation, wiring, and testing",
      p4: "Training, handover, and support",

      faqTitle: "FAQ - Turnstile Gate",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Share your site type, traffic volume, access method, and integration needs. We will recommend the right turnstile gate and provide a clear quotation.",
      finalCta: "Contact & Get Quotation",
      viewProducts: "View Products",
      note:
        "Note: Final quotation depends on gate type, quantity, access method, installation conditions, and integration requirements.",
      getQuote: "Get Quotation",
    };

    const km = {
      breadcrumb: "??????",
      badge: "Cambodia - Turnstile Gate - Access Control",
      h1: "Turnstile Gate in Cambodia",
      sub:
        "Secure, controlled entry solutions for offices, factories, schools, transport hubs, and public venues. We supply flap barriers, tripod turnstiles, speed gates, and full-height turnstiles with RFID, QR, and biometric integration plus local installation and after-sales support.",
      cta1: "Get a Free Quotation",
      cta2: "View Turnstile Products",
      serving: "Serving: Phnom Penh - Siem Reap - Sihanoukville",

      quickTitle: "Browse turnstile categories and access control services",
      quickSub:
        "Quick links help you reach gate types, integrations, products, and support.",

      specsTitle: "Turnstile Gate Specifications for Cambodia",
      specsSub:
        "Plan entry control with the right gate type, throughput, and security level for indoor and outdoor sites.",
      sCard1t: "Gate Types",
      sCard1d: "Tripod, flap barrier, speed gate, full-height, and swing gates.",
      sCard2t: "Access Methods",
      sCard2d: "RFID cards, QR tickets, fingerprint, and face recognition.",
      sCard3t: "Safety & Emergency",
      sCard3d: "Fire alarm linkage, emergency release, and fail-safe modes.",
      sCard4t: "Usage Environment",
      sCard4d: "Indoor lobbies, outdoor yards, schools, factories, stations.",
      sCard5t: "Throughput",
      sCard5d: "Optimized lanes for controlled traffic flow and queuing.",
      sCard6t: "Installation",
      sCard6d: "Proper foundations, wiring, controller setup, and testing.",

      basicsLabel: "TURNSTILE BASICS",
      basicsTitle: "What Is a Turnstile Gate?",
      basicsDesc:
        "A turnstile gate controls the flow of people into secure areas. It prevents unauthorized entry, improves safety, and can integrate with access control, attendance, and visitor management systems.",
      howTitle: "How Does a Turnstile Gate Work?",
      howDesc:
        "The gate receives a signal from an access device (RFID, QR, biometric). If authorized, the barrier unlocks and allows entry while logging the event. System controllers handle access rules, time schedules, and reports.",
      benefitTitle: "Key Benefits for Cambodia Sites",
      b1: "Controlled entry and reduced tailgating",
      b2: "Faster flow in busy locations",
      b3: "Integration with attendance and visitor systems",
      b4: "Durable stainless-steel construction options",
      b5: "Emergency release and safety compliance",

      typesTitle: "Types of Turnstile Gates",
      typesSub:
        "Choose a gate type based on security level, traffic volume, and site aesthetics.",
      t1: "Tripod Turnstile",
      t1d: "Cost-effective entry control for staff entrances and schools.",
      t2: "Flap Barrier",
      t2d: "Premium, fast access for office lobbies and public buildings.",
      t3: "Speed Gate",
      t3d: "High-speed lanes for transport hubs and corporate HQs.",
      t4: "Full-Height Turnstile",
      t4d: "Maximum security for factories and restricted zones.",
      t5: "Swing Gate / Optical",
      t5d: "Accessible lanes for wheelchair users and wide entry.",

      useTitle: "Where Turnstile Gates Are Used",
      useSub:
        "Common deployment scenarios for turnstile gates in Cambodia.",
      u1t: "Factories & Industrial Zones",
      u1d: "Shift entry control, attendance integration, and safety compliance.",
      u2t: "Schools & Campuses",
      u2d: "Student access control and visitor management.",
      u3t: "Offices & Corporate Buildings",
      u3d: "Secure lobby access and staff-only zones.",
      u4t: "Public Venues & Stadiums",
      u4d: "Ticketed entry and crowd flow management.",
      u5t: "Hospitals & Public Institutions",
      u5d: "Restricted area access and staff tracking.",
      u6t: "Transport Hubs",
      u6d: "Fast, controlled access at stations and terminals.",

      integrationsTitle: "Integration Options",
      integrationsSub:
        "Turnstiles can work with multiple access methods and back-office systems.",
      i1: "RFID cards and keyfobs",
      i2: "QR code tickets and mobile passes",
      i3: "Fingerprint or face recognition",
      i4: "Visitor management systems",
      i5: "Attendance and payroll software",
      i6: "Fire alarm and emergency release",

      chooseTitle: "How to Choose the Right Turnstile Gate",
      chooseSub:
        "A short checklist to avoid wrong selection and ensure smooth access flow.",
      c1: "Traffic volume and required throughput",
      c2: "Security level (low, medium, high)",
      c3: "Indoor vs outdoor installation",
      c4: "Access method (RFID/QR/biometric)",
      c5: "Integration with attendance or visitor systems",
      c6: "Power and network availability",

      gridTitle: "Turnstile Gate Products",
      gridSub:
        "Browse turnstile gate models for offices, factories, schools, and public venues.",

      processTitle: "Installation, Setup & Training",
      processSub:
        "A structured workflow for stable operation, clean wiring, and smooth entry flow.",
      p1: "Site survey and traffic study",
      p2: "Gate selection and layout design",
      p3: "Installation, wiring, and testing",
      p4: "Training, handover, and support",

      faqTitle: "FAQ - Turnstile Gate",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Share your site type, traffic volume, access method, and integration needs. We will recommend the right turnstile gate and provide a clear quotation.",
      finalCta: "Contact & Get Quotation",
      viewProducts: "View Products",
      note:
        "Note: Final quotation depends on gate type, quantity, access method, installation conditions, and integration requirements.",
      getQuote: "Get Quotation",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const faqs: FAQ[] = [
    {
      qEn: "Which turnstile type is best for my site?",
      aEn:
        "Tripod turnstiles work well for staff entrances, flap barriers for premium lobbies, speed gates for high traffic, and full-height units for maximum security zones.",
      qKm: "Which turnstile type is best for my site?",
      aKm:
        "Tripod turnstiles work well for staff entrances, flap barriers for premium lobbies, speed gates for high traffic, and full-height units for maximum security zones.",
    },
    {
      qEn: "Can you integrate turnstiles with RFID or biometric systems?",
      aEn:
        "Yes. We integrate turnstile gates with RFID, QR, fingerprint, and face recognition systems based on project requirements.",
      qKm: "Can you integrate turnstiles with RFID or biometric systems?",
      aKm:
        "Yes. We integrate turnstile gates with RFID, QR, fingerprint, and face recognition systems based on project requirements.",
    },
    {
      qEn: "Do you provide installation and maintenance in Cambodia?",
      aEn:
        "Yes. We supply, install, configure, and provide after-sales support and maintenance services across Cambodia.",
      qKm: "Do you provide installation and maintenance in Cambodia?",
      aKm:
        "Yes. We supply, install, configure, and provide after-sales support and maintenance services across Cambodia.",
    },
    {
      qEn: "What about emergency evacuation?",
      aEn:
        "Turnstiles can be configured for emergency release and linked to fire alarms for safe evacuation.",
      qKm: "What about emergency evacuation?",
      aKm:
        "Turnstiles can be configured for emergency release and linked to fire alarms for safe evacuation.",
    },
    {
      qEn: "Which access methods are supported?",
      aEn:
        "Common methods include RFID cards, QR tickets, and biometric readers. The choice depends on security level and traffic flow.",
      qKm: "Which access methods are supported?",
      aKm:
        "Common methods include RFID cards, QR tickets, and biometric readers. The choice depends on security level and traffic flow.",
    },
  ];

  const jsonLd = useMemo(() => {
    const site =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
    const url = site + "/products/turnstile-gate";

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site },
        { "@type": "ListItem", position: 2, name: "Products", item: site + "/products" },
        { "@type": "ListItem", position: 3, name: "Turnstile Gate", item: url },
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
      itemListElement: PRODUCTS.filter((p) => p.primaryCategoryId === "turnstile_gate")
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
            <span className="font-semibold text-slate-700">Turnstile Gate</span>
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
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                <div className="text-base font-bold text-slate-900">{t.chooseTitle}</div>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{t.chooseSub}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {[t.c1, t.c2, t.c3, t.c4, t.c5, t.c6].map((item) => (
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
                { label: "Gate Types", href: "#types" },
                { label: "Use Cases", href: "#use-cases" },
                { label: "Integrations", href: "#integrations" },
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

      <section id="types" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.typesTitle}</h2>
          <p className="mt-2 text-slate-600">{t.typesSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TypeCard title={t.t1} desc={t.t1d} />
            <TypeCard title={t.t2} desc={t.t2d} />
            <TypeCard title={t.t3} desc={t.t3d} />
            <TypeCard title={t.t4} desc={t.t4d} />
            <TypeCard title={t.t5} desc={t.t5d} />
          </div>
        </div>
      </section>

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

      <section id="integrations" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.integrationsTitle}
          </h2>
          <p className="mt-2 text-slate-600">{t.integrationsSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[t.i1, t.i2, t.i3, t.i4, t.i5, t.i6].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.gridTitle}</h2>
          <p className="mt-2 text-slate-600">{t.gridSub}</p>

          <div className="mt-6">
            <ProductGrid
              columns={3}
              pageSize={9}
              allowedCategoryIds={["turnstile_gate"]}
              filterCategoryIds={["turnstile_gate"]}
              showCategoryFilters
              showSort
              showPagination
            />
          </div>

          <p className="mt-4 text-xs text-slate-500">{t.note}</p>
        </div>
      </section>

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

function SpecCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="spec-card rounded-2xl bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function TypeCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
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
