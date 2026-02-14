import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import caseNfc from "@/assets/case-nfc.jpg";
import caseHr from "@/assets/case-hr.jpg";
import caseEcom from "@/assets/case-ecommerce.jpg";

const cases = [
  {
    image: caseNfc,
    tag: "EDUCATION TECHNOLOGY",
    tagColor: "bg-success",
    title: "Real-Time Attendance Tracking",
    desc: "Deployed NFC-based system serving 50+ daily users with zero downtime since September 2025",
    stats: "100% Accuracy | 90% Time Savings | 6 Months Live",
  },
  {
    image: caseHr,
    tag: "ENTERPRISE SOFTWARE",
    tagColor: "bg-primary",
    title: "Digital HR Transformation",
    desc: "End-to-end HR management platform reducing administrative time by 70%",
    stats: "50% Query Reduction | Automated Compliance | 10 Weeks",
  },
  {
    image: caseEcom,
    tag: "E-COMMERCE",
    tagColor: "bg-accent",
    title: "Online Revenue Growth",
    desc: "Full-featured e-commerce platform driving 30% revenue increase in first quarter",
    stats: "200+ Orders Month 1 | 30% Revenue Increase | 8 Weeks",
  },
];

export default function CaseStudies() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="container-narrow">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-section mb-4"
          >
            Delivering Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Proven solutions for diverse clients
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="bg-background rounded-lg overflow-hidden card-hover border border-border"
            >
              <div className="relative overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-52 object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <span className={`inline-block ${c.tagColor} text-primary-foreground text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-sm mb-3`}>
                  {c.tag}
                </span>
                <h3 className="text-subtitle mb-2">{c.title}</h3>
                <p className="text-body text-muted-foreground mb-4 line-clamp-2">{c.desc}</p>
                <p className="text-small text-primary font-medium">{c.stats}</p>
                <Link to="/portfolio" className="text-primary text-body font-medium mt-3 inline-block hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-md text-body font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
}
