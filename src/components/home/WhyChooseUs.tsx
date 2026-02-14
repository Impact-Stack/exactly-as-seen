import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Building2, Clock3, ShieldCheck, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const differentiators = [
  {
    icon: Building2,
    title: "Enterprise Operating Mindset",
    text: "Structured delivery discipline with architecture, governance, and documentation built into execution.",
  },
  {
    icon: Clock3,
    title: "Faster Time To Value",
    text: "Lean decision cycles and focused scope management to move from plan to production quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Security Embedded By Default",
    text: "Security controls and compliance-aware engineering integrated from day one, not added late.",
  },
  {
    icon: TrendingUp,
    title: "Business-Centered Outcomes",
    text: "Delivery aligned to operational priorities, measurable outcomes, and stakeholder expectations.",
  },
];

export default function WhyChooseUs() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="tag-label text-primary mb-3">
            WHY IMPACTSTACK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-section font-display mb-4"
          >
            Built To Feel Like A Trusted Enterprise Partner
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Corporate-grade delivery quality with direct, agile collaboration and practical execution speed.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {differentiators.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.25 + i * 0.08 }}
              className="glass rounded-xl p-7 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-subtitle mb-2">{item.title}</h3>
              <p className="text-body text-muted-foreground">{item.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services/web"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg text-body font-semibold hover:bg-primary-dark transition-colors"
          >
            Explore Delivery Capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
