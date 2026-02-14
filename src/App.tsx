import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { initAnalytics, pageview } from "@/lib/analytics";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import InvestSwipe from "./pages/InvestSwipe";
import ServicePage from "./pages/ServicePage";
import InsightsPage from "./pages/Insights";
import LegalPage from "./pages/Legal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RouteAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
};

const AppRoutes = () => (
  <>
    <RouteAnalyticsTracker />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/investswipe" element={<InvestSwipe />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="/legal/:slug" element={<LegalPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => {
  useEffect(() => {
    initAnalytics(import.meta.env.VITE_GA_ID);
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
