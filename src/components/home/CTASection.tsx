import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";

export default function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container-narrow text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-section font-display mb-4"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-subtitle text-muted-foreground font-normal mb-10"
        >
          Let's discuss how we can help you achieve your goals
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-12 py-5 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
          >
            Get Started
          </Link>
          <a href="tel:0838947546" className="text-body text-muted-foreground underline-offset-4 hover:underline hover:text-foreground transition-colors">
            Or call us at 083 894 7546
          </a>
        </motion.div>
      </div>
    </section>
  );
}
