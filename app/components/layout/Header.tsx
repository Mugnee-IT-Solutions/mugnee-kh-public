"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { useLang } from "./LanguageProvider";

type NavItem = { labelEn: string; labelKm: string; href: string };

export default function SiteHeader() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [q, setQ] = useState("");

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
      searchPlaceholder: "Search products, solutions…",
      searchAria: "Search",
      go: "Search",
      ledDisplay: "LED Display",
      indoorLed: "Indoor LED Display",
      outdoorLed: "Outdoor LED Display",
      ifp: "Interactive Flat Panel",
      ledController: "LED Controller",
      paSystem: "PA System",
      turnstile: "Turnstile Gate",
    };
    const km = {
      solutions: "ដំណោះស្រាយ",
      products: "ផលិតផល",
      service: "សេវាកម្ម & គាំទ្រ",
      projects: "គម្រោង",
      about: "អំពីយើង",
      contact: "ទំនាក់ទំនង",
      quote: "ស្នើសុំតម្លៃ (Free)",
      close: "បិទ",
      menu: "មឺនុយ",
      searchPlaceholder: "ស្វែងរកផលិតផល/ដំណោះស្រាយ…",
      searchAria: "ស្វែងរក",
      go: "Search",
      ledDisplay: "អេក្រង់ LED",
      indoorLed: "អេក្រង់ LED ក្នុងអគារ",
      outdoorLed: "អេក្រង់ LED ក្រៅអគារ",
      ifp: "អេក្រង់អន្តរកម្ម (IFP)",
      ledController: "LED Controller",
      paSystem: "ប្រព័ន្ធ PA",
      turnstile: "Turnstile Gate",
    };
    return lang === "en" ? en : km;
  }, [lang]);
  const products: NavItem[] = [
    { labelEn: "Indoor LED Display", labelKm: "Indoor LED Display", href: "/led-display/indoor-led-display" },
    { labelEn: "Outdoor LED Display", labelKm: "Outdoor LED Display", href: "/led-display/outdoor-led-display" },
    { labelEn: "LED Controller / Processor", labelKm: "Controller / Processor", href: "/products/led-controller" },
    { labelEn: "Interactive Flat Panel (IFP)", labelKm: "អេក្រង់អន្តរកម្ម (IFP)", href: "/interactive-flat-panel" },
    { labelEn: "Turnstile Gate", labelKm: "Turnstile Gate", href: "/turnstile-gate" },
    { labelEn: "PA System", labelKm: "ប្រព័ន្ធ PA", href: "/pa-system" },
  ];

  const ledDisplayMenu: NavItem[] = [
    { labelEn: "Indoor LED Display", labelKm: "Indoor LED Display", href: "/led-display/indoor-led-display" },
    { labelEn: "Outdoor LED Display", labelKm: "Outdoor LED Display", href: "/led-display/outdoor-led-display" },
    { labelEn: "Receiving Card", labelKm: "Receiving Card", href: "/led-display/receiving-card" },
    { labelEn: "Video Processor", labelKm: "Video Processor", href: "/led-display/video-processor" },
    { labelEn: "Power Supply", labelKm: "Power Supply", href: "/led-display/power-supply" },
  ];

  // ✅ Parent page mapping (IMPORTANT FIX)
  const parentHrefById: Record<string, string> = {
    ledDisplay: "/led-display",
    solutions: "/solutions",
    service: "/service",
    products: "/products",
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

  function Dropdown({
    id,
    title,
    items,
    align = "left",
  }: {
    id: string;
    title: string;
    items: NavItem[];
    align?: "left" | "center";
  }) {
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
        {/* Trigger */}
        <div
          className={[
            "inline-flex items-center overflow-hidden rounded-xl",
            "whitespace-nowrap",
            isOpen || isActive ? "bg-white/10" : "hover:bg-white/10",
          ].join(" ")}
        >
          {/* ✅ Click = go to parent page */}
          <Link
            href={parentHref}
            className={desktopNavLinkClass(isActive)}
            onClick={() => setOpenMenu(null)}
          >
            {title}
          </Link>

          {/* ✅ caret only = open/close dropdown */}
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

        {/* Dropdown panel */}
        {isOpen ? (
          <div role="menu" className={["absolute z-50", "top-full mt-2", panelPos].join(" ")}>
            {/* Hover bridge */}
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
                    onClick={() => setOpenMenu(null)}
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

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    window.location.href = `/products?search=${encodeURIComponent(query)}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo + Name */}
          <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
              M
            </span>
            <span className="leading-tight">
              Mugnee <span className="text-slate-500">Cambodia</span>
            </span>
          </Link>

          {/* Search (Desktop) */}
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

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-2">
            {/* Language toggle */}
            <div className="hidden items-center rounded-xl border border-slate-200 bg-white p-1 sm:inline-flex">
              <button
                className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                  lang === "en" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                }`}
                onClick={() => setLang("en")}
                type="button"
                aria-label="Switch to English"
              >
                English
              </button>

              <button
                className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                  lang === "km" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                }`}
                onClick={() => setLang("km")}
                type="button"
                aria-label="Switch to Khmer"
              >
                ខ្មែរ
              </button>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 lg:inline-flex"
            >
              {t.quote}
            </Link>

            {/* Mobile menu btn */}
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

        {/* Search (Mobile/Tablet) */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-3 lg:hidden">
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

            {/* Mobile language toggle */}
            <div className="mt-2 flex items-center justify-between sm:hidden">
              <div className="inline-flex items-center rounded-xl border border-slate-200 bg-white p-1">
                <button
                  className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                    lang === "en" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={() => setLang("en")}
                  type="button"
                >
                  English
                </button>
                <button
                  className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                    lang === "km" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={() => setLang("km")}
                  type="button"
                >
                  ខ្មែរ
                </button>
              </div>

              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
              >
                {t.quote}
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* MENU BAR */}
      <div className="border-b border-slate-900/10 bg-slate-900">
        <div className="mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 py-2">
          <nav className="hidden w-full items-center justify-between lg:flex flex-nowrap whitespace-nowrap" aria-label="Primary">
            <Dropdown id="ledDisplay" title={t.ledDisplay} items={ledDisplayMenu} />

            <Link
              href="/interactive-flat-panel"
              className={desktopNavLinkClass(isPathActive("/interactive-flat-panel"))}
            >
              {t.ifp}
            </Link>
            <Link
              href="/pa-system"
              className={desktopNavLinkClass(isPathActive("/pa-system"))}
            >
              {t.paSystem}
            </Link>

            <Link
              href="/turnstile-gate"
              className={desktopNavLinkClass(isPathActive("/turnstile-gate"))}
            >
              {t.turnstile}
            </Link>

            <Link
              href="/solutions"
              className={desktopNavLinkClass(isPathActive("/solutions"))}
            >
              {t.solutions}
            </Link>
            <Link href="/service" className={desktopNavLinkClass(isPathActive("/service"))}>
              {t.service}
            </Link>
            <Link href="/about" className={desktopNavLinkClass(isPathActive("/about"))}>
              {t.about}
            </Link>
            <Link href="/contact" className={desktopNavLinkClass(isPathActive("/contact"))}>
              {t.contact}
            </Link>
          </nav>

          <div className="lg:hidden">
            <span className="text-xs font-semibold text-white/80">
              {lang === "en" ? "Navigation" : "មុខម៉ឺនុយ"}
            </span>
          </div>
        </div>

        {/* Mobile panel */}
        {openMobile ? (
          <div className="border-t border-white/10 bg-slate-900 lg:hidden">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
              <div className="grid gap-2">
                <div className="mt-1">
                  <p className="px-3 pb-1 text-xs font-semibold text-white/70">{t.ledDisplay}</p>
                  <div className="grid gap-1">
                    <Link href="/led-display/indoor-led-display" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
                      {t.indoorLed}
                    </Link>
                    <Link href="/led-display/outdoor-led-display" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
                      {t.outdoorLed}
                    </Link>
                    {/* ✅ LED Display parent page */}
                    <Link href="/led-display" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
                      {lang === "en" ? "All LED Display" : "LED ទាំងអស់"}
                    </Link>
                    <Link href="/led-display/receiving-card" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
                      {lang === "en" ? "Receiving Card" : "Receiving Card"}
                    </Link>
                    <Link href="/led-display/video-processor" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
                      {lang === "en" ? "Video Processor" : "Video Processor"}
                    </Link>
                    <Link href="/led-display/power-supply" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
                      {lang === "en" ? "Power Supply" : "Power Supply"}
                    </Link>
                  </div>
                </div>

                <Link href="/interactive-flat-panel" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
                  {t.ifp}
                </Link>
                <Link href="/pa-system" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
                  {t.paSystem}
                </Link>

                <Link href="/turnstile-gate" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
                  {t.turnstile}
                </Link>

                <Link href="/solutions" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
                  {t.solutions}
                </Link>
                <Link href="/service" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
                  {t.service}
                </Link>
                <Link href="/about" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
                  {t.about}
                </Link>
                <Link href="/contact" className="rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpenMobile(false)}>
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



















