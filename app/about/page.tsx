import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/about";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "About Mugnee Cambodia | Mission, Vision & Company Story",
  description:
    "Mugnee Cambodia delivers LED display, digital signage, smart classroom, PA system, and access control solutions with end-to-end service. Learn our mission, vision, values, and operations in Cambodia and Bangladesh.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "About Mugnee Cambodia",
    description:
      "Company story, mission, vision, values, and service capabilities for LED display, signage, smart classroom, PA, and access control in Cambodia.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const heroTags = [
  "LED Display",
  "Digital Signage",
  "Smart Board",
  "PA System",
  "Turnstile Gate",
  "Access Control",
];

const highlights = [
  {
    title: "Our Vision",
    desc:
      "To become a trusted technology leader for LED display, digital signage, PA system, smart classroom, and access control solutions in Cambodia by building future-ready, secure, and high-performance environments for business and public institutions.",
  },
  {
    title: "Our Mission",
    desc:
      "Our mission is to deliver end-to-end, dependable, and scalable system integration services from site survey, design, and installation to commissioning, training, AMC, and after-sales support with transparent execution and measurable client outcomes.",
  },
  {
    title: "Our Strength",
    desc:
      "Our strength comes from experienced engineers, structured project management, genuine components, compliance-focused installation standards, and long-term maintenance capability that helps clients achieve higher uptime and lower operational risk.",
  },
];

const values = [
  {
    title: "Integrity",
    desc:
      "We maintain transparent communication, ethical project practices, and genuine product sourcing so clients receive reliable LED, signage, PA, and access control solutions with long-term trust and accountability.",
  },
  {
    title: "Innovation",
    desc:
      "We continuously adopt modern controllers, automation workflows, and integration best practices to improve system performance, scalability, and operational efficiency for Cambodia business environments.",
  },
  {
    title: "Excellence",
    desc:
      "We follow strict quality assurance, safety compliance, and disciplined project execution standards from design to commissioning, ensuring stable performance and high service quality at every stage.",
  },
  {
    title: "Customer Commitment",
    desc:
      "Our team provides responsive after-sales support, practical user training, preventive maintenance, and AMC continuity to help clients reduce downtime and protect long-term technology investment.",
  },
];

const storyPoints = [
  "Founded in 2014 to deliver engineering-grade LED and smart technology solutions.",
  "End-to-end execution: design, supply, installation, integration, commissioning, and support.",
  "Direct operations in Cambodia through Mugnee Multiple Co., Ltd with consistent service standards.",
];

const storyMilestones = [
  {
    phase: "Foundation",
    detail:
      "Started with a clear engineering-first model focused on reliable LED display and digital signage project delivery.",
  },
  {
    phase: "Execution Growth",
    detail:
      "Expanded into complete solution lifecycle delivery including site survey, technical design, installation, integration, and commissioning.",
  },
  {
    phase: "Cambodia Expansion",
    detail:
      "Established direct Cambodia operations with local technical support, faster response, and structured after-sales service continuity.",
  },
];

const presence = [
  {
    title: "Bangladesh",
    desc:
      "Our Bangladesh presence supports nationwide project delivery with structured planning, professional installation, and long-term maintenance for LED display, signage, audio, and control systems.",
  },
  {
    title: "Cambodia",
    desc:
      "In Cambodia, Mugnee Multiple Co., Ltd operates with a local engineering team for site survey, system integration, commissioning, and responsive after-sales support across Phnom Penh and other key cities.",
  },
];

const authorizedDistributor = [
  "Authorized distribution and project support in Cambodia through Mugnee Multiple Co., Ltd.",
  "Ensures authentic products, proper technical documentation, and compliance-focused installation standards.",
  "Provides local pre-sales consultation, engineering coordination, and after-sales service continuity for Cambodia clients.",
];

