import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const focusAreas = ["Enterprise Software Delivery", "Cloud and Security", "Digital Service Modernization"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-700/25 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="tag-label text-accent mb-4"
            >
              TRUSTED ENTERPRISE TECHNOLOGY PARTNER
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-hero font-display mb-6 heading-gradient"
            >
              Enterprise Technology Execution
              <span className="text-primary block">Built For Real-World Operations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              ImpactStack Africa delivers secure, scalable software and digital solutions for business and public sector
              teams. We combine modern engineering with practical implementation discipline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors btn-primary-glow"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center border border-white/[0.08] bg-white/[0.04] text-foreground px-8 py-4 rounded-lg text-body font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Case Studies
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground"
            >
              {["No obligation", "Response within 24hrs", "South African owned"].map((item, i) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                  {item}
                  {i < 2 && <span className="ml-3 text-white/20">·</span>}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass p-6 md:p-8"
          >
            <h2 className="text-subtitle text-foreground mb-4">Priority Solution Areas</h2>
            <ul className="space-y-3 mb-6">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Projects Delivered", value: "20+" },
                { label: "Avg Delivery Cycle", value: "8-12w" },
                { label: "Sectors Served", value: "6" },
              ].map((metric) => (
                <div key={metric.label} className="rounded-lg bg-white/[0.04] border border-white/[0.08] p-3 text-center">
                  <p className="text-xl font-bold text-primary">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
