import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdArrowForward, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { industriesData } from "@/lib/industries";

// ─── HELPERS ────────────────────────────────────────────────────────────────

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ─── CARD ────────────────────────────────────────────────────────────────────

function IndustryCard({
  industry,
  num,
  isActive,
  onInteraction,
}: {
  industry: (typeof industriesData)[number];
  num: string;
  isActive: boolean;
  onInteraction: () => void;
}) {
  const Icon = industry.icon;
  const slug = slugify(industry.title);

  return (
    <motion.div
      onClick={onInteraction}
      onMouseEnter={onInteraction}
      className={`relative border-white/5 cursor-pointer overflow-hidden flex flex-col transition-all duration-500 bg-[#0A0A10]
        ${isActive ? "min-h-[450px] md:h-full" : "min-h-[100px] md:h-full"}
        w-full md:w-[300px] md:flex-1 md:border-r md:min-w-[280px] border-b md:border-b-0`}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(138,43,226,0.2)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-purple-900/10" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
        <div>
          <div className="mb-6 md:mb-12 flex justify-between items-start md:block">
            <div>
              <span
                className={`block font-mono text-[11px] tracking-[0.3em] mb-3 transition-colors duration-500 ${isActive ? "text-white" : "text-white/20"}`}
              >
                {num}
              </span>
              <div
                className={`h-[1px] w-12 transition-all duration-500 ${isActive ? "bg-purple-500 w-16" : "bg-white/10"}`}
              />
            </div>

            {/* Mobile icon */}
            <div
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center md:mb-16 transition-all duration-700 md:hidden flex ${isActive ? "border-purple-400 bg-purple-500/20 text-white" : "border-white/10 text-white/20"}`}
            >
              <Icon size={20} />
            </div>
          </div>

          {/* Desktop icon */}
          <div
            className={`w-16 h-16 rounded-full border md:flex items-center justify-center mb-16 transition-all duration-700 hidden ${isActive ? "border-purple-400 bg-purple-500/20 text-white shadow-[0_0_30px_rgba(138,43,226,0.4)]" : "border-white/10 text-white/20"}`}
          >
            <Icon size={26} />
          </div>

          <h3
            className={`font-bold leading-tight tracking-tight transition-all duration-700 ${isActive ? "text-2xl md:text-3xl text-white" : "text-lg md:text-xl text-white/40"}`}
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {industry.title}
          </h3>
        </div>

        <div className="md:h-[240px] flex flex-col justify-end mt-6 md:mt-0">
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                key="active-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="space-y-6 md:space-y-8"
              >
                <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
                  {industry.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                    <span className="text-purple-500 text-lg">/</span>
                    {industry.evidence}
                  </div>
                </div>
                <Link
                  to={`/industries/${slug}`}
                  className="inline-flex items-center gap-6 text-[10px] font-bold tracking-[0.3em] text-white border border-purple-500/50 bg-purple-900/20 px-8 py-4 rounded-sm uppercase group hover:bg-purple-600 transition-all"
                >
                  EXPLORE SECTOR <MdArrowForward />
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="inactive-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-4 text-white/20"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  {industry.projectType}
                </span>
                <MdArrowForward size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

export default function SolutionsOverview() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [offset, setOffset] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const CARD_WIDTH = 300;
  const visibleInTrack = 4;
  const maxOffset = Math.max(0, industriesData.length - visibleInTrack);

  return (
    <section
      ref={ref}
      className="bg-[#05050A] py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h4 className="text-purple-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">
              Our Expertise
            </h4>
            <h2
              className="text-white text-4xl md:text-7xl font-bold tracking-tighter mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Industry Focus.
            </h2>
            <Link
              to="/industries"
              className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.25em] text-purple-400 border border-purple-500/30 bg-purple-500/5 px-6 py-3 rounded-sm uppercase hover:bg-purple-600 hover:text-white transition-all"
            >
              Explore All Industries <MdArrowForward size={14} />
            </Link>
          </div>

          <p className="text-white/40 max-w-sm text-sm leading-relaxed border-l border-white/10 pl-6 hidden md:block">
            From government procurement to retail commerce, we build solutions
            tuned to the regulatory and operational realities of each sector.
          </p>
        </motion.div>

        {/* Main Interface */}
        <div
          className="relative border border-white/5 rounded-[30px] md:rounded-[40px] overflow-hidden bg-[#08080c] flex flex-col md:flex-row h-auto md:h-[720px] shadow-2xl"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {/* Sidebar */}
          <div className="w-full md:w-[300px] flex-shrink-0 border-b md:border-b-0 md:border-r border-white/5 p-8 md:p-12 flex md:flex-col justify-between items-center md:items-start bg-[#08080c] z-30">
            <div>
              <div className="w-12 h-[1px] bg-purple-600 mb-6 hidden md:block" />
              <h3
                className="text-3xl md:text-5xl font-bold text-white leading-tight md:leading-[0.9] tracking-tighter"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Sector
                <br className="hidden md:block" /> Catalog
              </h3>
            </div>

            <div className="hidden md:flex gap-4">
              <button
                onClick={() => setOffset((o) => Math.max(0, o - 1))}
                disabled={offset === 0}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white disabled:opacity-10 transition-colors"
              >
                <MdChevronLeft size={28} />
              </button>
              <button
                onClick={() => setOffset((o) => Math.min(o + 1, maxOffset))}
                disabled={offset >= maxOffset}
                className="w-14 h-14 rounded-full border border-purple-500 bg-purple-500/5 flex items-center justify-center text-purple-500 disabled:opacity-10 transition-colors"
              >
                <MdChevronRight size={28} />
              </button>
            </div>
          </div>

          {/* Track */}
          <div className="flex-1 overflow-hidden relative bg-[#05050A]">
            <motion.div
              animate={{
                x:
                  typeof window !== "undefined" && window.innerWidth > 768
                    ? -(offset * CARD_WIDTH)
                    : 0,
              }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="flex flex-col md:flex-row h-full"
            >
              {industriesData.map((industry, idx) => (
                <div
                  key={industry.title}
                  className="flex-shrink-0 w-full md:w-[300px] h-full"
                >
                  <IndustryCard
                    industry={industry}
                    num={String(idx + 1).padStart(2, "0")}
                    isActive={activeIndex === idx}
                    onInteraction={() =>
                      setActiveIndex(activeIndex === idx ? null : idx)
                    }
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