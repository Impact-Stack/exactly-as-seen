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
    title: "Real-Time Attendance Tracking",
    desc: "NFC attendance system serving 50+ daily users with stable uptime and faster admin cycles.",
    stats: "100% accuracy | 90% time savings | 6 months live",
  },
  {
    image: caseHr,
    tag: "ENTERPRISE SOFTWARE",
    title: "Digital HR Transformation",
    desc: "Integrated HR system reducing manual administration and improving internal process visibility.",
    stats: "70% admin reduction | faster approvals | secure records",
  },
  {
    image: caseEcom,
    tag: "E-COMMERCE",
    title: "Online Revenue Enablement",
    desc: "E-commerce platform with order and inventory controls to support growth operations.",
    stats: "200+ first-month orders | 30% revenue growth",
  },
];

export default function CaseStudies() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-[#000000] border-t border-white/5" ref={ref}>
      <div className="container-narrow">
        <div className="mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-section font-display mb-4 text-white">
            Selected Case Studies
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-lg text-[#9CA3AF]">
            Delivery outcomes from client implementations across multiple sectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cases.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
              className="glass overflow-hidden card-hover"
            >
              <img src={item.image} alt={item.title} className="w-full h-52 object-cover" loading="lazy" />
              <div className="p-6">
                <span className="tag-label mb-3">{item.tag}</span>
                <h3 className="text-subtitle text-white mb-2">{item.title}</h3>
                <p className="text-body text-[#9CA3AF] mb-4 line-clamp-2">{item.desc}</p>
                <p className="text-small text-[#0047BB] font-semibold">{item.stats}</p>
                <Link to="/portfolio" className="text-[#0047BB] text-sm font-semibold mt-3 inline-block">
                  Read case study -&gt;
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio" className="inline-block border border-white/20 bg-transparent text-white px-8 py-4 rounded-lg text-body font-semibold hover:border-white/50 hover:bg-white/5 transition-all">
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
}
