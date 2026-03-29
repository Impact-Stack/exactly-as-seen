import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { Link } from "react-router-dom";
import { event as trackEvent } from "@/lib/analytics";
import { buildProjectInquiryHref } from "@/lib/lead-routing";
import { getProjectById, projectInsightsSeed } from "@/lib/projects";
import { buildProjectItemListSchema } from "@/lib/schema-projects";
import { Button } from "@mui/material";

const insights = projectInsightsSeed.reduce<Array<{
  id: string;
  title: string;
  category: "Security" | "Architecture" | "Mobile";
  date: string;
  summary: string;
  projectId: string;
  relatedProject: NonNullable<ReturnType<typeof getProjectById>>;
}>>((acc, insight) => {
    const relatedProject = getProjectById(insight.projectId);
    if (!relatedProject) return acc;

    acc.push({
      ...insight,
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
        <section className="relative min-h-screen py-32 overflow-hidden bg-black">
          {/* Fixed Background Layer */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/gradient.jpg')` }}
          />
          
          {/* Frosted Glass Overlay */}
          <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-3xl" />

          <div className="container-narrow relative z-20">
            <header className="max-w-3xl mb-24 px-4">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] uppercase tracking-[0.5em] font-black text-[#C4B5FD] mb-6"
              >
                Implementation Notes
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-8"
              >
                Project-Derived Briefs
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/60 font-medium leading-relaxed"
              >
                Technical documentation born from real delivery work across security operations, 
                platform governance, and mobile product execution.
              </motion.p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {insights.map((item, i) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  {/* Glassmorphism Card */}
                  <div className="h-full min-h-[480px] p-10 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20">
                    
                    <div className="flex justify-between items-start mb-12">
                      <span className="text-[10px] font-mono font-bold text-white/30 tracking-widest">
                        0{i + 1} // 0{insights.length}
                      </span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:border-white transition-all">
                        <span className="text-xl">↗</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#C4B5FD] mb-4">
                        {item.category}
                      </p>
                      <h2 className="text-3xl font-black text-white tracking-tighter leading-tight mb-4">
                        {item.title}
                      </h2>
                      <p className="text-sm text-white/50 font-medium leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    <div className="mt-auto space-y-6">
                      <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">
                        {item.date}
                      </p>
                      
                      <div className="flex flex-col items-start gap-4">
                        <Link
                          to={`/portfolio#${item.relatedProject.id}`}
                          className="text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-[#C4B5FD] transition-colors"
                          onClick={() => trackEvent({ action: "insight_project_click", category: "Insights", label: item.relatedProject.id })}
                        >
                          View Related Project <span className="ml-1">→</span>
                        </Link>
                        
                        <Link
                          to={buildProjectInquiryHref(item.relatedProject, "insights_article")}
                          className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
                          onClick={() => trackEvent({ action: "insight_project_click", category: "Insights", label: item.relatedProject.id })}
                        >
                          Discuss Implementation <span className="ml-1">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}