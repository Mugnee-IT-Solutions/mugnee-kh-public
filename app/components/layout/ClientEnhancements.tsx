"use client";

import ScrollToTopOnRoute from "./ScrollToTopOnRoute";
import FloatingContactChat from "./FloatingContactChat";
import GlobalBackToTop from "./GlobalBackToTop";
import WebVitalsReporter from "../seo/WebVitalsReporter";
import ChunkRecovery from "../seo/ChunkRecovery";

export default function ClientEnhancements() {
  return (
    <>
      <WebVitalsReporter />
      <ChunkRecovery />
      <ScrollToTopOnRoute />
      <FloatingContactChat />
      <GlobalBackToTop />
    </>
  );
}
