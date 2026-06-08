import { useMemo } from "react";
import { Link } from "react-router-dom";

// Optimized MUI Imports for better tree-shaking
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import {
  customQuoteServiceNames,
  formatZar,
} from "@/lib/pricing";
import { industriesData } from "@/lib/industries";
import type { IndustryItem, IndustryTier } from "@/lib/industries";
import footerBg from "/footer-bg.webp";

// Move styles outside to prevent re-creation on render
const floatingDotsStyles = `
  @keyframes dot-float {
    0%, 100% { transform: translateY(0) translateX(0); }
    25% { transform: translateY(-15px) translateX(10px); }
    50% { transform: translateY(-5px) translateX(-10px); }
    75% { transform: translateY(10px) translateX(5px); }
  }
  .animate-dot-float {
    animation: dot-float 8s ease-in-out infinite;
    will-change: transform;
  }
`;

const FLOATING_DOTS = [
  { top: "10%", left: "15%", size: 8, opacity: 10, delay: "0s" },
  { top: "45%", left: "5%", size: 6, opacity: 20, delay: "2s" },
  { top: "15%", right: "20%", size: 6, opacity: 10, delay: "4s" },
  { top: "70%", right: "10%", size: 8, opacity: 5, delay: "1s" },
  { top: "30%", left: "40%", size: 4, opacity: 20, delay: "3s" },
  { top: "60%", left: "25%", size: 4, opacity: 30, delay: "5s" },
  { top: "40%", right: "35%", size: 4, opacity: 20, delay: "2s" },
  { bottom: "20%", left: "15%", size: 6, opacity: 10, delay: "6s" },
  { bottom: "15%", right: "40%", size: 4, opacity: 20, delay: "0.5s" },
  { top: "80%", left: "50%", size: 4, opacity: 10, delay: "7s" },
];

const TIER_ACCENTS = [
  "from-amber-500/20 to-yellow-600/10 border-amber-500/30",
  "from-blue-500/20 to-indigo-600/10 border-blue-500/30",
  "from-purple-500/20 to-violet-600/10 border-purple-500/30",
] as const;

const TIER_CHECK_COLORS = [
  "text-amber-400",
  "text-blue-400",
  "text-purple-400",
] as const;

const TIER_LABEL_COLORS = [
  "text-amber-400",
  "text-blue-400",
  "text-purple-400",
] as const;

const TIER_LABELS = ["Tier 1", "Tier 2", "Tier 3"] as const;

interface TierCardProps {
  tier: IndustryTier;
  industry: IndustryItem;
  index: number;
}

