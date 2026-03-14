import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import { event as trackEvent } from "@/lib/analytics";
import { buildProjectInquiryHref } from "@/lib/lead-routing";
import { featuredProjects } from "@/lib/projects";
import { MdShield, MdLocationOn, MdPeople, MdOpenInNew } from "react-icons/md";
import type { IconType } from "react-icons";
import { Button, Card, CardContent, Chip, Stack } from "@mui/material";

const featuredProjectIcons: Record<string, IconType> = {
  "bluewatch-soc-lab": MdShield,
  "findr-community-map": MdLocationOn,
  "moderntech-hr-platform": MdPeople,
};

export default function ProjectsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-[#05050A] border-t border-white/5" ref={ref}>
      <div className="container-narrow">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <h2 className="text-section font-display mb-4 text-white">Featured Delivery Proof</h2>
          <p className="text-lg text-[#B5B7C6] max-w-3xl mx-auto">
            Evidence-led snapshots of recent security, platform, and enterprise delivery work with clear role ownership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map((project, index) => {
            const Icon = featuredProjectIcons[project.id] || MdShield;
            const repoLink = project.links.find((link) => link.kind === "github");

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
                className="h-full"
              >
                <Card className="surface-card card-hover h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="icon-shell w-11 h-11 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-wrap justify-end gap-2">
                        <Chip label={project.type} size="small" variant="outlined" sx={{ borderColor: "rgba(139,92,246,0.35)", color: "#C4B5FD" }} />
                        <Chip label={project.role} size="small" variant="outlined" sx={{ borderColor: "rgba(255,255,255,0.2)", color: "#B5B7C6" }} />
                      </div>
                    </div>

                    <h3 className="text-subtitle text-white mb-1">{project.title}</h3>
                    <p className="text-small text-[#A1A1B5] mb-4">{project.subtitle}</p>
                    <p className="text-sm text-[#B5B7C6] mb-4">{project.summary}</p>

                    <Stack direction="row" flexWrap="wrap" gap={1} className="mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Chip key={tech} label={tech} size="small" variant="outlined" sx={{ borderColor: "rgba(139,92,246,0.25)", color: "#C4B5FD" }} />
                      ))}
                    </Stack>

                    <ul className="space-y-2 mb-5">
                      {project.evidence.slice(0, 3).map((item) => (
                        <li key={item.title} className="text-sm text-[#B5B7C6] flex items-start gap-2">
                          <span className="text-[#C4B5FD] mt-1">-</span>
                          <span>
                            <span className="text-white/90 font-medium">{item.title}:</span> {item.detail}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto space-y-3">
                      <Button
                        component={Link}
                        to={buildProjectInquiryHref(project, "home_featured_project")}
                        onClick={() =>
                          trackEvent({
                            action: "project_card_cta_click",
                            category: "Projects",
                            label: `home_featured:${project.id}`,
                          })
                        }
                        variant="contained"
                        color="primary"
                        className="button-primary w-full px-4 py-2.5 text-sm"
                      >
                        Discuss this project
                      </Button>
                      <div className="flex items-center justify-between gap-3">
                        {project.serviceHref ? (
                          <Link to={project.serviceHref} className="text-xs font-semibold text-[#C4B5FD] hover:text-[#E9D5FF] transition-colors">
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
                            className="inline-flex items-center text-xs font-semibold text-[#A1A1B5] hover:text-white transition-colors"
                          >
                            <MdOpenInNew className="w-3.5 h-3.5 mr-1" />
                            Source repo
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center">
          <Button component={Link} to="/portfolio" variant="outlined" color="secondary" className="button-secondary px-8 py-3.5 text-sm">
            Explore Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}

