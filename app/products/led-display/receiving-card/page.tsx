import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/led-display/receiving-card";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Receiving Card for LED Display in Cambodia | Mugnee",
  description:
    "High-performance LED receiving cards for indoor and outdoor LED displays in Cambodia. Stable data transfer, wide IC compatibility, flexible scan modes, and professional setup support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Receiving Card for LED Display in Cambodia",
    description:
      "Reliable receiving cards for LED video walls with stable data transfer, wide module compatibility, and expert configuration support.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const features = [
  "Stable data distribution across large LED walls",
  "Wide module and driver IC compatibility",
  "Flexible scan modes for fine-pitch displays",
  "High refresh and grayscale support (model dependent)",
  "Smart configuration tools and diagnostics",
  "Dual data input / backup link options (model dependent)",
];

const useCases = [
  "Indoor fine-pitch video walls",
  "Outdoor digital billboards",
  "Conference halls and auditoriums",
  "Control rooms and command centers",
  "Retail, mall, and showroom signage",
  "Stage and event rental LED screens",
];

const checklist = [
  "Total pixel load and screen resolution",
  "Module interface type (HUB75/HUB75E) and scan ratio",
  "Driver IC compatibility and PWM requirements",
  "Redundancy needs for critical installations",
  "Control system type (synchronous / asynchronous)",
  "Operating environment (indoor/outdoor, heat, dust)",
];

const faqs = [
  {
    q: "What does a receiving card do in an LED display?",
    a: "The receiving card sits inside the LED cabinet. It takes image data from the sending system and distributes it to each module, controlling brightness, refresh, and scan timing for smooth visuals.",
  },
  {
    q: "Is one receiving card enough for a large screen?",
    a: "Large LED displays use multiple receiving cards. The total number depends on pixel load, cabinet size, and the maximum capacity of each card.",
  },
  {
    q: "Can you match receiving cards with my existing modules?",
    a: "Yes. We confirm module interface, driver IC type, and scan ratio, then recommend a compatible card for stable performance.",
  },
  {
    q: "Do you help with configuration and testing?",
    a: "Yes. We provide setup assistance, mapping, calibration guidance, and post-install support for stable operation.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">LED Display Components</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Receiving Card for LED Display in Cambodia
          </h1>
          <p className="mt-3 text-slate-700">
            Build a stable, high-quality LED wall with the right receiving card. We supply
            reliable receiver cards that ensure smooth data distribution, clean grayscale,
            and consistent refresh across indoor and outdoor LED screens.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get a Free Quotation
            </Link>
            <Link
              href="/led-display"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Explore LED Display Solutions
            </Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Serving Phnom Penh - Siem Reap - Sihanoukville
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Quick Summary</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
            <li>Optimized for stable video walls and signage</li>
            <li>Compatible with common LED modules and ICs</li>
            <li>Supports flexible scan modes and high refresh</li>
            <li>Expert configuration and after-sales support</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">What Is a Receiving Card?</h2>
        <p className="mt-2 text-slate-700">
          A receiving card (receiver card) is the core controller inside LED cabinets. It
          receives video data from the sending system and drives each LED module with the
          correct scan timing, brightness, and grayscale levels. The right receiving card
          ensures a stable image, accurate color, and smooth playback.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Key Capabilities</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {features.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Typical Technical Highlights</h2>
        <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-2 gap-0 text-sm">
            <div className="border-b border-slate-200 px-4 py-3 font-medium text-slate-700">
              Interface
            </div>
            <div className="border-b border-slate-200 px-4 py-3 text-slate-700">
              HUB75 / HUB75E (model dependent)
            </div>
            <div className="border-b border-slate-200 px-4 py-3 font-medium text-slate-700">
              Pixel Capacity
            </div>
            <div className="border-b border-slate-200 px-4 py-3 text-slate-700">
              Varies by card model and screen layout
            </div>
            <div className="border-b border-slate-200 px-4 py-3 font-medium text-slate-700">
              Scan Support
            </div>
            <div className="border-b border-slate-200 px-4 py-3 text-slate-700">
              Static to high-scan ratios (depending on modules)
            </div>
            <div className="px-4 py-3 font-medium text-slate-700">Diagnostics</div>
            <div className="px-4 py-3 text-slate-700">
              Smart configuration & status indicators (model dependent)
            </div>
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Exact specifications depend on the receiving card model and the LED modules used.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Compatibility & Control Systems</h2>
        <p className="mt-2 text-slate-700">
          We select receiving cards based on your screen type, pixel pitch, driver IC, and
          control system. Our engineers ensure proper mapping, scanning, and brightness
          calibration for consistent performance.
        </p>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          Works with common LED control systems and supports both fixed installation and
          rental LED cabinets.
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Where Receiving Cards Are Used</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {useCases.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">How to Choose the Right Receiving Card</h2>
        <p className="mt-2 text-slate-700">
          Selecting the correct receiving card ensures smooth playback, accurate colors, and
          long-term reliability. We recommend checking the following before you buy:
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Installation & After-Sales Support</h2>
        <p className="mt-2 text-slate-700">
          Our team assists with installation, configuration, and testing, so your LED display
          runs reliably from day one. We also provide spare parts guidance and responsive
          support to minimize downtime.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-4 grid gap-3">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.q}</p>
              <p className="mt-1 text-sm text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Need the Right Receiving Card?</h2>
        <p className="mt-2 text-slate-700">
          Share your screen size, pixel pitch, and usage scenario. We'll recommend a
          compatible receiving card and provide a clear quotation.
        </p>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Contact Mugnee Cambodia
          </Link>
        </div>
      </section>
    </main>
  );
}

