import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import SiteHeader from "../../app/components/layout/Header";
import SiteFooter from "../../app/components/layout/Footer";
import SitewideJsonLd from "../../app/components/seo/SitewideJsonLd";
import { SITE_URL } from "../../app/lib/site";

const ClientEnhancements = dynamic(
  () => import("../../app/components/layout/ClientEnhancements"),
  { ssr: false },
);

const title = "Site Map | Mugnee Cambodia";
const description =
  "Browse key pages, solutions, products, and guides on Mugnee Cambodia. Use this site map to find pages quickly.";

const SECTIONS: Array<{ title: string; links: Array<{ href: string; label: string }> }> = [
  {
    title: "Core pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/led-display/", label: "LED Display" },
      { href: "/interactive-flat-panel/", label: "Interactive Flat Panel" },
      { href: "/pa-system/", label: "PA System" },
      { href: "/turnstile-gate/", label: "Turnstile Gate" },
      { href: "/products/", label: "Products" },
      { href: "/solutions/", label: "Solutions" },
      { href: "/service/", label: "Service & Support" },
      { href: "/contact/", label: "Contact" },
      { href: "/about/", label: "About" },
      { href: "/blog/", label: "Blog" },
    ],
  },
  {
    title: "Solutions (Cambodia)",
    links: [
      { href: "/solutions/office-access-control-cambodia/", label: "Office Access Control" },
      { href: "/solutions/education-smart-classroom-cambodia/", label: "Smart Classroom" },
      { href: "/solutions/factory-pa-announcement-cambodia/", label: "Factory PA Announcement" },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/blog/led-display-cambodia-guide/", label: "LED Display Buyer's Guide" },
      { href: "/blog/led-display-price-cambodia/", label: "LED Display Price in Cambodia" },
    ],
  },
  {
    title: "Featured product pages",
    links: [
      { href: "/products/smart-board-55/", label: 'Smart Board 55"' },
      { href: "/products/smart-board-65/", label: 'Smart Board 65"' },
      { href: "/products/skyworth-smart-board-4k-75/", label: 'Skyworth 75" 4K Smart Board' },
      { href: "/products/tripod-turnstiles-2/", label: "Tripod Turnstiles" },
      { href: "/products/scheduler-based-audio-control-system/", label: "Scheduler Based Audio Control System" },
    ],
  },
  {
    title: "Policies",
    links: [
      { href: "/return-policy/", label: "Return Policy" },
      { href: "/terms-and-conditions/", label: "Terms and Conditions" },
    ],
  },
  {
    title: "Khmer (KM) versions",
    links: [
      { href: "/km/", label: "Home (KM)" },
      { href: "/km/led-display/", label: "LED Display (KM)" },
      { href: "/km/solutions/office-access-control-cambodia/", label: "Office Access Control (KM)" },
      { href: "/km/solutions/education-smart-classroom-cambodia/", label: "Smart Classroom (KM)" },
      { href: "/km/solutions/factory-pa-announcement-cambodia/", label: "Factory PA Announcement (KM)" },
      { href: "/km/blog/digital-signage-cambodia/", label: "Digital Signage (KM blog)" },
      { href: "/km/blog/led-display-maintenance-cambodia/", label: "LED Maintenance (KM blog)" },
      { href: "/km/blog/led-display-vs-lcd-vs-oled/", label: "LED vs LCD vs OLED (KM blog)" },
      { href: "/km/blog/indoor-vs-outdoor-led-display/", label: "Indoor vs Outdoor (KM blog)" },
      { href: "/km/blog/led-video-wall-conference-room/", label: "Conference Room Video Wall (KM blog)" },
      { href: "/km/blog/led-screen-installation-phnom-penh/", label: "Installation Phnom Penh (KM blog)" },
      { href: "/km/blog/led-display-power-consumption-guide/", label: "Power Consumption (KM blog)" },
      { href: "/km/blog/led-display-for-retail-stores-cambodia/", label: "Retail LED Placement (KM blog)" },
      { href: "/km/blog/pixel-pitch-led-display-guide/", label: "Pixel Pitch Guide (KM blog)" },
      { href: "/km/blog/led-display-price-cambodia/", label: "LED Display Price (KM blog)" },
      { href: "/km/products/smart-board-55/", label: 'Smart Board 55" (KM)' },
      { href: "/km/products/smart-board-65/", label: 'Smart Board 65" (KM)' },
      { href: "/km/products/skyworth-smart-board-4k-75/", label: 'Skyworth 75" 4K Smart Board (KM)' },
      { href: "/km/products/tripod-turnstiles-2/", label: "Tripod Turnstiles (KM)" },
      { href: "/km/products/scheduler-based-audio-control-system/", label: "Scheduler Based Audio Control System (KM)" },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/site-map/`} />
        <link rel="alternate" hrefLang="en-KH" href={`${SITE_URL}/site-map/`} />
        <link rel="alternate" hrefLang="km-KH" href={`${SITE_URL}/km/site-map/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/site-map/`} />
      </Head>

      <div className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <ClientEnhancements />
        <SiteHeader />
        <main
          id="app-scroll-root"
          className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden bg-slate-50"
        >
          <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Site Map</h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
              Use this page to quickly find key pages, solutions, products, and guides across Mugnee Cambodia.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {SECTIONS.map((section) => (
                <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900">{section.title}</h2>
                  <ul className="mt-3 space-y-2 text-sm">
                    {section.links.map((item) => (
                      <li key={item.href}>
                        <Link className="text-sky-700 no-underline hover:underline" href={item.href}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <SiteFooter />
        </main>
      </div>
    </>
  );
}

