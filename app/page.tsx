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


/** Set this in production:
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
      "LED Display, Digital Signage, Smart Boards, Turnstile Gates, PA Systems & Access Control in Cambodia.",
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
      "ដំណោះស្រាយអេក្រង់ LED Video Wall សម្រាប់ក្នុងអគារ និងក្រៅអគារ ប្រើបានសម្រាប់ហាង ព្រឹត្តិការណ៍ និងការផ្សព្វផ្សាយពាណិជ្ជកម្ម។",
    href: "/led-display",
    icon: <IconMonitor className="h-5 w-5 text-slate-700" />,
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
    href: "/solutions/led-billboard-cambodia",
    icon: <IconAntenna className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "receiving_card",
    titleEn: "Receiving Card",
    titleKm: "កាតទទួលសញ្ញា",
    descEn: "Reliable LED receiving cards for stable signal distribution and display control.",
    descKm: "កាតទទួលសញ្ញា LED ដែលមានស្ថិរភាព សម្រាប់ចែកចាយសញ្ញា និងគ្រប់គ្រងការបង្ហាញបានត្រឹមត្រូវ។",
    href: "/led-display/receiving-card",
    icon: <IconLock className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "ifp",
    titleEn: "Interactive Flat Panel",
    titleKm: "អេក្រង់អន្តរកម្ម (IFP)",
    descEn: "Smart board solutions for classrooms, training rooms and boardrooms.",
    descKm: "ដំណោះស្រាយ Smart Board សម្រាប់ថ្នាក់រៀន បន្ទប់បណ្តុះបណ្តាល និងបន្ទប់ប្រជុំ។",
    href: "/interactive-flat-panel",
    icon: <IconPresentation className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "turnstile",
    titleEn: "Turnstile Gates",
    titleKm: "ច្រកទ្វារ Turnstile",
    descEn: "Tripod, swing, flap barrier and speed gates for secure entry control.",
    descKm: "Tripod, Swing, Flap Barrier និង Speed Gate សម្រាប់គ្រប់គ្រងច្រកចេញចូលដោយសុវត្ថិភាព។",
    href: "/turnstile-gate",
    icon: <IconBarrier className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "pa_system",
    titleEn: "PA System",
    titleKm: "ប្រព័ន្ធ PA",
    descEn: "Public address systems for factories, schools, buildings and venues.",
    descKm: "ប្រព័ន្ធផ្សព្វផ្សាយសម្លេង សម្រាប់រោងចក្រ សាលារៀន អគារ និងទីតាំងព្រឹត្តិការណ៍។",
    href: "/pa-system",
    icon: <IconMic className="h-5 w-5 text-slate-700" />,
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
      "ជម្រើស Fine Pixel Pitch សម្រាប់មើលជិតបានច្បាស់។",
      "សមស្របសម្រាប់បន្ទប់ប្រជុំ Showroom និងបន្ទប់គ្រប់គ្រង។",
      "គាំទ្រការដំឡើង និង Calibration ដោយក្រុមជំនាញ។",
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
      "រៀបចំចម្ងាយមើលបានត្រឹមត្រូវ (ណែនាំ Pixel Pitch)។",
      "ពន្លឺខ្ពស់ ការពារអាកាសធាតុ និងប្រព័ន្ធថាមពលមានស្ថិរភាព។",
      "គាំទ្រការដំឡើង Commissioning និងថែទាំនៅកម្ពុជា។",
    ],
    href: "/solutions/led-billboard-cambodia",
  },
  {
    key: "signage",
    titleEn: "Retail & Mall Digital Signage",
    titleKm: "Digital Signage សម្រាប់ហាង និងផ្សារទំនើប",
    pointsEn: [
      "Storefront LED & indoor video wall displays",
      "Content-ready signage for promotions and branding",
      "Reliable performance with service support",
    ],
    pointsKm: [
      "អេក្រង់ LED មុខហាង និង Video Wall ខាងក្នុង។",
      "ផ្ទាំងបង្ហាញដែលត្រៀមខ្លឹមសារសម្រាប់ Promotion និង Branding។",
      "ដំណើរការស្ថិរភាព ជាមួយសេវាគាំទ្របច្ចេកទេស។",
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
      "IFP Smart Board (65/75/86) សម្រាប់បង្រៀន និងបណ្តុះបណ្តាល។",
      "រួមបញ្ចូល OPS/PC, Wireless Sharing និង Touch Annotation។",
      "រៀបចំប្រព័ន្ធតាមគម្រោង ជាមួយការបណ្តុះបណ្តាលអ្នកប្រើប្រាស់។",
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
      "រួមបញ្ចូល Turnstile ជាមួយ Biometric/RFID Access Control។",
      "គ្រប់គ្រងលំហូរអ្នកចូលចេញ សម្រាប់ Office, Condo និងស្ថាប័ន។",
      "ដំឡើងក្នុងស្រុក និងសេវាកម្មបន្ទាប់ពីលក់។",
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
      "គាំទ្រ Zoning, Paging និង Emergency Announcement។",
      "កំណត់ Speaker/Amplifier ស្តង់ដារឧស្សាហកម្ម។",
      "សេវាថែទាំ និងគាំទ្របច្ចេកទេស។",
    ],
    href: "/solutions/pa-system-cambodia",
  },
];

const FAQ = [
  {
    qEn: "Do you provide LED display installation across Cambodia?",
    aEn: "Yes. We provide site survey, installation, commissioning, and after-sales support for projects in Phnom Penh, Siem Reap, Sihanoukville, and other provinces.",
    qKm: "តើអ្នកផ្តល់សេវាដំឡើង LED Display ទូទាំងកម្ពុជាដែរឬទេ?",
    aKm: "បាទ/ចាស។ យើងផ្តល់សេវា site survey, installation, commissioning និង after-sales support សម្រាប់គម្រោងនៅ Phnom Penh, Siem Reap, Sihanoukville និងខេត្តផ្សេងៗ។",
  },
  {
    qEn: "How do I choose the right pixel pitch for my project?",
    aEn: "A practical method is to match pixel pitch with viewing distance and content type. We recommend the right pitch based on room size, audience distance, and budget.",
    qKm: "តើខ្ញុំជ្រើសរើស pixel pitch សមស្របសម្រាប់គម្រោងយ៉ាងដូចម្តេច?",
    aKm: "វិធីសាស្ត្រដែលត្រឹមត្រូវគឺផ្គូផ្គង pixel pitch ជាមួយ viewing distance និងប្រភេទ content។ យើងណែនាំ pitch សមស្របតាមទំហំបន្ទប់ ចម្ងាយអ្នកមើល និងថវិកា។",
  },
  {
    qEn: "What brightness and IP rating are recommended for outdoor LED screens?",
    aEn: "Most outdoor projects use high-brightness panels with IP65 or higher weather protection. Final specs depend on sunlight exposure, installation height, and operating hours.",
    qKm: "Outdoor LED screen គួរប្រើ brightness និង IP rating ប៉ុន្មាន?",
    aKm: "គម្រោង outdoor ភាគច្រើនប្រើ panel ភ្លឺខ្ពស់ជាមួយ IP65 ឬលើសនេះ ដើម្បីការពារអាកាសធាតុ។ ស្តង់ដារចុងក្រោយអាស្រ័យលើពន្លឺថ្ងៃ កម្ពស់ដំឡើង និងម៉ោងប្រើប្រាស់។",
  },
  {
    qEn: "What is the difference between indoor and outdoor LED display?",
    aEn: "Indoor LED is optimized for close viewing and finer pixel pitch, while outdoor LED is designed for stronger brightness, weather resistance, and long-distance visibility.",
    qKm: "Indoor LED និង Outdoor LED ខុសគ្នាយ៉ាងដូចម្តេច?",
    aKm: "Indoor LED ត្រូវបានរចនាសម្រាប់មើលជិត និង fine pixel pitch ខណៈ Outdoor LED រចនាសម្រាប់ភ្លឺខ្ពស់ ទប់ទល់អាកាសធាតុ និងមើលឃើញចម្ងាយឆ្ងាយ។",
  },
  {
    qEn: "Do you supply digital signage solutions for malls, hotels, and retail stores?",
    aEn: "Yes. We design and install digital signage systems for promotions, menu boards, wayfinding, and brand communication across retail and hospitality environments.",
    qKm: "តើអ្នកផ្គត់ផ្គង់ Digital Signage សម្រាប់ mall, hotel និង retail store ដែរឬទេ?",
    aKm: "បាទ/ចាស។ យើងរចនា និងដំឡើងប្រព័ន្ធ Digital Signage សម្រាប់ promotion, menu board, wayfinding និង brand communication ក្នុងអាជីវកម្ម retail និង hospitality។",
  },
  {
    qEn: "Can you integrate turnstile gates with RFID and biometric access control?",
    aEn: "Yes. We integrate turnstile gates with RFID cards, fingerprint, face recognition, and attendance platforms for offices, factories, and institutions.",
    qKm: "តើអ្នកអាច integrate Turnstile Gate ជាមួយ RFID និង biometric access control ដែរឬទេ?",
    aKm: "បាទ/ចាស។ យើងអាច integrate turnstile gate ជាមួយ RFID card, fingerprint, face recognition និង attendance platform សម្រាប់ office, factory និងស្ថាប័ន។",
  },
  {
    qEn: "Do you provide PA system design and installation for factories and campuses?",
    aEn: "Yes. We provide PA system planning, zoning, amplifier and speaker configuration, emergency announcement setup, and long-term maintenance support.",
    qKm: "តើអ្នកផ្តល់សេវា design និង installation ប្រព័ន្ធ PA សម្រាប់រោងចក្រ និង campus ដែរឬទេ?",
    aKm: "បាទ/ចាស។ យើងផ្តល់សេវា PA system planning, zoning, amplifier/speaker configuration, emergency announcement setup និង maintenance support រយៈពេលវែង។",
  },
  {
    qEn: "How long does a typical LED display project take from survey to handover?",
    aEn: "Timeline depends on site readiness and scope, but most projects follow a structured workflow from survey and BOQ to installation, testing, and final handover.",
    qKm: "គម្រោង LED Display ទូទៅ ចាប់ពី survey ដល់ handover ចំណាយពេលប៉ុន្មាន?",
    aKm: "Timeline អាស្រ័យលើការត្រៀម site និង scope ការងារ ប៉ុន្តែភាគច្រើនដំណើរការតាម workflow ច្បាស់លាស់ពី survey និង BOQ ដល់ installation, testing និង handover ចុងក្រោយ។",
  },
  {
    qEn: "Do you offer warranty and preventive maintenance plans?",
    aEn: "Yes. We provide warranty coverage, preventive maintenance, health checks, and support plans to reduce downtime and improve system reliability.",
    qKm: "តើមាន warranty និង preventive maintenance plan ដែរឬទេ?",
    aKm: "មាន។ យើងផ្តល់ warranty coverage, preventive maintenance, health check និង support plan ដើម្បីកាត់បន្ថយ downtime និងបង្កើនភាពទុកចិត្តរបស់ប្រព័ន្ធ។",
  },
  {
    qEn: "How can I get a quotation for LED display, signage, or access control in Cambodia?",
    aEn: "Share your site location, required screen size or lane count, usage type, and timeline. Our team will recommend a practical configuration and provide a project-based quotation.",
    qKm: "ខ្ញុំអាចស្នើសុំ quotation សម្រាប់ LED Display, Signage ឬ Access Control នៅកម្ពុជាយ៉ាងដូចម្តេច?",
    aKm: "សូមផ្ញើទីតាំង site, ទំហំអេក្រង់ ឬចំនួន lane, ប្រភេទការប្រើប្រាស់ និង timeline។ ក្រុមការងារយើងនឹងណែនាំ configuration សមស្រប និងផ្តល់ project-based quotation។",
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
        cities={CITIES}
        categoryTiles={CATEGORY_TILES}
        solutions={SOLUTIONS}
        faq={FAQ}
      />
    </main>
  );
}







