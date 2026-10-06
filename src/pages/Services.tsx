import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { services, deliverySteps } from "@/lib/services";
import { allProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";

export default function Services() {
  return (
    <>
      <SEO
        title="Websites, Apps & Business Services | ImpactStack Africa"
        description="Explore website design, custom apps, e-commerce, bookings, dashboards, integrations, security, hosting and ongoing support from ImpactStack Africa."
        url={absoluteUrl("/services")}
      />
      <PageShell>
        <div className="restored-content restored-services">
        <section className="section-padding bg-[#020204] border-b border-white/10">
          <div className="container-narrow">
            <p className="text-xs uppercase tracking-[0.25em] text-purple-300 mb-5">
              Our services
            </p>
            <h1 className="text-4xl md:text-6xl max-w-3xl tracking-tight mb-6">
              Digital tools built around
              <br className="hidden md:block" /> what your business needs.
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed mb-8">
              From websites and online stores to connected applications and
              internal systems, we plan, design, build and support your
              solution.
            </p>
            <Link to="/contact" className="button-primary gap-2">
              Discuss your project <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <nav
              aria-label="Find a service"
              className="flex flex-wrap gap-2 mt-12"
            >
              {services.map((service) => (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="text-sm border border-white/15 rounded-full px-4 py-2 hover:border-purple-400 hover:text-white"
                >
                  {service.title}
                </a>
              ))}
            </nav>
          </div>
        </section>
        <div className="container-narrow">
          {services.map((service, index) => {
            const projects = allProjects.filter((project) =>
              service.projectIds.includes(project.id),
            );
            return (
              <section
                id={service.slug}
                key={service.slug}
                className="scroll-mt-28 py-12 md:py-16 border-b border-white/10 grid md:grid-cols-2 gap-8 md:gap-16"
                aria-labelledby={`${service.slug}-heading`}
              >
                <div>
                  <p className="text-xs text-purple-300 font-mono mb-4">
                    {String(index + 1).padStart(2, "0")} / SERVICE
                  </p>
                  <h2
                    id={`${service.slug}-heading`}
                    className="text-3xl md:text-4xl tracking-tight mb-4"
                  >
                    {service.title}
                  </h2>
                  <p className="leading-relaxed mb-5">{service.summary}</p>
                  <h3 className="text-sm mb-2">Who it’s for</h3>
                  <p className="text-sm leading-relaxed mb-5">
                    {service.audience}
                  </p>
                  <h3 className="text-sm mb-2">How it helps</h3>
                  <p className="text-sm leading-relaxed">{service.outcome}</p>
                </div>
                <div className="surface-card p-6 md:p-8 self-start">
                  <h3 className="text-lg mb-5">What we deliver</h3>
                  <ul className="space-y-4 mb-6">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <Check
                          size={18}
                          className="text-purple-300 shrink-0"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {projects.length > 0 && (
                    <div className="border-t border-white/10 pt-5 mb-6">
                      <h3 className="text-sm mb-3">Related work</h3>
                      <ul className="space-y-2">
                        {projects.map((project) => (
                          <li key={project.id}>
                            <Link
                              className="text-sm text-purple-300 hover:underline"
                              to={`/portfolio#${project.id}`}
                            >
                              {project.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Link
                    className="button-secondary gap-2"
                    to={`/services/${service.slug}`}
                  >
                    Full service overview{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </section>
            );
          })}
          <section className="py-16 md:py-24" aria-labelledby="process-heading">
            <h2 id="process-heading" className="text-3xl md:text-4xl mb-8">
              A clear path from idea to launch.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverySteps.map((step, i) => (
                <div
                  key={step.title}
                  className="border-t border-purple-400/40 pt-5"
                >
                  <p className="text-purple-300 text-xs mb-3">0{i + 1}</p>
                  <h3 className="text-lg mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link className="button-primary" to="/contact">
                Start a Project
              </Link>
              <Link className="text-purple-300 hover:underline" to="/pricing">
                View pricing and engagement terms
              </Link>
            </div>
          </section>
        </div>
      </div>
      </PageShell>
    </>
  );
}
