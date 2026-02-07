// src/app/(cambodia)/indoor-led-display/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductGrid from "../../components/sections/ProductGrid";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/indoor-led-display/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

// === SEO ===
const META_TITLE = "Indoor LED Display Cambodia | Fine Pitch LED Video Wall | Mugnee";
const META_DESC =
  "Premium indoor LED display in Cambodia for conference rooms, malls, showrooms, control rooms & studios. Fine-pitch P1.25–P3, pro installation & after-sales support. Get quote.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Indoor LED Display Cambodia — Fine Pitch LED Video Wall",
    description: META_DESC,
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/cambodia/indoor-led-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Indoor LED display in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
    images: [`${SITE_URL}/images/cambodia/indoor-led-hero.webp`],
  },
};

const FAQ_ITEMS = [
  {
    q: "What is an indoor LED display?",
    a: "An indoor LED display is a high-resolution digital screen designed for indoor environments like offices, malls, conference rooms, studios and control rooms. It provides bright visuals, accurate colors and smooth playback under controlled lighting.",
  },
  {
    q: "Which pixel pitch is best for my room?",
    a: "Pixel pitch depends on viewing distance. For close viewing choose P1.25–P1.86. For meeting rooms and general indoor use P2–P2.5 works well. For larger halls/auditoriums, P2.5–P3 is typically suitable.",
  },
  {
    q: "Do you provide installation and after-sales support in Cambodia?",
    a: "Yes. Mugnee supports consultation, installation, configuration, calibration, training and after-sales service to ensure stable long-term performance.",
  },
  {
    q: "What affects indoor LED display price in Cambodia?",
    a: "Key factors include pixel pitch, screen size, module/cabinet quality, controller/processor, installation method, site conditions and warranty/support scope. Share your requirements for a project-based quotation.",
  },
  {
    q: "How long does an indoor LED display last?",
    a: "A quality indoor LED display can deliver long service life when installed correctly and maintained properly. Brightness settings, daily runtime, ventilation and power protection impact lifespan.",
  },
];

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
}

