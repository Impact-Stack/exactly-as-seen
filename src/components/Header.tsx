import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const megaMenus: Record<string, { columns: { title: string; links: { label: string; href: string }[] }[] }> = {
  Solutions: {
    columns: [
      { title: "By Technology", links: [
        { label: "Web Applications", href: "/services/web" },
        { label: "Mobile Development", href: "/services/mobile" },
        { label: "Cloud Solutions", href: "/services/web" },
        { label: "Security and Compliance", href: "/services/security" },
      ]},
      { title: "By Need", links: [
        { label: "Digital Transformation", href: "/services/web" },
        { label: "System Integration", href: "/services/web" },
        { label: "Legacy Modernization", href: "/services/web" },
        { label: "Custom Development", href: "/services/web" },
      ]},
      { title: "Featured", links: [
        { label: "InvestSwipe Platform", href: "/investswipe" },
        { label: "Government Solutions", href: "/services/government" },
        { label: "Enterprise Software", href: "/services/web" },
      ]},
    ],
  },
  Services: {
    columns: [
      { title: "Development", links: [
        { label: "Software Development", href: "/services/web" },
        { label: "Mobile App Development", href: "/services/mobile" },
        { label: "API Development", href: "/services/web" },
        { label: "UX and Product Design", href: "/services/web" },
      ]},
      { title: "Cloud and Security", links: [
        { label: "Cloud Services", href: "/services/web" },
        { label: "Security Services", href: "/services/security" },
        { label: "POPIA Compliance", href: "/services/security" },
        { label: "Infrastructure Advisory", href: "/services/web" },
      ]},
      { title: "Support", links: [
        { label: "Consulting", href: "/contact" },
        { label: "Training", href: "/contact" },
        { label: "Managed Services", href: "/contact" },
        { label: "Quality Assurance", href: "/services/web" },
      ]},
    ],
  },
  About: {
    columns: [
      { title: "Company", links: [
        { label: "Our Story", href: "/about" },
        { label: "Leadership", href: "/about" },
        { label: "Values and Mission", href: "/about" },
        { label: "Careers", href: "/about" },
      ]},
      { title: "Resources", links: [
        { label: "News and Insights", href: "/insights" },
        { label: "Case Studies", href: "/portfolio" },
        { label: "Partners", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]},
    ],
  },
};

const navLinks = [
  { label: "Solutions", hasDropdown: true, href: "/services/web" },
  { label: "Services", hasDropdown: true, href: "/services/web" },
  { label: "About", hasDropdown: true, href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const isActive = (pathname: string, label: string, href?: string) => {
  if (!href) return false;
  if (label === "Solutions" || label === "Services") return pathname.startsWith("/services") || pathname.startsWith("/investswipe");
  return pathname === href || pathname.startsWith(`${href}/`);
};

const navLinkClass = (active: boolean) =>
  `relative inline-flex items-center gap-1 text-sm font-semibold text-[#9CA3AF] transition-colors hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#0047BB] after:transition-opacity ${
    active ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-100"
  }`;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { pathname } = useLocation();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#080D1A]/90 backdrop-blur-xl border-b border-white/[0.08] ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-1 text-xl font-bold font-display">
          <span className="text-primary">ImpactStack</span>
          <span className="text-foreground">Africa</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const menuId = `menu-${link.label.toLowerCase()}`;
            return link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(link.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold">
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeMenu === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-[#0B1120]/95 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-xl p-8 min-w-[620px]">
                      <div className={`grid gap-8 ${megaMenus[link.label].columns.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                        {megaMenus[link.label].columns.map((col) => (
                          <div key={col.title}>
                            <p className="tag-label text-primary mb-3">{col.title}</p>
                            <ul className="space-y-2">
                              {col.links.map((l) => (
                                <li key={l.label}>
                                  <Link to={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1">
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.label} to={link.href!} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-semibold">
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground text-label uppercase px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 btn-primary-glow"
          >
            Book Consultation
          </Link>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-white/[0.08] px-4 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href || "/"}
                className="text-body text-muted-foreground font-semibold py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground text-center text-label uppercase px-6 py-3 rounded-lg mt-2 btn-primary-glow"
              onClick={() => setMobileOpen(false)}
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
