import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import investswipeMockup from "@/assets/investswipe-mockup.png";

export default function InvestSwipeSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-[#0A0A0A] border-t border-white/5 overflow-hidden" ref={ref}>
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <span className="tag-label mb-6">
              FINTECH PRODUCT | TARGET Q3 2026
            </span>
            <h2 className="text-section font-display mb-2 text-white">InvestSwipe</h2>
            <p className="text-card-title text-[#9CA3AF] font-normal mb-6">Accessible investing for emerging markets.</p>
            <p className="text-body text-[#9CA3AF] mb-8 max-w-[500px]">
              A mobile-first investment platform designed for entry-level investors with guided onboarding and simple portfolio actions.
            </p>
            <ul className="space-y-3 mb-8">
              {["Accessible starting investment", "Short-form education content", "Simple swipe interaction model", "Community learning features"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-body text-[#9CA3AF]">
                  <span className="w-1.5 h-1.5 bg-[#0047BB] rounded-full" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/investswipe" className="inline-block bg-[#0047BB] text-white px-8 py-4 rounded-lg text-body font-semibold hover:bg-[#003494] transition-colors">
              Join Waitlist
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="flex justify-center">
            <div className="relative">
              <img src={investswipeMockup} alt="InvestSwipe mobile app" className="relative z-10 max-w-[320px] w-full" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
