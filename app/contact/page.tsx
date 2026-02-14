import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/contact";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Contact Mugnee Cambodia | Sales & Support",
  description:
    "Contact Mugnee Cambodia for LED display, digital signage, smart classroom, PA system, and access control solutions. Get quotation, installation support, or service assistance.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Contact Mugnee Cambodia",
    description:
      "Reach Mugnee Cambodia for sales, service, and project inquiries with local support and fast response.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const socialLinks = [
  { label: "Facebook", platform: "facebook", href: "https://www.facebook.com/mugneemultiple/" },
  { label: "YouTube", platform: "youtube", href: "https://www.youtube.com/@MugneeTech" },
  { label: "X (Twitter)", platform: "x", href: "https://x.com/mugneeml" },
  { label: "Instagram", platform: "instagram", href: "https://www.instagram.com/sm.mugnee/" },
  { label: "LinkedIn", platform: "linkedin", href: "https://www.linkedin.com/company/mugnee-multiple-limited/" },
  { label: "Pinterest", platform: "pinterest", href: "https://www.pinterest.com/mugneeml/" },
];

const offices = [
  {
    title: "Cambodia Office",
    subtitle: "Sales & Installation Support Office (Cambodia)",
    lines: [
      "1st Floor, 11E0, Street 108, Night Market Area",
      "Doun Penh, Phnom Penh, Cambodia",
    ],
  },
  {
    title: "Corporate Office (Bangladesh)",
    subtitle: "Corporate & Project Coordination Office",
    lines: ["4th Floor, 102/1, West Agargaon, Dhaka"],
  },
  {
    title: "Head Office (Bangladesh)",
    subtitle: "Sales, Installation & Operations Center",
    lines: ["3rd Floor, 36-37 Umesh Datta Road, Bakshibazar, Dhaka - 1211"],
  },
];

const contacts = [
  { label: "Sales", value: "+8801711927445" },
  { label: "Support", value: "+8801711927446" },
  { label: "Email", value: "info.mugnee@gmail.com" },
];

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M13.5 21v-7h2.3l.5-2.8h-2.8V9.6c0-.8.3-1.4 1.5-1.4h1.4V5.7c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.7v2h-2.3V14h2.3v7h2.7z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M23 12s0-3.6-.5-5.2c-.3-.9-1-1.6-1.9-1.9C19 4.5 12 4.5 12 4.5s-7 0-8.6.4c-.9.3-1.6 1-1.9 1.9C1 8.4 1 12 1 12s0 3.6.5 5.2c.3.9 1 1.6 1.9 1.9 1.6.4 8.6.4 8.6.4s7 0 8.6-.4c.9-.3 1.6-1 1.9-1.9.5-1.6.5-5.2.5-5.2zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.2 22H3l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8zm8.7 1.4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.9A3.1 3.1 0 1 0 12 15a3.1 3.1 0 0 0 0-6.2z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.8-1.8-2.8s-2 1.3-2 2.7V21h-4V9z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-3.6 19.3c0-.8 0-2 .2-2.9l1.4-5.8s-.3-.6-.3-1.4c0-1.3.8-2.3 1.8-2.3.8 0 1.2.6 1.2 1.3 0 .8-.5 2- .8 3-.3.9.7 1.6 1.6 1.6 1.9 0 3.4-2 3.4-4.8 0-2.5-1.8-4.3-4.4-4.3A4.6 4.6 0 0 0 9.2 10c0 .9.3 1.8.8 2.3.1.1.1.2.1.4l-.3 1.2c0 .2-.2.3-.4.2-1.5-.6-2.4-2.4-2.4-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.2 6.3-1 0-2-.5-2.3-1.2l-.6 2.3c-.2.8-.7 1.9-1 2.6.8.2 1.5.3 2.3.3A10 10 0 1 0 12 2z" />
        </svg>
      );
    default:
      return null;
  }
}

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
                <span className="font-semibold text-slate-700">Contact Us</span>
              </div>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Have a project in mind? Contact Mugnee Cambodia for LED display, digital signage,
                smart classroom, PA system, and access control solutions with end-to-end technical
                support. Share your site location, use case, budget range, and timeline, and our
                team will provide a practical quotation plan, site survey guidance, and deployment
                recommendations tailored for Cambodia business environments.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="tel:+8801711927445"
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
                >
                  Contact Us
                </a>
                <Link
                  href="/solutions"
                  className="rounded-xl border border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md"
                >
                  Explore Solutions
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
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Contact Form</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form and our team will contact you as soon as possible with the next
                steps.
              </p>
              <form className="mt-5 grid gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
                <button
                  type="button"
                  className="mt-1 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md"
                >
                  Submit
                </button>
              </form>
              <p className="mt-2 text-xs text-slate-500">
                Form submission can be connected to your email or CRM when ready.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Get In Touch</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {contacts.map((c) => (
                  <li key={c.label} className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-slate-900">{c.label}</span>
                    <span>{c.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <h3 className="text-sm font-semibold text-slate-900">Follow Us</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                    >
                      <SocialIcon platform={s.platform} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Office Locations</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{o.title}</div>
                <p className="mt-1 text-sm text-slate-600">{o.subtitle}</p>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  {o.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Cambodia office supports local sales and installation. Bangladesh offices handle
            regional coordination and operations support.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Local support
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            Cambodia Office & Project Support
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Talk to a local engineer for site survey, sizing, pixel pitch guidance, and a
            project-based quotation for your Cambodia deployment.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm text-slate-600">
                  Share your location, screen size, and use case. We will recommend a practical
                  configuration and quotation scope.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(15,23,42,0.45)]"
                  >
                    Request a Quotation
                  </Link>
                  <a
                    href="tel:+8801711927445"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
                  >
                    Contact Cambodia Office
                  </a>
                </div>
              </div>

              <div className="text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Office (Cambodia)</p>
                <p className="mt-2">
                  1st Floor, 11E0, Street 108, Night Market Area, Doun Penh, Phnom Penh,
                  Cambodia
                </p>
                <p className="mt-2">Phone: +8801711927445</p>
                <p className="mt-2">Hours: Mon-Sat, 8:30am-6:00pm</p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Mugnee Cambodia Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.3322027815047!2d104.92304627050727!3d11.573972618867787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e6231c345b%3A0xebf28967942f76b6!2sMugnee%20Multiple%20Co.%2C%20Ltd!5e1!3m2!1sen!2sbd!4v1770445691312!5m2!1sen!2sbd"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Need a Fast Proposal?</h2>
            <p className="mt-2 text-slate-600">
              Send your site details and requirements. We will share a practical solution path and
              quotation scope.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/solutions"
                className="inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                View Solutions
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
