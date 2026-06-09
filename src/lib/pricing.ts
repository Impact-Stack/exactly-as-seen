export interface PricingOffer {
  id: string;
  title: string;
  startingPrice: number | null; // null = custom quote
  description: string;
  deliverables: string[];
  destination: string;
}

export const flagshipPricingOffers: PricingOffer[] = [
  {
    id: "government-and-public-sector",
    title: "Government and Public Sector",
    startingPrice: null,
    description:
      "Procurement-ready delivery for municipalities and state-owned entities. CSD-registered supplier with 80/20 preference-point eligibility.",
    deliverables: [
      "Citizen-facing portals and e-services",
      "Workflow automation and case management",
      "Data dashboards and operational reporting",
      "Legacy system modernisation",
      "POPIA and governance compliance alignment",
    ],
    destination: "/industries/government-and-public-sector",
  },
  {
    id: "financial-services",
    title: "Financial Services",
    startingPrice: 75000,
    description:
      "Secure platforms, compliance workflows, and risk-aware architecture for financial institutions. Google Cybersecurity certified engineers.",
    deliverables: [
      "Security and compliance gap assessment",
      "POPIA and FSCA remediation roadmap",
      "Authentication and data protection hardening",
      "SIEM correlation and ATT&CK mapping",
      "Stakeholder-ready findings report",
    ],
    destination: "/industries/financial-services",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    startingPrice: 65000,
    description:
      "Reliable data workflows, patient systems, and protected access for healthcare providers. RBAC delivery patterns applied to clinical environments.",
    deliverables: [
      "Patient-facing portal and appointment systems",
      "Role-based access control (RBAC) implementation",
      "Secure data handling and audit trails",
      "Integration with existing clinical or admin systems",
      "Compliance baseline documentation",
    ],
    destination: "/industries/healthcare",
  },
  {
    id: "mining-and-energy",
    title: "Mining and Energy",
    startingPrice: 70000,
    description:
      "Operational systems, field workflows, and rugged device support for mining and energy operators across distributed environments.",
    deliverables: [
      "Field operations and job-card management systems",
      "Rugged device provisioning and lifecycle management",
      "Offline-capable mobile applications",
      "Asset tracking and reporting dashboards",
      "Remote infrastructure monitoring",
    ],
    destination: "/industries/mining-and-energy",
  },
  {
    id: "retail-and-commerce",
    title: "Retail and Commerce",
    startingPrice: 55000,
    description:
      "E-commerce, pricing intelligence, and customer experience platforms for retail operators in local South African markets.",
    deliverables: [
      "E-commerce platform build or migration",
      "Pricing intelligence and comparison tooling",
      "Customer experience and loyalty features",
      "Inventory and order management integrations",
      "Analytics and conversion reporting",
    ],
    destination: "/industries/retail-and-commerce",
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
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);