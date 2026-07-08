import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Waitlist } from "@clerk/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
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
import { InvestSwipePhone as PhoneMockup } from "@/components/investswipe/InvestSwipePhone";
import { event as trackEvent } from "@/lib/analytics";
import { absoluteUrl } from "@/lib/site";

const SCREEN_ROOT =
  "/investswipe-live-app-screenshots-20260702-222616/20260702-222616";

const screens = {
  home: `${SCREEN_ROOT}/06-home.png`,
  learn: `${SCREEN_ROOT}/07-learn.png`,
  markets: `${SCREEN_ROOT}/08-markets.png`,
  practice: `${SCREEN_ROOT}/09-practice.png`,
  portfolio: `${SCREEN_ROOT}/11-portfolio.png`,
  goals: `${SCREEN_ROOT}/14-goals.png`,
  topUp: `${SCREEN_ROOT}/15-top-up.png`,
  profile: `${SCREEN_ROOT}/17-profile.png`,
  asset: `${SCREEN_ROOT}/21-asset-aapl.png`,
};

const CONTACT_INVESTSWIPE_HREF =
  "/contact?projectType=InvestSwipe%20Partnership";

const proofTicker = [
  "Education-first beta",
  "No real deposits",
  "Paper credits only",
  "Practice before risk",
  "Community-shaped",
  "Private beta access",
];

