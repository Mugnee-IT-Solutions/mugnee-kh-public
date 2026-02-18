"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLang } from "../../components/layout/LanguageProvider";
import ProductGrid from "../../components/sections/ProductGrid";
import { PRODUCTS } from "../../data/products";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };

export default function InteractiveFlatPanelClient() {
  const { lang } = useLang();

  const t = useMemo(() => {
    const en = {
      breadcrumb: "Interactive Flat Panel",
      badge: "Cambodia - Interactive Flat Panel - Smart Board",
      h1: "Interactive Flat Panel Price in Cambodia",
      sub:
        "Mugnee Cambodia provides Interactive Flat Panel (smart board) solutions in Cambodia for schools, universities, training centers, corporate meeting rooms, and government institutions. We deliver 4K touch displays with wireless screen sharing, Android/OPS options, professional installation, user training, and local after-sales support in Phnom Penh, Siem Reap, and Sihanoukville for long-term performance.",
      cta1: "Get a Free Quotation",
      cta2: "View IFP Models",
      serving: "Serving: Phnom Penh - Siem Reap - Sihanoukville",

      seoTitle: "Smart Board & Interactive Display Solutions",
      seoText:
        "Interactive flat panels (smart boards) are 4K touch displays built for modern teaching and collaboration. Choose screen size, touch performance, operating system, and connectivity based on room size and use case. Popular sizes include 65, 75, 86, 98, and 110 inches.",

      keyTitle: "Interactive Flat Panel Specifications for Cambodia",
      keySub:
        "Common requirements for smooth writing, clear visuals, and reliable daily operation.",
      k1: "Display & Resolution",
      k1d: "4K UHD panels with wide viewing angles for clear visibility.",
      k2: "Touch Performance",
      k2d: "20 to 40-point multi-touch with fast response for writing and collaboration.",
      k3: "Operating System",
      k3d: "Android built-in with optional OPS/Windows support.",
      k4: "Connectivity",
      k4d: "HDMI, USB, USB-C, LAN, and wireless connectivity options.",

      productTitle: "Interactive Flat Panel Models",
      productSub:
        "Select a size based on room dimensions and viewing distance. Share room size and use case for the right recommendation.",

      useTitle: "Best Use Cases in Cambodia",
      useSub:
        "Where Interactive Flat Panels deliver the most value for communication and learning.",
      u1: "Schools & Smart Classrooms",
      u1d: "Teach with whiteboard, annotation, multimedia and interactive lessons.",
      u2: "Meeting Rooms & Boardrooms",
      u2d: "Present, annotate, collaborate and share screens wirelessly.",
      u3: "Training Centers",
      u3d: "Interactive sessions with clear visuals and hands-on demonstration.",
      u4: "Government & Institutions",
      u4d: "Reliable daily usage for briefings, reporting and presentations.",

      compareTitle: "Interactive Flat Panel vs Projector",
      compareSub:
        "Why many schools and offices in Cambodia upgrade to smart interactive panels.",
      cA: "Brighter & clearer in daylight rooms",
      cB: "No lamp replacement, lower maintenance",
      cC: "Touch writing + annotation built-in",
      cD: "Wireless sharing + multiple device support",

      setupTitle: "Installation, Setup & Training",
      setupSub:
        "We ensure safe mounting, correct wiring, and user training for smooth operation.",
      s1: "Site check & mounting plan",
      s2: "Wall mount / floor stand setup",
      s3: "Apps, Wi-Fi/LAN and screen sharing configuration",
      s4: "Teacher/staff training and handover",

      softwareTitle: "Software & Compatibility",
      softwareSub:
        "Works with laptops, smartphones, and popular meeting or learning workflows.",
      sw1: "Whiteboard + annotation apps",
      sw2: "Wireless casting (Windows/macOS/Android/iOS)",
      sw3: "OPS/PC option for Windows applications",
      sw4: "HDMI/USB-C support for quick plug & play",

      faqTitle: "FAQ - Interactive Flat Panel",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Share your room size, preferred screen size, and usage (classroom or meeting). We will recommend the best model with installation and support options.",
      finalCta: "Contact & Get Quotation",
      seeProjects: "See Projects",
      note:
        "Note: Final configuration (ports, OPS, mount type) depends on project requirements.",
    };

    const km = {
      breadcrumb: "Interactive Flat Panel",
      badge: "áž€áž˜áŸ’áž–áž»áž‡áž¶ â€¢ Interactive Flat Panel â€¢ Smart Board",
      h1: "Interactive Flat Panel áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      sub:
        "Mugnee Multiple áž•áŸ’ážáž›áŸ‹ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™ Interactive Flat Panel (smart board) áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážŸáž¶áž›áž¶ážšáŸ€áž“ ážŸáž¶áž€áž›ážœáž·áž‘áŸ’áž™áž¶áž›áŸáž™ áž˜áž‡áŸ’ážˆáž˜ážŽáŸ’ážŒáž›áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž› áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ†áž€áŸ’ážšáž»áž˜áž áŸŠáž»áž“ áž“áž·áž„ážŸáŸ’ážáž¶áž”áŸáž“ážšážŠáŸ’áž‹áž¶áž—áž·áž”áž¶áž›áŸ” áž™áž¾áž„áž•áŸ’áž‚ážáŸ‹áž•áŸ’áž‚áž„áŸ‹áž¢áŸáž€áŸ’ážšáž„áŸ‹ 4K touch áž‡áž¶áž˜áž½áž™ wireless screen sharing áž‡áž˜áŸ’ážšáž¾ážŸ Android/OPS áž€áž¶ážšážŠáŸ†áž¡áž¾áž„ážŠáŸ„áž™ážœáž·áž‡áŸ’áž‡áž¶áž‡áž¸ážœáŸˆ áž€áž¶ážšáž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾ áž“áž·áž„ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áž”áž“áŸ’áž‘áž¶áž”áŸ‹áž–áž¸áž›áž€áŸ‹áž€áŸ’áž“áž»áž„ážŸáŸ’ážšáž»áž€ áž“áŸ…áž—áŸ’áž“áŸ†áž–áŸáž‰ ážŸáŸ€áž˜ážšáž¶áž” áž“áž·áž„áž–áŸ’ážšáŸ‡ážŸáž¸áž áž“áž» ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž”áŸ’ážšážŸáž·áž‘áŸ’áž’áž—áž¶áž–áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ážšáž™áŸˆáž–áŸáž›ážœáŸ‚áž„áŸ”",
      cta1: "ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒ (Free)",
      cta2: "áž˜áž¾áž› IFP Models",
      serving: "ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áŸ– Phnom Penh â€¢ Siem Reap â€¢ Sihanoukville",

      seoTitle: "Smart Board & Interactive Display Solutions",
      seoText:
        "Interactive Flat Panel (smart board) áž‚ážºážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž”áž„áŸ’ážšáŸ€áž“ áž“áž·áž„áž€áž¶ážšážŸáž áž€áž¶ážš modernáŸ” áž‡áŸ’ážšáž¾ážŸ model ážáŸ’ážšáž¼ážœáž‚áž·ážáž–áž¸ screen size, touch performance, connectivity ports áž“áž·áž„ mounting methodáŸ” áž™áž¾áž„áž•áŸ’áž‚ážáŸ‹áž•áŸ’áž‚áž„áŸ‹ ážŠáŸ†áž¡áž¾áž„ áž“áž·áž„ support ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ schools, universities, offices áž“áž·áž„ training centers áž‡áž¶áž˜áž½áž™ quotation ážáž¶áž˜áž‚áž˜áŸ’ážšáŸ„áž„áŸ”",

      keyTitle: "Interactive Flat Panel Specifications for Cambodia",
      keySub:
        "ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšážŸáž˜áŸ’ážšáž¶áž”áŸ‹ writing ážŸáŸ’áž˜à©‚áž áž“áž·áž„ážšáž¼áž”áž—áž¶áž–áž…áŸ’áž”áž¶ážŸáŸ‹ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž”áŸ’ážšáž¾ážšáŸ€áž„ážšáž¶áž›áŸ‹ážáŸ’áž„áŸƒáŸ”",
      k1: "Display & Resolution",
      k1d: "4K UHD + anti-glare glass ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž˜áž¾áž›áž…áŸ’áž”áž¶ážŸáŸ‹áž“áŸ…áž”áž“áŸ’áž‘áž”áŸ‹áž—áŸ’áž›ážºáŸ”",
      k2: "Touch Performance",
      k2d: "Multi-touch ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážŸážšážŸáŸážš/annotation áž“áž·áž„ collaborationáŸ”",
      k3: "Operating System",
      k3d: "Android built-in; OPS/PC optional ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ Windows appsáŸ”",
      k4: "Connectivity",
      k4d: "HDMI/USB/USB-C, Wi-Fi/LAN, screen sharing áž“áž·áž„ audio outputáŸ”",

      productTitle: "Interactive Flat Panel Models",
      productSub:
        "áž‡áŸ’ážšáž¾ážŸáž‘áŸ†áž áŸ†ážáž¶áž˜ room size áž“áž·áž„ viewing distanceáŸ” ážŸáž¼áž˜áž•áŸ’áž‰áž¾ room size + use-case ážŠáž¾áž˜áŸ’áž”áž¸ážŽáŸ‚áž“áž¶áŸ†áž”áž¶áž“ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœáŸ”",

      useTitle: "Best Use Cases in Cambodia",
      useSub:
        "áž€áž“áŸ’áž›áŸ‚áž„ážŠáŸ‚áž› IFP áž•áŸ’ážáž›áŸ‹ value ážáŸ’áž–ážŸáŸ‹ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ learning áž“áž·áž„ presentationáŸ”",
      u1: "Schools & Smart Classrooms",
      u1d: "Whiteboard, annotation, multimedia áž“áž·áž„ interactive lessonsáŸ”",
      u2: "Meeting Rooms & Boardrooms",
      u2d: "Presentation + collaboration + wireless sharingáŸ”",
      u3: "Training Centers",
      u3d: "Training sessions áž‡áž¶áž˜áž½áž™ visuals áž…áŸ’áž”áž¶ážŸáŸ‹ áž“áž·áž„ demonstrationáŸ”",
      u4: "Government & Institutions",
      u4d: "áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ážšáŸ€áž„ážšáž¶áž›áŸ‹ážáŸ’áž„áŸƒážŸáž˜áŸ’ážšáž¶áž”áŸ‹ briefings áž“áž·áž„ reportingáŸ”",

      compareTitle: "Interactive Flat Panel vs Projector",
      compareSub:
        "áž áŸážáž»áž¢áŸ’ážœáž¸ schools/offices áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ upgrade áž‘áŸ… smart paneláŸ”",
      cA: "áž˜áž¾áž›áž…áŸ’áž”áž¶ážŸáŸ‹áž“áŸ…áž”áž“áŸ’áž‘áž”áŸ‹áž—áŸ’áž›ážº",
      cB: "maintenance ážáž·áž… (no lamp)",
      cC: "Touch writing + annotation built-in",
      cD: "Wireless sharing + multi-device",

      setupTitle: "Installation, Setup & Training",
      setupSub:
        "ážŠáŸ†áž¡áž¾áž„ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–, wiring ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ áž“áž·áž„áž”áž„áŸ’ážšáŸ€áž“áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áŸ”",
      s1: "Site check & mounting plan",
      s2: "Wall mount / floor stand setup",
      s3: "Wi-Fi/LAN + screen sharing configuration",
      s4: "Teacher/staff training and handover",

      softwareTitle: "Software & Compatibility",
      softwareSub:
        "Support laptops/phones áž“áž·áž„ meeting/learning workflow áž–áŸáž‰áž“áž·áž™áž˜áŸ”",
      sw1: "Whiteboard + annotation apps",
      sw2: "Wireless casting (Windows/macOS/Android/iOS)",
      sw3: "OPS/PC option for Windows applications",
      sw4: "HDMI/USB-C plug & play",

      faqTitle: "FAQ - Interactive Flat Panel",
      finalTitle: "ážŸáŸ’áž“áž¾ážŸáž»áŸ† Quotation ážáž¶áž˜áž‚áž˜áŸ’ážšáŸ„áž„",
      finalSub:
        "áž•áŸ’áž‰áž¾ room size, screen size áž“áž·áž„ use-case (classroom/meeting)à¥¤ áž™áž¾áž„áž“áž¹áž„ážŽáŸ‚áž“áž¶áŸ† model + installation + support optionsáŸ”",
      finalCta: "áž‘áŸ†áž“áž¶áž€áŸ‹áž‘áŸ†áž“áž„ & ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒ",
      seeProjects: "áž˜áž¾áž›áž‚áž˜áŸ’ážšáŸ„áž„",
      note:
        "áž…áŸ†ážŽáž¶áŸ†áŸ– Final configuration (ports, OPS, mount type) ážáž¶áž˜ project requirementáŸ”",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const ifpProducts = useMemo(
    () =>
      PRODUCTS.filter((p) => p.categoryIds.includes("smart_board")).sort((a, b) => {
        const aSize = parseInt(
          a.specs.find((s) => s.labelEn === "Display Size")?.valueEn || "0",
          10
        );
        const bSize = parseInt(
          b.specs.find((s) => s.labelEn === "Display Size")?.valueEn || "0",
          10
        );
        return aSize - bSize;
      }),
    []
  );

  const [viewDistance, setViewDistance] = useState("");

  const recommendedSize = useMemo(() => {
    const distance = Number.parseFloat(viewDistance);
    if (!Number.isFinite(distance)) return null;
    if (distance <= 2) return "55-65 inch";
    if (distance <= 3) return "65-75 inch";
    if (distance <= 4) return "75-86 inch";
    if (distance <= 5) return "86-98 inch";
    return "98-110 inch";
  }, [viewDistance]);

  const faqs = useMemo<FAQ[]>(
    () => [
    {
      qEn: "What size interactive flat panel should I choose for a classroom?",
      aEn:
        "Choose based on viewing distance and room size. Common classroom sizes range from 65 to 86 inch, while larger halls often use 98 to 110 inch.",
      qKm: "ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“ ážáž¾áž‚áž½ážšáž‡áŸ’ážšáž¾ážŸáž‘áŸ†áž áŸ† Interactive Flat Panel áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“?",
      aKm:
        "áž‚áž½ážšáž‡áŸ’ážšáž¾ážŸážáž¶áž˜ viewing distance áž“áž·áž„áž‘áŸ†áž áŸ†áž”áž“áŸ’áž‘áž”áŸ‹áŸ” áž‘áŸ†áž áŸ†ážŠáŸ‚áž›áž”áŸ’ážšáž¾áž‰áž¹áž€áž‰áž¶áž”áŸ‹ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“áž‚ážº 65-86 inch ážážŽáŸˆáž”áž“áŸ’áž‘áž”áŸ‹áž’áŸ†áž¢áž¶áž…áž”áŸ’ážšáž¾ 98-110 incháŸ”",
    },
    {
      qEn: "How far should students sit from a smart board?",
      aEn:
        "Viewing distance depends on screen size. As a general guide, 65-inch panels suit around 2 to 3.5 meters, 75-inch suits around 2.5 to 4 meters, and 86-inch around 3 to 5 meters.",
      qKm: "ážŸáž·ážŸáŸ’ážŸáž‚áž½ážšáž¢áž„áŸ’áž‚áž»áž™áž†áŸ’áž„áž¶áž™áž–áž¸ Smart Board áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“?",
      aKm:
        "áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž›áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾áž‘áŸ†áž áŸ†áž¢áŸáž€áŸ’ážšáž„áŸ‹áŸ” áž‡áž¶áž‘áž¼áž‘áŸ… 65-inch ážŸáž˜ážŸáŸ’ážšáž”áž”áŸ’ážšáž áŸ‚áž› 2-3.5m, 75-inch áž”áŸ’ážšáž áŸ‚áž› 2.5-4m áž“áž·áž„ 86-inch áž”áŸ’ážšáž áŸ‚áž› 3-5máŸ”",
    },
    {
      qEn: "Do interactive flat panels support Android and Windows?",
      aEn:
        "Most models include Android, and many offer OPS/Windows compatibility. Check the exact model for OS version and OPS options.",
      qKm: "Interactive Flat Panel áž‚áž¶áŸ†áž‘áŸ’ážš Android áž“áž·áž„ Windows ážŠáŸ‚ážšáž¬áž‘áŸ?",
      aKm:
        "áž˜áŸ‰áž¼ážŒáŸ‚áž›áž—áž¶áž‚áž…áŸ’ážšáž¾áž“áž˜áž¶áž“ Android áž áž¾áž™áž˜áŸ‰áž¼ážŒáŸ‚áž›áž‡áž¶áž…áŸ’ážšáž¾áž“áž‚áž¶áŸ†áž‘áŸ’ážš OPS/Windows áž•áž„ážŠáŸ‚ážšáŸ” ážŸáž¼áž˜áž–áž·áž“áž·ážáŸ’áž™áž˜áŸ‰áž¼ážŒáŸ‚áž›áž‡áž¶áž€áŸ‹áž›áž¶áž€áŸ‹ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ OS version áž“áž·áž„ OPS optionáŸ”",
    },
    {
      qEn: "How many touch points does an IFP support?",
      aEn:
        "Multi-touch is standard. For example, some models support 20-point touch, and higher-end models support 40-point touch.",
      qKm: "IFP áž˜áž½áž™áž¢áž¶áž…áž‚áž¶áŸ†áž‘áŸ’ážš touch points áž”áž¶áž“áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“?",
      aKm:
        "Multi-touch áž‚ážºáž‡áž¶ážŸáŸ’ážáž„áŸ‹ážŠáž¶ážšáŸ” áž§áž‘áž¶áž ážšážŽáŸ áž˜áŸ‰áž¼ážŒáŸ‚áž›ážáŸ’áž›áŸ‡áž‚áž¶áŸ†áž‘áŸ’ážš 20-point touch áž áž¾áž™áž˜áŸ‰áž¼ážŒáŸ‚áž›ážáŸ’áž–ážŸáŸ‹áž‚áž¶áŸ†áž‘áŸ’ážš 40-point toucháŸ”",
    },
    {
      qEn: "Can I connect laptops and phones wirelessly?",
      aEn:
        "Yes. Many models support wireless screen sharing, plus HDMI and USB-C for plug-and-play connectivity.",
      qKm: "ážáž¾áž¢áž¶áž…áž—áŸ’áž‡áž¶áž”áŸ‹ laptop áž“áž·áž„ phone ážŠáŸ„áž™ wireless áž”áž¶áž“áž‘áŸ?",
      aKm:
        "áž”áž¶áž“áŸ” áž˜áŸ‰áž¼ážŒáŸ‚áž›áž‡áž¶áž…áŸ’ážšáž¾áž“áž‚áž¶áŸ†áž‘áŸ’ážš wireless screen sharing áž“áž·áž„áž˜áž¶áž“ HDMI/USB-C ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ plug-and-play connectivityáŸ”",
    },
    {
      qEn: "Do you provide installation and user training in Cambodia?",
      aEn:
        "Yes. We provide installation, configuration, and training for classrooms, meeting rooms, and training centers.",
      qKm: "ážáž¾áž¢áŸ’áž“áž€áž•áŸ’ážáž›áŸ‹ážŸáŸážœáž¶ installation áž“áž·áž„ user training áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ážŠáŸ‚ážšáž¬áž‘áŸ?",
      aKm:
        "áž”áž¶áž‘/áž…áž¶ážŸáŸ” áž™áž¾áž„áž•áŸ’ážáž›áŸ‹ážŸáŸážœáž¶ installation, configuration áž“áž·áž„ training ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ classroom, meeting room áž“áž·áž„ training centeráŸ”",
    },
    {
      qEn: "What are the key ports I should check?",
      aEn:
        "Look for HDMI, USB, USB-C, and LAN connectivity. These cover most classroom and meeting room setups.",
      qKm: "ports ážŸáŸ†ážáž¶áž“áŸ‹áŸ—ážŠáŸ‚áž›áž‚áž½ážšážáŸ‚áž–áž·áž“áž·ážáŸ’áž™áž˜áž¶áž“áž¢áŸ’ážœáž¸ážáŸ’áž›áŸ‡?",
      aKm:
        "áž‚áž½ážšáž–áž·áž“áž·ážáŸ’áž™ HDMI, USB, USB-C áž“áž·áž„ LAN connectivity áž–áŸ’ážšáŸ„áŸ‡ážœáž¶áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹ setup áž—áž¶áž‚áž…áŸ’ážšáž¾áž“ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ classroom áž“áž·áž„ meeting roomáŸ”",
    },
    {
      qEn: "Do you offer warranty and after-sales support?",
      aEn:
        "Yes. Warranty terms depend on the model and project scope. We share the coverage details during quotation.",
      qKm: "ážáž¾áž˜áž¶áž“ warranty áž“áž·áž„ after-sales support ážŠáŸ‚ážšáž¬áž‘áŸ?",
      aKm:
        "áž˜áž¶áž“áŸ” áž›áž€áŸ’ážážážŽáŸ’ážŒ warranty áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾áž˜áŸ‰áž¼ážŒáŸ‚áž› áž“áž·áž„ scope áž‚áž˜áŸ’ážšáŸ„áž„ áž áž¾áž™áž™áž¾áž„áž“áž¹áž„áž•áŸ’ážáž›áŸ‹áž–áŸážáŸŒáž˜áž¶áž“ coverage áž–áŸáž› quotationáŸ”",
    },
    ],
    []
  );

  const jsonLd = useMemo(() => {
    const base =
      (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
        "https://mugneekh.com") + "/interactive-flat-panel";

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item:
            process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
            "https://mugneekh.com",
        },
        { "@type": "ListItem", position: 2, name: "Interactive Flat Panel", item: base },
      ],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: lang === "en" ? f.qEn : f.qKm,
        acceptedAnswer: {
          "@type": "Answer",
          text: lang === "en" ? f.aEn : f.aKm,
        },
      })),
    };

    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Mugnee Cambodia",
      url: base,
      areaServed: ["Phnom Penh", "Siem Reap", "Sihanoukville"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          availableLanguage: ["en", "km"],
        },
      ],
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Interactive Flat Panel Installation",
      serviceType: "Interactive Flat Panel Solutions",
      areaServed: ["Phnom Penh", "Siem Reap", "Sihanoukville"],
      provider: {
        "@type": "Organization",
        name: "Mugnee Cambodia",
      },
    };

    return { breadcrumb, faqSchema, orgSchema, serviceSchema };
  }, [faqs, lang]);

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
      `}</style>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.serviceSchema) }}
      />

      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">{t.breadcrumb}</span>
          </div>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            {t.badge}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.h1}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.sub}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              {t.cta1}
            </Link>
            <a
              href="#models"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              {t.cta2}
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-600">{t.serving}</p>

        </div>
      </section>

      {/* PRODUCT GRID */}
      <section id="models" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Interactive Flat Panel Products
          </h2>
          <div className="mt-6">
            <ProductGrid
              columns={3}
              pageSize={9}
              allowedCategoryIds={["smart_board", "interactive_panel"]}
              filterCategoryIds={["smart_board", "interactive_panel"]}
              showCategoryFilters
              showSort
              showPagination
            />
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-4 lg:px-6">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-4 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {lang === "en"
                    ? "Quick Links for Interactive Flat Panel"
                    : "ážáŸ†ážŽážšáž áŸážŸážŸáž˜áŸ’ážšáž¶áž”áŸ‹ Interactive Flat Panel"}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {lang === "en"
                    ? "Jump to the buying guide, decision matrix, specs, and support details."
                    : "áž…áž¼áž›áž‘áŸ…áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸáž‘áž·áž‰ ážáž¶ážšáž¶áž„ážŸáž˜áŸ’ážšáŸáž…áž…áž·ážáŸ’áž áž€áž¶ážšáž”áŸ’ážšáŸ€áž”áž’áŸ€áž”áž›áž€áŸ’ážážŽáŸˆáž”áž…áŸ’áž…áŸáž€áž‘áŸážŸ áž“áž·áž„áž–áŸážáŸŒáž˜áž¶áž“áž‚áž¶áŸ†áž‘áŸ’ážšáŸ”"}
                </div>
              </div>
              <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 sm:block">
                {lang === "en" ? "Quick Links" : "ážáŸ†ážŽážšáž áŸážŸ"}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {(
                lang === "en"
                  ? [
                      { label: "Buying Guide", href: "#buying-guide" },
                      { label: "Decision Matrix", href: "#decision-matrix" },
                      { label: "Specs Comparison", href: "#specs-comparison" },
                      { label: "Installation", href: "#installation" },
                      { label: "Case Studies", href: "#case-studies" },
                      { label: "Warranty & Support", href: "#warranty-support" },
                      { label: "FAQ", href: "#faq" },
                    ]
                  : [
                      { label: "áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸáž‘áž·áž‰", href: "#buying-guide" },
                      { label: "ážáž¶ážšáž¶áž„ážŸáž˜áŸ’ážšáŸáž…áž…áž·ážáŸ’áž", href: "#decision-matrix" },
                      { label: "áž”áŸ’ážšáŸ€áž”áž’áŸ€áž”áž›áž€áŸ’ážážŽáŸˆáž”áž…áŸ’áž…áŸáž€áž‘áŸážŸ", href: "#specs-comparison" },
                      { label: "áž€áž¶ážšážŠáŸ†áž¡áž¾áž„", href: "#installation" },
                      { label: "áž€ážšážŽáž¸áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹", href: "#case-studies" },
                      { label: "áž€áž¶ážšáž’áž¶áž“áž¶ áž“áž·áž„áž€áž¶ážšáž‚áž¶áŸ†áž‘áŸ’ážš", href: "#warranty-support" },
                      { label: "ážŸáŸ†ážŽáž½ážšáž‰áž¹áž€áž‰áž¶áž”áŸ‹", href: "#faq" },
                    ]
              ).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="quick-link rounded-full px-4 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS IFP */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {lang === "en" ? "Interactive Flat Panel Basics" : "áž˜áž¼áž›ážŠáŸ’áž‹áž¶áž“áž¢áŸ†áž–áž¸ Interactive Flat Panel"}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {lang === "en"
                  ? "What Is an Interactive Flat Panel (IFP)?"
                  : "ážáž¾ Interactive Flat Panel (IFP) áž‡áž¶áž¢áŸ’ážœáž¸?"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "An interactive flat panel is a large 4K touchscreen display that combines a digital whiteboard, presentation screen, and collaboration tools in one device. It is commonly used in classrooms, meeting rooms, training centers, and healthcare briefings because it supports real-time writing, annotation, and wireless screen sharing."
                  : "Interactive Flat Panel áž‚ážºáž‡áž¶áž¢áŸáž€áŸ’ážšáž„áŸ‹ touchscreen 4K áž‘áŸ†áž áŸ†áž’áŸ† ážŠáŸ‚áž›ážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž› whiteboard ážŒáž¸áž‡áž¸ážáž› áž¢áŸáž€áŸ’ážšáž„áŸ‹áž”áž„áŸ’áž áž¶áž‰ áž“áž·áž„áž§áž”áž€ážšážŽáŸážŸáž áž€áž¶ážšáž“áŸ…áž€áŸ’áž“áž»áž„áž§áž”áž€ážšážŽáŸážáŸ‚áž˜áž½áž™áŸ” ážœáž¶ážáŸ’ážšáž¼ážœáž”áž¶áž“áž”áŸ’ážšáž¾áž™áŸ‰áž¶áž„áž‘áž¼áž›áŸ†áž‘áž¼áž›áž¶áž™áž“áŸ…ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“ áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ† áž˜áž‡áŸ’ážˆáž˜ážŽáŸ’ážŒáž›áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž› áž“áž·áž„áž€áž¶ážšáž”áž„áŸ’áž áž¶áž‰áž•áŸ’áž“áŸ‚áž€ážŸáž»ážáž¶áž—áž·áž”áž¶áž› áž–áž¸áž–áŸ’ážšáŸ„áŸ‡ážœáž¶áž‚áž¶áŸ†áž‘áŸ’ážšáž€áž¶ážšážŸážšážŸáŸážšážáž¶áž˜áž–áŸáž›ážœáŸáž›áž¶áž‡áž¶áž€áŸ‹ážŸáŸ’ážáŸ‚áž„ annotation áž“áž·áž„ wireless screen sharingáŸ”"}
              </p>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                {lang === "en"
                  ? "How Does an Interactive Flat Panel Work?"
                  : "Interactive Flat Panel ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž™áŸ‰áž¶áž„ážŠáž¼áž…áž˜áŸ’ážáŸáž…?"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "The panel uses a high-resolution LCD with a multi-touch layer that detects finger or stylus input. Built-in Android software runs whiteboard and collaboration apps, while HDMI/USB-C/LAN ports and wireless casting allow laptops and phones to share content instantly. Optional OPS/Windows modules turn the screen into a full PC for advanced applications."
                  : "áž¢áŸáž€áŸ’ážšáž„áŸ‹áž“áŸáŸ‡áž”áŸ’ážšáž¾ LCD resolution ážáŸ’áž–ážŸáŸ‹ áž‡áž¶áž˜áž½áž™ážŸáŸ’ážšáž‘áž¶áž”áŸ‹ multi-touch ážŠáŸ‚áž›áž¢áž¶áž…áž…áž¶áž”áŸ‹ážŸáž‰áŸ’áž‰áž¶áž–áž¸áž˜áŸ’ážšáž¶áž˜ážŠáŸƒ áž¬ stylusáŸ” Software Android ážŠáŸ‚áž›áž—áŸ’áž‡áž¶áž”áŸ‹áž˜áž€áž€áŸ’áž“áž»áž„áž˜áŸ‰áž¶ážŸáŸŠáž¸áž“ áž¢áž¶áž…ážŠáŸ†ážŽáž¾ážšáž€áž¶ážš whiteboard áž“áž·áž„áž€áž˜áŸ’áž˜ážœáž·áž’áž¸ážŸáž áž€áž¶ážš ážážŽáŸˆ HDMI/USB-C/LAN áž“áž·áž„ wireless casting áž¢áž“áž»áž‰áŸ’áž‰áž¶ážáž±áŸ’áž™ laptop áž“áž·áž„áž‘áž¼ážšážŸáŸáž–áŸ’áž‘áž…áŸ‚áž€ážšáŸ†áž›áŸ‚áž€áž˜áž¶ážáž·áž€áž¶áž”áž¶áž“áž—áŸ’áž›áž¶áž˜áŸ—áŸ” áž‡áž˜áŸ’ážšáž¾ážŸ OPS/Windows module áž¢áž¶áž…áž”áž˜áŸ’áž›áŸ‚áž„áž¢áŸáž€áŸ’ážšáž„áŸ‹áž“áŸáŸ‡áž±áŸ’áž™áž€áŸ’áž›áž¶áž™áž‡áž¶ PC áž–áŸáž‰áž›áŸáž‰ ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áž€áž˜áŸ’ážšáž·ážážáŸ’áž–ážŸáŸ‹áŸ”"}
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:mt-20">
              <div className="text-sm font-semibold text-slate-900">
                {lang === "en" ? "Key Benefits for Cambodia Buyers" : "áž¢ážáŸ’ážáž”áŸ’ážšáž™áŸ„áž‡áž“áŸážŸáŸ†ážáž¶áž“áŸ‹áŸ—ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž¢áŸ’áž“áž€áž‘áž·áž‰áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶"}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {(lang === "en"
                  ? [
                      "4K UHD clarity for classrooms and meetings",
                      "Multi-touch writing and annotation",
                      "Wireless screen sharing and plug-and-play ports",
                      "Android built-in with optional OPS/Windows",
                      "Lower maintenance than projector systems",
                    ]
                  : [
                      "áž—áž¶áž–áž…áŸ’áž”áž¶ážŸáŸ‹ 4K UHD ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“ áž“áž·áž„áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ†",
                      "áž€áž¶ážšážŸážšážŸáŸážš multi-touch áž“áž·áž„ annotation",
                      "Wireless screen sharing áž“áž·áž„ port áž”áŸ’ážšáž¾áž—áŸ’áž›áž¶áž˜áŸ— (plug-and-play)",
                      "Android áž—áŸ’áž‡áž¶áž”áŸ‹áž˜áž€áž€áŸ’áž“áž»áž„áž˜áŸ‰áž¶ážŸáŸŠáž¸áž“ áž‡áž¶áž˜áž½áž™áž‡áž˜áŸ’ážšáž¾ážŸ OPS/Windows",
                      "ážáŸ‚áž‘áž¶áŸ†áž‘áž¶áž”áž‡áž¶áž„áž”áŸ’ážšáž–áŸáž“áŸ’áž’ projector",
                    ]).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DECISION MATRIX */}
      <section id="decision-matrix" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Interactive Flat Panel Use-Case Selection Guide"
              : "áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸáž‡áŸ’ážšáž¾ážŸážšáž¾ážŸáž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ Interactive Flat Panel"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Match your environment to the best screen size and features. This quick matrix helps you shortlist the right interactive flat panel."
              : "áž•áŸ’áž‚áž¼áž•áŸ’áž‚áž„áž”ážšáž·áž™áž¶áž€áž¶ážŸáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ážšáž”ážŸáŸ‹áž¢áŸ’áž“áž€áž‡áž¶áž˜áž½áž™áž‘áŸ†áž áŸ†áž¢áŸáž€áŸ’ážšáž„áŸ‹ áž“áž·áž„áž˜áž»ážáž„áž¶ážšážŠáŸ‚áž›ážŸáž˜ážŸáŸ’ážšáž”áž”áŸ†áž•áž»ážáŸ” ážáž¶ážšáž¶áž„ážáŸ’áž›áž¸áž“áŸáŸ‡áž‡áž½áž™áž¢áŸ’áž“áž€áž‡áŸ’ážšáž¾ážŸážšáž¾ážŸ Interactive Flat Panel ážŠáŸ‚áž›ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœáŸ”"}
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 bg-slate-100 text-sm font-semibold text-slate-900 sm:grid-cols-3">
              <div className="p-3">{lang === "en" ? "Use Case" : "áž€ážšážŽáž¸áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹"}</div>
              <div className="p-3">{lang === "en" ? "Recommended Size" : "áž‘áŸ†áž áŸ†ážŠáŸ‚áž›ážŽáŸ‚áž“áž¶áŸ†"}</div>
              <div className="p-3">{lang === "en" ? "Key Focus" : "áž…áŸ†ážŽáž»áž…ážŸáŸ†ážáž¶áž“áŸ‹"}</div>
            </div>
            {(lang === "en"
              ? [
                  ["Classrooms", "65 - 86 inch", "4K clarity, multi-touch, whiteboard tools"],
                  ["Meeting Rooms", "65 - 75 inch", "Wireless sharing, HDMI/USB-C"],
                  ["Training Centers", "75 - 98 inch", "Large visibility, multi-user touch"],
                  ["Auditoriums", "98 - 110 inch", "Ultra-large screen, wide viewing angle"],
                  ["Hospitals", "65 - 86 inch", "Clean visuals, quick annotation"],
                ]
              : [
                  ["ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“", "65 - 86 inch", "áž—áž¶áž–áž…áŸ’áž”áž¶ážŸáŸ‹ 4K, multi-touch, áž§áž”áž€ážšážŽáŸ whiteboard"],
                  ["áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ†", "65 - 75 inch", "Wireless sharing, HDMI/USB-C"],
                  ["áž˜áž‡áŸ’ážˆáž˜ážŽáŸ’ážŒáž›áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›", "75 - 98 inch", "áž€áž¶ážšáž˜áž¾áž›ážƒáž¾áž‰áž’áŸ†áž‘áž¼áž›áž¶áž™, multi-user touch"],
                  ["ážŸáž¶áž›áž”áŸ’ážšáž‡áž»áŸ†áž’áŸ†", "98 - 110 inch", "áž¢áŸáž€áŸ’ážšáž„áŸ‹áž’áŸ†ážáŸ’áž›áž¶áŸ†áž„, áž˜áž»áŸ†áž˜áž¾áž›áž‘áž¼áž›áž¶áž™"],
                  ["áž˜áž“áŸ’áž‘áž¸ážšáž–áŸáž‘áŸ’áž™", "65 - 86 inch", "ážšáž¼áž”áž—áž¶áž–ážŸáŸ’áž¢áž¶áž, annotation ážšáž áŸážŸ"],
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

            {/* SPECS COMPARISON */}
      <section id="specs-comparison" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Interactive Flat Panel Specifications Comparison by Size"
              : "áž€áž¶ážšáž”áŸ’ážšáŸ€áž”áž’áŸ€áž”áž›áž€áŸ’ážážŽáŸˆáž”áž…áŸ’áž…áŸáž€áž‘áŸážŸ Interactive Flat Panel ážáž¶áž˜áž‘áŸ†áž áŸ†"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Compare size, 4K resolution, touch points, OS support, and connectivity to select the best interactive flat panel for classrooms, meeting rooms, and training centers in Cambodia."
              : "áž”áŸ’ážšáŸ€áž”áž’áŸ€áž”áž‘áŸ†áž áŸ† áž€áž˜áŸ’ážšáž·ážáž”áž„áŸ’áž áž¶áž‰ 4K áž…áŸ†áž“áž½áž“ touch points áž€áž¶ážšáž‚áž¶áŸ†áž‘áŸ’ážš OS áž“áž·áž„áž€áž¶ážšážáž—áŸ’áž‡áž¶áž”áŸ‹ ážŠáž¾áž˜áŸ’áž”áž¸áž‡áŸ’ážšáž¾ážŸážšáž¾ážŸ Interactive Flat Panel ážŠáŸ‚áž›ážŸáž˜ážŸáŸ’ážšáž”áž”áŸ†áž•áž»áž ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“ áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ† áž“áž·áž„áž˜áž‡áŸ’ážˆáž˜ážŽáŸ’ážŒáž›áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ”"}
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white">
            <div className="hidden sm:block">
              <div className="grid grid-cols-3 bg-slate-100 text-sm font-semibold text-slate-900">
                <div className="p-3">{lang === "en" ? "Model" : "áž˜áŸ‰áž¼ážŠáŸ‚áž›"}</div>
                <div className="p-3">{lang === "en" ? "Best Use" : "áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ážŸáž˜ážŸáŸ’ážšáž”"}</div>
                <div className="p-3">{lang === "en" ? "Highlights" : "áž…áŸ†ážŽáž»áž…áž–áž·ážŸáŸážŸ"}</div>
              </div>
              {ifpProducts.map((p) => {
                const highlights = (lang === "en" ? p.featuresEn : p.featuresKm).slice(0, 2).join(" | ");
                return (
                  <div
                    key={p.id}
                    className="grid grid-cols-3 border-t border-slate-200 text-sm text-slate-700"
                  >
                    <div className="p-3 font-semibold text-slate-900">{lang === "en" ? p.titleEn : p.titleKm}</div>
                    <div className="p-3">{lang === "en" ? p.shortDescEn : p.shortDescKm}</div>
                    <div className="p-3">{highlights}</div>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-3 p-3 sm:hidden">
              {ifpProducts.map((p) => (
                <div
                  key={p.id}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700"
                >
                  <div className="text-sm font-semibold text-slate-900">{lang === "en" ? p.titleEn : p.titleKm}</div>
                  <div className="mt-2 grid gap-2">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold text-slate-700">{lang === "en" ? "Best Use" : "áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ážŸáž˜ážŸáŸ’ážšáž”"}</span>
                      <span className="text-right">{lang === "en" ? p.shortDescEn : p.shortDescKm}</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold text-slate-700">{lang === "en" ? "Highlights" : "áž…áŸ†ážŽáž»áž…áž–áž·ážŸáŸážŸ"}</span>
                      <span className="text-right">
                        {(lang === "en" ? p.featuresEn : p.featuresKm).slice(0, 2).join(" | ")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUYING GUIDE */}
      <section id="buying-guide" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {lang === "en" ? "Buying Guide" : "áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸáž‘áž·áž‰"}
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {lang === "en"
                  ? "Screen Size & Viewing Distance Guide"
                  : "áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸáž‘áŸ†áž áŸ†áž¢áŸáž€áŸ’ážšáž„áŸ‹ áž“áž·áž„áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž›"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {lang === "en"
                  ? "Choose the screen size based on seating distance, room size, and content type. Classroom environments often use 65-86 inch, while auditoriums and large training halls prefer 98-110 inch panels."
                  : "áž‡áŸ’ážšáž¾ážŸáž‘áŸ†áž áŸ†áž¢áŸáž€áŸ’ážšáž„áŸ‹ážŠáŸ„áž™áž•áŸ’áž¢áŸ‚áž€áž›áž¾áž…áž˜áŸ’áž„áž¶áž™áž¢áž„áŸ’áž‚áž»áž™ áž‘áŸ†áž áŸ†áž”áž“áŸ’áž‘áž”áŸ‹ áž“áž·áž„áž”áŸ’ážšáž—áŸáž‘áž˜áž¶ážáž·áž€áž¶áŸ” áž”ážšáž·áž™áž¶áž€áž¶ážŸážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“áž‡áž¶áž‰áž¹áž€áž‰áž¶áž”áŸ‹áž”áŸ’ážšáž¾ 65-86 inch ážážŽáŸˆážŸáž¶áž›áž”áŸ’ážšáž‡áž»áŸ†áž’áŸ† áž“áž·áž„ážŸáž¶áž›áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž’áŸ†áŸ— áž…áž¼áž›áž…áž·ážáŸ’ážáž”áž“áŸ’áž‘áŸ‡ 98-110 incháŸ”"}
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="grid grid-cols-1 bg-slate-100 text-sm font-semibold text-slate-900 sm:grid-cols-3">
                  <div className="p-3">{lang === "en" ? "Viewing Distance" : "áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž›"}</div>
                  <div className="p-3">{lang === "en" ? "Recommended Size" : "áž‘áŸ†áž áŸ†ážŠáŸ‚áž›ážŽáŸ‚áž“áž¶áŸ†"}</div>
                  <div className="p-3">{lang === "en" ? "Typical Room" : "áž”áŸ’ážšáž—áŸáž‘áž”áž“áŸ’áž‘áž”áŸ‹áž‘áž¼áž‘áŸ…"}</div>
                </div>
                {(lang === "en"
                  ? [
                      ["1.5 - 2 m", "55 - 65 inch", "Small classrooms"],
                      ["2 - 3 m", "65 - 75 inch", "Standard classrooms"],
                      ["3 - 4 m", "75 - 86 inch", "Training rooms"],
                      ["4 - 5 m", "86 - 98 inch", "Large classrooms"],
                      ["5 m+", "98 - 110 inch", "Auditoriums & halls"],
                    ]
                  : [
                      ["1.5 - 2 m", "55 - 65 inch", "ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“ážáž¼áž…"],
                      ["2 - 3 m", "65 - 75 inch", "ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“ážŸáŸ’ážáž„áŸ‹ážŠáž¶ážš"],
                      ["3 - 4 m", "75 - 86 inch", "áž”áž“áŸ’áž‘áž”áŸ‹áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›"],
                      ["4 - 5 m", "86 - 98 inch", "ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“áž’áŸ†"],
                      ["5 m+", "98 - 110 inch", "ážŸáž¶áž›áž”áŸ’ážšáž‡áž»áŸ† áž“áž·áž„ážŸáž¶áž›áž’áŸ†áŸ—"],
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

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                {lang === "en" ? "Quick Recommendation Calculator" : "áž§áž”áž€ážšážŽáŸáž‚ážŽáž“áž¶ážŽáŸ‚áž“áž¶áŸ†ážšáž áŸážŸ"}
              </div>
              <p className="mt-2 text-xs text-slate-600">
                {lang === "en"
                  ? "Enter the approximate viewing distance (meters). We will suggest a screen size range."
                  : "áž”áž‰áŸ’áž…áž¼áž›áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž›áž”áŸ’ážšáž áž¶áž€áŸ‹áž”áŸ’ážšáž áŸ‚áž› (áž˜áŸ‰áŸ‚ážáŸ’ážš)áŸ” áž™áž¾áž„áž“áž¹áž„ážŽáŸ‚áž“áž¶áŸ†áž‡áž½ážšáž‘áŸ†áž áŸ†áž¢áŸáž€áŸ’ážšáž„áŸ‹ážŸáž˜ážŸáŸ’ážšáž”áŸ”"}
              </p>
              <label className="mt-4 block text-xs font-semibold text-slate-700">
                {lang === "en" ? "Viewing distance (m)" : "áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž› (m)"}
              </label>
              <input
                value={viewDistance}
                onChange={(e) => setViewDistance(e.target.value)}
                inputMode="decimal"
                placeholder={lang === "en" ? "e.g. 3.5" : "áž§. 3.5"}
                className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
              />
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 shadow-sm">
                <div className="h-1 w-full rounded-full bg-gradient-to-r from-slate-900 via-sky-500 to-cyan-500" />
                <div className="mt-3">
                  {recommendedSize
                    ? (lang === "en"
                        ? `Recommended size: ${recommendedSize}`
                        : `áž‘áŸ†áž áŸ†ážŠáŸ‚áž›ážŽáŸ‚áž“áž¶áŸ†áŸ– ${recommendedSize}`)
                    : (lang === "en"
                        ? "Enter a viewing distance to get a recommendation."
                        : "ážŸáž¼áž˜áž”áž‰áŸ’áž…áž¼áž›áž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž› ážŠáž¾áž˜áŸ’áž”áž¸áž‘áž‘áž½áž›áž”áž¶áž“áž€áž¶ážšážŽáŸ‚áž“áž¶áŸ†áŸ”")}
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                {lang === "en"
                  ? "Final size depends on content type, audience seating, and room lighting."
                  : "áž‘áŸ†áž áŸ†áž…áž»áž„áž€áŸ’ážšáŸ„áž™áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾áž”áŸ’ážšáž—áŸáž‘áž˜áž¶ážáž·áž€áž¶ áž€áž¶ážšážšáŸ€áž”áž…áŸ†áž€áž“áŸ’áž›áŸ‚áž„áž¢áž„áŸ’áž‚áž»áž™áž¢áŸ’áž“áž€áž˜áž¾áž› áž“áž·áž„áž–áž“áŸ’áž›ážºáž€áŸ’áž“áž»áž„áž”áž“áŸ’áž‘áž”áŸ‹áŸ”"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SETUP */}
      <section id="installation" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.setupTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "End-to-end installation for interactive flat panels in Cambodia includes site survey, mounting, cabling, network setup, and user training. We optimize the screen height, viewing angle, and cable routing to ensure reliable daily use for classrooms, meeting rooms, and training centers."
              : "áž€áž¶ážšážŠáŸ†áž¡áž¾áž„ Interactive Flat Panel áž–áŸáž‰áž›áŸáž‰áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ ážšáž½áž˜áž˜áž¶áž“áž€áž¶ážšážŸáŸ’áž‘áž„áŸ‹áž‘áž¸ážáž¶áŸ†áž„ áž€áž¶ážšážŠáŸ†áž¡áž¾áž„áž˜áŸ‰áŸ„áž“ áž€áž¶ážšážšáŸ€áž”ážáŸ’ážŸáŸ‚ áž€áž¶ážšážšáŸ€áž”áž…áŸ†áž”ážŽáŸ’ážáž¶áž‰ áž“áž·áž„áž€áž¶ážšáž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾áŸ” áž™áž¾áž„áž’áŸ’ážœáž¾áž±áŸ’áž™áž”áŸ’ážšážŸáž¾ážšáž¡áž¾áž„áž“áž¼ážœáž€áž˜áŸ’áž–ážŸáŸ‹áž¢áŸáž€áŸ’ážšáž„áŸ‹ áž˜áž»áŸ†áž˜áž¾áž› áž“áž·áž„áž•áŸ’áž›áž¼ážœážáŸ’ážŸáŸ‚ ážŠáž¾áž˜áŸ’áž”áž¸áž’áž¶áž“áž¶áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒážŠáŸ‚áž›áž‘áž»áž€áž…áž·ážáŸ’ážáž”áž¶áž“ ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“ áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ† áž“áž·áž„áž˜áž‡áŸ’ážˆáž˜ážŽáŸ’ážŒáž›áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áŸ”"}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard
              n="01"
              title={lang === "en" ? "Site survey and room assessment" : "ážŸáŸ’áž‘áž„áŸ‹áž‘áž¸ážáž¶áŸ†áž„ áž“áž·áž„ážœáž¶áž™ážáž˜áŸ’áž›áŸƒáž”áž“áŸ’áž‘áž”áŸ‹"}
              desc={lang === "en"
                ? "Measure room size, seating distance, wall strength, and lighting. Confirm the best screen size, mounting height, and cable path."
                : "ážœáž¶ážŸáŸ‹áž‘áŸ†áž áŸ†áž”áž“áŸ’áž‘áž”áŸ‹ áž…áž˜áŸ’áž„áž¶áž™áž¢áž„áŸ’áž‚áž»áž™ áž€áž˜áŸ’áž›áž¶áŸ†áž„áž‡áž‰áŸ’áž‡áž¶áŸ†áž„ áž“áž·áž„áž–áž“áŸ’áž›ážºáŸ” áž”áž‰áŸ’áž‡áž¶áž€áŸ‹áž±áŸ’áž™áž…áŸ’áž”áž¶ážŸáŸ‹áž–áž¸áž‘áŸ†áž áŸ†áž¢áŸáž€áŸ’ážšáž„áŸ‹ážŸáž˜ážŸáŸ’ážšáž” áž€áž˜áŸ’áž–ážŸáŸ‹ážŠáŸ†áž¡áž¾áž„ áž“áž·áž„áž•áŸ’áž›áž¼ážœážáŸ’ážŸáŸ‚áŸ”"}
            />
            <StepCard
              n="02"
              title={lang === "en" ? "Wall mount or floor stand setup" : "ážŠáŸ†áž¡áž¾áž„ wall mount áž¬ floor stand"}
              desc={lang === "en"
                ? "Install wall brackets or floor stand with safe load rating, correct tilt, and clean finishing for professional presentation spaces."
                : "ážŠáŸ†áž¡áž¾áž„áž‡áž¾áž„áž‡áž‰áŸ’áž‡áž¶áŸ†áž„ áž¬áž‡áž¾áž„ážˆážšáž‡áž¶áž“áŸ‹ ážŠáŸ„áž™áž‚áŸ„ážšáž–ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–áž‘áž˜áŸ’áž„áž“áŸ‹ áž€áŸ†ážŽážáŸ‹áž˜áž»áŸ†áž±áŸ’áž™ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ áž“áž·áž„áž”áž‰áŸ’áž…áž”áŸ‹áž€áž¶ážšáž„áž¶ážšáž±áŸ’áž™ážŸáŸ’áž¢áž¶áž ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž“áŸ’áž›áŸ‚áž„áž”áž„áŸ’áž áž¶áž‰áž¢áž¶áž‡áž¸áž–áŸ”"}
            />
            <StepCard
              n="03"
              title={lang === "en" ? "Power, network, and OPS setup" : "ážšáŸ€áž”áž…áŸ†ážáž¶áž˜áž–áž› áž”ážŽáŸ’ážáž¶áž‰ áž“áž·áž„ OPS"}
              desc={lang === "en"
                ? "Connect power, LAN/Wi-Fi, HDMI/USB-C, and configure Android or OPS/Windows for content sharing and classroom apps."
                : "áž—áŸ’áž‡áž¶áž”áŸ‹ážáž¶áž˜áž–áž› LAN/Wi-Fi HDMI/USB-C áž“áž·áž„áž€áŸ†ážŽážáŸ‹ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’ Android áž¬ OPS/Windows ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž…áŸ‚áž€ážšáŸ†áž›áŸ‚áž€áž˜áž¶ážáž·áž€áž¶ áž“áž·áž„áž€áž˜áŸ’áž˜ážœáž·áž’áž¸ážŸáž·áž€áŸ’ážŸáž¶áŸ”"}
            />
            <StepCard
              n="04"
              title={lang === "en" ? "User training and handover" : "áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾ áž“áž·áž„áž”áŸ’ážšáž‚áž›áŸ‹áž€áž¶ážšáž„áž¶ážš"}
              desc={lang === "en"
                ? "Hands-on training for whiteboard tools, wireless casting, file sharing, and daily maintenance checks for smooth operation."
                : "áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž‡áž¶áž€áŸ‹ážŸáŸ’ážáŸ‚áž„áž¢áŸ†áž–áž¸áž§áž”áž€ážšážŽáŸ whiteboard, wireless casting, file sharing áž“áž·áž„áž€áž¶ážšážáŸ’ážšáž½ážáž–áž·áž“áž·ážáŸ’áž™ážáŸ‚áž‘áž¶áŸ†áž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒ ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšážšáž›áž¼áž“áŸ”"}
            />
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Interactive Flat Panel Use Cases in Cambodia (Education, Corporate, Healthcare)"
              : "áž€ážšážŽáž¸áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ Interactive Flat Panel áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ (áž¢áž”áŸ‹ážšáŸ† ážŸáž¶áž‡áž¸ážœáž€áž˜áŸ’áž˜ áž“áž·áž„ážŸáž»ážáž¶áž—áž·áž”áž¶áž›)"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Real-world scenarios where interactive flat panels improve teaching, training, and presentation workflows across Cambodia schools, offices, and hospitals."
              : "áž§áž‘áž¶áž ážšážŽáŸáž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áž‡áž¶áž€áŸ‹ážŸáŸ’ážáŸ‚áž„ ážŠáŸ‚áž› Interactive Flat Panel áž‡áž½áž™áž”áž„áŸ’áž€áž¾áž“áž”áŸ’ážšážŸáž·áž‘áŸ’áž’áž—áž¶áž–áž€áž¶ážšáž”áž„áŸ’ážšáŸ€áž“ áž€áž¶ážšáž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž› áž“áž·áž„áž›áŸ†áž áž¼ážšáž€áž¶ážšáž„áž¶ážšáž”áž„áŸ’áž áž¶áž‰ áž“áŸ…ážŸáž¶áž›áž¶ážšáŸ€áž“ áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ áž“áž·áž„áž˜áž“áŸ’áž‘áž¸ážšáž–áŸáž‘áŸ’áž™áž‘áž¼áž‘áž¶áŸ†áž„áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ”"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(lang === "en"
              ? [
                  [
                    "School Classroom Upgrade",
                    "65-86 inch 4K smart boards with multi-touch writing, annotation, and wireless casting for daily lessons. Supports whiteboard apps, lesson playback, and interactive teaching.",
                    ["Education", "Whiteboard", "4K"],
                  ],
                  [
                    "Corporate Meeting Room",
                    "65-75 inch interactive panels with HDMI/USB-C, LAN/Wi-Fi, and screen sharing for presentations, brainstorming, and hybrid meetings.",
                    ["Meeting", "Wireless", "USB-C"],
                  ],
                  [
                    "Training Center",
                    "75-98 inch panels for clear visibility, multi-user collaboration, and hands-on demonstrations during workshops and onboarding.",
                    ["Training", "Multi-touch", "Large screen"],
                  ],
                  [
                    "Hospital Briefing Room",
                    "65-86 inch panels for clinical training, medical briefings, and patient education with quick annotation and reliable daily use.",
                    ["Healthcare", "Briefing", "Reliable"],
                  ],
                ]
              : [
                  [
                    "áž€áž¶ážšáž¢áž¶áž”áŸ‹ážŠáŸážážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“",
                    "Smart board 4K áž‘áŸ†áž áŸ† 65-86 inch áž‡áž¶áž˜áž½áž™áž€áž¶ážšážŸážšážŸáŸážš multi-touch, annotation áž“áž·áž„ wireless casting ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž˜áŸážšáŸ€áž“áž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒáŸ” áž‚áž¶áŸ†áž‘áŸ’ážš whiteboard apps, lesson playback áž“áž·áž„áž€áž¶ážšáž”áž„áŸ’ážšáŸ€áž“áž¢áž“áŸ’ážážšáž€áž˜áŸ’áž˜áŸ”",
                    ["áž¢áž”áŸ‹ážšáŸ†", "Whiteboard", "4K"],
                  ],
                  [
                    "áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ†áž€áŸ’ážšáž»áž˜áž áŸŠáž»áž“",
                    "Interactive panel áž‘áŸ†áž áŸ† 65-75 inch áž‡áž¶áž˜áž½áž™ HDMI/USB-C, LAN/Wi-Fi áž“áž·áž„ screen sharing ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž”áž„áŸ’áž áž¶áž‰ áž‚áŸ†áž“áž·ážáž…áŸ’áž“áŸƒáž”áŸ’ážšážŒáž·áž áž“áž·áž„áž€áž·áž…áŸ’áž…áž”áŸ’ážšáž‡áž»áŸ† hybridáŸ”",
                    ["áž”áŸ’ážšáž‡áž»áŸ†", "áž¥ážážáŸ’ážŸáŸ‚", "USB-C"],
                  ],
                  [
                    "áž˜áž‡áŸ’ážˆáž˜ážŽáŸ’ážŒáž›áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›",
                    "Panel áž‘áŸ†áž áŸ† 75-98 inch ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž˜áž¾áž›ážƒáž¾áž‰áž…áŸ’áž”áž¶ážŸáŸ‹ áž€áž¶ážšážŸáž áž€áž¶ážšáž…áŸ’ážšáž¾áž“áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾ áž“áž·áž„áž€áž¶ážšáž”áž„áŸ’áž áž¶áž‰áž‡áž¶áž€áŸ‹ážŸáŸ’ážáŸ‚áž„áž–áŸáž› workshop áž“áž·áž„ onboardingáŸ”",
                    ["áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›", "Multi-touch", "áž¢áŸáž€áŸ’ážšáž„áŸ‹áž’áŸ†"],
                  ],
                  [
                    "áž”áž“áŸ’áž‘áž”áŸ‹áž”áž„áŸ’áž áž¶áž‰áž–áŸážáŸŒáž˜áž¶áž“áž˜áž“áŸ’áž‘áž¸ážšáž–áŸáž‘áŸ’áž™",
                    "Panel áž‘áŸ†áž áŸ† 65-86 inch ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›ážœáŸáž‡áŸ’áž‡ážŸáž¶ážŸáŸ’ážáŸ’ážš áž€áž¶ážšáž”áž„áŸ’áž áž¶áž‰áž–áŸážáŸŒáž˜áž¶áž“ážœáŸáž‡áŸ’áž‡ážŸáž¶ážŸáŸ’ážáŸ’ážš áž“áž·áž„áž€áž¶ážšáž¢áž”áŸ‹ážšáŸ†áž¢áŸ’áž“áž€áž‡áŸ†áž„ážº áž‡áž¶áž˜áž½áž™ annotation ážšáž áŸážŸ áž“áž·áž„áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒážŠáŸ‚áž›áž‘áž»áž€áž…áž·ážáŸ’ážáž”áž¶áž“áŸ”",
                    ["ážŸáž»ážáž¶áž—áž·áž”áž¶áž›", "áž”áž„áŸ’áž áž¶áž‰áž–áŸážáŸŒáž˜áž¶áž“", "áž‘áž»áž€áž…áž·ážáŸ’ážáž”áž¶áž“"],
                  ],
                ]).map((item, idx) => {
              const [title, desc, chips] = item as [string, string, string[]];
              return (
              <div
                key={`${title}-${idx}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
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

      {/* WARRANTY & POLICY */}
      <section id="warranty-support" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {lang === "en"
              ? "Interactive Flat Panel Warranty, Support & After-Sales Service in Cambodia"
              : "áž€áž¶ážšáž’áž¶áž“áž¶ áž€áž¶ážšáž‚áž¶áŸ†áž‘áŸ’ážš áž“áž·áž„ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áž”áž“áŸ’áž‘áž¶áž”áŸ‹áž–áž¸áž›áž€áŸ‹ Interactive Flat Panel áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {lang === "en"
              ? "Our interactive flat panel service in Cambodia covers quotation, delivery, installation, training, and long-term support. We focus on reliable classroom and meeting room operations with clear warranty terms, responsive on-site service, and optional maintenance plans."
              : "ážŸáŸážœáž¶áž€áž˜áŸ’áž˜ Interactive Flat Panel ážšáž”ážŸáŸ‹áž™áž¾áž„áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹áž…áž¶áž”áŸ‹áž–áž¸áž€áž¶ážšáž•áŸ’ážáž›áŸ‹ážŸáž˜áŸ’ážšáž„áŸ‹ážáž˜áŸ’áž›áŸƒ áž€áž¶ážšážŠáž¹áž€áž‡áž‰áŸ’áž‡áž¼áž“ áž€áž¶ážšážŠáŸ†áž¡áž¾áž„ áž€áž¶ážšáž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž› áž“áž·áž„áž€áž¶ážšáž‚áž¶áŸ†áž‘áŸ’ážšážšáž™áŸˆáž–áŸáž›ážœáŸ‚áž„áŸ” áž™áž¾áž„áž•áŸ’ážáŸ„ážáž›áž¾áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ážŠáŸ‚áž›áž‘áž»áž€áž…áž·ážáŸ’ážáž”áž¶áž“ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“ áž“áž·áž„áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ† áž‡áž¶áž˜áž½áž™áž›áž€áŸ’ážážážŽáŸ’ážŒáž’áž¶áž“áž¶áž…áŸ’áž”áž¶ážŸáŸ‹áž›áž¶ážŸáŸ‹ ážŸáŸážœáž¶áž€áž˜áŸ’áž˜ on-site áž†áž¶áž”áŸ‹ážšáž áŸážŸ áž“áž·áž„áž‡áž˜áŸ’ážšáž¾ážŸáž•áŸ‚áž“áž€áž¶ážšážáŸ‚áž‘áž¶áŸ†áž”áž“áŸ’ážáŸ‚áž˜áŸ”"}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(lang === "en"
              ? [
                  [
                    "Warranty Coverage & Documentation",
                    "Warranty depends on the chosen model, configuration, and usage. We provide clear coverage details, warranty duration, and scope during quotation and handover.",
                  ],
                  [
                    "On-site Support & Troubleshooting",
                    "Our team handles installation, calibration, firmware checks, and troubleshooting to keep smart boards stable for daily classroom and office use.",
                  ],
                  [
                    "Maintenance & AMC Plans",
                    "Preventive maintenance, cleaning guidance, and AMC plans are available for schools, universities, and corporate deployments.",
                  ],
                ]
              : [
                  [
                    "ážœáž·ážŸáž¶áž›áž—áž¶áž–áž’áž¶áž“áž¶ áž“áž·áž„áž¯áž€ážŸáž¶ážš",
                    "áž€áž¶ážšáž’áž¶áž“áž¶áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾áž˜áŸ‰áž¼ážŠáŸ‚áž› áž€áž¶ážšáž€áŸ†ážŽážáŸ‹ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’ áž“áž·áž„áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ážŠáŸ‚áž›áž”áž¶áž“áž‡áŸ’ážšáž¾ážŸáŸ” áž™áž¾áž„áž•áŸ’ážáž›áŸ‹áž–áŸážáŸŒáž˜áž¶áž“áž›áž˜áŸ’áž¢áž·ážáž¢áŸ†áž–áž¸ážœáž·ážŸáž¶áž›áž—áž¶áž–áž’áž¶áž“áž¶ ážšáž™áŸˆáž–áŸáž›áž’áž¶áž“áž¶ áž“áž·áž„áž›áž€áŸ’ážážážŽáŸ’ážŒáž–áž¶áž€áŸ‹áž–áŸáž“áŸ’áž’áž™áŸ‰áž¶áž„áž…áŸ’áž”áž¶ážŸáŸ‹ áž“áŸ…áž–áŸáž›áž•áŸ’ážáž›áŸ‹ážáž˜áŸ’áž›áŸƒ áž“áž·áž„áž–áŸáž›áž”áŸ’ážšáž‚áž›áŸ‹áž€áž¶ážšáž„áž¶ážšáŸ”",
                  ],
                  [
                    "áž€áž¶ážšáž‚áž¶áŸ†áž‘áŸ’ážš On-site áž“áž·áž„ážŠáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™áž”áž‰áŸ’áž áž¶",
                    "áž€áŸ’ážšáž»áž˜áž€áž¶ážšáž„áž¶ážšáž™áž¾áž„áž¢áž“áž»ážœážáŸ’ážáž€áž¶ážšážŠáŸ†áž¡áž¾áž„ áž€áž¶ážšáž€áŸ‚ážáž˜áŸ’ážšáž¼ážœ calibration áž€áž¶ážšážáŸ’ážšáž½ážáž–áž·áž“áž·ážáŸ’áž™ firmware áž“áž·áž„áž€áž¶ážšážŠáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™áž”áž‰áŸ’áž áž¶ ážŠáž¾áž˜áŸ’áž”áž¸ážšáž€áŸ’ážŸáž¶áž±áŸ’áž™ smart board áž˜áž¶áž“ážŸáŸ’ážáž·ážšáž—áž¶áž–ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒáž“áŸ…ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“ áž“áž·áž„áž€áž¶ážšáž·áž™áž¶áž›áŸáž™áŸ”",
                  ],
                  [
                    "áž•áŸ‚áž“áž€áž¶ážšážáŸ‚áž‘áž¶áŸ† áž“áž·áž„ AMC",
                    "ážŸáŸážœáž¶ážáŸ‚áž‘áž¶áŸ†áž”áž„áŸ’áž€áž¶ážš áž€áž¶ážšážŽáŸ‚áž“áž¶áŸ†ážŸáž˜áŸ’áž¢áž¶áž áž“áž·áž„áž•áŸ‚áž“áž€áž¶ážš AMC áž˜áž¶áž“ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážŸáž¶áž›áž¶ážšáŸ€áž“ ážŸáž¶áž€áž›ážœáž·áž‘áŸ’áž™áž¶áž›áŸáž™ áž“áž·áž„áž€áž¶ážšážŠáŸ†áž¡áž¾áž„áž€áŸ’áž“áž»áž„ážŸáŸ’ážáž¶áž”áŸáž“áž¢áž¶áž‡áž¸ážœáž€áž˜áŸ’áž˜áŸ”",
                  ],
                ]).map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + FINAL CTA */}
      <section id="faq" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.faqTitle}
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {faqs.map((f) => (
              <details
                key={f.qEn}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <summary className="cursor-pointer list-none">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-sm font-semibold text-slate-900">
                      {lang === "en" ? f.qEn : f.qKm}
                    </div>
                    <span className="mt-0.5 text-slate-400 transition group-open:rotate-180">
                      v
                    </span>
                  </div>
                  <div className="mt-2 hidden h-px w-full bg-slate-100 group-open:block" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {lang === "en" ? f.aEn : f.aKm}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">{t.finalTitle}</h3>
            <p className="mt-2 text-slate-600">{t.finalSub}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {t.finalCta}
              </Link>
              <Link
                href="/interactive-flat-panel#models"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ======================
   Small UI components
   ====================== */

function StepCard({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-semibold text-slate-500">{n}</div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{title}</div>
      {desc ? <p className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</p> : null}
    </div>
  );
}













