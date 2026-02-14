import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const certs = [
  { logo: "🔵", name: "Google Cybersecurity", sub: "Professional Certificate" },
  { logo: "🔴", name: "CISCO Cybersecurity", sub: "Introduction Certification" },
  { logo: "🟢", name: "Central Supplier Database", sub: "Registration Pending" },
];

export default function CertificationsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 bg-muted" ref={ref}>
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-section text-center mb-12"
        >
          Certified & Recognized
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{c.logo}</div>
              <p className="text-body font-bold">{c.name}</p>
              <p className="text-small text-muted-foreground">{c.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
