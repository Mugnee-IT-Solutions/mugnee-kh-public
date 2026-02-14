import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/service";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Service & Support in Cambodia | Installation, AMC, Warranty",
  description:
    "Mugnee Cambodia provides installation, commissioning, AMC, troubleshooting, and warranty support for LED display, signage, PA, and access control systems across Cambodia.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Service & Support in Cambodia | Installation, AMC, Warranty",
    description:
      "Cambodia-wide service support: site survey, installation, preventive maintenance, troubleshooting, spare parts, and warranty services.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const summaryBullets = [
  "End-to-end service from survey and setup to long-term support",
  "Local Cambodia response team for preventive and corrective maintenance",
  "AMC plans with scheduled inspections and performance optimization",
  "Warranty and spare-parts support for reduced operational downtime",
];

const pillars = [
  {
    title: "Site Survey, Audit, and Service Planning",
    desc:
      "We assess installation quality, power conditions, cabling health, and system risks before recommending the right service scope.",
  },
  {
    title: "Installation, Re-Installation, and Commissioning",
    desc:
      "Our engineers handle mounting, wiring, software setup, and commissioning for stable operation and cleaner long-term serviceability.",
  },
  {
    title: "Preventive Maintenance and AMC Execution",
    desc:
      "Routine checks, cleaning, calibration, and firmware/controller validation help prevent failures and extend system lifespan.",
  },
  {
    title: "Corrective Repair and Fault Resolution",
    desc:
      "Rapid diagnosis, component replacement, and configuration recovery for LED, signage, PA, and access control systems.",
  },
  {
    title: "Operator Training and SOP Handover",
    desc:
      "Hands-on training and documentation for daily operation, first-level troubleshooting, and escalation flow.",
  },
  {
    title: "Warranty, Spare Parts, and Lifecycle Support",
    desc:
      "Structured warranty handling and spare-part readiness to minimize disruptions and keep mission-critical systems running.",
  },
];

const processSteps = [
  {
    title: "Service Request and Technical Intake",
    detail:
      "We collect system details, issue symptoms, and business impact to prioritize and assign the right engineering response.",
  },
  {
    title: "Diagnosis, Scope Confirmation, and SLA Plan",
    detail:
      "Our team defines root-cause path, confirms onsite or remote scope, and shares the response timeline with clear next actions.",
  },
  {
    title: "Onsite Service, Repair, and System Optimization",
    detail:
      "Technicians perform repair, replacement, tuning, and integration checks to restore performance and operational stability.",
  },
  {
    title: "Testing, Handover, and Maintenance Recommendation",
    detail:
      "Final validation, service report, and preventive recommendations are shared for smooth operations after closure.",
  },
];

const coverageCards = [
  {
    city: "Phnom Penh",
    detail:
      "Corporate offices, malls, campuses, and high-priority commercial service coverage.",
  },
  {
    city: "Siem Reap",
    detail:
      "Hospitality, tourism, and mixed-use venue support with scheduled preventive visits.",
  },
  {
    city: "Sihanoukville",
    detail:
      "Industrial and port-related sites with robust service planning and rapid fault response.",
  },
  {
    city: "Nationwide Service",
    detail:
      "Province-based support availability for multi-branch businesses and government projects.",
  },
];

const serviceTiers = [
  {
    title: "Standard Support",
    detail:
      "Planned support window for routine issues, non-critical faults, and periodic health checks.",
  },
  {
    title: "Priority Support",
    detail:
      "Faster response for business-critical systems that require tighter operational uptime targets.",
  },
  {
    title: "Emergency Support",
    detail:
      "Urgent intervention for security, safety, and major outage events requiring immediate action.",
  },
];

const checklist = [
  "Power quality, grounding, and surge-protection validation before service closure",
  "Controller, receiving card, and firmware version alignment for stable operations",
  "Network and remote-access readiness for monitoring and faster troubleshooting",
  "Access control and emergency release logic test for safety compliance",
  "PA zoning, paging path, and audio clarity verification across key areas",
  "Service documentation, fault logs, and maintenance schedule handover",
];

