import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { industriesData } from "@/lib/industries";
import { Button } from "@mui/material";
import { MdArrowForward } from "react-icons/md";

export default function IndustriesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="industries"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden min-h-screen"
    >
      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Base GIF */}
        <motion.div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "url('/bg.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glow layer */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            backgroundImage: "url('/bg.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(30px)",
            transform: "scale(1.1)",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#05050A]/70" />
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-purple-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4"
          >
            Vertical Expertise
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Industry Focus.
          </motion.h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((industry, index) => (
            <motion.article
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-[28px] p-8 h-[260px] flex flex-col justify-center items-center text-center overflow-hidden transition-all duration-500 hover:scale-[1.03]"
            >
              {/* Glass Base */}
              <div className="absolute inset-0 rounded-[28px] backdrop-blur-[30px] bg-black/40 border border-white/10" />

              {/* Soft inner light */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30" />

              {/* Glow */}
              <div className="absolute inset-0 rounded-[28px] opacity-40 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.25),transparent_60%)]" />

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-60 transition duration-500 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.35),transparent_60%)]" />

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10">
                  <industry.icon className="w-6 h-6 text-white/80" />
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-sm tracking-wide">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-xs max-w-[220px] leading-relaxed">
                  {industry.description}
                </p>

                {/* CTA */}
                <Button
                  component={Link}
                  to={`/contact?projectType=${encodeURIComponent(
                    industry.projectType
                  )}`}
                  variant="text"
                  sx={{
                    color: "#a78bfa",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    mt: 1,
                    "&:hover": {
                      color: "#c4b5fd",
                      backgroundColor: "transparent",
                    },
                  }}
                  endIcon={<MdArrowForward />}
                >
                  Explore
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}