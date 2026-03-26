import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MdLayers, MdCloud, MdMonitor, MdBuild, MdBarChart,
  MdVerified, MdMemory, MdWifi, MdPeople, MdPhoneAndroid,
  MdAccountBalance, MdArrowForward, MdChevronLeft, MdChevronRight,
} from "react-icons/md";
import type { IconType } from "react-icons";

// ─── 1. INTERFACE DEFINITION ────────────────────────────────────────────────
interface Solution {
  num: string;
  icon: IconType;
  title: string;
  desc: string;
  bullets: string[];
  link: string;
  cta: string;
  sub: string;
}

// ─── 2. DATA ARRAY ──────────────────────────────────────────────────────────
const solutions: Solution[] = [
  { num: "01", icon: MdLayers, title: "Digital Transformation", desc: "Modernizing service delivery through strategic roadmaps and legacy system upgrades.", bullets: ["Strategy workshops", "Legacy modernisation"], link: "/services/web", cta: "OUR APPROACH", sub: "MODERNIZE" },
  { num: "02", icon: MdCloud, title: "Cloud & Infrastructure", desc: "Resilient enterprise software operations with secure AWS and Azure migrations.", bullets: ["Cloud migrations", "Resilient architecture"], link: "/services/web", cta: "EXPLORE CLOUD", sub: "SCALABLE" },
  { num: "03", icon: MdMonitor, title: "Enterprise Web Apps", desc: "Secure platforms designed for global scale, deep integrations, and high performance.", bullets: ["Scale architecture", "Integration-ready"], link: "/services/web", cta: "SEE RESULTS", sub: "ENTERPRISE" },
  { num: "04", icon: MdBuild, title: "Managed Services", desc: "24/7 support and maintenance services to protect uptime and delivery continuity.", bullets: ["Support cycles", "Maintenance strategy"], link: "/services/web", cta: "GET SUPPORT", sub: "ALWAYS ON" },
  { num: "05", icon: MdBarChart, title: "Analytics & Data", desc: "Data platforms and pipelines that improve reporting and operational intelligence.", bullets: ["Forecasting models", "Operational intelligence"], link: "/services/web", cta: "VIEW DATA", sub: "INSIGHTS" },
  { num: "06", icon: MdVerified, title: "Security & Compliance", desc: "POPIA compliance and security hardening for sensitive enterprise data handling.", bullets: ["POPIA assessments", "Security hardening"], link: "/services/security", cta: "STAY SECURE", sub: "COMPLIANT" },
  { num: "07", icon: MdMemory, title: "Device Management", desc: "Lifecycle management for end-user devices aligned with secure enterprise operations.", bullets: ["Lifecycle management", "Hardware strategy"], link: "/services/web", cta: "MANAGE", sub: "LIFECYCLE" },
  { num: "08", icon: MdWifi, title: "Connectivity", desc: "Reliable networking capabilities to keep distributed teams and branches online.", bullets: ["Branch networking", "Reliable uptime"], link: "/services/web", cta: "CONNECT", sub: "NETWORK" },
  { num: "09", icon: MdPeople, title: "HR and Payroll", desc: "Automated payroll workflows with dependable reporting and data structures.", bullets: ["Workflow automation", "Dependable reporting"], link: "/services/web", cta: "STREAMLINE", sub: "SYSTEMS" },
  { num: "10", icon: MdPhoneAndroid, title: "Mobile Solutions", desc: "High-quality iOS and Android solutions built for speed and long-term support.", bullets: ["React Native / Flutter", "Native performance"], link: "/services/mobile", cta: "SEE MOBILE", sub: "MOBILE" },
  { num: "11", icon: MdAccountBalance, title: "Government Services", desc: "Digital services designed around procurement realities and public-sector mandates.", bullets: ["Public-sector focus", "Compliance focus"], link: "/services/government", cta: "GOV CASES", sub: "MANDATE" },
];

