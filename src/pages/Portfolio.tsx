import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

// --- PERFORMANCE OPTIMIZED IMPORTS ---
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { event as trackEvent } from "@/lib/analytics";
import { buildProjectInquiryHref } from "@/lib/lead-routing";
import {
  portfolioProjects,
  projectFilterOptions,
  type ProjectFilter,
} from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";
// import footerBg from "/footer-bg.webp";

// ─── Constants ──────────────────────────────────────────────────────────────
const PROJECT_GRADIENTS = [
  "linear-gradient(135deg, #1a0533 0%, #3b1278 50%, #6d28d9 100%)",
  "linear-gradient(135deg, #0f0724 0%, #4c1d95 45%, #7c3aed 100%)",
  "linear-gradient(135deg, #160b2e 0%, #5b21b6 55%, #8b5cf6 100%)",
];

const gradientForIndex = (i: number) =>
  PROJECT_GRADIENTS[i % PROJECT_GRADIENTS.length];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  // Memoize filtered results to prevent heavy recalculation on every render
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return portfolioProjects;
    return portfolioProjects.filter((p) => p.filterTags.includes(activeFilter));
  }, [activeFilter]);

  const changeFilter = (value: ProjectFilter) => {
    setActiveFilter(value);
    trackEvent({
      action: "portfolio_filter_change",
      category: "Portfolio",
      label: value,
    });
  };

  return (
    <>
      <SEO
        title="Portfolio | ImpactStack Africa"
        description="Verified implementation evidence across security labs and web products."
        url={absoluteUrl("/portfolio")}
      />

      <style>{`
        /* HW Acceleration for smooth transitions */
        .port-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 400px;
          will-change: transform; 
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 768px) {
          .port-card { min-height: auto; }
        }

        .port-card:hover { transform: translateY(-4px); }

        .port-card-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(10,0,20,0.08) 0%,
            rgba(10,0,20,0.4) 30%,
            rgba(10,0,20,0.95) 100%
          );
        }

        @keyframes dot-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(5px, -10px, 0); }
        }
        .animate-dot-float {
          animation: dot-float 10s ease-in-out infinite;
          will-change: transform;
        }

        .port-card-tags { position: absolute; top: 16px; right: 16px; z-index: 3; display: flex; gap: 6px; }
        .port-card-content { position: relative; z-index: 2; padding: 28px; }
        
        @media (max-width: 640px) {
          .port-card-content { padding: 20px; }
        }

        .port-card-title { font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .port-card-subtitle { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; color: rgba(196,181,253,0.8); margin-bottom: 12px; }
        .port-card-summary { font-size: 0.85rem; color: rgba(255,255,255,0.6); line-height: 1.6; margin-bottom: 20px; }
        
        .port-detail-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px; }
        @media (max-width: 1024px) { .port-detail-grid { grid-template-columns: 1fr; gap: 12px; } }
        
        .port-detail-label { font-size: 0.65rem; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.9; margin-bottom: 2px; }
        .port-detail-text { font-size: 0.75rem; color: rgba(255,255,255,0.45); line-height: 1.5; }
        
        .port-evidence-list { list-style: none; padding: 0; margin-bottom: 20px; display: flex; flex-direction: column; gap: 8px; }
        .port-evidence-item { font-size: 0.75rem; color: rgba(255,255,255,0.5); display: flex; gap: 8px; }
        .port-evidence-bullet { color: #8b5cf6; flex-shrink: 0; }

        .port-collab-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.02em;
          text-align: center;
        }

        .port-collab-highlight {
          color: rgba(196, 181, 253, 0.6);
          font-weight: 500;
        }

        .port-card-tags { 
          position: absolute; 
          top: 16px; 
          right: 16px; 
          z-index: 3; 
          display: flex; 
          gap: 6px; 
        }

        /* Fix for Mobile Overlap */
        @media (max-width: 640px) {
          .port-card-tags {
            position: relative; /* Change from absolute to relative */
            top: auto;
            right: auto;
            margin-bottom: 12px; /* Add spacing between chip and title */
            padding: 20px 20px 0 20px; /* Match content padding */
          }
          
          .port-card-content {
            padding-top: 10px; /* Reduce top padding since tags are now above */
          }
        }
        
        .filter-container::-webkit-scrollbar { display: none; }
        .filter-container { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <PageShell>
        <div className="relative bg-[#020205] min-h-screen overflow-hidden">
          {/* Ambient Background - Lazy loaded & Blur Optimized */}
          {/* <div className="absolute inset-0 pointer-events-none">
            <img
              src={footerBg}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover scale-125 blur-[120px] opacity-25"
            />
          </div> */}

          {/* Low-CPU Floating Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-dot-float"
                style={{
                  top: `${15 + i * 12}%`,
                  left: `${10 + i * 15}%`,
                  animationDelay: `${i * 1.5}s`,
                }}
              />
            ))}
          </div>

          <section className="relative z-10 py-12 md:py-20 px-4 container-narrow">
            <header className="text-center mb-10 md:mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
              >
                Project Delivery
              </motion.h1>
            </header>

            {/* Performance Optimized Filter Chips - Scrollable on Mobile */}
            <div className="filter-container flex overflow-x-auto pb-4 mb-8 justify-start md:justify-center">
              <Stack direction="row" gap={1} px={1}>
                {projectFilterOptions.map((f) => (
                  <Chip
                    key={f}
                    onClick={() => changeFilter(f)}
                    label={f}
                    sx={{
                      bgcolor:
                        activeFilter === f
                          ? "rgba(124, 58, 237, 0.25)"
                          : "rgba(255,255,255,0.03)",
                      color: activeFilter === f ? "#fff" : "#71717a",
                      border: "1px solid",
                      borderColor:
                        activeFilter === f
                          ? "rgba(124, 58, 237, 0.5)"
                          : "rgba(255,255,255,0.08)",
                      px: 1,
                      "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
                    }}
                  />
                ))}
              </Stack>
            </div>

            {/* Layout Animations (Smoother than standard CSS) */}
            <motion.div layout className="flex flex-col gap-6 md:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="port-card"
                    style={{ background: gradientForIndex(idx) }}
                  >
                    <div className="port-card-scrim" />

                    <div className="port-card-tags">
                      <Chip
                        label={project.type}
                        size="small"
                        sx={{
                          bgcolor: "rgba(124,58,237,0.4)",
                          color: "#fff",
                          fontSize: "10px",
                          fontWeight: 600,
                        }}
                      />
                    </div>

                    <div className="port-card-content">
                      <h2 className="port-card-title">{project.title}</h2>
                      <p className="port-card-subtitle">{project.subtitle}</p>
                      <p className="port-card-summary">{project.summary}</p>

                      <div className="port-detail-grid">
                        <div>
                          <p className="port-detail-label">Challenge</p>
                          <p className="port-detail-text">
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="port-detail-label">Implementation</p>
                          <p className="port-detail-text">
                            {project.implementation}
                          </p>
                        </div>
                        <div>
                          <p className="port-detail-label">Security</p>
                          <p className="port-detail-text">{project.security}</p>
                        </div>
                      </div>

                      <ul className="port-evidence-list">
                        {project.evidence.map((item) => (
                          <li key={item.title} className="port-evidence-item">
                            <span className="port-evidence-bullet">▸</span>
                            <span>
                              <strong>{item.title}:</strong> {item.detail}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 pt-6 border-t border-white/10">
                        <Button
                          component={Link}
                          to={buildProjectInquiryHref(project, "portfolio")}
                          variant="contained"
                          sx={{
                            bgcolor: "#7c3aed",
                            textTransform: "none",
                            borderRadius: "12px",
                            px: 4,
                            py: 1,
                            fontWeight: 600,
                            minWidth: { xs: "100%", sm: "160px" },
                            boxShadow: "0 4px 14px 0 rgba(124, 58, 237, 0.3)",
                          }}
                        >
                          Discuss Project
                        </Button>

                        {/* Collaboration String */}
                        <a
                          href="https://lifechoices.co.za/life-choices-academy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="port-collab-link text-[10px]"
                        >
                          In collaboration with{" "}
                          <span className="port-collab-highlight">
                            Life Choices Academy
                          </span>
                        </a>

                        {project.links.find((l) => l.kind === "github") ? (
                          <a
                            href={
                              project.links.find((l) => l.kind === "github")
                                ?.href
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-[11px] font-medium text-white/40 hover:text-white transition-colors"
                          >
                            <MdOpenInNew size={14} /> View Source
                          </a>
                        ) : (
                          <div className="hidden sm:block w-[100px]" />
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        </div>
      </PageShell>
    </>
  );
}
