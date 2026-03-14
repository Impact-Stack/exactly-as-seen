import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Accordion as MuiAccordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md";

const faqs = [
  {
    question: "How fast can we start a project?",
    answer:
      "Discovery can begin within 1-2 weeks, depending on stakeholder availability. We share a scoped proposal and timeline within 48 hours after discovery.",
  },
  {
    question: "Do you support government procurement requirements?",
    answer:
      "Yes. We are CIPC-registered, CSD-listed, SARS tax compliant, and EME B-BBEE compliant with 80/20 preference-point eligibility.",
  },
  {
    question: "What is your typical delivery model?",
    answer:
      "We run discovery, align scope and risks, then deliver in structured increments with transparent reporting and measurable milestones.",
  },
  {
    question: "Can you work with existing systems and vendors?",
    answer:
      "Yes. We integrate with existing APIs, infrastructure, and operational workflows. We prioritize minimal disruption and safe data handling.",
  },
];

export default function FaqSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-[#0A0A0A] border-t border-white/5" ref={ref}>
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-section font-display text-center mb-10 text-white"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <MuiAccordion
              key={faq.question}
              defaultExpanded={false}
              className="surface-card"
              disableGutters
              sx={{ "&:before": { display: "none" } }}
            >
              <AccordionSummary expandIcon={<MdExpandMore className="text-[#C4B5FD]" />}>
                <p className="text-sm font-semibold text-white">{faq.question}</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-sm text-[#B5B7C6]">{faq.answer}</p>
              </AccordionDetails>
            </MuiAccordion>
          ))}
        </div>
      </div>
    </section>
  );
}
