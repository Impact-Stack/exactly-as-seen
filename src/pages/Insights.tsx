import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import blogFlutter from "@/assets/blog-flutter.jpg";
import blogPopia from "@/assets/blog-popia.jpg";
import blogGovt from "@/assets/blog-govt.jpg";
import { Link } from "react-router-dom";

const insights = [
  { title: "Why Flutter Is Expanding Mobile Delivery Across Africa", category: "Development", date: "February 15, 2026", summary: "A practical view of where Flutter creates value in cost, release speed, and maintainability for enterprise and startup products.", image: blogFlutter },
  { title: "POPIA Compliance Priorities For South African Businesses", category: "Compliance", date: "February 10, 2026", summary: "Core implementation priorities for data handling, access controls, governance, and engineering safeguards under POPIA.", image: blogPopia },
  { title: "Digital Service Opportunities For Public Sector Teams", category: "Transformation", date: "February 5, 2026", summary: "Where technology partners can improve service access, workflow automation, and reporting visibility in public institutions.", image: blogGovt },
];

export default function InsightsPage() {
  return (
    <>
      <SEO title="Insights | ImpactStack Africa" description="Technology, security, and delivery insights from ImpactStack Africa." url={absoluteUrl("/insights")} />
      <PageShell>
        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-narrow">
            <div className="max-w-3xl mb-12">
              <p className="tag-label text-blue-400 mb-3">INSIGHTS</p>
              <h1 className="text-hero text-white mb-4">Technology Perspectives For Delivery Teams</h1>
              <p className="text-lg text-slate-400">Articles and briefs focused on practical implementation, security, and digital transformation outcomes.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insights.map((item) => (
                <article key={item.title} className="glass overflow-hidden card-hover">
                  <img src={item.image} alt={item.title} className="w-full h-52 object-cover" loading="lazy" />
                  <div className="p-6">
                    <p className="text-xs tracking-wide uppercase text-blue-400 font-semibold mb-2">{item.category}</p>
                    <h2 className="text-subtitle text-white mb-2">{item.title}</h2>
                    <p className="text-sm text-slate-500 mb-3">{item.date}</p>
                    <p className="text-body text-slate-400 mb-4">{item.summary}</p>
                    <Link to="/contact" className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors">Discuss this topic →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
