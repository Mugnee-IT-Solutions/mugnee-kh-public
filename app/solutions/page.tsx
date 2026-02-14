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
    href: "/solutions/led-billboard-cambodia",
  },
  {
    title: "Digital Signage Solutions",
    desc: "Networked displays for promotions, menus, wayfinding, and alerts.",
    href: "/solutions/digital-signage-cambodia",
  },
  {
    title: "Smart Classroom Solutions",
    desc: "Interactive teaching tools, IFP, and classroom control systems.",
    href: "/solutions/smart-classroom-cambodia",
  },
  {
    title: "Access Control Solutions",
    desc: "RFID, QR, and biometric systems for secure entry management.",
    href: "/solutions/access-control-cambodia",
  },
  {
    title: "PA System Solutions",
    desc: "Public address systems for campuses, factories, and public venues.",
    href: "/solutions/pa-system-cambodia",
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
      "Digital signage for promotions, LED walls for brand impact, and queue management for smooth customer flow.",
  },
  {
    title: "Factories and industrial zones",
    desc:
      "PA systems, safety alerts, and access control with audit trails to secure production areas.",
  },
  {
    title: "Offices and corporate buildings",
    desc:
      "Reception displays, meeting room signage, and turnstile access integrated with HR systems.",
  },
  {
    title: "Schools and training centers",
    desc:
      "Smart classroom solutions with interactive teaching, scheduling, and campus announcements.",
  },
  {
    title: "Hospitals and public institutions",
    desc:
      "Wayfinding signage, controlled access, and emergency paging for safer facilities.",
  },
  {
    title: "Hotels, events, and venues",
    desc:
      "Large-format LED displays, digital menus, and access control for ticketed entry.",
  },
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
  "Local Cambodia team for site visits and on-site support",
  "One-vendor responsibility from design to commissioning",
  "Safety-focused installation and clean wiring standards",
  "Transparent documentation, training, and handover",
];

const faqs = [
  {
    q: "Do you provide complete solutions from design to installation?",
    a: "Yes. We handle survey, BOQ, installation, commissioning, and after-sales support as a single vendor.",
  },
  {
    q: "Can you tailor solutions to my location and budget?",
    a: "We customize layout, hardware, and integration based on your site conditions, traffic flow, and budget.",
  },
  {
    q: "Do you serve projects outside Phnom Penh?",
    a: "Yes. We support projects in Phnom Penh, Siem Reap, Sihanoukville, and other provinces as needed.",
  },
  {
    q: "Can you integrate with existing systems?",
    a: "We can integrate with access control, attendance, CMS, and other platforms depending on the project scope.",
  },
];

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
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

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Solutions</span>
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Business Solutions in Cambodia: LED Display, Digital Signage, Access Control, PA System, and Turnstile Integration
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

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get a Free Quotation
            </Link>
            <Link
              href="/products"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
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
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Cambodia Market Ready Solution Design
              </h2>
              <p className="mt-2 text-slate-600">
                We align each solution with local market needs, site conditions, and operational
                goals. From high-traffic retail and hospitality to industrial and institutional
                projects, our systems are built for reliability, compliance, and long-term value.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {marketSignals.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                  >
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Quick Summary</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
                {summaryBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Core Solution Categories in Cambodia
          </h2>
          <p className="mt-2 text-slate-600">
            Explore our solutions portfolio. Each category is designed for Cambodia sites with
            local installation and support.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutionLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Where These Solutions Deliver the Most Value
          </h2>
          <p className="mt-2 text-slate-600">
            We design solutions for Cambodia market segments that demand reliable AV, security,
            and communication systems.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectorSolutions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Project Delivery Workflow for Cambodia Sites
          </h2>
          <p className="mt-2 text-slate-600">
            Our process ensures reliable performance, clean installation, and long-term
            serviceability.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliverySteps.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Integration Options for Modern Cambodia Buildings
          </h2>
          <p className="mt-2 text-slate-600">
            We integrate systems across AV, security, and operations to reduce manual work and
            improve safety.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrationCards.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Why Mugnee Cambodia for Integrated Solutions
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Solutions FAQs for Cambodia Projects
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">{item.q}</p>
                <p className="mt-1 text-sm text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Request a Cambodia Solution Plan
            </h2>
            <p className="mt-2 text-slate-600">
              Share your site type, location, and goals. We will recommend the right solution
              stack and provide a clear quotation.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Contact Mugnee Cambodia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
