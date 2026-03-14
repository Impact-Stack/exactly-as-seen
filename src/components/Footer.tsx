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
    href: "https://linkedin.com/company/impactstack-africa",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/impactstack-africa",
    icon: FaGithub,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05050A] text-[#A1A1B5] border-t border-white/[0.07]">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="text-xl font-bold font-display block mb-3">
              <span className="text-[#8B5CF6]">ImpactStack</span>
              <span className="text-white"> Africa</span>
            </Link>
            <p className="text-small text-[#A1A1B5] mb-4">
              Enterprise technology delivery partner for South Africa.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A1A1B5] hover:text-white transition-colors"
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
                  href="mailto:hello@impactstack.africa"
                  className="hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <MdEmail className="w-4 h-4" />
                  hello@impactstack.africa
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

      <div className="border-t border-white/[0.07]">
        <div className="container-narrow py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-small text-white/30">
          <p>
            Copyright {currentYear} ImpactStack Africa (Pty) Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-4">
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
    </footer>
  );
}
