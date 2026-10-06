import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { getServiceBySlug, deliverySteps } from "@/lib/services";
import { allProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/site";
import NotFound from "./NotFound";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);
  if (!service) return <NotFound />;
  const projects = allProjects.filter((project) =>
    service.projectIds.includes(project.id),
  );
  return (
    <>
      <SEO
        title={`${service.title} | ImpactStack Africa`}
        description={service.summary}
        url={absoluteUrl(`/services/${service.slug}`)}
      />
      <PageShell>
        <div className="restored-content restored-servicepage">
        <div className="container-narrow py-12 md:py-20">
          <Link
            to="/services"
            className="inline-flex gap-2 items-center text-sm text-purple-300 mb-10"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            All services
          </Link>
          <p className="text-xs uppercase tracking-[0.25em] text-purple-300 mb-4">
            ImpactStack services
          </p>
          <h1 className="text-4xl md:text-6xl max-w-3xl tracking-tight mb-6">
            {service.title}
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mb-12">
            {service.summary}
          </p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl mb-3">Who it’s for</h2>
                <p className="leading-relaxed">{service.audience}</p>
              </div>
              <div>
                <h2 className="text-2xl mb-3">What it helps you achieve</h2>
                <p className="leading-relaxed">{service.outcome}</p>
              </div>
              {projects.length > 0 && (
                <div>
                  <h2 className="text-2xl mb-4">Related case studies</h2>
                  <ul className="space-y-3">
                    {projects.map((project) => (
                      <li key={project.id}>
                        <Link
                          to={`/portfolio#${project.id}`}
                          className="text-purple-300 hover:underline"
                        >
                          {project.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="surface-card p-6 md:p-8 self-start">
              <h2 className="text-2xl mb-6">Typical deliverables</h2>
              <ul className="space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check
                      size={20}
                      className="text-purple-300 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 mt-8 pt-6">
                {service.priceStart ? (
                  <p className="text-lg text-white mb-2">
                    From {service.priceStart} excl. VAT
                  </p>
                ) : (
                  <p className="text-lg text-white mb-2">
                    Scoped to your requirements
                  </p>
                )}
                <p className="text-sm leading-relaxed mb-6">
                  We agree the scope, deliverables and quote before work begins.
                </p>
                <Link
                  to={`/contact?${new URLSearchParams({ projectInterest: service.title, source: "service" })}`}
                  className="button-primary gap-2"
                >
                  Discuss this service{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <section className="border-t border-white/10 pt-12">
            <h2 className="text-3xl mb-8">How we work</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverySteps.map((step) => (
                <div key={step.title}>
                  <h3 className="text-lg mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm mt-8">
              Existing engagement terms: 50% deposit at kickoff and 50% at
              handover; quotes valid for seven days. Post-launch support is
              scoped separately.
            </p>
          </section>
        </div>
      </div>
      </PageShell>
    </>
  );
}