const whatWeDo = [
  {
    title: "Requirement Analysis & Site Survey",
    detail:
      "We evaluate power, networking, structure, traffic flow, and viewing distance to define a technically accurate project scope for Cambodia sites.",
  },
  {
    title: "Solution Engineering & System Design",
    detail:
      "Our team designs LED display, signage, PA, and access control architecture including module selection, controller planning, and performance targets.",
  },
  {
    title: "Supply, Installation & Safe Execution",
    detail:
      "We deliver genuine products with professional mounting, clean cable management, safety-focused installation practices, and structured quality checks.",
  },
  {
    title: "Integration, Configuration & Commissioning",
    detail:
      "We complete system integration, configuration, calibration, and functional testing to ensure stable operation, usability, and readiness for daily use.",
  },
  {
    title: "Training, AMC & Lifecycle Support",
    detail:
      "After handover, we provide user training, troubleshooting, preventive maintenance, AMC options, and continuous technical support for long-term reliability.",
  },
];

const cambodiaOps = [
  {
    title: "Local Engineering Execution in Cambodia",
    detail:
      "Projects are delivered through local technical coordination for site survey, design validation, installation, integration, and commissioning across Cambodia.",
  },
  {
    title: "Faster Onsite Response and Support Continuity",
    detail:
      "A Cambodia-based support workflow enables quicker troubleshooting, maintenance planning, and operational stabilization for business-critical systems.",
  },
  {
    title: "Standardized Delivery and Quality Control",
    detail:
      "We follow structured SOPs, technical checklists, and compliance-focused practices to maintain consistent quality from project kickoff to handover.",
  },
  {
    title: "Lifecycle Reliability and AMC Readiness",
    detail:
      "Post-installation plans include training, preventive maintenance, and AMC support to improve uptime, reduce repeat faults, and protect long-term investment.",
  },
];

const offers = [
  {
    title: "LED Display & Video Wall",
    desc: "Indoor and outdoor LED displays, fine-pitch video walls, rental LED, control room displays.",
  },
  {
    title: "Digital Signage",
    desc: "Commercial signage for malls, campuses, showrooms, and roadside advertising networks.",
  },
  {
    title: "Smart Board / Smart Classroom",
    desc: "Interactive displays for education and meeting environments with OPS/PC integration.",
  },
  {
    title: "PA System & Audio",
    desc: "Public address systems for institutions, factories, mosques, and large venues.",
  },
  {
    title: "Access Control Solutions",
    desc: "Turnstile gates, door access, attendance systems, biometrics, and visitor control.",
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
    desc: "Dedicated support team, spare parts planning, and preventive maintenance systems.",
  },
  {
    title: "Cambodia Market-Focused Solution Engineering",
    desc: "Site-ready solution design tailored for Phnom Penh, Siem Reap, Sihanoukville, and nationwide operating conditions.",
  },
  {
    title: "End-to-End LED, Signage & Access Integration",
    desc: "Successful delivery of integrated LED display, digital signage, PA, and access control systems for business-critical environments.",
  },
  {
    title: "Faster Deployment With Structured Project Workflow",
    desc: "Survey-to-commissioning process with BOQ planning, testing, documentation, and post-install support for long-term performance.",
  },
];

