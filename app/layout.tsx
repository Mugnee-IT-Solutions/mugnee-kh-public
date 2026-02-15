import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "./components/layout/LanguageProvider";
import SiteHeader from "./components/layout/Header";
import SiteFooter from "./components/layout/Footer";
import ScrollToTopOnRoute from "./components/layout/ScrollToTopOnRoute";

export const metadata: Metadata = {
  title: "Mugnee Cambodia",
  description: "LED Display & Smart Solutions in Cambodia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden">
        <LanguageProvider>
          <ScrollToTopOnRoute />
          <SiteHeader />
          {children}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}

