import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Button } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";

const solutionPopups = [
  {
    id: "01",
    label: "[CORE_ENTITY]",
    title: "Enterprise Software Delivery",
    text: "Neural nodes processing real-time data streams.",
    // Changed top-[20%] to top-[12%] to move it higher
    pos: "top-[12%] right-[15%]",
    linePath: "M 0 0 L -50 50 L -110 50",
    delay: 1.5
  },
  {
    id: "02",
    label: "[CONNECTIVITY]",
    title: "Cloud and Security",
    text: "Low-latency regional transmission across clusters.",
    // Changed bottom-[25%] to bottom-[35%] to move it higher
    pos: "bottom-[55%] right-[10%]",
    linePath: "M 0 0 L -40 -40 L -90 -40",
    delay: 2.2
  }
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020204] text-white">

      {/* 1. BACKGROUND & ORB */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[850px] aspect-square z-[1]"
          style={{
            maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
          }}
        >
          <video autoPlay loop muted playsInline className="w-full h-full object-contain mix-blend-screen opacity-90 scale-110">
            <source src="/orb.mp4" type="video/mp4" />
          </video>
        </div>

        {/* 2. EXTRACTION ANIMATION */}
        {solutionPopups.map((item) => (
          <div key={item.id} className={`absolute z-[10] ${item.pos} hidden lg:block`}>
            <div className="relative">

              {/* Connector Line - Draws out, then retracts back to 0 */}
              <svg className="absolute top-0 left-0 overflow-visible pointer-events-none">
                <motion.path
                  d={item.linePath}
                  fill="transparent"
                  stroke="rgba(99, 102, 241, 0.5)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 1, 0], // Draw out, Hold, Retract
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    delay: item.delay,
                    duration: 3,
                    times: [0, 0.2, 0.8, 1], // Timing of the sequence
                    ease: "easeInOut"
                  }}
                />
              </svg>

              {/* Data Box - Slides in and STAYS */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                  clipPath: "inset(0 0 0 100%)"
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  clipPath: "inset(0 0 0 0%)"
                }}
                transition={{
                  delay: item.delay + 0.5, // Appears while line is fully extended
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative bg-black/40 backdrop-blur-md p-4 border-l border-indigo-500/50 min-w-[240px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-1 bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
                  <p className="text-[10px] font-mono text-indigo-400 uppercase">{item.label}</p>
                </div>
                <h4 className="text-xs font-bold text-white mb-1 uppercase">{item.title}</h4>
                <p className="text-[10px] text-gray-500 leading-tight font-light">{item.text}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. CORE BRANDING & CTA */}
      {/* Removed 'container' and 'mx-auto' to allow left-alignment */}
      <div className="relative z-20 w-full pl-6 md:pl-5">
        <div className="max-w-4xl">
          {/* <motion.div initial="hidden" animate="visible" variants={reveal} custom={0} className="flex items-center gap-4 mb-10">
            <span className="text-[10px] uppercase tracking-[0.5em] text-indigo-400 font-bold">ZA Sovereign Studio</span>
            <div className="h-[1px] bg-indigo-500/20 w-16" />
          </motion.div> */}

          {/* Added -mt-20 to pull the heading significantly higher */}
          <h1 className="text-7xl md:text-[4.5rem] font-medium tracking-tighter leading-[1.08] mb-12 -mt-[35vh]">
            {/* Row 1: Empowering SA. */}
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.2 }}
                className="block italic"
              >
                Empowering SA.
              </motion.span>
            </div>

            {/* Row 2: Tech Enterprises. */}
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay: 0.4 }}
                className="block text-gray-700 italic"
              >
                Powering Tech.
              </motion.span>
            </div>
          </h1>

          {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12">
            <Link to="/portfolio" className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-all">
              Our Work <ArrowOutward sx={{ fontSize: 18 }} />
            </Link>
          </div> */}
        </div>

        {/* 4. METRICS SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          /* 1. Removed pt-10 (padding-top) so the text sits closer to the border.
             2. bottom-0 puts it at the very edge. 
             3. Added pb-4 (padding-bottom) if you want a tiny safety gap, 
                otherwise use pb-0 for a hard edge.
          */
          className="absolute -bottom-24 right-10 grid grid-cols-3 gap-12 border-t border-white/5 pt-4 pb-2 w-full lg:max-w-[400px]"
        >
          <div className="text-right">
            <p className="text-3xl font-light tracking-tighter text-white">20+</p>
            <p className="text-[9px] uppercase tracking-widest text-gray-500 leading-tight">Projects <span className="block">Delivered</span></p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-light tracking-tighter text-white">8-12w</p>
            <p className="text-[9px] uppercase tracking-widest text-gray-500 leading-tight">Avg Delivery <span className="block">Cycle</span></p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-light tracking-tighter text-white">6</p>
            <p className="text-[9px] uppercase tracking-widest text-gray-500 leading-tight">Sectors <span className="block">Served</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}