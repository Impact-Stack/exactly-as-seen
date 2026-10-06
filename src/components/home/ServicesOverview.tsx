import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Layers,
  Smartphone,
  ShieldCheck,
  Globe,
  Workflow,
  BarChart3,
  ShoppingBag,
  CalendarDays,
  PenTool,
  Users,
  Cloud,
  Wrench,
  Lightbulb,
  Cpu,
  Network,
} from "lucide-react";
import { services } from "@/lib/services";

const icons = [
  Globe,
  Code2,
  ShoppingBag,
  CalendarDays,
  BarChart3,
  Workflow,
  Smartphone,
  PenTool,
  Users,
  ShieldCheck,
  Layers,
  Cloud,
  Wrench,
  Lightbulb,
  Cpu,
  Network,
];
export default function ServicesOverview() {
  return (
    <section
      className="section-padding border-t border-white/10 bg-[#05050A]"
      aria-labelledby="services-heading"
    >
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-purple-300 mb-4">
              What we do
            </p>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl tracking-tight mb-4"
            >
              From your first website
              <br className="hidden sm:block" /> to your next business system.
            </h2>
            <p className="leading-relaxed">
              Explore our services. We help you define the brief, build the
              solution and support it after launch.
            </p>
          </div>
          <Link
            to="/services"
            className="button-secondary shrink-0 gap-2 self-start"
          >
            All services <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group surface-card card-hover p-6 flex flex-col min-h-[240px]"
              >
                <div className="flex justify-between items-center mb-6">
                  <Icon
                    className="text-purple-300"
                    size={26}
                    aria-hidden="true"
                  />
                  <ArrowUpRight
                    size={18}
                    className="text-[#a1a1b5] group-hover:text-purple-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed mb-5">
                  {service.summary}
                </p>
                <span className="text-sm text-purple-300 mt-auto">
                  Explore service
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
