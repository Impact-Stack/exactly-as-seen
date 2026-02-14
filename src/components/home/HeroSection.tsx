import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const focusAreas = ["Enterprise Software Delivery", "Cloud and Security", "Digital Service Modernization"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[920px] h-[520px] bg-gradient-to-b from-primary/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="tag-label text-primary mb-4"
            >
              SOUTH AFRICAN DIGITAL DELIVERY PARTNER
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-hero font-display mb-6"
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
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-body font-semibold hover:bg-primary-dark transition-colors"
              >
                Start A Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center border border-border bg-card text-foreground px-8 py-4 rounded-lg text-body font-semibold hover:bg-secondary transition-colors"
              >
                Explore Case Studies
              </Link>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-subtitle mb-4">Priority Solution Areas</h2>
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
                <div key={metric.label} className="rounded-lg border border-border bg-secondary p-3 text-center">
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
