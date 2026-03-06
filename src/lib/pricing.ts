export interface PricingOffer {
  id: string;
  title: string;
  startingPrice: number;
  description: string;
  deliverables: string[];
  destination: string;
}

export const flagshipPricingOffers: PricingOffer[] = [
  {
    id: "enterprise-web-applications",
    title: "Enterprise Web Applications",
    startingPrice: 65000,
    description: "Secure web platforms for South African organizations that need scalable enterprise software delivery.",
    deliverables: [
      "Discovery and implementation plan",
      "Responsive UX and frontend architecture",
      "Backend APIs and integration foundations",
      "Security baseline aligned with POPIA expectations",
    ],
    destination: "/services/web",
  },
  {
    id: "mobile-solutions",
    title: "Mobile Solutions",
    startingPrice: 85000,
    description: "Cross-platform mobile products for iOS and Android with practical release governance.",
    deliverables: [
      "Product scope and user-flow mapping",
      "Cross-platform mobile app build",
      "Secure API and authentication integration",
      "App store readiness checklist",
    ],
    destination: "/services/mobile",
  },
  {
    id: "security-and-compliance",
    title: "Security and Compliance",
    startingPrice: 45000,
    description: "Security hardening and POPIA compliance support for enterprise teams and regulated workflows.",
    deliverables: [
      "Security and compliance gap assessment",
      "POPIA-focused remediation roadmap",
      "Authentication and data protection hardening",
      "Stakeholder-ready findings report",
    ],
    destination: "/services/security",
  },
  {
    id: "government-services",
    title: "Government Services",
    startingPrice: 120000,
    description: "Government digital services delivery for public-sector teams with mandate and governance constraints.",
    deliverables: [
      "Public-sector requirement alignment",
      "Citizen or internal workflow implementation",
      "Reporting and auditability foundations",
      "Delivery governance and handover package",
    ],
    destination: "/services/government",
  },
];

export const customQuoteServiceNames = [
  "Digital Transformation",
  "Cloud and Infrastructure",
  "Managed Services",
  "Analytics and Data Platforms",
  "Devices",
  "Connectivity",
  "HR and Payroll",
];

export const formatZar = (value: number) =>
  new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR", maximumFractionDigits: 0 }).format(value);
