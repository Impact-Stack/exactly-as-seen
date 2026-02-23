import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { Link, useParams } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

interface ServiceData { title: string; tagline: string; overview: string; benefits: string[]; }

const serviceData: Record<string, ServiceData> = {
  web: { title: "Enterprise Web Applications", tagline: "Scalable, secure web platforms that drive business growth", overview: "Custom web applications built with modern frameworks including React, Vue.js, and Node.js. From MVPs to enterprise solutions, we deliver platforms that scale with your business while maintaining security and performance.", benefits: ["Responsive design (mobile, tablet, desktop)", "Cloud-native architecture (AWS, Google Cloud)", "Real-time functionality (WebSockets, live updates)", "Advanced security (POPIA compliant, encrypted)", "Seamless third-party integrations"] },
  mobile: { title: "Cross-Platform Mobile Solutions", tagline: "Native performance. One codebase for iOS and Android.", overview: "Flutter-based mobile applications delivering native performance on both iOS and Android. Build once, deploy everywhere, at a fraction of traditional native development costs.", benefits: ["True cross-platform (single codebase)", "Native performance and feel", "50% cost savings vs separate native apps", "Rapid development with hot reload", "Beautiful Material Design UI"] },
  security: { title: "Security and POPIA Compliance", tagline: "Protect your data. Meet regulatory requirements. Build customer trust.", overview: "Comprehensive cybersecurity and POPIA compliance services led by Google Cybersecurity certified developers. Ensure your systems meet South African data protection laws.", benefits: ["POPIA compliance audit and implementation", "Secure authentication (JWT, OAuth, MFA)", "Data encryption (at-rest and in-transit)", "Penetration testing", "Security code review", "Staff security training"] },
  government: { title: "Digital Transformation for Government", tagline: "Modern solutions for public sector service delivery", overview: "Specialized digital services for government departments, municipalities, and state-owned enterprises. We understand procurement processes and compliance requirements.", benefits: ["Citizen-facing portals and e-services", "Internal workflow automation", "Data dashboards and reporting", "Legacy system modernization", "BBBEE Level 1 Contributor", "POPIA compliance capability"] },
};

const engagementCards = [
  { title: "Discovery Workshop", desc: "We invest time understanding your operations, constraints, and goals before recommending any solution.", cta: "Book a Discovery Call →", link: "/contact" },
  { title: "Tailored Proposal", desc: "Every engagement is scoped specifically to your context. You receive a detailed proposal within 48 hours of your consultation.", cta: "Request a Proposal →", link: "/contact" },
  { title: "Outcome-Based Delivery", desc: "Milestones, timelines, and deliverables are agreed upfront. No surprises.", cta: "See Our Work →", link: "/portfolio" },
];

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const safeSlug = slug && serviceData[slug] ? slug : "web";
  const data = serviceData[safeSlug];

  return (
    <>
      <SEO title={`${data.title} | ImpactStack Africa`} description={data.tagline} url={absoluteUrl(`/services/${safeSlug}`)} />
      <PageShell>
        <section className="bg-gradient-to-br from-blue-950 to-background py-24 px-4">
          <div className="container-narrow text-center">
            <h1 className="text-hero heading-gradient mb-4">{data.title}</h1>
            <p className="text-card-title text-muted-foreground font-light mb-8">{data.tagline}</p>
            <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-md text-body font-semibold hover:bg-primary-dark transition-colors btn-primary-glow">Request Consultation</Link>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow max-w-[800px] mx-auto">
            <h2 className="text-section heading-gradient mb-6">{data.title}</h2>
            <p className="text-body text-muted-foreground mb-8">{data.overview}</p>
            <ul className="space-y-3">
              {data.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-body text-foreground/80"><Check className="w-5 h-5 text-success flex-shrink-0" /> {b}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Engagement Approach - replaces pricing */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-section heading-gradient mb-4">Our Engagement Approach</h2>
              <p className="text-lg text-muted-foreground">A structured, transparent process from first conversation to delivery.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {engagementCards.map((card) => (
                <div key={card.title} className="glass p-8 card-hover">
                  <h3 className="text-card-title text-foreground mb-3">{card.title}</h3>
                  <p className="text-body text-muted-foreground mb-6">{card.desc}</p>
                  <Link to={card.link} className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:text-accent transition-colors">
                    {card.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-width CTA banner */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#080D1A] via-primary/10 to-[#080D1A] text-center">
          <p className="text-card-title text-foreground mb-6">Every project is unique. Let's scope yours together.</p>
          <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-12 py-5 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors btn-primary-glow">
            Start a Conversation
          </Link>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow">
            <h2 className="text-section heading-gradient text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Discovery and Planning", desc: "Requirements gathering, architecture design, transparent scoping" },
                { step: "2", title: "Design and Development", desc: "Iterative sprints, weekly updates, staging demos" },
                { step: "3", title: "Testing and Deployment", desc: "Comprehensive testing, UAT, cloud deployment" },
                { step: "4", title: "Support and Maintenance", desc: "Bug fixes, monitoring, feature enhancements" },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                  <h3 className="text-subtitle text-foreground mb-2">{s.title}</h3>
                  <p className="text-small text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-950 to-background py-24 px-4 text-center">
          <h2 className="text-section heading-gradient mb-4">Ready to Get Started?</h2>
          <Link to="/contact" className="inline-block bg-white text-[#080D1A] px-10 py-5 rounded-md text-lg font-semibold hover:shadow-xl transition-shadow">Request Free Consultation</Link>
        </section>
      </PageShell>
    </>
  );
}
