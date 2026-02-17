"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useLang } from "../../components/layout/LanguageProvider";
import ProductGrid from "../../components/sections/ProductGrid";
import { SITE_URL } from "../../lib/site";

type ProductGridConfig = {
  columns?: 2 | 3 | 4;
  pageSize?: number;
  allowedCategoryIds?: string[];
  filterCategoryIds?: string[];
  categoryOrderIds?: string[];
  showCategoryFilters?: boolean;
  showSort?: boolean;
  showPagination?: boolean;
  detailBasePath?: string;
};

const LED_FAQS_EN: Array<{ q: string; a: string }> = [
  {
    q: "What is the best LED display for indoor use in Cambodia?",
    a: "Indoor LED screens work best with finer pixel pitch (P1.25-P2.5) for close viewing in boardrooms, showrooms, and control rooms. Viewing distance is the key factor for clarity.",
  },
  {
    q: "What brightness (nits) is required for outdoor LED billboards?",
    a: "Outdoor LED displays typically use high brightness (around 4,500-7,000+ nits) so content stays visible in Cambodia sunlight.",
  },
  {
    q: "What IP rating is recommended for outdoor LED screens in Cambodia?",
    a: "Outdoor LED installations usually require IP65+ (front) for rain and dust protection. This is a common standard for billboards.",
  },
  {
    q: "How do I choose the right pixel pitch and viewing distance?",
    a: "Pixel pitch should match viewing distance. Smaller pitch is for close viewing; larger pitch is for longer viewing and budget efficiency.",
  },
  {
    q: "What refresh rate is recommended for LED displays?",
    a: "Many LED systems use 1,920Hz or higher. For camera use or broadcast, 3,840Hz or higher is preferred to reduce flicker.",
  },
  {
    q: "How long does an LED display last?",
    a: "A quality LED display can last 50,000+ hours depending on brightness settings, usage hours, and maintenance conditions.",
  },
  {
    q: "Does outdoor LED need special heat or climate protection?",
    a: "Yes. Outdoor LED in Cambodia needs heat management, weatherproof cabinets, and proper grounding to handle heat, rain, and dust.",
  },
  {
    q: "Why choose LED instead of LCD for large outdoor screens?",
    a: "LED is seamless, brighter, and scalable for large formats. LCD is usually for smaller sizes and has visible bezels.",
  },
  {
    q: "Can LED display price be fixed from a price list?",
    a: "Prices depend on pixel pitch, size, brightness, structure, and site conditions. That is why we provide project-based quotations.",
  },
  {
    q: "Do you provide installation and after-sales support in Cambodia?",
    a: "Yes. We handle survey, installation, commissioning, training, and ongoing maintenance support.",
  },
];

const LED_FAQS_KM: Array<{ q: string; a: string }> = [
  {
    q: "ážáž¾ LED Display áž”áŸ’ážšáž—áŸáž‘ážŽáž¶áž›áŸ’áž¢ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážšáž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶?",
    a: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš áž‚áž½ážšáž‡áŸ’ážšáž¾ážŸ pixel pitch áž›áŸ’áž¢áž·ážáž‡áž¶áž„ (P1.25-P2.5) ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž›áž‡áž·áž ážŠáž¼áž…áž‡áž¶ boardroom, showroom áž“áž·áž„ control roomáŸ” áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž›áž‚ážºáž‡áž¶áž€ážáŸ’ážáž¶ážŸáŸ†ážáž¶áž“áŸ‹áž”áŸ†áž•áž»ážážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž—áž¶áž–áž…áŸ’áž”áž¶ážŸáŸ‹áŸ”",
  },
  {
    q: "ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ Billboard ážáž¶áž„áž€áŸ’ážšáŸ… ážáŸ’ážšáž¼ážœáž€áž¶ážš brightness áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ nits?",
    a: "Outdoor LED áž‡áž¶áž‘áž¼áž‘áŸ…ážáŸ’ážšáž¼ážœáž€áž¶ážš brightness ážáŸ’áž–ážŸáŸ‹ (áž”áŸ’ážšáž áŸ‚áž› 4,500-7,000+ nits) ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™áž˜áž¶ážáž·áž€áž¶áž¢áž¶áž…áž˜áž¾áž›ážƒáž¾áž‰áž…áŸ’áž”áž¶ážŸáŸ‹áž€áŸ’ážšáŸ„áž˜áž–áž“áŸ’áž›ážºážáŸ’áž„áŸƒáž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ”",
  },
  {
    q: "Outdoor LED áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ áž‚áž½ážšážáŸ‚áž˜áž¶áž“áž€áž˜áŸ’ážšáž·ážáž€áž¶ážšáž–áž¶ážš IP áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“?",
    a: "áž€áž¶ážšážŠáŸ†áž¡áž¾áž„ážáž¶áž„áž€áŸ’ážšáŸ…áž—áž¶áž‚áž…áŸ’ážšáž¾áž“ážáŸ’ážšáž¼ážœáž€áž¶ážš IP65+ (áž•áŸ’áž“áŸ‚áž€ážáž¶áž„áž˜áž»áž) ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž–áž¶ážšáž‘áž¹áž€áž—áŸ’áž›áŸ€áž„ áž“áž·áž„áž’áž¼áž›áž¸áŸ” áž“áŸáŸ‡áž‡áž¶ážŸáŸ’ážáž„áŸ‹ážŠáž¶ážšážŠáŸ‚áž›áž‚áŸáž”áŸ’ážšáž¾áž‡áž¶áž‰áž¹áž€áž‰áž¶áž”áŸ‹ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ billboardáŸ”",
  },
  {
    q: "ážáž¾áž‡áŸ’ážšáž¾ážŸ pixel pitch áž“áž·áž„áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž›áž±áŸ’áž™ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœáž™áŸ‰áž¶áž„ážŠáž¼áž…áž˜áŸ’ážáŸáž…?",
    a: "Pixel pitch ážáŸ’ážšáž¼ážœážáŸ‚ážŸáž˜áž“áž¹áž„áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž›áŸ” pitch ážáž¼áž…ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž˜áž¾áž›áž‡áž·áž ážážŽáŸˆ pitch áž’áŸ†ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž…áž˜áŸ’áž„áž¶áž™áž†áŸ’áž„áž¶áž™ áž“áž·áž„ážŸáž“áŸ’ážŸáŸ†ážážœáž·áž€áž¶áŸ”",
  },
  {
    q: "Refresh rate áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ LED Display?",
    a: "áž”áŸ’ážšáž–áŸáž“áŸ’áž’ LED áž‡áž¶áž…áŸ’ážšáž¾áž“áž”áŸ’ážšáž¾ 1,920Hz áž¬ážáŸ’áž–ážŸáŸ‹áž‡áž¶áž„áž“áŸáŸ‡áŸ” ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšážážáž€áž¶áž˜áŸážšáŸ‰áž¶ áž¬ broadcast áž‚áž½ážšáž”áŸ’ážšáž¾ 3,840Hz áž¬ážáŸ’áž–ážŸáŸ‹áž‡áž¶áž„áž“áŸáŸ‡ ážŠáž¾áž˜áŸ’áž”áž¸áž€áž¶ážáŸ‹áž”áž“áŸ’ážáž™ flickeráŸ”",
  },
  {
    q: "LED Display áž˜áž¶áž“áž¢áž¶áž™áž»áž€áž¶áž›áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“?",
    a: "LED ážŠáŸ‚áž›áž˜áž¶áž“áž‚áž»ážŽáž—áž¶áž–áž¢áž¶áž…áž”áŸ’ážšáž¾áž”áž¶áž“áž›áž¾ážŸ 50,000 áž˜áŸ‰áŸ„áž„ áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾áž€áž¶ážšáž€áŸ†ážŽážáŸ‹ brightness áž˜áŸ‰áŸ„áž„áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ áž“áž·áž„áž€áž¶ážšážáŸ‚áž‘áž¶áŸ†áŸ”",
  },
  {
    q: "Outdoor LED ážáŸ’ážšáž¼ážœáž€áž¶ážšáž€áž¶ážšáž€áž¶ážšáž–áž¶ážšáž€áŸ†ážŠáŸ… áž¬áž¢áž¶áž€áž¶ážŸáž’áž¶ážáž»áž–áž·ážŸáŸážŸáž‘áŸ?",
    a: "ážáŸ’ážšáž¼ážœáž€áž¶ážšáŸ” Outdoor LED áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ ážáŸ’ážšáž¼ážœáž˜áž¶áž“áž€áž¶ážšáž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áŸ†ážŠáŸ… cabinet áž€áž¶ážšáž–áž¶ážšáž¢áž¶áž€áž¶ážŸáž’áž¶ážáž» áž“áž·áž„ grounding ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ ážŠáž¾áž˜áŸ’áž”áž¸áž‘áž”áŸ‹áž‘áž›áŸ‹áž“áž¹áž„áž€áŸ†ážŠáŸ… áž—áŸ’áž›áŸ€áž„ áž“áž·áž„áž’áž¼áž›áž¸áŸ”",
  },
  {
    q: "áž áŸážáž»áž¢áŸ’ážœáž¸áž‚áž½ážšáž‡áŸ’ážšáž¾ážŸ LED áž‡áŸ†áž“áž½ážŸ LCD ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž¢áŸáž€áŸ’ážšáž„áŸ‹áž’áŸ†ážáž¶áž„áž€áŸ’ážšáŸ…?",
    a: "LED áž‚áŸ’áž˜áž¶áž“ážŸáŸŠáž»áž˜áž—áŸ’áž‡áž¶áž”áŸ‹áž—áŸ’áž›áž¹áž”áž—áŸ’áž›áŸ‚áž áž—áŸ’áž›ážºáž‡áž¶áž„ áž“áž·áž„áž–áž„áŸ’ážšáž¸áž€áž‘áŸ†áž áŸ†áž”áž¶áž“áž„áž¶áž™ážŸáŸ’ážšáž½áž›ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‘áž˜áŸ’ážšáž„áŸ‹áž’áŸ†áŸ” LCD áž‡áž¶áž‘áž¼áž‘áŸ…ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‘áŸ†áž áŸ†ážáž¼áž… áž“áž·áž„áž˜áž¶áž“ bezel áž˜áž¾áž›ážƒáž¾áž‰áŸ”",
  },
  {
    q: "ážáž˜áŸ’áž›áŸƒ LED Display áž¢áž¶áž…áž€áŸ†ážŽážáŸ‹ážáŸážšážáž¶áž˜ price list áž”áž¶áž“áž‘áŸ?",
    a: "ážáž˜áŸ’áž›áŸƒáž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾ pixel pitch áž‘áŸ†áž áŸ† brightness ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’ áž“áž·áž„áž›áž€áŸ’ážážážŽáŸ’ážŒáž‘áž¸ážáž¶áŸ†áž„áŸ” ážŠáž¼áž…áŸ’áž“áŸáŸ‡áž™áž¾áž„áž•áŸ’ážáž›áŸ‹áž‡áž¼áž“ážáž˜áŸ’áž›áŸƒážáž¶áž˜áž‚áž˜áŸ’ážšáŸ„áž„ (project-based quotation)áŸ”",
  },
  {
    q: "ážáž¾áž¢áŸ’áž“áž€áž˜áž¶áž“ážŸáŸážœáž¶ážŠáŸ†áž¡áž¾áž„ áž“áž·áž„ after-sales support áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áž‘áŸ?",
    a: "áž˜áž¶áž“áŸ” áž™áž¾áž„áž•áŸ’ážáž›áŸ‹ážŸáŸážœáž¶ survey, installation, commissioning, training áž“áž·áž„áž€áž¶ážšáž‚áž¶áŸ†áž‘áŸ’ážšážáŸ‚áž‘áž¶áŸ†áž”áž“áŸ’ážáŸ”",
  },
];

