import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SolutionsOverview from "@/components/home/SolutionsOverview";
import ProjectsSection from "@/components/home/ProjectsSection";
import InvestSwipeSection from "@/components/home/InvestSwipeSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import InsightsSection from "@/components/home/InsightsSection";
import CTASection from "@/components/home/CTASection";
import { absoluteUrl } from "@/lib/site";
import { flagshipPricingOffers } from "@/lib/pricing";
import { featuredProjects } from "@/lib/projects";
import { buildProjectItemListSchema } from "@/lib/schema-projects";

const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ImpactStack Africa",
  description:
    "Cape Town-based enterprise software delivery partner for South African organizations, including POPIA compliance and government digital services.",
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
  openingHours: "Mo-Fr 08:00-17:00",
};

const flagshipOfferStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "ImpactStack Africa Flagship Service Pricing",
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
};

const featuredProjectsStructuredData = buildProjectItemListSchema(
  featuredProjects,
  "ImpactStack Africa Featured Delivery Proof",
);

const Index = () => {
  return (
    <>
      <SEO
        title="ImpactStack Africa | Enterprise Software Development Cape Town"
        description="Enterprise software development in Cape Town for South African organizations, including POPIA compliance, secure mobile platforms, and government digital services."
        url={absoluteUrl("/")}
        structuredData={[localBusinessStructuredData, flagshipOfferStructuredData, featuredProjectsStructuredData]}
      />
      <PageShell>
        <HeroSection />
        <ValueProposition />
        <WhyChooseUs />
        <SolutionsOverview />
        <ProjectsSection />
        <CertificationsSection />
        <InsightsSection />
        <InvestSwipeSection />
        <CTASection />
      </PageShell>
    </>
  );
};

export default Index;
