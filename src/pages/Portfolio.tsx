import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";
import caseNfc from "@/assets/case-nfc.jpg";
import caseHr from "@/assets/case-hr.jpg";
import caseEcom from "@/assets/case-ecommerce.jpg";

const projects = [
  {
    image: caseNfc,
    tags: ["Web Application", "Education Technology", "LIVE"],
    title: "NFC Attendance Tracking System",
    client: "LC Studio",
    duration: "6 weeks",
    desc: "NFC-based attendance system with real-time admin dashboard. 100% accuracy, 90% time savings, zero downtime for 6 months.",
    stats: ["100% Accuracy", "90% Time Savings", "50+ Daily Users"],
  },
  {
    image: caseHr,
    tags: ["Enterprise Software", "HR Tech"],
    title: "ModernTech HR Management Platform",
    client: "Professional Services Firm",
    duration: "10 weeks",
    desc: "Comprehensive digital HR platform with employee self-service portal, automated workflows, and integrated reporting.",
    stats: ["70% Less Admin Time", "50% Fewer Queries", "3x Faster Approvals"],
  },
  {
    image: caseEcom,
    tags: ["E-Commerce", "Payment Integration"],
    title: "BioFuel E-Commerce Platform",
    client: "Renewable Energy Retailer",
    duration: "8 weeks",
    desc: "Full-featured e-commerce platform with secure checkout, inventory management, and comprehensive admin dashboard.",
    stats: ["30% Revenue Increase", "200+ Orders Month 1", "3 Provinces Reached"],
  },
];

export default function PortfolioPage() {
  return (
    <PageShell>
      <section className="bg-primary-dark py-24 px-4">
        <div className="container-narrow text-center">
          <h1 className="text-hero text-primary-foreground mb-4">Delivering Results for Diverse Clients</h1>
          <p className="text-card-title text-primary-foreground/80 font-light">Proven solutions across industries and technologies</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow space-y-16">
          {projects.map((p) => (
            <div key={p.title} className="bg-background border border-border rounded-lg overflow-hidden card-hover">
              <img src={p.image} alt={p.title} className="w-full h-72 object-cover" loading="lazy" />
              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="bg-secondary text-secondary-foreground text-label px-3 py-1 rounded-sm">{t}</span>
                  ))}
                </div>
                <h2 className="text-section mb-2">{p.title}</h2>
                <p className="text-small text-muted-foreground mb-4">Client: {p.client} • Duration: {p.duration}</p>
                <p className="text-body text-muted-foreground mb-6 max-w-[700px]">{p.desc}</p>
                <div className="flex flex-wrap gap-6">
                  {p.stats.map((s) => (
                    <span key={s} className="text-small font-semibold text-primary">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="container-narrow text-center mt-16">
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-md text-body font-semibold hover:bg-primary-dark transition-colors duration-300"
          >
            Request Free Consultation
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
