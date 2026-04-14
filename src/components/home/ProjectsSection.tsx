import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import { event as trackEvent } from "@/lib/analytics";
import { buildProjectInquiryHref } from "@/lib/lead-routing";
import { featuredProjects } from "@/lib/projects";
import { MdShield, MdLocationOn, MdPeople, MdOpenInNew, MdArrowForward, MdSettings } from "react-icons/md";
import type { IconType } from "react-icons";
import { Button, Chip, Stack } from "@mui/material";

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

// ─── Component ────────────────────────────────────────────────────────────────

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
          padding: 88px 0;
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
          min-height: 520px;
        }

        /* The glowing purple orb */
        .orb {
          position: absolute;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 40%,
            rgba(167,139,250,0.55) 0%,
            rgba(109,40,217,0.7) 30%,
            rgba(76,29,149,0.5) 60%,
            transparent 80%
          );
          filter: blur(28px);
          pointer-events: none;
        }

        /* Crosshair grid lines */
        .crosshair {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .crosshair::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.07);
        }
        .crosshair::after {
          content: '';
          position: absolute;
          top: 42%;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255,255,255,0.07);
        }

        .orb-welcome {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.04em;
          margin-bottom: 10px;
        }

        .orb-headline {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 28px;
        }
        .orb-headline em {
          font-style: normal;
          color: rgba(196,181,253,0.85);
          font-weight: 600;
        }

        .orb-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── Project cards ── */
        .proj-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .proj-card-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .proj-card-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .proj-card:hover .proj-card-bg img {
          transform: scale(1.04);
        }
        .proj-card-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(10,0,20,0.1) 0%,
            rgba(10,0,20,0.3) 40%,
            rgba(10,0,20,0.88) 100%
          );
        }
        .proj-card-gradient {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .proj-card-content {
          position: relative;
          z-index: 2;
          padding: 24px;
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
          background: rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          flex-shrink: 0;
        }
        .proj-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-bottom: 4px;
        }
        .proj-card-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          color: rgba(196,181,253,0.7);
          margin-bottom: 10px;
        }
        .proj-card-summary {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.6;
          margin-bottom: 14px;
        }
        .proj-card-evidence {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 16px;
        }
        .proj-card-evidence-item {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.45);
          display: flex;
          gap: 6px;
          align-items: flex-start;
        }
        .proj-card-evidence-item strong {
          color: rgba(255,255,255,0.75);
          font-weight: 500;
        }

        .proj-card:hover .proj-card-scrim {
          background: linear-gradient(
            to bottom,
            rgba(10,0,20,0.15) 0%,
            rgba(10,0,20,0.4) 40%,
            rgba(10,0,20,0.93) 100%
          );
        }

        /* ── Responsive bento grid ── */
        .proj-bento {
          display: grid;
          gap: 12px;
          /* Mobile: single column, auto height */
          grid-template-columns: 1fr;
          grid-template-rows: auto;
        }

        .proj-bento .orb-panel-wrapper { grid-column: 1; grid-row: auto; }
        .proj-bento .card-first        { grid-column: 1; grid-row: auto; min-height: 280px; }
        .proj-bento .card-second       { grid-column: 1; grid-row: auto; min-height: 280px; }
        .proj-bento .card-third        { grid-column: 1; grid-row: auto; min-height: 320px; }

        /* Tablet: 2 columns */
        @media (min-width: 640px) {
          .proj-bento {
            grid-template-columns: 1fr 1fr;
          }
          .proj-bento .orb-panel-wrapper { grid-column: 1 / 3; }
          .proj-bento .card-first        { grid-column: 1; }
          .proj-bento .card-second       { grid-column: 2; }
          .proj-bento .card-third        { grid-column: 1 / 3; }
        }

        /* Desktop: 3 columns, fixed height bento */
        @media (min-width: 1024px) {
          .proj-bento {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            height: 560px;
          }
          .proj-bento .orb-panel-wrapper { grid-column: 1; grid-row: 1 / 3; }
          .proj-bento .card-first        { grid-column: 2; grid-row: 1; min-height: unset; }
          .proj-bento .card-second       { grid-column: 3; grid-row: 1; min-height: unset; }
          .proj-bento .card-third        { grid-column: 2 / 4; grid-row: 2; min-height: unset; }
        }
      `}</style>

      <section className="proj-section" ref={ref}>
        <div className="container-narrow">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(196,181,253,0.55)",
                marginBottom: 10,
                fontWeight: 500,
              }}
            >
              Featured Delivery Proof
            </p>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Evidence-led snapshots
            </h2>
          </motion.div>

          {/* ── Responsive Bento grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="proj-bento"
          >
            {/* ── LEFT: Hero orb panel ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="orb-panel-wrapper"
            >
              <div className="orb-panel">
                <div className="orb" />
                <div className="crosshair" />

                <div style={{
                  position: "absolute",
                  left: 18,
                  top: "30%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 36,
                }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.2)",
                    textTransform: "uppercase",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}>
                    FEATURED
                  </span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.12)",
                    textTransform: "uppercase",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}>
                    0 1 × 3
                  </span>
                </div>

                <div style={{ position: "relative", zIndex: 2 }}>
                  <p className="orb-welcome">Featured Delivery</p>
                  <h3 className="orb-headline">
                    Recent security,{" "}
                    <em>platform</em>{" "}
                    and enterprise work
                  </h3>
                  <div className="orb-controls">
                    <Button
                      component={Link}
                      to="/portfolio"
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: "rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.08em",
                        fontFamily: "'DM Sans', sans-serif",
                        textTransform: "none",
                        borderRadius: "100px",
                        px: 2,
                        "&:hover": {
                          borderColor: "rgba(255,255,255,0.35)",
                          color: "#fff",
                          background: "rgba(255,255,255,0.04)",
                        },
                      }}
                    >
                      Full portfolio
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Project 1 ── */}
            {first && (() => {
              const Icon = featuredProjectIcons[first.id] || MdShield;
              return (
                <motion.article
                  key={first.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="proj-card card-first"
                >
                  <div
                    className="proj-card-gradient"
                    style={{ background: projectGradients[0] }}
                  />
                  <div className="proj-card-scrim" />

                  <div className="proj-card-tag">
                    <Chip
                      label={first.type}
                      size="small"
                      sx={{
                        background: "rgba(139,92,246,0.25)",
                        border: "1px solid rgba(139,92,246,0.4)",
                        color: "#c4b5fd",
                        fontSize: "0.6rem",
                        height: 22,
                        backdropFilter: "blur(8px)",
                      }}
                    />
                  </div>

                  <div className="proj-card-content">
                    <div className="proj-card-icon">
                      <Icon style={{ width: 16, height: 16, color: "#c4b5fd" }} />
                    </div>
                    <p className="proj-card-title">{first.title}</p>
                    <p className="proj-card-subtitle">{first.subtitle}</p>
                    <div className="flex gap-1.5 flex-wrap">
                      {first.technologies.slice(0, 3).map((t) => (
                        <Chip key={t} label={t} size="small" sx={{
                          background: "rgba(255,255,255,0.06)",
                          color: "rgba(255,255,255,0.5)",
                          fontSize: "0.58rem",
                          height: 20,
                          border: "1px solid rgba(255,255,255,0.08)",
                        }} />
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })()}

            {/* ── Project 2 ── */}
            {second && (() => {
              const Icon = featuredProjectIcons[second.id] || MdShield;
              return (
                <motion.article
                  key={second.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.26 }}
                  className="proj-card card-second"
                >
                  <div
                    className="proj-card-gradient"
                    style={{ background: projectGradients[1] }}
                  />
                  <div className="proj-card-scrim" />

                  <div className="proj-card-tag">
                    <Chip
                      label={second.role}
                      size="small"
                      sx={{
                        background: "rgba(109,40,217,0.25)",
                        border: "1px solid rgba(109,40,217,0.4)",
                        color: "#ddd6fe",
                        fontSize: "0.6rem",
                        height: 22,
                        backdropFilter: "blur(8px)",
                      }}
                    />
                  </div>

                  <div className="proj-card-content">
                    <div className="proj-card-icon">
                      <Icon style={{ width: 16, height: 16, color: "#a78bfa" }} />
                    </div>
                    <p className="proj-card-title">{second.title}</p>
                    <p className="proj-card-subtitle">{second.subtitle}</p>
                    <div className="flex gap-1.5 flex-wrap">
                      {second.technologies.slice(0, 3).map((t) => (
                        <Chip key={t} label={t} size="small" sx={{
                          background: "rgba(255,255,255,0.06)",
                          color: "rgba(255,255,255,0.5)",
                          fontSize: "0.58rem",
                          height: 20,
                          border: "1px solid rgba(255,255,255,0.08)",
                        }} />
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })()}

            {/* ── Project 3 ── */}
            {third && (() => {
              const Icon = featuredProjectIcons[third.id] || MdShield;
              const repoLink = third.links.find((l) => l.kind === "github");
              return (
                <motion.article
                  key={third.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.32 }}
                  className="proj-card card-third"
                >
                  <div
                    className="proj-card-gradient"
                    style={{ background: projectGradients[2] }}
                  />
                  <div className="proj-card-scrim" style={{
                    background: "linear-gradient(to right, rgba(10,0,20,0.92) 0%, rgba(10,0,20,0.55) 50%, rgba(10,0,20,0.2) 100%)"
                  }} />

                  <div className="proj-card-tag" style={{ top: 16, right: 16 }}>
                    <div style={{ display: "flex", gap: 6 }}>
                      <Chip label={third.type} size="small" sx={{
                        background: "rgba(139,92,246,0.2)",
                        border: "1px solid rgba(139,92,246,0.35)",
                        color: "#c4b5fd",
                        fontSize: "0.6rem",
                        height: 22,
                      }} />
                      <Chip label={third.role} size="small" sx={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "0.6rem",
                        height: 22,
                      }} />
                    </div>
                  </div>

                  <div className="proj-card-content" style={{ maxWidth: 480 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <div className="proj-card-icon" style={{ marginBottom: 0 }}>
                        <Icon style={{ width: 16, height: 16, color: "#a78bfa" }} />
                      </div>
                      <div>
                        <p className="proj-card-title" style={{ marginBottom: 2 }}>{third.title}</p>
                        <p className="proj-card-subtitle" style={{ marginBottom: 0 }}>{third.subtitle}</p>
                      </div>
                    </div>

                    <p className="proj-card-summary">{third.summary}</p>

                    <div className="proj-card-evidence">
                      {third.evidence.slice(0, 2).map((item) => (
                        <div key={item.title} className="proj-card-evidence-item">
                          <span style={{ color: "#8b5cf6", fontSize: "0.55rem", marginTop: 2 }}>▸</span>
                          <span><strong>{item.title}:</strong> {item.detail}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      <Button
                        component={Link}
                        to={buildProjectInquiryHref(third, "home_featured_project")}
                        onClick={() => trackEvent({
                          action: "project_card_cta_click",
                          category: "Projects",
                          label: `home_featured:${third.id}`,
                        })}
                        variant="contained"
                        size="small"
                        sx={{
                          background: "#7c3aed",
                          color: "#fff",
                          fontSize: "0.7rem",
                          fontFamily: "'DM Sans', sans-serif",
                          textTransform: "none",
                          fontWeight: 600,
                          letterSpacing: "0.02em",
                          borderRadius: "6px",
                          px: 2.5,
                          py: 1,
                          "&:hover": { background: "#6d28d9" },
                        }}
                      >
                        Discuss this project
                      </Button>

                      {third.serviceHref && (
                        <Link
                          to={third.serviceHref}
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            color: "#c4b5fd",
                            textDecoration: "none",
                          }}
                        >
                          Related service
                        </Link>
                      )}

                      {repoLink && (
                        <a
                          href={repoLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.72rem",
                            color: "rgba(255,255,255,0.4)",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          <MdOpenInNew style={{ width: 13, height: 13 }} />
                          Source repo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })()}
          </motion.div>

          {/* ── Footer CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="mt-8 text-center"
          >
            <Button
              component={Link}
              to="/portfolio"
              variant="outlined"
              sx={{
                borderColor: "rgba(139,92,246,0.4)",
                color: "#c4b5fd",
                fontFamily: "'DM Sans', sans-serif",
                textTransform: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                borderRadius: "8px",
                px: 4,
                py: 1.5,
                "&:hover": {
                  borderColor: "#8b5cf6",
                  background: "rgba(139,92,246,0.07)",
                  color: "#ddd6fe",
                },
              }}
            >
              Explore Full Portfolio
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}