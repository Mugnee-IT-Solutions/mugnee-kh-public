import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const PAGE_PATH = "/contact";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Contact Mugnee Cambodia | Sales & Support",
  description:
    "Contact Mugnee Cambodia for LED display, digital signage, smart classroom, PA system, and access control solutions. Get a quotation, installation support, or service assistance.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Contact Mugnee Cambodia",
    description:
      "Reach Mugnee Cambodia for sales, service, and project inquiries. Local support and fast response.",
    url: PAGE_URL,
    siteName: "Mugnee Cambodia",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/mugneemultiple/" },
  { label: "YouTube", href: "https://www.youtube.com/@MugneeTech" },
  { label: "X (Twitter)", href: "https://x.com/mugneeml" },
  { label: "Instagram", href: "https://www.instagram.com/sm.mugnee/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/mugnee-multiple-limited/" },
  { label: "Pinterest", href: "https://www.pinterest.com/mugneeml/" },
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
    lines: ["3rd Floor, 36�37 Umesh Datta Road, Bakshibazar, Dhaka � 1211"],
  },
];

const contacts = [
  { label: "Sales", value: "+8801711927445" },
  { label: "Support", value: "+8801711927446" },
  { label: "Email", value: "info.mugnee@gmail.com" },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-sm font-semibold text-slate-600">Contact Us</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Get in Touch</h1>
          <p className="mt-3 text-slate-700">
            Have a project in mind? Share your requirements and our team will respond quickly
            with a proposal, site survey plan, or support guidance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/service"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Service & Support
            </Link>
            <Link
              href="/solutions"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Explore Solutions
            </Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Serving Phnom Penh � Siem Reap � Sihanoukville
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Quick Summary</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
            <li>Sales & service support for Cambodia</li>
            <li>End-to-end project delivery</li>
            <li>Fast response for urgent requests</li>
            <li>Local installation and support team</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Contact Form</h2>
          <p className="mt-2 text-sm text-slate-600">
            Fill out the form and we will contact you as soon as possible.
          </p>
          <form className="mt-4 grid gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900"
            />
            <button
              type="button"
              className="mt-1 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Submit
            </button>
          </form>
          <p className="mt-2 text-xs text-slate-500">
            Form submission can be connected to your email or CRM when ready.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Get In Touch</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {contacts.map((c) => (
              <li key={c.label} className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">{c.label}</span>
                <span>{c.value}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-slate-900">Follow Us</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Office Locations</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {offices.map((o) => (
            <div key={o.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{o.title}</p>
              <p className="mt-1 text-sm text-slate-600">{o.subtitle}</p>
              <div className="mt-2 text-sm text-slate-700">
                {o.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Cambodia office serves local sales and installation support. Bangladesh offices
          support regional coordination and operations.
        </p>
      </section>
    </main>
  );
}
