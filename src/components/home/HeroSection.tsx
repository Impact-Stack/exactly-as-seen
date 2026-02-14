import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 text-center px-4 max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-small text-muted-foreground font-medium">Youth-Led Technology Solutions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-hero font-display text-foreground mb-6"
        >
          Transforming Ideas Into
          <br />
          <span className="text-primary">Digital Reality</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-muted-foreground font-normal max-w-[650px] mx-auto mb-10 leading-relaxed"
        >
          Enterprise software development and innovative fintech solutions
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
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-body font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Explore Solutions
          </Link>
          <Link
            to="/portfolio"
            className="border border-border text-foreground px-8 py-4 rounded-lg text-body font-semibold hover:bg-card transition-all duration-300"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-down">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
