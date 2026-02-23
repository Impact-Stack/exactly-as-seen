import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { Link } from "react-router-dom";
import caseNfc from "@/assets/case-nfc.jpg";
import caseHr from "@/assets/case-hr.jpg";
import caseEcom from "@/assets/case-ecommerce.jpg";

const projects = [
  { image: caseNfc, tags: ["Web Application", "Education Technology", "LIVE"], title: "NFC Attendance Tracking System", client: "LC Studio", duration: "6 weeks", desc: "NFC-based attendance system with real-time admin dashboard. 100% accuracy, 90% time savings, zero downtime for 6 months.", stats: ["100% Accuracy", "90% Time Savings", "50+ Daily Users"] },
  { image: caseHr, tags: ["Enterprise Software", "HR Tech"], title: "ModernTech HR Management Platform", client: "Professional Services Firm", duration: "10 weeks", desc: "Comprehensive digital HR platform with employee self-service portal, automated workflows, and integrated reporting.", stats: ["70% Less Admin Time", "50% Fewer Queries", "3x Faster Approvals"] },
  { image: caseEcom, tags: ["E-Commerce", "Payment Integration"], title: "BioFuel E-Commerce Platform", client: "Renewable Energy Retailer", duration: "8 weeks", desc: "Full-featured e-commerce platform with secure checkout, inventory management, and comprehensive admin dashboard.", stats: ["30% Revenue Increase", "200+ Orders Month 1", "3 Provinces Reached"] },
];

export default function PortfolioPage() {
  return (
    <>
      <SEO title="Portfolio | ImpactStack Africa Case Studies" description="Explore real software projects delivered by ImpactStack Africa across education technology, enterprise systems, and e-commerce." url={absoluteUrl("/portfolio")} />
      <PageShell>
        <section className="bg-[#000000] py-24 px-4 border-b border-white/5">
          <div className="container-narrow text-center">
            <h1 className="text-hero text-white mb-4">Delivering Results for Diverse Clients</h1>
            <p className="text-card-title text-[#9CA3AF] font-light">Proven solutions across industries and technologies</p>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow space-y-16">
            {projects.map((p) => (
              <div key={p.title} className="glass overflow-hidden card-hover">
                <img src={p.image} alt={p.title} className="w-full h-72 object-cover" loading="lazy" />
                <div className="p-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t) => (
                      <span key={t} className="bg-[#0047BB]/10 text-[#0047BB] text-label px-3 py-1 rounded-sm border border-[#0047BB]/25">{t}</span>
                    ))}
                  </div>
                  <h2 className="text-section text-white mb-2">{p.title}</h2>
                  <p className="text-small text-[#6B7280] mb-4">Client: {p.client} | Duration: {p.duration}</p>
                  <p className="text-body text-[#9CA3AF] mb-6 max-w-[700px]">{p.desc}</p>
                  <div className="flex flex-wrap gap-6">
                    {p.stats.map((s) => (
                      <span key={s} className="text-small font-semibold text-[#0047BB]">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="container-narrow text-center mt-16">
            <Link to="/contact" className="inline-flex items-center justify-center bg-[#0047BB] text-white px-10 py-4 rounded-md text-body font-semibold hover:bg-[#003494] transition-colors duration-200">
              Book a Consultation
            </Link>
          </div>
        </section>
      </PageShell>
    </>
  );
}
