import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import { event as trackEvent } from "@/lib/analytics";
import { Button } from "@mui/material";

export default function SpeakToExpertCTA() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 px-4 bg-[#05050A] border-t border-white/5" ref={ref}>
      <div className="container-narrow">
        <div className="surface-card p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-section font-display text-white mb-3"
            >
              Speak to a Delivery Expert
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-body text-[#B5B7C6] max-w-2xl"
            >
              Tell us about your objectives and constraints. We will map the fastest, most reliable delivery path with a
              clear proposal and timeline.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              component={Link}
              to="/contact?source=speak_to_expert"
              onClick={() =>
                trackEvent({
                  action: "cta_click",
                  category: "Speak To Expert",
                  label: "primary_cta",
                })
              }
              variant="contained"
              color="primary"
              className="button-primary px-8 py-3 text-sm"
            >
              Book a Consultation
            </Button>
            <Button
              component={Link}
              to="/pricing"
              onClick={() =>
                trackEvent({
                  action: "cta_click",
                  category: "Speak To Expert",
                  label: "pricing_cta",
                })
              }
              variant="outlined"
              color="secondary"
              className="button-secondary px-8 py-3 text-sm"
            >
              View Pricing
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

