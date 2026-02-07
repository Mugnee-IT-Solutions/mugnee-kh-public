// app/products/outdoor-led-display/outdoorProducts.ts
export type OutdoorProduct = {
  id: string;
  name: string;
  pitch: string; // e.g. P2.5 / P4 / P6 / P8 / P10
  brightness: string; // e.g. 5500–7500 nits
  ip: string; // e.g. IP65
  cabinet: string; // e.g. 960×960mm / 1000×1000mm
  bestFor: string; // e.g. Roadside billboard
  note: string; // small detail
  image?: string; // optional image path in /public/images/...
  href?: string;  // optional link
};

export const OUTDOOR_PRODUCTS: OutdoorProduct[] = [
  {
    id: "p4",
    name: "Outdoor LED Display Panel P4",
    pitch: "P4",
    brightness: "5500–7000 nits",
    ip: "IP65",
    cabinet: "960×960mm / 1000×1000mm",
    bestFor: "Roadside billboards, rooftops",
    note: "Good balance of clarity and budget for city roads.",
    image: "/images/outdoor-led/p4.webp",
  },
  {
    id: "p6",
    name: "Outdoor LED Display Panel P6",
    pitch: "P6",
    brightness: "5500–7500 nits",
    ip: "IP65",
    cabinet: "960×960mm / 1000×1000mm",
    bestFor: "Highway, long distance viewing",
    note: "Cost-effective for larger screens and far viewing.",
    image: "/images/outdoor-led/p6.webp",
  },
  {
    id: "p8",
    name: "Outdoor LED Display Panel P8",
    pitch: "P8",
    brightness: "6000–7500 nits",
    ip: "IP65",
    cabinet: "960×960mm / 1000×1000mm",
    bestFor: "Large billboards, roadside",
    note: "Popular choice for large-format outdoor signage.",
    image: "/images/outdoor-led/p8.webp",
  },
  {
    id: "p10",
    name: "Outdoor LED Display Panel P10",
    pitch: "P10",
    brightness: "6000–8000 nits",
    ip: "IP65",
    cabinet: "960×960mm / 1000×1000mm",
    bestFor: "Highways, very long viewing distance",
    note: "Budget friendly for very large outdoor screens.",
    image: "/images/outdoor-led/p10.webp",
  },
];
