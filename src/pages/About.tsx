import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";

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
    desc: "R5,000 annual training budget per employee. Invest in people.",
  },
  {
    icon: "04",
    title: "Creating Jobs",
    desc: "Every project builds careers. Every success proves youth belong.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About ImpactStack Africa | Youth-Led Software Team"
        description="Learn how ImpactStack Africa builds enterprise-grade software while creating technology opportunities for young South African developers."
        url={absoluteUrl("/about")}
      />
      <PageShell>
        <section className="bg-primary-dark py-24 px-4">
          <div className="container-narrow text-center">
            <h1 className="text-hero text-primary-foreground mb-4">Empowering South Africa&apos;s Next Generation</h1>
            <p className="text-card-title text-primary-foreground/80 font-light">
              Youth-led technology company creating opportunities through innovation
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow max-w-[800px] mx-auto">
            <p className="tag-label text-success mb-3">OUR STORY</p>
            <h2 className="text-section mb-6">From Frustration to Innovation</h2>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                Cape Town faces a paradox: 63% youth unemployment while companies claim skill shortages. The reality is
                that talented developers exist, but many are locked out by arbitrary experience requirements.
              </p>
              <p>
                ImpactStack Africa was founded to break this cycle. Led by Liso Hlatshwayo, a 21-year-old Google
                Cybersecurity certified developer with production systems in live use, we are proving that youth do not
                need years of experience first. They need opportunity.
              </p>
              <p>
                Every project we deliver creates jobs. Every line of code we write proves Cape Town&apos;s youth belong in
                technology. We are not just building software. We are building careers and changing the narrative
                around youth employment.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container-narrow">
            <h2 className="text-section mb-10">Leadership</h2>
            <div className="bg-background rounded-lg p-10 border border-border">
              <h3 className="text-card-title mb-1">Liso Wycliff Seth Hlatshwayo</h3>
              <p className="text-lg text-muted-foreground mb-4">Founder and Lead Developer</p>
              <p className="text-body text-muted-foreground mb-6 max-w-[700px]">
                Google Cybersecurity certified Full-Stack Developer with production systems serving 50+ daily users.
                Graduate of Life Choices Academy Software Development programme. Currently Developer Intern at LC
                Studio. Passionate about creating opportunities for talented youth developers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Technical Expertise</h4>
                  <p className="text-small text-muted-foreground">
                    JavaScript, Python, PHP, React, Vue.js, Node.js, Express, Django, Flutter, MySQL, PostgreSQL,
                    MongoDB, AWS, and Google Cloud.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Certifications</h4>
                  <ul className="text-small text-muted-foreground space-y-1">
                    <li>Google Cybersecurity Professional Certificate</li>
                    <li>CISCO Introduction to Cybersecurity</li>
                    <li>PCAP Python Programming Certification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow">
            <h2 className="text-section text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-muted rounded-lg p-8 card-hover">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-subtitle mb-2">{v.title}</h3>
                  <p className="text-body text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
