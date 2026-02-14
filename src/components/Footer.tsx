import { Link } from "react-router-dom";
import { Linkedin, Github, Twitter } from "lucide-react";

const footerLinks = {
  solutions: [
    { label: "Web Applications", href: "/services/web" },
    { label: "Mobile Development", href: "/services/mobile" },
    { label: "Security & Compliance", href: "/services/security" },
    { label: "Government Services", href: "/services/government" },
    { label: "InvestSwipe", href: "/investswipe" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Careers", href: "/about" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground border-t border-border">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="text-xl font-bold font-display block mb-3">
              <span className="text-foreground">Impact</span>
              <span className="text-primary">Stack</span>
              <span className="text-success font-normal ml-0.5">Africa</span>
            </Link>
            <p className="text-small text-muted-foreground mb-4">Building Solutions. Creating Jobs.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all" aria-label="GitHub"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="tag-label text-muted-foreground mb-4">SOLUTIONS</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((l) => (
                <li key={l.label}><Link to={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="tag-label text-muted-foreground mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((l) => (
                <li key={l.label}><Link to={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="tag-label text-muted-foreground mb-4">CONTACT</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 lisowycliff@gmail.com</li>
              <li>📱 083 894 7546</li>
              <li>📍 Kommetjie, Cape Town</li>
              <li>🕐 Mon-Fri, 8AM-5PM SAST</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-border">
        <div className="container-narrow py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-small text-muted-foreground">
          <p>© 2026 ImpactStack Africa (Pty) Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
