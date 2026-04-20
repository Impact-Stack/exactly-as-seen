// --- Optimized MUI Core Imports ---
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// --- Optimized MUI Icons Import ---
import Verified from "@mui/icons-material/Verified";

// Other imports remain the same
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { allProjects } from "@/lib/projects";
import { procurementProfile } from "@/lib/procurement";

const values = [
  {
    icon: "01",
    title: "Production-Quality Code",
    desc: "Enterprise-grade solutions. No shortcuts. Every project built to last.",
  },
  {
    icon: "02",
    title: "Skills Over Years",
    desc: "We hire based on ability, not arbitrary experience requirements.",
  },
  {
    icon: "03",
    title: "Continuous Learning",
    desc: "Dedicated annual training investment per employee. Invest in people.",
  },
  {
    icon: "04",
    title: "Creating Jobs",
    desc: "Every project builds careers. Every success proves youth belong.",
  },
];

const roleBreakdown = allProjects.reduce<Record<string, number>>(
  (acc, project) => {
    acc[project.role] = (acc[project.role] || 0) + 1;
    return acc;
  },
  {},
);

const deliveryHighlights = [
  { label: "Documented Projects", value: `${allProjects.length}` },
  {
    label: "Security-Focused",
    value: `${allProjects.filter((p) => p.filterTags.includes("Security")).length}+`,
  },
  {
    label: "Mobile Delivery",
    value: `${allProjects.filter((p) => p.filterTags.includes("Mobile")).length}+`,
  },
  {
    label: "Web Delivery",
    value: `${allProjects.filter((p) => p.filterTags.includes("Web")).length}+`,
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About ImpactStack Africa | Youth-Led Software Team"
        description="Learn how ImpactStack Africa delivers enterprise software with CIPC/CSD procurement readiness."
        url={absoluteUrl("/about")}
      />

      <PageShell>
        {/* --- HERO SECTION --- */}
        <section className="bg-[#050505] pt-24 md:pt-32 pb-16 md:pb-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="gradient.webp"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </div>
          <div className="container-narrow text-center relative z-10">
            <div className="flex justify-center mb-6">
              <span className="text-[#C4B5FD] text-3xl">✦</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight leading-tight">
              Empowering South Africa&apos;s <br className="hidden sm:block" />{" "}
              Next Generation
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-10">
              Youth-led technology company creating opportunities through
              accountable software delivery and practical innovation.
            </p>
            <Link href="/portfolio">
              <button className="bg-white text-black px-8 md:px-10 py-3 md:py-3.5 rounded-full font-medium hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95">
                Explore our work
              </button>
            </Link>
          </div>
        </section>

        {/* --- STORY & BENTO VALUES --- */}
        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start mb-16 md:mb-24">
              <div>
                <p className="text-[#C4B5FD] text-xs font-bold tracking-[0.2em] mb-4">
                  OUR STORY
                </p>
                <h2 className="text-3xl md:text-4xl text-white font-medium">
                  From Frustration to Innovation
                </h2>
              </div>
              <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Cape Town has strong young technical talent, yet many teams
                  are still filtered out by experience-led hiring gates before
                  they can prove delivery value.
                </p>
                <p>
                  ImpactStack Africa was built to close that gap. We combine
                  founder-led engineering discipline with practical project
                  execution for South African organizations.
                </p>
              </div>
            </div>

            {/* Bento Grid: Values */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Feature 1: Production Quality */}
              <div className="md:col-span-7 bg-[#121214] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between min-h-[320px] md:min-h-[420px] relative overflow-hidden group">
                <div className="absolute inset-0 z-0 opacity-40">
                  <img
                    src="/pattern.webp"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="absolute top-0 right-0 w-1/2 h-full z-10 pointer-events-none">
                  <img
                    src="/robot.webp"
                    alt="Chrome character"
                    loading="lazy"
                    className="w-full h-full object-contain object-right-bottom translate-y-6 group-hover:translate-y-2 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="relative z-20">
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-4 md:mb-6 tracking-tight">
                    {values[0].title}
                  </h3>
                  <p className="text-zinc-500 max-w-[320px] text-base md:text-lg leading-relaxed font-light">
                    {values[0].desc}
                  </p>
                </div>

                <div className="relative z-20 flex items-center justify-start mt-8 md:mt-10 gap-2 group-hover:gap-4 transition-all duration-300">
                  <span className="text-zinc-700 font-mono text-[14px] uppercase tracking-[0.3em]">
                    Efficiency 01
                  </span>
                </div>
              </div>

              {/* Stacked Vertical Features */}
              <div className="md:col-span-5 flex flex-col gap-6">
                <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 flex-1">
                  <h4 className="text-white text-lg md:text-xl font-medium mb-3">
                    {values[1].title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {values[1].desc}
                  </p>
                </div>
                <div className="bg-[#12121A] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 flex-1">
                  <h4 className="text-white text-lg md:text-xl font-medium mb-3">
                    {values[3].title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {values[3].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- LEADERSHIP (GLASS CARD) --- */}
        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="container mx-auto px-6">
            <div className="bg-zinc-900/30 backdrop-blur-md border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16">
              <div className="max-w-4xl">
                <p className="text-purple-400 text-sm font-bold mb-4">
                  LEADERSHIP
                </p>
                <h3 className="text-3xl md:text-4xl text-white font-medium mb-2">
                  Liso Wycliff Seth Hlatshwayo
                </h3>
                <p className="text-lg md:text-xl text-zinc-400 mb-6 md:mb-8">
                  Founder and Lead Developer
                </p>

                <p className="text-zinc-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-light">
                  Google Cybersecurity certified Full-Stack Developer with
                  production systems serving 50+ daily users. Graduate of Life
                  Choices Academy. Passionate about creating opportunities for
                  talented youth developers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t border-white/5 pt-8 md:pt-10">
                  <div>
                    <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                      <Verified className="text-purple-500 text-sm" /> Technical
                      Expertise
                    </h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      JavaScript, Python, PHP, React, Vue.js, Node.js, Express,
                      Django, Flutter, MySQL, PostgreSQL, MongoDB, AWS, and
                      Google Cloud.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                      <Verified className="text-purple-500 text-sm" /> Core
                      Engineering Team
                    </h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      Neleh Heunis, Khanya Freddie, Bheka Nyoni, Stacey-Lee
                      Pietersen, Zoe Petersen, and Bilqees Ajam.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                    <Verified className="text-purple-500 text-sm" />{" "}
                    Certifications
                  </h4>
                  <ul className="text-zinc-500 text-sm grid grid-cols-1 md:grid-cols-3 gap-2">
                    <li>• Google Cybersecurity Professional Certificate</li>
                    <li>• CISCO Introduction to Cybersecurity</li>
                    <li>• PCAP Python Programming Certification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- TRACK RECORD BAR --- */}
        <section className="py-16 md:py-20 bg-[#050505] border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between items-center gap-8 md:gap-10">
              {deliveryHighlights.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-3xl md:text-4xl text-white font-medium mb-1">
                    {item.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCUREMENT SECTION (PURPLE GRADIENT) --- */}
        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0D0D15] border border-purple-500/20 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 md:mb-8 leading-tight tracking-tight">
                  Procurement-Ready <br /> for Enterprise.
                </h2>
                <p className="text-zinc-400 text-base md:text-lg mb-8 md:mb-10 font-light leading-relaxed">
                  IMPACTSTACK AFRICA (PTY) LTD is registered with the CIPC and
                  listed on the National Treasury Central Supplier Database
                  (CSD). We maintain valid tax compliance for municipalities and
                  state-owned entities.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {procurementProfile.map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-5 rounded-2xl md:rounded-3xl group hover:border-purple-500/50 transition-colors"
                    >
                      <p className="text-[10px] uppercase text-purple-400 font-bold mb-1 tracking-widest">
                        {item.label}
                      </p>
                      <p className="text-sm text-zinc-200 font-medium">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hide decorative square on mobile, show on lg */}
              <div className="hidden lg:flex bg-white/5 rounded-[3rem] aspect-square items-center justify-center p-12 border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/5 blur-3xl rounded-full" />

                <div className="text-center relative z-10">
                  <div className="text-purple-500/30 text-7xl mb-6">🏛️</div>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1}
                    justifyContent="center"
                  >
                    {Object.entries(roleBreakdown).map(([role, count]) => (
                      <Chip
                        key={role}
                        label={`${role}: ${count}`}
                        size="small"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.05)",
                          color: "#A1A1AA",
                          border: "1px solid rgba(255,255,255,0.1)",
                          backdropFilter: "blur(4px)",
                          "&:hover": { borderColor: "rgba(168, 85, 247, 0.4)" },
                        }}
                      />
                    ))}
                  </Stack>
                  <p className="mt-8 text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                    Portfolio includes security engineering, project leadership,
                    and full-stack implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
