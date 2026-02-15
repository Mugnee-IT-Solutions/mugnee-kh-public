import Link from "next/link";
import LangText from "./LangText";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                  M
                </span>
                Mugnee Cambodia
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                <LangText
                  en="Mugnee Cambodia provides LED Display, Digital Signage, Interactive Flat Panel, PA System, Turnstile Gate, and Access Control solutions with project design, installation, commissioning, and after-sales support."
                  km="Mugnee Cambodia ផ្តល់សេវា LED Display, Digital Signage, Interactive Flat Panel, PA System, Turnstile Gate និង Access Control ជាមួយការរចនា ដំឡើង និងគាំទ្របន្ទាប់ពីដំឡើង។"
                />
              </p>
              <div className="mt-4 space-y-1 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">
                    <LangText en="Service Areas:" km="តំបន់សេវាកម្ម:" />
                  </span>{" "}
                  Phnom Penh • Siem Reap • Sihanoukville
                </p>
                <p>
                  <span className="font-semibold">
                    <LangText en="Contact:" km="ទំនាក់ទំនង:" />
                  </span>{" "}
                  <a className="hover:text-slate-900" href="tel:+855171927446">
                    +855 17 192 7446
                  </a>{" "}
                  •{" "}
                  <a className="hover:text-slate-900" href="mailto:info.mugnee@gmail.com">
                    info.mugnee@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="text-sm font-semibold text-slate-900">
                <LangText en="Company" km="ក្រុមហ៊ុន" />
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="text-slate-600 hover:text-slate-900" href="/about">
                    <LangText en="About Us" km="អំពីយើង" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 hover:text-slate-900" href="/solutions">
                    <LangText en="Solutions" km="ដំណោះស្រាយ" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 hover:text-slate-900" href="/service">
                    <LangText en="Service & Support" km="សេវា & គាំទ្រ" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 hover:text-slate-900" href="/contact">
                    <LangText en="Contact" km="ទំនាក់ទំនង" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="text-sm font-semibold text-slate-900">
                <LangText en="Top Product Categories" km="ប្រភេទផលិតផលសំខាន់ៗ" />
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="text-slate-600 hover:text-slate-900" href="/led-display">
                    LED Display
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 hover:text-slate-900" href="/interactive-flat-panel">
                    Interactive Flat Panel
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 hover:text-slate-900" href="/pa-system">
                    PA System
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 hover:text-slate-900" href="/turnstile-gate">
                    Turnstile Gate
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 hover:text-slate-900" href="/products">
                    <LangText en="View All Products" km="មើលផលិតផលទាំងអស់" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  <LangText en="Get a Project Quotation" km="ស្នើសុំតម្លៃគម្រោង" />
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  <LangText
                    en="Share your project type, location, and timeline. Our team will recommend a practical configuration and budget plan."
                    km="សូមផ្ញើប្រភេទគម្រោង ទីតាំង និងពេលវេលា។ ក្រុមការងារយើងនឹងណែនាំ configuration និងផែនការថវិកាដែលសមរម្យ។"
                  />
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                  >
                    <LangText en="Contact Mugnee Cambodia" km="ទាក់ទង Mugnee Cambodia" />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900"
                  >
                    <LangText en="Explore Products" km="មើលផលិតផល" />
                  </Link>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  SEO-ready structure
                </span>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  Mobile-friendly
                </span>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  Fast loading
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} Mugnee Cambodia.{" "}
              <LangText en="All rights reserved." km="រក្សាសិទ្ធិគ្រប់យ៉ាង។" />
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="hover:text-slate-700" href="/about">
                <LangText en="About" km="អំពីយើង" />
              </Link>
              <Link className="hover:text-slate-700" href="/solutions">
                <LangText en="Solutions" km="ដំណោះស្រាយ" />
              </Link>
              <Link className="hover:text-slate-700" href="/service">
                <LangText en="Service" km="សេវា" />
              </Link>
              <Link className="hover:text-slate-700" href="/contact">
                <LangText en="Contact" km="ទំនាក់ទំនង" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

