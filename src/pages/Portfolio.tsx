import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import { Button, Card, CardContent, Chip, Stack } from "@mui/material";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { event as trackEvent } from "@/lib/analytics";
import { buildProjectInquiryHref } from "@/lib/lead-routing";
import { portfolioProjects, projectFilterOptions, type ProjectFilter } from "@/lib/projects";
import { buildProjectFaqSchema, buildProjectItemListSchema } from "@/lib/schema-projects";
import { absoluteUrl } from "@/lib/site";
import heroBg from "@/assets/hero-bg.jpg";
import caseEcommerce from "@/assets/case-ecommerce.jpg";
import caseHr from "@/assets/case-hr.jpg";
import caseNfc from "@/assets/case-nfc.jpg";

const portfolioStructuredData = [
  buildProjectItemListSchema(portfolioProjects, "ImpactStack Africa Full Project Portfolio"),
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

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioProjects;
    }

    return portfolioProjects.filter((project) => project.filterTags.includes(activeFilter));
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
      <PageShell>
        <section className="bg-[#05050A] py-24 px-4 border-b border-white/5 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-15">
            <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="container-narrow text-center relative">
            <h1 className="text-hero text-white mb-4">Project Delivery Portfolio</h1>
            <p className="text-card-title text-[#B5B7C6] font-light">
              Verified implementation evidence across security, web, and mobile delivery work.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#05050A] border-t border-white/5">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { image: caseHr, label: "HR Systems", caption: "Secure workforce workflows" },
                { image: caseEcommerce, label: "E-Commerce", caption: "Commerce platform delivery" },
                { image: caseNfc, label: "Field Ops", caption: "Attendance + device integration" },
              ].map((item) => (
                <Card key={item.label} className="surface-card overflow-hidden">
                  <img src={item.image} alt={item.caption} className="h-40 w-full object-cover" loading="lazy" />
                  <CardContent>
                    <p className="text-xs uppercase tracking-wide text-[#A1A1B5]">{item.label}</p>
                    <p className="text-sm text-white mt-1">{item.caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow">
            <Stack direction="row" flexWrap="wrap" gap={1} className="mb-8">
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
                      borderColor: active ? "rgba(139,92,246,0.4)" : "rgba(255,255,255,0.12)",
                      bgcolor: active ? "rgba(139,92,246,0.2)" : "transparent",
                      color: active ? "#C4B5FD" : "#A1A1B5",
                      "&:hover": { borderColor: "rgba(255,255,255,0.3)", color: "#ffffff" },
                    }}
                    aria-pressed={active}
                  />
                );
              })}
            </Stack>

            <p className="text-sm text-[#A1A1B5] mb-8">
              Showing {filteredProjects.length} of {portfolioProjects.length} projects.
            </p>

            <div className="space-y-8">
              {filteredProjects.map((project) => {
                const repoLink = project.links.find((link) => link.kind === "github");

                return (
                  <Card key={project.id} id={project.id} className="surface-card card-hover">
                    <CardContent className="p-7 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                      <div>
                        <h2 className="text-subtitle text-white mb-2">{project.title}</h2>
                        <p className="text-sm text-[#A1A1B5]">{project.subtitle}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Chip label={project.type} size="small" variant="outlined" sx={{ borderColor: "rgba(139,92,246,0.35)", color: "#C4B5FD" }} />
                        <Chip label={project.role} size="small" variant="outlined" sx={{ borderColor: "rgba(255,255,255,0.2)", color: "#B5B7C6" }} />
                      </div>
                    </div>

                    <p className="text-body text-[#B5B7C6] mb-6">{project.summary}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-2">Challenge</h3>
                        <p className="text-sm text-[#B5B7C6]">{project.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-2">Implementation</h3>
                        <p className="text-sm text-[#B5B7C6]">{project.implementation}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-2">Security Posture</h3>
                        <p className="text-sm text-[#B5B7C6]">{project.security}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {project.evidence.map((item) => (
                        <li key={item.title} className="text-sm text-[#B5B7C6] flex items-start gap-2">
                          <span className="text-[#C4B5FD] mt-1">-</span>
                          <span>
                            <span className="text-white/90 font-medium">{item.title}:</span> {item.detail}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Stack direction="row" flexWrap="wrap" gap={1} className="mb-6">
                      {project.technologies.map((tech) => (
                        <Chip key={tech} label={tech} size="small" variant="outlined" sx={{ borderColor: "rgba(139,92,246,0.25)", color: "#C4B5FD" }} />
                      ))}
                    </Stack>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <Button
                          to={buildProjectInquiryHref(project, "portfolio_project_card")}
                          component={Link}
                          onClick={() =>
                            trackEvent({
                              action: "project_card_cta_click",
                              category: "Portfolio",
                              label: `portfolio:${project.id}`,
                            })
                          }
                          variant="contained"
                          color="primary"
                          className="button-primary px-4 py-2.5 text-sm"
                        >
                          Discuss this project
                        </Button>
                        {project.serviceHref ? (
                          <Link to={project.serviceHref} className="text-sm font-semibold text-[#C4B5FD] hover:text-[#E9D5FF] transition-colors">
                            Related service
                          </Link>
                        ) : null}
                      </div>

                      {repoLink ? (
                        <a
                          href={repoLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-semibold text-[#A1A1B5] hover:text-white transition-colors"
                        >
                          <MdOpenInNew className="w-4 h-4 mr-2" />
                          View source repository
                        </a>
                      ) : null}
                    </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-14">
              <Button component={Link} to="/contact" variant="contained" color="primary" className="button-primary px-10 py-4 text-body">
                Book a Consultation
              </Button>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}

