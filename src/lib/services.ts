export interface Service {
  slug: string;
  title: string;
  summary: string;
  audience: string;
  outcome: string;
  deliverables: string[];
  projectIds: string[];
  priceStart?: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

// One catalogue for homepage summaries, navigation and service detail pages.
export const services: Service[] = [
  {
    slug: "websites",
    title: "Website Design & Development",
    summary:
      "Responsive websites that explain your offer, showcase your work and help customers get in touch.",
    audience:
      "Businesses, brands, creatives and organisations launching or improving their online presence.",
    outcome:
      "Give customers a clear, accessible place to discover your business and take the next step.",
    deliverables: [
      "Content structure and page planning",
      "Custom responsive design and development",
      "Contact forms and enquiry journeys",
      "Search metadata, accessibility checks and launch support",
    ],
    projectIds: ["urban-anarchy"],
    seoTitle: "Website Development Cape Town | ImpactStack Africa",
    seoDescription:
      "Responsive business websites designed and built by a Cape Town team: clear page structure, contact forms and enquiry journeys, and launch support.",
    keywords: [
      "website development Cape Town",
      "business website development Cape Town",
    ],
  },
  {
    slug: "web",
    title: "Custom Web Applications",
    summary:
      "Customer portals and interactive platforms built around your users, data and business workflows.",
    audience:
      "Teams that need functionality beyond a brochure website or an off-the-shelf tool.",
    outcome:
      "Bring your product or service online with a maintainable application tailored to how it works.",
    deliverables: [
      "Discovery and implementation plan",
      "Responsive user interfaces",
      "Backend APIs and database architecture",
      "Authentication, role permissions and testing",
    ],
    projectIds: [
      "findr-community-map",
      "quick-chat-mvp",
      "moderntech-hr-platform",
    ],
    priceStart: "R 65 000",
    seoTitle: "Web Application Development Cape Town | ImpactStack Africa",
    seoDescription:
      "Custom web applications and customer portals built around your users, data and workflows. Cape Town team serving South African businesses. Start with a consultation.",
    keywords: [
      "web application development Cape Town",
      "web app development company Cape Town",
      "web application development South Africa",
      "custom web application development",
      "client portal development South Africa",
      "customer portal development South Africa",
      "internal web application development",
      "custom web apps for SMEs",
      "web portal development company South Africa",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce & Online Stores",
    summary:
      "Product catalogues, shopping journeys and order workflows for businesses selling online.",
    audience:
      "Retailers and product brands building or improving an online shop.",
    outcome:
      "Make products easier to discover and give your team a practical way to manage online orders.",
    deliverables: [
      "Product catalogue and category design",
      "Cart and checkout journeys",
      "Payment-provider integration scoped to your requirements",
      "Customer and admin order workflows",
    ],
    projectIds: ["biofuel-ecommerce-platform"],
    seoTitle: "Ecommerce Development South Africa | ImpactStack Africa",
    seoDescription:
      "Online stores with product catalogues, checkout journeys and order workflows for businesses selling online. Built by a Cape Town team for South African retailers and brands.",
    keywords: [
      "ecommerce development South Africa",
      "online store development Cape Town",
      "ecommerce website developers Cape Town",
      "custom ecommerce platform development South Africa",
    ],
  },
  {
    slug: "booking",
    title: "Booking & Appointment Systems",
    summary:
      "Scheduling tools that help customers book services and teams manage availability.",
    audience:
      "Service businesses and organisations coordinating appointments, staff or facilities.",
    outcome:
      "Reduce manual scheduling and keep booking information in one place.",
    deliverables: [
      "Service and availability configuration",
      "Customer booking interface",
      "Team calendar and booking management",
      "Notifications and integrations agreed during discovery",
    ],
    projectIds: [],
    seoTitle: "Booking System Development South Africa | ImpactStack Africa",
    seoDescription:
      "Custom booking and appointment systems for service businesses: customer booking, team calendars and availability management. Cape Town team, consultation first.",
    keywords: [
      "booking system development South Africa",
      "custom booking platform development",
      "online booking system development Cape Town",
    ],
  },
  {
    slug: "analytics",
    title: "Dashboards & Data Platforms",
    summary:
      "Reporting dashboards that turn business data into useful operational views.",
    audience:
      "Teams managing scattered spreadsheets, recurring reports or multiple data sources.",
    outcome:
      "Give your team clearer visibility into the information it uses to make decisions.",
    deliverables: [
      "Reporting requirements and data-source mapping",
      "Data models and integration pipelines",
      "Interactive dashboards and filters",
      "Access permissions and reporting documentation",
    ],
    projectIds: ["moderntech-hr-platform"],
    seoTitle: "Custom Dashboard Development South Africa | ImpactStack Africa",
    seoDescription:
      "Reporting dashboards that turn scattered spreadsheets and data sources into clear operational views. Built by a Cape Town team for South African businesses.",
    keywords: [
      "custom dashboard development South Africa",
      "business dashboard development Cape Town",
      "KPI dashboard development services",
      "management reporting dashboard developer",
      "sales dashboard development",
      "automated reporting for small businesses",
      "Google Sheets dashboard automation",
    ],
  },
  {
    slug: "automation",
    title: "Integrations & Workflow Automation",
    summary:
      "APIs and connected workflows that reduce repeated data entry between your tools.",
    audience:
      "Businesses moving information manually between applications and departments.",
    outcome:
      "Connect your existing systems and make repetitive processes easier to manage.",
    deliverables: [
      "Workflow and integration discovery",
      "API connections and data transformations",
      "Validation, error handling and access controls",
      "Handover documentation and workflow testing",
    ],
    projectIds: ["findr-community-map", "shopwise-price-comparison"],
    seoTitle: "Business Process Automation South Africa | ImpactStack Africa",
    seoDescription:
      "Integrations and workflow automation that cut repeated data entry between your business tools. Built by a Cape Town team for South African businesses.",
    keywords: [
      "business process automation South Africa",
      "business process automation Cape Town",
      "workflow automation services South Africa",
      "small business process automation",
      "automate repetitive business tasks",
      "API integration services South Africa",
      "software integration services South Africa",
      "CRM integration services South Africa",
      "payment gateway integration developer South Africa",
      "connect business software systems",
    ],
  },
  {
    slug: "mobile",
    title: "Mobile Applications",
    summary:
      "Cross-platform mobile apps for customer experiences and practical field workflows.",
    audience:
      "Businesses with a product or workflow that needs a dedicated mobile experience.",
    outcome:
      "Put the right tools in your users’ hands with an app designed for mobile use.",
    deliverables: [
      "Product scope and user-flow mapping",
      "Flutter app development",
      "API and authentication integration",
      "Device testing and store-readiness checklist",
    ],
    projectIds: ["shopwise-price-comparison"],
    priceStart: "R 85 000",
  },
  {
    slug: "design",
    title: "UX/UI & Product Planning",
    summary:
      "User journeys, wireframes and interface design that turn an idea into a clear development brief.",
    audience:
      "Founders and teams defining a new product or improving an existing experience.",
    outcome:
      "Clarify what needs to be built and how users will move through it before development starts.",
    deliverables: [
      "Discovery and requirements mapping",
      "Content architecture and user journeys",
      "Wireframes and responsive interface designs",
      "Development-ready scope and priorities",
    ],
    projectIds: ["findr-community-map", "urban-anarchy"],
  },
  {
    slug: "hr-payroll",
    title: "HR & Business Systems",
    summary:
      "Internal tools for employee information, HR workflows and business administration.",
    audience:
      "Teams replacing disconnected spreadsheets and repetitive administrative work.",
    outcome:
      "Keep day-to-day records and operational workflows organised in a purpose-built system.",
    deliverables: [
      "Business process and permission mapping",
      "Employee and department records",
      "Attendance, reporting and payroll workflows as scoped",
      "Data validation, testing and team handover",
    ],
    projectIds: ["moderntech-hr-platform"],
  },
  {
    slug: "security",
    title: "Security & Compliance Support",
    summary:
      "Security assessments, access controls and remediation planning for applications and data workflows.",
    audience:
      "Organisations improving their security baseline and data-protection practices.",
    outcome:
      "Understand security gaps and prioritise practical improvements to how systems protect data.",
    deliverables: [
      "Security and compliance gap assessment",
      "POPIA-aligned remediation planning",
      "Authentication and data-protection hardening",
      "Findings report and technical handover",
    ],
    projectIds: ["bluewatch-soc-lab"],
    priceStart: "R 45 000",
  },
  {
    slug: "government",
    title: "Government Digital Services",
    summary:
      "Citizen portals, reporting tools and workflow systems for public-sector organisations.",
    audience:
      "Municipalities, public-sector teams and state-owned entities modernising service delivery.",
    outcome:
      "Make services and administrative processes easier to access, track and manage.",
    deliverables: [
      "Citizen-facing portals and online forms",
      "Workflow automation and case management",
      "Reporting dashboards",
      "Legacy-system integration and procurement documentation",
    ],
    projectIds: [],
  },
  {
    slug: "cloud",
    title: "Cloud, Hosting & Deployment",
    summary:
      "Deployment, hosting and domain setup to get your website or application online.",
    audience:
      "Teams launching a new platform or improving how an existing one is hosted.",
    outcome:
      "Move from development to a working deployment with clear ownership and handover.",
    deliverables: [
      "Hosting and deployment requirements",
      "Domain and environment configuration",
      "Release workflow and launch checks",
      "Operational documentation and agreed support scope",
    ],
    projectIds: ["urban-anarchy"],
  },
  {
    slug: "support",
    title: "Maintenance & Managed Support",
    summary:
      "Updates, bug fixes and technical support to keep your digital tools useful after launch.",
    audience:
      "Businesses with an existing website, application or operational system to maintain.",
    outcome:
      "Keep your platform maintained and adapt it as your business requirements change.",
    deliverables: [
      "Initial platform review and support scope",
      "Bug investigation and agreed fixes",
      "Content, feature and dependency updates",
      "Support documentation and handover",
    ],
    projectIds: [],
  },
  {
    slug: "transformation",
    title: "Digital Transformation & Consulting",
    summary:
      "Practical planning to modernise processes and choose the right technology for your business.",
    audience:
      "Organisations deciding which systems to improve, replace or connect.",
    outcome:
      "Turn a broad technology goal into prioritised, achievable delivery steps.",
    deliverables: [
      "Current-system and workflow assessment",
      "Requirements and opportunity mapping",
      "Technology options and delivery roadmap",
      "Implementation priorities and stakeholder documentation",
    ],
    projectIds: ["findr-community-map"],
  },
  {
    slug: "devices",
    title: "Devices & Hardware Integration",
    summary:
      "Device provisioning and hardware-connected workflows for operational environments.",
    audience:
      "Teams introducing connected devices or managing equipment across locations.",
    outcome:
      "Connect physical equipment with the information and workflows your team needs.",
    deliverables: [
      "Device requirements and solution planning",
      "Provisioning and configuration",
      "Hardware and software integration",
      "Testing, asset documentation and handover",
    ],
    projectIds: [],
  },
  {
    slug: "connectivity",
    title: "Connectivity & IT Infrastructure",
    summary:
      "Infrastructure planning and connectivity support for connected teams and distributed operations.",
    audience:
      "Businesses improving access to their systems across offices or operational sites.",
    outcome:
      "Align infrastructure and connectivity with your applications and day-to-day operations.",
    deliverables: [
      "Infrastructure and connectivity assessment",
      "Configuration and implementation planning",
      "Access and monitoring requirements",
      "Technical documentation and support handover",
    ],
    projectIds: [],
  },
];

export const getServiceBySlug = (slug?: string) =>
  services.find((service) => service.slug === slug);

export const deliverySteps = [
  {
    title: "Discover & plan",
    detail: "We clarify your goals, users, requirements and scope.",
  },
  {
    title: "Design",
    detail:
      "We map the experience and design the right interfaces and workflows.",
  },
  {
    title: "Build & test",
    detail:
      "We implement the solution and check functionality, access and usability.",
  },
  {
    title: "Launch & support",
    detail:
      "We deploy, hand over and agree the ongoing support your team needs.",
  },
];
