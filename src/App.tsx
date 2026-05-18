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
const InsightArticle = lazy(() => import("./pages/InsightsArticle"));
const LegalPage = lazy(() => import("./pages/Legal"));
const Pricing = lazy(() => import("./pages/Pricing"));
const IndustriesPage = lazy(() => import("./pages/Industries"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div
    style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "#05050A",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}
  >
    {/* Ambient glow */}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "600px",
        background:
          "radial-gradient(circle at center, rgba(139,92,246,0.12), transparent 65%)",
        pointerEvents: "none",
      }}
    />
 
    {/* Wordmark */}
    <div
      style={{
        position: "relative",
        marginBottom: "3rem",
        display: "flex",
        alignItems: "center",
        gap: "0.625rem",
      }}
    >
      {/* Icon mark */}
      <img
        src="/isa (2).webp"
        alt="ImpactStack Africa"
        style={{ width: "32px", height: "32px", objectFit: "contain", flexShrink: 0 }}
      />
 
      <span
        style={{
          fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "1.125rem",
          color: "#ffffff",
          letterSpacing: "-0.02em",
        }}
      >
        ImpactStack
        <span style={{ color: "#a78bfa" }}> Africa</span>
      </span>
    </div>
 
    {/* Spinner track */}
    <div style={{ position: "relative", width: "40px", height: "40px" }}>
      {/* Static track ring */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        style={{ position: "absolute", inset: 0 }}
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          fill="none"
          stroke="rgba(139,92,246,0.12)"
          strokeWidth="2"
        />
      </svg>
 
      {/* Spinning arc */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        style={{
          position: "absolute",
          inset: 0,
          animation: "impactstack-spin 1s linear infinite",
        }}
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          fill="none"
          stroke="url(#spinGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="28 72"
          strokeDashoffset="0"
        />
        <defs>
          <linearGradient id="spinGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
 
    {/* Keyframes injected inline */}
    <style>{`
      @keyframes impactstack-spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);
 
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

    <Suspense fallback={<PageLoader/>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<InsightArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/investswipe" element={<InvestSwipe />} />
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