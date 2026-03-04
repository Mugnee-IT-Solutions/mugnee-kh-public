"use client";

import Link from "next/link";
import { useLang } from "../components/layout/LanguageProvider";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/solutions";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const EN = {
  breadcrumbHome: "Home",
  breadcrumb: "Solutions",
  heroEyebrow: "Solutions",
  heroTitle: "Cambodia LED, Signage & Access Control Solutions",
  heroDesc:
    "Mugnee Cambodia provides end-to-end business technology solutions in Cambodia for retail, corporate offices, factories, education campuses, healthcare facilities, hospitality venues, and public-sector sites. Our team delivers complete project execution including site survey, system design, BOQ planning, product supply, professional installation, system integration, commissioning, operator training, and long-term after-sales support for LED display, digital signage, PA systems, turnstile gates, and access control. We optimize each deployment for local operating conditions, target audience visibility, safety compliance, and scalable expansion so businesses can improve communication performance, brand impact, and day-to-day operational control.",
  ctaQuote: "Get a Free Quotation",
  ctaProducts: "View Products",
  heroFoot: "Serving Phnom Penh - Siem Reap - Sihanoukville and nationwide projects",
  marketTitle: "Cambodia Market-Ready LED, Signage & Access Control Solutions",
  marketDesc:
    "We align each solution with local market needs, site conditions, and operational goals.",
  quickSummary: "Quick Summary",
  cityTitle: "Cambodia City Coverage for LED Display, Signage & Access Control",
  cityDesc: "We design by city profile, traffic, and operating conditions.",
  categoriesTitle: "Cambodia Business Solution Categories: LED, Signage, PA & Access Control",
  categoriesDesc: "Explore solution categories for Cambodia projects.",
  intentClusterTitle: "Intent Cluster Navigation",
  intentClusterDesc:
    "Route each query intent to the exact solution or product hub for stronger page-topic alignment.",
  useCasesTitle: "Industry Use Cases in Cambodia for LED Display & Access Control",
  useCasesDesc: "Reliable AV, security, and communication for real business scenarios.",
  budgetTitle: "Cambodia Solution Budget, BOQ & Rollout Planning",
  budgetDesc: "We scope by site complexity and expansion goals.",
  workflowTitle: "Cambodia Solution Installation, Integration & Commissioning Workflow",
  workflowDesc: "Structured delivery for stable long-term operation.",
  integrationTitle: "Integration Options in Cambodia: RFID, Biometric, CMS & PA Systems",
  integrationDesc: "Integrated AV, security, and operations workflows.",
  checklistTitle: "Cambodia Technical Compliance & Site Readiness Checklist",
  checklistDesc: "Validate readiness and reduce deployment risk.",
  whyTitle: "Why Choose Mugnee Cambodia for LED, Signage & Access Control Solutions",
  whyDesc: "Local execution, integration depth, quality deployment, and strong after-sales support.",
  faqTitle: "Mugnee Business Solutions FAQs: Cost, Installation, Integration & Support",
  finalTitle: "Get a Cambodia LED, Signage & Access Control Solution Plan",
  finalDesc: "Share your site and goals. We will recommend the right solution and quotation.",
  finalCta1: "Contact Mugnee Cambodia",
  finalCta2: "View Products",
};

