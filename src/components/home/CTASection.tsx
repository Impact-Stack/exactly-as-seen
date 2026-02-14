import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";

export default function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-background" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-accent/8" />

      <div className="container-narrow text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-section font-display mb-4"
        >
          Ready To Modernize Your Digital Delivery?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-subtitle text-muted-foreground font-normal mb-10"
        >
          Tell us your goals, current challenges, and timeline. We will map a practical implementation path.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-12 py-5 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Request A Consultation
          </Link>
          <a href="tel:+27838947546" className="text-body text-muted-foreground underline-offset-4 hover:underline hover:text-foreground transition-colors">
            Or call +27 83 894 7546
          </a>
        </motion.div>
      </div>
    </section>
  );
}