const faqs = [
  {
    q: "Who is Mugnee Cambodia and what does your company specialize in?",
    a: "Mugnee Cambodia is a technology solutions provider specializing in LED display, digital signage, smart classroom systems, PA systems, and access control integration with end-to-end project delivery.",
  },
  {
    q: "Do you provide complete project delivery from design to commissioning?",
    a: "Yes. Our team handles requirement analysis, site survey, technical design, product supply, installation, integration, commissioning, training, and after-sales support.",
  },
  {
    q: "Which solutions does Mugnee Cambodia offer for business and public sites?",
    a: "We offer indoor and outdoor LED displays, digital signage networks, interactive smart boards, PA and announcement systems, turnstile gates, and access control solutions for multiple industries.",
  },
  {
    q: "Can Mugnee Cambodia customize solutions based on site and budget?",
    a: "Yes. We customize system architecture based on site size, traffic flow, viewing distance, security requirements, integration scope, and budget priorities.",
  },
  {
    q: "Do you provide local installation and support in Cambodia?",
    a: "Yes. We provide local engineering support in Cambodia for installation, troubleshooting, preventive maintenance, and long-term AMC-based service continuity.",
  },
  {
    q: "What industries do you typically serve in Cambodia?",
    a: "We support retail, corporate offices, factories, education institutions, healthcare facilities, hospitality venues, and public-sector projects.",
  },
  {
    q: "How do you ensure quality and reliability in project execution?",
    a: "We follow structured project workflows, quality checkpoints, safe installation standards, system testing, and technical handover procedures to ensure stable and reliable operation.",
  },
  {
    q: "Do you provide training and documentation after project handover?",
    a: "Yes. We provide operator training, basic troubleshooting guidance, and project documentation so client teams can manage daily system operations confidently.",
  },
  {
    q: "Can your systems integrate with existing software or control platforms?",
    a: "Yes. Depending on project scope, we integrate with CMS, attendance, visitor management, and other operational platforms to improve workflow efficiency.",
  },
  {
    q: "How can we contact Mugnee Cambodia for a quotation?",
    a: "You can contact us through the website contact page with your site details, project goals, and required solution type to receive a structured proposal and quotation.",
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
            <div>
              <div className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">About Mugnee Cambodia</span>
              </div>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Mugnee Cambodia</h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Mugnee Cambodia is a business technology solutions company focused on LED display,
                digital signage, smart classroom systems, PA audio systems, and access control
                integration in Cambodia. We provide complete project delivery from technical site
                survey and solution design to product supply, installation, commissioning, user
                training, and long-term after-sales support. Our engineering team helps retail,
                corporate, industrial, education, hospitality, and public-sector organizations
                improve communication quality, brand visibility, operational efficiency, and site
                security with reliable, scalable, and maintenance-ready systems built for real
                Cambodia market conditions.
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
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
                >
                  Contact Us
                </Link>
                <Link
                  href="/service"
                  className="rounded-xl border border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md"
                >
                  Service & Support
                </Link>
              </div>
              <div className="mt-4 text-xs text-slate-500">
                Serving Phnom Penh - Siem Reap - Sihanoukville
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Mission, Vision & Strength</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Our Core Values</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Our Story</h2>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            Mugnee Cambodia grew from an engineering-driven technology company into a trusted
            end-to-end solutions partner for LED display, digital signage, smart classroom, PA
            systems, and access control infrastructure. Our journey is built on practical
            implementation quality, local market understanding, and long-term service commitment
            for businesses and institutions across Cambodia.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-3">
              {storyMilestones.map((item) => (
                <div
                  key={item.phase}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                    {item.phase}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.detail}</p>
                </div>
              ))}
            </div>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {storyPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Our Presence</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {presence.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Authorized Distributor (Cambodia)</h2>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
              {authorizedDistributor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              Note: Cambodia distribution, project execution, and support coordination are managed
              locally by Mugnee Multiple Co., Ltd.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">What We Do</h2>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            Our delivery model combines technical engineering, project execution, and after-sales
            continuity so businesses in Cambodia can deploy LED display, digital signage, smart
            classroom, PA, and access control systems with predictable performance and lower risk.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item) => (
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Cambodia Operations</h2>
          <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-600">
            Our Cambodia operations model is designed for reliable execution of LED display, digital
            signage, PA, smart classroom, and access control projects with local accountability,
            faster support response, and long-term service continuity.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cambodiaOps.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">What We Offer</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Our Achievements</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
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
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Let's Build Together</h2>
            <p className="mt-2 text-slate-600">
              Share your project goals and location. We&apos;ll recommend the right solution and
              provide a clear quotation.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
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
