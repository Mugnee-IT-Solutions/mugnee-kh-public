import "./globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { LanguageProvider } from "./components/layout/LanguageProvider";
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
const ScrollToTopOnRoute = dynamic(() => import("./components/layout/ScrollToTopOnRoute"));
const FloatingContactChat = dynamic(() => import("./components/layout/FloatingContactChat"));
const GlobalBackToTop = dynamic(() => import("./components/layout/GlobalBackToTop"));

export const metadata: Metadata = {
  title: "Mugnee Cambodia",
  description: "LED Display & Smart Solutions in Cambodia",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-full overflow-hidden">
        <LanguageProvider>
          <SitewideJsonLd />
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
      </body>
    </html>
  );
}
