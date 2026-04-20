// --- Optimized MUI Imports ---
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";

// --- Optimized Framer Motion ---
// Note: m is a smaller version of motion if you use a MotionConfig,
// but direct import is still better than a barrel.
import { motion } from "framer-motion";

// --- React & Components ---
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { industriesData } from "@/lib/industries";
import { Link } from "react-router-dom";

export default function IndustriesPage() {
  const leftColumn = industriesData.slice(0, 3);
  const rightColumn = industriesData.slice(3, 5);

  return (
    <>
      <SEO
        title="Industries | ImpactStack Africa"
        url={absoluteUrl("/industries")}
      />
      <PageShell>
        <section className="bg-[#05050A] relative min-h-screen w-full py-32 overflow-hidden">
          {/* ATMOSPHERIC BACKGROUND */}
          <div className="fixed inset-0 z-0 flex justify-center items-center pointer-events-none">
            <div className="relative w-full max-w-[1000px] aspect-square opacity-[0.08]">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              >
                <source src="/Untitled design.webm" type="video/webm" />
                <source src="/mb-compressed.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-[#05050A]" />
            </div>
          </div>

          <div className="container-narrow relative z-10 max-w-[1200px] mx-auto px-6">
            {/* Minimalist Header */}
            <header className="mb-24 lg:mb-32">
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-12 bg-purple-500" />
                <p className="text-[10px] font-black tracking-[0.4em] text-purple-500 uppercase">
                  Sector Expertise
                </p>
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter leading-none mb-6">
                Delivery <br />
                Experience.
              </h1>
              <p className="text-xl text-gray-500 max-w-md font-medium leading-relaxed">
                Strategic digital transformation across core African economic
                sectors.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* LEFT COLUMN: Staggered Group */}
              <div className="flex flex-col gap-12">
                {leftColumn.map((industry, i) => (
                  <motion.div
                    key={industry.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IndustryCard industry={industry} index={i + 1} />
                  </motion.div>
                ))}
              </div>

              {/* RIGHT COLUMN: Offset Group */}
              <div className="flex flex-col gap-12 lg:mt-48">
                {rightColumn.map((industry, i) => (
                  <motion.div
                    key={industry.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <IndustryCard industry={industry} index={i + 4} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}

function IndustryCard({ industry, index }: { industry: any; index: number }) {
  const displayNum = index.toString().padStart(2, "0");

  return (
    <Card
      sx={{
        background: "rgba(255, 255, 255, 0.02)",
        backdropFilter: "blur(30px) saturate(150%)",
        borderRadius: "24px",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        willChange: "transform, opacity", // Add this
        overflow: "visible",
        position: "relative",
        "&:hover": {
          background: "rgba(255, 255, 255, 0.04)",
          borderColor: "rgba(167, 139, 250, 0.2)",
          transform: "translateY(-8px) scale(1.01)",
          "& .industry-icon": { color: "#fff", transform: "scale(1.1)" },
          "& .industry-number": { opacity: 0.1 },
        },
      }}
    >
      <CardContent className="p-10">
        <div className="flex justify-between items-start mb-12">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 industry-icon transition-all duration-500">
            <industry.icon size={28} className="text-purple-400" />
          </div>
          <span className="industry-number text-white/5 font-black text-7xl tracking-tighter transition-opacity duration-500 absolute top-4 right-8 select-none pointer-events-none">
            {displayNum}
          </span>
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
            {industry.title}
          </h2>
          <p className="text-md text-gray-400 leading-relaxed font-normal mb-8 max-w-[280px]">
            {industry.description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/5 pt-8">
          <Chip
            label={industry.projectType.toUpperCase()}
            size="small"
            sx={{
              bgcolor: "transparent",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              color: "#a78bfa",
              fontSize: "9px",
              letterSpacing: "0.15em",
              height: "24px",
              fontWeight: 900,
            }}
          />
          <Link
            to={`/contact?projectType=${encodeURIComponent(industry.projectType)}`}
            className="text-white text-xs font-bold tracking-widest uppercase hover:text-purple-400 transition-colors"
          >
            Explore &rarr;
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
