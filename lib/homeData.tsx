import React from "react";

export type HomeTile = {
  key: string;
  titleEn: string;
  titleKm: string;
  descEn: string;
  descKm: string;
  href: string;
  icon: React.ReactNode;
};

export type HomeFaq = {
  qEn: string;
  aEn: string;
  qKm: string;
  aKm: string;
};

function unitIcon(src: string, alt: string) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} width={24} height={24} className="h-6 w-6 object-contain" />;
}

function unitSvgIcon(title: string, path: React.ReactNode) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{title}</title>
      {path}
    </svg>
  );
}

export const HOME_CATEGORY_TILES: HomeTile[] = [
  {
    key: "led_display",
    titleEn: "LED Display",
    titleKm: "LED Display",
    descEn: "LED Display",
    descKm: "LED Display",
    href: "/led-display/",
    icon: unitIcon("/images/icons/unit-digital-display.webp", "LED display"),
  },
  {
    key: "indoor_led_display",
    titleEn: "Indoor LED Display",
    titleKm: "Indoor LED Display",
    descEn: "Indoor LED Display",
    descKm: "Indoor LED Display",
    href: "/led-display/indoor-led-display/",
    icon: unitSvgIcon(
      "Indoor LED Display",
      <>
        <path d="M12 3l1.2 3.2L16.5 7 13.2 8.2 12 11 10.8 8.2 7.5 7l3.3-.8L12 3z" />
        <path d="M19 13l.8 2.1L22 16l-2.2.9L19 19l-.8-2.1L16 16l2.2-.9L19 13z" />
      </>
    ),
  },
  {
    key: "outdoor_billboard",
    titleEn: "Outdoor LED Billboard",
    titleKm: "Outdoor LED Billboard",
    descEn: "Outdoor LED Billboard",
    descKm: "Outdoor LED Billboard",
    href: "/led-display/outdoor-led-display/",
    icon: unitSvgIcon(
      "Outdoor LED Billboard",
      <>
        <rect x="4" y="4.5" width="16" height="9" rx="2" />
        <path d="M12 13.5v6" />
        <path d="M9 19.5h6" />
        <path d="M6.5 3l.6 1.6 1.7.4-1.3 1.1.4 1.7-1.4-.9-1.4.9.4-1.7L4.2 5l1.7-.4.6-1.6z" />
      </>
    ),
  },
  {
    key: "receiving_card",
    titleEn: "Receiving Card",
    titleKm: "Receiving Card",
    descEn: "Receiving Card",
    descKm: "Receiving Card",
    href: "/led-display/receiving-card/",
    icon: unitSvgIcon(
      "Receiving Card",
      <>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
      </>
    ),
  },
  {
    key: "ifp",
    titleEn: "Interactive Flat Panel",
    titleKm: "Interactive Flat Panel",
    descEn: "Interactive Flat Panel",
    descKm: "Interactive Flat Panel",
    href: "/interactive-flat-panel/",
    icon: unitIcon("/images/icons/unit-smart-board.webp", "Interactive flat panel"),
  },
  {
    key: "turnstile",
    titleEn: "Turnstile Gates",
    titleKm: "Turnstile Gates",
    descEn: "Turnstile Gates",
    descKm: "Turnstile Gates",
    href: "/turnstile-gate/",
    icon: unitIcon("/images/icons/unit-turnstile-gate.webp", "Turnstile gate"),
  },
  {
    key: "pa_system",
    titleEn: "PA System",
    titleKm: "PA System",
    descEn: "PA System",
    descKm: "PA System",
    href: "/pa-system/",
    icon: unitIcon("/images/icons/unit-pa-system.webp", "PA system"),
  },
  {
    key: "video_processor",
    titleEn: "Video Processor",
    titleKm: "Video Processor",
    descEn: "Video Processor",
    descKm: "Video Processor",
    href: "/led-display/video-processor/",
    icon: unitSvgIcon(
      "Video Processor",
      <>
        <rect x="5" y="6" width="14" height="10" rx="2" />
        <path d="M9 18h6" />
      </>
    ),
  },
  {
    key: "power_supply",
    titleEn: "Power Supply",
    titleKm: "Power Supply",
    descEn: "Power Supply",
    descKm: "Power Supply",
    href: "/led-display/power-supply/",
    icon: unitSvgIcon(
      "Power Supply",
      <>
        <path d="M13 2L5 14h7l-1 8 8-12h-7l1-8z" />
      </>
    ),
  },
  {
    key: "all_products",
    titleEn: "All Products",
    titleKm: "All Products",
    descEn: "All Products",
    descKm: "All Products",
    href: "/products/",
    icon: unitSvgIcon(
      "All Products",
      <>
        <rect x="3.5" y="5.5" width="2.5" height="2.5" rx="0.6" />
        <rect x="3.5" y="11" width="2.5" height="2.5" rx="0.6" />
        <rect x="3.5" y="16.5" width="2.5" height="2.5" rx="0.6" />
        <path d="M8 6.75h12.5" />
        <path d="M8 12.25h12.5" />
        <path d="M8 17.75h12.5" />
      </>
    ),
  },
];

