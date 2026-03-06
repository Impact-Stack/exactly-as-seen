import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { event as trackEvent } from "@/lib/analytics";
import { buildProjectInquiryHref } from "@/lib/lead-routing";
import { portfolioProjects, projectFilterOptions, type ProjectFilter } from "@/lib/projects";
import { buildProjectFaqSchema, buildProjectItemListSchema } from "@/lib/schema-projects";
import { absoluteUrl } from "@/lib/site";

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
        structuredData={portfolioStructuredData}
      />
      <PageShell>
        <section className="bg-[#000000] py-24 px-4 border-b border-white/5">
          <div className="container-narrow text-center">
            <h1 className="text-hero text-white mb-4">Project Delivery Portfolio</h1>
            <p className="text-card-title text-[#9CA3AF] font-light">
              Verified implementation evidence across security, web, and mobile delivery work.
            </p>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow">
            <div className="mb-8 flex flex-wrap gap-2">
              {projectFilterOptions.map((filterValue) => (
                <button
                  key={filterValue}
                  type="button"
                  onClick={() => changeFilter(filterValue)}
                  aria-pressed={activeFilter === filterValue}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition-colors ${
                    activeFilter === filterValue
                      ? "bg-[#0047BB]/15 border-[#0047BB]/40 text-[#0047BB]"
                      : "bg-[#111111] border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/30"
                  }`}
                >
                  {filterValue}
                </button>
              ))}
            </div>

            <p className="text-sm text-[#6B7280] mb-8">
              Showing {filteredProjects.length} of {portfolioProjects.length} projects.
            </p>

            <div className="space-y-8">
              {filteredProjects.map((project) => {
                const repoLink = project.links.find((link) => link.kind === "github");

                return (
                  <article key={project.id} id={project.id} className="glass p-7 md:p-8 card-hover">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                      <div>
                        <h2 className="text-subtitle text-white mb-2">{project.title}</h2>
                        <p className="text-sm text-[#6B7280]">{project.subtitle}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-2.5 py-1 rounded-full border border-[#0047BB]/30 bg-[#0047BB]/10 text-[#0047BB] font-semibold">
                          {project.type}
                        </span>
                        <span className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-[#9CA3AF]">
                          {project.role}
                        </span>
                      </div>
                    </div>

                    <p className="text-body text-[#9CA3AF] mb-6">{project.summary}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-2">Challenge</h3>
                        <p className="text-sm text-[#9CA3AF]">{project.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-2">Implementation</h3>
                        <p className="text-sm text-[#9CA3AF]">{project.implementation}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-2">Security Posture</h3>
                        <p className="text-sm text-[#9CA3AF]">{project.security}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {project.evidence.map((item) => (
                        <li key={item.title} className="text-sm text-[#9CA3AF] flex items-start gap-2">
                          <span className="text-[#0047BB] mt-1">-</span>
                          <span>
                            <span className="text-white/90 font-medium">{item.title}:</span> {item.detail}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-lg border border-[#0047BB]/20 bg-[#0047BB]/10 text-[#0047BB] font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <Link
                          to={buildProjectInquiryHref(project, "portfolio_project_card")}
                          onClick={() =>
                            trackEvent({
                              action: "project_card_cta_click",
                              category: "Portfolio",
                              label: `portfolio:${project.id}`,
                            })
                          }
                          className="inline-flex items-center justify-center bg-[#0047BB] text-white px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-[#003494] transition-colors"
                        >
                          Discuss this project
                        </Link>
                        {project.serviceHref ? (
                          <Link to={project.serviceHref} className="text-sm font-semibold text-[#0047BB] hover:text-[#3b82f6] transition-colors">
                            Related service
                          </Link>
                        ) : null}
                      </div>

                      {repoLink ? (
                        <a
                          href={repoLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-semibold text-[#9CA3AF] hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View source repository
                        </a>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="text-center mt-14">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#0047BB] text-white px-10 py-4 rounded-md text-body font-semibold hover:bg-[#003494] transition-colors duration-200"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
