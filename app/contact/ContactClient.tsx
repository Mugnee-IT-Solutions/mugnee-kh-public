import Link from "next/link";
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_E164, BUSINESS_WHATSAPP_URL } from "../lib/nap";
import ContactForm from "./ContactForm";

const socialLinks = [
  { label: "Facebook", platform: "facebook", href: "https://www.facebook.com/mugneemultiple/" },
  { label: "YouTube", platform: "youtube", href: "https://www.youtube.com/@MugneeTech" },
  { label: "X (Twitter)", platform: "x", href: "https://x.com/mugneeml" },
  { label: "Instagram", platform: "instagram", href: "https://www.instagram.com/sm.mugnee/" },
  { label: "LinkedIn", platform: "linkedin", href: "https://www.linkedin.com/company/mugnee-multiple-limited/" },
  { label: "Telegram", platform: "telegram", href: "https://t.me/mugneemultiple" },
  {
    label: "WhatsApp",
    platform: "whatsapp",
    href: BUSINESS_WHATSAPP_URL,
  },
  { label: "Pinterest", platform: "pinterest", href: "https://www.pinterest.com/mugneeml/" },
];

const offices = [
  {
    title: "Cambodia Office",
    subtitle: "Sales & Installation Support Office (Cambodia)",
    lines: [
      "1st Floor, 11E0, Street 108, Night Market Area",
      "Doun Penh, Phnom Penh, Cambodia",
    ],
  },
  {
    title: "Corporate Office (Bangladesh)",
    subtitle: "Corporate & Project Coordination Office",
    lines: ["4th Floor, 102/1, West Agargaon, Dhaka"],
  },
  {
    title: "Head Office (Bangladesh)",
    subtitle: "Sales, Installation & Operations Center",
    lines: ["3rd Floor, 36-37 Umesh Datta Road, Bakshibazar, Dhaka - 1211"],
  },
];

const contacts = [
  { label: "Phone", value: BUSINESS_PHONE_DISPLAY },
  { label: "Email", value: BUSINESS_EMAIL },
];

const officesKm = [
  {
    title: "ការិយាល័យកម្ពុជា",
    subtitle: "ការិយាល័យលក់ និងគាំទ្រការដំឡើង (កម្ពុជា)",
    lines: [
      "ជាន់ទី 1, 11E0, ផ្លូវ 108, តំបន់ Night Market",
      "ដូនពេញ, ភ្នំពេញ, កម្ពុជា",
    ],
  },
  {
    title: "ការិយាល័យក្រុមហ៊ុន (បង់ក្លាដែស)",
    subtitle: "ការិយាល័យសម្របសម្រួលគម្រោង និងក្រុមហ៊ុន",
    lines: ["ជាន់ទី 4, 102/1, West Agargaon, Dhaka"],
  },
  {
    title: "ការិយាល័យកណ្តាល (បង់ក្លាដែស)",
    subtitle: "មជ្ឈមណ្ឌលលក់ ដំឡើង និងប្រតិបត្តិការ",
    lines: ["ជាន់ទី 3, 36-37 Umesh Datta Road, Bakshibazar, Dhaka - 1211"],
  },
];

const contactsKm = [
  { label: "ទូរស័ព្ទ", value: BUSINESS_PHONE_DISPLAY },
  { label: "អ៊ីមែល", value: BUSINESS_EMAIL },
];

