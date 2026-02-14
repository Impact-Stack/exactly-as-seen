import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SolutionsOverview from "@/components/home/SolutionsOverview";
import CaseStudies from "@/components/home/CaseStudies";
import StatsSection from "@/components/home/StatsSection";
import TechSection from "@/components/home/TechSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import InvestSwipeSection from "@/components/home/InvestSwipeSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import InsightsSection from "@/components/home/InsightsSection";
import CTASection from "@/components/home/CTASection";
import { absoluteUrl } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ImpactStack Africa",
  description: "Enterprise software development and fintech solutions",
  url: absoluteUrl("/"),
  telephone: "+27838947546",
  email: "hello@impactstack.africa",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  priceRange: "R50000-R500000",
  openingHours: "Mo-Fr 08:00-17:00",
};

const Index = () => {
  return (
    <>
      <SEO
        title="ImpactStack Africa | Enterprise Software Development Cape Town"
        description="Youth-led Cape Town software agency. Web apps from R50k, mobile apps from R80k. Google Cybersecurity certified. Enterprise quality. Startup pricing."
        url={absoluteUrl("/")}
        structuredData={structuredData}
      />
      <PageShell>
        <HeroSection />
        <ValueProposition />
        <WhyChooseUs />
        <SolutionsOverview />
        <CaseStudies />
        <StatsSection />
        <TechSection />
        <SkillsSection />
        <ProjectsSection />
        <InvestSwipeSection />
        <CertificationsSection />
        <InsightsSection />
        <CTASection />
      </PageShell>
    </>
  );
};

export default Index;
