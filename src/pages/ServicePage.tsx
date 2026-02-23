import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { Link, useParams } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

interface ServiceData {
  title: string;
  tagline: string;
  overview: string;
  benefits: string[];
}

const serviceData: Record<string, ServiceData> = {
  web: {
    title: "Enterprise Web Applications",
    tagline: "Scalable by design",
    overview:
      "Custom web applications built with modern frameworks including React, Vue.js, and Node.js. From MVPs to enterprise solutions, we deliver platforms that scale with your business while maintaining security and performance.",
    benefits: [
      "Responsive design (mobile, tablet, desktop)",
      "Cloud-native architecture (AWS, Google Cloud)",
      "Real-time functionality (WebSockets, live updates)",
      "Advanced security (POPIA compliant, encrypted)",
      "Seamless third-party integrations",
    ],
  },
  mobile: {
    title: "Mobile Solutions",
    tagline: "iOS and Android, one codebase",
    overview:
      "Flutter-based mobile applications delivering native performance on both iOS and Android. Build once, deploy everywhere, with a practical release cadence.",
    benefits: [
      "True cross-platform architecture",
      "Native performance and experience",
      "Rapid iterations with hot reload",
      "Secure API and auth integration",
      "Store-readiness for iOS and Android",
    ],
  },
  security: {
    title: "Security and Compliance",
    tagline: "POPIA-ready architecture",
    overview:
      "Comprehensive cybersecurity and compliance services led by Google Cybersecurity certified engineers. Ensure your systems meet South African data protection requirements.",
    benefits: [
      "POPIA compliance audit and implementation",
      "Secure authentication (JWT, OAuth, MFA)",
      "Data encryption at-rest and in-transit",
      "Security code review and hardening",
      "Staff security awareness enablement",
    ],
  },
  government: {
    title: "Government Services",
    tagline: "Built for public sector mandates",
    overview:
      "Specialized digital services for government departments, municipalities, and state-owned enterprises with procurement-aware implementation models.",
    benefits: [
      "Citizen-facing portals and e-services",
      "Internal workflow automation",
      "Data dashboards and reporting",
      "Legacy system modernization",
      "POPIA and accessibility alignment",
    ],
  },
};

const engagementSteps = [
  {
    title: "Discovery",
    description: "We align stakeholders, scope priorities, and map technical realities before delivery starts.",
  },
  {
    title: "Proposal",
    description: "You receive a clear implementation plan, timeline expectations, and phased delivery approach.",
  },
  {
    title: "Delivery",
    description: "Execution runs in focused increments with transparent reporting and measurable outcomes.",
  },
];

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const safeSlug = slug && serviceData[slug] ? slug : "web";
  const data = serviceData[safeSlug];

  return (
    <>
      <SEO title={`${data.title} | ImpactStack Africa`} description={data.tagline} url={absoluteUrl(`/services/${safeSlug}`)} />
      <PageShell>
        <section className="bg-[#000000] py-24 px-4 border-b border-white/5">
          <div className="container-narrow text-center">
            <h1 className="text-hero text-white mb-4">{data.title}</h1>
            <p className="text-card-title text-[#9CA3AF] font-light mb-8">{data.tagline}</p>
            <Link to="/contact" className="inline-flex items-center justify-center bg-[#0047BB] text-white px-10 py-4 rounded-lg text-base font-semibold hover:bg-[#003494] transition-colors">
              Book a Consultation
            </Link>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow max-w-[900px] mx-auto">
            <h2 className="text-section text-white mb-6">{data.title}</h2>
            <p className="text-body text-[#9CA3AF] mb-8">{data.overview}</p>
            <ul className="space-y-3">
              {data.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-body text-[#9CA3AF]">
                  <Check className="w-5 h-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-padding bg-[#000000] border-t border-white/5">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-section text-white mb-4">How We Engage</h2>
              <p className="text-lg text-[#6B7280]">A focused delivery path from initial brief to production rollout.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementSteps.map((step) => (
                <article key={step.title} className="bg-[#0F0F0F] border border-white/[0.07] rounded-xl p-7 card-hover">
                  <h3 className="text-subtitle text-white mb-3">{step.title}</h3>
                  <p className="text-body text-[#9CA3AF] mb-5">{step.description}</p>
                  <Link to="/contact" className="text-sm font-semibold text-[#0047BB] hover:text-[#0047BB]">
                    Start here -&gt;
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
