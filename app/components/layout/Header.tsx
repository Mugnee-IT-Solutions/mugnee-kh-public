"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLang } from "./LanguageProvider";

type NavItem = { labelEn: string; labelKm: string; href: string };
type Lang = "en" | "km";
type SearchProduct = {
  slug: string;
  titleEn: string;
  titleKm: string;
  tagsEn: string[];
  tagsKm: string[];
};

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
  toLangHref: (href: string) => string;
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
  toLangHref,
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
          href={toLangHref(parentHref)}
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
                  href={toLangHref(it.href)}
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
  const [searchResults, setSearchResults] = useState<SearchProduct[]>([]);
  const [searchOpenDesktop, setSearchOpenDesktop] = useState(false);
  const [searchOpenMobile, setSearchOpenMobile] = useState(false);
  const [showQuotePhone, setShowQuotePhone] = useState(false);
  const desktopSearchRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);

  const stripLangPrefix = (value: string) => {
    if (value === "/km") return "/";
    if (value.startsWith("/km/")) return value.slice(3);
    return value;
  };

  const toLangHref = (href: string) => {
    if (!href) return href;
    if (
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("#")
    ) {
      return href;
    }
    const normalized = stripLangPrefix(href);
    if (lang === "km") return normalized === "/" ? "/km/" : `/km${normalized}`;
    return normalized;
  };

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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setShowQuotePhone((prev) => !prev);
    }, 5000);

    return () => window.clearInterval(timer);
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
      quotePhone: "ហៅ +855 86 817 907",
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
      quotePhone: "Call +855 86 817 907",
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

  const quotePhoneLabel = lang === "en" ? "Call +855 86 817 907" : "ហៅ +855 86 817 907";
  const quoteCtaLabel = showQuotePhone ? quotePhoneLabel : t.quote;

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
      labelKm: "សារពីនាយកប្រតិបត្តិ",
      href: "/about/message-from-ceo",
    },
  ];

  const solutionsMenu: NavItem[] = [
    {
      labelEn: "All Solutions",
      labelKm: "ដំណោះស្រាយទាំងអស់",
      href: "/solutions",
    },
    {
      labelEn: "Indoor Communication Solutions",
      labelKm: "ដំណោះស្រាយទំនាក់ទំនងក្នុងអគារ",
      href: "/solutions/indoor-communication-solutions-cambodia",
    },
    {
      labelEn: "Outdoor Campaign Solutions",
      labelKm: "ដំណោះស្រាយយុទ្ធនាការខាងក្រៅ",
      href: "/solutions/outdoor-campaign-solutions-cambodia",
    },
    {
      labelEn: "Retail Digital Signage Solutions",
      labelKm: "ដំណោះស្រាយស្លាកសញ្ញាឌីជីថលសម្រាប់លក់រាយ",
      href: "/solutions/retail-digital-signage-cambodia",
    },
    {
      labelEn: "Hotel Display Solutions",
      labelKm: "ដំណោះស្រាយអេក្រង់សម្រាប់សណ្ឋាគារ",
      href: "/solutions/hotel-display-solutions-cambodia",
    },
    {
      labelEn: "Factory PA Announcement Solutions",
      labelKm: "ដំណោះស្រាយប្រកាសសំឡេង PA សម្រាប់រោងចក្រ",
      href: "/solutions/factory-pa-announcement-cambodia",
    },
    {
      labelEn: "Office Access Control Solutions",
      labelKm: "ដំណោះស្រាយគ្រប់គ្រងការចូលចេញសម្រាប់ការិយាល័យ",
      href: "/solutions/office-access-control-cambodia",
    },
    {
      labelEn: "Education Smart Classroom Solutions",
      labelKm: "ដំណោះស្រាយថ្នាក់រៀនឆ្លាតវៃសម្រាប់វិស័យអប់រំ",
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

  const normalizedPathname = stripLangPrefix(pathname || "/");
  const isPathActive = (href: string) =>
    normalizedPathname === href || normalizedPathname.startsWith(`${href}/`);

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
    window.location.href = `${toLangHref("/products")}?${params.toString()}`;
  };

  const onSearchItemClick = (slug: string) => {
    setSearchOpenDesktop(false);
    setSearchOpenMobile(false);
    setQ("");
    forceScrollTop();
    router.push(toLangHref(`/products/catalog/${slug}/`));
  };

  useEffect(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) {
      setSearchResults([]);
      return;
    }

    const timer = window.setTimeout(async () => {
      const { PRODUCTS } = await import("../../data/products");
      const results = PRODUCTS.filter((product) => {
        const haystack = [
          product.titleEn,
          product.titleKm,
          product.slug,
          ...product.tagsEn,
          ...product.tagsKm,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(term);
      })
        .slice(0, 8)
        .map((product) => ({
          slug: product.slug,
          titleEn: product.titleEn,
          titleKm: product.titleKm,
          tagsEn: product.tagsEn,
          tagsKm: product.tagsKm,
        }));
      setSearchResults(results);
    }, 120);

    return () => window.clearTimeout(timer);
  }, [q]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideDesktop = desktopSearchRef.current?.contains(target);
      const isInsideMobile = mobileSearchRef.current?.contains(target);
      if (!isInsideDesktop) setSearchOpenDesktop(false);
      if (!isInsideMobile) setSearchOpenMobile(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

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

  const handleLanguageChange = (nextLang: "en" | "km") => {
    setLang(nextLang);
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.delete("lang");
    const basePath = stripLangPrefix(url.pathname);
    const nextPath = nextLang === "km" ? (basePath === "/" ? "/km/" : `/km${basePath}`) : basePath;
    const query = url.searchParams.toString();
    router.replace(`${nextPath}${query ? `?${query}` : ""}${url.hash}`, { scroll: false });
  };

  return (
    <header ref={headerRef} className="fixed top-0 z-50 w-full">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href={toLangHref("/")}
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
            <div ref={desktopSearchRef} className="relative">
            <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onFocus={() => setSearchOpenDesktop(true)}
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
            {searchOpenDesktop && q.trim().length >= 2 ? (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 isolate overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/70">
                {searchResults.length > 0 ? (
                  <ul className="max-h-80 overflow-y-auto py-1">
                    {searchResults.map((item) => (
                      <li key={item.slug}>
                        <button
                          type="button"
                          onClick={() => onSearchItemClick(item.slug)}
                          className="block w-full px-3 py-2 text-left hover:bg-slate-50"
                        >
                          <p className="text-sm font-semibold text-slate-900">
                            {lang === "en" ? item.titleEn : item.titleKm}
                          </p>
                          <p className="text-xs text-slate-500">
                            /products/catalog/{item.slug}/
                          </p>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-3 py-3 text-sm text-slate-500">
                    {lang === "en" ? "No matching products found." : "រកមិនឃើញផលិតផលដែលត្រូវគ្នា។"}
                  </p>
                )}
              </div>
            ) : null}
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
              href="tel:+85586817907"
              className="cta-attract hidden rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 lg:inline-flex"
              aria-label="Call Mugnee Cambodia at +855 86 817 907"
            >
              {quoteCtaLabel}
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
            <div ref={mobileSearchRef} className="relative">
            <div className="flex items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onFocus={() => setSearchOpenMobile(true)}
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
            {searchOpenMobile && q.trim().length >= 2 ? (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 isolate overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] ring-1 ring-slate-200/70">
                {searchResults.length > 0 ? (
                  <ul className="max-h-72 overflow-y-auto py-1">
                    {searchResults.map((item) => (
                      <li key={`m-${item.slug}`}>
                        <button
                          type="button"
                          onClick={() => onSearchItemClick(item.slug)}
                          className="block w-full px-3 py-2 text-left hover:bg-slate-50"
                        >
                          <p className="text-sm font-semibold text-slate-900">
                            {lang === "en" ? item.titleEn : item.titleKm}
                          </p>
                          <p className="text-xs text-slate-500">
                            /products/catalog/{item.slug}/
                          </p>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-3 py-3 text-sm text-slate-500">
                    {lang === "en" ? "No matching products found." : "រកមិនឃើញផលិតផលដែលត្រូវគ្នា។"}
                  </p>
                )}
              </div>
            ) : null}
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
                href="tel:+85586817907"
                className="cta-attract rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                aria-label="Call Mugnee Cambodia at +855 86 817 907"
              >
                {quoteCtaLabel}
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
              toLangHref={toLangHref}
              lang={lang}
            />

            <Link
              href={toLangHref("/interactive-flat-panel")}
              onClick={forceScrollTop}
              className={desktopNavLinkClass(isPathActive("/interactive-flat-panel"))}
            >
              {t.ifp}
            </Link>
            <Link
              href={toLangHref("/pa-system")}
              onClick={forceScrollTop}
              className={desktopNavLinkClass(isPathActive("/pa-system"))}
            >
              {t.paSystem}
            </Link>
            <Link
              href={toLangHref("/turnstile-gate")}
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
              toLangHref={toLangHref}
              lang={lang}
            />
            <Link
              href={toLangHref("/service")}
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
              toLangHref={toLangHref}
              lang={lang}
            />
            <Link
              href={toLangHref("/contact")}
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
                    href={toLangHref("/led-display")}
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
                      href={toLangHref("/led-display")}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {lang === "en" ? "All LED Display" : t.ledDisplay}
                    </Link>
                    <Link
                      href={toLangHref("/led-display/indoor-led-display")}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {t.indoorLed}
                    </Link>
                    <Link
                      href={toLangHref("/led-display/outdoor-led-display")}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {t.outdoorLed}
                    </Link>
                    <Link
                      href={toLangHref("/led-display")}
                      className="hidden rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {lang === "en" ? "All LED Display" : "មើលអេក្រង់ LED ទាំងអស់"}
                    </Link>
                    <Link
                      href={toLangHref("/led-display/receiving-card")}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {lang === "en" ? "Receiving Card" : "កាតទទួលសញ្ញា"}
                    </Link>
                    <Link
                      href={toLangHref("/led-display/video-processor")}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      onClick={() => {
                        forceScrollTop();
                        setOpenMobile(false);
                      }}
                    >
                      {lang === "en" ? "Video Processor" : "ឧបករណ៍ដំណើរការវីដេអូ"}
                    </Link>
                    <Link
                      href={toLangHref("/led-display/power-supply")}
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
                  href={toLangHref("/interactive-flat-panel")}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => {
                    forceScrollTop();
                    setOpenMobile(false);
                  }}
                >
                  {t.ifp}
                </Link>
                <Link
                  href={toLangHref("/pa-system")}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => {
                    forceScrollTop();
                    setOpenMobile(false);
                  }}
                >
                  {t.paSystem}
                </Link>
                <Link
                  href={toLangHref("/turnstile-gate")}
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
                        href={toLangHref(item.href)}
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
                  href={toLangHref("/service")}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => {
                    forceScrollTop();
                    setOpenMobile(false);
                  }}
                >
                  {t.service}
                </Link>
                <Link
                  href={toLangHref("/about")}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => {
                    forceScrollTop();
                    setOpenMobile(false);
                  }}
                >
                  {t.about}
                </Link>
                <Link
                  href={toLangHref("/about/message-from-ceo")}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => {
                    forceScrollTop();
                    setOpenMobile(false);
                  }}
                >
                  {lang === "en" ? "Message from CEO" : "សារពីនាយកប្រតិបត្តិ"}
                </Link>
                <Link
                  href={toLangHref("/contact")}
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

