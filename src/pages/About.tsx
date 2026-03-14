import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { allProjects } from "@/lib/projects";
import { procurementProfile } from "@/lib/procurement";
import { Card, CardContent, Chip, Stack } from "@mui/material";
import heroBg from "@/assets/hero-bg.jpg";
import caseHr from "@/assets/case-hr.jpg";
import caseEcommerce from "@/assets/case-ecommerce.jpg";
import caseNfc from "@/assets/case-nfc.jpg";

const values = [
  { icon: "01", title: "Production-Quality Code", desc: "Enterprise-grade solutions. No shortcuts. Every project built to last." },
  { icon: "02", title: "Skills Over Years", desc: "We hire based on ability, not arbitrary experience requirements." },
  { icon: "03", title: "Continuous Learning", desc: "Dedicated annual training investment per employee. Invest in people." },
  { icon: "04", title: "Creating Jobs", desc: "Every project builds careers. Every success proves youth belong." },
];

const roleBreakdown = allProjects.reduce<Record<string, number>>((acc, project) => {
  acc[project.role] = (acc[project.role] || 0) + 1;
  return acc;
}, {});

const deliveryHighlights = [
  { label: "Documented Projects", value: `${allProjects.length}` },
  { label: "Security-Focused Projects", value: `${allProjects.filter((project) => project.filterTags.includes("Security")).length}+` },
  { label: "Mobile Delivery Projects", value: `${allProjects.filter((project) => project.filterTags.includes("Mobile")).length}+` },
  { label: "Web Delivery Projects", value: `${allProjects.filter((project) => project.filterTags.includes("Web")).length}+` },
];


export default function AboutPage() {
  return (
    <>
      <SEO title="About ImpactStack Africa | Youth-Led Software Team" description="Learn how ImpactStack Africa delivers enterprise software with CIPC/CSD procurement readiness while creating technology opportunities for young South African developers." url={absoluteUrl("/about")} />
      <PageShell>
        <section className="bg-[#05050A] py-24 px-4 border-b border-white/5 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-15">
            <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="container-narrow text-center relative">
            <h1 className="text-hero text-white mb-4">Empowering South Africa&apos;s Next Generation</h1>
            <p className="text-card-title text-[#B5B7C6] font-light">Youth-led technology company creating opportunities through innovation</p>
          </div>
        </section>

        <section className="py-12 bg-[#05050A] border-t border-white/5">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { image: caseHr, label: "Enterprise Delivery", caption: "Secure HR platform execution" },
                { image: caseEcommerce, label: "Commerce Systems", caption: "Pricing and marketplace workflows" },
                { image: caseNfc, label: "Field Operations", caption: "Attendance + device integrations" },
              ].map((item) => (
                <Card key={item.label} className="surface-card overflow-hidden">
                  <img src={item.image} alt={item.caption} className="h-40 w-full object-cover" loading="lazy" />
                  <CardContent>
                    <p className="text-xs uppercase tracking-wide text-[#A1A1B5]">{item.label}</p>
                    <p className="text-sm text-white mt-1">{item.caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow max-w-[800px] mx-auto">
            <p className="tag-label mb-3">OUR STORY</p>
            <h2 className="text-section text-white mb-6">From Frustration to Innovation</h2>
            <div className="space-y-4 text-body text-[#B5B7C6] leading-relaxed">
              <p>Cape Town has strong young technical talent, yet many teams are still filtered out by experience-led hiring gates before they can prove delivery value.</p>
              <p>ImpactStack Africa was built to close that gap through accountable software delivery. We combine founder-led engineering discipline with practical project execution for South African organizations.</p>
              <p>Our model is simple: deliver production-quality systems, document outcomes clearly, and build career pathways while solving real business and public-sector problems.</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#05050A] border-t border-white/5">
          <div className="container-narrow">
            <h2 className="text-section text-white mb-10">Leadership</h2>
            <Card className="surface-card">
              <CardContent className="p-10">
              <h3 className="text-card-title text-white mb-1">Liso Wycliff Seth Hlatshwayo</h3>
              <p className="text-lg text-[#B5B7C6] mb-4">Founder and Lead Developer</p>
              <p className="text-body text-[#B5B7C6] mb-6 max-w-[700px]">
                Google Cybersecurity certified Full-Stack Developer with production systems serving 50+ daily users. Graduate of Life Choices Academy Software Development programme. Currently Developer Intern at LC Studio. Passionate about creating opportunities for talented youth developers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Technical Expertise</h4>
                  <p className="text-small text-[#A1A1B5]">JavaScript, Python, PHP, React, Vue.js, Node.js, Express, Django, Flutter, MySQL, PostgreSQL, MongoDB, AWS, and Google Cloud.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Certifications</h4>
                  <ul className="text-small text-[#A1A1B5] space-y-1">
                    <li>Google Cybersecurity Professional Certificate</li>
                    <li>CISCO Introduction to Cybersecurity</li>
                    <li>PCAP Python Programming Certification</li>
                  </ul>
                </div>
              </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow">
            <h2 className="text-section text-white mb-10">Delivery Track Record</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {deliveryHighlights.map((item) => (
                <Card key={item.label} className="surface-card text-center">
                  <CardContent className="p-5">
                    <p className="text-2xl font-bold text-[#C4B5FD] mb-1">{item.value}</p>
                    <p className="text-xs text-[#A1A1B5] uppercase tracking-wide">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="surface-card">
              <CardContent className="p-7">
              <h3 className="text-subtitle text-white mb-3">Role Coverage Across Published Projects</h3>
              <Stack direction="row" flexWrap="wrap" gap={1} className="mb-4">
                {Object.entries(roleBreakdown).map(([role, count]) => (
                  <Chip key={role} label={`${role}: ${count}`} size="small" variant="outlined" sx={{ borderColor: "rgba(139,92,246,0.35)", color: "#C4B5FD" }} />
                ))}
              </Stack>
              <p className="text-sm text-[#B5B7C6]">
                Portfolio includes security engineering, technical project management, project leadership, and full-stack
                implementation roles with public repository evidence for each published case.
              </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="section-padding bg-[#05050A] border-t border-white/5">
          <div className="container-narrow">
            <h2 className="text-section text-white mb-6">Procurement and Compliance Profile</h2>
            <Card className="surface-card mb-8">
              <CardContent className="p-7 md:p-8">
              <p className="text-body text-[#B5B7C6] mb-5">
                IMPACTSTACK AFRICA (PTY) LTD is registered with the Companies and Intellectual Property Commission (CIPC),
                listed on the National Treasury Central Supplier Database (CSD), and maintains valid tax compliance status.
                These credentials support procurement-readiness for municipalities, state-owned entities, and enterprise clients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {procurementProfile.map((item) => (
                  <div key={item.label} className="rounded-xl bg-[#11111A] border border-white/10 p-4">
                    <p className="text-xs uppercase tracking-wide text-[#A1A1B5] mb-1">{item.label}</p>
                    <p className="text-sm text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#B5B7C6]">
                Core offering coverage includes rugged mobile devices, enterprise software development, visitor management
                systems, and IT infrastructure services delivered with a focus on reliability and cost-effectiveness.
              </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow">
            <h2 className="text-section text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => (
                <Card key={v.title} className="surface-card card-hover">
                  <CardContent className="p-8">
                    <div className="text-4xl text-[#C4B5FD] mb-4">{v.icon}</div>
                    <h3 className="text-subtitle text-white mb-2">{v.title}</h3>
                    <p className="text-body text-[#B5B7C6]">{v.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}

