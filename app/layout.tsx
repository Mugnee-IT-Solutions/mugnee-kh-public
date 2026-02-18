import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "./components/layout/LanguageProvider";
import SiteHeader from "./components/layout/Header";
import SiteFooter from "./components/layout/Footer";
import ScrollToTopOnRoute from "./components/layout/ScrollToTopOnRoute";
import FloatingContactChat from "./components/layout/FloatingContactChat";
import GlobalBackToTop from "./components/layout/GlobalBackToTop";
import SitewideJsonLd from "./components/seo/SitewideJsonLd";
import BreadcrumbsJsonLd from "./components/seo/BreadcrumbsJsonLd";
import { SITE_URL } from "./lib/site";

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
    canonical: "/",
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
          <BreadcrumbsJsonLd />
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

