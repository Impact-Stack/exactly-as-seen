import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { BadgeCheck, ShieldCheck, Building2 } from "lucide-react";

const certs = [
  { icon: ShieldCheck, name: "Google Cybersecurity", sub: "Professional Certificate" },
  { icon: BadgeCheck, name: "CISCO Cybersecurity", sub: "Introduction Certification" },
  { icon: Building2, name: "Central Supplier Database", sub: "Registration in progress" },
];

export default function CertificationsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 bg-[#0A0A0A]" ref={ref}>
      <div className="container-narrow">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-section font-display text-center mb-12 text-white">
          Certifications and Credentials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.article key={c.name} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.1 }} className="text-center glass p-8">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-body font-bold text-white">{c.name}</p>
              <p className="text-small text-slate-500">{c.sub}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
