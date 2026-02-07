import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/solutions/smart-classroom-cambodia";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Smart Classroom Solutions in Cambodia | Mugnee",
  description:
    "Smart classroom solutions in Cambodia with interactive flat panels, wireless sharing, and audio systems. Improve engagement with modern teaching tools and local installation support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Smart Classroom Solutions in Cambodia",
    description:
      "Interactive teaching solutions with smart displays, wireless sharing, and classroom audio. End-to-end setup and support by Mugnee Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const components = [
  {
    title: "Interactive Flat Panel",
    desc: "Touch-enabled display for annotation, multimedia lessons, and collaboration.",
  },
  {
    title: "Wireless Screen Sharing",
    desc: "Teachers and students can share screens instantly from laptops or tablets.",
  },
  {
    title: "Classroom Audio",
    desc: "Clear voice amplification and speakers for large classrooms.",
  },
  {
    title: "Central Control",
    desc: "One-touch control for display, audio, and connected devices.",
  },
  {
    title: "Lecture Capture (Optional)",
    desc: "Record and stream lessons for hybrid learning and revision.",
  },
];

const outcomes = [
  "Higher student engagement and participation",
  "Improved content delivery with multimedia",
  "Faster lesson setup and time savings",
  "Support for hybrid and remote learning",
  "Better collaboration and group activities",
  "Consistent teaching quality across classrooms",
];

const useCases = [
  "Primary and secondary schools",
  "Universities and lecture halls",
  "Private training centers",
  "STEM and lab classrooms",
  "Corporate training rooms",
  "Language institutes",
];

const processSteps = [
  {
    title: "Needs Assessment",
    detail: "We understand class size, curriculum, and device requirements.",
  },
  {
    title: "Solution Design",
    detail: "Display size, audio coverage, and connectivity planning.",
  },
  {
    title: "Installation",
    detail: "Safe mounting, wiring, and system configuration.",
  },
  {
    title: "Teacher Training",
    detail: "Hands-on training for daily classroom use.",
  },
  {
    title: "Maintenance & Support",
    detail: "AMC options, updates, and local troubleshooting.",
  },
];

const faqs = [
  {
    q: "Is a smart classroom suitable for small schools?",
    a: "Yes. We scale solutions from single classrooms to full campuses based on budget and needs.",
  },
  {
    q: "Do teachers need special training?",
    a: "We provide training so teachers can use interactive tools confidently from day one.",
  },
  {
    q: "Can students connect their devices?",
    a: "Yes. Wireless sharing allows students to present content easily under teacher control.",
  },
  {
    q: "Do you provide after-sales support?",
    a: "Yes. We offer local support and AMC plans to keep systems running smoothly.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Solutions</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Smart Classroom Solutions in Cambodia
          </h1>
          <p className="mt-3 text-slate-700">
            Smart classrooms combine interactive displays, wireless sharing, and audio systems
            to improve teaching quality and student engagement. Mugnee Cambodia provides full
            setup, training, and long-term support for schools and training centers.
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
            <li>Interactive learning with touch displays</li>
            <li>Wireless screen sharing for teachers & students</li>
            <li>Clear audio for large classrooms</li>
            <li>Local training and after-sales support</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">What Is a Smart Classroom?</h2>
        <p className="mt-2 text-slate-700">
          A smart classroom integrates interactive displays, connectivity tools, and audio
          systems to make lessons more engaging and collaborative. It helps teachers deliver
          multimedia lessons and supports modern teaching methods.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Core Components</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {components.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Teaching Outcomes</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {outcomes.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">Where Smart Classrooms Are Used</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">Implementation Process</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">Maintenance & AMC Options</h2>
        <p className="mt-2 text-slate-700">
          AMC plans include preventive checks, software updates, and quick support to keep
          classrooms running without interruption.
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
        <h2 className="text-xl font-semibold text-slate-900">Build a Smart Classroom</h2>
        <p className="mt-2 text-slate-700">
          Share your class size, subjects, and budget. We�ll recommend the right smart
          classroom package and provide a clear quotation.
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
