import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const focusAreas = ["Enterprise Software Delivery", "Cloud and Security", "Digital Service Modernization"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-[#000000] border-b border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-blue-700/20 blur-[160px] rounded-full" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#0047BB] bg-[#0047BB]/10 border border-[#0047BB]/20 rounded-full px-3 py-1 text-xs uppercase tracking-widest font-semibold inline-block mb-4"
            >
              South African Digital Delivery Partner
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-hero font-display mb-6 text-white"
            >
              Enterprise Technology Execution Built For Real-World Operations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-[#9CA3AF] mb-8 max-w-2xl"
            >
              ImpactStack Africa delivers secure, scalable software and digital solutions for business and public sector teams.
              We combine modern engineering with practical implementation discipline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#0047BB] text-white px-10 py-4 rounded-lg text-base font-semibold hover:bg-[#003494] transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white px-10 py-4 rounded-lg text-base font-semibold hover:border-white/50 hover:bg-white/5 transition-all"
              >
                View Our Work
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-[#6B7280] text-sm"
            >
              No obligation <span className="px-2">&middot;</span> Reply within 24hrs <span className="px-2">&middot;</span> SA owned and operated
            </motion.p>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-[#0F0F0F] border border-white/[0.08] rounded-xl p-6 md:p-8"
          >
            <h2 className="text-subtitle text-white mb-4">Priority Solution Areas</h2>
            <ul className="space-y-3 mb-6">
              {focusAreas.map((area) => (
                <li key={area} className="text-[#9CA3AF]">
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
                <div key={metric.label} className="rounded-lg bg-[#1A1A1A] border border-white/5 p-3 text-center">
                  <p className="text-xl font-bold text-[#0047BB]">{metric.value}</p>
                  <p className="text-xs text-[#6B7280]">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
