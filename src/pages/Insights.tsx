import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import blogFlutter from "@/assets/blog-flutter.jpg";
import blogPopia from "@/assets/blog-popia.jpg";
import blogGovt from "@/assets/blog-govt.jpg";
import { Link } from "react-router-dom";
import { event as trackEvent } from "@/lib/analytics";
import { buildProjectInquiryHref } from "@/lib/lead-routing";
import { getProjectById, projectInsightsSeed } from "@/lib/projects";
import { buildProjectItemListSchema } from "@/lib/schema-projects";

const insightImages = [blogPopia, blogGovt, blogFlutter];

const insights = projectInsightsSeed.reduce<Array<{
  id: string;
  title: string;
  category: "Security" | "Architecture" | "Mobile";
  date: string;
  summary: string;
  projectId: string;
  image: string;
  relatedProject: NonNullable<ReturnType<typeof getProjectById>>;
}>>((acc, insight, index) => {
    const relatedProject = getProjectById(insight.projectId);
    if (!relatedProject) {
      return acc;
    }

    acc.push({
      ...insight,
      image: insightImages[index % insightImages.length],
      relatedProject,
    });

    return acc;
  }, []);

const insightsStructuredData = buildProjectItemListSchema(
  insights.map((item) => item.relatedProject),
  "ImpactStack Africa Project-Derived Insights",
);

export default function InsightsPage() {
  return (
    <>
      <SEO
        title="Insights | ImpactStack Africa"
        description="Project-derived technical insights on SOC detection engineering, RBAC moderation architecture, and compliant mobile delivery."
        url={absoluteUrl("/insights")}
        structuredData={insightsStructuredData}
      />
      <PageShell>
        <section className="section-padding bg-[#000000] border-t border-white/5">
          <div className="container-narrow">
            <div className="max-w-3xl mb-12">
              <p className="tag-label mb-3">INSIGHTS</p>
              <h1 className="text-hero text-white mb-4">Project-Derived Technical Briefs</h1>
              <p className="text-lg text-[#9CA3AF]">
                Implementation notes derived from real delivery work across security operations, platform governance, and
                mobile product execution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insights.map((item) => (
                <article id={item.id} key={item.id} className="glass overflow-hidden card-hover">
                  <img src={item.image} alt={item.title} className="w-full h-52 object-cover" loading="lazy" />
                  <div className="p-6">
                    <p className="text-xs tracking-wide uppercase text-[#0047BB] font-semibold mb-2">{item.category}</p>
                    <h2 className="text-subtitle text-white mb-2">{item.title}</h2>
                    <p className="text-sm text-[#6B7280] mb-3">{item.date}</p>
                    <p className="text-body text-[#9CA3AF] mb-4">{item.summary}</p>
                    <div className="flex flex-col gap-2">
                      <Link
                        to={`/portfolio#${item.relatedProject.id}`}
                        onClick={() =>
                          trackEvent({
                            action: "insight_project_click",
                            category: "Insights",
                            label: `portfolio_link:${item.relatedProject.id}`,
                          })
                        }
                        className="text-[#0047BB] text-sm font-semibold"
                      >
                        View related project -&gt;
                      </Link>
                      <Link
                        to={buildProjectInquiryHref(item.relatedProject, "insights_article")}
                        onClick={() =>
                          trackEvent({
                            action: "insight_project_click",
                            category: "Insights",
                            label: `contact_link:${item.relatedProject.id}`,
                          })
                        }
                        className="text-[#9CA3AF] text-sm font-semibold hover:text-white transition-colors"
                      >
                        Discuss implementation -&gt;
                      </Link>
                    </div>
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
