"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useLang } from "../../components/layout/LanguageProvider";
import ProductGrid from "../../components/sections/ProductGrid";
import { SITE_URL } from "../../lib/site";

type ProductGridConfig = {
  columns?: 2 | 3 | 4;
  pageSize?: number;
  allowedCategoryIds?: string[];
  filterCategoryIds?: string[];
  categoryOrderIds?: string[];
  showCategoryFilters?: boolean;
  showSort?: boolean;
  showPagination?: boolean;
  detailBasePath?: string;
};

const LED_FAQS_EN: Array<{ q: string; a: string }> = [
  {
    q: "What is the best LED display for indoor use in Cambodia?",
    a: "Indoor LED screens work best with finer pixel pitch (P1.25-P2.5) for close viewing in boardrooms, showrooms, and control rooms. Viewing distance is the key factor for clarity.",
  },
  {
    q: "What brightness (nits) is required for outdoor LED billboards?",
    a: "Outdoor LED displays typically use high brightness (around 4,500-7,000+ nits) so content stays visible in Cambodia sunlight.",
  },
  {
    q: "What IP rating is recommended for outdoor LED screens in Cambodia?",
    a: "Outdoor LED installations usually require IP65+ (front) for rain and dust protection. This is a common standard for billboards.",
  },
  {
    q: "How do I choose the right pixel pitch and viewing distance?",
    a: "Pixel pitch should match viewing distance. Smaller pitch is for close viewing; larger pitch is for longer viewing and budget efficiency.",
  },
  {
    q: "What refresh rate is recommended for LED displays?",
    a: "Many LED systems use 1,920Hz or higher. For camera use or broadcast, 3,840Hz or higher is preferred to reduce flicker.",
  },
  {
    q: "How long does an LED display last?",
    a: "A quality LED display can last 50,000+ hours depending on brightness settings, usage hours, and maintenance conditions.",
  },
  {
    q: "Does outdoor LED need special heat or climate protection?",
    a: "Yes. Outdoor LED in Cambodia needs heat management, weatherproof cabinets, and proper grounding to handle heat, rain, and dust.",
  },
  {
    q: "Why choose LED instead of LCD for large outdoor screens?",
    a: "LED is seamless, brighter, and scalable for large formats. LCD is usually for smaller sizes and has visible bezels.",
  },
  {
    q: "Can LED display price be fixed from a price list?",
    a: "Prices depend on pixel pitch, size, brightness, structure, and site conditions. That is why we provide project-based quotations.",
  },
  {
    q: "Do you provide installation and after-sales support in Cambodia?",
    a: "Yes. We handle survey, installation, commissioning, training, and ongoing maintenance support.",
  },
];

const LED_FAQS_KM: Array<{ q: string; a: string }> = [
  {
    q: "តើ LED Display ប្រភេទណាល្អសម្រាប់ប្រើប្រាស់ក្នុងអគារនៅកម្ពុជា?",
    a: "អេក្រង់ LED ក្នុងអគារ គួរជ្រើស pixel pitch ល្អិតជាង (P1.25-P2.5) សម្រាប់ចម្ងាយមើលជិត ដូចជា boardroom, showroom និង control room។ ចម្ងាយមើលគឺជាកត្តាសំខាន់បំផុតសម្រាប់ភាពច្បាស់។",
  },
  {
    q: "សម្រាប់ Billboard ខាងក្រៅ ត្រូវការ brightness ប៉ុន្មាន nits?",
    a: "Outdoor LED ជាទូទៅត្រូវការ brightness ខ្ពស់ (ប្រហែល 4,500-7,000+ nits) ដើម្បីឱ្យមាតិកាអាចមើលឃើញច្បាស់ក្រោមពន្លឺថ្ងៃនៅកម្ពុជា។",
  },
  {
    q: "Outdoor LED នៅកម្ពុជា គួរតែមានកម្រិតការពារ IP ប៉ុន្មាន?",
    a: "ការដំឡើងខាងក្រៅភាគច្រើនត្រូវការ IP65+ (ផ្នែកខាងមុខ) សម្រាប់ការពារទឹកភ្លៀង និងធូលី។ នេះជាស្តង់ដារដែលគេប្រើជាញឹកញាប់សម្រាប់ billboard។",
  },
  {
    q: "តើជ្រើស pixel pitch និងចម្ងាយមើលឱ្យត្រឹមត្រូវយ៉ាងដូចម្តេច?",
    a: "Pixel pitch ត្រូវតែសមនឹងចម្ងាយមើល។ pitch តូចសម្រាប់មើលជិត ខណៈ pitch ធំសម្រាប់ចម្ងាយឆ្ងាយ និងសន្សំថវិកា។",
  },
  {
    q: "Refresh rate ប៉ុន្មានសមស្របសម្រាប់ LED Display?",
    a: "ប្រព័ន្ធ LED ជាច្រើនប្រើ 1,920Hz ឬខ្ពស់ជាងនេះ។ សម្រាប់ការថតកាមេរ៉ា ឬ broadcast គួរប្រើ 3,840Hz ឬខ្ពស់ជាងនេះ ដើម្បីកាត់បន្ថយ flicker។",
  },
  {
    q: "LED Display មានអាយុកាលប៉ុន្មាន?",
    a: "LED ដែលមានគុណភាពអាចប្រើបានលើស 50,000 ម៉ោង អាស្រ័យលើការកំណត់ brightness ម៉ោងប្រើប្រាស់ និងការថែទាំ។",
  },
  {
    q: "Outdoor LED ត្រូវការការការពារកំដៅ ឬអាកាសធាតុពិសេសទេ?",
    a: "ត្រូវការ។ Outdoor LED នៅកម្ពុជា ត្រូវមានការគ្រប់គ្រងកំដៅ cabinet ការពារអាកាសធាតុ និង grounding ត្រឹមត្រូវ ដើម្បីទប់ទល់នឹងកំដៅ ភ្លៀង និងធូលី។",
  },
  {
    q: "ហេតុអ្វីគួរជ្រើស LED ជំនួស LCD សម្រាប់អេក្រង់ធំខាងក្រៅ?",
    a: "LED គ្មានស៊ុមភ្ជាប់ភ្លឹបភ្លែត ភ្លឺជាង និងពង្រីកទំហំបានងាយស្រួលសម្រាប់ទម្រង់ធំ។ LCD ជាទូទៅសមស្របសម្រាប់ទំហំតូច និងមាន bezel មើលឃើញ។",
  },
  {
    q: "តម្លៃ LED Display អាចកំណត់ថេរតាម price list បានទេ?",
    a: "តម្លៃអាស្រ័យលើ pixel pitch ទំហំ brightness រចនាសម្ព័ន្ធ និងលក្ខខណ្ឌទីតាំង។ ដូច្នេះយើងផ្តល់ជូនតម្លៃតាមគម្រោង (project-based quotation)។",
  },
  {
    q: "តើអ្នកមានសេវាដំឡើង និង after-sales support នៅកម្ពុជាទេ?",
    a: "មាន។ យើងផ្តល់សេវា survey, installation, commissioning, training និងការគាំទ្រថែទាំបន្ត។",
  },
];

const INTERNAL_LINK_CLUSTER_EN = [
  { title: "Indoor LED Display in Cambodia", href: "/led-display/indoor-led-display" },
  { title: "Outdoor LED Billboard in Cambodia", href: "/led-display/outdoor-led-display" },
  { title: "LED Receiving Card Guide", href: "/led-display/receiving-card" },
  { title: "LED Video Processor Selection", href: "/led-display/video-processor" },
  { title: "LED Power Supply & Parts", href: "/led-display/power-supply" },
  { title: "LED Installation & Service Support", href: "/service" },
  { title: "Cambodia Solutions by Industry", href: "/solutions" },
  { title: "Get LED Project Quotation", href: "/contact" },
];

