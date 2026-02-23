import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import blogFlutter from "@/assets/blog-flutter.jpg";
import blogPopia from "@/assets/blog-popia.jpg";
import blogGovt from "@/assets/blog-govt.jpg";
import { Link } from "react-router-dom";

const insights = [
  {
    title: "Why Flutter Is Expanding Mobile Delivery Across Africa",
    category: "Development",
    date: "February 15, 2026",
    summary: "A practical view of where Flutter creates value in cost, release speed, and maintainability for enterprise and startup products.",
    image: blogFlutter,
  },
  {
    title: "POPIA Compliance Priorities For South African Businesses",
    category: "Compliance",
    date: "February 10, 2026",
    summary: "Core implementation priorities for data handling, access controls, governance, and engineering safeguards under POPIA.",
    image: blogPopia,
  },
  {
    title: "Digital Service Opportunities For Public Sector Teams",
    category: "Transformation",
    date: "February 5, 2026",
    summary: "Where technology partners can improve service access, workflow automation, and reporting visibility in public institutions.",
    image: blogGovt,
  },
];

export default function InsightsPage() {
  return (
    <>
      <SEO title="Insights | ImpactStack Africa" description="Technology, security, and delivery insights from ImpactStack Africa." url={absoluteUrl("/insights")} />
      <PageShell>
        <section className="section-padding bg-[#000000] border-t border-white/5">
          <div className="container-narrow">
            <div className="max-w-3xl mb-12">
              <p className="tag-label mb-3">INSIGHTS</p>
              <h1 className="text-hero text-white mb-4">Technology Perspectives For Delivery Teams</h1>
              <p className="text-lg text-[#9CA3AF]">Articles and briefs focused on practical implementation, security, and digital transformation outcomes.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insights.map((item) => (
                <article key={item.title} className="glass overflow-hidden card-hover">
                  <img src={item.image} alt={item.title} className="w-full h-52 object-cover" loading="lazy" />
                  <div className="p-6">
                    <p className="text-xs tracking-wide uppercase text-[#0047BB] font-semibold mb-2">{item.category}</p>
                    <h2 className="text-subtitle text-white mb-2">{item.title}</h2>
                    <p className="text-sm text-[#6B7280] mb-3">{item.date}</p>
                    <p className="text-body text-[#9CA3AF] mb-4">{item.summary}</p>
                    <Link to="/contact" className="text-[#0047BB] text-sm font-semibold">
                      Discuss this topic -&gt;
                    </Link>
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
