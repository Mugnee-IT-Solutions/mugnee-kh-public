import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/solutions";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Solutions in Cambodia | LED Display, Digital Signage, Access Control",
  description:
    "Explore Cambodia-ready solutions from Mugnee Cambodia: LED display, digital signage, smart classroom, access control, PA systems, and turnstile gates. Local design, installation, and long-term support.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Solutions in Cambodia | LED Display, Digital Signage, Access Control",
    description:
      "Local Cambodia solutions for LED display, digital signage, smart classrooms, access control, PA systems, and turnstile gates with end-to-end delivery.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const solutionLinks = [
  {
    title: "Indoor LED Display Solutions",
    desc: "High-resolution LED walls for retail, corporate lobbies, and event venues.",
    href: "/led-display/indoor-led-display",
  },
  {
    title: "Outdoor LED Billboard Solutions",
    desc: "Weather-ready LED screens for roadside ads and public information.",
    href: "/led-display/outdoor-led-display",
  },
  {
    title: "Smart Classroom Solutions",
    desc: "Interactive teaching tools, IFP, and classroom control systems.",
    href: "/interactive-flat-panel",
  },
  {
    title: "Access Control Solutions",
    desc: "RFID, QR, and biometric systems for secure entry management.",
    href: "/turnstile-gate",
  },
  {
    title: "PA System Solutions",
    desc: "Public address systems for campuses, factories, and public venues.",
    href: "/pa-system",
  },
  {
    title: "Turnstile Gate Solutions",
    desc: "Controlled entry lanes integrated with attendance and security.",
    href: "/turnstile-gate",
  },
];

const summaryBullets = [
  "End-to-end delivery: survey, design, BOQ, install, and commissioning",
  "Local Cambodia support team for troubleshooting and maintenance",
  "Indoor and outdoor solutions engineered for tropical climates",
  "Scalable packages for single sites or multi-branch rollouts",
];

const marketSignals = [
  {
    title: "Tourism-driven venues and retail growth",
    detail:
      "Cambodia welcomed 6.7 million international visitors in 2024, increasing demand for hotel, retail, and public-venue AV, signage, and safety systems.",
  },
  {
    title: "Industrial expansion and factory modernization",
    detail:
      "The industrial sector is expanding, with thousands of factories and strong investment levels driving demand for PA, safety alerts, access control, and monitoring.",
  },
  {
    title: "Digital economy transformation",
    detail:
      "Cambodia is rolling out a national digital economy framework, accelerating adoption of smart systems, connectivity, and data-driven operations.",
  },
  {
    title: "Smart city initiatives",
    detail:
      "Smart city projects such as Siem Reap initiatives highlight growing demand for integrated public information, access control, and traffic management systems.",
  },
];

const sectorSolutions = [
  {
    title: "Retail, malls, and showrooms",
    desc:
      "Deploy indoor LED display walls, digital signage networks, and queue flow systems to improve in-store promotions, wayfinding, and conversion rates in Cambodia retail environments.",
  },
  {
    title: "Factories and industrial zones",
    desc:
      "Integrate factory PA systems, emergency announcement coverage, and access control with attendance logs to secure production zones and support safety compliance in industrial sites.",
  },
  {
    title: "Offices and corporate buildings",
    desc:
      "Use reception LED signage, meeting room display systems, and turnstile-based access control integrated with HR and visitor platforms for secure, efficient office operations.",
  },
  {
    title: "Schools and training centers",
    desc:
      "Implement interactive flat panels, classroom AV control, and campus-wide announcement systems to modernize digital learning, scheduling, and communication across education facilities.",
  },
  {
    title: "Hospitals and public institutions",
    desc:
      "Install hospital wayfinding signage, controlled-entry points, and emergency paging to improve patient navigation, department security, and real-time operational communication.",
  },
  {
    title: "Hotels, events, and venues",
    desc:
      "Combine large-format LED displays, digital menu and information boards, and ticket-integrated access control to enhance guest experience and event entry management.",
  },
];

