// --- CORE REACT & ROUTING ---
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

// --- CLERK ---
import { Waitlist } from "@clerk/react";

// --- MUI OPTIMIZATION (Crucial for bundle size) ---
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";

// --- REACT ICONS (Direct path imports) ---
import {
  MdAdd,
  MdCheck,
  MdOutlineEmojiEvents,
  MdOutlinePeople,
  MdOutlinePlayCircle,
  MdOutlineTouchApp,
} from "react-icons/md";

// --- ANIMATION & UTILS ---
import { motion, AnimatePresence } from "framer-motion";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { event as trackEvent } from "@/lib/analytics";
import { absoluteUrl } from "@/lib/site";
import { useInView } from "@/hooks/use-in-view";

// --- ASSETS ---
import investswipeMockup from "@/assets/investswipe-mockup.webp";

const faqs = [
  {
    q: "Is InvestSwipe safe and legal?",
    a: "InvestSwipe operates in a simulated environment. It does not involve real investments or a licensed FSCA-regulated broker, and no actual funds are held or traded.",
  },
  {
    q: "What is the minimum investment?",
    a: "Low-barrier entry with fractional investing built for first-time users.",
  },
  {
    q: "Are there fees?",
    a: "A free access model is planned for launch, with optional premium capabilities introduced later.",
  },
  {
    q: "Can I lose money?",
    a: "Yes. All investing carries risk. Only invest what you can afford to lose. Our 60-second videos explain risks for each asset.",
  },
  {
    q: "When does it launch?",
    a: "Q3 2026 for beta (500 users). Q4 2026 for public launch. Join waitlist for early access.",
  },
  {
    q: "Who built this?",
    a: "ImpactStack Africa, a youth-led Cape Town tech company. Led by Google Cybersecurity certified developer Liso Hlatshwayo, 21.",
  },
];

const features: string[] = [
  "Accessible starting investment",
  "Short-form education content",
  "Simple swipe interaction model",
  "Community learning features",
];

const CONTACT_INVESTSWIPE_HREF =
  "/contact?projectType=InvestSwipe%20Partnership";

const INVESTSWIPE_FIGMA_URL =
  import.meta.env.VITE_INVESTSWIPE_FIGMA_URL?.trim();
const INVESTSWIPE_FIGMA_EMBED_URL = INVESTSWIPE_FIGMA_URL
  ? `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(INVESTSWIPE_FIGMA_URL)}`
  : null;

// Clerk Waitlist dark-theme appearance config
const clerkWaitlistAppearance = { 
  variables: {
    colorBackground: "transparent",
    colorText: "#ffffff",
    colorTextSecondary: "rgba(255,255,255,0.5)",
    colorPrimary: "#a855f7",
    colorDanger: "#f87171",
    colorSuccess: "#34d399",
    colorInputBackground: "rgba(255,255,255,0.05)",
    colorInputText: "#ffffff",
    borderRadius: "1rem",
    fontFamily: "inherit",
    fontSize: "0.875rem",
  },
  elements: {
    // 1. Added cardBox to completely dissolve the outer wrapper's background and shadow
    cardBox: {
      background: "transparent",
      boxShadow: "none",
      border: "none",
      width: "100%",
      maxWidth: "100%",
    },
    // 2. Stripped down internal padding to 0 so it relies fully on your responsive Tailwind wrapper
    card: {
      background: "transparent",
      boxShadow: "none",
      border: "none",
      padding: "0px",
      margin: "0px",
      width: "100%",
      maxWidth: "100%",
      gap: "1.5rem", // Kept a healthy vertical layout rhythm inside the form elements
    },
    // Header / title
    headerTitle: {
      color: "#ffffff",
      fontSize: "2.5rem",
      fontWeight: "700",
      fontFamily: "serif",
      letterSpacing: "-0.03em",
      lineHeight: "1.1",
    },
    headerSubtitle: {
      color: "rgba(255,255,255,0.5)",
      fontSize: "0.875rem",
    },
    // Logo area — hide Clerk branding to keep our own badge
    logoBox: { display: "none" },
    // Input fields
    formFieldInput: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: "1rem",
      color: "#ffffff",
      padding: "1rem 1.25rem",
      fontSize: "0.875rem",
      outline: "none",
      transition: "border-color 0.2s, box-shadow 0.2s",
      "::placeholder": { color: "rgba(255,255,255,0.20)" },
      ":focus": {
        borderColor: "rgba(168,85,247,0.5)",
        boxShadow: "0 0 0 1px rgba(168,85,247,0.3)",
      },
    },
    formFieldLabel: {
      color: "rgba(255,255,255,0.6)",
      fontSize: "0.75rem",
      marginBottom: "0.375rem",
    },
    // Submit button
    formButtonPrimary: {
      background: "#ffffff",
      color: "#000000",
      fontWeight: "600",
      fontSize: "0.875rem",
      borderRadius: "1rem",
      padding: "1rem",
      width: "100%",
      marginTop: "0.5rem",
      transition: "opacity 0.2s, transform 0.1s",
      ":hover": { opacity: "0.9" },
      ":active": { transform: "scale(0.98)" },
      ":disabled": { opacity: "0.5" },
    },
    // Footer / "Powered by Clerk" row
    footer: { 
      background: "transparent",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      marginTop: "1rem", 
      backgroundImage: "none",
    },
    footerAction: { display: "none" },
    footerActionLink: { display: "none" },
    footerPages: { display: "none" },
    // Social OAuth buttons (if shown)
    socialButtonsBlockButton: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.10)",
      color: "#ffffff",
      borderRadius: "0.75rem",
    },
    // Divider line
    dividerLine: { background: "rgba(255,255,255,0.08)" },
    dividerText: { color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" },
    // Success / error alert banners
    alert: {
      background: "rgba(168,85,247,0.08)",
      border: "1px solid rgba(168,85,247,0.2)",
      borderRadius: "0.75rem",
      color: "#ffffff",
    },
    alertText: { color: "rgba(255,255,255,0.8)" },
    // Internal form container spacing
    form: { gap: "0.75rem" },
    formFields: { gap: "0.75rem" },
  },
};

