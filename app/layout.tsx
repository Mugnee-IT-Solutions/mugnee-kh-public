import "./globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { LanguageProvider } from "./components/layout/LanguageProvider";
import SiteHeader from "./components/layout/Header";
import SiteFooter from "./components/layout/Footer";
import SitewideJsonLd from "./components/seo/SitewideJsonLd";
import { SITE_URL } from "./lib/site";

const ScrollToTopOnRoute = dynamic(() => import("./components/layout/ScrollToTopOnRoute"));
const FloatingContactChat = dynamic(() => import("./components/layout/FloatingContactChat"));
const GlobalBackToTop = dynamic(() => import("./components/layout/GlobalBackToTop"));

export const metadata: Metadata = {
  title: "Mugnee Cambodia",
  description: "LED Display & Smart Solutions in Cambodia",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/images/fav.ico",
    shortcut: "/images/fav.ico",
    apple: "/images/logo.png",
  },
  alternates: {
    languages: {
      en: "/",
      km: "/?lang=km",
      "x-default": "/",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden">
        <LanguageProvider>
          <SitewideJsonLd />
          <ScrollToTopOnRoute />
          <SiteHeader />
          <main className="pt-[var(--header-height)]">{children}</main>
          <SiteFooter />
          <FloatingContactChat />
          <GlobalBackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}


