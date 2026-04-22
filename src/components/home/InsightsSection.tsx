import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import { event as trackEvent } from "@/lib/analytics";
import { getProjectById, projectInsightsSeed } from "@/lib/projects";
import { Button } from "@mui/material";

const posts = projectInsightsSeed.reduce<Array<{
  id: string;
  title: string;
  category: "Security" | "Architecture" | "Mobile";
  date: string;
  summary: string;
  projectId: string;
  relatedProject: NonNullable<ReturnType<typeof getProjectById>>;
}>>((acc, item) => {
  const relatedProject = getProjectById(item.projectId);
  if (!relatedProject) return acc;
  acc.push({ ...item, relatedProject });
  return acc;
}, []);

export default function InsightsSection() {
  const { ref, isInView } = useInView();

  return (
    <section 
      className="relative py-32 overflow-hidden" 
      ref={ref}
    >
      {/* Background Image from Public Folder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{ backgroundImage: `url('/gradient.webp')` }}
      />
      
      {/* Glassmorphism Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-2xl" />

      <div className="relative z-20 container-narrow px-6">
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-[10px] uppercase tracking-[0.5em] font-black text-[#C4B5FD] mb-4"
          >
            Knowledge Base
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6"
          >
            Latest Insights
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ delay: 0.1 }} 
            className="max-w-xl text-lg text-white/60 font-medium leading-relaxed"
          >
            Technical briefs grounded in real project delivery decisions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group"
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full min-h-[420px] p-10 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20">
                
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] font-mono font-bold text-white/40 tracking-widest">
                      0{i + 1} — 0{posts.length}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:border-white transition-colors">
                      <span className="text-xl">↗</span>
                    </div>
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#C4B5FD] mb-4">
                    {post.category}
                  </p>
                  
                  <h3 className="text-3xl font-black text-white tracking-tighter leading-tight mb-4">
                    {post.title}
                  </h3>
                </div>

                <div className="mt-auto">
                  <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-6">
                    {post.date}
                  </p>
                  
                  <Link
                    to={`/portfolio#${post.relatedProject.id}`}
                    onClick={() => trackEvent({ action: "insight_project_click", category: "Home Insights", label: post.relatedProject.id })}
                    className="inline-flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-[#C4B5FD] transition-colors"
                  >
                    View Project <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            component={Link} 
            to="/insights" 
            sx={{
              px: 6,
              py: 2.5,
              borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.1)",
              bgcolor: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(10px)",
              color: "white",
              fontWeight: 900,
              fontSize: "12px",
              letterSpacing: "0.2em",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.3)",
              }
            }}
          >
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  );
}