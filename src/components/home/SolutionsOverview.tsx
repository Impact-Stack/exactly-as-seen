import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MdLayers,
  MdCloud,
  MdMonitor,
  MdBuild,
  MdBarChart,
  MdVerified,
  MdMemory,
  MdWifi,
  MdPeople,
  MdPhoneAndroid,
  MdAccountBalance,
  MdArrowForward,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import type { IconType } from "react-icons";

// ── Configuration ──────────────────────────────────────────────────────────
const COLLAPSED_WIDTH = 220;
const EXPANDED_WIDTH = 500; 
const VIDEO_SIZE = 400;     
const VISIBLE_CONTAINER_WIDTH = 1400; 

interface SolutionCard {
  icon: IconType;
  title: string;
  desc: string;
  link: string;
}

const solutions: SolutionCard[] = [
  { icon: MdLayers, title: "Digital Transformation", desc: "Digital transformation programs for Cape Town and South African organizations modernizing service delivery.", link: "/services/web" },
  { icon: MdCloud, title: "Cloud and Infrastructure", desc: "Cloud and infrastructure implementation focused on resilient enterprise software operations in South Africa.", link: "/services/web" },
  { icon: MdMonitor, title: "Enterprise Web Applications", desc: "Custom enterprise software platforms designed for secure scale, integrations, and measurable outcomes.", link: "/services/web" },
  { icon: MdBuild, title: "Managed Services", desc: "Managed support and maintenance services that protect uptime and delivery continuity for business-critical systems.", link: "/services/web" },
  { icon: MdBarChart, title: "Analytics and Data Platforms", desc: "Data platforms and analytics pipelines that improve reporting, forecasting, and operational intelligence.", link: "/services/web" },
  { icon: MdVerified, title: "Security and Compliance", desc: "POPIA compliance services with security hardening for authentication, data handling, and governance controls.", link: "/services/security" },
  { icon: MdMemory, title: "Devices", desc: "End-user device strategy, rollout, and lifecycle management aligned with secure enterprise operations.", link: "/services/web" },
  { icon: MdWifi, title: "Connectivity", desc: "Connectivity and networking capabilities that keep distributed teams and branch operations reliably online.", link: "/services/web" },
  { icon: MdPeople, title: "HR and Payroll", desc: "HR and payroll software workflows with dependable reporting and integration-ready data structures.", link: "/services/web" },
  { icon: MdPhoneAndroid, title: "Mobile Solutions", desc: "Cross-platform iOS and Android mobile solutions built for speed, quality, and long-term support.", link: "/services/mobile" },
  { icon: MdAccountBalance, title: "Government Services", desc: "Government digital services designed around procurement realities, compliance needs, and public-sector mandates.", link: "/services/government" },
];

// ── Sub-Component: Card ─────────────────────────────────────────────────────

function ServiceCard({ solution, index }: { solution: SolutionCard; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = solution.icon;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ 
        width: isHovered ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
        backgroundColor: isHovered ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0)"
      }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="relative h-full flex-shrink-0 border-r border-white/5 cursor-pointer overflow-hidden group"
    >
      {/* Video Background - Reveals on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          >
            <div className="relative" style={{ width: VIDEO_SIZE, height: VIDEO_SIZE }}>
              <video
                src="/card.mp4"
                autoPlay loop muted playsInline
                className="w-full h-full object-contain mix-blend-screen opacity-60"
              />
              <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full -z-10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 p-10 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase">
              {String(index + 1).padStart(2, '0')}
            </span>
            <motion.div 
              animate={{ 
                width: isHovered ? 40 : 15, 
                backgroundColor: isHovered ? "#e8253a" : "rgba(255,255,255,0.1)" 
              }}
              className="h-[1px]" 
            />
          </div>

          <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-8 transition-all duration-500
            ${isHovered ? 'border-[#e8253a]/50 bg-[#e8253a]/10 text-[#e8253a]' : 'border-white/5 bg-white/5 text-white/20 group-hover:text-white/40'}`}>
            <Icon className="text-2xl" />
          </div>

          <h3 className={`text-2xl font-bold leading-tight transition-all duration-500
            ${isHovered ? 'text-white' : 'text-white/20'}`}>
            {solution.title}
          </h3>
        </div>

        <div className="min-h-[140px] flex flex-col justify-end">
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-[320px]">
                  {solution.desc}
                </p>
                <Link to={solution.link} className="inline-flex items-center gap-3 text-[11px] font-black tracking-widest text-white bg-[#e8253a] px-8 py-4 rounded-full uppercase hover:scale-105 transition-all shadow-lg shadow-[#e8253a]/20">
                  LEARN MORE <MdArrowForward className="text-lg" />
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="summary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 group-hover:translate-x-1 transition-transform"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                  EXPLORE
                </span>
                <MdArrowForward className="text-[#e8253a] text-xs" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export default function SolutionsOverview() {
  const [scrollX, setScrollX] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1 });

  // Calculate the maximum allowed scroll to prevent empty space at the end
  const maxScroll = useMemo(() => {
    // Total width is (N-1) collapsed cards + 1 expanded card (if hovered)
    // To be safe, we calculate based on the layout width
    const totalContentWidth = (solutions.length * COLLAPSED_WIDTH);
    const overflow = totalContentWidth - VISIBLE_CONTAINER_WIDTH + (EXPANDED_WIDTH - COLLAPSED_WIDTH);
    return overflow > 0 ? -overflow : 0;
  }, []);

  const nextSlide = () => setScrollX(prev => Math.max(maxScroll, prev - COLLAPSED_WIDTH));
  const prevSlide = () => setScrollX(prev => Math.min(0, prev + COLLAPSED_WIDTH));

  return (
    <section ref={ref} className="bg-[#05050A] py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-5xl font-extrabold text-white tracking-tighter mb-4">Our Expertise</h2>
            <p className="text-white/40 max-w-lg">
              Enterprise software and digital infrastructure designed for the South African landscape.
            </p>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={prevSlide} 
              disabled={scrollX >= 0}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-10 transition-all"
            >
              <MdChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide} 
              disabled={scrollX <= maxScroll}
              className="w-12 h-12 rounded-full bg-[#e8253a] flex items-center justify-center text-white hover:scale-105 disabled:opacity-10 transition-all shadow-lg shadow-red-600/20"
            >
              <MdChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative border border-white/5 rounded-2xl overflow-hidden bg-[#08080c] shadow-2xl">
          <motion.div 
            animate={{ x: scrollX }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
            className="flex h-[650px]"
          >
            {solutions.map((s, i) => (
              <ServiceCard key={s.title} solution={s} index={i} />
            ))}
          </motion.div>

          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e8253a]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}