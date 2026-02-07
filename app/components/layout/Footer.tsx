import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                M
              </span>
              Mugnee Cambodia
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              LED Display, Digital Signage, Interactive Flat Panels, Turnstile Gates, PA Systems and Access Control
              — with installation, commissioning and local support in Cambodia.
            </p>

            <p className="mt-4 text-sm text-slate-700">
              <span className="font-semibold">Serving:</span> Phnom Penh • Siem Reap • Sihanoukville
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Company</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-slate-600 hover:text-slate-900" href="/about">About</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900" href="/projects">Projects</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Solutions</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-slate-600 hover:text-slate-900" href="/solutions/led-billboard-cambodia">Outdoor LED Billboard</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900" href="/solutions/digital-signage-cambodia">Digital Signage</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900" href="/solutions/smart-classroom-cambodia">Smart Classroom</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900" href="/solutions/access-control-cambodia">Access Control</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900" href="/solutions/pa-system-cambodia">PA System</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-slate-600 hover:text-slate-900" href="/products">Products</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900" href="/service">Service & Support</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900" href="/price">Price Guide</Link></li>
            </ul>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-900">Need a quotation?</p>
              <p className="mt-1 text-xs text-slate-600">
                Share your size, location and usage type — we’ll suggest a practical configuration.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
              >
                Get Quotation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mugnee Cambodia. All rights reserved.</p>
          <p>SEO-ready structure • Fast • Mobile-friendly</p>
        </div>
      </div>
    </footer>
  );
}
