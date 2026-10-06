import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
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
import { buildProjectItemListSchema } from "@/lib/schema-projects";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? portfolioProjects
        : portfolioProjects.filter((project) =>
            project.filterTags.includes(activeFilter),
          ),
    [activeFilter],
  );
  return (
    <>
      <SEO
        title="Case Studies & Project Portfolio | ImpactStack Africa"
        description="Explore Urban Anarchy, community platforms, business systems and security labs. See the brief, approach, technologies and delivered work."
        url={absoluteUrl("/portfolio")}
        structuredData={buildProjectItemListSchema(portfolioProjects)}
      />
      <PageShell>
        <div className="restored-content restored-portfolio">
        <div className="container-narrow py-12 md:py-20">
          <header className="max-w-3xl mb-10">
            <p className="text-xs text-purple-300 uppercase tracking-[0.25em] mb-5">
              Our work
            </p>
            <h1 className="text-4xl md:text-6xl tracking-tight mb-6">
              Case studies.
              <br />
              From brief to build.
            </h1>
            <p className="text-lg leading-relaxed">
              A closer look at the platforms, websites and systems we’ve worked
              on, alongside practical training projects and security labs.
            </p>
          </header>
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="group"
            aria-label="Filter case studies"
          >
            {projectFilterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => {
                  setActiveFilter(filter);
                  trackEvent({
                    action: "portfolio_filter_change",
                    category: "Portfolio",
                    label: filter,
                  });
                }}
                className={`px-4 py-2 min-h-11 rounded-full border text-sm ${activeFilter === filter ? "border-purple-400 bg-purple-500/20 text-white" : "border-white/15 text-[#b5b7c6] hover:border-purple-400"}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            {filteredProjects.length} case studies shown
          </p>
          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                id={project.id}
                className="surface-card overflow-hidden scroll-mt-28"
              >
                {project.image && (
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    width="1440"
                    height="1000"
                    loading="lazy"
                    className="w-full max-h-[420px] object-cover object-top"
                  />
                )}
                <div className="p-6 md:p-10">
                  <div className="flex flex-wrap gap-2 text-xs text-purple-200 mb-5">
                    <span className="border border-purple-400/30 rounded-full px-3 py-1">
                      {project.type}
                    </span>
                    <span className="border border-white/10 rounded-full px-3 py-1">
                      {project.role}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl mb-2">{project.title}</h2>
                  <p className="text-purple-300 text-sm mb-5">
                    {project.subtitle}
                  </p>
                  <p className="leading-relaxed max-w-3xl mb-8">
                    {project.summary}
                  </p>
                  <div className="grid md:grid-cols-2 gap-7 mb-8">
                    <div>
                      <h3 className="text-sm mb-3">The brief</h3>
                      <p className="text-sm leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm mb-3">Our approach</h3>
                      <p className="text-sm leading-relaxed">
                        {project.implementation}
                      </p>
                    </div>
                    {project.security && (
                      <div className="md:col-span-2">
                        <h3 className="text-sm mb-3">
                          Security considerations
                        </h3>
                        <p className="text-sm leading-relaxed">
                          {project.security}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="border-y border-white/10 py-6 mb-7">
                    <h3 className="text-sm mb-4">Delivered work</h3>
                    <ul className="grid md:grid-cols-3 gap-5">
                      {project.evidence.map((item) => (
                        <li key={item.title}>
                          <h4 className="text-sm mb-2">{item.title}</h4>
                          <p className="text-sm leading-relaxed">
                            {item.detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h3 className="text-sm mb-4">Technologies</h3>
                  <ul className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="text-xs border border-white/15 bg-white/5 rounded-full px-3 py-2"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-4">
                    {project.caseStudy && <Link to={`/case-studies/${project.id}`} className="button-secondary gap-2">Read full case study <ArrowUpRight size={16} /></Link>}
                    <Link
                      to={buildProjectInquiryHref(project, "portfolio")}
                      className="button-primary"
                    >
                      Discuss a similar project
                    </Link>
                    {project.links.map((link) =>
                      link.external ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex gap-2 items-center text-sm text-purple-300"
                        >
                          {link.label}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      ) : (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="text-sm text-purple-300"
                        >
                          {link.label}
                        </Link>
                      ),
                    )}
                    {project.serviceHref && (
                      <Link
                        to={project.serviceHref}
                        className="text-sm text-purple-300"
                      >
                        Related service
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      </PageShell>
    </>
  );
}
