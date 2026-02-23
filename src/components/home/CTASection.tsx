import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";

export default function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 px-4 bg-[#0A0A0A] border-t border-[#0047BB]" ref={ref}>
      <div className="container-narrow text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-section font-display mb-4 text-white">
          Ready to transform how your organization operates?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-subtitle text-[#6B7280] font-normal mb-10">
          Tell us your goals, current challenges, and timeline. We will map a practical implementation path.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center justify-center bg-[#0047BB] text-white px-10 py-4 rounded-lg text-base font-semibold hover:bg-[#003494] transition-colors">
            Book a Consultation
          </Link>
          <Link to="/portfolio" className="inline-flex items-center justify-center border border-white/20 text-white px-10 py-4 rounded-lg text-base font-semibold hover:border-white/50 hover:bg-white/5 transition-all">
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
