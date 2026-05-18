import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";

// ─── STYLES ──────────────────────────────────────────────────────────────────

const PAGE_STYLES = `
  @keyframes dot-float {
    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
    50% { transform: translateY(-25px) translateX(10px); opacity: 0.5; }
  }
  .animate-dot-float {
    animation: dot-float 10s ease-in-out infinite;
    will-change: transform;
  }
  @keyframes pulse-soft {
    0%, 100% { transform: scale(1); opacity: 0.2; }
    50% { transform: scale(1.1); opacity: 0.3; }
  }
  .animate-pulse-soft {
    animation: pulse-soft 8s ease-in-out infinite;
  }
`;

// ─── DATA ────────────────────────────────────────────────────────────────────

const INDUSTRY_DATA = {
  "government-and-public-sector": {
    title: "Government and Public Sector",
    priceStart: null,
    overview:
      "Procurement-ready delivery for municipalities and state-owned entities. CSD-registered supplier with 80/20 preference-point eligibility, aligned to public-sector compliance and mandate requirements.",
    deliverables: [
      "Citizen-facing portals and e-services",
      "Workflow automation and case management",
      "Data dashboards and operational reporting",
      "Legacy system modernisation",
      "POPIA and governance compliance alignment",
    ],
    evidence: "CSD-registered supplier with 80/20 preference-point eligibility.",
    projects: ["Municipal Workflow Automation", "SOE Portal Delivery"],
    cta: { label: "Contact Sales", to: "/contact" },
  },
  "financial-services": {
    title: "Financial Services",
    priceStart: "R 75 000",
    overview:
      "Secure platforms, compliance workflows, and risk-aware architecture for financial institutions. Led by Google Cybersecurity certified engineers with SOC lab delivery evidence.",
    deliverables: [
      "Security and compliance gap assessment",
      "POPIA and FSCA remediation roadmap",
      "Authentication and data protection hardening",
      "SIEM correlation and ATT&CK mapping",
      "Stakeholder-ready findings report",
    ],
    evidence: "SOC lab delivery evidence with SIEM correlation and ATT&CK mapping.",
    projects: ["Bluewatch SOC Lab", "Findr Community Map"],
    cta: { label: "Get Started", to: "/contact" },
  },
  healthcare: {
    title: "Healthcare",
    priceStart: "R 65 000",
    overview:
      "Reliable data workflows, patient systems, and protected access for healthcare providers. RBAC and secure workflow delivery patterns from HR platform work applied to clinical environments.",
    deliverables: [
      "Patient-facing portal and appointment systems",
      "Role-based access control (RBAC) implementation",
      "Secure data handling and audit trails",
      "Integration with existing clinical or admin systems",
      "Compliance baseline documentation",
    ],
    evidence: "RBAC and secure workflow delivery patterns from HR platform work.",
    projects: ["Moderntech HR Platform"],
    cta: { label: "Get Started", to: "/contact" },
  },
  "mining-and-energy": {
    title: "Mining and Energy",
    priceStart: "R 70 000",
    overview:
      "Operational systems, field workflows, and rugged device support for mining and energy operators. Infrastructure and device delivery support across distributed and remote environments.",
    deliverables: [
      "Field operations and job-card management systems",
      "Rugged device provisioning and lifecycle management",
      "Offline-capable mobile applications",
      "Asset tracking and reporting dashboards",
      "Remote infrastructure monitoring",
    ],
    evidence: "Rugged device and infrastructure delivery support in service portfolio.",
    projects: ["Field Operations Platform"],
    cta: { label: "Get Started", to: "/contact" },
  },
  "retail-and-commerce": {
    title: "Retail and Commerce",
    priceStart: "R 55 000",
    overview:
      "E-commerce, pricing intelligence, and customer experience platforms for retail operators. Commerce and price-comparison systems delivered for local South African markets.",
    deliverables: [
      "E-commerce platform build or migration",
      "Pricing intelligence and comparison tooling",
      "Customer experience and loyalty features",
      "Inventory and order management integrations",
      "Analytics and conversion reporting",
    ],
    evidence: "Commerce and price-comparison systems delivered for local markets.",
    projects: ["Shopwise Price Comparison", "Biofuel Ecommerce Platform"],
    cta: { label: "Get Started", to: "/contact" },
  },
} as const;

