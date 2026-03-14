import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import investswipeMockup from "@/assets/investswipe-mockup.png";
import { Button, Card, CardContent, Chip } from "@mui/material";

export default function InvestSwipeSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-[#05050A] border-t border-white/5 overflow-hidden relative" ref={ref}>
      <div className="pointer-events-none absolute -top-24 left-10 h-[320px] w-[320px] rounded-full glow-orb blur-[140px] opacity-60" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[360px] w-[360px] rounded-full glow-orb blur-[160px] opacity-60" />
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
            <Chip label="FINTECH PRODUCT | TARGET Q3 2026" size="small" variant="outlined" sx={{ borderColor: "rgba(139,92,246,0.35)", color: "#C4B5FD", mb: 3, letterSpacing: "0.12em" }} />
            <h2 className="text-section font-display mb-2 text-white">InvestSwipe</h2>
            <p className="text-card-title text-[#B5B7C6] font-normal mb-6">Accessible investing for emerging markets.</p>
            <p className="text-body text-[#B5B7C6] mb-8 max-w-[500px]">
              A mobile-first investment platform designed for entry-level investors with guided onboarding and simple portfolio actions.
            </p>
            <ul className="space-y-3 mb-8">
              {["Accessible starting investment", "Short-form education content", "Simple swipe interaction model", "Community learning features"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-body text-[#B5B7C6]">
                  <span className="w-2 h-2 bg-[#A78BFA] rounded-full" /> {f}
                </li>
              ))}
            </ul>
            <Button component={Link} to="/investswipe" variant="contained" color="primary" className="button-primary px-8 py-4 text-body">
              Join Waitlist
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="flex justify-center">
            <Card className="surface-card">
              <CardContent className="p-6">
                <img src={investswipeMockup} alt="InvestSwipe mobile app" className="relative z-10 max-w-[320px] w-full" loading="lazy" />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

