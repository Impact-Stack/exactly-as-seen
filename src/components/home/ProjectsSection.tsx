import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import { event as trackEvent } from "@/lib/analytics";
import { buildProjectInquiryHref } from "@/lib/lead-routing";
import { featuredProjects } from "@/lib/projects";
import { MdShield, MdLocationOn, MdPeople, MdOpenInNew } from "react-icons/md";
import type { IconType } from "react-icons";
import { Button, Chip, Box, Container } from "@mui/material";

// ─── Icon map ────────────────────────────────────────────────────────────────

const featuredProjectIcons: Record<string, IconType> = {
  "bluewatch-soc-lab": MdShield,
  "findr-community-map": MdLocationOn,
  "moderntech-hr-platform": MdPeople,
};

// ─── Per-project gradient backgrounds (purple palette) ───────────────────────

const projectGradients = [
  "linear-gradient(135deg, #1a0533 0%, #3b1278 50%, #6d28d9 100%)",
  "linear-gradient(135deg, #0f0724 0%, #4c1d95 45%, #7c3aed 100%)",
  "linear-gradient(135deg, #160b2e 0%, #5b21b6 55%, #8b5cf6 100%)",
];

export default function ProjectsSection() {
  const { ref, isInView } = useInView();
  const [first, second, third] = featuredProjects;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .proj-section {
          background: #05050A;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 80px 0;
        }

        /* ── Hero orb panel ── */
        .orb-panel {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          background: #0a0014;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
          height: 100%;
          min-height: 400px;
        }

        .orb {
          position: absolute;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(167,139,250,0.3) 0%, rgba(109,40,217,0.4) 40%, transparent 75%);
          filter: blur(40px);
          pointer-events: none;
        }

        .orb-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        /* ── Project cards ── */
        .proj-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          min-height: 280px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .proj-card-gradient {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.85;
        }

        .proj-card-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(to bottom, transparent 0%, rgba(5,5,10,0.8) 100%);
        }

        .proj-card-content {
          position: relative;
          z-index: 2;
          padding: 24px;
          margin-top: auto;
          display: flex;
          flex-direction: column;
        }

        .proj-card-tag {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 3;
        }

        .proj-card-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .proj-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }

        /* ── Responsive bento grid ── */
        .proj-bento {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .proj-bento {
            grid-template-columns: repeat(2, 1fr);
          }
          .orb-panel-wrapper { grid-column: span 2; }
          .card-third { grid-column: span 2; }
        }

        @media (min-width: 1024px) {
          .proj-bento {
            grid-template-columns: 350px 1fr 1fr;
            grid-template-rows: repeat(2, 280px);
          }
          .orb-panel-wrapper { grid-row: span 2; grid-column: span 1; }
          .card-first { grid-column: 2; }
          .card-second { grid-column: 3; }
          .card-third { grid-column: 2 / 4; grid-row: 2; }
        }

        /* ── Mobile Overlap Fix ── */
        @media (max-width: 600px) {
          .proj-card-tag {
            position: relative;
            top: 0;
            right: 0;
            margin-bottom: 12px;
            order: -1; /* Place tag above title in the flex flow */
          }
          .proj-card-content {
            margin-top: 0;
            padding: 20px;
          }
          .proj-card {
            min-height: auto;
          }
        }
      `}</style>

      <Box component="section" className="proj-section" ref={ref}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-10"
          >
            <p style={{ fontFamily: "'DM Sans'", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(196,181,253,0.55)", marginBottom: 8 }}>
              Featured Delivery Proof
            </p>
            <h2 style={{ fontFamily: "'Syne'", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
              Evidence-led snapshots
            </h2>
          </motion.div>

          <div className="proj-bento">
            {/* Orb Panel */}
            <div className="orb-panel-wrapper">
              <div className="orb-panel">
                <div className="orb" />
                <div style={{ position: "relative", zIndex: 2 }}>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginBottom: 8 }}>Featured Projects</p>
                  <h3 className="orb-headline">Recent security, <span style={{ color: "#c4b5fd" }}>platform</span> and enterprise work</h3>
                  <Button component={Link} to="/portfolio" variant="outlined" sx={{ borderRadius: "100px", color: "#c4b5fd", borderColor: "rgba(139,92,246,0.3)", textTransform: "none", fontSize: "0.75rem" }}>
                    Full portfolio
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 1 */}
            <ProjectCard project={first} gradient={projectGradients[0]} className="card-first" delay={0.2} isInView={isInView} />

            {/* Project 2 */}
            <ProjectCard project={second} gradient={projectGradients[1]} className="card-second" delay={0.3} isInView={isInView} />

            {/* Project 3 - Extended Card */}
            {third && (
              <motion.article
                className="proj-card card-third"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="proj-card-gradient" style={{ background: projectGradients[2] }} />
                <div className="proj-card-scrim" style={{ background: "linear-gradient(to right, rgba(5,5,10,0.95) 0%, rgba(5,5,10,0.4) 100%)" }} />
                
                <div className="proj-card-tag">
                   <Chip label={third.type} size="small" sx={{ bgcolor: "rgba(139,92,246,0.2)", color: "#c4b5fd", fontSize: "0.6rem", border: "1px solid rgba(139,92,246,0.3)" }} />
                </div>

                <div className="proj-card-content" style={{ maxWidth: "550px" }}>
                  <div style={{ gap: 12, marginBottom: 12 }}>
                    <div className="proj-card-icon " style={{ width: 40, height: 40 }}>
                      <MdPeople size={20} color="#c4b5fd" />
                    </div>
                    <div>
                      <h4 className="proj-card-title" style={{ marginBottom: 0 }}>{third.title}</h4>
                      <p style={{ color: "rgba(196,181,253,0.7)", fontSize: "0.75rem" }}>{third.subtitle}</p>
                    </div>
                  </div>
                  
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", lineHeight: 1.6, marginBottom: 16 }}>{third.summary}</p>

                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
                    {third.evidence.map((item) => (
                      <Box key={item.title} sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        <span style={{ color: "#8b5cf6" }}>▸</span>
                        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.7rem" }}><strong>{item.title}:</strong> {item.detail}</span>
                      </Box>
                    ))}
                  </Box>

                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <Button
                      component={Link}
                      to={buildProjectInquiryHref(third, "home_featured")}
                      variant="contained"
                      sx={{ bgcolor: "#7c3aed", "&:hover": { bgcolor: "#6d28d9" }, textTransform: "none", fontSize: "0.75rem", borderRadius: "6px" }}
                    >
                      Discuss project
                    </Button>
                    <Link to={third.serviceHref || "#"} style={{ color: "#c4b5fd", fontSize: "0.75rem", textDecoration: "none", fontWeight: 600 }}>Related service</Link>
                  </div>
                </div>
              </motion.article>
            )}
          </div>
        </Container>
      </Box>
    </>
  );
}

function ProjectCard({ project, gradient, className, delay, isInView }: any) {
  const Icon = featuredProjectIcons[project.id] || MdShield;
  return (
    <motion.article
      className={`proj-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
    >
      <div className="proj-card-gradient" style={{ background: gradient }} />
      <div className="proj-card-scrim" />
      <div className="proj-card-tag">
        <Chip label={project.type} size="small" sx={{ bgcolor: "rgba(255,255,255,0.1)", color: "#fff", fontSize: "0.6rem", backdropFilter: "blur(4px)" }} />
      </div>
      <div className="proj-card-content">
        <div className="proj-card-icon">
          <Icon size={16} color="#c4b5fd" />
        </div>
        <h4 className="proj-card-title">{project.title}</h4>
        <p style={{ color: "rgba(196,181,253,0.7)", fontSize: "0.7rem", marginBottom: 12 }}>{project.subtitle}</p>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {project.technologies.slice(0, 3).map((t: string) => (
            <Chip key={t} label={t} size="small" sx={{ height: 18, fontSize: "0.55rem", bgcolor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)" }} />
          ))}
        </Box>
      </div>
    </motion.article>
  );
}