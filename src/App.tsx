import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { initAnalytics, pageview } from "@/lib/analytics";

/* =========================
   LAZY LOADED PAGES
========================= */
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const InvestSwipe = lazy(() => import("./pages/InvestSwipe"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const InsightsPage = lazy(() => import("./pages/Insights"));
const LegalPage = lazy(() => import("./pages/Legal"));
const Pricing = lazy(() => import("./pages/Pricing"));
const IndustriesPage = lazy(() => import("./pages/Industries"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

/* =========================
   SCROLL RESTORE
========================= */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* =========================
   ANALYTICS TRACKER
========================= */
const RouteAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
};

/* =========================
   ROUTES
========================= */
const AppRoutes = () => (
  <>
    <RouteAnalyticsTracker />

    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/investswipe" element={<InvestSwipe />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/legal/:slug" element={<LegalPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </>
);

/* =========================
   APP ROOT
========================= */
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
            <ScrollToTop />
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;