type IndustrySlug = keyof typeof INDUSTRY_DATA;

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data, safeSlug } = useMemo(() => {
    const safe = (
      slug && slug in INDUSTRY_DATA ? slug : "retail-and-commerce"
    ) as IndustrySlug;
    return { safeSlug: safe, data: INDUSTRY_DATA[safe] };
  }, [slug]);

  return (
    <>
      <style>{PAGE_STYLES}</style>
      <SEO
        title={`${data.title} | ImpactStack Africa`}
        description={data.overview}
        url={absoluteUrl(`/industries/${safeSlug}`)}
      />
      <PageShell>
        <div className="relative min-h-screen bg-[#020205] overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/footer-bg.webp"
              alt=""
              className="w-full h-full object-cover scale-150 blur-[140px] opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020205]/90 via-[#020205]/40 to-[#020205]" />
          </div>

          <div className="relative z-10 flex flex-col items-center pt-24 pb-32 px-4">

            {/* Header */}
            <header className="w-full max-w-[1200px] text-center mb-16 md:mb-24">
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-400">
                  Industry Breakdown
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                Sector{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500">
                  Deliverables
                </span>
              </h1>
            </header>

            {/* Main Card */}
            <main className="w-full max-w-[1100px] mb-24">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-b from-purple-500/10 to-blue-600/10 rounded-[45px] blur-3xl opacity-50 transition duration-700" />

                <Card className="relative h-full !bg-white/[0.005] !backdrop-blur-[120px] !rounded-[40px] !border !border-white/10 !text-white overflow-hidden shadow-2xl flex flex-col">

                  {/* Card Hero */}
                  <div className="p-12 flex items-center justify-center relative z-10 bg-gradient-to-b from-white/3 to-transparent min-h-[220px] border-b border-white/5 overflow-hidden">
                    <div className="absolute w-64 h-64 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-soft" />
                    <div className="absolute w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-dot-float" />
                    <div className="relative z-20 flex flex-col items-center">
                      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-4 opacity-50" />
                      <Typography className="!text-[10px] !font-black !uppercase !tracking-[0.8em] !text-white/20">
                        ImpactStack Sector
                      </Typography>
                    </div>
                  </div>

                  <CardContent className="p-10 md:p-16 flex flex-col h-full bg-black/60">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

                      {/* Left: Scope */}
                      <div className="md:col-span-1">
                        <p className="text-[11px] text-white/20 uppercase tracking-widest font-black mb-4">
                          Sector Scope
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight mb-4">
                          {data.title}
                        </h2>
                        <p className="text-sm text-white/40 leading-relaxed font-medium">
                          {data.overview}
                        </p>
                      </div>

                      {/* Centre: Deliverables */}
                      <div className="md:col-span-1">
                        <p className="text-[11px] text-white/20 uppercase tracking-widest font-black mb-4">
                          Core Deliverables
                        </p>
                        <div className="space-y-4">
                          {data.deliverables.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 text-[13px] text-white/60 font-semibold"
                            >
                              <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-white/10 flex items-center justify-center text-[8px] bg-white/5 text-purple-400">
                                ✓
                              </span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Pricing */}
                      <div className="md:col-span-1">
                        <p className="text-[11px] text-white/20 uppercase tracking-widest font-black mb-4">
                          Benchmark Price
                        </p>
                        {data.priceStart ? (
                          <div className="flex flex-col">
                            <span className="text-4xl font-black tracking-tight text-white">
                              {data.priceStart}
                            </span>
                            <p className="text-[10px] text-white/20 mt-2 uppercase tracking-[0.2em] font-bold">
                              Starting Excl. VAT
                            </p>
                          </div>
                        ) : (
                          <span className="text-2xl font-bold text-white/70">
                            Custom Quote Required
                          </span>
                        )}

                        <Button
                          component={Link}
                          to={data.cta.to}
                          fullWidth
                          variant="outlined"
                          className="button-secondary mt-8 py-4 text-sm inline-block border border-gray-500 rounded hover:border-white transition-colors disabled:opacity-50"
                          style={{ textTransform: "none" }}
                        >
                          {data.cta.label}
                        </Button>
                      </div>
                    </div>

                    {/* Evidence / Projects */}
                    {data.projects.length > 0 && (
                      <div className="mt-16 pt-10 border-t border-white/5">
                        <p className="text-[10px] text-white/20 uppercase tracking-widest font-black mb-6">
                          Proven Delivery
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          {data.projects.map((project) => (
                            <Chip
                              key={project}
                              label={project}
                              className="!bg-white/5 !text-white/30 !border-white/10 !text-[11px] !font-bold !rounded-lg"
                              variant="outlined"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </main>

            {/* Engagement Terms */}
            <section className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  label: "Payment Structure",
                  title: "50/50 Deposit Terms",
                  desc: "Project kickoff requires a 50% deposit. Remaining balance is due upon final handover.",
                },
                {
                  label: "Validity",
                  title: "7-Day Quote Window",
                  desc: "Quotes and timelines are valid for 7 days. Official invoices issued for all milestones.",
                },
                {
                  label: "Maintenance",
                  title: "Standard Hourly Rate",
                  desc: "Post-launch updates and support are billed at our standard hourly consultation rate.",
                },
              ].map((term, i) => (
                <div
                  key={i}
                  className="p-10 rounded-[40px] border border-white/5 bg-white/[0.005] backdrop-blur-[120px] transition-all hover:border-white/15 group"
                >
                  <Typography className="!text-purple-400 group-hover:!text-purple-300 !font-bold !text-[10px] !uppercase !tracking-widest !mb-5">
                    {term.label}
                  </Typography>
                  <Typography className="!text-white !text-xl !font-bold !mb-4 tracking-tight">
                    {term.title}
                  </Typography>
                  <Typography className="!text-white/30 !leading-relaxed text-[13px] font-medium">
                    {term.desc}
                  </Typography>
                </div>
              ))}
            </section>

          </div>
        </div>
      </PageShell>
    </>
  );
}