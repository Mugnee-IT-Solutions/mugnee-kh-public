/*
  Developer Signature:
  This website was developed by Mugnee IT Solutions.
  Developer Name: Ankur Datta
  Email: ankurdatta.official@gmail.com
  Github: https://github.com/ankur-datta-official
*/
import type { Metadata } from "next";
import Image from "next/image";
import HomeClient from "./components/home/HomeClient";

type IconProps = { className?: string };

function IconMonitor({ className }: IconProps) {
  return <Image src="/images/home/unit-icons/digital-display-2.webp" alt="" width={32} height={32} className={className} aria-hidden="true" />;
}

function IconSparkles({ className }: IconProps) {
  return <Image src="/images/home/unit-icons/smart-board.webp" alt="" width={32} height={32} className={className} aria-hidden="true" />;
}

function IconAntenna({ className }: IconProps) {
  return <Image src="/images/home/unit-icons/kiosk.webp" alt="" width={32} height={32} className={className} aria-hidden="true" />;
}

function IconTv({ className }: IconProps) {
  return <Image src="/images/home/unit-icons/sound-system.webp" alt="" width={32} height={32} className={className} aria-hidden="true" />;
}

function IconPresentation({ className }: IconProps) {
  return <Image src="/images/home/unit-icons/smart-board.webp" alt="" width={32} height={32} className={className} aria-hidden="true" />;
}

function IconBarrier({ className }: IconProps) {
  return <Image src="/images/home/unit-icons/turnstile-gate.webp" alt="" width={32} height={32} className={className} aria-hidden="true" />;
}

function IconLock({ className }: IconProps) {
  return <Image src="/images/home/unit-icons/security.webp" alt="" width={32} height={32} className={className} aria-hidden="true" />;
}

function IconMic({ className }: IconProps) {
  return <Image src="/images/home/unit-icons/pa-system.webp" alt="" width={32} height={32} className={className} aria-hidden="true" />;
}

function IconPower({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="7" y="8" width="10" height="9" rx="1.5" />
      <path d="M10 8V5.5" />
      <path d="M14 8V5.5" />
      <path d="M12 17v2.5" />
      <path d="M9.5 19.5h5" />
    </svg>
  );
}

