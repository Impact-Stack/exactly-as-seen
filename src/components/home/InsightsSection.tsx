import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import blogFlutter from "@/assets/blog-flutter.jpg";
import blogPopia from "@/assets/blog-popia.jpg";
import blogGovt from "@/assets/blog-govt.jpg";
import { Link } from "react-router-dom";

const posts = [
  { image: blogFlutter, tag: "DEVELOPMENT", title: "Why Flutter Is Expanding Mobile Delivery Across Africa", date: "15 Feb 2026 | 5 min read" },
  { image: blogPopia, tag: "COMPLIANCE", title: "POPIA Compliance Priorities For South African Businesses", date: "10 Feb 2026 | 7 min read" },
  { image: blogGovt, tag: "TRANSFORMATION", title: "Digital Service Opportunities For Public Sector Teams", date: "5 Feb 2026 | 6 min read" },
];

export default function InsightsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <div className="mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-section font-display mb-4 heading-gradient">Latest Insights</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground">
            Practical perspectives on technology strategy and delivery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }} className="glass overflow-hidden card-hover">
              <img src={p.image} alt={p.title} className="w-full h-52 object-cover" loading="lazy" />
              <div className="p-6">
                <span className="inline-block text-primary text-[11px] uppercase tracking-wider font-semibold mb-3">{p.tag}</span>
                <h3 className="text-subtitle text-foreground mb-2">{p.title}</h3>
                <p className="text-small text-muted-foreground mb-3">{p.date}</p>
                <Link to="/insights" className="text-small text-primary font-semibold hover:text-accent transition-colors">Read More →</Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center flex flex-col items-center gap-3">
          <Link to="/insights" className="inline-block border border-white/[0.08] text-foreground bg-white/[0.04] px-8 py-4 rounded-lg text-body font-semibold hover:bg-white/10 transition-colors">
            View All Insights
          </Link>
          <Link to="/contact" className="text-accent text-sm font-semibold hover:text-accent/80 transition-colors">
            Want expert advice tailored to your organization? Book a consultation →
          </Link>
        </div>
      </div>
    </section>
  );
}
