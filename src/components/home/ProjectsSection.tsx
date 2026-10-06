import { Link } from "react-router-dom";
import { ArrowUpRight, Code2 } from "lucide-react";
import { featuredProjects } from "@/lib/projects";

export default function ProjectsSection() {
  return (
    <section
      className="section-padding bg-[#05050A] border-t border-white/10"
      aria-labelledby="projects-heading"
    >
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-5 mb-10">
          <div>
            <p className="text-xs text-purple-300 uppercase tracking-[0.25em] mb-4">
              Selected work
            </p>
            <h2
              id="projects-heading"
              className="text-4xl md:text-5xl tracking-tight"
            >
              Ideas made tangible.
            </h2>
          </div>
          <Link to="/portfolio" className="button-secondary gap-2 self-start">
            All case studies <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="surface-card overflow-hidden flex flex-col"
            >
              {project.image ? (
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width="1440"
                  height="1000"
                  loading="lazy"
                  className="w-full aspect-[16/9] object-cover object-top"
                />
              ) : (
                <div
                  className="h-32 relative overflow-hidden flex items-center px-7 bg-gradient-to-br from-indigo-950 via-purple-950 to-[#0b0b12]"
                  aria-hidden="true"
                >
                  <Code2 size={48} className="text-purple-300/80" />
                  <span className="font-mono text-xs text-purple-200 ml-5">
                    {project.technologies.slice(0, 3).join(" / ")}
                  </span>
                </div>
              )}
              <div className="p-6 md:p-7 flex flex-col grow">
                <p className="text-xs text-purple-300 mb-3">{project.type}</p>
                <h3 className="text-xl mb-3">{project.title}</h3>
                <p className="text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>
                <Link
                  className="inline-flex gap-2 items-center text-sm text-purple-300 mt-auto"
                  to={`/portfolio#${project.id}`}
                >
                  Read case study <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
