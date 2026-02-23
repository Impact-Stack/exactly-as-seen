import { useInView, useCountUp } from "@/hooks/use-in-view";
import { motion } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Daily Active Users Supported" },
  { value: 8, suffix: " weeks", label: "Average Delivery Cycle" },
  { value: 6, suffix: "", label: "Industries Served" },
  { value: 15, suffix: "+", label: "Jobs Created Pipeline (2026)" },
];

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 2000, start);
  return (
    <div className="text-center rounded-xl bg-[#0F0F0F] border border-white/[0.07] p-6">
      <p className="text-hero font-display text-[#0047BB]">
        {count}{suffix}
      </p>
      <p className="text-sm text-[#6B7280] mt-2">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section className="section-padding bg-[#000000] border-t border-white/5" ref={ref}>
      <div className="container-narrow">
        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center text-section font-display mb-12 text-white">
          Delivery Metrics
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} start={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