export default function IndoorLedDisplayPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/cambodia/indoor-led-hero.webp"
            alt="Indoor LED display video wall in Cambodia"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
          <div className="absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,.35)_1px,transparent_0)] [background-size:18px_18px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
            <div className="text-white">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
                Indoor LED Display Cambodia • Fine-Pitch LED Video Wall
              </p>

              <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">
                Premium Indoor LED Display for Corporate, Retail & Control Rooms
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
                We deliver end-to-end indoor LED solutions across Cambodia—pixel pitch
                selection, controller setup, professional installation, calibration, and dependable
                after-sales support. Ideal for boardrooms, showrooms, malls, studios, auditoriums,
                and command centers.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/855XXXXXXXXX"
                  target="_blank"
                  rel="noopener"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-slate-950 hover:bg-white/90"
                >
                  Get Quotation on WhatsApp
                </a>
                <a
                  href="#pixel-pitch"
                  className="rounded-xl border border-white/35 bg-white/10 px-5 py-3 text-sm font-extrabold text-white hover:bg-white/15"
                >
                  Pixel Pitch Guide
                </a>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-white/85">
                {[
                  "Pro Installation",
                  "Factory-grade Calibration",
                  "Warranty + After-Sales Support",
                  "Nationwide Cambodia Service",
                ].map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-white/25 bg-white/10 px-3 py-2"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lead helper card */}
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur">
              <h2 className="text-base font-extrabold">Tell us your project</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Share these 5 items to get the fastest accurate quotation:
              </p>

              <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-white/90">
                <li>City + installation area photo</li>
                <li>Screen size (W × H) or wall size</li>
                <li>Closest viewing distance</li>
                <li>Use type (meeting / retail / control room / stage)</li>
                <li>Content source (laptop / live camera / NVR / TV feed)</li>
              </ol>

              <div className="mt-4 rounded-xl bg-white/10 px-4 py-3 text-xs text-white/85">
                Typical indoor pitches: <b>P1.25</b> / <b>P1.56</b> / <b>P1.86</b> / <b>P2</b> /
                <b> P2.5</b> / <b>P3</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST VALUE ================= */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Crystal-clear visual quality",
              d: "Fine-pitch indoor LED delivers sharp text, clean charts, and smooth video—perfect for close viewing with wide angles and accurate color.",
            },
            {
              t: "Stable performance for daily business",
              d: "Proper power & signal design, correct controller configuration and clean cable management reduce downtime and ensure reliable long-term operation.",
            },
            {
              t: "End-to-end project delivery",
              d: "From consultation to installation, calibration, testing & handover—plus after-sales support and spare parts planning to keep your screen running.",
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,.05)]"
            >
              <h2 className="text-lg font-extrabold">{x.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
            Where Indoor LED Displays Are Used in Cambodia
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
            Indoor LED video walls are widely used for premium branding, real-time information, and immersive customer experience.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Corporate Offices", "Boardroom, meeting room, training center"],
              ["Retail & Malls", "Showroom video wall, promotion signage"],
              ["Hotels & Lobbies", "Welcome wall, event halls, banquet areas"],
              ["Control Rooms", "Monitoring, command center dashboards"],
              ["Education", "Auditorium, smart classroom, seminar hall"],
              ["Studios", "Broadcast, streaming, production rooms"],
              ["Events", "Indoor stage, conference & expo"],
              ["Public Sector", "Information centers, service counters"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-sm font-extrabold">{t}</div>
                <div className="mt-1 text-xs leading-relaxed text-slate-600">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TYPES ================= */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
          Indoor LED Display Types
        </h2>

        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          {[
            {
              t: "Indoor LED Video Wall",
              d: "Large seamless walls for malls, lobbies, showrooms and experience centers.",
              li: ["Seamless big screen feel", "Flexible size & aspect ratio", "High-impact branding"],
            },
            {
              t: "Fine-Pitch LED (P1.25–P2)",
              d: "Ultra-sharp visuals for close viewing—boardrooms, studios, and control rooms.",
              li: ["Sharp text & dashboards", "Premium finish & high contrast", "Best for 2–5m viewing"],
            },
            {
              t: "Retail Digital Signage",
              d: "High-impact indoor signage to drive engagement and conversions.",
              li: ["Promotions & campaigns", "Scheduled playlists", "Ideal for showroom front walls"],
            },
            {
              t: "Stage / Auditorium Indoor LED",
              d: "Smooth refresh & bright visuals for presentations and live content.",
              li: ["Wide viewing angle", "Camera-friendly performance", "Custom structure options"],
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,.05)]"
            >
              <h3 className="text-lg font-extrabold">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.d}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {x.li.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PIXEL PITCH GUIDE ================= */}
      <section id="pixel-pitch" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
            Pixel Pitch Guide for Indoor LED
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
            Choosing the correct pixel pitch is the #1 factor for clarity, comfort, and budget.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 gap-0 border-b border-slate-200 bg-slate-100 text-sm font-extrabold text-slate-900 sm:grid-cols-3">
              <div className="p-4">Pixel Pitch</div>
              <div className="p-4">Best Viewing Distance</div>
              <div className="p-4">Recommended For</div>
            </div>

            {[
              ["P1.25 / P1.56", "~1.5m – 3m", "Control rooms, studios, premium boardrooms"],
              ["P1.86 / P2.0", "~2m – 5m", "Conference rooms, corporate, premium retail"],
              ["P2.5 / P3.0", "~3m – 8m", "Malls, showrooms, auditoriums, training halls"],
            ].map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-1 border-b border-slate-200 text-sm text-slate-700 sm:grid-cols-3"
              >
                <div className="p-4 font-extrabold text-slate-900">{row[0]}</div>
                <div className="p-4">{row[1]}</div>
                <div className="p-4">{row[2]}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl bg-slate-900 px-5 py-4 text-sm text-white">
            <b>Pro Tip:</b> Share your room size + nearest viewing distance—Mugnee will recommend the best pitch,
            controller, and total resolution so your content looks perfect.
          </div>
        </div>
      </section>

      {/* ================= INSTALLATION PROCESS ================= */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
          Professional Installation Process
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
          Real performance depends on installation accuracy and calibration—not only hardware.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {[
            ["1) Site survey & planning", "Wall check, structure method, power plan and content source planning."],
            ["2) Structure & cable design", "Frame alignment, clean signal + power layout, service-friendly access."],
            ["3) Setup & calibration", "Controller config, brightness/color balancing, pixel testing and handover."],
          ].map(([t, d]) => (
            <div
              key={t}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,.05)]"
            >
              <h3 className="text-lg font-extrabold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-semibold text-slate-700">
          {["Framework", "Signal & Power", "Controller Setup", "Calibration", "Final Testing", "Training"].map(
            (x) => (
              <span
                key={x}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2"
              >
                {x}
              </span>
            )
          )}
        </div>
      </section>

      {/* ================= PRICE FACTORS (NO HARD PRICE) ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
            Indoor LED Display Price Factors in Cambodia
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
            Indoor LED cost depends on configuration and project conditions. We prepare a project-based quotation for accuracy.
          </p>

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Pixel pitch (P1.25 / P1.56 / P1.86 / P2 / P2.5 / P3)</li>
                <li>Total screen size (W × H) and resolution target</li>
                <li>Module/cabinet quality & refresh requirement</li>
                <li>Controller/processor (NovaStar, Colorlight etc.)</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Structure & installation method (wall / hanging / custom frame)</li>
                <li>Power stability + protection (surge/earthing)</li>
                <li>Site conditions & access (lift, height, working hours)</li>
                <li>Warranty, spare parts plan & after-sales scope</li>
              </ul>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/855XXXXXXXXX"
              target="_blank"
              rel="noopener"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
            >
              Request a Custom Quotation
            </a>
            <a
              href="#faq"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              View FAQ
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREA ================= */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl bg-slate-900 p-6 text-center text-white">
          <h2 className="text-2xl font-extrabold">Serving Nationwide in Cambodia</h2>
          <p className="mt-2 text-sm text-white/85">
            Phnom Penh • Siem Reap • Sihanoukville • Battambang • and project support across the country.
          </p>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-7 max-w-3xl space-y-3">
          {FAQ_ITEMS.map((x) => (
            <details
              key={x.q}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,.04)]"
            >
              <summary className="cursor-pointer text-sm font-extrabold text-slate-900">
                {x.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{x.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ================= RELATED PRODUCTS ================= */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
          Indoor LED Display Products
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-slate-600">
          Browse indoor LED modules and related accessories. No public pricingâ€”request a
          quotation for your project.
        </p>

        <div className="mt-6">
          <ProductGrid
            categoryId="indoor_led_display"
            showCategoryFilters={false}
            showSort={false}
            columns={3}
          />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
            <h2 className="text-2xl font-extrabold">Ready to build your Indoor LED Video Wall?</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              Get a free consultation and a project-based quotation for your indoor LED display in Cambodia.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+855XXXXXXXXX"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-slate-800"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/855XXXXXXXXX"
                target="_blank"
                rel="noopener"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                WhatsApp
              </a>
              <a
                href="mailto:sales@mugnee.com.kh"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                Email
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Address: Your Address, Phnom Penh, Cambodia (replace)
            </p>

            {/* Optional internal links */}
            <div className="mt-4 text-xs text-slate-500">
              Explore:{" "}
              <Link className="underline hover:text-slate-800" href="/outdoor-led-display/">
                Outdoor LED Display
              </Link>{" "}
              •{" "}
              <Link className="underline hover:text-slate-800" href="/rental-led-display/">
                Rental LED Display
              </Link>{" "}
              •{" "}
              <Link className="underline hover:text-slate-800" href="/contact/">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
