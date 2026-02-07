import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/solutions";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Solutions in Cambodia | LED Display, Digital Signage & Access Control � Mugnee",
  description:
    "Explore Mugnee Cambodia solutions: LED display, digital signage, smart classroom, access control, PA systems, and turnstile gates. End-to-end design, installation, and support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Solutions in Cambodia | Mugnee Cambodia",
    description:
      "Complete solutions for LED display, digital signage, smart classroom, access control, PA system, and turnstile gates with local support in Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const solutions = [
  {
    title: "Indoor LED Display",
    desc: "High-resolution indoor LED walls for conference rooms, retail, and events.",
    href: "/products/indoor-led-display",
  },
  {
    title: "Outdoor LED Billboard",
    desc: "Weather-resistant outdoor LED screens for advertising and public information.",
    href: "/solutions/led-billboard-cambodia",
  },
  {
    title: "Digital Signage",
    desc: "Retail and mall signage systems for promotions, wayfinding, and branding.",
    href: "/solutions/digital-signage-cambodia",
  },
  {
    title: "Smart Classroom",
    desc: "Interactive learning solutions with displays, IFP, and control systems.",
    href: "/solutions/smart-classroom-cambodia",
  },
  {
    title: "Access Control",
    desc: "Office and building access systems with RFID, QR, and biometric options.",
    href: "/solutions/access-control-cambodia",
  },
  {
    title: "PA System",
    desc: "Public address solutions for factories, campuses, and public venues.",
    href: "/solutions/pa-system-cambodia",
  },
  {
    title: "Turnstile Gate",
    desc: "Entry control gates with integration to access and attendance systems.",
    href: "/products/turnstile-gate",
  },
];

const metrics = [
  { label: "Projects Delivered", value: "150+" },
  { label: "Average Install Time", value: "7�14 Days" },
  { label: "Cities Served", value: "10+" },
  { label: "After-Sales Support", value: "Local Team" },
];

const clientLogos = [
  "Retail & Malls",
  "Factories",
  "Schools",
  "Hospitals",
  "Hotels",
  "Government",
];

const miniCases = [
  {
    title: "Retail Mall Digital Signage",
    detail:
      "Multi-zone signage with central content control, improving promotions and wayfinding across floors.",
  },
  {
    title: "Factory PA + Safety Announcements",
    detail:
      "Outdoor horns and indoor paging integrated for shift calls and emergency alerts.",
  },
  {
    title: "Office Access Control + Turnstile",
    detail:
      "RFID access and visitor management with turnstiles for secure, smooth entry flow.",
  },
];

const useCases = [
  "Retail stores, malls, and showrooms",
  "Factories and industrial zones",
  "Corporate offices and headquarters",
  "Schools, universities, and training centers",
  "Hotels, hospitals, and public venues",
  "Outdoor advertising and roadside billboards",
];

const deliverySteps = [
  {
    title: "Site Survey & Requirements",
    detail: "We assess your space, traffic, and goals to define the right solution.",
  },
  {
    title: "Design & BOQ",
    detail: "Engineering layout, product selection, and a clear bill of quantity.",
  },
  {
    title: "Installation & Commissioning",
    detail: "Professional installation, testing, and performance tuning.",
  },
  {
    title: "Training & Handover",
    detail: "User training for daily operation and basic troubleshooting.",
  },
  {
    title: "Maintenance & Support",
    detail: "On-call support, spare parts, and preventive maintenance options.",
  },
];

const reasons = [
  "Local Cambodia team with on-site support",
  "One-vendor responsibility for design to commissioning",
  "Professional installation with safety standards",
  "Clear documentation and after-sales support",
];

const faqs = [
  {
    q: "Do you handle both supply and installation?",
    a: "Yes. We provide complete solutions including supply, installation, commissioning, and after-sales support.",
  },
  {
    q: "Can you customize solutions for my building?",
    a: "Yes. We tailor system design, product selection, and layout for your specific site and budget.",
  },
  {
    q: "Do you provide maintenance plans?",
    a: "Yes. We offer preventive maintenance and AMC options for long-term reliability.",
  },
  {
    q: "Which areas do you serve in Cambodia?",
    a: "We serve Phnom Penh, Siem Reap, Sihanoukville, and other provinces on request.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Solutions</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Solutions in Cambodia</h1>
          <p className="mt-3 text-slate-700">
            We deliver complete solutions for LED display, digital signage, smart classrooms,
            access control, PA systems, and turnstile gates. From site survey to installation
            and long-term support, Mugnee Cambodia provides end-to-end delivery.
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
            <li>End-to-end delivery: design to commissioning</li>
            <li>Local Cambodia team and after-sales support</li>
            <li>Solutions for indoor & outdoor environments</li>
            <li>Customizable packages by budget and site</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Success Metrics</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Trusted By</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-6">
          {clientLogos.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-center text-sm text-slate-600"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Mini Case Studies</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {miniCases.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Complete Solutions Portfolio</h2>
        <p className="mt-2 text-slate-700">
          Choose a solution that fits your business goals. Our team can customize specifications
          based on location, traffic, and usage requirements.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {solutions.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-300"
            >
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Where Our Solutions Work Best</h2>
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
          {deliverySteps.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Why Mugnee Cambodia</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {reasons.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">Need a Solution?</h2>
        <p className="mt-2 text-slate-700">
          Share your project goals and location. We�ll recommend the right solution and
          provide a clear quotation.
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
