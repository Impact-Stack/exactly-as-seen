import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { ShieldCheck, Gauge, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const valueProps = [
  {
    icon: ShieldCheck,
    title: "Enterprise Assurance",
    text: "Security-first delivery standards aligned to modern compliance expectations.",
  },
  {
    icon: Gauge,
    title: "Execution Velocity",
    text: "Lean engineering and delivery governance that keeps projects moving.",
  },
  {
    icon: Handshake,
    title: "Outcome Partnership",
    text: "Direct collaboration with stakeholders from discovery to go-live support.",
  },
];

export default function ValueProposition() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group glass p-7 card-hover"
            >
              <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-subtitle text-foreground mb-2">{item.title}</h3>
              <p className="text-body text-muted-foreground mb-3">{item.text}</p>
              <Link to="/contact" className="text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn how →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
