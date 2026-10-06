import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Waitlist } from "@clerk/react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";
import {
  Bell,
  BookOpen,
  Check,
  ChevronDown,
  Compass,
  LineChart,
  LockKeyhole,
  Play,
  Target,
  WalletCards,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import LearningPreview from "@/components/investswipe/LearningPreview";
import "@/components/investswipe/landing.css";

import { event as trackEvent } from "@/lib/analytics";
import { absoluteUrl } from "@/lib/site";

const CONCEPT_ROOT = "/images/investswipe-concepts";
const conceptBoards = [
  { file: "01-entry-auth-onboarding", title: "Getting started", description: "Entry, authentication, onboarding and risk awareness." },
  { file: "02-home-explore-asset-learn", title: "Discover & learn", description: "Home, Explore, asset context and guided lessons." },
  { file: "03-practice-reel-paper-order", title: "Practice decisions", description: "The practice reel, paper orders, confirmation and receipts." },
  { file: "04-portfolio-goals-top-up", title: "Track your progress", description: "Paper portfolios, allocation, goal pods and simulated credits." },
  { file: "05-activity-profile-settings-notifications", title: "Make it yours", description: "Activity, profiles, settings and notifications." },
  { file: "06-themes-plus-support-practice-sheet", title: "Themes & support", description: "Personalisation, Plus concepts, help and practice actions." },
  { file: "07-signup-recovery-oauth-waitlist", title: "Account access", description: "Sign-up, account recovery, OAuth and beta waitlist concepts." },
  { file: "08-empty-offline-recovery-states", title: "Everyday states", description: "Empty screens, slow networks and recovery experiences." },
];
type ConceptScreen = { src: string; column: number };
const boardScreen = (board: number, column: number): ConceptScreen => ({ src: `${CONCEPT_ROOT}/${conceptBoards[board].file}.webp`, column });
const screens = {
  home: boardScreen(1, 0), learn: boardScreen(1, 3), markets: boardScreen(1, 1),
  practice: boardScreen(2, 0), portfolio: boardScreen(3, 0), goals: boardScreen(3, 2),
  topUp: boardScreen(3, 3), profile: boardScreen(4, 1), asset: boardScreen(1, 2),
};

function PhoneMockup({ src, alt, className = "", loading = "lazy", delay = 0, float = true }: {
  src: ConceptScreen; alt: string; className?: string; loading?: "lazy" | "eager"; delay?: number; float?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  return <motion.div className={`${/(^|\s)(absolute|relative|fixed|sticky)(\s|$)/.test(className) ? "" : "relative"} aspect-[420/936] shrink-0 overflow-hidden ${/(^|\s)w-/.test(className) ? "" : "w-[min(72vw,270px)]"} ${className}`}
    animate={float && !reducedMotion ? { y: [0, -8, 0] } : undefined}
    transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}>
    <img src={src.src} alt={alt} loading={loading} decoding="async" className="absolute top-0 h-full max-w-none" style={{ width: "400%", left: `${src.column * -100}%` }} />
  </motion.div>;
}

const CONTACT_INVESTSWIPE_HREF =
  "/contact?projectType=InvestSwipe%20Partnership";

const productMoments = [
  { title: "Learn", copy: "Get to know investing through short lessons and clear market stories.", meta: "Build your knowledge", icon: BookOpen, screen: screens.learn },
  { title: "Practise", copy: "Try investment decisions with paper credits. Explore the outcome without putting real money at risk.", meta: "Try it with paper credits", icon: LineChart, screen: screens.practice },
  { title: "Track", copy: "Follow your simulated portfolio and goals as you build confidence over time.", meta: "See your progress", icon: Target, screen: screens.portfolio },
];

const waitlistCount = Number.parseInt(
  import.meta.env.VITE_INVESTSWIPE_WAITLIST_COUNT ?? "",
  10,
);
const waitlistCountLabel =
  Number.isFinite(waitlistCount) && waitlistCount > 0
    ? new Intl.NumberFormat("en-ZA").format(waitlistCount)
    : null;
const waitlistSocialProof = waitlistCountLabel
  ? `${waitlistCountLabel} people already on the early access list.`
  : null;
const heroTrustLine =
  waitlistSocialProof ?? "Paper trading only. No real deposits. No custody.";

const roadmap = [
  { title: "Research", state: "Completed", isCurrent: false },
  { title: "Validation", state: "Completed", isCurrent: false },
  { title: "Product design", state: "Completed", isCurrent: false },
  { title: "Waitlist live", state: "Completed", isCurrent: false },
  { title: "MVP development", state: "Current", isCurrent: true },
  { title: "Private beta", state: "Upcoming", isCurrent: false },
];

const canvas = [
  {
    title: "Value proposition",
    items: [
      "Learn investing before risking real money",
      "Swipe-based, mobile-first market education",
      "Paper trading with confidence-building feedback",
    ],
  },
  {
    title: "Customer segments",
    items: ["Students and graduates", "Young professionals", "First-time investors"],
  },
  {
    title: "Channels",
    items: ["ImpactStack Africa", "Waitlist landing pages", "Campus outreach"],
  },
  {
    title: "Revenue paths",
    items: ["Freemium subscriptions", "Advanced learning tools", "Education partnerships"],
  },
];

const faqs = [
  {
    q: "Is InvestSwipe real investing?",
    a: "No. InvestSwipe is education-only simulated investing practice. It does not place real trades, hold real money, or provide financial advice.",
  },
  {
    q: "What happens after I join the waitlist?",
    a: "You reserve interest for early access. We will use the list to invite testers as private beta capacity opens.",
  },
  {
    q: "Will I be charged?",
    a: "Joining the beta waitlist is free. No payment details are requested.",
  },
  {
    q: "Who is InvestSwipe for?",
    a: "It is built for financially curious young South Africans who want to understand markets, practice decisions, and build confidence before using real money elsewhere.",
  },
];

const clerkWaitlistAppearance = {
  variables: {
    colorBackground: "transparent",
    colorText: "#f5f9ff",
    colorTextSecondary: "#9aacbf",
    colorPrimary: "#1478ff",
    colorDanger: "#ff6b6b",
    colorSuccess: "#32d583",
    colorInputBackground: "rgba(245,249,255,0.06)",
    colorInputText: "#f5f9ff",
    borderRadius: "8px",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "0.875rem",
  },
  elements: {
    card: { background: "transparent", boxShadow: "none", padding: "0" },
    headerTitle: { display: "none" },
    headerSubtitle: { display: "none" },
    logoBox: { display: "none" },
    formFieldInput: {
      background: "rgba(245,249,255,0.07)",
      border: "1px solid rgba(52,120,255,0.35)",
      borderRadius: "8px",
      color: "#f5f9ff",
      padding: "1rem 1.1rem",
      fontSize: "0.95rem",
    },
    formFieldLabel: { color: "#9aacbf", fontSize: "0.875rem" },
    formButtonPrimary: {
      background: "#21b6ff",
      color: "#031422",
      fontWeight: "700",
      fontSize: "0.875rem",
      borderRadius: "8px",
      padding: "1rem",
      width: "100%",
      boxShadow: "0 18px 48px rgba(20,120,255,0.32)",
    },
    footer: { background: "transparent", backgroundImage: "none", display: "none" },
    footerAction: { display: "none" },
    footerActionLink: { display: "none" },
    footerPages: { display: "none" },
    alert: {
      background: "rgba(20,120,255,0.12)",
      border: "1px solid rgba(20,120,255,0.3)",
      borderRadius: "8px",
      color: "#f5f9ff",
    },
  },
};

function BrandLockup() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
      <span className="font-semibold text-white">ImpactStack Africa</span>
      <span className="text-white/30">x</span>
      <span className="font-semibold text-white">
        INVEST<span className="text-[#21b6ff]">SWIPE</span>
      </span>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mb-5 inline-flex rounded-full border border-[#34506d] bg-[#0d1b2d]/70 px-4 py-2 text-xs font-semibold uppercase text-[#b8f35c]"
    >
      {children}
    </motion.p>
  );
}