const cityCoverage = [
  {
    city: "Phnom Penh",
    focus:
      "Corporate offices, shopping centers, government projects, and multi-branch business rollouts.",
  },
  {
    city: "Siem Reap",
    focus:
      "Hotels, tourism venues, attractions, and hospitality-focused display and access solutions.",
  },
  {
    city: "Sihanoukville",
    focus:
      "Industrial facilities, ports, mixed-use buildings, and high-durability outdoor installations.",
  },
  {
    city: "Special Economic Zones",
    focus:
      "Factory PA systems, production visibility displays, access control, and workforce entry automation.",
  },
];

const budgetTimelineCards = [
  {
    title: "Small Site Rollout",
    detail:
      "Best for single branches and pilot deployments. Fast setup with core display, access, and control features.",
  },
  {
    title: "Multi-Zone Facility Setup",
    detail:
      "For offices, campuses, and factories that require integrated signage, access control, and PA coverage.",
  },
  {
    title: "Enterprise Multi-Branch Program",
    detail:
      "Standardized design, centralized management, and phased deployment for nationwide scale in Cambodia.",
  },
];

const complianceChecklist = [
  "Electrical load calculation, grounding, and structured cabling plan for stable system uptime",
  "Indoor vs outdoor device selection with IP-rated enclosure and Cambodia weather suitability",
  "Fire alarm integration, emergency release logic, and evacuation-safe access workflow validation",
  "Role-based access control policy, event logs, and audit-trail reporting for compliance reviews",
  "Network topology, controller redundancy, and remote monitoring readiness for critical operations",
  "SOP handover, operator training, preventive maintenance schedule, and warranty response matrix",
];

const deliverySteps = [
  {
    title: "Site survey and requirements discovery",
    detail:
      "We assess foot traffic, viewing distances, network readiness, and security needs to scope the right solution.",
  },
  {
    title: "Design, layout, and BOQ planning",
    detail:
      "Engineering drawings, system topology, and bill of quantities tailored to your budget and site.",
  },
  {
    title: "Installation and cabling",
    detail:
      "Professional installation, clean wiring, and safe mounting for indoor or outdoor environments.",
  },
  {
    title: "Integration and commissioning",
    detail:
      "System testing, CMS setup, controller configuration, and performance tuning.",
  },
  {
    title: "Training and handover",
    detail:
      "Operator training, SOP documentation, and acceptance testing for smooth daily operations.",
  },
  {
    title: "After-sales support",
    detail:
      "Preventive maintenance, spare parts, and responsive local support when you need it.",
  },
];

const integrationCards = [
  "Central CMS for signage and content scheduling",
  "Access control with RFID, QR, and biometric devices",
  "Attendance and visitor management system sync",
  "Fire alarm linkage and emergency release logic",
  "Audio zoning, paging, and background music control",
  "Remote monitoring, diagnostics, and reporting",
];

const reasons = [
  {
    title: "Local Cambodia Engineering & Support Team",
    detail:
      "Fast site visits, practical troubleshooting, and on-site support across Phnom Penh, Siem Reap, Sihanoukville, and nationwide projects.",
  },
  {
    title: "Single-Vendor Delivery from Design to Commissioning",
    detail:
      "One accountable team for survey, BOQ planning, installation, integration, testing, and handover to reduce delays and coordination risk.",
  },
  {
    title: "Safety-First Installation and Compliance Workflow",
    detail:
      "Structured wiring, power planning, emergency logic validation, and commissioning checklists built for safe and stable operation.",
  },
  {
    title: "Clear Documentation, Training, and After-Sales Continuity",
    detail:
      "SOP handover, operator training, maintenance planning, and warranty support to keep LED, signage, and access systems reliable long-term.",
  },
];

