import { type FormEvent, useState } from "react";
import { MdCheck } from "react-icons/md";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "@/components/ui/sonner";
import investswipeMockup from "@/assets/investswipe-mockup.png";
import { event as trackEvent } from "@/lib/analytics";
import { absoluteUrl } from "@/lib/site";
import { Button, Card } from "@mui/material";
import heroBg from "@/assets/hero-bg.jpg";

const faqs = [
  {
    q: "Is InvestSwipe safe and legal?",
    a: "Yes. We partner with a licensed FSCA-regulated broker. Your investments are held by the broker in segregated accounts.",
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

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID?.trim();
const CONTACT_INVESTSWIPE_HREF =
  "/contact?projectType=InvestSwipe%20Partnership";

const INVESTSWIPE_FIGMA_URL =
  import.meta.env.VITE_INVESTSWIPE_FIGMA_URL?.trim();
const INVESTSWIPE_FIGMA_EMBED_URL = INVESTSWIPE_FIGMA_URL
  ? `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(INVESTSWIPE_FIGMA_URL)}`
  : null;

export default function InvestSwipePage() {
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

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

  const handleQuickWaitlistSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWaitlistSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: "InvestSwipe Partnership",
      message: "InvestSwipe beta waitlist signup from landing page.",
      source: "investswipe_quick_waitlist",
    };

    try {
      if (!FORMSPREE_ID) {
        throw new Error("Formspree not configured");
      }

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      trackEvent({
        action: "investswipe_quick_waitlist_submit",
        category: "InvestSwipe",
        label: "Quick Waitlist Form",
      });
      toast.success(
        "Beta spot requested. Optional step 2: share your full brief below.",
      );
      setWaitlistSubmitted(true);
      form.reset();
    } catch {
      toast.error(
        "Could not save the waitlist request. Please continue with the full contact form.",
      );
    } finally {
      setWaitlistSubmitting(false);
    }
  };

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
              src={heroBg}
              alt=""
              className="w-full h-full object-cover"
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
              onClick={() =>
                trackEvent({
                  action: "hero_waitlist_click",
                  category: "InvestSwipe",
                  label: "Hero CTA",
                })
              }
              variant="contained"
              color="primary"
              className="button-primary px-10 py-4 text-body"
            >
              Join Waitlist
            </Button>
            <p className="text-small text-[#A1A1B5] mt-4">
              Launching Q3 2026 | Be among the first 500 beta users
            </p>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
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

            <div className="surface-card p-8">
              <form className="space-y-5" onSubmit={handleQuickWaitlistSubmit}>
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div>
                  <label
                    htmlFor="waitlistName"
                    className="block text-small font-medium text-white/80 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="waitlistName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full bg-[#0B0B12] border border-white/[0.08] rounded-md px-4 py-3 text-body text-white placeholder:text-[#A1A1B5] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="waitlistEmail"
                    className="block text-small font-medium text-white/80 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="waitlistEmail"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-[#0B0B12] border border-white/[0.08] rounded-md px-4 py-3 text-body text-white placeholder:text-[#A1A1B5] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="waitlistPhone"
                    className="block text-small font-medium text-white/80 mb-2"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    id="waitlistPhone"
                    name="phone"
                    type="tel"
                    className="w-full bg-[#0B0B12] border border-white/[0.08] rounded-md px-4 py-3 text-body text-white placeholder:text-[#A1A1B5] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                    placeholder="+27"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={waitlistSubmitting}
                  variant="contained"
                  color="primary"
                  className="w-full button-primary py-3 text-body disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {waitlistSubmitting ? "Saving..." : "Save My Beta Spot"}
                </Button>
              </form>

              <div
                className={`mt-4 rounded-lg border px-4 py-3 ${waitlistSubmitted ? "border-[#00A651]/40 bg-[#00A651]/10" : "border-white/[0.07] bg-[#0B0B12]"}`}
              >
                <p className="text-small text-[#B5B7C6] mb-3">
                  {waitlistSubmitted
                    ? "Step 1 complete. Continue to step 2 for priority onboarding."
                    : "Step 2 is optional, but helps us prioritize your rollout."}
                </p>
                <Link
                  to={CONTACT_INVESTSWIPE_HREF}
                  className="inline-block text-small font-semibold text-[#C4B5FD]"
                  onClick={() =>
                    trackEvent({
                      action: "investswipe_full_brief_click",
                      category: "InvestSwipe",
                      label: "Quick Form Follow-up Link",
                    })
                  }
                >
                  Continue to Full Project Brief
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#05050A] border-t border-white/5">
          <div className="container-narrow text-center">
            <p className="tag-label mb-3">THE CHALLENGE</p>
            <h2 className="text-section text-white mb-12">
              Why 18 Million Young South Africans Do Not Invest
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <Card key={s.num} className="surface-card p-8">
                  <p className="text-hero text-[#C4B5FD]">{s.num}</p>
                  <p className="text-subtitle text-white mt-2">{s.label}</p>
                  <p className="text-small text-[#A1A1B5] mt-1">{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <p className="tag-label mb-2">FIGMA MOCKUP</p>
                <h2 className="text-section text-white">
                  InvestSwipe Product Preview
                </h2>
              </div>
              {INVESTSWIPE_FIGMA_URL && (
                <Button
                  component="a"
                  href={INVESTSWIPE_FIGMA_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    trackEvent({
                      action: "figma_open_click",
                      category: "InvestSwipe",
                      label: "Figma Prototype Link",
                    })
                  }
                  variant="outlined"
                  color="secondary"
                  className="button-secondary px-5 py-3 text-body"
                >
                  Open in Figma
                </Button>
              )}
            </div>

            <div className="surface-card overflow-hidden">
              {INVESTSWIPE_FIGMA_EMBED_URL ? (
                <iframe
                  title="InvestSwipe Figma mockup"
                  src={INVESTSWIPE_FIGMA_EMBED_URL}
                  className="w-full h-[420px] md:h-[620px]"
                  loading="lazy"
                  allowFullScreen
                />
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8">
                  <img
                    src={investswipeMockup}
                    alt="InvestSwipe mockup preview"
                    className="max-w-[320px] w-full mx-auto"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-subtitle text-white mb-3">
                      Figma link not configured
                    </p>
                    <p className="text-body text-[#B5B7C6]">
                      Add{" "}
                      <code className="text-[#C4B5FD]">
                        VITE_INVESTSWIPE_FIGMA_URL
                      </code>{" "}
                      to your <code className="text-[#C4B5FD]">.env</code> file
                      to embed the live prototype here.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#05050A] border-t border-white/5">
          <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Card className="surface-card p-6">
                <img
                  src={investswipeMockup}
                  alt="InvestSwipe app"
                  className="max-w-[300px]"
                />
              </Card>
            </div>
            <div>
              <h2 className="text-section text-white mb-4">
                Swipe Right to Build Wealth
              </h2>
              <p className="text-lg text-[#B5B7C6] mb-6">
                Familiar interface. Revolutionary impact.
              </p>
              <ul className="space-y-4">
                {[
                  "Tinder-style swipe interface designed for quick investing decisions.",
                  "60-second education videos. Every stock explained simply.",
                  "Low-friction minimums for first-time investors.",
                  "Social trading. See friends portfolios and learn together.",
                  "Gamified learning. Earn credits toward your first investment.",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-body text-[#B5B7C6]"
                  >
                    <MdCheck
                      className="w-4 h-4 text-[#00A651] mt-1 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow max-w-[800px] mx-auto">
            <h2 className="text-section text-white mb-10">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="surface-card px-6"
                >
                  <AccordionTrigger className="text-body font-semibold text-white">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-[#B5B7C6]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-[#05050A] py-24 px-4 text-center border-t border-white/5">
          <h2 className="text-section text-white mb-4">
            Join the Financial Revolution
          </h2>
          <p className="text-subtitle text-[#B5B7C6] font-normal mb-8">
            500 beta spots. Be among the first to invest with InvestSwipe.
          </p>
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
            variant="contained"
            color="primary"
            className="button-primary px-10 py-4 text-body"
          >
            Join Waitlist Now
          </Button>
        </section>
      </PageShell>
    </>
  );
}