const KM = {
  breadcrumbHome: "ទំព័រដើម",
  breadcrumb: "ដំណោះស្រាយ",
  heroEyebrow: "ដំណោះស្រាយ",
  heroTitle: "ដំណោះស្រាយ LED, ស្លាកឌីជីថល និង Access Control នៅកម្ពុជា",
  heroDesc:
    "Mugnee Cambodia ផ្តល់ដំណោះស្រាយបច្ចេកវិទ្យាអាជីវកម្មបែប ចាប់ពីដើមដល់ចប់ នៅកម្ពុជា សម្រាប់ហាងលក់រាយ ការិយាល័យក្រុមហ៊ុន រោងចក្រ ស្ថាប័នអប់រំ មណ្ឌលសុខាភិបាល វិស័យបដិសណ្ឋារកិច្ច និងគម្រោងសាធារណៈ។ ក្រុមការងារយើងអនុវត្តគម្រោងពេញលេញចាប់ពីការស្ទង់ទីតាំង ការរចនាប្រព័ន្ធ ការរៀបចំ បញ្ជីបរិមាណការងារ ការផ្គត់ផ្គង់ឧបករណ៍ ការដំឡើងដោយវិជ្ជាជីវៈ ការបញ្ចូលប្រព័ន្ធ ការបើកដំណើរការ ការបណ្តុះបណ្តាលអ្នកប្រើ និងសេវាកម្មបន្ទាប់ពីលក់រយៈពេលវែង សម្រាប់ អេក្រង់ LED, អេក្រង់ផ្សព្វផ្សាយឌីជីថល, ប្រព័ន្ធផ្សាយសំឡេងសាធារណៈ, ទ្វារបង្វិលគ្រប់គ្រងច្រកចេញចូល និង ប្រព័ន្ធគ្រប់គ្រងការចូលចេញ។ យើងកែតម្រូវការដំឡើងនីមួយៗឱ្យសមស្របនឹងលក្ខខណ្ឌប្រតិបត្តិការក្នុងតំបន់ ភាពមើលឃើញរបស់ទស្សនិកជន ស្តង់ដារសុវត្ថិភាព និងផែនការពង្រីកនាពេលអនាគត ដើម្បីជួយអាជីវកម្មបង្កើនប្រសិទ្ធភាពទំនាក់ទំនង កម្លាំងម៉ាក និងការគ្រប់គ្រងប្រតិបត្តិការប្រចាំថ្ងៃ។",
  ctaQuote: "ស្នើសុំតម្លៃដោយឥតគិតថ្លៃ",
  ctaProducts: "មើលផលិតផល",
  heroFoot: "បម្រើសេវា៖ ភ្នំពេញ - សៀមរាប - ព្រះសីហនុ និងទូទាំងប្រទេស",
  marketTitle: "ដំណោះស្រាយ អេក្រង់ LED និងអេក្រង់ផ្សព្វផ្សាយ និង ប្រព័ន្ធគ្រប់គ្រងការចូលចេញ សមស្របទីផ្សារកម្ពុជា",
  marketDesc:
    "យើងរៀបចំដំណោះស្រាយនីមួយៗឱ្យសមនឹងតម្រូវការទីផ្សារ លក្ខខណ្ឌទីតាំង និងគោលដៅប្រតិបត្តិការ។",
  quickSummary: "សេចក្តីសង្ខេបរហ័ស",
  cityTitle: "តំបន់សេវាកម្មតាមទីក្រុងនៅកម្ពុជា សម្រាប់ អេក្រង់ អេក្រង់ LED និងអេក្រង់ផ្សព្វផ្សាយ និង ប្រព័ន្ធគ្រប់គ្រងការចូលចេញ",
  cityDesc: "ការរចនាដំណោះស្រាយផ្អែកលើប្រភេទទីក្រុង ចរាចរណ៍ និងលក្ខខណ្ឌប្រតិបត្តិការ។",
  categoriesTitle: "ប្រភេទដំណោះស្រាយអាជីវកម្មនៅកម្ពុជា៖ អេក្រង់ LED និងអេក្រង់ផ្សព្វផ្សាយ, ប្រព័ន្ធផ្សាយសំឡេងសាធារណៈ និង ប្រព័ន្ធគ្រប់គ្រងការចូលចេញ",
  categoriesDesc: "ស្វែងរកប្រភេទដំណោះស្រាយសម្រាប់គម្រោងនៅកម្ពុជា។",
  intentClusterTitle: "ការណែនាំតាម ចង្កោមបំណងស្វែងរក",
  intentClusterDesc:
    "បែងចែក query intent ទៅទំព័រដំណោះស្រាយ ឬ product hub ដែលត្រឹមត្រូវ ដើម្បីធ្វើឱ្យ topical signal ច្បាស់។",
  useCasesTitle: "ករណីប្រើប្រាស់តាមវិស័យនៅកម្ពុជា សម្រាប់ អេក្រង់ LED និង ប្រព័ន្ធគ្រប់គ្រងការចូលចេញ",
  useCasesDesc: "ប្រព័ន្ធ សំឡេង និងរូបភាព សុវត្ថិភាព និងទំនាក់ទំនងដែលជឿជាក់ សម្រាប់ការប្រើប្រាស់ជាក់ស្តែង។",
  budgetTitle: "ថវិកា បញ្ជីបរិមាណការងារ និងផែនការដាក់ប្រើប្រាស់ដំណោះស្រាយនៅកម្ពុជា",
  budgetDesc: "យើងកំណត់វិសាលភាពគម្រោងតាមស្មុគស្មាញទីតាំង និងគោលដៅពង្រីក។",
  workflowTitle: "លំហូរការងារដំឡើង បញ្ចូលប្រព័ន្ធ និងបើកប្រើប្រាស់នៅកម្ពុជា",
  workflowDesc: "ដំណើរការរៀបចំច្បាស់លាស់ សម្រាប់ស្ថិរភាពប្រើប្រាស់រយៈពេលវែង។",
  integrationTitle: "ជម្រើសបញ្ចូលប្រព័ន្ធនៅកម្ពុជា៖ RFID, ជីវមាត្រ និងប្រព័ន្ធគ្រប់គ្រងមាតិកា និង ប្រព័ន្ធផ្សាយសំឡេងសាធារណៈs",
  integrationDesc: "ភ្ជាប់ សំឡេង និងរូបភាព សុវត្ថិភាព និងប្រតិបត្តិការ ឱ្យធ្វើការជាមួយគ្នា។",
  checklistTitle: "បញ្ជីត្រួតពិនិត្យស្តង់ដារបច្ចេកទេស និងការត្រៀមទីតាំងនៅកម្ពុជា",
  checklistDesc: "ផ្ទៀងផ្ទាត់ភាពរួចរាល់ និងកាត់បន្ថយហានិភ័យដាក់ប្រើប្រាស់។",
  whyTitle: "ហេតុអ្វីគួរជ្រើសរើស Mugnee Cambodia សម្រាប់ដំណោះស្រាយ អេក្រង់ LED និងអេក្រង់ផ្សព្វផ្សាយ និង ប្រព័ន្ធគ្រប់គ្រងការចូលចេញ",
  whyDesc: "ជំនាញក្នុងតំបន់ ជម្រៅបញ្ចូលប្រព័ន្ធ គុណភាពដំឡើង និងសេវាបន្ទាប់ពីលក់ជាក់ស្តែង។",
  faqTitle: "សំណួរញឹកញាប់អំពីដំណោះស្រាយអាជីវកម្ម Mugnee",
  finalTitle: "ទទួលផែនការដំណោះស្រាយ អេក្រង់ LED និងអេក្រង់ផ្សព្វផ្សាយ និង ប្រព័ន្ធគ្រប់គ្រងការចូលចេញ សម្រាប់កម្ពុជា",
  finalDesc: "ប្រាប់យើងអំពីទីតាំង និងគោលដៅរបស់អ្នក។ យើងនឹងណែនាំដំណោះស្រាយ និងតម្លៃសមស្រប។",
  finalCta1: "ទាក់ទង Mugnee Cambodia",
  finalCta2: "មើលផលិតផល",
};

