import { useEffect } from "react";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";

interface LegalDoc {
  title: string;
  description: string;
  updated: string;
  sections: Array<{ heading: string; body: string }>;
}

const legalDocs: Record<string, LegalDoc> = {
  "privacy-policy": {
    title: "Privacy Policy",
    description:
      "How ImpactStack Africa collects, uses, and protects your information.",
    updated: "February 14, 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect contact details you submit through our forms, including your name, email, phone number, company information, and project details.",
      },
      {
        heading: "How We Use Information",
        body: "We use your information to respond to inquiries, provide proposals, deliver contracted services, and improve our operations.",
      },
      {
        heading: "Data Security",
        body: "We apply industry-standard safeguards to protect your data. Access to personal data is restricted to team members who need it for service delivery.",
      },
      {
        heading: "Your Rights",
        body: "You can request access, correction, or deletion of your personal information by contacting hello@impactstack.africa.",
      },
    ],
  },
  "terms-of-service": {
    title: "Terms of Service",
    description:
      "Terms governing the use of ImpactStack Africa services and website.",
    updated: "February 14, 2026",
    sections: [
      {
        heading: "Service Scope",
        body: "Project scope, timelines, and deliverables are defined in signed proposals or statements of work.",
      },
      {
        heading: "Payments",
        body: "Payment terms are outlined in project agreements. Late payments may delay delivery timelines.",
      },
      {
        heading: "Intellectual Property",
        body: "Ownership and licensing terms are defined per project contract. Unless otherwise stated, third-party tools remain property of their respective owners.",
      },
      {
        heading: "Liability",
        body: "To the maximum extent permitted by law, liability is limited to fees paid for the specific service in question.",
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    description:
      "How cookies and analytics technologies are used on the ImpactStack Africa website.",
    updated: "February 14, 2026",
    sections: [
      {
        heading: "What Cookies Are",
        body: "Cookies are small files stored on your device to help websites function, remember preferences, and understand usage.",
      },
      {
        heading: "How We Use Cookies",
        body: "We use essential cookies for site functionality and optional analytics tools to understand traffic and improve content.",
      },
      {
        heading: "Managing Cookies",
        body: "You can control or remove cookies through your browser settings. Disabling certain cookies may affect site functionality.",
      },
      {
        heading: "Updates",
        body: "This policy may be updated as our tooling evolves. Material updates will be reflected in the last updated date.",
      },
    ],
  },
};

export default function LegalPage() {
  const { slug } = useParams<{ slug: string }>();
  const safeSlug = slug && legalDocs[slug] ? slug : "privacy-policy";

  // Polish: Auto-scroll to top on document change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [safeSlug]);

  const doc = legalDocs[safeSlug];

  return (
    <>
      <SEO
        title={`${doc.title} | ImpactStack Africa`}
        description={doc.description}
        url={absoluteUrl(`/legal/${safeSlug}`)}
      />
      <PageShell>
        <section className="relative min-h-screen bg-[#05050A] pt-32 pb-24 overflow-hidden">
          {/* Background Ambient Layers */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <img
              src={heroBg}
              alt=""
              className="w-full h-full object-cover grayscale"
              {...({ fetchpriority: "high" } as any)}
            />
            {/* Radial gradient mask to focus light on the top-left */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,transparent_0%,#05050A_70%)]" />
          </div>
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#05050A] to-transparent z-0" />

          <div className="container-narrow relative z-10 max-w-[1100px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-16">
              {/* SIDEBAR NAVIGATION: Glass Aesthetic */}
              <aside className="hidden lg:block relative">
                <div className="sticky top-32 space-y-8">
                  <div>
                    <p className="text-[10px] font-black tracking-[0.3em] text-purple-500 uppercase mb-6">
                      Legal Directory
                    </p>

                    <nav className="flex flex-col gap-2 relative">
                      {Object.keys(legalDocs).map((key) => {
                        const isActive = safeSlug === key;

                        return (
                          <Link
                            key={key}
                            to={`/legal/${key}`}
                            aria-current={isActive ? "page" : undefined}
                            className={`relative text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 outline-none ${
                              isActive
                                ? "text-white"
                                : "text-white/40 hover:text-white/70 hover:bg-white/[0.02]"
                            }`}
                          >
                            {/* Animated Background Pill */}
                            {isActive && (
                              <motion.div
                                layoutId="active-legal-pill"
                                className="absolute inset-0 bg-white/10 border border-white/10 backdrop-blur-md rounded-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                                transition={{
                                  type: "spring",
                                  bounce: 0.2,
                                  duration: 0.6,
                                }}
                              />
                            )}

                            <span className="relative z-10">
                              {legalDocs[key].title}
                            </span>
                          </Link>
                        );
                      })}
                    </nav>
                  </div>

                  {/* Contact Context Card */}
                  <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden group">
                    {/* Subtle Background Glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-500" />

                    <p className="relative z-10 text-[11px] text-white/40 leading-relaxed">
                      Questions regarding our terms? Reach out to our team:
                      <a
                        href="mailto:hello@impactstack.africa"
                        className="text-purple-400 font-mono mt-2 block hover:text-purple-300 transition-colors"
                      >
                        hello@impactstack.africa
                      </a>
                    </p>
                  </div>

                  {/* Footer Detail */}
                  <div className="px-4">
                    <p className="text-[9px] font-mono text-white/10 uppercase tracking-[0.2em]">
                      ImpactStack Africa <br />
                      Legal Framework v2.0
                    </p>
                  </div>
                </div>
              </aside>

              {/* MAIN CONTENT AREA */}
              <motion.div
                key={safeSlug} // Crucial: key change triggers the animation on route change
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-1"
              >
                <div className="mb-12 border-b border-white/5 pb-12">
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6">
                    {doc.title}
                  </h1>
                  <div className="flex items-center gap-4">
                    <span className="h-px w-8 bg-purple-500" />
                    <p className="text-xs font-mono uppercase tracking-widest text-white/40">
                      Last Updated // {doc.updated}
                    </p>
                  </div>
                </div>

                <div className="space-y-16">
                  {doc.sections.map((section, index) => (
                    <div key={section.heading} className="group relative">
                      {/* Section Marker */}
                      <span className="absolute -left-8 top-1 text-[10px] font-mono text-white/10 group-hover:text-purple-500/40 transition-colors">
                        0{index + 1}
                      </span>

                      <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
                        {section.heading}
                      </h2>
                      <p className="text-lg text-[#B5B7C6] leading-relaxed font-normal">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mobile Navigation Refined */}
                <div className="mt-20 lg:hidden pt-10 border-t border-white/5">
                  <p className="text-[10px] font-black tracking-[0.3em] text-purple-500 uppercase mb-4">
                    Other Legal Docs
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {Object.keys(legalDocs)
                      .filter((k) => k !== safeSlug)
                      .map((key) => (
                        <motion.div
                          key={key}
                          whileTap={{ scale: 0.95 }} // Polish: Physical feedback on click
                        >
                          <Link
                            to={`/legal/${key}`}
                            className="inline-block text-xs text-white/60 bg-white/5 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-sm active:bg-white/10 transition-colors"
                          >
                            {legalDocs[key].title}
                          </Link>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
