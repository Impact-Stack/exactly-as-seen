import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

const solutionPopups = [
  {
    id: "01",
    label: "[CORE_ENTITY]",
    title: "Enterprise Software Delivery",
    text: "Neural nodes processing real-time data streams.",
    pos: "top-[30%] right-[12%] xl:right-[18%]",
    linePath: "M 0 0 L -50 50 L -110 50",
    delay: 1.5,
  },
  {
    id: "02",
    label: "[CONNECTIVITY]",
    title: "Cloud and Security",
    text: "Low-latency regional transmission across clusters.",
    pos: "top-[55%] right-[10%] xl:right-[16%]",
    linePath: "M 0 0 L -40 -40 L -90 -40",
    delay: 2.2,
  },
  {
    id: "03",
    label: "[ANALYTICS]",
    title: "Digital Driven Modernization",
    text: "Predictive modeling for sovereign growth scales.",
    pos: "bottom-[35%] left-[12%] xl:left-[18%]",
    linePath: "M 240 24 L 290 24 L 340 70",
    delay: 2.8,
  },
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

const MotionLink = motion(Link);

export default function HeroSection() {
  return (
    // KEY FIX 1: h-screen instead of min-h-screen gives the section a fixed,
    // known height so absolute bottom-10 calculates correctly.
    // KEY FIX 2: removed overflow-hidden — it was clipping the bottom metrics.
    <section className="relative h-screen flex items-center bg-[#020204] text-white">

      {/* 1. BACKGROUND & ORB */}
      {/* overflow-hidden moved here so it only clips the background layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,700px)] aspect-square z-[1]"
          style={{
            maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain mix-blend-screen opacity-90 scale-110"
          >
            <source src="/orb.mp4" type="video/mp4" />
          </video>
        </div>

        {/* 2. EXTRACTION ANIMATION */}
        {solutionPopups.map((item) => {
          // Determine if this is a left-side popup based on the 'pos' string
          const isLeft = item.pos.includes("left-");

          return (
            <div key={item.id} className={`absolute z-[10] ${item.pos} hidden lg:block`}>
              <div className="relative">
                <svg className="absolute top-0 left-0 overflow-visible pointer-events-none">
                  <motion.path
                    d={item.linePath}
                    fill="transparent"
                    stroke="rgba(99, 102, 241, 0.5)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      delay: item.delay,
                      duration: 3,
                      times: [0, 0.2, 0.8, 1],
                      ease: "easeInOut",
                    }}
                  />
                </svg>

                <motion.div
                  initial={{
                    opacity: 0,
                    // Slide from left if isLeft, otherwise slide from right
                    x: isLeft ? -40 : 40,
                    clipPath: isLeft ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)"
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    clipPath: "inset(0 0 0 0%)"
                  }}
                  transition={{
                    delay: item.delay + 0.5,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  // If it's on the left, change the border to the right side: border-r
                  className={`relative bg-black/40 backdrop-blur-md p-4 min-w-[240px] ${isLeft ? "border-r border-indigo-500/50" : "border-l border-indigo-500/50"
                    }`}
                >
                  <div className={`flex items-center gap-2 mb-2 ${isLeft ? "flex-row-reverse" : ""}`}>
                    <div className="w-1 h-1 bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
                    <p className="text-[10px] font-mono text-indigo-400 uppercase">{item.label}</p>
                  </div>
                  <h4 className={`text-xs font-bold text-white mb-1 uppercase ${isLeft ? "text-right" : ""}`}>
                    {item.title}
                  </h4>
                  <p className={`text-[10px] text-gray-500 leading-tight font-light ${isLeft ? "text-right" : ""}`}>
                    {item.text}
                  </p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. CORE BRANDING */}
      <div className="relative z-20 w-full pl-6 md:pl-10 xl:pl-16">
        <div className="max-w-4xl">
          <h1
            className="text-7xl md:text-[4.5rem] xl:text-[4.5rem] font-medium tracking-tighter leading-[1.08]"
            style={{ marginTop: "clamp(-400px, -42vh, -100px)" }}
          >
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
          <div style={{ overflow: 'hidden' }}>
            <MotionLink
              to="/portfolio"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
                delay: 0.6 // Slightly staggered after the text
              }}
              className="button-secondary px-10 py-4 text-base inline-block border border-gray-500 rounded hover:border-white transition-colors mt-2"
            >
              View Our Work
            </MotionLink>
          </div>
        </div>
      </div>

      {/* 4. METRICS — sits at the bottom of the full h-screen section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-10 2xl:bottom-24 left-6 md:left-10 xl:left-16 2xl:left-20 z-20 grid grid-cols-3 gap-12 2xl:gap-20 border-t border-white/5 pt-6 w-fit"
      >
        <div>
          <p className="text-3xl font-light tracking-tighter text-white">20+</p>
          <p className="text-[9px] uppercase tracking-widest text-gray-500 leading-tight mt-1">
            Projects <span className="block">Delivered</span>
          </p>
        </div>
        <div>
          <p className="text-3xl font-light tracking-tighter text-white">8-12w</p>
          <p className="text-[9px] uppercase tracking-widest text-gray-500 leading-tight mt-1">
            Avg Delivery <span className="block">Cycle</span>
          </p>
        </div>
        <div>
          <p className="text-3xl font-light tracking-tighter text-white">6</p>
          <p className="text-[9px] uppercase tracking-widest text-gray-500 leading-tight mt-1">
            Sectors <span className="block">Served</span>
          </p>
        </div>
      </motion.div>

    </section>
  );
}