const solutionLinksEn = [
  {
    title: "Indoor Communication Solutions",
    desc: "Industry page for indoor visitor and guest communication workflows.",
    href: "/solutions/indoor-communication-solutions-cambodia",
  },
  {
    title: "Outdoor Campaign Solutions",
    desc: "Industry page for storefront and high-traffic campaign visibility planning.",
    href: "/solutions/outdoor-campaign-solutions-cambodia",
  },
  {
    title: "Retail Digital Signage Solutions",
    desc: "Industry page for retail and mall communication deployments.",
    href: "/solutions/retail-digital-signage-cambodia",
  },
  {
    title: "Hotel Display Solutions",
    desc: "Industry page for hospitality guest communication workflows.",
    href: "/solutions/hotel-display-solutions-cambodia",
  },
  {
    title: "Factory PA Announcement Solutions",
    desc: "Industry page for factory-wide announcement planning.",
    href: "/solutions/factory-pa-announcement-cambodia",
  },
  {
    title: "Office Access Control Solutions",
    desc: "Industry page for office and building entry governance.",
    href: "/solutions/office-access-control-cambodia",
  },
  {
    title: "Education Smart Classroom Solutions",
    desc: "Industry page for school and training environments.",
    href: "/solutions/education-smart-classroom-cambodia",
  },
  { title: "Interactive Flat Panel", desc: "Dedicated product hub for classroom systems.", href: "/interactive-flat-panel" },
];

const solutionLinksKm = [
  {
    title: "ដំណោះស្រាយទំនាក់ទំនងខាងក្នុង",
    desc: "ទំព័រតាមវិស័យ សម្រាប់ការទំនាក់ទំនងភ្ញៀវ និងអ្នកចូលមកក្នុងអគារ។",
    href: "/solutions/indoor-communication-solutions-cambodia",
  },
  {
    title: "ដំណោះស្រាយយុទ្ធនាការក្រៅអគារ",
    desc: "ទំព័រតាមវិស័យ សម្រាប់ ភាពមើលឃើញយុទ្ធនាការ តាម storefront និងទីតាំងចរាចរណ៍ខ្ពស់។",
    href: "/solutions/outdoor-campaign-solutions-cambodia",
  },
  {
    title: "ដំណោះស្រាយ អេក្រង់ផ្សព្វផ្សាយឌីជីថល សម្រាប់ហាង និងផ្សារទំនើប",
    desc: "ទំព័រតាមវិស័យ សម្រាប់គម្រោង លក់រាយ និង ផ្សារទំនើប។",
    href: "/solutions/retail-digital-signage-cambodia",
  },
  {
    title: "ដំណោះស្រាយប្រព័ន្ធបង្ហាញសម្រាប់សណ្ឋាគារ",
    desc: "ទំព័រតាមវិស័យ សម្រាប់ បដិសណ្ឋារកិច្ច និងការទំនាក់ទំនងភ្ញៀវ។",
    href: "/solutions/hotel-display-solutions-cambodia",
  },
  {
    title: "ដំណោះស្រាយ ប្រព័ន្ធផ្សាយសំឡេងសាធារណៈ សម្រាប់រោងចក្រ",
    desc: "ទំព័រតាមវិស័យ សម្រាប់ការផ្សាយសារក្នុងតំបន់ឧស្សាហកម្ម។",
    href: "/solutions/factory-pa-announcement-cambodia",
  },
  {
    title: "ដំណោះស្រាយគ្រប់គ្រងច្រកចូលសម្រាប់ការិយាល័យ",
    desc: "ទំព័រតាមវិស័យ សម្រាប់ ការិយាល័យ ប្រព័ន្ធគ្រប់គ្រងការចូលចេញ។",
    href: "/solutions/office-access-control-cambodia",
  },
  {
    title: "ដំណោះស្រាយថ្នាក់រៀនឆ្លាតវៃសម្រាប់វិស័យអប់រំ",
    desc: "ទំព័រតាមវិស័យ សម្រាប់សាលារៀន និងមជ្ឈមណ្ឌលបណ្តុះបណ្តាល។",
    href: "/solutions/education-smart-classroom-cambodia",
  },
  {
    title: "Interactive Flat Panel",
    desc: "ទំព័រផលិតផលសម្រាប់ប្រព័ន្ធថ្នាក់រៀន។",
    href: "/interactive-flat-panel",
  },
];

