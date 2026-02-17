import Link from "next/link";
import Image from "next/image";
import LangText from "./LangText";

type FooterSocialPlatform = "facebook" | "youtube" | "linkedin" | "x" | "instagram";

const FOOTER_SOCIAL_LINKS: Array<{
  label: string;
  platform: FooterSocialPlatform;
  href: string;
}> = [
  { label: "Facebook", platform: "facebook", href: "https://www.facebook.com/mugneemultiple/" },
  { label: "YouTube", platform: "youtube", href: "https://www.youtube.com/@MugneeTech" },
  { label: "LinkedIn", platform: "linkedin", href: "https://www.linkedin.com/company/mugnee-multiple-limited/" },
  { label: "X (Twitter)", platform: "x", href: "https://x.com/mugneeml" },
  { label: "Instagram", platform: "instagram", href: "https://www.instagram.com/sm.mugnee/" },
];

function FooterSocialIcon({ platform }: { platform: FooterSocialPlatform }) {
  switch (platform) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden="true">
          <path d="M13.5 21v-7h2.3l.5-2.8h-2.8V9.6c0-.8.3-1.4 1.5-1.4h1.4V5.7c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.7v2h-2.3V14h2.3v7h2.7z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden="true">
          <path d="M23 12s0-3.6-.5-5.2c-.3-.9-1-1.6-1.9-1.9C19 4.5 12 4.5 12 4.5s-7 0-8.6.4c-.9.3-1.6 1-1.9 1.9C1 8.4 1 12 1 12s0 3.6.5 5.2c.3.9 1 1.6 1.9 1.9 1.6.4 8.6.4 8.6.4s7 0 8.6-.4c.9-.3 1.6-1 1.9-1.9.5-1.6.5-5.2.5-5.2zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden="true">
          <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.8-1.8-2.8s-2 1.3-2 2.7V21h-4V9z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden="true">
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.2 22H3l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden="true">
          <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8zm8.7 1.4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.9A3.1 3.1 0 1 0 12 15a3.1 3.1 0 0 0 0-6.2z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-slate-100 to-slate-50">
      <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-blue-600 to-slate-900" />
      <div className="w-full py-0">
        <div className="w-full border-y border-slate-200 bg-white px-4 py-8 sm:px-6 md:py-10 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <Image
                  src="/images/logo.png"
                  alt="Mugnee Cambodia"
                  width={210}
                  height={64}
                  className="h-9 w-auto"
                />
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
                  <a className="no-underline transition hover:text-slate-900 hover:no-underline" href="tel:+855171927446">
                    +855 17 192 7446
                  </a>{" "}
                  •{" "}
                  <a className="no-underline transition hover:text-slate-900 hover:no-underline" href="mailto:info.mugnee@gmail.com">
                    info.mugnee@gmail.com
                  </a>
                </p>
              </div>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  <LangText en="Follow Mugnee" km="តាមដាន Mugnee" />
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {FOOTER_SOCIAL_LINKS.map((item) => {
                    const toneClass =
                      item.platform === "facebook"
                        ? "bg-[#1877F2] text-white"
                        : item.platform === "youtube"
                          ? "bg-[#FF0000] text-white"
                          : item.platform === "linkedin"
                            ? "bg-[#0A66C2] text-white"
                            : item.platform === "x"
                              ? "bg-black text-white"
                              : "bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-white";

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        title={item.label}
                        className={[
                          "inline-flex h-9 w-9 items-center justify-center rounded-full no-underline shadow-sm transition hover:-translate-y-0.5 hover:no-underline",
                          toneClass,
                        ].join(" ")}
                      >
                        <FooterSocialIcon platform={item.platform} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="text-sm font-semibold text-slate-900">
                <LangText en="Company" km="ក្រុមហ៊ុន" />
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href="/about">
                    <LangText en="About Us" km="អំពីយើង" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href="/solutions">
                    <LangText en="Solutions" km="ដំណោះស្រាយ" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href="/service">
                    <LangText en="Service & Support" km="សេវា & គាំទ្រ" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href="/contact">
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
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href="/led-display">
                    LED Display
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href="/interactive-flat-panel">
                    Interactive Flat Panel
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href="/pa-system">
                    PA System
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href="/turnstile-gate">
                    Turnstile Gate
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href="/products">
                    <LangText en="View All Products" km="មើលផលិតផលទាំងអស់" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-5 shadow-sm">
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
                    className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-slate-800 hover:no-underline"
                  >
                    <LangText en="Contact Mugnee Cambodia" km="ទាក់ទង Mugnee Cambodia" />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 no-underline transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900 hover:no-underline"
                  >
                    <LangText en="Explore Products" km="មើលផលិតផល" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2025 Mugnee Cambodia. Designed and Developed by Mugnee IT Solutions.</p>
            <div className="flex flex-wrap gap-3">
              <Link className="no-underline hover:text-slate-700 hover:no-underline" href="/about">
                <LangText en="About" km="អំពីយើង" />
              </Link>
              <Link className="no-underline hover:text-slate-700 hover:no-underline" href="/solutions">
                <LangText en="Solutions" km="ដំណោះស្រាយ" />
              </Link>
              <Link className="no-underline hover:text-slate-700 hover:no-underline" href="/service">
                <LangText en="Service" km="សេវា" />
              </Link>
              <Link className="no-underline hover:text-slate-700 hover:no-underline" href="/contact">
                <LangText en="Contact" km="ទំនាក់ទំនង" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
