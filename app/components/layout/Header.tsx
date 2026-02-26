"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useMemo, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLang } from "./LanguageProvider";

type NavItem = { labelEn: string; labelKm: string; href: string };
type Lang = "en" | "km";

type DropdownProps = {
  id: string;
  title: string;
  items: NavItem[];
  align?: "left" | "center";
  openMenu: string | null;
  setOpenMenu: Dispatch<SetStateAction<string | null>>;
  parentHrefById: Record<string, string>;
  isPathActive: (href: string) => boolean;
  desktopNavLinkClass: (active: boolean) => string;
  forceScrollTop: () => void;
  lang: Lang;
};

function Dropdown({
  id,
  title,
  items,
  align = "left",
  openMenu,
  setOpenMenu,
  parentHrefById,
  isPathActive,
  desktopNavLinkClass,
  forceScrollTop,
  lang,
}: DropdownProps) {
  const isOpen = openMenu === id;
  const panelPos = align === "center" ? "left-1/2 -translate-x-1/2" : "left-0";
  const parentHref = parentHrefById[id] || "#";
  const isActive = isPathActive(parentHref);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(id)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div
        className={[
          "inline-flex items-center overflow-hidden rounded-xl",
          "whitespace-nowrap",
          isOpen || isActive ? "bg-white/10" : "hover:bg-white/10",
        ].join(" ")}
      >
        <Link
          href={parentHref}
          className={desktopNavLinkClass(isActive)}
          onClick={() => {
            forceScrollTop();
            setOpenMenu(null);
          }}
        >
          {title}
        </Link>

        <button
          type="button"
          className={[
            "px-2.5 py-2 text-slate-100/95 transition",
            "whitespace-nowrap leading-none",
            "hover:text-white",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
          ].join(" ")}
          aria-label="Open submenu"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          onClick={() => setOpenMenu(isOpen ? null : id)}
        >
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={`h-4 w-4 text-white transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 7.5l5 5 5-5" />
          </svg>
        </button>
      </div>

      {isOpen ? (
        <div role="menu" className={["absolute z-50", "top-full mt-2", panelPos].join(" ")}>
          <div className="absolute -top-2 left-0 right-0 h-2" />

          <div
            className={[
              "w-[340px] overflow-hidden rounded-2xl",
              "border border-white/10",
              "bg-slate-900/95 backdrop-blur",
              "shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
              "ring-1 ring-white/10",
              "animate-[mmDrop_.14s_ease-out]",
            ].join(" ")}
          >
            <div className="p-2">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className={[
                    "block rounded-xl px-3 py-2.5 text-sm no-underline hover:no-underline focus:no-underline",
                    "text-slate-100/90",
                    "transition",
                    "hover:bg-white/10 hover:text-white",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
                  ].join(" ")}
                  onClick={() => {
                    forceScrollTop();
                    setOpenMenu(null);
                  }}
                >
                  {lang === "en" ? it.labelEn : it.labelKm}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function SiteHeader() {
  const { lang, setLang } = useLang();
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const [openMobile, setOpenMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [q, setQ] = useState("");

  useLayoutEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    const applyHeaderHeight = () => {
      const height = Math.ceil(headerEl.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    };

    applyHeaderHeight();
    const ro = new ResizeObserver(applyHeaderHeight);
    ro.observe(headerEl);
    window.addEventListener("resize", applyHeaderHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", applyHeaderHeight);
    };
  }, []);

  const t = useMemo(() => {
    const en = {
      solutions: "Solutions",
      products: "Products",
      service: "Service & Support",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      quote: "Get a Free Quotation",
      close: "Close",
      menu: "Menu",
      searchPlaceholder: "Search products, solutions...",
      searchAria: "Search",
      go: "Search",
      ledDisplay: "LED Display",
      indoorLed: "Indoor LED Display",
      outdoorLed: "Outdoor LED Display",
      ifp: "Interactive Flat Panel",
      paSystem: "PA System",
      turnstile: "Turnstile Gate",
    };
    const km = {
      solutions: "ដំណោះស្រាយ",
      products: "ផលិតផល",
      service: "សេវាកម្ម & គាំទ្រ",
      projects: "គម្រោង",
      about: "អំពីយើង",
      contact: "ទាក់ទងយើង",
      quote: "ស្នើសុំតម្លៃ (Free)",
      close: "បិទ",
      menu: "ម៉ឺនុយ",
      searchPlaceholder: "ស្វែងរកផលិតផល/ដំណោះស្រាយ...",
      searchAria: "ស្វែងរក",
      go: "ស្វែងរក",
      ledDisplay: "អេក្រង់ LED",
      indoorLed: "អេក្រង់ LED ក្នុងអគារ",
      outdoorLed: "អេក្រង់ LED ក្រៅអគារ",
      ifp: "អេក្រង់អន្តរកម្ម (IFP)",
      paSystem: "ប្រព័ន្ធ PA",
      turnstile: "ច្រកទ្វារ Turnstile",
    };
    return lang === "en" ? en : km;
  }, [lang]);

  const ledDisplayMenu: NavItem[] = [
    {
      labelEn: "Indoor LED Display",
      labelKm: "អេក្រង់ LED ក្នុងអគារ",
      href: "/led-display/indoor-led-display",
    },
    {
      labelEn: "Outdoor LED Display",
      labelKm: "អេក្រង់ LED ក្រៅអគារ",
      href: "/led-display/outdoor-led-display",
    },
    {
      labelEn: "Receiving Card",
      labelKm: "កាតទទួលសញ្ញា",
      href: "/led-display/receiving-card",
    },
    {
      labelEn: "Video Processor",
      labelKm: "ឧបករណ៍ដំណើរការវីដេអូ",
      href: "/led-display/video-processor",
    },
    {
      labelEn: "Power Supply",
      labelKm: "ឧបករណ៍ផ្គត់ផ្គង់ថាមពល",
      href: "/led-display/power-supply",
    },
  ];

  const aboutMenu: NavItem[] = [
    {
      labelEn: "About Mugnee Cambodia",
      labelKm: "អំពី Mugnee Cambodia",
      href: "/about",
    },
    {
      labelEn: "Message from CEO",
      labelKm: "សារពី CEO",
      href: "/about/message-from-ceo",
    },
  ];

  const solutionsMenu: NavItem[] = [
    {
      labelEn: "All Solutions",
      labelKm: "All Solutions",
      href: "/solutions",
    },
    {
      labelEn: "Indoor Communication Solutions",
      labelKm: "Indoor Communication Solutions",
      href: "/solutions/indoor-communication-solutions-cambodia",
    },
    {
      labelEn: "Outdoor Campaign Solutions",
      labelKm: "Outdoor Campaign Solutions",
      href: "/solutions/outdoor-campaign-solutions-cambodia",
    },
    {
      labelEn: "Retail Digital Signage Solutions",
      labelKm: "Retail Digital Signage Solutions",
      href: "/solutions/retail-digital-signage-cambodia",
    },
    {
      labelEn: "Hotel Display Solutions",
      labelKm: "Hotel Display Solutions",
      href: "/solutions/hotel-display-solutions-cambodia",
    },
    {
      labelEn: "Factory PA Announcement Solutions",
      labelKm: "Factory PA Announcement Solutions",
      href: "/solutions/factory-pa-announcement-cambodia",
    },
    {
      labelEn: "Office Access Control Solutions",
      labelKm: "Office Access Control Solutions",
      href: "/solutions/office-access-control-cambodia",
    },
    {
      labelEn: "Education Smart Classroom Solutions",
      labelKm: "Education Smart Classroom Solutions",
      href: "/solutions/education-smart-classroom-cambodia",
    },
  ];

  const parentHrefById: Record<string, string> = {
    ledDisplay: "/led-display",
    solutions: "/solutions",
    service: "/service",
    products: "/products",
    about: "/about",
  };

  const isPathActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const desktopNavLinkClass = (active: boolean) =>
    [
      "relative rounded-xl px-3 py-2 text-sm font-semibold whitespace-nowrap leading-none transition no-underline hover:no-underline",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
      active ? "text-white bg-white/10" : "text-slate-100 hover:bg-white/10",
      "after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-0.5 after:h-0.5 after:rounded-full after:transition-opacity",
      active ? "after:opacity-100 after:bg-sky-300" : "after:opacity-0 after:bg-transparent",
    ].join(" ");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    const params = new URLSearchParams();
    params.set("search", query);
    if (lang === "km") params.set("lang", "km");
    window.location.href = `/products?${params.toString()}`;
  };

  const forceScrollTop = () => {
    const root = document.getElementById("app-scroll-root");
    const scrollingEl =
      root instanceof HTMLElement
        ? root
        : document.scrollingElement || document.documentElement;
    scrollingEl.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  const applyLangToUrl = (nextLang: "en" | "km") => {
    const params = new URLSearchParams(window.location.search);
    if (nextLang === "km") params.set("lang", "km");
    else params.delete("lang");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const handleLanguageChange = (nextLang: "en" | "km") => {
    setLang(nextLang);
    applyLangToUrl(nextLang);
  };

  return (
    <header ref={headerRef} className="fixed top-0 z-50 w-full">
      <div className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={forceScrollTop}
            className="flex shrink-0 items-center gap-2 font-semibold text-slate-900"
          >
            <Image
              src="/images/logo.png"
              alt="Mugnee Cambodia"
              width={210}
              height={64}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <form onSubmit={onSearch} className="hidden flex-1 lg:block">
            <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label={t.searchAria}
                className="min-w-0 flex-1 rounded-none bg-transparent px-3 py-1.5 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {t.go}
              </button>
            </div>
          </form>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden items-center rounded-xl border border-slate-200 bg-white p-1 sm:inline-flex">
              <button
                className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                  lang === "en" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                }`}
                onClick={() => handleLanguageChange("en")}
                type="button"
                aria-label="Switch to English"
              >
                English
              </button>

              <button
                className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                  lang === "km" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                }`}
                onClick={() => handleLanguageChange("km")}
                type="button"
                aria-label="Switch to Khmer"
              >
                ខ្មែរ
              </button>
            </div>

            <Link
              href="/contact"
              onClick={forceScrollTop}
              className="hidden rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 lg:inline-flex"
            >
              {t.quote}
            </Link>

            <button
              type="button"
              className="inline-flex rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 lg:hidden"
              onClick={() => setOpenMobile((s) => !s)}
              aria-label={openMobile ? t.close : t.menu}
            >
              {openMobile ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 pb-3 sm:px-6 lg:hidden lg:px-8">
          <form onSubmit={onSearch}>
            <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label={t.searchAria}
                className="min-w-0 flex-1 rounded-none bg-transparent px-3 py-1.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {t.go}
              </button>
            </div>

            <div className="mt-2 flex items-center justify-between sm:hidden">
              <div className="inline-flex items-center rounded-xl border border-slate-200 bg-white p-1">
                <button
                  className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                    lang === "en" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={() => handleLanguageChange("en")}
                  type="button"
                >
                  English
                </button>
                <button
                  className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                    lang === "km" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={() => handleLanguageChange("km")}
                  type="button"
                >
                  ខ្មែរ
                </button>
              </div>

              <Link
                href="/contact"
                onClick={forceScrollTop}
                className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
              >
                {t.quote}
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className={`${openMobile ? "block" : "hidden"} border-b border-slate-900/10 bg-slate-900 lg:block`}>
        <div className="mx-auto hidden w-full max-w-7xl items-center px-4 py-2 sm:px-6 lg:flex lg:px-8">
          <nav
            className="hidden w-full items-center justify-between whitespace-nowrap lg:flex"
            aria-label="Primary"
          >
            <Dropdown
              id="ledDisplay"
              title={t.ledDisplay}
              items={ledDisplayMenu}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              parentHrefById={parentHrefById}
              isPathActive={isPathActive}
              desktopNavLinkClass={desktopNavLinkClass}
              forceScrollTop={forceScrollTop}
              lang={lang}
            />

            <Link
              href="/interactive-flat-panel"
              onClick={forceScrollTop}
              className={desktopNavLinkClass(isPathActive("/interactive-flat-panel"))}
            >
              {t.ifp}
            </Link>
            <Link
              href="/pa-system"
              onClick={forceScrollTop}
              className={desktopNavLinkClass(isPathActive("/pa-system"))}
            >
              {t.paSystem}
            </Link>
            <Link
              href="/turnstile-gate"
              onClick={forceScrollTop}
              className={desktopNavLinkClass(isPathActive("/turnstile-gate"))}
            >
              {t.turnstile}
            </Link>
            <Dropdown
              id="solutions"
              title={t.solutions}
              items={solutionsMenu}
              align="center"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              parentHrefById={parentHrefById}
              isPathActive={isPathActive}
              desktopNavLinkClass={desktopNavLinkClass}
              forceScrollTop={forceScrollTop}
              lang={lang}
            />
            <Link
              href="/service"
              onClick={forceScrollTop}
              className={desktopNavLinkClass(isPathActive("/service"))}
            >
              {t.service}
            </Link>
            <Dropdown
              id="about"
              title={t.about}
              items={aboutMenu}
              align="center"
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              parentHrefById={parentHrefById}
              isPathActive={isPathActive}
              desktopNavLinkClass={desktopNavLinkClass}
              forceScrollTop={forceScrollTop}
              lang={lang}
            />
            <Link
              href="/contact"
              onClick={forceScrollTop}
              className={desktopNavLinkClass(isPathActive("/contact"))}
            >
              {t.contact}
            </Link>
          </nav>

        </div>

        {openMobile ? (
          <div className="max-h-[70vh] overflow-y-auto overscroll-contain border-t border-white/10 bg-slate-900 lg:hidden">
            <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
              <div className="grid gap-2">
                <div className="mt-1">
                  <Link
                    href="/led-display"
                    className="inline-flex rounded-lg px-3 pb-1 pt-1 text-xs font-semibold text-white/80 hover:bg-white/10 hover:text-white"
                    onClick={() => {
                      forceScrollTop();
                      setOpenMobile(false);
                    }}
                  >
                    {t.ledDisplay}
                  </Link>
                  <div className="grid gap-1">
                    <Link
                      href="/led-display"
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {lang === "en" ? "All LED Display" : t.ledDisplay}
                    </Link>
                    <Link
                      href="/led-display/indoor-led-display"
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {t.indoorLed}
                    </Link>
                    <Link
                      href="/led-display/outdoor-led-display"
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {t.outdoorLed}
                    </Link>
                    <Link
                      href="/led-display"
                      className="hidden rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {lang === "en" ? "All LED Display" : "មើល LED Display ទាំងអស់"}
                    </Link>
                    <Link
                      href="/led-display/receiving-card"
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {lang === "en" ? "Receiving Card" : "កាតទទួលសញ្ញា"}
                    </Link>
                    <Link
                      href="/led-display/video-processor"
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {lang === "en" ? "Video Processor" : "ឧបករណ៍ដំណើរការវីដេអូ"}
                    </Link>
                    <Link
                      href="/led-display/power-supply"
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {lang === "en" ? "Power Supply" : "ឧបករណ៍ផ្គត់ផ្គង់ថាមពល"}
                    </Link>
                  </div>
                </div>

                <Link
                  href="/interactive-flat-panel"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => {
                    forceScrollTop();
                    setOpenMobile(false);
                  }}
                >
                  {t.ifp}
                </Link>
                <Link
                  href="/pa-system"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => {
                    forceScrollTop();
                    setOpenMobile(false);
                  }}
                >
                  {t.paSystem}
                </Link>
                <Link
                  href="/turnstile-gate"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => {
                    forceScrollTop();
                    setOpenMobile(false);
                  }}
                >
                  {t.turnstile}
                </Link>
                <div className="mt-1">
                  <p className="px-3 pb-1 text-xs font-semibold text-white/70">{t.solutions}</p>
                  <div className="grid gap-1">
                    {solutionsMenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                        onClick={() => {
                          forceScrollTop();
                          setOpenMobile(false);
                        }}
                      >
                        {lang === "en" ? item.labelEn : item.labelKm}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/service"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => {
                    forceScrollTop();
                    setOpenMobile(false);
                  }}
                >
                  {t.service}
                </Link>
                <Link
                  href="/about"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => {
                    forceScrollTop();
                    setOpenMobile(false);
                  }}
                >
                  {t.about}
                </Link>
                <Link
                  href="/about/message-from-ceo"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => {
                    forceScrollTop();
                    setOpenMobile(false);
                  }}
                >
                  {lang === "en" ? "Message from CEO" : "សារពី CEO"}
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => {
                    forceScrollTop();
                    setOpenMobile(false);
                  }}
                >
                  {t.contact}
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
