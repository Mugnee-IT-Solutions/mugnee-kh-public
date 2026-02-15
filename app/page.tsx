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


/** âœ… Set this in production:
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
      "LED Display, Digital Signage, Smart Boards, Turnstile Gates, PA Systems & Access Control â€” Cambodia.",
    images: [`${SITE_URL}/images/hero/cambodia-led-hero.webp`],
  },
};

const CITIES = ["Phnom Penh", "Siem Reap", "Sihanoukville"];

const CATEGORY_TILES = [
  {
    key: "led_display",
    titleEn: "LED Display",
    titleKm: "áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED",
    descEn:
      "Indoor & outdoor LED video wall solutions for retail, events and advertising.",
    descKm:
      "ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED áž€áŸ’áž“áž»áž„/áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž›áž€áŸ‹ážšáž¶áž™ áž–áŸ’ážšáž¹ážáŸ’ážáž·áž€áž¶ážšážŽáŸ áž“áž·áž„áž€áž¶ážšáž•áŸ’ážŸáž–áŸ’ážœáž•áŸ’ážŸáž¶áž™áŸ”",
    href: "/led-display",
    icon: <IconMonitor className="h-5 w-5 text-slate-700" />,
  },
    {
    key: "indoor_led_display",
    titleEn: "Indoor LED Display",
    titleKm: "Indoor LED Display",
    descEn: "Meeting rooms, showrooms & indoor LED walls.",
    descKm: "Meeting rooms ï¿½ Showrooms ï¿½ Indoor LED walls",
    href: "/led-display/indoor-led-display",
    icon: <IconSparkles className="h-5 w-5 text-slate-700" />,
  },{
    key: "outdoor_billboard",
    titleEn: "Outdoor LED Billboard",
    titleKm: "áž”áŸŠáž¸áž›áž”áž LED áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš",
    descEn: "High-brightness LED screens built for heat, rain and 24/7 operation.",
    descKm: "áž¢áŸáž€áŸ’ážšáž„áŸ‹áž—áŸ’áž›ážºážáŸ’áž›áž¶áŸ†áž„ áž¢áž¶áž…áž’áž“áŸ‹áž€áž˜áŸ’ážŠáŸ… áž—áŸ’áž›áŸ€áž„ áž“áž·áž„ážŠáŸ†ážŽáž¾ážšáž€áž¶ážš 24/7áŸ”",
    href: "/solutions/led-billboard-cambodia",
    icon: <IconAntenna className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "receiving_card",
    titleEn: "Receiving Card",
    titleKm: "Receiving Card",
    descEn: "Reliable LED receiving cards for stable signal distribution and display control.",
    descKm: "Reliable LED receiving cards for stable signal distribution and display control.",
    href: "/led-display/receiving-card",
    icon: <IconLock className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "ifp",
    titleEn: "Interactive Flat Panel",
    titleKm: "áž¢áŸáž€áŸ’ážšáž„áŸ‹áž¢áž“áŸ’ážážšáž€áž˜áŸ’áž˜ (IFP)",
    descEn: "Smart board solutions for classrooms, training rooms and boardrooms.",
    descKm: "Smart Board ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážáŸ’áž“áž¶áž€áŸ‹ážšáŸ€áž“ áž”áž“áŸ’áž‘áž”áŸ‹áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž› áž“áž·áž„áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ†áŸ”",
    href: "/interactive-flat-panel",
    icon: <IconPresentation className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "turnstile",
    titleEn: "Turnstile Gates",
    titleKm: "áž…áŸ’ážšáž€áž‘áŸ’ážœáž¶ážš Turnstile",
    descEn: "Tripod, swing, flap barrier and speed gates for secure entry control.",
    descKm: "Tripod / Swing / Flap Barrier / Speed Gate ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž…áŸ’ážšáž€áž…áž¼áž›ážŠáŸ„áž™ážŸáž»ážœážáŸ’ážáž·áž—áž¶áž–áŸ”",
    href: "/turnstile-gate",
    icon: <IconBarrier className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "pa_system",
    titleEn: "PA System",
    titleKm: "áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA",
    descEn: "Public address systems for factories, schools, buildings and venues.",
    descKm: "áž”áŸ’ážšáž–áŸáž“áŸ’áž’áž•áŸ’ážŸáž–áŸ’ážœáž•áŸ’ážŸáž¶áž™ážŸáŸ†áž¡áŸáž„ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážšáŸ„áž„áž…áž€áŸ’ážš ážŸáž¶áž›áž¶ážšáŸ€áž“ áž¢áž‚áž¶ážš áž“áž·áž„áž‘áž¸áž€áž“áŸ’áž›áŸ‚áž„áž–áŸ’ážšáž¹ážáŸ’ážáž·áž€áž¶ážšážŽáŸáŸ”",
    href: "/pa-system",
    icon: <IconMic className="h-5 w-5 text-slate-700" />,
  },
  {
    key: "video_processor",
    titleEn: "Video Processor",
    titleKm: "Video Processor",
    descEn: "Advanced video processors for multi-input scaling, switching and LED screen optimization.",
    descKm: "Advanced video processors for multi-input scaling, switching and LED screen optimization.",
    href: "/led-display/video-processor",
    icon: <IconTv className="h-5 w-5 text-slate-700" />,
  },
];

const SOLUTIONS = [
  {
    key: "indoor_led",
    titleEn: "Indoor LED Display Solutions",
    titleKm: "ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™áž¢áŸáž€áŸ’ážšáž„áŸ‹ LED ážáž¶áž„áž€áŸ’áž“áž»áž„",
    pointsEn: [
      "Fine-pitch LED options for clear close-viewing",
      "Ideal for boardrooms, showrooms and control rooms",
      "Professional installation & calibration support",
    ],
    pointsKm: [
      "áž‡áž˜áŸ’ážšáž¾ážŸ Fine Pitch ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž˜áž¾áž›áž‡áž·ážáž”áž¶áž“áž…áŸ’áž”áž¶ážŸáŸ‹",
      "ážŸáž˜ážŸáŸ’ážšáž”ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž”áž“áŸ’áž‘áž”áŸ‹áž”áŸ’ážšáž‡áž»áŸ†, showroom áž“áž·áž„áž”áž“áŸ’áž‘áž”áŸ‹áž”áž‰áŸ’áž‡áž¶",
      "ážŠáŸ†áž¡áž¾áž„ áž“áž·áž„ calibration ážŠáŸ„áž™áž€áŸ’ážšáž»áž˜áž‡áŸ†áž“áž¶áž‰",
    ],
    href: "/led-display/indoor-led-display",
  },
  {
    key: "billboard",
    titleEn: "LED Billboard & Outdoor Advertising",
    titleKm: "áž”áŸŠáž¸áž›áž”áž LED áž“áž·áž„áž€áž¶ážšáž•áŸ’ážŸáž–áŸ’ážœáž•áŸ’ážŸáž¶áž™áž€áŸ’ážšáŸ…áž¢áž‚áž¶ážš",
    pointsEn: [
      "Best viewing distance planning (pixel pitch guidance)",
      "High brightness, weather protection & stable power design",
      "Installation, commissioning & maintenance support in Cambodia",
    ],
    pointsKm: [
      "áž•áŸ‚áž“áž€áž¶ážšáž…áž˜áŸ’áž„áž¶áž™áž˜áž¾áž› (áž€áž¶ážšážŽáŸ‚áž“áž¶áŸ† pixel pitch)",
      "áž–áž“áŸ’áž›ážºážáŸ’áž–ážŸáŸ‹ áž€áž¶ážšáž€áž¶ážšáž–áž¶ážšáž¢áž¶áž€áž¶ážŸáž’áž¶ážáž» áž“áž·áž„áž”áŸ’ážšáž–áŸáž“áŸ’áž’ážáž¶áž˜áž–áž›áž˜áž¶áž“ážŸáŸ’ážáŸážšáž—áž¶áž–",
      "ážŠáŸ†áž¡áž¾áž„ Commissioning áž“áž·áž„ážŸáŸážœáž¶áž€áž˜áŸ’áž˜ážáŸ‚áž‘áž¶áŸ†áž“áŸ…áž€áž˜áŸ’áž–áž»áž‡áž¶",
    ],
    href: "/solutions/led-billboard-cambodia",
  },
  {
    key: "signage",
    titleEn: "Retail & Mall Digital Signage",
    titleKm: "Digital Signage ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž áž¶áž„ áž“áž·áž„áž•áŸ’ážŸáž¶ážš",
    pointsEn: [
      "Storefront LED & indoor video wall displays",
      "Content-ready signage for promotions and branding",
      "Reliable performance with service support",
    ],
    pointsKm: [
      "LED storefront áž“áž·áž„ video wall áž€áŸ’áž“áž»áž„áž¢áž‚áž¶ážš",
      "ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž”áŸ’ážšáž¼áž˜áŸ‰áž¼ážŸáž·áž“ áž“áž·áž„ branding (content-ready)",
      "áž”áŸ’ážšážŸáž·áž‘áŸ’áž’áž—áž¶áž–áž˜áž¶áž“ážŸáŸ’ážáŸážšáž—áž¶áž–áž‡áž¶áž˜áž½áž™ážŸáŸážœáž¶áž€áž˜áŸ’áž˜áž‚áž¶áŸ†áž‘áŸ’ážš",
    ],
    href: "/solutions/digital-signage-cambodia",
  },
  {
    key: "smart_classroom",
    titleEn: "Smart Classroom Solutions",
    titleKm: "ážŠáŸ†ážŽáŸ„áŸ‡ážŸáŸ’ážšáž¶áž™ Smart Classroom",
    pointsEn: [
      "IFP smart board (65/75/86) for teaching & training",
      "OPS/PC integration, wireless sharing & touch annotation",
      "Project-based setup with user training support",
    ],
    pointsKm: [
      "IFP Smart Board (65/75/86) ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž”áž„áŸ’ážšáŸ€áž“ áž“áž·áž„áž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›",
      "ážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž› OPS/PC, wireless sharing áž“áž·áž„ touch annotation",
      "áž€áž¶ážšážáŸ†áž¡áž¾áž„ážáž¶áž˜áž‚áž˜áŸ’ážšáŸ„áž„ + áž€áž¶ážšáž”ážŽáŸ’ážáž»áŸ‡áž”ážŽáŸ’ážáž¶áž›áž¢áŸ’áž“áž€áž”áŸ’ážšáž¾",
    ],
    href: "/solutions/smart-classroom-cambodia",
  },
  {
    key: "access",
    titleEn: "Office & Building Access Control",
    titleKm: "Access Control ážŸáž˜áŸ’ážšáž¶áž”áŸ‹áž€áž¶ážšáž·áž™áž¶áž›áŸáž™ áž“áž·áž„áž¢áž‚áž¶ážš",
    pointsEn: [
      "Turnstiles + biometric/RFID access control integration",
      "Visitor flow control for offices, condos and institutions",
      "Local installation and after-sales support",
    ],
    pointsKm: [
      "ážšáž½áž˜áž”áž‰áŸ’áž…áž¼áž› Turnstile áž‡áž¶áž˜áž½áž™ biometric/RFID",
      "áž‚áŸ’ážšáž”áŸ‹áž‚áŸ’ážšáž„áž…ážšáž¶áž…ážšáž¢áŸ’áž“áž€áž…áž¼áž›ážŸáž˜áŸ’ážšáž¶áž”áŸ‹ office/condo/ážŸáŸ’ážáž¶áž”áŸáž“",
      "ážŠáŸ†áž¡áž¾áž„áž€áŸ’áž“áž»áž„áž”áŸ’ážšáž‘áŸážŸ + after-sales support",
    ],
    href: "/solutions/access-control-cambodia",
  },
  {
    key: "pa",
    titleEn: "Factory PA & Announcement System",
    titleKm: "áž”áŸ’ážšáž–áŸáž“áŸ’áž’ PA áž“áž·áž„áž€áž¶ážšáž”áŸ’ážšáž€áž¶ážŸážŸáž˜áŸ’ážšáž¶áž”áŸ‹ážšáŸ„áž„áž…áž€áŸ’ážš",
    pointsEn: [
      "Zoning, paging and emergency announcement capability",
      "Factory-grade speaker and amplifier configuration",
      "Maintenance and support services",
    ],
    pointsKm: [
      "Zoning, paging áž“áž·áž„ emergency announcement",
      "Speaker/Amplifier ážŸáŸ’ážáž„áŸ‹ážŠáž¶ážš industrial",
      "ážŸáŸážœáž¶ážáŸ‚áž‘áž¶áŸ† áž“áž·áž„áž‚áž¶áŸ†áž‘áŸ’ážš",
    ],
    href: "/solutions/pa-system-cambodia",
  },
];

const FAQ = [
  {
    qEn: "Do you provide LED display installation across Cambodia?",
    aEn: "Yes. We provide site survey, installation, commissioning, and after-sales support for projects in Phnom Penh, Siem Reap, Sihanoukville, and other provinces.",
    qKm: "Do you provide LED display installation across Cambodia?",
    aKm: "Yes. We provide site survey, installation, commissioning, and after-sales support for projects in Phnom Penh, Siem Reap, Sihanoukville, and other provinces.",
  },
  {
    qEn: "How do I choose the right pixel pitch for my project?",
    aEn: "A practical method is to match pixel pitch with viewing distance and content type. We recommend the right pitch based on room size, audience distance, and budget.",
    qKm: "How do I choose the right pixel pitch for my project?",
    aKm: "A practical method is to match pixel pitch with viewing distance and content type. We recommend the right pitch based on room size, audience distance, and budget.",
  },
  {
    qEn: "What brightness and IP rating are recommended for outdoor LED screens?",
    aEn: "Most outdoor projects use high-brightness panels with IP65 or higher weather protection. Final specs depend on sunlight exposure, installation height, and operating hours.",
    qKm: "What brightness and IP rating are recommended for outdoor LED screens?",
    aKm: "Most outdoor projects use high-brightness panels with IP65 or higher weather protection. Final specs depend on sunlight exposure, installation height, and operating hours.",
  },
  {
    qEn: "What is the difference between indoor and outdoor LED display?",
    aEn: "Indoor LED is optimized for close viewing and finer pixel pitch, while outdoor LED is designed for stronger brightness, weather resistance, and long-distance visibility.",
    qKm: "What is the difference between indoor and outdoor LED display?",
    aKm: "Indoor LED is optimized for close viewing and finer pixel pitch, while outdoor LED is designed for stronger brightness, weather resistance, and long-distance visibility.",
  },
  {
    qEn: "Do you supply digital signage solutions for malls, hotels, and retail stores?",
    aEn: "Yes. We design and install digital signage systems for promotions, menu boards, wayfinding, and brand communication across retail and hospitality environments.",
    qKm: "Do you supply digital signage solutions for malls, hotels, and retail stores?",
    aKm: "Yes. We design and install digital signage systems for promotions, menu boards, wayfinding, and brand communication across retail and hospitality environments.",
  },
  {
    qEn: "Can you integrate turnstile gates with RFID and biometric access control?",
    aEn: "Yes. We integrate turnstile gates with RFID cards, fingerprint, face recognition, and attendance platforms for offices, factories, and institutions.",
    qKm: "Can you integrate turnstile gates with RFID and biometric access control?",
    aKm: "Yes. We integrate turnstile gates with RFID cards, fingerprint, face recognition, and attendance platforms for offices, factories, and institutions.",
  },
  {
    qEn: "Do you provide PA system design and installation for factories and campuses?",
    aEn: "Yes. We provide PA system planning, zoning, amplifier and speaker configuration, emergency announcement setup, and long-term maintenance support.",
    qKm: "Do you provide PA system design and installation for factories and campuses?",
    aKm: "Yes. We provide PA system planning, zoning, amplifier and speaker configuration, emergency announcement setup, and long-term maintenance support.",
  },
  {
    qEn: "How long does a typical LED display project take from survey to handover?",
    aEn: "Timeline depends on site readiness and scope, but most projects follow a structured workflow from survey and BOQ to installation, testing, and final handover.",
    qKm: "How long does a typical LED display project take from survey to handover?",
    aKm: "Timeline depends on site readiness and scope, but most projects follow a structured workflow from survey and BOQ to installation, testing, and final handover.",
  },
  {
    qEn: "Do you offer warranty and preventive maintenance plans?",
    aEn: "Yes. We provide warranty coverage, preventive maintenance, health checks, and support plans to reduce downtime and improve system reliability.",
    qKm: "Do you offer warranty and preventive maintenance plans?",
    aKm: "Yes. We provide warranty coverage, preventive maintenance, health checks, and support plans to reduce downtime and improve system reliability.",
  },
  {
    qEn: "How can I get a quotation for LED display, signage, or access control in Cambodia?",
    aEn: "Share your site location, required screen size or lane count, usage type, and timeline. Our team will recommend a practical configuration and provide a project-based quotation.",
    qKm: "How can I get a quotation for LED display, signage, or access control in Cambodia?",
    aKm: "Share your site location, required screen size or lane count, usage type, and timeline. Our team will recommend a practical configuration and provide a project-based quotation.",
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
        cities={CITIES}
        categoryTiles={CATEGORY_TILES}
        solutions={SOLUTIONS}
        faq={FAQ}
      />
    </main>
  );
}







