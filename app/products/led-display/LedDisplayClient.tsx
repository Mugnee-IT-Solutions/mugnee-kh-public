"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useLang } from "../../components/layout/LanguageProvider";
import ProductGrid from "../../components/sections/ProductGrid";

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

export default function LedDisplayClient({
  productGridOverride,
  productQuickChips,
  afterSpecsContent,
  pixelPitchIntroOverride,
  pixelPitchRowsOverride,
  pixelPitchSectionOverride,
}: {
  productGridOverride?: ProductGridConfig;
  productQuickChips?: { label: string; href: string }[];
  afterSpecsContent?: React.ReactNode;
  pixelPitchIntroOverride?: string;
  pixelPitchRowsOverride?: [string, string, string][];
  pixelPitchSectionOverride?: React.ReactNode;
}) {
  const { lang } = useLang();

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
      breadcrumb: "Products",
      h1: "LED Display Price in Cambodia",
      intro:
        "MUGNEE Multiple delivers Indoor LED Display, Outdoor LED Display, LED Video Wall, LED Screen Panel, LED Billboard, Digital LED Display, Advertising LED Display, and LED Signage Display solutions in Cambodia. We support retail, malls, hotels, corporate lobbies, events, and outdoor advertising with site survey, pixel-pitch guidance, structure design, installation, commissioning, and local after-sales support. Get a project-based quotation from our Cambodia team in Phnom Penh, Siem Reap, and Sihanoukville.",
      cta1: "WhatsApp for Quotation",
      cta2: "Request BOQ Proposal",
      cta3: "Jump to Products",
      quickTitle: "Browse LED display categories and related services",
      quickSub:
        "Quick links help you reach the exact LED display type, controller, and accessories you need.",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const quickLinks = [
    { label: "Indoor LED Display", href: "/led-display/indoor-led-display" },
    { label: "Outdoor LED Display", href: "/led-display/outdoor-led-display" },
    { label: "Receiving Card", href: "/led-display/receiving-card" },
    { label: "Video Processor", href: "/led-display/video-processor" },
    { label: "Power Supply", href: "/led-display/power-supply" },
    { label: "LED Controller", href: "/products/led-controller" },
    { label: "Interactive Flat Panel", href: "/interactive-flat-panel" },
    { label: "PA System", href: "/pa-system" },
    { label: "Contact", href: "/contact" },
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
              url: "https://mugnee.com.kh/led-display",
              image: "https://mugnee.com.kh/images/hero/cambodia-led-hero.webp",
              telephone: "+855XXXXXXXXX",
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
              name: "LED Display in Cambodia",
              description:
                "Indoor LED video walls, outdoor LED billboards, rental LED screens, installation, commissioning and after-sales support in Cambodia.",
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
                  name: "LED Display",
                  item: "https://mugnee.com.kh/led-display",
                },
              ],
            },
          ]),
        }}
      />
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">LED Display</span>
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.h1}
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.intro}
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
                  {productQuickChips.map((chip) => (
                    <Link
                      key={chip.href}
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
                Quick Links
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
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
                LED Technology Basics
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                LED Technology Basics for Cambodia Buyers
              </h2>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  What Is an LED Display?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  An LED display is a digital screen made from thousands of LED pixels
                  arranged in modules and cabinets. These pixels light up to form images,
                  videos, and live data. LED technology is preferred for large screens
                  because it is seamless, bright, and scalable for both indoor and outdoor
                  installations in Cambodia.
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  How Does an LED Display Work?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  A controller sends video signals to each LED pixel, synchronizing color
                  and brightness across the screen. Correct pixel pitch, brightness, IP
                  protection, and refresh rate ensure clear visuals, smooth motion, and
                  reliable performance under Cambodias heat, rain, and dust conditions.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                {[
                  "Pixel Pitch",
                  "Brightness (nits)",
                  "IP Rating",
                  "Refresh Rate",
                  "Cabinet Size",
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

            <div className="mt-24 grid gap-4 sm:grid-cols-2">
              {[
                ["LED Modules", "Small panels that create the full screen size and resolution."],
                ["Cabinets", "Rigid frames that align modules and protect wiring."],
                ["Controller", "Processes content and synchronizes every pixel in real time."],
                ["Power & Signal", "Stable power, clean cabling, and grounding for safety."],
              ].map(([t, d]) => (
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
                Types in Cambodia
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                Types of LED Displays in Cambodia
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                The Cambodia market typically uses four LED display types. Each type
                is optimized for viewing distance, brightness, and installation style.
                Choosing the right type ensures better visuals, lower maintenance, and
                longer service life.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We help you select the right LED screen by location, budget, and content
                needs?so your investment performs reliably.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Quick Selection Checklist (Cambodia)
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    Decide indoor vs outdoor based on sunlight and exposure.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    Match pixel pitch to viewing distance for clarity.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    Confirm structure method and mounting location.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    Plan for power, grounding, and maintenance access.
                  </li>
                </ul>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                Common Cambodia installs: mall video walls, hotel lobbies, roadside LED billboards,
                retail storefront screens, event stages, and public information displays.
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {[
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
              ].map((item, idx) => {
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
            LED Display Specifications for Cambodia (Indoor & Outdoor)
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Use these realistic spec ranges to plan indoor and outdoor LED display
            projects in Cambodia. Final specs depend on viewing distance, ambient
            light, installation structure, and budget.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Pixel Pitch", "Indoor: P1.25?P3 * Outdoor: P3?P10"],
              ["Brightness (nits)", "Indoor: 600?1,200 * Outdoor: 4,500?7,000+"],
              ["IP Rating", "Indoor: IP30?IP40 * Outdoor: IP65+ (front)"],
              ["Refresh Rate", "= 1,920Hz (4,000Hz+ for camera use)"],
              ["Viewing Angle", "H: 140?160  * V: 120?140 "],
              ["Power & Safety", "Surge protection + proper grounding"],
              ["Cabinet Size", "Common: 500 500 / 500 1000 mm"],
              ["Lifespan", "50,000?100,000 hours with proper maintenance"],
            ].map(([t, d]) => (
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

      {afterSpecsContent}

      {pixelPitchSectionOverride ?? (
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Pixel Pitch & Viewing Distance Guide
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {pixelPitchIntroOverride ??
                "Choosing the right pixel pitch is the #1 factor for visual clarity and budget efficiency. Use this guide as a starting point for Cambodia installations."}
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-1 bg-slate-100 text-sm font-semibold text-slate-900 sm:grid-cols-3">
                <div className="p-3">Pixel Pitch</div>
                <div className="p-3">Best Viewing Distance</div>
                <div className="p-3">Typical Use</div>
              </div>
              {(pixelPitchRowsOverride ?? [
                ["P1.25-P1.86", "1.5-3m", "Control room, premium boardroom"],
                ["P2-P2.5", "2-5m", "Meeting rooms, retail, showrooms"],
                ["P3-P4", "3-8m", "Malls, lobbies, indoor stages"],
                ["P5-P10", "6m+", "Outdoor billboards, roadside"],
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
            Indoor vs Outdoor LED Display for Cambodia Climate
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Cambodias heat, rain, and dust require correct IP rating, heat
            management, and structure design-especially for outdoor LED displays.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {[
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
            ].map((item, idx) => {
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
            LED Display Use-Cases by Industry in Cambodia
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Popular industries using LED display, digital signage, and LED
            billboards in Cambodia.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
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
            ].map((x) => (
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
            LED Display Installation & After-Sales Workflow in Cambodia
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Our end-to-end LED display delivery process covers survey, design, installation,
            commissioning, and ongoing after-sales support. This workflow ensures stable
            visuals, safe structure, and long service life for Cambodia projects.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
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
            ].map((item, idx) => {
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
            Why Choose Mugnee for LED Display in Cambodia
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Clients choose Mugnee because we deliver engineering-accurate LED display
            projects with clear visuals, safe structures, and reliable after-sales support.
            From site survey to commissioning, we focus on performance, durability, and
            long-term value for Cambodia installations.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
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
            ].map(([t, d]) => (
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
              Contact Mugnee Cambodia
            </a>
            <a
              href="https://wa.me/855XXXXXXXXX"
              target="_blank"
              rel="noopener"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              WhatsApp for Quotation
            </a>
          </div>
        </div>
      </section>

      {/* AUTHORIZED DISTRIBUTOR */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Partners
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            Authorized Distributor & Certified Engineering Partner
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Mugnee Cambodia supplies world-leading LED components and control systems
            with certified engineering support, quality assurance, and Cambodia-based
            service for long-term performance.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {[
              ["/images/partners/meanwell.png", "Mean Well"],
              ["/images/partners/g-energy.png", "G-energy"],
              ["/images/partners/lampro.png", "Lampro"],
              ["/images/partners/novastar.png", "NovaStar"],
              ["/images/partners/huidu.png", "Huidu"],
              ["/images/partners/nationstar.png", "NationStar"],
              ["/images/partners/colorlight.png", "Colorlight"],
            ].map(([src, alt]) => (
              <div
                key={alt}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={160}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
            {[
              "ISO Certified Organization",
              "ABC Certified Engineers",
              "Industry Track-Lead",
              "24/7 Customer Support",
              "On-site Service",
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

      {/* SERVICE AREA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Service area
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            Service Areas Across Cambodia
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Local installation, commissioning and after-sales support across Phnom Penh,
            Siem Reap, Sihanoukville and nearby provinces.
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

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Frequently Asked Question (FAQ)
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              [
                "What is the best LED display for indoor use in Cambodia?",
                "Indoor LED screens work best with finer pixel pitch (P1.25-P2.5) for close viewing in boardrooms, showrooms, and control rooms. Viewing distance is the key factor for clarity.",
              ],
              [
                "What brightness (nits) is required for outdoor LED billboards?",
                "Outdoor LED displays typically use high brightness (around 4,500-7,000+ nits) so content stays visible in Cambodia sunlight.",
              ],
              [
                "What IP rating is recommended for outdoor LED screens in Cambodia?",
                "Outdoor LED installations usually require IP65+ (front) for rain and dust protection. This is a common standard for billboards.",
              ],
              [
                "How do I choose the right pixel pitch and viewing distance?",
                "Pixel pitch should match viewing distance. Smaller pitch is for close viewing; larger pitch is for longer viewing and budget efficiency.",
              ],
              [
                "What refresh rate is recommended for LED displays?",
                "Many LED systems use 1,920Hz or higher. For camera use or broadcast, 3,840Hz or higher is preferred to reduce flicker.",
              ],
              [
                "How long does an LED display last?",
                "A quality LED display can last 50,000+ hours depending on brightness settings, usage hours, and maintenance conditions.",
              ],
              [
                "Does outdoor LED need special heat or climate protection?",
                "Yes. Outdoor LED in Cambodia needs heat management, weatherproof cabinets, and proper grounding to handle heat, rain, and dust.",
              ],
              [
                "Why choose LED instead of LCD for large outdoor screens?",
                "LED is seamless, brighter, and scalable for large formats. LCD is usually for smaller sizes and has visible bezels.",
              ],
              [
                "Can LED display price be fixed from a price list?",
                "Prices depend on pixel pitch, size, brightness, structure, and site conditions. That is why we provide project-based quotations.",
              ],
              [
                "Do you provide installation and after-sales support in Cambodia?",
                "Yes. We handle survey, installation, commissioning, training, and ongoing maintenance support.",
              ],
            ].map(([q, a]) => (
              <details
                key={q}
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