const INTERNAL_LINK_CLUSTER_KM = [
  { title: "អេក្រង់ LED ក្នុងអគារនៅកម្ពុជា", href: "/led-display/indoor-led-display" },
  { title: "ប៊ីលបត្រ LED ខាងក្រៅនៅកម្ពុជា", href: "/led-display/outdoor-led-display" },
  { title: "មគ្គុទ្ទេសក៍ LED Receiving Card", href: "/led-display/receiving-card" },
  { title: "ការជ្រើសរើស LED Video Processor", href: "/led-display/video-processor" },
  { title: "LED Power Supply និងគ្រឿងបន្លាស់", href: "/led-display/power-supply" },
  { title: "សេវាដំឡើង និងគាំទ្របច្ចេកទេស LED", href: "/service" },
  { title: "ដំណោះស្រាយតាមវិស័យនៅកម្ពុជា", href: "/solutions" },
  { title: "ស្នើសុំតម្លៃគម្រោង LED", href: "/contact" },
];

const DEFAULT_TRUST_SIGNALS_EN = [
  "Cambodia-focused LED display entity setup with LocalBusiness, Service, Breadcrumb, and FAQ schema signals",
  "Project-based BOQ, pixel-pitch planning, and engineering-first LED specification workflow",
  "Local delivery and service coverage in Phnom Penh, Siem Reap, Sihanoukville, and key Cambodia cities",
  "End-to-end execution workflow: site survey, structure planning, installation, commissioning, and after-sales support",
];

const DEFAULT_TRUST_SIGNALS_KM = [
  "បង្កើត entity សម្រាប់ LED Display នៅកម្ពុជា ដោយប្រើ LocalBusiness, Service, Breadcrumb និង FAQ schema",
  "ដំណើរការ BOQ តាមគម្រោង ការគ្រោង pixel pitch និងការកំណត់ស្ប៉ិកតាមវិស្វកម្ម",
  "គ្របដណ្តប់ការដឹកជញ្ជូន និងសេវាកម្មក្នុងស្រុក នៅភ្នំពេញ សៀមរាប ព្រះសីហនុ និងខេត្តសំខាន់ៗ",
  "ដំណើរការពេញលេញពី site survey, planning, installation, commissioning ដល់ after-sales support",
];

const DEFAULT_TRUST_PROOF_CHIPS_EN = [
  "Cambodia LED Display Supplier",
  "Indoor & Outdoor LED Expertise",
  "BOQ & Engineering Workflow",
  "Local Installation Team",
  "After-Sales Service Coverage",
  "Entity + Schema Optimized Page",
];

const DEFAULT_TRUST_PROOF_CHIPS_KM = [
  "អ្នកផ្គត់ផ្គង់ LED Display នៅកម្ពុជា",
  "ជំនាញ LED ក្នុងអគារ និងខាងក្រៅ",
  "ដំណើរការ BOQ និងវិស្វកម្ម",
  "ក្រុមដំឡើងក្នុងស្រុក",
  "គ្របដណ្តប់សេវាកម្មបន្ទាប់ពីលក់",
  "ទំព័រដែល Optimize ដោយ Entity + Schema",
];

