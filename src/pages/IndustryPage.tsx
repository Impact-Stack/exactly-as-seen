import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { industriesData } from "@/lib/industries";
import { absoluteUrl } from "@/lib/site";
import type { IndustryTier } from "@/lib/industries";

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

const SLUG_ALIASES: Record<string, string> = {
  "government-and-public-sector": "government",
  "mining-and-energy": "mining-energy",
  "retail-and-commerce": "retail-commerce",
};

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
  index: number;
}

function TierCard({ tier, index }: TierCardProps) {
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
          {tier.deliverables.map((item) => (
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
    </div>
  );
}

export default function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();

  const industry = useMemo(() => {
    const resolvedSlug = slug ? SLUG_ALIASES[slug] ?? slug : undefined;
    return (
      industriesData.find((item) => item.slug === resolvedSlug) ??
      industriesData[0]
    );
  }, [slug]);

  const foundationTier = industry.tiers[0];

  return (
    <>
      <style>{PAGE_STYLES}</style>
      <SEO
        title={`${industry.title} | ImpactStack Africa`}
        description={industry.description}
        url={absoluteUrl(`/industries/${industry.slug}`)}
      />
      <PageShell>
        <div className="relative min-h-screen bg-[#020205] overflow-hidden">
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
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-400">
                  {industry.projectType}
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                {industry.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500">
                  {industry.title.split(" ").slice(-1)[0]}
                </span>
              </h1>
            </header>

            <main className="w-full max-w-[1100px] mb-24">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-b from-purple-500/10 to-blue-600/10 rounded-[45px] blur-3xl opacity-50 transition duration-700" />

                <Card className="relative h-full !bg-white/[0.005] !backdrop-blur-[120px] !rounded-[40px] !border !border-white/10 !text-white overflow-hidden shadow-2xl flex flex-col">
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
                      <div className="md:col-span-1">
                        <p className="text-[11px] text-white/20 uppercase tracking-widest font-black mb-4">
                          Sector Scope
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight mb-4">
                          {industry.title}
                        </h2>
                        <p className="text-sm text-white/40 leading-relaxed font-medium">
                          {industry.description}
                        </p>
                      </div>

                      <div className="md:col-span-1">
                        <p className="text-[11px] text-white/20 uppercase tracking-widest font-black mb-4">
                          Foundation Deliverables
                        </p>
                        <div className="space-y-4">
                          {foundationTier.deliverables.map((item) => (
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

                      <div className="md:col-span-1">
                        <p className="text-[11px] text-white/20 uppercase tracking-widest font-black mb-4">
                          Benchmark Price
                        </p>
                        {foundationTier.price ? (
                          <div className="flex flex-col">
                            <span className="text-4xl font-black tracking-tight text-white">
                              {foundationTier.price}
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
                          to="/contact"
                          fullWidth
                          variant="outlined"
                          className="button-secondary mt-8 py-4 text-sm inline-block border border-gray-500 rounded hover:border-white transition-colors disabled:opacity-50"
                          style={{ textTransform: "none" }}
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>

                    <div className="mt-16 pt-10 border-t border-white/5">
                      <p className="text-[10px] text-white/20 uppercase tracking-widest font-black mb-6">
                        Delivery Evidence
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        <Chip
                          label={industry.evidence}
                          className="!bg-white/5 !text-white/30 !border-white/10 !text-[11px] !font-bold !rounded-lg"
                          variant="outlined"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </main>

            <section className="w-full max-w-[1200px] mb-24">
              <div className="text-center mb-10">
                <p className="text-[10px] text-white/20 uppercase tracking-widest font-black mb-3">
                  Engagement Tiers
                </p>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  Choose the right delivery level
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {industry.tiers.map((tier, i) => (
                  <TierCard key={tier.name} tier={tier} index={i} />
                ))}
              </div>
            </section>

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
