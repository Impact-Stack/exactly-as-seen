import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import { Layers, Cloud, Monitor, Wrench, BarChart3, ShieldCheck, Cpu, Wifi, Users, Smartphone, Landmark } from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "Digital Transformation",
    desc: "Modern operating models for enterprise service delivery.",
    link: "/services/web",
  },
  {
    icon: Cloud,
    title: "Cloud and Infrastructure",
    desc: "Reliable cloud-first foundations for scale and resilience.",
    link: "/services/web",
  },
  {
    icon: Monitor,
    title: "Enterprise Web Applications",
    desc: "Scalable by design",
    link: "/services/web",
  },
  {
    icon: Wrench,
    title: "Managed Services",
    desc: "Ongoing support, maintenance, and delivery continuity.",
    link: "/services/web",
  },
  {
    icon: BarChart3,
    title: "Analytics and Data Platforms",
    desc: "Operational intelligence from structured data pipelines.",
    link: "/services/web",
  },
  {
    icon: ShieldCheck,
    title: "Security and Compliance",
    desc: "POPIA-ready architecture",
    link: "/services/security",
  },
  {
    icon: Cpu,
    title: "Devices",
    desc: "End-user device strategy, rollout, and lifecycle management.",
    link: "/services/web",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    desc: "Network capabilities that keep distributed teams connected.",
    link: "/services/web",
  },
  {
    icon: Users,
    title: "HR and Payroll",
    desc: "People systems with reliable workflows and reporting.",
    link: "/services/web",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    desc: "iOS and Android, one codebase",
    link: "/services/mobile",
  },
  {
    icon: Landmark,
    title: "Government Services",
    desc: "Built for public sector mandates",
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
            End-to-end technology solutions for enterprise and public sector.
          </motion.p>
        </div>

        <div className="space-y-3">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.04 }}
            >
              <Link
                to={s.link}
                className="block border-l-2 border-[#0047BB] bg-[#0F0F0F] border border-white/[0.07] rounded-xl p-5 hover:bg-[#111111] transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="icon-shell w-11 h-11 shrink-0">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div className="md:flex-1">
                    <h3 className="text-base font-semibold text-white mb-1">{s.title}</h3>
                    <p className="text-sm text-[#9CA3AF]">{s.desc}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#0047BB] md:text-right">Explore -&gt;</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
