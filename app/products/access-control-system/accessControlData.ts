// app/products/access-control-system/accessControlData.ts

export type AccessControlItem = {
  id: string;
  slug: string;
  titleEn: string;
  titleKm: string;
  shortEn: string;
  shortKm: string;
  bestForEn: string;
  bestForKm: string;
  highlightsEn: string[];
  highlightsKm: string[];
  specs: { kEn: string; vEn: string; kKm: string; vKm: string }[];
  tagsEn: string[];
  tagsKm: string[];
  img?: string; // put image in /public/images/
};

export const ACCESS_CONTROL_ITEMS: AccessControlItem[] = [
  {
    id: "ac-1",
    slug: "rfid-door-access-kit",
    titleEn: "RFID Door Access Kit",
    titleKm: "ឧបករណ៍ RFID សម្រាប់ទ្វារ (ឈុតគ្រប់គ្រងការចូលតាមទ្វារ)",
    shortEn:
      "RFID card access with controller, reader, lock and exit button for offices.",
    shortKm:
      "ប្រព័ន្ធចូលទ្វារដោយកាត RFID ជាមួយ controller, reader, lock និង exit button សម្រាប់ការិយាល័យ។",
    bestForEn: "Office doors, staff entry, restricted rooms",
    bestForKm: "ទ្វារការិយាល័យ, ច្រកបុគ្គលិក, បន្ទប់មានកំណត់",
    highlightsEn: [
      "Card + PIN options",
      "Fail-safe / fail-secure lock selection",
      "Clean wiring + installation support",
    ],
    highlightsKm: [
      "ជម្រើសកាត + PIN",
      "ជ្រើស lock តាម fail-safe / fail-secure",
      "ជំនួយ wiring និងដំឡើងស្អាត",
    ],
    specs: [
      { kEn: "Credential", vEn: "RFID card / PIN", kKm: "Credential", vKm: "កាត RFID / PIN" },
      { kEn: "Typical use", vEn: "1–2 doors (expandable)", kKm: "ការប្រើប្រាស់", vKm: "១–២ ទ្វារ (អាចបន្ថែម)" },
      { kEn: "Integration", vEn: "Attendance/door log", kKm: "Integration", vKm: "Attendance/ប្រវត្តិចូល" },
    ],
    tagsEn: ["RFID", "Door Lock", "Controller"],
    tagsKm: ["RFID", "Door Lock", "Controller"],
    img: "/images/access-rfid-kit.webp",
  },

  {
    id: "ac-2",
    slug: "face-recognition-terminal",
    titleEn: "Face Recognition Terminal",
    titleKm: "ម៉ាស៊ីនស្គាល់មុខ (ស្ថានីយផ្ទៀងផ្ទាត់មុខ)",
    shortEn:
      "Fast identification for attendance + access with door relay output.",
    shortKm:
      "សម្គាល់មុខលឿន សម្រាប់ attendance + access និងមាន output ទៅកាន់ទ្វារ។",
    bestForEn: "Factory gates, office reception, time attendance",
    bestForKm: "ច្រករោងចក្រ, reception ការិយាល័យ, time attendance",
    highlightsEn: [
      "Touchless authentication",
      "User database + logs",
      "Works with door lock & turnstile relay",
    ],
    highlightsKm: [
      "Authentication ដោយមិនចាំបាច់ប៉ះ",
      "ទិន្នន័យអ្នកប្រើ + logs",
      "អាចភ្ជាប់ lock ទ្វារ និង turnstile relay",
    ],
    specs: [
      { kEn: "Credential", vEn: "Face / Card (optional)", kKm: "Credential", vKm: "មុខ / កាត (ជម្រើស)" },
      { kEn: "Use case", vEn: "Attendance + access", kKm: "Use case", vKm: "Attendance + access" },
      { kEn: "Network", vEn: "LAN/Wi-Fi (model dependent)", kKm: "Network", vKm: "LAN/Wi-Fi (អាស្រ័យម៉ូដែល)" },
    ],
    tagsEn: ["Face", "Attendance", "Door Relay"],
    tagsKm: ["Face", "Attendance", "Door Relay"],
    img: "/images/access-face-terminal.webp",
  },

  {
    id: "ac-3",
    slug: "card-reader",
    titleEn: "RFID Card Reader",
    titleKm: "ឧបករណ៍អានកាត RFID (ឧបករណ៍អានកាត)",
    shortEn: "Reliable proximity reader for indoor/outdoor doors.",
    shortKm: "Reader មានស្ថេរភាព សម្រាប់ទ្វារក្នុង/ក្រៅអគារ។",
    bestForEn: "Door entry points, lifts, restricted areas",
    bestForKm: "ច្រកទ្វារ, លីហ្វ, តំបន់មានកំណត់",
    highlightsEn: ["Wiegand/RS485 options", "Weather resistant options", "Stable reading distance"],
    highlightsKm: ["ជម្រើស Wiegand/RS485", "ជម្រើសការពារអាកាសធាតុ", "ចម្ងាយអានមានស្ថេរភាព"],
    specs: [
      { kEn: "Interface", vEn: "Wiegand / RS485", kKm: "Interface", vKm: "Wiegand / RS485" },
      { kEn: "Mounting", vEn: "Wall / door frame", kKm: "Mounting", vKm: "ជញ្ជាំង / ស៊ុមទ្វារ" },
      { kEn: "Environment", vEn: "Indoor/Outdoor (model)", kKm: "Environment", vKm: "ក្នុង/ក្រៅអគារ (អាស្រ័យម៉ូដែល)" },
    ],
    tagsEn: ["Reader", "RFID", "Entry"],
    tagsKm: ["Reader", "RFID", "Entry"],
    img: "/images/access-card-reader.webp",
  },

  {
    id: "ac-4",
    slug: "magnetic-lock",
    titleEn: "Magnetic Lock (Maglock)",
    titleKm: "សោម៉ាញេទិក (សោមេដែក)",
    shortEn: "Strong holding force for glass/wood/metal doors.",
    shortKm: "សោខ្លាំង សម្រាប់ទ្វារកញ្ចក់/ឈើ/ដែក។",
    bestForEn: "Office doors, emergency release setups",
    bestForKm: "ទ្វារការិយាល័យ, setup មាន emergency release",
    highlightsEn: ["Different holding force options", "Works with access controller", "Clean bracket solution"],
    highlightsKm: ["ជម្រើសកម្លាំងចាប់ផ្សេងៗ", "ភ្ជាប់ជាមួយ controller", "bracket ដំឡើងស្អាត"],
    specs: [
      { kEn: "Lock type", vEn: "Electromagnetic", kKm: "Lock type", vKm: "Electromagnetic" },
      { kEn: "Door type", vEn: "Glass/Wood/Metal", kKm: "Door type", vKm: "កញ្ចក់/ឈើ/ដែក" },
      { kEn: "Safety", vEn: "Fire/emergency release planning", kKm: "Safety", vKm: "ផែនការ fire/emergency release" },
    ],
    tagsEn: ["Maglock", "Door", "Security"],
    tagsKm: ["Maglock", "Door", "Security"],
    img: "/images/access-maglock.webp",
  },
];
