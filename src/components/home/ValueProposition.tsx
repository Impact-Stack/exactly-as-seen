import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { MdVerified, MdSpeed, MdHandshake, MdNorthEast } from "react-icons/md";
import { Card, CardContent } from "@mui/material";

const valueProps = [
  {
    icon: MdVerified,
    title: "Enterprise Assurance",
    text: "Security-first delivery standards aligned to modern compliance expectations.",
    background: "/assurance-bg.jpg", // Path in public folder
    count: "01",
  },
  {
    icon: MdSpeed,
    title: "Execution Velocity",
    text: "Lean engineering and delivery governance that keeps projects moving.",
    background: "/velocity-bg.jpg",
    count: "02",
  },
  {
    icon: MdHandshake,
    title: "Outcome Partnership",
    text: "Direct collaboration with stakeholders from discovery to go-live support.",
    background: "/partnership-bg.jpg",
    count: "03",
  },
];


export default function ValueProposition() {
  const { ref, isInView } = useInView();

  return (
    <section
      className="section-padding bg-black/50 backdrop-blur-2xl border border-white/10"
      ref={ref}
    >
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full"
            >
              {/* Added min-h-[700px] and larger rounded corners */}
              <Card className="relative h-full min-h-[700px] overflow-hidden border border-white/10 rounded-[2.5rem] bg-black/50 hover:border-white/20 transition-all hover:-translate-y-2">
                
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.background}
                    alt=""
                    className="w-full h-full object-cover object-center opacity-80"
                    aria-hidden="true"
                  />
                </div>

                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-2xl" />

                {/* Content Layer - justify-between pins the footer to the bottom */}
                <CardContent className="relative z-20 h-full p-10 flex flex-col justify-between">
                  <div className="flex flex-col">
                    <div className="mb-12">
                      <h3 className="text-[32px] font-black tracking-tighter text-white uppercase leading-[0.95] mb-2 flex items-start gap-1">
                        {item.title}
                        <span className="text-xl text-[#8B5CF6] mt-[-4px]">✦</span>
                      </h3>
                      <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 leading-relaxed max-w-[220px]">
                        {item.text}
                      </p>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                      <item.icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Footer Stats & Action - now pushed to the bottom */}
                  <div className="flex justify-between items-center border-t border-white/10 pt-8">
                    <p className="text-sm font-bold text-white tracking-[0.2em]">
                      {item.count} <span className="mx-2 opacity-20">/</span> <span className="opacity-30">03</span>
                    </p>
                    
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-black/60 border border-white/10 text-white/40 hover:text-white hover:bg-[#8B5CF6] hover:border-[#8B5CF6] transition-all cursor-pointer group">
                      <MdNorthEast className="w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}