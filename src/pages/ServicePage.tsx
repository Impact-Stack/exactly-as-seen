import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { Link, useParams } from "react-router-dom";
import { MdCheck } from "react-icons/md";
import { allProjects } from "@/lib/projects";
import { Button, Card, Chip, Stack } from "@mui/material";
import serviceWebImg from "@/assets/case-hr.jpg";
import serviceMobileImg from "@/assets/case-ecommerce.jpg";
import serviceSecurityImg from "@/assets/blog-popia.jpg";
import serviceGovtImg from "@/assets/blog-govt.jpg";

interface ServiceData {
  title: string;
  tagline: string;
  overview: string;
  benefits: string[];
  image: string;
}

const serviceData: Record<string, ServiceData> = {
  web: {
    title: "Enterprise Web Applications",
    tagline: "Scalable by design",
    overview:
      "Custom web applications built with modern frameworks including React, Vue.js, and Node.js. From MVPs to enterprise solutions, we deliver platforms that scale with your business while maintaining security and performance.",
    benefits: [
      "Responsive design (mobile, tablet, desktop)",
      "Cloud-native architecture (AWS, Google Cloud)",
      "Real-time functionality (WebSockets, live updates)",
      "Advanced security (POPIA compliant, encrypted)",
      "Seamless third-party integrations",
    ],
    image: serviceWebImg,
  },
  mobile: {
    title: "Mobile Solutions",
    tagline: "iOS and Android, one codebase",
    overview:
      "Flutter-based mobile applications delivering native performance on both iOS and Android. Build once, deploy everywhere, with a practical release cadence.",
    benefits: [
      "True cross-platform architecture",
      "Native performance and experience",
      "Rapid iterations with hot reload",
      "Secure API and auth integration",
      "Store-readiness for iOS and Android",
    ],
    image: serviceMobileImg,
  },
  security: {
    title: "Security and Compliance",
    tagline: "POPIA-ready architecture",
    overview:
      "Comprehensive cybersecurity and compliance services led by Google Cybersecurity certified engineers. Ensure your systems meet South African data protection requirements.",
    benefits: [
      "POPIA compliance audit and implementation",
      "Secure authentication (JWT, OAuth, MFA)",
      "Data encryption at-rest and in-transit",
      "Security code review and hardening",
      "Staff security awareness enablement",
    ],
    image: serviceSecurityImg,
  },
  government: {
    title: "Government Services",
    tagline: "Built for public sector mandates",
    overview:
      "Specialized digital services for government departments, municipalities, and state-owned enterprises with procurement-aware implementation models. ImpactStack Africa is CIPC-registered, CSD-listed, tax compliant, and EME B-BBEE compliant.",
    benefits: [
      "Citizen-facing portals and e-services",
      "Internal workflow automation",
      "Data dashboards and reporting",
      "Legacy system modernization",
      "POPIA and accessibility alignment",
      "Procurement support aligned to 80/20 preference-point requirements",
    ],
    image: serviceGovtImg,
  },
};

const engagementSteps = [
  {
    title: "Discovery",
    description: "We align stakeholders, scope priorities, and map technical realities before delivery starts.",
  },
  {
    title: "Proposal",
    description: "You receive a clear implementation plan, timeline expectations, and phased delivery approach.",
  },
  {
    title: "Delivery",
    description: "Execution runs in focused increments with transparent reporting and measurable outcomes.",
  },
];

const serviceProjectMap: Record<string, string[]> = {
  web: ["findr-community-map", "moderntech-hr-platform", "biofuel-ecommerce-platform", "quick-chat-mvp", "mern-training-project"],
  mobile: ["shopwise-price-comparison"],
  security: ["bluewatch-soc-lab"],
  government: [],
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const safeSlug = slug && serviceData[slug] ? slug : "web";
  const data = serviceData[safeSlug];
  const relatedProjects = allProjects.filter((project) => (serviceProjectMap[safeSlug] || []).includes(project.id));

  return (
    <>
      <SEO title={`${data.title} | ImpactStack Africa`} description={data.tagline} url={absoluteUrl(`/services/${safeSlug}`)} />
      <PageShell>
        <nav aria-label="Breadcrumb" className="bg-[#05050A] py-6 px-4 border-b border-white/5">
          <div className="container-narrow">
            <ol className="flex gap-2 text-small text-[#B5B7C6]">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/services/web" className="hover:text-white transition-colors">Services</Link></li>
              <li>/</li>
              <li aria-current="page" className="text-white">{data.title}</li>
            </ol>
          </div>
        </nav>
        <section className="bg-[#05050A] py-24 px-4 border-b border-white/5">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="tag-label mb-4">Service</p>
                <h1 className="text-hero text-white mb-4">{data.title}</h1>
                <p className="text-card-title text-[#B5B7C6] font-light mb-8">{data.tagline}</p>
                <Button component={Link} to="/contact" variant="contained" color="primary" className="button-primary px-10 py-4 text-base">
                  Book a Consultation
                </Button>
              </div>
              <Card className="surface-card p-4 overflow-hidden">
                <img src={data.image} alt={`${data.title} delivery preview`} className="w-full h-[320px] object-cover rounded-2xl" loading="lazy" />
              </Card>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-section text-white mb-6">{data.title}</h2>
                <p className="text-body text-[#B5B7C6] mb-8">{data.overview}</p>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {data.benefits.map((benefit) => (
                    <Chip
                      key={benefit}
                      icon={<MdCheck className="text-[#00A651]" />}
                      label={benefit}
                      variant="outlined"
                      color="secondary"
                      sx={{ borderColor: "rgba(139,92,246,0.35)", color: "#C4B5FD" }}
                    />
                  ))}
                </Stack>
              </div>
              <Card className="surface-card p-6">
                <h3 className="text-subtitle text-white mb-4">Delivery Outcomes</h3>
                <ul className="space-y-3">
                  {data.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-[#B5B7C6]">
                      <span className="w-2 h-2 rounded-full bg-[#A78BFA] mt-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            {relatedProjects.length > 0 ? (
              <div className="mt-10 surface-card p-6">
                <h3 className="text-subtitle text-white mb-3">Related Delivery Proof</h3>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {relatedProjects.map((project) => (
                    <Chip
                      key={project.id}
                      component={Link}
                      to={`/portfolio#${project.id}`}
                      clickable
                      label={project.title}
                      sx={{ borderColor: "rgba(139,92,246,0.35)", color: "#C4B5FD" }}
                      variant="outlined"
                    />
                  ))}
                </Stack>
              </div>
            ) : null}
          </div>
        </section>

        <section className="section-padding bg-[#05050A] border-t border-white/5">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-section text-white mb-4">How We Engage</h2>
              <p className="text-lg text-[#B5B7C6]">A focused delivery path from initial brief to production rollout.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementSteps.map((step) => (
                <Card key={step.title} className="surface-card p-7 card-hover">
                  <h3 className="text-subtitle text-white mb-3">{step.title}</h3>
                  <p className="text-body text-[#B5B7C6] mb-5">{step.description}</p>
                  <Button component={Link} to="/contact" variant="text" color="secondary" sx={{ color: "#C4B5FD" }}>
                    Start here →
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}

