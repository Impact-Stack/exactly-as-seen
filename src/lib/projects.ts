export type ProjectType =
  | "Lab"
  | "Product Platform"
  | "Client/Training Delivery"
  | "Client Delivery"
  | "Mobile MVP"
  | "MVP"
  | "Training";

export type ProjectRole =
  | "Security Engineer"
  | "Technical Project Manager"
  | "Project Lead"
  | "Full-Stack Engineer";

export type ProjectFilter =
  "All" | "Client" | "Lab" | "MVP" | "Training" | "Security" | "Mobile" | "Web";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "github" | "board" | "service" | "live";
  external?: boolean;
}

export interface ProjectEvidence {
  title: string;
  detail: string;
}

export interface ProjectCase {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  type: ProjectType;
  role: ProjectRole;
  inquiryType:
    | "Web Application"
    | "Mobile App"
    | "Security and Compliance"
    | "Government Project"
    | "Other";
  filterTags: Exclude<ProjectFilter, "All">[];
  challenge: string;
  implementation: string;
  security?: string;
  image?: { src: string; alt: string };
  technologies: string[];
  evidence: ProjectEvidence[];
  links: ProjectLink[];
  serviceHref?: string;
  caseStudy?: { mobileImage?: { src: string; alt: string }; audience: string; designDecisions: ProjectEvidence[]; status: string };
}

export interface ProjectInsightSeed {
  id: string;
  title: string;
  category: "Security" | "Architecture" | "Mobile";
  date: string;
  summary: string;
  projectId: string;
}

