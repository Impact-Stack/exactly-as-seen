import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Card, CardContent } from "@mui/material";

const focusAreas = ["Enterprise Software Delivery", "Cloud and Security", "Digital Service Modernization"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28 bg-[#05050A] border-b border-white/5">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full glow-orb blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[420px] w-[420px] rounded-full glow-orb blur-[140px] opacity-70" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#C4B5FD] bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse" />
              South African Digital Delivery Partner
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-hero font-display mb-6 text-white"
            >
              Powering Enterprise-Grade Delivery Across South Africa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#B5B7C6] mb-8 max-w-2xl"
            >
              ImpactStack Africa delivers secure software, mobile platforms, and public-sector systems with a practical, accountable delivery model. Built for real-world operations, not slide decks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-4"
            >
              <Button component={Link} to="/contact" variant="contained" color="primary" className="button-primary px-10 py-4 text-base">
                Book a Consultation
              </Button>
              <Button component={Link} to="/portfolio" variant="outlined" color="secondary" className="button-secondary px-10 py-4 text-base">
                View Our Work
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-[#9CA3AF] text-sm"
            >
              No obligation <span className="px-2">&middot;</span> Reply within 24hrs <span className="px-2">&middot;</span> SA owned and operated
            </motion.p>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <Card className="surface-card">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-subtitle text-white mb-4">Priority Solution Areas</h2>
                <ul className="space-y-3 mb-6">
                  {focusAreas.map((area) => (
                    <li key={area} className="text-[#B5B7C6] flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#A78BFA]" />
                      {area}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Projects Delivered", value: "20+" },
                    { label: "Avg Delivery Cycle", value: "8-12w" },
                    { label: "Sectors Served", value: "6" },
                  ].map((metric) => (
                    <div key={metric.label} className="rounded-xl bg-[#11111A] border border-white/10 p-3 text-center">
                      <p className="text-xl font-bold text-[#C4B5FD]">{metric.value}</p>
                      <p className="text-xs text-[#A1A1B5]">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

