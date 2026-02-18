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
  Bot,
} from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "Digital Transformation",
    desc: "Meet the needs of current and future customers by integrating processes, systems and people.",
    link: "/services/web",
  },
  {
    icon: Cloud,
    title: "Cloud",
    desc: "Take your business into a cloud-first future with best-of-breed cloud services and tools to reinvent infrastructure performance and availability.",
    link: "/services/web",
  },
  {
    icon: Monitor,
    title: "Applications",
    desc: "Improve and digitise your business processes and enhance productivity and efficiency with intelligent business tools.",
    link: "/services/web",
  },
  {
    icon: Wrench,
    title: "Services",
    desc: "Address a wide variety of business needs and positively impact your ways of working. Reduce costs, increase profits and improve productivity.",
    link: "/services/web",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Extract meaningful knowledge from complex data sets with analytics tools that filter, correlate and present data to create reports.",
    link: "/services/web",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Reimagine trust with an integrated approach to cybersecurity. Gain greater resilience through proactive security, compliance and continuity.",
    link: "/services/security",
  },
  {
    icon: Cpu,
    title: "Devices",
    desc: "Enable connective intelligence through IT procurement as well as hardware management and maintenance.",
    link: "/services/web",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    desc: "Stand out in a highly competitive market with an agile network. Software-defined solutions will power your applications.",
    link: "/services/web",
  },
  {
    icon: Users,
    title: "HR and Payroll",
    desc: "Cloud-based HR solutions that transform your business-critical HR operations to deliver more effective and efficient people-critical services.",
    link: "/services/web",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Cross-platform mobile solutions optimised for adoption, performance and operational reliability across iOS and Android.",
    link: "/services/mobile",
  },
  {
    icon: Bot,
    title: "AI and Automation",
    desc: "Combine human expertise with intelligent technology. Our AI and Automation suite delivers speed, precision and insight at every level.",
    link: "/services/web",
  },
];

export default function SolutionsOverview() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-[#0D0D0D]" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-section font-display mb-4"
          >
            Our Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Technology services aligned to enterprise and institutional priorities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.05 }}
            >
              <Link
                to={s.link}
                className="block glass p-6 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <span className="text-blue-400 text-sm font-semibold inline-block hover:text-blue-300 transition-colors">
                  Explore more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
