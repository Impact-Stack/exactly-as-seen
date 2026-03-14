import { Link } from "react-router-dom";
import { Button, Card, CardContent, Chip, Stack } from "@mui/material";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { customQuoteServiceNames, flagshipPricingOffers, formatZar } from "@/lib/pricing";
import heroBg from "@/assets/hero-bg.jpg";
import caseEcommerce from "@/assets/case-ecommerce.jpg";
import caseHr from "@/assets/case-hr.jpg";
import caseNfc from "@/assets/case-nfc.jpg";

const pricingStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ImpactStack Africa",
    description:
      "Cape Town enterprise software delivery partner serving South African business and public-sector teams.",
    url: absoluteUrl("/"),
    telephone: "+27838947546",
    email: "hello@impactstack.africa",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cape Town",
      addressRegion: "Western Cape",
      addressCountry: "ZA",
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "ImpactStack Africa Service Pricing",
    itemListElement: flagshipPricingOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: offer.title,
        description: offer.description,
        areaServed: {
          "@type": "Country",
          name: "South Africa",
        },
        provider: {
          "@type": "Organization",
          name: "ImpactStack Africa",
          url: absoluteUrl("/"),
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "ZAR",
          price: offer.startingPrice,
          url: absoluteUrl("/pricing"),
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "ZAR",
            price: offer.startingPrice,
            valueAddedTaxIncluded: false,
          },
        },
      },
    })),
  },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing | ImpactStack Africa Enterprise Software Services"
        description="Starting prices for enterprise web, mobile, POPIA compliance, and government digital services in Cape Town and South Africa."
        url={absoluteUrl("/pricing")}
        structuredData={pricingStructuredData}
      />

      <PageShell>
        <section className="bg-[#05050A] py-24 px-4 border-b border-white/5 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-15">
            <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="container-narrow text-center max-w-[960px] relative">
            <p className="tag-label mb-5">Pricing</p>
            <h1 className="text-hero text-white mb-5">Software Development Pricing For Cape Town and South Africa</h1>
            <p className="text-lg text-[#B5B7C6] mb-8">
              Starting-price benchmarks for the services organizations ask us for most. Final project pricing is scoped
              after discovery to match complexity, integrations, security, and delivery timeline.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button component={Link} to="/contact" variant="contained" color="primary" className="button-primary px-10 py-4 text-base">
                Request a Scoped Quote
              </Button>
              <Button component={Link} to="/portfolio" variant="outlined" color="secondary" className="button-secondary px-10 py-4 text-base">
                Review Case Studies
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#05050A] border-t border-white/5">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { image: caseHr, label: "Enterprise Delivery", caption: "HR platform modernization snapshot" },
                { image: caseEcommerce, label: "Commerce Systems", caption: "Operational e-commerce workflows" },
                { image: caseNfc, label: "Field Operations", caption: "Attendance + device integration" },
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {flagshipPricingOffers.map((offer) => (
                <Card key={offer.id} className="h-full surface-card card-hover">
                  <CardContent className="p-7">
                    <h2 className="text-subtitle text-white mb-2">{offer.title}</h2>
                    <p className="text-sm text-[#A1A1B5] mb-5">{offer.description}</p>

                    <div className="mb-6">
                      <p className="text-3xl font-bold text-white">
                        From {formatZar(offer.startingPrice)}
                        <span className="text-base font-medium text-[#B5B7C6]"> ex VAT</span>
                      </p>
                      <p className="text-sm text-[#A1A1B5] mt-2">Project-based pricing, starting at this level.</p>
                    </div>

                    <Stack direction="row" flexWrap="wrap" gap={1} className="mb-6">
                      {offer.deliverables.map((item) => (
                        <Chip key={item} label={item} size="small" variant="outlined" sx={{ borderColor: "rgba(139,92,246,0.35)", color: "#C4B5FD" }} />
                      ))}
                    </Stack>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button component={Link} to={offer.destination} variant="outlined" color="secondary" className="button-secondary px-4 py-2 text-sm">
                        View Service
                      </Button>
                      <Button component={Link} to="/contact" variant="contained" color="primary" className="button-primary px-4 py-2 text-sm">
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#05050A] border-t border-white/5">
          <div className="container-narrow">
            <Card className="surface-card">
              <CardContent className="p-7 md:p-8">
              <h2 className="text-section text-white mb-3">Custom-Quote Services</h2>
              <p className="text-[#B5B7C6] mb-5">
                These services are delivered through scoped proposals because implementation variables differ across
                systems, policy constraints, and service-level requirements.
              </p>
              <Stack direction="row" flexWrap="wrap" gap={1} className="mb-6">
                {customQuoteServiceNames.map((service) => (
                  <Chip key={service} label={service} size="small" variant="outlined" sx={{ borderColor: "rgba(255,255,255,0.12)", color: "#B5B7C6" }} />
                ))}
              </Stack>
              <p className="text-sm text-[#A1A1B5]">
                Pricing shown is starting at and excludes VAT. Final commercial terms are confirmed in a proposal after
                discovery and technical scoping.
              </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </PageShell>
    </>
  );
}

