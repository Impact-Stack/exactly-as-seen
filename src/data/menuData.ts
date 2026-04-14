// ── Data ──────────────────────────────────────────────────────────────────────

export const megaMenus: Record<
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

export const navLinks = [
  { label: "Solutions", hasDropdown: true, href: "/services/web" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", hasDropdown: true, href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];