const intentClustersEn = [
  {
    title: "Display & Signage Intent",
    links: [
      { label: "Indoor Communication Solutions", href: "/solutions/indoor-communication-solutions-cambodia" },
      { label: "Outdoor Campaign Solutions", href: "/solutions/outdoor-campaign-solutions-cambodia" },
      { label: "Retail Digital Signage Solutions", href: "/solutions/retail-digital-signage-cambodia" },
      { label: "Hotel Display Solutions", href: "/solutions/hotel-display-solutions-cambodia" },
      { label: "LED Display Hub", href: "/led-display" },
    ],
  },
  {
    title: "Security & Access Intent",
    links: [
      { label: "Office Access Control Solutions", href: "/solutions/office-access-control-cambodia" },
      { label: "Turnstile Gate Hub", href: "/turnstile-gate" },
      { label: "Access Control Catalog", href: "/products/access-control" },
    ],
  },
  {
    title: "Education & Collaboration Intent",
    links: [
      { label: "Education Smart Classroom Solutions", href: "/solutions/education-smart-classroom-cambodia" },
      { label: "Interactive Flat Panel Hub", href: "/interactive-flat-panel" },
      { label: "Smart Board Catalog", href: "/products/smart-board" },
    ],
  },
  {
    title: "Factory Audio & Announcement Intent",
    links: [
      { label: "Factory PA Announcement Solutions", href: "/solutions/factory-pa-announcement-cambodia" },
      { label: "PA System Hub", href: "/pa-system" },
      { label: "IP Paging Microphones", href: "/products/ip-paging-microphones" },
    ],
  },
];

const intentClustersKm = [
  {
    title: "Intent: Display & Signage",
    links: [
      { label: "ដំណោះស្រាយទំនាក់ទំនងខាងក្នុង", href: "/solutions/indoor-communication-solutions-cambodia" },
      { label: "ដំណោះស្រាយយុទ្ធនាការក្រៅអគារ", href: "/solutions/outdoor-campaign-solutions-cambodia" },
      { label: "ដំណោះស្រាយ លក់រាយ អេក្រង់ផ្សព្វផ្សាយឌីជីថល", href: "/solutions/retail-digital-signage-cambodia" },
      { label: "ដំណោះស្រាយ បង្ហាញសម្រាប់សណ្ឋាគារ", href: "/solutions/hotel-display-solutions-cambodia" },
      { label: "LED Display Hub", href: "/led-display" },
    ],
  },
  {
    title: "Intent: Security & Access",
    links: [
      { label: "ដំណោះស្រាយ ការិយាល័យ ប្រព័ន្ធគ្រប់គ្រងការចូលចេញ", href: "/solutions/office-access-control-cambodia" },
      { label: "Turnstile Gate Hub", href: "/turnstile-gate" },
      { label: "Access Control Catalog", href: "/products/access-control" },
    ],
  },
  {
    title: "Intent: Education & Collaboration",
    links: [
      { label: "ដំណោះស្រាយ អប់រំ ថ្នាក់រៀនឆ្លាតវៃ", href: "/solutions/education-smart-classroom-cambodia" },
      { label: "Interactive Flat Panel Hub", href: "/interactive-flat-panel" },
      { label: "Smart Board Catalog", href: "/products/smart-board" },
    ],
  },
  {
    title: "Intent: Factory Audio & Announcement",
    links: [
      { label: "ដំណោះស្រាយ ប្រព័ន្ធផ្សាយសំឡេងរោងចក្រ", href: "/solutions/factory-pa-announcement-cambodia" },
      { label: "PA System Hub", href: "/pa-system" },
      { label: "IP Paging Microphones", href: "/products/ip-paging-microphones" },
    ],
  },
];

const summaryBulletsEn = [
  "End-to-end: survey, design, BOQ, install, commissioning",
  "Local Cambodia troubleshooting and maintenance",
  "Indoor/outdoor options for tropical climate",
  "Scalable for single site or multi-branch",
];
const summaryBulletsKm = [
  "សេវា ចាប់ពីដើមដល់ចប់៖ ស្ទង់ទីតាំង រចនា បញ្ជីបរិមាណការងារ ដំឡើង បើកប្រើប្រាស់",
  "គាំទ្រក្នុងតំបន់កម្ពុជា សម្រាប់ជួសជុល និងថែទាំ",
  "ជម្រើសខាងក្នុង/ខាងក្រៅ សម្រាប់អាកាសធាតុក្តៅសើម",
  "អាចពង្រីកបាន សម្រាប់ទីតាំងតែមួយ ឬច្រើនសាខា",
];

const marketSignalsEn = [
  { title: "Tourism and retail growth", detail: "Demand for signage and visitor-facing systems is increasing." },
  { title: "Industrial expansion", detail: "Factories need PA, safety alerts, and access workflows." },
  { title: "Digital transformation", detail: "Smart systems and connected operations are growing quickly." },
  { title: "Smart city initiatives", detail: "Integrated public information and access systems are rising." },
];
const marketSignalsKm = [
  { title: "កំណើនទេសចរណ៍ និងលក់រាយ", detail: "តម្រូវការប្រព័ន្ធ អេក្រង់ផ្សព្វផ្សាយ និងព័ត៌មានសម្រាប់ភ្ញៀវកំពុងកើនឡើង។" },
  { title: "ការពង្រីកឧស្សាហកម្ម", detail: "រោងចក្រត្រូវការប្រព័ន្ធ ប្រព័ន្ធផ្សាយសំឡេងសាធារណៈ ការជូនដំណឹងសុវត្ថិភាព និង ការចូលចេញ Workflow។" },
  { title: "ការបំលែងឌីជីថល", detail: "ប្រព័ន្ធឆ្លាតវៃ និងប្រតិបត្តិការភ្ជាប់គ្នាកំពុងកើនល្បឿន។" },
  { title: "គម្រោងទីក្រុងឆ្លាតវៃ", detail: "តម្រូវការប្រព័ន្ធព័ត៌មានសាធារណៈ និង ប្រព័ន្ធគ្រប់គ្រងការចូលចេញ បញ្ចូលគ្នាកំពុងកើន។" },
];

