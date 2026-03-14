import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Link } from "react-router-dom";
import { event as trackEvent } from "@/lib/analytics";
import { industriesData } from "@/lib/industries";
import { Button, Card, CardContent, Chip, Stack } from "@mui/material";

export default function IndustriesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="industries" className="section-padding bg-[#0A0A0A] border-t border-white/5" ref={ref}>
      <div className="container-narrow">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-section font-display mb-4 text-white"
          >
            Industry Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#B5B7C6] max-w-3xl mx-auto"
          >
            Delivery experience aligned to the operational realities of South African public and private-sector teams.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {industriesData.map((industry, index) => (
            <motion.article
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
              className="h-full"
            >
              <Card className="surface-card h-full card-hover">
                <CardContent className="p-6">
                  <div className="icon-shell w-12 h-12 mb-4">
                    <industry.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-subtitle text-white mb-2">{industry.title}</h3>
                  <p className="text-body text-[#B5B7C6] mb-4">{industry.description}</p>
                  <p className="text-xs text-[#A1A1B5] mb-4">{industry.evidence}</p>
                  <Stack direction="row" flexWrap="wrap" gap={1} className="mb-4">
                    <Chip label={industry.projectType} size="small" variant="outlined" sx={{ borderColor: "rgba(139,92,246,0.35)", color: "#C4B5FD" }} />
                  </Stack>
                  <Button
                    component={Link}
                    to={`/contact?projectType=${encodeURIComponent(industry.projectType)}&source=industries`}
                    onClick={() =>
                      trackEvent({
                        action: "industry_cta_click",
                        category: "Industries",
                        label: industry.title,
                      })
                    }
                    variant="text"
                    color="secondary"
                    sx={{ color: "#C4B5FD", paddingLeft: 0 }}
                  >
                    Discuss your needs →
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

