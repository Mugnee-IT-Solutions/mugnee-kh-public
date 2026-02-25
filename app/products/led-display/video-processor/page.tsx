/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/led-display/video-processor";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "LED Video Processor Cambodia | Best Price & Installation",
  description:
    "Professional LED video processors in Cambodia for smooth scaling, multi-input switching, and stable LED wall output. Ideal for indoor & outdoor LED displays with expert setup support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "LED Video Processor Cambodia | Best Price & Installation",
    description:
      "Reliable video processors for LED walls with multi-input switching, clean scaling, and stable output. Expert configuration & support by Mugnee Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const features = [
  "Multi-input switching (HDMI/DVI/DP/SDI - model dependent)",
  "Advanced scaling to match LED wall resolution",
  "Low-latency video processing for live content",
  "Dual-window / PIP support for presentations",
  "Seamless scene switching and presets",
  "Stable output for 24/7 LED signage",
];

const highlights = [
  { label: "Inputs", value: "HDMI, DVI, DP, SDI (model dependent)" },
  { label: "Output", value: "LED sending card / processor output" },
  { label: "Resolution", value: "Up to 4K on supported models" },
  { label: "Control", value: "Front panel, software, and presets" },
];

const useCases = [
  "Conference rooms and auditoriums",
  "Retail and mall digital signage",
  "Outdoor advertising LED billboards",
  "Control rooms and monitoring walls",
  "Event stages and live production",
  "Broadcast studios and worship halls",
];

const checklist = [
  "Total LED wall resolution and aspect ratio",
  "Required input formats (HDMI/DP/SDI, etc.)",
  "Need for PIP / multi-window layouts",
  "Latency tolerance for live events",
  "Future expansion or 4K upgrade plans",
  "Compatibility with your sending system",
];

const faqs = [
  {
    q: "What does a video processor do for an LED display?",
    a: "A video processor takes input sources (like HDMI or DP), scales and formats the video, and outputs a clean signal that matches the LED wall's resolution for smooth playback.",
  },
  {
    q: "Do I need a video processor for every LED wall?",
    a: "For professional LED walls, a video processor is strongly recommended. It ensures proper scaling, stable output, and easy switching between multiple sources.",
  },
  {
    q: "Can you configure the processor for my LED wall?",
    a: "Yes. We handle mapping, resolution setup, and switching presets so your LED wall runs reliably from day one.",
  },
  {
    q: "Which inputs are supported?",
    a: "Support varies by model. Common inputs include HDMI, DVI, DP, and SDI. We'll recommend a processor that fits your exact sources.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">LED Display Components</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            LED Video Processor in Cambodia
          </h1>
          <p className="mt-3 text-slate-700">
            A video processor is the brain of a professional LED wall, cleanly scaling input
            sources and delivering stable, synchronized output to your LED display. We
            supply reliable processors and complete configuration support for indoor and
            outdoor LED screens.
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
            <li>Stable video output and clean scaling</li>
            <li>Multiple input switching for events & signage</li>
            <li>PIP and multi-window layouts (model dependent)</li>
            <li>Expert configuration and after-sales support</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">What Is a Video Processor?</h2>
        <p className="mt-2 text-slate-700">
          A video processor converts and scales input signals to match the exact resolution
          of your LED wall. It keeps the display stable, prevents distortion, and allows
          smooth switching between multiple sources, essential for professional installations.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Key Features</h2>
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
          Specifications vary by model. We recommend the right processor based on your
          screen size, inputs, and content workflow.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Inputs, Switching & Output</h2>
        <p className="mt-2 text-slate-700">
          Modern LED video processors support multiple input sources and deliver a clean
          output to your sending system. This makes them ideal for events, control rooms, and
          business signage where switching between content sources is critical.
        </p>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          We help you choose the correct model based on input type, required resolution, and
          the LED wall's pixel load.
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Where Video Processors Are Used</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">How to Choose the Right Video Processor</h2>
        <p className="mt-2 text-slate-700">
          The best processor depends on your LED wall resolution, input sources, and how you
          present content. Use this checklist to decide quickly:
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
          We handle setup, resolution mapping, and switching presets to ensure smooth
          operation. Our team also provides ongoing support, spare parts guidance, and
          troubleshooting for mission-critical LED displays.
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
        <h2 className="text-xl font-semibold text-slate-900">Need a Video Processor?</h2>
        <p className="mt-2 text-slate-700">
          Share your LED wall size, required inputs, and usage scenario. We'll recommend a
          reliable processor and provide a clear quotation.
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


