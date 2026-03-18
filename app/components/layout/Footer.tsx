"use client";

import Link from "next/link";
import Image from "next/image";
import LangText from "./LangText";
import { useLang } from "./LanguageProvider";
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_E164, SERVICE_AREAS } from "../../lib/nap";

type FooterSocialPlatform = "facebook" | "youtube" | "linkedin" | "x" | "instagram" | "telegram" | "whatsapp";

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
  { label: "Telegram", platform: "telegram", href: "https://t.me/mugneemultiple" },
  {
    label: "WhatsApp",
    platform: "whatsapp",
    href: "https://api.whatsapp.com/send/?phone=85581580802&text&type=phone_number&app_absent=0",
  },
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
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden="true">
          <path d="M9.6 15.5 9.2 20c.6 0 .9-.3 1.3-.6l3.1-3 6.5 4.8c1.2.6 2 .3 2.3-1.1L24 3.2v-.1c.4-1.7-.6-2.3-1.8-1.9L1.2 9.3c-1.7.6-1.7 1.5-.3 2l5.4 1.7L19 5.1c.6-.4 1.1-.2.6.2" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 448 512" className="h-[17px] w-[17px] fill-current" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 2 131.5 2 253.9c0 39.1 10.2 77.3 29.6 111L0 480l118.7-31.2c32.7 17.9 69.6 27.3 107.4 27.3h.1c122.3 0 221.9-99.6 221.9-221.9 0-59.3-23.1-115-65.2-157.1zM223.9 438.7h-.1c-33.1 0-65.5-8.9-93.7-25.7l-6.7-4-70.4 18.5 18.8-68.6-4.4-7.1c-18.7-29.7-28.6-64-28.6-99.2C38.8 154 125 67.8 223.9 67.8c48 0 93.1 18.7 127 52.6 33.9 33.9 52.6 79 52.6 127 0 98.9-86.2 191.3-179.6 191.3zm101.8-138.2c-5.5-2.7-32.8-16.1-37.9-18-5.1-1.9-8.8-2.7-12.5 2.7-3.7 5.5-14.3 18-17.6 21.7-3.2 3.7-6.5 4.1-12 1.4-32.6-16.3-54-29.1-75.5-65.9-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.6-1.4-2.7-12.5-30-17.1-41-4.5-10.8-9.1-9.4-12.5-9.6-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.6 1.4-14.6 6.9-5.1 5.5-19.3 18.8-19.3 45.7 0 26.9 19.8 52.9 22.5 56.6 2.7 3.7 39 59.5 94.4 83.4 35 15.1 48.7 16.4 66.2 14 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5-3.7-10.5-6.4z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SiteFooter() {
  const { lang } = useLang();

  const stripLangPrefix = (value: string) => {
    if (value === "/km") return "/";
    if (value.startsWith("/km/")) return value.slice(3);
    return value;
  };

  const normalizeInternalHref = (href: string) => {
    if (!href || href === "/") return href;
    return href.endsWith("/") ? href : `${href}/`;
  };

  const toLangHref = (href: string) => {
    if (!href || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
      return href;
    }

    const normalized = normalizeInternalHref(stripLangPrefix(href));
    return lang === "km" ? (normalized === "/" ? "/km/" : `/km${normalized}`) : normalized;
  };
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-slate-100 to-slate-50">
      <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-blue-600 to-slate-900" />
      <div className="w-full py-0">
        <div className="w-full border-y border-slate-200 bg-white py-8 md:py-10">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <Image
                  src="/images/logo.png"
                  alt="Mugnee Cambodia"
                  width={210}
                  height={64}
                  loading="eager"
                  className="h-9 w-auto"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                <LangText en="Mugnee Cambodia provides LED Display, Digital Signage, Interactive Flat Panel, PA System, Turnstile Gate, and Access Control solutions with project design, installation, commissioning, and after-sales support." km="Mugnee Cambodia ផ្តល់ជូនដំណោះស្រាយ LED Display, Digital Signage, Interactive Flat Panel, PA System, Turnstile Gate និង Access Control ជាមួយសេវារចនាគម្រោង ដំឡើង ធ្វើតេស្តដំណើរការ និងគាំទ្របន្ទាប់ពីលក់។"
                />
              </p>
              <div className="mt-4 space-y-1 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">
                    <LangText en="Service Areas:" km="តំបន់សេវាកម្ម:" />
                  </span>{" "}
                  {SERVICE_AREAS.join(" | ")}
                </p>
                <p>
                  <span className="font-semibold">
                    <LangText en="Contact:" km="ទំនាក់ទំនង:" />
                  </span>{" "}
                  <a className="no-underline transition hover:text-slate-900 hover:no-underline" href={`tel:${BUSINESS_PHONE_E164}`}>
                    {BUSINESS_PHONE_DISPLAY}
                  </a>{" "}
                  |{" "}
                  <a className="no-underline transition hover:text-slate-900 hover:no-underline" href={`mailto:${BUSINESS_EMAIL}`}>
                    {BUSINESS_EMAIL}
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
                              : item.platform === "telegram"
                                ? "bg-[#229ED9] text-white"
                                : item.platform === "whatsapp"
                                  ? "bg-[#25D366] text-white"
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
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/about")}>
                    <LangText en="About Us" km="អំពីយើង" />
                  </Link>
                </li>
                <li className="sr-only">
                  <Link href={toLangHref("/about/message-from-ceo")}>
                    <LangText en="Message from CEO" km="សារពី CEO" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/solutions")}>
                    <LangText en="Solutions" km="ដំណោះស្រាយ" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/blog")}>
                    <LangText en="Blog" km="ប្លក់" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/service")}>
                    <LangText en="Service & Support" km="សេវាកម្ម និងគាំទ្រ" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/return-policy")}>
                    <LangText en="Return Policy" km="គោលការណ៍ត្រឡប់ទំនិញ" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/terms-and-conditions")}>
                    <LangText en="Terms & Conditions" km="លក្ខខណ្ឌ និងកិច្ចព្រមព្រៀង" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/contact")}>
                    <LangText en="Contact" km="ទាក់ទង" />
                  </Link>
                </li>
              </ul>

              <div className="sr-only" aria-hidden="true">
                <Link href={toLangHref("/products/smart-board-75")}>Smart Board 75</Link>
                <Link href={toLangHref("/products/smart-board-86")}>Smart Board 86</Link>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-sm font-semibold text-slate-900">
                <LangText en="Top Product Categories" km="ប្រភេទផលិតផលពេញនិយម" />
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/led-display")}>
                    <LangText en="LED Display" km="អេក្រង់ LED" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/led-display/indoor-led-display")}>
                    <LangText en="Indoor LED Display" km="អេក្រង់ LED ខាងក្នុង" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/led-display/outdoor-led-display")}>
                    <LangText en="Outdoor LED Display" km="អេក្រង់ LED ខាងក្រៅ" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/led-display/video-processor")}>
                    <LangText en="Video Processor" km="ឧបករណ៍កែច្នៃវីដេអូ" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/interactive-flat-panel")}>
                    <LangText en="Interactive Flat Panel" km="អេក្រង់អន្តរកម្ម" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/pa-system")}>
                    <LangText en="PA System" km="ប្រព័ន្ធ PA" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/turnstile-gate")}>
                    <LangText en="Turnstile Gate" km="ច្រក Turnstile" />
                  </Link>
                </li>
                <li>
                  <Link className="text-slate-600 no-underline transition hover:text-slate-900 hover:no-underline" href={toLangHref("/products")}>
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
                  <LangText en="Share your project type, location, and timeline. Our team will recommend a practical configuration and budget plan." km="សូមចែករំលែកប្រភេទគម្រោង ទីតាំង និងពេលវេលារបស់អ្នក។ ក្រុមការងារយើងនឹងណែនាំការកំណត់រចនាសម្ព័ន្ធដែលអនុវត្តបាន និងផែនការថវិកាសមស្រប។"
                  />
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href={toLangHref("/contact")}
                    className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-slate-800 hover:no-underline"
                  >
                    <LangText en="Contact Mugnee Cambodia" km="ទាក់ទង Mugnee Cambodia" />
                  </Link>
                  <Link
                    href={toLangHref("/products")}
                    className="inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 no-underline transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900 hover:no-underline"
                  >
                    <LangText en="Explore Products" km="ស្វែងរកផលិតផល" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              <LangText en="© 2025 Mugnee Cambodia. Designed and Developed by " km="© 2025 Mugnee Cambodia។ រចនា និងអភិវឌ្ឍដោយ " />
              <a
                href="https://mugneeit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-700 underline decoration-slate-300 underline-offset-2 transition hover:text-slate-900 hover:decoration-slate-500"
              >
                Mugnee IT Solutions
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="no-underline hover:text-slate-700 hover:no-underline" href={toLangHref("/about")}>
                <LangText en="About" km="អំពីយើង" />
              </Link>
              <Link className="no-underline hover:text-slate-700 hover:no-underline" href={toLangHref("/solutions")}>
                <LangText en="Solutions" km="ដំណោះស្រាយ" />
              </Link>
              <Link className="no-underline hover:text-slate-700 hover:no-underline" href={toLangHref("/service")}>
                <LangText en="Service" km="សេវាកម្ម" />
              </Link>
              <Link className="no-underline hover:text-slate-700 hover:no-underline" href={toLangHref("/contact")}>
                <LangText en="Contact" km="ទាក់ទង" />
              </Link>
              <Link className="no-underline hover:text-slate-700 hover:no-underline" href={toLangHref("/blog")}>
                <LangText en="Blog" km="ប្លក់" />
              </Link>
              <Link className="no-underline hover:text-slate-700 hover:no-underline" href={toLangHref("/return-policy")}>
                <LangText en="Return Policy" km="គោលការណ៍ត្រឡប់ទំនិញ" />
              </Link>
              <Link className="no-underline hover:text-slate-700 hover:no-underline" href={toLangHref("/terms-and-conditions")}>
                <LangText en="Terms" km="លក្ខខណ្ឌ" />
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}






