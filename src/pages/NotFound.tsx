import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { Button } from "@mui/material";
import heroBg from "@/assets/hero-bg.webp";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="404 | ImpactStack Africa"
        description="The page you requested could not be found."
        url={absoluteUrl(location.pathname)}
        robots="noindex, nofollow"
      />
      <div className="relative flex min-h-screen items-center justify-center bg-[#05050A] overflow-hidden">
        <img src={heroBg} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15" aria-hidden="true" />
        <div className="text-center relative">
          <p className="tag-label mb-3">Not Found</p>
          <h1 className="mb-4 text-4xl font-bold text-white">404</h1>
          <p className="mb-6 text-xl text-[#B5B7C6]">That page doesn&apos;t exist yet.</p>
          <Button href="/" variant="contained" color="primary" className="button-primary px-6 py-3 text-sm">
            Return to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
