import type { Metadata } from "next";
import HomeClient from "./components/home/HomeClient";


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
    href: "/products/indoor-led-display",
    icon: "🟦",
  },
    {
    key: "indoor_led_display",
    titleEn: "Indoor LED Display",
    titleKm: "Indoor LED Display",
    descEn: "Meeting rooms, showrooms & indoor LED walls.",
    descKm: "Meeting rooms � Showrooms � Indoor LED walls",
    href: "/products/indoor-led-display",
    icon: "🟢",
  },{
    key: "outdoor_billboard",
    titleEn: "Outdoor LED Billboard",
    titleKm: "ប៊ីលបត LED ក្រៅអគារ",
    descEn: "High-brightness LED screens built for heat, rain and 24/7 operation.",
    descKm: "អេក្រង់ភ្លឺខ្លាំង អាចធន់កម្ដៅ ភ្លៀង និងដំណើរការ 24/7។",
    href: "/solutions/led-billboard-cambodia",
    icon: "🌤️",
  },
  {
    key: "digital_signage",
    titleEn: "Digital Signage",
    titleKm: "ផ្ទាំងបង្ហាញឌីជីថល",
    descEn: "Mall, hotel and store signage to engage customers and drive sales.",
    descKm: "សម្រាប់ផ្សារ សណ្ឋាគារ និងហាង ដើម្បីទាក់ទាញអតិថិជន និងបង្កើនការលក់។",
    href: "/solutions/digital-signage-cambodia",
    icon: "📺",
  },
  {
    key: "ifp",
    titleEn: "Interactive Flat Panel",
    titleKm: "អេក្រង់អន្តរកម្ម (IFP)",
    descEn: "Smart board solutions for classrooms, training rooms and boardrooms.",
    descKm: "Smart Board សម្រាប់ថ្នាក់រៀន បន្ទប់បណ្តុះបណ្តាល និងបន្ទប់ប្រជុំ។",
    href: "/products/interactive-flat-panel",
    icon: "🧠",
  },
  {
    key: "turnstile",
    titleEn: "Turnstile Gates",
    titleKm: "ច្រកទ្វារ Turnstile",
    descEn: "Tripod, swing, flap barrier and speed gates for secure entry control.",
    descKm: "Tripod / Swing / Flap Barrier / Speed Gate សម្រាប់គ្រប់គ្រងច្រកចូលដោយសុវត្ថិភាព។",
    href: "/products/turnstile-gate",
    icon: "🚪",
  },
  {
    key: "access_control",
    titleEn: "Access Control",
    titleKm: "ប្រព័ន្ធគ្រប់គ្រងការចូល",
    descEn: "RFID & biometric access control with attendance and door integration.",
    descKm: "RFID និង Biometrics ជាមួយ attendance និងការរួមបញ្ចូលទ្វារ។",
    href: "/products/access-control-system",
    icon: "🔐",
  },
  {
    key: "pa_system",
    titleEn: "PA System",
    titleKm: "ប្រព័ន្ធ PA",
    descEn: "Public address systems for factories, schools, buildings and venues.",
    descKm: "ប្រព័ន្ធផ្សព្វផ្សាយសំឡេងសម្រាប់រោងចក្រ សាលារៀន អគារ និងទីកន្លែងព្រឹត្តិការណ៍។",
    href: "/products/pa-system",
    icon: "📢",
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
    href: "/products/indoor-led-display",
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
  { labelEn: "Indoor LED Display", labelKm: "អេក្រង់ LED ក្នុងអគារ", href: "/products/indoor-led-display" },
  { labelEn: "Outdoor LED Display", labelKm: "អេក្រង់ LED ក្រៅអគារ", href: "/products/outdoor-led-display" },
  { labelEn: "LED Controller / Processor", labelKm: "Controller / Processor", href: "/products/led-controller" },
  { labelEn: "Interactive Flat Panel", labelKm: "អេក្រង់អន្តរកម្ម (IFP)", href: "/products/interactive-flat-panel" },
  { labelEn: "Turnstile Gate", labelKm: "Turnstile Gate", href: "/products/turnstile-gate" },
  { labelEn: "Access Control System", labelKm: "Access Control", href: "/products/access-control-system" },
  { labelEn: "PA System", labelKm: "ប្រព័ន្ធ PA", href: "/products/pa-system" },
];

const FAQ = [
  {
    qEn: "Do you provide LED display installation in Cambodia?",
    aEn: "Yes. We provide site survey, installation, commissioning, and after-sales support in Cambodia, including Phnom Penh, Siem Reap and Sihanoukville.",
    qKm: "តើអ្នកផ្តល់សេវាដំឡើងអេក្រង់ LED នៅកម្ពុជា​ទេ?",
    aKm: "បាទ/ចាស។ យើងផ្តល់សេវាស្ទង់ទីតាំង ដំឡើង Commissioning និង after-sales support ក្នុងកម្ពុជា រួមទាំង Phnom Penh, Siem Reap និង Sihanoukville។",
  },
  {
    qEn: "Which LED display is best for outdoor advertising in Phnom Penh?",
    aEn: "Outdoor projects typically require high brightness, weather protection and stable power design. We recommend selecting pixel pitch based on viewing distance and installation height.",
    qKm: "អេក្រង់ LED ប្រភេទណាល្អសម្រាប់ការផ្សព្វផ្សាយក្រៅអគារ​នៅ Phnom Penh?",
    aKm: "គម្រោងក្រៅអគារត្រូវការពន្លឺខ្ពស់ ការការពារអាកាសធាតុ និងប្រព័ន្ធថាមពលមានស្ថេរភាព។ យើងណែនាំជ្រើស pixel pitch តាមចម្ងាយមើល និងកម្ពស់ដំឡើង។",
  },
  {
    qEn: "Do you supply interactive flat panels (smart boards) for schools?",
    aEn: "Yes. We supply and install interactive flat panels (IFP) for classrooms and training rooms, including setup support and basic user training.",
    qKm: "តើអ្នកផ្គត់ផ្គង់អេក្រង់អន្តរកម្ម (Smart Board) សម្រាប់សាលារៀនទេ?",
    aKm: "បាទ/ចាស។ យើងផ្គត់ផ្គង់ និងដំឡើង IFP សម្រាប់ថ្នាក់រៀន និងបន្ទប់បណ្តុះបណ្តាល រួមទាំងការកំណត់ត្រា និងបណ្តុះបណ្តាលមូលដ្ឋាន។",
  },
  {
    qEn: "Can you integrate turnstile gates with biometric access control?",
    aEn: "Yes. We integrate turnstile gates with biometric/RFID access control and attendance systems for offices, condos, factories and institutions.",
    qKm: "តើអ្នកអាចរួមបញ្ចូល Turnstile ជាមួយ biometric access control បានទេ?",
    aKm: "បាន។ យើងរួមបញ្ចូល Turnstile ជាមួយ biometric/RFID និង attendance systems សម្រាប់ office, condo, factory និងស្ថាប័ន។",
  },
  {
    qEn: "Do you offer maintenance and warranty support?",
    aEn: "Yes. We provide warranty support and maintenance options (including AMC) to ensure stable operation and long service life.",
    qKm: "តើមានសេវាធានា និងថែទាំទេ?",
    aKm: "មាន។ យើងផ្តល់សេវាធានា និងជម្រើសថែទាំ (រួម AMC) ដើម្បីធានាដំណើរការមានស្ថេរភាព និងអាយុកាលយូរ។",
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

