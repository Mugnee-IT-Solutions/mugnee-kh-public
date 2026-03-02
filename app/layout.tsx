import "./globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LanguageProvider } from "./components/layout/LanguageProvider";
import SiteHeader from "./components/layout/Header";
import SiteFooter from "./components/layout/Footer";
import SitewideJsonLd from "./components/seo/SitewideJsonLd";
import WebVitalsReporter from "./components/seo/WebVitalsReporter";
import { SITE_URL } from "./lib/site";

/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
const ScrollToTopOnRoute = dynamic(() => import("./components/layout/ScrollToTopOnRoute"));
const FloatingContactChat = dynamic(() => import("./components/layout/FloatingContactChat"));
const GlobalBackToTop = dynamic(() => import("./components/layout/GlobalBackToTop"));

export const metadata: Metadata = {
  title: "Mugnee Cambodia",
  description: "LED Display & Smart Solutions in Cambodia",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/images/fav.webp", type: "image/webp", sizes: "192x192" },
      { url: "/images/fav.ico", type: "image/x-icon", sizes: "any" },
    ],
    shortcut: "/images/fav.ico",
    apple: "/images/fav.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-full overflow-hidden">
        <Suspense fallback={null}>
          <LanguageProvider>
            <SitewideJsonLd />
            <WebVitalsReporter />
            <ScrollToTopOnRoute />
            <SiteHeader />
            <main
              id="app-scroll-root"
              className="mt-[var(--header-height)] h-[calc(100vh-var(--header-height))] overflow-y-auto overflow-x-hidden"
            >
              {children}
              <SiteFooter />
            </main>
            <FloatingContactChat />
            <GlobalBackToTop />
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}
