import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { MdVerified, MdSpeed, MdHandshake } from "react-icons/md";
import { Card, CardContent, Chip } from "@mui/material";
import abstractGrid from "@/assets/abstract-grid.svg";

const valueProps = [
  {
    icon: MdVerified,
    title: "Enterprise Assurance",
    text: "Security-first delivery standards aligned to modern compliance expectations.",
  },
  {
    icon: MdSpeed,
    title: "Execution Velocity",
    text: "Lean engineering and delivery governance that keeps projects moving.",
  },
  {
    icon: MdHandshake,
    title: "Outcome Partnership",
    text: "Direct collaboration with stakeholders from discovery to go-live support.",
  },
];

export default function ValueProposition() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="section-padding bg-[#0A0A0A] border-t border-white/5"
      ref={ref}
    >
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="surface-card card-hover h-full overflow-hidden">
                <img
                  src={abstractGrid}
                  alt=""
                  className="w-full h-24 object-cover opacity-40"
                  aria-hidden="true"
                />
                <CardContent className="p-7">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="icon-shell w-12 h-12">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <Chip
                      label="Delivery Pillar"
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: "rgba(139,92,246,0.35)",
                        color: "#C4B5FD",
                      }}
                    />
                  </div>
                  <h3 className="text-subtitle text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body text-[#B5B7C6]">{item.text}</p>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
