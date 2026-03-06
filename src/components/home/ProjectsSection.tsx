import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import { event as trackEvent } from "@/lib/analytics";
import { buildProjectInquiryHref } from "@/lib/lead-routing";
import { featuredProjects } from "@/lib/projects";
import { Shield, MapPinned, Users, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const featuredProjectIcons: Record<string, LucideIcon> = {
  "bluewatch-soc-lab": Shield,
  "findr-community-map": MapPinned,
  "moderntech-hr-platform": Users,
};

export default function ProjectsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-[#000000] border-t border-white/5" ref={ref}>
      <div className="container-narrow">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <h2 className="text-section font-display mb-4 text-white">Featured Delivery Proof</h2>
          <p className="text-lg text-[#9CA3AF] max-w-3xl mx-auto">
            Evidence-led snapshots of recent security, platform, and enterprise delivery work with clear role ownership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map((project, index) => {
            const Icon = featuredProjectIcons[project.id] || Shield;
            const repoLink = project.links.find((link) => link.kind === "github");

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
                className="glass p-6 card-hover h-full flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="icon-shell w-11 h-11 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-wrap justify-end gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full border border-[#0047BB]/25 bg-[#0047BB]/10 text-[#0047BB] font-semibold">
                      {project.type}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-[#9CA3AF]">{project.role}</span>
                  </div>
                </div>

                <h3 className="text-subtitle text-white mb-1">{project.title}</h3>
                <p className="text-small text-[#6B7280] mb-4">{project.subtitle}</p>
                <p className="text-sm text-[#9CA3AF] mb-4">{project.summary}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-lg border border-[#0047BB]/20 bg-[#0047BB]/10 text-[#0047BB] font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-5">
                  {project.evidence.slice(0, 3).map((item) => (
                    <li key={item.title} className="text-sm text-[#9CA3AF] flex items-start gap-2">
                      <span className="text-[#0047BB] mt-1">-</span>
                      <span>
                        <span className="text-white/90 font-medium">{item.title}:</span> {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3">
                  <Link
                    to={buildProjectInquiryHref(project, "home_featured_project")}
                    onClick={() =>
                      trackEvent({
                        action: "project_card_cta_click",
                        category: "Projects",
                        label: `home_featured:${project.id}`,
                      })
                    }
                    className="inline-flex items-center justify-center w-full bg-[#0047BB] text-white px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-[#003494] transition-colors"
                  >
                    Discuss this project
                  </Link>
                  <div className="flex items-center justify-between gap-3">
                    {project.serviceHref ? (
                      <Link to={project.serviceHref} className="text-xs font-semibold text-[#0047BB] hover:text-[#3b82f6] transition-colors">
                        Related service
                      </Link>
                    ) : (
                      <span />
                    )}
                    {repoLink ? (
                      <a
                        href={repoLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-[#9CA3AF] hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1" />
                        Source repo
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:border-white/50 hover:bg-white/5 transition-all"
          >
            Explore Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
