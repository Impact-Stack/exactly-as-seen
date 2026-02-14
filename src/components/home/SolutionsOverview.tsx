import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import { Monitor, Smartphone, Lock, Building2 } from "lucide-react";

const solutions = [
  { icon: Monitor, title: "Enterprise Web Applications", desc: "Scalable web platforms built with React, Vue.js, and Node.js", price: "From R50,000", link: "/services/web" },
  { icon: Smartphone, title: "Mobile Solutions", desc: "Cross-platform apps delivering native performance on iOS and Android", price: "From R80,000", link: "/services/mobile" },
  { icon: Lock, title: "Security & Compliance", desc: "POPIA-compliant systems and Google-certified cybersecurity implementation", price: "From R100,000", link: "/services/security" },
  { icon: Building2, title: "Government Services", desc: "Digital transformation for public sector organizations", price: "Custom Pricing", link: "/services/government", priceGray: true },
];

export default function SolutionsOverview() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-section font-display mb-4"
          >
            Solutions That Drive Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Comprehensive technology services for modern businesses
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <Link
                to={s.link}
                className="block glass rounded-xl p-8 card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-card-title mb-3">{s.title}</h3>
                <p className="text-body text-muted-foreground mb-4">{s.desc}</p>
                <p className={`text-small font-bold ${s.priceGray ? "text-muted-foreground" : "text-success"}`}>{s.price}</p>
                <span className="text-primary text-sm font-medium mt-3 inline-block group-hover:translate-x-1 transition-transform duration-300">
                  Explore →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