export default function InvestSwipePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { ref, isInView } = useInView();

  const structuredData: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ImpactStack Africa",
      url: absoluteUrl("/"),
      logo: absoluteUrl("/favicon.ico"),
      email: "hello@impactstack.africa",
      telephone: "+27 83 894 7546",
      areaServed: "South Africa",
      sameAs: [
        "https://linkedin.com/company/impactstack-africa",
        "https://github.com/impactstack-africa",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "InvestSwipe",
      category: "Fintech Platform",
      url: absoluteUrl("/investswipe"),
      image: absoluteUrl(investswipeMockup),
      description:
        "A mobile-first investing platform for young South Africans with swipe interactions and fractional investing.",
      brand: {
        "@type": "Brand",
        name: "ImpactStack Africa",
      },
      offers: {
        "@type": "Offer",
        url: absoluteUrl(CONTACT_INVESTSWIPE_HREF),
        availability: "https://schema.org/PreOrder",
        description: "Join the waitlist for beta access.",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "InvestSwipe",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Android, iOS",
      url: absoluteUrl("/investswipe"),
      image: absoluteUrl(investswipeMockup),
      description:
        "InvestSwipe makes entry-level investing accessible to young South Africans with swipe interactions, short-form education, and fractional investing.",
      publisher: {
        "@type": "Organization",
        name: "ImpactStack Africa",
        url: absoluteUrl("/"),
      },
      offers: [
        {
          "@type": "Offer",
          url: absoluteUrl(CONTACT_INVESTSWIPE_HREF),
          availability: "https://schema.org/PreOrder",
          description: "Join the waitlist for beta access.",
        },
      ],
      isAccessibleForFree: true,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];

  return (
    <>
      <SEO
        title="InvestSwipe | ImpactStack Africa"
        description="InvestSwipe makes investing accessible to young South Africans through a simple swipe-based experience."
        url={absoluteUrl("/investswipe")}
        structuredData={structuredData}
      />
      <PageShell>
        <section className="bg-[#05050A] py-24 px-4 border-b border-white/5 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <img
              src="/download (19).webp"
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 20%" }}
              aria-hidden="true"
            />
          </div>
          <div className="container-narrow text-center relative">
            <h1 className="text-hero text-white mb-4">
              The Future of Investing in South Africa
            </h1>
            <p className="text-card-title text-[#B5B7C6] font-light mb-8">
              Making wealth creation accessible to 18 million young South
              Africans
            </p>
            <Button
              component={Link}
              to={CONTACT_INVESTSWIPE_HREF}
              variant="outlined"
              className="px-10 py-3 text-sm border border-gray-500 rounded-full hover:border-white transition-colors"
              sx={{ textTransform: "none", color: "white" }}
            >
              Join Waitlist
            </Button>
          </div>
        </section>

        <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden bg-[#050505]">
          {/* Layer 1: Atmospheric Background Asset */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
          </div>

          {/* Layer 2: Abstract Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="container-narrow relative z-10 mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* LEFT COLUMN */}
              <div className="lg:col-span-5 pt-4">
                <p className="tag-label mb-3">JOIN THE BETA</p>
                <h2 className="text-section text-white mb-4">
                  Fast Waitlist Flow
                </h2>
                <p className="text-body text-[#B5B7C6] mb-8">
                  Step 1 reserves your beta spot in under 30 seconds. Step 2 is
                  optional and lets you share goals so we can prioritize
                  onboarding.
                </p>
                <div className="space-y-4">
                  <Card className="surface-card p-4">
                    <p className="text-subtitle text-white mb-1">Step 1</p>
                    <p className="text-small text-[#B5B7C6]">
                      Submit quick details for beta access.
                    </p>
                  </Card>
                  <Card className="surface-card p-4">
                    <p className="text-subtitle text-white mb-1">
                      Step 2 (Optional)
                    </p>
                    <p className="text-small text-[#B5B7C6]">
                      Continue to full brief with project context and business
                      goals.
                    </p>
                  </Card>
                </div>
              </div>

              {/* RIGHT COLUMN: Clerk Waitlist */}
<div className="lg:col-span-7 flex justify-center lg:justify-end w-full min-w-0 px-0 sm:px-4 lg:px-0">
  {/* 1. Removed overflow-hidden so components don't clip.
    2. Changed padding to px-4 py-6 (xs:px-6 sm:px-10) to give the form horizontal breathing room while preserving vertical spacing.
  */}
  <div className="w-full min-w-0 max-w-lg px-4 py-6 xs:px-6 xs:py-8 sm:px-10 sm:py-12 md:p-12 rounded-[20px] sm:rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl flex flex-col items-stretch gap-6 sm:gap-8">
    
    {/* Top Badge */}
    <div className="flex justify-center">
      <span className="px-3 py-1 text-[10px] tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full whitespace-nowrap">
        Launching Q3 2026
      </span>
    </div>

    {/* Clerk Waitlist Component — Removed overflow-hidden here as well */}
    <div className="w-full min-w-0">
      <Waitlist appearance={clerkWaitlistAppearance} />
    </div>

    {/* Secondary Link */}
    <div className="text-center">
      <Link
        to={CONTACT_INVESTSWIPE_HREF}
        className="text-xs font-medium text-white/40 hover:text-white underline underline-offset-4 transition-colors"
        onClick={() =>
          trackEvent({
            action: "investswipe_full_brief_click",
            category: "InvestSwipe",
          })
        }
      >
        Step 2 is optional for priority access
      </Link>
    </div>
  </div>
</div>
            </div>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden bg-[#05050A]" ref={ref}>
          {/* Ambient glow blobs */}
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
    
          <div className="container mx-auto px-6 relative z-10 max-w-5xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-14"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <p className="text-[10px] tracking-[0.2em] text-purple-400 font-bold uppercase">
                  Fintech Product · Target Q3 2026
                </p>
              </div>
    
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-4 leading-none">
                InvestSwipe
              </h2>
    
              <p className="text-xl text-[#B5B7C6] font-medium leading-relaxed max-w-2xl">
                Accessible investing for emerging markets. A mobile-first platform
                designed for entry-level investors in South Africa, featuring guided
                onboarding and swipe-based portfolio actions.
              </p>
            </motion.div>
    
            {/* Feature grid */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
            >
              {features.map((f, i) => (
                <li
                  key={f}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm text-[#B5B7C6] group hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)] group-hover:scale-150 transition-transform flex-shrink-0" />
                  <span className="text-sm font-medium tracking-wide">{f}</span>
                </li>
              ))}
            </motion.ul>
    
            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
    
              <p className="text-sm text-white/40 font-medium">
                Be among the first 500 beta users
              </p>
            </motion.div>
          </div>
        </section>

        {/* REDESIGNED CHALLENGE SECTION */}
        <section className="section-padding relative overflow-hidden bg-[#05050A] border-t border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container-narrow relative z-10 text-center mx-auto px-6">
            <p className="tag-label mb-3">THE CHALLENGE</p>
            <h2 className="text-section text-white mb-12">
              Why 18 Million Young South Africans Do Not Invest
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  num: "18M",
                  label: "Youth Ages 18-35",
                  desc: "Do not currently invest in stocks or crypto",
                },
                {
                  num: "10B+",
                  label: "Lost Wealth Opportunity",
                  desc: "Annual compound growth not captured",
                },
                {
                  num: "83%",
                  label: "Feel Excluded",
                  desc: "Traditional platforms are not designed for them",
                },
              ].map((s) => (
                <Card
                  key={s.num}
                  className="relative overflow-hidden bg-purple-950/5 border-white/10 backdrop-blur-xl rounded-[40px] p-10 shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center border"
                  style={{
                    boxShadow: "inset 0 0 20px rgba(167, 139, 250, 0.05)",
                    backgroundColor: "rgba(15, 10, 31, 0.2)",
                  }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <p className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                    {s.num}
                  </p>
                  <p className="text-lg font-medium text-white/90 mb-2">
                    {s.label}
                  </p>
                  <p className="text-sm text-white/40 leading-relaxed max-w-[200px] font-light">
                    {s.desc}
                  </p>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-[#05050A] overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] -z-10" />

          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 relative">
                <div className="relative z-10 flex justify-center">
                  <div className="relative p-8 rounded-[48px] bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm shadow-2xl">
                    <img
                      src={investswipeMockup}
                      alt="InvestSwipe App Interface"
                      className="w-full max-w-[320px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gradient-to-tr from-purple-500/20 to-blue-500/0 rounded-full blur-3xl opacity-30 -z-0" />
              </div>

              <div className="lg:col-span-6">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                  Swipe Right to <br />
                  <span className="text-purple-400 italic">Build Wealth</span>
                </h2>

                <p className="text-xl text-white/60 mb-12 max-w-lg">
                  We've taken the friction out of the markets. Familiar
                  interface, revolutionary financial impact for a new
                  generation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Swipe Action",
                      desc: "Tinder-style interface for quick decisions.",
                      icon: <MdOutlineTouchApp />,
                    },
                    {
                      title: "60s Education",
                      desc: "Stocks explained in bite-sized videos.",
                      icon: <MdOutlinePlayCircle />,
                    },
                    {
                      title: "Social Trading",
                      desc: "See portfolios and learn with friends.",
                      icon: <MdOutlinePeople />,
                    },
                    {
                      title: "Gamified Learn",
                      desc: "Earn credits for your first trade.",
                      icon: <MdOutlineEmojiEvents />,
                    },
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="group p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                        {React.cloneElement(feature.icon, { size: 24 })}
                      </div>
                      <h3 className="text-white font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- INTERACTIVE FAQ SECTION --- */}
        <section className="bg-black py-24 border-t border-white/5">
          <div className="container-narrow">
            <div className="mb-20 space-y-2 text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-purple-500">
                COMMON QUESTIONS
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="border-t border-white/10">
              {faqs.map((faq, index) => {
                const isExpanded = index === expandedIndex;
                const displayNum = (index + 1).toString().padStart(2, "0");
                const label = ["A", "B", "C", "D", "E", "F"][index] || "X";

                return (
                  <motion.article
                    key={index}
                    className="relative border-b border-white/10 cursor-pointer overflow-hidden group"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  >
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, x: -100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.6, ease: "circOut" }}
                          className="absolute inset-0 z-0 pointer-events-none"
                        >
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="none"
                            className="w-full h-full object-cover opacity-60 scale-105"
                          >
                            <source src="/gif.webm" type="video/webm" />
                            <source
                              src="/gif-compressed.mp4"
                              type="video/mp4"
                            />
                          </video>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 py-14 px-4 md:px-10">
                      <div className="flex items-center gap-8 min-w-[320px]">
                        <p
                          className={`text-[10px] font-mono font-bold border-b pb-1 self-start mt-4 transition-colors duration-500 ${
                            isExpanded
                              ? "text-purple-400 border-purple-400"
                              : "text-white/40 border-white/20"
                          }`}
                        >
                          {displayNum}
                        </p>
                        <h3
                          className={`text-[80px] font-black tracking-tighter leading-none transition-all duration-500 ${
                            isExpanded ? "text-white" : "text-white/10"
                          }`}
                        >
                          {label}-{displayNum}
                        </h3>
                      </div>

                      <div className="flex-1 space-y-4 text-left">
                        <p
                          className={`text-[12px] uppercase tracking-[0.4em] font-black transition-colors duration-500 ${
                            isExpanded ? "text-white" : "text-white/40"
                          }`}
                        >
                          {faq.q}
                        </p>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="text-[15px] text-[#B5B7C6] max-w-[480px] leading-relaxed font-medium pb-4">
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div
                        className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 ${
                          isExpanded
                            ? "bg-white text-black border-white"
                            : "border-white/10 text-white/20"
                        }`}
                      >
                        {isExpanded ? (
                          <MdCheck size={24} />
                        ) : (
                          <MdAdd size={24} />
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative bg-[#05050A] py-32 px-4 text-center border-t border-white/5 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

          <div className="relative z-10 max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <p className="text-[10px] font-bold tracking-[0.2em] text-purple-400 uppercase">
                Limited Beta Access
              </p>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-[0.9]">
              Join the Financial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                Revolution.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-[#B5B7C6] font-normal mb-10 max-w-[500px] mx-auto leading-relaxed">
              500 beta spots. Be among the first to experience fractional
              investing with <b>InvestSwipe</b>.
            </p>

            <div className="flex flex-col items-center gap-4">
              <Button
                component={Link}
                to={CONTACT_INVESTSWIPE_HREF}
                onClick={() =>
                  trackEvent({
                    action: "footer_waitlist_click",
                    category: "InvestSwipe",
                    label: "Footer CTA",
                  })
                }
                className="group relative px-12 py-5 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-full transition-all hover:scale-105 hover:bg-purple-50 active:scale-95"
              >
                Join Waitlist Now
              </Button>

              <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                Cape Town, SA — Launching Q3 2026
              </p>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}