export default function LedDisplayClient({
  productGridOverride,
  productQuickChips,
  afterSpecsContent,
  afterSpecsContentKm,
  pixelPitchIntroOverride,
  pixelPitchIntroOverrideKm,
  pixelPitchRowsOverride,
  pixelPitchRowsOverrideKm,
  pixelPitchSectionOverride,
  pixelPitchSectionOverrideKm,
  faqItemsOverride,
  internalLinkClusterOverride,
  internalLinkClusterOverrideKm,
  trustSignalsOverride,
  trustSignalsOverrideKm,
  trustTitleOverride,
  trustTitleOverrideKm,
  trustDescOverride,
  trustDescOverrideKm,
  internalLinkTitleOverride,
  internalLinkTitleOverrideKm,
  internalLinkDescOverride,
  internalLinkDescOverrideKm,
  schemaPathOverride,
  schemaNameOverride,
  schemaServiceNameOverride,
  schemaServiceDescOverride,
  heroTitleOverride,
  heroTitleOverrideKm,
  heroIntroOverride,
  heroIntroOverrideKm,
  breadcrumbOverride,
}: {
  productGridOverride?: ProductGridConfig;
  productQuickChips?: { label: string; href: string }[];
  afterSpecsContent?: React.ReactNode;
  afterSpecsContentKm?: React.ReactNode;
  pixelPitchIntroOverride?: string;
  pixelPitchIntroOverrideKm?: string;
  pixelPitchRowsOverride?: [string, string, string][];
  pixelPitchRowsOverrideKm?: [string, string, string][];
  pixelPitchSectionOverride?: React.ReactNode;
  pixelPitchSectionOverrideKm?: React.ReactNode;
  faqItemsOverride?: Array<{ q: string; a: string }>;
  internalLinkClusterOverride?: Array<{ title: string; href: string }>;
  internalLinkClusterOverrideKm?: Array<{ title: string; href: string }>;
  trustSignalsOverride?: string[];
  trustSignalsOverrideKm?: string[];
  trustTitleOverride?: string;
  trustTitleOverrideKm?: string;
  trustDescOverride?: string;
  trustDescOverrideKm?: string;
  internalLinkTitleOverride?: string;
  internalLinkTitleOverrideKm?: string;
  internalLinkDescOverride?: string;
  internalLinkDescOverrideKm?: string;
  schemaPathOverride?: string;
  schemaNameOverride?: string;
  schemaServiceNameOverride?: string;
  schemaServiceDescOverride?: string;
  heroTitleOverride?: string;
  heroTitleOverrideKm?: string;
  heroIntroOverride?: string;
  heroIntroOverrideKm?: string;
  breadcrumbOverride?: string;
}) {
  const { lang } = useLang();
  const faqItems =
    faqItemsOverride ?? (lang === "en" ? LED_FAQS_EN : LED_FAQS_KM);
  const internalLinks =
    (lang === "en"
      ? internalLinkClusterOverride
      : (internalLinkClusterOverrideKm ?? internalLinkClusterOverride)) ??
    (lang === "en" ? INTERNAL_LINK_CLUSTER_EN : INTERNAL_LINK_CLUSTER_KM);
  const trustSignals =
    (lang === "en"
      ? trustSignalsOverride
      : (trustSignalsOverrideKm ?? trustSignalsOverride)) ??
    (lang === "en" ? DEFAULT_TRUST_SIGNALS_EN : DEFAULT_TRUST_SIGNALS_KM);
  const trustProofChips =
    lang === "en" ? DEFAULT_TRUST_PROOF_CHIPS_EN : DEFAULT_TRUST_PROOF_CHIPS_KM;
  const schemaPath = schemaPathOverride ?? "/led-display";
  const schemaName = schemaNameOverride ?? "LED Display";
  const schemaServiceName = schemaServiceNameOverride ?? "LED Display in Cambodia";
  const schemaServiceDesc =
    schemaServiceDescOverride ??
    "Indoor LED video walls, outdoor LED billboards, rental LED screens, installation, commissioning and after-sales support in Cambodia.";

  const t = useMemo(() => {
    const en = {
      breadcrumb: "Products",
      h1: "LED Display Price in Cambodia",    
      intro:
        "Mugnee Multiple delivers Indoor LED Display, Outdoor LED Display, LED Video Wall, LED Screen Panel, LED Billboard, Digital LED Display, Advertising LED Display, and LED Signage Display solutions in Cambodia. We support retail, malls, hotels, corporate lobbies, events, and outdoor advertising with site survey, pixel-pitch guidance, structure design, installation, commissioning, and local after-sales support. Get a project-based quotation from our Cambodia team in Phnom Penh, Siem Reap, and Sihanoukville.",
      cta1: "WhatsApp for Quotation",
      cta2: "Request BOQ Proposal",
      cta3: "Jump to Products",
      quickTitle: "Browse LED display categories and related services",
      quickSub:
        "Quick links help you reach the exact LED display type, controller, and accessories you need.",
    };

    const km = {
      breadcrumb: "ផលិតផល",
      h1: "តម្លៃ LED Display នៅកម្ពុជា",
      intro:
        "MUGNEE Multiple ផ្តល់ដំណោះស្រាយ Indoor LED Display, Outdoor LED Display, LED Video Wall, LED Screen Panel, LED Billboard, Digital LED Display, Advertising LED Display និង LED Signage Display នៅកម្ពុជា។ យើងគាំទ្រគម្រោង retail, mall, hotel, corporate lobby, event និង outdoor advertising ជាមួយសេវា site survey, ការណែនាំ pixel pitch, រចនាសម្ព័ន្ធ, ការដំឡើង, commissioning និងសេវាកម្មបន្ទាប់ពីលក់ក្នុងស្រុក។ ស្នើសុំតម្លៃតាមគម្រោងពីក្រុមការងារយើងនៅភ្នំពេញ សៀមរាប និងព្រះសីហនុ។",
      cta1: "WhatsApp ស្នើសុំតម្លៃ",
      cta2: "ស្នើសុំសំណើ BOQ",
      cta3: "ចូលទៅផលិតផល",
      quickTitle: "រកមើលប្រភេទ LED Display និងសេវាកម្មពាក់ព័ន្ធ",
      quickSub:
        "Quick links ជួយឱ្យអ្នកទៅដល់ប្រភេទ LED Display, controller និងគ្រឿងបន្លាស់ដែលត្រូវការបានលឿន។",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const quickLinks =
    lang === "en"
      ? [
          { label: "Indoor LED Display", href: "/led-display/indoor-led-display" },
          { label: "Outdoor LED Display", href: "/led-display/outdoor-led-display" },
          { label: "Receiving Card", href: "/led-display/receiving-card" },
          { label: "Video Processor", href: "/led-display/video-processor" },
          { label: "Power Supply", href: "/led-display/power-supply" },
          { label: "LED Controller", href: "/products/led-controller" },
          { label: "Interactive Flat Panel", href: "/interactive-flat-panel" },
          { label: "PA System", href: "/pa-system" },
          { label: "Contact", href: "/contact" },
        ]
      : [
          { label: "អេក្រង់ LED ក្នុងអគារ", href: "/led-display/indoor-led-display" },
          { label: "អេក្រង់ LED ខាងក្រៅ", href: "/led-display/outdoor-led-display" },
          { label: "Receiving Card", href: "/led-display/receiving-card" },
          { label: "Video Processor", href: "/led-display/video-processor" },
          { label: "Power Supply", href: "/led-display/power-supply" },
          { label: "LED Controller", href: "/products/led-controller" },
          { label: "Interactive Flat Panel", href: "/interactive-flat-panel" },
          { label: "ប្រព័ន្ធ PA", href: "/pa-system" },
          { label: "ទំនាក់ទំនង", href: "/contact" },
        ];

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
        @keyframes home-partner-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .home-partner-marquee-track {
          animation: home-partner-marquee 24s linear infinite;
          will-change: transform;
        }
        .home-partner-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .home-partner-marquee-track {
            animation: none;
          }
        }
      `}</style>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mugnee Cambodia",
              url: `${SITE_URL}${schemaPath}`,
              image: `${SITE_URL}/images/hero/cambodia-led-hero.webp`,
              telephone: "+855XXXXXXXXX",
              sameAs: [
                "https://www.facebook.com/mugneemultiple/",
                "https://www.youtube.com/@MugneeTech",
                "https://www.linkedin.com/company/mugnee-multiple-limited/",
                "https://x.com/mugneeml",
                "https://www.instagram.com/sm.mugnee/",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "1st Floor, 11E0, Street 108, Night Market Area, Doun Penh",
                addressLocality: "Phnom Penh",
                addressCountry: "KH",
              },
              areaServed: ["Phnom Penh", "Siem Reap", "Sihanoukville"],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: schemaServiceName,
              description: schemaServiceDesc,
              areaServed: ["Phnom Penh", "Siem Reap", "Sihanoukville"],
              serviceType: "LED Display Solutions",
              provider: {
                "@type": "LocalBusiness",
                name: "Mugnee Cambodia",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: schemaName,
                  item: `${SITE_URL}${schemaPath}`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ]),
        }}
      />
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">
              {breadcrumbOverride ?? (lang === "en" ? "LED Display" : "អេក្រង់ LED")}
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {lang === "en"
              ? (heroTitleOverride ?? t.h1)
              : (heroTitleOverrideKm ?? heroTitleOverride ?? t.h1)}
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {lang === "en"
              ? (heroIntroOverride ?? t.intro)
              : (heroIntroOverrideKm ?? heroIntroOverride ?? t.intro)}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href="https://wa.me/855XXXXXXXXX"
              target="_blank"
              rel="noopener"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {t.cta1}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              {t.cta2}
            </Link>
            <a
              href="#products"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              {t.cta3}
            </a>
          </div>

        </div>
      </section>

      {/* PRODUCT GRID */}
      <section id="products" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <ProductGrid
            columns={3}
            pageSize={9}
            allowedCategoryIds={[
              "led_display",
              "indoor_led_display",
              "outdoor_led_display",
              "rental_led_display",
              "led_accessories",
            ]}
            filterCategoryIds={[
              "indoor_led_display",
              "outdoor_led_display",
              "rental_led_display",
              "led_accessories",
            ]}
            categoryOrderIds={[
              "indoor_led_display",
              "outdoor_led_display",
              "rental_led_display",
              "led_accessories",
            ]}
            topLeftContent={
              productQuickChips && productQuickChips.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {productQuickChips.map((chip, index) => (
                    <Link
                      key={`${chip.href}-${chip.label}-${index}`}
                      href={chip.href}
                      className="quick-link rounded-full px-3 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900"
                    >
                      {chip.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <div />
              )
            }
            {...productGridOverride}
          />
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-4 lg:px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {t.quickTitle}
                </div>
                <div className="mt-1 text-xs text-slate-600">{t.quickSub}</div>
              </div>
              <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 sm:block">
                {lang === "en" ? "Quick Links" : "តំណរហ័ស"}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {quickLinks.map((item, index) => (
                <Link
                  key={`${item.href}-${item.label}-${index}`}
                  href={item.href}
                  className="quick-link rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

                  {/* LED TECHNOLOGY BASICS */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-2 py-12 sm:px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {lang === "en" ? "LED Technology Basics" : "មូលដ្ឋានបច្ចេកវិទ្យា LED"}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {lang === "en"
                  ? "LED Technology Basics for Cambodia Buyers"
                  : "មូលដ្ឋានបច្ចេកវិទ្យា LED សម្រាប់អ្នកទិញនៅកម្ពុជា"}
              </h2>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  {lang === "en" ? "What Is an LED Display?" : "តើ LED Display គឺជាអ្វី?"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {lang === "en"
                    ? "An LED display is a digital screen made from thousands of LED pixels arranged in modules and cabinets. These pixels light up to form images, videos, and live data. LED technology is preferred for large screens because it is seamless, bright, and scalable for both indoor and outdoor installations in Cambodia."
                    : "LED Display គឺជាអេក្រង់ឌីជីថលដែលបង្កើតពី LED pixels ជាច្រើន ដោយរៀបចំនៅក្នុង modules និង cabinets។ Pixels ទាំងនេះបញ្ចេញពន្លឺបង្កើតជារូបភាព វីដេអូ និងទិន្នន័យបន្តផ្ទាល់។ បច្ចេកវិទ្យា LED សមស្របសម្រាប់អេក្រង់ធំ ព្រោះគ្មានស៊ុមចំណុចភ្ជាប់ ភ្លឺច្បាស់ និងពង្រីកទំហំបានសម្រាប់ទាំងក្នុងអគារ និងខាងក្រៅនៅកម្ពុជា។"}
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  {lang === "en"
                    ? "How Does an LED Display Work?"
                    : "តើ LED Display ដំណើរការយ៉ាងដូចម្តេច?"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {lang === "en"
                    ? "A controller sends video signals to each LED pixel, synchronizing color and brightness across the screen. Correct pixel pitch, brightness, IP protection, and refresh rate ensure clear visuals, smooth motion, and reliable performance under Cambodias heat, rain, and dust conditions."
                    : "Controller ផ្ញើសញ្ញាវីដេអូទៅ LED pixel នីមួយៗ ដើម្បីសមកាលកម្មពណ៌ និងកម្រិតពន្លឺទូទាំងអេក្រង់។ ការជ្រើស pixel pitch, brightness, ការការពារ IP និង refresh rate ឱ្យត្រឹមត្រូវ នឹងធានាឱ្យរូបភាពច្បាស់ ចលនារលូន និងដំណើរការមានស្ថិរភាពក្រោមលក្ខខណ្ឌកំដៅ ភ្លៀង និងធូលីនៅកម្ពុជា។"}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                {(lang === "en"
                  ? [
                      "Pixel Pitch",
                      "Brightness (nits)",
                      "IP Rating",
                      "Refresh Rate",
                      "Cabinet Size",
                    ]
                  : [
                      "Pixel Pitch",
                      "កម្រិតពន្លឺ (nits)",
                      "កម្រិតការពារ IP",
                      "Refresh Rate",
                      "ទំហំ Cabinet",
                    ]
                ).map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-24 grid gap-4 sm:grid-cols-2">
              {(lang === "en"
                ? [
                    ["LED Modules", "Small panels that create the full screen size and resolution."],
                    ["Cabinets", "Rigid frames that align modules and protect wiring."],
                    ["Controller", "Processes content and synchronizes every pixel in real time."],
                    ["Power & Signal", "Stable power, clean cabling, and grounding for safety."],
                  ]
                : [
                    ["LED Modules", "ផ្ទាំងតូចៗដែលរួមគ្នាបង្កើតទំហំ និង resolution អេក្រង់ទាំងមូល។"],
                    ["Cabinets", "ស៊ុមរឹងសម្រាប់តម្រឹម modules និងការពារខ្សែភ្លើង។"],
                    ["Controller", "ដំណើរការមាតិកា និងសមកាលកម្ម pixel ទាំងអស់ជាក់ស្តែង។"],
                    ["Power & Signal", "ថាមពលស្ថេរភាព ការរៀបខ្សែស្អាត និង grounding ដើម្បីសុវត្ថិភាព។"],
                  ]
              ).map(([t, d]) => (
                <div
                  key={String(t)}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{t}</div>
                  <div className="mt-1 text-xs leading-relaxed text-slate-600">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* TYPES IN CAMBODIA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {lang === "en" ? "Types in Cambodia" : "ប្រភេទដែលពេញនិយមនៅកម្ពុជា"}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {lang === "en"
                  ? "Types of LED Displays in Cambodia"
                  : "ប្រភេទអេក្រង់ LED នៅកម្ពុជា"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "The Cambodia market typically uses four LED display types. Each type is optimized for viewing distance, brightness, and installation style. Choosing the right type ensures better visuals, lower maintenance, and longer service life."
                  : "ទីផ្សារកម្ពុជាជាទូទៅប្រើ LED Display 4 ប្រភេទសំខាន់ៗ។ ប្រភេទនីមួយៗត្រូវបានកំណត់សម្រាប់ចម្ងាយមើល កម្រិតពន្លឺ និងរចនាប័ទ្មដំឡើងផ្សេងៗ។ ការជ្រើសប្រភេទត្រឹមត្រូវជួយឱ្យរូបភាពល្អ កាត់បន្ថយថ្លៃថែទាំ និងបង្កើនអាយុកាលប្រើប្រាស់។"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "We help you select the right LED screen by location, budget, and content needs so your investment performs reliably."
                  : "យើងជួយអ្នកជ្រើស LED Screen ត្រឹមត្រូវតាមទីតាំង ថវិកា និងតម្រូវការមាតិកា ដើម្បីឱ្យការវិនិយោគរបស់អ្នកមានប្រសិទ្ធភាព និងស្ថិរភាព។"}
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  {lang === "en"
                    ? "Quick Selection Checklist (Cambodia)"
                    : "បញ្ជីពិនិត្យរហ័សសម្រាប់ការជ្រើសរើស (កម្ពុជា)"}
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {lang === "en"
                      ? "Decide indoor vs outdoor based on sunlight and exposure."
                      : "សម្រេចថាជា indoor ឬ outdoor ដោយផ្អែកលើពន្លឺថ្ងៃ និងការប៉ះពាល់អាកាសធាតុ។"}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {lang === "en"
                      ? "Match pixel pitch to viewing distance for clarity."
                      : "ផ្គូផ្គង pixel pitch ជាមួយចម្ងាយមើល ដើម្បីទទួលបានភាពច្បាស់។"}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {lang === "en"
                      ? "Confirm structure method and mounting location."
                      : "បញ្ជាក់វិធីសាស្ត្ររចនាសម្ព័ន្ធ និងទីតាំងដំឡើង។"}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {lang === "en"
                      ? "Plan for power, grounding, and maintenance access."
                      : "រៀបចំគម្រោងថាមពល grounding និងច្រកចូលសម្រាប់ថែទាំ។"}
                  </li>
                </ul>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                {lang === "en"
                  ? "Common Cambodia installs: mall video walls, hotel lobbies, roadside LED billboards, retail storefront screens, event stages, and public information displays."
                  : "ការដំឡើងពេញនិយមនៅកម្ពុជា៖ video wall ក្នុង mall, lobby សណ្ឋាគារ, billboard LED តាមដងផ្លូវ, អេក្រង់ storefront សម្រាប់ retail, stage event និងអេក្រង់ព័ត៌មានសាធារណៈ។"}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {(lang === "en"
                ? [
                    [
                      "Indoor LED Screens",
                      "Fine-pitch LED for meeting rooms, showrooms, control rooms, and retail branding.",
                      ["Fine pitch", "Low glare", "Close viewing"],
                    ],
                    [
                      "Outdoor LED Billboards",
                      "High-brightness IP-rated screens for roadside, rooftop, and facade advertising.",
                      ["High nits", "IP65+", "Sunlight ready"],
                    ],
                    [
                      "Rental LED Walls",
                      "Modular panels designed for fast setup at events, concerts, and exhibitions.",
                      ["Fast setup", "Lightweight", "Stage ready"],
                    ],
                    [
                      "LED Accessories & Parts",
                      "Controllers, receiving cards, power supplies, cabinets, and spare parts.",
                      ["Controllers", "Power", "Spare parts"],
                    ],
                  ]
                : [
                    [
                      "អេក្រង់ LED ក្នុងអគារ",
                      "Fine-pitch LED សម្រាប់បន្ទប់ប្រជុំ showroom control room និងការបង្ហាញម៉ាកក្នុងហាងលក់រាយ។",
                      ["Fine pitch", "ពន្លឺមិនចាំង", "មើលជិតច្បាស់"],
                    ],
                    [
                      "ប៊ីលបត្រ LED ខាងក្រៅ",
                      "អេក្រង់មានកម្រិតពន្លឺខ្ពស់ និង IP-rated សម្រាប់ roadside rooftop និងការផ្សព្វផ្សាយលើ facade។",
                      ["ពន្លឺខ្ពស់", "IP65+", "មើលឃើញក្រោមថ្ងៃ"],
                    ],
                    [
                      "ជញ្ជាំង LED សម្រាប់ជួល",
                      "ផ្ទាំង modular រចនាសម្រាប់ដំឡើងលឿនក្នុង event, concert និងពិព័រណ៍។",
                      ["ដំឡើងលឿន", "ទម្ងន់ស្រាល", "សមស្របសម្រាប់ឆាក"],
                    ],
                    [
                      "គ្រឿងបន្លាស់ និងផ្នែក LED",
                      "Controller, receiving card, power supply, cabinet និង spare parts ផ្សេងៗ។",
                      ["Controller", "Power", "គ្រឿងបន្លាស់"],
                    ],
                  ]
              ).map((item, idx) => {
                const [t, d, chips] = item as [string, string, string[]];
                return (
                <div
                  key={`${t}-${idx}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                    {chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SPECS SNAPSHOT */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "LED Display Specifications for Cambodia (Indoor & Outdoor)"
              : "លក្ខណៈបច្ចេកទេស LED Display សម្រាប់កម្ពុជា (ក្នុងអគារ និងខាងក្រៅ)"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Use these realistic spec ranges to plan indoor and outdoor LED display projects in Cambodia. Final specs depend on viewing distance, ambient light, installation structure, and budget."
              : "សូមប្រើជួរ spec ខាងក្រោមសម្រាប់រៀបចំគម្រោង LED Display ក្នុងអគារ និងខាងក្រៅនៅកម្ពុជា។ Spec ចុងក្រោយអាស្រ័យលើចម្ងាយមើល ពន្លឺបរិយាកាស រចនាសម្ព័ន្ធដំឡើង និងថវិកា។"}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
                  ["Pixel Pitch", "Indoor: P1.25-P3 | Outdoor: P3-P10"],
                  ["Brightness (nits)", "Indoor: 600-1,200 | Outdoor: 4,500-7,000+"],
                  ["IP Rating", "Indoor: IP30-IP40 | Outdoor: IP65+ (front)"],
                  ["Refresh Rate", ">= 1,920Hz (4,000Hz+ for camera use)"],
                  ["Viewing Angle", "H: 140-160 | V: 120-140"],
                  ["Power & Safety", "Surge protection + proper grounding"],
                  ["Cabinet Size", "Common: 500x500 / 500x1000 mm"],
                  ["Lifespan", "50,000-100,000 hours with proper maintenance"],
                ]
              : [
                  ["Pixel Pitch", "ក្នុងអគារ៖ P1.25-P3 | ខាងក្រៅ៖ P3-P10"],
                  ["កម្រិតពន្លឺ (nits)", "ក្នុងអគារ៖ 600-1,200 | ខាងក្រៅ៖ 4,500-7,000+"],
                  ["កម្រិតការពារ IP", "ក្នុងអគារ៖ IP30-IP40 | ខាងក្រៅ៖ IP65+ (ខាងមុខ)"],
                  ["Refresh Rate", ">= 1,920Hz (4,000Hz+ សម្រាប់កាមេរ៉ា)"],
                  ["មុំមើល", "H: 140-160 | V: 120-140"],
                  ["ថាមពល និងសុវត្ថិភាព", "ការពារ surge + grounding ត្រឹមត្រូវ"],
                  ["ទំហំ Cabinet", "ទំហំពេញនិយម៖ 500x500 / 500x1000 mm"],
                  ["អាយុកាល", "50,000-100,000 ម៉ោង (ប្រសិនបើថែទាំត្រឹមត្រូវ)"],
                ]
            ).map(([t, d]) => (
              <div
                key={String(t)}
                className="spec-card rounded-2xl p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <div className="mt-2 text-xs leading-relaxed text-slate-600">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lang === "en" ? afterSpecsContent : (afterSpecsContentKm ?? afterSpecsContent)}

      {(lang === "en"
        ? pixelPitchSectionOverride
        : (pixelPitchSectionOverrideKm ?? pixelPitchSectionOverride)) ?? (
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {lang === "en"
                ? "Pixel Pitch & Viewing Distance Guide"
                : "មគ្គុទ្ទេសក៍ Pixel Pitch និងចម្ងាយមើល"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {pixelPitchIntroOverride ??
                (lang === "en"
                  ? "Choosing the right pixel pitch is the #1 factor for visual clarity and budget efficiency. Use this guide as a starting point for Cambodia installations."
                  : "ការជ្រើស pixel pitch ត្រឹមត្រូវ គឺជាកត្តាសំខាន់បំផុតសម្រាប់ភាពច្បាស់នៃរូបភាព និងប្រសិទ្ធភាពថវិកា។ សូមប្រើមគ្គុទ្ទេសក៍នេះជាចំណុចចាប់ផ្តើមសម្រាប់ការដំឡើងនៅកម្ពុជា។")}
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-1 bg-slate-100 text-sm font-semibold text-slate-900 sm:grid-cols-3">
                <div className="p-3">Pixel Pitch</div>
                <div className="p-3">{lang === "en" ? "Best Viewing Distance" : "ចម្ងាយមើលល្អបំផុត"}</div>
                <div className="p-3">{lang === "en" ? "Typical Use" : "ការប្រើប្រាស់ទូទៅ"}</div>
              </div>
              {(pixelPitchRowsOverride ?? [
                ...(lang === "en"
                  ? [
                      ["P1.25-P1.86", "1.5-3m", "Control room, premium boardroom"],
                      ["P2-P2.5", "2-5m", "Meeting rooms, retail, showrooms"],
                      ["P3-P4", "3-8m", "Malls, lobbies, indoor stages"],
                      ["P5-P10", "6m+", "Outdoor billboards, roadside"],
                    ]
                  : [
                      ["P1.25-P1.86", "1.5-3m", "Control room និង boardroom កម្រិតខ្ពស់"],
                      ["P2-P2.5", "2-5m", "បន្ទប់ប្រជុំ ហាងលក់រាយ និង showroom"],
                      ["P3-P4", "3-8m", "Mall, lobby និងឆាកក្នុងអគារ"],
                      ["P5-P10", "6m+", "Billboard ខាងក្រៅ និងតាមដងផ្លូវ"],
                    ]),
              ]).map((row) => (
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
      )}

      {/* INDOOR VS OUTDOOR */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Indoor vs Outdoor LED Display for Cambodia Climate"
              : "ការប្រៀបធៀប LED Display ក្នុងអគារ និងខាងក្រៅ សម្រាប់អាកាសធាតុកម្ពុជា"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Cambodias heat, rain, and dust require correct IP rating, heat management, and structure design-especially for outdoor LED displays."
              : "កំដៅ ភ្លៀង និងធូលីនៅកម្ពុជា ទាមទារឱ្យជ្រើស IP rating ត្រឹមត្រូវ ការគ្រប់គ្រងកំដៅ និងការរចនាសម្ព័ន្ធល្អ ជាពិសេសសម្រាប់ Outdoor LED។"}
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {(lang === "en"
              ? [
                  [
                    "Indoor LED Display",
                    "Designed for close-viewing environments like corporate boardrooms, retail showrooms, control rooms, hotels and indoor events. Indoor LED uses finer pixel pitch, balanced brightness, and quiet cooling so visuals stay sharp without glare. Proper cable management and clean structure finishing improve long-term stability.",
                    "Typical IP: IP30-IP40",
                    ["Fine pitch clarity", "Low glare", "Quiet cooling", "Close viewing"],
                  ],
                  [
                    "Outdoor LED Display",
                    "Built for sun, rain, and dust in Cambodia. Outdoor LED billboards require high brightness, weatherproof cabinets, strong structures, and safe grounding. IP-rated protection, heat management, and durable components keep the screen visible and stable in harsh outdoor conditions.",
                    "Typical IP: IP65+ (front)",
                    ["High brightness", "Weatherproof", "Structure safety", "Sunlight ready"],
                  ],
                ]
              : [
                  [
                    "អេក្រង់ LED ក្នុងអគារ",
                    "សមស្របសម្រាប់ការមើលជិត ដូចជា boardroom, showroom, control room, សណ្ឋាគារ និង event ក្នុងអគារ។ Indoor LED ប្រើ pixel pitch ល្អិត កម្រិតពន្លឺសមស្រប និងប្រព័ន្ធត្រជាក់ស្ងាត់ ដើម្បីរក្សារូបភាពឱ្យច្បាស់។ ការរៀបខ្សែ និងការបញ្ចប់រចនាសម្ព័ន្ធស្អាតជួយបង្កើនស្ថិរភាពរយៈពេលវែង។",
                    "IP ទូទៅ៖ IP30-IP40",
                    ["ភាពច្បាស់ Fine pitch", "ពន្លឺមិនចាំង", "ប្រព័ន្ធត្រជាក់ស្ងាត់", "សមស្របសម្រាប់មើលជិត"],
                  ],
                  [
                    "អេក្រង់ LED ខាងក្រៅ",
                    "រចនាឡើងសម្រាប់ពន្លឺថ្ងៃ ភ្លៀង និងធូលីនៅកម្ពុជា។ Outdoor LED billboard ត្រូវការ brightness ខ្ពស់ cabinet ការពារអាកាសធាតុ រចនាសម្ព័ន្ធរឹងមាំ និង grounding សុវត្ថិភាព។ ការការពារ IP និងការគ្រប់គ្រងកំដៅល្អ នឹងធានាអេក្រង់អាចមើលឃើញច្បាស់ និងដំណើរការស្ថិរភាព។",
                    "IP ទូទៅ៖ IP65+ (ខាងមុខ)",
                    ["ពន្លឺខ្ពស់", "ការពារអាកាសធាតុ", "សុវត្ថិភាពរចនាសម្ព័ន្ធ", "មើលឃើញក្រោមថ្ងៃ"],
                  ],
                ]
            ).map((item, idx) => {
              const [t, d, ip, chips] = item as [string, string, string, string[]];
              return (
              <div
                key={`${t}-${idx}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                <div className="mt-3 text-xs font-semibold text-slate-700">{ip}</div>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE-CASE BY INDUSTRY */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "LED Display Use-Cases by Industry in Cambodia"
              : "ករណីប្រើប្រាស់ LED Display តាមវិស័យនៅកម្ពុជា"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Popular industries using LED display, digital signage, and LED billboards in Cambodia."
              : "វិស័យពេញនិយមដែលកំពុងប្រើ LED display, digital signage និង LED billboard នៅកម្ពុជា។"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
              {
                t: "Retail & Shopping Malls",
                d: "Indoor LED video walls for promotions, storefront branding, and product launches in Phnom Penh malls.",
                chips: ["Indoor", "Fine pitch", "Branding"],
              },
              {
                t: "Hotels, Resorts & Hospitality",
                d: "Lobby welcome walls, event schedules, and banquet hall screens with clean visuals and quiet cooling.",
                chips: ["Lobby", "Events", "24/7 use"],
              },
              {
                t: "Corporate Offices & Showrooms",
                d: "Boardroom and showroom LED displays for presentations, dashboards, and premium brand storytelling.",
                chips: ["Corporate", "Control", "Showroom"],
              },
              {
                t: "Events, Stage & Rental",
                d: "Rental LED walls for concerts, exhibitions, and stage backdrops with fast setup and modular cabinets.",
                chips: ["Rental", "Stage", "Fast setup"],
              },
              {
                t: "Education & Campuses",
                d: "Auditorium screens, campus notice boards, and smart classroom displays for clear visibility.",
                chips: ["Education", "Auditorium", "Notice"],
              },
              {
                t: "Government & Public Service",
                d: "Information displays for service centers, municipal halls, and public announcements.",
                chips: ["Public", "Info", "Queue"],
              },
              {
                t: "Transportation & Terminals",
                d: "Timetable, wayfinding, and advertising screens for terminals, stations, and ports.",
                chips: ["Wayfinding", "Timetable", "Public"],
              },
              {
                t: "Outdoor Advertising & Billboards",
                d: "High-brightness LED billboards for roadside and rooftop advertising across Cambodia.",
                chips: ["Outdoor", "High nits", "IP65+"],
              },
              ]
              : [
                  {
                    t: "Retail និង Shopping Mall",
                    d: "Indoor LED video wall សម្រាប់ផ្សព្វផ្សាយ បង្ហាញម៉ាក និងបើកដំណើរការផលិតផលក្នុង mall នៅភ្នំពេញ។",
                    chips: ["Indoor", "Fine pitch", "Branding"],
                  },
                  {
                    t: "សណ្ឋាគារ រីសត និង Hospitality",
                    d: "អេក្រង់ស្វាគមន៍ lobby កាលវិភាគ event និងអេក្រង់ banquet hall ជាមួយរូបភាពស្អាត និងប្រព័ន្ធត្រជាក់ស្ងាត់។",
                    chips: ["Lobby", "Event", "24/7"],
                  },
                  {
                    t: "ការិយាល័យ និង Showroom",
                    d: "LED display សម្រាប់ boardroom និង showroom ដើម្បីបង្ហាញ presentation dashboard និង brand storytelling។",
                    chips: ["Corporate", "Control", "Showroom"],
                  },
                  {
                    t: "Event ឆាក និងជួល",
                    d: "Rental LED wall សម្រាប់ concert ពិព័រណ៍ និងផ្ទៃខាងក្រោយឆាក ជាមួយការដំឡើងលឿន។",
                    chips: ["Rental", "Stage", "Fast setup"],
                  },
                  {
                    t: "វិស័យអប់រំ និង Campus",
                    d: "អេក្រង់ auditorium, notice board នៅ campus និង smart classroom display សម្រាប់ភាពមើលឃើញច្បាស់។",
                    chips: ["Education", "Auditorium", "Notice"],
                  },
                  {
                    t: "រដ្ឋាភិបាល និងសេវាសាធារណៈ",
                    d: "អេក្រង់ព័ត៌មានសម្រាប់មជ្ឈមណ្ឌលសេវា សាលារាជធានី/ខេត្ត និងសេចក្ដីជូនដំណឹងសាធារណៈ។",
                    chips: ["Public", "Info", "Queue"],
                  },
                  {
                    t: "ដឹកជញ្ជូន និងស្ថានីយ៍",
                    d: "អេក្រង់ timetable, wayfinding និងផ្សព្វផ្សាយសម្រាប់ terminal, station និង port។",
                    chips: ["Wayfinding", "Timetable", "Public"],
                  },
                  {
                    t: "ផ្សព្វផ្សាយខាងក្រៅ និង Billboard",
                    d: "ប៊ីលបត្រ LED ពន្លឺខ្ពស់ សម្រាប់ផ្សព្វផ្សាយតាមដងផ្លូវ និងលើដំបូលទូទាំងកម្ពុជា។",
                    chips: ["Outdoor", "High nits", "IP65+"],
                  },
                ]
            ).map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{x.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.d}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {x.chips.map((c) => (
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

      {/* INSTALLATION PROCESS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "LED Display Installation & After-Sales Workflow in Cambodia"
              : "ដំណើរការដំឡើង LED Display និងសេវាកម្មបន្ទាប់ពីលក់នៅកម្ពុជា"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Our end-to-end LED display delivery process covers survey, design, installation, commissioning, and ongoing after-sales support. This workflow ensures stable visuals, safe structure, and long service life for Cambodia projects."
              : "ដំណើរការដឹកជញ្ជូន LED Display ពេញលេញរបស់យើង រួមមាន survey, design, installation, commissioning និងការគាំទ្របន្តបន្ទាប់ពីលក់។ ដំណើរការនេះជួយធានារូបភាពស្ថិរភាព រចនាសម្ព័ន្ធសុវត្ថិភាព និងអាយុកាលប្រើប្រាស់យូរ។"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
              [
                "1. Site Survey & Assessment",
                "On-site measurement, viewing distance check, sunlight level, mounting position, and power availability.",
                ["Survey", "Viewing distance", "Site conditions"],
              ],
              [
                "2. Design, BOQ & Approval",
                "Pixel pitch selection, cabinet layout, structure design, controller choice, and BOQ cost breakdown.",
                ["BOQ", "Structure plan", "Pixel pitch"],
              ],
              [
                "3. Installation & Commissioning",
                "Frame mounting, cable routing, grounding, controller setup, calibration, and brightness tuning.",
                ["Mounting", "Calibration", "Safety"],
              ],
              [
                "4. Training & After-Sales",
                "Operator training, content support, spare parts planning, maintenance schedule, and AMC options.",
                ["Training", "Spare parts", "AMC"],
              ],
              ]
              : [
                  [
                    "1. Site Survey និងវាយតម្លៃ",
                    "វាស់វែងទីតាំងពិត ពិនិត្យចម្ងាយមើល កម្រិតពន្លឺថ្ងៃ ទីតាំងដំឡើង និងប្រភពថាមពល។",
                    ["Survey", "ចម្ងាយមើល", "លក្ខខណ្ឌទីតាំង"],
                  ],
                  [
                    "2. Design, BOQ និងអនុម័ត",
                    "ជ្រើស pixel pitch, រៀប layout cabinet, រចនាសម្ព័ន្ធ, ជ្រើស controller និងបំបែកថ្លៃ BOQ។",
                    ["BOQ", "រចនាសម្ព័ន្ធ", "Pixel pitch"],
                  ],
                  [
                    "3. Installation និង Commissioning",
                    "ដំឡើង frame, រៀបខ្សែ, grounding, setup controller, calibration និងកំណត់ brightness។",
                    ["ដំឡើង", "Calibration", "សុវត្ថិភាព"],
                  ],
                  [
                    "4. Training និង After-Sales",
                    "បណ្តុះបណ្តាល operator, គាំទ្រមាតិកា, គម្រោង spare parts, កាលវិភាគថែទាំ និងជម្រើស AMC។",
                    ["Training", "Spare parts", "AMC"],
                  ],
                ]
            ).map((item, idx) => {
              const [t, d, chips] = item as [string, string, string[]];
              return (
              <div
                key={`${t}-${idx}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <div className="mt-2 text-xs leading-relaxed text-slate-600">{d}</div>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MUGNEE */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Why Choose Mugnee for LED Display in Cambodia"
              : "ហេតុអ្វីគួរជ្រើស Mugnee សម្រាប់ LED Display នៅកម្ពុជា"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Clients choose Mugnee because we deliver engineering-accurate LED display projects with clear visuals, safe structures, and reliable after-sales support. From site survey to commissioning, we focus on performance, durability, and long-term value for Cambodia installations."
              : "អតិថិជនជ្រើស Mugnee ព្រោះយើងអនុវត្តគម្រោង LED Display ត្រឹមត្រូវតាមវិស្វកម្ម ជាមួយរូបភាពច្បាស់ រចនាសម្ព័ន្ធសុវត្ថិភាព និងសេវាកម្មបន្ទាប់ពីលក់ដែលទុកចិត្តបាន។ ចាប់ពី site survey ដល់ commissioning យើងផ្តោតលើប្រសិទ្ធភាព ភាពធន់ និងតម្លៃប្រើប្រាស់រយៈពេលវែង។"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
              [
                "Cambodia Local Delivery Team",
                "On-site survey, installation, commissioning, and rapid support for Phnom Penh and nationwide projects.",
              ],
              [
                "Engineering-First Design",
                "Pixel pitch, brightness, structure, and IP rating selected by real viewing distance and environment.",
              ],
              [
                "Reliable Hardware & Calibration",
                "Quality controllers, stable power design, clean cabling, and factory-grade calibration for clear visuals.",
              ],
              [
                "After-Sales & AMC Support",
                "Training, spare-parts plan, preventive maintenance, and AMC options for long-term stability.",
              ],
              ]
              : [
                  [
                    "ក្រុមដឹកជញ្ជូន និងដំឡើងក្នុងស្រុក",
                    "Site survey, installation, commissioning និងការគាំទ្រឆាប់រហ័ស សម្រាប់ភ្នំពេញ និងគម្រោងទូទាំងប្រទេស។",
                  ],
                  [
                    "ការរចនាដោយផ្អែកលើវិស្វកម្ម",
                    "ជ្រើស pixel pitch, brightness, structure និង IP rating តាមចម្ងាយមើល និងបរិស្ថានពិត។",
                  ],
                  [
                    "Hardware និង Calibration ដែលទុកចិត្តបាន",
                    "Controller គុណភាព ការរៀប power ស្ថេរភាព ខ្សែស្អាត និង calibration ស្តង់ដារ។",
                  ],
                  [
                    "After-Sales និង AMC Support",
                    "Training, គម្រោង spare parts, preventive maintenance និងជម្រើស AMC សម្រាប់ស្ថិរភាពយូរអង្វែង។",
                  ],
                ]
            ).map(([t, d]) => (
              <div
                key={String(t)}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {lang === "en" ? "Contact Mugnee Cambodia" : "ទំនាក់ទំនង Mugnee Cambodia"}
            </a>
            <a
              href="https://wa.me/855XXXXXXXXX"
              target="_blank"
              rel="noopener"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {lang === "en" ? "WhatsApp for Quotation" : "WhatsApp ស្នើសុំតម្លៃ"}
            </a>
          </div>
        </div>
      </section>

      {/* AUTHORIZED DISTRIBUTOR */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {lang === "en" ? "Partners" : "ដៃគូ"}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Authorized Distributor & Certified Engineering Partner"
              : "អ្នកចែកចាយផ្លូវការ និងដៃគូវិស្វកម្មដែលមានវិញ្ញាបនបត្រ"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Mugnee Cambodia supplies world-leading LED components and control systems with certified engineering support, quality assurance, and Cambodia-based service for long-term performance."
              : "Mugnee Cambodia ផ្គត់ផ្គង់គ្រឿងផ្សំ LED និងប្រព័ន្ធគ្រប់គ្រងដែលមានគុណភាពខ្ពស់ ជាមួយការគាំទ្រវិស្វកម្មដែលមានវិញ្ញាបនបត្រ ការធានាគុណភាព និងសេវាកម្មក្នុងស្រុកសម្រាប់ដំណើរការយូរអង្វែង។"}
          </p>

          <div className="mt-6 relative overflow-hidden rounded-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

            <div className="home-partner-marquee-track flex w-max gap-3 py-1">
              {[
                { label: "Mean Well", src: "/images/partners/meanwell.png" },
                { label: "G-energy", src: "/images/partners/g-energy.png" },
                { label: "Lampro", src: "/images/partners/lampro.svg" },
                { label: "NovaStar", src: "/images/partners/novastar.png" },
                { label: "Huidu", src: "/images/partners/huidu.png" },
                { label: "NationStar", src: "/images/partners/nationstar.jpg" },
                { label: "Colorlight", src: "/images/partners/colorlight.png" },
                { label: "Mean Well", src: "/images/partners/meanwell.png" },
                { label: "G-energy", src: "/images/partners/g-energy.png" },
                { label: "Lampro", src: "/images/partners/lampro.svg" },
                { label: "NovaStar", src: "/images/partners/novastar.png" },
                { label: "Huidu", src: "/images/partners/huidu.png" },
                { label: "NationStar", src: "/images/partners/nationstar.jpg" },
                { label: "Colorlight", src: "/images/partners/colorlight.png" },
              ].map((logo, idx) => (
                <div
                  key={`${logo.label}-${idx}`}
                  className="flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-slate-100/60 px-4 sm:w-44 lg:w-48"
                >
                  <Image
                    src={logo.src}
                    alt={logo.label}
                    width={180}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
            {(lang === "en"
              ? [
                  "ISO Certified Organization",
                  "ABC Certified Engineers",
                  "Industry Track-Lead",
                  "24/7 Customer Support",
                  "On-site Service",
                ]
              : [
                  "អង្គភាពទទួលស្គាល់ ISO",
                  "វិស្វករដែលមានវិញ្ញាបនបត្រ ABC",
                  "ភាពជាអ្នកនាំមុខក្នុងឧស្សាហកម្ម",
                  "ការគាំទ្រអតិថិជន 24/7",
                  "សេវាកម្ម On-site",
                ]
            ).map((x) => (
              <span
                key={x}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {lang === "en" ? "Service area" : "តំបន់សេវាកម្ម"}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en" ? "Service Areas Across Cambodia" : "តំបន់សេវាកម្មទូទាំងកម្ពុជា"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Local installation, commissioning and after-sales support across Phnom Penh, Siem Reap, Sihanoukville and nearby provinces."
              : "សេវាដំឡើង commissioning និងការគាំទ្របន្ទាប់ពីលក់ ក្នុងភ្នំពេញ សៀមរាប ព្រះសីហនុ និងខេត្តជិតខាង។"}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
            {[
              "Phnom Penh",
              "Siem Reap",
              "Sihanoukville",
              "Battambang",
              "Kampong Cham",
              "Kampot",
              "Koh Kong",
              "Banteay Meanchey",
            ].map((x) => (
              <span
                key={x}
                className="rounded-full border border-slate-200 bg-white px-3 py-1"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / ENTITY SIGNALS */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            {lang === "en" ? "Trust Signals" : "សញ្ញានៃភាពទុកចិត្ត"}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {(lang === "en" ? trustTitleOverride : (trustTitleOverrideKm ?? trustTitleOverride)) ??
              (lang === "en"
                ? "Trusted LED Display Partner in Cambodia: Entity, Service & Delivery Signals"
                : "ដៃគូ LED Display ដែលគួរឱ្យទុកចិត្តនៅកម្ពុជា៖ Entity, Service និង Delivery Signals")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {(lang === "en" ? trustDescOverride : (trustDescOverrideKm ?? trustDescOverride)) ??
              (lang === "en"
                ? "This section highlights why Mugnee Cambodia is trusted for indoor LED display, outdoor LED billboards, and LED video wall projects in Cambodia, with verified entity signals, local execution capability, and long-term service continuity."
                : "ផ្នែកនេះបង្ហាញមូលហេតុដែល Mugnee Cambodia ត្រូវបានទុកចិត្តសម្រាប់គម្រោង indoor LED, outdoor billboard និង LED video wall នៅកម្ពុជា ដោយមាន entity signal ច្បាស់ ការអនុវត្តក្នុងស្រុក និងសេវាកម្មបន្តរយៈពេលវែង។")}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {trustProofChips.map((chip, index) => (
              <span
                key={`${chip}-${index}`}
                className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm"
              >
                <div className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-[11px] font-bold text-sky-700">
                  {index + 1}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href="/about"
              className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 no-underline hover:border-slate-400 hover:text-slate-900 hover:no-underline"
            >
              {lang === "en" ? "About Mugnee Cambodia" : "អំពី Mugnee Cambodia"}
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 no-underline hover:border-slate-400 hover:text-slate-900 hover:no-underline"
            >
              {lang === "en" ? "View Project References" : "មើលគម្រោងយោង"}
            </Link>
            <Link
              href="/service"
              className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 no-underline hover:border-slate-400 hover:text-slate-900 hover:no-underline"
            >
              {lang === "en" ? "Installation & Service Support" : "សេវាដំឡើង និងគាំទ្របច្ចេកទេស"}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINK CLUSTER */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {(lang === "en" ? internalLinkTitleOverride : (internalLinkTitleOverrideKm ?? internalLinkTitleOverride)) ??
              (lang === "en"
                ? "Related LED Resources & Buying Paths in Cambodia"
                : "ធនធាន LED ពាក់ព័ន្ធ និងផ្លូវសម្រេចចិត្តទិញនៅកម្ពុជា")}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {(lang === "en" ? internalLinkDescOverride : (internalLinkDescOverrideKm ?? internalLinkDescOverride)) ??
              (lang === "en"
                ? "Use this internal cluster to navigate by buying intent: product type, technical component, installation support, or direct quotation."
                : "ប្រើ internal cluster នេះ ដើម្បីរុករកតាមគោលបំណងទិញ៖ ប្រភេទផលិតផល ផ្នែកបច្ចេកទេស ការគាំទ្រការដំឡើង ឬស្នើសុំតម្លៃដោយផ្ទាល់។")}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {internalLinks.map((item, index) => (
              <Link
                key={`${item.href}-${item.title}-${index}`}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 hover:no-underline"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en" ? "Frequently Asked Question (FAQ)" : "សំណួរដែលសួរញឹកញាប់ (FAQ)"}
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {faqItems.map(({ q, a }, index) => (
              <details
                key={`${q}-${index}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                  {q}
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}


