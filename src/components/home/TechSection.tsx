import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const techs = [
  "React",
  "Vue.js",
  "Node.js",
  "Flutter",
  "Python",
  "PostgreSQL",
  "AWS",
  "Google Cloud",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "GitHub",
];

export default function TechSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-section font-display text-center mb-12"
        >
          Core Technology Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.04 }}
              className="flex items-center justify-center h-16 rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default"
            >
              <span className="text-sm font-semibold text-muted-foreground">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
