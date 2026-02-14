import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Zap, Shield, TrendingUp } from "lucide-react";

const values = [
  { icon: Zap, title: "Rapid Delivery", text: "8-week average project completion" },
  { icon: Shield, title: "Security First", text: "Google Cybersecurity certified team" },
  { icon: TrendingUp, title: "Impact Driven", text: "Every project creates employment" },
];

export default function ValueProposition() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-subtitle mb-2">{item.title}</h3>
              <p className="text-body text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
