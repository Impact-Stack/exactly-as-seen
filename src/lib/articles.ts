export type ArticleCategory = "Digital Transformation" | "Cybersecurity" | "Cloud & Infrastructure";

export type ArticleTag =
  | "Government & Public Sector"
  | "Financial Services"
  | "Healthcare & Mining";

export type ArticleContentBlock =
  | { type: "intro"; text: string }
  | { type: "heading"; text: string }
  | { type: "body"; text: string; source?: string }
  | { type: "closing"; text: string }
  | { type: "sources"; links: { label: string; url: string }[] };

export interface Article {
  id: string; // zero-padded number string, e.g. "01", "02"
  category: ArticleCategory;
  date: string;
  readTime: string;
  tag: ArticleTag;
  title: string;
  subtitle: string;
  author: string;
  heroColor: string;
  heroBg: string;
  slug: string; // used for /insights/:slug routing
  content: ArticleContentBlock[];
}

export const allArticles: Article[] = [
  {
    id: "01",
    category: "Digital Transformation",
    date: "12 May 2026",
    readTime: "6 min read",
    tag: "Government & Public Sector",
    title: "Why African Governments Can No Longer Afford to Delay Digital Transformation",
    subtitle:
      "From GovTech platforms to citizen-first web applications, the pressure on the public sector to modernise has never been greater — and the window to act is narrowing fast.",
    author: "ImpactStack Editorial",
    heroColor: "#0F6E56",
    heroBg: "#E1F5EE",
    slug: "african-governments-digital-transformation",
    content: [
      {
        type: "intro",
        text: "Africa's public sector stands at a critical crossroads. On one side lies a legacy of under-resourced, paper-dependent service delivery. On the other, a rapidly growing, digitally connected population demanding faster, more transparent, and accessible government services. The momentum building across the continent makes one thing abundantly clear: the era of incremental digital adoption is over.",
      },
      {
        type: "heading",
        text: "The GovTech Surge Is Already Underway",
      },
      {
        type: "body",
        text: "The World Economic Forum's 2025 Global Public Impact of GovTech Report projects the global GovTech market will expand from USD 606 billion in 2024 to USD 1.4 trillion by 2034 — creating a USD 9.8 trillion opportunity to deliver public value. For Africa, this isn't a distant possibility; it's an active reality. Kenya's eCitizen platform had digitised over 22,000 government services by mid-2025, reaching more than 13.5 million users — a dramatic leap from just a few hundred services two years prior. Closer to home, South Africa's draft Digital Government Policy Framework and the Roadmap for Digital Transformation of Government 2025–2027 signal a country committing, in earnest, to digital-first governance. President Ramaphosa's 2026 State of the Nation Address included a R50 billion investment commitment into data centres over three years — a clear statement that digital infrastructure is now understood as foundational economic infrastructure.",
        source: "World Economic Forum / Engineering News",
      },
      {
        type: "heading",
        text: "The Citizen Experience Imperative",
      },
      {
        type: "body",
        text: "South Africa's GovTech 2025 conference, convened under the theme 'One Data, One Citizen, One Citizen Service Journey', marked a deliberate shift away from policy discussion toward measurable digital outcomes. The objective is no longer about whether to digitise — it's about building seamless, unified e-government systems that protect citizens' personal information while connecting services across departments. Crucially, as research from the University of the Witwatersrand notes, the success of digitisation depends not only on technological advancement but on the level of trust citizens have in government systems. Without strong security, transparency, and accountability, even the most sophisticated tools will fail to gain public confidence.",
      },
      {
        type: "heading",
        text: "Where Web Infrastructure Meets Public Service",
      },
      {
        type: "body",
        text: "Behind every functional government digital service is a carefully built and maintained web infrastructure. Citizen-facing portals, HR and payroll systems for civil servants, device management across distributed government sites, and data analytics dashboards that help departments make evidence-based decisions — all of these require professional planning, development, and ongoing maintenance. Fragmented, outdated department websites and disconnected backend systems aren't just inconvenient; they undermine public trust and create security vulnerabilities. The South African government's Phase 2 connectivity initiative aims to connect over 42,000 government buildings — including schools, healthcare facilities, and police stations — by 2026. That infrastructure is meaningless without reliable, secure, and well-maintained software running on top of it.",
        source: "US Trade.gov / Wits University",
      },
      {
        type: "heading",
        text: "What Best-in-Class Government Digital Services Look Like",
      },
      {
        type: "body",
        text: "Governments that are leading the digital transition share common traits: they have invested in cloud-first policies, they prioritise user-centric design over internal preferences, and they measure leaders on their ability to digitally transform their organisations rather than simply procure technology. They also treat cybersecurity as non-negotiable — building it into the architecture from day one, not bolted on afterwards. Across Africa, national digital strategies are actively addressing governance frameworks that support sustainable transformation. Lesotho's 2024 National Digital Policy and Morocco and Ghana's recently signed Statement of Intent on digital governance — inked at Gitex Africa 2026 — are the latest signals of a continent coordinating its digital future.",
      },
      {
        type: "closing",
        text: "For government departments and public sector organisations in South Africa and the broader region, the question is no longer whether to invest in digital services — it is whether to build the right foundation now or spend years and resources correcting poor decisions later. That foundation begins with professional web development, secure infrastructure, and technology partners who understand the unique demands of public service delivery.",
      },
      {
        type: "sources",
        links: [
          { label: "WEF GovTech Report 2025", url: "https://iaanetwork.org/article/the-rise-of-govtech-how-digital-tools-are-transforming-public-service" },
          { label: "SA Digital Transformation Roadmap", url: "https://www.engineeringnews.co.za/article/building-south-africas-digital-future-infrastructure-skills-and-the-ai-opportunity-2026-05-04" },
          { label: "Wits University: Digital Government", url: "https://www.wits.ac.za/future/stories/2025/digital-government-can-benefit-citizens.html" },
          { label: "GovTech 2025 Conference — ITWeb", url: "https://www.itweb.co.za/article/elevating-the-citizen-experience-in-governments-ongoing-digital-transformation/wbrpOqg2OngMDLZn" },
        ],
      },
    ],
  },
  {
    id: "02",
    category: "Cybersecurity",
    date: "5 May 2026",
    readTime: "7 min read",
    tag: "Financial Services",
    title: "Cybersecurity in South African Financial Services: What the New Joint Standard Means for Your Digital Systems",
    subtitle:
      "With Joint Standard 2 now in force and electronic banking fraud nearly doubling in a single year, financial institutions face a critical moment to audit and strengthen their web and digital infrastructure.",
    author: "ImpactStack Editorial",
    heroColor: "#185FA5",
    heroBg: "#E6F1FB",
    slug: "cybersecurity-joint-standard-financial-services",
    content: [
      {
        type: "intro",
        text: "South Africa's financial sector has entered a new era of cybersecurity accountability — and the implications for web infrastructure, enterprise application security, and managed IT services are profound. In June 2025, Joint Standard 2 on Cybersecurity and Cyber Resilience, issued jointly by the Financial Sector Conduct Authority (FSCA) and the Prudential Authority (PA), came into force. What does this mean for banks, insurers, and fintech platforms that rely on web-based systems and digital services?",
      },
      {
        type: "heading",
        text: "The Threat Landscape Has Changed Dramatically",
      },
      {
        type: "body",
        text: "Electronic banking fraud accounted for 65.3% of all reported cybercrime incidents in South Africa in 2024 — nearly double the figure from the previous year — with losses exceeding R1.4 billion. Ransomware attacks spiked 11% globally between 2023 and 2024, with financial services ranking among the top ten most targeted sectors by cybercrime groups worldwide. Closer to home, SABRIC data shows that 38% of breaches in 2025 involved compromised peripheral devices — ATMs, POS systems, and branch printers — pointing to a widening attack surface that extends well beyond core banking systems. As AI and automation proliferate in financial workplaces, the tension between innovation and cyber resilience is reaching boardroom level.",
        source: "Facephi / CIO South Africa / Africa Outlook Magazine",
      },
      {
        type: "heading",
        text: "What Joint Standard 2 Actually Requires",
      },
      {
        type: "body",
        text: "Joint Standard 2 mandates that banks, insurers, pension funds, rating agencies, and other regulated institutions adopt formal cybersecurity and digital risk management practices. The standard requires periodic independent audits, board-level cybersecurity governance, third-party oversight, and documented incident recovery plans. It follows Joint Standard 1 (2023) on IT governance, and together they represent a regulatory shift toward what EY describes as 'digital resilience embedded throughout the ecosystem'. Compliance is not optional, and a tick-box approach — treating the standard as a bureaucratic exercise rather than a genuine security upgrade — is explicitly insufficient. Institutions must demonstrate to external bodies that their processes and practices are effective, and building a portfolio of evidence takes time.",
        source: "LEX Africa / EY South Africa",
      },
      {
        type: "heading",
        text: "Evolving Threats: Identity, Devices, and Quantum Risk",
      },
      {
        type: "body",
        text: "HP's 2026 security research identifies six trends shaping South African cybersecurity this year. Among the most significant: identity and data governance are dominating boardrooms, with more than half of local breaches tied to identity compromise. Physical device attacks are increasing, particularly in distributed sectors like mining, healthcare, and retail branches. And with quantum-safe cryptography standards now formalised, organisations — especially in the public sector and critical infrastructure — must begin planning for long-term cryptographic risk. 'Harvest-now, decrypt-later' attacks already exist: data captured today can be decrypted once quantum computing matures, making architecture decisions made today consequential for years to come. POPIA's amended regulations, which came into effect in April 2025, further tighten obligations around data subject consent, breach reporting timelines, and direct marketing compliance.",
        source: "Africa Outlook Magazine / LEX Africa",
      },
      {
        type: "heading",
        text: "Why Web and Application Security Cannot Be an Afterthought",
      },
      {
        type: "body",
        text: "For financial services providers, the web layer — customer-facing portals, mobile banking interfaces, API integrations, and backend enterprise systems — is among the most exposed attack surfaces. Outdated frameworks, unpatched dependencies, insecure authentication flows, and poor session management are entry points that cybercriminals actively exploit. Direct Transact's head of cybersecurity, Dirk Labuschagne, who also serves on the SA Reserve Bank task force, puts it plainly: organisations with legacy technology and inadequate cybersecurity defences fall victim more frequently. His advice is to keep pace with technology change — including deploying AI-driven threat detection — and to understand cybersecurity as an ecosystem responsibility. Any breach can affect not just one institution, but the broader network of payment rails and customer data systems.",
      },
      {
        type: "heading",
        text: "South Africa's Cybersecurity Market Is Growing — But So Are the Stakes",
      },
      {
        type: "body",
        text: "Omdia estimates South Africa's cybersecurity market at USD 361 million in 2026, growing at 10.1% annually. Projections put the market as high as USD 4.1 billion by 2030, driven by the Cybercrimes Act, cloud adoption, mobile payments, and AI-powered security tooling. South Africa is Africa's dominant cloud market, hosting over 60% of the continent's data centres — a fact that makes its cybersecurity posture consequential not only domestically but regionally. Financial institutions that invest proactively in secure, well-maintained digital infrastructure are not just meeting a compliance requirement; they are building the trust that underpins their long-term viability in an increasingly digital economy.",
        source: "Omdia / CYSEC Africa 2026",
      },
      {
        type: "closing",
        text: "Whether you're a bank, insurer, or fintech company, the security of your web-facing systems and enterprise applications is no longer a purely technical matter — it's a regulatory, commercial, and reputational one. ImpactStack works with financial services organisations to design, build, and maintain secure digital systems that meet evolving regulatory standards while keeping customer experience at the centre.",
      },
      {
        type: "sources",
        links: [
          { label: "LEX Africa: SA Cybersecurity Outlook 2026", url: "https://lexafrica.com/2026/02/south-africas-cybersecurity-shift-2026/" },
          { label: "EY South Africa: Joint Standard 2", url: "https://www.ey.com/en_za/services/cybersecurity/navigating-regulatory-waves--strengthening-cyber-security-in-the" },
          { label: "CIO SA: Ransomware & Financial Services", url: "https://cio-sa.co.za/articles/ransomware-and-cybersecurity-resilience-financial-services/" },
          { label: "Africa Outlook: Six Cybersecurity Trends 2026", url: "https://www.africaoutlookmag.com/technology/six-cybersecurity-trends-shaping-south-africa-in-2026" },
        ],
      },
    ],
  },
  {
    id: "03",
    category: "Cloud & Infrastructure",
    date: "28 April 2026",
    readTime: "6 min read",
    tag: "Healthcare & Mining",
    title: "Cloud Infrastructure in South Africa: How Healthcare and Mining Are Closing the Digital Gap",
    subtitle:
      "Data sovereignty, energy efficiency, and sector-specific compliance are reshaping how organisations in healthcare and mining think about cloud adoption and digital infrastructure.",
    author: "ImpactStack Editorial",
    heroColor: "#854F0B",
    heroBg: "#FAEEDA",
    slug: "cloud-infrastructure-healthcare-mining-south-africa",
    content: [
      {
        type: "intro",
        text: "South Africa's data centre market is projected to grow from USD 580 million in 2025 to USD 1.25 billion by 2030, according to Mordor Intelligence. The country already hosts over 60% of the continent's data centre capacity. Yet two sectors — healthcare and mining — are only beginning to leverage this infrastructure in transformative ways. Both face unique operational challenges: dispersed sites, regulatory obligations, high-stakes data, and the ever-present pressure of South Africa's energy grid.",
      },
      {
        type: "heading",
        text: "Healthcare: From Paper Records to Secure Cloud Systems",
      },
      {
        type: "body",
        text: "Africa's digital health market is projected to reach USD 8.4 billion by 2028, growing at 42% annually — a remarkable trajectory that reflects the continent's leap from traditional healthcare infrastructure directly to digital-first models. In South Africa, the Information Regulator published draft regulations for healthcare data in 2025, creating a new compliance framework that intersects with POPIA obligations. Organisations handling patient records, clinical documentation, and electronic health systems now face specific data sovereignty requirements — meaning patient data must reside on locally hosted infrastructure, not offshore cloud servers. Recent investments by major financial networks, explicitly aimed at reducing reliance on overseas infrastructure, underscore this trend. For hospitals, clinics, and health management systems, this means that cloud strategy is no longer purely a technology decision — it is a legal and compliance one.",
        source: "MedSoftwares / SA Instrumentation & Control / LEX Africa",
      },
      {
        type: "heading",
        text: "Digital Health in Practice: What Best-in-Class Looks Like",
      },
      {
        type: "body",
        text: "The Smart Health Africa 2026 conference, themed 'Purpose in Practice', highlighted the shift from health technology prototypes to embedded, scalable solutions. The theme captured the central challenge for healthcare digital transformation: it is not enough to build tools; those tools must be adopted by healthcare workers, integrated into real systems, and sustained across policy cycles. South African healthtech companies are developing AI-powered clinical documentation platforms that turn consultations into structured notes automatically — reducing the administrative burden on practitioners and freeing time for patient care. Secure cloud records, digital intake systems, and remote patient monitoring are no longer aspirational; they are being deployed across practices from GPs to specialist surgeons. The Government Employees Medical Scheme (GEMS), which serves public sector employees across South Africa, is among the institutions driving adoption of digital health solutions at scale.",
      },
      {
        type: "heading",
        text: "Mining: Connectivity as Strategic Infrastructure",
      },
      {
        type: "body",
        text: "Africa's mining industry has historically been cautious about technology adoption, but that posture is changing rapidly. Vodacom Business, writing in March 2026, challenged mining executives to treat connectivity as strategic infrastructure rather than an operational utility. An integrated pit-to-port digital strategy, they argued, is no longer a nice-to-have — it is a competitive imperative. Connected mining operations can build proactive safety ecosystems, reduce unplanned downtime, and generate the data needed for intelligent maintenance scheduling. The shift requires reliable, secure network infrastructure across sites that are often remote, physically harsh, and power-constrained. That last point matters especially in South Africa, where grid instability remains a persistent challenge for any organisation running cloud-dependent systems.",
        source: "IT News Africa / SA Instrumentation & Control",
      },
      {
        type: "heading",
        text: "The Energy and Sovereignty Equation",
      },
      {
        type: "body",
        text: "South Africa's National Policy on Cloud and Data encourages off-grid power solutions to alleviate pressure on the national grid. This is not a peripheral concern — energy costs represent the single largest operating expense for most data centres, and grid instability forces operators to rely on backup generation, adding cost and complexity. As Lenovo's Data Centre of the Future research found, 99% of EMEA IT leaders consider data sovereignty critical. In South Africa, where regulated industries like finance, healthcare, and public services face specific data residency requirements, local hosting is a strategic necessity. Technologies like liquid cooling, renewable power generation, and intelligent energy optimisation are becoming essential components of future-ready infrastructure — particularly as AI workloads demand higher compute density.",
        source: "Engineering News / SA Instrumentation & Control",
      },
      {
        type: "heading",
        text: "Building for the Long Term: What Organisations Need to Prioritise",
      },
      {
        type: "body",
        text: "For healthcare providers and mining companies investing in digital infrastructure, four priorities stand out. First, data sovereignty compliance: local hosting is increasingly mandatory for regulated data, not optional. Second, energy resilience: systems must be designed with grid instability in mind, incorporating renewable options and robust backup strategies. Third, endpoint and device security: as distributed devices expand the attack surface — from hospital workstations to mine site IoT sensors — device management and hardware-level security become foundational. Fourth, managed services: organisations without large internal IT teams benefit from partnerships with providers who can maintain, monitor, and evolve infrastructure continuously, rather than deploying once and hoping for the best. The Africa HealthTech Summit 2026 and Mining Indaba have both emphasised that transformation depends on partnerships — between technology providers, industry operators, and government — rather than any single organisation acting alone.",
        source: "CNBC Africa / Vodacom Business / AWS South Africa",
      },
      {
        type: "closing",
        text: "South Africa's cloud and infrastructure landscape is maturing fast. For healthcare organisations managing sensitive patient data and mining companies requiring always-on operational connectivity, the stakes of getting infrastructure wrong are high. ImpactStack provides end-to-end cloud and infrastructure services — from architecture planning and deployment to ongoing managed support — designed for the specific regulatory, energy, and security realities of operating in South Africa.",
      },
      {
        type: "sources",
        links: [
          { label: "SA Data Centre Market — SA Instrumentation", url: "http://www.instrumentation.co.za/26974r" },
          { label: "Building SA's Digital Future — Engineering News", url: "https://www.engineeringnews.co.za/article/building-south-africas-digital-future-infrastructure-skills-and-the-ai-opportunity-2026-05-04" },
          { label: "Mining Connectivity — IT News Africa", url: "https://www.itnewsafrica.com/2026/03/connectivity-is-infrastructure-strategic-partnerships-are-redefining-mining-in-africa/" },
          { label: "Digital Health Africa 2026 — MedSoftwares", url: "https://www.medsoftwares.com/news/digital-health-transformation-africa-2026" },
          { label: "Africa's Digital Growth — CNBC Africa", url: "https://www.cnbcafrica.com/2026/africa-has-the-demand-for-digital-growth-now-it-needs-the-infrastructure" },
        ],
      },
    ],
  },
];

/**
 * Returns the 3 most recently added articles (highest numeric IDs).
 * As you add new articles with higher IDs ("04", "05", ...), this will
 * automatically surface them in the Insights section.
 */
export const getLatestArticles = (count = 3): Article[] =>
  [...allArticles]
    .sort((a, b) => parseInt(b.id) - parseInt(a.id))
    .slice(0, count);

export const getArticleBySlug = (slug: string): Article | undefined =>
  allArticles.find((a) => a.slug === slug);

export const getArticleById = (id: string): Article | undefined =>
  allArticles.find((a) => a.id === id);