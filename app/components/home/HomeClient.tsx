"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { useLang } from "../layout/LanguageProvider";

const ProductGrid = dynamic(() => import("../sections/ProductGrid"), {
  loading: () => <div className="h-32 w-full animate-pulse rounded-2xl bg-slate-100" />,
});

type Tile = {
  key: string;
  titleEn: string;
  titleKm: string;
  descEn: string;
  descKm: string;
  href: string;
  icon: React.ReactNode;
};

type Faq = {
  qEn: string;
  aEn: string;
  qKm: string;
  aKm: string;
};

const MOJIBAKE_RE = /\u00C3|\u00C2|\u00E2|\u0192|\uFFFD/;

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
    alt: "Mugnee Cambodia company project delivery",
  },
  {
    src: "/images/hero/cambodia-led-billboard-advertising.webp",
    alt: "Commercial project execution in Cambodia",
  },
  {
    src: "/images/hero/cambodia-indoor-led-video-wall-retail.webp",
    alt: "Retail and enterprise deployment support",
  },
  {
    src: "/images/hero/cambodia-smart-classroom-interactive-flat-panel.webp",
    alt: "Smart classroom interactive flat panel solution in Cambodia",
  },
  {
    src: "/images/hero/cambodia-access-control-turnstile-pa-system.webp",
    alt: "Integrated systems delivery and support in Cambodia",
  },
];

const UNIT_CARD_THEME: Record<
  string,
  { card: string; badge: string; glow: string; title: string }
