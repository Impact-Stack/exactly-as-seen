import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import {
  Layers,
  Cloud,
  Monitor,
  Wrench,
  BarChart3,
  ShieldCheck,
  Cpu,
  Wifi,
  Users,
  Smartphone,
  Landmark,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SolutionCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  link: string;
}

const solutions: SolutionCard[] = [
  {
    icon: Layers,
    title: "Digital Transformation",
    desc: "Digital transformation programs for Cape Town and South African organizations modernizing service delivery.",
    link: "/services/web",
  },
  {
    icon: Cloud,
    title: "Cloud and Infrastructure",
    desc: "Cloud and infrastructure implementation focused on resilient enterprise software operations in South Africa.",
    link: "/services/web",
  },
  {
    icon: Monitor,
    title: "Enterprise Web Applications",
    desc: "Custom enterprise software platforms designed for secure scale, integrations, and measurable outcomes.",
    link: "/services/web",
  },
  {
    icon: Wrench,
    title: "Managed Services",
    desc: "Managed support and maintenance services that protect uptime and delivery continuity for business-critical systems.",
    link: "/services/web",
  },
  {
    icon: BarChart3,
    title: "Analytics and Data Platforms",
    desc: "Data platforms and analytics pipelines that improve reporting, forecasting, and operational intelligence.",
    link: "/services/web",
  },
  {
    icon: ShieldCheck,
    title: "Security and Compliance",
    desc: "POPIA compliance services with security hardening for authentication, data handling, and governance controls.",
    link: "/services/security",
  },
  {
    icon: Cpu,
    title: "Devices",
    desc: "End-user device strategy, rollout, and lifecycle management aligned with secure enterprise operations.",
    link: "/services/web",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    desc: "Connectivity and networking capabilities that keep distributed teams and branch operations reliably online.",
    link: "/services/web",
  },
  {
    icon: Users,
    title: "HR and Payroll",
    desc: "HR and payroll software workflows with dependable reporting and integration-ready data structures.",
    link: "/services/web",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    desc: "Cross-platform iOS and Android mobile solutions built for speed, quality, and long-term support.",
    link: "/services/mobile",
  },
  {
    icon: Landmark,
    title: "Government Services",
    desc: "Government digital services designed around procurement realities, compliance needs, and public-sector mandates.",
    link: "/services/government",
  },
];

export default function SolutionsOverview() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-[#0A0A0A] border-t border-white/5" ref={ref}>
      <div className="container-narrow">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-section font-display mb-4 text-white"
          >
            What We Deliver
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#6B7280]"
          >
            Enterprise software, POPIA compliance, and government digital services delivered from Cape Town for clients
            across South Africa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {solutions.map((solution, i) => (
            <motion.article
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.04 }}
              className="h-full"
            >
              <Link
                to={solution.link}
                className="group flex flex-col h-full bg-[#0F0F0F] border border-white/[0.07] rounded-xl p-6 card-hover"
                aria-label={`Explore ${solution.title} service details`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="icon-shell w-11 h-11 shrink-0">
                    <solution.icon className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#0047BB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-sm text-[#9CA3AF] mb-5">{solution.desc}</p>
                <span className="mt-auto text-sm font-semibold text-[#0047BB]">Explore service</span>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 p-5 rounded-xl bg-[#0F0F0F] border border-white/[0.07] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
        >
          <p className="text-sm text-[#9CA3AF]">
            Need clear budget guidance? See starting prices for our four flagship services, with final commercial terms
            scoped to your requirements.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[#0047BB] px-4 py-2.5 rounded-md hover:bg-[#003494] transition-colors"
          >
            View Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
