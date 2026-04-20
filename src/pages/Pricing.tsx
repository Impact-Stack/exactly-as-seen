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
  flagshipPricingOffers,
  formatZar,
} from "@/lib/pricing";
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

            {/* 4-COLUMN PRICING GRID */}
            <main className="w-full max-w-[1600px] mx-auto mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
                {flagshipPricingOffers.map((offer) => (
                  <div key={offer.id} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[38px] blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                    <Card className="relative h-full !bg-white/[0.03] !backdrop-blur-[100px] !rounded-[36px] !border !border-white/10 !text-white overflow-hidden shadow-2xl transition-all duration-500 group-hover:!border-white/20 group-hover:-translate-y-2">
                      <CardContent className="p-7 xl:p-9 flex flex-col h-full">
                        <div className="mb-8">
                          <h2 className="text-2xl font-bold mb-3 tracking-tight">
                            {offer.title}
                          </h2>
                          <p className="text-xs text-white/30 leading-relaxed font-medium min-h-[40px]">
                            {offer.description}
                          </p>
                        </div>

                        <div className="mb-8 pt-6 border-t border-white/5">
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black tracking-tight">
                              {formatZar(offer.startingPrice)}
                            </span>
                          </div>
                          <p className="text-[9px] text-white/20 mt-2 uppercase tracking-[0.2em] font-bold">
                            Starting Price • Excl. VAT
                          </p>
                        </div>

                        <div className="space-y-4 mb-10 flex-grow">
                          {offer.deliverables.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 text-[13px] text-white/50 font-medium"
                            >
                              <span className="mt-1 flex-shrink-0 w-3.5 h-3.5 rounded-full border border-white/20 flex items-center justify-center text-[7px] bg-white/5 text-blue-400">
                                ✓
                              </span>
                              {item}
                            </div>
                          ))}
                        </div>

                        <Button
                          component={Link}
                          to={offer.destination}
                          fullWidth
                          className="!border-white/20 !text-white !py-4 !rounded-full !normal-case !font-bold !text-sm border !backdrop-blur-md hover:!bg-white/5 transition-colors"
                        >
                          View Tiers
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}

                {/* Hardware Card */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[38px] blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  <Card className="relative h-full !bg-white/[0.05] !backdrop-blur-[100px] !rounded-[36px] !border !border-white/20 !text-white overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <CardContent className="p-7 xl:p-9 flex flex-col h-full bg-gradient-to-br from-indigo-500/5 to-transparent">
                      <div className="mb-8">
                        <Chip
                          label="Bulk Only"
                          sx={{ 
                            bgcolor: '#2563eb', 
                            color: 'white', 
                            fontSize: '9px', 
                            fontWeight: 'bold', 
                            mb: 2, 
                            height: 24 
                          }}
                        />
                        <h2 className="text-2xl font-bold mb-3 tracking-tight">
                          Hardware & Gov
                        </h2>
                        <p className="text-xs text-white/30 leading-relaxed font-medium">
                          Device reselling and infrastructure for large-scale
                          government contracts.
                        </p>
                      </div>

                      <div className="mb-8 pt-6 border-t border-white/10">
                        <span className="text-xl font-bold tracking-tight text-white/80">
                          Bulk Discounting
                        </span>
                        <p className="text-[9px] text-white/20 mt-2 uppercase tracking-[0.2em] font-bold">
                          RFP / Tender Support
                        </p>
                      </div>

                      <div className="space-y-4 mb-10 flex-grow">
                        {['Tiered bulk pricing models', 'Secure device logistics', 'Maintenance & support'].map((text) => (
                          <div key={text} className="flex items-start gap-3 text-[13px] text-white/50 font-medium">
                            ✓ {text}
                          </div>
                        ))}
                      </div>

                      <Button
                        component={Link}
                        to="/contact"
                        fullWidth
                        className="!border-white/20 !text-white !py-4 !rounded-full !normal-case !font-bold !text-sm border !backdrop-blur-md hover:!bg-white/5 transition-colors"
                      >
                        Request Quote
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
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