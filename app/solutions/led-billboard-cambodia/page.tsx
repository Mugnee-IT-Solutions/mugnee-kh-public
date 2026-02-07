import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/solutions/led-billboard-cambodia";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "LED Billboard & Outdoor Advertising in Cambodia | Mugnee",
  description:
    "High-impact LED billboard solutions in Cambodia for outdoor advertising. Bright, weather-resistant LED screens with professional design, installation, and maintenance.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "LED Billboard & Outdoor Advertising in Cambodia",
    description:
      "Outdoor LED billboard solutions with high brightness, weatherproof design, and local Cambodia support for advertising and public messaging.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const benefits = [
  "24/7 visibility with high-brightness LED panels",
  "Dynamic content for promotions, announcements, and ads",
  "Long-term ROI with low maintenance cost",
  "Weather-resistant for Cambodia�s heat and rain",
  "Scalable sizes for roadside and city locations",
  "Remote content management and scheduling",
];

const highlights = [
  { label: "Brightness", value: "5,500�8,000 nits (model dependent)" },
  { label: "Protection", value: "Outdoor IP65 weather-resistant cabinet" },
  { label: "Pixel Pitch", value: "P4�P10+ for outdoor viewing distances" },
  { label: "Power", value: "Energy-efficient with smart brightness control" },
  { label: "Control", value: "Remote management and scheduling" },
];

const useCases = [
  "Roadside advertising and city billboards",
  "Mall facades and commercial towers",
  "Tourism boards and public announcements",
  "Event promotions and temporary campaigns",
  "Highway signage and transport hubs",
  "Retail branding and showroom visibility",
];

const processSteps = [
  {
    title: "Site Survey",
    detail: "We assess viewing distance, traffic flow, and mounting safety.",
  },
  {
    title: "Design & Engineering",
    detail: "Structural design, pixel pitch selection, and BOQ planning.",
  },
  {
    title: "Installation",
    detail: "Professional mounting, cabling, and electrical safety work.",
  },
  {
    title: "Commissioning",
    detail: "Color calibration, brightness tuning, and system testing.",
  },
  {
    title: "Training & Support",
    detail: "Content management training and after-sales support.",
  },
];

const contentTips = [
  "High-contrast visuals and short messages for roadside impact",
  "Day/night scheduling for better energy efficiency",
  "Location-based campaigns to maximize ROI",
  "Regular content refresh to keep engagement high",
];

const faqs = [
  {
    q: "What size LED billboard should I choose?",
    a: "The size depends on viewing distance, location, and budget. We recommend a site survey to determine the optimal size and pixel pitch.",
  },
  {
    q: "Can LED billboards run 24/7 in Cambodia�s weather?",
    a: "Yes. Our outdoor LED billboards use IP65-rated cabinets designed for heat, humidity, and rain.",
  },
  {
    q: "Do you provide content management?",
    a: "We provide software setup and training so you can schedule and manage content remotely.",
  },
  {
    q: "How long does installation take?",
    a: "Typical projects take 7�14 days depending on size, structural work, and electrical setup.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Solutions</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            LED Billboard & Outdoor Advertising in Cambodia
          </h1>
          <p className="mt-3 text-slate-700">
            Outdoor LED billboards deliver powerful visibility for brands, events, and public
            information. Mugnee Cambodia provides end-to-end LED billboard solutions�from
            design and installation to maintenance and content management.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get a Free Quotation
            </Link>
            <Link
              href="/projects"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              View Projects
            </Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Serving Phnom Penh � Siem Reap � Sihanoukville
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Quick Summary</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
            <li>High-brightness outdoor LED billboards</li>
            <li>Weather-resistant IP65 cabinets</li>
            <li>Remote content management</li>
            <li>Local Cambodia installation & support</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Why LED Billboards Work</h2>
        <p className="mt-2 text-slate-700">
          LED billboards capture attention with bright visuals, moving content, and real-time
          messaging. They deliver better engagement than static boards, making them ideal for
          outdoor advertising in busy Cambodia locations.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Key Benefits</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {benefits.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">Technical Highlights</h2>
        <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-2 gap-0 text-sm">
            {highlights.map((item) => (
              <div key={item.label} className="contents">
                <div className="border-b border-slate-200 px-4 py-3 font-medium text-slate-700">
                  {item.label}
                </div>
                <div className="border-b border-slate-200 px-4 py-3 text-slate-700">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Specifications vary by model and location. Our team recommends the right configuration
          based on viewing distance and traffic conditions.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Where Outdoor LED Billboards Are Used</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">Delivery Process</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {processSteps.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Content Strategy Tips</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {contentTips.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">Maintenance & AMC Options</h2>
        <p className="mt-2 text-slate-700">
          Preventive maintenance keeps your LED billboard running at peak brightness. We
          offer AMC plans that include cleaning, calibration, and emergency support.
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
        <h2 className="text-xl font-semibold text-slate-900">Need an Outdoor LED Billboard?</h2>
        <p className="mt-2 text-slate-700">
          Share your location, budget, and campaign goals. We�ll recommend a billboard size
          and provide a clear quotation.
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
