import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ValueProposition from "@/components/home/ValueProposition";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SolutionsOverview from "@/components/home/SolutionsOverview";
import CaseStudies from "@/components/home/CaseStudies";
import StatsSection from "@/components/home/StatsSection";
import TechSection from "@/components/home/TechSection";
import InvestSwipeSection from "@/components/home/InvestSwipeSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import InsightsSection from "@/components/home/InsightsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <WhyChooseUs />
        <SolutionsOverview />
        <CaseStudies />
        <StatsSection />
        <TechSection />
        <InvestSwipeSection />
        <CertificationsSection />
        <InsightsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
