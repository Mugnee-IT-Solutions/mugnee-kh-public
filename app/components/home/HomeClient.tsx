"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
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

type Faq = {
  qEn: string;
  aEn: string;
  qKm: string;
  aKm: string;
};

const MOJIBAKE_RE = /Ã|Â|â|ƒ|\uFFFD|áž|áŸ|â€|\uFFFD/;

function decodeLatin1AsUtf8(str: string) {
  const bytes = Uint8Array.from(Array.from(str).map((ch) => ch.charCodeAt(0) & 0xff));
  return new TextDecoder("utf-8").decode(bytes);
}

function repairMojibake(input: string) {
  let out = input;
  for (let i = 0; i < 3; i += 1) {
    if (!MOJIBAKE_RE.test(out)) break;
    try {
      const decoded = decodeLatin1AsUtf8(out);
      if (!decoded || decoded === out) break;
      out = decoded;
    } catch {
      break;
    }
  }
  return out;
}

function sanitizeKhmer(value: string, fallback: string) {
  if (!value?.trim()) return fallback;
  if (!MOJIBAKE_RE.test(value)) return value;
  const repaired = repairMojibake(value).trim();
  if (!repaired || MOJIBAKE_RE.test(repaired)) return fallback;
  return repaired;
}

function sanitizeLocaleText<T extends Record<string, string>>(km: T, en: T): T {
  const out = {} as T;
  (Object.keys(en) as (keyof T)[]).forEach((key) => {
    out[key] = sanitizeKhmer(km[key], en[key]) as T[keyof T];
  });
  return out;
}

