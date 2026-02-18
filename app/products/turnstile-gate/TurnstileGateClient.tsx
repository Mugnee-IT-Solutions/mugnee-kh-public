
"use client";

import Link from "next/link";
import { useMemo } from "react";
import ProductGrid from "../../components/sections/ProductGrid";
import { useLang } from "../../components/layout/LanguageProvider";
import { PRODUCTS } from "../../data/products";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };

export default function TurnstileGateClient() {
  const { lang } = useLang();

  const t = useMemo(() => {
    const en = {
      breadcrumb: "" ,
      badge: "Cambodia - Turnstile Gate - Access Control",
      h1: "Mugnee Turnstile Gate Solutions in Cambodia",
      sub:
        "Mugnee Cambodia delivers professional turnstile gate systems for secure entry control in offices, factories, schools, transport hubs, and public venues. We supply flap barriers, tripod turnstiles, speed gates, and full-height turnstiles with RFID, QR, and biometric integration, plus on-site installation, commissioning, and local after-sales support.",
      cta1: "Get a Free Quotation",
      cta2: "View Turnstile Products",

      quickTitle: "Browse turnstile categories and access control services",
      quickSub:
        "Quick links help you reach gate types, integrations, products, and support.",

      specsTitle: "Turnstile Gate Specifications & Features in Cambodia",
      specsSub:
        "Plan entry control with the right gate type, throughput, and security level for indoor and outdoor sites.",
      sCard1t: "Gate Types",
      sCard1d:
        "Tripod, flap barrier, speed gate, full-height, and swing gate options to match security levels and traffic volume.",
      sCard2t: "Access Methods",
      sCard2d:
        "Supports RFID cards, QR tickets, PIN, fingerprint, and face recognition with access control or attendance systems.",
      sCard3t: "Safety & Emergency",
      sCard3d:
        "Fire alarm linkage, emergency release, anti-tailgating logic, and fail-safe or fail-secure modes.",
      sCard4t: "Usage Environment",
      sCard4d:
        "Designed for indoor lobbies and outdoor sites with stainless-steel builds and weather-ready protection.",
      sCard5t: "Throughput",
      sCard5d:
        "Efficient lanes for controlled pedestrian flow with adjustable speed and clear status indicators.",
      sCard6t: "Installation",
      sCard6d:
        "Professional installation with proper foundations, wiring, controller setup, testing, and on-site training.",

      basicsLabel: "TURNSTILE BASICS",
      basicsTitle: "What Is a Turnstile Gate?",
      basicsDesc:
        "A turnstile gate is a physical access control device that regulates one-person-at-a-time entry into secure or managed areas. It helps prevent unauthorized access and tailgating, improves safety and crowd flow, and provides clear entry logs. Modern turnstile gates integrate with RFID cards, QR tickets, fingerprint, or face recognition, making them ideal for offices, factories, schools, stations, and public venues in Cambodia. They support security policies, attendance tracking, and visitor management while keeping entry organized and compliant.",
      howTitle: "How Does a Turnstile Gate Work?",
      howDesc:
        "The gate receives a signal from an access device (RFID, QR, biometric). If authorized, the barrier unlocks and allows entry while logging the event. System controllers handle access rules, time schedules, and reports.",
      benefitTitle: "Key Benefits for Cambodia Sites",
      b1: "Controlled entry and reduced tailgating",
      b2: "Faster flow in busy locations",
      b3: "Integration with attendance and visitor systems",
      b4: "Durable stainless-steel construction options",
      b5: "Emergency release and safety compliance",

      typesTitle: "Types of Turnstile Gates",
      typesSub:
        "Choose the right turnstile gate type by security level, traffic volume, lane width, and the look of your site in Cambodia.",
      t1: "Tripod Turnstile",
      t1d:
        "Budget-friendly tripod turnstiles for staff entrances, schools, and factories. Reliable one-at-a-time control with RFID or QR access and low maintenance.",
      t2: "Flap Barrier",
      t2d:
        "Elegant flap barrier gates for office lobbies, hotels, and public buildings. Faster passage, sensor safety, and premium aesthetics for modern spaces.",
      t3: "Speed Gate",
      t3d:
        "High-throughput speed gates for metro stations, airports, and corporate HQs. Smooth glass panels, anti-tailgating logic, and fast flow control.",
      t4: "Full-Height Turnstile",
      t4d:
        "Full-height turnstiles for maximum security at factories, stadiums, and restricted areas. Rugged construction for outdoor and 24/7 use.",
      t5: "Swing Gate / Optical",
      t5d:
        "Swing/optical gates for accessible wide lanes and stroller or wheelchair access. Ideal for mixed-traffic entrances and visitor-friendly sites.",

      useTitle: "Where Turnstile Gates Are Used in Cambodia",
      useSub:
        "Common deployment scenarios for turnstile gates in Cambodia based on security, traffic flow, and compliance needs.",
      u1t: "Factories & Industrial Zones",
      u1d:
        "Shift entry control, attendance integration, PPE compliance, and secure perimeter access for industrial facilities.",
      u2t: "Schools & Campuses",
      u2d:
        "Student access control, visitor screening, and event entry management for safer campuses.",
      u3t: "Offices & Corporate Buildings",
      u3d:
        "Secure lobby access, staff-only zones, and smart office integration with RFID or biometric systems.",
      u4t: "Public Venues & Stadiums",
      u4d:
        "Ticketed entry, crowd flow management, and anti-tailgating control for public venues.",
      u5t: "Hospitals & Public Institutions",
      u5d:
        "Restricted area access, patient-area security, and staff tracking for compliance and safety.",
      u6t: "Transport Hubs",
      u6d:
        "Fast, controlled access at stations and terminals with lane control and passenger counting.",

      integrationsTitle: "Turnstile Gate Integration Options in Cambodia",
      integrationsSub:
        "Integrate turnstile gates with access control, attendance, and safety systems for secure, automated entry.",
      i1: "RFID cards, keyfobs, and smart ID badges",
      i2: "QR code tickets, mobile passes, and e-tickets",
      i3: "Fingerprint, face recognition, or PIN access",
      i4: "Visitor management and reception systems",
      i5: "Attendance, HR, and payroll software sync",
      i6: "Fire alarm linkage and emergency release",

      chooseTitle: "How to Choose the Right Turnstile Gate in Cambodia",
      chooseSub:
        "A practical checklist to select the right turnstile gate based on traffic, security, and integration needs.",
      chooseDesc:
        "Start by estimating peak-hour flow and the level of access control you need, then match the lane type (tripod, flap barrier, speed gate, or full height) to your space, aesthetics, and security policy. Consider indoor vs outdoor placement, weather exposure, power and network availability, and the access method your users will carry (RFID, QR, PIN, or biometric). Finally, confirm integration with attendance, visitor management, or HR systems so the solution supports daily operations and future expansion.",
      c1: "Traffic volume and required throughput per minute",
      c2: "Security level (low, medium, high) and anti-tailgating needs",
      c3: "Indoor vs outdoor installation and weather exposure",
      c4: "Access method (RFID, QR, PIN, biometric) and user type",
      c5: "Integration with attendance, visitor, or HR systems",
      c6: "Power, network availability, and emergency release requirements",

      gridTitle: "Turnstile Gate Products",
      gridSub:
        "Browse turnstile gate models for offices, factories, schools, and public venues.",

      processTitle: "Turnstile Gate Installation, Setup & Training in Cambodia",
      processSub:
        "A structured delivery workflow for stable operation, clean wiring, and smooth pedestrian flow from day one.",
      p1: "Site survey, traffic study, and access workflow mapping",
      p1d:
        "We inspect entry points, measure peak flow, and review security policies to define the right lane count, placement, and access method.",
      p2: "Gate selection, lane layout design, and system planning",
      p2d:
        "We match tripod, flap, speed gate, or full-height units to your space, then finalize layout, power, and network plans.",
      p3: "Installation, wiring, integration testing, and safety checks",
      p3d:
        "Our team installs the gates, runs cabling cleanly, integrates controllers, and verifies emergency release and compliance.",
      p4: "User training, handover documentation, and ongoing support",
      p4d:
        "We train operators, deliver documentation, and provide after-sales support to keep the system running smoothly.",

      faqTitle: "Turnstile Gate FAQs in Cambodia: Installation, Safety & Integration",
      finalTitle: "Get a Project-Based Quotation",
      finalSub:
        "Share your site type, traffic volume, access method, and integration needs. We will recommend the right turnstile gate and provide a clear quotation.",
      finalCta: "Contact & Get Quotation",
      viewProducts: "View Products",
      note:
        "Note: Final quotation depends on gate type, quantity, access method, installation conditions, and integration requirements.",
      getQuote: "Get Quotation",
    };

    const km = {
      breadcrumb: "" ,
      badge: "áž€áž˜áŸ’áž–áž»áž‡áž¶ - áž…áŸ’ážšáž€áž‘áŸ’ážœáž¶ážš Turnstile - áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áž¶ážšáž…áž¼áž›áž…áŸáž‰",
      h1: "ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™áž…áŸ’ážšáž€áž‘áŸ’ážœáž¶ážš Turnstile ážšáž”ážŸáŸ‹ Mugnee áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      sub:
        "Mugnee Cambodia áž•áŸ’ážáž›áŸ‹áž”áŸ’ážšáž–áŸáž“áŸ’áž’áž…áŸ’ážšáž€áž‘áŸ’ážœáž¶ážš turnstile ážŠáŸ„áž™ážœáž·áž‡áŸ’áž‡áž¶áž‡áž¸ážœáŸˆ ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áž¶ážšáž…áž¼áž›áž…áŸáž‰áž±áŸ’áž™áž˜áž¶áž“ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áŸ…áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ ážšáŸ„áž„áž…áž€áŸ’ážš ážŸáž¶áž›áž¶ážšáŸ€áž“ áž˜áž‡áŸ’ážˆáž˜ážŽáŸ’ážŒáž›ážŠáž¹áž€áž‡áž‰áŸ’áž‡áž¼áž“ áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ážŸáž¶áž’áž¶ážšážŽáŸˆáŸ” áž™áž¾áž„áž•áŸ’áž‚ážáŸ‹áž•áŸ’áž‚áž„áŸ‹ flap barrier, tripod turnstile, speed gate áž“áž·áž„ full-height turnstile ážŠáŸ‚áž›áž¢áž¶áž…ážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž› RFID, QR áž“áž·áž„ biometric áž–áŸ’ážšáž˜áž‘áž¶áŸ†áž„ážŸáŸážœáž¶ážŠáŸ†áž¡áž¾áž„ commissioning áž“áž·áž„ after-sales support áž€áŸ’áž“áž»áž„ážŸáŸ’ážšáž»áž€áŸ”",
      cta1: "ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒáž¥ážáž‚áž·ážážáŸ’áž›áŸƒ",
      cta2: "áž˜áž¾áž›áž•áž›áž·ážáž•áž› Turnstile",

      quickTitle: "ážšáž€áž˜áž¾áž›áž”áŸ’ážšáž—áŸáž‘ Turnstile áž“áž·áž„ážŸáŸážœáž¶áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áž¶ážšáž…áž¼áž›áž…áŸáž‰",
      quickSub:
        "ážáŸ†ážŽážšáž áŸážŸáž‡áž½áž™áž±áŸ’áž™áž¢áŸ’áž“áž€áž…áž¼áž›áž‘áŸ…áž€áž¶áž“áŸ‹áž”áŸ’ážšáž—áŸáž‘áž…áŸ’ážšáž€ áž€áž¶ážšážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž› áž”áŸ’ážšáž—áŸáž‘áž•áž›áž·ážáž•áž› áž“áž·áž„ážŸáŸážœáž¶áž‚áž¶áŸ†áž‘áŸ’ážšáŸ”",

      specsTitle: "áž›áž€áŸ’ážážŽáŸˆáž”áž…áŸ’áž…áŸáž€áž‘áŸážŸ áž“áž·áž„áž˜áž»ážáž„áž¶ážš Turnstile áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      specsSub:
        "ážšáŸ€áž”áž…áŸ†áž”áŸ’ážšáž–áŸáž“áŸ’áž’áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áž¶ážšáž…áž¼áž›áž…áŸáž‰ážŠáŸ„áž™áž‡áŸ’ážšáž¾ážŸáž”áŸ’ážšáž—áŸáž‘áž…áŸ’ážšáž€ ážáž˜áŸ’áž›áž¶áž—áž¶áž–áž†áŸ’áž›áž„áž€áž¶ážáŸ‹ áž“áž·áž„áž€áž˜áŸ’ážšáž·ážážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–áž±áŸ’áž™ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áŸ’áž“áž»áž„ áž“áž·áž„áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážšáŸ”",
      sCard1t: "áž”áŸ’ážšáž—áŸáž‘áž…áŸ’ážšáž€",
      sCard1d:
        "áž‡áž˜áŸ’ážšáž¾ážŸ tripod, flap barrier, speed gate, full-height áž“áž·áž„ swing gate ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™ážŸáž˜áž“áž¹áž„áž€áž˜áŸ’ážšáž·ážážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„áž”ážšáž·áž˜áž¶ážŽáž¢áŸ’áž“áž€áž†áŸ’áž›áž„áž€áž¶ážáŸ‹áŸ”",
      sCard2t: "ážœáž·áž’áž¸ážŸáž¶ážŸáŸ’ážáŸ’ážšáž…áž¼áž›áž”áŸ’ážšáž¾",
      sCard2d:
        "áž‚áž¶áŸ†áž‘áŸ’ážš RFID card, QR ticket, PIN, fingerprint áž“áž·áž„ face recognition áž‡áž¶áž˜áž½áž™áž”áŸ’ážšáž–áŸáž“áŸ’áž’ access control áž¬ attendanceáŸ”",
      sCard3t: "ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„áž‚áŸ’ážšáž¶áž¢áž¶ážŸáž“áŸ’áž“",
      sCard3d:
        "áž—áŸ’áž‡áž¶áž”áŸ‹ fire alarm, emergency release, logic áž€áž¶ážšáž–áž¶ážš tailgating áž“áž·áž„ážšáž”áŸ€áž” fail-safe/fail-secureáŸ”",
      sCard4t: "áž”ážšáž·áž™áž¶áž€áž¶ážŸáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹",
      sCard4d:
        "ážšáž…áž“áž¶ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ lobby áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš ážŠáŸ„áž™áž”áŸ’ážšáž¾ážŸáž˜áŸ’áž—áž¶ážšáŸˆážŠáŸ‚áž€áž¢áŸŠáž¸ážŽáž»áž€ áž“áž·áž„áž€áž¶ážšáž–áž¶ážšáž¢áž¶áž€áž¶ážŸáž’áž¶ážáž»áŸ”",
      sCard5t: "ážŸáž˜ážáŸ’ážáž—áž¶áž–áž†áŸ’áž›áž„áž€áž¶ážáŸ‹",
      sCard5d:
        "lane áž˜áž¶áž“áž”áŸ’ážšážŸáž·áž‘áŸ’áž’áž—áž¶áž–ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž›áŸ†áž áž¼ážšáž¢áŸ’áž“áž€ážŠáŸ†ážŽáž¾ážš ážŠáŸ„áž™áž¢áž¶áž…áž€áŸ†ážŽážáŸ‹áž›áŸ’áž”áž¿áž“ áž“áž·áž„ážŸáž‰áŸ’áž‰áž¶ážŸáŸ’ážáž¶áž“áž—áž¶áž–áž…áŸ’áž”áž¶ážŸáŸ‹áž›áž¶ážŸáŸ‹áŸ”",
      sCard6t: "áž€áž¶ážšážŠáŸ†áž¡áž¾áž„",
      sCard6d:
        "ážŠáŸ†áž¡áž¾áž„ážŠáŸ„áž™ážœáž·áž‡áŸ’áž‡áž¶áž‡áž¸ážœáŸˆ áž‡áž¶áž˜áž½áž™áž‚áŸ’ážšáž¹áŸ‡ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ áž€áž¶ážšážŠáž¶áž€áŸ‹ážáŸ’ážŸáŸ‚ áž€áŸ†ážŽážáŸ‹ controller ážŸáž¶áž€áž›áŸ’áž”áž„áž”áŸ’ážšáž–áŸáž“áŸ’áž’ áž“áž·áž„áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž“áŸ…áž‘áž¸ážáž¶áŸ†áž„áŸ”",

      basicsLabel: "áž˜áž¼áž›ážŠáŸ’áž‹áž¶áž“ TURNSTILE",
      basicsTitle: "Turnstile Gate áž‚ážºáž‡áž¶áž¢áŸ’ážœáž¸?",
      basicsDesc:
        "Turnstile gate áž‚ážºáž‡áž¶áž§áž”áž€ážšážŽáŸáž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áž¶ážšáž…áž¼áž›áž…áŸáž‰ ážŠáŸ‚áž›áž¢áž“áž»áž‰áŸ’áž‰áž¶ážáž±áŸ’áž™áž˜áž“áž»ážŸáŸ’ážŸáž†áŸ’áž›áž„áž€áž¶ážáŸ‹áž˜áŸ’áž“áž¶áž€áŸ‹áž˜áŸ’ážáž„áž‘áŸ…ážáŸ†áž”áž“áŸ‹ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–áŸ” ážœáž¶áž‡áž½áž™áž‘áž”áŸ‹ážŸáŸ’áž€áž¶ážáŸ‹áž€áž¶ážšáž…áž¼áž›ážŠáŸ„áž™áž‚áŸ’áž˜áž¶áž“ážŸáž·áž‘áŸ’áž’áž· áž€áž¶ážáŸ‹áž”áž“áŸ’ážáž™ tailgating áž”áž„áŸ’áž€áž¾áž“ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„áž’áŸ’ážœáž¾áž±áŸ’áž™áž›áŸ†áž áž¼ážšáž…áž¼áž›áž…áŸáž‰áž˜áž¶áž“ážšáž”áŸ€áž”áŸ”",
      howTitle: "Turnstile Gate ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž™áŸ‰áž¶áž„ážŠáž¼áž…áž˜áŸ’ážáŸáž…?",
      howDesc:
        "áž…áŸ’ážšáž€áž‘áŸ’ážœáž¶ážšáž‘áž‘áž½áž›ážŸáž‰áŸ’áž‰áž¶áž–áž¸áž§áž”áž€ážšážŽáŸáž…áž¼áž›áž”áŸ’ážšáž¾ (RFID, QR, biometric)áŸ” áž”áŸ’ážšážŸáž·áž“áž”áž¾áž˜áž¶áž“ážŸáž·áž‘áŸ’áž’áž· barrier áž“áž¹áž„áž”áž¾áž€ áž áž¾áž™áž€ážáŸ‹ážáŸ’ážšáž¶áž–áŸ’ážšáž¹ážáŸ’ážáž·áž€áž¶ážšážŽáŸáž…áž¼áž›áž…áŸáž‰áŸ” controller áž“áž¹áž„áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž…áŸ’áž”áž¶áž”áŸ‹áž…áž¼áž›áž”áŸ’ážšáž¾ áž€áž¶áž›ážœáž·áž—áž¶áž‚áž–áŸáž›ážœáŸáž›áž¶ áž“áž·áž„ážšáž”áž¶áž™áž€áž¶ážšážŽáŸáŸ”",
      benefitTitle: "áž¢ážáŸ’ážáž”áŸ’ážšáž™áŸ„áž‡áž“áŸážŸáŸ†ážáž¶áž“áŸ‹ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‘áž¸ážáž¶áŸ†áž„áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      b1: "áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áž¶ážšáž…áž¼áž›áž…áŸáž‰ áž“áž·áž„áž€áž¶ážáŸ‹áž”áž“áŸ’ážáž™ tailgating",
      b2: "áž›áŸ†áž áž¼ážšáž…áž¼áž›áž…áŸáž‰áž›áž¿áž“áž“áŸ…áž‘áž¸ážáž¶áŸ†áž„áž˜áž“áž»ážŸáŸ’ážŸáž…áŸ’ážšáž¾áž“",
      b3: "ážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž›áž‡áž¶áž˜áž½áž™ attendance áž“áž·áž„ visitor system",
      b4: "ážšáž…áž“áž¶ážŸáž˜áŸ’áž–áŸáž“áŸ’áž’ážŠáŸ‚áž€áž¢áŸŠáž¸ážŽáž»áž€ážšáž¹áž„áž˜áž¶áŸ† áž’áž“áŸ‹áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹",
      b5: "Emergency release áž“áž·áž„ážŸáž˜ážŸáŸ’ážšáž”ážáž¶áž˜ážŸáŸ’ážáž„áŸ‹ážŠáž¶ážšážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–",

      typesTitle: "áž”áŸ’ážšáž—áŸáž‘áž…áŸ’ážšáž€áž‘áŸ’ážœáž¶ážš Turnstile",
      typesSub:
        "áž‡áŸ’ážšáž¾ážŸáž”áŸ’ážšáž—áŸáž‘ turnstile áž±áŸ’áž™ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ ážŠáŸ„áž™áž•áŸ’áž¢áŸ‚áž€áž›áž¾áž€áž˜áŸ’ážšáž·ážážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž”ážšáž·áž˜áž¶ážŽáž¢áŸ’áž“áž€áž†áŸ’áž›áž„áž€áž¶ážáŸ‹ áž‘áž‘áž¹áž„ lane áž“áž·áž„ážšáž…áž“áž¶áž”áŸáž‘áŸ’áž˜áž‘áž¸ážáž¶áŸ†áž„áŸ”",
      t1: "Tripod Turnstile",
      t1d:
        "áž‡áž˜áŸ’ážšáž¾ážŸážŸáž“áŸ’ážŸáŸ†ážážœáž·áž€áž¶ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž…áŸ’ážšáž€áž”áž»áž‚áŸ’áž‚áž›áž·áž€ ážŸáž¶áž›áž¶ážšáŸ€áž“ áž“áž·áž„ážšáŸ„áž„áž…áž€áŸ’ážšáŸ” áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž˜áŸ’áž“áž¶áž€áŸ‹áž˜áŸ’ážáž„áž”áž¶áž“áž‘áž»áž€áž…áž·ážáŸ’áž áž‡áž¶áž˜áž½áž™ RFID áž¬ QR áž“áž·áž„ážáŸ‚áž‘áž¶áŸ†áž„áž¶áž™ážŸáŸ’ážšáž½áž›áŸ”",
      t2: "Flap Barrier",
      t2d:
        "áž…áŸ’ážšáž€ flap barrier ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ lobby áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ ážŸážŽáŸ’áž‹áž¶áž‚áž¶ážš áž“áž·áž„áž¢áž‚áž¶ážšážŸáž¶áž’áž¶ážšážŽáŸˆáŸ” áž†áŸ’áž›áž„áž€áž¶ážáŸ‹áž›áž¿áž“ áž˜áž¶áž“ sensor ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„ážšáž…áž“áž¶ážŸáŸ’áž¢áž¶ážáž‘áŸ†áž“áž¾áž”áŸ”",
      t3: "Speed Gate",
      t3d:
        "speed gate ážŸáž˜ážáŸ’ážáž—áž¶áž–ážáŸ’áž–ážŸáŸ‹ ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážŸáŸ’ážáž¶áž“áž¸áž™áŸ áž¢áž¶áž€áž¶ážŸáž™áž¶áž“ážŠáŸ’áž‹áž¶áž“ áž“áž·áž„áž¢áž‚áž¶ážšážŸáž¶áž‡áž¸ážœáž€áž˜áŸ’áž˜áŸ” áž€áž‰áŸ’áž…áž€áŸ‹ážšáž›áž¼áž“ anti-tailgating áž“áž·áž„áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž›áŸ†áž áž¼ážšáž›áž¿áž“áŸ”",
      t4: "Full-Height Turnstile",
      t4d:
        "full-height turnstile ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–ážáŸ’áž–ážŸáŸ‹áž”áŸ†áž•áž»áž áž“áŸ…ážšáŸ„áž„áž…áž€áŸ’ážš áž€áž¸áž¡ážŠáŸ’áž‹áž¶áž“ áž“áž·áž„ážáŸ†áž”áž“áŸ‹áž€áŸ†ážŽážáŸ‹ážŸáž·áž‘áŸ’áž’áž·áŸ” ážšáž¹áž„áž˜áž¶áŸ† ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš áž“áž·áž„áž”áŸ’ážšáž¾ 24/7áŸ”",
      t5: "Swing Gate / Optical",
      t5d:
        "swing/optical gate ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ lane áž‘áž¼áž›áž¶áž™ áž“áž·áž„áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾ stroller áž¬ wheelchairáŸ” ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž…áŸ’ážšáž€áž…áŸáž‰áž…áž¼áž›áž…áž˜áŸ’ážšáž»áŸ‡ áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ážŠáŸ‚áž›áž„áž¶áž™ážŸáŸ’ážšáž½áž›ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž—áŸ’áž‰áŸ€ážœáŸ”",

      useTitle: "áž‘áž¸ážáž¶áŸ†áž„ážŠáŸ‚áž›áž”áŸ’ážšáž¾ Turnstile Gate áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      useSub:
        "áž§áž‘áž¶áž ážšážŽáŸáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹ turnstile áž‘áž¼áž‘áŸ…áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ ážŠáŸ„áž™áž•áŸ’áž¢áŸ‚áž€áž›áž¾ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž›áŸ†áž áž¼ážšáž¢áŸ’áž“áž€áž†áŸ’áž›áž„áž€áž¶ážáŸ‹ áž“áž·áž„ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšáž¢áž“áž»ážœážáŸ’ážážáž¶áž˜ážŸáŸ’ážáž„áŸ‹ážŠáž¶ážšáŸ”",
      u1t: "ážšáŸ„áž„áž…áž€áŸ’ážš & ážáŸ†áž”áž“áŸ‹áž§ážŸáŸ’ážŸáž¶áž áž€áž˜áŸ’áž˜",
      u1d:
        "áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áž¶ážšáž…áž¼áž›ážœáŸáž“áž€áž¶ážšáž„áž¶ážš ážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž› attendance áž¢áž“áž»ážœážáŸ’áž PPE áž“áž·áž„áž€áž¶ážšáž–áž¶ážšáž…áŸ’ážšáž€áž‡áž»áŸ†ážœáž·áž‰ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážšáŸ„áž„áž…áž€áŸ’ážšáŸ”",
      u2t: "ážŸáž¶áž›áž¶ážšáŸ€áž“ & Campus",
      u2d:
        "áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áž¶ážšáž…áž¼áž›ážšáž”ážŸáŸ‹ážŸáž·ážŸáŸ’ážŸ ážŸáŸ’áž€áŸáž“áž—áŸ’áž‰áŸ€ážœ áž“áž·áž„áž€áž¶ážšáž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž…áž¼áž›áž–áŸ’ážšáž¹ážáŸ’ážáž·áž€áž¶ážšážŽáŸ ážŠáž¾áž˜áŸ’áž”áž¸áž”áž„áŸ’áž€áž¾áž“ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–áž€áŸ’áž“áž»áž„ campusáŸ”",
      u3t: "áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ & áž¢áž‚áž¶ážšážŸáž¶áž‡áž¸ážœáž€áž˜áŸ’áž˜",
      u3d:
        "áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áž¶ážšáž…áž¼áž› lobby áž±áŸ’áž™áž˜áž¶áž“ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– ážáŸ†áž”áž“áŸ‹ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž”áž»áž‚áŸ’áž‚áž›áž·áž€ áž“áž·áž„áž€áž¶ážšážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž› smart office áž‡áž¶áž˜áž½áž™ RFID áž¬ biometricáŸ”",
      u4t: "áž‘áž¸ážáž¶áŸ†áž„ážŸáž¶áž’áž¶ážšážŽáŸˆ & áž€áž¸áž¡ážŠáŸ’áž‹áž¶áž“",
      u4d:
        "áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áž¶ážšáž…áž¼áž›ážŠáŸ„áž™ážŸáŸ†áž”áž»ážáŸ’ážš áž›áŸ†áž áž¼ážšáž˜áž“áž»ážŸáŸ’ážŸ áž“áž·áž„áž€áž¶ážšáž–áž¶ážš tailgating ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‘áž¸ážáž¶áŸ†áž„ážŸáž¶áž’áž¶ážšážŽáŸˆáŸ”",
      u5t: "áž˜áž“áŸ’áž‘áž¸ážšáž–áŸáž‘áŸ’áž™ & ážŸáŸ’ážáž¶áž”áŸáž“ážŸáž¶áž’áž¶ážšážŽáŸˆ",
      u5d:
        "áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áž¶ážšáž…áž¼áž›ážáŸ†áž”áž“áŸ‹áž€áŸ†ážŽážáŸ‹ážŸáž·áž‘áŸ’áž’áž· ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–ážáŸ†áž”áž“áŸ‹áž¢áŸ’áž“áž€áž‡áŸ†áž„ážº áž“áž·áž„ážáž¶áž˜ážŠáž¶áž“áž”áž»áž‚áŸ’áž‚áž›áž·áž€ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž¢áž“áž»ážœážáŸ’ážážáž¶áž˜ážŸáŸ’ážáž„áŸ‹ážŠáž¶ážšáŸ”",
      u6t: "áž˜áž‡áŸ’ážˆáž˜ážŽáŸ’ážŒáž›ážŠáž¹áž€áž‡áž‰áŸ’áž‡áž¼áž“",
      u6d:
        "áž€áž¶ážšáž…áž¼áž›áž…áŸáž‰áž›áž¿áž“ áž“áž·áž„áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž”áž¶áž“ áž“áŸ…ážŸáŸ’ážáž¶áž“áž¸áž™áŸ áž“áž·áž„ terminal áž‡áž¶áž˜áž½áž™ lane control áž“áž·áž„ážšáž¶áž”áŸ‹áž…áŸ†áž“áž½áž“áž¢áŸ’áž“áž€ážŠáŸ†ážŽáž¾ážšáŸ”",

      integrationsTitle: "áž‡áž˜áŸ’ážšáž¾ážŸážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž› Turnstile áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      integrationsSub:
        "ážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž› turnstile áž‡áž¶áž˜áž½áž™ access control, attendance áž“áž·áž„ safety system ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™áž€áž¶ážšáž…áž¼áž›áž…áŸáž‰áž˜áž¶áž“ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„ážŸáŸ’ážœáŸáž™áž”áŸ’ážšážœážáŸ’ážáž·áŸ”",
      i1: "RFID card, keyfob áž“áž·áž„áž”áŸážŽáŸ’ážŽážŸáž˜áŸ’áž‚áž¶áž›áŸ‹ smart ID",
      i2: "QR code ticket, mobile pass áž“áž·áž„ e-ticket",
      i3: "Fingerprint, face recognition áž¬ PIN access",
      i4: "Visitor management áž“áž·áž„ reception system",
      i5: "Sync áž‡áž¶áž˜áž½áž™ attendance, HR áž“áž·áž„ payroll software",
      i6: "áž—áŸ’áž‡áž¶áž”áŸ‹ fire alarm áž“áž·áž„ emergency release",

      chooseTitle: "ážšáž”áŸ€áž”áž‡áŸ’ážšáž¾ážŸ Turnstile Gate áž±áŸ’áž™ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœáž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      chooseSub:
        "Checklist áž‡áž¶áž€áŸ‹ážŸáŸ’ážáŸ‚áž„ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‡áŸ’ážšáž¾ážŸ turnstile ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœ ážáž¶áž˜áž›áŸ†áž áž¼ážšáž˜áž“áž»ážŸáŸ’ážŸ áž€áž˜áŸ’ážšáž·ážážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž›áŸ”",
      chooseDesc:
        "áž…áž¶áž”áŸ‹áž•áŸ’ážáž¾áž˜áž–áž¸áž€áž¶ážšáž”áŸ‰áž¶áž“áŸ‹ážŸáŸ’áž˜áž¶áž“áž›áŸ†áž áž¼ážšáž˜áž“áž»ážŸáŸ’ážŸáž–áŸáž›áž˜áž˜áž¶áž‰áž¹áž€ áž“áž·áž„áž€áž˜áŸ’ážšáž·ážáž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€áž¶ážšáž…áž¼áž›ážŠáŸ‚áž›áž¢áŸ’áž“áž€ážáŸ’ážšáž¼ážœáž€áž¶ážš áž”áž“áŸ’áž‘áž¶áž”áŸ‹áž˜áž€áž•áŸ’áž‚áž¼áž•áŸ’áž‚áž„áž”áŸ’ážšáž—áŸáž‘ lane (tripod, flap barrier, speed gate áž¬ full-height) áž±áŸ’áž™ážŸáž˜áž“áž¹áž„áž‘áŸ†áž áŸ†áž‘áž¸ážáž¶áŸ†áž„ ážšáž…áž“áž¶áž”áŸáž‘áŸ’áž˜ áž“áž·áž„áž‚áŸ„áž›áž“áž™áŸ„áž”áž¶áž™ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–áŸ” áž‚áž½ážšáž–áž·áž…áž¶ážšážŽáž¶áž•áž„ážŠáŸ‚ážš áž¢áŸ†áž–áž¸áž€áž¶ážšážŠáŸ†áž¡áž¾áž„áž€áŸ’áž“áž»áž„/áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš áž€áž¶ážšáž”áŸ‰áŸ‡áž–áž¶áž›áŸ‹áž¢áž¶áž€áž¶ážŸáž’áž¶ážáž» áž—áž¶áž–ážšáž½áž…ážšáž¶áž›áŸ‹áž“áŸƒáž—áŸ’áž›áž¾áž„ áž“áž·áž„áž”ážŽáŸ’ážáž¶áž‰ áž“áž·áž„ážœáž·áž’áž¸ážŸáž¶ážŸáŸ’ážáŸ’ážšáž…áž¼áž›áž”áŸ’ážšáž¾ážšáž”ážŸáŸ‹áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾ (RFID, QR, PIN áž¬ biometric)áŸ” áž…áž»áž„áž€áŸ’ážšáŸ„áž™ ážáŸ’ážšáž¼ážœáž”áž‰áŸ’áž‡áž¶áž€áŸ‹áž€áž¶ážšážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž›áž‡áž¶áž˜áž½áž™ attendance, visitor management áž¬ HR system ážŠáž¾áž˜áŸ’áž”áž¸áž‚áž¶áŸ†áž‘áŸ’ážšáž€áž¶ážšáž”áŸ’ážšážáž·áž”ážáŸ’ážáž·áž”áŸ’ážšáž…áž¶áŸ†ážáŸ’áž„áŸƒ áž“áž·áž„áž€áž¶ážšáž–áž„áŸ’ážšáž¸áž€áž“áž¶áž–áŸáž›áž¢áž“áž¶áž‚ážáŸ”",
      c1: "áž”ážšáž·áž˜áž¶ážŽáž¢áŸ’áž“áž€áž†áŸ’áž›áž„áž€áž¶ážáŸ‹ áž“áž·áž„ throughput ážáŸ’ážšáž¼ážœáž€áž¶ážšáž€áŸ’áž“áž»áž„áž˜áž½áž™áž“áž¶áž‘áž¸",
      c2: "áž€áž˜áŸ’ážšáž·ážážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– (áž‘áž¶áž” áž˜áž’áŸ’áž™áž˜ ážáŸ’áž–ážŸáŸ‹) áž“áž·áž„ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšáž€áž¶ážšáž–áž¶ážš tailgating",
      c3: "áž€áž¶ážšážŠáŸ†áž¡áž¾áž„áž€áŸ’áž“áž»áž„/áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš áž“áž·áž„áž€áž¶ážšáž”áŸ‰áŸ‡áž–áž¶áž›áŸ‹áž¢áž¶áž€áž¶ážŸáž’áž¶ážáž»",
      c4: "ážœáž·áž’áž¸áž…áž¼áž›áž”áŸ’ážšáž¾ (RFID, QR, PIN, biometric) áž“áž·áž„áž”áŸ’ážšáž—áŸáž‘áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾",
      c5: "áž€áž¶ážšážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž›áž‡áž¶áž˜áž½áž™ attendance, visitor áž¬ HR system",
      c6: "ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšáž—áŸ’áž›áž¾áž„ áž”ážŽáŸ’ážáž¶áž‰ áž“áž·áž„ emergency release",

      gridTitle: "áž•áž›áž·ážáž•áž› Turnstile Gate",
      gridSub:
        "ážŸáŸ’ážœáŸ‚áž„ážšáž€áž˜áŸ‰áž¼ážŠáŸ‚áž› turnstile gate ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ ážšáŸ„áž„áž…áž€áŸ’ážš ážŸáž¶áž›áž¶ážšáŸ€áž“ áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ážŸáž¶áž’áž¶ážšážŽáŸˆáŸ”",

      processTitle: "áž€áž¶ážšážŠáŸ†áž¡áž¾áž„ Setup áž“áž·áž„áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž› Turnstile áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
      processSub:
        "ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž¢áž“áž»ážœážáŸ’ážáž‡áž¶áž”áŸ’ážšáž–áŸáž“áŸ’áž’ ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™áž”áŸ’ážšážáž·áž”ážáŸ’ážáž·áž€áž¶ážšážŸáŸ’ážáž·ážšáž—áž¶áž– áž€áž¶ážšážŠáž¶áž€áŸ‹ážáŸ’ážŸáŸ‚ážŸáŸ’áž¢áž¶áž áž“áž·áž„áž›áŸ†áž áž¼ážšáž¢áŸ’áž“áž€ážŠáŸ†ážŽáž¾ážšážšáž›áž¼áž“áž…áž¶áž”áŸ‹áž–áž¸ážáŸ’áž„áŸƒážŠáŸ†áž”áž¼áž„áŸ”",
      p1: "Site survey ážŸáž·áž€áŸ’ážŸáž¶áž›áŸ†áž áž¼ážšáž˜áž“áž»ážŸáŸ’ážŸ áž“áž·áž„ map ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž…áž¼áž›áž…áŸáž‰",
      p1d:
        "áž™áž¾áž„áž–áž·áž“áž·ážáŸ’áž™áž…áŸ’ážšáž€áž…áž¼áž›ážœáž¶ážŸáŸ‹áž›áŸ†áž áž¼ážšáž–áŸáž›áž˜áž˜áž¶áž‰áž¹áž€ áž“áž·áž„áž–áž·áž“áž·ážáŸ’áž™áž‚áŸ„áž›áž“áž™áŸ„áž”áž¶áž™ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– ážŠáž¾áž˜áŸ’áž”áž¸áž€áŸ†ážŽážáŸ‹áž…áŸ†áž“áž½áž“ lane áž‘áž¸ážáž¶áŸ†áž„ážŠáŸ†áž¡áž¾áž„ áž“áž·áž„ážœáž·áž’áž¸áž…áž¼áž›áž”áŸ’ážšáž¾ážŠáŸ‚áž›ážáŸ’ážšáž¹áž˜ážáŸ’ážšáž¼ážœáŸ”",
      p2: "áž‡áŸ’ážšáž¾ážŸáž…áŸ’ážšáž€ ážšáž…áž“áž¶ lane layout áž“áž·áž„áž•áŸ‚áž“áž€áž¶ážšáž”áŸ’ážšáž–áŸáž“áŸ’áž’",
      p2d:
        "áž™áž¾áž„áž•áŸ’áž‚áž¼áž•áŸ’áž‚áž„ tripod, flap, speed gate áž¬ full-height áž±áŸ’áž™ážŸáž˜áž“áž¹áž„áž‘áž¸ážáž¶áŸ†áž„ ážšáž½áž…áž”áž‰áŸ’áž…áž”áŸ‹áž•áŸ‚áž“áž€áž¶ážš layout áž—áŸ’áž›áž¾áž„ áž“áž·áž„áž”ážŽáŸ’ážáž¶áž‰áŸ”",
      p3: "ážŠáŸ†áž¡áž¾áž„ ážŠáž¶áž€áŸ‹ážáŸ’ážŸáŸ‚ ážŸáž¶áž€áž›áŸ’áž”áž„áž€áž¶ážšážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž› áž“áž·áž„áž–áž·áž“áž·ážáŸ’áž™ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–",
      p3d:
        "áž€áŸ’ážšáž»áž˜áž€áž¶ážšáž„áž¶ážšáž™áž¾áž„ážŠáŸ†áž¡áž¾áž„áž…áŸ’ážšáž€ ážŠáž¶áž€áŸ‹ážáŸ’ážŸáŸ‚áž±áŸ’áž™ážŸáŸ’áž¢áž¶áž ážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž› controller áž“áž·áž„áž–áž·áž“áž·ážáŸ’áž™ emergency release áž–áŸ’ážšáž˜áž‘áž¶áŸ†áž„áž—áž¶áž–ážŸáž˜ážŸáŸ’ážšáž”ážáž¶áž˜ážŸáŸ’ážáž„áŸ‹ážŠáž¶ážšáŸ”",
      p4: "áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾ áž¯áž€ážŸáž¶ážšáž”áŸ’ážšáž‚áž›áŸ‹ áž“áž·áž„áž‚áž¶áŸ†áž‘áŸ’ážšáž”áž“áŸ’áž",
      p4d:
        "áž™áž¾áž„áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž¢áŸ’áž“áž€áž”áŸ’ážšážáž·áž”ážáŸ’ážáž·áž€áž¶ážš áž•áŸ’ážáž›áŸ‹áž¯áž€ážŸáž¶ážšáž”áŸ’ážšáž‚áž›áŸ‹ áž“áž·áž„ after-sales support ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™áž”áŸ’ážšáž–áŸáž“áŸ’áž’ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšážšáž›áž¼áž“áž‡áž¶áž”áŸ‹áž›áž¶áž”áŸ‹áŸ”",

      faqTitle: "ážŸáŸ†ážŽáž½ážšáž‰áž¹áž€áž‰áž¶áž”áŸ‹áž¢áŸ†áž–áž¸ Turnstile áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶áŸ– áž€áž¶ážšážŠáŸ†áž¡áž¾áž„ ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„áž€áž¶ážšážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž›",
      finalTitle: "ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒážáž¶áž˜áž‚áž˜áŸ’ážšáŸ„áž„",
      finalSub:
        "ážŸáž¼áž˜áž•áŸ’ážáž›áŸ‹áž–áŸážáŸŒáž˜áž¶áž“áž”áŸ’ážšáž—áŸáž‘áž‘áž¸ážáž¶áŸ†áž„ áž”ážšáž·áž˜áž¶ážŽáž¢áŸ’áž“áž€áž†áŸ’áž›áž„áž€áž¶ážáŸ‹ ážœáž·áž’áž¸áž…áž¼áž›áž”áŸ’ážšáž¾ áž“áž·áž„ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž›áŸ” áž™áž¾áž„áž“áž¹áž„ážŽáŸ‚áž“áž¶áŸ† turnstile ážŠáŸ‚áž›ážŸáž˜ážŸáŸ’ážšáž” áž“áž·áž„áž•áŸ’ážáž›áŸ‹ážáž˜áŸ’áž›áŸƒáž…áŸ’áž”áž¶ážŸáŸ‹áž›áž¶ážŸáŸ‹áŸ”",
      finalCta: "áž‘áž¶áž€áŸ‹áž‘áž„ áž“áž·áž„ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒ",
      viewProducts: "áž˜áž¾áž›áž•áž›áž·ážáž•áž›",
      note:
        "áž…áŸ†ážŽáž¶áŸ†áŸ– ážáž˜áŸ’áž›áŸƒáž…áž»áž„áž€áŸ’ážšáŸ„áž™áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾áž”áŸ’ážšáž—áŸáž‘áž…áŸ’ážšáž€ áž”ážšáž·áž˜áž¶ážŽ ážœáž·áž’áž¸áž…áž¼áž›áž”áŸ’ážšáž¾ áž›áž€áŸ’ážážážŽáŸ’ážŒážŠáŸ†áž¡áž¾áž„ áž“áž·áž„ážáž˜áŸ’ážšáž¼ážœáž€áž¶ážšážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž›áŸ”",
      getQuote: "ážŸáŸ’áž“áž¾ážŸáž»áŸ†ážáž˜áŸ’áž›áŸƒ",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const faqs: FAQ[] = useMemo(
    () => [
      {
        qEn: "Which turnstile type is best for my site in Cambodia?",
        aEn:
          "Choose based on security level, traffic volume, and environment. Full-height turnstiles suit perimeter or high-security sites and are built for outdoor use, with designs that deter climbing and tailgating. Speed or optical gates use multiâ€‘beam sensors to prevent piggybacking and are ideal for highâ€‘traffic lobbies. Tripod units are a costâ€‘effective fit for staff entrances and controlled indoor zones.",
        qKm: "ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‘áž¸ážáž¶áŸ†áž„áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ ážáž¾áž‚áž½ážšáž‡áŸ’ážšáž¾ážŸ Turnstile áž”áŸ’ážšáž—áŸáž‘ážŽáž¶?",
        aKm:
          "ážáŸ’ážšáž¼ážœáž‡áŸ’ážšáž¾ážŸážáž¶áž˜áž€áž˜áŸ’ážšáž·ážážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž”ážšáž·áž˜áž¶ážŽáž¢áŸ’áž“áž€áž†áŸ’áž›áž„áž€áž¶ážáŸ‹ áž“áž·áž„áž”ážšáž·áž™áž¶áž€áž¶ážŸáž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹áŸ” Full-height turnstile ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáŸ†áž”áž“áŸ‹ perimeter áž¬áž€áž“áŸ’áž›áŸ‚áž„ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–ážáŸ’áž–ážŸáŸ‹ áž“áž·áž„ážŸáž¶áž€ážŸáž˜áž€áž¶ážšáž”áŸ’ážšáž¾áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážšáŸ” Speed/optical gate áž˜áž¶áž“ multi-beam sensor áž€áž¶ážáŸ‹áž”áž“áŸ’ážáž™ piggybacking ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ lobby ážŠáŸ‚áž›áž˜áž¶áž“áž…ážšáž¶áž…ážšážŽáŸážáŸ’áž–ážŸáŸ‹áŸ” Tripod unit áž‚ážºáž‡áž¶áž‡áž˜áŸ’ážšáž¾ážŸážŸáž“áŸ’ážŸáŸ†ážážœáž·áž€áž¶ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž…áŸ’ážšáž€áž”áž»áž‚áŸ’áž‚áž›áž·áž€ áž“áž·áž„ážáŸ†áž”áž“áŸ‹áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážšážŠáŸ‚áž›ážáŸ’ážšáž¼ážœáž€áž¶ážšáž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áŸ”",
      },
      {
        qEn: "Which access methods can a turnstile gate integrate with?",
        aEn:
          "Most modern turnstiles integrate with RFID cards, QR or mobile tickets, PIN keypads, and biometric systems such as fingerprint or face recognition. We match the access method to your security policy and user type, then connect it to your access control or attendance platform.",
        qKm: "Turnstile Gate áž¢áž¶áž…ážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž›áž‡áž¶áž˜áž½áž™ access method áž¢áŸ’ážœáž¸ážáŸ’áž›áŸ‡?",
        aKm:
          "Turnstile áž‘áŸ†áž“áž¾áž”áž—áž¶áž‚áž…áŸ’ážšáž¾áž“áž¢áž¶áž…ážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž›áž‡áž¶áž˜áž½áž™ RFID card, QR/mobile ticket, PIN keypad áž“áž·áž„ biometric ážŠáž¼áž…áž‡áž¶ fingerprint áž¬ face recognitionáŸ” áž™áž¾áž„áž‡áŸ’ážšáž¾ážŸ access method áž±áŸ’áž™ážŸáž˜áž“áž¹áž„áž‚áŸ„áž›áž“áž™áŸ„áž”áž¶áž™ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž– áž“áž·áž„áž”áŸ’ážšáž—áŸáž‘áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾ ážšáž½áž…áž—áŸ’áž‡áž¶áž”áŸ‹áž‘áŸ… access control/attendance platform ážšáž”ážŸáŸ‹áž¢áŸ’áž“áž€áŸ”",
      },
      {
        qEn: "Do we need an accessible gate next to a turnstile?",
        aEn:
          "Yes. Accessibility standards state that turnstiles cannot be part of an accessible route, and an accessible gate or door must be provided alongside them. We plan a compliant adjacent lane so all users can pass through comfortably.",
        qKm: "ážáž¾ážáŸ’ážšáž¼ážœáž€áž¶ážšáž…áŸ’ážšáž€ accessible áž“áŸ…áž‡áž·áž turnstile ážŠáŸ‚ážšáž¬áž‘áŸ?",
        aKm:
          "ážáŸ’ážšáž¼ážœáž€áž¶ážšáŸ” ážáž¶áž˜ accessibility standard, turnstile áž˜áž·áž“áž¢áž¶áž…áž‡áž¶áž…áŸ’ážšáž€ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾áž‚áŸ’ážšáž”áŸ‹áž”áŸ’ážšáž—áŸáž‘áž”áž¶áž“áž‘áŸ ážŠáž¼áž…áŸ’áž“áŸáŸ‡ážáŸ’ážšáž¼ážœáž˜áž¶áž“ accessible gate/door áž“áŸ…áž‡áž¶áž”áŸ‹áž‚áŸ’áž“áž¶áŸ” áž™áž¾áž„ážšáŸ€áž”áž…áŸ† lane áž”áž“áŸ’ážáŸ‚áž˜áž±áŸ’áž™ážŸáŸ’ážšáž”ážáž¶áž˜ážŸáŸ’ážáž„áŸ‹ážŠáž¶ážš ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾áž‘áž¶áŸ†áž„áž¢ážŸáŸ‹áž†áŸ’áž›áž„áž€áž¶ážáŸ‹áž”áž¶áž“áž„áž¶áž™ážŸáŸ’ážšáž½áž›áŸ”",
      },
      {
        qEn: "How do turnstiles handle emergency evacuation or power loss?",
        aEn:
          "Turnstiles can be configured for failâ€‘safe or failâ€‘secure operation and connected to fireâ€‘alarm inputs so lanes release during emergencies. Many speed gates also support autoâ€‘open behavior during power failure or alarm events.",
        qKm: "Turnstile ážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž™áŸ‰áž¶áž„ážŠáž¼áž…áž˜áŸ’ážáŸáž…áž–áŸáž› emergency evacuation áž¬ážŠáž¶áž…áŸ‹áž—áŸ’áž›áž¾áž„?",
        aKm:
          "Turnstile áž¢áž¶áž…áž€áŸ†ážŽážáŸ‹áž‡áž¶ fail-safe áž¬ fail-secure áž áž¾áž™áž—áŸ’áž‡áž¶áž”áŸ‹ fire-alarm input ážŠáž¾áž˜áŸ’áž”áž¸áž”áž¾áž€ lane áž–áŸáž›áž˜áž¶áž“áž¢áž¶ážŸáž“áŸ’áž“áŸ” Speed gate áž‡áž¶áž…áŸ’ážšáž¾áž“áž€áŸáž‚áž¶áŸ†áž‘áŸ’ážš auto-open áž“áŸ…áž–áŸáž› power failure áž¬ alarm event áž•áž„ážŠáŸ‚ážšáŸ”",
      },
      {
        qEn: "Are turnstile gates suitable for outdoor use in Cambodia?",
        aEn:
          "Yes. Fullâ€‘height turnstiles are designed for outdoor and indoor installation with weatherâ€‘resistant materials, making them a good choice for perimeter security, factories, and transport sites.",
        qKm: "Turnstile Gate ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž”áŸ’ážšáž¾áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážšáž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶ážŠáŸ‚ážšáž¬áž‘áŸ?",
        aKm:
          "ážŸáž˜ážŸáŸ’ážšáž”áŸ” Full-height turnstile ážáŸ’ážšáž¼ážœáž”áž¶áž“ážšáž…áž“áž¶ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‘áž¶áŸ†áž„ outdoor áž“áž·áž„ indoor ážŠáŸ„áž™áž”áŸ’ážšáž¾ážœážáŸ’ážáž»áž’áž¶ážáž»áž’áž“áŸ‹áž¢áž¶áž€áž¶ážŸáž’áž¶ážáž» ážŸáž¶áž€ážŸáž˜ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ perimeter security, factory áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ážŠáž¹áž€áž‡áž‰áŸ’áž‡áž¼áž“áŸ”",
      },
      {
        qEn: "How do we estimate lane count and throughput?",
        aEn:
          "We start with your peakâ€‘hour flow and target peopleâ€‘perâ€‘minute throughput. Speed/optical gates are designed for higher throughput and use sensor systems to keep flow smooth, while tripod or fullâ€‘height lanes prioritize stricter control. The final lane count balances flow, space, and security.",
        qKm: "ážáž¾áž‚ážŽáž“áž¶áž…áŸ†áž“áž½áž“ lane áž“áž·áž„ throughput áž™áŸ‰áž¶áž„ážŠáž¼áž…áž˜áŸ’ážáŸáž…?",
        aKm:
          "áž™áž¾áž„áž…áž¶áž”áŸ‹áž•áŸ’ážáž¾áž˜áž–áž¸ peak-hour flow áž“áž·áž„áž‚áŸ„áž›ážŠáŸ… people-per-minute throughputáŸ” Speed/optical gate ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ throughput ážáŸ’áž–ážŸáŸ‹ áž“áž·áž„áž›áŸ†áž áž¼ážšážšáž›áž¼áž“ ážážŽáŸˆ tripod/full-height lane áž•áŸ’ážáŸ„ážáž›áž¾áž€áž¶ážšáž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„ážáž¹áž„ážšáŸ‰áž¹áž„áž‡áž¶áž„áŸ” áž…áŸ†áž“áž½áž“ lane áž…áž»áž„áž€áŸ’ážšáŸ„áž™ážáŸ’ážšáž¼ážœáž”áž¶áž“áž”áŸ‰áž¶áž“áŸ‹ážŸáŸ’áž˜áž¶áž“ážáž¶áž˜ flow, space áž“áž·áž„ securityáŸ”",
      },
      {
        qEn: "Can turnstiles prevent tailgating or unauthorized entry?",
        aEn:
          "Yes. Fullâ€‘height designs physically deter climbing and tailgating, while speed gates use infrared sensor arrays to detect piggybacking and trigger alarms or closures. We configure the detection level based on your risk profile.",
        qKm: "Turnstile áž¢áž¶áž…áž€áž¶ážšáž–áž¶ážš tailgating áž¬ unauthorized entry áž”áž¶áž“áž‘áŸ?",
        aKm:
          "áž”áž¶áž“áŸ” Full-height design áž¢áž¶áž…ážšáž¶ážšáž¶áŸ†áž„áž€áž¶ážšáž¡áž¾áž„ážšáŸ†áž›áŸ„áž— áž“áž·áž„ tailgating ážážŽáŸˆ speed gate áž”áŸ’ážšáž¾ infrared sensor array ážŠáž¾áž˜áŸ’áž”áž¸ážšáž€ážƒáž¾áž‰ piggybacking áž áž¾áž™áž”áž„áŸ’áž€áž¾áž alarm áž¬áž”áž·áž‘áž…áŸ’ážšáž€áŸ” áž™áž¾áž„áž€áŸ†ážŽážáŸ‹ detection level ážáž¶áž˜ risk profile ážšáž”ážŸáŸ‹áž¢áŸ’áž“áž€áŸ”",
      },
      {
        qEn: "Can turnstiles connect to attendance or HR systems?",
        aEn:
          "Yes. We can sync turnstile events with attendance, visitor, or HR platforms through access controllers or API integrations, so entry logs and staff records update automatically.",
        qKm: "Turnstile áž¢áž¶áž…áž—áŸ’áž‡áž¶áž”áŸ‹áž‘áŸ… attendance áž¬ HR system áž”áž¶áž“áž‘áŸ?",
        aKm:
          "áž”áž¶áž“áŸ” áž™áž¾áž„áž¢áž¶áž… sync turnstile event áž‡áž¶áž˜áž½áž™ attendance, visitor áž¬ HR platform ážáž¶áž˜ access controller áž¬ API integration ážŠáž¾áž˜áŸ’áž”áž¸áž±áŸ’áž™ entry log áž“áž·áž„ staff record update ážŸáŸ’ážœáŸáž™áž”áŸ’ážšážœážáŸ’ážáž·áŸ”",
      },
      {
        qEn: "What power and network requirements do turnstiles need?",
        aEn:
          "Turnstiles typically require stable power, a controller panel, and network connectivity for central management. We plan wiring routes, UPS options, and controller placement to ensure reliable operation.",
        qKm: "Turnstile ážáŸ’ážšáž¼ážœáž€áž¶ážš power áž“áž·áž„ network requirement áž¢áŸ’ážœáž¸ážáŸ’áž›áŸ‡?",
        aKm:
          "áž‡áž¶áž‘áž¼áž‘áŸ… turnstile ážáŸ’ážšáž¼ážœáž€áž¶ážš power ážŸáŸ’ážáž·ážšáž—áž¶áž–, controller panel áž“áž·áž„ network connectivity ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž€ážŽáŸ’ážáž¶áž›áŸ” áž™áž¾áž„ážšáŸ€áž”áž…áŸ† wiring route, UPS option áž“áž·áž„áž‘áž¸ážáž¶áŸ†áž„ controller ážŠáž¾áž˜áŸ’áž”áž¸áž’áž¶áž“áž¶áž€áž¶ážšážŠáŸ†ážŽáž¾ážšáž€áž¶ážšáž‘áž»áž€áž…áž·ážáŸ’ážáž”áž¶áž“áŸ”",
      },
      {
        qEn: "How long does turnstile installation and setup take?",
        aEn:
          "Timelines depend on lane count, civil work, and integrations. Most projects include a site survey, installation and wiring, integration testing, and training before handover.",
        qKm: "áž€áž¶ážšážŠáŸ†áž¡áž¾áž„ áž“áž·áž„ setup Turnstile áž…áŸ†ážŽáž¶áž™áž–áŸáž›áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“?",
        aKm:
          "Timeline áž¢áž¶ážŸáŸ’ážšáŸáž™áž›áž¾áž…áŸ†áž“áž½áž“ lane, civil work áž“áž·áž„ integrationáŸ” áž‚áž˜áŸ’ážšáŸ„áž„áž—áž¶áž‚áž…áŸ’ážšáž¾áž“ážšáž½áž˜áž˜áž¶áž“ site survey, installation áž“áž·áž„ wiring, integration testing áž“áž·áž„ training áž˜áž»áž“áž–áŸáž› handoveráŸ”",
      },
    ],
    []
  );

  const jsonLd = useMemo(() => {
    const site =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";
    const url = site + "/turnstile-gate";

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site },
        { "@type": "ListItem", position: 2, name: "Turnstile Gate", item: url },
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
      itemListElement: PRODUCTS.filter((p) => p.primaryCategoryId === "turnstile_gate")
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
              {lang === "en" ? "Turnstile Gate" : "áž…áŸ’ážšáž€áž‘áŸ’ážœáž¶ážš Turnstile"}
            </span>
          </div>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] text-slate-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            {t.badge}
          </div>

          <div className="mt-4">
            <div className="max-w-none">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.h1}</h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-700/90 sm:text-base">
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

      <section id="products" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.gridTitle}</h2>
          <p className="mt-2 text-slate-600">{t.gridSub}</p>

          <div className="mt-6">
            <ProductGrid
              columns={3}
              pageSize={9}
              allowedCategoryIds={["turnstile_gate"]}
              filterCategoryIds={[
                "turnstile_tripod",
                "turnstile_flap_barrier",
                "turnstile_speed_gate",
                "turnstile_full_height",
              ]}
              excludeSlugs={[
                "ds-tm-turnstile-gate",
                "ds-tmg-turnstile-gate",
                "ds-tms-turnstile-gate",
              ]}
              showCategoryFilters
              showSort
              showPagination
            />
          </div>

        </div>
      </section>

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
                      { label: "Gate Types", href: "#types" },
                      { label: "Use Cases", href: "#use-cases" },
                      { label: "Integrations", href: "#integrations" },
                      { label: "Products", href: "#products" },
                      { label: "Process", href: "#process" },
                      { label: "FAQ", href: "#faq" },
                      { label: "Get Quotation", href: "#contact" },
                    ]
                  : [
                      { label: "áž›áž€áŸ’ážážŽáŸˆáž”áž…áŸ’áž…áŸáž€áž‘áŸážŸ", href: "#specs" },
                      { label: "áž˜áž¼áž›ážŠáŸ’áž‹áž¶áž“", href: "#basics" },
                      { label: "áž”áŸ’ážšáž—áŸáž‘áž…áŸ’ážšáž€", href: "#types" },
                      { label: "áž€ážšážŽáž¸áž”áŸ’ážšáž¾áž”áŸ’ážšáž¶ážŸáŸ‹", href: "#use-cases" },
                      { label: "áž€áž¶ážšážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž›", href: "#integrations" },
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

              <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                {t.howTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.howDesc}
              </p>
            </div>

            <div className="lg:col-span-5 lg:mt-6">
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

      <section id="types" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.typesTitle}</h2>
          <p className="mt-2 text-slate-600">{t.typesSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TypeCard title={t.t1} desc={t.t1d} />
            <TypeCard title={t.t2} desc={t.t2d} />
            <TypeCard title={t.t3} desc={t.t3d} />
            <TypeCard title={t.t4} desc={t.t4d} />
            <TypeCard title={t.t5} desc={t.t5d} />
          </div>
        </div>
      </section>

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

      <section id="integrations" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {t.integrationsTitle}
          </h2>
          <p className="mt-2 text-slate-600">{t.integrationsSub}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[t.i1, t.i2, t.i3, t.i4, t.i5, t.i6].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition duration-300 ease-out will-change-transform hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="selection" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {t.chooseTitle}
              </h2>
              <p className="mt-2 text-slate-600">{t.chooseSub}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.chooseDesc}</p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <ul className="space-y-2 text-sm text-slate-700">
                  {[t.c1, t.c2, t.c3, t.c4, t.c5, t.c6].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    {t.finalCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

function SpecCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="spec-card rounded-2xl bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function TypeCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
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

function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-semibold text-slate-500">{n}</div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}


