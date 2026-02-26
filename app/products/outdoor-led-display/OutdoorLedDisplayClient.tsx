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
      badge: "Cambodia â€¢ Outdoor LED â€¢ LED Billboard",
      h1: "Outdoor LED Display in Cambodia",
      sub:
        "Weatherproof outdoor LED display solutions for roadside billboards, building facade screens and outdoor digital signage. We handle site survey, structure design, installation, commissioning and local after-sales support.",
      cta1: "Get a Free Quotation",
      cta2: "View Outdoor LED Panels",
      serving: "Serving: Phnom Penh â€¢ Siem Reap â€¢ Sihanoukville",

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
      s1d: "Typically 5500â€“8000 nits depending on location and sunlight.",
      s2: "Protection (IP Rating)",
      s2d: "IP65 front protection is common for outdoor billboard screens.",
      s3: "Pixel Pitch",
      s3d: "Select pitch by viewing distance (e.g., P4 city roads, P6â€“P10 highways).",
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

      processTitle: "Project Delivery (Survey â†’ Installation)",
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
        "Outdoor screens run long hoursâ€”regular inspection helps prevent downtime and increases lifespan.",
      m1: "Preventive maintenance schedule",
      m2: "Spare parts planning (modules, power, controller)",
      m3: "On-site troubleshooting & remote guidance",
      m4: "Cleaning & protection checks (IP sealing)",

      faqTitle: "FAQ â€” Outdoor LED Display",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Share your location, screen size and purpose. Weâ€™ll recommend suitable pixel pitch, brightness and structure with a project-based quotation.",
      finalCta: "Contact & Get Quote",
      seeProjects: "See Projects",
    };

    const km = {
      breadcrumb: "áž•áž›áž·ážáž•áž›",
      badge: "áž€áž˜áŸ’áž–áž»áž‡áž¶ â€¢ Outdoor LED â€¢ Billboard",
      h1: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      sub:
        "ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ billboard áž•áŸ’áž›áž¼ážœáž’áŸ†, rooftop áž“áž·áž„ outdoor digital signageáŸ” áž™áž¾áž„áž’áŸ’ážœáž¾ site survey, structure design, installation, commissioning áž“áž·áž„ after-sales support áž€áŸ’áž“áž»áž„ážŸáŸ’ážšáž»áž€áŸ”",
      cta1: "ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒ (Free)",
      cta2: "áž˜áž¾áž›áž•áŸ’áž‘áž¶áŸ†áž„ Outdoor LED",
      serving: "ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áŸ– Phnom Penh â€¢ Siem Reap â€¢ Sihanoukville",

      seoBlockTitle: "ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™ Outdoor LED Screen & Billboard",
      seoBlock:
        "Outdoor LED screens áž–áŸáž‰áž“áž·áž™áž˜áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž–áž¶ážŽáž·áž‡áŸ’áž‡áž€áž˜áŸ’áž˜ áž“áž·áž„ážŸáž¶ážšážŸáž¶áž’áž¶ážšážŽáŸˆáŸ” áž€áž¶ážšáž‡áŸ’ážšáž¾ážŸ outdoor LED display ážáŸ’ážšáž¼ážœáž–áž·áž…áž¶ážšážŽáž¶ viewing distance, pixel pitch, brightness (nits), IP protection áž“áž·áž„ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’áŸ” áž™áž¾áž„ážŽáŸ‚áž“áž¶áŸ† specs áž”áž“áŸ’áž‘áž¶áž”áŸ‹áž–áž¸ site survey ážŠáž¾áž˜áŸ’áž”áž¸áž”áž¶áž“áž‘áŸ†áž áŸ†, layout áž“áž·áž„ power planning ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœáŸ”",

      highlightsTitle: "áž¢ážáŸ’ážáž”áŸ’ážšáž™áŸ„áž‡áž“áŸážŠáŸ‚áž›áž¢áŸ’áž“áž€áž‘áž‘áž½áž›áž”áž¶áž“",
      hA: "áž—áŸ’áž›ážºážáŸ’áž–ážŸáŸ‹ áž˜áž¾áž›áž…áŸ’áž”áž¶ážŸáŸ‹áž–áŸáž›ážáŸ’áž„áŸƒ",
      hB: "IP-rated áž€áž¶ážšáž–áž¶ážšáž‘áž¹áž€ áž“áž·áž„áž’áž¼áž›áž¸",
      hC: "Structure design + ážŠáŸ†áž¡áž¾áž„ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–",
      hD: "Support áž€áŸ’áž“áž»áž„ážŸáŸ’ážšáž»áž€ + spare parts planning",

      specTitle: "ážŸáŸ’ážŠáž„áŸ‹ážŠáž¶ážšážŸáŸ†ážáž¶áž“áŸ‹áŸ— (Outdoor)",
      specSub:
        "ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšážŸáŸ’ážáŸážšáž—áž¶áž– áž€áŸ’áž“áž»áž„áž€áŸ†ážŠáŸ… áž’áž¼áž›áž¸ áž“áž·áž„ážŸáŸ†ážŽáž¾áž˜áŸ”",
      s1: "Brightness",
      s1d: "áž”áŸ’ážšáž áŸ‚áž› 5500â€“8000 nits ážáž¶áž˜áž‘áž¸ážáž¶áŸ†áž„ áž“áž·áž„áž–áž“áŸ’áž›ážºážáŸ’áž„áŸƒáŸ”",
      s2: "IP Rating",
      s2d: "IP65 áž‡áž¶áž‘áž¼áž‘áŸ…ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ outdoor billboard screensáŸ”",
      s3: "Pixel Pitch",
      s3d: "áž‡áŸ’ážšáž¾ážŸážáž¶áž˜ viewing distance (P4 áž€áŸ’áž“áž»áž„áž‘áž¸áž€áŸ’ážšáž»áž„, P6â€“P10 áž•áŸ’áž›áž¼ážœáž’áŸ†)áŸ”",
      s4: "Structure & Safety",
      s4d: "Steel structure, wind load, grounding áž“áž·áž„ lightning protection ážŸáŸ†ážáž¶áž“áŸ‹áŸ”",

      productTitle: "Outdoor LED Display Panels",
      productSub:
        "áž‡áŸ’ážšáž¾ážŸ panel ážáž¶áž˜ viewing distance áž“áž·áž„ážážœáž·áž€áž¶áŸ” ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ ážŸáž¼áž˜áž•áŸ’áž‰áž¾ location + screen sizeáŸ”",
      gridNote:
        "áž…áŸ†ážŽáž¶áŸ†áŸ– specs áž¢áž¶áž…áž”áŸ’ážšáŸ‚áž”áŸ’ážšáž½áž›ážáž¶áž˜ model áž“áž·áž„ project requirementáŸ” Final config áž€áŸ’ážšáŸ„áž™ surveyáŸ”",

      useTitle: "áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áž›áŸ’áž¢áž”áŸ†áž•áž»ážáž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      useSub:
        "Use cases ážŠáŸ‚áž›áž¢áž¶áž…áž•áŸ’ážáž›áŸ‹ visibility ážáŸ’áž–ážŸáŸ‹ áž“áž·áž„ ROI áž›áŸ’áž¢áŸ”",
      u1: "Roadside & Highway LED Billboards",
      u1d: "Billboard áž‘áŸ†áž áŸ†áž’áŸ† ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž˜áž¾áž›áž†áŸ’áž„áž¶áž™ áž“áž·áž„áž…ážšáž¶áž…ážšážŽáŸážáŸ’áž–ážŸáŸ‹áŸ”",
      u2: "Building Facade & Rooftop Screens",
      u2d: "áž—áŸ’áž›ážºážáŸ’áž–ážŸáŸ‹ áž“áž·áž„ mounting/structure engineering ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–áŸ”",
      u3: "Outdoor Digital Signage for Retail",
      u3d: "áž•áŸ’ážŸáž–áŸ’ážœáž•áŸ’ážŸáž¶áž™ áž“áž·áž„ážŸáž¶ážšáž•áŸ’ážŸáŸáž„áŸ— áž˜áž¾áž›áž…áŸ’áž”áž¶ážŸáŸ‹áž–áŸáž‰ážáŸ’áž„áŸƒáŸ”",
      u4: "Public Information & Smart City",
      u4d: "ážŸáž¶ážšážŸáž¶áž’áž¶ážšážŽáŸˆ, event notices áž“áž·áž„ campaign messagingáŸ”",

      processTitle: "ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž‚áž˜áŸ’ážšáŸ„áž„ (Survey â†’ Installation)",
      processSub:
        "Workflow ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœážŸáž˜áŸ’ážšáž¶áž”áŸ‹ config ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ áž“áž·áž„ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšážŸáŸ’ážáŸážšáž—áž¶áž–áŸ”",
      p1: "Site Survey & Measurement",
      p1d: "áž–áž·áž“áž·ážáŸ’áž™ viewing distance, sunlight, power route áž“áž·áž„ mounting areaáŸ”",
      p2: "Design & Proposal",
      p2d: "ážŽáŸ‚áž“áž¶áŸ† pixel pitch, screen size, cabinet layout áž“áž·áž„ structure conceptáŸ”",
      p3: "Installation & Commissioning",
      p3d: "Wiring/grounding, calibration áž“áž·áž„ content testingáŸ”",
      p4: "Training & After-Sales Support",
      p4d: "áž”áž„áŸ’ážšáŸ€áž“áž”áŸ’ážšáž¾ áž“áž·áž„ maintenance options (AMC) + support planningáŸ”",

      maintTitle: "Maintenance & AMC Support",
      maintSub:
        "Outdoor screens ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž™áž¼ážšâ€”áž€áž¶ážšážáŸ‚áž‘áž¶áŸ†áž‘áŸ€áž„áž‘áž¶ážáŸ‹ áž€áž¶ážáŸ‹áž”áž“áŸ’ážáž™ downtime áž“áž·áž„áž”áž“áŸ’ážáŸ‚áž˜ lifespanáŸ”",
      m1: "Preventive maintenance schedule",
      m2: "áž•áŸ‚áž“áž€áž¶ážš spare parts (modules, power, controller)",
      m3: "ážŠáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™áž”áž‰áŸ’áž áž¶áž“áŸ…áž‘áž¸ážáž¶áŸ†áž„ áž“áž·áž„ remote guidance",
      m4: "ážŸáž˜áŸ’áž¢áž¶áž áž“áž·áž„áž–áž·áž“áž·ážáŸ’áž™ IP sealing",

      faqTitle: "FAQ â€” Outdoor LED Display",
      finalTitle: "ážŸáŸ’áž“áž¾ážŸáž»áŸ† Quotation ážáž¶áž˜áž‚áž˜áŸ’ážšáŸ„áž„",
      finalSub:
        "áž•áŸ’áž‰áž¾ location, screen size áž“áž·áž„ use-caseáŸ” áž™áž¾áž„áž“áž¹áž„ážŽáŸ‚áž“áž¶áŸ† pixel pitch, brightness áž“áž·áž„ structure áž‡áž¶áž˜áž½áž™ quotation ážáž¶áž˜áž‚áž˜áŸ’ážšáŸ„áž„áŸ”",
      finalCta: "áž‘áŸ†áž“áž¶áž€áŸ‹áž‘áŸ†áž“áž„ & ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒ",
      seeProjects: "áž˜áž¾áž›áž‚áž˜áŸ’ážšáŸ„áž„",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const faqs = useMemo<FAQ[]>(() => [
    {
      qEn: "Which pixel pitch is best for outdoor LED billboards?",
      aEn:
        "Pixel pitch depends on viewing distance. City roads often use P4â€“P6. Highways and very long viewing distances commonly use P8â€“P10.",
      qKm: "Outdoor billboard ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ pixel pitch áž˜áž½áž™ážŽáž¶áž›áŸ’áž¢?",
      aKm:
        "Pixel pitch áž–áž¹áž„áž•áŸ’áž¢áŸ‚áž€áž›áž¾áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž›áŸ” áž€áŸ’áž“áž»áž„áž‘áž¸áž€áŸ’ážšáž»áž„áž—áž¶áž‚áž…áŸ’ážšáž¾áž“ P4â€“P6áŸ” áž•áŸ’áž›áž¼ážœáž’áŸ†/áž˜áž¾áž›áž†áŸ’áž„áž¶áž™ P8â€“P10 áž‡áž¶áž‘áž¼áž‘áŸ…áŸ”",
    },
    {
      qEn: "How much brightness do outdoor LED screens need?",
      aEn:
        "Most outdoor screens are designed around 5500â€“8000 nits depending on sunlight, orientation and installation height.",
      qKm: "Outdoor LED ážáŸ’ážšáž¼ážœáž€áž¶ážšáž—áŸ’áž›ážº (brightness) áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“?",
      aKm:
        "áž‡áž¶áž‘áž¼áž‘áŸ… outdoor screens áž”áŸ’ážšáž áŸ‚áž› 5500â€“8000 nits ážáž¶áž˜áž–áž“áŸ’áž›ážºážáŸ’áž„áŸƒ áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ážŠáŸ†áž¡áž¾áž„áŸ”",
    },
    {
      qEn: "Do you provide structure design and installation?",
      aEn:
        "Yes. We handle site survey, steel structure concept, safe mounting, wiring, grounding and commissioning.",
      qKm: "áž˜áž¶áž“ structure design áž“áž·áž„ installation ážŠáŸ‚ážšáž¬áž‘áŸ?",
      aKm:
        "áž˜áž¶áž“áŸ” áž™áž¾áž„áž’áŸ’ážœáž¾ survey, structure concept, mounting, wiring/grounding áž“áž·áž„ commissioningáŸ”",
    },
    {
      qEn: "Do you provide after-sales support in Cambodia?",
      aEn:
        "Yes. We provide local support and maintenance options (AMC) with spare parts planning to reduce downtime.",
      qKm: "áž˜áž¶áž“ after-sales support áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ ážŠáŸ‚ážšáž¬áž‘áŸ?",
      aKm:
        "áž˜áž¶áž“áŸ” áž˜áž¶áž“ support áž€áŸ’áž“áž»áž„ážŸáŸ’ážšáž»áž€ áž“áž·áž„ maintenance options (AMC) + spare parts planningáŸ”",
    },
  ], []);

  // âœ… Breadcrumb JSON-LD + FAQ JSON-LD (safe)
  const jsonLd = useMemo(() => {
    const base =
      (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
        "https://mugneekh.com") + "/led-display/outdoor-led-display";

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
            "https://mugneekh.com"),
        },
        { "@type": "ListItem", position: 2, name: "Products", item: (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com") + "/products" },
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
            <UseCaseCard title={t.u1} desc={t.u1d} chips={lang === "en" ? ["Outdoor", "High visibility", "Long distance"] : ["áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš", "áž˜áž¾áž›ážƒáž¾áž‰ážáŸ’áž–ážŸáŸ‹", "áž…áž˜áŸ’áž„áž¶áž™áž†áŸ’áž„áž¶áž™"]} />
            <UseCaseCard title={t.u2} desc={t.u2d} chips={lang === "en" ? ["Outdoor", "Structure", "Safety"] : ["áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš", "ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’", "ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–"]} />
            <UseCaseCard title={t.u3} desc={t.u3d} chips={lang === "en" ? ["Digital signage", "Retail", "Daylight"] : ["Digital signage", "Retail", "áž–áž“áŸ’áž›ážºážáŸ’áž„áŸƒ"]} />
            <UseCaseCard title={t.u4} desc={t.u4d} chips={lang === "en" ? ["Public info", "Events", "Smart city"] : ["áž–áŸážáŸŒáž˜áž¶áž“ážŸáž¶áž’áž¶ážšážŽáŸˆ", "áž–áŸ’ážšáž¹ážáŸ’ážáž·áž€áž¶ážšážŽáŸ", "Smart city"]} />
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
            {lang === "en" ? "Outdoor LED Products" : "áž•áž›áž·ážáž•áž› LED ážáž¶áž„áž€áŸ’ážšáŸ…"}
          </h2>
          <p className="mt-2 text-slate-600">
            {lang === "en"
              ? "Browse outdoor LED modules for billboards, rooftops and large-format screens. No public pricingâ€”request a quotation."
              : "áž˜áž¾áž›áž˜áŸ‰áž¼ážŒáž»áž› LED ážáž¶áž„áž€áŸ’ážšáŸ…ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž”áŸŠáž¸áž›áž”áž áž“áž·áž„áž¢áŸáž€áŸ’ážšáž„áŸ‹áž’áŸ†áŸ—áŸ” áž˜áž·áž“áž”áž„áŸ’áž áž¶áž‰ážáž˜áŸ’áž›áŸƒážŸáž¶áž’áž¶ážšážŽáŸˆâ€”ážŸáž¼áž˜ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒáŸ”"}
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
                      â–¾
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


