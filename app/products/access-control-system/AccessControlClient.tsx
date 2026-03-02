
"use client";

import Link from "next/link";
import { useMemo } from "react";
import ProductGrid from "../../components/sections/ProductGrid";
import { useLang } from "../../components/layout/LanguageProvider";
import { PRODUCTS } from "../../data/products";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };

export default function AccessControlClient() {
  const { lang } = useLang();
  const toLangHref = (href: string) =>
    lang === "km" && href.startsWith("/") && !href.startsWith("/km/") ? `/km${href}` : href;

  const t = useMemo(() => {
    const en = {
      breadcrumb: "Products",
      badge: "Cambodia - Access Control - Door Security",
      h1: "Access Control System in Cambodia",
      sub:
        "Door access control for offices, factories, hotels, schools, and public facilities. We supply RFID, QR, fingerprint, and face recognition systems with controllers, locks, and attendance integration, plus installation and after-sales support in Cambodia.",
      cta1: "Get a Free Quotation",
      cta2: "View Access Control Products",
      serving: "Serving: Phnom Penh - Siem Reap - Sihanoukville",

      quickTitle: "Browse access control categories and services",
      quickSub:
        "Quick links help you reach access methods, device types, integrations, products, and support.",

      specsTitle: "Access Control System Specifications for Cambodia",
      specsSub:
        "Use these practical ranges to plan secure entry control, attendance tracking, and reliable operation for indoor and outdoor sites.",
      sCard1t: "Access Methods",
      sCard1d: "RFID cards, QR, PIN, fingerprint, and face recognition.",
      sCard2t: "Controller Capacity",
      sCard2d: "Single-door to multi-door systems with expansion options.",
      sCard3t: "Door Hardware",
      sCard3d: "Maglocks, electric strikes, exit buttons, and sensors.",
      sCard4t: "Software & Logs",
      sCard4d: "User roles, schedules, audit logs, and reports.",
      sCard5t: "Safety",
      sCard5d: "Emergency release, fire alarm linkage, and fail-safe design.",
      sCard6t: "Installation",
      sCard6d: "Cabling, power design, testing, and commissioning.",

      basicsLabel: "ACCESS CONTROL BASICS",
      basicsTitle: "What Is an Access Control System?",
      basicsDesc:
        "An access control system manages who can enter specific doors or areas using cards, PINs, QR, or biometrics. It replaces keys with digital permissions, records access events, and improves safety for staff and visitors.",
      howTitle: "How Does Access Control Work?",
      howDesc:
        "Readers or terminals capture credentials, the controller verifies access rules, and the lock opens if authorized. Software handles users, schedules, and reporting, and can integrate with attendance and visitor management.",
      benefitTitle: "Key Benefits for Cambodia Sites",
      b1: "Controlled entry with role-based permissions",
      b2: "Attendance-ready logs and access history",
      b3: "Scalable from single doors to multi-door buildings",
      b4: "Reduced key loss and stronger security policy",
      b5: "Integration with turnstiles, CCTV, and alarms",

      methodsTitle: "Access Control Device Types",
      methodsSub:
        "Choose devices based on traffic flow, security level, and operating environment.",
      m1: "RFID Card Reader",
      m1d: "Reliable access for offices, schools, and staff entrances.",
      m2: "Fingerprint Terminal",
      m2d: "Secure identification for attendance and controlled areas.",
      m3: "Face Recognition Terminal",
      m3d: "Fast, touchless access for high-traffic sites.",
      m4: "QR / Mobile Access",
      m4d: "Visitor passes and temporary access for events or contractors.",
      m5: "Controller & Door Relay",
      m5d: "Central control for multiple doors and time schedules.",
      m6: "Maglock / Electric Strike",
      m6d: "Durable door locking solutions for secure entry.",

      useTitle: "Where Access Control Is Used",
      useSub:
        "Common deployment scenarios for access control systems in Cambodia.",
      u1t: "Offices & Corporate Buildings",
      u1d: "Staff entry, server rooms, restricted areas, and visitor logs.",
      u2t: "Factories & Warehouses",
      u2d: "Shift attendance, gate access, and multi-door control.",
      u3t: "Hotels & Apartments",
      u3d: "Staff zones, service doors, lift access, and time schedules.",
      u4t: "Schools & Campuses",
      u4d: "Classroom access, attendance terminals, and admin control.",
      u5t: "Hospitals & Clinics",
      u5d: "Restricted areas and staff movement control.",
      u6t: "Banks & Sensitive Facilities",
      u6d: "Strict access rules with audit logs and hardware planning.",

      integrationsTitle: "Integration Options",
      integrationsSub:
        "Access control can connect with attendance, visitor, and security systems.",
      i1: "Attendance and payroll software",
      i2: "Visitor management systems",
      i3: "Turnstile gates and speed gates",
      i4: "CCTV and monitoring systems",
      i5: "Fire alarm and emergency release",
      i6: "Elevator and multi-floor control",

      chooseTitle: "How to Choose the Right Access Control System",
      chooseSub:
        "A short checklist to avoid wrong device selection and ensure reliable operation.",
      c1: "How many doors and users?",
      c2: "Online vs offline system",
      c3: "Door type and lock selection",
      c4: "Security level and audit needs",
      c5: "Integration with attendance or visitors",
      c6: "Power, cabling, and network readiness",

      gridTitle: "Access Control Products",
      gridSub:
        "Browse access control devices, locks, readers, and controllers for Cambodia projects.",

      processTitle: "Installation, Setup & Training",
      processSub:
        "A structured workflow for stable operation and clean installation.",
      p1: "Site survey and requirement review",
      p2: "System design and quotation",
      p3: "Installation, wiring, and commissioning",
      p4: "User training and after-sales support",

      faqTitle: "FAQ - Access Control System",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Send door count, credential preference (card/face/QR), and site details. We will recommend compatible devices and provide a clear quotation.",
      finalCta: "Contact & Get Quotation",
      viewProducts: "View Products",
      note:
        "Note: Final quotation depends on door count, lock type, cabling distance, and integration requirements.",
      getQuote: "Get Quotation",
    };

    const km = {
      breadcrumb: "Products",
      badge: "Cambodia - Access Control - Door Security",
      h1: "Access Control System in Cambodia",
      sub:
        "Door access control for offices, factories, hotels, schools, and public facilities. We supply RFID, QR, fingerprint, and face recognition systems with controllers, locks, and attendance integration, plus installation and after-sales support in Cambodia.",
      cta1: "Get a Free Quotation",
      cta2: "View Access Control Products",
      serving: "Serving: Phnom Penh - Siem Reap - Sihanoukville",

      quickTitle: "Browse access control categories and services",
      quickSub:
        "Quick links help you reach access methods, device types, integrations, products, and support.",

      specsTitle: "Access Control System Specifications for Cambodia",
      specsSub:
        "Use these practical ranges to plan secure entry control, attendance tracking, and reliable operation for indoor and outdoor sites.",
      sCard1t: "Access Methods",
      sCard1d: "RFID cards, QR, PIN, fingerprint, and face recognition.",
      sCard2t: "Controller Capacity",
      sCard2d: "Single-door to multi-door systems with expansion options.",
      sCard3t: "Door Hardware",
      sCard3d: "Maglocks, electric strikes, exit buttons, and sensors.",
      sCard4t: "Software & Logs",
      sCard4d: "User roles, schedules, audit logs, and reports.",
      sCard5t: "Safety",
      sCard5d: "Emergency release, fire alarm linkage, and fail-safe design.",
      sCard6t: "Installation",
      sCard6d: "Cabling, power design, testing, and commissioning.",

      basicsLabel: "ACCESS CONTROL BASICS",
      basicsTitle: "What Is an Access Control System?",
      basicsDesc:
        "An access control system manages who can enter specific doors or areas using cards, PINs, QR, or biometrics. It replaces keys with digital permissions, records access events, and improves safety for staff and visitors.",
      howTitle: "How Does Access Control Work?",
      howDesc:
        "Readers or terminals capture credentials, the controller verifies access rules, and the lock opens if authorized. Software handles users, schedules, and reporting, and can integrate with attendance and visitor management.",
      benefitTitle: "Key Benefits for Cambodia Sites",
      b1: "Controlled entry with role-based permissions",
      b2: "Attendance-ready logs and access history",
      b3: "Scalable from single doors to multi-door buildings",
      b4: "Reduced key loss and stronger security policy",
      b5: "Integration with turnstiles, CCTV, and alarms",

      methodsTitle: "Access Control Device Types",
      methodsSub:
        "Choose devices based on traffic flow, security level, and operating environment.",
      m1: "RFID Card Reader",
      m1d: "Reliable access for offices, schools, and staff entrances.",
      m2: "Fingerprint Terminal",
      m2d: "Secure identification for attendance and controlled areas.",
      m3: "Face Recognition Terminal",
      m3d: "Fast, touchless access for high-traffic sites.",
      m4: "QR / Mobile Access",
      m4d: "Visitor passes and temporary access for events or contractors.",
      m5: "Controller & Door Relay",
      m5d: "Central control for multiple doors and time schedules.",
      m6: "Maglock / Electric Strike",
      m6d: "Durable door locking solutions for secure entry.",

      useTitle: "Where Access Control Is Used",
      useSub:
        "Common deployment scenarios for access control systems in Cambodia.",
      u1t: "Offices & Corporate Buildings",
      u1d: "Staff entry, server rooms, restricted areas, and visitor logs.",
      u2t: "Factories & Warehouses",
      u2d: "Shift attendance, gate access, and multi-door control.",
      u3t: "Hotels & Apartments",
      u3d: "Staff zones, service doors, lift access, and time schedules.",
      u4t: "Schools & Campuses",
      u4d: "Classroom access, attendance terminals, and admin control.",
      u5t: "Hospitals & Clinics",
      u5d: "Restricted areas and staff movement control.",
      u6t: "Banks & Sensitive Facilities",
      u6d: "Strict access rules with audit logs and hardware planning.",

      integrationsTitle: "Integration Options",
      integrationsSub:
        "Access control can connect with attendance, visitor, and security systems.",
      i1: "Attendance and payroll software",
      i2: "Visitor management systems",
      i3: "Turnstile gates and speed gates",
      i4: "CCTV and monitoring systems",
      i5: "Fire alarm and emergency release",
      i6: "Elevator and multi-floor control",

      chooseTitle: "How to Choose the Right Access Control System",
      chooseSub:
        "A short checklist to avoid wrong device selection and ensure reliable operation.",
      c1: "How many doors and users?",
      c2: "Online vs offline system",
      c3: "Door type and lock selection",
      c4: "Security level and audit needs",
      c5: "Integration with attendance or visitors",
      c6: "Power, cabling, and network readiness",

      gridTitle: "Access Control Products",
      gridSub:
        "Browse access control devices, locks, readers, and controllers for Cambodia projects.",

      processTitle: "Installation, Setup & Training",
      processSub:
        "A structured workflow for stable operation and clean installation.",
      p1: "Site survey and requirement review",
      p2: "System design and quotation",
      p3: "Installation, wiring, and commissioning",
      p4: "User training and after-sales support",

      faqTitle: "FAQ - Access Control System",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Send door count, credential preference (card/face/QR), and site details. We will recommend compatible devices and provide a clear quotation.",
      finalCta: "Contact & Get Quotation",
      viewProducts: "View Products",
      note:
        "Note: Final quotation depends on door count, lock type, cabling distance, and integration requirements.",
      getQuote: "Get Quotation",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const faqs = useMemo<FAQ[]>(() => [
    {
      qEn: "Which access control method is best for offices?",
      aEn:
        "RFID cards or PIN access are cost-effective and easy to manage. For higher security, fingerprint or face recognition can be added.",
      qKm: "សម្រាប់ office តើ access control method មួយណាល្អជាងគេ?",
      aKm:
        "RFID card ឬ PIN access គឺសន្សំសំចៃ និងងាយគ្រប់គ្រង។ បើត្រូវការសុវត្ថិភាពខ្ពស់ អាចបន្ថែម fingerprint ឬ face recognition បាន។",
    },
    {
      qEn: "Can access control integrate with attendance?",
      aEn:
        "Yes. Many controllers and terminals support attendance logs and reporting for HR systems.",
      qKm: "Access Control អាច integrate ជាមួយ attendance បានទេ?",
      aKm:
        "បាន។ Controller និង terminal ជាច្រើនគាំទ្រ attendance log និង reporting សម្រាប់ HR system។",
    },
    {
      qEn: "Do you install access control systems in Cambodia?",
      aEn:
        "Yes. We provide site survey, wiring, device installation, configuration, and after-sales support nationwide.",
      qKm: "តើអ្នកដំឡើង Access Control System នៅកម្ពុជាដែរឬទេ?",
      aKm:
        "បាទ/ចាស។ យើងផ្តល់សេវា site survey, wiring, device installation, configuration និង after-sales support ទូទាំងប្រទេស។",
    },
    {
      qEn: "What information is needed for a quotation?",
      aEn:
        "Door count, door type (glass/wood/metal), access method preference, and whether you need online reporting.",
      qKm: "តើត្រូវផ្តល់ព័ត៌មានអ្វីខ្លះសម្រាប់ស្នើសុំ quotation?",
      aKm:
        "ត្រូវផ្តល់ចំនួនទ្វារ, ប្រភេទទ្វារ (glass/wood/metal), access method preference និងតម្រូវការប្រើ online reporting។",
    },
    {
      qEn: "Can access control work with turnstiles or gates?",
      aEn:
        "Yes. Access control systems can be integrated with turnstile gates and speed gates for secure entry flow.",
      qKm: "Access Control អាចដំណើរការជាមួយ Turnstile ឬ Gate បានទេ?",
      aKm:
        "បាន។ Access control system អាច integrate ជាមួយ turnstile gate និង speed gate ដើម្បីគ្រប់គ្រងលំហូរចូលឲ្យមានសុវត្ថិភាព។",
    },
  ], []);

  const jsonLd = useMemo(() => {
    const site =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";
    const url = site + "/products/access-control-system";

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site },
        { "@type": "ListItem", position: 2, name: "Products", item: site + "/products" },
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

    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: PRODUCTS.filter((p) => p.primaryCategoryId === "access_control")
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
                  href={toLangHref("/contact")}
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
                    href={toLangHref("/contact")}
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
                { label: "Device Types", href: "#device-types" },
                { label: "Use Cases", href: "#use-cases" },
                { label: "Integrations", href: "#integrations" },
                { label: "Products", href: "#products" },
                { label: "Process", href: "#process" },
                { label: "FAQ", href: "#faq" },
                { label: "Get Quotation", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={toLangHref(item.href)}
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

      <section id="device-types" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.methodsTitle}</h2>
          <p className="mt-2 text-slate-600">{t.methodsSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TypeCard title={t.m1} desc={t.m1d} />
            <TypeCard title={t.m2} desc={t.m2d} />
            <TypeCard title={t.m3} desc={t.m3d} />
            <TypeCard title={t.m4} desc={t.m4d} />
            <TypeCard title={t.m5} desc={t.m5d} />
            <TypeCard title={t.m6} desc={t.m6d} />
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
              allowedCategoryIds={["access_control"]}
              filterCategoryIds={["access_control"]}
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
                href={toLangHref("/contact")}
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

