import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { industriesData } from "@/lib/industries";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, Chip } from "@mui/material";

export default function IndustriesPage() {
  // Specifically slice for the 3-on-2 layout
  const leftColumn = industriesData.slice(0, 3);
  const rightColumn = industriesData.slice(3, 5);

  return (
    <>
      <SEO title="Industries | ImpactStack Africa" url={absoluteUrl("/industries")} />
      <PageShell>
        <section className="bg-[#05050A] relative min-h-screen w-full flex flex-col items-center py-24 overflow-x-hidden">
          
          {/* FIXED BACKGROUND VIDEO */}
          <div className="fixed inset-0 z-0 flex justify-center items-center pointer-events-none">
            <div className="relative w-full max-w-[800px] aspect-square opacity-20">
              <video 
                src="/d1.mp4" 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover blur-[3px]" 
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_25%,#05050A_80%)]" />
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex flex-col items-center">
            {/* Header Title */}
            <div className="text-center mb-16 lg:mb-24">
               <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Delivery Experience</h1>
               <p className="text-sm text-gray-500 mt-2 italic">Expertise across core African sectors</p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-center gap-16 xl:gap-32 w-full">
              
              {/* LEFT COLUMN: 3 Cards */}
              <div className="w-full lg:w-[450px] flex flex-col gap-10">
                {leftColumn.map((industry, i) => (
                  <IndustryCard key={industry.title} industry={industry} index={i + 1} />
                ))}
              </div>

              {/* RIGHT COLUMN: 2 Cards */}
              <div className="w-full lg:w-[450px] flex flex-col gap-10 lg:mt-32">
                {rightColumn.map((industry, i) => (
                  <IndustryCard key={industry.title} industry={industry} index={i + 4} />
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
  return (
    <Card 
      className="border border-white/5 relative group transition-all duration-300"
      sx={{
        // Using the exact styles from your provided snippet
        background: 'rgba(255, 255, 255, 0.01)',
        backdropFilter: 'blur(12px) saturate(140%)',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        "&:hover": {
          background: 'rgba(255, 255, 255, 0.04)',
          borderColor: 'rgba(139, 92, 246, 0.3)',
          transform: 'translateY(-4px)'
        }
      }}
    >
      <CardContent className="p-5 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
             <industry.icon className="w-4 h-4 text-purple-400" />
          </div>
          <span className="text-white/5 font-black text-2xl italic">
            {index < 10 ? `0${index}` : index}
          </span>
        </div>
        
        <div className="mb-6">
          <h2 className="text-[14px] font-bold text-white mb-1.5 leading-tight">{industry.title}</h2>
          <p className="text-[11px] text-gray-400 leading-normal">
            {industry.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-3">
          <Chip 
            label={industry.projectType.split(' ')[0]} 
            size="small" 
            sx={{ 
                bgcolor: 'rgba(139, 92, 246, 0.1)', 
                color: '#a78bfa', 
                fontSize: '9px',
                height: '18px',
                fontWeight: 600
            }} 
          />
          <Button
            component={Link}
            to={`/contact?projectType=${encodeURIComponent(industry.projectType)}`}
            className="text-purple-400 p-0 min-w-0 text-[11px] font-bold hover:text-white"
          >
            Explore &rarr;
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}