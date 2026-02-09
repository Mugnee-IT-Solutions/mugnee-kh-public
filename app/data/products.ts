export type ProductSpec = {
  labelEn: string;
  labelKm: string;
  valueEn: string;
  valueKm: string;
};

export type Product = {
  id: string;
  slug: string;
  categoryIds: string[];
  primaryCategoryId: string;
  titleEn: string;
  titleKm: string;
  shortDescEn: string;
  shortDescKm: string;
  descriptionEn: string;
  descriptionKm: string;
  featuresEn: string[];
  featuresKm: string[];
  applicationsEn: string[];
  applicationsKm: string[];
  specs: ProductSpec[];
  heroImage: string;
  gallery: string[];
  tagsEn: string[];
  tagsKm: string[];
  seoTitleEn: string;
  seoTitleKm: string;
  seoDescEn: string;
  seoDescKm: string;
};

export type ProductCategory = {
  id: string;
  parentId?: string;
  labelEn: string;
  labelKm: string;
  slug: string;
  descriptionEn: string;
  descriptionKm: string;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "led_display",
    labelEn: "LED Display",
    labelKm: "á¢áááááá LED",
    slug: "led-display",
    descriptionEn: "Indoor, outdoor and rental LED display systems.",
    descriptionKm: "ááááááááá¢áááááá LED ááááá¶áááááá»á á¢áááá áá·ááá½áá",
  },
  {
    id: "indoor_led_display",
    parentId: "led_display",
    labelEn: "Indoor LED Screens",
    labelKm: "á¢áááááá LED áá¶ááááá»á",
    slug: "indoor-led-display",
    descriptionEn: "Fine pitch and indoor LED modules.",
    descriptionKm: "ááá¼áá»á LED áá¶ááááá»á áá·á Fine Pitchá",
  },
  {
    id: "outdoor_led_display",
    parentId: "led_display",
    labelEn: "Outdoor LED Billboards",
    labelKm: "ááá¸ááá LED áá¶ááááá",
    slug: "outdoor-led-display",
    descriptionEn: "Weather-ready LED modules for outdoor use.",
    descriptionKm: "ááá¼áá»á LED áá¶ááááá ááááá¶ááá¢á¶áá¶ááá¶áá»áá¶áááááá",
  },
  {
    id: "rental_led_display",
    parentId: "led_display",
    labelEn: "Rental LED Walls",
    labelKm: "á¢áááááá LED ááááá¶áááá½á",
    slug: "rental-led-display",
    descriptionEn: "Rental LED panels for events and stage.",
    descriptionKm: "ááááá LED ááááá¶áááá½á áá·ááááá¹áááá·áá¶áááá",
  },
  {
    id: "led_accessories",
    parentId: "led_display",
    labelEn: "LED Accessories & Parts",
    labelKm: "áááá¿áááááá¶áá LED",
    slug: "led-accessories",
    descriptionEn: "Controllers, receiving cards, power supplies and cabinets.",
    descriptionKm: "áá»ááááá¼áë¬, receiving card, power supply áá·á cabinetá",
  },
  {
    id: "power_supply",
    parentId: "led_display",
    labelEn: "Power Supply",
    labelKm: "Power Supply",
    slug: "power-supply",
    descriptionEn: "LED display power supplies and SMPS units.",
    descriptionKm: "LED display power supplies and SMPS units.",
  },
  {
    id: "video_processor",
    parentId: "led_display",
    labelEn: "Video Processor",
    labelKm: "Video Processor",
    slug: "video-processor",
    descriptionEn: "LED video processors and scalers for LED screens.",
    descriptionKm: "LED video processors and scalers for LED screens.",
  },
  {
    id: "smart_board",
    labelEn: "Smart Board",
    labelKm: "áááá¶ááá¼á",
    slug: "smart-board",
    descriptionEn: "Interactive flat panels and smart classroom displays.",
    descriptionKm: "á¢ááááááá¢ááááááááááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
  },  {
    id: "interactive_panel",
    parentId: "smart_board",
    labelEn: "Interactive Panel",
    labelKm: "Interactive Panel",
    slug: "interactive-panel",
    descriptionEn: "Interactive flat panels for classrooms and meeting rooms.",
    descriptionKm: "Interactive flat panels for classrooms and meeting rooms.",
  },
  {
    id: "digital_signage",
    labelEn: "Digital Signage",
    labelKm: "áááá¶ááá¸áá¸áá",
    slug: "digital-signage",
    descriptionEn: "Commercial digital signage displays and kiosks.",
    descriptionKm: "á¢áááááááááá¶ááá¸áá¸áá áá·ááááá¼áááááá¶áááá¶áá·áááááááá",
  },
  {
    id: "pa_system",
    labelEn: "PA System",
    labelKm: "áááááááá PA",
    slug: "pa-system",
    descriptionEn: "Public address sound systems and audio solutions.",
    descriptionKm: "áááááááááááááááááá¶áááá¡áá áá·áaudio solutionsá",
  },
  {
    id: "smart_home",
    labelEn: "Smart Home",
    labelKm: "áááá¶áá áá",
    slug: "smart-home",
    descriptionEn: "Smart home automation devices.",
    descriptionKm: "á§ááááááááá¶áá áá áá·á automationá",
  },
  {
    id: "smart_office",
    labelEn: "Smart Office",
    labelKm: "áááá¶ááá¶áá·áá¶ááá",
    slug: "smart-office",
    descriptionEn: "Office automation and meeting solutions.",
    descriptionKm: "áá¶áá·áá¶ááááááá¶ááá áá·áááááá¶ááááááááááááá»áá",
  },
  {
    id: "security",
    labelEn: "Security",
    labelKm: "áá»ááááá·áá¶á",
    slug: "security",
    descriptionEn: "Security monitoring and surveillance devices.",
    descriptionKm: "á§ááááááá»ááááá·áá¶á áá·áááááá¶áááááááááááá",
  },
  {
    id: "access_control",
    labelEn: "Access Control",
    labelKm: "ááááááááááááááááááá¼áááá",
    slug: "access-control",
    descriptionEn: "RFID, biometric and access control systems.",
    descriptionKm: "áááááááá RFID, biometric áá·ááá¶áááááááááááá¼ááááá",
  },
  {
    id: "turnstile_gate",
    labelEn: "Turnstile Gate",
    labelKm: "áááááááá¶á Turnstile",
    slug: "turnstile-gate",
    descriptionEn: "Entry control turnstile gates and barriers.",
    descriptionKm: "áááááááá¶á áá·ááááá¶ááá¶áá¶ááááááá¶ááááááááááááá¼ááááá",
  },
  {
    id: "industrial_solution",
    labelEn: "Industrial Solution",
    labelKm: "ááááááááá¶áá§áááá¶á áááá",
    slug: "industrial-solution",
    descriptionEn: "Industrial equipment and project solutions.",
    descriptionKm: "á§áááááá§áááá¶á áááá áá·áááááááááá¶áááááááá",
  },
  {
    id: "machineries",
    labelEn: "Machineries",
    labelKm: "ááá¶ááá¸áá§áááá¶á áááá",
    slug: "machineries",
    descriptionEn: "Industrial machineries and hardware.",
    descriptionKm: "ááá¶ááá¸áá§áááá¶á áááá áá·áá§ááááááá¶áááááááá",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1-25-indoor-led-module",
    slug: "p1-25mm-indoor-led-display-module",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P1.25mm Indoor LED Display Module",
    titleKm: "P1.25mm Indoor LED Display Module",
    shortDescEn:
      "Ultra-high resolution P1.25mm indoor LED display module for control rooms, studios, and premium indoor signage.",
    shortDescKm:
      "Ultra-high resolution P1.25mm indoor LED display module for control rooms, studios, and premium indoor signage.",
    descriptionEn:
      "The P1.25mm indoor LED display module delivers ultra-fine pixel pitch visuals for close-viewing environments. Designed for control rooms, TV studios, conference rooms, and luxury retail, it combines SMD1010 LEDs with high refresh rate performance for smooth, vibrant indoor video walls.",
    descriptionKm:
      "The P1.25mm indoor LED display module delivers ultra-fine pixel pitch visuals for close-viewing environments. Designed for control rooms, TV studios, conference rooms, and luxury retail, it combines SMD1010 LEDs with high refresh rate performance for smooth, vibrant indoor video walls.",
    featuresEn: [
      "Ultra-fine 1.25 mm pixel pitch for close viewing",
      "SMD1010 3-in-1 LED for uniform color",
      "High refresh rate up to 3840 Hz (7680 optional)",
      "500 cd/m2 brightness with 140 deg viewing angle",
      "Bezel-free modular design for seamless walls",
    ],
    featuresKm: [
      "Ultra-fine 1.25 mm pixel pitch for close viewing",
      "SMD1010 3-in-1 LED for uniform color",
      "High refresh rate up to 3840 Hz (7680 optional)",
      "500 cd/m2 brightness with 140 deg viewing angle",
      "Bezel-free modular design for seamless walls",
    ],
    applicationsEn: [
      "Broadcast studios",
      "Control rooms",
      "Conference rooms",
      "Luxury retail displays",
      "Airports and command centers",
      "Education auditoriums",
    ],
    applicationsKm: [
      "Broadcast studios",
      "Control rooms",
      "Conference rooms",
      "Luxury retail displays",
      "Airports and command centers",
      "Education auditoriums",
    ],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "1.25 mm",
        valueKm: "1.25 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD1010 (3-in-1)",
        valueKm: "SMD1010 (3-in-1)",
      },
      {
        labelEn: "Module Resolution (W x H)",
        labelKm: "Module Resolution (W x H)",
        valueEn: "256 x 128 = 32,768 pixels",
        valueKm: "256 x 128 = 32,768 pixels",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "640,000 dots/m2",
        valueKm: "640,000 dots/m2",
      },
      {
        labelEn: "Module Size (W x H x D)",
        labelKm: "Module Size (W x H x D)",
        valueEn: "320 x 160 x 16.6 mm",
        valueKm: "320 x 160 x 16.6 mm",
      },
      {
        labelEn: "Module Weight",
        labelKm: "Module Weight",
        valueEn: "0.48 +/- 0.02 kg",
        valueKm: "0.48 +/- 0.02 kg",
      },
      {
        labelEn: "HUB Type",
        labelKm: "HUB Type",
        valueEn: "HUB320",
        valueKm: "HUB320",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "500 cd/m2",
        valueKm: "500 cd/m2",
      },
      {
        labelEn: "Color Temperature",
        labelKm: "Color Temperature",
        valueEn: "2000 K - 9300 K (Adjustable)",
        valueKm: "2000 K - 9300 K (Adjustable)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 140 deg",
        valueKm: "140 deg / 140 deg",
      },
      {
        labelEn: "Brightness/Color Uniformity",
        labelKm: "Brightness/Color Uniformity",
        valueEn: ">= 98 %",
        valueKm: ">= 98 %",
      },
      {
        labelEn: "Contrast Ratio",
        labelKm: "Contrast Ratio",
        valueEn: "5000 : 1",
        valueKm: "5000 : 1",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "586 W/m2",
        valueKm: "586 W/m2",
      },
      {
        labelEn: "Typical Power Consumption",
        labelKm: "Typical Power Consumption",
        valueEn: "176 W/m2",
        valueKm: "176 W/m2",
      },
      {
        labelEn: "Input Voltage",
        labelKm: "Input Voltage",
        valueEn: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
        valueKm: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
      },
      {
        labelEn: "Frame Rate",
        labelKm: "Frame Rate",
        valueEn: "60 Hz",
        valueKm: "60 Hz",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: "3840 Hz (Standard) / 7680 Hz (Optional)",
        valueKm: "3840 Hz (Standard) / 7680 Hz (Optional)",
      },
      {
        labelEn: "Processing Depth",
        labelKm: "Processing Depth",
        valueEn: "12-14 bit",
        valueKm: "12-14 bit",
      },
      {
        labelEn: "Video Support",
        labelKm: "Video Support",
        valueEn: "2K / 4K",
        valueKm: "2K / 4K",
      },
      {
        labelEn: "Lifetime",
        labelKm: "Lifetime",
        valueEn: "100,000 hours",
        valueKm: "100,000 hours",
      },
      {
        labelEn: "Operating Temp / Humidity",
        labelKm: "Operating Temp / Humidity",
        valueEn: "-20 C ~ 45 C / 10% ~ 50% RH (No Condensation)",
        valueKm: "-20 C ~ 45 C / 10% ~ 50% RH (No Condensation)",
      },
      {
        labelEn: "Storage Temp / Humidity",
        labelKm: "Storage Temp / Humidity",
        valueEn: "-20 C ~ 50 C / 10% ~ 60% RH",
        valueKm: "-20 C ~ 50 C / 10% ~ 60% RH",
      },
      {
        labelEn: "Certifications",
        labelKm: "Certifications",
        valueEn: "BIS / CE / CB / ROHS / EAC",
        valueKm: "BIS / CE / CB / ROHS / EAC",
      },
    ],
    heroImage: "/images/products/P1.25.webp",
    gallery: ["/images/products/P1.25.webp"],
    tagsEn: ["P1.25", "Indoor LED", "LED Module"],
    tagsKm: ["P1.25", "Indoor LED", "LED Module"],
    seoTitleEn: "P1.25mm Indoor LED Display Module",
    seoTitleKm: "P1.25mm Indoor LED Display Module",
    seoDescEn:
      "Buy P1.25mm Indoor LED Display Module from Mugnee  ultra-high resolution display for control rooms, studios, and premium indoor signage.",
    seoDescKm:
      "Buy P1.25mm Indoor LED Display Module from Mugnee  ultra-high resolution display for control rooms, studios, and premium indoor signage.",
  },
  {
    id: "p1-53-indoor-led-module",
    slug: "p1-53mm-indoor-led-display-module",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P1.53mm Indoor LED Display Module",
    titleKm: "P1.53mm Indoor LED Display Module",
    shortDescEn:
      "P1.53 indoor LED display module for close-view, high-clarity indoor video walls.",
    shortDescKm:
      "P1.53 indoor LED display module for close-view, high-clarity indoor video walls.",
    descriptionEn:
      "The P1.53 indoor LED display module delivers detailed visuals for studios, control rooms, malls, and corporate boardrooms. With SMD1212 LED type, 320 x 160 mm module size, and high refresh rate, it supports smooth, accurate indoor content for close viewing.",
    descriptionKm:
      "The P1.53 indoor LED display module delivers detailed visuals for studios, control rooms, malls, and corporate boardrooms. With SMD1212 LED type, 320 x 160 mm module size, and high refresh rate, it supports smooth, accurate indoor content for close viewing.",
    featuresEn: [
      "Supports 2K HD and 4K UHD input",
      "High refresh rate up to 7680 Hz",
      "SMD1212 LED for smooth indoor visuals",
      "Ultra-narrow pixel pitch for crisp clarity",
      "Energy-efficient, low power usage",
    ],
    featuresKm: [
      "Supports 2K HD and 4K UHD input",
      "High refresh rate up to 7680 Hz",
      "SMD1212 LED for smooth indoor visuals",
      "Ultra-narrow pixel pitch for crisp clarity",
      "Energy-efficient, low power usage",
    ],
    applicationsEn: ["Control rooms", "Studios", "Boardrooms", "Indoor video walls"],
    applicationsKm: ["Control rooms", "Studios", "Boardrooms", "Indoor video walls"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "1.538 mm",
        valueKm: "1.538 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD1212",
        valueKm: "SMD1212",
      },
      {
        labelEn: "Module Resolution (W x H)",
        labelKm: "Module Resolution (W x H)",
        valueEn: "208 x 104 = 21,632 pixels",
        valueKm: "208 x 104 = 21,632 pixels",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "422,500 dots/m2",
        valueKm: "422,500 dots/m2",
      },
      {
        labelEn: "Module Size (W x H x D)",
        labelKm: "Module Size (W x H x D)",
        valueEn: "320 x 160 x 16.6 mm",
        valueKm: "320 x 160 x 16.6 mm",
      },
      {
        labelEn: "Module Weight",
        labelKm: "Module Weight",
        valueEn: "0.49 +/- 0.02 kg",
        valueKm: "0.49 +/- 0.02 kg",
      },
      {
        labelEn: "HUB Type",
        labelKm: "HUB Type",
        valueEn: "HUB320",
        valueKm: "HUB320",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "500 cd/m2",
        valueKm: "500 cd/m2",
      },
      {
        labelEn: "Color Temperature",
        labelKm: "Color Temperature",
        valueEn: "2000 K - 9300 K (Adjustable)",
        valueKm: "2000 K - 9300 K (Adjustable)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 140 deg",
        valueKm: "140 deg / 140 deg",
      },
      {
        labelEn: "Brightness/Color Uniformity",
        labelKm: "Brightness/Color Uniformity",
        valueEn: ">= 98 %",
        valueKm: ">= 98 %",
      },
      {
        labelEn: "Contrast Ratio",
        labelKm: "Contrast Ratio",
        valueEn: "5000 : 1",
        valueKm: "5000 : 1",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "488 W/m2",
        valueKm: "488 W/m2",
      },
      {
        labelEn: "Typical Power Consumption",
        labelKm: "Typical Power Consumption",
        valueEn: "163 W/m2",
        valueKm: "163 W/m2",
      },
      {
        labelEn: "Input Voltage",
        labelKm: "Input Voltage",
        valueEn: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
        valueKm: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
      },
      {
        labelEn: "Frame Frequency",
        labelKm: "Frame Frequency",
        valueEn: "60 Hz",
        valueKm: "60 Hz",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: "3840 Hz (Standard) / 7680 Hz",
        valueKm: "3840 Hz (Standard) / 7680 Hz",
      },
      {
        labelEn: "Processing Depth",
        labelKm: "Processing Depth",
        valueEn: "12-14 Bit",
        valueKm: "12-14 Bit",
      },
      {
        labelEn: "Video Support",
        labelKm: "Video Support",
        valueEn: "2K HD / 4K UHD",
        valueKm: "2K HD / 4K UHD",
      },
      {
        labelEn: "Life Span",
        labelKm: "Life Span",
        valueEn: "100,000 hours",
        valueKm: "100,000 hours",
      },
      {
        labelEn: "Operating Temp / Humidity",
        labelKm: "Operating Temp / Humidity",
        valueEn: "-20 C ~ 45 C / 10% ~ 50% RH (No Condensation)",
        valueKm: "-20 C ~ 45 C / 10% ~ 50% RH (No Condensation)",
      },
      {
        labelEn: "Storage Temp / Humidity",
        labelKm: "Storage Temp / Humidity",
        valueEn: "-20 C ~ 50 C / 10% ~ 60% RH (No Condensation)",
        valueKm: "-20 C ~ 50 C / 10% ~ 60% RH (No Condensation)",
      },
      {
        labelEn: "Certifications",
        labelKm: "Certifications",
        valueEn: "BIS / CE / CB / ROHS / EAC",
        valueKm: "BIS / CE / CB / ROHS / EAC",
      },
    ],
    heroImage: "/images/products/P1.53.webp",
    gallery: [
      "/images/products/P1.53.webp",
      "/images/products/P1.53-Front.webp",
      "/images/products/P1.53-back.webp",
    ],
    tagsEn: ["P1.53", "Indoor LED", "LED Module"],
    tagsKm: ["P1.53", "Indoor LED", "LED Module"],
    seoTitleEn: "P1.53mm Indoor LED Display Module",
    seoTitleKm: "P1.53mm Indoor LED Display Module",
    seoDescEn:
      "P1.53 indoor LED display module with SMD1212 LEDs, 320 x 160mm module size and high refresh.",
    seoDescKm:
      "P1.53 indoor LED display module with SMD1212 LEDs, 320 x 160mm module size and high refresh.",
  },
  {
    id: "p1-86-indoor-led-module",
    slug: "p1-86-indoor-led-video-wall-display",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P1.86 Indoor LED Video Wall Display",
    titleKm: "P1.86 Indoor LED Video Wall Display",
    shortDescEn:
      "P1.86 indoor LED video wall display for high-clarity close viewing.",
    shortDescKm:
      "P1.86 indoor LED video wall display for high-clarity close viewing.",
    descriptionEn:
      "The P1.86 indoor LED video wall display provides sharp visuals for premium indoor installations. It is designed for close viewing with SMD1515 LEDs and a 320 x 160 mm module size.",
    descriptionKm:
      "The P1.86 indoor LED video wall display provides sharp visuals for premium indoor installations. It is designed for close viewing with SMD1515 LEDs and a 320 x 160 mm module size.",
    featuresEn: [
      "Supports 2K HD and 4K UHD input",
      "High refresh rate up to 7680 Hz",
      "SMD1515 LED for smooth indoor visuals",
      "Ultra-narrow pixel pitch for crisp clarity",
      "Energy-efficient, low power usage",
    ],
    featuresKm: [
      "Supports 2K HD and 4K UHD input",
      "High refresh rate up to 7680 Hz",
      "SMD1515 LED for smooth indoor visuals",
      "Ultra-narrow pixel pitch for crisp clarity",
      "Energy-efficient, low power usage",
    ],
    applicationsEn: ["Control rooms", "Studios", "Boardrooms", "Indoor video walls"],
    applicationsKm: ["Control rooms", "Studios", "Boardrooms", "Indoor video walls"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "1.86 mm",
        valueKm: "1.86 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD1515",
        valueKm: "SMD1515",
      },
      {
        labelEn: "Module Resolution (W x H)",
        labelKm: "Module Resolution (W x H)",
        valueEn: "172 x 86 = 14,792 pixels",
        valueKm: "172 x 86 = 14,792 pixels",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "289,000 dots/m2",
        valueKm: "289,000 dots/m2",
      },
      {
        labelEn: "Module Size (W x H x D)",
        labelKm: "Module Size (W x H x D)",
        valueEn: "320 x 160 x 16.6 mm",
        valueKm: "320 x 160 x 16.6 mm",
      },
      {
        labelEn: "Module Weight",
        labelKm: "Module Weight",
        valueEn: "0.49 +/- 0.02 kg",
        valueKm: "0.49 +/- 0.02 kg",
      },
      {
        labelEn: "HUB Type",
        labelKm: "HUB Type",
        valueEn: "HUB320",
        valueKm: "HUB320",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "600 cd/m2",
        valueKm: "600 cd/m2",
      },
      {
        labelEn: "Color Temperature",
        labelKm: "Color Temperature",
        valueEn: "2000 K - 9300 K (Adjustable)",
        valueKm: "2000 K - 9300 K (Adjustable)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 140 deg",
        valueKm: "140 deg / 140 deg",
      },
      {
        labelEn: "Brightness/Color Uniformity",
        labelKm: "Brightness/Color Uniformity",
        valueEn: ">= 98 %",
        valueKm: ">= 98 %",
      },
      {
        labelEn: "Contrast Ratio",
        labelKm: "Contrast Ratio",
        valueEn: "5000 : 1",
        valueKm: "5000 : 1",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "500 W/m2",
        valueKm: "500 W/m2",
      },
      {
        labelEn: "Typical Power Consumption",
        labelKm: "Typical Power Consumption",
        valueEn: "167 W/m2",
        valueKm: "167 W/m2",
      },
    ],
    heroImage: "/images/products/P1.86.webp",
    gallery: [
      "/images/products/P1.86.webp",
      "/images/products/P1.86-Front.webp",
      "/images/products/P1.86-Back.webp",
    ],
    tagsEn: ["P1.86", "Indoor LED", "LED Video Wall"],
    tagsKm: ["P1.86", "Indoor LED", "LED Video Wall"],
    seoTitleEn: "P1.86 Indoor LED Video Wall Display",
    seoTitleKm: "P1.86 Indoor LED Video Wall Display",
    seoDescEn:
      "P1.86 indoor LED video wall display with SMD1515 LEDs and 320 x 160mm module size.",
    seoDescKm:
      "P1.86 indoor LED video wall display with SMD1515 LEDs and 320 x 160mm module size.",
  },
  {
    id: "p2-indoor-led-module",
    slug: "p2-indoor-led-display-board-price-in-bangladesh",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P2 Indoor LED Display Board",
    titleKm: "P2 Indoor LED Display Board",
    shortDescEn: "P2 indoor LED display board for sharp indoor signage.",
    shortDescKm: "P2 indoor LED display board for sharp indoor signage.",
    descriptionEn:
      "The P2 indoor LED display board provides crisp visuals for indoor branding, showrooms, and boardrooms with SMD1515 LEDs and a 320 x 160 mm module size.",
    descriptionKm:
      "The P2 indoor LED display board provides crisp visuals for indoor branding, showrooms, and boardrooms with SMD1515 LEDs and a 320 x 160 mm module size.",
    featuresEn: [
      "Supports 2K HD and 4K UHD input",
      "High refresh rate up to 7680 Hz",
      "SMD1515 LED for smooth indoor visuals",
      "Ultra-narrow pixel pitch for crisp clarity",
      "Energy-efficient, low power usage",
    ],
    featuresKm: [
      "Supports 2K HD and 4K UHD input",
      "High refresh rate up to 7680 Hz",
      "SMD1515 LED for smooth indoor visuals",
      "Ultra-narrow pixel pitch for crisp clarity",
      "Energy-efficient, low power usage",
    ],
    applicationsEn: ["Indoor signage", "Showrooms", "Boardrooms", "Retail"],
    applicationsKm: ["Indoor signage", "Showrooms", "Boardrooms", "Retail"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "2.0 mm",
        valueKm: "2.0 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD1515",
        valueKm: "SMD1515",
      },
      {
        labelEn: "Module Resolution (W x H)",
        labelKm: "Module Resolution (W x H)",
        valueEn: "160 x 80 = 12,800 pixels",
        valueKm: "160 x 80 = 12,800 pixels",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "250,000 dots/m2",
        valueKm: "250,000 dots/m2",
      },
      {
        labelEn: "Module Size (W x H x D)",
        labelKm: "Module Size (W x H x D)",
        valueEn: "320 x 160 x 16.6 mm",
        valueKm: "320 x 160 x 16.6 mm",
      },
      {
        labelEn: "Module Weight",
        labelKm: "Module Weight",
        valueEn: "0.49 +/- 0.02 kg",
        valueKm: "0.49 +/- 0.02 kg",
      },
      {
        labelEn: "HUB Type",
        labelKm: "HUB Type",
        valueEn: "HUB320",
        valueKm: "HUB320",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "600 cd/m2",
        valueKm: "600 cd/m2",
      },
      {
        labelEn: "Color Temperature",
        labelKm: "Color Temperature",
        valueEn: "2000 K - 9300 K (Adjustable)",
        valueKm: "2000 K - 9300 K (Adjustable)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 140 deg",
        valueKm: "140 deg / 140 deg",
      },
      {
        labelEn: "Brightness/Color Uniformity",
        labelKm: "Brightness/Color Uniformity",
        valueEn: ">= 98 %",
        valueKm: ">= 98 %",
      },
      {
        labelEn: "Contrast Ratio",
        labelKm: "Contrast Ratio",
        valueEn: "5000 : 1",
        valueKm: "5000 : 1",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "500 W/m2",
        valueKm: "500 W/m2",
      },
      {
        labelEn: "Typical Power Consumption",
        labelKm: "Typical Power Consumption",
        valueEn: "167 W/m2",
        valueKm: "167 W/m2",
      },
    ],
    heroImage:
      "/images/products/P2-300x300-1.webp",
    gallery: [
      "/images/products/P2-300x300-1.webp",
      "/images/products/P2-Front.webp",
      "/images/products/P2-back.webp",
    ],
    tagsEn: ["P2", "Indoor LED", "LED Display Board"],
    tagsKm: ["P2", "Indoor LED", "LED Display Board"],
    seoTitleEn: "P2 Indoor LED Display Board",
    seoTitleKm: "P2 Indoor LED Display Board",
    seoDescEn:
      "P2 indoor LED display board with SMD1515 LEDs and 320 x 160mm module size.",
    seoDescKm:
      "P2 indoor LED display board with SMD1515 LEDs and 320 x 160mm module size.",
  },
  {
    id: "p4-indoor-led-module",
    slug: "p4-indoor-led-display-module",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P4 Indoor LED Display Module",
    titleKm: "P4 Indoor LED Display Module",
    shortDescEn: "P4 indoor LED display module for cost-effective indoor screens.",
    shortDescKm: "P4 indoor LED display module for cost-effective indoor screens.",
    descriptionEn:
      "The P4 indoor LED display module delivers reliable indoor visuals for retail, offices, and large halls with SMD2020 LEDs and a 320 x 160 mm module size.",
    descriptionKm:
      "The P4 indoor LED display module delivers reliable indoor visuals for retail, offices, and large halls with SMD2020 LEDs and a 320 x 160 mm module size.",
    featuresEn: [
      "Supports 2K HD and 4K UHD input",
      "High refresh rate up to 7680 Hz",
      "SMD2020 LED for stable indoor visuals",
      "Smooth visuals for mid-distance viewing",
      "Energy-efficient, low power usage",
    ],
    featuresKm: [
      "Supports 2K HD and 4K UHD input",
      "High refresh rate up to 7680 Hz",
      "SMD2020 LED for stable indoor visuals",
      "Smooth visuals for mid-distance viewing",
      "Energy-efficient, low power usage",
    ],
    applicationsEn: ["Retail", "Meeting halls", "Showrooms", "Indoor signage"],
    applicationsKm: ["Retail", "Meeting halls", "Showrooms", "Indoor signage"],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "4.0 mm",
        valueKm: "4.0 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD2020",
        valueKm: "SMD2020",
      },
      {
        labelEn: "Module Resolution (W x H)",
        labelKm: "Module Resolution (W x H)",
        valueEn: "80 x 40 = 3200 pixels",
        valueKm: "80 x 40 = 3200 pixels",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "62,500 dots/m2",
        valueKm: "62,500 dots/m2",
      },
      {
        labelEn: "Module Size (W x H x D)",
        labelKm: "Module Size (W x H x D)",
        valueEn: "320 x 160 x 16.6 mm",
        valueKm: "320 x 160 x 16.6 mm",
      },
      {
        labelEn: "Module Weight",
        labelKm: "Module Weight",
        valueEn: "0.49 +/- 0.02 kg",
        valueKm: "0.49 +/- 0.02 kg",
      },
      {
        labelEn: "HUB Type",
        labelKm: "HUB Type",
        valueEn: "HUB320",
        valueKm: "HUB320",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "600 cd/m2",
        valueKm: "600 cd/m2",
      },
      {
        labelEn: "Color Temperature",
        labelKm: "Color Temperature",
        valueEn: "2000 K - 9300 K (Adjustable)",
        valueKm: "2000 K - 9300 K (Adjustable)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 140 deg",
        valueKm: "140 deg / 140 deg",
      },
      {
        labelEn: "Brightness/Color Uniformity",
        labelKm: "Brightness/Color Uniformity",
        valueEn: ">= 98 %",
        valueKm: ">= 98 %",
      },
      {
        labelEn: "Contrast Ratio",
        labelKm: "Contrast Ratio",
        valueEn: "5000 : 1",
        valueKm: "5000 : 1",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "500 W/m2",
        valueKm: "500 W/m2",
      },
      {
        labelEn: "Typical Power Consumption",
        labelKm: "Typical Power Consumption",
        valueEn: "167 W/m2",
        valueKm: "167 W/m2",
      },
    ],
    heroImage: "/images/products/P4.webp",
    gallery: [
      "/images/products/P4.webp",
      "/images/products/P4-M.webp",
      "/images/products/P4-B-.webp",
      "/images/products/P4c.webp",
    ],
    tagsEn: ["P4", "Indoor LED", "LED Module"],
    tagsKm: ["P4", "Indoor LED", "LED Module"],
    seoTitleEn: "P4 Indoor LED Display Module",
    seoTitleKm: "P4 Indoor LED Display Module",
    seoDescEn:
      "P4 indoor LED display module with SMD2020 LEDs and 320 x 160mm module size.",
    seoDescKm:
      "P4 indoor LED display module with SMD2020 LEDs and 320 x 160mm module size.",
  },
      {
    id: "p2-5-indoor-led-module",
    slug: "p2-5-indoor-led-display-module",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P2.5 Indoor LED Display Module",
    titleKm: "P2.5 Indoor LED Display Module",
    shortDescEn:
      "P2.5 indoor LED module with fine pixel pitch for sharp, close-viewing visuals.",
    shortDescKm:
      "P2.5 indoor LED module with fine pixel pitch for sharp, close-viewing visuals.",
    descriptionEn:
      "P2.5 indoor LED display module designed for meeting rooms, showrooms, control rooms, and indoor branding walls. Fine pixel pitch (2.5mm) and SMD2121 LEDs deliver clear text and smooth video. The 320x160mm module size integrates into standard cabinets, and IP50 protection keeps indoor dust out. Stable power consumption and long lifespan make it suitable for daily business use.",
    descriptionKm:
      "P2.5 indoor LED display module designed for meeting rooms, showrooms, control rooms, and indoor branding walls. Fine pixel pitch (2.5mm) and SMD2121 LEDs deliver clear text and smooth video. The 320x160mm module size integrates into standard cabinets, and IP50 protection keeps indoor dust out. Stable power consumption and long lifespan make it suitable for daily business use.",
    featuresEn: [
      "2.5mm pixel pitch for crisp indoor visuals",
      "SMD2121 LED for uniform brightness",
      "320 x 160mm module size for standard cabinets",
      "High refresh for smooth motion video",
      "IP50 protection for indoor environments",
      "Long lifespan for daily operation",
    ],
    featuresKm: [
      "2.5mm pixel pitch for crisp indoor visuals",
      "SMD2121 LED for uniform brightness",
      "320 x 160mm module size for standard cabinets",
      "High refresh for smooth motion video",
      "IP50 protection for indoor environments",
      "Long lifespan for daily operation",
    ],
    applicationsEn: [
      "Meeting rooms and boardrooms",
      "Showrooms and retail branding",
      "Control rooms and monitoring centers",
      "Indoor stages and event backdrops",
    ],
    applicationsKm: [
      "Meeting rooms and boardrooms",
      "Showrooms and retail branding",
      "Control rooms and monitoring centers",
      "Indoor stages and event backdrops",
    ],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "2.5 mm",
        valueKm: "2.5 mm",
      },
      {
        labelEn: "Module Size",
        labelKm: "Module Size",
        valueEn: "320 x 160 mm",
        valueKm: "320 x 160 mm",
      },
      {
        labelEn: "Module Resolution",
        labelKm: "Module Resolution",
        valueEn: "128 x 64 dots",
        valueKm: "128 x 64 dots",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "160,000 dots/m2",
        valueKm: "160,000 dots/m2",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD2121",
        valueKm: "SMD2121",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "800-1200 nits",
        valueKm: "800-1200 nits",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: ">= 1920 Hz",
        valueKm: ">= 1920 Hz",
      },
      {
        labelEn: "Viewing Angle",
        labelKm: "Viewing Angle",
        valueEn: "140° H / 140° V",
        valueKm: "140° H / 140° V",
      },
      {
        labelEn: "Best Viewing Distance",
        labelKm: "Best Viewing Distance",
        valueEn: "2.5 m",
        valueKm: "2.5 m",
      },
      {
        labelEn: "Input Voltage",
        labelKm: "Input Voltage",
        valueEn: "AC 220V ±10%",
        valueKm: "AC 220V ±10%",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "800 W/m2",
        valueKm: "800 W/m2",
      },
      {
        labelEn: "Avg Power Consumption",
        labelKm: "Avg Power Consumption",
        valueEn: "260 W/m2",
        valueKm: "260 W/m2",
      },
      {
        labelEn: "Protection",
        labelKm: "Protection",
        valueEn: "IP50",
        valueKm: "IP50",
      },
      {
        labelEn: "Working Temperature",
        labelKm: "Working Temperature",
        valueEn: "0°C to 45°C",
        valueKm: "0°C to 45°C",
      },
      {
        labelEn: "Working Humidity",
        labelKm: "Working Humidity",
        valueEn: "10% to 90% RH",
        valueKm: "10% to 90% RH",
      },
    ],
    heroImage:
      "/images/products/P2.5.webp",
    gallery: [
      "/images/products/P2.5.webp",
    ],
    tagsEn: ["P2.5", "Indoor LED", "LED Module"],
    tagsKm: ["P2.5", "Indoor LED", "LED Module"],
    seoTitleEn: "P2.5 Indoor LED Display Module",
    seoTitleKm: "P2.5 Indoor LED Display Module",
    seoDescEn:
      "P2.5 indoor LED module with 2.5mm pixel pitch, SMD2121 LEDs and IP50 protection.",
    seoDescKm:
      "P2.5 indoor LED module with 2.5mm pixel pitch, SMD2121 LEDs and IP50 protection.",
  },
  {
    id: "p3-indoor-led-module",
    slug: "p3-indoor-led-display-module",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P3 Indoor LED Display Module",
    titleKm: "P3 Indoor LED Display Module",
    shortDescEn:
      "P3 indoor LED module for balanced clarity in meeting rooms and showrooms.",
    shortDescKm:
      "P3 indoor LED module for balanced clarity in meeting rooms and showrooms.",
    descriptionEn:
      "P3 indoor LED module offers a balance of clarity and budget for indoor video walls, training rooms, and retail displays. The 3.0mm pixel pitch and SMD2121 LEDs produce clean visuals for mid-distance viewing. Standard 192x192mm modules integrate into common cabinets with stable power use and long service life.",
    descriptionKm:
      "P3 indoor LED module offers a balance of clarity and budget for indoor video walls, training rooms, and retail displays. The 3.0mm pixel pitch and SMD2121 LEDs produce clean visuals for mid-distance viewing. Standard 192x192mm modules integrate into common cabinets with stable power use and long service life.",
    featuresEn: [
      "3.0mm pixel pitch for indoor viewing",
      "SMD2121 LED for uniform brightness",
      "192 x 192mm module size",
      "Smooth video with high refresh",
      "IP50 protection for indoor use",
    ],
    featuresKm: [
      "3.0mm pixel pitch for indoor viewing",
      "SMD2121 LED for uniform brightness",
      "192 x 192mm module size",
      "Smooth video with high refresh",
      "IP50 protection for indoor use",
    ],
    applicationsEn: [
      "Training rooms",
      "Retail displays",
      "Reception and lobby walls",
      "Corporate meeting rooms",
    ],
    applicationsKm: [
      "Training rooms",
      "Retail displays",
      "Reception and lobby walls",
      "Corporate meeting rooms",
    ],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "3.0 mm",
        valueKm: "3.0 mm",
      },
      {
        labelEn: "Module Size",
        labelKm: "Module Size",
        valueEn: "192 x 192 mm",
        valueKm: "192 x 192 mm",
      },
      {
        labelEn: "Module Resolution",
        labelKm: "Module Resolution",
        valueEn: "64 x 64 dots",
        valueKm: "64 x 64 dots",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "111,111 dots/m2",
        valueKm: "111,111 dots/m2",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD2121",
        valueKm: "SMD2121",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "800-1200 nits",
        valueKm: "800-1200 nits",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: ">= 1920 Hz",
        valueKm: ">= 1920 Hz",
      },
      {
        labelEn: "Viewing Angle",
        labelKm: "Viewing Angle",
        valueEn: "140° H / 140° V",
        valueKm: "140° H / 140° V",
      },
      {
        labelEn: "Best Viewing Distance",
        labelKm: "Best Viewing Distance",
        valueEn: "3 m",
        valueKm: "3 m",
      },
      {
        labelEn: "Input Voltage",
        labelKm: "Input Voltage",
        valueEn: "AC 220V ±10%",
        valueKm: "AC 220V ±10%",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "800 W/m2",
        valueKm: "800 W/m2",
      },
      {
        labelEn: "Avg Power Consumption",
        labelKm: "Avg Power Consumption",
        valueEn: "260 W/m2",
        valueKm: "260 W/m2",
      },
      {
        labelEn: "Protection",
        labelKm: "Protection",
        valueEn: "IP50",
        valueKm: "IP50",
      },
      {
        labelEn: "Working Temperature",
        labelKm: "Working Temperature",
        valueEn: "0°C to 45°C",
        valueKm: "0°C to 45°C",
      },
      {
        labelEn: "Working Humidity",
        labelKm: "Working Humidity",
        valueEn: "10% to 90% RH",
        valueKm: "10% to 90% RH",
      },
    ],
    heroImage:
      "/images/products/P2.5.webp",
    gallery: [
      "/images/products/P2.5.webp",
    ],
    tagsEn: ["P3", "Indoor LED", "LED Module"],
    tagsKm: ["P3", "Indoor LED", "LED Module"],
    seoTitleEn: "P3 Indoor LED Display Module",
    seoTitleKm: "P3 Indoor LED Display Module",
    seoDescEn:
      "P3 indoor LED module with 3.0mm pixel pitch, SMD2121 LEDs and IP50 protection.",
    seoDescKm:
      "P3 indoor LED module with 3.0mm pixel pitch, SMD2121 LEDs and IP50 protection.",
  },
  {
    id: "p5-indoor-led-module",
    slug: "p5-indoor-led-display-module",
    categoryIds: ["led_display", "indoor_led_display"],
    primaryCategoryId: "indoor_led_display",
    titleEn: "P5 Indoor LED Display Module",
    titleKm: "P5 Indoor LED Display Module",
    shortDescEn:
      "P5 indoor LED module for cost-effective indoor video walls and signage.",
    shortDescKm:
      "P5 indoor LED module for cost-effective indoor video walls and signage.",
    descriptionEn:
      "P5 indoor LED module is a cost-effective solution for indoor signage, stage backdrops, and large-format displays. With 5.0mm pixel pitch and SMD2121 LEDs, it is ideal for medium viewing distances while keeping build costs low. 320x160mm modules integrate into common cabinets with stable power use and long service life.",
    descriptionKm:
      "P5 indoor LED module is a cost-effective solution for indoor signage, stage backdrops, and large-format displays. With 5.0mm pixel pitch and SMD2121 LEDs, it is ideal for medium viewing distances while keeping build costs low. 320x160mm modules integrate into common cabinets with stable power use and long service life.",
    featuresEn: [
      "5.0mm pixel pitch for indoor signage",
      "SMD2121 LED for consistent brightness",
      "320 x 160mm module size",
      "High refresh for smooth visuals",
      "IP50 protection for indoor use",
    ],
    featuresKm: [
      "5.0mm pixel pitch for indoor signage",
      "SMD2121 LED for consistent brightness",
      "320 x 160mm module size",
      "High refresh for smooth visuals",
      "IP50 protection for indoor use",
    ],
    applicationsEn: [
      "Indoor signage",
      "Stage backdrops",
      "Retail and showroom displays",
      "Conference halls",
    ],
    applicationsKm: [
      "Indoor signage",
      "Stage backdrops",
      "Retail and showroom displays",
      "Conference halls",
    ],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "5.0 mm",
        valueKm: "5.0 mm",
      },
      {
        labelEn: "Module Size",
        labelKm: "Module Size",
        valueEn: "320 x 160 mm",
        valueKm: "320 x 160 mm",
      },
      {
        labelEn: "Module Resolution",
        labelKm: "Module Resolution",
        valueEn: "64 x 32 dots",
        valueKm: "64 x 32 dots",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "40,000 dots/m2",
        valueKm: "40,000 dots/m2",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD2121",
        valueKm: "SMD2121",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "800-1200 nits",
        valueKm: "800-1200 nits",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: ">= 1920 Hz",
        valueKm: ">= 1920 Hz",
      },
      {
        labelEn: "Viewing Angle",
        labelKm: "Viewing Angle",
        valueEn: "140° H / 140° V",
        valueKm: "140° H / 140° V",
      },
      {
        labelEn: "Best Viewing Distance",
        labelKm: "Best Viewing Distance",
        valueEn: "5 m",
        valueKm: "5 m",
      },
      {
        labelEn: "Input Voltage",
        labelKm: "Input Voltage",
        valueEn: "AC 220V ±10%",
        valueKm: "AC 220V ±10%",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "800 W/m2",
        valueKm: "800 W/m2",
      },
      {
        labelEn: "Avg Power Consumption",
        labelKm: "Avg Power Consumption",
        valueEn: "260 W/m2",
        valueKm: "260 W/m2",
      },
      {
        labelEn: "Protection",
        labelKm: "Protection",
        valueEn: "IP50",
        valueKm: "IP50",
      },
      {
        labelEn: "Working Temperature",
        labelKm: "Working Temperature",
        valueEn: "0°C to 45°C",
        valueKm: "0°C to 45°C",
      },
      {
        labelEn: "Working Humidity",
        labelKm: "Working Humidity",
        valueEn: "10% to 90% RH",
        valueKm: "10% to 90% RH",
      },
    ],
    heroImage:
      "/images/products/P2.5.webp",
    gallery: [
      "/images/products/P2.5.webp",
    ],
    tagsEn: ["P5", "Indoor LED", "LED Module"],
    tagsKm: ["P5", "Indoor LED", "LED Module"],
    seoTitleEn: "P5 Indoor LED Display Module",
    seoTitleKm: "P5 Indoor LED Display Module",
    seoDescEn:
      "P5 indoor LED module with 5.0mm pixel pitch, SMD2121 LEDs and IP50 protection.",
    seoDescKm:
      "P5 indoor LED module with 5.0mm pixel pitch, SMD2121 LEDs and IP50 protection.",
  },
  {
    id: "p2-5-outdoor-led-display",
    slug: "p2-5-outdoor-led-display",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P2.5 Outdoor LED Display",
    titleKm: "P2.5 Outdoor LED Display",
    shortDescEn:
      "High-clarity P2.5 outdoor LED display for close-view advertising and smart city signage.",
    shortDescKm:
      "High-clarity P2.5 outdoor LED display for close-view advertising and smart city signage.",
    descriptionEn:
      "The P2.5 outdoor LED display module delivers crisp visuals for closer viewing distances while staying rugged in harsh weather. With sealed front protection, high brightness, and LC-series compatibility, it is ideal for storefronts, facades, and outdoor media walls.",
    descriptionKm:
      "The P2.5 outdoor LED display module delivers crisp visuals for closer viewing distances while staying rugged in harsh weather. With sealed front protection, high brightness, and LC-series compatibility, it is ideal for storefronts, facades, and outdoor media walls.",
    featuresEn: [
      "320 x 160 mm universal module size",
      "High protection class LED lamp and sealed front",
      "Waterproof and moisture-proof design",
      "High brightness with efficient heat dissipation",
      "High refresh rate and grayscale performance",
      "Compatible replacement for P2.5 ~ P8 LC series",
      "Customizable for coastal or high-humidity sites",
    ],
    featuresKm: [
      "320 x 160 mm universal module size",
      "High protection class LED lamp and sealed front",
      "Waterproof and moisture-proof design",
      "High brightness with efficient heat dissipation",
      "High refresh rate and grayscale performance",
      "Compatible replacement for P2.5 ~ P8 LC series",
      "Customizable for coastal or high-humidity sites",
    ],
    applicationsEn: [
      "Outdoor billboards",
      "Storefront signage",
      "Building facades",
      "Public information displays",
      "Smart city signage",
    ],
    applicationsKm: [
      "Outdoor billboards",
      "Storefront signage",
      "Building facades",
      "Public information displays",
      "Smart city signage",
    ],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "2.5 mm",
        valueKm: "2.5 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD1415",
        valueKm: "SMD1415",
      },
      {
        labelEn: "Module Resolution (W x H)",
        labelKm: "Module Resolution (W x H)",
        valueEn: "128 x 64 = 8,192 pixels",
        valueKm: "128 x 64 = 8,192 pixels",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "160,000 dots/m2",
        valueKm: "160,000 dots/m2",
      },
      {
        labelEn: "Module Size (W x H x D)",
        labelKm: "Module Size (W x H x D)",
        valueEn: "320 x 160 x 17.5 mm",
        valueKm: "320 x 160 x 17.5 mm",
      },
      {
        labelEn: "Module Weight",
        labelKm: "Module Weight",
        valueEn: "0.46 +/- 0.02 kg",
        valueKm: "0.46 +/- 0.02 kg",
      },
      {
        labelEn: "HUB Type",
        labelKm: "HUB Type",
        valueEn: "HUB75",
        valueKm: "HUB75",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "4,000 ~ 4,500 cd/m2",
        valueKm: "4,000 ~ 4,500 cd/m2",
      },
      {
        labelEn: "Color Temperature",
        labelKm: "Color Temperature",
        valueEn: "6,500 K (Adjustable 1,000 K ~ 9,500 K)",
        valueKm: "6,500 K (Adjustable 1,000 K ~ 9,500 K)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 140 deg",
        valueKm: "140 deg / 140 deg",
      },
      {
        labelEn: "Brightness/Color Uniformity",
        labelKm: "Brightness/Color Uniformity",
        valueEn: ">= 98 %",
        valueKm: ">= 98 %",
      },
      {
        labelEn: "Contrast Ratio",
        labelKm: "Contrast Ratio",
        valueEn: "5,000 : 1",
        valueKm: "5,000 : 1",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "879 W/m2",
        valueKm: "879 W/m2",
      },
      {
        labelEn: "Typical Power Consumption",
        labelKm: "Typical Power Consumption",
        valueEn: "293 W/m2",
        valueKm: "293 W/m2",
      },
      {
        labelEn: "Input Voltage",
        labelKm: "Input Voltage",
        valueEn: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
        valueKm: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
      },
      {
        labelEn: "Frame Frequency",
        labelKm: "Frame Frequency",
        valueEn: "60 Hz",
        valueKm: "60 Hz",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: "1920 Hz",
        valueKm: "1920 Hz",
      },
      {
        labelEn: "Processing Depth",
        labelKm: "Processing Depth",
        valueEn: "12-14 bit",
        valueKm: "12-14 bit",
      },
      {
        labelEn: "Video Support",
        labelKm: "Video Support",
        valueEn: "2K HD / 4K UHD",
        valueKm: "2K HD / 4K UHD",
      },
      {
        labelEn: "Life Span",
        labelKm: "Life Span",
        valueEn: "100,000 hours",
        valueKm: "100,000 hours",
      },
      {
        labelEn: "Operating Temp / Humidity",
        labelKm: "Operating Temp / Humidity",
        valueEn: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
        valueKm: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
      },
      {
        labelEn: "Storage Temp / Humidity",
        labelKm: "Storage Temp / Humidity",
        valueEn: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
        valueKm: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
      },
      {
        labelEn: "Certifications",
        labelKm: "Certifications",
        valueEn: "BIS / CE / CB / ROHS / EAC",
        valueKm: "BIS / CE / CB / ROHS / EAC",
      },
    ],
    heroImage: "/images/products/p2-5-outdoor.webp",
    gallery: ["/images/products/p2-5-outdoor.webp"],
    tagsEn: ["P2.5", "Outdoor LED", "LED Display"],
    tagsKm: ["P2.5", "Outdoor LED", "LED Display"],
    seoTitleEn: "P2.5 Outdoor LED Display | High-Resolution Outdoor Screen",
    seoTitleKm: "P2.5 Outdoor LED Display | High-Resolution Outdoor Screen",
    seoDescEn:
      "P2.5 outdoor LED display with SMD1415 LEDs, 320 x 160 mm module size, and 4,000-4,500 cd/m2 brightness.",
    seoDescKm:
      "P2.5 outdoor LED display with SMD1415 LEDs, 320 x 160 mm module size, and 4,000-4,500 cd/m2 brightness.",
  },
  {
    id: "p3-outdoor-led-module",
    slug: "p3-outdoor-led-display-module",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P3 Outdoor LED Display Module",
    titleKm: "P3 Outdoor LED Display Module",
    shortDescEn:
      "High-brightness P3 outdoor LED module for billboards, stadiums, and digital signage.",
    shortDescKm:
      "High-brightness P3 outdoor LED module for billboards, stadiums, and digital signage.",
    descriptionEn:
      "The P3 outdoor LED display module combines sharp 3 mm pixel pitch with durable IP-rated protection for reliable outdoor advertising. It delivers bright, smooth visuals under sunlight and supports common control systems for easy integration.",
    descriptionKm:
      "The P3 outdoor LED display module combines sharp 3 mm pixel pitch with durable IP-rated protection for reliable outdoor advertising. It delivers bright, smooth visuals under sunlight and supports common control systems for easy integration.",
    featuresEn: [
      "Ultra-high brightness up to 6000 nits",
      "3 mm pixel pitch for sharp outdoor visuals",
      "Weatherproof IP65 front protection",
      "High refresh rate for smooth video",
      "Energy-efficient operation",
      "Wide viewing angle for consistent color",
      "Modular design for easy service",
      "Long 100,000+ hour lifespan",
    ],
    featuresKm: [
      "Ultra-high brightness up to 6000 nits",
      "3 mm pixel pitch for sharp outdoor visuals",
      "Weatherproof IP65 front protection",
      "High refresh rate for smooth video",
      "Energy-efficient operation",
      "Wide viewing angle for consistent color",
      "Modular design for easy service",
      "Long 100,000+ hour lifespan",
    ],
    applicationsEn: [
      "Outdoor billboards",
      "Stadium screens",
      "Event displays",
      "Digital signage",
      "Public information screens",
    ],
    applicationsKm: [
      "Outdoor billboards",
      "Stadium screens",
      "Event displays",
      "Digital signage",
      "Public information screens",
    ],
    specs: [
      {
        labelEn: "Product Type",
        labelKm: "Product Type",
        valueEn: "Outdoor LED Display Module",
        valueKm: "Outdoor LED Display Module",
      },
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "3 mm",
        valueKm: "3 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD 3-in-1",
        valueKm: "SMD 3-in-1",
      },
      {
        labelEn: "Module Size (W x H)",
        labelKm: "Module Size (W x H)",
        valueEn: "192 x 192 mm",
        valueKm: "192 x 192 mm",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "4,500-6,000 nits",
        valueKm: "4,500-6,000 nits",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: ">= 1920 Hz (up to 3840 Hz)",
        valueKm: ">= 1920 Hz (up to 3840 Hz)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 120 deg",
        valueKm: "140 deg / 120 deg",
      },
      {
        labelEn: "IP Protection",
        labelKm: "IP Protection",
        valueEn: "Front IP65, Rear IP54",
        valueKm: "Front IP65, Rear IP54",
      },
      {
        labelEn: "Operating Voltage",
        labelKm: "Operating Voltage",
        valueEn: "AC 110V / 220V +/- 10%",
        valueKm: "AC 110V / 220V +/- 10%",
      },
      {
        labelEn: "Power Consumption",
        labelKm: "Power Consumption",
        valueEn: "Avg 600 W/m2, Max 800 W/m2",
        valueKm: "Avg 600 W/m2, Max 800 W/m2",
      },
      {
        labelEn: "Color Processing",
        labelKm: "Color Processing",
        valueEn: "16-bit grayscale",
        valueKm: "16-bit grayscale",
      },
      {
        labelEn: "Brightness Adjustment",
        labelKm: "Brightness Adjustment",
        valueEn: "Automatic & manual control",
        valueKm: "Automatic & manual control",
      },
      {
        labelEn: "Control System",
        labelKm: "Control System",
        valueEn: "NovaStar / Colorlight / Linsn",
        valueKm: "NovaStar / Colorlight / Linsn",
      },
      {
        labelEn: "Operating Temperature",
        labelKm: "Operating Temperature",
        valueEn: "-20 C to +60 C",
        valueKm: "-20 C to +60 C",
      },
      {
        labelEn: "Humidity Range",
        labelKm: "Humidity Range",
        valueEn: "10% to 90% RH",
        valueKm: "10% to 90% RH",
      },
      {
        labelEn: "Lifespan",
        labelKm: "Lifespan",
        valueEn: "100,000+ hours",
        valueKm: "100,000+ hours",
      },
      {
        labelEn: "Installation Method",
        labelKm: "Installation Method",
        valueEn: "Fixed or rental installation",
        valueKm: "Fixed or rental installation",
      },
    ],
    heroImage: "/images/products/p3-outdoor.webp",
    gallery: ["/images/products/p3-outdoor.webp"],
    tagsEn: ["P3", "Outdoor LED", "LED Module"],
    tagsKm: ["P3", "Outdoor LED", "LED Module"],
    seoTitleEn: "P3 Outdoor LED Display Module | High Brightness & Durability",
    seoTitleKm: "P3 Outdoor LED Display Module | High Brightness & Durability",
    seoDescEn:
      "P3 outdoor LED module with 3 mm pixel pitch, IP65 front protection, 4,500-6,000 nits brightness, and 100,000+ hour lifespan.",
    seoDescKm:
      "P3 outdoor LED module with 3 mm pixel pitch, IP65 front protection, 4,500-6,000 nits brightness, and 100,000+ hour lifespan.",
  },
  {
    id: "p4-outdoor-led-screen-panel-module",
    slug: "p4-outdoor-led-display-screen-panel-module",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P4 Outdoor LED Display Screen Panel Module",
    titleKm: "P4 Outdoor LED Display Screen Panel Module",
    shortDescEn:
      "P4 outdoor LED screen panel module with 320 x 160 mm size and high brightness.",
    shortDescKm:
      "P4 outdoor LED screen panel module with 320 x 160 mm size and high brightness.",
    descriptionEn:
      "The P4 outdoor LED display screen panel module delivers stable brightness and long-term durability for billboards and facade screens. Its weather-sealed design, high refresh rate, and universal size make installation and maintenance efficient.",
    descriptionKm:
      "The P4 outdoor LED display screen panel module delivers stable brightness and long-term durability for billboards and facade screens. Its weather-sealed design, high refresh rate, and universal size make installation and maintenance efficient.",
    featuresEn: [
      "320 x 160 mm universal module size",
      "High protection class LED lamp",
      "New PCB design for reliable performance",
      "Waterproof sealed front structure",
      "High brightness with strong heat dissipation",
      "High refresh and grayscale performance",
      "Compatible replacement for P2.5 ~ P8 LC series",
      "Supports 45 deg tangent angle",
    ],
    featuresKm: [
      "320 x 160 mm universal module size",
      "High protection class LED lamp",
      "New PCB design for reliable performance",
      "Waterproof sealed front structure",
      "High brightness with strong heat dissipation",
      "High refresh and grayscale performance",
      "Compatible replacement for P2.5 ~ P8 LC series",
      "Supports 45 deg tangent angle",
    ],
    applicationsEn: [
      "Outdoor billboards",
      "Building facades",
      "Highway signage",
      "Public information screens",
    ],
    applicationsKm: [
      "Outdoor billboards",
      "Building facades",
      "Highway signage",
      "Public information screens",
    ],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "4 mm",
        valueKm: "4 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD1921",
        valueKm: "SMD1921",
      },
      {
        labelEn: "Module Resolution (W x H)",
        labelKm: "Module Resolution (W x H)",
        valueEn: "80 x 40 = 3,200 pixels",
        valueKm: "80 x 40 = 3,200 pixels",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "62,500 dots/m2",
        valueKm: "62,500 dots/m2",
      },
      {
        labelEn: "Module Size (W x H x D)",
        labelKm: "Module Size (W x H x D)",
        valueEn: "320 x 160 x 18 mm",
        valueKm: "320 x 160 x 18 mm",
      },
      {
        labelEn: "Module Weight",
        labelKm: "Module Weight",
        valueEn: "0.49 +/- 0.02 kg",
        valueKm: "0.49 +/- 0.02 kg",
      },
      {
        labelEn: "HUB Type",
        labelKm: "HUB Type",
        valueEn: "HUB75",
        valueKm: "HUB75",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "5,000 - 5,500 cd/m2",
        valueKm: "5,000 - 5,500 cd/m2",
      },
      {
        labelEn: "Color Temperature",
        labelKm: "Color Temperature",
        valueEn: "6,500 K (Adjustable 1,000 K - 9,500 K)",
        valueKm: "6,500 K (Adjustable 1,000 K - 9,500 K)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 140 deg",
        valueKm: "140 deg / 140 deg",
      },
      {
        labelEn: "Brightness/Color Uniformity",
        labelKm: "Brightness/Color Uniformity",
        valueEn: ">= 98 %",
        valueKm: ">= 98 %",
      },
      {
        labelEn: "Contrast Ratio",
        labelKm: "Contrast Ratio",
        valueEn: "5,000 : 1",
        valueKm: "5,000 : 1",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "879 W/m2",
        valueKm: "879 W/m2",
      },
      {
        labelEn: "Typical Power Consumption",
        labelKm: "Typical Power Consumption",
        valueEn: "293 W/m2",
        valueKm: "293 W/m2",
      },
      {
        labelEn: "Input Voltage",
        labelKm: "Input Voltage",
        valueEn: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
        valueKm: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
      },
      {
        labelEn: "Frame Frequency",
        labelKm: "Frame Frequency",
        valueEn: "60 Hz",
        valueKm: "60 Hz",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: "1920 Hz",
        valueKm: "1920 Hz",
      },
      {
        labelEn: "Processing Depth",
        labelKm: "Processing Depth",
        valueEn: "12-14 bit",
        valueKm: "12-14 bit",
      },
      {
        labelEn: "Video Support",
        labelKm: "Video Support",
        valueEn: "2K HD / 4K UHD",
        valueKm: "2K HD / 4K UHD",
      },
      {
        labelEn: "Life Span",
        labelKm: "Life Span",
        valueEn: "100,000 hours",
        valueKm: "100,000 hours",
      },
      {
        labelEn: "Operating Temp / Humidity",
        labelKm: "Operating Temp / Humidity",
        valueEn: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
        valueKm: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
      },
      {
        labelEn: "Storage Temp / Humidity",
        labelKm: "Storage Temp / Humidity",
        valueEn: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
        valueKm: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
      },
      {
        labelEn: "Certifications",
        labelKm: "Certifications",
        valueEn: "BIS / CE / CB / ROHS / EAC",
        valueKm: "BIS / CE / CB / ROHS / EAC",
      },
    ],
    heroImage: "/images/products/p4-outdoor.webp",
    gallery: ["/images/products/p4-outdoor.webp"],
    tagsEn: ["P4", "Outdoor LED", "LED Module"],
    tagsKm: ["P4", "Outdoor LED", "LED Module"],
    seoTitleEn: "P4 Outdoor LED Display Screen Panel Module",
    seoTitleKm: "P4 Outdoor LED Display Screen Panel Module",
    seoDescEn:
      "P4 outdoor LED screen panel module with SMD1921 LEDs, 320 x 160 mm size, and 5,000-5,500 cd/m2 brightness.",
    seoDescKm:
      "P4 outdoor LED screen panel module with SMD1921 LEDs, 320 x 160 mm size, and 5,000-5,500 cd/m2 brightness.",
  },
  {
    id: "p5-outdoor-led-module",
    slug: "p5-outdoor-led-display-module",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P5 Outdoor LED Display Module",
    titleKm: "P5 Outdoor LED Display Module",
    shortDescEn:
      "P5 outdoor LED module with 320 x 160 mm size for long-distance advertising.",
    shortDescKm:
      "P5 outdoor LED module with 320 x 160 mm size for long-distance advertising.",
    descriptionEn:
      "The P5 outdoor LED display module balances brightness, power efficiency, and rugged weather protection for large-format signage. Its universal size and high refresh rate keep content smooth and maintenance easy.",
    descriptionKm:
      "The P5 outdoor LED display module balances brightness, power efficiency, and rugged weather protection for large-format signage. Its universal size and high refresh rate keep content smooth and maintenance easy.",
    featuresEn: [
      "320 x 160 mm universal module size",
      "High protection class LED lamp",
      "Reliable PCB design for outdoor stability",
      "Waterproof and moisture-proof sealed face",
      "High brightness with strong heat dissipation",
      "High refresh rate and grayscale output",
      "Compatible replacement for P2.5 ~ P8 LC series",
      "Supports 45 deg tangent angle",
    ],
    featuresKm: [
      "320 x 160 mm universal module size",
      "High protection class LED lamp",
      "Reliable PCB design for outdoor stability",
      "Waterproof and moisture-proof sealed face",
      "High brightness with strong heat dissipation",
      "High refresh rate and grayscale output",
      "Compatible replacement for P2.5 ~ P8 LC series",
      "Supports 45 deg tangent angle",
    ],
    applicationsEn: [
      "Large outdoor billboards",
      "Roadside screens",
      "Stadium displays",
      "Highway signage",
    ],
    applicationsKm: [
      "Large outdoor billboards",
      "Roadside screens",
      "Stadium displays",
      "Highway signage",
    ],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "5 mm",
        valueKm: "5 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD1921",
        valueKm: "SMD1921",
      },
      {
        labelEn: "Module Resolution (W x H)",
        labelKm: "Module Resolution (W x H)",
        valueEn: "64 x 32 = 2,048 pixels",
        valueKm: "64 x 32 = 2,048 pixels",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "40,000 dots/m2",
        valueKm: "40,000 dots/m2",
      },
      {
        labelEn: "Module Size (W x H x D)",
        labelKm: "Module Size (W x H x D)",
        valueEn: "320 x 160 x 18 mm",
        valueKm: "320 x 160 x 18 mm",
      },
      {
        labelEn: "Module Weight",
        labelKm: "Module Weight",
        valueEn: "0.48 +/- 0.02 kg",
        valueKm: "0.48 +/- 0.02 kg",
      },
      {
        labelEn: "HUB Type",
        labelKm: "HUB Type",
        valueEn: "HUB75",
        valueKm: "HUB75",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "4,500 - 5,000 cd/m2",
        valueKm: "4,500 - 5,000 cd/m2",
      },
      {
        labelEn: "Color Temperature",
        labelKm: "Color Temperature",
        valueEn: "6,500 K (Adjustable 1,000 K - 9,500 K)",
        valueKm: "6,500 K (Adjustable 1,000 K - 9,500 K)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 140 deg",
        valueKm: "140 deg / 140 deg",
      },
      {
        labelEn: "Brightness/Color Uniformity",
        labelKm: "Brightness/Color Uniformity",
        valueEn: ">= 98 %",
        valueKm: ">= 98 %",
      },
      {
        labelEn: "Contrast Ratio",
        labelKm: "Contrast Ratio",
        valueEn: "5,000 : 1",
        valueKm: "5,000 : 1",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "879 W/m2",
        valueKm: "879 W/m2",
      },
      {
        labelEn: "Typical Power Consumption",
        labelKm: "Typical Power Consumption",
        valueEn: "293 W/m2",
        valueKm: "293 W/m2",
      },
      {
        labelEn: "Input Voltage",
        labelKm: "Input Voltage",
        valueEn: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
        valueKm: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
      },
      {
        labelEn: "Frame Frequency",
        labelKm: "Frame Frequency",
        valueEn: "60 Hz",
        valueKm: "60 Hz",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: "3840 Hz",
        valueKm: "3840 Hz",
      },
      {
        labelEn: "Processing Depth",
        labelKm: "Processing Depth",
        valueEn: "12-14 bit",
        valueKm: "12-14 bit",
      },
      {
        labelEn: "Video Support",
        labelKm: "Video Support",
        valueEn: "2K HD / 4K UHD",
        valueKm: "2K HD / 4K UHD",
      },
      {
        labelEn: "Life Span",
        labelKm: "Life Span",
        valueEn: "100,000 hours",
        valueKm: "100,000 hours",
      },
      {
        labelEn: "Operating Temp / Humidity",
        labelKm: "Operating Temp / Humidity",
        valueEn: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
        valueKm: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
      },
      {
        labelEn: "Storage Temp / Humidity",
        labelKm: "Storage Temp / Humidity",
        valueEn: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
        valueKm: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
      },
      {
        labelEn: "Certifications",
        labelKm: "Certifications",
        valueEn: "BIS / CE / CB / ROHS / EAC",
        valueKm: "BIS / CE / CB / ROHS / EAC",
      },
    ],
    heroImage: "/images/products/p5-outdoor.webp",
    gallery: ["/images/products/p5-outdoor.webp"],
    tagsEn: ["P5", "Outdoor LED", "LED Module"],
    tagsKm: ["P5", "Outdoor LED", "LED Module"],
    seoTitleEn: "P5 Outdoor LED Display Module",
    seoTitleKm: "P5 Outdoor LED Display Module",
    seoDescEn:
      "P5 outdoor LED module with SMD1921 LEDs, 320 x 160 mm size, and 4,500-5,000 cd/m2 brightness.",
    seoDescKm:
      "P5 outdoor LED module with SMD1921 LEDs, 320 x 160 mm size, and 4,500-5,000 cd/m2 brightness.",
  },
  {
    id: "p6-outdoor-led-display",
    slug: "p6-outdoor-led-display",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P6 Outdoor LED Display",
    titleKm: "P6 Outdoor LED Display",
    shortDescEn:
      "P6 outdoor LED display with 192 x 192 mm module size and durable IP protection.",
    shortDescKm:
      "P6 outdoor LED display with 192 x 192 mm module size and durable IP protection.",
    descriptionEn:
      "The P6 outdoor LED display module is built for reliable performance in harsh environments. Its 192 x 192 mm size, high brightness, and high refresh rate make it a dependable choice for outdoor signage and advertising.",
    descriptionKm:
      "The P6 outdoor LED display module is built for reliable performance in harsh environments. Its 192 x 192 mm size, high brightness, and high refresh rate make it a dependable choice for outdoor signage and advertising.",
    featuresEn: [
      "192 x 192 mm universal module size",
      "High protection class LED lamp",
      "Waterproof sealed front design",
      "High brightness with strong heat dissipation",
      "High refresh and grayscale output",
      "Supports 45 deg tangent angle",
      "Customizable for harsh environments",
    ],
    featuresKm: [
      "192 x 192 mm universal module size",
      "High protection class LED lamp",
      "Waterproof sealed front design",
      "High brightness with strong heat dissipation",
      "High refresh and grayscale output",
      "Supports 45 deg tangent angle",
      "Customizable for harsh environments",
    ],
    applicationsEn: [
      "Outdoor billboards",
      "Public information screens",
      "Stadium signage",
      "Roadside advertising",
    ],
    applicationsKm: [
      "Outdoor billboards",
      "Public information screens",
      "Stadium signage",
      "Roadside advertising",
    ],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "6 mm",
        valueKm: "6 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD2727",
        valueKm: "SMD2727",
      },
      {
        labelEn: "Module Resolution (W x H)",
        labelKm: "Module Resolution (W x H)",
        valueEn: "32 x 32 = 1,024 pixels",
        valueKm: "32 x 32 = 1,024 pixels",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "27,750 dots/m2",
        valueKm: "27,750 dots/m2",
      },
      {
        labelEn: "Module Size (W x H x D)",
        labelKm: "Module Size (W x H x D)",
        valueEn: "192 x 192 x 18 mm",
        valueKm: "192 x 192 x 18 mm",
      },
      {
        labelEn: "Module Weight",
        labelKm: "Module Weight",
        valueEn: "0.35 +/- 0.02 kg",
        valueKm: "0.35 +/- 0.02 kg",
      },
      {
        labelEn: "HUB Type",
        labelKm: "HUB Type",
        valueEn: "HUB75",
        valueKm: "HUB75",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "4,500 - 5,000 cd/m2",
        valueKm: "4,500 - 5,000 cd/m2",
      },
      {
        labelEn: "Color Temperature",
        labelKm: "Color Temperature",
        valueEn: "6,500 K (Adjustable 1,000 K - 9,500 K)",
        valueKm: "6,500 K (Adjustable 1,000 K - 9,500 K)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 140 deg",
        valueKm: "140 deg / 140 deg",
      },
      {
        labelEn: "Brightness/Color Uniformity",
        labelKm: "Brightness/Color Uniformity",
        valueEn: ">= 98 %",
        valueKm: ">= 98 %",
      },
      {
        labelEn: "Contrast Ratio",
        labelKm: "Contrast Ratio",
        valueEn: "5,000 : 1",
        valueKm: "5,000 : 1",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "895 W/m2",
        valueKm: "895 W/m2",
      },
      {
        labelEn: "Typical Power Consumption",
        labelKm: "Typical Power Consumption",
        valueEn: "268 W/m2",
        valueKm: "268 W/m2",
      },
      {
        labelEn: "Input Voltage",
        labelKm: "Input Voltage",
        valueEn: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
        valueKm: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
      },
      {
        labelEn: "Frame Frequency",
        labelKm: "Frame Frequency",
        valueEn: "60 Hz",
        valueKm: "60 Hz",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: "3840 Hz",
        valueKm: "3840 Hz",
      },
      {
        labelEn: "Processing Depth",
        labelKm: "Processing Depth",
        valueEn: "12-14 bit",
        valueKm: "12-14 bit",
      },
      {
        labelEn: "Video Support",
        labelKm: "Video Support",
        valueEn: "2K HD / 4K UHD",
        valueKm: "2K HD / 4K UHD",
      },
      {
        labelEn: "Life Span",
        labelKm: "Life Span",
        valueEn: "100,000 hours",
        valueKm: "100,000 hours",
      },
      {
        labelEn: "Operating Temp / Humidity",
        labelKm: "Operating Temp / Humidity",
        valueEn: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
        valueKm: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
      },
      {
        labelEn: "Storage Temp / Humidity",
        labelKm: "Storage Temp / Humidity",
        valueEn: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
        valueKm: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
      },
      {
        labelEn: "Certifications",
        labelKm: "Certifications",
        valueEn: "BIS / CE / CB / ROHS / EAC",
        valueKm: "BIS / CE / CB / ROHS / EAC",
      },
    ],
    heroImage: "/images/products/p6-outdoor.webp",
    gallery: ["/images/products/p6-outdoor.webp"],
    tagsEn: ["P6", "Outdoor LED", "LED Display"],
    tagsKm: ["P6", "Outdoor LED", "LED Display"],
    seoTitleEn: "P6 Outdoor LED Display | High Brightness & Weatherproof",
    seoTitleKm: "P6 Outdoor LED Display | High Brightness & Weatherproof",
    seoDescEn:
      "P6 outdoor LED display with SMD2727 LEDs, 192 x 192 mm module size, and 4,500-5,000 cd/m2 brightness.",
    seoDescKm:
      "P6 outdoor LED display with SMD2727 LEDs, 192 x 192 mm module size, and 4,500-5,000 cd/m2 brightness.",
  },
  {
    id: "p6-67-outdoor-led-module",
    slug: "p6-67-outdoor-led-display-module",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P6.67 Outdoor LED Display Module",
    titleKm: "P6.67 Outdoor LED Display Module",
    shortDescEn:
      "P6.67 outdoor LED module with 320 x 160 mm size for cost-efficient outdoor signage.",
    shortDescKm:
      "P6.67 outdoor LED module with 320 x 160 mm size for cost-efficient outdoor signage.",
    descriptionEn:
      "The P6.67 outdoor LED display module delivers balanced clarity and affordability for large-scale outdoor signage. Its universal size, high refresh rate, and sealed protection ensure dependable performance.",
    descriptionKm:
      "The P6.67 outdoor LED display module delivers balanced clarity and affordability for large-scale outdoor signage. Its universal size, high refresh rate, and sealed protection ensure dependable performance.",
    featuresEn: [
      "320 x 160 mm universal module size",
      "High protection class LED lamp",
      "Waterproof sealed front design",
      "High brightness with strong heat dissipation",
      "High refresh and grayscale output",
      "Compatible replacement for P2.5 ~ P8 LC series",
      "Supports 45 deg tangent angle",
    ],
    featuresKm: [
      "320 x 160 mm universal module size",
      "High protection class LED lamp",
      "Waterproof sealed front design",
      "High brightness with strong heat dissipation",
      "High refresh and grayscale output",
      "Compatible replacement for P2.5 ~ P8 LC series",
      "Supports 45 deg tangent angle",
    ],
    applicationsEn: [
      "Outdoor billboards",
      "Highway signage",
      "Public information displays",
      "Commercial advertising",
    ],
    applicationsKm: [
      "Outdoor billboards",
      "Highway signage",
      "Public information displays",
      "Commercial advertising",
    ],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "6.667 mm",
        valueKm: "6.667 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD2727",
        valueKm: "SMD2727",
      },
      {
        labelEn: "Module Resolution (W x H)",
        labelKm: "Module Resolution (W x H)",
        valueEn: "48 x 24 = 1,152 pixels",
        valueKm: "48 x 24 = 1,152 pixels",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "22,500 dots/m2",
        valueKm: "22,500 dots/m2",
      },
      {
        labelEn: "Module Size (W x H x D)",
        labelKm: "Module Size (W x H x D)",
        valueEn: "320 x 160 x 18 mm",
        valueKm: "320 x 160 x 18 mm",
      },
      {
        labelEn: "Module Weight",
        labelKm: "Module Weight",
        valueEn: "0.45 +/- 0.02 kg",
        valueKm: "0.45 +/- 0.02 kg",
      },
      {
        labelEn: "HUB Type",
        labelKm: "HUB Type",
        valueEn: "HUB75",
        valueKm: "HUB75",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "4,500 - 5,000 cd/m2",
        valueKm: "4,500 - 5,000 cd/m2",
      },
      {
        labelEn: "Color Temperature",
        labelKm: "Color Temperature",
        valueEn: "6,500 K (Adjustable 1,000 K - 9,500 K)",
        valueKm: "6,500 K (Adjustable 1,000 K - 9,500 K)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 140 deg",
        valueKm: "140 deg / 140 deg",
      },
      {
        labelEn: "Brightness/Color Uniformity",
        labelKm: "Brightness/Color Uniformity",
        valueEn: ">= 98 %",
        valueKm: ">= 98 %",
      },
      {
        labelEn: "Contrast Ratio",
        labelKm: "Contrast Ratio",
        valueEn: "5,000 : 1",
        valueKm: "5,000 : 1",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "879 W/m2",
        valueKm: "879 W/m2",
      },
      {
        labelEn: "Typical Power Consumption",
        labelKm: "Typical Power Consumption",
        valueEn: "293 W/m2",
        valueKm: "293 W/m2",
      },
      {
        labelEn: "Input Voltage",
        labelKm: "Input Voltage",
        valueEn: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
        valueKm: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
      },
      {
        labelEn: "Frame Frequency",
        labelKm: "Frame Frequency",
        valueEn: "60 Hz",
        valueKm: "60 Hz",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: "3840 Hz",
        valueKm: "3840 Hz",
      },
      {
        labelEn: "Processing Depth",
        labelKm: "Processing Depth",
        valueEn: "12-14 bit",
        valueKm: "12-14 bit",
      },
      {
        labelEn: "Video Support",
        labelKm: "Video Support",
        valueEn: "2K HD / 4K UHD",
        valueKm: "2K HD / 4K UHD",
      },
      {
        labelEn: "Life Span",
        labelKm: "Life Span",
        valueEn: "100,000 hours",
        valueKm: "100,000 hours",
      },
      {
        labelEn: "Operating Temp / Humidity",
        labelKm: "Operating Temp / Humidity",
        valueEn: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
        valueKm: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
      },
      {
        labelEn: "Storage Temp / Humidity",
        labelKm: "Storage Temp / Humidity",
        valueEn: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
        valueKm: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
      },
      {
        labelEn: "Certifications",
        labelKm: "Certifications",
        valueEn: "BIS / CE / CB / ROHS / EAC",
        valueKm: "BIS / CE / CB / ROHS / EAC",
      },
    ],
    heroImage: "/images/products/p6-67-outdoor.jpg",
    gallery: ["/images/products/p6-67-outdoor.jpg"],
    tagsEn: ["P6.67", "Outdoor LED", "LED Module"],
    tagsKm: ["P6.67", "Outdoor LED", "LED Module"],
    seoTitleEn: "P6.67 Outdoor LED Display Module",
    seoTitleKm: "P6.67 Outdoor LED Display Module",
    seoDescEn:
      "P6.67 outdoor LED module with SMD2727 LEDs, 320 x 160 mm size, and 4,500-5,000 cd/m2 brightness.",
    seoDescKm:
      "P6.67 outdoor LED module with SMD2727 LEDs, 320 x 160 mm size, and 4,500-5,000 cd/m2 brightness.",
  },
  {
    id: "p8-outdoor-led-display",
    slug: "p8-outdoor-led-display",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P8 Outdoor LED Display",
    titleKm: "P8 Outdoor LED Display",
    shortDescEn:
      "P8 outdoor LED display with 320 x 160 mm size for large advertising screens.",
    shortDescKm:
      "P8 outdoor LED display with 320 x 160 mm size for large advertising screens.",
    descriptionEn:
      "The P8 outdoor LED display module is designed for large-format outdoor signage with strong daylight visibility. Its rugged structure, high refresh rate, and stable brightness make it a dependable choice for advertising.",
    descriptionKm:
      "The P8 outdoor LED display module is designed for large-format outdoor signage with strong daylight visibility. Its rugged structure, high refresh rate, and stable brightness make it a dependable choice for advertising.",
    featuresEn: [
      "320 x 160 mm universal module size",
      "Waterproof sealed front protection",
      "High brightness with strong heat dissipation",
      "High refresh and grayscale output",
      "Compatible replacement for P2.5 ~ P8 LC series",
      "Supports 45 deg tangent angle",
      "Customizable for harsh environments",
    ],
    featuresKm: [
      "320 x 160 mm universal module size",
      "Waterproof sealed front protection",
      "High brightness with strong heat dissipation",
      "High refresh and grayscale output",
      "Compatible replacement for P2.5 ~ P8 LC series",
      "Supports 45 deg tangent angle",
      "Customizable for harsh environments",
    ],
    applicationsEn: [
      "Outdoor billboards",
      "Highway advertising",
      "Public information screens",
      "Large signage",
    ],
    applicationsKm: [
      "Outdoor billboards",
      "Highway advertising",
      "Public information screens",
      "Large signage",
    ],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "8 mm",
        valueKm: "8 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD2727",
        valueKm: "SMD2727",
      },
      {
        labelEn: "Module Resolution (W x H)",
        labelKm: "Module Resolution (W x H)",
        valueEn: "40 x 20 = 800 pixels",
        valueKm: "40 x 20 = 800 pixels",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "15,625 dots/m2",
        valueKm: "15,625 dots/m2",
      },
      {
        labelEn: "Module Size (W x H x D)",
        labelKm: "Module Size (W x H x D)",
        valueEn: "320 x 160 x 18.5 mm",
        valueKm: "320 x 160 x 18.5 mm",
      },
      {
        labelEn: "Module Weight",
        labelKm: "Module Weight",
        valueEn: "0.48 +/- 0.02 kg",
        valueKm: "0.48 +/- 0.02 kg",
      },
      {
        labelEn: "HUB Type",
        labelKm: "HUB Type",
        valueEn: "HUB75",
        valueKm: "HUB75",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "4,000 - 4,500 cd/m2",
        valueKm: "4,000 - 4,500 cd/m2",
      },
      {
        labelEn: "Color Temperature",
        labelKm: "Color Temperature",
        valueEn: "6,500 K (Adjustable 1,000 K - 9,500 K)",
        valueKm: "6,500 K (Adjustable 1,000 K - 9,500 K)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 140 deg",
        valueKm: "140 deg / 140 deg",
      },
      {
        labelEn: "Brightness/Color Uniformity",
        labelKm: "Brightness/Color Uniformity",
        valueEn: ">= 98 %",
        valueKm: ">= 98 %",
      },
      {
        labelEn: "Contrast Ratio",
        labelKm: "Contrast Ratio",
        valueEn: "5,000 : 1",
        valueKm: "5,000 : 1",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "879 W/m2",
        valueKm: "879 W/m2",
      },
      {
        labelEn: "Typical Power Consumption",
        labelKm: "Typical Power Consumption",
        valueEn: "293 W/m2",
        valueKm: "293 W/m2",
      },
      {
        labelEn: "Input Voltage",
        labelKm: "Input Voltage",
        valueEn: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
        valueKm: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
      },
      {
        labelEn: "Frame Frequency",
        labelKm: "Frame Frequency",
        valueEn: "60 Hz",
        valueKm: "60 Hz",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: "3840 Hz",
        valueKm: "3840 Hz",
      },
      {
        labelEn: "Processing Depth",
        labelKm: "Processing Depth",
        valueEn: "12-14 bit",
        valueKm: "12-14 bit",
      },
      {
        labelEn: "Video Support",
        labelKm: "Video Support",
        valueEn: "2K HD / 4K UHD",
        valueKm: "2K HD / 4K UHD",
      },
      {
        labelEn: "Life Span",
        labelKm: "Life Span",
        valueEn: "100,000 hours",
        valueKm: "100,000 hours",
      },
      {
        labelEn: "Operating Temp / Humidity",
        labelKm: "Operating Temp / Humidity",
        valueEn: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
        valueKm: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
      },
      {
        labelEn: "Storage Temp / Humidity",
        labelKm: "Storage Temp / Humidity",
        valueEn: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
        valueKm: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
      },
      {
        labelEn: "Certifications",
        labelKm: "Certifications",
        valueEn: "BIS / CE / CB / ROHS / EAC",
        valueKm: "BIS / CE / CB / ROHS / EAC",
      },
    ],
    heroImage: "/images/products/p8-outdoor.webp",
    gallery: ["/images/products/p8-outdoor.webp"],
    tagsEn: ["P8", "Outdoor LED", "LED Display"],
    tagsKm: ["P8", "Outdoor LED", "LED Display"],
    seoTitleEn: "P8 Outdoor LED Display Screen for Advertising",
    seoTitleKm: "P8 Outdoor LED Display Screen for Advertising",
    seoDescEn:
      "P8 outdoor LED display with SMD2727 LEDs, 320 x 160 mm size, and 4,000-4,500 cd/m2 brightness.",
    seoDescKm:
      "P8 outdoor LED display with SMD2727 LEDs, 320 x 160 mm size, and 4,000-4,500 cd/m2 brightness.",
  },
  {
    id: "p10-outdoor-led-sign-board",
    slug: "p10-outdoor-led-sign-board-price-in-bd",
    categoryIds: ["led_display", "outdoor_led_display"],
    primaryCategoryId: "outdoor_led_display",
    titleEn: "P10 Outdoor LED Sign Board",
    titleKm: "P10 Outdoor LED Sign Board",
    shortDescEn:
      "P10 outdoor LED sign board for long-distance viewing and budget-friendly advertising.",
    shortDescKm:
      "P10 outdoor LED sign board for long-distance viewing and budget-friendly advertising.",
    descriptionEn:
      "The P10 outdoor LED sign board is optimized for large-format, long-distance viewing with reliable weather protection. Its SMD3535 LEDs and efficient power use make it a cost-effective solution for highway and billboard signage.",
    descriptionKm:
      "The P10 outdoor LED sign board is optimized for large-format, long-distance viewing with reliable weather protection. Its SMD3535 LEDs and efficient power use make it a cost-effective solution for highway and billboard signage.",
    featuresEn: [
      "320 x 160 mm universal module size",
      "High protection class LED lamp",
      "Waterproof sealed front design",
      "High brightness with strong heat dissipation",
      "High refresh and grayscale output",
      "Compatible replacement for P2.5 ~ P8 LC series",
      "Supports 45 deg tangent angle",
    ],
    featuresKm: [
      "320 x 160 mm universal module size",
      "High protection class LED lamp",
      "Waterproof sealed front design",
      "High brightness with strong heat dissipation",
      "High refresh and grayscale output",
      "Compatible replacement for P2.5 ~ P8 LC series",
      "Supports 45 deg tangent angle",
    ],
    applicationsEn: [
      "Highway billboards",
      "Roadside advertising",
      "Large outdoor signage",
      "Public information screens",
    ],
    applicationsKm: [
      "Highway billboards",
      "Roadside advertising",
      "Large outdoor signage",
      "Public information screens",
    ],
    specs: [
      {
        labelEn: "Pixel Pitch",
        labelKm: "Pixel Pitch",
        valueEn: "10 mm",
        valueKm: "10 mm",
      },
      {
        labelEn: "LED Type",
        labelKm: "LED Type",
        valueEn: "SMD3535",
        valueKm: "SMD3535",
      },
      {
        labelEn: "Module Resolution (W x H)",
        labelKm: "Module Resolution (W x H)",
        valueEn: "32 x 16 = 512 pixels",
        valueKm: "32 x 16 = 512 pixels",
      },
      {
        labelEn: "Pixel Density",
        labelKm: "Pixel Density",
        valueEn: "10,000 dots/m2",
        valueKm: "10,000 dots/m2",
      },
      {
        labelEn: "Module Size (W x H x D)",
        labelKm: "Module Size (W x H x D)",
        valueEn: "320 x 160 x 18 mm",
        valueKm: "320 x 160 x 18 mm",
      },
      {
        labelEn: "Module Weight",
        labelKm: "Module Weight",
        valueEn: "0.47 +/- 0.02 kg",
        valueKm: "0.47 +/- 0.02 kg",
      },
      {
        labelEn: "HUB Type",
        labelKm: "HUB Type",
        valueEn: "HUB75",
        valueKm: "HUB75",
      },
      {
        labelEn: "Brightness",
        labelKm: "Brightness",
        valueEn: "4,000 - 4,500 cd/m2",
        valueKm: "4,000 - 4,500 cd/m2",
      },
      {
        labelEn: "Color Temperature",
        labelKm: "Color Temperature",
        valueEn: "6,500 K (Adjustable 1,000 K - 9,500 K)",
        valueKm: "6,500 K (Adjustable 1,000 K - 9,500 K)",
      },
      {
        labelEn: "Viewing Angle (H/V)",
        labelKm: "Viewing Angle (H/V)",
        valueEn: "140 deg / 140 deg",
        valueKm: "140 deg / 140 deg",
      },
      {
        labelEn: "Brightness/Color Uniformity",
        labelKm: "Brightness/Color Uniformity",
        valueEn: ">= 98 %",
        valueKm: ">= 98 %",
      },
      {
        labelEn: "Contrast Ratio",
        labelKm: "Contrast Ratio",
        valueEn: "5,000 : 1",
        valueKm: "5,000 : 1",
      },
      {
        labelEn: "Max Power Consumption",
        labelKm: "Max Power Consumption",
        valueEn: "645 W/m2",
        valueKm: "645 W/m2",
      },
      {
        labelEn: "Typical Power Consumption",
        labelKm: "Typical Power Consumption",
        valueEn: "215 W/m2",
        valueKm: "215 W/m2",
      },
      {
        labelEn: "Input Voltage",
        labelKm: "Input Voltage",
        valueEn: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
        valueKm: "AC 90-132 V / AC 186-264 V (47-63 Hz)",
      },
      {
        labelEn: "Frame Frequency",
        labelKm: "Frame Frequency",
        valueEn: "60 Hz",
        valueKm: "60 Hz",
      },
      {
        labelEn: "Refresh Rate",
        labelKm: "Refresh Rate",
        valueEn: "3840 Hz",
        valueKm: "3840 Hz",
      },
      {
        labelEn: "Processing Depth",
        labelKm: "Processing Depth",
        valueEn: "12-14 bit",
        valueKm: "12-14 bit",
      },
      {
        labelEn: "Video Support",
        labelKm: "Video Support",
        valueEn: "2K HD / 4K UHD",
        valueKm: "2K HD / 4K UHD",
      },
      {
        labelEn: "Life Span",
        labelKm: "Life Span",
        valueEn: "100,000 hours",
        valueKm: "100,000 hours",
      },
      {
        labelEn: "Operating Temp / Humidity",
        labelKm: "Operating Temp / Humidity",
        valueEn: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
        valueKm: "-20 C ~ 50 C / 10% ~ 80% RH (No Condensation)",
      },
      {
        labelEn: "Storage Temp / Humidity",
        labelKm: "Storage Temp / Humidity",
        valueEn: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
        valueKm: "-20 C ~ 55 C / 10% ~ 85% RH (No Condensation)",
      },
      {
        labelEn: "Certifications",
        labelKm: "Certifications",
        valueEn: "BIS / CE / CB / ROHS / EAC",
        valueKm: "BIS / CE / CB / ROHS / EAC",
      },
    ],
    heroImage: "/images/products/p10-outdoor.webp",
    gallery: ["/images/products/p10-outdoor.webp"],
    tagsEn: ["P10", "Outdoor LED", "LED Sign Board"],
    tagsKm: ["P10", "Outdoor LED", "LED Sign Board"],
    seoTitleEn: "P10 Outdoor LED Sign Board Price in Bangladesh",
    seoTitleKm: "P10 Outdoor LED Sign Board Price in Bangladesh",
    seoDescEn:
      "P10 outdoor LED sign board with SMD3535 LEDs, 320 x 160 mm size, and 4,000-4,500 cd/m2 brightness.",
    seoDescKm:
      "P10 outdoor LED sign board with SMD3535 LEDs, 320 x 160 mm size, and 4,000-4,500 cd/m2 brightness.",
  },
  {
    id: "interactive-screen-98",
    slug: "premium-quality-interactive-screen-98",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Premium Quality Interactive Screen 98\"",
    titleKm: "á¢ááááááá¢áááááááááá»ááá¶áááááá 98\"",
    shortDescEn: "Large format interactive flat panel for classrooms and boardrooms.",
    shortDescKm: "á¢ááááááá¢ááááááááááá ááá ááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
    descriptionEn:
      "Premium 98-inch interactive screen designed for smart classrooms, training rooms and large meeting spaces with multi-touch collaboration.",
    descriptionKm:
      "á¢ááááááá¢áááááááá 98\" ááááá¶áááááá¶ááááá á¬ááááááááááá»áááá áá¶áá½á multi-touchá",
    featuresEn: ["Large 98\" display", "Multi-touch collaboration", "Smart classroom use"],
    featuresKm: ["á¢áááááá 98\"", "Multi-touch", "ááááá¶áááááá¶ááááááááá¶ááá"],
    applicationsEn: ["Classroom", "Training room", "Boardroom"],
    applicationsKm: ["áááá¶ááááá", "ááááááááááá»áááááá¶á", "ááááááááááá»á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "98 inch",
        valueKm: "98 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (áá¶áá¼áá)",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["áááá¶ááá¼á", "áá¶áá¢áááá"],
    seoTitleEn: "98\" Interactive Smart Board in Cambodia",
    seoTitleKm: "áááá¶ááá¼á 98\" ááááááá»áá¶",
    seoDescEn:
      "Premium 98-inch interactive screen for smart classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "á¢ááááááá¢áááááááá 98\" ááááá¶áááááá¶ááááá áá·áááááááááááá»á ááááááá»áá¶á",
  },
  {
    id: "interactive-screen-85",
    slug: "premium-quality-interactive-screen-85",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Premium Quality Interactive Screen 85\"",
    titleKm: "á¢ááááááá¢áááááááááá»ááá¶áááááá 85\"",
    shortDescEn: "Large interactive screen for classrooms and boardrooms.",
    shortDescKm: "á¢ááááááá¢ááááááááááá ááá ááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
    descriptionEn:
      "Premium 85-inch interactive screen for smart classrooms and meeting rooms.",
    descriptionKm:
      "á¢ááááááá¢áááááááá 85\" ááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
    featuresEn: ["85\" display", "Multi-touch", "Smart classroom"],
    featuresKm: ["á¢áááááá 85\"", "Multi-touch", "ááááá¶áááááá¶ááááááááá¶ááá"],
    applicationsEn: ["Classroom", "Training room", "Boardroom"],
    applicationsKm: ["áááá¶ááááá", "ááááááááááá»áááááá¶á", "ááááááááááá»á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "85 inch",
        valueKm: "85 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (áá¶áá¼áá)",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["áááá¶ááá¼á", "áá¶áá¢áááá"],
    seoTitleEn: "85\" Interactive Smart Board in Cambodia",
    seoTitleKm: "áááá¶ááá¼á 85\" ááááááá»áá¶",
    seoDescEn:
      "Premium 85-inch interactive screen for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "á¢ááááááá¢áááááááá 85\" ááááá¶áááááá¶ááááá áá·áááááááááááá»á ááááááá»áá¶á",
  },
  {
    id: "interactive-screen-75",
    slug: "premium-quality-interactive-screen-75",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Premium Quality Interactive Screen 75\"",
    titleKm: "á¢ááááááá¢áááááááááá»ááá¶áááááá 75\"",
    shortDescEn: "Interactive screen for classrooms and meetings.",
    shortDescKm: "á¢ááááááá¢ááááááááááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
    descriptionEn:
      "Premium 75-inch interactive screen for smart classrooms and meeting rooms.",
    descriptionKm:
      "á¢ááááááá¢áááááááá 75\" ááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
    featuresEn: ["75\" display", "Multi-touch", "Smart classroom"],
    featuresKm: ["á¢áááááá 75\"", "Multi-touch", "ááááá¶áááááá¶ááááááááá¶ááá"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["áááá¶ááááá", "ááááááááááá»á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "75 inch",
        valueKm: "75 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (áá¶áá¼áá)",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["áááá¶ááá¼á", "áá¶áá¢áááá"],
    seoTitleEn: "75\" Interactive Smart Board in Cambodia",
    seoTitleKm: "áááá¶ááá¼á 75\" ááááááá»áá¶",
    seoDescEn:
      "Premium 75-inch interactive screen for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "á¢ááááááá¢áááááááá 75\" ááááá¶áááááá¶ááááá áá·áááááááááááá»á ááááááá»áá¶á",
  },
  {
    id: "interactive-screen-65",
    slug: "premium-quality-interactive-screen-65",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Premium Quality Interactive Screen 65\"",
    titleKm: "á¢ááááááá¢áááááááááá»ááá¶áááááá 65\"",
    shortDescEn: "Interactive screen for classrooms and meetings.",
    shortDescKm: "á¢ááááááá¢ááááááááááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
    descriptionEn:
      "Premium 65-inch interactive screen for smart classrooms and meeting rooms.",
    descriptionKm:
      "á¢ááááááá¢áááááááá 65\" ááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
    featuresEn: ["65\" display", "Multi-touch", "Smart classroom"],
    featuresKm: ["á¢áááááá 65\"", "Multi-touch", "ááááá¶áááááá¶ááááááááá¶ááá"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["áááá¶ááááá", "ááááááááááá»á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "65 inch",
        valueKm: "65 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (áá¶áá¼áá)",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["áááá¶ááá¼á", "áá¶áá¢áááá"],
    seoTitleEn: "65\" Interactive Smart Board in Cambodia",
    seoTitleKm: "áááá¶ááá¼á 65\" ááááááá»áá¶",
    seoDescEn:
      "Premium 65-inch interactive screen for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "á¢ááááááá¢áááááááá 65\" ááááá¶áááááá¶ááááá áá·áááááááááááá»á ááááááá»áá¶á",
  },
  {
    id: "interactive-screen-55",
    slug: "premium-quality-interactive-screen-55",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Premium Quality Interactive Screen 55\"",
    titleKm: "á¢ááááááá¢áááááááááá»ááá¶áááááá 55\"",
    shortDescEn: "Compact interactive screen for small rooms.",
    shortDescKm: "á¢ááááááá¢ááááááááááá ááá¼á ááááá¶áááááááááá¼áá",
    descriptionEn:
      "Premium 55-inch interactive screen for small classrooms and meeting rooms.",
    descriptionKm:
      "á¢ááááááá¢áááááááá 55\" ááááá¶áááááá¶ááááááá¼á áá·áááááááááááá»ááá¼áá",
    featuresEn: ["55\" display", "Multi-touch", "Compact size"],
    featuresKm: ["á¢áááááá 55\"", "Multi-touch", "ááá ááá¼á"],
    applicationsEn: ["Small classroom", "Meeting room"],
    applicationsKm: ["áááá¶ááááááá¼á", "ááááááááááá»ááá¼á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "55 inch",
        valueKm: "55 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (áá¶áá¼áá)",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["áááá¶ááá¼á", "áá¶áá¢áááá"],
    seoTitleEn: "55\" Interactive Smart Board in Cambodia",
    seoTitleKm: "áááá¶ááá¼á 55\" ááááááá»áá¶",
    seoDescEn:
      "Premium 55-inch interactive screen for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "á¢ááááááá¢áááááááá 55\" ááááá¶áááááá¶ááááá áá·áááááááááááá»á ááááááá»áá¶á",
  },
  {
    id: "vanwinda-75",
    slug: "vanwinda-smart-board-4k-75",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "VANWINDA Smart Board 4K UHD 75\"",
    titleKm: "VANWINDA Smart Board 4K UHD 75\"",
    shortDescEn: "Smart board for classrooms and meeting rooms.",
    shortDescKm: "áááá¶ááá¼áááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
    descriptionEn:
      "VANWINDA 75-inch 4K smart board with multi-touch features for education and collaboration.",
    descriptionKm:
      "VANWINDA 75\" 4K ááááá¶áááá¶ááá áá¶ááá·ááá¶áá¢ááááá",
    featuresEn: ["4K UHD", "Multi-touch", "Screen sharing support"],
    featuresKm: ["4K UHD", "Multi-touch", "Screen sharing"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["áááá¶ááááá", "ááááááááááá»á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "75 inch",
        valueKm: "75 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD",
        valueKm: "4K UHD",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["áááá¶ááá¼á", "áá¶áá¢áááá"],
    seoTitleEn: "VANWINDA 75\" 4K Smart Board in Cambodia",
    seoTitleKm: "VANWINDA 75\" 4K áááá¶ááá¼á ááááááá»áá¶",
    seoDescEn:
      "VANWINDA 75-inch 4K smart board for classrooms and meetings in Cambodia.",
    seoDescKm:
      "VANWINDA 75\" 4K ááááá¶áááááá¶ááááá áá·áááááááááááá»á ááááááá»áá¶á",
  },
  {
    id: "vanwinda-65",
    slug: "vanwinda-smart-board-4k-65",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "VANWINDA Smart Board 4K UHD 65\"",
    titleKm: "VANWINDA Smart Board 4K UHD 65\"",
    shortDescEn: "65-inch smart board for classrooms and meeting rooms.",
    shortDescKm: "áááá¶ááá¼á 65\" ááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
    descriptionEn:
      "VANWINDA 65-inch 4K smart board with multi-touch for education and collaboration.",
    descriptionKm:
      "VANWINDA 65\" 4K ááááá¶áááá¶ááá áá¶á áá·ááá¶áá¢ááááá",
    featuresEn: ["4K UHD", "Multi-touch", "Screen sharing support"],
    featuresKm: ["4K UHD", "Multi-touch", "Screen sharing"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["áááá¶ááááá", "ááááááááááá»á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "65 inch",
        valueKm: "65 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD",
        valueKm: "4K UHD",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["áááá¶ááá¼á", "áá¶áá¢áááá"],
    seoTitleEn: "VANWINDA 65\" 4K Smart Board in Cambodia",
    seoTitleKm: "VANWINDA 65\" 4K áááá¶ááá¼á ááááááá»áá¶",
    seoDescEn:
      "VANWINDA 65-inch 4K smart board for classrooms and meetings in Cambodia.",
    seoDescKm:
      "VANWINDA 65\" 4K ááááá¶áááááá¶ááááá áá·áááááááááááá»á ááááááá»áá¶á",
  },
  {
    id: "vanwinda-86",
    slug: "vanwinda-smart-board-4k-86",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "VANWINDA Smart Board 4K UHD 86\"",
    titleKm: "VANWINDA Smart Board 4K UHD 86\"",
    shortDescEn: "Large 86-inch smart board for big classrooms.",
    shortDescKm: "áááá¶ááá¼á 86\" ááááá¶áááááá¶ááááááááá",
    descriptionEn:
      "VANWINDA 86-inch 4K smart board with multi-touch for training and large meeting rooms.",
    descriptionKm:
      "VANWINDA 86\" 4K ááááá¶áááá¶áááááá»áááááá¶á áá·áááááááááááá»ááááá",
    featuresEn: ["Large 86\" display", "Multi-touch", "4K UHD"],
    featuresKm: ["á¢áááááá 86\"", "Multi-touch", "4K UHD"],
    applicationsEn: ["Training room", "Conference room"],
    applicationsKm: ["ááááááááááá»áááááá¶á", "ááááááááááá»á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "86 inch",
        valueKm: "86 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD",
        valueKm: "4K UHD",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Training"],
    tagsKm: ["áááá¶ááá¼á", "ááááá»áááááá¶á"],
    seoTitleEn: "VANWINDA 86\" 4K Smart Board in Cambodia",
    seoTitleKm: "VANWINDA 86\" 4K áááá¶ááá¼á ááááááá»áá¶",
    seoDescEn:
      "VANWINDA 86-inch 4K smart board for large classrooms and training rooms in Cambodia.",
    seoDescKm:
      "VANWINDA 86\" 4K ááááá¶áááááá¶ááááááá áá·áááááááááááá»áááááá¶á ááááááá»áá¶á",
  },
  {
    id: "skyworth-86",
    slug: "skyworth-smart-board-4k-86",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Skyworth Smart Board 4K 86\"",
    titleKm: "Skyworth Smart Board 4K 86\"",
    shortDescEn: "Large 86-inch smart board for premium classrooms.",
    shortDescKm: "áááá¶ááá¼á 86\" ááááá¶áááááá¶ááááááá»ááá¶ááááááá",
    descriptionEn:
      "Skyworth 86-inch 4K smart board for premium classrooms and large meeting rooms.",
    descriptionKm:
      "Skyworth 86\" 4K ááááá¶áááááá¶ááááááá»ááá¶áááááá áá·áááááááááááá»ááááá",
    featuresEn: ["Large screen", "4K UHD", "Multi-touch"],
    featuresKm: ["á¢áááááááá", "4K UHD", "Multi-touch"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["áááá¶ááááá", "ááááááááááá»á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "86 inch",
        valueKm: "86 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD",
        valueKm: "4K UHD",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["áááá¶ááá¼á", "áá¶áá¢áááá"],
    seoTitleEn: "Skyworth 86\" 4K Smart Board in Cambodia",
    seoTitleKm: "Skyworth 86\" 4K áááá¶ááá¼á ááááááá»áá¶",
    seoDescEn:
      "Skyworth 86-inch 4K smart board for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "Skyworth 86\" 4K ááááá¶áááááá¶ááááá áá·áááááááááááá»á ááááááá»áá¶á",
  },
  {
    id: "skyworth-75",
    slug: "skyworth-smart-board-4k-75",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Skyworth Smart Board 4K 75\"",
    titleKm: "Skyworth Smart Board 4K 75\"",
    shortDescEn: "75-inch smart board for classrooms and training rooms.",
    shortDescKm: "áááá¶ááá¼á 75\" ááááá¶áááááá¶ááááá áá·áááááááááááá»áááááá¶áá",
    descriptionEn:
      "Skyworth 75-inch 4K smart board for education, training and meeting spaces.",
    descriptionKm:
      "Skyworth 75\" 4K ááááá¶áááá¶áá¢áááá áá·áááááááááááá»áá",
    featuresEn: ["4K UHD", "Multi-touch", "Classroom ready"],
    featuresKm: ["4K UHD", "Multi-touch", "ááááá¶áááááá¶ááááá"],
    applicationsEn: ["Classroom", "Training room"],
    applicationsKm: ["áááá¶ááááá", "ááááááááááá»áááááá¶á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "75 inch",
        valueKm: "75 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD",
        valueKm: "4K UHD",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board", "Education"],
    tagsKm: ["áááá¶ááá¼á", "áá¶áá¢áááá"],
    seoTitleEn: "Skyworth 75\" 4K Smart Board in Cambodia",
    seoTitleKm: "Skyworth 75\" 4K áááá¶ááá¼á ááááááá»áá¶",
    seoDescEn:
      "Skyworth 75-inch 4K smart board for classrooms and training rooms in Cambodia.",
    seoDescKm:
      "Skyworth 75\" 4K ááááá¶áááááá¶ááááá áá·áááááááááááá»áááááá¶á ááááááá»áá¶á",
  },
  {
    id: "smart-board-86",
    slug: "smart-board-86",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Smart Board 86\"",
    titleKm: "áááá¶ááá¼á 86\"",
    shortDescEn: "86-inch interactive smart board.",
    shortDescKm: "áááá¶ááá¼áá¢áááááááá 86\"á",
    descriptionEn:
      "General-purpose 86-inch smart board for classrooms and meeting spaces.",
    descriptionKm:
      "áááá¶ááá¼á 86\" ááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
    featuresEn: ["Large screen", "Interactive", "4K UHD (typical)"],
    featuresKm: ["á¢áááááááá", "á¢áááááááá", "4K UHD (áá¶áá¼áá)"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["áááá¶ááááá", "ááááááááááá»á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "86 inch",
        valueKm: "86 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (áá¶áá¼áá)",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board"],
    tagsKm: ["áááá¶ááá¼á"],
    seoTitleEn: "Smart Board 86\" in Cambodia",
    seoTitleKm: "áááá¶ááá¼á 86\" ááááááá»áá¶",
    seoDescEn:
      "86-inch interactive smart board for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "áááá¶ááá¼á 86\" ááááá¶áááááá¶ááááá áá·áááááááááááá»á ááááááá»áá¶á",
  },
  {
    id: "smart-board-75",
    slug: "smart-board-75",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Smart Board 75\"",
    titleKm: "áááá¶ááá¼á 75\"",
    shortDescEn: "75-inch interactive smart board.",
    shortDescKm: "áááá¶ááá¼áá¢áááááááá 75\"á",
    descriptionEn:
      "General-purpose 75-inch smart board for classrooms and meeting spaces.",
    descriptionKm:
      "áááá¶ááá¼á 75\" ááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
    featuresEn: ["Interactive display", "4K UHD (typical)", "Classroom ready"],
    featuresKm: ["á¢áááááááá", "4K UHD (áá¶áá¼áá)", "ááááá¶áááááá¶ááááá"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["áááá¶ááááá", "ááááááááááá»á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "75 inch",
        valueKm: "75 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (áá¶áá¼áá)",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board"],
    tagsKm: ["áááá¶ááá¼á"],
    seoTitleEn: "Smart Board 75\" in Cambodia",
    seoTitleKm: "áááá¶ááá¼á 75\" ááááááá»áá¶",
    seoDescEn:
      "75-inch interactive smart board for classrooms and meetings in Cambodia.",
    seoDescKm:
      "áááá¶ááá¼á 75\" ááááá¶áááááá¶ááááá áá·áááááááááááá»á ááááááá»áá¶á",
  },
  {
    id: "smart-board-65",
    slug: "smart-board-65",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Smart Board 65\"",
    titleKm: "áááá¶ááá¼á 65\"",
    shortDescEn: "65-inch interactive smart board.",
    shortDescKm: "áááá¶ááá¼áá¢áááááááá 65\"á",
    descriptionEn:
      "General-purpose 65-inch smart board for classrooms and meeting spaces.",
    descriptionKm:
      "áááá¶ááá¼á 65\" ááááá¶áááááá¶ááááá áá·áááááááááááá»áá",
    featuresEn: ["Interactive display", "4K UHD (typical)", "Compact size"],
    featuresKm: ["á¢áááááááá", "4K UHD (áá¶áá¼áá)", "ááá ááááááá"],
    applicationsEn: ["Classroom", "Meeting room"],
    applicationsKm: ["áááá¶ááááá", "ááááááááááá»á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "65 inch",
        valueKm: "65 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (áá¶áá¼áá)",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board"],
    tagsKm: ["áááá¶ááá¼á"],
    seoTitleEn: "Smart Board 65\" in Cambodia",
    seoTitleKm: "áááá¶ááá¼á 65\" ááááááá»áá¶",
    seoDescEn:
      "65-inch interactive smart board for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "áááá¶ááá¼á 65\" ááááá¶áááááá¶ááááá áá·áááááááááááá»á ááááááá»áá¶á",
  },
  {
    id: "smart-board-55",
    slug: "smart-board-55",
    categoryIds: ["smart_board"],
    primaryCategoryId: "smart_board",
    titleEn: "Smart Board 55\"",
    titleKm: "áááá¶ááá¼á 55\"",
    shortDescEn: "55-inch interactive smart board.",
    shortDescKm: "áááá¶ááá¼áá¢áááááááá 55\"á",
    descriptionEn:
      "Compact 55-inch smart board for small classrooms and meeting rooms.",
    descriptionKm:
      "áááá¶ááá¼á 55\" ááááá¶áááááá¶ááááááá¼á áá·áááááááááááá»ááá¼áá",
    featuresEn: ["Compact size", "Interactive", "4K UHD (typical)"],
    featuresKm: ["ááá ááá¼á", "á¢áááááááá", "4K UHD (áá¶áá¼áá)"],
    applicationsEn: ["Small classroom", "Meeting room"],
    applicationsKm: ["áááá¶ááááááá¼á", "ááááááááááá»á"],
    specs: [
      {
        labelEn: "Screen Size",
        labelKm: "ááá áá¢áááááá",
        valueEn: "55 inch",
        valueKm: "55 á¢áá¸á",
      },
      {
        labelEn: "Resolution",
        labelKm: "áá»ááá¶ááááá á¶á",
        valueEn: "4K UHD (typical)",
        valueKm: "4K UHD (áá¶áá¼áá)",
      },
    ],
    heroImage:
      "/images/products/DSC07047-1.jpg",
    gallery: [
      "/images/products/DSC07047-1.jpg",
    ],
    tagsEn: ["Smart Board"],
    tagsKm: ["áááá¶ááá¼á"],
    seoTitleEn: "Smart Board 55\" in Cambodia",
    seoTitleKm: "áááá¶ááá¼á 55\" ááááááá»áá¶",
    seoDescEn:
      "55-inch interactive smart board for classrooms and meeting rooms in Cambodia.",
    seoDescKm:
      "áááá¶ááá¼á 55\" ááááá¶áááááá¶ááááá áá·áááááááááááá»á ááááááá»áá¶á",
  },
  {
    id: "turnstile-ds-q20",
    slug: "ds-q20-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-Q20 Turnstile Gate",
    titleKm: "áááááááá¶á Turnstile DS-Q20",
    shortDescEn: "Full-height turnstile gate for secure entry control.",
    shortDescKm: "áááááááá¶áááááááááá ááááá¶ááááááááááááá¼ááááá",
    descriptionEn:
      "DS-Q20 full-height turnstile gate for secure entry control in factories, offices and restricted areas. Durable design with smooth pedestrian flow.",
    descriptionKm:
      "áááááááá¶á DS-Q20 ááááááááá ááááá¶ááááááááááááá¼ááááááááááááá áá¶áá·áá¶ááá áá·áááááááá¶ááá¶ááá¶ááá¶áá",
    featuresEn: ["Full-height security", "Durable construction", "Smooth flow"],
    featuresKm: ["áá»ááááá·áá¶áááááááááá", "áááá¶á¢á¶áá»áá¶áááá", "áááá¶ááá¼á"],
    applicationsEn: ["Factory", "Office", "Restricted area"],
    applicationsKm: ["ááááááá", "áá¶áá·áá¶ááá", "ááááááá¶ááá¶ááá¶ááá¶á"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "áááááááááá",
        valueEn: "Full-height turnstile",
        valueKm: "Turnstile ááááááááá",
      },
      {
        labelEn: "Integration",
        labelKm: "áá¶ááááá¶áá",
        valueEn: "Access control ready",
        valueKm: "á¢á¶ááááá¶áá Access Control",
      },
    ],
    heroImage:
      "/images/products/DS-Q20.jpg",
    gallery: ["/images/products/DS-Q20.jpg"],
    tagsEn: ["Security", "Turnstile"],
    tagsKm: ["áá»ááááá·áá¶á", "Turnstile"],
    seoTitleEn: "DS-Q20 Full Height Turnstile in Cambodia",
    seoTitleKm: "DS-Q20 Turnstile ááááááááá ááááááá»áá¶",
    seoDescEn:
      "DS-Q20 full-height turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "áááááááá¶á DS-Q20 ááááá¶ááááááááááááá¼áááááá¶ááá»ááááá·áá¶á ááááááá»áá¶á",
  },
  {
    id: "turnstile-ds-306",
    slug: "ds-306-double-side-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-306 Double Side Turnstile Gate",
    titleKm: "áááááááá¶á Turnstile DS-306",
    shortDescEn: "Double side turnstile for controlled entry.",
    shortDescKm: "Turnstile áá¸ááááá¼áááááá¶ááááááááááááá¼ááááá",
    descriptionEn:
      "DS-306 double side turnstile gate for secure entry control in offices, factories and venues.",
    descriptionKm:
      "áááááááá¶á DS-306 ááááá¶ááááááááááááá¼áááááááá»ááá¶áá·áá¶ááá áá·ááááááááá",
    featuresEn: ["Double side passage", "Durable build", "Access control ready"],
    featuresKm: ["áááááá¸ááááá¼á", "ááááá¹ááá¶ááááá¾áááá¶áá", "áááá¶áá Access Control áá¶á"],
    applicationsEn: ["Office", "Factory", "Venue"],
    applicationsKm: ["áá¶áá·áá¶ááá", "ááááááá", "áá¸áá¶áááá¶áá¶ááá"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "áááááááááá",
        valueEn: "Double side turnstile",
        valueKm: "Turnstile áá¸ááááá¼á",
      },
      {
        labelEn: "Integration",
        labelKm: "áá¶ááááá¶áá",
        valueEn: "Access control ready",
        valueKm: "á¢á¶ááááá¶áá Access Control",
      },
    ],
    heroImage:
      "/images/products/DS-Q20.jpg",
    gallery: ["/images/products/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "áá»ááááá·áá¶á"],
    seoTitleEn: "DS-306 Turnstile Gate in Cambodia",
    seoTitleKm: "áááááááá¶á DS-306 ááááááá»áá¶",
    seoDescEn:
      "DS-306 double side turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "áááááááá¶á DS-306 ááááá¶ááááááááááááá¼áááááá¶ááá»ááááá·áá¶á ááááááá»áá¶á",
  },
  {
    id: "turnstile-ds-1500f",
    slug: "ds-1500f-full-height-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-1500F Full Height Turnstile Gate",
    titleKm: "áááááááá¶á Turnstile DS-1500F",
    shortDescEn: "Full height turnstile for secure areas.",
    shortDescKm: "Turnstile áááááááááááááá¶ááááááááá¶ááá¶ááá¶ááá¶áá",
    descriptionEn:
      "DS-1500F full height turnstile gate for secure access control in restricted areas.",
    descriptionKm:
      "áááááááá¶á DS-1500F ááááááááá ááááá¶ááááááááá¶ááá¶ááá¶ááá¶áá",
    featuresEn: ["Full height security", "Durable frame", "Access control ready"],
    featuresKm: ["áá»ááááá·áá¶áááááááááá", "áááá¿áááá", "áááá¶áá Access Control áá¶á"],
    applicationsEn: ["Factory", "Industrial site", "Restricted area"],
    applicationsKm: ["ááááááá", "áá¸áá¶ááá§áááá¶á áááá", "ááááááá¶ááá¶ááá¶ááá¶á"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "áááááááááá",
        valueEn: "Full height turnstile",
        valueKm: "Turnstile ááááááááá",
      },
      {
        labelEn: "Integration",
        labelKm: "áá¶ááááá¶áá",
        valueEn: "Access control ready",
        valueKm: "á¢á¶ááááá¶áá Access Control",
      },
    ],
    heroImage:
      "/images/products/DS-Q20.jpg",
    gallery: ["/images/products/DS-Q20.jpg"],
    tagsEn: ["Full Height", "Security"],
    tagsKm: ["ááááááááá", "áá»ááááá·áá¶á"],
    seoTitleEn: "DS-1500F Full Height Turnstile in Cambodia",
    seoTitleKm: "DS-1500F Turnstile ááááááááá ááááááá»áá¶",
    seoDescEn:
      "DS-1500F full height turnstile gate for secure access control in Cambodia.",
    seoDescKm:
      "áááááááá¶á DS-1500F ááááá¶áááá¶áááááááááááá¼áááááá¶ááá»ááááá·áá¶á ááááááá»áá¶á",
  },
  {
    id: "turnstile-ds-2000d",
    slug: "ds-2000d-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-2000D Turnstile Gate",
    titleKm: "áááááááá¶á Turnstile DS-2000D",
    shortDescEn: "Durable turnstile for entry control.",
    shortDescKm: "Turnstile áááááááá¶ááááááááááááá¼ááááá",
    descriptionEn:
      "DS-2000D turnstile gate for secure access control in offices and public venues.",
    descriptionKm:
      "áááááááá¶á DS-2000D ááááá¶ááááááááááááá¼áááááááá¶áá·áá¶ááá áá·ááá¸áá¶áááá¶áá¶áááá",
    featuresEn: ["Secure entry", "Durable design", "Access control ready"],
    featuresKm: ["áá¼áááááá¶ááá»ááááá·áá¶á", "áááá¶ááá", "áááá¶áá Access Control áá¶á"],
    applicationsEn: ["Office", "Public venue"],
    applicationsKm: ["áá¶áá·áá¶ááá", "áá¸áá¶áááá¶áá¶ááá"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "áááááááááá",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "áá¶ááááá¶áá",
        valueEn: "Access control ready",
        valueKm: "á¢á¶ááááá¶áá Access Control",
      },
    ],
    heroImage:
      "/images/products/DS-Q20.jpg",
    gallery: ["/images/products/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "áá»ááááá·áá¶á"],
    seoTitleEn: "DS-2000D Turnstile Gate in Cambodia",
    seoTitleKm: "áááááááá¶á DS-2000D ááááááá»áá¶",
    seoDescEn:
      "DS-2000D turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "áááááááá¶á DS-2000D ááááá¶ááááááááááááá¼áááááá¶ááá»ááááá·áá¶á ááááááá»áá¶á",
  },
  {
    id: "turnstile-ds-2000f",
    slug: "ds-2000f-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-2000F Turnstile Gate",
    titleKm: "áááááááá¶á Turnstile DS-2000F",
    shortDescEn: "Turnstile gate for controlled entry.",
    shortDescKm: "Turnstile ááááá¶ááááááááááááá¼ááááá",
    descriptionEn:
      "DS-2000F turnstile gate for reliable access control in offices and facilities.",
    descriptionKm:
      "áááááááá¶á DS-2000F ááááá¶ááááááááááááá¼áááááááá¶áá·áá¶ááá áá·áá¢áá¶áá",
    featuresEn: ["Reliable entry control", "Durable build", "Access control ready"],
    featuresKm: ["ááááááááááá¼áááááá¶áááááááá¶á", "áááá¶ááá", "áááá¶áá Access Control áá¶á"],
    applicationsEn: ["Office", "Facility"],
    applicationsKm: ["áá¶áá·áá¶ááá", "á¢áá¶á"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "áááááááááá",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "áá¶ááááá¶áá",
        valueEn: "Access control ready",
        valueKm: "á¢á¶ááááá¶áá Access Control",
      },
    ],
    heroImage:
      "/images/products/DS-Q20.jpg",
    gallery: ["/images/products/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "áá»ááááá·áá¶á"],
    seoTitleEn: "DS-2000F Turnstile Gate in Cambodia",
    seoTitleKm: "áááááááá¶á DS-2000F ááááááá»áá¶",
    seoDescEn:
      "DS-2000F turnstile gate for secure access control in Cambodia.",
    seoDescKm:
      "áááááááá¶á DS-2000F ááááá¶ááááááááááááá¼áááááá¶ááá»ááááá·áá¶á ááááááá»áá¶á",
  },
  {
    id: "turnstile-ds-2000h",
    slug: "ds-2000h-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-2000H Turnstile Gate",
    titleKm: "áááááááá¶á Turnstile DS-2000H",
    shortDescEn: "Turnstile gate for secure flow control.",
    shortDescKm: "Turnstile ááááá¶ááááááááááááááá¶á",
    descriptionEn:
      "DS-2000H turnstile gate for secure entry flow in commercial and public facilities.",
    descriptionKm:
      "áááááááá¶á DS-2000H ááááá¶ááááááááááááá¼áááááááá¸áá¶áááá¶áá·áááááááá",
    featuresEn: ["Secure flow", "Durable structure", "Access control ready"],
    featuresKm: ["ááááááááááááá¶", "áááá¶ááá", "áááá¶áá Access Control áá¶á"],
    applicationsEn: ["Commercial", "Public facility"],
    applicationsKm: ["áá¶áá·ááááááá", "áá¸áá¶áááá¶áá¶ááá"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "áááááááááá",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "áá¶ááááá¶áá",
        valueEn: "Access control ready",
        valueKm: "á¢á¶ááááá¶áá Access Control",
      },
    ],
    heroImage:
      "/images/products/DS-Q20.jpg",
    gallery: ["/images/products/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "áá»ááááá·áá¶á"],
    seoTitleEn: "DS-2000H Turnstile Gate in Cambodia",
    seoTitleKm: "áááááááá¶á DS-2000H ááááááá»áá¶",
    seoDescEn:
      "DS-2000H turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "áááááááá¶á DS-2000H ááááá¶ááááááááááááá¼áááááá¶ááá»ááááá·áá¶á ááááááá»áá¶á",
  },
  {
    id: "turnstile-ds-2000r",
    slug: "ds-2000r-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-2000R Turnstile Gate",
    titleKm: "áááááááá¶á Turnstile DS-2000R",
    shortDescEn: "Turnstile gate for controlled access.",
    shortDescKm: "Turnstile ááááá¶ááááááááááááá¼ááááá",
    descriptionEn:
      "DS-2000R turnstile gate for access control in offices and public venues.",
    descriptionKm:
      "áááááááá¶á DS-2000R ááááá¶ááááááááááááá¼áááááááá¶áá·áá¶ááá áá·ááá¸áá¶áááá¶áá¶áááá",
    featuresEn: ["Secure entry", "Durable", "Access control ready"],
    featuresKm: ["áá¼áááááá¶ááá»ááááá·áá¶á", "ááá", "áááá¶áá Access Control áá¶á"],
    applicationsEn: ["Office", "Public venue"],
    applicationsKm: ["áá¶áá·áá¶ááá", "áá¸áá¶áááá¶áá¶ááá"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "áááááááááá",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "áá¶ááááá¶áá",
        valueEn: "Access control ready",
        valueKm: "á¢á¶ááááá¶áá Access Control",
      },
    ],
    heroImage:
      "/images/products/DS-Q20.jpg",
    gallery: ["/images/products/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "áá»ááááá·áá¶á"],
    seoTitleEn: "DS-2000R Turnstile Gate in Cambodia",
    seoTitleKm: "áááááááá¶á DS-2000R ááááááá»áá¶",
    seoDescEn:
      "DS-2000R turnstile gate for secure access control in Cambodia.",
    seoDescKm:
      "áááááááá¶á DS-2000R ááááá¶ááááááááááááá¼áááááá¶ááá»ááááá·áá¶á ááááááá»áá¶á",
  },
  {
    id: "turnstile-ds-2100s",
    slug: "ds-2100s-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-2100S Turnstile Gate",
    titleKm: "áááááááá¶á Turnstile DS-2100S",
    shortDescEn: "Turnstile gate for secure access flow.",
    shortDescKm: "Turnstile ááááá¶áááá¶áááááááááááá¼ááááá",
    descriptionEn:
      "DS-2100S turnstile gate for high-traffic access control in offices and facilities.",
    descriptionKm:
      "áááááááá¶á DS-2100S ááááá¶ááááááááááááá¼áááááááá¸áá¶áááá¶áááá¶áááááá¾áá",
    featuresEn: ["High traffic ready", "Durable", "Access control ready"],
    featuresKm: ["ááááá¶ááááá¶áááááá¾á", "ááá", "áááá¶áá Access Control áá¶á"],
    applicationsEn: ["Office", "Facility"],
    applicationsKm: ["áá¶áá·áá¶ááá", "á¢áá¶á"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "áááááááááá",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "áá¶ááááá¶áá",
        valueEn: "Access control ready",
        valueKm: "á¢á¶ááááá¶áá Access Control",
      },
    ],
    heroImage:
      "/images/products/DS-Q20.jpg",
    gallery: ["/images/products/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "áá»ááááá·áá¶á"],
    seoTitleEn: "DS-2100S Turnstile Gate in Cambodia",
    seoTitleKm: "áááááááá¶á DS-2100S ááááááá»áá¶",
    seoDescEn:
      "DS-2100S turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "áááááááá¶á DS-2100S ááááá¶ááááááááááááá¼áááááá¶ááá»ááááá·áá¶á ááááááá»áá¶á",
  },
  {
    id: "turnstile-ds-8000h",
    slug: "ds-8000h-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-8000H Turnstile Gate",
    titleKm: "áááááááá¶á Turnstile DS-8000H",
    shortDescEn: "Turnstile gate for secure access control.",
    shortDescKm: "Turnstile ááááá¶ááááááááááááá¼ááááá",
    descriptionEn:
      "DS-8000H turnstile gate for secure entry control in commercial areas.",
    descriptionKm:
      "áááááááá¶á DS-8000H ááááá¶ááááááááááááá¼ááááááááááááá¶áá·áááááááá",
    featuresEn: ["Secure access", "Durable build", "Access control ready"],
    featuresKm: ["áá¼áááááá¶ááá»ááááá·áá¶á", "áááá¶ááá", "áááá¶áá Access Control áá¶á"],
    applicationsEn: ["Commercial", "Office"],
    applicationsKm: ["áá¶áá·ááááááá", "áá¶áá·áá¶ááá"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "áááááááááá",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "áá¶ááááá¶áá",
        valueEn: "Access control ready",
        valueKm: "á¢á¶ááááá¶áá Access Control",
      },
    ],
    heroImage:
      "/images/products/DS-Q20.jpg",
    gallery: ["/images/products/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "áá»ááááá·áá¶á"],
    seoTitleEn: "DS-8000H Turnstile Gate in Cambodia",
    seoTitleKm: "áááááááá¶á DS-8000H ááááááá»áá¶",
    seoDescEn:
      "DS-8000H turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "áááááááá¶á DS-8000H ááááá¶ááááááááááááá¼áááááá¶ááá»ááááá·áá¶á ááááááá»áá¶á",
  },
  {
    id: "turnstile-ds-tm",
    slug: "ds-tm-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-TM Turnstile Gate",
    titleKm: "áááááááá¶á Turnstile DS-TM",
    shortDescEn: "Turnstile gate for controlled access.",
    shortDescKm: "Turnstile ááááá¶ááááááááááááá¼ááááá",
    descriptionEn:
      "DS-TM turnstile gate for reliable access control in offices and venues.",
    descriptionKm:
      "áááááááá¶á DS-TM ááááá¶ááááááááááááá¼áááááááá¶áá·áá¶ááá áá·ááá¸áá¶áááá¶áá¶áááá",
    featuresEn: ["Secure entry", "Durable", "Access control ready"],
    featuresKm: ["áá¼áááááá¶ááá»ááááá·áá¶á", "ááá", "áááá¶áá Access Control áá¶á"],
    applicationsEn: ["Office", "Venue"],
    applicationsKm: ["áá¶áá·áá¶ááá", "áá¸áá¶áááá¶áá¶ááá"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "áááááááááá",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "áá¶ááááá¶áá",
        valueEn: "Access control ready",
        valueKm: "á¢á¶ááááá¶áá Access Control",
      },
    ],
    heroImage:
      "/images/products/DS-Q20.jpg",
    gallery: ["/images/products/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "áá»ááááá·áá¶á"],
    seoTitleEn: "DS-TM Turnstile Gate in Cambodia",
    seoTitleKm: "áááááááá¶á DS-TM ááááááá»áá¶",
    seoDescEn:
      "DS-TM turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "áááááááá¶á DS-TM ááááá¶ááááááááááááá¼áááááá¶ááá»ááááá·áá¶á ááááááá»áá¶á",
  },
  {
    id: "turnstile-ds-tmg",
    slug: "ds-tmg-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-TMG Turnstile Gate",
    titleKm: "áááááááá¶á Turnstile DS-TMG",
    shortDescEn: "Turnstile gate for secure entry.",
    shortDescKm: "Turnstile ááááá¶áááá¼áááááá¶ááá»ááááá·áá¶áá",
    descriptionEn:
      "DS-TMG turnstile gate for secure access control in facilities.",
    descriptionKm:
      "áááááááá¶á DS-TMG ááááá¶ááááááááááááá¼ááááááá¢áá¶áá",
    featuresEn: ["Secure access", "Durable build", "Access control ready"],
    featuresKm: ["áá¼áááááá¶ááá»ááááá·áá¶á", "áááá¶ááá", "áááá¶áá Access Control áá¶á"],
    applicationsEn: ["Facility", "Office"],
    applicationsKm: ["á¢áá¶á", "áá¶áá·áá¶ááá"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "áááááááááá",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "áá¶ááááá¶áá",
        valueEn: "Access control ready",
        valueKm: "á¢á¶ááááá¶áá Access Control",
      },
    ],
    heroImage:
      "/images/products/DS-Q20.jpg",
    gallery: ["/images/products/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "áá»ááááá·áá¶á"],
    seoTitleEn: "DS-TMG Turnstile Gate in Cambodia",
    seoTitleKm: "áááááááá¶á DS-TMG ááááááá»áá¶",
    seoDescEn:
      "DS-TMG turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "áááááááá¶á DS-TMG ááááá¶ááááááááááááá¼áááááá¶ááá»ááááá·áá¶á ááááááá»áá¶á",
  },
  {
    id: "turnstile-ds-tms",
    slug: "ds-tms-turnstile-gate",
    categoryIds: ["turnstile_gate"],
    primaryCategoryId: "turnstile_gate",
    titleEn: "DS-TMS Turnstile Gate",
    titleKm: "áááááááá¶á Turnstile DS-TMS",
    shortDescEn: "Turnstile gate for secure access.",
    shortDescKm: "Turnstile ááááá¶áááá¼áááááá¶ááá»ááááá·áá¶áá",
    descriptionEn:
      "DS-TMS turnstile gate for reliable access control in commercial spaces.",
    descriptionKm:
      "áááááááá¶á DS-TMS ááááá¶ááááááááááááá¼ááááááááááááá¶áá·áááááááá",
    featuresEn: ["Secure entry", "Durable build", "Access control ready"],
    featuresKm: ["áá¼áááááá¶ááá»ááááá·áá¶á", "áááá¶ááá", "áááá¶áá Access Control áá¶á"],
    applicationsEn: ["Commercial", "Office"],
    applicationsKm: ["áá¶áá·ááááááá", "áá¶áá·áá¶ááá"],
    specs: [
      {
        labelEn: "Gate Type",
        labelKm: "áááááááááá",
        valueEn: "Turnstile gate",
        valueKm: "Turnstile gate",
      },
      {
        labelEn: "Integration",
        labelKm: "áá¶ááááá¶áá",
        valueEn: "Access control ready",
        valueKm: "á¢á¶ááááá¶áá Access Control",
      },
    ],
    heroImage:
      "/images/products/DS-Q20.jpg",
    gallery: ["/images/products/DS-Q20.jpg"],
    tagsEn: ["Turnstile", "Security"],
    tagsKm: ["Turnstile", "áá»ááááá·áá¶á"],
    seoTitleEn: "DS-TMS Turnstile Gate in Cambodia",
    seoTitleKm: "áááááááá¶á DS-TMS ááááááá»áá¶",
    seoDescEn:
      "DS-TMS turnstile gate for secure entry control in Cambodia.",
    seoDescKm:
      "áááááááá¶á DS-TMS ááááá¶ááááááááááááá¼áááááá¶ááá»ááááá·áá¶á ááááááá»áá¶á",
  },
  {
    id: "hd-r716-receiving-card",
    slug: "hd-r716-receiving-card",
    categoryIds: ["led_display", "led_accessories"],
    primaryCategoryId: "led_accessories",
    titleEn: "HD-R716 Receiving Card",
    titleKm: "HD-R716 Receiving Card",
    shortDescEn:
      "High-capacity receiving card with 16 HUB75E ports for fine-pitch LED video walls.",
    shortDescKm:
      "High-capacity receiving card with 16 HUB75E ports for fine-pitch LED video walls.",
    descriptionEn:
      "The Huidu HD-R716 is a high-end receiving card engineered for ultra-fine pixel pitch LED displays. With 16 HUB75E interfaces, dual Gigabit Ethernet, and 1/128 scan support, it handles up to 327,680 pixels for large, high-resolution video walls. Advanced grayscale control, smart diagnostics, and auto-configuration make installation and maintenance easier.",
    descriptionKm:
      "The Huidu HD-R716 is a high-end receiving card engineered for ultra-fine pixel pitch LED displays. With 16 HUB75E interfaces, dual Gigabit Ethernet, and 1/128 scan support, it handles up to 327,680 pixels for large, high-resolution video walls. Advanced grayscale control, smart diagnostics, and auto-configuration make installation and maintenance easier.",
    featuresEn: [
      "16 HUB75E ports for direct module connection",
      "Massive pixel capacity up to 512 x 640 (327,680 pixels)",
      "Scan versatility: static to 1/128 scan",
      "Wide grayscale range: 256-65,536 levels",
      "Smart diagnostics and auto-configuration",
      "LED status indicators for power & signal",
      "Dual Gigabit Ethernet ports for daisy-chain/backup",
      "Industrial strength operating range",
    ],
    featuresKm: [
      "16 HUB75E ports for direct module connection",
      "Massive pixel capacity up to 512 x 640 (327,680 pixels)",
      "Scan versatility: static to 1/128 scan",
      "Wide grayscale range: 256-65,536 levels",
      "Smart diagnostics and auto-configuration",
      "LED status indicators for power & signal",
      "Dual Gigabit Ethernet ports for daisy-chain/backup",
      "Industrial strength operating range",
    ],
    applicationsEn: [
      "Fine-pitch LED video walls",
      "Control rooms",
      "Broadcast studios",
      "Command centers",
      "Corporate lobbies",
    ],
    applicationsKm: [
      "Fine-pitch LED video walls",
      "Control rooms",
      "Broadcast studios",
      "Command centers",
      "Corporate lobbies",
    ],
    specs: [
      {
        labelEn: "Model",
        labelKm: "Model",
        valueEn: "HD-R716",
        valueKm: "HD-R716",
      },
      {
        labelEn: "Interface Ports",
        labelKm: "Interface Ports",
        valueEn: "16 x HUB75E, 2 x Gigabit Ethernet",
        valueKm: "16 x HUB75E, 2 x Gigabit Ethernet",
      },
      {
        labelEn: "Pixel Capacity",
        labelKm: "Pixel Capacity",
        valueEn: "Up to 512 x 640 pixels (327,680 pixels)",
        valueKm: "Up to 512 x 640 pixels (327,680 pixels)",
      },
      {
        labelEn: "Scanning Support",
        labelKm: "Scanning Support",
        valueEn: "Static to 1/128 scan",
        valueKm: "Static to 1/128 scan",
      },
      {
        labelEn: "Grayscale Support",
        labelKm: "Grayscale Support",
        valueEn: "256-65,536 levels",
        valueKm: "256-65,536 levels",
      },
      {
        labelEn: "Voltage Input",
        labelKm: "Voltage Input",
        valueEn: "DC 4.0V ~ 5.5V",
        valueKm: "DC 4.0V ~ 5.5V",
      },
      {
        labelEn: "Power Consumption",
        labelKm: "Power Consumption",
        valueEn: "Max 5W",
        valueKm: "Max 5W",
      },
      {
        labelEn: "Indicators",
        labelKm: "Indicators",
        valueEn: "LED status indicators for power & signal",
        valueKm: "LED status indicators for power & signal",
      },
      {
        labelEn: "Operating Temperature",
        labelKm: "Operating Temperature",
        valueEn: "-40°C to +80°C",
        valueKm: "-40°C to +80°C",
      },
      {
        labelEn: "Humidity Tolerance",
        labelKm: "Humidity Tolerance",
        valueEn: "0 ~ 90% RH",
        valueKm: "0 ~ 90% RH",
      },
      {
        labelEn: "Weight",
        labelKm: "Weight",
        valueEn: "~91g",
        valueKm: "~91g",
      },
      {
        labelEn: "Compatibility",
        labelKm: "Compatibility",
        valueEn: "All standard & PWM driver IC modules",
        valueKm: "All standard & PWM driver IC modules",
      },
      {
        labelEn: "Smart Features",
        labelKm: "Smart Features",
        valueEn: "Smart config, diagnostics, auto-scan detection",
        valueKm: "Smart config, diagnostics, auto-scan detection",
      },
    ],
    heroImage: "/images/products/hd-r716.webp",
    gallery: ["/images/products/hd-r716.webp"],
    tagsEn: ["Receiving Card", "Huidu", "HUB75E", "LED Accessories"],
    tagsKm: ["Receiving Card", "Huidu", "HUB75E", "LED Accessories"],
    seoTitleEn: "HD-R716 Receiving Card | LED Display Controller",
    seoTitleKm: "HD-R716 Receiving Card | LED Display Controller",
    seoDescEn:
      "HD-R716 receiving card with 16 HUB75E ports, 327,680 pixel capacity, 1/128 scan support, and dual Gigabit Ethernet for high-resolution LED video walls.",
    seoDescKm:
      "HD-R716 receiving card with 16 HUB75E ports, 327,680 pixel capacity, 1/128 scan support, and dual Gigabit Ethernet for high-resolution LED video walls.",
  },
  {
    id: "hd-r516-receiving-card",
    slug: "hd-r516-receiving-card",
    categoryIds: ["led_display", "led_accessories"],
    primaryCategoryId: "led_accessories",
    titleEn: "HD-R516 Receiving Card",
    titleKm: "HD-R516 Receiving Card",
    shortDescEn:
      "16 HUB75E port receiving card with 256 x 512 pixel load and dual Gigabit Ethernet.",
    shortDescKm:
      "16 HUB75E port receiving card with 256 x 512 pixel load and dual Gigabit Ethernet.",
    descriptionEn:
      "HD-R516 is a stable receiving card for indoor and outdoor LED displays. It offers 16 HUB75E outputs, dual Gigabit Ethernet, and smart scan matching for reliable operation across a wide range of LED modules.",
    descriptionKm:
      "HD-R516 is a stable receiving card for indoor and outdoor LED displays. It offers 16 HUB75E outputs, dual Gigabit Ethernet, and smart scan matching for reliable operation across a wide range of LED modules.",
    featuresEn: [
      "16 HUB75E ports for direct module connection",
      "High pixel load: up to 256 x 512 (131,072 pixels)",
      "Scan flexibility: static to 1/64 scan",
      "Smart configuration with auto scan match",
      "Long-distance output up to 146m",
      "Smooth grayscale 256-65K levels",
      "Dual Ethernet ports for daisy chaining",
      "Industrial tolerance for harsh environments",
    ],
    featuresKm: [
      "16 HUB75E ports for direct module connection",
      "High pixel load: up to 256 x 512 (131,072 pixels)",
      "Scan flexibility: static to 1/64 scan",
      "Smart configuration with auto scan match",
      "Long-distance output up to 146m",
      "Smooth grayscale 256-65K levels",
      "Dual Ethernet ports for daisy chaining",
      "Industrial tolerance for harsh environments",
    ],
    applicationsEn: [
      "Indoor LED video walls",
      "Outdoor LED billboards",
      "Rental LED screens",
      "Control rooms",
    ],
    applicationsKm: [
      "Indoor LED video walls",
      "Outdoor LED billboards",
      "Rental LED screens",
      "Control rooms",
    ],
    specs: [
      {
        labelEn: "Model",
        labelKm: "Model",
        valueEn: "HD-R516",
        valueKm: "HD-R516",
      },
      {
        labelEn: "Interface Ports",
        labelKm: "Interface Ports",
        valueEn: "16 x HUB75E, 2 x Gigabit Ethernet",
        valueKm: "16 x HUB75E, 2 x Gigabit Ethernet",
      },
      {
        labelEn: "Pixel Capacity",
        labelKm: "Pixel Capacity",
        valueEn: "Up to 256 x 512 pixels per card (131,072 pixels)",
        valueKm: "Up to 256 x 512 pixels per card (131,072 pixels)",
      },
      {
        labelEn: "Scanning Support",
        labelKm: "Scanning Support",
        valueEn: "Static to 1/64 scan",
        valueKm: "Static to 1/64 scan",
      },
      {
        labelEn: "Grayscale Support",
        labelKm: "Grayscale Support",
        valueEn: "256-65,536 levels",
        valueKm: "256-65,536 levels",
      },
      {
        labelEn: "Voltage Input",
        labelKm: "Voltage Input",
        valueEn: "DC 4V ~ 6V",
        valueKm: "DC 4V ~ 6V",
      },
      {
        labelEn: "Power Consumption",
        labelKm: "Power Consumption",
        valueEn: "Max 5W",
        valueKm: "Max 5W",
      },
      {
        labelEn: "Max Transmission Range",
        labelKm: "Max Transmission Range",
        valueEn: "Up to 146 meters",
        valueKm: "Up to 146 meters",
      },
      {
        labelEn: "Operating Temperature",
        labelKm: "Operating Temperature",
        valueEn: "-40°C to +80°C",
        valueKm: "-40°C to +80°C",
      },
      {
        labelEn: "Humidity Tolerance",
        labelKm: "Humidity Tolerance",
        valueEn: "0 ~ 95% RH",
        valueKm: "0 ~ 95% RH",
      },
      {
        labelEn: "Weight",
        labelKm: "Weight",
        valueEn: "~103g",
        valueKm: "~103g",
      },
      {
        labelEn: "Compatibility",
        labelKm: "Compatibility",
        valueEn: "Conventional + most PWM IC modules",
        valueKm: "Conventional + most PWM IC modules",
      },
      {
        labelEn: "Smart Functions",
        labelKm: "Smart Functions",
        valueEn: "Built-in test, smart config, scan auto-match",
        valueKm: "Built-in test, smart config, scan auto-match",
      },
    ],
    heroImage: "/images/products/hd-r516.webp",
    gallery: ["/images/products/hd-r516.webp"],
    tagsEn: ["Receiving Card", "Huidu", "HUB75E", "LED Accessories"],
    tagsKm: ["Receiving Card", "Huidu", "HUB75E", "LED Accessories"],
    seoTitleEn: "HD-R516 Receiving Card | LED Display Controller",
    seoTitleKm: "HD-R516 Receiving Card | LED Display Controller",
    seoDescEn:
      "HD-R516 receiving card with 16 HUB75E ports, 256 x 512 pixel capacity, and dual Gigabit Ethernet for stable LED display control.",
    seoDescKm:
      "HD-R516 receiving card with 16 HUB75E ports, 256 x 512 pixel capacity, and dual Gigabit Ethernet for stable LED display control.",
  },
  {
    id: "r-732-receiving-card",
    slug: "r-732-receiving-card",
    categoryIds: ["led_display", "led_accessories"],
    primaryCategoryId: "led_accessories",
    titleEn: "R-732 Receiving Card",
    titleKm: "R-732 Receiving Card",
    shortDescEn:
      "High-performance receiver card with 8x HUB320 and 256 x 1024 pixel capacity.",
    shortDescKm:
      "High-performance receiver card with 8x HUB320 and 256 x 1024 pixel capacity.",
    descriptionEn:
      "The Huidu R-732 is built for fine-pitch LED displays and large video walls. It supports up to 256 x 1024 pixels, eight HUB320 interfaces, dual Gigabit Ethernet, and flexible scan modes for stable, high-resolution output.",
    descriptionKm:
      "The Huidu R-732 is built for fine-pitch LED displays and large video walls. It supports up to 256 x 1024 pixels, eight HUB320 interfaces, dual Gigabit Ethernet, and flexible scan modes for stable, high-resolution output.",
    featuresEn: [
      "Advanced pixel control up to 256 x 1024 pixels",
      "8x HUB320 interfaces for direct module connection",
      "Dual Gigabit Ethernet for stable transmission",
      "Offset and data-group exchange support",
      "Multi-card cascade compatible",
      "Trace & sample point functions for testing",
      "Dual 5V input with low power draw (<=5W)",
      "Wide temperature range for stable performance",
    ],
    featuresKm: [
      "Advanced pixel control up to 256 x 1024 pixels",
      "8x HUB320 interfaces for direct module connection",
      "Dual Gigabit Ethernet for stable transmission",
      "Offset and data-group exchange support",
      "Multi-card cascade compatible",
      "Trace & sample point functions for testing",
      "Dual 5V input with low power draw (<=5W)",
      "Wide temperature range for stable performance",
    ],
    applicationsEn: [
      "Fine-pitch LED displays",
      "Command centers",
      "Stage LED screens",
      "Large video walls",
    ],
    applicationsKm: [
      "Fine-pitch LED displays",
      "Command centers",
      "Stage LED screens",
      "Large video walls",
    ],
    specs: [
      {
        labelEn: "Model",
        labelKm: "Model",
        valueEn: "R-732",
        valueKm: "R-732",
      },
      {
        labelEn: "Interface Ports",
        labelKm: "Interface Ports",
        valueEn: "8 x HUB320",
        valueKm: "8 x HUB320",
      },
      {
        labelEn: "Pixel Capacity",
        labelKm: "Pixel Capacity",
        valueEn: "Up to 256 x 1024 pixels",
        valueKm: "Up to 256 x 1024 pixels",
      },
      {
        labelEn: "Scan Support",
        labelKm: "Scan Support",
        valueEn: "Static to 1/128 scan",
        valueKm: "Static to 1/128 scan",
      },
      {
        labelEn: "Ethernet",
        labelKm: "Ethernet",
        valueEn: "Dual Gigabit Ethernet (up to 100m)",
        valueKm: "Dual Gigabit Ethernet (up to 100m)",
      },
      {
        labelEn: "Data Mapping",
        labelKm: "Data Mapping",
        valueEn: "Offset correction & data-group exchange",
        valueKm: "Offset correction & data-group exchange",
      },
      {
        labelEn: "Cascading",
        labelKm: "Cascading",
        valueEn: "Multi-card cascade compatible",
        valueKm: "Multi-card cascade compatible",
      },
      {
        labelEn: "Power Input",
        labelKm: "Power Input",
        valueEn: "Dual 5V input, <=5W",
        valueKm: "Dual 5V input, <=5W",
      },
      {
        labelEn: "Operating Temperature",
        labelKm: "Operating Temperature",
        valueEn: "-20°C to +75°C",
        valueKm: "-20°C to +75°C",
      },
    ],
    heroImage: "/images/products/r-732-top.webp",
    gallery: ["/images/products/r-732-top.webp", "/images/products/r-732-angle.webp"],
    tagsEn: ["Receiving Card", "Huidu", "HUB320", "LED Accessories"],
    tagsKm: ["Receiving Card", "Huidu", "HUB320", "LED Accessories"],
    seoTitleEn: "R-732 Receiving Card | High Pixel LED Receiver",
    seoTitleKm: "R-732 Receiving Card | High Pixel LED Receiver",
    seoDescEn:
      "R-732 receiving card with 8x HUB320, 256 x 1024 pixel capacity, dual Gigabit Ethernet, and flexible scan support for fine-pitch LED screens.",
    seoDescKm:
      "R-732 receiving card with 8x HUB320, 256 x 1024 pixel capacity, dual Gigabit Ethernet, and flexible scan support for fine-pitch LED screens.",
  },
  {
    id: "r-712-receiving-card",
    slug: "r-712-receiving-card",
    categoryIds: ["led_display", "led_accessories"],
    primaryCategoryId: "led_accessories",
    titleEn: "R-712 Receiving Card",
    titleKm: "R-712 Receiving Card",
    shortDescEn:
      "12 HUB75E port receiving card with 131,072 pixel load and wide scan compatibility.",
    shortDescKm:
      "12 HUB75E port receiving card with 131,072 pixel load and wide scan compatibility.",
    descriptionEn:
      "The Huidu HD-R712 supports both synchronous and asynchronous LED control systems with 12 onboard HUB75E ports. It drives up to 131,072 pixels, supports static to 1/128 scan modes, and offers flexible cascading, data grouping, and offset alignment for complex layouts.",
    descriptionKm:
      "The Huidu HD-R712 supports both synchronous and asynchronous LED control systems with 12 onboard HUB75E ports. It drives up to 131,072 pixels, supports static to 1/128 scan modes, and offers flexible cascading, data grouping, and offset alignment for complex layouts.",
    featuresEn: [
      "Dual compatibility: synchronous & asynchronous control",
      "12 onboard HUB75E ports (no adapter cards needed)",
      "High load capacity up to 131,072 pixels",
      "Scan mode support from static to 1/128",
      "Flexible cascading with data group & offset settings",
      "Compatible with conventional and PWM driver ICs",
      "Wide operating temperature range",
      "CE/RoHS certified",
    ],
    featuresKm: [
      "Dual compatibility: synchronous & asynchronous control",
      "12 onboard HUB75E ports (no adapter cards needed)",
      "High load capacity up to 131,072 pixels",
      "Scan mode support from static to 1/128",
      "Flexible cascading with data group & offset settings",
      "Compatible with conventional and PWM driver ICs",
      "Wide operating temperature range",
      "CE/RoHS certified",
    ],
    applicationsEn: [
      "Indoor LED screens",
      "Outdoor LED screens",
      "Rental LED displays",
      "Video wall projects",
    ],
    applicationsKm: [
      "Indoor LED screens",
      "Outdoor LED screens",
      "Rental LED displays",
      "Video wall projects",
    ],
    specs: [
      {
        labelEn: "Model",
        labelKm: "Model",
        valueEn: "R-712",
        valueKm: "R-712",
      },
      {
        labelEn: "Interface Ports",
        labelKm: "Interface Ports",
        valueEn: "12 x HUB75E",
        valueKm: "12 x HUB75E",
      },
      {
        labelEn: "Pixel Capacity",
        labelKm: "Pixel Capacity",
        valueEn: "Up to 131,072 pixels",
        valueKm: "Up to 131,072 pixels",
      },
      {
        labelEn: "Scan Support",
        labelKm: "Scan Support",
        valueEn: "Static to 1/128 scan",
        valueKm: "Static to 1/128 scan",
      },
      {
        labelEn: "Control Systems",
        labelKm: "Control Systems",
        valueEn: "Synchronous & asynchronous",
        valueKm: "Synchronous & asynchronous",
      },
      {
        labelEn: "Cascading",
        labelKm: "Cascading",
        valueEn: "Arbitrary order with data group exchange",
        valueKm: "Arbitrary order with data group exchange",
      },
      {
        labelEn: "Compatibility",
        labelKm: "Compatibility",
        valueEn: "Conventional & PWM driver ICs",
        valueKm: "Conventional & PWM driver ICs",
      },
      {
        labelEn: "Certification",
        labelKm: "Certification",
        valueEn: "CE / RoHS",
        valueKm: "CE / RoHS",
      },
    ],
    heroImage: "/images/products/r-712.webp",
    gallery: ["/images/products/r-712.webp"],
    tagsEn: ["Receiving Card", "Huidu", "HUB75E", "LED Accessories"],
    tagsKm: ["Receiving Card", "Huidu", "HUB75E", "LED Accessories"],
    seoTitleEn: "R-712 Receiving Card | LED Display Receiver",
    seoTitleKm: "R-712 Receiving Card | LED Display Receiver",
    seoDescEn:
      "R-712 receiving card with 12 HUB75E ports, 131,072 pixel capacity, and synchronous/asynchronous control support for LED display systems.",
    seoDescKm:
      "R-712 receiving card with 12 HUB75E ports, 131,072 pixel capacity, and synchronous/asynchronous control support for LED display systems.",
  },
  {
    id: "g-energy-5v-30a-power-supply",
    slug: "g-energy-5v-30a-power-supply",
    categoryIds: ["led_display", "power_supply"],
    primaryCategoryId: "power_supply",
    titleEn: "G-Energy 5V 30A Power Supply",
    titleKm: "G-Energy 5V 30A Power Supply",
    shortDescEn: "5V 30A (150W) LED display power supply for stable output.",
    shortDescKm: "5V 30A (150W) LED display power supply for stable output.",
    descriptionEn:
      "G-Energy 5V 30A power supply delivers stable 150W output for LED display cabinets and modules. It supports AC 180-264V input and is designed for reliable performance in continuous LED display use.",
    descriptionKm:
      "G-Energy 5V 30A power supply delivers stable 150W output for LED display cabinets and modules. It supports AC 180-264V input and is designed for reliable performance in continuous LED display use.",
    featuresEn: [
      "Output: 5V 30A (150W)",
      "Input: AC 180-264V",
      "Stable 5V DC output for LED modules",
      "Designed for LED display cabinets",
      "Reliable continuous operation",
    ],
    featuresKm: [
      "Output: 5V 30A (150W)",
      "Input: AC 180-264V",
      "Stable 5V DC output for LED modules",
      "Designed for LED display cabinets",
      "Reliable continuous operation",
    ],
    applicationsEn: [
      "LED display cabinets",
      "Indoor LED screens",
      "Outdoor LED modules",
      "Signage power systems",
    ],
    applicationsKm: [
      "LED display cabinets",
      "Indoor LED screens",
      "Outdoor LED modules",
      "Signage power systems",
    ],
    specs: [
      { labelEn: "Model", labelKm: "Model", valueEn: "G-Energy 5V 30A", valueKm: "G-Energy 5V 30A" },
      { labelEn: "Input Voltage", labelKm: "Input Voltage", valueEn: "AC 180-264V", valueKm: "AC 180-264V" },
      { labelEn: "Output", labelKm: "Output", valueEn: "5V 30A", valueKm: "5V 30A" },
      { labelEn: "Power", labelKm: "Power", valueEn: "150W", valueKm: "150W" },
    ],
    heroImage: "/images/products/g-energy-5v-30a.webp",
    gallery: ["/images/products/g-energy-5v-30a.webp"],
    tagsEn: ["Power Supply", "5V 30A", "G-Energy", "LED Display"],
    tagsKm: ["Power Supply", "5V 30A", "G-Energy", "LED Display"],
    seoTitleEn: "G-Energy 5V 30A Power Supply | LED Display SMPS",
    seoTitleKm: "G-Energy 5V 30A Power Supply | LED Display SMPS",
    seoDescEn:
      "G-Energy 5V 30A (150W) LED display power supply with stable output and wide AC input for LED cabinets.",
    seoDescKm:
      "G-Energy 5V 30A (150W) LED display power supply with stable output and wide AC input for LED cabinets.",
  },
  {
    id: "smps-5v-20a-power-supply",
    slug: "5v-20a-dc-switch-mode-power-supply-smps",
    categoryIds: ["led_display", "power_supply"],
    primaryCategoryId: "power_supply",
    titleEn: "5V 20A DC Switch Mode Power Supply (SMPS)",
    titleKm: "5V 20A DC Switch Mode Power Supply (SMPS)",
    shortDescEn: "5V 20A (100W) SMPS for LED displays and signage.",
    shortDescKm: "5V 20A (100W) SMPS for LED displays and signage.",
    descriptionEn:
      "This 5V 20A SMPS provides 100W output for LED display modules, control boxes, and signage. It supports AC 110/220V input and delivers stable 5V DC output.",
    descriptionKm:
      "This 5V 20A SMPS provides 100W output for LED display modules, control boxes, and signage. It supports AC 110/220V input and delivers stable 5V DC output.",
    featuresEn: [
      "Output: 5V 20A (100W)",
      "Input: AC 110/220V",
      "Stable 5V DC output",
      "Compact SMPS design",
      "Suitable for LED modules and signage",
    ],
    featuresKm: [
      "Output: 5V 20A (100W)",
      "Input: AC 110/220V",
      "Stable 5V DC output",
      "Compact SMPS design",
      "Suitable for LED modules and signage",
    ],
    applicationsEn: [
      "LED modules",
      "LED signage",
      "Control boxes",
      "Indoor display power",
    ],
    applicationsKm: [
      "LED modules",
      "LED signage",
      "Control boxes",
      "Indoor display power",
    ],
    specs: [
      { labelEn: "Model", labelKm: "Model", valueEn: "5V 20A SMPS", valueKm: "5V 20A SMPS" },
      { labelEn: "Input Voltage", labelKm: "Input Voltage", valueEn: "AC 110/220V", valueKm: "AC 110/220V" },
      { labelEn: "Output", labelKm: "Output", valueEn: "5V 20A", valueKm: "5V 20A" },
      { labelEn: "Power", labelKm: "Power", valueEn: "100W", valueKm: "100W" },
    ],
    heroImage: "/images/products/smps-5v-20a.webp",
    gallery: ["/images/products/smps-5v-20a.webp"],
    tagsEn: ["Power Supply", "5V 20A", "SMPS", "LED Display"],
    tagsKm: ["Power Supply", "5V 20A", "SMPS", "LED Display"],
    seoTitleEn: "5V 20A SMPS Power Supply | LED Display 100W",
    seoTitleKm: "5V 20A SMPS Power Supply | LED Display 100W",
    seoDescEn:
      "5V 20A (100W) SMPS power supply for LED modules and signage with AC 110/220V input.",
    seoDescKm:
      "5V 20A (100W) SMPS power supply for LED modules and signage with AC 110/220V input.",
  },
  {
    id: "g-energy-5v-40a-power-supply",
    slug: "g-energy-5v-40a-led-display-power-supply",
    categoryIds: ["led_display", "power_supply"],
    primaryCategoryId: "power_supply",
    titleEn: "G-Energy 5V 40A LED Display Power Supply",
    titleKm: "G-Energy 5V 40A LED Display Power Supply",
    shortDescEn: "5V 40A (200W) power supply for LED display cabinets.",
    shortDescKm: "5V 40A (200W) power supply for LED display cabinets.",
    descriptionEn:
      "G-Energy 5V 40A power supply delivers 200W output for LED display cabinets with stable performance. It supports AC 180-264V input and is designed for continuous LED display operation.",
    descriptionKm:
      "G-Energy 5V 40A power supply delivers 200W output for LED display cabinets with stable performance. It supports AC 180-264V input and is designed for continuous LED display operation.",
    featuresEn: [
      "Output: 5V 40A (200W)",
      "Input: AC 180-264V",
      "Stable 5V DC output",
      "Suitable for LED display cabinets",
      "Reliable for continuous use",
    ],
    featuresKm: [
      "Output: 5V 40A (200W)",
      "Input: AC 180-264V",
      "Stable 5V DC output",
      "Suitable for LED display cabinets",
      "Reliable for continuous use",
    ],
    applicationsEn: [
      "LED display cabinets",
      "Outdoor LED screens",
      "Large LED modules",
      "Signage power systems",
    ],
    applicationsKm: [
      "LED display cabinets",
      "Outdoor LED screens",
      "Large LED modules",
      "Signage power systems",
    ],
    specs: [
      { labelEn: "Model", labelKm: "Model", valueEn: "G-Energy 5V 40A", valueKm: "G-Energy 5V 40A" },
      { labelEn: "Input Voltage", labelKm: "Input Voltage", valueEn: "AC 180-264V", valueKm: "AC 180-264V" },
      { labelEn: "Output", labelKm: "Output", valueEn: "5V 40A", valueKm: "5V 40A" },
      { labelEn: "Power", labelKm: "Power", valueEn: "200W", valueKm: "200W" },
    ],
    heroImage: "/images/products/g-energy-5v-40a.png",
    gallery: ["/images/products/g-energy-5v-40a.png"],
    tagsEn: ["Power Supply", "5V 40A", "G-Energy", "LED Display"],
    tagsKm: ["Power Supply", "5V 40A", "G-Energy", "LED Display"],
    seoTitleEn: "G-Energy 5V 40A Power Supply | LED Display 200W",
    seoTitleKm: "G-Energy 5V 40A Power Supply | LED Display 200W",
    seoDescEn:
      "G-Energy 5V 40A (200W) LED display power supply with stable output and wide AC input.",
    seoDescKm:
      "G-Energy 5V 40A (200W) LED display power supply with stable output and wide AC input.",
  },
  {
    id: "hd-vp-210h-video-processor",
    slug: "led-video-processor",
    categoryIds: ["led_display", "video_processor"],
    primaryCategoryId: "video_processor",
    titleEn: "LED Video Processor (HD-VP-210H)",
    titleKm: "LED Video Processor (HD-VP-210H)",
    shortDescEn:
      "4K-capable LED video processor with multi-input switching for LED walls.",
    shortDescKm:
      "4K-capable LED video processor with multi-input switching for LED walls.",
    descriptionEn:
      "The Huidu HD-VP-210H is a 4K LED video processor designed for stable control of LED video walls. It supports multiple input interfaces such as HDMI, DVI, and USB (SDI optional) and delivers smooth scaling and seamless switching for fixed and rental LED screens.",
    descriptionKm:
      "The Huidu HD-VP-210H is a 4K LED video processor designed for stable control of LED video walls. It supports multiple input interfaces such as HDMI, DVI, and USB (SDI optional) and delivers smooth scaling and seamless switching for fixed and rental LED screens.",
    featuresEn: [
      "4K ultra HD input support",
      "Multiple input interfaces (HDMI/DVI/USB, SDI optional)",
      "Seamless switching and smooth scaling",
      "High refresh and grayscale processing",
      "Stable output for LED video walls",
    ],
    featuresKm: [
      "4K ultra HD input support",
      "Multiple input interfaces (HDMI/DVI/USB, SDI optional)",
      "Seamless switching and smooth scaling",
      "High refresh and grayscale processing",
      "Stable output for LED video walls",
    ],
    applicationsEn: [
      "LED video walls",
      "Outdoor billboards",
      "Rental LED screens",
      "Fixed LED installations",
    ],
    applicationsKm: [
      "LED video walls",
      "Outdoor billboards",
      "Rental LED screens",
      "Fixed LED installations",
    ],
    specs: [
      {
        labelEn: "Model",
        labelKm: "Model",
        valueEn: "HD-VP-210H",
        valueKm: "HD-VP-210H",
      },
      {
        labelEn: "Input Interfaces",
        labelKm: "Input Interfaces",
        valueEn: "HDMI / DVI / USB (SDI optional)",
        valueKm: "HDMI / DVI / USB (SDI optional)",
      },
      {
        labelEn: "Output Support",
        labelKm: "Output Support",
        valueEn: "4K-capable LED wall output",
        valueKm: "4K-capable LED wall output",
      },
      {
        labelEn: "Functions",
        labelKm: "Functions",
        valueEn: "Scaling, seamless switching",
        valueKm: "Scaling, seamless switching",
      },
    ],
    heroImage: "/images/products/hd-vp-210h.webp",
    gallery: ["/images/products/hd-vp-210h.webp"],
    tagsEn: ["Video Processor", "4K", "Huidu", "LED Display"],
    tagsKm: ["Video Processor", "4K", "Huidu", "LED Display"],
    seoTitleEn: "HD-VP-210H LED Video Processor | 4K LED Wall Controller",
    seoTitleKm: "HD-VP-210H LED Video Processor | 4K LED Wall Controller",
    seoDescEn:
      "HD-VP-210H LED video processor with multi-input switching and smooth scaling for LED video walls and billboards.",
    seoDescKm:
      "HD-VP-210H LED video processor with multi-input switching and smooth scaling for LED video walls and billboards.",
  },
  {
    id: "hd-vp-620-video-processor",
    slug: "huidu-hd-vp-620",
    categoryIds: ["led_display", "video_processor"],
    primaryCategoryId: "video_processor",
    titleEn: "Huidu HD-VP620 LED Video Processor",
    titleKm: "Huidu HD-VP620 LED Video Processor",
    shortDescEn:
      "6-channel input video processor with 4K output and multi-window display.",
    shortDescKm:
      "6-channel input video processor with 4K output and multi-window display.",
    descriptionEn:
      "The Huidu HD-VP620 is built for medium to large LED screen projects. It supports 6-channel video input, up to 4K output, and multi-window display options to handle complex live events and LED wall layouts.",
    descriptionKm:
      "The Huidu HD-VP620 is built for medium to large LED screen projects. It supports 6-channel video input, up to 4K output, and multi-window display options to handle complex live events and LED wall layouts.",
    featuresEn: [
      "6-channel video input",
      "Up to 4K output support",
      "Multi-window and picture-in-picture",
      "Stable processing for live content",
      "Seamless switching for LED walls",
    ],
    featuresKm: [
      "6-channel video input",
      "Up to 4K output support",
      "Multi-window and picture-in-picture",
      "Stable processing for live content",
      "Seamless switching for LED walls",
    ],
    applicationsEn: [
      "Stage and event LED screens",
      "LED video walls",
      "Rental LED displays",
      "Conference halls",
    ],
    applicationsKm: [
      "Stage and event LED screens",
      "LED video walls",
      "Rental LED displays",
      "Conference halls",
    ],
    specs: [
      {
        labelEn: "Model",
        labelKm: "Model",
        valueEn: "HD-VP620",
        valueKm: "HD-VP620",
      },
      {
        labelEn: "Input Channels",
        labelKm: "Input Channels",
        valueEn: "6-channel video input",
        valueKm: "6-channel video input",
      },
      {
        labelEn: "Output Support",
        labelKm: "Output Support",
        valueEn: "Up to 4K output",
        valueKm: "Up to 4K output",
      },
      {
        labelEn: "Display Features",
        labelKm: "Display Features",
        valueEn: "Multi-window / PIP",
        valueKm: "Multi-window / PIP",
      },
    ],
    heroImage: "/images/products/hd-vp-620.webp",
    gallery: ["/images/products/hd-vp-620.webp"],
    tagsEn: ["Video Processor", "4K", "Huidu", "LED Display"],
    tagsKm: ["Video Processor", "4K", "Huidu", "LED Display"],
    seoTitleEn: "HD-VP620 LED Video Processor | 6-Channel 4K Output",
    seoTitleKm: "HD-VP620 LED Video Processor | 6-Channel 4K Output",
    seoDescEn:
      "HD-VP620 video processor with 6-channel input, 4K output and multi-window display for LED video walls and rental screens.",
    seoDescKm:
      "HD-VP620 video processor with 6-channel input, 4K output and multi-window display for LED video walls and rental screens.",
  },
  {
    id: "hd-vp-820-video-processor",
    slug: "hd-vp820-huidu-video-processor",
    categoryIds: ["led_display", "video_processor"],
    primaryCategoryId: "video_processor",
    titleEn: "HD-VP820 Huidu Video Processor",
    titleKm: "HD-VP820 Huidu Video Processor",
    shortDescEn:
      "8-channel input video processor with 4K output for large LED walls.",
    shortDescKm:
      "8-channel input video processor with 4K output for large LED walls.",
    descriptionEn:
      "The HD-VP820 is designed for large LED video walls and complex display layouts. It supports 8-channel video input, 4K output, and multi-window display, making it suitable for stage, rental, and advertising screens.",
    descriptionKm:
      "The HD-VP820 is designed for large LED video walls and complex display layouts. It supports 8-channel video input, 4K output, and multi-window display, making it suitable for stage, rental, and advertising screens.",
    featuresEn: [
      "8-channel video input",
      "4K output support",
      "Multi-window display",
      "Smooth scaling for large LED walls",
      "Stable processing for live events",
    ],
    featuresKm: [
      "8-channel video input",
      "4K output support",
      "Multi-window display",
      "Smooth scaling for large LED walls",
      "Stable processing for live events",
    ],
    applicationsEn: [
      "Large LED video walls",
      "Stage and rental screens",
      "Outdoor advertising",
      "Corporate events",
    ],
    applicationsKm: [
      "Large LED video walls",
      "Stage and rental screens",
      "Outdoor advertising",
      "Corporate events",
    ],
    specs: [
      {
        labelEn: "Model",
        labelKm: "Model",
        valueEn: "HD-VP820",
        valueKm: "HD-VP820",
      },
      {
        labelEn: "Input Channels",
        labelKm: "Input Channels",
        valueEn: "8-channel video input",
        valueKm: "8-channel video input",
      },
      {
        labelEn: "Output Support",
        labelKm: "Output Support",
        valueEn: "Up to 4K output",
        valueKm: "Up to 4K output",
      },
      {
        labelEn: "Display Features",
        labelKm: "Display Features",
        valueEn: "Multi-window",
        valueKm: "Multi-window",
      },
    ],
    heroImage: "/images/products/hd-vp-820.webp",
    gallery: ["/images/products/hd-vp-820.webp"],
    tagsEn: ["Video Processor", "4K", "Huidu", "LED Display"],
    tagsKm: ["Video Processor", "4K", "Huidu", "LED Display"],
    seoTitleEn: "HD-VP820 Video Processor | 8-Channel 4K Output",
    seoTitleKm: "HD-VP820 Video Processor | 8-Channel 4K Output",
    seoDescEn:
      "HD-VP820 video processor with 8-channel input, 4K output and multi-window display for large LED video walls.",
    seoDescKm:
      "HD-VP820 video processor with 8-channel input, 4K output and multi-window display for large LED video walls.",
  },
  {
    id: "hd-vp-410-video-processor",
    slug: "hd-vp-410-video-processor",
    categoryIds: ["led_display", "video_processor"],
    primaryCategoryId: "video_processor",
    titleEn: "HD-VP410 LED Video Processor",
    titleKm: "HD-VP410 LED Video Processor",
    shortDescEn:
      "4-input LED video processor for medium LED screens and rentals.",
    shortDescKm:
      "4-input LED video processor for medium LED screens and rentals.",
    descriptionEn:
      "The HD-VP410 video processor offers four video input ports with stable scaling and switching for medium LED screens. It is a practical choice for indoor displays, small stages, and rental setups.",
    descriptionKm:
      "The HD-VP410 video processor offers four video input ports with stable scaling and switching for medium LED screens. It is a practical choice for indoor displays, small stages, and rental setups.",
    featuresEn: [
      "4 video input ports",
      "Stable scaling and switching",
      "Reliable output for LED screens",
      "Compact and practical design",
      "Suitable for rental and fixed installs",
    ],
    featuresKm: [
      "4 video input ports",
      "Stable scaling and switching",
      "Reliable output for LED screens",
      "Compact and practical design",
      "Suitable for rental and fixed installs",
    ],
    applicationsEn: [
      "Indoor LED screens",
      "Small stages",
      "Retail signage",
      "Rental LED displays",
    ],
    applicationsKm: [
      "Indoor LED screens",
      "Small stages",
      "Retail signage",
      "Rental LED displays",
    ],
    specs: [
      {
        labelEn: "Model",
        labelKm: "Model",
        valueEn: "HD-VP410",
        valueKm: "HD-VP410",
      },
      {
        labelEn: "Input Ports",
        labelKm: "Input Ports",
        valueEn: "4 video input ports",
        valueKm: "4 video input ports",
      },
      {
        labelEn: "Output",
        labelKm: "Output",
        valueEn: "LED wall output (HD)",
        valueKm: "LED wall output (HD)",
      },
      {
        labelEn: "Functions",
        labelKm: "Functions",
        valueEn: "Scaling and switching",
        valueKm: "Scaling and switching",
      },
    ],
    heroImage: "/images/products/hd-vp-410.webp",
    gallery: ["/images/products/hd-vp-410.webp"],
    tagsEn: ["Video Processor", "Huidu", "LED Display"],
    tagsKm: ["Video Processor", "Huidu", "LED Display"],
    seoTitleEn: "HD-VP410 LED Video Processor | 4 Input LED Controller",
    seoTitleKm: "HD-VP410 LED Video Processor | 4 Input LED Controller",
    seoDescEn:
      "HD-VP410 video processor with 4 input ports and stable scaling for medium LED screens, rentals, and indoor installations.",
    seoDescKm:
      "HD-VP410 video processor with 4 input ports and stable scaling for medium LED screens, rentals, and indoor installations.",
  },
  {
    id: "ifp-18-55",
    slug: "ingscreen-interactive-panel-18-series-55",
    categoryIds: ["interactive_panel"],
    primaryCategoryId: "interactive_panel",
    titleEn: "Ingscreen Interactive Panel 18 Series 55 Inch",
    titleKm: "Ingscreen Interactive Panel 18 Series 55 Inch",
    shortDescEn:
      "55-inch 4K UHD interactive flat panel with 20-point touch for classrooms and meeting rooms.",
    shortDescKm:
      "55-inch 4K UHD interactive flat panel with 20-point touch for classrooms and meeting rooms.",
    descriptionEn:
      "The 18 series 55-inch interactive panel delivers 4K UHD visuals with 20-point touch for smart classrooms and meeting rooms. It includes Android OS, wireless screen sharing, and multiple I/O ports for easy device connectivity.",
    descriptionKm:
      "The 18 series 55-inch interactive panel delivers 4K UHD visuals with 20-point touch for smart classrooms and meeting rooms. It includes Android OS, wireless screen sharing, and multiple I/O ports for easy device connectivity.",
    featuresEn: [
      "55-inch 4K UHD display with anti-glare glass",
      "20-point multi-touch writing and annotation",
      "Android OS with OPS/Windows optional",
      "Wi-Fi 6 and Bluetooth connectivity",
      "HDMI, USB, USB-C, and LAN ports",
    ],
    featuresKm: [
      "55-inch 4K UHD display with anti-glare glass",
      "20-point multi-touch writing and annotation",
      "Android OS with OPS/Windows optional",
      "Wi-Fi 6 and Bluetooth connectivity",
      "HDMI, USB, USB-C, and LAN ports",
    ],
    applicationsEn: [
      "Smart classrooms",
      "Meeting rooms",
      "Training centers",
      "Education labs",
    ],
    applicationsKm: [
      "Smart classrooms",
      "Meeting rooms",
      "Training centers",
      "Education labs",
    ],
    specs: [
      { labelEn: "Display Size", labelKm: "Display Size", valueEn: "55 inch", valueKm: "55 inch" },
      { labelEn: "Resolution", labelKm: "Resolution", valueEn: "3840 x 2160 (4K UHD)", valueKm: "3840 x 2160 (4K UHD)" },
      { labelEn: "Touch Points", labelKm: "Touch Points", valueEn: "20-point touch", valueKm: "20-point touch" },
      { labelEn: "Operating System", labelKm: "Operating System", valueEn: "Android (OPS optional)", valueKm: "Android (OPS optional)" },
      { labelEn: "Brightness", labelKm: "Brightness", valueEn: "350 nits", valueKm: "350 nits" },
      { labelEn: "Contrast Ratio", labelKm: "Contrast Ratio", valueEn: "4000:1", valueKm: "4000:1" },
    ],
    heroImage: "/images/products/ifp-18-55.webp",
    gallery: ["/images/products/ifp-18-55.webp"],
    tagsEn: ["Smart Board", "55 inch", "4K", "Interactive Flat Panel"],
    tagsKm: ["Smart Board", "55 inch", "4K", "Interactive Flat Panel"],
    seoTitleEn: "Ingscreen Interactive Panel 18 Series 55 Inch | 4K Smart Board",
    seoTitleKm: "Ingscreen Interactive Panel 18 Series 55 Inch | 4K Smart Board",
    seoDescEn:
      "55-inch 4K UHD interactive flat panel with 20-point touch, Android OS, and wireless sharing for classrooms and meetings.",
    seoDescKm:
      "55-inch 4K UHD interactive flat panel with 20-point touch, Android OS, and wireless sharing for classrooms and meetings.",
  },
  {
    id: "ifp-18-65",
    slug: "ingscreen-interactive-panel-18-series-65",
    categoryIds: ["interactive_panel"],
    primaryCategoryId: "interactive_panel",
    titleEn: "Ingscreen Interactive Panel 18 Series 65 Inch",
    titleKm: "Ingscreen Interactive Panel 18 Series 65 Inch",
    shortDescEn:
      "65-inch 4K UHD smart board with 20-point touch and Android OS for classrooms and offices.",
    shortDescKm:
      "65-inch 4K UHD smart board with 20-point touch and Android OS for classrooms and offices.",
    descriptionEn:
      "The 18 series 65-inch interactive flat panel combines 4K UHD clarity with 20-point touch. It supports Android OS with OPS option, Wi-Fi 6, Bluetooth, and multiple connectivity ports for daily teaching and presentations.",
    descriptionKm:
      "The 18 series 65-inch interactive flat panel combines 4K UHD clarity with 20-point touch. It supports Android OS with OPS option, Wi-Fi 6, Bluetooth, and multiple connectivity ports for daily teaching and presentations.",
    featuresEn: [
      "65-inch 4K UHD interactive display",
      "20-point touch for smooth writing",
      "Android OS with OPS/Windows optional",
      "Wi-Fi 6 and Bluetooth connectivity",
      "HDMI, USB, USB-C, and LAN ports",
    ],
    featuresKm: [
      "65-inch 4K UHD interactive display",
      "20-point touch for smooth writing",
      "Android OS with OPS/Windows optional",
      "Wi-Fi 6 and Bluetooth connectivity",
      "HDMI, USB, USB-C, and LAN ports",
    ],
    applicationsEn: [
      "Classrooms",
      "Meeting rooms",
      "Training centers",
      "Corporate presentations",
    ],
    applicationsKm: [
      "Classrooms",
      "Meeting rooms",
      "Training centers",
      "Corporate presentations",
    ],
    specs: [
      { labelEn: "Display Size", labelKm: "Display Size", valueEn: "65 inch", valueKm: "65 inch" },
      { labelEn: "Resolution", labelKm: "Resolution", valueEn: "3840 x 2160 (4K UHD)", valueKm: "3840 x 2160 (4K UHD)" },
      { labelEn: "Touch Points", labelKm: "Touch Points", valueEn: "20-point touch", valueKm: "20-point touch" },
      { labelEn: "Operating System", labelKm: "Operating System", valueEn: "Android (OPS optional)", valueKm: "Android (OPS optional)" },
      { labelEn: "Brightness", labelKm: "Brightness", valueEn: "350 nits", valueKm: "350 nits" },
      { labelEn: "Contrast Ratio", labelKm: "Contrast Ratio", valueEn: "4000:1", valueKm: "4000:1" },
    ],
    heroImage: "/images/products/ifp-18-65.webp",
    gallery: ["/images/products/ifp-18-65.webp"],
    tagsEn: ["Smart Board", "65 inch", "4K", "Interactive Flat Panel"],
    tagsKm: ["Smart Board", "65 inch", "4K", "Interactive Flat Panel"],
    seoTitleEn: "Ingscreen Interactive Panel 18 Series 65 Inch | 4K Smart Board",
    seoTitleKm: "Ingscreen Interactive Panel 18 Series 65 Inch | 4K Smart Board",
    seoDescEn:
      "65-inch 4K UHD interactive flat panel with 20-point touch, Android OS, and wireless sharing for classrooms and offices.",
    seoDescKm:
      "65-inch 4K UHD interactive flat panel with 20-point touch, Android OS, and wireless sharing for classrooms and offices.",
  },
  {
    id: "ifp-18-75",
    slug: "interactive-panel-18-series-75",
    categoryIds: ["interactive_panel"],
    primaryCategoryId: "interactive_panel",
    titleEn: "Interactive Panel 18 Series 75 Inch",
    titleKm: "Interactive Panel 18 Series 75 Inch",
    shortDescEn:
      "75-inch 4K smart board with 20/40-point touch for training rooms and classrooms.",
    shortDescKm:
      "75-inch 4K smart board with 20/40-point touch for training rooms and classrooms.",
    descriptionEn:
      "The 18 series 75-inch interactive panel provides 4K UHD visuals with 20/40-point touch. It supports Android OS, optional OPS, and wireless screen sharing for collaborative classrooms and meeting rooms.",
    descriptionKm:
      "The 18 series 75-inch interactive panel provides 4K UHD visuals with 20/40-point touch. It supports Android OS, optional OPS, and wireless screen sharing for collaborative classrooms and meeting rooms.",
    featuresEn: [
      "75-inch 4K UHD display for clear visibility",
      "20/40-point touch for multi-user collaboration",
      "Android OS with OPS/Windows optional",
      "Wi-Fi 6 and Bluetooth connectivity",
      "HDMI, USB, USB-C, and LAN ports",
    ],
    featuresKm: [
      "75-inch 4K UHD display for clear visibility",
      "20/40-point touch for multi-user collaboration",
      "Android OS with OPS/Windows optional",
      "Wi-Fi 6 and Bluetooth connectivity",
      "HDMI, USB, USB-C, and LAN ports",
    ],
    applicationsEn: [
      "Training rooms",
      "Classrooms",
      "Boardrooms",
      "Workshops",
    ],
    applicationsKm: [
      "Training rooms",
      "Classrooms",
      "Boardrooms",
      "Workshops",
    ],
    specs: [
      { labelEn: "Display Size", labelKm: "Display Size", valueEn: "75 inch", valueKm: "75 inch" },
      { labelEn: "Resolution", labelKm: "Resolution", valueEn: "3840 x 2160 (4K UHD)", valueKm: "3840 x 2160 (4K UHD)" },
      { labelEn: "Touch Points", labelKm: "Touch Points", valueEn: "20/40-point touch", valueKm: "20/40-point touch" },
      { labelEn: "Operating System", labelKm: "Operating System", valueEn: "Android (OPS optional)", valueKm: "Android (OPS optional)" },
      { labelEn: "Brightness", labelKm: "Brightness", valueEn: "350 nits", valueKm: "350 nits" },
      { labelEn: "Contrast Ratio", labelKm: "Contrast Ratio", valueEn: "4000:1", valueKm: "4000:1" },
    ],
    heroImage: "/images/products/ifp-18-75.webp",
    gallery: ["/images/products/ifp-18-75.webp"],
    tagsEn: ["Smart Board", "75 inch", "4K", "Interactive Flat Panel"],
    tagsKm: ["Smart Board", "75 inch", "4K", "Interactive Flat Panel"],
    seoTitleEn: "Interactive Panel 18 Series 75 Inch | 4K Smart Board",
    seoTitleKm: "Interactive Panel 18 Series 75 Inch | 4K Smart Board",
    seoDescEn:
      "75-inch 4K UHD interactive flat panel with 20/40-point touch for smart classrooms and training rooms.",
    seoDescKm:
      "75-inch 4K UHD interactive flat panel with 20/40-point touch for smart classrooms and training rooms.",
  },
  {
    id: "ifp-18-86",
    slug: "ingscreen-interactive-panel-18-series-86",
    categoryIds: ["interactive_panel"],
    primaryCategoryId: "interactive_panel",
    titleEn: "Ingscreen Interactive Panel 18 Series 86 Inch",
    titleKm: "Ingscreen Interactive Panel 18 Series 86 Inch",
    shortDescEn:
      "86-inch 4K interactive flat panel for large classrooms and boardrooms.",
    shortDescKm:
      "86-inch 4K interactive flat panel for large classrooms and boardrooms.",
    descriptionEn:
      "The 18 series 86-inch smart board delivers large-format 4K UHD visuals with 20-point touch. Android OS, wireless sharing, and multi-port connectivity support daily teaching and presentations.",
    descriptionKm:
      "The 18 series 86-inch smart board delivers large-format 4K UHD visuals with 20-point touch. Android OS, wireless sharing, and multi-port connectivity support daily teaching and presentations.",
    featuresEn: [
      "86-inch 4K UHD interactive display",
      "20-point touch for smooth collaboration",
      "Android OS with OPS/Windows optional",
      "Wi-Fi 6 and Bluetooth connectivity",
      "HDMI, USB, USB-C, and LAN ports",
    ],
    featuresKm: [
      "86-inch 4K UHD interactive display",
      "20-point touch for smooth collaboration",
      "Android OS with OPS/Windows optional",
      "Wi-Fi 6 and Bluetooth connectivity",
      "HDMI, USB, USB-C, and LAN ports",
    ],
    applicationsEn: [
      "Large classrooms",
      "Boardrooms",
      "Training halls",
      "Auditoriums",
    ],
    applicationsKm: [
      "Large classrooms",
      "Boardrooms",
      "Training halls",
      "Auditoriums",
    ],
    specs: [
      { labelEn: "Display Size", labelKm: "Display Size", valueEn: "86 inch", valueKm: "86 inch" },
      { labelEn: "Resolution", labelKm: "Resolution", valueEn: "3840 x 2160 (4K UHD)", valueKm: "3840 x 2160 (4K UHD)" },
      { labelEn: "Touch Points", labelKm: "Touch Points", valueEn: "20-point touch", valueKm: "20-point touch" },
      { labelEn: "Operating System", labelKm: "Operating System", valueEn: "Android (OPS optional)", valueKm: "Android (OPS optional)" },
      { labelEn: "Brightness", labelKm: "Brightness", valueEn: "350 nits", valueKm: "350 nits" },
      { labelEn: "Contrast Ratio", labelKm: "Contrast Ratio", valueEn: "4000:1", valueKm: "4000:1" },
    ],
    heroImage: "/images/products/ifp-18-86.webp",
    gallery: ["/images/products/ifp-18-86.webp"],
    tagsEn: ["Smart Board", "86 inch", "4K", "Interactive Flat Panel"],
    tagsKm: ["Smart Board", "86 inch", "4K", "Interactive Flat Panel"],
    seoTitleEn: "Ingscreen Interactive Panel 18 Series 86 Inch | 4K Smart Board",
    seoTitleKm: "Ingscreen Interactive Panel 18 Series 86 Inch | 4K Smart Board",
    seoDescEn:
      "86-inch 4K UHD interactive flat panel with 20-point touch for large classrooms and meeting rooms.",
    seoDescKm:
      "86-inch 4K UHD interactive flat panel with 20-point touch for large classrooms and meeting rooms.",
  },
  {
    id: "ifp-18-96",
    slug: "ingscreen-interactive-panel-18-series-96",
    categoryIds: ["interactive_panel"],
    primaryCategoryId: "interactive_panel",
    titleEn: "Ingscreen Interactive Panel 18 Series 96 Inch",
    titleKm: "Ingscreen Interactive Panel 18 Series 96 Inch",
    shortDescEn:
      "96-inch 4K interactive flat panel for large classrooms and training halls.",
    shortDescKm:
      "96-inch 4K interactive flat panel for large classrooms and training halls.",
    descriptionEn:
      "The 18 series 96-inch interactive flat panel provides large-format 4K UHD visuals with multi-touch collaboration. It supports Android OS, optional OPS, and wireless sharing for classrooms and conference spaces.",
    descriptionKm:
      "The 18 series 96-inch interactive flat panel provides large-format 4K UHD visuals with multi-touch collaboration. It supports Android OS, optional OPS, and wireless sharing for classrooms and conference spaces.",
    featuresEn: [
      "96-inch 4K UHD display for large rooms",
      "Multi-touch writing and annotation",
      "Android OS with OPS/Windows optional",
      "Wireless screen sharing and connectivity",
      "HDMI, USB, USB-C, and LAN ports",
    ],
    featuresKm: [
      "96-inch 4K UHD display for large rooms",
      "Multi-touch writing and annotation",
      "Android OS with OPS/Windows optional",
      "Wireless screen sharing and connectivity",
      "HDMI, USB, USB-C, and LAN ports",
    ],
    applicationsEn: [
      "Auditoriums",
      "Large classrooms",
      "Training halls",
      "Conference rooms",
    ],
    applicationsKm: [
      "Auditoriums",
      "Large classrooms",
      "Training halls",
      "Conference rooms",
    ],
    specs: [
      { labelEn: "Display Size", labelKm: "Display Size", valueEn: "96 inch", valueKm: "96 inch" },
      { labelEn: "Resolution", labelKm: "Resolution", valueEn: "3840 x 2160 (4K UHD)", valueKm: "3840 x 2160 (4K UHD)" },
      { labelEn: "Touch Points", labelKm: "Touch Points", valueEn: "Multi-touch", valueKm: "Multi-touch" },
      { labelEn: "Operating System", labelKm: "Operating System", valueEn: "Android (OPS optional)", valueKm: "Android (OPS optional)" },
      { labelEn: "Connectivity", labelKm: "Connectivity", valueEn: "HDMI, USB, USB-C, LAN", valueKm: "HDMI, USB, USB-C, LAN" },
    ],
    heroImage: "/images/products/ifp-18-96.webp",
    gallery: ["/images/products/ifp-18-96.webp"],
    tagsEn: ["Smart Board", "96 inch", "4K", "Interactive Flat Panel"],
    tagsKm: ["Smart Board", "96 inch", "4K", "Interactive Flat Panel"],
    seoTitleEn: "Ingscreen Interactive Panel 18 Series 96 Inch | 4K Smart Board",
    seoTitleKm: "Ingscreen Interactive Panel 18 Series 96 Inch | 4K Smart Board",
    seoDescEn:
      "96-inch 4K UHD interactive flat panel with multi-touch and Android OS for large classrooms and conference rooms.",
    seoDescKm:
      "96-inch 4K UHD interactive flat panel with multi-touch and Android OS for large classrooms and conference rooms.",
  },
  {
    id: "ifp-18-110",
    slug: "ingscreen-interactive-panel-18-series-110",
    categoryIds: ["interactive_panel"],
    primaryCategoryId: "interactive_panel",
    titleEn: "Ingscreen Interactive Panel 18 Series 110 Inch",
    titleKm: "Ingscreen Interactive Panel 18 Series 110 Inch",
    shortDescEn:
      "110-inch 4K interactive flat panel for auditoriums and premium boardrooms.",
    shortDescKm:
      "110-inch 4K interactive flat panel for auditoriums and premium boardrooms.",
    descriptionEn:
      "The 18 series 110-inch interactive panel delivers ultra-large 4K UHD visuals with 20-point touch. It supports Android OS, wireless screen sharing, and multiple connectivity options for large venues.",
    descriptionKm:
      "The 18 series 110-inch interactive panel delivers ultra-large 4K UHD visuals with 20-point touch. It supports Android OS, wireless screen sharing, and multiple connectivity options for large venues.",
    featuresEn: [
      "110-inch 4K UHD display for large venues",
      "20-point multi-touch collaboration",
      "Android OS with OPS/Windows optional",
      "Wireless screen sharing",
      "HDMI, USB, USB-C, and LAN ports",
    ],
    featuresKm: [
      "110-inch 4K UHD display for large venues",
      "20-point multi-touch collaboration",
      "Android OS with OPS/Windows optional",
      "Wireless screen sharing",
      "HDMI, USB, USB-C, and LAN ports",
    ],
    applicationsEn: [
      "Auditoriums",
      "Premium boardrooms",
      "Large training halls",
      "Public presentations",
    ],
    applicationsKm: [
      "Auditoriums",
      "Premium boardrooms",
      "Large training halls",
      "Public presentations",
    ],
    specs: [
      { labelEn: "Display Size", labelKm: "Display Size", valueEn: "110 inch", valueKm: "110 inch" },
      { labelEn: "Resolution", labelKm: "Resolution", valueEn: "3840 x 2160 (4K UHD)", valueKm: "3840 x 2160 (4K UHD)" },
      { labelEn: "Touch Points", labelKm: "Touch Points", valueEn: "20-point touch", valueKm: "20-point touch" },
      { labelEn: "Operating System", labelKm: "Operating System", valueEn: "Android (OPS optional)", valueKm: "Android (OPS optional)" },
      { labelEn: "Brightness", labelKm: "Brightness", valueEn: "350 nits", valueKm: "350 nits" },
      { labelEn: "Contrast Ratio", labelKm: "Contrast Ratio", valueEn: "4000:1", valueKm: "4000:1" },
    ],
    heroImage: "/images/products/ifp-18-110.webp",
    gallery: ["/images/products/ifp-18-110.webp"],
    tagsEn: ["Smart Board", "110 inch", "4K", "Interactive Flat Panel"],
    tagsKm: ["Smart Board", "110 inch", "4K", "Interactive Flat Panel"],
    seoTitleEn: "Ingscreen Interactive Panel 18 Series 110 Inch | 4K Smart Board",
    seoTitleKm: "Ingscreen Interactive Panel 18 Series 110 Inch | 4K Smart Board",
    seoDescEn:
      "110-inch 4K UHD interactive flat panel with 20-point touch for auditoriums and premium boardrooms.",
    seoDescKm:
      "110-inch 4K UHD interactive flat panel with 20-point touch for auditoriums and premium boardrooms.",
  },
];

export function getAllProducts() {
  return PRODUCTS;
}

export function getProductBySlug(slug: string) {
  const normalize = (value: string) =>
    decodeURIComponent(value).trim().toLowerCase();
  const target = normalize(slug);
  return PRODUCTS.find((p) => normalize(p.slug) === target);
}

export function getProductsByCategory(categoryId: string) {
  return PRODUCTS.filter((p) => p.categoryIds.includes(categoryId));
}

export function getCategoryById(categoryId: string) {
  return PRODUCT_CATEGORIES.find((c) => c.id === categoryId);
}







