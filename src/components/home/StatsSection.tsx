import { useInView, useCountUp } from "@/hooks/use-in-view";
import { motion } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "DAILY USERS" },
  { value: 3, suffix: "", label: "APPS LIVE" },
  { value: 8, suffix: " Weeks", label: "AVG DELIVERY" },
  { value: 15, suffix: "", label: "JOBS 2026" },
];

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="text-center">
      <p className="text-hero font-display text-primary">
        {count}{suffix}
      </p>
      <p className="tag-label text-muted-foreground tracking-[1px] mt-2">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section className="bg-card border-y border-border section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center text-card-title text-foreground/60 font-light mb-12"
        >
          Proven Track Record
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} start={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