> = {
  led_display: {
    card: "border-cyan-200/80 bg-gradient-to-br from-cyan-50 via-white to-sky-50 hover:border-cyan-300",
    badge: "bg-cyan-100/80 text-cyan-800 ring-cyan-200/70",
    glow: "bg-cyan-300/45",
    title: "text-slate-900",
  },
  indoor_led_display: {
    card: "border-blue-200/80 bg-gradient-to-br from-blue-50 via-white to-indigo-50 hover:border-blue-300",
    badge: "bg-blue-100/80 text-blue-800 ring-blue-200/70",
    glow: "bg-blue-300/45",
    title: "text-slate-900",
  },
  outdoor_billboard: {
    card: "border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-orange-50 hover:border-amber-300",
    badge: "bg-amber-100/80 text-amber-800 ring-amber-200/70",
    glow: "bg-amber-300/45",
    title: "text-slate-900",
  },
  receiving_card: {
    card: "border-emerald-200/80 bg-gradient-to-br from-emerald-50 via-white to-teal-50 hover:border-emerald-300",
    badge: "bg-emerald-100/80 text-emerald-800 ring-emerald-200/70",
    glow: "bg-emerald-300/45",
    title: "text-slate-900",
  },
  ifp: {
    card: "border-fuchsia-200/80 bg-gradient-to-br from-fuchsia-50 via-white to-violet-50 hover:border-fuchsia-300",
    badge: "bg-fuchsia-100/80 text-fuchsia-800 ring-fuchsia-200/70",
    glow: "bg-fuchsia-300/45",
    title: "text-slate-900",
  },
  turnstile: {
    card: "border-rose-200/80 bg-gradient-to-br from-rose-50 via-white to-red-50 hover:border-rose-300",
    badge: "bg-rose-100/80 text-rose-800 ring-rose-200/70",
    glow: "bg-rose-300/45",
    title: "text-slate-900",
  },
  pa_system: {
    card: "border-violet-200/80 bg-gradient-to-br from-violet-50 via-white to-purple-50 hover:border-violet-300",
    badge: "bg-violet-100/80 text-violet-800 ring-violet-200/70",
    glow: "bg-violet-300/45",
    title: "text-slate-900",
  },
  video_processor: {
    card: "border-indigo-200/80 bg-gradient-to-br from-indigo-50 via-white to-blue-50 hover:border-indigo-300",
    badge: "bg-indigo-100/80 text-indigo-800 ring-indigo-200/70",
    glow: "bg-indigo-300/45",
    title: "text-slate-900",
  },
  power_supply: {
    card: "border-lime-200/80 bg-gradient-to-br from-lime-50 via-white to-green-50 hover:border-lime-300",
    badge: "bg-lime-100/80 text-lime-800 ring-lime-200/70",
    glow: "bg-lime-300/45",
    title: "text-slate-900",
  },
  all_products: {
    card: "border-sky-200/80 bg-gradient-to-br from-sky-50 via-white to-cyan-50 hover:border-sky-300",
    badge: "bg-sky-100/80 text-sky-800 ring-sky-200/70",
    glow: "bg-sky-300/45",
    title: "text-slate-900",
  },
  default: {
    card: "border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100/60 hover:border-slate-300",
    badge: "bg-slate-100 text-slate-700 ring-slate-200",
    glow: "bg-slate-300/45",
    title: "text-slate-900",
  },
};
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.3322027815047!2d104.92304627050727!3d11.573972618867787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e6231c345b%3A0xebf28967942f76b6!2sMugnee%20Multiple%20Co.%2C%20Ltd!5e1!3m2!1sen!2sbd!4v1770445691312!5m2!1sen!2sbd";

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
  categoryTiles,
  faq,
}: {
  categoryTiles: Tile[];
  faq: Faq[];
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const totalSlides = HERO_SLIDES.length;

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    if (media.addEventListener) {
      media.addEventListener("change", sync);
      return () => media.removeEventListener("change", sync);
    }
    media.addListener(sync);
    return () => media.removeListener(sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || isHeroPaused) return undefined;
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => window.clearInterval(id);
  }, [reduceMotion, isHeroPaused, totalSlides]);

  const { lang } = useLang();
  const normalizeInternalHref = (href: string) => {
    if (!href || href === "/" || !href.startsWith("/")) return href;
    return href.endsWith("/") ? href : `${href}/`;
  };
  const toLangHref = (href: string) => {
    const normalized = normalizeInternalHref(href);
    return lang === "km" && normalized.startsWith("/") && !normalized.startsWith("/km/")
      ? `/km${normalized}`
      : normalized;
  };

  const t = useMemo(() => {
    const en = {
      badge: "Cambodia • Mugnee Cambodia • Project Delivery",
      heroTitle: "Premium Digital Signage & Smart AV Solutions in Cambodia",
      heroDesc:
        "Mugnee is a multinational technology company, and Mugnee Cambodia serves as its local multinational operation for Cambodia with project planning, delivery, installation, commissioning, and long-term support for commercial and institutional clients.",
      ctaQuote: "Get Quotation",
      ctaLed: "Explore LED Display",
      secProductsEyebrow: "What we deliver",
      secProductsTitle: "Core Business Units in Cambodia",
      secCatalogEyebrow: "Our Products",
      secPartnersEyebrow: "Partnership Ecosystem",
      secPartnersTitle: "International Development Partnership Ecosystem",
      secPartnersDesc:
        "Mugnee is building collaboration pathways with globally recognized development finance institutions and agencies active in Cambodia and Southeast Asia.",
      secPartnersDisclosure:
        "Disclosure: Organizations listed below represent relevant development and investment ecosystem stakeholders. Inclusion does not imply a formal partnership unless officially announced.",
      secAuthEyebrow: "Partners",
      secAuthTitle: "Authorized Smart Tech Distributor & Trusted Engineering Team",
      secAuthDesc:
        "Mugnee Cambodia works with recognized manufacturing partners and certified engineers for accountable project delivery.",
      secServiceEyebrow: "Service area",
      secServiceTitle: "Service Areas Across Cambodia",
      secServiceDesc:
        "Local installation, commissioning, and after-sales support across Phnom Penh, Siem Reap, Sihanoukville, and nearby provinces.",
      secContactEyebrow: "Local Support",
      secContactTitle: "Cambodia Office & Project Support",
      secContactDesc:
        "Talk to our local team for project scoping, timeline planning, and quotation support.",
      secFaqEyebrow: "FAQs",
      secFaqTitle: "Common Questions from Cambodia Buyers",
      secFaqDesc: "Short, clear answers to help customers make confident decisions.",
    };

    const km = {
      badge: "កម្ពុជា • Mugnee Cambodia • ដំណោះស្រាយបច្ចេកវិទ្យា",
      heroTitle: "ដំណោះស្រាយ Digital Display & Smart Technology នៅកម្ពុជា",
      heroDesc:
        "Mugnee ជាក្រុមហ៊ុនបច្ចេកវិទ្យាពហុជាតិ ហើយ Mugnee Cambodia ជាប្រតិបត្តិការក្នុងស្រុកសម្រាប់ទីផ្សារកម្ពុជា ដោយផ្តល់សេវារៀបចំគម្រោង ដំឡើង សាកល្បងដំណើរការ និងគាំទ្ររយៈពេលវែងសម្រាប់អាជីវកម្ម និងស្ថាប័ន។",
      ctaQuote: "ស្នើសុំតម្លៃ",
      ctaLed: "មើល LED Display",
      secProductsEyebrow: "អ្វីដែលយើងផ្តល់",
      secProductsTitle: "អង្គភាពអាជីវកម្មស្នូលនៅកម្ពុជា",
      secCatalogEyebrow: "ផលិតផលរបស់យើង",
      secPartnersEyebrow: "បណ្តាញដៃគូ",
      secPartnersTitle: "បណ្តាញដៃគូអភិវឌ្ឍន៍អន្តរជាតិ",
      secPartnersDesc:
        "Mugnee កំពុងបង្កើតផ្លូវសហការជាមួយស្ថាប័នហិរញ្ញវត្ថុអភិវឌ្ឍន៍ និងអង្គភាពអន្តរជាតិដែលសកម្មនៅកម្ពុជា និងអាស៊ីអាគ្នេយ៍។",
      secPartnersDisclosure:
        "កំណត់សម្គាល់៖ អង្គភាពដែលរាយបញ្ជីខាងក្រោមជាផ្នែកនៃបរិបទអេកូស៊ីស្ទឹមអភិវឌ្ឍន៍ និងវិនិយោគ។ ការដាក់បញ្ជីមិនមានន័យថាជាដៃគូផ្លូវការទេ លុះត្រាតែមានការប្រកាសជាផ្លូវការ។",
      secAuthEyebrow: "ដៃគូ",
      secAuthTitle: "អ្នកចែកចាយបច្ចេកវិទ្យាឆ្លាតវៃដែលទទួលស្គាល់ និងក្រុមវិស្វករដែលអាចទុកចិត្តបាន",
      secAuthDesc:
        "Mugnee Cambodia ធ្វើការជាមួយដៃគូផលិតកម្មដែលទទួលស្គាល់ និងក្រុមវិស្វករដែលមានវិញ្ញាបនបត្រ ដើម្បីធានាការអនុវត្តគម្រោងបានត្រឹមត្រូវ។",
      secServiceEyebrow: "តំបន់សេវាកម្ម",
      secServiceTitle: "សេវាកម្មទូទាំងកម្ពុជា",
      secServiceDesc:
        "សេវាដំឡើង សាកល្បងដំណើរការ និងគាំទ្របន្ទាប់ពីលក់ នៅ Phnom Penh, Siem Reap, Sihanoukville និងខេត្តជិតខាង។",
      secContactEyebrow: "ការគាំទ្រក្នុងស្រុក",
      secContactTitle: "ការិយាល័យកម្ពុជា និងការគាំទ្រគម្រោង",
      secContactDesc:
        "ទំនាក់ទំនងក្រុមការងារក្នុងស្រុករបស់យើង សម្រាប់កំណត់ Scope គម្រោង រៀបចំកាលវិភាគ និងស្នើសុំតម្លៃ។",
      secFaqEyebrow: "សំណួរញឹកញាប់",
      secFaqTitle: "សំណួរញឹកញាប់ពីអតិថិជននៅកម្ពុជា",
      secFaqDesc: "ចម្លើយខ្លីៗ ច្បាស់ៗ ដើម្បីជួយអ្នកសម្រេចចិត្តបានកាន់តែជាក់ច្បាស់។",
    };

    return lang === "en" ? en : sanitizeLocaleText(km, en);
  }, [lang]);

  return (
    <div className="bg-white text-slate-900">
      {/* =========================
    HERO (No extra container box)
   ========================= */}
<section
  className="relative overflow-hidden border-b border-slate-100"
  onMouseEnter={() => setIsHeroPaused(true)}
  onMouseLeave={() => setIsHeroPaused(false)}
  onFocusCapture={() => setIsHeroPaused(true)}
  onBlurCapture={() => setIsHeroPaused(false)}
>
  {/* Background */}
  <div className="pointer-events-none absolute inset-0">
    {HERO_SLIDES.map((slide, idx) => (
      <div
        key={slide.src}
        className={[
          "absolute inset-0 transition-opacity duration-700",
          idx === activeSlide ? "opacity-100" : "opacity-0",
        ].join(" ")}
        aria-hidden={idx !== activeSlide}
      >
        {idx === activeSlide ? (
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            loading={idx === 0 ? "eager" : "lazy"}
            fetchPriority={idx === 0 ? "high" : undefined}
            sizes="100vw"
            className="object-cover object-center"
          />
        ) : null}
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
        <h1 className="text-3xl font-semibold leading-[1.22] tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-4xl sm:leading-[1.24] lg:text-[3.05rem] lg:leading-[1.2]">
          {t.heroTitle}
        </h1>

        <p className="text-justify text-base leading-relaxed text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-[1.06rem]">
          {t.heroDesc}
        </p>

        {/* CTAs: stronger contrast */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={toLangHref("/contact")}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            {t.ctaQuote}
          </Link>

          <Link
            href={toLangHref("/led-display")}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 shadow-[0_8px_24px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800"
          >
            {t.ctaLed}
          </Link>
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

  <div className="absolute inset-y-0 left-0 z-30 flex items-center pl-3 sm:pl-4">
    <button
      type="button"
      onClick={goToPrevSlide}
      aria-label="Previous slide"
      className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white ring-1 ring-white/30 backdrop-blur-[2px] transition hover:bg-black/65"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  </div>
  <div className="absolute inset-y-0 right-0 z-30 flex items-center pr-3 sm:pr-4">
    <button
      type="button"
      onClick={goToNextSlide}
      aria-label="Next slide"
      className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white ring-1 ring-white/30 backdrop-blur-[2px] transition hover:bg-black/65"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  </div>
</section>

      {/* =========================
          CATEGORY TILES
         ========================= */}
      <section className="py-14 sm:py-16">
        <Container>
          <SectionTitle
            eyebrow={t.secProductsEyebrow}
            title={t.secProductsTitle}
          />

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {categoryTiles.map((c) => {
              const theme = UNIT_CARD_THEME[c.key] ?? UNIT_CARD_THEME.default;
              return (
                <Link
                  key={c.key}
                  href={toLangHref(c.href)}
                  className={[
                    "home-unit-card group relative flex min-h-[124px] items-center justify-center overflow-hidden rounded-xl border p-4 text-center no-underline shadow-[0_2px_10px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(15,23,42,0.16)] hover:no-underline",
                    theme.card,
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className={[
                      "pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl opacity-65 transition-opacity duration-300 group-hover:opacity-90",
                      theme.glow,
                    ].join(" ")}
                  />

                  <div className="relative flex flex-col items-center justify-center gap-3">
                    <div
                      className={[
                        "flex h-12 w-12 items-center justify-center rounded-xl ring-1 shadow-sm transition-transform duration-300 group-hover:scale-105",
                        theme.badge,
                      ].join(" ")}
                    >
                      {c.icon}
                    </div>
                    <h3 className={`text-[1.05rem] font-semibold leading-tight ${theme.title}`}>
                      {lang === "en" ? c.titleEn : sanitizeKhmer(c.titleKm, c.titleEn)}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>

        </Container>
      </section>

      {/* =========================
          PRODUCT RANGE
         ========================= */}
      <section className="border-t border-slate-100 bg-slate-50/70 py-12 sm:py-14">
        <Container>
          <SectionTitle
            title={t.secCatalogEyebrow}
          />

          <ProductGrid
            columns={3}
            pageSize={12}
            showPagination
            showCategoryFilters={false}
            showSort={false}
          />
        </Container>
      </section>

      {/* =========================
          PARTNERSHIPS
         ========================= */}
      <section className="border-t border-slate-100 bg-white py-12 sm:py-14">
        <Container>
          <>
            <SectionTitle
              eyebrow={t.secPartnersEyebrow}
              title={t.secPartnersTitle}
              desc={t.secPartnersDesc}
              descClassName="max-w-none"
            />

              <div className="relative mt-5 overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-slate-100/60 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-4">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent" />
                <div className="home-partner-marquee-track flex w-max gap-3 py-1">
                  {[
                    { short: "IFC", label: "IFC (World Bank Group)", href: "https://www.ifc.org/en/home", logo: "/images/partners/ifc-official.svg" },
                    { short: "JICA", label: "Japan International Cooperation Agency", href: "https://www.jica.go.jp/english/", logo: "/images/partners/jica-official.png" },
                    { short: "USAID", label: "USAID", href: "https://www.usaid.gov/", logo: "/images/partners/usaid-official.png" },
                    { short: "EU", label: "EU Development Programs", href: "https://international-partnerships.ec.europa.eu/index_en", logo: "/images/partners/eu-official.svg" },
                    { short: "UNDP", label: "UNDP", href: "https://www.undp.org/", logo: "/images/partners/undp-official.svg" },
                    { short: "UNCTAD", label: "UNCTAD", href: "https://unctad.org/", logo: "/images/partners/unctad-official.png" },
                    { short: "MCC", label: "Millennium Challenge Corporation (MCC)", href: "https://www.mcc.gov/", logo: "/images/partners/mcc-official.svg" },
                    { short: "IFC", label: "IFC (World Bank Group)", href: "https://www.ifc.org/en/home", logo: "/images/partners/ifc-official.svg" },
                    { short: "JICA", label: "Japan International Cooperation Agency", href: "https://www.jica.go.jp/english/", logo: "/images/partners/jica-official.png" },
                    { short: "USAID", label: "USAID", href: "https://www.usaid.gov/", logo: "/images/partners/usaid-official.png" },
                    { short: "EU", label: "EU Development Programs", href: "https://international-partnerships.ec.europa.eu/index_en", logo: "/images/partners/eu-official.svg" },
                    { short: "UNDP", label: "UNDP", href: "https://www.undp.org/", logo: "/images/partners/undp-official.svg" },
                    { short: "UNCTAD", label: "UNCTAD", href: "https://unctad.org/", logo: "/images/partners/unctad-official.png" },
                    { short: "MCC", label: "Millennium Challenge Corporation (MCC)", href: "https://www.mcc.gov/", logo: "/images/partners/mcc-official.svg" },
                  ].map((org, idx) => (
                    <a
                      key={`${org.label}-${idx}`}
                      href={org.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${org.label} official website`}
                      className="group relative flex h-[104px] w-[300px] shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-slate-200/80 bg-white/95 px-6 text-center shadow-[0_6px_16px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_16px_36px_rgba(15,23,42,0.16)]"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-100/60 blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-90"
                      />
                      {org.short === "UNDP" ? (
                        <div className="relative flex w-full items-center justify-center">
                          <div className="flex items-center gap-3">
                            <div className="relative h-14 w-11 shrink-0">
                              <Image
                                src={org.logo}
                                alt="UNDP official logo"
                                fill
                                sizes="44px"
                                className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                              />
                            </div>
                            <span className="text-left text-[15px] font-semibold leading-[1.12] text-[#0072BC]">
                              United Nations
                              <br />
                              Development Programme
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="relative flex w-full flex-col items-center">
                          <div
                            className={[
                              "relative",
                              org.short === "EU"
                                ? "h-10 w-[184px] max-w-[72%]"
                                : org.short === "MCC"
                                  ? "h-10 w-[188px] max-w-[80%]"
                                : "h-12 w-[200px] max-w-[88%]",
                            ].join(" ")}
                          >
                            <Image
                              src={org.logo}
                              alt={`${org.label} official logo`}
                              fill
                              sizes="(max-width: 640px) 140px, 200px"
                              className={[
                                "object-contain transition-transform duration-300 group-hover:scale-[1.03]",
                                org.short === "EU" ? "contrast-125 brightness-90 saturate-125" : "",
                              ].join(" ")}
                            />
                          </div>
                          {org.short === "ADB" ? (
                            <span className="mt-2 text-[11px] font-semibold tracking-[0.06em] text-slate-600">
                              Asian Development Bank
                            </span>
                          ) : null}
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "By aligning with trusted global development ecosystems, Mugnee supports responsible digital commerce growth, technology access, and inclusive market development in Cambodia."
                  : "តាមរយៈការសម្របសម្រួលជាមួយបណ្តាញអភិវឌ្ឍន៍អន្តរជាតិដែលអាចទុកចិត្តបាន Mugnee គាំទ្រកំណើនពាណិជ្ជកម្មឌីជីថល ការចូលដំណើរការបច្ចេកវិទ្យា និងការអភិវឌ្ឍទីផ្សារដែលរួមបញ្ចូលនៅកម្ពុជា។"}
              </p>

              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                {t.secPartnersDisclosure}
              </p>

            <div className="mt-4">
              <a
                href={toLangHref("/contact")}
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                {lang === "en" ? "Explore Collaboration Opportunities" : "ស្វែងរកឱកាសសហការ"}
              </a>
            </div>
          </>
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
                  className="flex h-16 w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-slate-100/60 px-3 sm:w-44 lg:w-48"
                >
                  <div
                    className={
                      logo.label === "Lampro"
                        ? "relative h-8 w-32 max-w-[82%]"
                        : logo.label === "G-energy"
                          ? "relative h-9 w-32 max-w-[78%]"
                          : "relative h-8 w-36 max-w-[84%]"
                    }
                  >
                    <Image
                      src={logo.src}
                      alt={logo.label}
                      fill
                      sizes="(max-width: 640px) 120px, 144px"
                      className="object-contain"
                    />
                  </div>
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
                  "បទពិសោធន៍តាមឧស្សាហកម្ម",
                  "គាំទ្រ 24/7",
                  "សេវាកម្មនៅទីតាំង",
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
                href={toLangHref("/products")}
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
                    ? "Share your location, project type, and timeline. Our team will propose a practical scope and quotation."
                    : "សូមចែករំលែកទីតាំង ប្រភេទគម្រោង និងកាលវិភាគ។ ក្រុមការងារយើងនឹងស្នើ Scope និងតម្លៃដែលសមស្របជាក់ស្តែង។"}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={toLangHref("/contact")}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(15,23,42,0.45)]"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                        <path d="M14 3v5h5" />
                        <path d="M9 13h6" />
                        <path d="M9 17h6" />
                      </svg>
                    </span>
                    {lang === "en" ? "Request a Quotation" : "ស្នើសុំតម្លៃ"}
                  </a>
                  <a
                    href={toLangHref("/contact")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.66 2.64a2 2 0 0 1-.45 2.11L8 9.89a16 16 0 0 0 6.11 6.11l1.42-1.32a2 2 0 0 1 2.11-.45c.85.32 1.74.54 2.64.66A2 2 0 0 1 22 16.92z" />
                      </svg>
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
                  {lang === "en" ? "Phone: +85581580802" : "ទូរស័ព្ទ: +85581580802"}
                </p>
                <p className="mt-2">
                  {lang === "en"
                    ? "Hours: Mon-Sat, 8:30am-6:00pm"
                    : "ម៉ោងធ្វើការ: ច័ន្ទ-សៅរ៍ 8:30am-6:00pm"}
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Mugnee Cambodia Office Map"
                src={MAP_EMBED_SRC}
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
        .home-unit-card {
          position: relative;
          border: 1px solid transparent;
          background:
            linear-gradient(#fff, #fff) padding-box,
            linear-gradient(
                120deg,
                rgba(14, 165, 233, 0.35),
                rgba(59, 130, 246, 0.6),
                rgba(16, 185, 129, 0.45),
                rgba(245, 158, 11, 0.45),
                rgba(236, 72, 153, 0.4)
              )
              border-box;
          background-size: 100% 100%, 220% 220%;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
        }
        .home-unit-card:hover {
          animation: home-unit-rgb-border 2.2s linear infinite;
          box-shadow: 0 14px 26px rgba(15, 23, 42, 0.12);
          transform: translateY(-2px);
        }
        @keyframes home-unit-rgb-border {
          0% {
            background-position: 0 0, 0 50%;
          }
          100% {
            background-position: 0 0, 220% 50%;
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
          animation: home-partner-marquee 44s linear infinite;
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