// Keep qKm/aKm ASCII-safe for now to avoid mojibake. HomeClient has its own Khmer UI copy.
export const HOME_FAQ: HomeFaq[] = [
  {
    qEn: "What is the registered company name behind Mugnee Cambodia?",
    aEn: "Mugnee Cambodia is the brand and market-facing identity used in Cambodia. The registered company name is Mugnee Multiple Co., Ltd.",
    qKm: "What is the registered company name behind Mugnee Cambodia?",
    aKm: "Mugnee Cambodia is the brand and market-facing identity used in Cambodia. The registered company name is Mugnee Multiple Co., Ltd.",
  },
  {
    qEn: "Is Mugnee Cambodia the same company as Mugnee Multiple Co., Ltd?",
    aEn: "Yes. Mugnee Cambodia is used for local brand relevance, while Mugnee Multiple Co., Ltd is the legal company entity operating and supporting projects in Cambodia.",
    qKm: "Is Mugnee Cambodia the same company as Mugnee Multiple Co., Ltd?",
    aKm: "Yes. Mugnee Cambodia is used for local brand relevance, while Mugnee Multiple Co., Ltd is the legal company entity operating and supporting projects in Cambodia.",
  },
  {
    qEn: "Where is your Cambodia office located?",
    aEn: "Our Cambodia office is located at 1st Floor, 11E0, Street 108, Night Market Area, Doun Penh, Phnom Penh, Cambodia.",
    qKm: "Where is your Cambodia office located?",
    aKm: "Our Cambodia office is located at 1st Floor, 11E0, Street 108, Night Market Area, Doun Penh, Phnom Penh, Cambodia.",
  },
  {
    qEn: "What kind of company is Mugnee Cambodia?",
    aEn: "Mugnee Cambodia is a business technology solutions company serving commercial and institutional clients in Cambodia through planning, supply coordination, installation support, commissioning, and after-sales follow-up.",
    qKm: "What kind of company is Mugnee Cambodia?",
    aKm: "Mugnee Cambodia is a business technology solutions company serving commercial and institutional clients in Cambodia through planning, supply coordination, installation support, commissioning, and after-sales follow-up.",
  },
  {
    qEn: "Which areas do you support in Cambodia?",
    aEn: "We support Phnom Penh and extend project coordination, installation planning, and after-sales service to Siem Reap, Sihanoukville, and other Cambodia locations based on project scope.",
    qKm: "Which areas do you support in Cambodia?",
    aKm: "We support Phnom Penh and extend project coordination, installation planning, and after-sales service to Siem Reap, Sihanoukville, and other Cambodia locations based on project scope.",
  },
  {
    qEn: "Do you work with companies, schools, factories, and organizations in Cambodia?",
    aEn: "Yes. We support business and institutional projects across Cambodia, including corporate offices, retail sites, education campuses, factories, hospitality venues, and other organization-led environments.",
    qKm: "Do you work with companies, schools, factories, and organizations in Cambodia?",
    aKm: "Yes. We support business and institutional projects across Cambodia, including corporate offices, retail sites, education campuses, factories, hospitality venues, and other organization-led environments.",
  },
  {
    qEn: "Do you help with site survey, BOQ planning, and quotation preparation?",
    aEn: "Yes. Our team supports site review, requirement clarification, BOQ preparation, solution planning, and project-based quotation for business and institutional projects in Cambodia.",
    qKm: "Do you help with site survey, BOQ planning, and quotation preparation?",
    aKm: "Yes. Our team supports site review, requirement clarification, BOQ preparation, solution planning, and project-based quotation for business and institutional projects in Cambodia.",
  },
  {
    qEn: "Can Mugnee Cambodia support project coordination before installation?",
    aEn: "Yes. We can help clarify scope, timeline, site readiness, technical considerations, and commercial requirements before project execution starts.",
    qKm: "Can Mugnee Cambodia support project coordination before installation?",
    aKm: "Yes. We can help clarify scope, timeline, site readiness, technical considerations, and commercial requirements before project execution starts.",
  },
  {
    qEn: "Do you provide installation and after-sales support in Cambodia?",
    aEn: "Yes. Mugnee Multiple Co., Ltd supports installation coordination, commissioning, user handover, and long-term after-sales follow-up for approved projects in Cambodia.",
    qKm: "Do you provide installation and after-sales support in Cambodia?",
    aKm: "Yes. Mugnee Multiple Co., Ltd supports installation coordination, commissioning, user handover, and long-term after-sales follow-up for approved projects in Cambodia.",
  },
  {
    qEn: "How does Mugnee Cambodia handle business inquiries?",
    aEn: "We review the project location, use case, required timeline, and commercial scope first, then respond with practical next steps, clarification questions, or quotation guidance.",
    qKm: "How does Mugnee Cambodia handle business inquiries?",
    aKm: "We review the project location, use case, required timeline, and commercial scope first, then respond with practical next steps, clarification questions, or quotation guidance.",
  },
  {
    qEn: "How can businesses contact Mugnee Cambodia?",
    aEn: "Use the contact page, phone, or office details on this website and share your company name, project location, requirements, and timeline so our team can respond efficiently.",
    qKm: "How can businesses contact Mugnee Cambodia?",
    aKm: "Use the contact page, phone, or office details on this website and share your company name, project location, requirements, and timeline so our team can respond efficiently.",
  },
];
