import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { customQuoteServiceNames, flagshipPricingOffers, formatZar } from "@/lib/pricing";

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
        <section className="bg-[#000000] py-24 px-4 border-b border-white/5">
          <div className="container-narrow text-center max-w-[960px]">
            <p className="tag-label mb-5">Pricing</p>
            <h1 className="text-hero text-white mb-5">Software Development Pricing For Cape Town and South Africa</h1>
            <p className="text-lg text-[#9CA3AF] mb-8">
              Starting-price benchmarks for the services organizations ask us for most. Final project pricing is scoped
              after discovery to match complexity, integrations, security, and delivery timeline.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#0047BB] text-white px-10 py-4 rounded-lg text-base font-semibold hover:bg-[#003494] transition-colors"
              >
                Request a Scoped Quote
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center border border-white/15 text-white px-10 py-4 rounded-lg text-base font-semibold hover:border-white/40 hover:bg-white/5 transition-all"
              >
                Review Case Studies
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A] border-t border-white/5">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {flagshipPricingOffers.map((offer) => (
                <article key={offer.id} className="h-full bg-[#0F0F0F] border border-white/[0.07] rounded-xl p-7 card-hover">
                  <h2 className="text-subtitle text-white mb-2">{offer.title}</h2>
                  <p className="text-sm text-[#6B7280] mb-5">{offer.description}</p>

                  <div className="mb-6">
                    <p className="text-3xl font-bold text-white">
                      From {formatZar(offer.startingPrice)}
                      <span className="text-base font-medium text-[#9CA3AF]"> ex VAT</span>
                    </p>
                    <p className="text-sm text-[#6B7280] mt-2">Project-based pricing, starting at this level.</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {offer.deliverables.map((item) => (
                      <li key={item} className="text-sm text-[#9CA3AF]">
                        - {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={offer.destination}
                      className="inline-flex items-center justify-center text-sm font-semibold text-[#0047BB] border border-[#0047BB]/30 rounded-md px-4 py-2 hover:border-[#0047BB] hover:bg-[#0047BB]/10 transition-colors"
                    >
                      View Service
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[#111111] border border-white/[0.12] rounded-md px-4 py-2 hover:bg-[#171717] transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#000000] border-t border-white/5">
          <div className="container-narrow">
            <div className="bg-[#0F0F0F] border border-white/[0.07] rounded-xl p-7 md:p-8">
              <h2 className="text-section text-white mb-3">Custom-Quote Services</h2>
              <p className="text-[#9CA3AF] mb-5">
                These services are delivered through scoped proposals because implementation variables differ across
                systems, policy constraints, and service-level requirements.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {customQuoteServiceNames.map((service) => (
                  <span key={service} className="px-3 py-1.5 text-sm rounded-full border border-white/[0.12] text-[#9CA3AF] bg-[#111111]">
                    {service}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#6B7280]">
                Pricing shown is starting at and excludes VAT. Final commercial terms are confirmed in a proposal after
                discovery and technical scoping.
              </p>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
