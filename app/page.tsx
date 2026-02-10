import type { Metadata } from "next";
import HomeClient from "./components/home/HomeClient";

type IconProps = { className?: string };

function IconMonitor({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  );
}

function IconSparkles({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
      <path d="M19 4l.8 1.8L21 6.5l-1.2.7L19 9l-.8-1.8L17 6.5l1.2-.7L19 4z" />
    </svg>
  );
}

function IconAntenna({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v6" />
      <path d="M5 8c4.7-4.7 9.3-4.7 14 0" />
      <path d="M7.5 10.5c3.3-3.3 5.7-3.3 9 0" />
      <circle cx="12" cy="14" r="2" />
      <path d="M12 16v6" />
    </svg>
  );
}

function IconTv({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M7 19h10" />
    </svg>
  );
}

function IconPresentation({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16v10H4z" />
      <path d="M8 20l4-6 4 6" />
      <path d="M12 14v6" />
    </svg>
  );
}

function IconBarrier({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12h18" />
      <path d="M4 7h4l3 5-3 5H4z" />
      <path d="M20 7h-4l-3 5 3 5h4z" />
    </svg>
  );
}

function IconLock({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function IconMic({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="3" width="6" height="10" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
      <path d="M8 21h8" />
    </svg>
  );
}


/** ✅ Set this in production:
 * NEXT_PUBLIC_SITE_URL=https://mugnee.com.kh
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mugnee.com.kh";

const PAGE_PATH = "/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "LED Display & Digital Signage Solutions in Cambodia | Mugnee Cambodia",
  description:
    "Mugnee Cambodia delivers LED display, digital signage, interactive flat panels (smart boards), turnstile gates, PA systems, and access control solutions. Site survey, installation, commissioning, and local after-sales support across Phnom Penh, Siem Reap & Sihanoukville.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "LED Display & Digital Signage Solutions in Cambodia | Mugnee Cambodia",
    description:
      "End-to-end LED display, digital signage, IFP smart board, turnstile, PA system & access control solutions in Cambodia with local installation and support.",
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
    title: "LED Display & Digital Signage Solutions in Cambodia | Mugnee Cambodia",
    description:
      "LED Display, Digital Signage, Smart Boards, Turnstile Gates, PA Systems & Access Control — Cambodia.",
    images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
  },
};

const CITIES = ["Phnom Penh", "Siem Reap", "Sihanoukville"];

const CATEGORY_TILES = [
  {
    key: "led_display",
    titleEn: "LED Display",
    titleKm: "អេក្រង់ LED",
    descEn:
      "Indoor & outdoor LED video wall solutions for retail, events and advertising.",
    descKm:
      "ដំណោះស្រាយអេក្រង់ LED ក្នុង/ក្រៅអគារ សម្រាប់លក់រាយ ព្រឹត្តិការណ៍ និងការផ្សព្វផ្សាយ។",
    href: "/led-display",
    icon: <IconMonitor className="h-5 w-5 text-slate-700" />,
  },
    {
    key: "indoor_led_display",
    titleEn: "Indoor LED Display",
    titleKm: "Indoor LED Display",
    descEn: "Meeting rooms, showrooms & indoor LED walls.",
    descKm: "Meeting rooms � Showrooms � Indoor LED walls",
    href: "/led-display/indoor-led-display",
    icon: <IconSparkles className="h-5 w-5 text-slate-700" />,
  },{
    key: "outdoor_billboard",
    titleEn: "Outdoor LED Billboard",
    titleKm: "ប៊ីលបត LED ក្រៅអគារ",
    descEn: "High-brightness LED screens built for heat, rain and 24/7 operation.",
    descKm: "អេក្រង់ភ្លឺខ្លាំង អាចធន់កម្ដៅ ភ្លៀង និងដំណើរការ 24/7។",
    href: "/solutions/led-billboard-cambodia",
    icon: <IconAntenna className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "digital_signage",
    titleEn: "Digital Signage",
    titleKm: "ផ្ទាំងបង្ហាញឌីជីថល",
    descEn: "Mall, hotel and store signage to engage customers and drive sales.",
    descKm: "សម្រាប់ផ្សារ សណ្ឋាគារ និងហាង ដើម្បីទាក់ទាញអតិថិជន និងបង្កើនការលក់។",
    href: "/solutions/digital-signage-cambodia",
    icon: <IconTv className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "ifp",
    titleEn: "Interactive Flat Panel",
    titleKm: "អេក្រង់អន្តរកម្ម (IFP)",
    descEn: "Smart board solutions for classrooms, training rooms and boardrooms.",
    descKm: "Smart Board សម្រាប់ថ្នាក់រៀន បន្ទប់បណ្តុះបណ្តាល និងបន្ទប់ប្រជុំ។",
    href: "/interactive-flat-panel",
    icon: <IconPresentation className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "turnstile",
    titleEn: "Turnstile Gates",
    titleKm: "ច្រកទ្វារ Turnstile",
    descEn: "Tripod, swing, flap barrier and speed gates for secure entry control.",
    descKm: "Tripod / Swing / Flap Barrier / Speed Gate សម្រាប់គ្រប់គ្រងច្រកចូលដោយសុវត្ថិភាព។",
    href: "/turnstile-gate",
    icon: <IconBarrier className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "pa_system",
    titleEn: "PA System",
    titleKm: "ប្រព័ន្ធ PA",
    descEn: "Public address systems for factories, schools, buildings and venues.",
    descKm: "ប្រព័ន្ធផ្សព្វផ្សាយសំឡេងសម្រាប់រោងចក្រ សាលារៀន អគារ និងទីកន្លែងព្រឹត្តិការណ៍។",
    href: "/pa-system",
    icon: <IconMic className="h-5 w-5 text-slate-700" />,
  },
];

const SOLUTIONS = [
  {
    key: "indoor_led",
    titleEn: "Indoor LED Display Solutions",
    titleKm: "ដំណោះស្រាយអេក្រង់ LED ខាងក្នុង",
    pointsEn: [
      "Fine-pitch LED options for clear close-viewing",
      "Ideal for boardrooms, showrooms and control rooms",
      "Professional installation & calibration support",
    ],
    pointsKm: [
      "ជម្រើស Fine Pitch សម្រាប់មើលជិតបានច្បាស់",
      "សមស្របសម្រាប់បន្ទប់ប្រជុំ, showroom និងបន្ទប់បញ្ជា",
      "ដំឡើង និង calibration ដោយក្រុមជំនាញ",
    ],
    href: "/led-display/indoor-led-display",
  },
  {
    key: "billboard",
    titleEn: "LED Billboard & Outdoor Advertising",
    titleKm: "ប៊ីលបត LED និងការផ្សព្វផ្សាយក្រៅអគារ",
    pointsEn: [
      "Best viewing distance planning (pixel pitch guidance)",
      "High brightness, weather protection & stable power design",
      "Installation, commissioning & maintenance support in Cambodia",
    ],
    pointsKm: [
      "ផែនការចម្ងាយមើល (ការណែនាំ pixel pitch)",
      "ពន្លឺខ្ពស់ ការការពារអាកាសធាតុ និងប្រព័ន្ធថាមពលមានស្ថេរភាព",
      "ដំឡើង Commissioning និងសេវាកម្មថែទាំនៅកម្ពុជា",
    ],
    href: "/solutions/led-billboard-cambodia",
  },
  {
    key: "signage",
    titleEn: "Retail & Mall Digital Signage",
    titleKm: "Digital Signage សម្រាប់ហាង និងផ្សារ",
    pointsEn: [
      "Storefront LED & indoor video wall displays",
      "Content-ready signage for promotions and branding",
      "Reliable performance with service support",
    ],
    pointsKm: [
      "LED storefront និង video wall ក្នុងអគារ",
      "សម្រាប់ប្រូម៉ូសិន និង branding (content-ready)",
      "ប្រសិទ្ធភាពមានស្ថេរភាពជាមួយសេវាកម្មគាំទ្រ",
    ],
    href: "/solutions/digital-signage-cambodia",
  },
  {
    key: "smart_classroom",
    titleEn: "Smart Classroom Solutions",
    titleKm: "ដំណោះស្រាយ Smart Classroom",
    pointsEn: [
      "IFP smart board (65/75/86) for teaching & training",
      "OPS/PC integration, wireless sharing & touch annotation",
      "Project-based setup with user training support",
    ],
    pointsKm: [
      "IFP Smart Board (65/75/86) សម្រាប់បង្រៀន និងបណ្តុះបណ្តាល",
      "រួមបញ្ចូល OPS/PC, wireless sharing និង touch annotation",
      "ការតំឡើងតាមគម្រោង + ការបណ្តុះបណ្តាលអ្នកប្រើ",
    ],
    href: "/solutions/smart-classroom-cambodia",
  },
  {
    key: "access",
    titleEn: "Office & Building Access Control",
    titleKm: "Access Control សម្រាប់ការិយាល័យ និងអគារ",
    pointsEn: [
      "Turnstiles + biometric/RFID access control integration",
      "Visitor flow control for offices, condos and institutions",
      "Local installation and after-sales support",
    ],
    pointsKm: [
      "រួមបញ្ចូល Turnstile ជាមួយ biometric/RFID",
      "គ្រប់គ្រងចរាចរអ្នកចូលសម្រាប់ office/condo/ស្ថាប័ន",
      "ដំឡើងក្នុងប្រទេស + after-sales support",
    ],
    href: "/solutions/access-control-cambodia",
  },
  {
    key: "pa",
    titleEn: "Factory PA & Announcement System",
    titleKm: "ប្រព័ន្ធ PA និងការប្រកាសសម្រាប់រោងចក្រ",
    pointsEn: [
      "Zoning, paging and emergency announcement capability",
      "Factory-grade speaker and amplifier configuration",
      "Maintenance and support services",
    ],
    pointsKm: [
      "Zoning, paging និង emergency announcement",
      "Speaker/Amplifier ស្តង់ដារ industrial",
      "សេវាថែទាំ និងគាំទ្រ",
    ],
    href: "/solutions/pa-system-cambodia",
  },
];

const QUICK_LINKS = [
  { labelEn: "Indoor LED Display", labelKm: "អេក្រង់ LED ក្នុងអគារ", href: "/led-display/indoor-led-display" },
  { labelEn: "Outdoor LED Display", labelKm: "អេក្រង់ LED ក្រៅអគារ", href: "/led-display/outdoor-led-display" },
  { labelEn: "LED Controller / Processor", labelKm: "Controller / Processor", href: "/products/led-controller" },
  { labelEn: "Interactive Flat Panel", labelKm: "អេក្រង់អន្តរកម្ម (IFP)", href: "/interactive-flat-panel" },
  { labelEn: "Turnstile Gate", labelKm: "Turnstile Gate", href: "/turnstile-gate" },
  { labelEn: "PA System", labelKm: "ប្រព័ន្ធ PA", href: "/pa-system" },
];

const FAQ = [
  {
    qEn: "Do you provide LED display installation across Cambodia?",
    aEn: "Yes. We handle site survey, installation, commissioning and after‑sales support for projects in Phnom Penh, Siem Reap, Sihanoukville and nearby provinces.",
    qKm: "តើអ្នកផ្តល់សេវាដំឡើងអេក្រង់ LED ទូទាំងកម្ពុជាទេ?",
    aKm: "បាទ/ចាស។ យើងស្ទង់ទីតាំង ដំឡើង Commissioning និង after‑sales support សម្រាប់គម្រោងនៅ Phnom Penh, Siem Reap, Sihanoukville និងខេត្តជិតខាង។",
  },
  {
    qEn: "How do I choose the right pixel pitch for my project?",
    aEn: "Rule of thumb: optimal viewing distance is about pixel pitch × 2.5 in meters. We match pitch to your room size, content type and viewing distance.",
    qKm: "តើជ្រើស pixel pitch ដូចម្តេចឱ្យត្រឹមត្រូវ?",
    aKm: "របៀបសាមញ្ញ៖ ចម្ងាយមើលសមរម្យ ≈ pixel pitch × 2.5 (ជាម៉ែត្រ)។ យើងជ្រើសតាមទំហំបន្ទប់ ប្រភេទ content និងចម្ងាយមើល។",
  },
  {
    qEn: "What brightness and IP rating are typical for outdoor LED screens?",
    aEn: "Outdoor LED screens commonly use high brightness around 6000+ nits with IP65 protection; some cabinets are rated IP66 depending on design.",
    qKm: "Outdoor LED តម្រូវឱ្យមាន brightness និង IP rating ប្រហែលប៉ុន្មាន?",
    aKm: "Outdoor LED 通常មាន brightness ប្រហែល 6000+ nits និង IP65; ខ្លះមាន IP66 អាស្រ័យលើរចនា។",
  },
  {
    qEn: "Indoor vs outdoor LED display—what’s the difference?",
    aEn: "Indoor LED focuses on finer pixel pitch and close viewing, while outdoor LED prioritizes high brightness, weather protection and long‑distance visibility.",
    qKm: "Indoor និង Outdoor LED មានភាពខុសគ្នាអ្វីខ្លះ?",
    aKm: "Indoor LED ផ្តោតលើ pixel pitch តូច និងមើលជិត ខណៈ Outdoor LED ផ្តោតលើពន្លឺខ្ពស់ ការការពារអាកាសធាតុ និងមើលឆ្ងាយ។",
  },
  {
    qEn: "Do you supply digital signage for retail, malls and hotels?",
    aEn: "Yes. We provide digital signage solutions for retail, malls, hotels and showrooms with content control and installation support.",
    qKm: "តើមាន digital signage សម្រាប់ហាងលក់រាយ និងសណ្ឋាគារទេ?",
    aKm: "មាន។ យើងផ្គត់ផ្គង់ digital signage សម្រាប់ retail, mall, hotel និង showroom ជាមួយការគាំទ្រដំឡើង។",
  },
  {
    qEn: "Can you integrate turnstile gates with biometric access control?",
    aEn: "Yes. We integrate turnstile gates with RFID/biometric access control and attendance systems for offices, condos, factories and institutions.",
    qKm: "តើអ្នកអាចរួមបញ្ចូល Turnstile ជាមួយ biometric access control បានទេ?",
    aKm: "បាន។ យើងរួមបញ្ចូល Turnstile ជាមួយ RFID/biometric និង attendance systems សម្រាប់ office, condo, factory និងស្ថាប័ន។",
  },
  {
    qEn: "Do you provide warranty and maintenance support?",
    aEn: "Yes. We provide warranty support and maintenance options to keep your system stable and reduce downtime.",
    qKm: "តើមានសេវាធានា និងថែទាំទេ?",
    aKm: "មាន។ យើងផ្តល់សេវាធានា និងជម្រើសថែទាំ ដើម្បីរក្សាស្ថេរភាព និងកាត់បន្ថយ downtime។",
  },
];

export default function HomePage() {
  // ---------- JSON-LD (Organization + Website + FAQPage) ----------
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mugnee Cambodia",
    url: SITE_URL,
    logo: `${SITE_URL}/icons/logo.png`,
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
    "@type": "WebSite",
    name: "Mugnee Cambodia",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/products?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.qEn,
      acceptedAnswer: { "@type": "Answer", text: f.aEn },
    })),
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
        siteUrl={SITE_URL}
        cities={CITIES}
        categoryTiles={CATEGORY_TILES}
        solutions={SOLUTIONS}
        quickLinks={QUICK_LINKS}
        faq={FAQ}
      />
    </main>
  );
}






