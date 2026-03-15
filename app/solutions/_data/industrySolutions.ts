export type SolutionFaq = { q: string; a: string };
export type SolutionLink = { label: string; href: string };

export type IndustrySolution = {
  slug: string;
  title: string;
  description: string;
  heroIntro: string;
  problemContext: string[];
  deploymentWorkflow: string[];
  integrationScope: string[];
  budgetFactors: string[];
  faqs: SolutionFaq[];
  internalLinks: SolutionLink[];
};

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    slug: "retail-digital-signage-cambodia",
    title: "Retail Digital Signage Solutions in Cambodia",
    description:
      "Project-focused retail digital signage planning and deployment in Cambodia for malls, showrooms, and storefronts with local execution and after-sales support.",
    heroIntro:
      "This solution is designed for retailers who need clearer in-store communication, stronger campaign visibility, and consistent multi-branch rollout standards.",
    problemContext: [
      "Retail teams struggle with inconsistent campaign display quality across branches.",
      "Storefront communication is often not aligned with customer journey and dwell zones.",
      "Operations teams need a repeatable rollout process for new outlets and seasonal promotions.",
    ],
    deploymentWorkflow: [
      "Site survey and customer-flow mapping by zone (entry, shelf, cashier, waiting area).",
      "Display placement and content workflow planning with branch-level standards.",
      "Installation, content validation, and acceptance checklist before go-live.",
      "Staff handover and local maintenance support for daily campaign operations.",
    ],
    integrationScope: [
      "Centralized content scheduling and branch content governance.",
      "Campaign timing alignment across multiple retail locations.",
      "Optional integration with event calendars and promotional workflows.",
    ],
    budgetFactors: [
      "Number of branches and number of display zones per branch.",
      "Mounting complexity, electrical preparation, and network readiness.",
      "Content operation model (centralized vs branch-managed).",
      "Support SLA level and planned expansion timeline.",
    ],
    faqs: [
      {
        q: "Is this solution suitable for both malls and independent stores?",
        a: "Yes. The rollout model is adaptable for both single stores and mall-scale multi-zone deployments.",
      },
      {
        q: "Can we start with one branch and expand later?",
        a: "Yes. The workflow supports phased deployment so you can pilot first and scale with the same standards.",
      },
      {
        q: "Do you support campaign operations after deployment?",
        a: "Yes. We provide operational guidance and local support to keep campaign delivery stable.",
      },
    ],
    internalLinks: [
      { label: "Indoor LED Display", href: "/led-display/indoor-led-display/" },
      { label: "Outdoor LED Display", href: "/led-display/outdoor-led-display/" },
      { label: "Digital Signage Products", href: "/led-display/" },
      { label: "Video Processor Options", href: "/led-display/video-processor/" },
      { label: "Contact Project Team", href: "/contact/" },
    ],
  },
  {
    slug: "hotel-display-solutions-cambodia",
    title: "Hotel Display Solutions in Cambodia",
    description:
      "Hospitality-focused display solution planning in Cambodia for lobbies, event venues, guest communication points, and property-wide announcement workflows.",
    heroIntro:
      "Built for hotels that need premium guest communication, event visibility, and brand consistency from lobby arrival to ballroom operations.",
    problemContext: [
      "Hotel teams need clear guest-facing communication without disrupting premium interior experience.",
      "Event and banquet areas require reliable display workflows for frequent schedule changes.",
      "Multiple departments need a single coordination model for guest information updates.",
    ],
    deploymentWorkflow: [
      "Property walkthrough to identify guest communication touchpoints.",
      "Zone-by-zone deployment planning for lobby, restaurant, event, and conference areas.",
      "Installation and content workflow configuration with department ownership mapping.",
      "Operator onboarding for front office and event teams with support handover.",
    ],
    integrationScope: [
      "Event schedule and conference announcement synchronization.",
      "Departmental content ownership model for operations, events, and marketing.",
      "Optional connection with central communication and paging workflows.",
    ],
    budgetFactors: [
      "Number of guest-facing zones and property layout complexity.",
      "Mounting type and site preparation requirements by area.",
      "Operational requirements for event-heavy versus standard properties.",
      "Support model for peak seasons and high-occupancy periods.",
    ],
    faqs: [
      {
        q: "Can this solution support both daily guest communication and events?",
        a: "Yes. The architecture covers routine guest messaging and rapid event-based updates.",
      },
      {
        q: "Is this suitable for boutique hotels and large properties?",
        a: "Yes. We can scope for single-property boutique workflows or multi-zone enterprise hotels.",
      },
      {
        q: "Do you provide onsite support during early operation?",
        a: "Yes. We provide initial stabilization support and operational guidance after handover.",
      },
    ],
    internalLinks: [
      { label: "Indoor LED Display", href: "/led-display/indoor-led-display/" },
      { label: "Interactive Flat Panel", href: "/interactive-flat-panel/" },
      { label: "PA System", href: "/pa-system/" },
      { label: "Digital Signage Products", href: "/led-display/" },
      { label: "Request Quotation", href: "/contact/" },
    ],
  },
  {
    slug: "indoor-communication-solutions-cambodia",
    title: "Indoor Communication Solutions in Cambodia",
    description:
      "Indoor communication solution planning in Cambodia for lobbies, conference areas, waiting zones, and visitor-facing spaces with local implementation support.",
    heroIntro:
      "Designed for organizations that need clear indoor messaging flow for guests, staff, and visitors across reception, conference, and event environments.",
    problemContext: [
      "Indoor communication points are often placed without visitor-flow planning, reducing message visibility.",
      "Many facilities use mixed display setups that create inconsistent communication quality across zones.",
      "Operations teams need a practical handover model so daily content updates remain stable after go-live.",
    ],
    deploymentWorkflow: [
      "Indoor zone survey for lobby, reception, waiting, corridor, and meeting-area communication points.",
      "Message hierarchy and placement planning based on dwell time and movement direction.",
      "Installation, display validation, and visibility checks from real user viewing positions.",
      "Operator onboarding for routine scheduling and support handover for ongoing operations.",
    ],
    integrationScope: [
      "Departmental message governance for operations, front desk, and marketing teams.",
      "Content scheduling alignment for routine updates and event-day communication.",
      "Optional integration with conference workflows and internal communication touchpoints.",
    ],
    budgetFactors: [
      "Number of indoor zones and communication touchpoints per floor.",
      "Mounting method, cable routing complexity, and site-preparation readiness.",
      "Daily content operation model and handover requirements.",
      "Support SLA scope and expansion plan for additional areas.",
    ],
    faqs: [
      {
        q: "Is this solution suitable for office receptions and hotel lobbies?",
        a: "Yes. It is built for visitor-facing indoor spaces where communication clarity and consistency are critical.",
      },
      {
        q: "Can we deploy only selected indoor zones first?",
        a: "Yes. The rollout can begin with priority zones and expand in phases using the same planning standards.",
      },
      {
        q: "Do you provide operational guidance after installation?",
        a: "Yes. We provide handover training and local support for stable day-to-day communication operation.",
      },
    ],
    internalLinks: [
      { label: "Hotel Display Solutions", href: "/solutions/hotel-display-solutions-cambodia/" },
      { label: "Indoor LED Display", href: "/led-display/indoor-led-display/" },
      { label: "Digital Signage Products", href: "/led-display/" },
      { label: "Interactive Flat Panel", href: "/interactive-flat-panel/" },
      { label: "Request Quotation", href: "/contact/" },
    ],
  },
  {
    slug: "outdoor-campaign-solutions-cambodia",
    title: "Outdoor Campaign Solutions in Cambodia",
    description:
      "Outdoor campaign communication solution planning in Cambodia for storefronts, roadside visibility, and high-traffic promotion zones with local execution support.",
    heroIntro:
      "Built for brands and retailers that need stronger outdoor campaign impact, repeatable branch rollout standards, and reliable operation under local conditions.",
    problemContext: [
      "Campaign visibility often drops because placement does not match traffic direction and viewing distance.",
      "Multi-branch campaign consistency is difficult without standardized deployment and operation workflow.",
      "Teams need local support for recurring promotional changes and stable outdoor operation.",
    ],
    deploymentWorkflow: [
      "Traffic-flow and frontage assessment to identify campaign-critical visibility points.",
      "Placement and rollout planning for recurring promotions across one or multiple locations.",
      "Installation, brightness and readability validation, and acceptance checks for operating hours.",
      "Campaign operation handover and support setup for recurring content cycles.",
    ],
    integrationScope: [
      "Campaign calendar alignment across branches and storefront touchpoints.",
      "Promotion workflow coordination for marketing and operations teams.",
      "Optional integration with centralized content scheduling and reporting workflows.",
    ],
    budgetFactors: [
      "Number of campaign sites and communication points per location.",
      "Outdoor installation conditions, structure requirements, and power readiness.",
      "Campaign change frequency and required operational support model.",
      "Planned expansion to additional branches and long-term support scope.",
    ],
    faqs: [
      {
        q: "Can this solution support recurring promotions every month?",
        a: "Yes. The workflow is structured for repeat campaign cycles with consistent branch-level execution.",
      },
      {
        q: "Is this only for large chains, or can single stores use it too?",
        a: "Both. The model works for single-store campaigns and multi-branch rollout programs.",
      },
      {
        q: "Do you provide local support during campaign operation?",
        a: "Yes. We support operational continuity and local troubleshooting during active campaign periods.",
      },
    ],
    internalLinks: [
      { label: "Retail Digital Signage Solutions", href: "/solutions/retail-digital-signage-cambodia/" },
      { label: "Outdoor LED Display", href: "/led-display/outdoor-led-display/" },
      { label: "LED Display Hub", href: "/led-display/" },
      { label: "Video Processor", href: "/led-display/video-processor/" },
      { label: "Contact Project Team", href: "/contact/" },
    ],
  },
  {
    slug: "factory-pa-announcement-cambodia",
    title: "Factory PA Announcement Solutions in Cambodia",
    description:
      "Factory-wide PA and announcement solution planning in Cambodia with zoning, emergency messaging workflow, and site-operations support.",
    heroIntro:
      "Designed for industrial sites that require dependable announcement coverage, shift communication, and safety-oriented broadcast workflows.",
    problemContext: [
      "Factories need consistent voice coverage across noisy and distributed production areas.",
      "Safety and operations teams require clear emergency and routine broadcast separation.",
      "Large sites often need phased rollout and standardized maintenance planning.",
    ],
    deploymentWorkflow: [
      "Factory noise and zone assessment for practical announcement coverage planning.",
      "Broadcast hierarchy setup for routine, priority, and emergency messaging.",
      "Installation and commissioning with acceptance tests by zone and shift condition.",
      "Operator SOP handover with maintenance and escalation workflow setup.",
    ],
    integrationScope: [
      "Zone-based paging and factory-wide broadcast routing.",
      "Emergency communication alignment with plant operational procedures.",
      "Optional integration with access workflow and central operations control.",
    ],
    budgetFactors: [
      "Site area, number of zones, and environmental complexity.",
      "Required redundancy and continuity requirements for operations.",
      "Shift operation profile and messaging frequency needs.",
      "Support SLA and preventive maintenance scope.",
    ],
    faqs: [
      {
        q: "Can this solution separate routine and emergency announcements?",
        a: "Yes. We configure message priority logic and zone behavior for routine and emergency use.",
      },
      {
        q: "Will this work for phased factory expansion?",
        a: "Yes. The deployment model supports staged expansion while maintaining standard operating logic.",
      },
      {
        q: "Do you provide after-sales technical support in Cambodia?",
        a: "Yes. Local support is included for stabilization and long-term maintenance planning.",
      },
    ],
    internalLinks: [
      { label: "PA System Main Page", href: "/pa-system/" },
      { label: "PA System Product Catalog", href: "/pa-system/" },
      { label: "IP Paging Microphones", href: "/pa-system/" },
      { label: "Turnstile Gate Integration", href: "/turnstile-gate/" },
      { label: "Talk to Project Team", href: "/contact/" },
    ],
  },
  {
    slug: "office-access-control-cambodia",
    title: "Office Access Control Solutions in Cambodia",
    description:
      "Office-focused access control solution planning in Cambodia for controlled entry, visitor workflow, and policy-aligned operational security with local deployment support.",
    heroIntro:
      "Built for offices and commercial buildings that need secure yet practical entry management, staff movement governance, and cleaner visitor handling.",
    problemContext: [
      "Office teams need controlled access without creating entry bottlenecks during peak hours.",
      "Visitor handling and internal access zones are often managed manually and inconsistently.",
      "Management requires auditable access workflows aligned with company policy.",
    ],
    deploymentWorkflow: [
      "Entry point assessment and access policy mapping for staff and visitors.",
      "Lane and checkpoint planning with practical movement-flow validation.",
      "Installation, system integration, and controlled access testing by scenario.",
      "Policy handover, admin onboarding, and support readiness setup.",
    ],
    integrationScope: [
      "RFID, biometric, and visitor workflow integration options.",
      "Role-based access logic for office zones and restricted areas.",
      "Optional synchronization with attendance and administrative workflows.",
    ],
    budgetFactors: [
      "Number of entry points and required access-control zones.",
      "Desired authentication methods and policy complexity.",
      "Integration depth with existing office systems and workflows.",
      "Support SLA and future expansion planning for new floors or branches.",
    ],
    faqs: [
      {
        q: "Can this solution handle both staff and visitor access?",
        a: "Yes. The workflow is designed to separate staff policy access from visitor-controlled entry processes.",
      },
      {
        q: "Can we start with one office floor first?",
        a: "Yes. The deployment can begin in one area and expand in phases with consistent access policy structure.",
      },
      {
        q: "Do you provide local support after handover?",
        a: "Yes. We provide local technical support and policy adjustment assistance after go-live.",
      },
    ],
    internalLinks: [
      { label: "Turnstile Gate", href: "/turnstile-gate/" },
      { label: "Access Control Products", href: "/solutions/office-access-control-cambodia/" },
      { label: "Turnstile Product Catalog", href: "/turnstile-gate/" },
      { label: "Service and Support", href: "/service/" },
      { label: "Contact Project Team", href: "/contact/" },
    ],
  },
  {
    slug: "education-smart-classroom-cambodia",
    title: "Education Smart Classroom Solutions in Cambodia",
    description:
      "Education-focused smart classroom solution planning in Cambodia for teaching environments, training delivery, and campus communication with local implementation support.",
    heroIntro:
      "Designed for schools, institutes, and training centers that need modern classroom delivery, better instructor workflow, and scalable campus-level deployment standards.",
    problemContext: [
      "Institutions often run mixed classroom technology that creates inconsistent teaching experience.",
      "Training centers need repeatable setup standards for multiple rooms and cohorts.",
      "Academic teams require practical onboarding so instructors can use systems confidently.",
    ],
    deploymentWorkflow: [
      "Classroom and training-space assessment for instructional use-case mapping.",
      "Room-by-room deployment planning and implementation schedule setup.",
      "Installation, classroom readiness testing, and content delivery validation.",
      "Instructor onboarding, documentation handover, and support transition.",
    ],
    integrationScope: [
      "Interactive teaching workflow setup for classroom and training use.",
      "Optional integration with campus communication and announcement systems.",
      "Operational alignment for multi-room scheduling and support management.",
    ],
    budgetFactors: [
      "Number of classrooms and teaching environment diversity.",
      "Deployment scope for pilot floors versus full campus rollout.",
      "Instructor onboarding requirements and institutional SOP depth.",
      "Support model for semester cycles and expansion planning.",
    ],
    faqs: [
      {
        q: "Can this solution be rolled out gradually by classroom?",
        a: "Yes. We support phased deployment so institutions can pilot, validate, and then scale.",
      },
      {
        q: "Do you provide teacher and operator onboarding?",
        a: "Yes. Instructor onboarding and operational handover are included in project closure workflow.",
      },
      {
        q: "Is this suitable for both schools and training institutes?",
        a: "Yes. The architecture supports K-12, higher education, and professional training environments.",
      },
    ],
    internalLinks: [
      { label: "Interactive Flat Panel", href: "/interactive-flat-panel/" },
      { label: "Interactive Panel Products", href: "/interactive-flat-panel/" },
      { label: "Smart Board Product Range", href: "/interactive-flat-panel/" },
      { label: "Solutions Hub", href: "/solutions/" },
      { label: "Request Quotation", href: "/contact/" },
    ],
  },
];

export const INDUSTRY_SOLUTIONS_BY_SLUG = Object.fromEntries(
  INDUSTRY_SOLUTIONS.map((item) => [item.slug, item])
) as Record<string, IndustrySolution>;