function IconCatalog({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
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

export const metadata: Metadata = {
  title: "Mugnee Cambodia | Leading Premium Technology Provider",
  description:
    "Mugnee Cambodia is a smart technology and system integration company serving Cambodia with local engineering, installation, commissioning, and after-sales support.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      en: PAGE_PATH,
      km: `/km/`,
      "x-default": PAGE_PATH,
    },
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Mugnee Cambodia | Leading Premium Technology Provider",
    description:
      "Brand overview of Mugnee Cambodia: smart technology, project delivery, and local support for commercial and institutional projects.",
    siteName: "Mugnee Cambodia",
    images: [
      {
        url: `${SITE_URL}/images/hero/cambodia-led-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Mugnee Cambodia company and project delivery overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mugnee Cambodia | Leading Premium Technology Provider",
    description:
      "Smart technology solutions, engineering delivery, and local support in Cambodia.",
    images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
  },
};

const CATEGORY_TILES = [
  {
    key: "led_display",
    titleEn: "Display Systems",
    titleKm: "ប្រព័ន្ធអេក្រង់បង្ហាញ",
    descEn:
      "Commercial display projects with planning, deployment, and local support.",
    descKm:
      "គម្រោងអេក្រង់ពាណិជ្ជកម្មជាមួយការរៀបចំផែនការ ការដំឡើង និងសេវាគាំទ្រក្នុងស្រុក។",
    href: "/led-display",
    icon: <IconMonitor className="h-8 w-8 object-contain" />,
  },
  {
    key: "indoor_led_display",
    titleEn: "Indoor Display Solutions",
    titleKm: "ដំណោះស្រាយអេក្រង់ខាងក្នុង",
    descEn: "Indoor communication environments for offices and public spaces.",
    descKm: "សមស្របសម្រាប់ការិយាល័យ Showroom និងតំបន់សាធារណៈដែលត្រូវការទំនាក់ទំនងតាម LED Display។",
    href: "/indoor-led-display",
    icon: <IconSparkles className="h-8 w-8 object-contain" />,
  },
  {
    key: "outdoor_billboard",
    titleEn: "Outdoor Media Systems",
    titleKm: "ប្រព័ន្ធផ្សព្វផ្សាយខាងក្រៅ",
    descEn: "Outdoor campaign deployment with structured implementation and support.",
    descKm: "សម្រាប់យុទ្ធនាការខាងក្រៅ ដោយមានការអនុវត្តជាជំហាន និងសេវាគាំទ្របន្ត។",
    href: "/solutions/retail-digital-signage-cambodia",
    icon: <IconAntenna className="h-8 w-8 object-contain" />,
  },
  {
    key: "receiving_card",
    titleEn: "Receiving Card",
    titleKm: "កាតទទួលសញ្ញា",
    descEn: "Signal and control components for reliable system performance.",
    descKm: "សមាសភាគសញ្ញា និងការគ្រប់គ្រង សម្រាប់ធានាស្ថិរភាពដំណើរការប្រព័ន្ធ LED។",
    href: "/receiving-card",
    icon: <IconLock className="h-8 w-8 object-contain" />,
  },
  {
    key: "ifp",
    titleEn: "Interactive Flat Panel",
    titleKm: "អេក្រង់អន្តរកម្ម (IFP)",
    descEn: "Smart board solutions for classrooms, training rooms and boardrooms.",
    descKm: "ដំណោះស្រាយបន្ទះឆ្លាតវៃសម្រាប់ថ្នាក់រៀន បន្ទប់បណ្តុះបណ្តាល និងបន្ទប់ប្រជុំ។",
    href: "/solutions/education-smart-classroom-cambodia",
    icon: <IconPresentation className="h-8 w-8 object-contain" />,
  },
  {
    key: "turnstile",
    titleEn: "Turnstile Gates",
    titleKm: "ច្រកទ្វារ Turnstile",
    descEn: "Tripod, swing, flap barrier and speed gates for secure entry control.",
    descKm: "ច្រកបីដង ច្រកស្លាបបើក ច្រកស្លាបបិទបើក និងច្រកល្បឿនលឿន សម្រាប់គ្រប់គ្រងច្រកចេញចូលដោយសុវត្ថិភាព។",
    href: "/solutions/office-access-control-cambodia",
    icon: <IconBarrier className="h-8 w-8 object-contain" />,
  },
  {
    key: "pa_system",
    titleEn: "PA System",
    titleKm: "ប្រព័ន្ធ PA",
    descEn: "Public address systems for factories, schools, buildings and venues.",
    descKm: "ប្រព័ន្ធផ្សព្វផ្សាយសម្លេងសម្រាប់រោងចក្រ សាលារៀន អគារ និងទីតាំងព្រឹត្តិការណ៍។",
    href: "/pa-system",
    icon: <IconMic className="h-8 w-8 object-contain" />,
  },
  {
    key: "video_processor",
    titleEn: "Video Processor",
    titleKm: "ឧបករណ៍ដំណើរការវីដេអូ",
    descEn: "Video processing components for switching, scaling, and stable content flow.",
    descKm: "ឧបករណ៍កែច្នៃវីដេអូសម្រាប់ប្ដូរប្រភព បំលែងទំហំ និងការបង្ហាញមាតិកាឱ្យមានស្ថិរភាពលើអេក្រង់ LED។",
    href: "/video-processor",
    icon: <IconTv className="h-8 w-8 object-contain" />,
  },
  {
    key: "power_supply",
    titleEn: "Power Supply",
    titleKm: "ឧបករណ៍ផ្គត់ផ្គង់ថាមពល",
    descEn: "Reliable power supply options for stable LED display operation.",
    descKm: "ជម្រើសឧបករណ៍ផ្គត់ផ្គង់ថាមពលដែលទុកចិត្តបាន សម្រាប់ធានាស្ថិរភាពប្រតិបត្តិការអេក្រង់ LED។",
    href: "/power-supply",
    icon: <IconPower className="h-8 w-8 text-slate-600" />,
  },
  {
    key: "all_products",
    titleEn: "All Product Categories",
    titleKm: "ប្រភេទផលិតផលទាំងអស់",
    descEn: "Browse all available product categories and solution components.",
    descKm: "មើលប្រភេទផលិតផល និងសមាសភាគដំណោះស្រាយទាំងអស់សម្រាប់គម្រោងរបស់អ្នក។",
    href: "/products",
    icon: <IconCatalog className="h-8 w-8 text-slate-600" />,
  },
];

const FAQ = [
  {
    qEn: "What does Mugnee Cambodia do?",
    aEn: "Mugnee Cambodia supports commercial and institutional technology projects with planning, implementation, commissioning, and local after-sales service.",
    qKm: "Mugnee Cambodia ធ្វើអ្វីខ្លះ?",
    aKm: "Mugnee Cambodia គាំទ្រគម្រោងបច្ចេកវិទ្យាសម្រាប់អាជីវកម្ម និងស្ថាប័ន ដោយមានការរៀបចំផែនការ អនុវត្ត ការត្រួតពិនិត្យដំណើរការ និងសេវាកម្មបន្ទាប់ពីលក់នៅកម្ពុជា។",
  },
  {
    qEn: "Which areas do you serve in Cambodia?",
    aEn: "Our team supports Phnom Penh, Siem Reap, Sihanoukville, and additional provinces based on project requirements.",
    qKm: "តើអ្នកបម្រើតំបន់ណាខ្លះនៅកម្ពុជា?",
    aKm: "ក្រុមការងារយើងគាំទ្រនៅភ្នំពេញ សៀមរាប ព្រះសីហនុ និងខេត្តផ្សេងៗទៀត អាស្រ័យលើតម្រូវការគម្រោង។",
  },
  {
    qEn: "How does your project workflow run?",
    aEn: "Typical workflow includes requirement review, site assessment, proposal, implementation, testing, handover, and support.",
    qKm: "ដំណើរការគម្រោងរបស់អ្នកដំណើរការយ៉ាងដូចម្តេច?",
    aKm: "ដំណើរការធម្មតារួមមាន ពិនិត្យតម្រូវការ វាយតម្លៃទីតាំង រៀបចំសំណើ អនុវត្តការងារ ធ្វើតេស្ត ប្រគល់ការងារ និងគាំទ្របន្ត។",
  },
  {
    qEn: "Do you provide documentation and training?",
    aEn: "Yes. We provide handover documentation and onboarding guidance so your team can operate confidently.",
    qKm: "តើអ្នកផ្តល់ឯកសារ និងការបណ្តុះបណ្តាលទេ?",
    aKm: "បាទ/ចាស។ យើងផ្តល់ឯកសារប្រគល់ការងារ និងការណែនាំប្រើប្រាស់ដំបូង ដើម្បីឲ្យក្រុមរបស់អ្នកប្រើប្រព័ន្ធបានដោយទំនុកចិត្ត។",
  },
  {
    qEn: "Do you support both private and public sector projects?",
    aEn: "Yes. Our team works with private companies, institutions, and public-sector organizations using project-based delivery.",
    qKm: "តើអ្នកគាំទ្រគម្រោងទាំងឯកជន និងរដ្ឋទេ?",
    aKm: "បាទ/ចាស។ ក្រុមរបស់យើងធ្វើការជាមួយក្រុមហ៊ុនឯកជន ស្ថាប័ន និងអង្គភាពរដ្ឋ តាមរបៀបអនុវត្តគម្រោងជាក់លាក់ (project-based)។",
  },
  {
    qEn: "Can you coordinate with contractors and consultants?",
    aEn: "Yes. We coordinate with project stakeholders to align site readiness, implementation timeline, and handover requirements.",
    qKm: "តើអ្នកអាចសម្របសម្រួលជាមួយអ្នកម៉ៅការ និងអ្នកប្រឹក្សាបានទេ?",
    aKm: "បាទ/ចាស។ យើងសម្របសម្រួលជាមួយភាគីពាក់ព័ន្ធក្នុងគម្រោង ដើម្បីឲ្យការត្រៀមទីតាំង កាលវិភាគអនុវត្ត និងលក្ខខណ្ឌប្រគល់ការងារស្របគ្នា។",
  },
  {
    qEn: "How long does a typical project take?",
    aEn: "Timeline depends on scope and site readiness. We provide a clear schedule after initial requirement and site review.",
    qKm: "គម្រោងមួយធម្មតាចំណាយពេលប៉ុន្មាន?",
    aKm: "រយៈពេលអាស្រ័យលើទំហំការងារ និងភាពត្រៀមរួចរបស់ទីតាំង។ យើងនឹងផ្តល់កាលវិភាគច្បាស់លាស់ បន្ទាប់ពីពិនិត្យតម្រូវការ និងទីតាំងដំបូង។",
  },
  {
    qEn: "Do you offer warranty and ongoing support?",
    aEn: "Yes. We provide warranty coverage and support plans to maintain performance after handover.",
    qKm: "តើមានការធានា និងសេវាគាំទ្របន្តទេ?",
    aKm: "បាទ/ចាស។ យើងផ្តល់ការធានា និងផែនការគាំទ្របន្ត ដើម្បីរក្សាស្ថិរភាព និងប្រសិទ្ធភាពប្រព័ន្ធបន្ទាប់ពីប្រគល់ការងារ។",
  },
  {
    qEn: "How can I request a quotation?",
    aEn: "Share your location, project objective, and timeline. Our team will respond with a project-based scope and quotation.",
    qKm: "តើខ្ញុំអាចស្នើសុំសម្រង់តម្លៃបានដូចម្តេច?",
    aKm: "សូមផ្ញើទីតាំង គោលបំណងគម្រោង និងពេលវេលាដែលអ្នកចង់អនុវត្ត។ ក្រុមការងារយើងនឹងឆ្លើយតបជាមួយវិសាលភាពការងារ និងសម្រង់តម្លៃតាមគម្រោង។",
  },
  {
    qEn: "Where can I find detailed product-level information?",
    aEn: "You can visit each dedicated product page from this site for focused technical details, specifications, and use-case guidance.",
    qKm: "តើខ្ញុំអាចរកព័ត៌មានលម្អិតតាមផលិតផលនៅឯណា?",
    aKm: "អ្នកអាចចូលមើលទំព័រផលិតផលនីមួយៗក្នុងគេហទំព័រនេះ ដើម្បីទទួលបានព័ត៌មានបច្ចេកទេស លក្ខណៈបញ្ជាក់ និងការណែនាំតាមការប្រើប្រាស់។",
  },
];

export default function HomePage() {
  // ---------- JSON-LD (FAQPage) ----------
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: ["en", "km"],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <HomeClient
        categoryTiles={CATEGORY_TILES}
        faq={FAQ}
      />
    </main>
  );
}
