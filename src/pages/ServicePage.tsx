import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

// Optimized MUI Path Imports
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";

// --- STATIC CONFIG ---
const SERVICE_PAGE_STYLES = `
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

const SERVICE_DATA = {
  web: {
    title: "Enterprise Web Applications",
    priceStart: "R 65 000",
    overview: "Custom applications including React, Vue.js, and Node.js. Platforms that scale with your business while maintaining standard compliance.",
    deliverables: ["Discovery and implementation plan", "Responsive UX and frontend architecture", "Backend APIs and integration foundations", "Security baseline aligned with mandates"],
    projects: ["Findr Community Map", "Moderntech HR Platform", "Biofuel Ecommerce Platform", "Quick Chat MVP"],
    cta: { label: "Get Started", to: "/contact" },
  },
  mobile: {
    title: "Mobile Solutions",
    priceStart: "R 85 000",
    overview: "Flutter-based mobile applications delivering native performance on both iOS and Android from one codebase, with practical release cadence.",
    deliverables: ["Product scope and user-flow mapping", "Cross-platform mobile app build", "Secure API and authentication integration", "Store-readiness checklist"],
    projects: ["Shopwise Price Comparison"],
    cta: { label: "Get Started", to: "/contact" },
  },
  security: {
    title: "Security and Compliance",
    priceStart: "R 45 000",
    overview: "Led by Google Cybersecurity certified engineers. Comprehensive audits ensuring your systems meet data protection requirements.",
    deliverables: ["Security and compliance gap assessment", "POPIA remediation roadmap", "Authentication and data protection hardening", "Stakeholder-ready findings report"],
    projects: ["Bluewatch SOC Lab"],
    cta: { label: "Get Started", to: "/contact" },
  },
  government: {
    title: "Government Services",
    priceStart: null,
    overview: "Specialized digital services for SOEs. Procurement-support aligned to 80/20 preference-point requirements and workflow automation.",
    deliverables: ["citizen-facing portals and e-services", "workflow automation", "data dashboards and reporting", "legacy system modernization"],
    projects: [],
    cta: { label: "Contact Sales", to: "/contact" },
  },
} as const;

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();

  const { data, safeSlug } = useMemo(() => {
    const safe = (slug && slug in SERVICE_DATA ? slug : "web") as keyof typeof SERVICE_DATA;
    return { safeSlug: safe, data: SERVICE_DATA[safe] };
  }, [slug]);

  return (
    <>
      <style>{SERVICE_PAGE_STYLES}</style>
      <SEO
        title={`${data.title} | ImpactStack Africa`}
        description={data.overview}
        url={absoluteUrl(`/services/${safeSlug}`)}
      />
      <PageShell>
        <div className="relative min-h-screen bg-[#020205] overflow-hidden">
          
          {/* BACKGROUND AMBIENCE */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/footer-bg.webp"
              alt=""
              className="w-full h-full object-cover scale-150 blur-[140px] opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020205]/90 via-[#020205]/40 to-[#020205]" />
          </div>

          <div className="relative z-10 flex flex-col items-center pt-24 pb-32 px-4">
            
            <header className="w-full max-w-[1200px] text-center mb-16 md:mb-24">
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400">Project Breakdown</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                Standard <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Deliverables</span>
              </h1>
            </header>

            {/* MAIN CARD SECTION - RESTORED EXACT STYLING */}
            <main className="w-full max-w-[1100px] mb-24">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/10 to-purple-600/10 rounded-[45px] blur-3xl opacity-50 transition duration-700" />

                <Card className="relative h-full !bg-white/[0.005] !backdrop-blur-[120px] !rounded-[40px] !border !border-white/10 !text-white overflow-hidden shadow-2xl flex flex-col">

                  {/* Header Visual with CSS Motion Canvas */}
                  <div className="p-12 flex items-center justify-center relative z-10 bg-gradient-to-b from-white/3 to-transparent min-h-[220px] border-b border-white/5 overflow-hidden">
                    <div className="absolute w-64 h-64 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-soft" />
                    <div className="absolute w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-dot-float" />

                    <div className="relative z-20 flex flex-col items-center">
                      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-4 opacity-50" />
                      <Typography className="!text-[10px] !font-black !uppercase !tracking-[0.8em] !text-white/20">
                        ImpactStack Service
                      </Typography>
                    </div>
                  </div>

                  <CardContent className="p-10 md:p-16 flex flex-col h-full bg-black/60">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

                      {/* Left: Scope */}
                      <div className="md:col-span-1">
                        <p className="text-[11px] text-white/20 uppercase tracking-widest font-black mb-4">Service Scope</p>
                        <h2 className="text-3xl font-bold tracking-tight mb-4">{data.title}</h2>
                        <p className="text-sm text-white/40 leading-relaxed font-medium">{data.overview}</p>
                      </div>

                      {/* Center: Deliverables */}
                      <div className="md:col-span-1">
                        <p className="text-[11px] text-white/20 uppercase tracking-widest font-black mb-4">Core Deliverables</p>
                        <div className="space-y-4">
                          {data.deliverables.map((item) => (
                            <div key={item} className="flex items-start gap-3 text-[13px] text-white/60 font-semibold">
                              <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-white/10 flex items-center justify-center text-[8px] bg-white/5 text-blue-400">✓</span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Commercials */}
                      <div className="md:col-span-1">
                        <p className="text-[11px] text-white/20 uppercase tracking-widest font-black mb-4">Benchmark Price</p>
                        {data.priceStart ? (
                          <div className="flex flex-col">
                            <span className="text-4xl font-black tracking-tight text-white">{data.priceStart}</span>
                            <p className="text-[10px] text-white/20 mt-2 uppercase tracking-[0.2em] font-bold">Starting Excl. VAT</p>
                          </div>
                        ) : (
                          <span className="text-2xl font-bold text-white/70">Custom Quote Required</span>
                        )}

                        <Button
                          component={Link}
                          to={data.cta.to}
                          fullWidth
                          variant="outlined"
                          className="button-secondary mt-8 py-4 text-sm inline-block border border-gray-500 rounded hover:border-white transition-colors disabled:opacity-50"
                          style={{ textTransform: 'none' }}
                        >
                          {data.cta.label}
                        </Button>
                      </div>
                    </div>

                    {/* Tech Stack Chip Area */}
                    {data.projects.length > 0 && (
                      <div className="mt-16 pt-10 border-t border-white/5">
                        <p className="text-[10px] text-white/20 uppercase tracking-widest font-black mb-6">Proven Technical Stack</p>
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
                { label: "Payment Structure", title: "50/50 Deposit Terms", desc: "Project kickoff requires a 50% deposit. Remaining balance is due upon final handover." },
                { label: "Validity", title: "7-Day Quote Window", desc: "Quotes and timelines are valid for 7 days. Official invoices issued for all milestones." },
                { label: "Maintenance", title: "Standard Hourly Rate", desc: "Post-launch updates and support are billed at our standard hourly consultation rate." }
              ].map((term, i) => (
                <div key={i} className="p-10 rounded-[40px] border border-white/5 bg-white/[0.005] backdrop-blur-[120px] transition-all hover:border-white/15 group">
                  <Typography className="!text-blue-400 group-hover:!text-blue-300 !font-bold !text-[10px] !uppercase !tracking-widest !mb-5">{term.label}</Typography>
                  <Typography className="!text-white !text-xl !font-bold !mb-4 tracking-tight">{term.title}</Typography>
                  <Typography className="!text-white/30 !leading-relaxed text-[13px] font-medium">{term.desc}</Typography>
                </div>
              ))}
            </section>

          </div>
        </div>
      </PageShell>
    </>
  );
}