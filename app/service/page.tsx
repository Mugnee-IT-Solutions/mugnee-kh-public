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
      "Ideal for routine AMC in Cambodia, including scheduled inspections, preventive maintenance, software checks, and non-critical fault resolution for LED display, PA, and access control systems.",
  },
  {
    title: "Priority Support",
    detail:
      "Best for business-critical operations that need faster SLA response, rapid onsite troubleshooting, and higher uptime assurance for digital signage networks and security entry infrastructure.",
  },
  {
    title: "Emergency Support",
    detail:
      "Designed for urgent outages, safety incidents, and access-control failures requiring immediate intervention, escalation handling, and high-priority technical recovery support.",
  },
];

const commonIssues = [
  {
    title: "LED Display Black Screen or Module Failure",
    detail:
      "Diagnosis for power, controller, receiving card, and module-level faults with targeted replacement and stability checks.",
  },
  {
    title: "Digital Signage Content or CMS Sync Problems",
    detail:
      "Playback error fixes, scheduler correction, network connectivity checks, and CMS synchronization recovery for reliable content delivery.",
  },
  {
    title: "Access Control, Biometric, and Turnstile Errors",
    detail:
      "Reader failure, credential mismatch, controller communication issues, and gate logic troubleshooting with integration validation.",
  },
  {
    title: "PA System Audio Zone and Paging Faults",
    detail:
      "Amplifier diagnostics, speaker line testing, zone routing correction, and voice clarity optimization for critical announcements.",
  },
  {
    title: "Power, Cabling, and Signal Integrity Issues",
    detail:
      "Grounding, surge protection, structured cabling, and interference checks to reduce recurring faults and unstable performance.",
  },
  {
    title: "Firmware, Configuration, and Integration Drift",
    detail:
      "Version alignment, parameter rollback, and cross-system integration testing to restore expected operations and reporting.",
  },
];

const slaMatrix = [
  {
    tier: "Standard",
    response: "Planned response window",
    bestFor: "Routine maintenance, non-critical faults, scheduled health checks",
  },
  {
    tier: "Priority",
    response: "Accelerated response and escalation",
    bestFor: "Business-critical systems with tighter uptime requirements",
  },
  {
    tier: "Emergency",
    response: "Immediate intervention workflow",
    bestFor: "Safety incidents, major outages, and high-impact failures",
  },
];

const pricingFactors = [
  "System type and size (LED area, number of controllers/readers/zones)",
  "SLA tier selection (Standard, Priority, or Emergency support)",
  "Preventive visit frequency and service scope depth",
  "Onsite location, travel requirements, and branch coverage model",
  "Spare-part readiness level and warranty handling requirements",
  "Integration complexity with CMS, HR, visitor, or security platforms",
];