const HERO_SLIDES = [
  {
    src: "/images/hero/cambodia-led-hero.webp",
    alt: "Cambodia LED display and smart systems solution",
  },
  {
    src: "/images/hero/cambodia-led-billboard-advertising.webp",
    alt: "Outdoor LED billboard advertising solution in Cambodia",
  },
  {
    src: "/images/hero/cambodia-indoor-led-video-wall-retail.webp",
    alt: "Indoor LED video wall display solution for Cambodia retail spaces",
  },
  {
    src: "/images/hero/cambodia-smart-classroom-interactive-flat-panel.webp",
    alt: "Smart classroom interactive flat panel solution in Cambodia",
  },
  {
    src: "/images/hero/cambodia-access-control-turnstile-pa-system.webp",
    alt: "Turnstile access control and PA system solution in Cambodia",
  },
];

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
  cities,
  categoryTiles,
  solutions,
  faq,
}: {
  cities: string[];
  categoryTiles: Tile[];
  solutions: Solution[];
  faq: Faq[];
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (isCarouselPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isCarouselPaused]);

  const { lang } = useLang();

  const t = useMemo(() => {
    const en = {
      badge: "Cambodia • LED Display • Digital Signage • Smart Solutions",
      heroTitle: "Smart Technology Solutions in Cambodia",
      heroDesc:
        "Mugnee Multiple delivers LED display, digital signage, interactive flat panels (smart boards), turnstile gates, PA systems, and access control in Cambodia—plus site survey, installation, commissioning, and local after-sales support for reliable, long-term performance.",
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
        "Browse Cambodia-focused LED display, digital signage, PA system, access control and smart classroom products-built for local projects, budgets and site conditions.",
      secPartnersEyebrow: "ភាពជាដៃគូ",
      secPartnersTitle: "គាំទ្រដោយភាពជាដៃគូអភិវឌ្ឍន៍អន្តរជាតិ",
      secPartnersDesc:
        "We have delivered LED display, digital signage, and smart technology solutions under projects supported by internationally recognized organizations such as The World Bank, JICA, Swisscontact, GIZ, and Mitsubishi Research Institute (MRI)—meeting institutional standards with reliable execution.",

      secSolutionsEyebrow: "Industry solutions",
      secSolutionsTitle: "Industry Solutions for Cambodia: LED, Signage & Smart Systems",
      secSolutionsDesc:
        "SEO-friendly solutions for Cambodia projects—LED display, digital signage, smart classroom, access control, and PA systems with local installation and support.",
      exploreSolution: "Explore solution",

      secAuthEyebrow: "ដៃគូ",
      secAuthTitle: "អ្នកចែកចាយផ្លូវការ និងដៃគូវិស្វកម្មដែលមានវិញ្ញាបនបត្រ",
      secAuthDesc:
        "Mugnee Cambodia supplies world-leading LED components and control systems with certified engineering support, quality assurance, and Cambodia-based service.",

      secIndustryEyebrow: "ការប្រើប្រាស់ពិត",
      secIndustryTitle: "Product Use-Cases by Industry in Cambodia",
      secIndustryDesc:
        "Industry-specific LED display, digital signage, and smart system use-cases designed for Cambodia's retail, education, government, and factory projects.",
      secSpecsEyebrow: "សង្ខេបបច្ចេកទេស",
      secSpecsTitle: "LED Display Technical Specifications Guide Cambodia",
      secSpecsDesc:
        "Quick technical highlights buyers compare most—pixel pitch, brightness, IP rating, refresh rate, and control system options.",
      secServiceEyebrow: "Service area",
      secServiceTitle: "Service Areas Across Cambodia",
      secServiceDesc:
        "Local installation, commissioning, and after-sales support across Phnom Penh, Siem Reap, Sihanoukville, and nearby provinces.",
      secTestimonialsEyebrow: "Trust",
      secTestimonialsTitle: "Customer Testimonials & Client References",
      secTestimonialsDesc:
        "Local buyer feedback and project references that highlight reliability, image quality and service response.",
      secContactEyebrow: "គាំទ្រក្នុងស្រុក",
      secContactTitle: "Cambodia Office & Project Support",
      secContactDesc:
        "Talk to a local engineer for site survey, sizing, pixel-pitch guidance, and a project-based quotation.",

      secQuickEyebrow: "Popular in Cambodia",
      secQuickTitle: "Quick Access to Key Product Categories",
      secQuickDesc:
        "Buyer-friendly pages with specs, use-cases and practical guidance. For exact pricing, request a project-based quotation.",
      box1t: "LED Display Planning",
      box1d:
        "We help choose pixel pitch (e.g., P2.5 / P3 / P4 / P5) based on viewing distance, space and content.",
      box2t: "Clean Installation",
      box2d:
        "Structured workflow for mounting, cabling, control setup, and commissioning—built for long-term stability.",
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
      badge: "កម្ពុជា • LED Display • Digital Signage • Smart Solutions",
      heroTitle: "ដំណោះស្រាយ LED Display និង Smart Systems នៅកម្ពុជា",
      heroDesc:
        "Mugnee Multiple ផ្តល់សេវា LED Display, Digital Signage, Interactive Flat Panel (Smart Board), Turnstile Gate, ប្រព័ន្ធ PA និង Access Control នៅកម្ពុជា រួមទាំងការស្ទង់ទីតាំង ការដំឡើង ការ Commissioning និងសេវាកម្មបន្ទាប់ពីលក់ ដើម្បីធានាបាននូវគុណភាព និងស្ថិរភាពរយៈពេលវែង។",
      pill1: "តម្លៃតាមគម្រោង",
      pill2: "ដំឡើង & Commissioning",
      pill3: "ធានា & ថែទាំប្រព័ន្ធ",
      ctaQuote: "ស្នើសុំតម្លៃ",
      ctaExplore: "មើលដំណោះស្រាយ",
      serving: `តំបន់សេវាកម្ម: ${cities.join(" • ")}`,
      trust1t: "គាំទ្រក្នុងស្រុក",
      trust1d: "ក្រុមការងារនៅកម្ពុជា សម្រាប់ការដំឡើង និងសេវាកម្មបន្ទាប់ពីលក់។",
      trust2t: "ប្រព័ន្ធមានស្ថិរភាព",
      trust2d: "ដំណើរការរឹងមាំ រូបភាពច្បាស់ និងអាយុកាលប្រើប្រាស់យូរ។",
      trust3t: "អនុវត្តគម្រោងលឿន",
      trust3d: "Workflow ច្បាស់លាស់ សម្រាប់ដឹកជញ្ជូន ដំឡើង និង Commissioning បានលឿន។",

      secProductsEyebrow: "អ្វីដែលយើងផ្តល់ជូន",
      secProductsTitle: "LED Display, Digital Signage និង Smart Systems នៅកម្ពុជា",
      secProductsDesc:
        "ជ្រើសប្រភេទផលិតផល ដើម្បីមើលព័ត៌មានបច្ចេកទេស ករណីប្រើប្រាស់ និងការណែនាំសម្រាប់អ្នកទិញ។ យើងផ្តោតលើគុណភាពស្ថិរភាព ការដំឡើងស្អាត និងសេវាគាំទ្ររយៈពេលវែង។",
      viewDetails: "មើលព័ត៌មានលម្អិត",
      priceGuideLine1: "ចង់បានការណែនាំតម្លៃ? ចាប់ផ្តើមពី",
      priceGuideLink: "Price Guide កម្ពុជា",
      priceGuideLine2: "ហើយស្នើសុំតម្លៃតាមគម្រោង។",
      secCatalogEyebrow: "ផលិតផលពេញនិយម",
      secCatalogTitle: "ផលិតផល LED Display, Digital Signage និង Smart Systems នៅកម្ពុជា",
      secCatalogDesc:
        "ស្វែងរកផលិតផល LED Display, Digital Signage, PA System, Access Control និង Smart Classroom ដែលសមស្របសម្រាប់គម្រោង ថវិកា និងលក្ខខណ្ឌទីតាំងនៅកម្ពុជា។",
      secPartnersEyebrow: "ភាពជាដៃគូ",
      secPartnersTitle: "គាំទ្រដោយភាពជាដៃគូអភិវឌ្ឍន៍អន្តរជាតិ",
      secPartnersDesc:
        "យើងបានអនុវត្តគម្រោង LED Display, Digital Signage និង Smart Technology ក្រោមការគាំទ្រពីអង្គការអន្តរជាតិជាច្រើន ដូចជា The World Bank, JICA, Swisscontact, GIZ និង Mitsubishi Research Institute (MRI)។",

      secSolutionsEyebrow: "ដំណោះស្រាយតាមវិស័យ",
      secSolutionsTitle: "ដំណោះស្រាយសម្រាប់វិស័យនានានៅកម្ពុជា: LED, Signage និង Smart Systems",
      secSolutionsDesc:
        "ដំណោះស្រាយសម្រាប់គម្រោងនៅកម្ពុជា រួមមាន LED Display, Digital Signage, Smart Classroom, Access Control និង PA System ជាមួយសេវាដំឡើង និងគាំទ្រក្នុងស្រុក។",
      exploreSolution: "មើលដំណោះស្រាយ",

      secAuthEyebrow: "ដៃគូ",
      secAuthTitle: "អ្នកចែកចាយផ្លូវការ និងដៃគូវិស្វកម្មដែលមានវិញ្ញាបនបត្រ",
      secAuthDesc:
        "Mugnee Cambodia ផ្គត់ផ្គង់គ្រឿងបន្លាស់ LED និងប្រព័ន្ធគ្រប់គ្រងស្តង់ដារអន្តរជាតិ ជាមួយក្រុមវិស្វករដែលមានវិញ្ញាបនបត្រ និងសេវាកម្មគាំទ្រនៅកម្ពុជា។",

      secIndustryEyebrow: "ការប្រើប្រាស់ពិត",
      secIndustryTitle: "ករណីប្រើប្រាស់ផលិតផលតាមវិស័យ នៅកម្ពុជា",
      secIndustryDesc:
        "Use-case ជាក់ស្តែងសម្រាប់ LED Display, Digital Signage និង Smart Systems ដែលសមស្របតាមវិស័យផ្សេងៗនៅកម្ពុជា។",
      secSpecsEyebrow: "សង្ខេបបច្ចេកទេស",
      secSpecsTitle: "មគ្គុទ្ទេសក៍លក្ខណៈបច្ចេកទេស LED Display នៅកម្ពុជា",
      secSpecsDesc:
        "លក្ខណៈសំខាន់ដែលអ្នកទិញតែងប្រៀបធៀប៖ Pixel Pitch, Brightness, IP Rating និង Control System។",
      secServiceEyebrow: "តំបន់សេវាកម្ម",
      secServiceTitle: "តំបន់សេវាកម្មទូទាំងកម្ពុជា",
      secServiceDesc:
        "សេវាដំឡើង Commissioning និងសេវាកម្មបន្ទាប់ពីលក់ នៅ Phnom Penh, Siem Reap, Sihanoukville និងតំបន់ជិតខាង។",
      secTestimonialsEyebrow: "ភាពទុកចិត្ត",
      secTestimonialsTitle: "មតិអតិថិជន និងគម្រោងយោង",
      secTestimonialsDesc:
        "មតិយោបល់ពីអតិថិជនក្នុងស្រុក និងឯកសារយោងគម្រោង ដែលបង្ហាញពីគុណភាព និងការគាំទ្ររបស់យើង។",
      secContactEyebrow: "គាំទ្រក្នុងស្រុក",
      secContactTitle: "ការិយាល័យកម្ពុជា & សេវាគាំទ្រគម្រោង",
      secContactDesc:
        "ទាក់ទងវិស្វករនៅកម្ពុជា សម្រាប់ការស្ទង់ទីតាំង ការកំណត់ទំហំ Pixel Pitch និងស្នើសុំតម្លៃតាមគម្រោង។",

      secQuickEyebrow: "ពេញនិយមនៅកម្ពុជា",
      secQuickTitle: "ចូលរហ័សទៅកាន់ប្រភេទផលិតផលសំខាន់ៗ",
      secQuickDesc:
        "ទំព័រងាយស្រួលសម្រាប់អ្នកទិញ ដែលមាន Specs, Use-case និងការណែនាំជាក់ស្តែង។ សម្រាប់តម្លៃពិត សូមស្នើសុំតម្លៃតាមគម្រោង។",
      box1t: "រៀបចំគម្រោង LED Display",
      box1d:
        "យើងជួយជ្រើស Pixel Pitch (ឧ. P2.5 / P3 / P4 / P5) តាមចម្ងាយមើល ទំហំ និងប្រភេទមាតិកា។",
      box2t: "ដំឡើងស្អាត និងមានស្តង់ដារ",
      box2d:
        "Workflow ច្បាស់លាស់សម្រាប់ Mounting, Cabling, Control Setup និង Commissioning ដើម្បីធានាស្ថិរភាពរយៈពេលវែង។",
      box3t: "សេវាកម្មបន្ទាប់ពីលក់",
      box3d:
        "ជម្រើសធានា និងថែទាំប្រព័ន្ធ ដើម្បីកាត់បន្ថយ Downtime និងការពារការវិនិយោគរបស់អ្នក។",

      secProjectsEyebrow: "ភាពទុកចិត្ត",
      secProjectsTitle: "គម្រោង និងការដំឡើងនៅកម្ពុជា",
      secProjectsDesc:
        "Case Study និងគម្រោងពិត ជួយបង្កើនភាពជឿជាក់។ បន្ថែមរូបភាព ទីតាំង និង Scope ការងារ ដើម្បីទាក់ទាញអ្នកទិញដែលមានបំណងខ្ពស់។",
      viewProjects: "មើលគម្រោង",
      bannerTitle: "ចង់បានតម្លៃរហ័ស?",
      bannerDesc:
        "សូមផ្ញើព័ត៌មានទំហំ ទីតាំង ប្រភេទការប្រើប្រាស់ និង Timeline។ ក្រុមការងារយើងនឹងណែនាំ Configuration និង Budget Range សមស្រប។",

      secFaqEyebrow: "សំណួរញឹកញាប់",
      secFaqTitle: "សំណួរដែលអ្នកទិញនៅកម្ពុជាសួរញឹកញាប់",
      secFaqDesc: "ចម្លើយខ្លី និងច្បាស់ ដើម្បីជួយអ្នកសម្រេចចិត្តបានមានទំនុកចិត្ត។",
      tip:
        "ណែនាំ: បំពេញលេខទូរស័ព្ទ និងអាសយដ្ឋានការិយាល័យកម្ពុជា ឱ្យពេញលេញ ដើម្បីពង្រឹង Local SEO។",
    };

    return lang === "en" ? en : sanitizeLocaleText(km, en);
  }, [lang, cities]);

  return (
    <div className="bg-white text-slate-900">
      {/* =========================
    HERO (No extra container box)
   ========================= */}
<section
  className="relative overflow-hidden border-b border-slate-100"
  onMouseEnter={() => setIsCarouselPaused(true)}
  onMouseLeave={() => setIsCarouselPaused(false)}
>
  {/* Background */}
  <div className="absolute inset-0">
    {HERO_SLIDES.map((slide, idx) => (
      <div
        key={slide.src}
        className={[
          "absolute inset-0 transition-opacity duration-700",
          idx === activeSlide ? "opacity-100" : "opacity-0",
        ].join(" ")}
        aria-hidden={idx !== activeSlide}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          priority={idx === 0}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    ))}

    {/* Readability overlays (tuned) */}
    <div className="absolute inset-0 bg-slate-950/54" />
    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/76 via-slate-950/50 to-slate-950/24" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/34 via-transparent to-black/48" />
    <div className="absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-black/70 via-black/45 to-transparent" />

    {/* subtle texture */}
    <div
      className="absolute inset-0 opacity-[0.06]"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,.35) 1px, transparent 0)",
        backgroundSize: "18px 18px",
      }}
    />
  </div>

  <Container>
    <div className="relative flex min-h-[calc(100svh-132px)] flex-col items-start justify-center py-10 sm:py-12 lg:py-14">
      {/* badge (bg + animation) */}
      <p className="inline-flex items-center gap-2 rounded-full bg-black/45 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/25 backdrop-blur-[2px]">
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        {t.badge}
      </p>

      <div className="mt-6 w-full max-w-[60rem]">
        <div className="flex max-w-3xl flex-col gap-5 sm:gap-6">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-[3.05rem]">
          {t.heroTitle}
        </h1>

        <p className="text-base leading-relaxed text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-[1.06rem]">
          {t.heroDesc}
        </p>

        {/* CTAs: stronger contrast */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            {t.ctaQuote}
          </Link>

          <Link
            href="/solutions"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-black/45 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-[2px] transition hover:bg-black/60"
          >
            {t.ctaExplore}
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full bg-black/40 px-3 py-1 font-medium text-white ring-1 ring-white/20 backdrop-blur-[2px]">
            {t.pill1}
          </span>
          <span className="rounded-full bg-black/40 px-3 py-1 font-medium text-white ring-1 ring-white/20 backdrop-blur-[2px]">
            {t.pill2}
          </span>
          <span className="rounded-full bg-black/40 px-3 py-1 font-medium text-white ring-1 ring-white/20 backdrop-blur-[2px]">
            {t.pill3}
          </span>
        </div>
      </div>

      </div>
    </div>
  </Container>

  <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
    <div className="flex items-center gap-2">
      {HERO_SLIDES.map((slide, idx) => (
        <button
          key={slide.src}
          type="button"
          onClick={() => setActiveSlide(idx)}
          aria-label={`Show slide ${idx + 1}`}
          className={[
            "h-2.5 rounded-full transition-all",
            idx === activeSlide ? "w-7 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70",
          ].join(" ")}
        />
      ))}
    </div>
  </div>

  <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-3 sm:px-4">
    <button
      type="button"
      onClick={goToPrevSlide}
      aria-label="Previous slide"
      className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white ring-1 ring-white/30 backdrop-blur-[2px] transition hover:bg-black/65"
    >
      <span aria-hidden="true">←</span>
    </button>
    <button
      type="button"
      onClick={goToNextSlide}
      aria-label="Next slide"
      className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white ring-1 ring-white/30 backdrop-blur-[2px] transition hover:bg-black/65"
    >
      <span aria-hidden="true">→</span>
    </button>
  </div>
</section>

      <section
        className="border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white py-7"
        aria-labelledby="home-trust-title"
      >
        <Container>
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {lang === "en" ? "Why Teams Choose Mugnee Cambodia" : "ហេតុអ្វីក្រុមការងារជ្រើសរើស Mugnee Cambodia"}
              </p>
              <h2 id="home-trust-title" className="mt-1 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                {lang === "en"
                  ? "Why Choose Mugnee Cambodia for LED Display, Digital Signage & Smart Systems"
                  : "ហេតុអ្វីគួរជ្រើស Mugnee Cambodia សម្រាប់ LED Display, Digital Signage និង Smart Systems"}
              </h2>
            </div>
            <p className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800">
              {lang === "en" ? "Cambodia Project Support" : "គាំទ្រគម្រោងនៅកម្ពុជា"}
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-3" aria-label="Mugnee Cambodia trust highlights">
            <li className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                >
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.trust1t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{t.trust1d}</p>
                  <p className="mt-2 text-xs font-medium text-slate-500">
                    {lang === "en" ? "Site survey, installation, after-sales" : "ស្ទង់ទីតាំង, ដំឡើង, គាំទ្របន្ទាប់ពីលក់"}
                  </p>
                </div>
              </div>
            </li>

            <li className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                >
                  ◎
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.trust2t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{t.trust2d}</p>
                  <p className="mt-2 text-xs font-medium text-slate-500">
                    {lang === "en" ? "Engineered for clear visuals and uptime" : "រចនាវិស្វកម្មសម្រាប់រូបភាពច្បាស់ និងដំណើរការបន្ត"}
                  </p>
                </div>
              </div>
            </li>

            <li className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                >
                  →
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.trust3t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{t.trust3d}</p>
                  <p className="mt-2 text-xs font-medium text-slate-500">
                    {lang === "en" ? "Planning to commissioning with clear milestones" : "ពីការធ្វើផែនការដល់ Commissioning មានជំហានច្បាស់លាស់"}
                  </p>
                </div>
              </div>
            </li>
          </ul>
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
                className="group relative h-full overflow-hidden rounded-xl shadow-sm transition hover:-translate-y-0.5 hover:shadow-md no-underline hover:no-underline"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-20 z-0 animate-spin opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #22d3ee, #3b82f6, #8b5cf6, #ef4444, #22d3ee)",
                  }}
                />

                <div className="relative z-10 m-[1px] flex h-full flex-col rounded-[11px] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/70 to-slate-100/60 p-4">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-3 top-0 h-px rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 opacity-90"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-3 bottom-0 h-px rounded-full bg-gradient-to-r from-emerald-400 via-sky-500 to-violet-500 opacity-70"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-lg ring-1 ring-slate-200">
                        {c.icon}
                      </div>
                      <h3 className="text-base font-semibold text-slate-900">
                    {lang === "en" ? c.titleEn : sanitizeKhmer(c.titleKm, c.titleEn)}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {lang === "en" ? c.descEn : sanitizeKhmer(c.descKm, c.descEn)}
                  </p>
                  <p className="mt-auto pt-3 text-sm font-semibold text-slate-900">
                    {t.viewDetails} <span aria-hidden="true">→</span>
                  </p>
                </div>
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

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                label: "The World Bank",
                src: "/images/partners/world-bank.svg",
                href: "https://www.worldbank.org/",
              },
              {
                label: "JICA",
                src: "/images/partners/jica.svg",
                href: "https://www.jica.go.jp/english/",
              },
              {
                label: "Swisscontact",
                src: "/images/partners/swisscontact.svg",
                href: "https://www.swisscontact.org/en",
              },
              {
                label: "GIZ",
                src: "/images/partners/giz.svg",
                href: "https://www.giz.de/en/",
              },
              {
                label: "Mitsubishi Research Institute (MRI)",
                src: "https://www.mri.co.jp/common/images/logo_jp.png",
                href: "https://www.mri.co.jp/en/index.html",
              },
            ].map((logo) => (
              <a
                key={logo.label}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${logo.label} official website`}
                className="group flex h-20 items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-slate-100/60 px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md md:h-24"
              >
                <Image
                  src={logo.src}
                  alt={logo.label}
                  width={220}
                  height={64}
                  className="max-h-10 w-auto object-contain md:max-h-12"
                />
              </a>
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
                  {lang === "en" ? s.titleEn : sanitizeKhmer(s.titleKm, s.titleEn)}
                </h3>

                <ul className="mt-4 space-y-3 text-base text-slate-700">
                  {(lang === "en"
                    ? s.pointsEn
                    : s.pointsKm.map((p, i) => sanitizeKhmer(p, s.pointsEn[i] || p))).map((p) => (
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

          <div className="relative overflow-hidden rounded-2xl">
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
                  "អង្គភាពមានវិញ្ញាបនបត្រ ISO",
                  "វិស្វករមានវិញ្ញាបនបត្រ ABC",
                  "បទពិសោធន៍ដឹកនាំគម្រោង",
                  "សេវាគាំទ្រ 24/7",
                  "សេវាកម្មលើទីតាំង",
                ]).map((badge) => (
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
                tKm: "ហាងលក់រាយ និងផ្សារទំនើប",
                dEn:
                  "LED video walls and digital signage to drive promotions and foot traffic.",
                dKm: "LED Video Wall និង Digital Signage សម្រាប់ផ្សព្វផ្សាយ និងទាក់ទាញភ្ញៀវចូលហាង។",
              },
              {
                tEn: "Education",
                tKm: "ការអប់រំ",
                dEn:
                  "Interactive smart boards for classrooms, training rooms and auditoriums.",
                dKm: "Interactive Smart Board សម្រាប់ថ្នាក់រៀន បន្ទប់បណ្តុះបណ្តាល និងសាលសន្និសីទ។",
              },
              {
                tEn: "Corporate & Office",
                tKm: "ការិយាល័យ និងក្រុមហ៊ុន",
                dEn:
                  "Boardroom LED displays, lobby signage and meeting room AV.",
                dKm: "អេក្រង់ LED សម្រាប់បន្ទប់ប្រជុំ ផ្ទាំងបង្ហាញ Lobby និងប្រព័ន្ធ AV។",
              },
              {
                tEn: "Factory & Industrial",
                tKm: "រោងចក្រ និងឧស្សាហកម្ម",
                dEn:
                  "PA systems, safety displays and production status boards.",
                dKm: "PA System ផ្ទាំងសុវត្ថិភាព និងផ្ទាំងបង្ហាញស្ថានភាពផលិតកម្ម។",
              },
              {
                tEn: "Hospitality",
                tKm: "សណ្ឋាគារ និងបដិសណ្ឋារកិច្ច",
                dEn:
                  "Welcome screens, menu boards and event displays for hotels.",
                dKm: "Welcome Screen, Menu Board និងអេក្រង់ព្រឹត្តិការណ៍សម្រាប់សណ្ឋាគារ។",
              },
              {
                tEn: "Government & Public",
                tKm: "រដ្ឋាភិបាល និងសាធារណៈ",
                dEn:
                  "Public information displays and secure access control.",
                dKm: "ផ្ទាំងព័ត៌មានសាធារណៈ និងប្រព័ន្ធគ្រប់គ្រងច្រកចេញចូលដែលមានសុវត្ថិភាព។",
              },
            ].map((item) => (
              <div
                key={item.tEn}
                className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-slate-100/60 p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {lang === "en" ? item.tEn : sanitizeKhmer(item.tKm, item.tEn)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {lang === "en" ? item.dEn : sanitizeKhmer(item.dKm, item.dEn)}
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
                dEn: "P1.25 - P10 (project-based selection)",
                dKm: "P1.25 - P10 (ជ្រើសតាមតម្រូវការគម្រោង)",
              },
              {
                tEn: "Brightness",
                tKm: "កម្រិតពន្លឺ",
                dEn: "Indoor 800-1200 nits / Outdoor 5500-8000 nits",
                dKm: "Indoor 800-1200 nits / Outdoor 5500-8000 nits",
              },
              {
                tEn: "Protection",
                tKm: "ការការពារ",
                dEn: "Outdoor IP65 front protection",
                dKm: "ការការពារ IP65 សម្រាប់ផ្នែកខាងមុខ (Outdoor)",
              },
              {
                tEn: "Control Systems",
                tKm: "ប្រព័ន្ធគ្រប់គ្រង",
                dEn: "NovaStar / Colorlight / Huidu",
                dKm: "NovaStar / Colorlight / Huidu",
              },
            ].map((spec) => (
              <div
                key={spec.tEn}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {lang === "en" ? spec.tEn : sanitizeKhmer(spec.tKm, spec.tEn)}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {lang === "en" ? spec.dEn : sanitizeKhmer(spec.dKm, spec.dEn)}
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
                    ? "Share your location, screen size, and use-case. We'll recommend a practical configuration and quotation."
                    : "សូមចែករំលែកទីតាំង ទំហំអេក្រង់ និងប្រភេទការប្រើប្រាស់ ដើម្បីឲ្យក្រុមការងារយើងណែនាំដំណោះស្រាយសមស្រប និងសម្រង់តម្លៃគម្រោង។"}
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
                    ? "Hours: Mon-Sat, 8:30am-6:00pm"
                    : "ម៉ោងធ្វើការ៖ ចន្ទ-សៅរ៍ 8:30am-6:00pm"}
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

          <div className="grid gap-4 md:grid-cols-2">
            {faq.map((f) => (
              <details
                key={f.qEn}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 open:border-sky-300 open:shadow-md"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-1 items-start gap-2">
                      <span className="mt-0.5 inline-flex shrink-0 rounded-full bg-slate-900 px-2.5 py-1 text-xs text-white">
                        Q
                      </span>
                      <span className="leading-relaxed">
                        {lang === "en" ? f.qEn : sanitizeKhmer(f.qKm, f.qEn)}
                      </span>
                    </div>
                    <span className="mt-0.5 text-slate-400 transition-transform duration-300 group-open:rotate-180">
                      v
                    </span>
                  </div>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  {lang === "en" ? f.aEn : sanitizeKhmer(f.aKm, f.aEn)}
                </p>
              </details>
            ))}
          </div>

        </Container>
      </section>

      {/* footer spacer */}
      <div className="h-10" />

      <style jsx global>{`
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
    </div>
  );
}