const sectorSolutionsEn = [
  { title: "Retail, malls, and showrooms", desc: "In-store promotion, wayfinding, and customer flow improvement." },
  { title: "Factories and industrial zones", desc: "PA, emergency broadcast, and access attendance integration." },
  { title: "Offices and corporate buildings", desc: "Reception display, meeting AV, and secure turnstile entry." },
  { title: "Schools and training centers", desc: "Interactive learning, classroom AV, and campus communication." },
  { title: "Hospitals and public institutions", desc: "Wayfinding, controlled entry, and emergency communication." },
  { title: "Hotels, events, and venues", desc: "Guest display systems and ticket-integrated entry control." },
];
const sectorSolutionsKm = [
  { title: "ហាងលក់រាយ ផ្សារទំនើប និងបន្ទប់បង្ហាញ", desc: "បង្កើនការផ្សព្វផ្សាយក្នុងហាង ការណែនាំផ្លូវ និងលំហូរអតិថិជន។" },
  { title: "រោងចក្រ និងតំបន់ឧស្សាហកម្ម", desc: "ប្រព័ន្ធផ្សាយសំឡេងសាធារណៈ ការផ្សាយបន្ទាន់ និងការភ្ជាប់ ការចូលចេញ ជាមួយវត្តមាន។" },
  { title: "ការិយាល័យ និងអគារក្រុមហ៊ុន", desc: "អេក្រង់ទទួលភ្ញៀវ សំឡេង និងរូបភាព បន្ទប់ប្រជុំ និងការចូលតាម ទ្វារបង្វិលគ្រប់គ្រងច្រកចេញចូល។" },
  { title: "សាលារៀន និងមជ្ឈមណ្ឌលបណ្តុះបណ្តាល", desc: "ការសិក្សាអន្តរកម្ម សំឡេង និងរូបភាព ថ្នាក់រៀន និងទំនាក់ទំនងទូទាំងបរិវេណ។" },
  { title: "មន្ទីរពេទ្យ និងស្ថាប័នសាធារណៈ", desc: "អេក្រង់ផ្សព្វផ្សាយ ណែនាំផ្លូវ ការចូលគ្រប់គ្រង និងសារបន្ទាន់។" },
  { title: "សណ្ឋាគារ ព្រឹត្តិការណ៍ និងទីតាំងកម្មវិធី", desc: "ប្រព័ន្ធបង្ហាញសម្រាប់ភ្ញៀវ និងការគ្រប់គ្រងចូលតាមសំបុត្រ។" },
];

const cityCoverageEn = [
  { city: "Phnom Penh", focus: "Corporate, retail, government, and multi-branch rollouts." },
  { city: "Siem Reap", focus: "Tourism, hospitality, and venue-focused deployments." },
  { city: "Sihanoukville", focus: "Industrial and high-durability outdoor deployments." },
  { city: "Special Economic Zones", focus: "Factory PA, visibility display, and workforce access." },
];
const cityCoverageKm = [
  { city: "ភ្នំពេញ", focus: "ក្រុមហ៊ុន លក់រាយ គម្រោងរដ្ឋ និងគម្រោងច្រើនសាខា។" },
  { city: "សៀមរាប", focus: "វិស័យទេសចរណ៍ បដិសណ្ឋារកិច្ច និងទីតាំងព្រឹត្តិការណ៍។" },
  { city: "ព្រះសីហនុ", focus: "គម្រោងឧស្សាហកម្ម និងគម្រោងខាងក្រៅដែលត្រូវការភាពធន់ខ្ពស់។" },
  { city: "តំបន់សេដ្ឋកិច្ចពិសេស", focus: "ប្រព័ន្ធផ្សាយសំឡេងសាធារណៈ រោងចក្រ អេក្រង់តាមដានផលិតកម្ម និង ការចូលចេញ កម្លាំងការងារ។" },
];

const budgetTimelineCardsEn = [
  { title: "Small Site Rollout", detail: "Fast setup for single branch or pilot site." },
  { title: "Multi-Zone Facility Setup", detail: "Integrated signage, PA, and access for larger sites." },
  { title: "Enterprise Multi-Branch Program", detail: "Standardized phased rollout for nationwide scale." },
];
const budgetTimelineCardsKm = [
  { title: "ការដាក់ប្រើប្រាស់ទីតាំងតូច", detail: "ដំឡើងលឿន សម្រាប់សាខាតែមួយ ឬគម្រោងសាកល្បង។" },
  { title: "ការរៀបចំទីតាំងច្រើនតំបន់", detail: "បញ្ចូល អេក្រង់ផ្សព្វផ្សាយ, ប្រព័ន្ធផ្សាយសំឡេងសាធារណៈ និង ការចូលចេញ សម្រាប់ទីតាំងធំ។" },
  { title: "កម្មវិធីសហគ្រាសច្រើនសាខា", detail: "ការដាក់ប្រើប្រាស់ជាដំណាក់កាល សម្រាប់ពង្រីកទូទាំងប្រទេស។" },
];

