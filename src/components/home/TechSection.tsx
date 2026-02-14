import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const techs = [
  "React", "Vue.js", "Node.js", "Flutter", "Python", "PostgreSQL",
  "AWS", "Google Cloud", "MongoDB", "Docker", "Kubernetes", "GitHub",
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
          Technologies We Work With
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center h-20 glass rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              <span className="text-small font-semibold text-muted-foreground">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
