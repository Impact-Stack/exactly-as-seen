import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary-dark/70" />

      <div className="relative z-10 text-center px-4 max-w-[800px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="tag-label text-primary-foreground tracking-[2px] mb-6"
        >
          YOUTH-LED TECHNOLOGY SOLUTIONS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-hero text-primary-foreground mb-6"
        >
          Transforming Ideas Into
          <br />
          Digital Reality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-subtitle text-primary-foreground/90 font-normal max-w-[700px] mx-auto mb-10"
        >
          Enterprise software development and innovative fintech solutions
          <br className="hidden md:block" />
          built by Cape Town's next generation of tech leaders
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/services/web"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-body font-semibold hover:bg-primary-dark transition-colors duration-300"
          >
            Explore Solutions
          </Link>
          <Link
            to="/portfolio"
            className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-md text-body font-semibold hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-down">
        <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
      </div>
    </section>
  );
}