const faqs = [
  {
    q: "What business solutions does Mugnee Cambodia provide?",
    a: "We deliver end-to-end LED display, digital signage, interactive flat panel, PA system, and access control solutions in Cambodia, including survey, BOQ planning, installation, integration, training, and after-sales support.",
  },
  {
    q: "How much does an LED display or digital signage solution cost in Cambodia?",
    a: "Project cost depends on screen size, pixel pitch, installation type (indoor or outdoor), control system, and integration scope. We provide a BOQ-based quotation so you can compare hardware, installation, and support cost clearly.",
  },
  {
    q: "Do you offer complete design, installation, and commissioning services?",
    a: "Yes. Our team manages the full lifecycle: site survey, engineering design, cabling, equipment installation, software configuration, integration testing, and commissioning for stable handover.",
  },
  {
    q: "Can you integrate access control with attendance, visitor, and HR systems?",
    a: "Yes. We support integration with RFID, QR, biometric, attendance, visitor management, and HR workflows based on your existing platform and security policy requirements.",
  },
  {
    q: "Do you support projects outside Phnom Penh?",
    a: "Yes. We serve Phnom Penh, Siem Reap, Sihanoukville, and other provinces in Cambodia with deployment planning, installation teams, and post-installation support.",
  },
  {
    q: "Are your solutions suitable for Cambodia outdoor weather conditions?",
    a: "Yes. We specify outdoor-ready equipment with appropriate IP ratings, thermal protection, power planning, and enclosure standards for Cambodia's heat, humidity, and rain conditions.",
  },
  {
    q: "How long does installation usually take?",
    a: "Timeline varies by project size and integration complexity. Small single-site deployments are faster, while multi-zone or multi-branch rollouts are delivered in phased schedules with milestone-based handover.",
  },
  {
    q: "Do you provide user training and technical documentation?",
    a: "Yes. We provide operator training, SOP documentation, system usage guidance, and basic troubleshooting procedures so your team can manage daily operations confidently.",
  },
  {
    q: "What after-sales support is available after project completion?",
    a: "We provide preventive maintenance planning, technical support, and warranty service coverage. Support scope is defined clearly in project documentation for long-term reliability.",
  },
  {
    q: "How can we get a quotation for our Cambodia site?",
    a: "Share your site type, location, expected usage, and integration needs. We will conduct requirement analysis and provide a structured quotation with recommended solution options.",
  },
];

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mugnee Cambodia",
              url: PAGE_URL,
              telephone: "+855XXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1st Floor, 11E0, Street 108, Night Market Area, Doun Penh",
                addressLocality: "Phnom Penh",
                addressCountry: "KH",
              },
              areaServed: ["Phnom Penh", "Siem Reap", "Sihanoukville"],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Smart Solutions in Cambodia",
              description:
                "LED display, digital signage, smart classroom, access control, PA system, and turnstile solutions in Cambodia with local installation and support.",
              areaServed: ["Phnom Penh", "Siem Reap", "Sihanoukville"],
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
                  name: "Solutions",
                  item: PAGE_URL,
                },
              ],
            },
          ]),
        }}
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-8 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Solutions</span>
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Cambodia Business Solutions | LED, Signage & Access Control
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Mugnee Cambodia provides end-to-end business technology solutions in Cambodia for retail,
            corporate offices, factories, education, healthcare, hospitality, and public-sector sites.
            Our team handles site survey, system design, BOQ planning, installation, commissioning,
            integration, training, and after-sales support for LED display, digital signage, access
            control, PA systems, and turnstile gates. We help organizations improve brand visibility,
            operational efficiency, safety compliance, and secure entry management with scalable
            solutions built for real Cambodia market conditions.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
            >
              Get a Free Quotation
            </Link>
            <Link
              href="/products"
              className="rounded-xl border border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md"
            >
              View Products
            </Link>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            Serving Phnom Penh - Siem Reap - Sihanoukville and nationwide projects
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Cambodia Market-Ready LED, Signage & Access Control Solutions
              </h2>
              <p className="mt-2 text-slate-600">
                We align each solution with local market needs, site conditions, and operational
                goals. From high-traffic retail and hospitality to industrial and institutional
                projects, our systems are built for reliability, compliance, and long-term value.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {marketSignals.map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                  >
                    <div className="text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">Quick Summary</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                {summaryBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Cambodia City Coverage for LED Display, Signage & Access Control
          </h2>
          <p className="mt-2 text-slate-600">
            We align solution architecture by city profile, site traffic, and operating conditions
            so each deployment performs reliably in real Cambodia environments.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cityCoverage.map((item) => (
              <div
                key={item.city}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-xl"
              >
                <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-200/0 blur-2xl transition-all duration-500 group-hover:bg-sky-200/60" />
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-sky-500/0 via-sky-500/80 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">
                  {item.city}
                </div>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Cambodia Business Solution Categories: LED, Signage, PA & Access Control
          </h2>
          <p className="mt-2 text-slate-600">
            Explore our solutions portfolio. Each category is designed for Cambodia sites with
            local installation and support.
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            These solution categories are optimized for high-intent searches such as LED display
            installation in Cambodia, digital signage supplier Phnom Penh, access control system
            integration, and PA system setup for factories and commercial buildings. Each category
            links to practical deployment options, integration capabilities, and local support flow.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutionLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_16px_40px_-20px_rgba(14,165,233,0.55)] hover:no-underline focus:no-underline"
              >
                <span className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-300/0 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-cyan-300/55" />
                <span className="pointer-events-none absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-sky-300/0 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:bg-sky-300/45" />
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-sky-500/0 via-sky-500/80 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">
                  {item.title}
                </div>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Industry Use Cases in Cambodia for LED Display & Access Control
          </h2>
          <p className="mt-2 text-slate-600">
            We design solutions for Cambodia market segments that demand reliable AV, security,
            and communication systems.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectorSolutions.map((item) => (
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
            Cambodia Solution Budget, BOQ & Rollout Planning
          </h2>
          <p className="mt-2 text-slate-600">
            Buyers searching for solution cost and implementation speed usually need sizing guidance
            first. We structure project scope by site complexity and expansion goals.
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            Our BOQ planning process maps hardware, installation scope, integration workload, and
            support coverage into a transparent cost framework for Cambodia projects. This helps
            decision-makers compare LED display system cost, digital signage deployment budget,
            access control integration cost, and PA system rollout timelines before procurement.
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            We also define phased rollout options for single-site launch, multi-floor expansion, and
            multi-branch standardization, so organizations can scale without rework while maintaining
            technical consistency and long-term operating efficiency.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {budgetTimelineCards.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
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
            Cambodia Solution Installation, Integration & Commissioning Workflow
          </h2>
          <p className="mt-2 text-slate-600">
            Our process ensures reliable performance, clean installation, and long-term
            serviceability.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverySteps.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
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
            Integration Options in Cambodia: RFID, Biometric, CMS & PA Systems
          </h2>
          <p className="mt-2 text-slate-600">
            We integrate systems across AV, security, and operations to reduce manual work and
            improve safety.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrationCards.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50/50 hover:text-slate-900 hover:shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Cambodia Technical Compliance & Site Readiness Checklist
          </h2>
          <p className="mt-2 text-slate-600">
            This SEO-focused checklist helps procurement, facility, and IT teams validate
            installation readiness, safety compliance, and long-term reliability before approving
            LED display, digital signage, access control, and PA system deployments in Cambodia.
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            Use these checkpoints to reduce deployment risk, improve commissioning speed, and ensure
            compliance documentation is complete for enterprise, factory, education, hospitality,
            and public-sector projects.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {complianceChecklist.map((item) => (
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
            Why Choose Mugnee Cambodia for LED, Signage & Access Control Solutions
          </h2>
          <p className="mt-2 text-slate-600">
            Businesses choosing a Cambodia technology partner usually compare local execution
            capability, integration depth, deployment quality, and post-installation support.
            Mugnee Cambodia is structured to deliver end-to-end LED display, digital signage,
            access control, PA system, and turnstile solutions with measurable operational value.
          </p>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            Our team combines site-level engineering with business-focused planning so each system
            improves communication, security, and efficiency. From first survey to ongoing support,
            we prioritize stable performance, compliance readiness, and scalable expansion for
            single-site and multi-branch operations.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Mugnee Business Solutions FAQs: Cost, Installation, Integration & Support
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
              Get a Cambodia LED, Signage & Access Control Solution Plan
            </h2>
            <p className="mt-2 text-slate-600">
              Share your site type, location, and goals. We will recommend the right solution
              stack and provide a clear quotation.
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
