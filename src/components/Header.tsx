import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenu, MdClose, MdExpandMore } from "react-icons/md";
import { Button, IconButton } from "@mui/material";

const megaMenus: Record<string, { columns: { title: string; links: { label: string; href: string }[] }[] }> = {
  Solutions: {
    columns: [
      {
        title: "Core Services",
        links: [
          { label: "Enterprise Web Apps", href: "/services/web" },
          { label: "Mobile Solutions", href: "/services/mobile" },
          { label: "Security and Compliance", href: "/services/security" },
          { label: "Government Delivery", href: "/services/government" },
        ],
      },
      {
        title: "Delivery Support",
        links: [
          { label: "Discovery and Scoping", href: "/contact" },
          { label: "System Integration", href: "/services/web" },
          { label: "Legacy Modernization", href: "/services/web" },
          { label: "Quality Assurance", href: "/services/web" },
        ],
      },
      {
        title: "Featured",
        links: [
          { label: "InvestSwipe Platform", href: "/investswipe" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Pricing Overview", href: "/pricing" },
        ],
      },
    ],
  },
  About: {
    columns: [
      {
        title: "Company",
        links: [
          { label: "Our Story", href: "/about" },
          { label: "Leadership", href: "/about" },
          { label: "Values and Mission", href: "/about" },
          { label: "Careers", href: "/about" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "News and Insights", href: "/insights" },
          { label: "Case Studies", href: "/portfolio" },
          { label: "Partners", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
};

const navLinks = [
  { label: "Solutions", hasDropdown: true, href: "/services/web" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", hasDropdown: true, href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const isActive = (pathname: string, label: string, href?: string) => {
  if (!href) return false;
  if (label === "Solutions") return pathname.startsWith("/services") || pathname.startsWith("/investswipe");
  return pathname === href || pathname.startsWith(`${href}/`);
};

const navLinkClass = (active: boolean) =>
  `relative inline-flex items-center gap-1 text-sm font-semibold text-[#9CA3AF] transition-colors hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#8B5CF6] after:transition-opacity ${
    active ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-100"
  }`;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#05050A]/80 backdrop-blur-xl">
      <div className="container-narrow flex items-center justify-between h-[76px]">
        <Link to="/" className="flex items-center gap-1 text-xl font-bold font-display">
          <span className="text-[#8B5CF6]">ImpactStack</span>
          <span className="text-white">Africa</span>
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
                onFocus={() => setActiveMenu(link.label)}
                onBlur={(event) => {
                  const next = event.relatedTarget as Node | null;
                  if (!event.currentTarget.contains(next)) {
                    setActiveMenu(null);
                  }
                }}
              >
                <Button
                  type="button"
                  className={navLinkClass(isActive(pathname, link.label, link.href))}
                  aria-haspopup="true"
                  aria-expanded={activeMenu === link.label}
                  aria-controls={menuId}
                  onClick={() => setActiveMenu((prev) => (prev === link.label ? null : link.label))}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      setActiveMenu(null);
                    }
                  }}
                  variant="text"
                  color="inherit"
                  disableRipple
                  endIcon={<MdExpandMore className="w-3.5 h-3.5" />}
                  sx={{ minWidth: "auto", padding: 0 }}
                >
                  {link.label}
                </Button>
                {activeMenu === link.label && (
                  <div id={menuId} className="absolute top-full left-1/2 -translate-x-1/2 pt-3" role="menu">
                    <div className="bg-[#0A0A0A] border border-white/[0.08] rounded-xl shadow-2xl shadow-black/80 p-8 min-w-[620px]" onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        setActiveMenu(null);
                      }
                    }}>
                      <div className={`grid gap-8 ${megaMenus[link.label].columns.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                        {megaMenus[link.label].columns.map((col) => (
                          <div key={col.title}>
                            <p className="tag-label mb-3">{col.title}</p>
                            <ul className="space-y-2">
                              {col.links.map((l) => (
                                <li key={l.label}>
                                  <Link to={l.href} className="text-sm text-[#9CA3AF] hover:text-white transition-colors block py-1" role="menuitem">
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
              <Link key={link.label} to={link.href!} className={navLinkClass(isActive(pathname, link.label, link.href))}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <Button component={Link} to="/contact" variant="contained" color="primary" className="button-primary px-6 py-2.5 text-sm">
            Book a Consultation
          </Button>
        </div>

        <IconButton
          className="lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          sx={{ color: "#FFFFFF" }}
        >
          {mobileOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
        </IconButton>
      </div>

      {mobileOpen && (
        <div id="mobile-nav" className="lg:hidden bg-[#0B0B12] border-t border-white/5 px-4 pb-6">
          <nav className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href || "/"}
                className="text-body text-[#9CA3AF] hover:text-white font-semibold py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              className="button-primary mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Book a Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

