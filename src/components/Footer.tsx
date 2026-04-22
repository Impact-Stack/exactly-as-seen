import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdAccessTime, MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const footerLinks = {
  solutions: [
    { label: "Web Applications", href: "/services/web" },
    { label: "Mobile Development", href: "/services/mobile" },
    { label: "Security and Compliance", href: "/services/security" },
    { label: "Government Services", href: "/services/government" },
    { label: "InvestSwipe", href: "/investswipe" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "News and Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/impactstack-africa-pty-ltd/posts/?feedView=all",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Impact-Stack",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/impactstack_africa/",
    icon: FaInstagram,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.07]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/footer-bg.webp"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
      </div>

      {/* Glassmorphism Blur Layer */}
      <div className="absolute inset-0 z-10 bg-[#05050A]/70 backdrop-blur-2xl" />

      {/* Main Content Layer */}
      <div className="relative z-20">
        <div className="container-narrow section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-[#A1A1B5]">
            <div className="flex flex-col items-start">
              {/* 1. Logo & Brand Name Stacked */}
              <Link to="/" className="flex items-center mb-4 group">
                <img
                  src="/isa (4).webp"
                  alt="ImpactStack Africa Logo"
                  className="h-12 w-auto object-contain -ml-1 brightness-130 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-all duration-300 group-hover:scale-105"
                />
              </Link>

              {/* 2. Description Text */}
              <p className="text-sm text-[#A1A1B5] mb-6 max-w-[240px] leading-relaxed">
                Enterprise technology delivery partner for South Africa.
              </p>

              {/* 3. Social Icons */}
              <div className="flex gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#A1A1B5] hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-4">
                SOLUTIONS
              </h4>
              <ul className="space-y-2">
                {footerLinks.solutions.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="text-sm text-[#A1A1B5] hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-4">
                COMPANY
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="text-sm text-[#A1A1B5] hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-bold mb-6">
                Connect
              </h4>
              <ul className="space-y-4 text-sm text-[#A1A1B5]">
                <li>
                  <a href="mailto:business@impactstack.africa" className="hover:text-white transition-colors flex items-center gap-3 group">
                    <MdEmail className="w-4 h-4 text-purple-500/70 group-hover:text-purple-400" />
                    business@impactstack.africa
                  </a>
                </li>
                <li>
                  <a href="tel:+27838947546" className="hover:text-white transition-colors flex items-center gap-3 group">
                    <MdPhone className="w-4 h-4 text-purple-500/70 group-hover:text-purple-400" />
                    +27 83 894 7546
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MdLocationOn className="w-4 h-4 mt-0.5 text-purple-500/70" />
                  <span>Kommetjie, Cape Town</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdAccessTime className="w-4 h-4 text-purple-500/70" />
                  <span>Mon-Fri, 8AM-5PM SAST</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] bg-black/20">
          <div className="container-narrow py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-small text-white/30">
            <p>
              Copyright {currentYear} ImpactStack Africa (Pty) Ltd. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/index.md" className="hover:text-white transition-colors">
                AI Index
              </a>
              <a href="/llms.txt" className="hover:text-white transition-colors">
                AI Instructions
              </a>
              <Link
                to="/legal/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/legal/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/legal/cookie-policy"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}