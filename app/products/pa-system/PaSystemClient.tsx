"use client";

"use client";

import Link from "next/link";
import { useMemo } from "react";
import ProductGrid from "../../components/sections/ProductGrid";
import { useLang } from "../../components/layout/LanguageProvider";
import { PRODUCTS } from "../../data/products";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };

export default function PaSystemClient() {
  const { lang } = useLang();

  const t = useMemo(() => {
    const en = {
      breadcrumb: "" ,
      badge: "Cambodia - PA System - Public Address",
      h1: "Mugnee PA System Solutions in Cambodia",
      sub:
        "Mugnee Cambodia delivers professional public address (PA) systems tailored for local factories, schools, hospitals, malls, hotels, offices, and public venues. We design and supply mixers, power amplifiers, paging microphones, indoor/outdoor speakers, and accessories, with zone planning, cabling, installation, commissioning, and after-sales support across Phnom Penh, Siem Reap, and Sihanoukville.",
      cta1: "Get a Free Quotation",
      cta2: "View PA System Products",
      serving: "Serving: Phnom Penh - Siem Reap - Sihanoukville",

      quickTitle: "Browse PA system categories and related services",
      quickSub:
        "Quick links help you reach speakers, amplifiers, microphones, and installation support.",

      specsTitle: "PA System Specifications for Cambodia",
      specsSub:
        "Use these practical ranges to plan clear paging, safety alerts, and daily announcements for indoor and outdoor sites.",
      sCard1t: "System Type",
      sCard1d: "Public address, paging, and background audio solutions.",
      sCard2t: "Speaker Types",
      sCard2d: "Ceiling, wall, pendant, and outdoor horn speakers.",
      sCard3t: "Coverage Planning",
      sCard3d: "Zone-based layout for clear audio in each area.",
      sCard4t: "Priority & Emergency",
      sCard4d: "Priority paging, override channels, and alerts.",
      sCard5t: "Microphones",
      sCard5d: "Paging mics, gooseneck, and wireless options.",
      sCard6t: "Installation",
      sCard6d: "Proper cabling, tuning, and commissioning support.",

      basicsLabel: "PA SYSTEM BASICS",
      basicsTitle: "What Is a PA System?",
      basicsDesc:
        "A PA (Public Address) system is a centralized audio solution that amplifies voice and music and distributes it to speakers across multiple zones. It is used for paging, announcements, safety alerts, and day-to-day communication in factories, schools, malls, offices, hospitals, and public venues.",
      howTitle: "How Does a PA System Work?",
      howDesc:
        "Audio sources such as microphones, media players, and alarm inputs feed a mixer or controller. The signal is processed, amplified, and sent to zone speakers (ceiling, wall, horn, or column). Priority paging and emergency overrides ensure critical messages reach the correct areas clearly and on time.",
      benefitTitle: "Key Benefits for Cambodia Sites",
      b1: "Clear announcements for safety and daily operations",
      b2: "Multi-zone control for offices, factories, and campuses",
      b3: "Flexible indoor and outdoor speaker options",
      b4: "Scalable from small buildings to large facilities",
      b5: "Improved coordination during emergencies",

      guideTitle: "PA Speaker Selection & Coverage Guide (Cambodia)",
      guideSub:
        "Choose the right PA speaker type for Cambodia projects. Match coverage distance, ambient noise, and mounting options to keep paging clear in schools, factories, malls, hospitals, and public venues.",
      guideRows: [
        ["Classrooms & Meeting Rooms", "Ceiling / Wall Speakers", "Clear voice and even coverage"],
        ["Corridors & Lobbies", "Wall Speakers", "Directional paging for walkways"],
        ["Factories & Warehouses", "Horn Speakers", "High-output audio in noisy areas"],
        ["Outdoor Yards & Gates", "Weatherproof Horn Speakers", "Long-throw coverage"],
        ["Retail & Malls", "Ceiling / Pendant Speakers", "Balanced paging and background audio"],
      ] as [string, string, string][],

      compTitle: "PA System Components & Architecture (Cambodia)",
      compSub:
        "A complete PA system includes audio sources, mixing/control, amplification, and the right speaker types for each zone. Use this checklist to plan scalable, reliable public address systems for factories, schools, malls, hospitals, offices, and public venues across Cambodia.",
      c1: "Mixers & Amplifiers",
      c1d: "High-headroom mixing and amplification that keeps speech intelligible and music balanced, even at peak volume across multiple PA zones.",
      c2: "Paging Microphones",
      c2d: "Paging microphones with priority override for security desks, receptions, and control rooms, ensuring emergency and routine announcements cut through background noise.",
      c3: "Wall & Ceiling Speakers",
      c3d: "Ceiling and wall speakers designed for uniform indoor coverage in classrooms, offices, corridors, and retail spaces with low visual impact.",
      c4: "Horn Speakers",
      c4d: "Weather-resistant horn speakers for long-throw coverage in factories, loading bays, gates, and outdoor yards with high ambient noise.",
      c5: "Zone Controllers",
      c5d: "Zone controllers and matrices that handle routing, scheduling, and priority paging so the right message reaches the right area at the right time.",
      c6: "Cables & Accessories",
      c6d: "Professional cabling, racks, mounts, and surge protection that improve reliability, simplify maintenance, and keep PA systems compliant with site safety standards.",

      chooseTitle: "Mugnee PA System Selection Guide for Cambodia",
      chooseSub:
        "Mugnee Cambodia helps you choose the right PA system for your building by matching coverage area, ambient noise, and safety requirements. Use this selection guide to plan zone-by-zone paging, choose indoor or outdoor speaker types, calculate amplifier power, and set priority/emergency override so announcements are clear in factories, schools, malls, offices, hospitals, and public venues. We also consider room acoustics, mounting height, power budget, and future expansion so your PA system remains reliable as your site grows.",
      s1: "Coverage area and number of zones",
      s2: "Indoor vs outdoor speaker types",
      s3: "Power and wattage requirements",
      s4: "Emergency priority and backup needs",
      s5: "Integration with security or fire systems",

      gridTitle: "PA System Products",
      gridSub:
        "Browse amplifiers, mixers, speakers, microphones, and accessories for Cambodia projects.",

      useTitle: "PA System Applications in Cambodia",
      useSub:
        "Explore the most common PA system use cases in Cambodia, from factories and schools to hospitals, malls, hotels, and government facilities. Each environment needs the right speaker type, paging priority, and zone design to ensure clear announcements and safety messaging.",
      u1t: "Factories & Warehouses",
      u1d: "Shift calls, safety alerts, and production updates across noisy factory floors with long-throw coverage.",
      u2t: "Schools & Campuses",
      u2d: "Classroom paging, assembly alerts, and campus-wide announcements with multi-zone scheduling.",
      u3t: "Hospitals & Clinics",
      u3d: "Emergency alerts, staff coordination, and patient communications with priority override.",
      u4t: "Retail & Shopping Malls",
      u4d: "Customer announcements, promotional messaging, and consistent background audio across retail zones.",
      u5t: "Hotels & Public Venues",
      u5d: "Event announcements, guest guidance, and zoned paging for lobbies, halls, and outdoor areas.",
      u6t: "Airports & Government",
      u6d: "Public announcements, security messaging, and evacuation guidance in large facilities.",

      processTitle: "PA System Installation, Setup & Training in Cambodia",
      processSub:
        "From site survey to final commissioning, our team delivers a complete PA system installation in Cambodia. We handle coverage planning, clean cabling, equipment configuration, and end-user training so announcements stay clear, safe, and reliable long after handover.",
      p1: "Site survey, noise mapping, and coverage planning",
      p1d:
        "Assess room size, ambient noise, and mounting points to calculate speaker quantity, placement, and coverage zones.",
      p2: "System design, equipment selection, and zone layout",
      p2d:
        "Select amplifiers, mixers, paging microphones, and speakers that match power, impedance, and usage requirements.",
      p3: "Installation, cabling, labeling, and audio tuning",
      p3d:
        "Run clean cabling, label all lines, configure controllers, and tune EQ/volume for clear speech intelligibility.",
      p4: "User training, documentation, and handover support",
      p4d:
        "Train staff on paging, scheduling, and emergency override with full documentation and maintenance guidelines.",

      faqTitle: "PA System FAQ for Cambodia Buyers",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Share your building size, zones, and use-case (factory, school, office, or mall). We will recommend the right PA system and provide a clear quotation.",
      finalCta: "Contact & Get Quotation",
      viewProducts: "View Products",
      note:
        "Note: Final quotation depends on coverage area, zone count, speaker type, cabling distance, and installation requirements.",
      getQuote: "Get Quotation",
    };

    const km = {
      breadcrumb: "" ,
      badge: "áž€áž˜áŸ’áž–áž»áž‡áž¶ - áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA - ážŸáŸ†áž¡áŸáž„ážŸáž¶áž’áž¶ážšážŽáŸˆ",
      h1: "ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA ážšáž”ážŸáŸ‹ Mugnee áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      sub:
        "Mugnee Cambodia áž•áŸ’ážáž›áŸ‹ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™áž”áŸ’ážšáž–áŸáž“áŸ’áž’áž•áŸ’ážŸáž¶áž™ážŸáŸ†áž¡áŸáž„ážŸáž¶áž’áž¶ážšážŽáŸˆ (PA) ážŠáŸ„áž™ážœáž·áž‡áŸ’áž‡áž¶áž‡áž¸ážœáŸˆ ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážšáŸ„áž„áž…áž€áŸ’ážš ážŸáž¶áž›áž¶ážšáŸ€áž“ áž˜áž“áŸ’áž‘áž¸ážšáž–áŸáž‘áŸ’áž™ áž•áŸ’ážŸáž¶ážš ážŸážŽáŸ’áž‹áž¶áž‚áž¶ážš áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ážŸáž¶áž’áž¶ážšážŽáŸˆáž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ” áž™áž¾áž„ážšáž…áž“áž¶ áž“áž·áž„áž•áŸ’áž‚ážáŸ‹áž•áŸ’áž‚áž„áŸ‹ mixer, power amplifier, paging microphone, speaker áž€áŸ’áž“áž»áž„/áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš áž“áž·áž„áž‚áŸ’ážšáž¿áž„áž”áž“áŸ’áž›áž¶ážŸáŸ‹ áž–áŸ’ážšáž˜áž‘áž¶áŸ†áž„áž€áž¶ážšáž’áŸ’ážœáž¾áž•áŸ‚áž“áž€áž¶ážš zone, ážŠáž¶áž€áŸ‹ážáŸ’ážŸáŸ‚, ážŠáŸ†áž¡áž¾áž„, commissioning áž“áž·áž„ after-sales support áž“áŸ…áž—áŸ’áž“áŸ†áž–áŸáž‰ ážŸáŸ€áž˜ážšáž¶áž” áž“áž·áž„áž–áŸ’ážšáŸ‡ážŸáž¸áž áž“áž»áŸ”",
      cta1: "ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒáž¥ážáž‚áž·ážážáŸ’áž›áŸƒ",
      cta2: "áž˜áž¾áž›áž•áž›áž·ážáž•áž›áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA",
      serving: "ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áŸ– áž—áŸ’áž“áŸ†áž–áŸáž‰ - ážŸáŸ€áž˜ážšáž¶áž” - áž–áŸ’ážšáŸ‡ážŸáž¸áž áž“áž»",

      quickTitle: "ážšáž€áž˜áž¾áž›áž”áŸ’ážšáž—áŸáž‘áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA áž“áž·áž„ážŸáŸážœáž¶ážŠáŸ‚áž›áž–áž¶áž€áŸ‹áž–áŸáž“áŸ’áž’",
      quickSub:
        "ážáŸ†ážŽážšáž áŸážŸáž‡áž½áž™áž±áŸ’áž™áž¢áŸ’áž“áž€áž‘áŸ…ážŠáž›áŸ‹ speaker, amplifier, microphone áž“áž·áž„ážŸáŸážœáž¶ážŠáŸ†áž¡áž¾áž„áž”áž¶áž“áž›áž¿áž“áŸ”",

      specsTitle: "áž›áž€áŸ’ážážŽáŸˆáž”áž…áŸ’áž…áŸáž€áž‘áŸážŸáž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž˜áŸ’áž–áž»áž‡áž¶",
      specsSub:
        "áž”áŸ’ážšáž¾áž‡áž½ážšážŽáŸ‚áž“áž¶áŸ†áž‘áž¶áŸ†áž„áž“áŸáŸ‡ ážŠáž¾áž˜áŸ’áž”áž¸ážšáŸ€áž”áž…áŸ† paging áž±áŸ’áž™áž…áŸ’áž”áž¶ážŸáŸ‹ ážŸáŸáž…áž€áŸ’ážáž¸áž‡áž¼áž“ážŠáŸ†ážŽáž¹áž„ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„áž€áž¶ážšáž”áŸ’ážšáž€áž¶ážŸáž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒ ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‘áž¸ážáž¶áŸ†áž„áž€áŸ’áž“áž»áž„ áž“áž·áž„áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážšáŸ”",
      sCard1t: "áž”áŸ’ážšáž—áŸáž‘áž”áŸ’ážšáž–áŸáž“áŸ’áž’",
      sCard1d: "ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™áž•áŸ’ážŸáž¶áž™ážŸáŸ†áž¡áŸáž„ážŸáž¶áž’áž¶ážšážŽáŸˆ paging áž“áž·áž„ážŸáŸ†áž¡áŸáž„áž•áŸ’áž‘áŸƒážáž¶áž„áž€áŸ’ážšáŸ„áž™áŸ”",
      sCard2t: "áž”áŸ’ážšáž—áŸáž‘ Speaker",
      sCard2d: "Speaker áž–áž·ážŠáž¶áž“ áž‡áž‰áŸ’áž‡áž¶áŸ†áž„ pendant áž“áž·áž„ horn speaker ážáž¶áž„áž€áŸ’ážšáŸ…áŸ”",
      sCard3t: "áž•áŸ‚áž“áž€áž¶ážšáž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹ážŸáŸ†áž¡áŸáž„",
      sCard3d: "ážšáŸ€áž”áž…áŸ† layout ážáž¶áž˜ zone ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™ážŸáŸ†áž¡áŸáž„áž…áŸ’áž”áž¶ážŸáŸ‹áž€áŸ’áž“áž»áž„ážáŸ†áž”áž“áŸ‹áž“áž¸áž˜áž½áž™áŸ—áŸ”",
      sCard4t: "áž¢áž¶áž‘áž·áž—áž¶áž– áž“áž·áž„áž‚áŸ’ážšáž¶áž¢áž¶ážŸáž“áŸ’áž“",
      sCard4d: "Priority paging, override channel áž“áž·áž„ážŸáž¶ážšáž‡áž¼áž“ážŠáŸ†ážŽáž¹áž„áž”áž“áŸ’áž‘áž¶áž“áŸ‹áŸ”",
      sCard5t: "áž˜áž¸áž€áŸ’ážšáž¼áž áŸ’ážœáž¼áž“",
      sCard5d: "Paging mic, gooseneck áž“áž·áž„áž‡áž˜áŸ’ážšáž¾ážŸ wirelessáŸ”",
      sCard6t: "áž€áž¶ážšážŠáŸ†áž¡áž¾áž„",
      sCard6d: "ážŠáž¶áž€áŸ‹ážáŸ’ážŸáŸ‚ ážáž˜áŸ’ážšáž¼ážœážŸáŸ†áž¡áŸáž„ áž“áž·áž„ commissioning ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœáŸ”",

      basicsLabel: "áž˜áž¼áž›ážŠáŸ’áž‹áž¶áž“áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA",
      basicsTitle: "PA System áž‚ážºáž‡áž¶áž¢áŸ’ážœáž¸?",
      basicsDesc:
        "PA (Public Address) System áž‚ážºáž‡áž¶ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™ážŸáŸ†áž¡áŸáž„áž€ážŽáŸ’ážáž¶áž› ážŠáŸ‚áž›áž”áž„áŸ’áž€áž¾áž“ážŸáŸ†áž¡áŸáž„áž“áž·áž™áž¶áž™ áž“áž·áž„ážáž“áŸ’ážáŸ’ážšáž¸ áž áž¾áž™áž…áŸ‚áž€áž…áž¶áž™áž‘áŸ… speaker ážáž¶áž˜ zone áž‡áž¶áž…áŸ’ážšáž¾áž“áŸ” ážœáž¶ážáŸ’ážšáž¼ážœáž”áž¶áž“áž”áŸ’ážšáž¾ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ paging, áž€áž¶ážšáž”áŸ’ážšáž€áž¶ážŸ, ážŸáž¶ážšáž‡áž¼áž“ážŠáŸ†ážŽáž¹áž„ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„áž‘áŸ†áž“áž¶áž€áŸ‹áž‘áŸ†áž“áž„áž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒ áž€áŸ’áž“áž»áž„ážšáŸ„áž„áž…áž€áŸ’ážš ážŸáž¶áž›áž¶ážšáŸ€áž“ áž•áŸ’ážŸáž¶ážš áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ áž˜áž“áŸ’áž‘áž¸ážšáž–áŸáž‘áŸ’áž™ áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ážŸáž¶áž’áž¶ážšážŽáŸˆáŸ”",
      howTitle: "PA System ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž™áŸ‰áž¶áž„ážŠáž¼áž…áž˜áŸ’ážáŸáž…?",
      howDesc:
        "áž”áŸ’ážšáž—áž–ážŸáŸ†áž¡áŸáž„ážŠáž¼áž…áž‡áž¶ microphone, media player áž“áž·áž„ážŸáž‰áŸ’áž‰áž¶ alarm áž“áž¹áž„áž…áž¼áž›áž‘áŸ… mixer áž¬ controlleráŸ” áž”áž“áŸ’áž‘áž¶áž”áŸ‹áž˜áž€ážŸáž‰áŸ’áž‰áž¶ážáŸ’ážšáž¼ážœáž”áž¶áž“ážŠáŸ†ážŽáž¾ážšáž€áž¶ážš áž–áž„áŸ’ážšáž¸áž€ áž“áž·áž„áž”áž‰áŸ’áž‡áž¼áž“áž‘áŸ… speaker ážáž¶áž˜ zone (ceiling, wall, horn áž¬ column)áŸ” Priority paging áž“áž·áž„ emergency override áž’áž¶áž“áž¶ážáž¶ ážŸáž¶ážšážŸáŸ†ážáž¶áž“áŸ‹áž¢áž¶áž…áž‘áŸ…ážŠáž›áŸ‹ážáŸ†áž”áž“áŸ‹ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ áž…áŸ’áž”áž¶ážŸáŸ‹áž›áž¶ážŸáŸ‹ áž“áž·áž„áž‘áž¶áž“áŸ‹áž–áŸáž›áŸ”",
      benefitTitle: "áž¢ážáŸ’ážáž”áŸ’ážšáž™áŸ„áž‡áž“áŸážŸáŸ†ážáž¶áž“áŸ‹ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‚áž˜áŸ’ážšáŸ„áž„áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      b1: "áž€áž¶ážšáž”áŸ’ážšáž€áž¶ážŸáž…áŸ’áž”áž¶ážŸáŸ‹áž›áž¶ážŸáŸ‹ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„áž”áŸ’ážšážáž·áž”ážáŸ’ážáž·áž€áž¶ážšáž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒ",
      b2: "áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž”áž¶áž“áž…áŸ’ážšáž¾áž“ zone ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ ážšáŸ„áž„áž…áž€áŸ’ážš áž“áž·áž„ campus",
      b3: "áž‡áž˜áŸ’ážšáž¾ážŸ speaker áž”ážáŸ‹áž”áŸ‚áž“áž”áž¶áž“ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áŸ’áž“áž»áž„ áž“áž·áž„áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš",
      b4: "áž–áž„áŸ’ážšáž¸áž€áž”áž¶áž“áž–áž¸áž¢áž‚áž¶ážšážáž¼áž…áž‘áŸ…ážŠáž›áŸ‹áž‚áž˜áŸ’ážšáŸ„áž„áž’áŸ†",
      b5: "áž‡áž½áž™ážŸáž˜áŸ’ážšáž”ážŸáž˜áŸ’ážšáž½áž›áž”áž¶áž“áž›áŸ’áž¢áž”áŸ’ážšážŸáž¾ážšáž“áŸ…áž–áŸáž›áž˜áž¶áž“áž áŸážáž»áž€áž¶ážšážŽáŸáž”áž“áŸ’áž‘áž¶áž“áŸ‹",

      guideTitle: "áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸáž‡áŸ’ážšáž¾ážŸážšáž¾ážŸ Speaker áž“áž·áž„áž•áŸ‚áž“áž€áž¶ážšáž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹ PA (áž€áž˜áŸ’áž–áž»áž‡áž¶)",
      guideSub:
        "áž‡áŸ’ážšáž¾ážŸáž”áŸ’ážšáž—áŸáž‘ PA speaker ážŠáŸ‚áž›ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‚áž˜áŸ’ážšáŸ„áž„áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ” áž•áŸ’áž‚áž¼áž•áŸ’áž‚áž„áž…áž˜áŸ’áž„áž¶áž™áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹ áž€áž˜áŸ’ážšáž·ážážŸáŸ†áž¡áŸáž„ážšáŸ†ážáž¶áž“ áž“áž·áž„ážœáž·áž’áž¸ážŠáŸ†áž¡áž¾áž„ ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™ paging áž…áŸ’áž”áž¶ážŸáŸ‹áž›áž¶ážŸáŸ‹ áž€áŸ’áž“áž»áž„ážŸáž¶áž›áž¶ážšáŸ€áž“ ážšáŸ„áž„áž…áž€áŸ’ážš áž•áŸ’ážŸáž¶ážš áž˜áž“áŸ’áž‘áž¸ážšáž–áŸáž‘áŸ’áž™ áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ážŸáž¶áž’áž¶ážšážŽáŸˆáŸ”",
      guideRows: [
        ["ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“ & áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ†", "Ceiling / Wall Speakers", "ážŸáŸ†áž¡áŸáž„áž“áž·áž™áž¶áž™áž…áŸ’áž”áž¶ážŸáŸ‹ áž“áž·áž„áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹ážŸáŸ’áž˜áž¾áŸ—áž‚áŸ’áž“áž¶"],
        ["áž…áŸ’ážšáž€ážŠáž¾ážš & Lobby", "Wall Speakers", "Paging ážáž¶áž˜áž‘áž·ážŸážŠáŸ…ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž•áŸ’áž›áž¼ážœážŠáž¾ážš"],
        ["ážšáŸ„áž„áž…áž€áŸ’ážš & ážƒáŸ’áž›áž¶áŸ†áž„", "Horn Speakers", "ážŸáŸ†áž¡áŸáž„ážáŸ’áž›áž¶áŸ†áž„ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáŸ†áž”áž“áŸ‹áž˜áž¶áž“ážŸáŸ†áž¡áŸáž„ážšáŸ†ážáž¶áž“ážáŸ’áž–ážŸáŸ‹"],
        ["áž‘áž¸áž’áŸ’áž›áž¶ & áž…áŸ’ážšáž€áž…áŸáž‰áž…áž¼áž›ážáž¶áž„áž€áŸ’ážšáŸ…", "Weatherproof Horn Speakers", "áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹áž…áž˜áŸ’áž„áž¶áž™áž†áŸ’áž„áž¶áž™"],
        ["Retail & áž•áŸ’ážŸáž¶ážš", "Ceiling / Pendant Speakers", "Paging áž“áž·áž„ážŸáŸ†áž¡áŸáž„áž•áŸ’áž‘áŸƒážáž¶áž„áž€áŸ’ážšáŸ„áž™áž˜áž¶áž“ážáž»áž›áŸ’áž™áž—áž¶áž–"],
      ] as [string, string, string][],

      compTitle: "ážŸáž˜áž¶ážŸáž—áž¶áž‚ áž“áž·áž„ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA (áž€áž˜áŸ’áž–áž»áž‡áž¶)",
      compSub:
        "áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA áž–áŸáž‰áž›áŸáž‰ážšáž½áž˜áž˜áž¶áž“áž”áŸ’ážšáž—áž–ážŸáŸ†áž¡áŸáž„ áž€áž¶ážšáž›áž¶áž™/áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„ áž€áž¶ážšáž–áž„áŸ’ážšáž¸áž€ážŸáŸ†áž¡áŸáž„ áž“áž·áž„áž”áŸ’ážšáž—áŸáž‘ speaker ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœážŸáž˜áŸ’ážšáž¶áž”áŸ‹ zone áž“áž¸áž˜áž½áž™áŸ—áŸ” áž”áŸ’ážšáž¾ checklist áž“áŸáŸ‡ážŠáž¾áž˜áŸ’áž”áž¸ážšáŸ€áž”áž…áŸ†áž”áŸ’ážšáž–áŸáž“áŸ’áž’áž•áŸ’ážŸáž¶áž™ážŸáŸ†áž¡áŸáž„ážŸáž¶áž’áž¶ážšážŽáŸˆážŠáŸ‚áž›áž¢áž¶áž…áž–áž„áŸ’ážšáž¸áž€áž”áž¶áž“ áž“áž·áž„áž‘áž»áž€áž…áž·ážáŸ’ážáž”áž¶áž“ ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážšáŸ„áž„áž…áž€áŸ’ážš ážŸáž¶áž›áž¶ážšáŸ€áž“ áž•áŸ’ážŸáž¶ážš áž˜áž“áŸ’áž‘áž¸ážšáž–áŸáž‘áŸ’áž™ áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ážŸáž¶áž’áž¶ážšážŽáŸˆáž‘áž¼áž‘áž¶áŸ†áž„áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ”",
      c1: "Mixer & Amplifier",
      c1d: "áž”áŸ’ážšáž–áŸáž“áŸ’áž’ mixing áž“áž·áž„ amplification áž˜áž¶áž“ headroom ážáŸ’áž–ážŸáŸ‹ ážŠáž¾áž˜áŸ’áž”áž¸ážšáž€áŸ’ážŸáž¶ážŸáŸ†áž¡áŸáž„áž“áž·áž™áž¶áž™áž±áŸ’áž™áž…áŸ’áž”áž¶ážŸáŸ‹ áž“áž·áž„ážáž»áž›áŸ’áž™áž—áž¶áž–ážáž“áŸ’ážáŸ’ážšáž¸ áž‘áŸ„áŸ‡áž“áŸ…áž€áž˜áŸ’ážšáž·ážážŸáŸ†áž¡áŸáž„ážáŸ’áž–ážŸáŸ‹áž€áŸážŠáŸ„áž™áŸ”",
      c2: "Paging Microphone",
      c2d: "Paging microphone áž˜áž¶áž“ priority override ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáž»ážŸáž“áŸ’ážáž·ážŸáž»áž áž€áž“áŸ’áž›áŸ‚áž„áž‘áž‘áž½áž›áž—áŸ’áž‰áŸ€ážœ áž“áž·áž„áž”áž“áŸ’áž‘áž”áŸ‹áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„ áž’áž¶áž“áž¶ážáž¶ážŸáž¶ážšáž”áž“áŸ’áž‘áž¶áž“áŸ‹ áž“áž·áž„ážŸáž¶ážšáž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒáž¢áž¶áž…áž†áŸ’áž›áž„áž€áž¶ážáŸ‹ážŸáŸ†áž¡áŸáž„ážšáŸ†ážáž¶áž“áž”áž¶áž“áŸ”",
      c3: "Wall & Ceiling Speaker",
      c3d: "Ceiling áž“áž·áž„ wall speaker ážšáž…áž“áž¶ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážšáž±áŸ’áž™ážŸáŸ’áž˜áž¾áŸ—áž‚áŸ’áž“áž¶ áž€áŸ’áž“áž»áž„ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“ áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ áž…áŸ’ážšáž€ážŠáž¾ážš áž“áž·áž„ážáŸ†áž”áž“áŸ‹áž›áž€áŸ‹ážšáž¶áž™áŸ”",
      c4: "Horn Speaker",
      c4d: "Horn speaker áž’áž“áŸ‹áž¢áž¶áž€áž¶ážŸáž’áž¶ážáž» ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹áž…áž˜áŸ’áž„áž¶áž™áž†áŸ’áž„áž¶áž™ áž“áŸ…ážšáŸ„áž„áž…áž€áŸ’ážš loading bay áž…áŸ’ážšáž€áž…áŸáž‰áž…áž¼áž› áž“áž·áž„áž‘áž¸áž’áŸ’áž›áž¶ážáž¶áž„áž€áŸ’ážšáŸ…ážŠáŸ‚áž›áž˜áž¶áž“ážŸáŸ†áž¡áŸáž„ážšáŸ†ážáž¶áž“ážáŸ’áž–ážŸáŸ‹áŸ”",
      c5: "Zone Controller",
      c5d: "Zone controller áž“áž·áž„ matrix áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„ routing, scheduling áž“áž·áž„ priority paging ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™ážŸáž¶ážšážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœáž‘áŸ…ážŠáž›áŸ‹ážáŸ†áž”áž“áŸ‹ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ áž“áŸ…áž–áŸáž›ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœáŸ”",
      c6: "ážáŸ’ážŸáŸ‚ áž“áž·áž„áž‚áŸ’ážšáž¿áž„áž”áž“áŸ’áž›áž¶ážŸáŸ‹",
      c6d: "áž€áž¶ážšážŠáž¶áž€áŸ‹ážáŸ’ážŸáŸ‚ Rack, Mount áž“áž·áž„ surge protection ážáž¶áž˜ážŸáŸ’ážáž„áŸ‹ážŠáž¶ážš áž‡áž½áž™áž”áž„áŸ’áž€áž¾áž“áž—áž¶áž–áž‘áž»áž€áž…áž·ážáŸ’áž ážŸáž˜áŸ’ážšáž½áž›ážáŸ‚áž‘áž¶áŸ† áž“áž·áž„ážšáž€áŸ’ážŸáž¶áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA áž±áŸ’áž™ážŸáž˜ážŸáŸ’ážšáž”ážáž¶áž˜ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–áž‘áž¸ážáž¶áŸ†áž„áŸ”",

      chooseTitle: "áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸáž‡áŸ’ážšáž¾ážŸážšáž¾ážŸáž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA ážšáž”ážŸáŸ‹ Mugnee ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž˜áŸ’áž–áž»áž‡áž¶",
      chooseSub:
        "Mugnee Cambodia áž‡áž½áž™áž¢áŸ’áž“áž€áž‡áŸ’ážšáž¾ážŸáž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA ážŠáŸ‚áž›ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž¢áž‚áž¶ážš ážŠáŸ„áž™áž•áŸ’áž¢áŸ‚áž€áž›áž¾ážáŸ†áž”áž“áŸ‹áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹ ážŸáŸ†áž¡áŸáž„ážšáŸ†ážáž¶áž“ áž“áž·áž„ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–áŸ” áž”áŸ’ážšáž¾áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸáž“áŸáŸ‡ážŠáž¾áž˜áŸ’áž”áž¸ážšáŸ€áž”áž…áŸ† paging ážáž¶áž˜ zone áž‡áŸ’ážšáž¾ážŸáž”áŸ’ážšáž—áŸáž‘ speaker áž€áŸ’áž“áž»áž„/áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš áž‚ážŽáž“áž¶áž€áž˜áŸ’áž›áž¶áŸ†áž„ amplifier áž“áž·áž„áž€áŸ†ážŽážáŸ‹ priority/emergency override ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™áž€áž¶ážšáž”áŸ’ážšáž€áž¶ážŸáž…áŸ’áž”áž¶ážŸáŸ‹áž›áž¶ážŸáŸ‹áž€áŸ’áž“áž»áž„ážšáŸ„áž„áž…áž€áŸ’ážš ážŸáž¶áž›áž¶ážšáŸ€áž“ áž•áŸ’ážŸáž¶ážš áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ áž˜áž“áŸ’áž‘áž¸ážšáž–áŸáž‘áŸ’áž™ áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ážŸáž¶áž’áž¶ážšážŽáŸˆáŸ” áž™áž¾áž„áž€áŸáž‚áž·ážáž‚áž¼ážšáž¢áŸ†áž–áž¸áž¢áž¶áž‚áž¼ážŸáŸ’áž‘áž·áž…áž”áž“áŸ’áž‘áž”áŸ‹ áž€áž˜áŸ’áž–ážŸáŸ‹ážŠáŸ†áž¡áž¾áž„ ážážœáž·áž€áž¶ážáž¶áž˜áž–áž› áž“áž·áž„áž€áž¶ážšáž–áž„áŸ’ážšáž¸áž€áž“áž¶áž–áŸáž›áž¢áž“áž¶áž‚ážáž•áž„ážŠáŸ‚ážšáŸ”",
      s1: "áž‘áŸ†áž áŸ†áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹ áž“áž·áž„áž…áŸ†áž“áž½áž“ zone",
      s2: "áž”áŸ’ážšáž—áŸáž‘ speaker áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš áž“áž·áž„áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš",
      s3: "ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšážáž¶áž˜áž–áž› áž“áž·áž„ážœáŸ‰áž¶ážáŸ‹",
      s4: "ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšáž¢áž¶áž‘áž·áž—áž¶áž–áž‚áŸ’ážšáž¶áž¢áž¶ážŸáž“áŸ’áž“ áž“áž·áž„áž”áŸ’ážšáž–áŸáž“áŸ’áž’áž”áž˜áŸ’ážšáž»áž„",
      s5: "áž€áž¶ážšážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž›áž‡áž¶áž˜áž½áž™ security áž¬ fire system",

      gridTitle: "áž•áž›áž·ážáž•áž›áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA",
      gridSub:
        "ážŸáŸ’ážœáŸ‚áž„ážšáž€ amplifier, mixer, speaker, microphone áž“áž·áž„áž‚áŸ’ážšáž¿áž„áž”áž“áŸ’áž›áž¶ážŸáŸ‹ ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‚áž˜áŸ’ážšáŸ„áž„áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ”",

      useTitle: "áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      useSub:
        "ážŸáŸ’ážœáŸ‚áž„áž™áž›áŸ‹áž–áž¸áž€ážšážŽáž¸áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA ážŠáŸ‚áž›áž–áŸáž‰áž“áž·áž™áž˜áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ áž…áž¶áž”áŸ‹áž–áž¸ážšáŸ„áž„áž…áž€áŸ’ážš áž“áž·áž„ážŸáž¶áž›áž¶ážšáŸ€áž“ ážšáž áž¼ážážŠáž›áŸ‹áž˜áž“áŸ’áž‘áž¸ážšáž–áŸáž‘áŸ’áž™ áž•áŸ’ážŸáž¶ážš ážŸážŽáŸ’áž‹áž¶áž‚áž¶ážš áž“áž·áž„ážŸáŸ’ážáž¶áž”áŸáž“ážšážŠáŸ’áž‹áŸ” áž”ážšáž·áž™áž¶áž€áž¶ážŸáž“áž¸áž˜áž½áž™áŸ—ážáŸ’ážšáž¼ážœáž€áž¶ážšáž”áŸ’ážšáž—áŸáž‘ speaker áž¢áž¶áž‘áž·áž—áž¶áž– paging áž“áž·áž„ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’ zone ážáž»ážŸáŸ—áž‚áŸ’áž“áž¶ ážŠáž¾áž˜áŸ’áž”áž¸áž’áž¶áž“áž¶áž€áž¶ážšáž”áŸ’ážšáž€áž¶ážŸáž…áŸ’áž”áž¶ážŸáŸ‹ áž“áž·áž„ážŸáž¶ážšážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–áŸ”",
      u1t: "ážšáŸ„áž„áž…áž€áŸ’ážš & ážƒáŸ’áž›áž¶áŸ†áž„",
      u1d: "áž áŸ…ážœáŸáž“áž€áž¶ážšáž„áž¶ážš ážŸáž¶ážšáž‡áž¼áž“ážŠáŸ†ážŽáž¹áž„ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„áž”áž…áŸ’áž…áž»áž”áŸ’áž”áž“áŸ’áž“áž—áž¶áž–áž•áž›áž·ážáž€áž˜áŸ’áž˜ áž€áŸ’áž“áž»áž„ážáŸ†áž”áž“áŸ‹áž˜áž¶áž“ážŸáŸ†áž¡áŸáž„ážšáŸ†ážáž¶áž“ážáŸ’áž–ážŸáŸ‹áŸ”",
      u2t: "ážŸáž¶áž›áž¶ážšáŸ€áž“ & Campus",
      u2d: "Paging áž€áŸ’áž“áž»áž„ážáŸ’áž“áž¶áž€áŸ‹ ážŸáž¶ážšáž‡áž¼áž“ážŠáŸ†ážŽáž¹áž„áž€áž¶ážšáž”áŸ’ážšáž‡áž»áŸ† áž“áž·áž„áž€áž¶ážšáž”áŸ’ážšáž€áž¶ážŸáž‘áž¼áž‘áž¶áŸ†áž„ campus ážŠáŸ„áž™ multi-zone schedulingáŸ”",
      u3t: "áž˜áž“áŸ’áž‘áž¸ážšáž–áŸáž‘áŸ’áž™ & áž‚áŸ’áž›áž¸áž“áž·áž€",
      u3d: "ážŸáž¶ážšáž”áž“áŸ’áž‘áž¶áž“áŸ‹ áž€áž¶ážšážŸáž˜áŸ’ážšáž”ážŸáž˜áŸ’ážšáž½áž›áž”áž»áž‚áŸ’áž‚áž›áž·áž€ áž“áž·áž„áž‘áŸ†áž“áž¶áž€áŸ‹áž‘áŸ†áž“áž„áž‡áž¶áž˜áž½áž™áž¢áŸ’áž“áž€áž‡áŸ†áž„ážº ážŠáŸ„áž™ priority overrideáŸ”",
      u4t: "Retail & áž•áŸ’ážŸáž¶ážšáž‘áŸ†áž“áž¾áž”",
      u4d: "áž€áž¶ážšáž”áŸ’ážšáž€áž¶ážŸáž¢ážáž·ážáž·áž‡áž“ ážŸáž¶ážšáž•áŸ’ážŸáž–áŸ’ážœáž•áŸ’ážŸáž¶áž™ áž“áž·áž„ážŸáŸ†áž¡áŸáž„áž•áŸ’áž‘áŸƒážáž¶áž„áž€áŸ’ážšáŸ„áž™áž±áŸ’áž™ážŸáŸ’ážáž·ážšáž—áž¶áž–ážáž¶áž˜ážáŸ†áž”áž“áŸ‹áž›áž€áŸ‹ážšáž¶áž™áŸ”",
      u5t: "ážŸážŽáŸ’áž‹áž¶áž‚áž¶ážš & áž‘áž¸ážáž¶áŸ†áž„ážŸáž¶áž’áž¶ážšážŽáŸˆ",
      u5d: "áž€áž¶ážšáž”áŸ’ážšáž€áž¶ážŸáž–áŸ’ážšáž¹ážáŸ’ážáž·áž€áž¶ážšážŽáŸ áž€áž¶ážšážŽáŸ‚áž“áž¶áŸ†áž—áŸ’áž‰áŸ€ážœ áž“áž·áž„ paging ážáž¶áž˜ zone ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ lobby ážŸáž¶áž› áž“áž·áž„ážáŸ†áž”áž“áŸ‹áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážšáŸ”",
      u6t: "áž¢áž¶áž€áž¶ážŸáž™áž¶áž“ážŠáŸ’áž‹áž¶áž“ & ážŸáŸ’ážáž¶áž”áŸáž“ážšážŠáŸ’áž‹",
      u6d: "áž€áž¶ážšáž”áŸ’ážšáž€áž¶ážŸážŸáž¶áž’áž¶ážšážŽáŸˆ ážŸáž¶ážšážŸáž“áŸ’ážáž·ážŸáž»áž áž“áž·áž„áž€áž¶ážšážŽáŸ‚áž“áž¶áŸ†áž‡áž˜áŸ’áž›áŸ€ážŸážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž¢áž‚áž¶ážšáž’áŸ†áŸ—áŸ”",

      processTitle: "áž€áž¶ážšážŠáŸ†áž¡áž¾áž„ Setup áž“áž·áž„áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      processSub:
        "áž…áž¶áž”áŸ‹áž–áž¸ site survey ážŠáž›áŸ‹ commissioning áž…áž»áž„áž€áŸ’ážšáŸ„áž™ áž€áŸ’ážšáž»áž˜áž€áž¶ážšáž„áž¶ážšáž™áž¾áž„áž•áŸ’ážáž›áŸ‹ážŸáŸážœáž¶ážŠáŸ†áž¡áž¾áž„áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA áž–áŸáž‰áž›áŸáž‰áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ” áž™áž¾áž„ážšáŸ€áž”áž…áŸ†áž•áŸ‚áž“áž€áž¶ážšáž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹ ážŠáž¶áž€áŸ‹ážáŸ’ážŸáŸ‚áž±áŸ’áž™ážŸáŸ’áž¢áž¶áž áž€áŸ†ážŽážáŸ‹ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’áž§áž”áž€ážšážŽáŸ áž“áž·áž„áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾ ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™áž€áž¶ážšáž”áŸ’ážšáž€áž¶ážŸáž…áŸ’áž”áž¶ážŸáŸ‹ ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„áž‘áž»áž€áž…áž·ážáŸ’ážáž”áž¶áž“áž™áž¼ážšáž¢áž„áŸ’ážœáŸ‚áž„áŸ”",
      p1: "Site survey, ážœáž¶ážŸáŸ‹ážŸáŸ†áž¡áŸáž„ážšáŸ†ážáž¶áž“ áž“áž·áž„ážšáŸ€áž”áž…áŸ†áž•áŸ‚áž“áž€áž¶ážšáž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹",
      p1d:
        "ážœáž¶áž™ážáž˜áŸ’áž›áŸƒáž‘áŸ†áž áŸ†áž”áž“áŸ’áž‘áž”áŸ‹ áž€áž˜áŸ’ážšáž·ážážŸáŸ†áž¡áŸáž„ážšáŸ†ážáž¶áž“ áž“áž·áž„áž…áŸ†ážŽáž»áž…ážŠáŸ†áž¡áž¾áž„ ážŠáž¾áž˜áŸ’áž”áž¸áž‚ážŽáž“áž¶áž…áŸ†áž“áž½áž“ speaker áž‘áž¸ážáž¶áŸ†áž„ážŠáž¶áž€áŸ‹ áž“áž·áž„ážáŸ†áž”áž“áŸ‹áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹áŸ”",
      p2: "ážšáž…áž“áž¶áž”áŸ’ážšáž–áŸáž“áŸ’áž’ áž‡áŸ’ážšáž¾ážŸáž§áž”áž€ážšážŽáŸ áž“áž·áž„ layout ážáž¶áž˜ zone",
      p2d:
        "áž‡áŸ’ážšáž¾ážŸ amplifier, mixer, paging microphone áž“áž·áž„ speaker ážŠáŸ‚áž›ážŸáž˜áž“áž¹áž„ážáž¶áž˜áž–áž› impedance áž“áž·áž„ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áŸ”",
      p3: "ážŠáŸ†áž¡áž¾áž„ ážŠáž¶áž€áŸ‹ážáŸ’ážŸáŸ‚ ážŠáž¶áž€áŸ‹ážŸáŸ’áž›áž¶áž€ áž“áž·áž„ážáž˜áŸ’ážšáž¼ážœážŸáŸ†áž¡áŸáž„",
      p3d:
        "ážŠáž¶áž€áŸ‹ážáŸ’ážŸáŸ‚áž±áŸ’áž™ážŸáŸ’áž¢áž¶áž ážŠáž¶áž€áŸ‹ážŸáŸ’áž›áž¶áž€áž‚áŸ’ážšáž”áŸ‹ážáŸ’ážŸáŸ‚ áž€áŸ†ážŽážáŸ‹ controller áž“áž·áž„ážáž˜áŸ’ážšáž¼ážœ EQ/Volume ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™ážŸáŸ†áž¡áŸáž„áž“áž·áž™áž¶áž™áž…áŸ’áž”áž¶ážŸáŸ‹áŸ”",
      p4: "áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾ áž¯áž€ážŸáž¶ážš áž“áž·áž„áž‚áž¶áŸ†áž‘áŸ’ážšáž€áž¶ážšáž”áŸ’ážšáž‚áž›áŸ‹",
      p4d:
        "áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž”áž»áž‚áŸ’áž‚áž›áž·áž€áž›áž¾ paging, scheduling áž“áž·áž„ emergency override áž‡áž¶áž˜áž½áž™áž¯áž€ážŸáž¶ážšáž–áŸáž‰áž›áŸáž‰ áž“áž·áž„ážŽáŸ‚áž“áž¶áŸ†ážáŸ‚áž‘áž¶áŸ†áŸ”",

      faqTitle: "ážŸáŸ†ážŽáž½ážšáž‰áž¹áž€áž‰áž¶áž”áŸ‹áž¢áŸ†áž–áž¸áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž¢áŸ’áž“áž€áž‘áž·áž‰áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      finalTitle: "ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒážáž¶áž˜áž‚áž˜áŸ’ážšáŸ„áž„",
      finalSub:
        "ážŸáž¼áž˜áž”áŸ’ážšáž¶áž”áŸ‹áž‘áŸ†áž áŸ†áž¢áž‚áž¶ážš áž…áŸ†áž“áž½áž“ zone áž“áž·áž„áž‚áŸ„áž›áž”áŸ†ážŽáž„áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ (ážšáŸ„áž„áž…áž€áŸ’ážš ážŸáž¶áž›áž¶ážšáŸ€áž“ áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ áž¬áž•áŸ’ážŸáž¶ážš)áŸ” áž™áž¾áž„áž“áž¹áž„ážŽáŸ‚áž“áž¶áŸ†áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA ážŠáŸ‚áž›ážŸáž˜ážŸáŸ’ážšáž” áž“áž·áž„áž•áŸ’ážáž›áŸ‹ážáž˜áŸ’áž›áŸƒáž…áŸ’áž”áž¶ážŸáŸ‹áž›áž¶ážŸáŸ‹áŸ”",
      finalCta: "áž‘áž¶áž€áŸ‹áž‘áž„ áž“áž·áž„ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒ",
      viewProducts: "áž˜áž¾áž›áž•áž›áž·ážáž•áž›",
      note:
        "áž…áŸ†ážŽáž¶áŸ†áŸ– ážáž˜áŸ’áž›áŸƒáž…áž»áž„áž€áŸ’ážšáŸ„áž™áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾ážáŸ†áž”áž“áŸ‹áž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹ áž…áŸ†áž“áž½áž“ zone áž”áŸ’ážšáž—áŸáž‘ speaker áž…áž˜áŸ’áž„áž¶áž™ážáŸ’ážŸáŸ‚ áž“áž·áž„áž›áž€áŸ’ážážážŽáŸ’ážŒážŠáŸ†áž¡áž¾áž„áŸ”",
      getQuote: "ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒ",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const faqs: FAQ[] = useMemo(
    () => [
      {
        qEn: "What is a PA system and where is it used in Cambodia?",
        aEn:
          "A PA (public address) system amplifies voice and music to multiple speakers across zones. In Cambodia, it is widely used in factories, schools, hospitals, malls, hotels, and public venues for paging, safety alerts, and daily announcements.",
        qKm: "PA System áž‚ážºáž¢áŸ’ážœáž¸ áž áž¾áž™áž”áŸ’ážšáž¾áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áž€áŸ’áž“áž»áž„áž€áž“áŸ’áž›áŸ‚áž„ážŽáž¶ážáŸ’áž›áŸ‡?",
        aKm:
          "PA (public address) system áž‡áž¶áž”áŸ’ážšáž–áŸáž“áŸ’áž’áž”áŸ†áž–áž„ážŸáŸ†áž¡áŸáž„áž‘áŸ… speaker áž…áŸ’ážšáž¾áž“ážáž¶áž˜ážáŸ†áž”áž“áŸ‹áž•áŸ’ážŸáŸáž„áŸ—áŸ” áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ ážœáž¶ážáŸ’ážšáž¼ážœáž”áž¶áž“áž”áŸ’ážšáž¾áž™áŸ‰áž¶áž„áž‘áž¼áž›áŸ†áž‘áž¼áž›áž¶áž™áž“áŸ…ážšáŸ„áž„áž…áž€áŸ’ážš ážŸáž¶áž›áž¶ážšáŸ€áž“ áž˜áž“áŸ’áž‘áž¸ážšáž–áŸáž‘áŸ’áž™ áž•áŸ’ážŸáž¶ážš ážŸážŽáŸ’áž‹áž¶áž‚áž¶ážš áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ážŸáž¶áž’áž¶ážšážŽáŸˆážŸáž˜áŸ’ážšáž¶áž”áŸ‹ paging, safety alert áž“áž·áž„ážŸáŸáž…áž€áŸ’ážáž¸áž”áŸ’ážšáž€áž¶ážŸáž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒáŸ”",
      },
      {
        qEn: "How do I choose speakers for factories, schools, or retail?",
        aEn:
          "Speaker type depends on noise level and coverage. Horn speakers suit factories and outdoor yards, while ceiling or wall speakers are ideal for classrooms, offices, corridors, and retail areas for even indoor coverage.",
        qKm: "ážáž¾ážáŸ’áž‰áž»áŸ†áž‡áŸ’ážšáž¾ážŸ speaker ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážšáŸ„áž„áž…áž€áŸ’ážš ážŸáž¶áž›áž¶ážšáŸ€áž“ áž¬ retail áž™áŸ‰áž¶áž„ážŠáž¼áž…áž˜áŸ’ážáŸáž…?",
        aKm:
          "áž”áŸ’ážšáž—áŸáž‘ speaker áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾áž€áž˜áŸ’ážšáž·ážážŸáŸ†áž¡áŸáž„ážšáŸ†ážáž¶áž“ áž“áž·áž„ážáŸ†áž”áž“áŸ‹ coverageáŸ” Horn speaker ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážšáŸ„áž„áž…áž€áŸ’ážš áž“áž·áž„ážáŸ†áž”áž“áŸ‹áž€áŸ’ážšáŸ…áž¢áž¶áž‚áž¶ážš ážážŽáŸˆ ceiling/wall speaker ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ classroom, office, corridor áž“áž·áž„ retail area áž€áŸ’áž“áž»áž„áž¢áž¶áž‚áž¶ážšáŸ”",
      },
      {
        qEn: "How many zones should a PA system have?",
        aEn:
          "Zone count depends on your site layout. We typically separate offices, production floors, corridors, and outdoor areas so messages can be targeted without disturbing other zones.",
        qKm: "PA System áž‚áž½ážšáž˜áž¶áž“áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ zone?",
        aKm:
          "áž…áŸ†áž“áž½áž“ zone áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾ layout áž‘áž¸ážáž¶áŸ†áž„ážšáž”ážŸáŸ‹áž¢áŸ’áž“áž€áŸ” áž‡áž¶áž‘áž¼áž‘áŸ…áž™áž¾áž„áž”áŸ‚áž„áž…áŸ‚áž€ office, production floor, corridor áž“áž·áž„ outdoor area ážŠáž¾áž˜áŸ’áž”áž¸áž•áŸ’ážŸáž¶áž™ážŸáž¶ážšážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœážŠáŸ„áž™áž˜áž·áž“ážšáŸ†ážáž¶áž“ážáŸ†áž”áž“áŸ‹áž•áŸ’ážŸáŸáž„áŸ”",
      },
      {
        qEn: "What amplifier power do I need for clear paging?",
        aEn:
          "Amplifier power depends on speaker quantity, wattage, cable distance, and ambient noise. Our engineers calculate load and headroom so speech stays clear without distortion.",
        qKm: "ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ paging áž²áŸ’áž™áž…áŸ’áž”áž¶ážŸáŸ‹ ážáž¾ážáŸ’ážšáž¼ážœáž€áž¶ážšáž€áž˜áŸ’áž›áž¶áŸ†áž„ amplifier áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“?",
        aKm:
          "áž€áž˜áŸ’áž›áž¶áŸ†áž„ amplifier áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾áž…áŸ†áž“áž½áž“ speaker, wattage, áž…áž˜áŸ’áž„áž¶áž™ážáŸ’ážŸáŸ‚ áž“áž·áž„ážŸáŸ†áž¡áŸáž„ážšáŸ†ážáž¶áž“áž‡áž»áŸ†ážœáž·áž‰áŸ” ážœáž·ážŸáŸ’ážœáž€ážšáž™áž¾áž„áž‚ážŽáž“áž¶ load áž“áž·áž„ headroom ážŠáž¾áž˜áŸ’áž”áž¸ážšáž€áŸ’ážŸáž¶ážŸáŸ†áž¡áŸáž„áž²áŸ’áž™áž…áŸ’áž”áž¶ážŸáŸ‹ážŠáŸ„áž™áž‚áŸ’áž˜áž¶áž“ distortionáŸ”",
      },
      {
        qEn: "Can a PA system integrate with fire alarm or security?",
        aEn:
          "Yes. We can integrate priority paging and emergency override with fire alarm or security systems so evacuation messages play instantly in critical zones.",
        qKm: "PA System áž¢áž¶áž… integrate áž‡áž¶áž˜áž½áž™ fire alarm áž¬ security áž”áž¶áž“áž‘áŸ?",
        aKm:
          "áž”áž¶áž“áŸ” áž™áž¾áž„áž¢áž¶áž… integrate priority paging áž“áž·áž„ emergency override áž‡áž¶áž˜áž½áž™ fire alarm áž¬ security system ážŠáž¾áž˜áŸ’áž”áž¸áž¢áŸ„áž™ážŸáž¶ážšáž‡áž˜áŸ’áž›áŸ€ážŸáž…áŸáž‰áž•áŸ’ážŸáž¶áž™áž—áŸ’áž›áž¶áž˜áŸ—áž“áŸ… critical zoneáŸ”",
      },
      {
        qEn: "Do you install both indoor and outdoor PA systems?",
        aEn:
          "Yes. We supply indoor ceiling and wall speakers as well as weatherâ€‘resistant outdoor horn or column speakers for yards, gates, and large open areas.",
        qKm: "ážáž¾áž¢áŸ’áž“áž€ážŠáŸ†áž¡áž¾áž„áž‘áž¶áŸ†áž„ Indoor áž“áž·áž„ Outdoor PA System ážŠáŸ‚ážšáž¬áž‘áŸ?",
        aKm:
          "áž”áž¶áž‘/áž…áž¶ážŸáŸ” áž™áž¾áž„áž•áŸ’áž‚ážáŸ‹áž•áŸ’áž‚áž„áŸ‹ indoor ceiling/wall speaker áž“áž·áž„ outdoor horn/column speaker ážŠáŸ‚áž›áž’áž“áŸ‹áž¢áž¶áž€áž¶ážŸáž’áž¶ážáž» ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ yard, gate áž“áž·áž„áž‘áž¸áž’áŸ’áž›áž¶áž’áŸ†áŸ”",
      },
      {
        qEn: "How long does PA system installation take in Cambodia?",
        aEn:
          "Timeline depends on site size and zone count. Small offices can be completed quickly, while factories or campuses may take longer for cabling, tuning, and testing.",
        qKm: "áž€áž¶ážšážŠáŸ†áž¡áž¾áž„ PA System áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ áž…áŸ†ážŽáž¶áž™áž–áŸáž›áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“?",
        aKm:
          "Timeline áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾áž‘áŸ†áž áŸ† site áž“áž·áž„áž…áŸ†áž“áž½áž“ zoneáŸ” Office ážáž¼áž…áž¢áž¶áž…áž”áž‰áŸ’áž…áž”áŸ‹áž”áž¶áž“áž›áž¿áž“ ážážŽáŸˆ factory áž¬ campus áž¢áž¶áž…áž…áŸ†ážŽáž¶áž™áž–áŸáž›áž”áž“áŸ’ážáŸ‚áž˜ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ cabling, tuning áž“áž·áž„ testingáŸ”",
      },
      {
        qEn: "Do you provide warranty and afterâ€‘sales support?",
        aEn:
          "Yes. We provide commissioning, user training, and maintenance options. Warranty depends on equipment type and configuration, and local support is available in Cambodia.",
        qKm: "ážáž¾áž¢áŸ’áž“áž€áž•áŸ’ážáž›áŸ‹ warranty áž“áž·áž„ after-sales support ážŠáŸ‚ážšáž¬áž‘áŸ?",
        aKm:
          "áž•áŸ’ážáž›áŸ‹áž‡áž¼áž“áŸ” áž™áž¾áž„áž˜áž¶áž“ commissioning, user training áž“áž·áž„ maintenance optionáŸ” áž›áž€áŸ’ážážážŽáŸ’ážŒ warranty áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾áž”áŸ’ážšáž—áŸáž‘áž§áž”áž€ážšážŽáŸ áž“áž·áž„ configuration áž áž¾áž™áž˜áž¶áž“ local support áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ”",
      },
    ],
    []
  );

  const jsonLd = useMemo(() => {
    const site =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";
    const url = site + "/pa-system";

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site },
        { "@type": "ListItem", position: 2, name: "PA System", item: url },
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

    const itemList = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: PRODUCTS.filter((p) => p.primaryCategoryId === "pa_system")
        .slice(0, 8)
        .map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: lang === "en" ? p.titleEn : p.titleKm,
          url: url + "#products",
        })),
    };

    return { breadcrumb, faqSchema, itemList };
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.itemList) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,132,199,0.14),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.07),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background:radial-gradient(circle_at_1px_1px,rgba(0,0,0,.28)_1px,transparent_0)] [background-size:18px_18px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="text-xs text-slate-500">
            
            <span className="font-semibold text-slate-700">
              {lang === "en" ? "PA System" : "áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA"}
            </span>
          </div>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] text-slate-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            {t.badge}
          </div>

          <div className="mt-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.h1}</h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-700/90 sm:text-base max-w-none">
                {t.sub}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <Link
                  href="/contact"
                  className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  {t.cta1}
                </Link>
                <a
                  href="#products"
                  className="rounded-xl border border-slate-200 bg-white/85 px-4 py-2.5 text-sm font-semibold text-slate-900 backdrop-blur hover:bg-white"
                >
                  {t.cta2}
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* HERO PRODUCTS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.gridTitle}
          </h2>
          <p className="mt-2 text-slate-600">{t.gridSub}</p>

          <div className="mt-6">
            <ProductGrid
              columns={3}
              pageSize={9}
              allowedCategoryIds={["pa_system","pa_speakers","pa_microphones","pa_amplifiers","pa_controllers","pa_network","pa_software","pa_accessories"]}
              filterCategoryIds={["pa_speakers","pa_microphones","pa_amplifiers","pa_controllers","pa_network","pa_software","pa_accessories"]}
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
                <div className="text-sm font-semibold text-slate-900">{t.quickTitle}</div>
                <div className="mt-1 text-xs text-slate-600">{t.quickSub}</div>
              </div>
              <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 sm:block">
                {lang === "en" ? "Quick Links" : "ážáŸ†ážŽážšáž áŸážŸ"}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {(
                lang === "en"
                  ? [
                      { label: "Specifications", href: "#specs" },
                      { label: "Basics", href: "#basics" },
                      { label: "Coverage Guide", href: "#coverage-guide" },
                      { label: "Components", href: "#components" },
                      { label: "Selection Guide", href: "#selection-guide" },
                      { label: "Use Cases", href: "#use-cases" },
                      { label: "Products", href: "#products" },
                      { label: "Process", href: "#process" },
                      { label: "FAQ", href: "#faq" },
                      { label: "Get Quotation", href: "#contact" },
                    ]
                  : [
                      { label: "áž›áž€áŸ’ážážŽáŸˆáž”áž…áŸ’áž…áŸáž€áž‘áŸážŸ", href: "#specs" },
                      { label: "áž˜áž¼áž›ážŠáŸ’áž‹áž¶áž“", href: "#basics" },
                      { label: "áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸáž‚áŸ’ážšáž”ážŠážŽáŸ’ážáž”áŸ‹", href: "#coverage-guide" },
                      { label: "ážŸáž˜áž¶ážŸáž—áž¶áž‚", href: "#components" },
                      { label: "áž˜áž‚áŸ’áž‚áž»áž‘áŸ’áž‘áŸážŸáž€áŸáž‡áŸ’ážšáž¾ážŸážšáž¾ážŸ", href: "#selection-guide" },
                      { label: "áž€ážšážŽáž¸áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹", href: "#use-cases" },
                      { label: "áž•áž›áž·ážáž•áž›", href: "#products" },
                      { label: "ážŠáŸ†ážŽáž¾ážšáž€áž¶ážš", href: "#process" },
                      { label: "ážŸáŸ†ážŽáž½ážšáž‰áž¹áž€áž‰áž¶áž”áŸ‹", href: "#faq" },
                      { label: "ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒ", href: "#contact" },
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

      {/* BASICS */}
      <section id="basics" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {t.basicsLabel}
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {t.basicsTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.basicsDesc}
              </p>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                {t.howTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.howDesc}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">{t.benefitTitle}</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {[t.b1, t.b2, t.b3, t.b4, t.b5].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE GUIDE */}
      <section id="coverage-guide" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.guideTitle}</h2>
          <p className="mt-2 text-slate-600">{t.guideSub}</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 gap-0 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
              <div>{lang === "en" ? "Area Type" : "áž”áŸ’ážšáž—áŸáž‘ážáŸ†áž”áž“áŸ‹"}</div>
              <div>{lang === "en" ? "Recommended Speaker" : "Speaker ážŠáŸ‚áž›ážŽáŸ‚áž“áž¶áŸ†"}</div>
              <div>{lang === "en" ? "Typical Use" : "áž€áž¶ážšáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áž‘áž¼áž‘áŸ…"}</div>
            </div>
            <div className="divide-y divide-slate-200 text-sm text-slate-700">
              {t.guideRows.map((row) => (
                <div key={row[0]} className="grid grid-cols-3 gap-0 px-4 py-3">
                  <div className="font-semibold text-slate-900">{row[0]}</div>
                  <div>{row[1]}</div>
                  <div>{row[2]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.specsTitle}</h2>
          <p className="mt-2 text-slate-600">{t.specsSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SpecCard title={t.sCard1t} desc={t.sCard1d} />
            <SpecCard title={t.sCard2t} desc={t.sCard2d} />
            <SpecCard title={t.sCard3t} desc={t.sCard3d} />
            <SpecCard title={t.sCard4t} desc={t.sCard4d} />
            <SpecCard title={t.sCard5t} desc={t.sCard5d} />
            <SpecCard title={t.sCard6t} desc={t.sCard6d} />
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section id="components" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.compTitle}</h2>
          <p className="mt-2 text-slate-600">{t.compSub}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <KeyRow title={t.c1} desc={t.c1d} />
            <KeyRow title={t.c2} desc={t.c2d} />
            <KeyRow title={t.c3} desc={t.c3d} />
            <KeyRow title={t.c4} desc={t.c4d} />
            <KeyRow title={t.c5} desc={t.c5d} />
            <KeyRow title={t.c6} desc={t.c6d} />
          </div>
        </div>
      </section>

      {/* SELECTION GUIDE */}
      <section id="selection-guide" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.chooseTitle}</h2>
              <p className="mt-2 text-justify text-slate-600">{t.chooseSub}</p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <ul className="space-y-2 text-sm text-slate-700">
                  {[t.s1, t.s2, t.s3, t.s4, t.s5].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    {t.finalCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.useTitle}</h2>
          <p className="mt-2 text-slate-600">{t.useSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <UseCard title={t.u1t} desc={t.u1d} />
            <UseCard title={t.u2t} desc={t.u2d} />
            <UseCard title={t.u3t} desc={t.u3d} />
            <UseCard title={t.u4t} desc={t.u4d} />
            <UseCard title={t.u5t} desc={t.u5d} />
            <UseCard title={t.u6t} desc={t.u6d} />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}

      {/* PROCESS */}
      <section id="process" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.processTitle}</h2>
          <p className="mt-2 text-slate-600">{t.processSub}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n="01" title={t.p1} desc={t.p1d} />
            <StepCard n="02" title={t.p2} desc={t.p2d} />
            <StepCard n="03" title={t.p3} desc={t.p3d} />
            <StepCard n="04" title={t.p4} desc={t.p4d} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.faqTitle}</h2>

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
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">{t.finalTitle}</h3>
            <p className="mt-2 text-slate-600">{t.finalSub}</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                {t.finalCta}
              </Link>
              <a
                href="#products"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                {t.viewProducts}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function KeyRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-3">
      <div className="text-sm font-bold text-slate-900">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</div>
    </div>
  );
}

function UseCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function SpecCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="spec-card rounded-2xl bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-semibold text-slate-500">{n}</div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</div>
    </div>
  );
}

















