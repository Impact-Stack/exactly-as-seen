import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const megaMenus: Record<string, { columns: { title: string; links: { label: string; href: string }[] }[] }> = {
  Solutions: {
    columns: [
      { title: "By Technology", links: [{ label: "Web Applications", href: "/services/web" }, { label: "Mobile Development", href: "/services/mobile" }, { label: "Cloud Solutions", href: "/services/web" }, { label: "Security & Compliance", href: "/services/security" }] },
      { title: "By Need", links: [{ label: "Digital Transformation", href: "/services/web" }, { label: "System Integration", href: "/services/web" }, { label: "Legacy Modernization", href: "/services/web" }, { label: "Custom Development", href: "/services/web" }] },
      { title: "Featured", links: [{ label: "🚀 InvestSwipe Platform", href: "/investswipe" }, { label: "🏛️ Government Solutions", href: "/services/government" }, { label: "🏢 Enterprise Software", href: "/services/web" }] },
    ],
  },
  Services: {
    columns: [
      { title: "Development", links: [{ label: "Software Development", href: "/services/web" }, { label: "Mobile App Development", href: "/services/mobile" }, { label: "Web Development", href: "/services/web" }, { label: "API Development", href: "/services/web" }] },
      { title: "Cloud & Security", links: [{ label: "Cloud Services", href: "/services/web" }, { label: "Security Services", href: "/services/security" }, { label: "POPIA Compliance", href: "/services/security" }, { label: "Infrastructure", href: "/services/web" }] },
      { title: "Support", links: [{ label: "Consulting", href: "/contact" }, { label: "Training", href: "/contact" }, { label: "Managed Services", href: "/contact" }, { label: "Quality Assurance", href: "/services/web" }] },
    ],
  },
  About: {
    columns: [
      { title: "", links: [{ label: "Our Story", href: "/about" }, { label: "Leadership Team", href: "/about" }, { label: "Values & Mission", href: "/about" }, { label: "Careers", href: "/about" }] },
      { title: "", links: [{ label: "News & Insights", href: "/" }, { label: "Case Studies", href: "/portfolio" }, { label: "Partners", href: "/about" }, { label: "Contact Us", href: "/contact" }] },
    ],
  },
};

const navLinks = [
  { label: "Solutions", hasDropdown: true },
  { label: "Services", hasDropdown: true },
  { label: "About", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "InvestSwipe", href: "/investswipe" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
      <div className="container-narrow flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0.5 text-xl font-bold">
          <span className="text-primary">ImpactStack</span>
          <span className="text-success font-normal">Africa</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(link.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 text-body text-foreground link-hover font-medium">
                  {link.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeMenu === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-background rounded-lg shadow-xl border p-10 min-w-[500px]">
                      <div className={`grid gap-8 ${megaMenus[link.label].columns.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                        {megaMenus[link.label].columns.map((col, i) => (
                          <div key={i}>
                            {col.title && <p className="tag-label text-muted-foreground mb-3">{col.title}</p>}
                            <ul className="space-y-2">
                              {col.links.map((l) => (
                                <li key={l.label}>
                                  <Link to={l.href} className="text-body text-foreground link-hover block py-1">
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
              <Link key={link.label} to={link.href!} className="text-body text-foreground link-hover font-medium">
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-foreground link-hover" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground text-label uppercase px-6 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t px-4 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href || "/"}
                className="text-body text-foreground font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground text-center text-label uppercase px-6 py-3 rounded-md mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