// ─── 3. SOLUTION CARD COMPONENT ──────────────────────────────────────────────
function SolutionCard({ 
  solution, 
  isActive, 
  onHover 
}: { 
  solution: Solution; 
  isActive: boolean; 
  onHover: () => void 
}) {
  const Icon = solution.icon;

  return (
    <motion.div
      // Removed 'layout' and 'animate={{ flex }}' to prevent expansion
      onMouseEnter={onHover}
      className="relative h-full border-r border-white/5 cursor-pointer overflow-hidden flex flex-col flex-1 min-w-[280px] bg-[#0A0A10]"
    >
      {/* ── Background Reveal Layer ── */}
      <AnimatePresence>
        {isActive && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 1.05 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            {/* Ambient Purple Glow inspired by your references */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(138,43,226,0.2)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-purple-900/10" />
            
            {/* Visual Mist Overlay (Optional: matching purple.webp) */}
            <div className="absolute top-0 right-0 w-full h-[60%] opacity-20 mix-blend-screen bg-[url('/path-to-mist.png')] bg-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 p-10 h-full flex flex-col justify-between">
        <div>
          {/* Top Indicators */}
          <div className="mb-12">
            <span className={`block font-mono text-[11px] tracking-[0.3em] mb-3 transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/20'}`}>
              {solution.num}
            </span>
            <div className={`h-[1px] w-12 transition-all duration-500 ${isActive ? 'bg-purple-500 w-16' : 'bg-white/10'}`} />
          </div>
          
          {/* Icon Circle - Matches the 'fxff.png' circular styling */}
          <div className={`w-16 h-16 rounded-full border flex items-center justify-center mb-16 transition-all duration-700 ${isActive ? 'border-purple-400 bg-purple-500/20 text-white shadow-[0_0_30px_rgba(138,43,226,0.4)]' : 'border-white/10 text-white/20'}`}>
            <Icon size={26} />
          </div>

          <h3 className={`font-bold leading-tight tracking-tight transition-all duration-700 ${isActive ? 'text-3xl text-white' : 'text-xl text-white/40'}`} style={{ fontFamily: "'Syne', sans-serif" }}>
            {solution.title}
          </h3>
        </div>

        {/* ── Content Reveal Area ── */}
        <div className="h-[240px] flex flex-col justify-end">
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div 
                key="active-content"
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 20 }} 
                className="space-y-8"
              >
                <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
                  {solution.desc}
                </p>

                {/* Slashed bullets from your 'image_228588.png' reference */}
                <div className="space-y-3">
                  {solution.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                      <span className="text-purple-500 text-lg">/</span> {bullet}
                    </div>
                  ))}
                </div>

                <Link to={solution.link} className="inline-flex items-center gap-6 text-[10px] font-bold tracking-[0.3em] text-white border border-purple-500/50 bg-purple-900/20 px-8 py-4 rounded-sm uppercase group hover:bg-purple-600 transition-all">
                  {solution.cta} <MdArrowForward className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ) : (
              <motion.div 
                key="inactive-hint"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="flex items-center gap-4 text-white/20"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase">{solution.sub}</span>
                <MdArrowForward size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

// ─── 4. MAIN CONTAINER COMPONENT ─────────────────────────────────────────────
export default function SolutionsOverview() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [offset, setOffset] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const CARD_WIDTH = 300; // Matches the min-width in your SolutionCard
  const VISIBLE_COUNT = 3; // Number of cards visible at once
  const maxOffset = solutions.length - VISIBLE_COUNT;

  const nextSlide = () => setOffset(o => Math.min(o + 1, maxOffset));
  const prevSlide = () => setOffset(o => Math.max(0, o - 1));

  return (
    <section ref={ref} className="bg-[#05050A] py-32 px-6 overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h4 className="text-purple-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">Our Expertise</h4>
            <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
              Enterprise Solutions.
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed border-l border-white/10 pl-6">
            From digital transformation to secure mobile platforms, we build the infrastructure that moves South African business forward.
          </p>
        </motion.div>

        {/* Main Interface Container */}
        <div 
          className="relative border border-white/5 rounded-[40px] overflow-hidden bg-[#08080c] flex h-[720px] shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {/* 1. Static Sidebar - Stays put while others slide */}
          <div className="w-[300px] flex-shrink-0 border-r border-white/5 p-12 flex flex-col justify-between bg-[#08080c] relative z-30">
            <div>
              <div className="w-12 h-[1px] bg-purple-600 mb-10" />
              <h3 className="text-5xl font-bold text-white leading-[0.9] tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
                Service<br />Catalog
              </h3>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={prevSlide} 
                disabled={offset === 0}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-10 transition-all active:scale-90"
              >
                <MdChevronLeft size={28} />
              </button>
              <button 
                onClick={nextSlide} 
                disabled={offset >= maxOffset}
                className="w-14 h-14 rounded-full border border-purple-500 bg-purple-500/5 flex items-center justify-center text-purple-500 hover:bg-purple-600 hover:text-white disabled:opacity-10 transition-all active:scale-90"
              >
                <MdChevronRight size={28} />
              </button>
            </div>
          </div>

          {/* 2. The Sliding Track */}
          <div className="flex-1 overflow-hidden relative bg-[#05050A]">
            <motion.div 
              animate={{ x: -(offset * CARD_WIDTH) }}
              transition={{ 
                type: "spring", 
                stiffness: 60, 
                damping: 20, 
                mass: 1 
              }}
              className="flex h-full"
            >
              {solutions.map((s, idx) => (
                <div key={s.num} className="flex-shrink-0 w-[300px] h-full">
                  <SolutionCard 
                    solution={s} 
                    isActive={activeIndex === idx}
                    onHover={() => setActiveIndex(idx)}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}