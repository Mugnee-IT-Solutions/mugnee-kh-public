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

export const HOME_CATEGORY_TILES: HomeTile[] = [
  {
    key: "led_display",
    titleEn: "LED Display",
    titleKm: "LED Display",
    descEn: "LED Display",
    descKm: "LED Display",
    href: "/led-display/",
    icon: unitIcon("/images/icons/led-display.webp", "LED display"),
  },
  {
    key: "indoor_led_display",
    titleEn: "Indoor LED Display",
    titleKm: "Indoor LED Display",
    descEn: "Indoor LED Display",
    descKm: "Indoor LED Display",
    href: "/led-display/indoor-led-display/",
    icon: unitIcon("/images/icons/led-display.webp", "Indoor LED display"),
  },
  {
    key: "outdoor_billboard",
    titleEn: "Outdoor LED Billboard",
    titleKm: "Outdoor LED Billboard",
    descEn: "Outdoor LED Billboard",
    descKm: "Outdoor LED Billboard",
    href: "/led-display/outdoor-led-display/",
    icon: unitIcon("/images/icons/led-display.webp", "Outdoor LED billboard"),
  },
  {
    key: "receiving_card",
    titleEn: "Receiving Card",
    titleKm: "Receiving Card",
    descEn: "Receiving Card",
    descKm: "Receiving Card",
    href: "/led-display/receiving-card/",
    icon: unitIcon("/images/icons/products.webp", "Receiving card"),
  },
  {
    key: "ifp",
    titleEn: "Interactive Flat Panel",
    titleKm: "Interactive Flat Panel",
    descEn: "Interactive Flat Panel",
    descKm: "Interactive Flat Panel",
    href: "/interactive-flat-panel/",
    icon: unitIcon("/images/icons/interactive-flat-panel.webp", "Interactive flat panel"),
  },
  {
    key: "turnstile",
    titleEn: "Turnstile Gates",
    titleKm: "Turnstile Gates",
    descEn: "Turnstile Gates",
    descKm: "Turnstile Gates",
    href: "/turnstile-gate/",
    icon: unitIcon("/images/icons/turnstile.webp", "Turnstile gate"),
  },
  {
    key: "pa_system",
    titleEn: "PA System",
    titleKm: "PA System",
    descEn: "PA System",
    descKm: "PA System",
    href: "/pa-system/",
    icon: unitIcon("/images/icons/pa-system.webp", "PA system"),
  },
  {
    key: "video_processor",
    titleEn: "Video Processor",
    titleKm: "Video Processor",
    descEn: "Video Processor",
    descKm: "Video Processor",
    href: "/led-display/video-processor/",
    icon: unitIcon("/images/icons/products.webp", "Video processor"),
  },
  {
    key: "power_supply",
    titleEn: "Power Supply",
    titleKm: "Power Supply",
    descEn: "Power Supply",
    descKm: "Power Supply",
    href: "/led-display/power-supply/",
    icon: unitIcon("/images/icons/products.webp", "Power supply"),
  },
  {
    key: "all_products",
    titleEn: "All Products",
    titleKm: "All Products",
    descEn: "All Products",
    descKm: "All Products",
    href: "/products/",
    icon: unitIcon("/images/icons/products.webp", "All products"),
  },
];

// Keep qKm/aKm ASCII-safe for now to avoid mojibake. HomeClient has its own Khmer UI copy.
export const HOME_FAQ: HomeFaq[] = [
  {
    qEn: "Do you support site survey and BOQ planning in Cambodia?",
    aEn: "Yes. Share your location and use case. We provide practical survey guidance, BOQ planning, and a project-based quotation.",
    qKm: "Do you support site survey and BOQ planning in Cambodia?",
    aKm: "Yes. Share your location and use case. We provide practical survey guidance, BOQ planning, and a project-based quotation.",
  },
  {
    qEn: "Can you install and provide after-sales support?",
    aEn: "Yes. We handle installation, commissioning, training, and long-term after-sales support across Cambodia.",
    qKm: "Can you install and provide after-sales support?",
    aKm: "Yes. We handle installation, commissioning, training, and long-term after-sales support across Cambodia.",
  },
  {
    qEn: "How can we contact you for a quotation?",
    aEn: "Use the contact page and share your site, requirements, and timeline. Our team will respond with a practical configuration and quotation.",
    qKm: "How can we contact you for a quotation?",
    aKm: "Use the contact page and share your site, requirements, and timeline. Our team will respond with a practical configuration and quotation.",
  },
];
