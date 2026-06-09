import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { industriesData } from "@/lib/industries";
import { absoluteUrl } from "@/lib/site";
import type { IndustryTier } from "@/lib/industries";

const PAGE_STYLES = `
  @keyframes pulse-soft {
    0%, 100% { transform: scale(1); opacity: 0.15; }
    50% { transform: scale(1.12); opacity: 0.25; }
  }
  .animate-pulse-soft {
    animation: pulse-soft 9s ease-in-out infinite;
  }
  .tier-card {
    transition: transform 0.25s ease, border-color 0.25s ease;
  }
  .tier-card:hover {
    transform: translateY(-4px);
  }
  .tier-card-featured {
    border-color: rgba(168, 85, 247, 0.5) !important;
    background: linear-gradient(160deg, rgba(139,92,246,0.08) 0%, rgba(99,102,241,0.04) 100%) !important;
  }
`;

const SLUG_ALIASES: Record<string, string> = {
  "government-and-public-sector": "government",
  "mining-and-energy": "mining-energy",
  "retail-and-commerce": "retail-commerce",
};

const ACCENT_COLORS = [
  { check: "#94a3b8", label: "rgba(148,163,184,0.7)", border: "rgba(255,255,255,0.08)" },
  { check: "#a78bfa", label: "#a78bfa", border: "rgba(168,85,247,0.5)" },
  { check: "#818cf8", label: "rgba(129,140,248,0.7)", border: "rgba(255,255,255,0.08)" },
];

interface TierCardProps {
  tier: IndustryTier;
  index: number;
  isFeatured: boolean;
  contactHref: string;
}

function TierCard({ tier, index, isFeatured, contactHref }: TierCardProps) {
  const accent = ACCENT_COLORS[index];

  return (
    <div
      className={`tier-card flex flex-col rounded-3xl border bg-white/[0.02] backdrop-blur-xl overflow-hidden ${isFeatured ? "tier-card-featured" : ""}`}
      style={{ borderColor: accent.border }}
    >
      {/* Top badge row */}
      <div className="flex items-center justify-between px-7 pt-7 pb-0">
        <span
          className="text-[9px] font-black uppercase tracking-[0.5em]"
          style={{ color: accent.label }}
        >
          {tier.name}
        </span>
        {isFeatured && (
          <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
            Recommended
          </span>
        )}
      </div>

      {/* Price */}
      <div className="px-7 pt-5 pb-6 border-b border-white/[0.06]">
        {tier.price ? (
          <>
            <p className="text-4xl font-black text-white tracking-tight leading-none">
              {tier.price}
            </p>
            <p className="text-[10px] text-white/20 mt-2 uppercase tracking-[0.25em] font-bold">
              Starting excl. VAT
            </p>
          </>
        ) : (
          <>
            <p className="text-2xl font-bold text-white/50 leading-none">Custom Quote</p>
            <p className="text-[10px] text-white/20 mt-2 uppercase tracking-[0.25em] font-bold">
              Contact sales
            </p>
          </>
        )}
      </div>

      {/* Description */}
      <div className="px-7 pt-6 pb-0">
        <p className="text-[13px] text-white/35 leading-relaxed font-medium">
          {tier.description}
        </p>
      </div>

      {/* Deliverables */}
      <div className="px-7 pt-6 pb-0 flex-1">
        <p className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-black mb-4">
          Core Deliverables
        </p>
        <div className="flex flex-col gap-3">
          {tier.deliverables.map((item) => (
            <div
              key={item}
              className={`flex items-start gap-3 text-[13px] font-semibold leading-relaxed ${
                item.startsWith("All ") ? "text-white/20" : "text-white/55"
              }`}
            >
              <span
                className="mt-[3px] flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[8px] border border-white/10 bg-white/[0.04]"
                style={{ color: accent.check }}
              >
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-7 py-7 mt-6">
        <Link
          to={contactHref}
          className={`block w-full text-center py-3.5 rounded-xl text-[13px] font-bold transition-all duration-200 ${
            isFeatured
              ? "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/40"
              : "bg-white/[0.06] hover:bg-white/[0.1] text-white/70 hover:text-white border border-white/10"
          }`}
        >
          Get Started
        </Link>
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

  // Build contact href with projectType pre-filled
  const contactHref = `/contact?projectType=${encodeURIComponent(industry.projectType)}`;

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
          {/* Background glow */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/footer-bg.webp"
              alt=""
              className="w-full h-full object-cover scale-150 blur-[140px] opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020205]/90 via-[#020205]/50 to-[#020205]" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-3xl animate-pulse-soft" />
          </div>

          <div className="relative z-10 flex flex-col items-center pt-28 pb-32 px-4">

            {/* ── HEADER ── */}
            <header className="w-full max-w-[760px] text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 opacity-80" />
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-400">
                  {industry.projectType}
                </p>
              </div>

              <h1 className="text-5xl md:text-[4.5rem] font-black text-white tracking-tighter leading-[1.05] mb-6">
                {industry.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                  {industry.title.split(" ").slice(-1)[0]}
                </span>
              </h1>

              <p className="text-base text-white/35 leading-relaxed max-w-[580px] mx-auto font-medium">
                {industry.description}
              </p>
            </header>

            {/* ── TIER CARDS ── */}
            <section className="w-full max-w-[1160px] mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {industry.tiers.map((tier, i) => (
                  <TierCard
                    key={tier.name}
                    tier={tier}
                    index={i}
                    isFeatured={i === 1}
                    contactHref={contactHref}
                  />
                ))}
              </div>
            </section>

            {/* ── DELIVERY EVIDENCE + CTA ── */}
            <div className="w-full max-w-[1160px] mb-20">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 border-t border-b border-white/[0.06]">
                <div>
                  <p className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-black mb-2">
                    Delivery Evidence
                  </p>
                  <p className="text-sm text-white/40 font-semibold">{industry.evidence}</p>
                </div>
                <Link
                  to={contactHref}
                  className="flex-shrink-0 px-8 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-white text-[13px] font-bold transition-all duration-200"
                >
                  Get Started →
                </Link>
              </div>
            </div>

            {/* ── TERMS CARDS ── */}
            <section className="w-full max-w-[1160px] grid grid-cols-1 md:grid-cols-3 gap-5">
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
                  className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl hover:border-white/[0.12] transition-all duration-200"
                >
                  <p className="text-[9px] text-purple-400/70 uppercase tracking-[0.4em] font-black mb-4">
                    {term.label}
                  </p>
                  <p className="text-white text-[17px] font-bold mb-3 tracking-tight">
                    {term.title}
                  </p>
                  <p className="text-white/30 text-[13px] leading-relaxed font-medium">
                    {term.desc}
                  </p>
                </div>
              ))}
            </section>

          </div>
        </div>
      </PageShell>
    </>
  );
}