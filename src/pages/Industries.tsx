import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { industriesData } from "@/lib/industries";
import { event as trackEvent } from "@/lib/analytics";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, Chip, Stack } from "@mui/material";
import heroBg from "@/assets/hero-bg.jpg";
import caseEcommerce from "@/assets/case-ecommerce.jpg";
import caseHr from "@/assets/case-hr.jpg";
import caseNfc from "@/assets/case-nfc.jpg";

export default function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries | ImpactStack Africa"
        description="Industry delivery experience across government, financial services, healthcare, mining, and retail in South Africa."
        url={absoluteUrl("/industries")}
      />
      <PageShell>
        <section className="bg-[#05050A] py-24 px-4 border-b border-white/5 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-15">
            <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="container-narrow text-center relative">
            <p className="tag-label mb-5">Industries</p>
            <h1 className="text-hero text-white mb-4">Delivery Experience Across Core Sectors</h1>
            <p className="text-lg text-[#B5B7C6] max-w-3xl mx-auto">
              ImpactStack Africa supports public and private-sector teams with secure, compliant delivery models tailored
              to local operational realities.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#05050A] border-t border-white/5">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { image: caseHr, label: "Public Sector", caption: "Compliance-aligned delivery" },
                { image: caseEcommerce, label: "Retail", caption: "Commerce and pricing intelligence" },
                { image: caseNfc, label: "Field Ops", caption: "Operational device workflows" },
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
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {industriesData.map((industry) => (
                <Card key={industry.title} className="surface-card card-hover">
                  <CardContent className="p-6">
                    <div className="icon-shell w-12 h-12 mb-4">
                      <industry.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-subtitle text-white mb-2">{industry.title}</h2>
                    <p className="text-body text-[#B5B7C6] mb-4">{industry.description}</p>
                    <p className="text-xs text-[#A1A1B5] mb-4">{industry.evidence}</p>
                    <Stack direction="row" flexWrap="wrap" gap={1} className="mb-4">
                      <Chip label={industry.projectType} size="small" variant="outlined" sx={{ borderColor: "rgba(139,92,246,0.35)", color: "#C4B5FD" }} />
                    </Stack>
                    <Button
                      component={Link}
                      to={`/contact?projectType=${encodeURIComponent(industry.projectType)}&source=industries_page`}
                      onClick={() =>
                        trackEvent({
                          action: "industry_cta_click",
                          category: "Industries Page",
                          label: industry.title,
                        })
                      }
                      variant="contained"
                      color="primary"
                      className="button-primary px-5 py-2 text-sm"
                    >
                      Discuss this industry
                    </Button>
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
