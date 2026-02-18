import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { Link, useParams } from "react-router-dom";
import { Check } from "lucide-react";

interface ServiceTier { name: string; price: string; features: string[]; timeline: string; cta: string; }
interface ServiceData { title: string; tagline: string; overview: string; benefits: string[]; tiers: ServiceTier[]; }

const serviceData: Record<string, ServiceData> = {
  web: { title: "Enterprise Web Applications", tagline: "Scalable, secure web platforms that drive business growth", overview: "Custom web applications built with modern frameworks including React, Vue.js, and Node.js. From MVPs to enterprise solutions, we deliver platforms that scale with your business while maintaining security and performance.", benefits: ["Responsive design (mobile, tablet, desktop)", "Cloud-native architecture (AWS, Google Cloud)", "Real-time functionality (WebSockets, live updates)", "Advanced security (POPIA compliant, encrypted)", "Seamless third-party integrations"], tiers: [{ name: "Startup MVP", price: "R50,000 - R120,000", features: ["4-6 weeks development", "Core features only", "Responsive web design", "Basic admin dashboard", "Cloud deployment", "3 months support", "Source code ownership"], timeline: "4-6 weeks", cta: "Get Quote" }, { name: "Business Platform", price: "R120,000 - R300,000", features: ["8-12 weeks development", "Advanced features", "Custom UI/UX design", "Comprehensive admin panel", "Third-party API integrations", "Advanced security", "6 months support", "Team training"], timeline: "8-12 weeks", cta: "Get Quote" }, { name: "Enterprise Solution", price: "R300,000+", features: ["Custom timeline (12-20 weeks)", "Enterprise-grade architecture", "Scalability for thousands", "POPIA and ISO compliance", "Legacy system integration", "Dedicated project manager", "12 months premium support", "SLA guarantees"], timeline: "12-20 weeks", cta: "Contact Sales" }] },
  mobile: { title: "Cross-Platform Mobile Solutions", tagline: "Native performance. Half the cost. One codebase for iOS and Android.", overview: "Flutter-based mobile applications delivering native performance on both iOS and Android. Build once, deploy everywhere, at a fraction of traditional native development costs.", benefits: ["True cross-platform (single codebase)", "Native performance and feel", "50% cost savings vs separate native apps", "Rapid development with hot reload", "Beautiful Material Design UI"], tiers: [{ name: "Simple App", price: "R80,000 - R150,000", features: ["8-10 weeks development", "3-5 main screens", "User authentication", "API integration", "Push notifications", "iOS + Android builds", "3 months support"], timeline: "8-10 weeks", cta: "Get Quote" }, { name: "Complex App", price: "R150,000 - R250,000", features: ["10-14 weeks development", "8-12 screens", "Real-time functionality", "Payment gateway", "Offline mode", "Biometric auth", "6 months support"], timeline: "10-14 weeks", cta: "Get Quote" }, { name: "Enterprise App", price: "R250,000+", features: ["Custom timeline (14-20 weeks)", "Complex workflows", "Enterprise security", "Backend infrastructure", "Admin dashboards", "Multi-language support", "12 months support"], timeline: "14-20 weeks", cta: "Contact Sales" }] },
  security: { title: "Security and POPIA Compliance", tagline: "Protect your data. Meet regulatory requirements. Build customer trust.", overview: "Comprehensive cybersecurity and POPIA compliance services led by Google Cybersecurity certified developers. Ensure your systems meet South African data protection laws.", benefits: ["POPIA compliance audit and implementation", "Secure authentication (JWT, OAuth, MFA)", "Data encryption (at-rest and in-transit)", "Penetration testing", "Security code review", "Staff security training"], tiers: [{ name: "POPIA Compliance", price: "R100,000 - R150,000", features: ["Full POPIA compliance audit", "Gap analysis", "Privacy policy drafting", "Data processing documentation", "Staff training (2 sessions)", "Compliance certification", "6 months support"], timeline: "6-8 weeks", cta: "Get Quote" }, { name: "Security Audit", price: "R50,000 - R100,000", features: ["Comprehensive assessment", "Penetration testing", "Vulnerability scanning", "Code security review", "Infrastructure audit", "Security hardening", "Findings report"], timeline: "4-6 weeks", cta: "Get Quote" }, { name: "Ongoing Management", price: "R15,000 - R30,000/mo", features: ["Monthly monitoring", "Vulnerability scanning", "Patch management", "Incident response", "Quarterly pen testing", "Compliance monitoring", "24/7 emergency support"], timeline: "Ongoing", cta: "Contact Sales" }] },
  government: { title: "Digital Transformation for Government", tagline: "Modern solutions for public sector service delivery", overview: "Specialized digital services for government departments, municipalities, and state-owned enterprises. We understand procurement processes and compliance requirements.", benefits: ["Citizen-facing portals and e-services", "Internal workflow automation", "Data dashboards and reporting", "Legacy system modernization", "BBBEE Level 1 Contributor", "POPIA compliance capability"], tiers: [{ name: "Departmental Portal", price: "R300,000 - R800,000", features: ["Citizen-facing portal", "Service request management", "Document management", "POPIA compliance", "WCAG 2.1 accessibility", "Multi-language support", "12 months support"], timeline: "12-16 weeks", cta: "Get Quote" }, { name: "Workflow Automation", price: "R400,000 - R1,200,000", features: ["Custom workflow engine", "Approval processes", "Document routing", "System integration", "Audit trails", "Staff training", "12 months support"], timeline: "14-18 weeks", cta: "Get Quote" }, { name: "Enterprise System", price: "R1,000,000+", features: ["Large-scale development", "Multiple departments", "Complex integrations", "High availability", "Disaster recovery", "Change management", "24+ months support"], timeline: "20-40 weeks", cta: "Contact Sales" }] },
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const safeSlug = slug && serviceData[slug] ? slug : "web";
  const data = serviceData[safeSlug];

  return (
    <>
      <SEO title={`${data.title} | ImpactStack Africa`} description={data.tagline} url={absoluteUrl(`/services/${safeSlug}`)} />
      <PageShell>
        <section className="bg-gradient-to-br from-blue-950 to-[#0A0A0A] py-24 px-4">
          <div className="container-narrow text-center">
            <h1 className="text-hero text-white mb-4">{data.title}</h1>
            <p className="text-card-title text-slate-400 font-light mb-8">{data.tagline}</p>
            <Link to="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-md text-body font-semibold hover:shadow-xl transition-shadow">Request Quote</Link>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-narrow max-w-[800px] mx-auto">
            <h2 className="text-section text-white mb-6">{data.title}</h2>
            <p className="text-body text-slate-400 mb-8">{data.overview}</p>
            <ul className="space-y-3">
              {data.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-body text-slate-300"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /> {b}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-padding bg-[#0D0D0D]">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-section text-white mb-4">Transparent Pricing</h2>
              <p className="text-lg text-slate-400">Clear, competitive, no hidden fees</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.tiers.map((tier, i) => (
                <div key={tier.name} className={`glass p-8 card-hover ${i === 1 ? "border-2 border-blue-500 ring-2 ring-blue-500/20" : ""}`}>
                  {i === 1 && <span className="block text-label text-blue-400 text-center mb-4">MOST POPULAR</span>}
                  <h3 className="text-card-title text-white mb-2">{tier.name}</h3>
                  <p className="text-section text-blue-400 mb-1">{tier.price}</p>
                  <p className="text-small text-slate-500 mb-6">{tier.timeline}</p>
                  <ul className="space-y-2 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-small text-slate-400"><Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> {f}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`block text-center py-3 rounded-md text-body font-semibold transition-colors duration-300 ${i === 1 ? "bg-blue-500 text-white hover:bg-blue-400" : "border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"}`}>{tier.cta}</Link>
                </div>
              ))}
            </div>

            <p className="text-center text-small text-slate-500 mt-10 max-w-[600px] mx-auto">
              All prices are estimates. Final quote is provided after a free consultation. Every project includes project management, UI/UX design, development, testing, deployment, and support.
            </p>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-narrow">
            <h2 className="text-section text-white text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Discovery and Planning", desc: "Requirements gathering, architecture design, transparent pricing" },
                { step: "2", title: "Design and Development", desc: "Iterative sprints, weekly updates, staging demos" },
                { step: "3", title: "Testing and Deployment", desc: "Comprehensive testing, UAT, cloud deployment" },
                { step: "4", title: "Support and Maintenance", desc: "Bug fixes, monitoring, feature enhancements" },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                  <h3 className="text-subtitle text-white mb-2">{s.title}</h3>
                  <p className="text-small text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-950 to-[#0A0A0A] py-24 px-4 text-center">
          <h2 className="text-section text-white mb-4">Ready to Get Started?</h2>
          <Link to="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-md text-body font-semibold hover:shadow-xl transition-shadow">Request Free Consultation</Link>
        </section>
      </PageShell>
    </>
  );
}