const complianceChecklistEn = [
  "Electrical load and grounding plan",
  "Indoor/outdoor equipment and IP rating check",
  "Fire alarm and emergency release validation",
  "Access policy, logs, and audit trail readiness",
  "Network topology and monitoring readiness",
  "SOP, training, maintenance, and warranty matrix",
];
const complianceChecklistKm = [
  "ផែនការបន្ទុកអគ្គិសនី និងការភ្ជាប់ដី",
  "ការផ្ទៀងផ្ទាត់ឧបករណ៍ខាងក្នុង/ខាងក្រៅ និងស្តង់ដារ IP",
  "ការផ្ទៀងផ្ទាត់ការភ្ជាប់ព្រមានអគ្គិភ័យ និងបើកបន្ទាន់",
  "គោលនយោបាយ ការចូលចេញ កំណត់ហេតុ និងភាពរួចរាល់ ប្រវត្តិកំណត់ហេតុតាមដាន",
  "ប្លង់បណ្តាញ និងភាពរួចរាល់សម្រាប់តាមដានពីចម្ងាយ",
  "នីតិវិធីស្តង់ដារ បណ្តុះបណ្តាល ថែទាំ និងម៉ាទ្រីសការធានា",
];

const deliveryStepsEn = [
  { title: "Site survey and requirements", detail: "Assess traffic, view distance, network, and security." },
  { title: "Design and BOQ planning", detail: "Prepare layout, topology, and bill of quantities." },
  { title: "Installation and cabling", detail: "Professional mounting and clean wiring." },
  { title: "Integration and commissioning", detail: "Testing, setup, and tuning for stable performance." },
  { title: "Training and handover", detail: "Operator training and SOP handover." },
  { title: "After-sales support", detail: "Preventive maintenance and local technical support." },
];
const deliveryStepsKm = [
  { title: "ស្ទង់ទីតាំង និងប្រមូលតម្រូវការ", detail: "វាយតម្លៃចរាចរណ៍ ចម្ងាយមើល បណ្តាញ និងសុវត្ថិភាព។" },
  { title: "រចនា និងរៀបចំ បញ្ជីបរិមាណការងារ", detail: "រៀបចំប្លង់ ប្រព័ន្ធ និងបញ្ជីបរិមាណសម្ភារៈ។" },
  { title: "ដំឡើង និងរៀបខ្សែ", detail: "តម្លើងដោយវិជ្ជាជីវៈ និងរៀបខ្សែស្អាត។" },
  { title: "បញ្ចូលប្រព័ន្ធ និងបើកប្រើប្រាស់", detail: "សាកល្បង រៀបចំ និងលៃតម្រូវសមត្ថភាពប្រព័ន្ធ។" },
  { title: "បណ្តុះបណ្តាល និងប្រគល់ប្រព័ន្ធ", detail: "បណ្តុះបណ្តាលអ្នកប្រើ និងប្រគល់ឯកសារ នីតិវិធីស្តង់ដារ។" },
  { title: "សេវាបន្ទាប់ពីលក់", detail: "ថែទាំបង្ការ និងគាំទ្របច្ចេកទេសក្នុងតំបន់។" },
];

const integrationCardsEn = [
  "Central CMS for content scheduling",
  "RFID / QR / Biometric access",
  "Attendance and visitor sync",
  "Fire alarm linkage and emergency release",
  "Audio zoning and paging control",
  "Remote monitoring and reporting",
];
const integrationCardsKm = [
  "ប្រព័ន្ធគ្រប់គ្រងមាតិកា កណ្ដាលសម្រាប់កាលវិភាគមាតិកា",
  "ការចូលចេញ តាម RFID / QR / Biometric",
  "សមកាលកម្មវត្តមាន និងភ្ញៀវ",
  "ការភ្ជាប់ព្រមានអគ្គិភ័យ និងបើកបន្ទាន់",
  "ការគ្រប់គ្រងតំបន់សំឡេង និងការផ្សាយសារ",
  "ការតាមដាន និងរបាយការណ៍ពីចម្ងាយ",
];

const reasonsEn = [
  { title: "Local Engineering Team", detail: "Fast site response across major Cambodia cities." },
  { title: "Single-Vendor Delivery", detail: "One accountable team from survey to handover." },
  { title: "Safety-First Workflow", detail: "Structured wiring, checks, and safe commissioning." },
  { title: "Clear Training & Support", detail: "SOP, operator training, maintenance, and warranty." },
];
const reasonsKm = [
  { title: "ក្រុមវិស្វកម្មក្នុងតំបន់", detail: "ឆ្លើយតបលឿនតាមទីក្រុងសំខាន់ៗនៅកម្ពុជា។" },
  { title: "សេវា អ្នកផ្គត់ផ្គង់តែមួយ", detail: "ក្រុមតែមួយទទួលខុសត្រូវពីស្ទង់ដល់ប្រគល់ប្រព័ន្ធ។" },
  { title: "លំហូរការងារផ្តោតលើសុវត្ថិភាព", detail: "ការរៀបខ្សែមានស្តង់ដារ និងការផ្ទៀងផ្ទាត់មុនបើកប្រើប្រាស់។" },
  { title: "បណ្តុះបណ្តាល និងគាំទ្រច្បាស់លាស់", detail: "នីតិវិធីស្តង់ដារ បណ្តុះបណ្តាល ថែទាំ និងការធានា។" },
];

