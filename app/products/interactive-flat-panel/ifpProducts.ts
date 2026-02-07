// app/products/interactive-flat-panel/ifpProducts.ts
export type IFPProduct = {
  id: string;
  name: string;
  size: string; // 55/65/75/86/98 inch
  resolution: string; // 4K
  touch: string; // 20/40 points etc
  os: string; // Android + optional OPS
  bestFor: string; // classroom/meeting room
  highlights: string[]; // short bullets
  image?: string; // optional path
};

export const IFP_PRODUCTS: IFPProduct[] = [
  {
    id: "ifp-65",
    name: "Interactive Flat Panel 65 inch (4K Touch)",
    size: "65 inch",
    resolution: "4K UHD",
    touch: "20-point touch",
    os: "Android (OPS optional)",
    bestFor: "Classrooms & small meeting rooms",
    highlights: ["Wireless screen share", "Whiteboard app", "Anti-glare glass"],
    image: "/images/ifp/ifp-65.webp",
  },
  {
    id: "ifp-75",
    name: "Interactive Flat Panel 75 inch (4K Smart Board)",
    size: "75 inch",
    resolution: "4K UHD",
    touch: "20/40-point touch",
    os: "Android (OPS optional)",
    bestFor: "Training rooms & medium meeting rooms",
    highlights: ["Dual pens", "Built-in speakers", "HDMI/USB-C support"],
    image: "/images/ifp/ifp-75.webp",
  },
  {
    id: "ifp-86",
    name: "Interactive Flat Panel 86 inch (4K IFP Display)",
    size: "86 inch",
    resolution: "4K UHD",
    touch: "20/40-point touch",
    os: "Android (OPS optional)",
    bestFor: "Large classrooms & boardrooms",
    highlights: ["Wide viewing angle", "Smooth writing", "LAN/Wi-Fi connectivity"],
    image: "/images/ifp/ifp-86.webp",
  },
  {
    id: "ifp-98",
    name: "Interactive Flat Panel 98 inch (Premium Large Display)",
    size: "98 inch",
    resolution: "4K UHD",
    touch: "20/40-point touch",
    os: "Android (OPS optional)",
    bestFor: "Auditoriums & premium boardrooms",
    highlights: ["Ultra large screen", "Presentation-ready", "Strong brightness"],
    image: "/images/ifp/ifp-98.webp",
  },
];
