import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import OrbModel from "./OrbModel";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#020204] text-white border-b border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_80%_40%,rgba(91,62,177,0.15),transparent_65%)]" />
      <div className="container-narrow relative grid lg:grid-cols-[1.2fr_1fr] items-center gap-4 lg:gap-10 pt-12 md:pt-20 pb-12 lg:py-24">
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.22em] text-purple-300 mb-6">
            ImpactStack Africa · Cape Town
          </p>
          <h1 className="text-[2.6rem] sm:text-5xl xl:text-[3.5rem] leading-[1.06] tracking-tight font-display mb-7">
            Websites, web apps
            <br className="hidden sm:block" /> and business systems.
            <br />
            <span className="text-purple-300">Built for your business.</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#b5b7c6] max-w-xl mb-8">
            We help businesses, brands and organisations plan, design and build
            websites, online stores, booking platforms, dashboards and custom
            applications—with deployment and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/contact" className="button-primary gap-2">
              Start a Project <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/services" className="button-secondary">
              Explore Our Services
            </Link>
          </div>
          <p className="text-xs text-[#a1a1b5] mt-7">
            Plan & design <span className="text-purple-300 mx-2">/</span> Build
            & test <span className="text-purple-300 mx-2">/</span> Launch &
            support
          </p>
        </div>
        <div className="relative w-full max-w-[480px] mx-auto lg:max-w-none">
          <OrbModel />
          <div className="absolute bottom-2 inset-x-0 text-center text-[10px] tracking-[0.24em] text-[#a1a1b5] uppercase pointer-events-none">
            Ideas → Connected digital solutions
          </div>
        </div>
      </div>
    </section>
  );
}