const uiKm = {
  eyebrow: "ទាក់ទងយើង",
  h1: "ទាក់ទងមកយើង",
  heroDesc:
    "មានគម្រោងក្នុងចិត្តមែនទេ? សូមទាក់ទង Mugnee Cambodia សម្រាប់ដំណោះស្រាយ LED display, digital signage, smart classroom, PA system និង access control ជាមួយការគាំទ្របច្ចេកទេសបែប end-to-end។ សូមចែករំលែកទីតាំង ប្រភេទការប្រើប្រាស់ ថវិកា និងពេលវេលា ដើម្បីឲ្យក្រុមយើងរៀបចំផែនការតម្លៃ និងដំណោះស្រាយសមស្រប។",
  ctaContact: "ទាក់ទងយើង",
  ctaExplore: "មើលដំណោះស្រាយ",
  serving: "បម្រើសេវា៖ ភ្នំពេញ - សៀមរាប - ព្រះសីហនុ",
  formTitle: "ទម្រង់ទំនាក់ទំនង",
  formDesc: "សូមបំពេញទម្រង់ ហើយក្រុមយើងនឹងទាក់ទងអ្នកឲ្យបានឆាប់តាមដែលអាចធ្វើបាន។",
  name: "ឈ្មោះរបស់អ្នក",
  email: "អ៊ីមែលរបស់អ្នក",
  phone: "លេខទូរស័ព្ទ",
  subject: "ប្រធានបទ",
  message: "សាររបស់អ្នក",
  submit: "ផ្ញើ",
  getInTouch: "ព័ត៌មានទំនាក់ទំនង",
  follow: "តាមដានយើង",
  officeLocations: "ទីតាំងការិយាល័យ",
  officeNote:
    "ការិយាល័យកម្ពុជាគាំទ្រការលក់ និងការដំឡើងក្នុងតំបន់។ ការិយាល័យបង់ក្លាដែសគ្រប់គ្រងការសម្របសម្រួលប្រតិបត្តិការ។",
  localSupport: "គាំទ្រក្នុងតំបន់",
  localTitle: "ការិយាល័យកម្ពុជា និងគាំទ្រគម្រោង",
  localDesc:
    "ពិភាក្សាជាមួយវិស្វករក្នុងតំបន់ សម្រាប់ការស្ទង់ទីតាំង កំណត់ទំហំ អនុសាសន៍ pixel pitch និងផែនការតម្លៃគម្រោង។",
  localShare:
    "សូមចែករំលែកទីតាំង ទំហំអេក្រង់ និងប្រភេទការប្រើប្រាស់។ យើងនឹងណែនាំការកំណត់រចនាសមស្រប និងវិសាលភាពតម្លៃ។",
  requestQuote: "ស្នើសុំតម្លៃ",
  contactOffice: "ទាក់ទងការិយាល័យកម្ពុជា",
  officeKh: "ការិយាល័យ (កម្ពុជា)",
  phoneLabel: "ទូរស័ព្ទ",
  hoursLabel: "ម៉ោងធ្វើការ",
  hoursValue: "ចន្ទ-សៅរ៍, 8:30am-6:00pm",
  fastTitle: "ត្រូវការសំណើរហ័សមែនទេ?",
  fastDesc:
    "ផ្ញើព័ត៌មានទីតាំង និងតម្រូវការរបស់អ្នក។ យើងនឹងចែករំលែកផ្លូវដំណោះស្រាយជាក់ស្តែង និងវិសាលភាពតម្លៃ។",
  viewSolutions: "មើលដំណោះស្រាយ",
  viewProducts: "មើលផលិតផល",
  sendError: "មិនអាចផ្ញើសារបានទេ។ សូមព្យាយាមម្ដងទៀត។",
  serverError: "មិនអាចភ្ជាប់ទៅម៉ាស៊ីនមេបានទេ។ សូមព្យាយាមម្ដងទៀត។",
  success: "សាររបស់អ្នកត្រូវបានផ្ញើជោគជ័យ។ ក្រុមការងារយើងនឹងទាក់ទងត្រឡប់វិញឆាប់ៗនេះ។",
};

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M13.5 21v-7h2.3l.5-2.8h-2.8V9.6c0-.8.3-1.4 1.5-1.4h1.4V5.7c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.7v2h-2.3V14h2.3v7h2.7z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M23 12s0-3.6-.5-5.2c-.3-.9-1-1.6-1.9-1.9C19 4.5 12 4.5 12 4.5s-7 0-8.6.4c-.9.3-1.6 1-1.9 1.9C1 8.4 1 12 1 12s0 3.6.5 5.2c.3.9 1 1.6 1.9 1.9 1.6.4 8.6.4 8.6.4s7 0 8.6-.4c.9-.3 1.6-1 1.9-1.9.5-1.6.5-5.2.5-5.2zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.2 22H3l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8zm8.7 1.4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.9A3.1 3.1 0 1 0 12 15a3.1 3.1 0 0 0 0-6.2z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.8-1.8-2.8s-2 1.3-2 2.7V21h-4V9z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-3.6 19.3c0-.8 0-2 .2-2.9l1.4-5.8s-.3-.6-.3-1.4c0-1.3.8-2.3 1.8-2.3.8 0 1.2.6 1.2 1.3 0 .8-.5 2-.8 3-.3.9.7 1.6 1.6 1.6 1.9 0 3.4-2 3.4-4.8 0-2.5-1.8-4.3-4.4-4.3A4.6 4.6 0 0 0 9.2 10c0 .9.3 1.8.8 2.3.1.1.1.2.1.4l-.3 1.2c0 .2-.2.3-.4.2-1.5-.6-2.4-2.4-2.4-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.2 6.3-1 0-2-.5-2.3-1.2l-.6 2.3c-.2.8-.7 1.9-1 2.6.8.2 1.5.3 2.3.3A10 10 0 1 0 12 2z" />
        </svg>
      );
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M9.6 15.5 9.2 20c.6 0 .9-.3 1.3-.6l3.1-3 6.5 4.8c1.2.6 2 .3 2.3-1.1L24 3.2v-.1c.4-1.7-.6-2.3-1.8-1.9L1.2 9.3c-1.7.6-1.7 1.5-.3 2l5.4 1.7L19 5.1c.6-.4 1.1-.2.6.2" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 448 512" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 2 131.5 2 253.9c0 39.1 10.2 77.3 29.6 111L0 480l118.7-31.2c32.7 17.9 69.6 27.3 107.4 27.3h.1c122.3 0 221.9-99.6 221.9-221.9 0-59.3-23.1-115-65.2-157.1zM223.9 438.7h-.1c-33.1 0-65.5-8.9-93.7-25.7l-6.7-4-70.4 18.5 18.8-68.6-4.4-7.1c-18.7-29.7-28.6-64-28.6-99.2C38.8 154 125 67.8 223.9 67.8c48 0 93.1 18.7 127 52.6 33.9 33.9 52.6 79 52.6 127 0 98.9-86.2 191.3-179.6 191.3zm101.8-138.2c-5.5-2.7-32.8-16.1-37.9-18-5.1-1.9-8.8-2.7-12.5 2.7-3.7 5.5-14.3 18-17.6 21.7-3.2 3.7-6.5 4.1-12 1.4-32.6-16.3-54-29.1-75.5-65.9-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.6-1.4-2.7-12.5-30-17.1-41-4.5-10.8-9.1-9.4-12.5-9.6-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.6 1.4-14.6 6.9-5.1 5.5-19.3 18.8-19.3 45.7 0 26.9 19.8 52.9 22.5 56.6 2.7 3.7 39 59.5 94.4 83.4 35 15.1 48.7 16.4 66.2 14 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5-3.7-10.5-6.4z" />
        </svg>
      );
    default:
      return null;
  }
}

