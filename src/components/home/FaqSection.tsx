import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { MdAdd, MdCheck } from "react-icons/md";

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

export default function ConsultingProcessFaq() {
  const { ref, isInView } = useInView();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getLabel = (index) => {
    const letters = ["A", "B", "C", "D"];
    const num = (index + 1).toString().padStart(2, "0");
    return `${letters[index]}-${num}`;
  };

  return (
    <section className="bg-black py-24 border-t border-white/5" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-20 space-y-2 text-left"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">
            Our Consulting Process
          </h2>
        </motion.div>

        <div className="border-t border-white/10">
          {faqs.map((faq, index) => {
            const isExpanded = index === expandedIndex;
            const label = getLabel(index);
            const displayNum = (index + 1).toString().padStart(2, "0");

            return (
              <motion.article
                key={index}
                className="relative border-b border-white/10 cursor-pointer overflow-hidden group"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                {/* REVEAL VIDEO LAYER */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.6, ease: "circOut" }}
                      className="absolute inset-0 z-0 pointer-events-none"
                    >
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                        className="w-full h-full object-cover opacity-60 scale-105"
                      >
                        <source src="/gif.webm" type="video/webm" />
                        <source src="/gif-compressed.mp4" type="video/mp4" />
                      </video>
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CONTENT LAYER */}
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 py-14 px-4 md:px-10">
                  {/* Left Block: Index + Letter Code */}
                  <div className="flex items-center gap-8 min-w-[320px]">
                    <p
                      className={`text-[10px] font-mono font-bold border-b pb-1 self-start mt-4 transition-colors duration-500 ${isExpanded ? "text-white border-white" : "text-white/40 border-white/20"}`}
                    >
                      {displayNum}
                    </p>
                    <h3
                      className={`text-[80px] font-black tracking-tighter leading-none transition-all duration-500 ${isExpanded ? "text-white scale-105" : "text-white/10"}`}
                    >
                      {label}
                    </h3>
                  </div>

                  {/* Middle Block: Question + Answer */}
                  <div className="flex-1 space-y-4 text-left">
                    <p
                      className={`text-[12px] uppercase tracking-[0.4em] font-black transition-colors duration-500 ${isExpanded ? "text-white" : "text-white/40"}`}
                    >
                      {faq.question}
                    </p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-[15px] text-white/70 max-w-[480px] leading-relaxed font-medium pb-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right Block: Status Icon */}
                  <div
                    className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 ${isExpanded ? "bg-white border-white text-black" : "border-white/10 text-white/20"}`}
                  >
                    {isExpanded ? <MdCheck size={24} /> : <MdAdd size={24} />}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