export default function InvestSwipePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const structuredData: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "InvestSwipe",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Android, iOS",
      url: absoluteUrl("/investswipe"),
      image: absoluteUrl(screens.home.src),
      description:
        "InvestSwipe is a mobile-first simulated investing education app for paper trading practice, market learning, and portfolio confidence building.",
      publisher: {
        "@type": "Organization",
        name: "ImpactStack Africa",
        url: absoluteUrl("/"),
      },
      offers: {
        "@type": "Offer",
        url: absoluteUrl("/investswipe"),
        availability: "https://schema.org/PreOrder",
        description: "Join the private beta waitlist.",
      },
      isAccessibleForFree: true,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <>
      <SEO
        title="InvestSwipe | Learn Investing Before Using Real Money"
        description="Learn investing through bite-sized stories and practise with simulated credits. Join the InvestSwipe waitlist for the upcoming private beta in South Africa."
        url={absoluteUrl("/investswipe")}
        structuredData={structuredData}
      />
      <MotionConfig reducedMotion="user"><PageShell>
        <div className="investswipe-page bg-[#05070c] text-[#f5f9ff]">
          <section className="relative overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,#05070c_0%,#07111f_54%,#0b1728_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(20,120,255,0.28),rgba(5,7,12,0)_64%)]" />
            <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:84px_84px]" />

            <div className="container-narrow relative z-10 grid items-center gap-8 py-10 sm:gap-10 sm:py-14 lg:min-h-[760px] lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <BrandLockup />
                <p className="mt-6 inline-flex rounded-full border border-[#34506d] bg-[#0d1b2d]/70 px-4 py-2 text-xs font-semibold uppercase text-[#b8f35c] sm:mt-8">
                  INVESTING EDUCATION · EARLY ACCESS
                </p>

                <h1 className="mt-5 max-w-3xl text-[2.5rem] font-black leading-[1.04] text-white sm:mt-7 sm:text-5xl lg:text-6xl">
                  A better habit.<br />
                  <span className="block text-[#21b6ff]">One swipe at a time.</span>
                </h1>
                <p className="mt-4 max-w-xl text-base leading-7 text-[#b7c3d1] sm:mt-6 sm:text-lg sm:leading-8">
                  Learn investing through bite-sized stories and practise with simulated credits. Built for first-time investors in South Africa, so you can build confidence before using real money.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <a
                    href="#waitlist"
                    onClick={() =>
                      trackEvent({
                        action: "investswipe_hero_waitlist_click",
                        category: "InvestSwipe",
                        label: "Hero CTA",
                      })
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-lg is-cta bg-[#21b6ff] px-5 py-3.5 text-sm font-bold text-[#031422] sm:px-6 sm:py-4 shadow-[0_18px_44px_rgba(20,120,255,0.35)] transition hover:bg-[#1478ff]"
                  >
                    Get early access
                  </a>
                  <a href="#product-journey" className="inline-flex items-center justify-center px-3 py-3 text-sm font-semibold text-[#b7c3d1] underline underline-offset-4 hover:text-[#21b6ff]">See how it works</a>
                </div>

                <p className="mt-5 flex max-w-xl items-center gap-2 text-sm font-medium text-[#9aacbf]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#b8f35c] shadow-[0_0_16px_rgba(184,243,92,0.6)]" />
                  {heroTrustLine}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
                className="relative mx-auto w-full max-w-[390px]"
              >
                <LearningPreview />
              </motion.div>
            </div>
          </section>
          <section aria-label="Practice boundaries" className="border-y border-white/10 bg-[#07111f]">
            <div className="container-narrow flex flex-wrap justify-center gap-x-8 gap-y-3 py-5 text-xs font-semibold uppercase tracking-wide text-[#9aacbf]">
              {["Education first", "Paper credits only", "No real deposits"].map(item => <span key={item} className="flex items-center gap-2"><Check size={14} className="text-[#b8f35c]" aria-hidden="true" />{item}</span>)}
            </div>
          </section>
          <section id="product-journey" className="bg-[#05070c] py-14 sm:py-20">
            <div className="container-narrow">
              <div className="mx-auto max-w-2xl text-center">
                <SectionLabel>Learn → Practise → Track</SectionLabel>
                <h2 className="text-3xl font-black leading-tight sm:text-5xl">Build confidence, one decision at a time.</h2>
                <p className="mt-4 text-[#9aacbf] leading-7">A preview of how InvestSwipe will help you get started. The app is in development; these screens show the planned experience.</p>
              </div>
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {productMoments.map((moment, index) => <article key={moment.title} className="rounded-xl border border-[#20334b] bg-[#07111f] p-5 sm:p-6">
                  <div className="flex items-center justify-between text-[#21b6ff]"><moment.icon size={22} aria-hidden="true" /><span className="text-xs font-semibold text-[#b8f35c]">0{index + 1}</span></div>
                  <h3 className="mt-4 text-2xl font-bold">{moment.title}</h3>
                  <p className="mt-3 min-h-[84px] text-base leading-7 text-[#b7c3d1]">{moment.copy}</p>
                  <PhoneMockup src={moment.screen} alt={`InvestSwipe ${moment.title} design concept`} delay={index * 0.8} className="mx-auto mt-5 w-[min(56vw,220px)]" />
                  <p className="mt-4 text-center text-xs text-[#9aacbf]">{moment.meta}</p>
                </article>)}
              </div>
              <div className="mt-8 text-center"><a href="#waitlist" className="inline-flex items-center gap-2 font-semibold text-[#21b6ff] hover:underline">Join the early access list</a></div>
            </div>
          </section>

          <section id="waitlist" className="relative overflow-hidden bg-black py-14 sm:py-20">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#05070c_0%,#0a1020_52%,#020306_100%)]" />
            <div className="absolute inset-x-[-10%] bottom-[-34%] h-[560px] rounded-[100%] border-t border-white/35 bg-[radial-gradient(ellipse_at_center,rgba(245,249,255,0.34),rgba(20,120,255,0.18)_32%,rgba(5,7,12,0)_68%)]" />
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(245,249,255,0.48)_1px,transparent_1px)] [background-size:92px_92px]" />
            <p className="absolute left-1/2 top-12 -translate-x-1/2 select-none text-[80px] font-black leading-none text-white/[0.035] sm:text-[130px] lg:text-[180px]">
              WAITLIST
            </p>

            <div className="container-narrow relative z-10 mx-auto max-w-4xl text-center">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35 }}
                className="mx-auto mb-5 inline-flex rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 text-sm text-[#c8d4e2]"
              >
                Waitlist is open
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.48, delay: 0.06, ease: "easeOut" }}
                className="mx-auto max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl"
              >
                Be first to practise with InvestSwipe.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.44, delay: 0.12, ease: "easeOut" }}
                className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#9aacbf] sm:mt-6 sm:text-lg sm:leading-8"
              >
                Join early, follow the build, and help shape a safer way for
                first-time investors to learn through simulation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.48, delay: 0.18, ease: "easeOut" }}
                className="mx-auto mt-7 max-w-lg rounded-lg border border-white/12 bg-[#07111f]/82 p-4 text-left shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur sm:mt-9 sm:max-w-xl sm:p-6"
              >
                <div className="mb-4 flex items-start justify-between gap-4 sm:mb-5">
                  <div>
                    <p className="text-sm font-semibold uppercase text-[#b8f35c]">
                      Private beta access
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-white">
                      Reserve your spot
                    </h3>
                    {waitlistSocialProof && (
                      <p className="mt-2 text-sm font-medium text-[#9aacbf]">
                        {waitlistSocialProof}
                      </p>
                    )}
                  </div>
                  <WalletCards className="h-6 w-6 text-[#21b6ff]" />
                </div>
                <div className="overflow-hidden rounded-lg border border-white/10 bg-black/20 p-3 sm:p-4">
                  <Waitlist appearance={clerkWaitlistAppearance} />
                </div>
                <p className="mt-4 text-xs leading-5 text-[#6f8298]">
                  Paper trading only. No real deposits, no broker execution, no
                  custody, no financial advice.
                </p>
              </motion.div>

              <div className="mx-auto mt-6 grid max-w-2xl gap-3 sm:mt-8 sm:grid-cols-3">
                {[
                  { label: "Early beta invites", icon: Bell, color: "text-[#21b6ff]" },
                  { label: "Product updates", icon: Compass, color: "text-[#b8f35c]" },
                  { label: "No checkout", icon: LockKeyhole, color: "text-[#f5b942]" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.34, delay: 0.24 + index * 0.05 }}
                    className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-left"
                  >
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <p className="mt-3 text-sm font-semibold text-white">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section className="bg-[#05070c] py-14 sm:py-20">
            <div className="container-narrow grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <SectionLabel>Early-stage roadmap</SectionLabel>
                <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                  Built in South Africa. Shaped with beginners.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#9aacbf]">
                  InvestSwipe is being developed by ImpactStack Africa. We are building an education-first app for people taking their first steps into investing. Join the waitlist to follow progress and be considered for upcoming private beta cohorts.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {roadmap.map((stage, index) => (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.38, delay: index * 0.04 }}
                    whileHover={{ y: -5, borderColor: "rgba(33,182,255,0.5)" }}
                    className={`rounded-lg border p-5 ${
                      stage.isCurrent
                        ? "border-[#1478ff] bg-[#123451]/55 shadow-[0_22px_60px_rgba(20,120,255,0.24)]"
                        : "border-[#20334b] bg-[#0d1b2d]"
                    }`}
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <motion.span
                        animate={stage.isCurrent ? { scale: [1, 1.08, 1] } : undefined}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                        className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                          stage.isCurrent
                            ? "border-[#21b6ff] bg-[#1478ff] text-white"
                            : "border-[#34506d] text-[#b8f35c]"
                        }`}
                      >
                        {stage.isCurrent ? (
                          <Play className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Check className="h-4 w-4" aria-hidden="true" />
                        )}
                      </motion.span>
                      <span className="text-sm font-semibold uppercase text-[#b7c3d1]">
                        {stage.state}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-[#07111f] py-14 sm:py-20">
            <div className="container-narrow grid gap-8 lg:grid-cols-2 lg:items-center">
              <div><SectionLabel>Learn without financial exposure</SectionLabel><h2 className="text-3xl font-black leading-tight sm:text-5xl">Real learning. Simulated money.</h2><p className="mt-5 text-[#9aacbf] leading-7">Practise decisions with paper credits and understand the risks before investing real money elsewhere. InvestSwipe is an education product and does not execute real trades.</p></div>
              <div className="grid gap-3 sm:grid-cols-2">{["No real deposits", "No custody of your money", "Risk awareness before practice", "Educational market context"].map(item => <div key={item} className="flex items-center gap-3 rounded-lg border border-[#20334b] p-4"><Check size={20} className="shrink-0 text-[#b8f35c]" aria-hidden="true" /><span className="text-sm font-semibold">{item}</span></div>)}</div>
            </div>
          </section>

          <section className="bg-[#05070c] py-14 sm:py-20">
            <div className="container-narrow">
              <div className="mb-10 max-w-2xl">
                <SectionLabel>Common questions</SectionLabel>
                <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                  Clear answers before you join.
                </h2>
              </div>

              <div className="divide-y divide-white/10 border-y border-white/10">
                {faqs.map((faq, index) => {
                  const isExpanded = expandedIndex === index;

                  return (
                    <article key={faq.q}>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedIndex(isExpanded ? null : index)
                        }
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                        aria-expanded={isExpanded}
                      >
                        <span className="text-xl font-bold text-white">
                          {faq.q}
                        </span>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white">
                          <ChevronDown
                            className={`h-4 w-4 transition ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-3xl pb-7 text-base leading-8 text-[#9aacbf]">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="border-t border-white/10 bg-[#05070c] py-12"><div className="container-narrow is-final-cta"><div><p className="is-hero-kicker mb-3">Confidence before capital</p><h2 className="text-3xl font-bold text-white sm:text-4xl">Make your next scroll count.</h2></div><a href="#waitlist" className="is-cta inline-flex min-h-12 items-center justify-center rounded-lg px-6 py-4 font-bold">Join the waitlist</a></div></section>
          <section id="partnerships" className="bg-[#07111f] py-12">
            <div className="container-narrow">
              <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <SectionLabel>Education partnerships</SectionLabel>
                  <h2 className="max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
                    Help shape the next generation of investors.
                  </h2>
                </div>
                <p className="max-w-md text-base leading-7 text-[#9aacbf]">
                  We welcome education partners and campus communities who want to help first-time investors learn. Explore our evolving model or get in touch.
                </p>
              </div>

              <Link to={CONTACT_INVESTSWIPE_HREF} className="mb-6 inline-flex items-center gap-2 font-semibold text-[#21b6ff] hover:underline">Discuss a partnership</Link>
              <details className="group/model rounded-xl border border-[#20334b] p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">Explore our business model<ChevronDown size={20} className="transition group-open/model:rotate-180" aria-hidden="true" /></summary><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {canvas.map((block, index) => (
                  <motion.article
                    key={block.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-70px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -6, backgroundColor: "rgba(19,36,58,0.82)" }}
                    className="rounded-lg border border-[#20334b] bg-[#0d1b2d]/78 p-5"
                  >
                    <h3 className="text-xl font-bold text-white">{block.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {block.items.map((item, itemIndex) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.28, delay: index * 0.05 + itemIndex * 0.04 }}
                          className="flex gap-3 text-sm leading-6 text-[#c8d4e2]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8f35c]" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div></details>
            </div>
          </section>

          <section id="concept-gallery" aria-labelledby="concept-gallery-heading" className="bg-[#07111f] py-12 border-y border-white/10 scroll-mt-28">
            <div className="container-narrow">
              <SectionLabel>Midnight Ledger · design concepts</SectionLabel>
              <h2 id="concept-gallery-heading" className="text-4xl md:text-5xl font-bold mb-5">See the experience, screen by screen.</h2>
              <p className="max-w-2xl text-[#9aacbf] leading-7 mb-10">Take a closer look at onboarding, lessons, paper orders and more. These concepts may evolve during development.</p>
              <details className="group/gallery rounded-xl border border-[#20334b] p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#21b6ff] [&::-webkit-details-marker]:hidden">Explore all eight design boards<ChevronDown size={20} className="transition group-open/gallery:rotate-180" aria-hidden="true" /></summary><div className="mt-6 grid md:grid-cols-2 gap-6">
                {conceptBoards.map((board, index) => <a key={board.file} href={`${CONCEPT_ROOT}/${board.file}.webp`} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-xl border border-[#20334b] bg-[#07111f] hover:border-[#21b6ff]/60 transition-colors" aria-label={`Open ${board.title} concept board in a new tab`}>
                  <img src={`${CONCEPT_ROOT}/${board.file}.webp`} alt={`InvestSwipe design concepts: ${board.description}`} width="1681" height="941" loading="lazy" className="w-full h-auto" />
                  <div className="p-5"><p className="text-xs text-[#21b6ff] mb-2">CONCEPT {String(index + 1).padStart(2, "0")}</p><h3 className="text-xl mb-2 flex justify-between gap-3">{board.title}</h3><p className="text-sm text-[#9aacbf] leading-6">{board.description}</p></div>
                </a>)}
              </div></details>
            </div>
          </section>

        </div>
      </PageShell></MotionConfig>
    </>
  );
}