const faqsEn = [
  { q: "What business solutions does Mugnee Cambodia provide?", a: "LED display, digital signage, smart classroom, PA, turnstile, and access control with full project delivery." },
  { q: "How is project cost estimated?", a: "By screen size, pixel pitch, installation type, integration scope, and BOQ structure." },
  { q: "Do you provide end-to-end service?", a: "Yes. Survey, design, install, integration, commissioning, training, and after-sales support." },
  { q: "Can you integrate with attendance and HR systems?", a: "Yes. We support RFID, QR, biometric, visitor, and attendance integration flows." },
  { q: "Do you support outside Phnom Penh?", a: "Yes. We serve Phnom Penh, Siem Reap, Sihanoukville, and other provinces." },
  { q: "Are outdoor solutions weather-ready?", a: "Yes. We specify suitable IP-rated and protected outdoor components." },
];
const faqsKm = [
  { q: "Mugnee Cambodia ផ្តល់ដំណោះស្រាយអ្វីខ្លះ?", a: "អេក្រង់ LED, អេក្រង់ផ្សព្វផ្សាយឌីជីថល, ថ្នាក់រៀនឆ្លាតវៃ, ប្រព័ន្ធផ្សាយសំឡេងសាធារណៈ, ទ្វារបង្វិលគ្រប់គ្រងច្រកចេញចូល និង ប្រព័ន្ធគ្រប់គ្រងការចូលចេញ ជាមួយសេវាគម្រោងពេញលេញ។" },
  { q: "តម្លៃគម្រោងគណនាយ៉ាងដូចម្តេច?", a: "គណនាតាមទំហំអេក្រង់ ភីកសែលភីច ប្រភេទដំឡើង វិសាលភាពបញ្ចូលប្រព័ន្ធ និង បញ្ជីបរិមាណការងារ។" },
  { q: "តើមានសេវា ចាប់ពីដើមដល់ចប់ ទេ?", a: "មាន។ ស្ទង់ទីតាំង រចនា ដំឡើង បញ្ចូលប្រព័ន្ធ បើកប្រើប្រាស់ បណ្តុះបណ្តាល និងគាំទ្របន្ទាប់ពីលក់។" },
  { q: "អាចភ្ជាប់ជាមួយវត្តមាន និង ធនធានមនុស្ស បានទេ?", a: "បាន។ យើងគាំទ្រលំហូរភ្ជាប់ RFID, QR, Biometric, ភ្ញៀវ និង វត្តមាន។" },
  { q: "គាំទ្រគម្រោងក្រៅភ្នំពេញទេ?", a: "គាំទ្រ។ យើងបម្រើភ្នំពេញ សៀមរាប ព្រះសីហនុ និងខេត្តផ្សេងៗ។" },
  { q: "ដំណោះស្រាយខាងក្រៅសមស្របអាកាសធាតុទេ?", a: "សមស្រប។ យើងជ្រើសឧបករណ៍ខាងក្រៅដែលមានស្តង់ដារ IP និងការការពារត្រឹមត្រូវ។" },
];

