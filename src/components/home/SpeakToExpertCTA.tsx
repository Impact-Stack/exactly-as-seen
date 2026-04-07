import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import { event as trackEvent } from "@/lib/analytics";
import { Button } from "@mui/material";

export default function SpeakToExpertCTA() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-32 px-4 overflow-hidden" ref={ref}>
      {/* Background Glow Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 scale-110 pointer-events-none"
        style={{ backgroundImage: `url('/pink-glow.gif')` }}
      />
      <div className="absolute inset-0 z-10 bg-black/80 backdrop-blur-3xl" />

      <div className="container-narrow relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-md p-10 md:p-20"
        >
          {/* Subtle Accent Light */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C4B5FD]/10 blur-[100px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="max-w-2xl text-left">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                className="text-[10px] uppercase tracking-[0.5em] font-black text-[#C4B5FD] mb-6"
              >
                Let's Build
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8 leading-[1.1]"
              >
                Speak to a <br />
                <span className="text-white/30">Delivery Expert</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/60 font-medium leading-relaxed"
              >
                Tell us about your objectives and constraints. We will map the fastest, 
                most reliable delivery path with a clear proposal and timeline.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 shrink-0"
            >
              <Button
                component={Link}
                to="/contact?source=speak_to_expert"
                onClick={() =>
                  trackEvent({
                    action: "cta_click",
                    category: "Speak To Expert",
                    label: "primary_cta",
                  })
                }
                sx={{
                  bgcolor: "white",
                  color: "black",
                  px: 6,
                  py: 2.5,
                  borderRadius: "50px",
                  fontWeight: 900,
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.9)",
                    transform: "scale(1.05)",
                  },
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              >
                Get Started
              </Button>

              <Button
                component={Link}
                to="/pricing"
                onClick={() =>
                  trackEvent({
                    action: "cta_click",
                    category: "Speak To Expert",
                    label: "pricing_cta",
                  })
                }
                sx={{
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "white",
                  px: 6,
                  py: 2.5,
                  borderRadius: "50px",
                  fontWeight: 900,
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                View Pricing
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}