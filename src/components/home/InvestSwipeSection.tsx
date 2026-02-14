import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import investswipeMockup from "@/assets/investswipe-mockup.png";

export default function InvestSwipeSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-gradient-to-br from-primary-dark to-primary overflow-hidden" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-success text-success-foreground text-label px-3 py-1.5 rounded-sm mb-6">
              COMING Q3 2026
            </span>
            <h2 className="text-section text-primary-foreground mb-2">InvestSwipe</h2>
            <p className="text-card-title text-primary-foreground/80 font-light mb-6">
              Democratizing Wealth Creation
            </p>
            <p className="text-body text-primary-foreground/80 mb-8 max-w-[500px]">
              A revolutionary mobile platform making investing accessible to 18 million young South Africans through an intuitive swipe-based interface
            </p>
            <ul className="space-y-3 mb-8">
              {["R10 minimum investment", "60-second education videos", "Tinder-style swipe interface", "Social trading features"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-body text-primary-foreground/90">
                  <span className="text-success">•</span> {f}
                </li>
              ))}
            </ul>
            <Link
              to="/investswipe"
              className="inline-block border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-md text-body font-semibold hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              Join Waitlist
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
              <img
                src={investswipeMockup}
                alt="InvestSwipe mobile app"
                className="relative z-10 max-w-[320px] w-full drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