export default function SolutionsClient({ forcedLang }: { forcedLang?: "en" | "km" }) {
  const { lang: contextLang } = useLang();
  const lang = forcedLang ?? contextLang;
  const toLangHref = (href: string) =>
    lang === "km" && href.startsWith("/") && !href.startsWith("/km/") ? `/km${href}` : href;
  const isKhmer = lang === "km";
  const t = isKhmer ? KM : EN;

  const solutionLinks = isKhmer ? solutionLinksKm : solutionLinksEn;
  const summaryBullets = isKhmer ? summaryBulletsKm : summaryBulletsEn;
  const marketSignals = isKhmer ? marketSignalsKm : marketSignalsEn;
  const sectorSolutions = isKhmer ? sectorSolutionsKm : sectorSolutionsEn;
  const cityCoverage = isKhmer ? cityCoverageKm : cityCoverageEn;
  const budgetTimelineCards = isKhmer ? budgetTimelineCardsKm : budgetTimelineCardsEn;
  const complianceChecklist = isKhmer ? complianceChecklistKm : complianceChecklistEn;
  const deliverySteps = isKhmer ? deliveryStepsKm : deliveryStepsEn;
  const integrationCards = isKhmer ? integrationCardsKm : integrationCardsEn;
  const reasons = isKhmer ? reasonsKm : reasonsEn;
  const faqs = isKhmer ? faqsKm : faqsEn;
  const intentClusters = isKhmer ? intentClustersKm : intentClustersEn;

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mugnee Cambodia",
              url: PAGE_URL,
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: t.breadcrumbHome, item: SITE_URL },
                { "@type": "ListItem", position: 2, name: t.breadcrumb, item: PAGE_URL },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ]),
        }}
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-8 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <li>
                <Link href={toLangHref("/")} className="hover:text-slate-700">
                  {t.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-slate-700">{t.breadcrumb}</li>
            </ol>
          </nav>
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">{t.heroEyebrow}</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.heroTitle}</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base [text-align:justify]">{t.heroDesc}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={toLangHref("/contact")} className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg">{t.ctaQuote}</Link>
            <Link href={toLangHref("/products")} className="rounded-xl border border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md">{t.ctaProducts}</Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">{t.heroFoot}</div>
          <div className="mt-5 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-4">
            <p className="text-sm font-semibold text-slate-900">
              {isKhmer
                ? "សម្រាប់បំណងស្វែងរកអេក្រង់ LED សូមប្រើទំព័រគោលនេះជាមុន"
                : "For LED display buyer intent, use this dedicated pillar page"}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              {isKhmer
                ? "សូមចូលទៅកាន់ទំព័រមេអេក្រង់ LED ដើម្បីមើលកត្តាតម្លៃ BOQ ដំណើរការដំឡើង និងការរៀបចំគម្រោងតាមករណីប្រើប្រាស់។"
                : "Navigate to the LED Display Cambodia hub for pricing factors, BOQ planning, installation workflow, and use-case guidance."}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href={toLangHref("/led-display")}
                className="rounded-full border border-cyan-300 bg-white px-3 py-1.5 text-xs font-semibold text-cyan-900 transition hover:bg-cyan-100"
              >
                {isKhmer ? "ទំព័រមេអេក្រង់ LED" : "LED Display Cambodia Hub"}
              </Link>
              <Link
                href={toLangHref("/led-display/indoor-led-display")}
                className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                {isKhmer ? "អេក្រង់ LED ខាងក្នុង" : "Indoor LED Display"}
              </Link>
              <Link
                href={toLangHref("/led-display/outdoor-led-display")}
                className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                {isKhmer ? "អេក្រង់ LED ខាងក្រៅ" : "Outdoor LED Billboard"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.marketTitle}</h2>
              <p className="mt-2 text-slate-600">{t.marketDesc}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {marketSignals.map((item) => (
                  <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg">
                    <div className="text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">{item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">{t.quickSummary}</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700">{summaryBullets.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.cityTitle}</h2>
          <p className="mt-2 text-slate-600">{t.cityDesc}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{cityCoverage.map((item) => <div key={item.city} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-xl"><div className="relative text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">{item.city}</div><p className="relative mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">{item.focus}</p></div>)}</div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.categoriesTitle}</h2>
          <p className="mt-2 text-slate-600">{t.categoriesDesc}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{solutionLinks.filter((item) => typeof item.href === "string" && item.href.length > 0).map((item) => <Link key={item.title} href={toLangHref(item.href)} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_16px_40px_-20px_rgba(14,165,233,0.55)] hover:no-underline focus:no-underline"><div className="relative text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-sky-700">{item.title}</div><p className="relative mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">{item.desc}</p></Link>)}</div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.intentClusterTitle}</h2>
          <p className="mt-2 text-slate-600">{t.intentClusterDesc}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {intentClusters.map((cluster, clusterIndex) => (
              <article
                key={cluster.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900">{cluster.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cluster.links.filter((item) => typeof item.href === "string" && item.href.length > 0).map((item) => (
                    <Link
                      key={item.href}
                      href={toLangHref(item.href)}
                      className={[
                        "rounded-full border px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5",
                        clusterIndex % 2 === 0
                          ? "border-cyan-200 bg-cyan-50 text-cyan-900 hover:border-cyan-300 hover:bg-cyan-100"
                          : "border-indigo-200 bg-indigo-50 text-indigo-900 hover:border-indigo-300 hover:bg-indigo-100",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.useCasesTitle}</h2>
          <p className="mt-2 text-slate-600">{t.useCasesDesc}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{sectorSolutions.map((item) => <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"><div className="text-sm font-semibold text-slate-900">{item.title}</div><p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p></div>)}</div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.budgetTitle}</h2>
          <p className="mt-2 text-slate-600">{t.budgetDesc}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{budgetTimelineCards.map((item) => <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"><div className="text-sm font-semibold text-slate-900">{item.title}</div><p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p></div>)}</div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.workflowTitle}</h2>
          <p className="mt-2 text-slate-600">{t.workflowDesc}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{deliverySteps.map((item) => <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"><div className="text-sm font-semibold text-slate-900">{item.title}</div><p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p></div>)}</div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.integrationTitle}</h2>
          <p className="mt-2 text-slate-600">{t.integrationDesc}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{integrationCards.map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50/50 hover:text-slate-900 hover:shadow-md">{item}</div>)}</div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.checklistTitle}</h2>
          <p className="mt-2 text-slate-600">{t.checklistDesc}</p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">{complianceChecklist.map((item) => <li key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.whyTitle}</h2>
          <p className="mt-2 text-slate-600">{t.whyDesc}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{reasons.map((item) => <div key={item.title} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"><div className="text-sm font-semibold text-slate-900">{item.title}</div><p className="mt-2 text-sm leading-relaxed text-slate-700">{item.detail}</p></div>)}</div>
        </div>
      </section>

      <section id="faq" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.faqTitle}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">{faqs.map((item) => <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 open:border-sky-300 open:shadow-md"><summary className="cursor-pointer list-none text-sm font-semibold text-slate-900"><div className="flex items-center justify-between gap-3"><span>{item.q}</span><span className="text-slate-400 transition-transform duration-300 group-open:rotate-180">v</span></div></summary><p className="mt-3 text-sm text-slate-700">{item.a}</p></details>)}</div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">{t.finalTitle}</h2>
            <p className="mt-2 text-slate-600">{t.finalDesc}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href={toLangHref("/contact")} className="inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg">{t.finalCta1}</Link>
              <Link href={toLangHref("/products")} className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md">{t.finalCta2}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


