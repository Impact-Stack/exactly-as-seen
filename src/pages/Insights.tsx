// --- Core React & Routing ---
import { Link } from "react-router-dom";

// --- Animation (Framer Motion) ---
import { motion } from "framer-motion";

// --- Components ---
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";

// --- Utilities & Analytics ---
import { absoluteUrl } from "@/lib/site";
import { event as trackEvent } from "@/lib/analytics";
import { allArticles } from "@/lib/articles";

export default function InsightsPage() {
  return (
    <>
      <SEO
        title="Insights | ImpactStack Africa"
        description="Technology perspectives for African industry — covering digital transformation, cybersecurity, cloud infrastructure and managed services."
        url={absoluteUrl("/insights")}
      />
      <PageShell>
        <section className="relative min-h-screen py-32 overflow-hidden bg-black">
          {/* Fixed Background Layer */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/gradient.webp')` }}
            {...({ fetchpriority: "high" } as any)}
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
                Knowledge Base
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-7xl font-black tracking-tighter text-white mb-8"
              >
                Latest Insights
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/60 font-medium leading-relaxed"
              >
                Technology perspectives for African industry — covering digital
                transformation, cybersecurity, cloud infrastructure and managed
                services across government, financial services, healthcare,
                mining and more.
              </motion.p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {[...allArticles]
                .sort((a, b) => parseInt(b.id) - parseInt(a.id))
                .map((article, i) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group"
                  >
                    {/* Glassmorphism Card */}
                    <div className="h-full min-h-[480px] p-10 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20">
                      <div className="flex justify-between items-start mb-12">
                        <span className="text-[10px] font-mono font-bold text-white/30 tracking-widest">
                          {article.id} <span className="mx-1">/</span>{" "}
                          {String(allArticles.length).padStart(2, "0")}
                        </span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white group-hover:border-white transition-all">
                          <span className="text-xl">↗</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#C4B5FD] mb-4">
                          {article.category}
                        </p>
                        <h2 className="text-3xl font-black text-white tracking-tighter leading-tight mb-4">
                          {article.title}
                        </h2>
                        <p className="text-sm text-white/50 font-medium leading-relaxed">
                          {article.subtitle}
                        </p>
                      </div>

                      <div className="mt-auto space-y-6">
                        <div className="flex items-center justify-between">
                          <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">
                            {article.date}
                          </p>
                          <p className="text-[10px] text-white/20 font-mono">
                            {article.readTime}
                          </p>
                        </div>

                        <Link
                          to={`/insights/${article.slug}`}
                          onClick={() =>
                            trackEvent({
                              action: "insight_article_click",
                              category: "Insights",
                              label: article.slug,
                            })
                          }
                          className="text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-[#C4B5FD] transition-colors"
                        >
                          Read Article <span className="ml-1">→</span>
                        </Link>
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