function TierCard({ tier, industry, index }: TierCardProps) {
  const accent = TIER_ACCENTS[index];
  const checkColor = TIER_CHECK_COLORS[index];
  const labelColor = TIER_LABEL_COLORS[index];
  const label = TIER_LABELS[index];

  return (
    <div
      className={`relative flex flex-col rounded-[32px] border bg-gradient-to-b ${accent} bg-white/[0.02] backdrop-blur-[80px] p-8 md:p-10 gap-6 overflow-hidden transition-all duration-300 hover:bg-white/[0.04]`}
    >
      <div className="flex flex-col gap-1">
        <p className={`text-[10px] font-black uppercase tracking-[0.4em] ${labelColor}`}>
          {label}
        </p>
        <h3 className="text-2xl font-bold text-white tracking-tight">{tier.name}</h3>
      </div>

      <div className="flex flex-col gap-1 border-t border-white/5 pt-5">
        {tier.price ? (
          <>
            <span className="text-3xl font-black text-white tracking-tight">
              {tier.price}
            </span>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
              Starting excl. VAT
            </p>
          </>
        ) : (
          <>
            <span className="text-xl font-bold text-white/60">Custom Quote</span>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
              Contact sales
            </p>
          </>
        )}
      </div>

      <p className="text-sm text-white/40 leading-relaxed font-medium border-t border-white/5 pt-5">
        {tier.description}
      </p>

      <div className="flex flex-col gap-3 border-t border-white/5 pt-5">
        <p className="text-[10px] text-white/20 uppercase tracking-widest font-black">
          Core Deliverables
        </p>
        <div className="flex flex-col gap-3">
          {tier.deliverables.slice(0, 4).map((item) => (
            <div
              key={item}
              className={`flex items-start gap-3 text-[13px] font-semibold leading-relaxed ${
                item.startsWith("All ") ? "text-white/25" : "text-white/60"
              }`}
            >
              <span
                className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border border-white/10 flex items-center justify-center text-[8px] bg-white/5 ${checkColor}`}
              >
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <Button
        component={Link}
        to={`/industries/${industry.slug}`}
        fullWidth
        className="!border-white/20 !text-white !py-4 !rounded-full !normal-case !font-bold !text-sm border !backdrop-blur-md hover:!bg-white/5 transition-colors"
      >
        View Details
      </Button>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <style>{floatingDotsStyles}</style>
      <SEO
        title="Pricing & Terms | ImpactStack Africa"
        description="Enterprise software pricing tiers and payment terms for South African organizations."
        url={absoluteUrl("/pricing")}
      />

      <PageShell>
        <div className="relative min-h-screen bg-[#020205] overflow-hidden">
          {/* AMBIENT BACKGROUND LAYER */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={footerBg}
              alt=""
              className="w-full h-full object-cover scale-150 blur-[140px] opacity-50"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020205]/60 via-transparent to-[#020205]" />
          </div>

          {/* DYNAMIC FLOATING DOTS */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {FLOATING_DOTS.map((dot, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-dot-float bg-white"
                style={{
                  top: dot.top,
                  left: dot.left,
                  right: dot.right,
                  bottom: dot.bottom,
                  width: `${dot.size}px`,
                  height: `${dot.size}px`,
                  opacity: dot.opacity / 100,
                  animationDelay: dot.delay,
                }}
              />
            ))}
            <div className="absolute top-[5%] right-[5%] w-1 h-1 bg-white/40 rounded-full animate-pulse" />
          </div>

          <div className="relative z-10 px-4 py-20 md:py-32">
            {/* HERO SECTION */}
            <header className="w-full max-w-[1600px] mx-auto text-center mb-16 md:mb-24">
              <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400">
                  Standardized Tiers
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
                Transparent{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                  Pricing
                </span>
              </h1>
              <p className="text-lg text-white/40 max-w-3xl mx-auto font-medium leading-relaxed">
                Empowering Cape Town's enterprise and public sectors with
                predictable delivery. All project benchmarks reflect an
                8-developer direct cost structure.
              </p>
            </header>

            {/* INDUSTRIES & TIERS SECTION */}
            <main className="w-full max-w-[1600px] mx-auto mb-24">
              {industriesData.map((industry) => (
                <div key={industry.slug} className="mb-20">
                  <div className="mb-8">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-400">
                        {industry.projectType}
                      </p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">
                      {industry.title}
                    </h2>
                    <p className="text-white/40 text-sm md:text-base max-w-3xl">
                      {industry.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {industry.tiers.map((tier, i) => (
                      <TierCard key={tier.name} tier={tier} industry={industry} index={i} />
                    ))}
                  </div>
                </div>
              ))}
            </main>

            {/* POLICY SECTION */}
            <section className="w-full max-w-[1600px] mx-auto">
              <div className="rounded-[50px] border border-white/5 bg-white/[0.01] backdrop-blur-[120px] p-10 md:p-20 relative overflow-hidden">
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />

                <div className="relative z-10">
                  <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">
                    Engagement Terms & Policies
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                      {
                        label: "Payment Structure",
                        title: "50/50 Deposit Terms",
                        desc: "A 50% deposit is required before work commences. The remaining 50% is due on the final day of delivery."
                      },
                      {
                        label: "Validity & Invoicing",
                        title: "7-Day Quote Window",
                        desc: "All quotes are valid for 7 calendar days from the date of issue. An official invoice is issued for every transaction."
                      }
                    ].map((policy) => (
                      <div key={policy.title}>
                        <Typography sx={{ color: '#60a5fa', fontWeight: 'bold', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 2 }}>
                          {policy.label}
                        </Typography>
                        <Typography sx={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold', mb: 2 }}>
                          {policy.title}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, fontSize: '0.875rem' }}>
                          {policy.desc}
                        </Typography>
                      </div>
                    ))}
                  </div>

                  <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 6 }} />

                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap gap-3">
                      {customQuoteServiceNames.map((service) => (
                        <Chip
                          key={service}
                          label={service}
                          variant="outlined"
                          sx={{ 
                            bgcolor: 'rgba(255,255,255,0.05)', 
                            color: 'rgba(255,255,255,0.3)', 
                            borderColor: 'rgba(255,255,255,0.1)', 
                            fontSize: '11px', 
                            fontWeight: 'bold', 
                            borderRadius: '9999px' 
                          }}
                        />
                      ))}
                    </div>
                    <Typography sx={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 'bold', color: 'rgba(255,255,255,0.2)' }}>
                      Pricing to be reviewed upon VAT registration confirmation.
                    </Typography>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </PageShell>
    </>
  );
}