const productMoments = [
  {
    title: "Learn",
    copy: "Build market basics through short lessons and guided context before making decisions.",
    meta: "Education-first",
    icon: BookOpen,
    screen: screens.learn,
  },
  {
    title: "Swipe",
    copy: "Move through market stories and practice intent in a calm short-form flow.",
    meta: "Practice reel",
    icon: Play,
    screen: screens.practice,
  },
  {
    title: "Simulate",
    copy: "Use paper credits to test choices, read risk prompts, and see the effect without real exposure.",
    meta: "Paper trading",
    icon: LineChart,
    screen: screens.asset,
  },
  {
    title: "Track",
    copy: "Follow simulated holdings, goal pods, and activity with finance-wallet clarity.",
    meta: "Portfolio view",
    icon: Target,
    screen: screens.goals,
  },
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

const screenshotProof = [
  { label: "Account", value: "Paper portfolio" },
  { label: "Markets", value: "Swipe discovery" },
  { label: "Goals", value: "Tracked progress" },
];

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
    a: "No. The beta waitlist does not collect payment details. Any subscription or checkout surface remains preview-only until verified entitlements exist.",
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
    formFieldLabel: { color: "#9aacbf", fontSize: "0.75rem" },
    formButtonPrimary: {
      background: "linear-gradient(135deg, #1478ff 0%, #21b6ff 100%)",
      color: "#ffffff",
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
      image: absoluteUrl(screens.home),
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
        title="InvestSwipe Waitlist | Simulated Investing Practice"
        description="Join the InvestSwipe waitlist for a premium mobile-first investing education app with paper trading practice, market reels, and simulated portfolio tracking."
        url={absoluteUrl("/investswipe")}
        structuredData={structuredData}
      />
      <PageShell>
        <div className="bg-[#05070c] text-[#f5f9ff]">
          <section className="relative overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,#05070c_0%,#07111f_54%,#0b1728_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(20,120,255,0.28),rgba(5,7,12,0)_64%)]" />
            <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:84px_84px]" />

            <div className="container-narrow relative z-10 grid min-h-[calc(100svh-72px)] items-center gap-7 py-10 sm:gap-10 sm:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <BrandLockup />
                <p className="mt-6 inline-flex rounded-full border border-[#34506d] bg-[#0d1b2d]/70 px-4 py-2 text-xs font-semibold uppercase text-[#b8f35c] sm:mt-8">
                  Early access waitlist
                </p>

                <h1 className="mt-5 max-w-3xl text-[2.7rem] font-black leading-[0.96] text-white sm:mt-7 sm:text-6xl lg:text-7xl">
                  Learn markets before real money.
                </h1>
                <p className="mt-4 max-w-xl text-base leading-7 text-[#b7c3d1] sm:mt-6 sm:text-lg sm:leading-8">
                  Join the InvestSwipe waitlist for short asset stories, paper
                  trading practice, and simulated portfolio tracking built for
                  first-time investors.
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
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1478ff] px-5 py-3.5 text-sm font-bold text-white sm:px-6 sm:py-4 shadow-[0_18px_44px_rgba(20,120,255,0.35)] transition hover:bg-[#21b6ff]"
                  >
                    Get early access
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <Link
                    to={CONTACT_INVESTSWIPE_HREF}
                    onClick={() =>
                      trackEvent({
                        action: "investswipe_partner_click",
                        category: "InvestSwipe",
                        label: "Hero partner CTA",
                      })
                    }
                    className="inline-flex items-center justify-center rounded-lg border border-white/18 bg-white/[0.04] px-5 py-3.5 text-sm font-bold text-white sm:px-6 sm:py-4 transition hover:border-[#21b6ff]/70"
                  >
                    Build with us
                  </Link>
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
                className="relative -mt-8 min-h-[560px] sm:-mt-12 sm:min-h-[620px] lg:mt-0 lg:min-h-[720px]"
              >
                <div className="absolute left-1/2 top-10 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-white/[0.06] sm:top-14 sm:h-[560px] sm:w-[560px]" />
                <div className="absolute left-1/2 top-20 z-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(20,120,255,0.2),rgba(5,7,12,0)_68%)] sm:top-24 sm:h-[430px] sm:w-[430px]" />
                <PhoneMockup
                  src={screens.home}
                  alt="InvestSwipe simulated account home screen"
                  loading="eager"
                  delay={0.2}
                  className="relative z-10 mx-auto w-[min(72vw,310px)] sm:w-[min(86vw,390px)] lg:translate-y-8"
                />
                <div className="absolute bottom-2 left-1/2 z-20 w-[min(88%,360px)] -translate-x-1/2 rounded-lg border border-white/10 bg-[#07111f]/78 px-3 py-2.5 text-center text-xs font-medium text-[#c8d4e2] shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur sm:bottom-4 sm:w-[min(86%,420px)] sm:px-4 sm:py-3 sm:text-sm">
                  Live app preview. Simulated balances only.
                </div>
              </motion.div>
            </div>
          </section>
          <section className="overflow-hidden border-y border-white/10 bg-[#07111f]">
            <motion.div
              className="flex w-max gap-3 py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            >
              {[...proofTicker, ...proofTicker].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="mx-2 rounded-full border border-[#20334b] bg-[#0d1b2d] px-5 py-2 text-xs font-semibold uppercase text-[#9aacbf]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </section>

          <section className="relative overflow-hidden bg-[#dce5d8] py-20 text-[#111513]">
            <div className="container-narrow relative z-10">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase text-[#1478ff]">
                    Live app screenshots
                  </p>
                  <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[#111513] md:text-6xl">
                    A real product preview, not a placeholder promise.
                  </h2>
                </div>
                <p className="max-w-md text-base leading-7 text-[#3c4942]">
                  The waitlist page now showcases the current InvestSwipe app
                  state: simulated account value, markets, practice, paper
                  portfolio, and goal pods.
                </p>
              </div>

              <div className="relative mt-12 min-h-[650px] lg:min-h-[760px]">
                <p className="absolute left-1/2 top-8 z-0 -translate-x-1/2 select-none text-[72px] font-black leading-none text-[#111513]/10 sm:text-[130px] lg:text-[180px] xl:text-[210px]">
                  SIMULATED
                </p>
                <div className="relative z-10 flex flex-col items-center justify-center gap-8 lg:flex-row">
                  <PhoneMockup
                    src={screens.learn}
                    alt="InvestSwipe learn screen"
                    delay={0.2}
                    className="lg:mt-28 lg:-rotate-7"
                  />
                  <PhoneMockup
                    src={screens.home}
                    alt="InvestSwipe home dashboard"
                    delay={0.55}
                    className="w-[min(80vw,340px)] lg:rotate-1"
                  />
                  <PhoneMockup
                    src={screens.goals}
                    alt="InvestSwipe goal pods screen"
                    delay={0.9}
                    className="lg:mt-28 lg:rotate-7"
                  />
                </div>
              </div>

              <div className="grid gap-3 border-t border-[#111513]/10 pt-6 sm:grid-cols-3">
                {screenshotProof.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-[#111513]/10 bg-white/40 p-4 shadow-[0_18px_50px_rgba(17,21,19,0.08)]"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1478ff]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-black text-[#111513]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden border-y border-white/10 bg-[#05070c] py-24">
            <div className="container-narrow">
              <div className="mx-auto max-w-3xl text-center">
                <SectionLabel>The InvestSwipe journey</SectionLabel>
                <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
                  From curiosity to paper-trading confidence.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#9aacbf]">
                  A guided product path for people who want to understand market
                  behavior before making real-world financial decisions.
                </p>
              </div>

              <div className="mt-14 grid gap-5 lg:grid-cols-4">
                {productMoments.map((moment, index) => (
                  <motion.article
                    key={moment.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    whileHover={{ y: -8, borderColor: "rgba(33,182,255,0.45)" }}
                    className="group rounded-lg border border-[#20334b] bg-[#0d1b2d]/80 p-4 transition-colors duration-300 hover:bg-[#13243a]/80"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#34506d] bg-[#07111f] text-[#21b6ff]">
                        <moment.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-semibold uppercase text-[#b8f35c]">
                        {moment.meta}
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-white/10 bg-black">
                      <img
                        src={moment.screen}
                        alt={`InvestSwipe ${moment.title} app screen`}
                        className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-white">
                      {moment.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#9aacbf]">
                      {moment.copy}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#07111f] py-24">
            <div className="container-narrow grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <SectionLabel>Early-stage roadmap</SectionLabel>
                <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
                  Building in public, shaped by the community.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#9aacbf]">
                  InvestSwipe is in active MVP development. The waitlist helps
                  us prioritize feedback, private beta cohorts, and the app
                  screens worth polishing first.
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
                      <span className="text-xs font-semibold uppercase text-[#9aacbf]">
                        {stage.state}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#05070c] py-24">
            <div className="container-narrow">
              <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <SectionLabel>Business model canvas</SectionLabel>
                  <h2 className="max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
                    How we are thinking about InvestSwipe.
                  </h2>
                </div>
                <p className="max-w-md text-base leading-7 text-[#9aacbf]">
                  The model will evolve as we validate the product with beta
                  users, education partners, and early community feedback.
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-4">
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
              </div>
            </div>
          </section>

          <section id="waitlist" className="relative overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
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
                className="mx-auto max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl"
              >
                The wait is part of the journey.
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
          <section className="bg-[#dce5d8] py-24 text-[#111513]">
            <div className="container-narrow grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="relative min-h-[540px]">
                <PhoneMockup
                  src={screens.profile}
                  alt="InvestSwipe profile theme picker"
                  className="absolute left-0 top-10 hidden -rotate-6 lg:block"
                />
                <PhoneMockup
                  src={screens.topUp}
                  alt="InvestSwipe simulated credits top up"
                  className="relative z-10 mx-auto w-[min(78vw,310px)] lg:translate-x-20 lg:rotate-3"
                />
              </div>

              <div>
                <p className="text-sm font-bold uppercase text-[#1478ff]">
                  Safe by design
                </p>
                <h2 className="mt-3 text-4xl font-black leading-tight text-[#111513] md:text-6xl">
                  Flashy enough to notice. Serious enough to trust.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#3c4942]">
                  The page borrows the energy of modern fintech launches while
                  keeping the product boundary clear: simulated credits,
                  learning, practice, and beta feedback.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "No real money charged",
                    "No wallet or custody flow",
                    "Risk acknowledgment before practice",
                    "Educational market context",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg border border-[#111513]/12 bg-white/45 p-4"
                    >
                      <Check className="h-5 w-5 shrink-0 text-[#087f5b]" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#05070c] py-24">
            <div className="container-narrow">
              <div className="mb-10 max-w-2xl">
                <SectionLabel>Common questions</SectionLabel>
                <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
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
        </div>
      </PageShell>
    </>
  );
}
