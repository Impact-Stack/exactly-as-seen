import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import { Button, Chip, Stack } from "@mui/material";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { event as trackEvent } from "@/lib/analytics";
import { buildProjectInquiryHref } from "@/lib/lead-routing";
import {
  portfolioProjects,
  projectFilterOptions,
  type ProjectFilter,
} from "@/lib/projects";
import {
  buildProjectFaqSchema,
  buildProjectItemListSchema,
} from "@/lib/schema-projects";
import { absoluteUrl } from "@/lib/site";
import footerBg from "/footer-bg.webp";

// ─── Gradient cycle (matches ProjectsSection palette) ─────────────────────────

const PROJECT_GRADIENTS = [
  "linear-gradient(135deg, #1a0533 0%, #3b1278 50%, #6d28d9 100%)",
  "linear-gradient(135deg, #0f0724 0%, #4c1d95 45%, #7c3aed 100%)",
  "linear-gradient(135deg, #160b2e 0%, #5b21b6 55%, #8b5cf6 100%)",
];

const gradientForIndex = (i: number) =>
  PROJECT_GRADIENTS[i % PROJECT_GRADIENTS.length];

// ─── Structured data ──────────────────────────────────────────────────────────

const portfolioStructuredData = [
  buildProjectItemListSchema(
    portfolioProjects,
    "ImpactStack Africa Full Project Portfolio",
  ),
  buildProjectFaqSchema([
    {
      question: "What types of projects does ImpactStack Africa deliver?",
      answer:
        "ImpactStack Africa delivers security labs, web applications, mobile MVPs, and training-to-production project implementations.",
    },
    {
      question: "How can I discuss a similar project?",
      answer:
        "Use any project card CTA to open the consultation form with project context prefilled for faster discovery and scope alignment.",
    },
  ]),
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

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
        title="Portfolio | ImpactStack Africa Project Delivery Proof"
        description="Review real project delivery evidence across SOC security labs, web platforms, and mobile products built by ImpactStack Africa."
        url={absoluteUrl("/portfolio")}
        keywords={[
          "security operations center lab",
          "enterprise web applications South Africa",
          "mobile MVP delivery",
          "POPIA compliance engineering",
          "government technology projects",
          "role-based access control",
        ]}
        structuredData={portfolioStructuredData}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes dot-float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(-5px) translateX(-10px); }
          75% { transform: translateY(10px) translateX(5px); }
        }
        .animate-dot-float {
          animation: dot-float 8s ease-in-out infinite;
        }

        .port-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 400px;
          transition: transform 0.25s ease;
        }
        .port-card:hover {
          transform: translateY(-2px);
        }
        .port-card-scrim {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(10,0,20,0.08) 0%,
            rgba(10,0,20,0.28) 40%,
            rgba(10,0,20,0.93) 100%
          );
          transition: background 0.3s ease;
        }
        .port-card:hover .port-card-scrim {
          background: linear-gradient(
            to bottom,
            rgba(10,0,20,0.12) 0%,
            rgba(10,0,20,0.35) 40%,
            rgba(10,0,20,0.96) 100%
          );
        }
        .port-card-tags {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 3;
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: flex-end;
          max-width: 60%;
        }
        .port-card-content {
          position: relative;
          z-index: 2;
          padding: 28px 28px 26px;
        }
        .port-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.025em;
          line-height: 1.2;
          margin: 0 0 5px;
        }
        .port-card-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.73rem;
          color: rgba(196,181,253,0.72);
          margin: 0 0 12px;
        }
        .port-card-summary {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.79rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.65;
          margin: 0 0 18px;
        }
        .port-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        @media (max-width: 640px) {
          .port-detail-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
        .port-detail-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          margin: 0 0 4px;
        }
        .port-detail-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          color: rgba(255,255,255,0.44);
          line-height: 1.55;
          margin: 0;
        }
        .port-evidence-list {
          list-style: none;
          padding: 0;
          margin: 0 0 18px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .port-evidence-item {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.71rem;
          color: rgba(255,255,255,0.44);
          display: flex;
          gap: 7px;
          align-items: flex-start;
        }
        .port-evidence-bullet {
          color: #8b5cf6;
          font-size: 0.55rem;
          margin-top: 3px;
          flex-shrink: 0;
        }
        .port-evidence-title {
          color: rgba(255,255,255,0.76);
          font-weight: 500;
        }
        .port-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }
        .port-footer-left {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .port-link-service {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.73rem;
          font-weight: 600;
          color: #c4b5fd;
          text-decoration: none;
          transition: color 0.2s;
        }
        .port-link-service:hover {
          color: #e9d5ff;
        }
        .port-link-repo {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.73rem;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s;
        }
        .port-link-repo:hover {
          color: rgba(255,255,255,0.7);
        }
      `}</style>

      <PageShell>
        {/* ── Hero ── */}
        <section className="bg-[#020205] py-24 px-4 relative overflow-hidden">
          <div className="container-narrow text-center relative">
            <h1 className="text-hero text-white mb-4">
              Project Delivery Portfolio
            </h1>
            <p className="text-card-title text-[#B5B7C6] font-light">
              Verified implementation evidence across security, web, and mobile
              delivery work.
            </p>
          </div>
        </section>

        {/* ── Cards section ── */}
        <div className="relative bg-[#020205] overflow-hidden">
          {/* Ambient background — same as Pricing page */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={footerBg}
              alt=""
              className="w-full h-full object-cover scale-150 blur-[140px] opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020205]/60 via-transparent to-[#020205]" />
          </div>

          {/* Floating dots — same as Pricing page */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="absolute top-[10%] left-[15%] w-2 h-2 bg-white/10 rounded-full animate-dot-float"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-[45%] left-[5%] w-1.5 h-1.5 bg-white/20 rounded-full animate-dot-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-[15%] right-[20%] w-1.5 h-1.5 bg-white/10 rounded-full animate-dot-float"
              style={{ animationDelay: "4s" }}
            />
            <div
              className="absolute top-[70%] right-[10%] w-2 h-2 bg-white/5 rounded-full animate-dot-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-[30%] left-[40%] w-1 h-1 bg-white/20 rounded-full animate-dot-float"
              style={{ animationDelay: "3s" }}
            />
            <div
              className="absolute top-[60%] left-[25%] w-1 h-1 bg-white/30 rounded-full animate-dot-float"
              style={{ animationDelay: "5s" }}
            />
            <div
              className="absolute top-[40%] right-[35%] w-1 h-1 bg-white/20 rounded-full animate-dot-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute bottom-[20%] left-[15%] w-1.5 h-1.5 bg-white/10 rounded-full animate-dot-float"
              style={{ animationDelay: "6s" }}
            />
            <div
              className="absolute bottom-[15%] right-[40%] w-1 h-1 bg-white/20 rounded-full animate-dot-float"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute top-[80%] left-[50%] w-1 h-1 bg-white/10 rounded-full animate-dot-float"
              style={{ animationDelay: "7s" }}
            />
            <div className="absolute top-[5%] right-[5%] w-1 h-1 bg-white/40 rounded-full animate-pulse" />
          </div>

          {/* Content */}
          <section className="section-padding border-t border-white/5 relative z-10">
            <div className="container-narrow">
              {/* Filter chips */}
              <Stack direction="row" flexWrap="wrap" gap={1} className="mb-4">
                {projectFilterOptions.map((filterValue) => {
                  const active = activeFilter === filterValue;
                  return (
                    <Chip
                      key={filterValue}
                      component="button"
                      onClick={() => changeFilter(filterValue)}
                      label={filterValue}
                      variant={active ? "filled" : "outlined"}
                      color={active ? "secondary" : "default"}
                      sx={{
                        borderRadius: "100px",
                        borderColor: active
                          ? "rgba(139,92,246,0.4)"
                          : "rgba(255,255,255,0.12)",
                        bgcolor: active
                          ? "rgba(139,92,246,0.2)"
                          : "transparent",
                        color: active ? "#C4B5FD" : "#A1A1B5",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.72rem",
                        "&:hover": {
                          borderColor: "rgba(255,255,255,0.3)",
                          color: "#ffffff",
                        },
                      }}
                      aria-pressed={active}
                    />
                  );
                })}
              </Stack>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  color: "#A1A1B5",
                  marginBottom: 28,
                }}
              >
                Showing {filteredProjects.length} of {portfolioProjects.length}{" "}
                projects.
              </p>

              {/* ── Project cards ── */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {filteredProjects.map((project, index) => {
                  const repoLink = project.links.find(
                    (link) => link.kind === "github",
                  );

                  return (
                    <article
                      key={project.id}
                      id={project.id}
                      className="port-card"
                      style={{ background: gradientForIndex(index) }}
                    >
                      {/* Scrim */}
                      <div className="port-card-scrim" />

                      {/* Top-right tags */}
                      <div className="port-card-tags">
                        <Chip
                          label={project.type}
                          size="small"
                          sx={{
                            background: "rgba(139,92,246,0.22)",
                            border: "1px solid rgba(139,92,246,0.4)",
                            color: "#c4b5fd",
                            fontSize: "0.6rem",
                            height: 22,
                            fontFamily: "'DM Sans', sans-serif",
                            backdropFilter: "blur(8px)",
                          }}
                        />
                        <Chip
                          label={project.role}
                          size="small"
                          sx={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.13)",
                            color: "rgba(255,255,255,0.55)",
                            fontSize: "0.6rem",
                            height: 22,
                            fontFamily: "'DM Sans', sans-serif",
                            backdropFilter: "blur(8px)",
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="port-card-content">
                        <h2 className="port-card-title">{project.title}</h2>
                        <p className="port-card-subtitle">{project.subtitle}</p>
                        <p className="port-card-summary">{project.summary}</p>

                        {/* Challenge / Implementation / Security */}
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
                            <p className="port-detail-label">
                              Security posture
                            </p>
                            <p className="port-detail-text">
                              {project.security}
                            </p>
                          </div>
                        </div>

                        {/* Evidence */}
                        <ul className="port-evidence-list">
                          {project.evidence.map((item) => (
                            <li key={item.title} className="port-evidence-item">
                              <span className="port-evidence-bullet">▸</span>
                              <span>
                                <span className="port-evidence-title">
                                  {item.title}:
                                </span>{" "}
                                {item.detail}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Technology chips */}
                        <Stack
                          direction="row"
                          flexWrap="wrap"
                          gap={0.75}
                          sx={{ mb: 0 }}
                        >
                          {project.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                background: "rgba(139,92,246,0.09)",
                                border: "1px solid rgba(139,92,246,0.25)",
                                color: "#c4b5fd",
                                fontSize: "0.6rem",
                                height: 20,
                                fontFamily: "'DM Sans', sans-serif",
                              }}
                            />
                          ))}
                        </Stack>

                        {/* Footer actions */}
                        <div className="port-card-footer">
                          <div className="port-footer-left">
                            <Button
                              component={Link}
                              to={buildProjectInquiryHref(
                                project,
                                "portfolio_project_card",
                              )}
                              onClick={() =>
                                trackEvent({
                                  action: "project_card_cta_click",
                                  category: "Portfolio",
                                  label: `portfolio:${project.id}`,
                                })
                              }
                              variant="contained"
                              sx={{
                                background: "#7c3aed",
                                color: "#fff",
                                fontSize: "0.72rem",
                                fontFamily: "'DM Sans', sans-serif",
                                textTransform: "none",
                                fontWeight: 600,
                                letterSpacing: "0.02em",
                                borderRadius: "7px",
                                px: 2.5,
                                py: 1,
                                "&:hover": { background: "#6d28d9" },
                              }}
                            >
                              Discuss this project
                            </Button>

                            {project.serviceHref ? (
                              <Link
                                to={project.serviceHref}
                                className="port-link-service"
                              >
                                Related service
                              </Link>
                            ) : null}
                          </div>

                          {repoLink ? (
                            <a
                              href={repoLink.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="port-link-repo"
                            >
                              <MdOpenInNew style={{ width: 13, height: 13 }} />
                              View source repository
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* ── Bottom CTA ── */}
              <div className="text-center mt-14">
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(139,92,246,0.4)",
                    color: "#c4b5fd",
                    fontFamily: "'DM Sans', sans-serif",
                    textTransform: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    borderRadius: "8px",
                    px: 5,
                    py: 1.5,
                    "&:hover": {
                      borderColor: "#8b5cf6",
                      background: "rgba(139,92,246,0.07)",
                      color: "#ddd6fe",
                    },
                  }}
                >
                  Book a Consultation
                </Button>
              </div>
            </div>
          </section>
        </div>
      </PageShell>
    </>
  );
}
