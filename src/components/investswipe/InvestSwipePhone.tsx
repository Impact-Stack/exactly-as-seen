import { motion, useReducedMotion } from "framer-motion";

export type InvestSwipePhoneProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  delay?: number;
  float?: boolean;
};

function hasPositionClass(className: string) {
  return /(^|\s)(absolute|relative|fixed|sticky)(\s|$)/.test(className);
}

function hasBaseWidthClass(className: string) {
  return className
    .split(/\s+/)
    .some((token) => /^(w-|min-w-|max-w-)/.test(token));
}

export function InvestSwipePhone({
  src,
  alt,
  className = "",
  loading = "lazy",
  delay = 0,
  float = true,
}: InvestSwipePhoneProps) {
  const reduceMotion = useReducedMotion();
  const wrapperClassName = [
    "aspect-[430/932] shrink-0 [perspective:1600px]",
    hasPositionClass(className) ? "" : "relative",
    hasBaseWidthClass(className) ? "" : "w-[min(72vw,270px)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={wrapperClassName}
      role="img"
      aria-label={alt}
      data-model-status="static"
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={float && !reduceMotion ? { y: [0, -10, 0], rotateZ: [0, 0.35, 0] } : undefined}
        whileHover={reduceMotion ? undefined : { y: -14, rotateZ: 0, scale: 1.012 }}
        transition={{
          duration: 7.5,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-x-[8%] bottom-[1.2%] h-[13%] rounded-full bg-[#1478ff]/45 blur-2xl" />
        <div className="absolute inset-x-[18%] bottom-[-1.4%] h-[3.2%] rounded-full bg-white/18 blur-md" />
        <div className="absolute -inset-[1.3%] rounded-[52px] bg-[linear-gradient(130deg,rgba(255,255,255,0.32),rgba(33,182,255,0.08)_25%,rgba(0,0,0,0)_48%,rgba(184,243,92,0.1)_75%,rgba(255,255,255,0.24))] opacity-70 blur-[1px]" />

        <div className="absolute inset-[0.6%] rounded-[48px] bg-[linear-gradient(120deg,#f5f8ff_0%,#5b6675_7%,#090c12_24%,#121d2d_67%,#ecf5ff_100%)] p-[2px] shadow-[0_38px_82px_rgba(0,0,0,0.74),0_0_56px_rgba(20,120,255,0.24)] [transform:translateZ(18px)]">
          <div className="relative h-full w-full overflow-hidden rounded-[46px] bg-[#05070c] p-[3.45%] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18),inset_12px_0_26px_rgba(255,255,255,0.08),inset_-16px_0_30px_rgba(0,0,0,0.68)]">
            <div className="absolute inset-x-[23%] top-[1.45%] z-40 h-[3.2%] rounded-full bg-[#050505] shadow-[0_4px_16px_rgba(0,0,0,0.72),inset_0_0_0_1px_rgba(255,255,255,0.08)]">
              <div className="absolute right-[18%] top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_35%_35%,#314b86,#020305_70%)]" />
            </div>

            <img
              src={src}
              alt=""
              loading={loading}
              decoding="async"
              className="h-full w-full rounded-[34px] bg-[#06111f] object-cover shadow-[0_22px_70px_rgba(0,0,0,0.5)] ring-1 ring-white/10 saturate-[1.04] contrast-[1.03]"
            />

            <div className="pointer-events-none absolute inset-[3.45%] rounded-[34px] bg-[linear-gradient(105deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.03)_15%,transparent_42%,rgba(33,182,255,0.08)_78%,rgba(255,255,255,0.22)_100%)] mix-blend-screen" />
            <div className="pointer-events-none absolute inset-[3.45%] rounded-[34px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16),inset_0_0_30px_rgba(20,120,255,0.17)]" />
            <div className="pointer-events-none absolute inset-x-[38%] bottom-[1.8%] h-[0.7%] rounded-full bg-white/34 shadow-[0_0_14px_rgba(255,255,255,0.2)]" />

            <motion.span
              className="pointer-events-none absolute inset-y-[4%] -left-1/2 z-50 w-1/3 rotate-6 bg-gradient-to-r from-transparent via-white/22 to-transparent"
              animate={reduceMotion ? undefined : { x: ["0%", "560%"] }}
              transition={{
                duration: 3.8,
                delay: delay + 0.8,
                repeat: Infinity,
                repeatDelay: 5.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        <div className="absolute left-[-1.25%] top-[20%] h-[9%] w-[2px] rounded-full bg-white/35 shadow-[0_0_12px_rgba(255,255,255,0.2)]" />
        <div className="absolute right-[-1.15%] top-[24%] h-[15%] w-[2px] rounded-full bg-white/45 shadow-[0_0_16px_rgba(33,182,255,0.35)]" />
        <div className="absolute right-[-1%] top-[43%] h-[10%] w-[2px] rounded-full bg-white/24" />
      </motion.div>
    </div>
  );
}