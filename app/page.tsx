import type { Metadata } from "next";
import Image from "next/image";
import HomeClient from "./components/home/HomeClient";

type IconProps = { className?: string };

function unitIcon(src: string, alt: string) {
  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className="h-6 w-6 object-contain"
    />
  );
}

function IconSparkles({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
      <path d="M19 4l.8 1.8L21 6.5l-1.2.7L19 9l-.8-1.8L17 6.5l1.2-.7L19 4z" />
    </svg>
  );
}

function IconAntenna({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v6" />
      <path d="M5 8c4.7-4.7 9.3-4.7 14 0" />
      <path d="M7.5 10.5c3.3-3.3 5.7-3.3 9 0" />
      <circle cx="12" cy="14" r="2" />
      <path d="M12 16v6" />
    </svg>
  );
}

function IconChip({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="1.8" />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
      <path d="M10 10h4v4h-4z" />
    </svg>
  );
}

function IconTv({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M7 19h10" />
    </svg>
  );
}

function IconBolt({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L5 13h6l-1 9 8-11h-6l1-9z" />
    </svg>
  );
}

function IconGrid({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1.2" />
      <rect x="14" y="4" width="6" height="6" rx="1.2" />
      <rect x="4" y="14" width="6" height="6" rx="1.2" />
      <rect x="14" y="14" width="6" height="6" rx="1.2" />
    </svg>
  );
}
/** Set this in production:
 * NEXT_PUBLIC_SITE_URL=https://mugneekh.com
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugneekh.com";

const PAGE_PATH = "/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const ORG_ID = `${SITE_URL}#organization`;
const WEBSITE_ID = `${SITE_URL}#website`;
const FAQ_PAGE_ID = `${PAGE_URL}#faq`;

export const metadata: Metadata = {
  title: "Digital Signage, Smart Board & Access Control in Cambodia | Mugnee Cambodia",
  description:
    "Mugnee Cambodia delivers digital signage, interactive smart boards, turnstile gates, PA systems, and access control solutions in Cambodia. Get site survey, system design, installation, commissioning, and local after-sales support in Phnom Penh, Siem Reap, and Sihanoukville.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Digital Signage, Smart Board & Access Control in Cambodia | Mugnee Cambodia",
    description:
      "End-to-end digital signage, smart board, turnstile gate, PA system, and access control solutions in Cambodia with local installation and support.",
    siteName: "Mugnee Cambodia",
    images: [
      {
        url: `${SITE_URL}/images/hero/cambodia-led-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Mugnee Cambodia LED display and smart technology solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage, Smart Board & Access Control in Cambodia | Mugnee Cambodia",
    description:
      "Digital Signage, Smart Boards, Turnstile Gates, PA Systems, and Access Control solutions in Cambodia.",
    images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
  },
};

const CATEGORY_TILES = [
  {
    key: "led_display",
    titleEn: "LED Display",
    titleKm: "អេក្រង់ LED",
    descEn:
      "Indoor & outdoor LED video wall solutions for retail, events and advertising.",
    descKm:
      "ដំណោះស្រាយអេក្រង់ LED Video Wall សម្រាប់ក្នុងអគារ និងក្រៅអគារ ប្រើបានសម្រាប់ហាង ព្រឹត្តិការណ៍ និងការផ្សព្វផ្សាយពាណិជ្ជកម្ម។",
    href: "/led-display",
    icon: unitIcon("/images/home/unit-icons/digital-display-2.webp", "LED Display"),
  },
  {
    key: "indoor_led_display",
    titleEn: "Indoor LED Display",
    titleKm: "អេក្រង់ LED ខាងក្នុង",
    descEn: "Meeting rooms, showrooms & indoor LED walls.",
    descKm: "សម្រាប់បន្ទប់ប្រជុំ Showroom និងជញ្ជាំងអេក្រង់ LED ខាងក្នុង។",
    href: "/led-display/indoor-led-display",
    icon: <IconSparkles className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "outdoor_billboard",
    titleEn: "Outdoor LED Billboard",
    titleKm: "ប៊ីលបត LED ខាងក្រៅ",
    descEn: "High-brightness LED screens built for heat, rain and 24/7 operation.",
    descKm: "អេក្រង់ LED ពន្លឺខ្ពស់ សមស្របសម្រាប់កំដៅ ភ្លៀង និងដំណើរការ 24/7។",
    href: "/led-display/outdoor-led-display",
    icon: <IconAntenna className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "receiving_card",
    titleEn: "Receiving Card",
    titleKm: "កាតទទួលសញ្ញា",
    descEn: "Reliable LED receiving cards for stable signal distribution and display control.",
    descKm: "កាតទទួលសញ្ញា LED ដែលមានស្ថិរភាព សម្រាប់ចែកចាយសញ្ញា និងគ្រប់គ្រងការបង្ហាញបានត្រឹមត្រូវ។",
    href: "/led-display/receiving-card",
    icon: <IconChip className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "ifp",
    titleEn: "Interactive Flat Panel",
    titleKm: "អេក្រង់អន្តរកម្ម (IFP)",
    descEn: "Smart board solutions for classrooms, training rooms and boardrooms.",
    descKm: "ដំណោះស្រាយ Smart Board សម្រាប់ថ្នាក់រៀន បន្ទប់បណ្តុះបណ្តាល និងបន្ទប់ប្រជុំ។",
    href: "/interactive-flat-panel",
    icon: unitIcon("/images/home/unit-icons/smart-board.webp", "Interactive Flat Panel"),
  },
  {
    key: "turnstile",
    titleEn: "Turnstile Gates",
    titleKm: "ច្រកទ្វារ Turnstile",
    descEn: "Tripod, swing, flap barrier and speed gates for secure entry control.",
    descKm: "Tripod, Swing, Flap Barrier និង Speed Gate សម្រាប់គ្រប់គ្រងច្រកចេញចូលដោយសុវត្ថិភាព។",
    href: "/turnstile-gate",
    icon: unitIcon("/images/home/unit-icons/turnstile-gate.webp", "Turnstile Gates"),
  },
  {
    key: "pa_system",
    titleEn: "PA System",
    titleKm: "ប្រព័ន្ធ PA",
    descEn: "Public address systems for factories, schools, buildings and venues.",
    descKm: "ប្រព័ន្ធផ្សព្វផ្សាយសម្លេង សម្រាប់រោងចក្រ សាលារៀន អគារ និងទីតាំងព្រឹត្តិការណ៍។",
    href: "/pa-system",
    icon: unitIcon("/images/home/unit-icons/pa-system.webp", "PA System"),
  },
  {
    key: "video_processor",
    titleEn: "Video Processor",
    titleKm: "ឧបករណ៍កែច្នៃវីដេអូ",
    descEn: "Advanced video processors for multi-input scaling, switching and LED screen optimization.",
    descKm: "ឧបករណ៍កែច្នៃវីដេអូកម្រិតខ្ពស់ សម្រាប់ multi-input scaling, switching និងបង្កើនប្រសិទ្ធភាពអេក្រង់ LED។",
    href: "/led-display/video-processor",
    icon: <IconTv className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "power_supply",
    titleEn: "Power Supply",
    titleKm: "ឧបករណ៍ផ្គត់ផ្គង់ថាមពល",
    descEn: "Stable LED power supplies and SMPS units for reliable operation.",
    descKm: "ឧបករណ៍ផ្គត់ផ្គង់ថាមពល LED និង SMPS សម្រាប់ប្រតិបត្តិការដែលមានស្ថិរភាព។",
    href: "/led-display/power-supply",
    icon: <IconBolt className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "all_products",
    titleEn: "All Products",
    titleKm: "ផលិតផលទាំងអស់",
    descEn: "Browse the complete product catalog for Cambodia projects.",
    descKm: "មើលកាតាឡុកផលិតផលពេញលេញ សម្រាប់គម្រោងនៅកម្ពុជា។",
    href: "/products",
    icon: <IconGrid className="h-5 w-5 text-slate-700" />,
  },
];

const FAQ = [
  {
    qEn: "Are you a digital signage, smart board, and access control supplier in Cambodia?",
    aEn: "Yes. Mugnee Cambodia provides solution design, supply, installation, commissioning, and local support for digital signage, smart board, access control, turnstile, and PA system projects.",
    qKm: "តើអ្នកផ្តល់ដំណោះស្រាយ Digital Signage, Smart Board, Access Control និង PA System ទូទាំងកម្ពុជាដែរឬទេ?",
    aKm: "បាទ/ចាស។ Mugnee Cambodia ផ្តល់សេវាពេញលេញចាប់ពី solution design, supply, installation, commissioning ដល់ local support សម្រាប់ digital signage, smart board, access control, turnstile និង PA system។",
  },
  {
    qEn: "Do you serve Phnom Penh only, or all Cambodia provinces?",
    aEn: "We serve Phnom Penh, Siem Reap, Sihanoukville, and other provinces across Cambodia with onsite survey, installation, and after-sales support.",
    qKm: "តើអ្នកបម្រើតែ Phnom Penh ប៉ុណ្ណោះ ឬទូទាំងខេត្តនៅកម្ពុជាទាំងអស់?",
    aKm: "យើងបម្រើទាំង Phnom Penh, Siem Reap, Sihanoukville និងខេត្តផ្សេងៗទូទាំងកម្ពុជា ជាមួយ onsite survey, installation និង after-sales support។",
  },
  {
    qEn: "Which industries in Cambodia do you support?",
    aEn: "We support retail, hospitality, education, factories, offices, healthcare, real estate, and public-sector projects with practical AV and security system packages.",
    qKm: "តើអ្នកបម្រើវិស័យអ្វីខ្លះនៅកម្ពុជា?",
    aKm: "យើងបម្រើវិស័យ retail, hospitality, education, factory, office, healthcare, real estate និងគម្រោងសាធារណៈ ជាមួយកញ្ចប់ប្រព័ន្ធ AV និងសុវត្ថិភាពដែលរៀបចំតាមតម្រូវការ។",
  },
  {
    qEn: "Can you integrate multiple systems into one workflow?",
    aEn: "Yes. We integrate signage content control, smart boards, access control, attendance, and PA announcements into a practical operating workflow based on your site and team.",
    qKm: "តើអ្នកអាចបញ្ចូលប្រព័ន្ធច្រើនជាមួយគ្នាជា workflow តែមួយបានទេ?",
    aKm: "បាន។ យើងអាចបញ្ចូល signage content control, smart board, access control, attendance និង PA announcement ឱ្យដំណើរការជា workflow តែមួយសមស្របតាមទីតាំង និងក្រុមការងាររបស់អ្នក។",
  },
  {
    qEn: "Do you provide site survey and BOQ before project execution?",
    aEn: "Yes. We run site assessment first, then share scope, BOQ, technical recommendations, and commercial quotation so you can compare options clearly before approval.",
    qKm: "មុនចាប់ផ្តើមគម្រោង តើមាន site survey និង BOQ ដែរឬទេ?",
    aKm: "មាន។ យើងធ្វើ site assessment មុនគេ ហើយបញ្ជូន scope, BOQ, technical recommendation និង commercial quotation ដើម្បីឱ្យអ្នកប្រៀបធៀបជម្រើសបានច្បាស់មុនអនុម័ត។",
  },
  {
    qEn: "What is the price range for digital signage, smart board, and access control in Cambodia?",
    aEn: "Pricing depends on screen size, software features, hardware grade, installation scope, and integration needs. We provide project-based quotation with clear BOQ and optional package tiers.",
    qKm: "តម្លៃ Digital Signage, Smart Board និង Access Control នៅកម្ពុជាប្រហែលប៉ុន្មាន?",
    aKm: "តម្លៃអាស្រ័យលើទំហំប្រព័ន្ធ មុខងារ software គុណភាព hardware វិសាលភាពដំឡើង និងតម្រូវការ integration។ យើងផ្តល់ project-based quotation ជាមួយ BOQ ច្បាស់លាស់ និង package tiers ជម្រើសបាន។",
  },
  {
    qEn: "Do you offer local after-sales support and preventive maintenance in Cambodia?",
    aEn: "Yes. We provide warranty support, preventive maintenance, health checks, spare parts planning, and troubleshooting support to reduce downtime.",
    qKm: "តើអ្នកមាន after-sales support និង preventive maintenance ក្នុងកម្ពុជាដែរឬទេ?",
    aKm: "មាន។ យើងផ្តល់ warranty support, preventive maintenance, health check, spare parts planning និង troubleshooting support ដើម្បីកាត់បន្ថយ downtime។",
  },
  {
    qEn: "Do you offer AMC or annual maintenance contracts?",
    aEn: "Yes. We offer AMC plans with scheduled preventive visits, response SLA, reporting, and priority support to keep your system stable year-round.",
    qKm: "តើអ្នកមាន AMC ឬ annual maintenance contract ដែរឬទេ?",
    aKm: "មាន។ យើងផ្តល់ផែនការ AMC ជាមួយ preventive visit តាមកាលវិភាគ response SLA របាយការណ៍បច្ចេកទេស និង priority support ដើម្បីរក្សាប្រព័ន្ធឱ្យមានស្ថិរភាព។",
  },
  {
    qEn: "Can you connect turnstile and door access systems with attendance software?",
    aEn: "Yes. We integrate RFID, fingerprint, and face recognition devices with attendance and reporting platforms for offices, factories, schools, and institutions.",
    qKm: "តើអ្នកអាចភ្ជាប់ turnstile/door access ជាមួយ attendance software បានទេ?",
    aKm: "បាន។ យើងអាច integrate RFID, fingerprint និង face recognition devices ជាមួយ attendance និង reporting platform សម្រាប់ office, factory, school និងស្ថាប័ន។",
  },
  {
    qEn: "Do you have ready stock in Phnom Penh or import per project?",
    aEn: "Both models are available. Common items may be available from local stock, while customized configurations are supplied per project timeline and approved specification.",
    qKm: "តើមាន ready stock នៅ Phnom Penh ឬត្រូវនាំចូលតាមគម្រោង?",
    aKm: "មានទាំងពីររបៀប។ ផលិតផលដែលប្រើញឹកញាប់អាចមាន ready stock ក្នុងស្រុក ខណៈ configuration ពិសេសនឹងផ្គត់ផ្គង់តាម timeline និង specification ដែលបានអនុម័ត។",
  },
  {
    qEn: "Do you provide training and handover documents after installation?",
    aEn: "Yes. After commissioning, we provide user training, operating guides, and handover documents so your team can run and maintain systems correctly.",
    qKm: "បន្ទាប់ពីដំឡើង តើអ្នកផ្តល់ training និង handover documents ដែរឬទេ?",
    aKm: "ផ្តល់ជូន។ បន្ទាប់ពី commissioning យើងផ្តល់ user training, operating guide និង handover documents ដើម្បីឱ្យក្រុមការងារអ្នកប្រើប្រាស់ និងថែទាំប្រព័ន្ធបានត្រឹមត្រូវ។",
  },
  {
    qEn: "How long does a typical project take from survey to handover?",
    aEn: "Timeline depends on scope, site readiness, and integration complexity. Most projects follow a structured process: survey, BOQ approval, installation, testing, training, and handover.",
    qKm: "គម្រោងទូទៅ ចាប់ពី survey ដល់ handover ចំណាយពេលប៉ុន្មាន?",
    aKm: "រយៈពេលអាស្រ័យលើ scope ការងារ ការត្រៀមទីតាំង និងកម្រិត integration។ ភាគច្រើនដំណើរការតាមជំហានច្បាស់លាស់៖ survey, BOQ approval, installation, testing, training និង handover។",
  },
  {
    qEn: "What makes your service different from low-cost suppliers in Cambodia?",
    aEn: "Our focus is long-term reliability: proper engineering, clear BOQ, safe installation, integration testing, user training, and responsive local support instead of only hardware supply.",
    qKm: "សេវារបស់អ្នកខុសពីអ្នកផ្គត់ផ្គង់តម្លៃទាបនៅកម្ពុជាយ៉ាងដូចម្តេច?",
    aKm: "ចំណុចខុសគ្នាគឺភាពជឿជាក់រយៈពេលវែង៖ engineering ត្រឹមត្រូវ, BOQ ច្បាស់លាស់, ដំឡើងមានសុវត្ថិភាព, integration testing, user training និង local support ឆ្លើយតបលឿន មិនមែនផ្គត់ផ្គង់ hardware ប៉ុណ្ណោះទេ។",
  },
  {
    qEn: "Can you support government or enterprise procurement requirements?",
    aEn: "Yes. We can support documentation for technical comparison, BOQ-based evaluation, and structured project delivery required in enterprise and institutional procurement workflows.",
    qKm: "តើអ្នកអាចគាំទ្រតម្រូវការទិញសម្រាប់រដ្ឋាភិបាល ឬស្ថាប័នធំៗបានទេ?",
    aKm: "បាន។ យើងអាចគាំទ្រឯកសារសម្រាប់ technical comparison, BOQ-based evaluation និង structured project delivery ដែលត្រូវការសម្រាប់ procurement របស់ស្ថាប័នធំៗ។",
  },
  {
    qEn: "How can I request a quotation for my Cambodia project?",
    aEn: "Share your site location, project type, user flow, required features, and target timeline. We will review and provide a practical configuration with a project-based quotation.",
    qKm: "ខ្ញុំអាចស្នើសុំ quotation សម្រាប់គម្រោងនៅកម្ពុជាយ៉ាងដូចម្តេច?",
    aKm: "សូមផ្ញើទីតាំងគម្រោង ប្រភេទការប្រើប្រាស់ user flow មុខងារដែលត្រូវការ និង timeline។ ក្រុមយើងនឹងពិនិត្យ ហើយផ្តល់ configuration សមស្របជាមួយ project-based quotation។",
  },
];
export default function HomePage() {
  // ---------- JSON-LD (Organization + Website + FAQPage) ----------
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@id": ORG_ID,
    "@type": "Organization",
    name: "Mugnee Cambodia",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    areaServed: { "@type": "Country", name: "Cambodia" },
    sameAs: [
      // Add official pages later
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+855-XXX-XXX-XXX",
        availableLanguage: ["English", "Khmer"],
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@id": WEBSITE_ID,
    "@type": "WebSite",
    name: "Mugnee Cambodia",
    url: SITE_URL,
    inLanguage: ["en", "km"],
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/products?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@id": FAQ_PAGE_ID,
    "@type": "FAQPage",
    url: PAGE_URL,
    name: "Mugnee Cambodia Homepage FAQ",
    inLanguage: ["en", "km"],
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    about: {
      "@type": "Country",
      name: "Cambodia",
    },
    spatialCoverage: {
      "@type": "Country",
      name: "Cambodia",
    },
    mainEntity: FAQ.flatMap((f) => {
      const entities = [
        {
          "@type": "Question",
          name: f.qEn,
          inLanguage: "en",
          acceptedAnswer: { "@type": "Answer", text: f.aEn, inLanguage: "en" },
        },
      ];
      if (f.qKm !== f.qEn || f.aKm !== f.aEn) {
        entities.push({
          "@type": "Question",
          name: f.qKm,
          inLanguage: "km",
          acceptedAnswer: { "@type": "Answer", text: f.aKm, inLanguage: "km" },
        });
      }
      return entities;
    }),
  };

  return (
    <main className="bg-white text-slate-900">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <HomeClient
        categoryTiles={CATEGORY_TILES}
        faq={FAQ}
      />
    </main>
  );
}









