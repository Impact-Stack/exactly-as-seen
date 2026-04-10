import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenu, MdClose, MdExpandMore } from "react-icons/md";
import { Button, IconButton } from "@mui/material";

// ── Data ──────────────────────────────────────────────────────────────────────

const megaMenus: Record<
  string,
  {
    primaryLinks: { label: string; href: string }[];
    columns: { title: string; links: { label: string; href: string }[] }[];
    spotlight?: { title: string; description: string; meta: string };
  }
> = {
  Solutions: {
    primaryLinks: [
      { label: "Enterprise Web Apps", href: "/services/web" },
      { label: "Mobile Solutions", href: "/services/mobile" },
      { label: "Security and Compliance", href: "/services/security" },
      { label: "Government Delivery", href: "/services/government" },
    ],
    columns: [
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
    spotlight: {
      title: "Built for Africa's Digital Future",
      description:
        "From government portals to fintech platforms, we architect software that scales with ambition.",
      meta: "Our Work  •  ImpactStack Africa",
    },
  },
  About: {
    primaryLinks: [
      { label: "Our Story", href: "/about" },
      { label: "Leadership", href: "/about" },
      { label: "Values and Mission", href: "/about" },
      { label: "Careers", href: "/about" },
    ],
    columns: [
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
    spotlight: {
      title: "Driven by Purpose, Built with Precision",
      description:
        "A team of engineers and strategists committed to delivering software that creates lasting impact.",
      meta: "Company  •  ImpactStack Africa",
    },
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

// ── Helpers ───────────────────────────────────────────────────────────────────

const isActive = (pathname: string, label: string, href?: string) => {
  if (!href) return false;
  if (label === "Solutions")
    return (
      pathname.startsWith("/services") || pathname.startsWith("/investswipe")
    );
  return pathname === href || pathname.startsWith(`${href}/`);
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { pathname } = useLocation();

  return (
    <>
      <style>{`
        /* ── Nav link base ── */
        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #9CA3AF;
          letter-spacing: 0.01em;
          transition: color 0.15s ease;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
        }
        .nav-link:hover,
        .nav-link.active {
          color: #ffffff;
        }
        .nav-indicator {
          font-size: 0.65rem;
          font-weight: 400;
          color: #6B7280;
          transition: color 0.15s ease;
          margin-left: 2px;
        }
        .nav-link:hover .nav-indicator,
        .nav-link.active .nav-indicator {
          color: #9CA3AF;
        }

        /* ── Mega menu panel ── */
        .mega-panel {
          position: absolute;
          top: calc(100% + 1px);
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          min-width: 780px;
        }
        .mega-inner {
          background: #0c0c0e;
          border: 1px solid rgba(255,255,255,0.07);
          border-top: none;
          display: grid;
          grid-template-columns: 220px 1fr 280px;
          overflow: hidden;
        }

        /* Primary links column */
        .mega-primary {
          padding: 36px 32px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .mega-primary-link {
          display: block;
          font-size: 1.375rem;
          font-weight: 500;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          line-height: 1.3;
          padding: 6px 0;
          transition: color 0.15s ease;
          letter-spacing: -0.02em;
          font-family: inherit;
        }
        .mega-primary-link:hover {
          color: #ffffff;
        }

        /* Secondary columns */
        .mega-secondary {
          padding: 36px 32px;
          display: flex;
          gap: 40px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .mega-col-title {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4B5563;
          margin-bottom: 14px;
        }
        .mega-col-link {
          display: block;
          font-size: 0.8125rem;
          color: #6B7280;
          text-decoration: none;
          padding: 4px 0;
          transition: color 0.15s ease;
          font-weight: 400;
        }
        .mega-col-link:hover {
          color: #e5e7eb;
        }

        /* Spotlight column */
        .mega-spotlight {
          padding: 36px 28px;
          background: #0a0a0c;
        }
        .mega-spotlight-eyebrow {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4B5563;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .mega-spotlight-eyebrow::before {
          content: '✦';
          font-size: 0.55rem;
          color: #8B5CF6;
        }
        .mega-spotlight-title {
          font-size: 1rem;
          font-weight: 500;
          color: #e5e7eb;
          line-height: 1.45;
          margin-bottom: 10px;
          letter-spacing: -0.015em;
        }
        .mega-spotlight-desc {
          font-size: 0.75rem;
          color: #6B7280;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .mega-spotlight-card {
          border-radius: 6px;
          overflow: hidden;
          background: linear-gradient(135deg, #1a1035 0%, #0f0f1a 100%);
          border: 1px solid rgba(139,92,246,0.15);
          aspect-ratio: 16/9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .mega-spotlight-card-inner {
          text-align: center;
          padding: 20px;
        }
        .mega-spotlight-card-icon {
          font-size: 1.5rem;
          margin-bottom: 6px;
          opacity: 0.5;
        }
        .mega-spotlight-card-label {
          font-size: 0.65rem;
          color: rgba(139,92,246,0.6);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 500;
        }
        .mega-spotlight-meta {
          font-size: 0.7rem;
          color: #4B5563;
          letter-spacing: 0.02em;
        }

        /* Animation */
        @keyframes menuFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-4px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .mega-panel {
          animation: menuFadeIn 0.15s ease forwards;
        }

        /* Mobile nav links */
        .mobile-nav-link {
          display: block;
          font-size: 0.9375rem;
          font-weight: 500;
          color: #6B7280;
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.15s ease;
        }
        .mobile-nav-link:hover {
          color: #ffffff;
        }
      `}</style>

      <header
        className="fixed top-0 left-0 right-0 z-50 bg-[#05050A]/80 backdrop-blur-xl"
      >
        <div className="container-narrow flex items-center justify-between h-[76px]">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-xl font-bold font-display group"
          >
            <img
              src="/logo.png"
              alt="ImpactStack Africa Logo"
              className="h-20 w-auto object-contain brightness-130 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-all duration-300 group-hover:scale-105"
            />

          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const menuId = `menu-${link.label.toLowerCase()}`;
              const active = isActive(pathname, link.label, link.href);
              const isOpen = activeMenu === link.label;
              const menu = link.hasDropdown ? megaMenus[link.label] : null;

              return link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(link.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                  onFocus={() => setActiveMenu(link.label)}
                  onBlur={(e) => {
                    const next = e.relatedTarget as Node | null;
                    if (!e.currentTarget.contains(next)) setActiveMenu(null);
                  }}
                >
                  <button
                    className={`nav-link${active ? " active" : ""}`}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    onClick={() =>
                      setActiveMenu((prev) =>
                        prev === link.label ? null : link.label
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setActiveMenu(null);
                    }}
                  >
                    {link.label}
                    <span className="nav-indicator">{isOpen ? "–" : "+"}</span>
                  </button>

                  {isOpen && menu && (
                    <div
                      id={menuId}
                      className="mega-panel"
                      role="menu"
                      onKeyDown={(e) => {
                        if (e.key === "Escape") setActiveMenu(null);
                      }}
                    >
                      <div className="mega-inner">

                        {/* Column 1 — large primary links */}
                        <div className="mega-primary">
                          {menu.primaryLinks.map((l) => (
                            <Link
                              key={l.label}
                              to={l.href}
                              className="mega-primary-link"
                              role="menuitem"
                            >
                              {l.label}
                            </Link>
                          ))}
                        </div>

                        {/* Column 2 — secondary grouped links */}
                        <div className="mega-secondary">
                          {menu.columns.map((col) => (
                            <div key={col.title} style={{ minWidth: 150 }}>
                              <p className="mega-col-title">{col.title}</p>
                              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {col.links.map((l) => (
                                  <li key={l.label}>
                                    <Link
                                      to={l.href}
                                      className="mega-col-link"
                                      role="menuitem"
                                    >
                                      {l.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Column 3 — spotlight */}
                        {menu.spotlight && (
                          <div className="mega-spotlight">
                            <p className="mega-spotlight-eyebrow">Spotlight</p>
                            <p className="mega-spotlight-title">
                              {menu.spotlight.title}
                            </p>
                            <p className="mega-spotlight-desc">
                              {menu.spotlight.description}
                            </p>
                            <div className="mega-spotlight-card">
                              <div className="mega-spotlight-card-inner">
                                <div className="mega-spotlight-card-icon">⬡</div>
                                <div className="mega-spotlight-card-label">
                                  ImpactStack
                                </div>
                              </div>
                            </div>
                            <p className="mega-spotlight-meta">
                              {menu.spotlight.meta}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href!}
                  className={`nav-link${active ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              component={Link}
              to="/contact"
              variant="outlined" // Switched to outlined to better match a bordered design
              className="button-secondary w-full px-6 py-2.5 text-sm inline-block border border-gray-500 rounded hover:border-white transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ textTransform: 'none' }}
            >
              Book a Consultation
            </Button>
          </div>
          {/* px-6 py-2.5 text-sm */}

          {/* Mobile toggle */}
          <IconButton
            className="lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            sx={{ color: "#FFFFFF" }}
          >
            {mobileOpen ? (
              <MdClose className="w-6 h-6" />
            ) : (
              <MdMenu className="w-6 h-6" />
            )}
          </IconButton>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden bg-[#0B0B12] border-t border-white/5 px-4 pb-6"
          >
            <nav className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href || "/"}
                  className="mobile-nav-link"
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
    </>
  );
}