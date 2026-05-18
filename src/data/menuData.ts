// ── Data ──────────────────────────────────────────────────────────────────────

export const megaMenus: Record<
  string,
  {
    primaryLinks: { label: string; href: string }[];
    columns: { title: string; links: { label: string; href: string }[] }[];
    spotlight?: { title: string; description: string; meta: string };
  }
> = {
  Industries: {
    primaryLinks: [
      { label: "View All Industries", href: "/industries/" },
    ],
    columns: [
      {
        title: "Industries",
        links: [
          { label: "Government and Public Sector", href: "/industries/government-and-public-sector" },
          { label: "Financial Services", href: "/industries/financial-services" },
          { label: "Healthcare", href: "/industries/healthcare" },
          { label: "Mining and Energy", href: "/industries/mining-and-energy" },
          { label: "Retail and Commerce", href: "/industries/retail-and-commerce" },
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
    ],
    columns: [
      {
        title: "Resources",
        links: [
          { label: "News and Insights", href: "/insights" },
          { label: "Case Studies", href: "/portfolio" },
          { label: "Pricing", href: "/pricing" },
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
  { label: "Home", href: "/" },
  { label: "Industries", hasDropdown: true, href: "/industries" },
  { label: "About", hasDropdown: true, href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" }, 
  { label: "Contact", href: "/contact" },
];