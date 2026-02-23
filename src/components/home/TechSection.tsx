import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const techs = ["React", "Vue.js", "Node.js", "Flutter", "Python", "PostgreSQL", "AWS", "Google Cloud", "MongoDB", "Docker", "Kubernetes", "GitHub"];

export default function TechSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-[#000000] border-t border-white/5" ref={ref}>
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
              className="flex items-center justify-center h-16 rounded-lg border border-white/[0.07] bg-[#0F0F0F] hover:border-[#0047BB]/60 hover:bg-[#111111] transition-all duration-200 cursor-default"
            >
              <span className="text-sm font-semibold text-[#9CA3AF]">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