const faqs = [
  {
    q: "Do you provide AMC for existing LED and access systems in Cambodia?",
    a: "Yes. We provide AMC and preventive maintenance for Mugnee and eligible third-party systems based on technical condition and service scope.",
  },
  {
    q: "What is included in your preventive maintenance service?",
    a: "Preventive service includes inspection, cleaning, calibration, wiring checks, controller validation, and a service report with recommended actions.",
  },
  {
    q: "Can you support urgent breakdowns and business-critical outages?",
    a: "Yes. We offer priority and emergency response workflows for critical failures affecting operations, safety, or customer service.",
  },
  {
    q: "Do you provide spare parts and warranty handling?",
    a: "Yes. We support warranty claims, component replacement, and spare-part planning to reduce repair delays and repeat failures.",
  },
  {
    q: "Is training provided after installation or repair?",
    a: "Yes. We provide operator guidance and SOP handover so your internal team can manage daily usage and basic troubleshooting.",
  },
  {
    q: "Which locations do you cover for service support?",
    a: "We cover Phnom Penh, Siem Reap, Sihanoukville, and additional provinces based on project location and response requirements.",
  },
];

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-8 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Service & Support</span>
              </div>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Cambodia Service & Support for LED, PA & Access Control Systems
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Mugnee Cambodia delivers full lifecycle support from installation and commissioning
                to preventive maintenance, troubleshooting, and warranty service. We help
                businesses keep LED display, digital signage, PA systems, and access control
                infrastructure stable, safe, and operational across Cambodia.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
                >
                  Request Service
                </Link>
                <Link
                  href="/products"
                  className="rounded-xl border border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md"
                >
                  View Products
                </Link>
              </div>
              <div className="mt-4 text-xs text-slate-500">
                Serving Phnom Penh - Siem Reap - Sihanoukville and nationwide service calls
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h2 className="text-base font-semibold text-slate-900">Quick Summary</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                {summaryBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Core Service Pillars for Cambodia Installations
          </h2>
          <p className="mt-2 text-slate-600">
            Our service model is designed for long-term system health, reduced downtime, and
            measurable reliability improvements for business and public-sector deployments.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Cambodia Service Coverage and Onsite Support Reach
          </h2>
          <p className="mt-2 text-slate-600">
            We align field support by location and urgency to ensure responsive service across key
            Cambodia business zones.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coverageCards.map((item) => (
              <div
                key={item.city}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.city}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Service Workflow: Request, Diagnosis, Repair, and Handover
          </h2>
          <p className="mt-2 text-slate-600">
            Our structured process helps clients track service progress with clear timelines,
            technical accountability, and final validation.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            AMC and Response Priority Options in Cambodia
          </h2>
          <p className="mt-2 text-slate-600">
            Choose the support model that matches your risk profile, uptime needs, and business
            criticality.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceTiers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Technical Compliance and Service Readiness Checklist
          </h2>
          <p className="mt-2 text-slate-600">
            Before closure, we validate technical and safety checkpoints to ensure stable,
            compliant, and maintainable operation.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {checklist.map((item) => (
                <li key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Service & Support FAQs for Cambodia Projects
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 open:border-sky-300 open:shadow-md"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  <div className="flex items-center justify-between gap-3">
                    <span>{item.q}</span>
                    <span className="text-slate-400 transition-transform duration-300 group-open:rotate-180">
                      v
                    </span>
                  </div>
                </summary>
                <p className="mt-3 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Request a Cambodia Service and Maintenance Plan
            </h2>
            <p className="mt-2 text-slate-600">
              Share your system type, issue category, and site location. We will recommend the
              right support scope and service schedule.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                Contact Mugnee Cambodia
              </Link>
              <Link
                href="/products"
                className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
