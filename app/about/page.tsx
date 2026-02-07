import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/about";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "About Mugnee Cambodia | Mission, Vision & Company Story",
  description:
    "Mugnee Cambodia delivers LED display, digital signage, smart classroom, PA system, and access control solutions with end-to-end service. Learn our mission, vision, values, and presence in Cambodia and Bangladesh.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "About Mugnee Cambodia",
    description:
      "Company story, mission, vision, values, and services for LED display, digital signage, smart classroom, PA system, and access control solutions in Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const heroTags = [
  "LED Display",
  "Digital LED Signage",
  "Smart Board",
  "PA System",
  "Turnstile Gate",
  "Access Control",
];

const highlights = [
  {
    title: "Our Vision",
    desc:
      "Lead smart technology progress with trusted LED display and digital signage solutions that create future-ready environments.",
  },
  {
    title: "Our Mission",
    desc:
      "Deliver dependable, scalable systems with professional execution, transparency, and continuous after-sales support.",
  },
  {
    title: "Our Strength",
    desc:
      "Experienced engineers, structured installation, genuine components, and long-term service commitment for high uptime.",
  },
];

const values = [
  {
    title: "Integrity",
    desc:
      "We work with honesty, transparency, and authentic components to build long-term trust.",
  },
  {
    title: "Innovation",
    desc:
      "We apply modern controllers, smart automation, and best integration practices for reliability.",
  },
  {
    title: "Excellence",
    desc:
      "Quality checks, safety standards, and disciplined delivery across every project.",
  },
  {
    title: "Customer Commitment",
    desc:
      "Training, troubleshooting, preventive maintenance, and AMC support after installation.",
  },
];

const storyPoints = [
  "Founded in 2014 to deliver engineering-grade LED and smart technology solutions.",
  "End-to-end execution: design, supply, installation, integration, commissioning, and support.",
  "Direct operations in Cambodia through Mugnee Multiple Co., Ltd with consistent service standards.",
];

const presence = [
  {
    title: "Bangladesh",
    desc: "Nationwide project delivery, installation, and long-term support.",
  },
  {
    title: "Cambodia",
    desc:
      "Direct operations via Mugnee Multiple Co., Ltd with local team, installation, and after-sales support.",
  },
];

const authorizedDistributor = [
  "Authorized distributor in Bangladesh: Renex Digital (distribution & local support).",
  "Helps ensure authentic products, documentation, and dependable service support in Bangladesh.",
];

const whatWeDo = [
  "Requirement analysis & site survey (power, networking, structure, viewing distance).",
  "Solution design (module selection, controller planning, pixel pitch & brightness).",
  "Supply & installation (genuine products, safe mounting, clean cabling).",
  "Integration & commissioning (configuration, calibration, testing).",
  "After-sales support (training, troubleshooting, AMC options).",
];

const cambodiaOps = [
  "Same engineering process as Bangladesh: design ? supply ? installation ? commissioning.",
  "Faster local troubleshooting with Cambodia-based support.",
  "Long-term maintenance options for uptime and reliability.",
];

const offers = [
  {
    title: "LED Display & Video Wall",
    desc: "Indoor & outdoor LED displays, fine-pitch video walls, rental LED, control rooms.",
  },
  {
    title: "Digital LED Signage",
    desc: "Commercial signage for malls, campuses, showrooms, and roadside advertising.",
  },
  {
    title: "Smart Board / Smart Classroom",
    desc: "Interactive displays, smart teaching & meeting rooms, OPS/PC integration.",
  },
  {
    title: "PA System & Audio",
    desc: "Public address systems for institutions, factories, mosques, and large venues.",
  },
  {
    title: "Access Control Solutions",
    desc: "Turnstile gates, door access, attendance, biometrics, and visitor control.",
  },
  {
    title: "Custom Integration & Support",
    desc: "Networking, power distribution, mounting, commissioning, and AMC support.",
  },
];

const achievements = [
  {
    title: "Institutional & Government Delivery",
    desc: "Projects executed with compliant documentation and professional handover.",
  },
  {
    title: "Long-Term Client Trust",
    desc: "Built on transparency, genuine products, and reliable support.",
  },
  {
    title: "Support & Maintenance Capability",
    desc: "Dedicated support team, spare parts planning, and preventive maintenance.",
  },
];

const sisterConcerns = [
  {
    title: "Mugnee Multiple Co., Ltd",
    desc:
      "Technology and engineering solutions for LED display, smart board, PA system, and turnstile gates with end-to-end delivery.",
  },
  {
    title: "Mugnee IT Solutions",
    desc:
      "Web, software, and application development for secure, scalable business platforms.",
  },
  {
    title: "Mugnee Service Limited",
    desc:
      "Outsourcing manpower solutions with technical staff and operational support teams.",
  },
];

const faqs = [
  {
    q: "Do you operate directly in Cambodia?",
    a: "Yes. We operate in Cambodia through Mugnee Multiple Co., Ltd with local installation and support.",
  },
  {
    q: "What services do you provide after installation?",
    a: "We provide training, troubleshooting, preventive maintenance, and AMC support.",
  },
  {
    q: "Can you customize solutions for my site?",
    a: "Yes. We tailor system design based on space, traffic flow, and budget.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">About Mugnee Cambodia</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Mugnee Cambodia</h1>
          <p className="mt-3 text-slate-700">
            Mugnee Cambodia delivers end-to-end solutions for LED display, digital signage,
            smart classroom, PA system, and access control�covering design, supply,
            installation, commissioning, training, and after-sales support.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Contact Us
            </Link>
            <Link
              href="/service"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Service & Support
            </Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Serving Phnom Penh � Siem Reap � Sihanoukville
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Quick Summary</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
            <li>Founded in 2014 with engineering-grade delivery</li>
            <li>Direct Cambodia operations with local support</li>
            <li>End-to-end project execution and AMC</li>
            <li>Genuine products and structured commissioning</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Mission, Vision & Strength</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Our Core Values</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {values.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Our Story</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
          {storyPoints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Our Presence</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {presence.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">Authorized Distributor (Bangladesh)</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
          {authorizedDistributor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-500">
          Note: The distributor partnership supports Bangladesh market coverage. Cambodia
          operations are handled directly by Mugnee Multiple Co., Ltd.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">What We Do</h2>
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
          {whatWeDo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Cambodia Operations</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {cambodiaOps.map((item) => (
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
        <h2 className="text-xl font-semibold text-slate-900">What We Offer</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {offers.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Our Achievements</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {achievements.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-900">Our Sister Concerns</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {sisterConcerns.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-700">{item.desc}</p>
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
        <h2 className="text-xl font-semibold text-slate-900">Let�s Build Together</h2>
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
