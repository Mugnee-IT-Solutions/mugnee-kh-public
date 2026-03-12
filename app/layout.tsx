import "./globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SiteHeader from "./components/layout/Header";
import SiteFooter from "./components/layout/Footer";
import SitewideJsonLd from "./components/seo/SitewideJsonLd";
import { SITE_URL } from "./lib/site";

/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
const ClientEnhancements = dynamic(() => import("./components/layout/ClientEnhancements"));

export const metadata: Metadata = {
  title: "Mugnee Cambodia",
  description: "LED Display & Smart Solutions in Cambodia",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/images/fav.webp", type: "image/webp", sizes: "192x192" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/fav.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-full overflow-hidden">
        <SitewideJsonLd />
        <ClientEnhancements />
        <SiteHeader />
        <main
          id="app-scroll-root"
          className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden"
        >
          {children}
          <SiteFooter />
        </main>
      </body>
    </html>
  );
}