const INTERNAL_LINK_CLUSTER_EN = [
  { title: "Indoor LED Display in Cambodia", href: "/led-display/indoor-led-display" },
  { title: "Outdoor LED Billboard in Cambodia", href: "/led-display/outdoor-led-display" },
  { title: "LED Receiving Card Guide", href: "/led-display/receiving-card" },
  { title: "LED Video Processor Selection", href: "/led-display/video-processor" },
  { title: "LED Power Supply & Parts", href: "/led-display/power-supply" },
  { title: "LED Installation & Service Support", href: "/service" },
  { title: "Cambodia Solutions by Industry", href: "/solutions" },
  { title: "Get LED Project Quotation", href: "/contact" },
];

const INTERNAL_LINK_CLUSTER_KM = [
  { title: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážšáž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶", href: "/led-display/indoor-led-display" },
  { title: "áž”áŸŠáž¸áž›áž”ážáŸ’ážš LED ážáž¶áž„áž€áŸ’ážšáŸ…áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶", href: "/led-display/outdoor-led-display" },
  { title: "áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸ LED Receiving Card", href: "/led-display/receiving-card" },
  { title: "áž€áž¶ážšáž‡áŸ’ážšáž¾ážŸážšáž¾ážŸ LED Video Processor", href: "/led-display/video-processor" },
  { title: "LED Power Supply áž“áž·áž„áž‚áŸ’ážšáž¿áž„áž”áž“áŸ’áž›áž¶ážŸáŸ‹", href: "/led-display/power-supply" },
  { title: "ážŸáŸážœáž¶ážŠáŸ†áž¡áž¾áž„ áž“áž·áž„áž‚áž¶áŸ†áž‘áŸ’ážšáž”áž…áŸ’áž…áŸáž€áž‘áŸážŸ LED", href: "/service" },
  { title: "ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™ážáž¶áž˜ážœáž·ážŸáŸáž™áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶", href: "/solutions" },
  { title: "ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒáž‚áž˜áŸ’ážšáŸ„áž„ LED", href: "/contact" },
];

const DEFAULT_TRUST_SIGNALS_EN = [
  "Cambodia-focused LED display entity setup with LocalBusiness, Service, Breadcrumb, and FAQ schema signals",
  "Project-based BOQ, pixel-pitch planning, and engineering-first LED specification workflow",
  "Local delivery and service coverage in Phnom Penh, Siem Reap, Sihanoukville, and key Cambodia cities",
  "End-to-end execution workflow: site survey, structure planning, installation, commissioning, and after-sales support",
];

const DEFAULT_TRUST_SIGNALS_KM = [
  "áž”áž„áŸ’áž€áž¾áž entity ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ LED Display áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ ážŠáŸ„áž™áž”áŸ’ážšáž¾ LocalBusiness, Service, Breadcrumb áž“áž·áž„ FAQ schema",
  "ážŠáŸ†ážŽáž¾ážšáž€áž¶ážš BOQ ážáž¶áž˜áž‚áž˜áŸ’ážšáŸ„áž„ áž€áž¶ážšáž‚áŸ’ážšáŸ„áž„ pixel pitch áž“áž·áž„áž€áž¶ážšáž€áŸ†ážŽážáŸ‹ážŸáŸ’áž”áŸ‰áž·áž€ážáž¶áž˜ážœáž·ážŸáŸ’ážœáž€áž˜áŸ’áž˜",
  "áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹áž€áž¶ážšážŠáž¹áž€áž‡áž‰áŸ’áž‡áž¼áž“ áž“áž·áž„ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áž€áŸ’áž“áž»áž„ážŸáŸ’ážšáž»áž€ áž“áŸ…áž—áŸ’áž“áŸ†áž–áŸáž‰ ážŸáŸ€áž˜ážšáž¶áž” áž–áŸ’ážšáŸ‡ážŸáž¸áž áž“áž» áž“áž·áž„ážáŸážáŸ’ážážŸáŸ†ážáž¶áž“áŸ‹áŸ—",
  "ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž–áŸáž‰áž›áŸáž‰áž–áž¸ site survey, planning, installation, commissioning ážŠáž›áŸ‹ after-sales support",
];

const DEFAULT_TRUST_PROOF_CHIPS_EN = [
  "Cambodia LED Display Supplier",
  "Indoor & Outdoor LED Expertise",
  "BOQ & Engineering Workflow",
  "Local Installation Team",
  "After-Sales Service Coverage",
  "Entity + Schema Optimized Page",
];

const DEFAULT_TRUST_PROOF_CHIPS_KM = [
  "áž¢áŸ’áž“áž€áž•áŸ’áž‚ážáŸ‹áž•áŸ’áž‚áž„áŸ‹ LED Display áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
  "áž‡áŸ†áž“áž¶áž‰ LED áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš áž“áž·áž„ážáž¶áž„áž€áŸ’ážšáŸ…",
  "ážŠáŸ†ážŽáž¾ážšáž€áž¶ážš BOQ áž“áž·áž„ážœáž·ážŸáŸ’ážœáž€áž˜áŸ’áž˜",
  "áž€áŸ’ážšáž»áž˜ážŠáŸ†áž¡áž¾áž„áž€áŸ’áž“áž»áž„ážŸáŸ’ážšáž»áž€",
  "áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áž”áž“áŸ’áž‘áž¶áž”áŸ‹áž–áž¸áž›áž€áŸ‹",
  "áž‘áŸ†áž–áŸážšážŠáŸ‚áž› Optimize ážŠáŸ„áž™ Entity + Schema",
];

export default function LedDisplayClient({
  productGridOverride,
  productQuickChips,
  afterSpecsContent,
  afterSpecsContentKm,
  pixelPitchIntroOverride,
  pixelPitchIntroOverrideKm,
  pixelPitchRowsOverride,
  pixelPitchRowsOverrideKm,
  pixelPitchSectionOverride,
  pixelPitchSectionOverrideKm,
  faqItemsOverride,
  internalLinkClusterOverride,
  internalLinkClusterOverrideKm,
  trustSignalsOverride,
  trustSignalsOverrideKm,
  trustTitleOverride,
  trustTitleOverrideKm,
  trustDescOverride,
  trustDescOverrideKm,
  internalLinkTitleOverride,
  internalLinkTitleOverrideKm,
  internalLinkDescOverride,
  internalLinkDescOverrideKm,
  schemaPathOverride,
  schemaNameOverride,
  schemaServiceNameOverride,
  schemaServiceDescOverride,
  heroTitleOverride,
  heroTitleOverrideKm,
  heroIntroOverride,
  heroIntroOverrideKm,
  breadcrumbOverride,
}: {
  productGridOverride?: ProductGridConfig;
  productQuickChips?: { label: string; href: string }[];
  afterSpecsContent?: React.ReactNode;
  afterSpecsContentKm?: React.ReactNode;
  pixelPitchIntroOverride?: string;
  pixelPitchIntroOverrideKm?: string;
  pixelPitchRowsOverride?: [string, string, string][];
  pixelPitchRowsOverrideKm?: [string, string, string][];
  pixelPitchSectionOverride?: React.ReactNode;
  pixelPitchSectionOverrideKm?: React.ReactNode;
  faqItemsOverride?: Array<{ q: string; a: string }>;
  internalLinkClusterOverride?: Array<{ title: string; href: string }>;
  internalLinkClusterOverrideKm?: Array<{ title: string; href: string }>;
  trustSignalsOverride?: string[];
  trustSignalsOverrideKm?: string[];
  trustTitleOverride?: string;
  trustTitleOverrideKm?: string;
  trustDescOverride?: string;
  trustDescOverrideKm?: string;
  internalLinkTitleOverride?: string;
  internalLinkTitleOverrideKm?: string;
  internalLinkDescOverride?: string;
  internalLinkDescOverrideKm?: string;
  schemaPathOverride?: string;
  schemaNameOverride?: string;
  schemaServiceNameOverride?: string;
  schemaServiceDescOverride?: string;
  heroTitleOverride?: string;
  heroTitleOverrideKm?: string;
  heroIntroOverride?: string;
  heroIntroOverrideKm?: string;
  breadcrumbOverride?: string;
}) {
  const { lang } = useLang();
  const faqItems =
    faqItemsOverride ?? (lang === "en" ? LED_FAQS_EN : LED_FAQS_KM);
  const internalLinks =
    (lang === "en"
      ? internalLinkClusterOverride
      : (internalLinkClusterOverrideKm ?? internalLinkClusterOverride)) ??
    (lang === "en" ? INTERNAL_LINK_CLUSTER_EN : INTERNAL_LINK_CLUSTER_KM);
  const trustSignals =
    (lang === "en"
      ? trustSignalsOverride
      : (trustSignalsOverrideKm ?? trustSignalsOverride)) ??
    (lang === "en" ? DEFAULT_TRUST_SIGNALS_EN : DEFAULT_TRUST_SIGNALS_KM);
  const trustProofChips =
    lang === "en" ? DEFAULT_TRUST_PROOF_CHIPS_EN : DEFAULT_TRUST_PROOF_CHIPS_KM;
  const schemaPath = schemaPathOverride ?? "/led-display";
  const schemaName = schemaNameOverride ?? "LED Display";
  const schemaServiceName = schemaServiceNameOverride ?? "LED Display in Cambodia";
  const schemaServiceDesc =
    schemaServiceDescOverride ??
    "Indoor LED video walls, outdoor LED billboards, rental LED screens, installation, commissioning and after-sales support in Cambodia.";

  const t = useMemo(() => {
    const en = {
      breadcrumb: "Products",
      h1: "LED Display Price in Cambodia",    
      intro:
        "Mugnee Multiple delivers Indoor LED Display, Outdoor LED Display, LED Video Wall, LED Screen Panel, LED Billboard, Digital LED Display, Advertising LED Display, and LED Signage Display solutions in Cambodia. We support retail, malls, hotels, corporate lobbies, events, and outdoor advertising with site survey, pixel-pitch guidance, structure design, installation, commissioning, and local after-sales support. Get a project-based quotation from our Cambodia team in Phnom Penh, Siem Reap, and Sihanoukville.",
      cta1: "WhatsApp for Quotation",
      cta2: "Request BOQ Proposal",
      cta3: "Jump to Products",
      quickTitle: "Browse LED display categories and related services",
      quickSub:
        "Quick links help you reach the exact LED display type, controller, and accessories you need.",
    };

    const km = {
      breadcrumb: "áž•áž›áž·ážáž•áž›",
      h1: "ážáž˜áŸ’áž›áŸƒ LED Display áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      intro:
        "MUGNEE Multiple áž•áŸ’ážáž›áŸ‹ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™ Indoor LED Display, Outdoor LED Display, LED Video Wall, LED Screen Panel, LED Billboard, Digital LED Display, Advertising LED Display áž“áž·áž„ LED Signage Display áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ” áž™áž¾áž„áž‚áž¶áŸ†áž‘áŸ’ážšáž‚áž˜áŸ’ážšáŸ„áž„ retail, mall, hotel, corporate lobby, event áž“áž·áž„ outdoor advertising áž‡áž¶áž˜áž½áž™ážŸáŸážœáž¶ site survey, áž€áž¶ážšážŽáŸ‚áž“áž¶áŸ† pixel pitch, ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’, áž€áž¶ážšážŠáŸ†áž¡áž¾áž„, commissioning áž“áž·áž„ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áž”áž“áŸ’áž‘áž¶áž”áŸ‹áž–áž¸áž›áž€áŸ‹áž€áŸ’áž“áž»áž„ážŸáŸ’ážšáž»áž€áŸ” ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒážáž¶áž˜áž‚áž˜áŸ’ážšáŸ„áž„áž–áž¸áž€áŸ’ážšáž»áž˜áž€áž¶ážšáž„áž¶ážšáž™áž¾áž„áž“áŸ…áž—áŸ’áž“áŸ†áž–áŸáž‰ ážŸáŸ€áž˜ážšáž¶áž” áž“áž·áž„áž–áŸ’ážšáŸ‡ážŸáž¸áž áž“áž»áŸ”",
      cta1: "WhatsApp ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒ",
      cta2: "ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážŸáŸ†ážŽáž¾ BOQ",
      cta3: "áž…áž¼áž›áž‘áŸ…áž•áž›áž·ážáž•áž›",
      quickTitle: "ážšáž€áž˜áž¾áž›áž”áŸ’ážšáž—áŸáž‘ LED Display áž“áž·áž„ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áž–áž¶áž€áŸ‹áž–áŸáž“áŸ’áž’",
      quickSub:
        "Quick links áž‡áž½áž™áž±áŸ’áž™áž¢áŸ’áž“áž€áž‘áŸ…ážŠáž›áŸ‹áž”áŸ’ážšáž—áŸáž‘ LED Display, controller áž“áž·áž„áž‚áŸ’ážšáž¿áž„áž”áž“áŸ’áž›áž¶ážŸáŸ‹ážŠáŸ‚áž›ážáŸ’ážšáž¼ážœáž€áž¶ážšáž”áž¶áž“áž›áž¿áž“áŸ”",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const quickLinks =
    lang === "en"
      ? [
          { label: "Indoor LED Display", href: "/led-display/indoor-led-display" },
          { label: "Outdoor LED Display", href: "/led-display/outdoor-led-display" },
          { label: "Receiving Card", href: "/led-display/receiving-card" },
          { label: "Video Processor", href: "/led-display/video-processor" },
          { label: "Power Supply", href: "/led-display/power-supply" },
          { label: "LED Controller", href: "/products/led-controller" },
          { label: "Interactive Flat Panel", href: "/interactive-flat-panel" },
          { label: "PA System", href: "/pa-system" },
          { label: "Contact", href: "/contact" },
        ]
      : [
          { label: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš", href: "/led-display/indoor-led-display" },
          { label: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED ážáž¶áž„áž€áŸ’ážšáŸ…", href: "/led-display/outdoor-led-display" },
          { label: "Receiving Card", href: "/led-display/receiving-card" },
          { label: "Video Processor", href: "/led-display/video-processor" },
          { label: "Power Supply", href: "/led-display/power-supply" },
          { label: "LED Controller", href: "/products/led-controller" },
          { label: "Interactive Flat Panel", href: "/interactive-flat-panel" },
          { label: "áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA", href: "/pa-system" },
          { label: "áž‘áŸ†áž“áž¶áž€áŸ‹áž‘áŸ†áž“áž„", href: "/contact" },
        ];

  return (
    <main className="bg-white text-slate-900">
      <style jsx global>{`
        .quick-link {
          position: relative;
          border: 1px solid transparent;
          background:
            linear-gradient(#fff, #fff) padding-box,
            linear-gradient(
              90deg,
              rgba(14, 116, 144, 0),
              rgba(14, 116, 144, 0.85),
              rgba(2, 132, 199, 0.9),
              rgba(14, 116, 144, 0)
            )
              border-box;
          background-size: 100% 100%, 240% 240%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .quick-link:hover {
          animation: quickLinkBorder 1.2s linear infinite;
          box-shadow: 0 10px 24px rgba(2, 6, 23, 0.08);
        }
        @keyframes quickLinkBorder {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 0 0, 220% 0;
          }
        }

        .spec-card {
          position: relative;
          border: 1px solid transparent;
          background:
            linear-gradient(#fff, #fff) padding-box,
            linear-gradient(
              120deg,
              rgba(14, 116, 144, 0.1),
              rgba(2, 132, 199, 0.45),
              rgba(59, 130, 246, 0.45),
              rgba(14, 116, 144, 0.1)
            )
              border-box;
          background-size: 100% 100%, 260% 260%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .spec-card:hover {
          animation: specBorder 2s linear infinite;
          box-shadow: 0 12px 28px rgba(2, 6, 23, 0.12);
        }
        @keyframes specBorder {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 0 0, 260% 0;
          }
        }
        @keyframes home-partner-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .home-partner-marquee-track {
          animation: home-partner-marquee 24s linear infinite;
          will-change: transform;
        }
        .home-partner-marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .home-partner-marquee-track {
            animation: none;
          }
        }
      `}</style>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mugnee Cambodia",
              url: `${SITE_URL}${schemaPath}`,
              image: `${SITE_URL}/images/hero/cambodia-led-hero.webp`,
              telephone: "+855XXXXXXXXX",
              sameAs: [
                "https://www.facebook.com/mugneemultiple/",
                "https://www.youtube.com/@MugneeTech",
                "https://www.linkedin.com/company/mugnee-multiple-limited/",
                "https://x.com/mugneeml",
                "https://www.instagram.com/sm.mugnee/",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "1st Floor, 11E0, Street 108, Night Market Area, Doun Penh",
                addressLocality: "Phnom Penh",
                addressCountry: "KH",
              },
              areaServed: ["Phnom Penh", "Siem Reap", "Sihanoukville"],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: schemaServiceName,
              description: schemaServiceDesc,
              areaServed: ["Phnom Penh", "Siem Reap", "Sihanoukville"],
              serviceType: "LED Display Solutions",
              provider: {
                "@type": "LocalBusiness",
                name: "Mugnee Cambodia",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: schemaName,
                  item: `${SITE_URL}${schemaPath}`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ]),
        }}
      />
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">
              {breadcrumbOverride ?? (lang === "en" ? "LED Display" : "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED")}
            </span>
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {lang === "en"
              ? (heroTitleOverride ?? t.h1)
              : (heroTitleOverrideKm ?? heroTitleOverride ?? t.h1)}
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {lang === "en"
              ? (heroIntroOverride ?? t.intro)
              : (heroIntroOverrideKm ?? heroIntroOverride ?? t.intro)}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href="https://wa.me/855XXXXXXXXX"
              target="_blank"
              rel="noopener"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {t.cta1}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              {t.cta2}
            </Link>
            <a
              href="#products"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              {t.cta3}
            </a>
          </div>

        </div>
      </section>

      {/* PRODUCT GRID */}
      <section id="products" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <ProductGrid
            columns={3}
            pageSize={9}
            allowedCategoryIds={[
              "led_display",
              "indoor_led_display",
              "outdoor_led_display",
              "rental_led_display",
              "led_accessories",
            ]}
            filterCategoryIds={[
              "indoor_led_display",
              "outdoor_led_display",
              "rental_led_display",
              "led_accessories",
            ]}
            categoryOrderIds={[
              "indoor_led_display",
              "outdoor_led_display",
              "rental_led_display",
              "led_accessories",
            ]}
            topLeftContent={
              productQuickChips && productQuickChips.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {productQuickChips.map((chip, index) => (
                    <Link
                      key={`${chip.href}-${chip.label}-${index}`}
                      href={chip.href}
                      className="quick-link rounded-full px-3 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900"
                    >
                      {chip.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <div />
              )
            }
            {...productGridOverride}
          />
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-4 lg:px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {t.quickTitle}
                </div>
                <div className="mt-1 text-xs text-slate-600">{t.quickSub}</div>
              </div>
              <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 sm:block">
                {lang === "en" ? "Quick Links" : "ážáŸ†ážŽážšáž áŸážŸ"}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {quickLinks.map((item, index) => (
                <Link
                  key={`${item.href}-${item.label}-${index}`}
                  href={item.href}
                  className="quick-link rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

                  {/* LED TECHNOLOGY BASICS */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-2 py-12 sm:px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {lang === "en" ? "LED Technology Basics" : "áž˜áž¼áž›ážŠáŸ’áž‹áž¶áž“áž”áž…áŸ’áž…áŸáž€ážœáž·áž‘áŸ’áž™áž¶ LED"}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {lang === "en"
                  ? "LED Technology Basics for Cambodia Buyers"
                  : "áž˜áž¼áž›ážŠáŸ’áž‹áž¶áž“áž”áž…áŸ’áž…áŸáž€ážœáž·áž‘áŸ’áž™áž¶ LED ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž¢áŸ’áž“áž€áž‘áž·áž‰áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶"}
              </h2>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  {lang === "en" ? "What Is an LED Display?" : "ážáž¾ LED Display áž‚ážºáž‡áž¶áž¢áŸ’ážœáž¸?"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {lang === "en"
                    ? "An LED display is a digital screen made from thousands of LED pixels arranged in modules and cabinets. These pixels light up to form images, videos, and live data. LED technology is preferred for large screens because it is seamless, bright, and scalable for both indoor and outdoor installations in Cambodia."
                    : "LED Display áž‚ážºáž‡áž¶áž¢áŸáž€áŸ’ážšáž„áŸ‹ážŒáž¸áž‡áž¸ážáž›ážŠáŸ‚áž›áž”áž„áŸ’áž€áž¾ážáž–áž¸ LED pixels áž‡áž¶áž…áŸ’ážšáž¾áž“ ážŠáŸ„áž™ážšáŸ€áž”áž…áŸ†áž“áŸ…áž€áŸ’áž“áž»áž„ modules áž“áž·áž„ cabinetsáŸ” Pixels áž‘áž¶áŸ†áž„áž“áŸáŸ‡áž”áž‰áŸ’áž…áŸáž‰áž–áž“áŸ’áž›ážºáž”áž„áŸ’áž€áž¾ážáž‡áž¶ážšáž¼áž”áž—áž¶áž– ážœáž¸ážŠáŸáž¢áž¼ áž“áž·áž„áž‘áž·áž“áŸ’áž“áž“áŸáž™áž”áž“áŸ’ážáž•áŸ’áž‘áž¶áž›áŸ‹áŸ” áž”áž…áŸ’áž…áŸáž€ážœáž·áž‘áŸ’áž™áž¶ LED ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž¢áŸáž€áŸ’ážšáž„áŸ‹áž’áŸ† áž–áŸ’ážšáŸ„áŸ‡áž‚áŸ’áž˜áž¶áž“ážŸáŸŠáž»áž˜áž…áŸ†ážŽáž»áž…áž—áŸ’áž‡áž¶áž”áŸ‹ áž—áŸ’áž›ážºáž…áŸ’áž”áž¶ážŸáŸ‹ áž“áž·áž„áž–áž„áŸ’ážšáž¸áž€áž‘áŸ†áž áŸ†áž”áž¶áž“ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‘áž¶áŸ†áž„áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš áž“áž·áž„ážáž¶áž„áž€áŸ’ážšáŸ…áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ”"}
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  {lang === "en"
                    ? "How Does an LED Display Work?"
                    : "ážáž¾ LED Display ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž™áŸ‰áž¶áž„ážŠáž¼áž…áž˜áŸ’ážáŸáž…?"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {lang === "en"
                    ? "A controller sends video signals to each LED pixel, synchronizing color and brightness across the screen. Correct pixel pitch, brightness, IP protection, and refresh rate ensure clear visuals, smooth motion, and reliable performance under Cambodias heat, rain, and dust conditions."
                    : "Controller áž•áŸ’áž‰áž¾ážŸáž‰áŸ’áž‰áž¶ážœáž¸ážŠáŸáž¢áž¼áž‘áŸ… LED pixel áž“áž¸áž˜áž½áž™áŸ— ážŠáž¾áž˜áŸ’áž”áž¸ážŸáž˜áž€áž¶áž›áž€áž˜áŸ’áž˜áž–ážŽáŸŒ áž“áž·áž„áž€áž˜áŸ’ážšáž·ážáž–áž“áŸ’áž›ážºáž‘áž¼áž‘áž¶áŸ†áž„áž¢áŸáž€áŸ’ážšáž„áŸ‹áŸ” áž€áž¶ážšáž‡áŸ’ážšáž¾ážŸ pixel pitch, brightness, áž€áž¶ážšáž€áž¶ážšáž–áž¶ážš IP áž“áž·áž„ refresh rate áž±áŸ’áž™ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ áž“áž¹áž„áž’áž¶áž“áž¶áž±áŸ’áž™ážšáž¼áž”áž—áž¶áž–áž…áŸ’áž”áž¶ážŸáŸ‹ áž…áž›áž“áž¶ážšáž›áž¼áž“ áž“áž·áž„ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž˜áž¶áž“ážŸáŸ’ážáž·ážšáž—áž¶áž–áž€áŸ’ážšáŸ„áž˜áž›áž€áŸ’ážážážŽáŸ’ážŒáž€áŸ†ážŠáŸ… áž—áŸ’áž›áŸ€áž„ áž“áž·áž„áž’áž¼áž›áž¸áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ”"}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                {(lang === "en"
                  ? [
                      "Pixel Pitch",
                      "Brightness (nits)",
                      "IP Rating",
                      "Refresh Rate",
                      "Cabinet Size",
                    ]
                  : [
                      "Pixel Pitch",
                      "áž€áž˜áŸ’ážšáž·ážáž–áž“áŸ’áž›ážº (nits)",
                      "áž€áž˜áŸ’ážšáž·ážáž€áž¶ážšáž–áž¶ážš IP",
                      "Refresh Rate",
                      "áž‘áŸ†áž áŸ† Cabinet",
                    ]
                ).map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-24 grid gap-4 sm:grid-cols-2">
              {(lang === "en"
                ? [
                    ["LED Modules", "Small panels that create the full screen size and resolution."],
                    ["Cabinets", "Rigid frames that align modules and protect wiring."],
                    ["Controller", "Processes content and synchronizes every pixel in real time."],
                    ["Power & Signal", "Stable power, clean cabling, and grounding for safety."],
                  ]
                : [
                    ["LED Modules", "áž•áŸ’áž‘áž¶áŸ†áž„ážáž¼áž…áŸ—ážŠáŸ‚áž›ážšáž½áž˜áž‚áŸ’áž“áž¶áž”áž„áŸ’áž€áž¾ážáž‘áŸ†áž áŸ† áž“áž·áž„ resolution áž¢áŸáž€áŸ’ážšáž„áŸ‹áž‘áž¶áŸ†áž„áž˜áž¼áž›áŸ”"],
                    ["Cabinets", "ážŸáŸŠáž»áž˜ážšáž¹áž„ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáž˜áŸ’ážšáž¹áž˜ modules áž“áž·áž„áž€áž¶ážšáž–áž¶ážšážáŸ’ážŸáŸ‚áž—áŸ’áž›áž¾áž„áŸ”"],
                    ["Controller", "ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž˜áž¶ážáž·áž€áž¶ áž“áž·áž„ážŸáž˜áž€áž¶áž›áž€áž˜áŸ’áž˜ pixel áž‘áž¶áŸ†áž„áž¢ážŸáŸ‹áž‡áž¶áž€áŸ‹ážŸáŸ’ážáŸ‚áž„áŸ”"],
                    ["Power & Signal", "ážáž¶áž˜áž–áž›ážŸáŸ’ážáŸážšáž—áž¶áž– áž€áž¶ážšážšáŸ€áž”ážáŸ’ážŸáŸ‚ážŸáŸ’áž¢áž¶áž áž“áž·áž„ grounding ážŠáž¾áž˜áŸ’áž”áž¸ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–áŸ”"],
                  ]
              ).map(([t, d]) => (
                <div
                  key={String(t)}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{t}</div>
                  <div className="mt-1 text-xs leading-relaxed text-slate-600">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* TYPES IN CAMBODIA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {lang === "en" ? "Types in Cambodia" : "áž”áŸ’ážšáž—áŸáž‘ážŠáŸ‚áž›áž–áŸáž‰áž“áž·áž™áž˜áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶"}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {lang === "en"
                  ? "Types of LED Displays in Cambodia"
                  : "áž”áŸ’ážšáž—áŸáž‘áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "The Cambodia market typically uses four LED display types. Each type is optimized for viewing distance, brightness, and installation style. Choosing the right type ensures better visuals, lower maintenance, and longer service life."
                  : "áž‘áž¸áž•áŸ’ážŸáž¶ážšáž€áž˜áŸ’áž–áž»áž‡áž¶áž‡áž¶áž‘áž¼áž‘áŸ…áž”áŸ’ážšáž¾ LED Display 4 áž”áŸ’ážšáž—áŸáž‘ážŸáŸ†ážáž¶áž“áŸ‹áŸ—áŸ” áž”áŸ’ážšáž—áŸáž‘áž“áž¸áž˜áž½áž™áŸ—ážáŸ’ážšáž¼ážœáž”áž¶áž“áž€áŸ†ážŽážáŸ‹ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž› áž€áž˜áŸ’ážšáž·ážáž–áž“áŸ’áž›ážº áž“áž·áž„ážšáž…áž“áž¶áž”áŸáž‘áŸ’áž˜ážŠáŸ†áž¡áž¾áž„áž•áŸ’ážŸáŸáž„áŸ—áŸ” áž€áž¶ážšáž‡áŸ’ážšáž¾ážŸáž”áŸ’ážšáž—áŸáž‘ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœáž‡áž½áž™áž±áŸ’áž™ážšáž¼áž”áž—áž¶áž–áž›áŸ’áž¢ áž€áž¶ážáŸ‹áž”áž“áŸ’ážáž™ážáŸ’áž›áŸƒážáŸ‚áž‘áž¶áŸ† áž“áž·áž„áž”áž„áŸ’áž€áž¾áž“áž¢áž¶áž™áž»áž€áž¶áž›áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áŸ”"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "We help you select the right LED screen by location, budget, and content needs so your investment performs reliably."
                  : "áž™áž¾áž„áž‡áž½áž™áž¢áŸ’áž“áž€áž‡áŸ’ážšáž¾ážŸ LED Screen ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœážáž¶áž˜áž‘áž¸ážáž¶áŸ†áž„ ážážœáž·áž€áž¶ áž“áž·áž„ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšáž˜áž¶ážáž·áž€áž¶ ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™áž€áž¶ážšážœáž·áž“áž·áž™áŸ„áž‚ážšáž”ážŸáŸ‹áž¢áŸ’áž“áž€áž˜áž¶áž“áž”áŸ’ážšážŸáž·áž‘áŸ’áž’áž—áž¶áž– áž“áž·áž„ážŸáŸ’ážáž·ážšáž—áž¶áž–áŸ”"}
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  {lang === "en"
                    ? "Quick Selection Checklist (Cambodia)"
                    : "áž”áž‰áŸ’áž‡áž¸áž–áž·áž“áž·ážáŸ’áž™ážšáž áŸážŸážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž‡áŸ’ážšáž¾ážŸážšáž¾ážŸ (áž€áž˜áŸ’áž–áž»áž‡áž¶)"}
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {lang === "en"
                      ? "Decide indoor vs outdoor based on sunlight and exposure."
                      : "ážŸáž˜áŸ’ážšáŸáž…ážáž¶áž‡áž¶ indoor áž¬ outdoor ážŠáŸ„áž™áž•áŸ’áž¢áŸ‚áž€áž›áž¾áž–áž“áŸ’áž›ážºážáŸ’áž„áŸƒ áž“áž·áž„áž€áž¶ážšáž”áŸ‰áŸ‡áž–áž¶áž›áŸ‹áž¢áž¶áž€áž¶ážŸáž’áž¶ážáž»áŸ”"}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {lang === "en"
                      ? "Match pixel pitch to viewing distance for clarity."
                      : "áž•áŸ’áž‚áž¼áž•áŸ’áž‚áž„ pixel pitch áž‡áž¶áž˜áž½áž™áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž› ážŠáž¾áž˜áŸ’áž”áž¸áž‘áž‘áž½áž›áž”áž¶áž“áž—áž¶áž–áž…áŸ’áž”áž¶ážŸáŸ‹áŸ”"}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {lang === "en"
                      ? "Confirm structure method and mounting location."
                      : "áž”áž‰áŸ’áž‡áž¶áž€áŸ‹ážœáž·áž’áž¸ážŸáž¶ážŸáŸ’ážáŸ’ážšážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’ áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ážŠáŸ†áž¡áž¾áž„áŸ”"}
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    {lang === "en"
                      ? "Plan for power, grounding, and maintenance access."
                      : "ážšáŸ€áž”áž…áŸ†áž‚áž˜áŸ’ážšáŸ„áž„ážáž¶áž˜áž–áž› grounding áž“áž·áž„áž…áŸ’ážšáž€áž…áž¼áž›ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáŸ‚áž‘áž¶áŸ†áŸ”"}
                  </li>
                </ul>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                {lang === "en"
                  ? "Common Cambodia installs: mall video walls, hotel lobbies, roadside LED billboards, retail storefront screens, event stages, and public information displays."
                  : "áž€áž¶ážšážŠáŸ†áž¡áž¾áž„áž–áŸáž‰áž“áž·áž™áž˜áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ– video wall áž€áŸ’áž“áž»áž„ mall, lobby ážŸážŽáŸ’áž‹áž¶áž‚áž¶ážš, billboard LED ážáž¶áž˜ážŠáž„áž•áŸ’áž›áž¼ážœ, áž¢áŸáž€áŸ’ážšáž„áŸ‹ storefront ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ retail, stage event áž“áž·áž„áž¢áŸáž€áŸ’ážšáž„áŸ‹áž–áŸážáŸŒáž˜áž¶áž“ážŸáž¶áž’áž¶ážšážŽáŸˆáŸ”"}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {(lang === "en"
                ? [
                    [
                      "Indoor LED Screens",
                      "Fine-pitch LED for meeting rooms, showrooms, control rooms, and retail branding.",
                      ["Fine pitch", "Low glare", "Close viewing"],
                    ],
                    [
                      "Outdoor LED Billboards",
                      "High-brightness IP-rated screens for roadside, rooftop, and facade advertising.",
                      ["High nits", "IP65+", "Sunlight ready"],
                    ],
                    [
                      "Rental LED Walls",
                      "Modular panels designed for fast setup at events, concerts, and exhibitions.",
                      ["Fast setup", "Lightweight", "Stage ready"],
                    ],
                    [
                      "LED Accessories & Parts",
                      "Controllers, receiving cards, power supplies, cabinets, and spare parts.",
                      ["Controllers", "Power", "Spare parts"],
                    ],
                  ]
                : [
                    [
                      "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš",
                      "Fine-pitch LED ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ† showroom control room áž“áž·áž„áž€áž¶ážšáž”áž„áŸ’áž áž¶áž‰áž˜áŸ‰áž¶áž€áž€áŸ’áž“áž»áž„áž áž¶áž„áž›áž€áŸ‹ážšáž¶áž™áŸ”",
                      ["Fine pitch", "áž–áž“áŸ’áž›ážºáž˜áž·áž“áž…áž¶áŸ†áž„", "áž˜áž¾áž›áž‡áž·ážáž…áŸ’áž”áž¶ážŸáŸ‹"],
                    ],
                    [
                      "áž”áŸŠáž¸áž›áž”ážáŸ’ážš LED ážáž¶áž„áž€áŸ’ážšáŸ…",
                      "áž¢áŸáž€áŸ’ážšáž„áŸ‹áž˜áž¶áž“áž€áž˜áŸ’ážšáž·ážáž–áž“áŸ’áž›ážºážáŸ’áž–ážŸáŸ‹ áž“áž·áž„ IP-rated ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ roadside rooftop áž“áž·áž„áž€áž¶ážšáž•áŸ’ážŸáž–áŸ’ážœáž•áŸ’ážŸáž¶áž™áž›áž¾ facadeáŸ”",
                      ["áž–áž“áŸ’áž›ážºážáŸ’áž–ážŸáŸ‹", "IP65+", "áž˜áž¾áž›ážƒáž¾áž‰áž€áŸ’ážšáŸ„áž˜ážáŸ’áž„áŸƒ"],
                    ],
                    [
                      "áž‡áž‰áŸ’áž‡áž¶áŸ†áž„ LED ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‡áž½áž›",
                      "áž•áŸ’áž‘áž¶áŸ†áž„ modular ážšáž…áž“áž¶ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážŠáŸ†áž¡áž¾áž„áž›áž¿áž“áž€áŸ’áž“áž»áž„ event, concert áž“áž·áž„áž–áž·áž–áŸážšážŽáŸáŸ”",
                      ["ážŠáŸ†áž¡áž¾áž„áž›áž¿áž“", "áž‘áž˜áŸ’áž„áž“áŸ‹ážŸáŸ’ážšáž¶áž›", "ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž†áž¶áž€"],
                    ],
                    [
                      "áž‚áŸ’ážšáž¿áž„áž”áž“áŸ’áž›áž¶ážŸáŸ‹ áž“áž·áž„áž•áŸ’áž“áŸ‚áž€ LED",
                      "Controller, receiving card, power supply, cabinet áž“áž·áž„ spare parts áž•áŸ’ážŸáŸáž„áŸ—áŸ”",
                      ["Controller", "Power", "áž‚áŸ’ážšáž¿áž„áž”áž“áŸ’áž›áž¶ážŸáŸ‹"],
                    ],
                  ]
              ).map((item, idx) => {
                const [t, d, chips] = item as [string, string, string[]];
                return (
                <div
                  key={`${t}-${idx}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-slate-900">{t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                    {chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SPECS SNAPSHOT */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "LED Display Specifications for Cambodia (Indoor & Outdoor)"
              : "áž›áž€áŸ’ážážŽáŸˆáž”áž…áŸ’áž…áŸáž€áž‘áŸážŸ LED Display ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž˜áŸ’áž–áž»áž‡áž¶ (áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš áž“áž·áž„ážáž¶áž„áž€áŸ’ážšáŸ…)"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Use these realistic spec ranges to plan indoor and outdoor LED display projects in Cambodia. Final specs depend on viewing distance, ambient light, installation structure, and budget."
              : "ážŸáž¼áž˜áž”áŸ’ážšáž¾áž‡áž½ážš spec ážáž¶áž„áž€áŸ’ážšáŸ„áž˜ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážšáŸ€áž”áž…áŸ†áž‚áž˜áŸ’ážšáŸ„áž„ LED Display áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš áž“áž·áž„ážáž¶áž„áž€áŸ’ážšáŸ…áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ” Spec áž…áž»áž„áž€áŸ’ážšáŸ„áž™áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž› áž–áž“áŸ’áž›ážºáž”ážšáž·áž™áž¶áž€áž¶ážŸ ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’ážŠáŸ†áž¡áž¾áž„ áž“áž·áž„ážážœáž·áž€áž¶áŸ”"}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
                  ["Pixel Pitch", "Indoor: P1.25-P3 | Outdoor: P3-P10"],
                  ["Brightness (nits)", "Indoor: 600-1,200 | Outdoor: 4,500-7,000+"],
                  ["IP Rating", "Indoor: IP30-IP40 | Outdoor: IP65+ (front)"],
                  ["Refresh Rate", ">= 1,920Hz (4,000Hz+ for camera use)"],
                  ["Viewing Angle", "H: 140-160 | V: 120-140"],
                  ["Power & Safety", "Surge protection + proper grounding"],
                  ["Cabinet Size", "Common: 500x500 / 500x1000 mm"],
                  ["Lifespan", "50,000-100,000 hours with proper maintenance"],
                ]
              : [
                  ["Pixel Pitch", "áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážšáŸ– P1.25-P3 | ážáž¶áž„áž€áŸ’ážšáŸ…áŸ– P3-P10"],
                  ["áž€áž˜áŸ’ážšáž·ážáž–áž“áŸ’áž›ážº (nits)", "áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážšáŸ– 600-1,200 | ážáž¶áž„áž€áŸ’ážšáŸ…áŸ– 4,500-7,000+"],
                  ["áž€áž˜áŸ’ážšáž·ážáž€áž¶ážšáž–áž¶ážš IP", "áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážšáŸ– IP30-IP40 | ážáž¶áž„áž€áŸ’ážšáŸ…áŸ– IP65+ (ážáž¶áž„áž˜áž»áž)"],
                  ["Refresh Rate", ">= 1,920Hz (4,000Hz+ ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶áž˜áŸážšáŸ‰áž¶)"],
                  ["áž˜áž»áŸ†áž˜áž¾áž›", "H: 140-160 | V: 120-140"],
                  ["ážáž¶áž˜áž–áž› áž“áž·áž„ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–", "áž€áž¶ážšáž–áž¶ážš surge + grounding ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ"],
                  ["áž‘áŸ†áž áŸ† Cabinet", "áž‘áŸ†áž áŸ†áž–áŸáž‰áž“áž·áž™áž˜áŸ– 500x500 / 500x1000 mm"],
                  ["áž¢áž¶áž™áž»áž€áž¶áž›", "50,000-100,000 áž˜áŸ‰áŸ„áž„ (áž”áŸ’ážšážŸáž·áž“áž”áž¾ážáŸ‚áž‘áž¶áŸ†ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ)"],
                ]
            ).map(([t, d]) => (
              <div
                key={String(t)}
                className="spec-card rounded-2xl p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <div className="mt-2 text-xs leading-relaxed text-slate-600">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lang === "en" ? afterSpecsContent : (afterSpecsContentKm ?? afterSpecsContent)}

      {(lang === "en"
        ? pixelPitchSectionOverride
        : (pixelPitchSectionOverrideKm ?? pixelPitchSectionOverride)) ?? (
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {lang === "en"
                ? "Pixel Pitch & Viewing Distance Guide"
                : "áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸ Pixel Pitch áž“áž·áž„áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž›"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {(lang === "en" ? pixelPitchIntroOverride : (pixelPitchIntroOverrideKm ?? pixelPitchIntroOverride)) ??
                (lang === "en"
                  ? "Choosing the right pixel pitch is the #1 factor for visual clarity and budget efficiency. Use this guide as a starting point for Cambodia installations."
                  : "áž€áž¶ážšáž‡áŸ’ážšáž¾ážŸ pixel pitch ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ áž‚ážºáž‡áž¶áž€ážáŸ’ážáž¶ážŸáŸ†ážáž¶áž“áŸ‹áž”áŸ†áž•áž»ážážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž—áž¶áž–áž…áŸ’áž”áž¶ážŸáŸ‹áž“áŸƒážšáž¼áž”áž—áž¶áž– áž“áž·áž„áž”áŸ’ážšážŸáž·áž‘áŸ’áž’áž—áž¶áž–ážážœáž·áž€áž¶áŸ” ážŸáž¼áž˜áž”áŸ’ážšáž¾áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸáž“áŸáŸ‡áž‡áž¶áž…áŸ†ážŽáž»áž…áž…áž¶áž”áŸ‹áž•áŸ’ážáž¾áž˜ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšážŠáŸ†áž¡áž¾áž„áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ”")}
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-1 bg-slate-100 text-sm font-semibold text-slate-900 sm:grid-cols-3">
                <div className="p-3">Pixel Pitch</div>
                <div className="p-3">{lang === "en" ? "Best Viewing Distance" : "áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž›áž›áŸ’áž¢áž”áŸ†áž•áž»áž"}</div>
                <div className="p-3">{lang === "en" ? "Typical Use" : "áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áž‘áž¼áž‘áŸ…"}</div>
              </div>
              {((lang === "en" ? pixelPitchRowsOverride : (pixelPitchRowsOverrideKm ?? pixelPitchRowsOverride)) ?? [
                ...(lang === "en"
                  ? [
                      ["P1.25-P1.86", "1.5-3m", "Control room, premium boardroom"],
                      ["P2-P2.5", "2-5m", "Meeting rooms, retail, showrooms"],
                      ["P3-P4", "3-8m", "Malls, lobbies, indoor stages"],
                      ["P5-P10", "6m+", "Outdoor billboards, roadside"],
                    ]
                  : [
                      ["P1.25-P1.86", "1.5-3m", "Control room áž“áž·áž„ boardroom áž€áž˜áŸ’ážšáž·ážážáŸ’áž–ážŸáŸ‹"],
                      ["P2-P2.5", "2-5m", "áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ† áž áž¶áž„áž›áž€áŸ‹ážšáž¶áž™ áž“áž·áž„ showroom"],
                      ["P3-P4", "3-8m", "Mall, lobby áž“áž·áž„áž†áž¶áž€áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš"],
                      ["P5-P10", "6m+", "Billboard ážáž¶áž„áž€áŸ’ážšáŸ… áž“áž·áž„ážáž¶áž˜ážŠáž„áž•áŸ’áž›áž¼ážœ"],
                    ]),
              ]).map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-1 border-t border-slate-200 text-sm text-slate-700 sm:grid-cols-3"
                >
                  <div className="p-3 font-semibold text-slate-900">{row[0]}</div>
                  <div className="p-3">{row[1]}</div>
                  <div className="p-3">{row[2]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INDOOR VS OUTDOOR */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Indoor vs Outdoor LED Display for Cambodia Climate"
              : "áž€áž¶ážšáž”áŸ’ážšáŸ€áž”áž’áŸ€áž” LED Display áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš áž“áž·áž„ážáž¶áž„áž€áŸ’ážšáŸ… ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž¢áž¶áž€áž¶ážŸáž’áž¶ážáž»áž€áž˜áŸ’áž–áž»áž‡áž¶"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Cambodias heat, rain, and dust require correct IP rating, heat management, and structure design-especially for outdoor LED displays."
              : "áž€áŸ†ážŠáŸ… áž—áŸ’áž›áŸ€áž„ áž“áž·áž„áž’áž¼áž›áž¸áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ áž‘áž¶áž˜áž‘áž¶ážšáž±áŸ’áž™áž‡áŸ’ážšáž¾ážŸ IP rating ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ áž€áž¶ážšáž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áŸ†ážŠáŸ… áž“áž·áž„áž€áž¶ážšážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’áž›áŸ’áž¢ áž‡áž¶áž–áž·ážŸáŸážŸážŸáž˜áŸ’ážšáž¶áž”áŸ‹ Outdoor LEDáŸ”"}
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {(lang === "en"
              ? [
                  [
                    "Indoor LED Display",
                    "Designed for close-viewing environments like corporate boardrooms, retail showrooms, control rooms, hotels and indoor events. Indoor LED uses finer pixel pitch, balanced brightness, and quiet cooling so visuals stay sharp without glare. Proper cable management and clean structure finishing improve long-term stability.",
                    "Typical IP: IP30-IP40",
                    ["Fine pitch clarity", "Low glare", "Quiet cooling", "Close viewing"],
                  ],
                  [
                    "Outdoor LED Display",
                    "Built for sun, rain, and dust in Cambodia. Outdoor LED billboards require high brightness, weatherproof cabinets, strong structures, and safe grounding. IP-rated protection, heat management, and durable components keep the screen visible and stable in harsh outdoor conditions.",
                    "Typical IP: IP65+ (front)",
                    ["High brightness", "Weatherproof", "Structure safety", "Sunlight ready"],
                  ],
                ]
              : [
                  [
                    "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš",
                    "ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž˜áž¾áž›áž‡áž·áž ážŠáž¼áž…áž‡áž¶ boardroom, showroom, control room, ážŸážŽáŸ’áž‹áž¶áž‚áž¶ážš áž“áž·áž„ event áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážšáŸ” Indoor LED áž”áŸ’ážšáž¾ pixel pitch áž›áŸ’áž¢áž·áž áž€áž˜áŸ’ážšáž·ážáž–áž“áŸ’áž›ážºážŸáž˜ážŸáŸ’ážšáž” áž“áž·áž„áž”áŸ’ážšáž–áŸáž“áŸ’áž’ážáŸ’ážšáž‡áž¶áž€áŸ‹ážŸáŸ’áž„áž¶ážáŸ‹ ážŠáž¾áž˜áŸ’áž”áž¸ážšáž€áŸ’ážŸáž¶ážšáž¼áž”áž—áž¶áž–áž±áŸ’áž™áž…áŸ’áž”áž¶ážŸáŸ‹áŸ” áž€áž¶ážšážšáŸ€áž”ážáŸ’ážŸáŸ‚ áž“áž·áž„áž€áž¶ážšáž”áž‰áŸ’áž…áž”áŸ‹ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’ážŸáŸ’áž¢áž¶ážáž‡áž½áž™áž”áž„áŸ’áž€áž¾áž“ážŸáŸ’ážáž·ážšáž—áž¶áž–ážšáž™áŸˆáž–áŸáž›ážœáŸ‚áž„áŸ”",
                    "IP áž‘áž¼áž‘áŸ…áŸ– IP30-IP40",
                    ["áž—áž¶áž–áž…áŸ’áž”áž¶ážŸáŸ‹ Fine pitch", "áž–áž“áŸ’áž›ážºáž˜áž·áž“áž…áž¶áŸ†áž„", "áž”áŸ’ážšáž–áŸáž“áŸ’áž’ážáŸ’ážšáž‡áž¶áž€áŸ‹ážŸáŸ’áž„áž¶ážáŸ‹", "ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž˜áž¾áž›áž‡áž·áž"],
                  ],
                  [
                    "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED ážáž¶áž„áž€áŸ’ážšáŸ…",
                    "ážšáž…áž“áž¶áž¡áž¾áž„ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž–áž“áŸ’áž›ážºážáŸ’áž„áŸƒ áž—áŸ’áž›áŸ€áž„ áž“áž·áž„áž’áž¼áž›áž¸áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ” Outdoor LED billboard ážáŸ’ážšáž¼ážœáž€áž¶ážš brightness ážáŸ’áž–ážŸáŸ‹ cabinet áž€áž¶ážšáž–áž¶ážšáž¢áž¶áž€áž¶ážŸáž’áž¶ážáž» ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’ážšáž¹áž„áž˜áž¶áŸ† áž“áž·áž„ grounding ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–áŸ” áž€áž¶ážšáž€áž¶ážšáž–áž¶ážš IP áž“áž·áž„áž€áž¶ážšáž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áŸ†ážŠáŸ…áž›áŸ’áž¢ áž“áž¹áž„áž’áž¶áž“áž¶áž¢áŸáž€áŸ’ážšáž„áŸ‹áž¢áž¶áž…áž˜áž¾áž›ážƒáž¾áž‰áž…áŸ’áž”áž¶ážŸáŸ‹ áž“áž·áž„ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšážŸáŸ’ážáž·ážšáž—áž¶áž–áŸ”",
                    "IP áž‘áž¼áž‘áŸ…áŸ– IP65+ (ážáž¶áž„áž˜áž»áž)",
                    ["áž–áž“áŸ’áž›ážºážáŸ’áž–ážŸáŸ‹", "áž€áž¶ážšáž–áž¶ážšáž¢áž¶áž€áž¶ážŸáž’áž¶ážáž»", "ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’", "áž˜áž¾áž›ážƒáž¾áž‰áž€áŸ’ážšáŸ„áž˜ážáŸ’áž„áŸƒ"],
                  ],
                ]
            ).map((item, idx) => {
              const [t, d, ip, chips] = item as [string, string, string, string[]];
              return (
              <div
                key={`${t}-${idx}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
                <div className="mt-3 text-xs font-semibold text-slate-700">{ip}</div>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE-CASE BY INDUSTRY */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "LED Display Use-Cases by Industry in Cambodia"
              : "áž€ážšážŽáž¸áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ LED Display ážáž¶áž˜ážœáž·ážŸáŸáž™áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Popular industries using LED display, digital signage, and LED billboards in Cambodia."
              : "ážœáž·ážŸáŸáž™áž–áŸáž‰áž“áž·áž™áž˜ážŠáŸ‚áž›áž€áŸ†áž–áž»áž„áž”áŸ’ážšáž¾ LED display, digital signage áž“áž·áž„ LED billboard áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ”"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
              {
                t: "Retail & Shopping Malls",
                d: "Indoor LED video walls for promotions, storefront branding, and product launches in Phnom Penh malls.",
                chips: ["Indoor", "Fine pitch", "Branding"],
              },
              {
                t: "Hotels, Resorts & Hospitality",
                d: "Lobby welcome walls, event schedules, and banquet hall screens with clean visuals and quiet cooling.",
                chips: ["Lobby", "Events", "24/7 use"],
              },
              {
                t: "Corporate Offices & Showrooms",
                d: "Boardroom and showroom LED displays for presentations, dashboards, and premium brand storytelling.",
                chips: ["Corporate", "Control", "Showroom"],
              },
              {
                t: "Events, Stage & Rental",
                d: "Rental LED walls for concerts, exhibitions, and stage backdrops with fast setup and modular cabinets.",
                chips: ["Rental", "Stage", "Fast setup"],
              },
              {
                t: "Education & Campuses",
                d: "Auditorium screens, campus notice boards, and smart classroom displays for clear visibility.",
                chips: ["Education", "Auditorium", "Notice"],
              },
              {
                t: "Government & Public Service",
                d: "Information displays for service centers, municipal halls, and public announcements.",
                chips: ["Public", "Info", "Queue"],
              },
              {
                t: "Transportation & Terminals",
                d: "Timetable, wayfinding, and advertising screens for terminals, stations, and ports.",
                chips: ["Wayfinding", "Timetable", "Public"],
              },
              {
                t: "Outdoor Advertising & Billboards",
                d: "High-brightness LED billboards for roadside and rooftop advertising across Cambodia.",
                chips: ["Outdoor", "High nits", "IP65+"],
              },
              ]
              : [
                  {
                    t: "Retail áž“áž·áž„ Shopping Mall",
                    d: "Indoor LED video wall ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž•áŸ’ážŸáž–áŸ’ážœáž•áŸ’ážŸáž¶áž™ áž”áž„áŸ’áž áž¶áž‰áž˜áŸ‰áž¶áž€ áž“áž·áž„áž”áž¾áž€ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž•áž›áž·ážáž•áž›áž€áŸ’áž“áž»áž„ mall áž“áŸ…áž—áŸ’áž“áŸ†áž–áŸáž‰áŸ”",
                    chips: ["Indoor", "Fine pitch", "Branding"],
                  },
                  {
                    t: "ážŸážŽáŸ’áž‹áž¶áž‚áž¶ážš ážšáž¸ážŸáž áž“áž·áž„ Hospitality",
                    d: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ážŸáŸ’ážœáž¶áž‚áž˜áž“áŸ lobby áž€áž¶áž›ážœáž·áž—áž¶áž‚ event áž“áž·áž„áž¢áŸáž€áŸ’ážšáž„áŸ‹ banquet hall áž‡áž¶áž˜áž½áž™ážšáž¼áž”áž—áž¶áž–ážŸáŸ’áž¢áž¶áž áž“áž·áž„áž”áŸ’ážšáž–áŸáž“áŸ’áž’ážáŸ’ážšáž‡áž¶áž€áŸ‹ážŸáŸ’áž„áž¶ážáŸ‹áŸ”",
                    chips: ["Lobby", "Event", "24/7"],
                  },
                  {
                    t: "áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ áž“áž·áž„ Showroom",
                    d: "LED display ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ boardroom áž“áž·áž„ showroom ážŠáž¾áž˜áŸ’áž”áž¸áž”áž„áŸ’áž áž¶áž‰ presentation dashboard áž“áž·áž„ brand storytellingáŸ”",
                    chips: ["Corporate", "Control", "Showroom"],
                  },
                  {
                    t: "Event áž†áž¶áž€ áž“áž·áž„áž‡áž½áž›",
                    d: "Rental LED wall ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ concert áž–áž·áž–áŸážšážŽáŸ áž“áž·áž„áž•áŸ’áž‘áŸƒážáž¶áž„áž€áŸ’ážšáŸ„áž™áž†áž¶áž€ áž‡áž¶áž˜áž½áž™áž€áž¶ážšážŠáŸ†áž¡áž¾áž„áž›áž¿áž“áŸ”",
                    chips: ["Rental", "Stage", "Fast setup"],
                  },
                  {
                    t: "ážœáž·ážŸáŸáž™áž¢áž”áŸ‹ážšáŸ† áž“áž·áž„ Campus",
                    d: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ auditorium, notice board áž“áŸ… campus áž“áž·áž„ smart classroom display ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž—áž¶áž–áž˜áž¾áž›ážƒáž¾áž‰áž…áŸ’áž”áž¶ážŸáŸ‹áŸ”",
                    chips: ["Education", "Auditorium", "Notice"],
                  },
                  {
                    t: "ážšážŠáŸ’áž‹áž¶áž—áž·áž”áž¶áž› áž“áž·áž„ážŸáŸážœáž¶ážŸáž¶áž’áž¶ážšážŽáŸˆ",
                    d: "áž¢áŸáž€áŸ’ážšáž„áŸ‹áž–áŸážáŸŒáž˜áž¶áž“ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž˜áž‡áŸ’ážˆáž˜ážŽáŸ’ážŒáž›ážŸáŸážœáž¶ ážŸáž¶áž›áž¶ážšáž¶áž‡áž’áž¶áž“áž¸/ážáŸážáŸ’áž áž“áž·áž„ážŸáŸáž…áž€áŸ’ážŠáž¸áž‡áž¼áž“ážŠáŸ†ážŽáž¹áž„ážŸáž¶áž’áž¶ážšážŽáŸˆáŸ”",
                    chips: ["Public", "Info", "Queue"],
                  },
                  {
                    t: "ážŠáž¹áž€áž‡áž‰áŸ’áž‡áž¼áž“ áž“áž·áž„ážŸáŸ’ážáž¶áž“áž¸áž™áŸ",
                    d: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ timetable, wayfinding áž“áž·áž„áž•áŸ’ážŸáž–áŸ’ážœáž•áŸ’ážŸáž¶áž™ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ terminal, station áž“áž·áž„ portáŸ”",
                    chips: ["Wayfinding", "Timetable", "Public"],
                  },
                  {
                    t: "áž•áŸ’ážŸáž–áŸ’ážœáž•áŸ’ážŸáž¶áž™ážáž¶áž„áž€áŸ’ážšáŸ… áž“áž·áž„ Billboard",
                    d: "áž”áŸŠáž¸áž›áž”ážáŸ’ážš LED áž–áž“áŸ’áž›ážºážáŸ’áž–ážŸáŸ‹ ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž•áŸ’ážŸáž–áŸ’ážœáž•áŸ’ážŸáž¶áž™ážáž¶áž˜ážŠáž„áž•áŸ’áž›áž¼ážœ áž“áž·áž„áž›áž¾ážŠáŸ†áž”áž¼áž›áž‘áž¼áž‘áž¶áŸ†áž„áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ”",
                    chips: ["Outdoor", "High nits", "IP65+"],
                  },
                ]
            ).map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{x.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.d}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {x.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALLATION PROCESS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "LED Display Installation & After-Sales Workflow in Cambodia"
              : "ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšážŠáŸ†áž¡áž¾áž„ LED Display áž“áž·áž„ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áž”áž“áŸ’áž‘áž¶áž”áŸ‹áž–áž¸áž›áž€áŸ‹áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Our end-to-end LED display delivery process covers survey, design, installation, commissioning, and ongoing after-sales support. This workflow ensures stable visuals, safe structure, and long service life for Cambodia projects."
              : "ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšážŠáž¹áž€áž‡áž‰áŸ’áž‡áž¼áž“ LED Display áž–áŸáž‰áž›áŸáž‰ážšáž”ážŸáŸ‹áž™áž¾áž„ ážšáž½áž˜áž˜áž¶áž“ survey, design, installation, commissioning áž“áž·áž„áž€áž¶ážšáž‚áž¶áŸ†áž‘áŸ’ážšáž”áž“áŸ’ážáž”áž“áŸ’áž‘áž¶áž”áŸ‹áž–áž¸áž›áž€áŸ‹áŸ” ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž“áŸáŸ‡áž‡áž½áž™áž’áž¶áž“áž¶ážšáž¼áž”áž—áž¶áž–ážŸáŸ’ážáž·ážšáž—áž¶áž– ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„áž¢áž¶áž™áž»áž€áž¶áž›áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áž™áž¼ážšáŸ”"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
              [
                "1. Site Survey & Assessment",
                "On-site measurement, viewing distance check, sunlight level, mounting position, and power availability.",
                ["Survey", "Viewing distance", "Site conditions"],
              ],
              [
                "2. Design, BOQ & Approval",
                "Pixel pitch selection, cabinet layout, structure design, controller choice, and BOQ cost breakdown.",
                ["BOQ", "Structure plan", "Pixel pitch"],
              ],
              [
                "3. Installation & Commissioning",
                "Frame mounting, cable routing, grounding, controller setup, calibration, and brightness tuning.",
                ["Mounting", "Calibration", "Safety"],
              ],
              [
                "4. Training & After-Sales",
                "Operator training, content support, spare parts planning, maintenance schedule, and AMC options.",
                ["Training", "Spare parts", "AMC"],
              ],
              ]
              : [
                  [
                    "1. Site Survey áž“áž·áž„ážœáž¶áž™ážáž˜áŸ’áž›áŸƒ",
                    "ážœáž¶ážŸáŸ‹ážœáŸ‚áž„áž‘áž¸ážáž¶áŸ†áž„áž–áž·áž áž–áž·áž“áž·ážáŸ’áž™áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž› áž€áž˜áŸ’ážšáž·ážáž–áž“áŸ’áž›ážºážáŸ’áž„áŸƒ áž‘áž¸ážáž¶áŸ†áž„ážŠáŸ†áž¡áž¾áž„ áž“áž·áž„áž”áŸ’ážšáž—áž–ážáž¶áž˜áž–áž›áŸ”",
                    ["Survey", "áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž›", "áž›áž€áŸ’ážážážŽáŸ’ážŒáž‘áž¸ážáž¶áŸ†áž„"],
                  ],
                  [
                    "2. Design, BOQ áž“áž·áž„áž¢áž“áž»áž˜áŸáž",
                    "áž‡áŸ’ážšáž¾ážŸ pixel pitch, ážšáŸ€áž” layout cabinet, ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’, áž‡áŸ’ážšáž¾ážŸ controller áž“áž·áž„áž”áŸ†áž”áŸ‚áž€ážáŸ’áž›áŸƒ BOQáŸ”",
                    ["BOQ", "ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’", "Pixel pitch"],
                  ],
                  [
                    "3. Installation áž“áž·áž„ Commissioning",
                    "ážŠáŸ†áž¡áž¾áž„ frame, ážšáŸ€áž”ážáŸ’ážŸáŸ‚, grounding, setup controller, calibration áž“áž·áž„áž€áŸ†ážŽážáŸ‹ brightnessáŸ”",
                    ["ážŠáŸ†áž¡áž¾áž„", "Calibration", "ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–"],
                  ],
                  [
                    "4. Training áž“áž·áž„ After-Sales",
                    "áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž› operator, áž‚áž¶áŸ†áž‘áŸ’ážšáž˜áž¶ážáž·áž€áž¶, áž‚áž˜áŸ’ážšáŸ„áž„ spare parts, áž€áž¶áž›ážœáž·áž—áž¶áž‚ážáŸ‚áž‘áž¶áŸ† áž“áž·áž„áž‡áž˜áŸ’ážšáž¾ážŸ AMCáŸ”",
                    ["Training", "Spare parts", "AMC"],
                  ],
                ]
            ).map((item, idx) => {
              const [t, d, chips] = item as [string, string, string[]];
              return (
              <div
                key={`${t}-${idx}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <div className="mt-2 text-xs leading-relaxed text-slate-600">{d}</div>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                  {chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MUGNEE */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Why Choose Mugnee for LED Display in Cambodia"
              : "áž áŸážáž»áž¢áŸ’ážœáž¸áž‚áž½ážšáž‡áŸ’ážšáž¾ážŸ Mugnee ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ LED Display áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Clients choose Mugnee because we deliver engineering-accurate LED display projects with clear visuals, safe structures, and reliable after-sales support. From site survey to commissioning, we focus on performance, durability, and long-term value for Cambodia installations."
              : "áž¢ážáž·ážáž·áž‡áž“áž‡áŸ’ážšáž¾ážŸ Mugnee áž–áŸ’ážšáŸ„áŸ‡áž™áž¾áž„áž¢áž“áž»ážœážáŸ’ážáž‚áž˜áŸ’ážšáŸ„áž„ LED Display ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœážáž¶áž˜ážœáž·ážŸáŸ’ážœáž€áž˜áŸ’áž˜ áž‡áž¶áž˜áž½áž™ážšáž¼áž”áž—áž¶áž–áž…áŸ’áž”áž¶ážŸáŸ‹ ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áž”áž“áŸ’áž‘áž¶áž”áŸ‹áž–áž¸áž›áž€áŸ‹ážŠáŸ‚áž›áž‘áž»áž€áž…áž·ážáŸ’ážáž”áž¶áž“áŸ” áž…áž¶áž”áŸ‹áž–áž¸ site survey ážŠáž›áŸ‹ commissioning áž™áž¾áž„áž•áŸ’ážáŸ„ážáž›áž¾áž”áŸ’ážšážŸáž·áž‘áŸ’áž’áž—áž¶áž– áž—áž¶áž–áž’áž“áŸ‹ áž“áž·áž„ážáž˜áŸ’áž›áŸƒáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ážšáž™áŸˆáž–áŸáž›ážœáŸ‚áž„áŸ”"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
              [
                "Cambodia Local Delivery Team",
                "On-site survey, installation, commissioning, and rapid support for Phnom Penh and nationwide projects.",
              ],
              [
                "Engineering-First Design",
                "Pixel pitch, brightness, structure, and IP rating selected by real viewing distance and environment.",
              ],
              [
                "Reliable Hardware & Calibration",
                "Quality controllers, stable power design, clean cabling, and factory-grade calibration for clear visuals.",
              ],
              [
                "After-Sales & AMC Support",
                "Training, spare-parts plan, preventive maintenance, and AMC options for long-term stability.",
              ],
              ]
              : [
                  [
                    "áž€áŸ’ážšáž»áž˜ážŠáž¹áž€áž‡áž‰áŸ’áž‡áž¼áž“ áž“áž·áž„ážŠáŸ†áž¡áž¾áž„áž€áŸ’áž“áž»áž„ážŸáŸ’ážšáž»áž€",
                    "Site survey, installation, commissioning áž“áž·áž„áž€áž¶ážšáž‚áž¶áŸ†áž‘áŸ’ážšáž†áž¶áž”áŸ‹ážšáž áŸážŸ ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž—áŸ’áž“áŸ†áž–áŸáž‰ áž“áž·áž„áž‚áž˜áŸ’ážšáŸ„áž„áž‘áž¼áž‘áž¶áŸ†áž„áž”áŸ’ážšáž‘áŸážŸáŸ”",
                  ],
                  [
                    "áž€áž¶ážšážšáž…áž“áž¶ážŠáŸ„áž™áž•áŸ’áž¢áŸ‚áž€áž›áž¾ážœáž·ážŸáŸ’ážœáž€áž˜áŸ’áž˜",
                    "áž‡áŸ’ážšáž¾ážŸ pixel pitch, brightness, structure áž“áž·áž„ IP rating ážáž¶áž˜áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž› áž“áž·áž„áž”ážšáž·ážŸáŸ’ážáž¶áž“áž–áž·ážáŸ”",
                  ],
                  [
                    "Hardware áž“áž·áž„ Calibration ážŠáŸ‚áž›áž‘áž»áž€áž…áž·ážáŸ’ážáž”áž¶áž“",
                    "Controller áž‚áž»ážŽáž—áž¶áž– áž€áž¶ážšážšáŸ€áž” power ážŸáŸ’ážáŸážšáž—áž¶áž– ážáŸ’ážŸáŸ‚ážŸáŸ’áž¢áž¶áž áž“áž·áž„ calibration ážŸáŸ’ážáž„áŸ‹ážŠáž¶ážšáŸ”",
                  ],
                  [
                    "After-Sales áž“áž·áž„ AMC Support",
                    "Training, áž‚áž˜áŸ’ážšáŸ„áž„ spare parts, preventive maintenance áž“áž·áž„áž‡áž˜áŸ’ážšáž¾ážŸ AMC ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážŸáŸ’ážáž·ážšáž—áž¶áž–áž™áž¼ážšáž¢áž„áŸ’ážœáŸ‚áž„áŸ”",
                  ],
                ]
            ).map(([t, d]) => (
              <div
                key={String(t)}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{t}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {lang === "en" ? "Contact Mugnee Cambodia" : "áž‘áŸ†áž“áž¶áž€áŸ‹áž‘áŸ†áž“áž„ Mugnee Cambodia"}
            </a>
            <a
              href="https://wa.me/855XXXXXXXXX"
              target="_blank"
              rel="noopener"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {lang === "en" ? "WhatsApp for Quotation" : "WhatsApp ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒ"}
            </a>
          </div>
        </div>
      </section>

      {/* AUTHORIZED DISTRIBUTOR */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {lang === "en" ? "Partners" : "ážŠáŸƒáž‚áž¼"}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Authorized Distributor & Certified Engineering Partner"
              : "áž¢áŸ’áž“áž€áž…áŸ‚áž€áž…áž¶áž™áž•áŸ’áž›áž¼ážœáž€áž¶ážš áž“áž·áž„ážŠáŸƒáž‚áž¼ážœáž·ážŸáŸ’ážœáž€áž˜áŸ’áž˜ážŠáŸ‚áž›áž˜áž¶áž“ážœáž·áž‰áŸ’áž‰áž¶áž”áž“áž”ážáŸ’ážš"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Mugnee Cambodia supplies world-leading LED components and control systems with certified engineering support, quality assurance, and Cambodia-based service for long-term performance."
              : "Mugnee Cambodia áž•áŸ’áž‚ážáŸ‹áž•áŸ’áž‚áž„áŸ‹áž‚áŸ’ážšáž¿áž„áž•áŸ’ážŸáŸ† LED áž“áž·áž„áž”áŸ’ážšáž–áŸáž“áŸ’áž’áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„ážŠáŸ‚áž›áž˜áž¶áž“áž‚áž»ážŽáž—áž¶áž–ážáŸ’áž–ážŸáŸ‹ áž‡áž¶áž˜áž½áž™áž€áž¶ážšáž‚áž¶áŸ†áž‘áŸ’ážšážœáž·ážŸáŸ’ážœáž€áž˜áŸ’áž˜ážŠáŸ‚áž›áž˜áž¶áž“ážœáž·áž‰áŸ’áž‰áž¶áž”áž“áž”ážáŸ’ážš áž€áž¶ážšáž’áž¶áž“áž¶áž‚áž»ážŽáž—áž¶áž– áž“áž·áž„ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áž€áŸ’áž“áž»áž„ážŸáŸ’ážšáž»áž€ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž™áž¼ážšáž¢áž„áŸ’ážœáŸ‚áž„áŸ”"}
          </p>

          <div className="mt-6 relative overflow-hidden rounded-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

            <div className="home-partner-marquee-track flex w-max gap-3 py-1">
              {[
                { label: "Mean Well", src: "/images/partners/meanwell.png" },
                { label: "G-energy", src: "/images/partners/g-energy.png" },
                { label: "Lampro", src: "/images/partners/lampro.svg" },
                { label: "NovaStar", src: "/images/partners/novastar.png" },
                { label: "Huidu", src: "/images/partners/huidu.png" },
                { label: "NationStar", src: "/images/partners/nationstar.jpg" },
                { label: "Colorlight", src: "/images/partners/colorlight.png" },
                { label: "Mean Well", src: "/images/partners/meanwell.png" },
                { label: "G-energy", src: "/images/partners/g-energy.png" },
                { label: "Lampro", src: "/images/partners/lampro.svg" },
                { label: "NovaStar", src: "/images/partners/novastar.png" },
                { label: "Huidu", src: "/images/partners/huidu.png" },
                { label: "NationStar", src: "/images/partners/nationstar.jpg" },
                { label: "Colorlight", src: "/images/partners/colorlight.png" },
              ].map((logo, idx) => (
                <div
                  key={`${logo.label}-${idx}`}
                  className="flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-slate-100/60 px-4 sm:w-44 lg:w-48"
                >
                  <Image
                    src={logo.src}
                    alt={logo.label}
                    width={180}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
            {(lang === "en"
              ? [
                  "ISO Certified Organization",
                  "ABC Certified Engineers",
                  "Industry Track-Lead",
                  "24/7 Customer Support",
                  "On-site Service",
                ]
              : [
                  "áž¢áž„áŸ’áž‚áž—áž¶áž–áž‘áž‘áž½áž›ážŸáŸ’áž‚áž¶áž›áŸ‹ ISO",
                  "ážœáž·ážŸáŸ’ážœáž€ážšážŠáŸ‚áž›áž˜áž¶áž“ážœáž·áž‰áŸ’áž‰áž¶áž”áž“áž”ážáŸ’ážš ABC",
                  "áž—áž¶áž–áž‡áž¶áž¢áŸ’áž“áž€áž“áž¶áŸ†áž˜áž»ážáž€áŸ’áž“áž»áž„áž§ážŸáŸ’ážŸáž¶áž áž€áž˜áŸ’áž˜",
                  "áž€áž¶ážšáž‚áž¶áŸ†áž‘áŸ’ážšáž¢ážáž·ážáž·áž‡áž“ 24/7",
                  "ážŸáŸážœáž¶áž€áž˜áŸ’áž˜ On-site",
                ]
            ).map((x) => (
              <span
                key={x}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {lang === "en" ? "Service area" : "ážáŸ†áž”áž“áŸ‹ážŸáŸážœáž¶áž€áž˜áŸ’áž˜"}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en" ? "Service Areas Across Cambodia" : "ážáŸ†áž”áž“áŸ‹ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áž‘áž¼áž‘áž¶áŸ†áž„áž€áž˜áŸ’áž–áž»áž‡áž¶"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Local installation, commissioning and after-sales support across Phnom Penh, Siem Reap, Sihanoukville and nearby provinces."
              : "ážŸáŸážœáž¶ážŠáŸ†áž¡áž¾áž„ commissioning áž“áž·áž„áž€áž¶ážšáž‚áž¶áŸ†áž‘áŸ’ážšáž”áž“áŸ’áž‘áž¶áž”áŸ‹áž–áž¸áž›áž€áŸ‹ áž€áŸ’áž“áž»áž„áž—áŸ’áž“áŸ†áž–áŸáž‰ ážŸáŸ€áž˜ážšáž¶áž” áž–áŸ’ážšáŸ‡ážŸáž¸áž áž“áž» áž“áž·áž„ážáŸážáŸ’ážáž‡áž·ážážáž¶áž„áŸ”"}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
            {[
              "Phnom Penh",
              "Siem Reap",
              "Sihanoukville",
              "Battambang",
              "Kampong Cham",
              "Kampot",
              "Koh Kong",
              "Banteay Meanchey",
            ].map((x) => (
              <span
                key={x}
                className="rounded-full border border-slate-200 bg-white px-3 py-1"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / ENTITY SIGNALS */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            {lang === "en" ? "Trust Signals" : "ážŸáž‰áŸ’áž‰áž¶áž“áŸƒáž—áž¶áž–áž‘áž»áž€áž…áž·ážáŸ’áž"}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {(lang === "en" ? trustTitleOverride : (trustTitleOverrideKm ?? trustTitleOverride)) ??
              (lang === "en"
                ? "Trusted LED Display Partner in Cambodia: Entity, Service & Delivery Signals"
                : "ážŠáŸƒáž‚áž¼ LED Display ážŠáŸ‚áž›áž‚áž½ážšáž±áŸ’áž™áž‘áž»áž€áž…áž·ážáŸ’ážáž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ– Entity, Service áž“áž·áž„ Delivery Signals")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {(lang === "en" ? trustDescOverride : (trustDescOverrideKm ?? trustDescOverride)) ??
              (lang === "en"
                ? "This section highlights why Mugnee Cambodia is trusted for indoor LED display, outdoor LED billboards, and LED video wall projects in Cambodia, with verified entity signals, local execution capability, and long-term service continuity."
                : "áž•áŸ’áž“áŸ‚áž€áž“áŸáŸ‡áž”áž„áŸ’áž áž¶áž‰áž˜áž¼áž›áž áŸážáž»ážŠáŸ‚áž› Mugnee Cambodia ážáŸ’ážšáž¼ážœáž”áž¶áž“áž‘áž»áž€áž…áž·ážáŸ’ážážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‚áž˜áŸ’ážšáŸ„áž„ indoor LED, outdoor billboard áž“áž·áž„ LED video wall áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ ážŠáŸ„áž™áž˜áž¶áž“ entity signal áž…áŸ’áž”áž¶ážŸáŸ‹ áž€áž¶ážšáž¢áž“áž»ážœážáŸ’ážáž€áŸ’áž“áž»áž„ážŸáŸ’ážšáž»áž€ áž“áž·áž„ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áž”áž“áŸ’ážážšáž™áŸˆáž–áŸáž›ážœáŸ‚áž„áŸ”")}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {trustProofChips.map((chip, index) => (
              <span
                key={`${chip}-${index}`}
                className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm"
              >
                <div className="mb-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-[11px] font-bold text-sky-700">
                  {index + 1}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href="/about"
              className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 no-underline hover:border-slate-400 hover:text-slate-900 hover:no-underline"
            >
              {lang === "en" ? "About Mugnee Cambodia" : "áž¢áŸ†áž–áž¸ Mugnee Cambodia"}
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 no-underline hover:border-slate-400 hover:text-slate-900 hover:no-underline"
            >
              {lang === "en" ? "View Project References" : "áž˜áž¾áž›áž‚áž˜áŸ’ážšáŸ„áž„áž™áŸ„áž„"}
            </Link>
            <Link
              href="/service"
              className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 no-underline hover:border-slate-400 hover:text-slate-900 hover:no-underline"
            >
              {lang === "en" ? "Installation & Service Support" : "ážŸáŸážœáž¶ážŠáŸ†áž¡áž¾áž„ áž“áž·áž„áž‚áž¶áŸ†áž‘áŸ’ážšáž”áž…áŸ’áž…áŸáž€áž‘áŸážŸ"}
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINK CLUSTER */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {(lang === "en" ? internalLinkTitleOverride : (internalLinkTitleOverrideKm ?? internalLinkTitleOverride)) ??
              (lang === "en"
                ? "Related LED Resources & Buying Paths in Cambodia"
                : "áž’áž“áž’áž¶áž“ LED áž–áž¶áž€áŸ‹áž–áŸáž“áŸ’áž’ áž“áž·áž„áž•áŸ’áž›áž¼ážœážŸáž˜áŸ’ážšáŸáž…áž…áž·ážáŸ’ážáž‘áž·áž‰áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶")}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {(lang === "en" ? internalLinkDescOverride : (internalLinkDescOverrideKm ?? internalLinkDescOverride)) ??
              (lang === "en"
                ? "Use this internal cluster to navigate by buying intent: product type, technical component, installation support, or direct quotation."
                : "áž”áŸ’ážšáž¾ internal cluster áž“áŸáŸ‡ ážŠáž¾áž˜áŸ’áž”áž¸ážšáž»áž€ážšáž€ážáž¶áž˜áž‚áŸ„áž›áž”áŸ†ážŽáž„áž‘áž·áž‰áŸ– áž”áŸ’ážšáž—áŸáž‘áž•áž›áž·ážáž•áž› áž•áŸ’áž“áŸ‚áž€áž”áž…áŸ’áž…áŸáž€áž‘áŸážŸ áž€áž¶ážšáž‚áž¶áŸ†áž‘áŸ’ážšáž€áž¶ážšážŠáŸ†áž¡áž¾áž„ áž¬ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒážŠáŸ„áž™áž•áŸ’áž‘áž¶áž›áŸ‹áŸ”")}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {internalLinks.map((item, index) => (
              <Link
                key={`${item.href}-${item.title}-${index}`}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 no-underline shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 hover:no-underline"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en" ? "Frequently Asked Question (FAQ)" : "ážŸáŸ†ážŽáž½ážšážŠáŸ‚áž›ážŸáž½ážšáž‰áž¹áž€áž‰áž¶áž”áŸ‹ (FAQ)"}
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {faqItems.map(({ q, a }, index) => (
              <details
                key={`${q}-${index}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                  {q}
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}



