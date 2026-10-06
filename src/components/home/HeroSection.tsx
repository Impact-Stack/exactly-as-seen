import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const solutionPopups = [
  {
    id: "01",
    label: "[CORE_ENTITY]",
    title: "Websites & Web Applications",
    text: "Websites, online stores and custom applications.",
    pos: "top-[30%] right-[12%] xl:right-[18%]",
    linePath: "M 0 0 L -50 50 L -110 50",
    delay: 1.5,
  },
  {
    id: "02",
    label: "[CONNECTIVITY]",
    title: "Business Systems",
    text: "Booking platforms, dashboards and integrations.",
    pos: "top-[55%] right-[10%] xl:right-[16%]",
    linePath: "M 0 0 L -40 -40 L -90 -40",
    delay: 2.2,
  },
  {
    id: "03",
    label: "[ANALYTICS]",
    title: "Deployment & Support",
    text: "From planning and design to launch and ongoing support.",
    pos: "bottom-[35%] left-[12%] xl:left-[18%]",
    linePath: "M 240 24 L 290 24 L 340 70",
    delay: 2.8,
  },
];

const MotionLink = motion(Link);

export default function HeroSection() {

const [showVideo, setShowVideo] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setShowVideo(true), 1200);
  return () => clearTimeout(timer);
}, []);

  return (
    <section className="relative h-screen flex items-center bg-[#020204] text-white">
      {/* 1. BACKGROUND & ORB */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div
          className="absolute top-1/2 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] md:-translate-y-1/2 w-[min(90vw,700px)] aspect-square z-[1]"
          style={{
            maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle, black 30%, transparent 70%)",
          }}
        >
          {/* 🔹 LOGO PLACEHOLDER */}
          {!showVideo && (
            <img
              src="/fav-logo.webp"
              alt="Loading"
              className="w-full h-full object-contain opacity-80 scale-75 animate-pulse"
            />
          )}

          {/* 🔹 VIDEO */}
          {showVideo && (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              onLoadedData={(e) => {
                e.currentTarget.classList.remove("opacity-0");
                e.currentTarget.classList.add("opacity-90");
              }}
              className="w-full h-full object-contain mix-blend-screen opacity-0 scale-110 transition-opacity duration-700"
            >
              <source src="/orb-ultra.webm" type="video/webm" />
              <source src="/orb-compressed.mp4" type="video/mp4" />
            </video>
          )}
        </div>

        {/* 2. EXTRACTION ANIMATION — hidden on mobile */}
        {solutionPopups.map((item) => {
          const isLeft = item.pos.includes("left-");

          return (
            <div
              key={item.id}
              className={`absolute z-[10] ${item.pos} hidden lg:block`}
            >
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
                    x: isLeft ? -40 : 40,
                    clipPath: isLeft
                      ? "inset(0 100% 0 0)"
                      : "inset(0 0 0 100%)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    clipPath: "inset(0 0 0 0%)",
                  }}
                  transition={{
                    delay: item.delay + 0.5,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative bg-black/40 backdrop-blur-md p-4 min-w-[240px] ${
                    isLeft
                      ? "border-r border-indigo-500/50"
                      : "border-l border-indigo-500/50"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 mb-2 ${isLeft ? "flex-row-reverse" : ""}`}
                  >
                    <div className="w-1 h-1 bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
                    <p className="text-[10px] font-mono text-indigo-400 uppercase">
                      {item.label}
                    </p>
                  </div>
                  <h4
                    className={`text-xs font-bold text-white mb-1 uppercase ${isLeft ? "text-right" : ""}`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`text-[10px] text-gray-500 leading-tight font-light ${isLeft ? "text-right" : ""}`}
                  >
                    {item.text}
                  </p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. CORE BRANDING */}
      <div className="relative z-20 w-full px-6 md:pl-10 xl:pl-16">
        <div className="max-w-4xl">
          <h1
            className="text-4xl sm:text-5xl md:text-[4rem] xl:text-[4.5rem] font-medium tracking-tighter leading-[1.08]"
            style={{
              marginTop: "clamp(-320px, -45vh, -160px)", // stronger lift on mobile
            }}
          >
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.2, 0.65, 0.3, 0.9],
                  delay: 0.2,
                }}
                className="block italic"
              >
                Websites & web apps.
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.2, 0.65, 0.3, 0.9],
                  delay: 0.4,
                }}
                className="block text-purple-300 italic"
              >
                Built for your business.
              </motion.span>
            </div>
          </h1>
          <p className="max-w-xl text-sm md:text-base leading-relaxed text-gray-300 mt-5 mb-5">We help businesses, brands and organisations plan, design and build websites, online stores, booking platforms, dashboards and custom applications—with deployment and ongoing support.</p>
          <div className="flex flex-wrap gap-3" style={{ overflow: "hidden" }}>
            <MotionLink
              to="/contact"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
                delay: 0.6,
              }}
              className="button-secondary px-8 md:px-10 py-3 md:py-4 text-sm md:text-base inline-block border border-gray-500 rounded hover:border-white transition-colors mt-2"
            >
              Start a Project
            </MotionLink><Link to="/services" className="button-secondary px-8 py-3 mt-2">Explore Our Services</Link>
          </div>
        </div>
      </div>

      {/* 4. METRICS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-24 md:bottom-10 2xl:bottom-24 left-6 md:left-10 xl:left-16 2xl:left-20 z-20 grid grid-cols-3 gap-6 md:gap-12 2xl:gap-20 border-t border-white/5 pt-4 md:pt-6 w-fit"
      >
        {['Plan & design', 'Build & test', 'Launch & support'].map((step) => (
          <div key={step}><p className="text-xs md:text-sm uppercase tracking-widest text-purple-200">{step}</p></div>
        ))}
      </motion.div>
    </section>
  );
}
