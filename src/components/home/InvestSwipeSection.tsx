import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import investswipeMockup from "@/assets/investswipe-mockup.webp";
import { Button, Card, CardContent, Chip } from "@mui/material";

// Feature set aligned with InvestSwipe's core value proposition
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
      {/* Dynamic Background Layer for that deep, moody frosted look */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 scale-110 pointer-events-none"
        style={{ backgroundImage: `url('/pink-glow.gif')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-[#05050A]/95 backdrop-blur-[120px]" />

      <div className="container-narrow relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT CONTENT: Strategy and Positioning */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Chip 
              label="FINTECH PRODUCT | TARGET Q3 2026" 
              size="small" 
              variant="outlined" 
              sx={{ 
                borderColor: "rgba(167,139,250,0.3)", 
                color: "#A78BFA", 
                mb: 3, 
                px: 1,
                fontSize: '0.65rem',
                letterSpacing: "0.2em",
                fontWeight: 800,
                textTransform: 'uppercase'
              }} 
            />
            
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 text-white">
              InvestSwipe
            </h2>
            
            <p className="text-xl text-[#B5B7C6] font-medium mb-6 leading-relaxed">
              Accessible investing for emerging markets.
            </p>
            
            <p className="text-body text-[#B5B7C6]/80 mb-8 max-w-[480px] leading-relaxed">
              A mobile-first investment platform designed for entry-level investors in South Africa, 
              featuring guided onboarding and swipe-based portfolio actions.
            </p>
            
            <ul className="grid gap-4 mb-10">
              {features.map((f: string) => (
                <li key={f} className="flex items-center gap-4 text-body text-[#B5B7C6] group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)] group-hover:scale-150 transition-transform" /> 
                  {f}
                </li>
              ))}
            </ul>
            
            <Button 
              component={Link} 
              to="/investswipe" 
              variant="outlined" // Switched to outlined to better match a bordered design
              className="button-secondary px-10 py-4 rounded-full font-bold tracking-widest text-[10px] uppercase inline-block border border-gray-500 rounded hover:border-white transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ textTransform: 'none' }}
            >
              Join Waitlist
            </Button>
          </motion.div>

          {/* MOCKUP CARD: Glassmorphism Implementation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={isInView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 0.7, delay: 0.2 }} 
            className="relative flex justify-center lg:justify-end"
          >
            {/* Ambient shadow behind the card */}
            <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full scale-75 -z-10" />
            
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Card 
                sx={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '32px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                  overflow: 'hidden'
                }}
              >
                <CardContent className="p-8 flex justify-center">
                  <img 
                    src={investswipeMockup} 
                    alt="InvestSwipe mobile app" 
                    className="max-w-[280px] md:max-w-[320px] w-full h-auto drop-shadow-2xl" 
                    loading="lazy" 
                  />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}