export const allProjects: ProjectCase[] = [
  {
    id: "urban-anarchy",
    caseStudy: {
      mobileImage: { src: "/images/urban-anarchy-mobile.webp", alt: "Urban Anarchy mobile homepage with its menu, streetwear headline and product artwork" },
      audience: "An experience for readers exploring culture and visual research, and visitors discovering the streetwear collection.",
      designDecisions: [
        { title: "A clear visual identity", detail: "Black, red and white create a high-contrast visual language that connects the publication and streetwear collection." },
        { title: "Editorial typography", detail: "Bold, expressive headings and collage-inspired imagery give the site the character of an independent magazine." },
        { title: "One connected experience", detail: "Responsive layouts connect magazine content, the cultural archive and product discovery across desktop and mobile." },
      ],
      status: "Live website. Delivered scope: a responsive editorial and streetwear frontend with magazine pages, product browsing and a cart interface.",
    },
    title: "Urban Anarchy",
    subtitle: "Digital magazine & streetwear platform",
    summary:
      "An editorial and streetwear experience combining a bold visual identity with product discovery and a cultural archive.",
    type: "Client Delivery",
    role: "Full-Stack Engineer",
    inquiryType: "Web Application",
    filterTags: ["Client", "Web"],
    challenge:
      "Bring a magazine and streetwear identity together in one responsive experience that makes both products and editorial content easy to explore.",
    implementation:
      "Built on an existing React publication foundation, using responsive layouts, bold typography and a black, red and white visual direction. The frontend brings product browsing, editorial routes and a shopping cart into one experience.",
    technologies: ["React", "React Router", "Vite", "Tailwind CSS", "GSAP"],
    evidence: [
      {
        title: "Brand-led design",
        detail:
          "High-contrast styling, large typography and collage-inspired visual direction.",
      },
      {
        title: "Editorial discovery",
        detail:
          "Magazine, archive and search routes for browsing cultural content.",
      },
      {
        title: "Commerce interface",
        detail:
          "Streetwear product discovery and a cart interface alongside editorial content.",
      },
    ],
    image: {
      src: "/images/urban-anarchy.webp",
      alt: "Urban Anarchy homepage showing its streetwear and editorial design",
    },
    links: [
      {
        label: "Visit live website",
        href: "https://urbananarchy.vercel.app/",
        kind: "live",
        external: true,
      },
    ],
    serviceHref: "/services/websites",
  },
  {
    id: "bluewatch-soc-lab",
    caseStudy: {
 audience: "A controlled educational lab for exploring insider-threat monitoring and authentication abuse in a banking-style application.",
 designDecisions: [
 { title: "Centralised visibility", detail: "Application logs flow through Logstash and Elasticsearch to Kibana, while Wazuh handles system events and security alerts." },
 { title: "Behaviour-focused dashboards", detail: "Panels cover login activity, after-hours access, query volume and sensitive data access." },
 { title: "Repeatable lab setup", detail: "Docker Compose brings the banking application, database and monitoring services into a repeatable local environment." }
 ],
 status: "Self-built security lab and banking simulation. The repository lists alerting rules, MITRE ATT&CK mapping and Wazuh–ELK correlation as future enhancements.",
},
    title: "Insider Threat Detection Lab - BlueWatch SOC Lab",
    subtitle: "Self-built SOC lab | Banking simulation",
    summary:
      "A self-built SOC lab that simulates insider data exfiltration in a banking environment to demonstrate blue-team threat detection operations.",
    type: "Lab",
    role: "Security Engineer",
    inquiryType: "Security and Compliance",
    filterTags: ["Lab", "Security", "Web"],
    challenge:
      "Simulate realistic insider abuse patterns and detect them early enough to support security operations decisions in a controlled environment.",
    implementation:
      "Built a banking-style monitoring lab using Wazuh and the ELK Stack to centralise application logs and visualise suspicious activity in SOC-style dashboards.",
    security:
      "Explored failed logins, after-hours authentication, high-volume queries and sensitive data access through controlled lab scenarios and monitoring panels.",
    technologies: [
      "Wazuh",
      "ELK Stack",
      "Docker",
      "MySQL",
      "Threat Detection Engineering",
    ],
    evidence: [
      {
        title: "Behaviour Monitoring",
        detail:
          "Dashboard panels for authentication activity, after-hours access and query volumes.",
      },
      {
        title: "Centralized Visibility",
        detail:
          "Application log ingestion through Logstash and Elasticsearch, visualised in Kibana.",
      },
      {
        title: "Repeatable Environment",
        detail:
          "Docker Compose setup for the application, database and monitoring services.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Liso2004/BlueWatch-SOC-Lab/tree/bulk",
        kind: "github",
        external: true,
      },
    ],
    serviceHref: "/services/security",
  },
  {
    id: "findr-community-map",
    caseStudy: {
 audience: "A community platform for people discovering locations, contributors submitting places and administrators reviewing submissions.",
 designDecisions: [
 { title: "Map-first discovery", detail: "Interactive mapping supports location discovery, with geospatial tools for working with places and boundaries." },
 { title: "Moderated contributions", detail: "Location submissions pass through an administrator review workflow to support community governance." },
 { title: "Coordinated delivery", detail: "Architecture planning, tickets and sprint timelines connect product priorities with implementation work." }
 ],
 status: "Product platform project. This case study covers the documented mapping, moderation and technical project management work.",
},
    title: "Findr - Community Map Web Application",
    subtitle: "Scalable community platform",
    summary:
      "A community discovery platform with role-based access, moderation workflows, and interactive mapping for location discovery.",
    type: "Product Platform",
    role: "Technical Project Manager",
    inquiryType: "Web Application",
    filterTags: ["Web"],
    challenge:
      "Coordinate product priorities, map workflows, and moderation requirements while maintaining development momentum and delivery alignment.",
    implementation:
      "Defined architecture and roadmap, managed tickets and sprint timelines, and coordinated cross-functional delivery between product owners and developers.",
    security:
      "Implemented RBAC (guest, user, admin), Google OAuth sign-in, and terms-and-conditions compliance flows for user governance.",
    technologies: [
      "React",
      "Node.js",
      "Supabase",
      "MapLibre",
      "Turf.js",
      "OpenStreetMap",
      "RBAC",
      "Google OAuth",
    ],
    evidence: [
      {
        title: "Delivery Management",
        detail:
          "Structured GitHub tickets and sprint cadence for implementation tracking.",
      },
      {
        title: "Platform Governance",
        detail:
          "Role-based access and moderation pipeline for user-submitted locations.",
      },
      {
        title: "Geospatial Stack",
        detail:
          "Integrated MapLibre/Turf.js with location submission and admin moderation flow.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/bilqeesajam/location-finder-v2",
        kind: "github",
        external: true,
      },
    ],
    serviceHref: "/services/web",
  },
  {
    id: "moderntech-hr-platform",
    caseStudy: {
 audience: "An HR management training project covering employee records, attendance, leave, payroll and reviews.",
 designDecisions: [
 { title: "Connected HR workflows", detail: "Employee records, attendance, leave and payroll are brought together in one application." },
 { title: "Role-based dashboards", detail: "JWT authentication and role-based access organise the experience around different user responsibilities." },
 { title: "Useful exports", detail: "CSV and PDF exports support attendance records and payslip workflows." }
 ],
 status: "Client/Training Delivery. The repository documents a full-stack HR application and local setup instructions.",
},
    title: "ModernTech Solutions - Secure HR Management System",
    subtitle: "Unified HR platform",
    summary:
      "A secure HR system with role-based access, authentication hardening, and real-time operational workflows designed for maintainability.",
    type: "Client/Training Delivery",
    role: "Full-Stack Engineer",
    inquiryType: "Web Application",
    filterTags: ["Client", "Training", "Web"],
    challenge:
      "Replace fragmented HR processes with a reliable platform that balances maintainability, security, and team adoption.",
    implementation:
      "Built a Vue.js SPA with RESTful APIs, MySQL-backed employee, attendance, leave, payroll and review workflows.",
    security:
      "Implemented JWT auth with refresh tokens, granular RBAC, bcrypt hashing, and defensive controls against XSS and SQL-injection vectors.",
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "Vue.js",
      "TailwindCSS",
      "JWT",
      "RBAC",
    ],
    evidence: [
      {
        title: "Access Control",
        detail:
          "Granular role management and token-based authentication with refresh strategy.",
      },
      {
        title: "Data Integrity",
        detail:
          "MySQL-backed records with CSV/PDF exports for attendance and payslips.",
      },
      {
        title: "Adoption Loop",
        detail:
          "Led testing sessions and UX iterations based on user feedback.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/KhadijaManuel/project-1/tree/liso",
        kind: "github",
        external: true,
      },
    ],
    serviceHref: "/services/web",
  },
  {
    id: "shopwise-price-comparison",
    title: "ShopWise - Price Comparison Mobile App",
    subtitle: "Cross-platform retail comparison app",
    summary:
      "A Flutter mobile app for comparing retail product prices across major South African retailers through structured data pipelines.",
    type: "Mobile MVP",
    role: "Project Lead",
    inquiryType: "Mobile App",
    filterTags: ["MVP", "Mobile"],
    challenge:
      "Deliver useful cross-retailer price comparisons while balancing performance, compliance constraints, and team coordination.",
    implementation:
      "Built the mobile UX in Flutter, coordinated delivery execution, and integrated retailer data pipelines with structured JSON output.",
    security:
      "Applied compliance-aware data handling aligned with POPIA and Cybercrimes Act considerations, plus ethical scraping workflow design.",
    technologies: ["Flutter", "Dart", "Python", "JSON", "Mobile Architecture"],
    evidence: [
      {
        title: "Cross-Platform UI",
        detail:
          "Single codebase app experience for mobile comparison workflows.",
      },
      {
        title: "Retail Integrations",
        detail:
          "Integrated four major retailer sources into product search flow.",
      },
      {
        title: "Search Performance",
        detail:
          "Maintained approximately 3-5 second search response behavior in testing.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Liso2004/price-comparison",
        kind: "github",
        external: true,
      },
    ],
    serviceHref: "/services/mobile",
  },
  {
    id: "quick-chat-mvp",
    title: "Quick Chat - Real-Time Chat Application",
    subtitle: "MVP real-time messaging system",
    summary:
      "An MVP chat platform focused on WebSocket lifecycle management, live messaging reliability, and practical production trade-off analysis.",
    type: "MVP",
    role: "Full-Stack Engineer",
    inquiryType: "Web Application",
    filterTags: ["MVP", "Web"],
    challenge:
      "Create predictable low-latency message delivery while handling connection lifecycle events safely and consistently.",
    implementation:
      "Built a React + Node.js + WebSocket architecture with connection validation and event handling for real-time communication.",
    security:
      "Implemented payload sanitization and connection validation, and evaluated production trade-offs between raw WebSockets and Socket.io.",
    technologies: ["React", "Node.js", "Express", "WebSockets"],
    evidence: [
      {
        title: "Connection Lifecycle",
        detail:
          "Handled connect/reconnect/disconnect events for stable messaging behavior.",
      },
      {
        title: "Architecture Trade-offs",
        detail:
          "Documented raw WebSocket vs Socket.io decisions for future production use.",
      },
      {
        title: "Input Safety",
        detail: "Sanitized message payloads before processing and display.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Liso2004/Quick-Simple-Chat-App-MVP-",
        kind: "github",
        external: true,
      },
    ],
    serviceHref: "/services/web",
  },
  {
    id: "biofuel-ecommerce-platform",
    title: "BioFuel E-Commerce Platform",
    subtitle: "Modular commerce system",
    summary:
      "A PHP e-commerce platform with session-based authentication, cart workflows, role separation, and modular backend design.",
    type: "Client/Training Delivery",
    role: "Full-Stack Engineer",
    inquiryType: "Web Application",
    filterTags: ["Client", "Training", "Web"],
    challenge:
      "Build a secure, practical commerce flow for both customers and administrators while keeping architecture extensible.",
    implementation:
      "Developed a modular PHP backend, customer cart experience, and role-separated admin/customer operations.",
    security:
      "Implemented session hardening, prepared statements, hashed passwords, and defensive validation for common web attack vectors.",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML/CSS",
      "Session Authentication",
    ],
    evidence: [
      {
        title: "Commerce Flow",
        detail:
          "Implemented catalog browsing, cart persistence, and order operations.",
      },
      {
        title: "Role Separation",
        detail:
          "Designed admin and customer access boundaries for operational safety.",
      },
      {
        title: "Security Baseline",
        detail:
          "Applied prepared statements and password hashing for safer data handling.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Liso2004/BioFuel",
        kind: "github",
        external: true,
      },
    ],
    serviceHref: "/services/web",
  },
  {
    id: "mern-training-project",
    title: "MERN Stack Training Project",
    subtitle: "Full-stack training implementation",
    summary:
      "A MERN training project focused on API lifecycle fundamentals, reusable component architecture, and robust error handling.",
    type: "Training",
    role: "Full-Stack Engineer",
    inquiryType: "Web Application",
    filterTags: ["Training", "Web"],
    challenge:
      "Strengthen full-stack engineering patterns with production-style request handling, API design, and resilient UI integration.",
    implementation:
      "Implemented REST APIs with clear request-response lifecycle behavior and component-based React architecture.",
    security:
      "Applied validation and defensive server-side error handling to reduce runtime and data integrity risks.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "REST APIs"],
    evidence: [
      {
        title: "API Lifecycle",
        detail:
          "Implemented full request-response flow with explicit error states.",
      },
      {
        title: "Frontend Structure",
        detail: "Built reusable components for maintainable UI composition.",
      },
      {
        title: "Defensive Handling",
        detail: "Added validation and error paths for safer API interaction.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Liso2004/MERN-Stack-Training",
        kind: "github",
        external: true,
      },
    ],
    serviceHref: "/services/web",
  },
];