type ContactClientProps = {
  lang?: "en" | "km";
};

export default function ContactClient({ lang = "en" }: ContactClientProps = {}) {
  const isKm = lang === "km";
  const officesData = isKm ? officesKm : offices;
  const contactsData = isKm ? contactsKm : contacts;

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-8 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">{isKm ? uiKm.eyebrow : "Contact Us"}</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {isKm ? uiKm.h1 : "Get in Touch"}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {isKm
              ? uiKm.heroDesc
              : "Have a project in mind? Contact Mugnee Cambodia for LED display, digital signage, smart classroom, PA system, and access control solutions with end-to-end technical support. Share your site location, use case, budget range, and timeline, and our team will provide a practical quotation plan, site survey guidance, and deployment recommendations tailored for Cambodia business environments."}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${BUSINESS_PHONE_E164}`}
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
            >
              {isKm ? uiKm.ctaContact : "Contact Us"}
            </a>
            <Link
              href="/solutions/"
              className="rounded-xl border border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md"
            >
              {isKm ? uiKm.ctaExplore : "Explore Solutions"}
            </Link>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            {isKm ? uiKm.serving : "Serving Phnom Penh - Siem Reap - Sihanoukville"}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm
              labels={{
                title: isKm ? uiKm.formTitle : "Contact Form",
                desc: isKm
                  ? uiKm.formDesc
                  : "Fill out the form and our team will contact you as soon as possible with the next steps.",
                name: isKm ? uiKm.name : "Your Name",
                email: isKm ? uiKm.email : "Your Email",
                phone: isKm ? uiKm.phone : "Phone Number",
                subject: isKm ? uiKm.subject : "Subject",
                message: isKm ? uiKm.message : "Your Message",
                submit: isKm ? uiKm.submit : "Submit",
                sending: isKm ? "កំពុងផ្ញើ..." : "Sending...",
                sendError: isKm ? uiKm.sendError : "Unable to send your message. Please try again.",
                serverError: isKm ? uiKm.serverError : "Could not connect to server. Please try again.",
                success: isKm
                  ? uiKm.success
                  : "Your message was sent successfully. Our team will contact you soon.",
              }}
            />

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {isKm ? uiKm.getInTouch : "Get In Touch"}
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {contactsData.map((c) => (
                  <li key={c.label} className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-slate-900">{c.label}</span>
                    <span>{c.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <h3 className="text-sm font-semibold text-slate-900">{isKm ? uiKm.follow : "Follow Us"}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {socialLinks.map((s) => {
                    const toneClass =
                      s.platform === "facebook"
                        ? "bg-[#1877F2] text-white"
                        : s.platform === "youtube"
                          ? "bg-[#FF0000] text-white"
                          : s.platform === "linkedin"
                            ? "bg-[#0A66C2] text-white"
                            : s.platform === "x"
                              ? "bg-black text-white"
                              : s.platform === "instagram"
                                ? "bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-white"
                                : s.platform === "telegram"
                                  ? "bg-[#229ED9] text-white"
                                  : s.platform === "whatsapp"
                                    ? "bg-[#25D366] text-white"
                                    : "bg-[#E60023] text-white";

                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        title={s.label}
                        className={[
                          "inline-flex h-10 w-10 items-center justify-center rounded-full no-underline shadow-sm transition-all duration-300",
                          "hover:-translate-y-0.5 hover:shadow-md hover:no-underline",
                          toneClass,
                        ].join(" ")}
                      >
                        <SocialIcon platform={s.platform} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            {isKm ? uiKm.officeLocations : "Office Locations"}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {officesData.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="text-sm font-semibold text-slate-900">{o.title}</div>
                <p className="mt-1 text-sm text-slate-600">{o.subtitle}</p>
                <div className="mt-2 text-sm leading-relaxed text-slate-700">
                  {o.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            {isKm
              ? uiKm.officeNote
              : "Cambodia office supports local sales and installation. Bangladesh offices handle regional coordination and operations support."}
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {isKm ? uiKm.localSupport : "Local support"}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {isKm ? uiKm.localTitle : "Cambodia Office & Project Support"}
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {isKm
              ? uiKm.localDesc
              : "Talk to a local engineer for site survey, sizing, pixel pitch guidance, and a project-based quotation for your Cambodia deployment."}
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm text-slate-600">
                  {isKm
                    ? uiKm.localShare
                    : "Share your location, screen size, and use case. We will recommend a practical configuration and quotation scope."}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(15,23,42,0.45)]"
                  >
                    {isKm ? uiKm.requestQuote : "Request a Quotation"}
                  </Link>
                  <a
                    href={`tel:${BUSINESS_PHONE_E164}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
                  >
                    {isKm ? uiKm.contactOffice : "Contact Cambodia Office"}
                  </a>
                </div>
              </div>

              <div className="text-sm text-slate-600">
                <p className="font-semibold text-slate-900">{isKm ? uiKm.officeKh : "Office (Cambodia)"}</p>
                <p className="mt-2">
                  1st Floor, 11E0, Street 108, Night Market Area, Doun Penh, Phnom Penh,
                  Cambodia
                </p>
                <p className="mt-2">
                  {isKm
                    ? `${uiKm.phoneLabel}: ${BUSINESS_PHONE_DISPLAY}`
                    : `Phone: ${BUSINESS_PHONE_DISPLAY}`}
                </p>
                <p className="mt-2">
                  {isKm ? `${uiKm.hoursLabel}: ${uiKm.hoursValue}` : "Hours: Mon-Sat, 8:30am-6:00pm"}
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Mugnee Cambodia Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.3322027815047!2d104.92304627050727!3d11.573972618867787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e6231c345b%3A0xebf28967942f76b6!2sMugnee%20Multiple%20Co.%2C%20Ltd!5e1!3m2!1sen!2sbd!4v1770445691312!5m2!1sen!2sbd"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              {isKm ? uiKm.fastTitle : "Need a Fast Proposal?"}
            </h2>
            <p className="mt-2 text-slate-600">
              {isKm
                ? uiKm.fastDesc
                : "Send your site details and requirements. We will share a practical solution path and quotation scope."}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/solutions/"
                className="inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                {isKm ? uiKm.viewSolutions : "View Solutions"}
              </Link>
              <Link
                href="/products/"
                className="inline-flex rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
              >
                {isKm ? uiKm.viewProducts : "View Products"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
