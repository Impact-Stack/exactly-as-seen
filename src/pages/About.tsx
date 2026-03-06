import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { allProjects } from "@/lib/projects";

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
      <SEO title="About ImpactStack Africa | Youth-Led Software Team" description="Learn how ImpactStack Africa builds enterprise-grade software while creating technology opportunities for young South African developers." url={absoluteUrl("/about")} />
      <PageShell>
        <section className="bg-[#000000] py-24 px-4 border-b border-white/5">
          <div className="container-narrow text-center">
            <h1 className="text-hero text-white mb-4">Empowering South Africa&apos;s Next Generation</h1>
            <p className="text-card-title text-[#9CA3AF] font-light">Youth-led technology company creating opportunities through innovation</p>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow max-w-[800px] mx-auto">
            <p className="tag-label mb-3">OUR STORY</p>
            <h2 className="text-section text-white mb-6">From Frustration to Innovation</h2>
            <div className="space-y-4 text-body text-[#9CA3AF] leading-relaxed">
              <p>Cape Town has strong young technical talent, yet many teams are still filtered out by experience-led hiring gates before they can prove delivery value.</p>
              <p>ImpactStack Africa was built to close that gap through accountable software delivery. We combine founder-led engineering discipline with practical project execution for South African organizations.</p>
              <p>Our model is simple: deliver production-quality systems, document outcomes clearly, and build career pathways while solving real business and public-sector problems.</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#000000] border-t border-white/5">
          <div className="container-narrow">
            <h2 className="text-section text-white mb-10">Leadership</h2>
            <div className="glass p-10">
              <h3 className="text-card-title text-white mb-1">Liso Wycliff Seth Hlatshwayo</h3>
              <p className="text-lg text-[#9CA3AF] mb-4">Founder and Lead Developer</p>
              <p className="text-body text-[#9CA3AF] mb-6 max-w-[700px]">
                Google Cybersecurity certified Full-Stack Developer with production systems serving 50+ daily users. Graduate of Life Choices Academy Software Development programme. Currently Developer Intern at LC Studio. Passionate about creating opportunities for talented youth developers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Technical Expertise</h4>
                  <p className="text-small text-[#6B7280]">JavaScript, Python, PHP, React, Vue.js, Node.js, Express, Django, Flutter, MySQL, PostgreSQL, MongoDB, AWS, and Google Cloud.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Certifications</h4>
                  <ul className="text-small text-[#6B7280] space-y-1">
                    <li>Google Cybersecurity Professional Certificate</li>
                    <li>CISCO Introduction to Cybersecurity</li>
                    <li>PCAP Python Programming Certification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow">
            <h2 className="text-section text-white mb-10">Delivery Track Record</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {deliveryHighlights.map((item) => (
                <div key={item.label} className="glass p-5 text-center">
                  <p className="text-2xl font-bold text-[#0047BB] mb-1">{item.value}</p>
                  <p className="text-xs text-[#6B7280] uppercase tracking-wide">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="glass p-7">
              <h3 className="text-subtitle text-white mb-3">Role Coverage Across Published Projects</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.entries(roleBreakdown).map(([role, count]) => (
                  <span key={role} className="text-xs px-3 py-1.5 rounded-full border border-[#0047BB]/25 bg-[#0047BB]/10 text-[#0047BB] font-semibold">
                    {role}: {count}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#9CA3AF]">
                Portfolio includes security engineering, technical project management, project leadership, and full-stack
                implementation roles with public repository evidence for each published case.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow">
            <h2 className="text-section text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="glass p-8 card-hover">
                  <div className="text-4xl text-[#0047BB] mb-4">{v.icon}</div>
                  <h3 className="text-subtitle text-white mb-2">{v.title}</h3>
                  <p className="text-body text-[#9CA3AF]">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
