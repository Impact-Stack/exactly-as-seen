import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import { Monitor, Smartphone, Lock, Building2 } from "lucide-react";

const solutions = [
  {
    icon: Monitor,
    title: "Enterprise Web Applications",
    desc: "Scalable platforms for internal operations, customer workflows, and service delivery.",
    price: "From R50,000",
    link: "/services/web",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    desc: "Cross-platform mobile products optimized for adoption and operational reliability.",
    price: "From R80,000",
    link: "/services/mobile",
  },
  {
    icon: Lock,
    title: "Security and Compliance",
    desc: "POPIA-aligned implementation, secure architecture, and practical risk reduction.",
    price: "From R100,000",
    link: "/services/security",
  },
  {
    icon: Building2,
    title: "Government Service Modernization",
    desc: "Digital service systems built for public-sector delivery and accountability.",
    price: "Custom Scope",
    link: "/services/government",
  },
];

export default function SolutionsOverview() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-section font-display mb-4">
            Solutions Built For Operational Impact
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
            >
              <Link to={s.link} className="block glass rounded-xl p-8 card-hover bg-card">
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-card-title mb-3">{s.title}</h3>
                <p className="text-body text-muted-foreground mb-4">{s.desc}</p>
                <p className="text-small font-bold text-success">{s.price}</p>
                <span className="text-primary text-sm font-semibold mt-3 inline-block">Explore -&gt;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
