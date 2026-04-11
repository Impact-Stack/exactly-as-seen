import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

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
    href: "https://www.linkedin.com/company/impactstack-africa-pty-ltd/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Impact-Stack",
    icon: FaGithub,
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
          className="w-full h-full object-cover opacity-60"
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
                  src="/gif-orb.gif"
                  alt="ImpactStack Africa Logo"
                  /* Increased size and used a slight negative margin to tuck the text closer */
                  className="h-16 w-16 object-contain -ml-4 transition-transform duration-300"
                />
                <div className="flex flex-col -ml-1">
                  <span className="text-[#8B5CF6] text-xl font-bold font-display leading-none">
                    ImpactStack
                  </span>
                  <span className="text-white text-xl font-bold font-display leading-tight">
                    Africa
                  </span>
                </div>
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
                    className="text-[#A1A1B5] hover:text-white transition-all duration-200 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
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
                      className="text-sm text-[#A1A1B5] hover:text-white transition-colors"
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
                      className="text-sm text-[#A1A1B5] hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-4">
                CONTACT
              </h4>
              <ul className="space-y-3 text-sm text-[#A1A1B5]">
                <li>
                  <a
                    href="mailto:business@impactstack.africa"
                    className="hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <MdEmail className="w-4 h-4" />
                    business@impactstack.africa
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+27838947546"
                    className="hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <MdPhone className="w-4 h-4" />
                    +27 83 894 7546
                  </a>
                </li>
                <li>Kommetjie, Cape Town</li>
                <li>Mon-Fri, 8AM-5PM SAST</li>
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
