import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { motion, AnimatePresence } from "framer-motion";
import { megaMenus, navLinks } from "@/data/menuData";

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
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  // ── Mobile overlay (portalled to document.body) ───────────────────────────
  const mobileOverlay = createPortal(
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{ position: "fixed", inset: 0, zIndex: 99999, background: "#05050A" }}
          className="flex flex-col items-center justify-center"
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-[76px] flex items-center justify-between px-5">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img
                src="/isa (2).webp"
                alt="ImpactStack Africa Logo"
                className="h-10 w-auto object-contain brightness-130 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white/50 hover:text-white transition-colors p-1"
              aria-label="Close menu"
            >
              <MdClose className="w-6 h-6" />
            </button>
          </div>

          {/* Centered links */}
          <nav className="flex flex-col items-center gap-1 w-full px-6">
            {navLinks.map((link, i) => {
              const active = isActive(pathname, link.label, link.href);

              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, delay: i * 0.04, ease: "easeOut" }}
                  className="w-full max-w-[280px]"
                >
                  <Link
                    to={link.href || "/"}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`relative flex items-center justify-center px-6 py-3.5 rounded-xl transition-colors duration-200 outline-none w-full ${
                      active ? "text-white" : "text-white/35 hover:text-white/60"
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="active-mobile-nav-pill"
                        className="absolute inset-0 bg-purple-600/25 border border-purple-500/35 rounded-xl shadow-[0_0_32px_0_rgba(139,92,246,0.15)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                      />
                    )}
                    <span className="relative z-10 text-xl font-medium tracking-wide">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );

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
          position: fixed;
          top: 72px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          min-width: 780px;
          width: 95vw;
          max-width: 1200px;
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

        /* Bridge the gap between trigger and panel */
        .mega-panel::before {
          content: '';
          position: absolute;
          top: -12px;
          left: 0;
          right: 0;
          height: 12px;
        }
      `}</style>

      {/* Portal overlay rendered outside header */}
      {mobileOverlay}

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#05050A]/80 backdrop-blur-xl">
        <div className="container-narrow flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-xl font-bold font-display group"
          >
            <img
              src="/isa (2).webp"
              alt="ImpactStack Africa Logo"
              className="h-12 w-auto object-contain brightness-130 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-all duration-300 group-hover:scale-105"
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
                  onMouseEnter={() => openMenu(link.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className={`nav-link${active ? " active" : ""}`}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    onClick={() =>
                      setActiveMenu((prev) =>
                        prev === link.label ? null : link.label,
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
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
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
                              <ul
                                style={{
                                  listStyle: "none",
                                  padding: 0,
                                  margin: 0,
                                }}
                              >
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
                                <div className="mega-spotlight-card-icon">
                                  ⬡
                                </div>
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
              variant="outlined"
              className="button-secondary w-full px-6 py-2.5 text-sm inline-block border border-gray-500 rounded hover:border-white transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ textTransform: "none" }}
            >
              Book a Consultation
            </Button>
          </div>

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
      </header>
    </>
  );
}