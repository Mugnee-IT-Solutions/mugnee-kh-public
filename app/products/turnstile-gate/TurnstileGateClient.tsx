
"use client";

import Link from "next/link";
import { useMemo } from "react";
import ProductGrid from "../../components/sections/ProductGrid";
import { useLang } from "../../components/layout/LanguageProvider";

type FAQ = { qEn: string; aEn: string; qKm: string; aKm: string };

export default function TurnstileGateClient() {
  const { lang } = useLang();
  const toLangHref = (href: string) =>
    lang === "km" && href.startsWith("/") && !href.startsWith("/km/") ? `/km${href}` : href;

  const t = useMemo(() => {
    const en = {
      breadcrumb: "" ,
      badge: "Cambodia - Turnstile Gate - Access Control",
      h1: "Turnstile Gate Solutions in Cambodia by Mugnee",
      sub:
        "Mugnee Cambodia provides professional turnstile gate and access control solutions in Cambodia for offices, factories, schools, transport hubs, and public venues. We supply tripod turnstile gates, flap barriers, speed gates, and full-height turnstiles with RFID card, QR code, and biometric integration, including on-site installation, commissioning, and local after-sales support.",
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
      t1: "ច្រកទ្វារបីដង",
      t1d:
        "Budget-friendly tripod turnstiles for staff entrances, schools, and factories. Reliable one-at-a-time control with RFID or QR access and low maintenance.",
      t2: "ច្រកស្លាបបិទបើក",
      t2d:
        "Elegant flap barrier gates for office lobbies, hotels, and public buildings. Faster passage, sensor safety, and premium aesthetics for modern spaces.",
      t3: "ច្រកល្បឿនលឿន",
      t3d:
        "High-throughput speed gates for metro stations, airports, and corporate HQs. Smooth glass panels, anti-tailgating logic, and fast flow control.",
      t4: "ច្រកកម្ពស់ពេញ",
      t4d:
        "Full-height turnstiles for maximum security at factories, stadiums, and restricted areas. Rugged construction for outdoor and 24/7 use.",
      t5: "ច្រកស្វ៊ីង / អុបទិក",
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
      badge: "កម្ពុជា - ច្រកទ្វារ Turnstile - គ្រប់គ្រងការចូលចេញ",
      h1: "ដំណោះស្រាយច្រកទ្វារ Turnstile នៅកម្ពុជា ដោយ Mugnee",
      sub:
        "Mugnee Cambodia ផ្តល់ប្រព័ន្ធច្រកទ្វារ turnstile ដោយវិជ្ជាជីវៈ សម្រាប់គ្រប់គ្រងការចូលចេញឱ្យមានសុវត្ថិភាព នៅការិយាល័យ រោងចក្រ សាលារៀន មជ្ឈមណ្ឌលដឹកជញ្ជូន និងទីតាំងសាធារណៈ។ យើងផ្គត់ផ្គង់ flap barrier, tripod turnstile, speed gate និង full-height turnstile ដែលអាចរួមបញ្ចូល RFID, QR និង biometric ព្រមទាំងសេវាដំឡើង commissioning និង after-sales support ក្នុងស្រុក។",
      cta1: "ស្នើសុំតម្លៃឥតគិតថ្លៃ",
      cta2: "មើលផលិតផល Turnstile",

      quickTitle: "រកមើលប្រភេទ Turnstile និងសេវាគ្រប់គ្រងការចូលចេញ",
      quickSub:
        "តំណរហ័សជួយឱ្យអ្នកចូលទៅកាន់ប្រភេទច្រក ការរួមបញ្ចូល ប្រភេទផលិតផល និងសេវាគាំទ្រ។",

      specsTitle: "លក្ខណៈបច្ចេកទេស និងមុខងារ Turnstile នៅកម្ពុជា",
      specsSub:
        "រៀបចំប្រព័ន្ធគ្រប់គ្រងការចូលចេញដោយជ្រើសប្រភេទច្រក តម្លាភាពឆ្លងកាត់ និងកម្រិតសុវត្ថិភាពឱ្យសមស្របសម្រាប់ក្នុង និងក្រៅអគារ។",
      sCard1t: "ប្រភេទច្រក",
      sCard1d:
        "ជម្រើស tripod, flap barrier, speed gate, full-height និង swing gate ដើម្បីឱ្យសមនឹងកម្រិតសុវត្ថិភាព និងបរិមាណអ្នកឆ្លងកាត់។",
      sCard2t: "វិធីសាស្ត្រចូលប្រើ",
      sCard2d:
        "គាំទ្រ RFID card, QR ticket, PIN, fingerprint និង face recognition ជាមួយប្រព័ន្ធ access control ឬ attendance។",
      sCard3t: "សុវត្ថិភាព និងគ្រាអាសន្ន",
      sCard3d:
        "ភ្ជាប់ fire alarm, emergency release, logic ការពារ tailgating និងរបៀប fail-safe/fail-secure។",
      sCard4t: "បរិយាកាសប្រើប្រាស់",
      sCard4d:
        "រចនាសម្រាប់ lobby ក្នុងអគារ និងទីតាំងក្រៅអគារ ដោយប្រើសម្ភារៈដែកអ៊ីណុក និងការពារអាកាសធាតុ។",
      sCard5t: "សមត្ថភាពឆ្លងកាត់",
      sCard5d:
        "lane មានប្រសិទ្ធភាពសម្រាប់គ្រប់គ្រងលំហូរអ្នកដំណើរ ដោយអាចកំណត់ល្បឿន និងសញ្ញាស្ថានភាពច្បាស់លាស់។",
      sCard6t: "ការដំឡើង",
      sCard6d:
        "ដំឡើងដោយវិជ្ជាជីវៈ ជាមួយគ្រឹះត្រឹមត្រូវ ការដាក់ខ្សែ កំណត់ controller សាកល្បងប្រព័ន្ធ និងបណ្តុះបណ្តាលនៅទីតាំង។",

      basicsLabel: "មូលដ្ឋាន TURNSTILE",
      basicsTitle: "Turnstile Gate គឺជាអ្វី?",
      basicsDesc:
        "Turnstile gate គឺជាឧបករណ៍គ្រប់គ្រងការចូលចេញ ដែលអនុញ្ញាតឱ្យមនុស្សឆ្លងកាត់ម្នាក់ម្តងទៅតំបន់សុវត្ថិភាព។ វាជួយទប់ស្កាត់ការចូលដោយគ្មានសិទ្ធិ កាត់បន្ថយ tailgating បង្កើនសុវត្ថិភាព និងធ្វើឱ្យលំហូរចូលចេញមានរបៀប។",
      howTitle: "Turnstile Gate ដំណើរការយ៉ាងដូចម្តេច?",
      howDesc:
        "ច្រកទ្វារទទួលសញ្ញាពីឧបករណ៍ចូលប្រើ (RFID, QR, biometric)។ ប្រសិនបើមានសិទ្ធិ barrier នឹងបើក ហើយកត់ត្រាព្រឹត្តិការណ៍ចូលចេញ។ controller នឹងគ្រប់គ្រងច្បាប់ចូលប្រើ កាលវិភាគពេលវេលា និងរបាយការណ៍។",
      benefitTitle: "អត្ថប្រយោជន៍សំខាន់សម្រាប់ទីតាំងនៅកម្ពុជា",
      b1: "គ្រប់គ្រងការចូលចេញ និងកាត់បន្ថយ tailgating",
      b2: "លំហូរចូលចេញលឿននៅទីតាំងមនុស្សច្រើន",
      b3: "រួមបញ្ចូលជាមួយ attendance និង visitor system",
      b4: "រចនាសម្ព័ន្ធដែកអ៊ីណុករឹងមាំ ធន់ប្រើប្រាស់",
      b5: "Emergency release និងសមស្របតាមស្តង់ដារសុវត្ថិភាព",

      typesTitle: "ប្រភេទច្រកទ្វារ Turnstile",
      typesSub:
        "ជ្រើសប្រភេទ turnstile ឱ្យត្រឹមត្រូវ ដោយផ្អែកលើកម្រិតសុវត្ថិភាព បរិមាណអ្នកឆ្លងកាត់ ទទឹង lane និងរចនាប័ទ្មទីតាំង។",
      t1: "ច្រកទ្វារបីដង",
      t1d:
        "ជម្រើសសន្សំថវិកាសម្រាប់ច្រកបុគ្គលិក សាលារៀន និងរោងចក្រ។ គ្រប់គ្រងម្នាក់ម្តងបានទុកចិត្ត ជាមួយ RFID ឬ QR និងថែទាំងាយស្រួល។",
      t2: "ច្រកស្លាបបិទបើក",
      t2d:
        "ច្រក flap barrier សម្រាប់ lobby ការិយាល័យ សណ្ឋាគារ និងអគារសាធារណៈ។ ឆ្លងកាត់លឿន មាន sensor សុវត្ថិភាព និងរចនាស្អាតទំនើប។",
      t3: "ច្រកល្បឿនលឿន",
      t3d:
        "speed gate សមត្ថភាពខ្ពស់ សម្រាប់ស្ថានីយ៍ អាកាសយានដ្ឋាន និងអគារសាជីវកម្ម។ កញ្ចក់រលូន anti-tailgating និងគ្រប់គ្រងលំហូរលឿន។",
      t4: "ច្រកកម្ពស់ពេញ",
      t4d:
        "full-height turnstile សម្រាប់សុវត្ថិភាពខ្ពស់បំផុត នៅរោងចក្រ កីឡដ្ឋាន និងតំបន់កំណត់សិទ្ធិ។ រឹងមាំ សមស្របសម្រាប់ក្រៅអគារ និងប្រើ 24/7។",
      t5: "ច្រកស្វ៊ីង / អុបទិក",
      t5d:
        "swing/optical gate សម្រាប់ lane ទូលាយ និងអ្នកប្រើ stroller ឬ wheelchair។ សមស្របសម្រាប់ច្រកចេញចូលចម្រុះ និងទីតាំងដែលងាយស្រួលសម្រាប់ភ្ញៀវ។",

      useTitle: "ទីតាំងដែលប្រើ Turnstile Gate នៅកម្ពុជា",
      useSub:
        "ឧទាហរណ៍ប្រើប្រាស់ turnstile ទូទៅនៅកម្ពុជា ដោយផ្អែកលើសុវត្ថិភាព លំហូរអ្នកឆ្លងកាត់ និងតម្រូវការអនុវត្តតាមស្តង់ដារ។",
      u1t: "រោងចក្រ & តំបន់ឧស្សាហកម្ម",
      u1d:
        "គ្រប់គ្រងការចូលវេនការងារ រួមបញ្ចូល attendance អនុវត្ត PPE និងការពារច្រកជុំវិញសម្រាប់រោងចក្រ។",
      u2t: "សាលារៀន & Campus",
      u2d:
        "គ្រប់គ្រងការចូលរបស់សិស្ស ស្កេនភ្ញៀវ និងការគ្រប់គ្រងចូលព្រឹត្តិការណ៍ ដើម្បីបង្កើនសុវត្ថិភាពក្នុង campus។",
      u3t: "ការិយាល័យ & អគារសាជីវកម្ម",
      u3d:
        "គ្រប់គ្រងការចូល lobby ឱ្យមានសុវត្ថិភាព តំបន់សម្រាប់បុគ្គលិក និងការរួមបញ្ចូល smart office ជាមួយ RFID ឬ biometric។",
      u4t: "ទីតាំងសាធារណៈ & កីឡដ្ឋាន",
      u4d:
        "គ្រប់គ្រងការចូលដោយសំបុត្រ លំហូរមនុស្ស និងការពារ tailgating សម្រាប់ទីតាំងសាធារណៈ។",
      u5t: "មន្ទីរពេទ្យ & ស្ថាប័នសាធារណៈ",
      u5d:
        "គ្រប់គ្រងការចូលតំបន់កំណត់សិទ្ធិ សុវត្ថិភាពតំបន់អ្នកជំងឺ និងតាមដានបុគ្គលិកសម្រាប់ការអនុវត្តតាមស្តង់ដារ។",
      u6t: "មជ្ឈមណ្ឌលដឹកជញ្ជូន",
      u6d:
        "ការចូលចេញលឿន និងគ្រប់គ្រងបាន នៅស្ថានីយ៍ និង terminal ជាមួយ lane control និងរាប់ចំនួនអ្នកដំណើរ។",

      integrationsTitle: "ជម្រើសរួមបញ្ចូល Turnstile នៅកម្ពុជា",
      integrationsSub:
        "រួមបញ្ចូល turnstile ជាមួយ access control, attendance និង safety system ដើម្បីឱ្យការចូលចេញមានសុវត្ថិភាព និងស្វ័យប្រវត្តិ។",
      i1: "RFID card, keyfob និងប័ណ្ណសម្គាល់ smart ID",
      i2: "QR code ticket, mobile pass និង e-ticket",
      i3: "Fingerprint, face recognition ឬ PIN access",
      i4: "Visitor management និង reception system",
      i5: "Sync ជាមួយ attendance, HR និង payroll software",
      i6: "ភ្ជាប់ fire alarm និង emergency release",

      chooseTitle: "របៀបជ្រើស Turnstile Gate ឱ្យត្រឹមត្រូវនៅកម្ពុជា",
      chooseSub:
        "Checklist ជាក់ស្តែងសម្រាប់ជ្រើស turnstile ត្រឹមត្រូវ តាមលំហូរមនុស្ស កម្រិតសុវត្ថិភាព និងតម្រូវការរួមបញ្ចូល។",
      chooseDesc:
        "ចាប់ផ្តើមពីការប៉ាន់ស្មានលំហូរមនុស្សពេលមមាញឹក និងកម្រិតគ្រប់គ្រងការចូលដែលអ្នកត្រូវការ បន្ទាប់មកផ្គូផ្គងប្រភេទ lane (tripod, flap barrier, speed gate ឬ full-height) ឱ្យសមនឹងទំហំទីតាំង រចនាប័ទ្ម និងគោលនយោបាយសុវត្ថិភាព។ គួរពិចារណាផងដែរ អំពីការដំឡើងក្នុង/ក្រៅអគារ ការប៉ះពាល់អាកាសធាតុ ភាពរួចរាល់នៃភ្លើង និងបណ្តាញ និងវិធីសាស្ត្រចូលប្រើរបស់អ្នកប្រើ (RFID, QR, PIN ឬ biometric)។ ចុងក្រោយ ត្រូវបញ្ជាក់ការរួមបញ្ចូលជាមួយ attendance, visitor management ឬ HR system ដើម្បីគាំទ្រការប្រតិបត្តិប្រចាំថ្ងៃ និងការពង្រីកនាពេលអនាគត។",
      c1: "បរិមាណអ្នកឆ្លងកាត់ និង throughput ត្រូវការក្នុងមួយនាទី",
      c2: "កម្រិតសុវត្ថិភាព (ទាប មធ្យម ខ្ពស់) និងតម្រូវការការពារ tailgating",
      c3: "ការដំឡើងក្នុង/ក្រៅអគារ និងការប៉ះពាល់អាកាសធាតុ",
      c4: "វិធីចូលប្រើ (RFID, QR, PIN, biometric) និងប្រភេទអ្នកប្រើ",
      c5: "ការរួមបញ្ចូលជាមួយ attendance, visitor ឬ HR system",
      c6: "តម្រូវការភ្លើង បណ្តាញ និង emergency release",

      gridTitle: "ផលិតផល Turnstile Gate",
      gridSub:
        "ស្វែងរកម៉ូដែល turnstile gate សម្រាប់ការិយាល័យ រោងចក្រ សាលារៀន និងទីតាំងសាធារណៈ។",

      processTitle: "ការដំឡើង Setup និងបណ្តុះបណ្តាល Turnstile នៅកម្ពុជា",
      processSub:
        "ដំណើរការអនុវត្តជាប្រព័ន្ធ ដើម្បីឱ្យប្រតិបត្តិការស្ថិរភាព ការដាក់ខ្សែស្អាត និងលំហូរអ្នកដំណើររលូនចាប់ពីថ្ងៃដំបូង។",
      p1: "Site survey សិក្សាលំហូរមនុស្ស និង map ដំណើរការចូលចេញ",
      p1d:
        "យើងពិនិត្យច្រកចូលវាស់លំហូរពេលមមាញឹក និងពិនិត្យគោលនយោបាយសុវត្ថិភាព ដើម្បីកំណត់ចំនួន lane ទីតាំងដំឡើង និងវិធីចូលប្រើដែលត្រឹមត្រូវ។",
      p2: "ជ្រើសច្រក រចនា lane layout និងផែនការប្រព័ន្ធ",
      p2d:
        "យើងផ្គូផ្គង tripod, flap, speed gate ឬ full-height ឱ្យសមនឹងទីតាំង រួចបញ្ចប់ផែនការ layout ភ្លើង និងបណ្តាញ។",
      p3: "ដំឡើង ដាក់ខ្សែ សាកល្បងការរួមបញ្ចូល និងពិនិត្យសុវត្ថិភាព",
      p3d:
        "ក្រុមការងារយើងដំឡើងច្រក ដាក់ខ្សែឱ្យស្អាត រួមបញ្ចូល controller និងពិនិត្យ emergency release ព្រមទាំងភាពសមស្របតាមស្តង់ដារ។",
      p4: "បណ្តុះបណ្តាលអ្នកប្រើ ឯកសារប្រគល់ និងគាំទ្របន្ត",
      p4d:
        "យើងបណ្តុះបណ្តាលអ្នកប្រតិបត្តិការ ផ្តល់ឯកសារប្រគល់ និង after-sales support ដើម្បីឱ្យប្រព័ន្ធដំណើរការរលូនជាប់លាប់។",

      faqTitle: "សំណួរញឹកញាប់អំពី Turnstile នៅកម្ពុជា៖ ការដំឡើង សុវត្ថិភាព និងការរួមបញ្ចូល",
      finalTitle: "ស្នើសុំតម្លៃតាមគម្រោង",
      finalSub:
        "សូមផ្តល់ព័ត៌មានប្រភេទទីតាំង បរិមាណអ្នកឆ្លងកាត់ វិធីចូលប្រើ និងតម្រូវការរួមបញ្ចូល។ យើងនឹងណែនាំ turnstile ដែលសមស្រប និងផ្តល់តម្លៃច្បាស់លាស់។",
      finalCta: "ទាក់ទង និងស្នើសុំតម្លៃ",
      viewProducts: "មើលផលិតផល",
      note:
        "ចំណាំ៖ តម្លៃចុងក្រោយអាស្រ័យលើប្រភេទច្រក បរិមាណ វិធីចូលប្រើ លក្ខខណ្ឌដំឡើង និងតម្រូវការរួមបញ្ចូល។",
      getQuote: "ស្នើសុំតម្លៃ",
    };

    return lang === "en" ? en : km;
  }, [lang]);

  const faqs: FAQ[] = useMemo(
    () => [
      {
        qEn: "Which turnstile type is best for my site in Cambodia?",
        aEn:
          "Choose based on security level, traffic volume, and environment. Full-height turnstiles suit perimeter or high-security sites and are built for outdoor use, with designs that deter climbing and tailgating. Speed or optical gates use multi-beam sensors to prevent piggybacking and are ideal for high-traffic lobbies. Tripod units are a cost-effective fit for staff entrances and controlled indoor zones.",
        qKm: "សម្រាប់ទីតាំងនៅកម្ពុជា តើគួរជ្រើសច្រក Turnstile ប្រភេទណា?",
        aKm:
          "ត្រូវជ្រើសតាមកម្រិតសុវត្ថិភាព បរិមាណអ្នកឆ្លងកាត់ និងបរិយាកាសប្រើប្រាស់។ Full-height turnstile សមស្របសម្រាប់តំបន់ perimeter ឬកន្លែងសុវត្ថិភាពខ្ពស់ និងសាកសមការប្រើក្រៅអគារ។ Speed/optical gate មាន multi-beam sensor កាត់បន្ថយ piggybacking សមស្របសម្រាប់ lobby ដែលមានចរាចរណ៍ខ្ពស់។ Tripod unit គឺជាជម្រើសសន្សំថវិកាសម្រាប់ច្រកបុគ្គលិក និងតំបន់ក្នុងអគារដែលត្រូវការគ្រប់គ្រង។",
      },
      {
        qEn: "Which access methods can a turnstile gate integrate with?",
        aEn:
          "Most modern turnstiles integrate with RFID cards, QR or mobile tickets, PIN keypads, and biometric systems such as fingerprint or face recognition. We match the access method to your security policy and user type, then connect it to your access control or attendance platform.",
        qKm: "ច្រក Turnstile អាចរួមបញ្ចូលជាមួយវិធីផ្ទៀងផ្ទាត់អ្វីខ្លះ?",
        aKm:
          "Turnstile ទំនើបភាគច្រើនអាចរួមបញ្ចូលជាមួយ RFID card, QR/mobile ticket, PIN keypad និង biometric ដូចជា fingerprint ឬ face recognition។ យើងជ្រើស access method ឱ្យសមនឹងគោលនយោបាយសុវត្ថិភាព និងប្រភេទអ្នកប្រើ រួចភ្ជាប់ទៅ access control/attendance platform របស់អ្នក។",
      },
      {
        qEn: "Do we need an accessible gate next to a turnstile?",
        aEn:
          "Yes. Accessibility standards state that turnstiles cannot be part of an accessible route, and an accessible gate or door must be provided alongside them. We plan a compliant adjacent lane so all users can pass through comfortably.",
        qKm: "តើត្រូវការច្រកអាចចូលប្រើបានសម្រាប់អ្នកគ្រប់ប្រភេទ នៅជិត Turnstile ដែរឬទេ?",
        aKm:
          "ត្រូវការ។ តាម accessibility standard, turnstile មិនអាចជាច្រកសម្រាប់អ្នកប្រើគ្រប់ប្រភេទបានទេ ដូច្នេះត្រូវមាន accessible gate/door នៅជាប់គ្នា។ យើងរៀបចំ lane បន្ថែមឱ្យស្របតាមស្តង់ដារ ដើម្បីឱ្យអ្នកប្រើទាំងអស់ឆ្លងកាត់បានងាយស្រួល។",
      },
      {
        qEn: "How do turnstiles handle emergency evacuation or power loss?",
        aEn:
          "Turnstiles can be configured for fail-safe or fail-secure operation and connected to fire-alarm inputs so lanes release during emergencies. Many speed gates also support auto-open behavior during power failure or alarm events.",
        qKm: "Turnstile ដំណើរការយ៉ាងដូចម្តេចពេលជម្លៀសបន្ទាន់ ឬដាច់ភ្លើង?",
        aKm:
          "Turnstile អាចកំណត់ជា fail-safe ឬ fail-secure ហើយភ្ជាប់ fire-alarm input ដើម្បីបើក lane ពេលមានអាសន្ន។ Speed gate ជាច្រើនក៏គាំទ្រ auto-open នៅពេល power failure ឬ alarm event ផងដែរ។",
      },
      {
        qEn: "Are turnstile gates suitable for outdoor use in Cambodia?",
        aEn:
          "Yes. Full-height turnstiles are designed for outdoor and indoor installation with weather-resistant materials, making them a good choice for perimeter security, factories, and transport sites.",
        qKm: "ច្រក Turnstile សមស្របសម្រាប់ប្រើក្រៅអគារនៅកម្ពុជាដែរឬទេ?",
        aKm:
          "សមស្រប។ Full-height turnstile ត្រូវបានរចនាសម្រាប់ទាំង outdoor និង indoor ដោយប្រើវត្ថុធាតុធន់អាកាសធាតុ សាកសមសម្រាប់ perimeter security, factory និងទីតាំងដឹកជញ្ជូន។",
      },
      {
        qEn: "How do we estimate lane count and throughput?",
        aEn:
          "We start with your peak-hour flow and target people-per-minute throughput. Speed/optical gates are designed for higher throughput and use sensor systems to keep flow smooth, while tripod or full-height lanes prioritize stricter control. The final lane count balances flow, space, and security.",
        qKm: "តើគណនាចំនួនច្រក និងលំហូរអ្នកឆ្លងកាត់យ៉ាងដូចម្តេច?",
        aKm:
          "យើងចាប់ផ្តើមពី peak-hour flow និងគោលដៅ people-per-minute throughput។ Speed/optical gate សម្រាប់ throughput ខ្ពស់ និងលំហូររលូន ខណៈ tripod/full-height lane ផ្តោតលើការគ្រប់គ្រងតឹងរ៉ឹងជាង។ ចំនួន lane ចុងក្រោយត្រូវបានប៉ាន់ស្មានតាម flow, space និង security។",
      },
      {
        qEn: "Can turnstiles prevent tailgating or unauthorized entry?",
        aEn:
          "Yes. Full-height designs physically deter climbing and tailgating, while speed gates use infrared sensor arrays to detect piggybacking and trigger alarms or closures. We configure the detection level based on your risk profile.",
        qKm: "Turnstile អាចការពារការឆ្លងកាត់តាមក្រោយ ឬការចូលដោយគ្មានសិទ្ធិបានទេ?",
        aKm:
          "បាន។ Full-height design អាចរារាំងការឡើងរំលោភ និង tailgating ខណៈ speed gate ប្រើ infrared sensor array ដើម្បីរកឃើញ piggybacking ហើយបង្កើត alarm ឬបិទច្រក។ យើងកំណត់ detection level តាម risk profile របស់អ្នក។",
      },
      {
        qEn: "Can turnstiles connect to attendance or HR systems?",
        aEn:
          "Yes. We can sync turnstile events with attendance, visitor, or HR platforms through access controllers or API integrations, so entry logs and staff records update automatically.",
        qKm: "Turnstile អាចភ្ជាប់ទៅប្រព័ន្ធវត្តមាន ឬប្រព័ន្ធធនធានមនុស្សបានទេ?",
        aKm:
          "បាន។ យើងអាច sync turnstile event ជាមួយ attendance, visitor ឬ HR platform តាម access controller ឬ API integration ដើម្បីឱ្យ entry log និង staff record update ស្វ័យប្រវត្តិ។",
      },
      {
        qEn: "What power and network requirements do turnstiles need?",
        aEn:
          "Turnstiles typically require stable power, a controller panel, and network connectivity for central management. We plan wiring routes, UPS options, and controller placement to ensure reliable operation.",
        qKm: "Turnstile ត្រូវការថាមពល និងតម្រូវការបណ្តាញអ្វីខ្លះ?",
        aKm:
          "ជាទូទៅ turnstile ត្រូវការ power ស្ថិរភាព, controller panel និង network connectivity សម្រាប់ការគ្រប់គ្រងកណ្តាល។ យើងរៀបចំ wiring route, UPS option និងទីតាំង controller ដើម្បីធានាការដំណើរការទុកចិត្តបាន។",
      },
      {
        qEn: "How long does turnstile installation and setup take?",
        aEn:
          "Timelines depend on lane count, civil work, and integrations. Most projects include a site survey, installation and wiring, integration testing, and training before handover.",
        qKm: "ការដំឡើង និងកំណត់ប្រព័ន្ធ Turnstile ចំណាយពេលប៉ុន្មាន?",
        aKm:
          "Timeline អាស្រ័យលើចំនួន lane, civil work និង integration។ គម្រោងភាគច្រើនរួមមាន site survey, installation និង wiring, integration testing និង training មុនពេល handover។",
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

    return { breadcrumb, faqSchema };
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
              {lang === "en" ? "Turnstile Gate" : "ច្រកទ្វារ Turnstile"}
            </span>
          </div>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] text-slate-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            {t.badge}
          </div>

          <div className="mt-4">
            <div className="max-w-none">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.h1}</h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-700/90 sm:text-base [text-align:justify]">
                {lang === "en" ? (
                  <>
                    Mugnee Cambodia provides professional <strong>turnstile gate</strong>{" "}
                    and <strong>access control solutions</strong> in Cambodia for
                    offices, factories, schools, transport hubs, and public venues. We
                    supply <strong>tripod turnstile gates</strong>,{" "}
                    <strong>flap barriers</strong>, <strong>speed gates</strong>, and{" "}
                    <strong>full-height turnstiles</strong> with{" "}
                    <strong>RFID card</strong>, <strong>QR code</strong>, and{" "}
                    <strong>biometric integration</strong>, including on-site{" "}
                    <strong>installation</strong>, <strong>commissioning</strong>, and
                    local <strong>after-sales support</strong>.
                  </>
                ) : (
                  <>
                    Mugnee Cambodia ផ្តល់ដំណោះស្រាយ <strong>Turnstile Gate</strong>{" "}
                    និង <strong>Access Control</strong> នៅកម្ពុជា សម្រាប់ការិយាល័យ
                    រោងចក្រ សាលារៀន មជ្ឈមណ្ឌលដឹកជញ្ជូន និងទីតាំងសាធារណៈ។ យើងផ្គត់ផ្គង់{" "}
                    <strong>ច្រកទ្វារបីដង Gate</strong>,{" "}
                    <strong>ច្រកស្លាបបិទបើក</strong>, <strong>ច្រកល្បឿនលឿន</strong>, និង{" "}
                    <strong>ច្រកកម្ពស់ពេញ</strong> ជាមួយ{" "}
                    <strong>RFID Card</strong>, <strong>QR Code</strong>, និង{" "}
                    <strong>Biometric Integration</strong> រួមទាំង{" "}
                    <strong>Installation</strong>, <strong>Commissioning</strong> និង
                    សេវា <strong>After-Sales Support</strong> ក្នុងស្រុក។
                  </>
                )}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <Link
                  href={toLangHref("/contact")}
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
                {lang === "en" ? "Quick Links" : "តំណរហ័ស"}
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
                      { label: "លក្ខណៈបច្ចេកទេស", href: "#specs" },
                      { label: "មូលដ្ឋាន", href: "#basics" },
                      { label: "ប្រភេទច្រក", href: "#types" },
                      { label: "ករណីប្រើប្រាស់", href: "#use-cases" },
                      { label: "ការរួមបញ្ចូល", href: "#integrations" },
                      { label: "ផលិតផល", href: "#products" },
                      { label: "ដំណើរការ", href: "#process" },
                      { label: "សំណួរញឹកញាប់", href: "#faq" },
                      { label: "ស្នើសុំតម្លៃ", href: "#contact" },
                    ]
              ).map((item) => (
                <a
                  key={item.href}
                  href={toLangHref(item.href)}
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
                    href={toLangHref("/contact")}
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
                href={toLangHref("/contact")}
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

