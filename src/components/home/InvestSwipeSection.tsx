import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import investswipeMockup from "@/assets/investswipe-mockup.png";
import { Button, Card, CardContent, Chip } from "@mui/material";

// Explicitly defining the feature set to ensure type safety in the map
const features: string[] = [
  "Accessible starting investment",
  "Short-form education content",
  "Simple swipe interaction model",
  "Community learning features"
];

export default function InvestSwipeSection(): React.JSX.Element {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding overflow-hidden relative" ref={ref}>
      {/* Background Layers matching the new site aesthetic */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 scale-110 pointer-events-none"
        style={{ backgroundImage: `url('/pink-glow.gif')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-black/90 backdrop-blur-3xl" />

      <div className="container-narrow relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.5 }}
          >
            <Chip 
              label="FINTECH PRODUCT | TARGET Q3 2026" 
              size="small" 
              variant="outlined" 
              sx={{ 
                borderColor: "rgba(139,92,246,0.35)", 
                color: "#C4B5FD", 
                mb: 3, 
                letterSpacing: "0.12em",
                fontWeight: 700 
              }} 
            />
            <h2 className="text-section font-display mb-2 text-white">InvestSwipe</h2>
            <p className="text-card-title text-[#B5B7C6] font-normal mb-6">
              Accessible investing for emerging markets.
            </p>
            <p className="text-body text-[#B5B7C6] mb-8 max-w-[500px]">
              A mobile-first investment platform designed for entry-level investors with guided onboarding and simple portfolio actions.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((f: string) => (
                <li key={f} className="flex items-center gap-3 text-body text-[#B5B7C6]">
                  <span className="w-2 h-2 bg-[#A78BFA] rounded-full" /> {f}
                </li>
              ))}
            </ul>
            <Button 
              component={Link} 
              to="/investswipe" 
              variant="contained" 
              color="primary" 
              className="button-primary px-8 py-4 text-body"
            >
              Join Waitlist
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            className="flex justify-center"
          >
            <Card className="surface-card">
              <CardContent className="p-6">
                <img 
                  src={investswipeMockup} 
                  alt="InvestSwipe mobile app" 
                  className="relative z-10 max-w-[320px] w-full" 
                  loading="lazy" 
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}