import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const techs = ["React", "Vue.js", "Node.js", "Flutter", "Python", "PostgreSQL", "AWS", "Google Cloud", "MongoDB", "Docker", "Kubernetes", "GitHub"];

export default function TechSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-[#0A0A0A]" ref={ref}>
      <div className="container-narrow">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-section font-display text-center mb-12 text-white">
          Core Technology Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.04 }}
              className="flex items-center justify-center h-16 rounded-lg border border-white/10 bg-white/5 hover:border-blue-500/40 hover:bg-blue-500/5 transition-colors cursor-default"
            >
              <span className="text-sm font-semibold text-slate-400">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