export const featuredProjects = allProjects.filter((project) =>
  [
    "urban-anarchy",
    "bluewatch-soc-lab",
    "findr-community-map",
    "moderntech-hr-platform",
  ].includes(project.id),
);

export const portfolioProjects = allProjects;

export const projectInsightsSeed: ProjectInsightSeed[] = [
  {
    id: "insider-threat-detection-soc-labs",
    title: "Insider Threat Detection in Small SOC Labs",
    category: "Security",
    date: "March 4, 2026",
    summary:
      "How correlation logic, DNS telemetry, and ATT&CK mapping can improve response quality in compact blue-team environments.",
    projectId: "bluewatch-soc-lab",
  },
  {
    id: "rbac-moderation-community-platforms",
    title: "RBAC + Moderation Architecture for Community Platforms",
    category: "Architecture",
    date: "March 2, 2026",
    summary:
      "Practical implementation patterns for role boundaries, user submissions, and moderation pipelines in map-based products.",
    projectId: "findr-community-map",
  },
  {
    id: "mobile-price-comparison-popia-cybercrime",
    title: "Mobile Price Comparison Under POPIA and Cybercrime Constraints",
    category: "Mobile",
    date: "February 28, 2026",
    summary:
      "Delivery considerations for retailer data aggregation, response performance, and compliant handling in consumer mobile products.",
    projectId: "shopwise-price-comparison",
  },
];

export const projectFilterOptions: ProjectFilter[] = [
  "All",
  "Client",
  "Lab",
  "MVP",
  "Training",
  "Security",
  "Mobile",
  "Web",
];

export const getProjectById = (id: string) =>
  allProjects.find((project) => project.id === id);
