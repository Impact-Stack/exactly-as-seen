import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";

export default function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-[#0B1120] via-primary/20 to-[#080D1A]" ref={ref}>
      {/* Diagonal overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />

      <div className="container-narrow text-center relative z-10">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-section font-display mb-4 heading-gradient">
          Ready to Modernize How Your Organization Delivers?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground font-normal mb-10 max-w-2xl mx-auto">
          Tell us your goals. We'll map a practical path forward — at no cost.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link to="/contact" className="inline-block bg-white text-[#080D1A] px-12 py-5 rounded-lg text-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg shadow-white/10">
            Book Free Consultation
          </Link>
          <Link to="/portfolio" className="inline-block border border-white/20 text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
            View Case Studies
          </Link>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }} className="text-white/50 text-sm">
          Trusted by education, enterprise, and public sector organizations across South Africa
        </motion.p>
      </div>
    </section>
  );
}
