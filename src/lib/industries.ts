import { MdAccountBalance, MdApartment, MdLocalHospital, MdSecurity, MdStorefront } from "react-icons/md";
import type { IconType } from "react-icons";

export interface IndustryItem {
  title: string;
  description: string;
  icon: IconType;
  projectType: string;
  evidence: string;
}

export const industriesData: IndustryItem[] = [
  {
    title: "Government and Public Sector",
    description: "Procurement-ready delivery for municipalities and state-owned entities.",
    icon: MdAccountBalance,
    projectType: "Government Project",
    evidence: "CSD-registered supplier with 80/20 preference-point eligibility.",
  },
  {
    title: "Financial Services",
    description: "Secure platforms, compliance workflows, and risk-aware architecture.",
    icon: MdSecurity,
    projectType: "Security and Compliance",
    evidence: "SOC lab delivery evidence with SIEM correlation and ATT&CK mapping.",
  },
  {
    title: "Healthcare",
    description: "Reliable data workflows, patient systems, and protected access.",
    icon: MdLocalHospital,
    projectType: "Web Application",
    evidence: "RBAC and secure workflow delivery patterns from HR platform work.",
  },
  {
    title: "Mining and Energy",
    description: "Operational systems, field workflows, and rugged device support.",
    icon: MdApartment,
    projectType: "Web Application",
    evidence: "Rugged device and infrastructure delivery support in service portfolio.",
  },
  {
    title: "Retail and Commerce",
    description: "E-commerce, pricing intelligence, and customer experience platforms.",
    icon: MdStorefront,
    projectType: "Web Application",
    evidence: "Commerce and price-comparison systems delivered for local markets.",
  },
];
