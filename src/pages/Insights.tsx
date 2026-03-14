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
import { Button, Card, CardContent, Chip } from "@mui/material";
import heroBg from "@/assets/hero-bg.jpg";

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
        <section className="section-padding bg-[#05050A] border-t border-white/5 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="container-narrow relative">
            <div className="max-w-3xl mb-12">
              <p className="tag-label mb-3">INSIGHTS</p>
              <h1 className="text-hero text-white mb-4">Project-Derived Technical Briefs</h1>
              <p className="text-lg text-[#B5B7C6]">
                Implementation notes derived from real delivery work across security operations, platform governance, and
                mobile product execution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insights.map((item) => (
                <Card key={item.id} id={item.id} className="surface-card overflow-hidden card-hover">
                  <img src={item.image} alt={item.title} className="w-full h-52 object-cover" loading="lazy" />
                  <CardContent>
                    <Chip label={item.category} size="small" sx={{ bgcolor: "rgba(139,92,246,0.2)", color: "#C4B5FD", mb: 1 }} />
                    <h2 className="text-subtitle text-white mb-2">{item.title}</h2>
                    <p className="text-sm text-[#A1A1B5] mb-3">{item.date}</p>
                    <p className="text-body text-[#B5B7C6] mb-4">{item.summary}</p>
                    <div className="flex flex-col gap-2">
                      <Button
                        component={Link}
                        to={`/portfolio#${item.relatedProject.id}`}
                        variant="text"
                        color="secondary"
                        onClick={() =>
                          trackEvent({
                            action: "insight_project_click",
                            category: "Insights",
                            label: `portfolio_link:${item.relatedProject.id}`,
                          })
                        }
                        sx={{ justifyContent: "flex-start", color: "#C4B5FD", paddingLeft: 0 }}
                      >
                        View related project →
                      </Button>
                      <Button
                        component={Link}
                        to={buildProjectInquiryHref(item.relatedProject, "insights_article")}
                        variant="text"
                        color="secondary"
                        onClick={() =>
                          trackEvent({
                            action: "insight_project_click",
                            category: "Insights",
                            label: `contact_link:${item.relatedProject.id}`,
                          })
                        }
                        sx={{ justifyContent: "flex-start", color: "#B5B7C6", paddingLeft: 0 }}
                      >
                        Discuss implementation →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}

