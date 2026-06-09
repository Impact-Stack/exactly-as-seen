import { MdAccountBalance } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { MdLocalHospital } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { MdStorefront } from "react-icons/md";
import type { IconType } from "react-icons";

export interface IndustryTier {
  name: string;
  price: string | null;
  description: string;
  deliverables: string[];
}

export interface IndustryItem {
  slug: string;
  title: string;
  description: string;
  evidence: string;
  projectType: string;
  icon: IconType;
  tiers: [IndustryTier, IndustryTier, IndustryTier];
}

export const industriesData: IndustryItem[] = [
  {
    slug: "government",
    title: "Government and Public Sector",
    description:
      "Procurement-ready delivery for municipalities and state-owned entities. CSD-registered supplier with 80/20 preference-point eligibility, aligned to public-sector compliance and mandate requirements.",
    evidence: "CSD-registered supplier with 80/20 preference-point eligibility.",
    projectType: "Government Project",
    icon: MdAccountBalance,
    tiers: [
      {
        name: "Foundation",
        price: "R 85,000",
        description:
          "Entry-level public sector digitisation for smaller municipalities and departments beginning their digital transformation journey.",
        deliverables: [
          "Citizen-facing portal with up to 3 e-service workflows",
          "CSD supplier documentation and compliance onboarding support",
          "POPIA readiness baseline assessment",
          "Basic operational reporting dashboard",
          "Stakeholder handover and user training documentation",
        ],
      },
      {
        name: "Operational",
        price: "R 150,000",
        description:
          "Full workflow automation and data visibility for mid-size municipalities and state entities with multi-department operational mandates.",
        deliverables: [
          "All Foundation deliverables included",
          "Workflow automation and multi-department case management",
          "Cross-departmental operational dashboards",
          "80/20 preference-point procurement documentation support",
          "POPIA and governance compliance alignment",
          "Integration with existing departmental systems",
        ],
      },
      {
        name: "Enterprise",
        price: null,
        description:
          "Comprehensive digital transformation for large municipalities and SOEs with complex mandates and legacy estate modernisation requirements.",
        deliverables: [
          "All Operational deliverables included",
          "Legacy system modernisation and full migration",
          "Advanced cross-departmental data intelligence",
          "Full POPIA impact assessment and remediation roadmap",
          "Dedicated project governance and audit-ready documentation",
          "Long-term support SLA and maintenance schedule",
        ],
      },
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    description:
      "Secure platforms, compliance workflows, and risk-aware architecture for financial institutions. Led by Google Cybersecurity certified engineers with SOC lab delivery evidence.",
    evidence: "SOC lab delivery evidence with SIEM correlation and ATT&CK mapping.",
    projectType: "Security and Compliance",
    icon: MdSecurity,
    tiers: [
      {
        name: "Assurance",
        price: "R 75,000",
        description:
          "Security and compliance assessment giving financial institutions a clear, evidenced picture of their current risk and regulatory posture.",
        deliverables: [
          "Security and compliance gap assessment",
          "POPIA and FSCA preliminary findings report",
          "Authentication vulnerability review",
          "Risk register and prioritised remediation backlog",
          "Executive summary and stakeholder-ready findings report",
        ],
      },
      {
        name: "Remediation",
        price: "R 135,000",
        description:
          "Structured remediation of identified vulnerabilities with hardened authentication, data protection controls, and a documented compliance roadmap.",
        deliverables: [
          "All Assurance deliverables included",
          "POPIA and FSCA full remediation roadmap",
          "Authentication and data protection hardening implementation",
          "Access control and data classification framework",
          "Compliance evidence pack for regulators and auditors",
        ],
      },
      {
        name: "Fortify",
        price: "R 200,000",
        description:
          "Full-spectrum security engineering for enterprise financial institutions requiring demonstrable SOC-level delivery and ongoing threat detection coverage.",
        deliverables: [
          "All Remediation deliverables included",
          "SIEM deployment and correlation rule configuration",
          "MITRE ATT&CK threat mapping and detection coverage report",
          "SOC lab-validated delivery evidence",
          "Incident response playbook and tabletop exercise facilitation",
          "Ongoing monitoring configuration and handover",
        ],
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Reliable data workflows, patient systems, and protected access for healthcare providers. RBAC and secure workflow delivery patterns from HR platform work applied to clinical environments.",
    evidence: "RBAC and secure workflow delivery patterns from HR platform work.",
    projectType: "Web Application",
    icon: MdLocalHospital,
    tiers: [
      {
        name: "Core",
        price: "R 65,000",
        description:
          "Digital foundation for healthcare providers establishing patient-facing access, appointment management, and a POPIA compliance baseline.",
        deliverables: [
          "Patient-facing portal with appointment booking",
          "Basic RBAC configuration for clinical and admin staff",
          "Staff-facing admin and scheduling dashboard",
          "POPIA compliance baseline documentation",
          "User training and stakeholder handover documentation",
        ],
      },
      {
        name: "Secure",
        price: "R 120,000",
        description:
          "Hardened clinical workflows with full RBAC, encrypted data handling, and audit trails for mid-size healthcare providers and multi-practitioner clinics.",
        deliverables: [
          "All Core deliverables included",
          "Full RBAC implementation across all clinical and admin roles",
          "Encrypted data handling with granular access logging",
          "Audit trail and incident logging system",
          "Secure integration with existing clinical or admin systems",
        ],
      },
      {
        name: "Integrated",
        price: "R 185,000",
        description:
          "End-to-end clinical digital infrastructure with multi-system integration for hospitals, group practices, and multi-site healthcare operators.",
        deliverables: [
          "All Secure deliverables included",
          "Multi-system integration (EHR, billing, lab, pharmacy)",
          "Advanced patient data workflows and clinical reporting",
          "Full compliance documentation (POPIA and Health Act alignment)",
          "Scalable infrastructure design for multi-site deployments",
          "Support SLA and ongoing documentation update cycle",
        ],
      },
    ],
  },
  {
    slug: "mining-energy",
    title: "Mining and Energy",
    description:
      "Operational systems, field workflows, and rugged device support for mining and energy operators. Infrastructure and device delivery support across distributed and remote environments.",
    evidence: "Rugged device and infrastructure delivery support in service portfolio.",
    projectType: "Web Application",
    icon: MdConstruction,
    tiers: [
      {
        name: "Field Ready",
        price: "R 70,000",
        description:
          "Operational foundation for mining and energy teams requiring job-card management, basic device provisioning, and site-level reporting.",
        deliverables: [
          "Field operations and job-card management system",
          "Rugged device provisioning (up to 10 devices)",
          "Site supervisor reporting dashboard",
          "Offline data capture with basic sync capability",
          "Field user onboarding and training documentation",
        ],
      },
      {
        name: "Connected",
        price: "R 130,000",
        description:
          "Mobile-first and offline-capable operations platform with full device lifecycle management for distributed and remote mining and energy sites.",
        deliverables: [
          "All Field Ready deliverables included",
          "Full offline-capable mobile application (iOS and Android)",
          "Rugged device full lifecycle management (MDM to decommission)",
          "Asset tracking with QR and RFID integration",
          "Multi-site operational reporting dashboards",
        ],
      },
      {
        name: "Command",
        price: "R 200,000",
        description:
          "Comprehensive operations command platform with remote infrastructure monitoring and advanced asset intelligence for large operators.",
        deliverables: [
          "All Connected deliverables included",
          "Remote infrastructure monitoring and alerting",
          "Advanced asset tracking and predictive maintenance dashboards",
          "IoT sensor integration and telemetry data pipeline",
          "Centralised multi-site command and control dashboard",
          "Business continuity and disaster recovery documentation",
        ],
      },
    ],
  },
  {
    slug: "retail-commerce",
    title: "Retail and Commerce",
    description:
      "E-commerce, pricing intelligence, and customer experience platforms for retail operators. Commerce and price-comparison systems delivered for local South African markets.",
    evidence: "Commerce and price-comparison systems delivered for local markets.",
    projectType: "Web Application",
    icon: MdStorefront,
    tiers: [
      {
        name: "Launch",
        price: "R 55,000",
        description:
          "E-commerce foundation for South African retailers — platform build or migration with core commerce and payment functionality ready for market.",
        deliverables: [
          "E-commerce platform build or migration (up to 100 SKUs)",
          "SA payment gateway integration (PayFast, Yoco, or Peach Payments)",
          "Mobile-responsive storefront and checkout flow",
          "Basic product catalogue and inventory management",
          "Google Analytics and conversion tracking setup",
        ],
      },
      {
        name: "Growth",
        price: "R 100,000",
        description:
          "Enhanced retail platform with pricing intelligence, customer loyalty features, and inventory integrations for growing South African retailers.",
        deliverables: [
          "All Launch deliverables included",
          "Pricing intelligence and competitor comparison tooling",
          "Customer loyalty and rewards programme features",
          "Inventory and order management integrations",
          "CRM and email marketing integration",
        ],
      },
      {
        name: "Scale",
        price: "R 165,000",
        description:
          "Full-scale commerce platform with advanced analytics, multi-channel support, and intelligent customer experience for established retailers.",
        deliverables: [
          "All Growth deliverables included",
          "Multi-channel commerce (web, mobile app, WhatsApp commerce)",
          "Advanced pricing engine with dynamic and rules-based pricing",
          "Conversion rate optimisation and A/B testing framework",
          "Advanced customer segmentation and analytics reporting",
          "Third-party logistics and fulfilment integrations",
        ],
      },
    ],
  },
];