"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLang } from "../layout/LanguageProvider";
import ProductGrid from "../sections/ProductGrid";

type Tile = {
  key: string;
  titleEn: string;
  titleKm: string;
  descEn: string;
  descKm: string;
  href: string;
  icon: React.ReactNode;
};

type Solution = {
  key: string;
  titleEn: string;
  titleKm: string;
  pointsEn: string[];
  pointsKm: string[];
  href: string;
};

type QuickLink = {
  labelEn: string;
  labelKm: string;
  href: string;
};

type Faq = {
  qEn: string;
  aEn: string;
  qKm: string;
  aKm: string;
};

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}


function SectionTitle({
  eyebrow,
  title,
  desc,
  descClassName,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  descClassName?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="text-base font-semibold tracking-wide text-slate-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p
          className={[
            "mt-3 max-w-3xl text-lg leading-relaxed text-slate-600",
            descClassName || "",
          ].join(" ")}
        >
          {desc}
        </p>
      ) : null}
    </div>
  );
}

export default function HomeClient({
  siteUrl,
  cities,
  categoryTiles,
  solutions,
  quickLinks,
  faq,
}: {
  siteUrl: string;
  cities: string[];
  categoryTiles: Tile[];
  solutions: Solution[];
  quickLinks: QuickLink[];
  faq: Faq[];
}) {
  const { lang } = useLang();

  const t = useMemo(() => {
    const en = {
      badge: "Cambodia • LED Display • Digital Signage • Smart Solutions",
      heroTitle: "LED Display & Smart Systems in Cambodia",
      heroDesc:
        "MUGNEE Multiple delivers LED display, digital signage, interactive flat panels (smart boards), turnstile gates, PA systems and access control in Cambodia—plus site survey, installation, commissioning and local after-sales support for reliable, long-term performance.",
      pill1: "Project-based quotation",
      pill2: "Installation & commissioning",
      pill3: "Warranty & maintenance options",
      ctaQuote: "Get Quotation",
      ctaExplore: "Explore Solutions",
      serving: `Serving: ${cities.join(" • ")}`,
      trust1t: "Local Support",
      trust1d: "Cambodia-based installation & after-sales assistance.",
      trust2t: "Built for Reliability",
      trust2d: "Stable performance, clear visuals and long service life.",
      trust3t: "Fast Deployment",
      trust3d: "Structured workflow for quick delivery & commissioning.",

      secProductsEyebrow: "What we deliver",
      secProductsTitle: "LED Display, Digital Signage & Smart Systems in Cambodia",
      secProductsDesc:
        "Choose a category to explore technical details, use-cases and buyer-ready guidance. We focus on stable performance, clean installation and long-term support.",
      viewDetails: "View details",
      priceGuideLine1: "Need pricing guidance? Start with our",
      priceGuideLink: "Cambodia Price Guides",
      priceGuideLine2: "and request a project-based quotation.",
      secCatalogEyebrow: "Popular Products",
      secCatalogTitle: "Cambodia LED Display, Digital Signage & Smart Systems Products",
      secCatalogDesc:
        "Browse Cambodia-focused LED display, digital signage, PA system, access control and smart classroom products—built for local projects, budgets and site conditions.",
      secPartnersEyebrow: "Partnerships",
      secPartnersTitle: "Empowered by International Development Partnerships",
      secPartnersDesc:
        "We have delivered LED display, digital signage and smart technology solutions under projects supported by internationally recognized organizations such as The World Bank, JICA, Swisscontact, GIZ and Mitsubishi—meeting institutional standards with reliable execution.",

      secSolutionsEyebrow: "Industry solutions",
      secSolutionsTitle: "Industry Solutions for Cambodia: LED, Signage & Smart Systems",
      secSolutionsDesc:
        "SEO-friendly solutions for Cambodia projects—LED display, digital signage, smart classroom, access control and PA systems with local installation and support.",
      exploreSolution: "Explore solution",

      secAuthEyebrow: "Partners",
      secAuthTitle: "Authorized Distributor & Certified Engineering Partner",
      secAuthDesc:
        "Mugnee Cambodia supplies world‑leading LED components and control systems with certified engineering support, quality assurance and Cambodia‑based service.",

      secIndustryEyebrow: "Use cases",
      secIndustryTitle: "Product Use‑Cases by Industry in Cambodia",
      secIndustryDesc:
        "Industry‑specific LED display, digital signage and smart system use‑cases designed for Cambodia’s retail, education, government and factory projects.",
      secSpecsEyebrow: "Tech snapshot",
      secSpecsTitle: "LED Display Technical Specifications Guide Cambodia",
      secSpecsDesc:
        "Quick technical highlights buyers compare most—pixel pitch, brightness, IP rating, refresh rate and control system options.",
      secServiceEyebrow: "Service area",
      secServiceTitle: "Service Areas Across Cambodia",
      secServiceDesc:
        "Local installation, commissioning and after‑sales support across Phnom Penh, Siem Reap, Sihanoukville and nearby provinces.",
      secTestimonialsEyebrow: "Trust",
      secTestimonialsTitle: "Customer Testimonials & Client References",
      secTestimonialsDesc:
        "Local buyer feedback and project references that highlight reliability, image quality and service response.",
      secContactEyebrow: "Local support",
      secContactTitle: "Cambodia Office & Project Support",
      secContactDesc:
        "Talk to a local engineer for site survey, sizing, pixel pitch guidance and a project‑based quotation.",

      secQuickEyebrow: "Popular in Cambodia",
      secQuickTitle: "Quick Access to Key Product Categories",
      secQuickDesc:
        "Buyer-friendly pages with specs, use-cases and practical guidance. For exact pricing, request a project-based quotation.",
      box1t: "LED Display Planning",
      box1d:
        "We help choose pixel pitch (e.g., P2.5 / P3 / P4 / P5) based on viewing distance, space and content.",
      box2t: "Clean Installation",
      box2d:
        "Structured workflow for mounting, cabling, control setup and commissioning—built for long-term stability.",
      box3t: "After-Sales Support",
      box3d:
        "Warranty support and maintenance options to reduce downtime and protect your investment.",

      secProjectsEyebrow: "Trust & proof",
      secProjectsTitle: "Projects & Installations in Cambodia",
      secProjectsDesc:
        "Case studies build credibility. Add real photos, locations and scope to win high-intent buyers.",
      viewProjects: "View projects",
      bannerTitle: "Want a fast quotation?",
      bannerDesc:
        "Share your size, location, usage type and timeline. We will suggest a practical configuration and budget range.",

      secFaqEyebrow: "FAQs",
      secFaqTitle: "Common Questions from Cambodia Buyers",
      secFaqDesc: "Short, clear answers to help customers make confident decisions.",
      tip:
        "Tip: Replace placeholder phone/address with your Cambodia office details for stronger local SEO.",
    };

    const km = {
      badge: "កម្ពុជា • អេក្រង់ LED • ផ្ទាំងបង្ហាញឌីជីថល • ដំណោះស្រាយ Smart",
      heroTitle: "ដំណោះស្រាយអេក្រង់ LED និង Smart Systems នៅកម្ពុជា",
      heroDesc:
        "យើងផ្តល់អេក្រង់ LED, Digital Signage, អេក្រង់អន្តរកម្ម (Smart Board), Turnstile Gate, ប្រព័ន្ធ PA និង Access Control — រួមទាំងស្ទង់ទីតាំង ដំឡើង Commissioning និង after-sales support ក្នុងកម្ពុជា។",
      pill1: "តម្លៃតាមគម្រោង",
      pill2: "ដំឡើង & Commissioning",
      pill3: "ធានា & ជម្រើសថែទាំ",
      ctaQuote: "ស្នើសុំតម្លៃ",
      ctaExplore: "មើលដំណោះស្រាយ",
      serving: `សេវាកម្ម៖ ${cities.join(" • ")}`,
      trust1t: "គាំទ្រក្នុងប្រទេស",
      trust1d: "ដំឡើង និង after-sales support នៅកម្ពុជា។",
      trust2t: "ភាពទុកចិត្តបាន",
      trust2d: "ដំណើរការមានស្ថេរភាព រូបភាពច្បាស់ និងអាយុកាលយូរ។",
      trust3t: "ដំណើរការលឿន",
      trust3d: "Workflow មានរចនាសម្ព័ន្ធ សម្រាប់ delivery & commissioning លឿន។",

      secProductsEyebrow: "អ្វីដែលយើងផ្តល់",
      secProductsTitle: "ផលិតផល និងដំណោះស្រាយសម្រាប់គម្រោងនៅកម្ពុជា",
      secProductsDesc:
        "ជ្រើសរើសប្រភេទដើម្បីមើលព័ត៌មានបច្ចេកទេស Use-case និងការណែនាំសម្រាប់អ្នកទិញ។ យើងផ្តោតលើស្ថេរភាព ការដំឡើងស្អាត និងការគាំទ្ររយៈពេលវែង។",
      viewDetails: "មើលព័ត៌មាន",
      priceGuideLine1: "ចង់បានការណែនាំតម្លៃ? ចាប់ផ្តើមពី",
      priceGuideLink: "Price Guide កម្ពុជា",
      priceGuideLine2: "ហើយស្នើសុំតម្លៃតាមគម្រោង។",
      secCatalogEyebrow: "Popular Products",
      secCatalogTitle: "Cambodia LED Display, Digital Signage & Smart Systems Products",
      secCatalogDesc:
        "Browse Cambodia-focused LED display, digital signage, PA system, access control and smart classroom products—built for local projects, budgets and site conditions.",
      secPartnersEyebrow: "Partnerships",
      secPartnersTitle: "Empowered by International Development Partnerships",
      secPartnersDesc:
        "យើងបានផ្គត់ផ្គង់ដំណោះស្រាយ LED display, digital signage និង smart technology ក្នុងគម្រោងដែលមានការគាំទ្រពីអង្គការអន្តរជាតិសំខាន់ៗ ដូចជា The World Bank, JICA, Swisscontact, GIZ និង Mitsubishi។",

      secSolutionsEyebrow: "ដំណោះស្រាយតាមឧស្សាហកម្ម",
      secSolutionsTitle: "ដំណោះស្រាយឧស្សាហកម្មនៅកម្ពុជា៖ LED, Signage និង Smart Systems",
      secSolutionsDesc:
        "ដំណោះស្រាយសម្រាប់គម្រោងនៅកម្ពុជា—LED display, digital signage, smart classroom, access control និង PA system ជាមួយការដំឡើង និងការគាំទ្រ។",
      exploreSolution: "មើលដំណោះស្រាយ",

      secAuthEyebrow: "Partners",
      secAuthTitle: "Authorized Distributor & Certified Engineering Partner",
      secAuthDesc:
        "Mugnee Cambodia ផ្គត់ផ្គង់ LED components និង control system កម្រិតអន្តរជាតិ ជាមួយវិស្វករដែលបានបញ្ជាក់ និងសេវាកម្មនៅកម្ពុជា។",

      secIndustryEyebrow: "Use cases",
      secIndustryTitle: "ការប្រើប្រាស់ផលិតផលតាមឧស្សាហកម្មនៅកម្ពុជា",
      secIndustryDesc:
        "Use‑case សម្រាប់ LED display, digital signage និង smart systems សមស្របតាមវិស័យនៅកម្ពុជា។",
      secSpecsEyebrow: "Tech snapshot",
      secSpecsTitle: "សេចក្តីណែនាំលក្ខណៈបច្ចេកទេសអេក្រង់ LED នៅកម្ពុជា",
      secSpecsDesc:
        "ពិនិត្យលក្ខណៈសំខាន់ៗដែលអ្នកទិញប្រៀបធៀបញឹកញាប់—pixel pitch, brightness, IP rating និង control system។",
      secServiceEyebrow: "Service area",
      secServiceTitle: "តំបន់សេវាកម្មទូទាំងកម្ពុជា",
      secServiceDesc:
        "សេវាដំឡើង និង after‑sales support នៅ Phnom Penh, Siem Reap, Sihanoukville និងខេត្តជិតខាង។",
      secTestimonialsEyebrow: "Trust",
      secTestimonialsTitle: "មតិអតិថិជន និងគម្រោងយោង",
      secTestimonialsDesc:
        "បទពិសោធន៍អតិថិជនក្នុងស្រុកដែលបង្ហាញពីគុណភាព និងការគាំទ្រ។",
      secContactEyebrow: "Local support",
      secContactTitle: "ការិយាល័យកម្ពុជា & សេវាគម្រោង",
      secContactDesc:
        "សូមទាក់ទងវិស្វករនៅក្នុងស្រុកសម្រាប់ site survey, sizing, pixel pitch guidance និង quotation។",

      secQuickEyebrow: "ពេញនិយមនៅកម្ពុជា",
      secQuickTitle: "ចូលរហ័សទៅកាន់ប្រភេទផលិតផលសំខាន់ៗ",
      secQuickDesc:
        "ទំព័រងាយស្រួលសម្រាប់អ្នកទិញ៖ specs, use-case និងការណែនាំ។ សម្រាប់តម្លៃពិត សូមស្នើសុំតម្លៃតាមគម្រោង។",
      box1t: "ការរៀបចំ LED Display",
      box1d:
        "យើងជួយជ្រើស pixel pitch (ឧ. P2.5 / P3 / P4 / P5) តាមចម្ងាយមើល ទំហំ និងប្រភេទ content។",
      box2t: "ការដំឡើងស្អាត",
      box2d:
        "Workflow រឹងមាំសម្រាប់ mounting, cabling, control setup និង commissioning—សម្រាប់ស្ថេរភាពរយៈពេលវែង។",
      box3t: "After-sales support",
      box3d:
        "ជម្រើសធានា និងថែទាំ ដើម្បីកាត់បន្ថយ downtime និងការពារវិនិយោគរបស់អ្នក។",

      secProjectsEyebrow: "ភាពទុកចិត្ត",
      secProjectsTitle: "គម្រោង និងការដំឡើងនៅកម្ពុជា",
      secProjectsDesc:
        "Case study ជួយបង្កើនភាពទុកចិត្ត។ បន្ថែមរូបភាពពិត ទីតាំង និង scope ដើម្បីឈ្នះអ្នកទិញ high-intent។",
      viewProjects: "មើលគម្រោង",
      bannerTitle: "ចង់បានតម្លៃរហ័ស?",
      bannerDesc:
        "ចែករំលែកទំហំ ទីតាំង ប្រភេទប្រើប្រាស់ និង timeline។ យើងនឹងណែនាំ configuration និង budget range តាមអនុវត្ត។",

      secFaqEyebrow: "សំណួរញឹកញាប់",
      secFaqTitle: "សំណួរដែលអតិថិជននៅកម្ពុជាសួរញឹកញាប់",
      secFaqDesc: "ចម្លើយខ្លី និងច្បាស់ ដើម្បីជួយសម្រេចចិត្តបានដោយទំនុកចិត្ត។",
      tip:
        "សម្គាល់៖ សូមប្ដូរទូរស័ព្ទ/អាសយដ្ឋាន placeholder ជាទិន្នន័យការិយាល័យកម្ពុជា ដើម្បី Local SEO កាន់តែខ្លាំង។",
    };

    return lang === "en" ? en : km;
  }, [lang, cities]);

  const quickCards = useMemo(() => {
    const en = [
      {
        title: "Indoor LED Display",
        desc: "Meeting rooms, showrooms & indoor LED walls",
        href: "/led-display/indoor-led-display",
        tone: "from-sky-50 to-sky-100 border-sky-200",
      },
      {
        title: "Outdoor LED Display",
        desc: "Billboard, roadside & rooftop LED screens",
        href: "/led-display/outdoor-led-display",
        tone: "from-emerald-50 to-emerald-100 border-emerald-200",
      },
      {
        title: "Digital Signage",
        desc: "Retail, mall & commercial signage systems",
        href: "/solutions/digital-signage-cambodia",
        tone: "from-amber-50 to-amber-100 border-amber-200",
      },
      {
        title: "Interactive Flat Panel",
        desc: "Smart classroom & meeting display",
        href: "/products/interactive-flat-panel",
        tone: "from-violet-50 to-violet-100 border-violet-200",
      },
      {
        title: "PA / Sound System",
        desc: "Speakers, amplifier & microphone",
        href: "/products/pa-system",
        tone: "from-rose-50 to-rose-100 border-rose-200",
      },
      {
        title: "Turnstile Gate System",
        desc: "Face & RFID access control",
        href: "/products/turnstile-gate",
        tone: "from-slate-50 to-slate-100 border-slate-200",
      },
    ];

    const km = [
      {
        title: "Indoor LED Display",
        desc: "បន្ទប់ប្រជុំ • Showroom • LED ខាងក្នុង",
        href: "/led-display/indoor-led-display",
        tone: "from-sky-50 to-sky-100 border-sky-200",
      },
      {
        title: "Outdoor LED Display",
        desc: "Billboard • ផ្លូវធំ • Rooftop LED",
        href: "/led-display/outdoor-led-display",
        tone: "from-emerald-50 to-emerald-100 border-emerald-200",
      },
      {
        title: "Digital Signage",
        desc: "Retail • Mall • ពាណិជ្ជកម្ម",
        href: "/solutions/digital-signage-cambodia",
        tone: "from-amber-50 to-amber-100 border-amber-200",
      },
      {
        title: "Interactive Flat Panel",
        desc: "Smart classroom & meeting display",
        href: "/products/interactive-flat-panel",
        tone: "from-violet-50 to-violet-100 border-violet-200",
      },
      {
        title: "PA / Sound System",
        desc: "Speaker, amplifier & microphone",
        href: "/products/pa-system",
        tone: "from-rose-50 to-rose-100 border-rose-200",
      },
      {
        title: "Turnstile Gate System",
        desc: "Face & RFID access control",
        href: "/products/turnstile-gate",
        tone: "from-slate-50 to-slate-100 border-slate-200",
      },
    ];

    return lang === "en" ? en : km;
  }, [lang]);


  const projects = [
    {
      titleEn: "Retail LED Signage Deployment",
      titleKm: "ដំឡើង LED សម្រាប់ហាងលក់រាយ",
      metaEn: "Phnom Penh • Storefront LED",
      metaKm: "Phnom Penh • LED ហាងមុខ",
      href: "/projects",
    },
    {
      titleEn: "Conference Room LED Video Wall",
      titleKm: "Video Wall សម្រាប់បន្ទប់ប្រជុំ",
      metaEn: "Phnom Penh • Indoor LED",
      metaKm: "Phnom Penh • LED ក្នុងអគារ",
      href: "/projects",
    },
    {
      titleEn: "Turnstile + Access Control Integration",
      titleKm: "រួមបញ្ចូល Turnstile + Access Control",
      metaEn: "Office / Condo • Secure Entry",
      metaKm: "Office/Condo • ច្រកចូលសុវត្ថិភាព",
      href: "/projects",
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* =========================
    HERO (No extra container box)
   ========================= */}
<section className="relative overflow-hidden border-b border-slate-100">
  {/* Background */}
  <div className="absolute inset-0">
    {/* background image */}
    <div
      className="absolute inset-0 bg-[url('/images/hero/cambodia-led-hero.webp')] bg-cover bg-center"
      aria-hidden="true"
    />

    {/* ✅ Readability overlays (tuned) */}
    <div className="absolute inset-0 bg-slate-950/45" />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/45 to-slate-950/10" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />

    {/* subtle texture */}
    <div
      className="absolute inset-0 opacity-[0.10]"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,.35) 1px, transparent 0)",
        backgroundSize: "18px 18px",
      }}
    />
  </div>

  <Container>
    <div className="relative pt-10 pb-10 sm:pt-12 sm:pb-12">
      {/* ✅ badge (bg + animation) */}
      <p className="inline-flex items-center gap-2 rounded-full bg-black/45 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/25 backdrop-blur-[2px]">
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        {t.badge}
      </p>

      <div className="mt-5 max-w-3xl">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-5xl">
          {t.heroTitle}
        </h1>

        <p className="mt-3 text-base leading-relaxed text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-lg">
          {t.heroDesc}
        </p>

        {/* ✅ pills: bg + clearer text + subtle hover */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full bg-black/40 px-3 py-1 font-medium text-white ring-1 ring-white/20 backdrop-blur-[2px] transition hover:bg-black/55">
            {t.pill1}
          </span>
          <span className="rounded-full bg-black/40 px-3 py-1 font-medium text-white ring-1 ring-white/20 backdrop-blur-[2px] transition hover:bg-black/55">
            {t.pill2}
          </span>
          <span className="rounded-full bg-black/40 px-3 py-1 font-medium text-white ring-1 ring-white/20 backdrop-blur-[2px] transition hover:bg-black/55">
            {t.pill3}
          </span>
        </div>

        {/* ✅ CTAs: stronger contrast */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            {t.ctaQuote} <span className="ml-2">| ស្នើសុំតម្លៃ</span>
          </Link>

          <Link
            href="/solutions"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-black/45 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-[2px] transition hover:bg-black/60"
          >
            {t.ctaExplore}
          </Link>

          {/* ✅ serving line: add bg so it doesn't disappear */}
          <div className="inline-flex items-center whitespace-nowrap rounded-full bg-black/40 px-3 py-1 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur-[2px] sm:ml-3 lg:text-base">
            {t.serving}
          </div>
        </div>

        {/* ✅ trust blocks: keep same layout, just improve readability */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-black/35 p-5 ring-1 ring-white/15 backdrop-blur-[2px] transition hover:bg-black/45">
            <p className="text-sm font-semibold text-white lg:text-base">{t.trust1t}</p>
            <p className="mt-1 text-sm leading-relaxed text-white/90 lg:text-base">
              {t.trust1d}
            </p>
          </div>

          <div className="rounded-2xl bg-black/35 p-5 ring-1 ring-white/15 backdrop-blur-[2px] transition hover:bg-black/45">
            <p className="text-sm font-semibold text-white lg:text-base">{t.trust2t}</p>
            <p className="mt-1 text-sm leading-relaxed text-white/90 lg:text-base">
              {t.trust2d}
            </p>
          </div>

          <div className="rounded-2xl bg-black/35 p-5 ring-1 ring-white/15 backdrop-blur-[2px] transition hover:bg-black/45">
            <p className="text-sm font-semibold text-white lg:text-base">{t.trust3t}</p>
            <p className="mt-1 text-sm leading-relaxed text-white/90 lg:text-base">
              {t.trust3d}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>


      {/* =========================
          CATEGORY TILES
         ========================= */}
      <section className="py-14 sm:py-16">
        <Container>
          <SectionTitle
            eyebrow={t.secProductsEyebrow}
            title={t.secProductsTitle}
            desc={t.secProductsDesc}
            descClassName="max-w-none"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryTiles.map((c) => (
              <Link
                key={c.key}
                href={c.href}
                className="group rounded-xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/70 to-slate-100/60 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md no-underline hover:no-underline"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-lg ring-1 ring-slate-200">
                      {c.icon}
                    </div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {lang === "en" ? c.titleEn : c.titleKm}
                    </h3>
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {lang === "en" ? c.descEn : c.descKm}
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  {t.viewDetails} <span aria-hidden="true">→</span>
                </p>
              </Link>
            ))}
          </div>

        </Container>
      </section>

      {/* =========================
          PRODUCT RANGE
         ========================= */}
      <section className="border-t border-slate-100 bg-slate-50/70 py-12 sm:py-14">
        <Container>
          <SectionTitle
            eyebrow={t.secCatalogEyebrow}
            title={t.secCatalogTitle}
            desc={t.secCatalogDesc}
            descClassName="max-w-none"
          />

          <ProductGrid columns={3} pageSize={12} showPagination />
        </Container>
      </section>

      {/* =========================
          PARTNERSHIPS
         ========================= */}
      <section className="border-t border-slate-100 bg-white py-12 sm:py-14">
        <Container>
          <SectionTitle
            eyebrow={t.secPartnersEyebrow}
            title={t.secPartnersTitle}
            desc={t.secPartnersDesc}
            descClassName="max-w-none"
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "The World Bank", src: "/images/partners/world-bank.png" },
              { label: "JICA", src: "/images/partners/jica.png" },
              { label: "Swisscontact", src: "/images/partners/swisscontact.png" },
              { label: "GIZ", src: "/images/partners/giz.png" },
              { label: "Mitsubishi", src: "/images/partners/mitsubishi.png" },
            ].map((logo) => (
              <div
                key={logo.label}
                className="flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-slate-100/60"
              >
                <img
                  src={logo.src}
                  alt={logo.label}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================
          SOLUTIONS
         ========================= */}
      <section className="border-t border-slate-100 bg-white py-14 sm:py-16">
        <Container>
          <SectionTitle
            eyebrow={t.secSolutionsEyebrow}
            title={t.secSolutionsTitle}
            desc={t.secSolutionsDesc}
            descClassName="max-w-none"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {solutions.map((s) => (
              <Link
                key={s.key}
                href={s.href}
                className="group rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/70 to-slate-100/60 p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md no-underline hover:no-underline"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {lang === "en" ? s.titleEn : s.titleKm}
                </h3>

                <ul className="mt-4 space-y-3 text-base text-slate-700">
                  {(lang === "en" ? s.pointsEn : s.pointsKm).map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-[3px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-sm text-white">
                        ✓
                      </span>
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-base font-semibold text-slate-900">
                  {t.exploreSolution} <span aria-hidden="true">→</span>
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================
          AUTHORIZED PARTNER
         ========================= */}
      <section className="border-t border-slate-100 bg-white py-12 sm:py-14">
        <Container>
          <SectionTitle
            eyebrow={t.secAuthEyebrow}
            title={t.secAuthTitle}
            desc={t.secAuthDesc}
            descClassName="max-w-none"
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {[
              { label: "Mean Well", src: "/images/partners/meanwell.png" },
              { label: "G-energy", src: "/images/partners/g-energy.png" },
              { label: "Lampro", src: "/images/partners/lampro.png" },
              { label: "NovaStar", src: "/images/partners/novastar.png" },
              { label: "Huidu", src: "/images/partners/huidu.png" },
              { label: "NationStar", src: "/images/partners/nationstar.png" },
              { label: "Colorlight", src: "/images/partners/colorlight.png" },
            ].map((logo) => (
              <div
                key={logo.label}
                className="flex h-16 items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-slate-100/60"
              >
                <img
                  src={logo.src}
                  alt={logo.label}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
            {[
              "ISO Certified Organization",
              "ABC Certified Engineers",
              "Industry Track‑Lead",
              "24/7 Customer Support",
              "On‑site Service",
            ].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2"
              >
                {badge}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================
          USE-CASES BY INDUSTRY
         ========================= */}
      <section className="border-t border-slate-100 bg-white py-12 sm:py-14">
        <Container>
          <SectionTitle
            eyebrow={t.secIndustryEyebrow}
            title={t.secIndustryTitle}
            desc={t.secIndustryDesc}
            descClassName="max-w-none"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                tEn: "Retail & Mall",
                tKm: "ហាងលក់រាយ និងផ្សារ",
                dEn:
                  "LED video walls and digital signage to drive promotions and foot traffic.",
                dKm: "LED video wall និង digital signage សម្រាប់ប្រូម៉ូសិន។",
              },
              {
                tEn: "Education",
                tKm: "ការអប់រំ",
                dEn:
                  "Interactive smart boards for classrooms, training rooms and auditoriums.",
                dKm: "Smart board សម្រាប់ថ្នាក់រៀន និងបន្ទប់បណ្តុះបណ្តាល។",
              },
              {
                tEn: "Corporate & Office",
                tKm: "ការិយាល័យ និងក្រុមហ៊ុន",
                dEn:
                  "Boardroom LED displays, lobby signage and meeting room AV.",
                dKm: "LED សម្រាប់បន្ទប់ប្រជុំ និងផ្ទាំងបង្ហាញ lobbies។",
              },
              {
                tEn: "Factory & Industrial",
                tKm: "រោងចក្រ និងឧស្សាហកម្ម",
                dEn:
                  "PA systems, safety displays and production status boards.",
                dKm: "PA system និងផ្ទាំងបង្ហាញសុវត្ថិភាព។",
              },
              {
                tEn: "Hospitality",
                tKm: "សណ្ឋាគារ និងសេវាកម្ម",
                dEn:
                  "Welcome screens, menu boards and event displays for hotels.",
                dKm: "Welcome screen និង menu board សម្រាប់សណ្ឋាគារ។",
              },
              {
                tEn: "Government & Public",
                tKm: "រដ្ឋាភិបាល និងសេវាសាធារណៈ",
                dEn:
                  "Public information displays and secure access control.",
                dKm: "ផ្ទាំងព័ត៌មានសាធារណៈ និង access control។",
              },
            ].map((item) => (
              <div
                key={item.tEn}
                className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-slate-100/60 p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {lang === "en" ? item.tEn : item.tKm}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {lang === "en" ? item.dEn : item.dKm}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================
          TECH SPECS SNAPSHOT
         ========================= */}
      <section className="border-t border-slate-100 bg-slate-50 py-12 sm:py-14">
        <Container>
          <SectionTitle
            eyebrow={t.secSpecsEyebrow}
            title={t.secSpecsTitle}
            desc={t.secSpecsDesc}
            descClassName="max-w-none"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                tEn: "Pixel Pitch Range",
                tKm: "ជួរ Pixel Pitch",
                dEn: "P1.25 – P10 (project‑based selection)",
                dKm: "P1.25 – P10 (ជ្រើសតាមគម្រោង)",
              },
              {
                tEn: "Brightness",
                tKm: "Brightness",
                dEn: "Indoor 800–1200 nits / Outdoor 5500–8000 nits",
                dKm: "Indoor 800–1200 nits / Outdoor 5500–8000 nits",
              },
              {
                tEn: "Protection",
                tKm: "ការការពារ",
                dEn: "Outdoor IP65 front protection",
                dKm: "IP65 សម្រាប់ខាងក្រៅ (ផ្នែកមុខ)",
              },
              {
                tEn: "Control Systems",
                tKm: "Control Systems",
                dEn: "NovaStar / Colorlight / Huidu",
                dKm: "NovaStar / Colorlight / Huidu",
              },
            ].map((spec) => (
              <div
                key={spec.tEn}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {lang === "en" ? spec.tEn : spec.tKm}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {lang === "en" ? spec.dEn : spec.dKm}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================
          SERVICE AREAS
         ========================= */}
      <section className="border-t border-slate-100 bg-white py-12 sm:py-14">
        <Container>
          <SectionTitle
            eyebrow={t.secServiceEyebrow}
            title={t.secServiceTitle}
            desc={t.secServiceDesc}
            descClassName="max-w-none"
          />

          <div className="flex flex-wrap gap-2 text-sm font-semibold text-slate-700">
            {[
              "Phnom Penh",
              "Siem Reap",
              "Sihanoukville",
              "Battambang",
              "Kampong Cham",
              "Kampot",
              "Koh Kong",
              "Banteay Meanchey",
            ].map((city) => (
              <a
                key={city}
                href="/products"
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 no-underline hover:border-slate-300"
              >
                {city}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================
          LOCAL CONTACT
         ========================= */}
      <section className="border-t border-slate-100 bg-white py-12 sm:py-14">
        <Container>
          <SectionTitle
            eyebrow={t.secContactEyebrow}
            title={t.secContactTitle}
            desc={t.secContactDesc}
            descClassName="max-w-none"
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm text-slate-600">
                  {lang === "en"
                    ? "Share your location, screen size and use‑case. We’ll recommend a practical configuration and quotation."
                    : "សូមចែករំលែកទីតាំង ទំហំអេក្រង់ និងប្រភេទប្រើប្រាស់ ដើម្បីយើងណែនាំ configuration និង quotation។"}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(15,23,42,0.45)]"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-sm">
                      →
                    </span>
                    {lang === "en" ? "Request a Quotation" : "ស្នើសុំតម្លៃ"}
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-700">
                      ☎
                    </span>
                    {lang === "en" ? "Contact Cambodia Office" : "ទាក់ទងការិយាល័យកម្ពុជា"}
                  </a>
                </div>
              </div>

              <div className="text-sm text-slate-600">
                <p className="font-semibold text-slate-900">
                  {lang === "en" ? "Office (Cambodia)" : "ការិយាល័យ (កម្ពុជា)"}
                </p>
                <p className="mt-2">
                  {lang === "en"
                    ? "1st Floor, 11E0, Street 108, Night Market Area, Doun Penh, Phnom Penh, Cambodia"
                    : "ជាន់ទី១, 11E0, ផ្លូវ 108, តំបន់ Night Market, Doun Penh, Phnom Penh, Cambodia"}
                </p>
                <p className="mt-2">
                  {lang === "en" ? "Phone: +855 XXX XXX XXX" : "ទូរស័ព្ទ៖ +855 XXX XXX XXX"}
                </p>
                <p className="mt-2">
                  {lang === "en"
                    ? "Hours: Mon–Sat, 8:30am–6:00pm"
                    : "ម៉ោង៖ ចន្ទ–សៅរ៍ 8:30am–6:00pm"}
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Mugnee Cambodia Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.3322027815047!2d104.92304627050727!3d11.573972618867787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e6231c345b%3A0xebf28967942f76b6!2sMugnee%20Multiple%20Co.%2C%20Ltd!5e1!3m2!1sen!2sbd!4v1770445691312!5m2!1sen!2sbd"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================
          FAQ
         ========================= */}
      <section className="border-t border-slate-100 bg-white py-14 sm:py-16">
        <Container>
          <SectionTitle
            eyebrow={t.secFaqEyebrow}
            title={t.secFaqTitle}
            desc={t.secFaqDesc}
          />

          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faq.map((f) => (
              <details key={f.qEn} className="group p-6">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  <span className="mr-2 inline-block rounded-full bg-slate-900 px-2.5 py-1 text-xs text-white">
                    Q
                  </span>
                  {lang === "en" ? f.qEn : f.qKm}
                </summary>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  {lang === "en" ? f.aEn : f.aKm}
                </p>
              </details>
            ))}
          </div>

        </Container>
      </section>

      {/* footer spacer */}
      <div className="h-10" />
    </div>
  );
}
