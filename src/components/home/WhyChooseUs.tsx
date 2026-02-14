import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Check, DollarSign, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  { icon: Check, title: "Enterprise-Grade Solutions", text: "Same technology stack as BCX/Accenture. React, Node.js, Flutter, AWS. Production-proven code.", highlight: false },
  { icon: DollarSign, title: "60% More Affordable", text: "R150,000 avg MVP vs R400,000+ from competitors. Lower overhead = better value for you.", highlight: true },
  { icon: Zap, title: "3x Faster Delivery", text: "8-week average vs 6-month industry standard. Modern stack. Agile methodology. No bureaucracy.", highlight: false },
];

export default function WhyChooseUs() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="container-narrow">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="tag-label text-success mb-3"
          >
            OUR ADVANTAGE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-section mb-4"
          >
            Enterprise Quality. Startup Pricing.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We deliver BCX-level quality at 40-60% lower cost. No compromise on excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className={`bg-background rounded-lg p-10 card-hover ${card.highlight ? "border-2 border-primary" : "border border-border"}`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${card.highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"}`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-card-title mb-3">{card.title}</h3>
              <p className="text-body text-muted-foreground">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services/web"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md text-body font-semibold hover:bg-primary-dark transition-colors duration-300"
          >
            See Our Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