const outcomes = [
  "Reduced unplanned downtime through preventive maintenance and faster fault isolation",
  "Improved operational continuity with SLA-based escalation and response planning",
  "Cleaner compliance records using structured service reports and technical checklists",
  "Longer system lifespan from proper calibration, firmware control, and part replacement",
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
    q: "What does your AMC service in Cambodia include?",
    a: "Our AMC service typically includes scheduled preventive maintenance, health checks, cleaning, calibration, firmware/controller verification, fault diagnostics, and service reporting for LED, signage, PA, and access control systems.",
  },
  {
    q: "Do you provide AMC for systems installed by other vendors?",
    a: "Yes. We can support many third-party installations after a technical assessment of hardware condition, wiring quality, software environment, and parts availability.",
  },
  {
    q: "How fast is your service response for urgent system failures?",
    a: "Response depends on SLA tier, location, and issue severity. Priority and emergency plans are designed for faster intervention on business-critical outages and safety-related incidents.",
  },
  {
    q: "Do you offer onsite troubleshooting for LED display and digital signage issues?",
    a: "Yes. Our engineers provide onsite troubleshooting for display failure, controller issues, pixel faults, communication errors, content display problems, and related infrastructure faults.",
  },
  {
    q: "Can you handle access control and turnstile repair with software integration checks?",
    a: "Yes. We diagnose and repair access controllers, readers, locks, and turnstile gates, and verify integration with attendance, visitor management, and HR-connected workflows.",
  },
  {
    q: "Do you provide PA system maintenance and audio zone testing?",
    a: "Yes. We perform PA amplifier checks, speaker line testing, zone verification, paging clarity validation, and configuration tuning for stable announcement performance.",
  },
  {
    q: "How do you reduce downtime during maintenance or repair?",
    a: "We follow structured diagnosis, pre-checklists, prioritized issue handling, and validated handover procedures to minimize disruption and restore system uptime faster.",
  },
  {
    q: "Is training included after service completion?",
    a: "Yes. We provide practical operator training and SOP guidance so your team can run daily operations, handle first-level checks, and escalate issues correctly.",
  },
  {
    q: "Which cities in Cambodia do you cover for service support?",
    a: "We provide service across Phnom Penh, Siem Reap, Sihanoukville, and additional provinces based on project scope, SLA level, and onsite access requirements.",
  },
  {
    q: "How can we request a quotation for AMC, repair, or support SLA?",
    a: "Share your system type, location, issue profile, and uptime target. We will propose a suitable AMC or support plan with scope, SLA options, and service cost details.",
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
          <div>
            <div className="text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Service & Support</span>
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Cambodia Service & Support for LED, PA & Access Control
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Mugnee Cambodia provides end-to-end technical service in Cambodia for LED display,
              digital signage, PA systems, and access control infrastructure. Our local engineers
              handle site audit, installation, commissioning, preventive maintenance, emergency
              troubleshooting, component replacement, and warranty support to reduce downtime and
              improve system reliability. From retail and corporate offices to factories, schools,
              hospitals, and public-sector sites, we deliver structured support plans that keep
              critical communication and security systems safe, compliant, and fully operational.
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
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Core LED, PA & Access Control Service Pillars in Cambodia
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
            Common LED, Signage, PA & Access Control Issues We Resolve
          </h2>
          <p className="mt-2 text-slate-600">
            High-intent service requests usually start with recurring technical faults. Our team
            resolves both root-cause issues and repeat failure patterns to stabilize operations.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commonIssues.map((item) => (
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
            Cambodia Onsite Service Response for LED, Signage, PA & Access
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
            Service Workflow in Cambodia: Diagnosis, Repair & Handover
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
            Cambodia AMC Plans and Priority Support Response Options
          </h2>
          <p className="mt-2 text-slate-600">
            Choose the support model that matches your risk profile, uptime needs, and business
            criticality.
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            Our Annual Maintenance Contract (AMC) options in Cambodia are designed for LED display,
            digital signage, PA systems, and access control infrastructure that require predictable
            uptime and controlled maintenance cost. Each plan defines response priority,
            preventive-visit frequency, reporting scope, and escalation workflow so operations teams
            can reduce unplanned downtime and service uncertainty.
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            We align SLA structure by business environment, from retail and office sites to
            factories, hospitals, and public facilities. This helps organizations choose the right
            balance of routine maintenance, fast fault response, and emergency coverage based on
            system criticality and compliance requirements.
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
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600 sm:grid-cols-3">
              <div className="px-4 py-3">Support Tier</div>
              <div className="px-4 py-3">Response Model</div>
              <div className="px-4 py-3">Best For</div>
            </div>
            {slaMatrix.map((row) => (
              <div
                key={row.tier}
                className="grid grid-cols-1 border-b border-slate-100 text-sm text-slate-700 last:border-b-0 sm:grid-cols-3"
              >
                <div className="px-4 py-3 font-semibold text-slate-900">{row.tier}</div>
                <div className="px-4 py-3">{row.response}</div>
                <div className="px-4 py-3">{row.bestFor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Cambodia AMC Pricing and Service Scope Planning Factors
          </h2>
          <p className="mt-2 text-slate-600">
            AMC and support pricing is shaped by technical scope, SLA expectations, and coverage
            requirements. We use transparent scope mapping so procurement teams can compare plans
            clearly.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {pricingFactors.map((item) => (
                <li key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Cambodia Technical Service Compliance & Readiness Checklist
          </h2>
          <p className="mt-2 text-slate-600">
            Before closure, we validate technical and safety checkpoints to ensure stable,
            compliant, and maintainable operation.
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            This compliance checklist is built for Cambodia service environments where LED display,
            digital signage, PA systems, and access control infrastructure must meet operational
            safety, reliability, and audit requirements. It helps facility, IT, and operations
            teams confirm that installation quality, service readiness, and long-term maintenance
            standards are fully aligned before project sign-off.
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            By validating power integrity, firmware consistency, network health, emergency logic,
            and documentation, organizations can reduce repeat faults, improve system uptime, and
            maintain clearer compliance records for internal governance and external reviews.
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
            Service Outcomes for Business Uptime and System Reliability
          </h2>
          <p className="mt-2 text-slate-600">
            Our service framework is designed to improve continuity, reduce repeat incidents, and
            keep communication and security systems operational across Cambodia sites.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Cambodia Service & Support FAQs: AMC, Repair, Warranty, and SLA
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
              Request a Cambodia AMC, Repair & Maintenance Service Plan
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
