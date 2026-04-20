import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { motion } from "framer-motion";

// --- MUI OPTIMIZATION ---
import Button from "@mui/material/Button"; 

// --- ASSETS ---
import heroBg from "@/assets/hero-bg.webp";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Analytics or logging can go here
    console.error("404 Error: Path:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="404 | ImpactStack Africa"
        description="The page you requested could not be found."
        url={absoluteUrl(location.pathname)}
        robots="noindex, nofollow"
      />
      
      <div className="relative flex min-h-screen items-center justify-center bg-[#05050A] overflow-hidden px-6">
        {/* Background Layer with Performance Fix */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img 
            src={heroBg} 
            alt="" 
            className="h-full w-full object-cover grayscale" 
            {...({ fetchpriority: "high" } as any)}
          />
          {/* Subtle vignette for focus */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05050A_100%)]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center relative z-10"
        >
          <p className="text-[10px] font-black tracking-[0.5em] text-purple-500 uppercase mb-6">
            Error Code // 404
          </p>
          
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 opacity-20">
            NULL
          </h1>
          
          <p className="mb-10 text-xl text-[#B5B7C6] font-medium tracking-tight max-w-sm mx-auto">
            The technical documentation or route you requested does not exist.
          </p>
          
          <Button 
            component={Link} // Use React Router Link to prevent full page reload
            to="/" 
            variant="contained"
            className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-purple-50 transition-all active:scale-95"
            sx={{ textTransform: 'none' }}
          >
            Return to Core
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;