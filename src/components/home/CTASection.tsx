import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";

export default function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-primary py-24 px-4" ref={ref}>
      <div className="container-narrow text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-section text-primary-foreground mb-4"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-subtitle text-primary-foreground/80 font-normal mb-10"
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
            className="inline-block bg-primary-foreground text-primary px-12 py-5 rounded-md text-lg font-semibold hover:shadow-xl transition-shadow duration-300"
          >
            Get Started
          </Link>
          <a href="tel:0838947546" className="text-body text-primary-foreground underline-offset-4 hover:underline">
            Or call us at 083 894 7546
          </a>
        </motion.div>
      </div>
    </section>
  );
}
