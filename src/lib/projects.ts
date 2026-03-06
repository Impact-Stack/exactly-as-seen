export type ProjectType =
  | "Lab"
  | "Product Platform"
  | "Client/Training Delivery"
  | "Mobile MVP"
  | "MVP"
  | "Training";

export type ProjectRole = "Security Engineer" | "Technical Project Manager" | "Project Lead" | "Full-Stack Engineer";

export type ProjectFilter = "All" | "Client" | "Lab" | "MVP" | "Training" | "Security" | "Mobile" | "Web";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "github" | "board" | "service";
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
  inquiryType: "Web Application" | "Mobile App" | "Security and Compliance" | "Government Project" | "Other";
  filterTags: Exclude<ProjectFilter, "All">[];
  challenge: string;
  implementation: string;
  security: string;
  technologies: string[];
  evidence: ProjectEvidence[];
  links: ProjectLink[];
  serviceHref?: string;
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
    id: "bluewatch-soc-lab",
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
      "Designed and implemented the SOC architecture end-to-end using Wazuh, ELK Stack, and Zeek. Built detection rules, centralized logs, and incident response documentation workflows.",
    security:
      "Implemented SIEM correlation rules for authentication abuse, after-hours access, and high-volume data queries, then mapped detections to MITRE ATT&CK for response consistency.",
    technologies: ["Wazuh", "ELK Stack", "Zeek", "MITRE ATT&CK", "Threat Detection Engineering"],
    evidence: [
      { title: "SIEM Correlation Rules", detail: "Detection coverage for auth abuse, after-hours access, and high-volume queries." },
      { title: "Centralized Visibility", detail: "ELK logging pipeline and Zeek DNS entropy monitoring integrated into SOC workflow." },
      { title: "Incident Reporting", detail: "Produced incident reports with remediation guidance and ATT&CK mapping." },
    ],
    links: [{ label: "GitHub Repository", href: "https://github.com/Liso2004/BlueWatch-SOC-Lab/tree/bulk", kind: "github", external: true }],
    serviceHref: "/services/security",
  },
  {
    id: "findr-community-map",
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
    technologies: ["React", "Node.js", "Supabase", "MapLibre", "Turf.js", "OpenStreetMap", "RBAC", "Google OAuth"],
    evidence: [
      { title: "Delivery Management", detail: "Structured GitHub tickets and sprint cadence for implementation tracking." },
      { title: "Platform Governance", detail: "Role-based access and moderation pipeline for user-submitted locations." },
      { title: "Geospatial Stack", detail: "Integrated MapLibre/Turf.js with location submission and admin moderation flow." },
    ],
    links: [{ label: "GitHub Repository", href: "https://github.com/bilqeesajam/location-finder-v2", kind: "github", external: true }],
    serviceHref: "/services/web",
  },
  {
    id: "moderntech-hr-platform",
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
      "Built a Vue.js SPA with RESTful APIs, normalized PostgreSQL schema design, and indexed queries for predictable data performance.",
    security:
      "Implemented JWT auth with refresh tokens, granular RBAC, bcrypt hashing, and defensive controls against XSS and SQL-injection vectors.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Vue.js", "TailwindCSS", "JWT", "RBAC"],
    evidence: [
      { title: "Access Control", detail: "Granular role management and token-based authentication with refresh strategy." },
      { title: "Data Integrity", detail: "Normalized schema and indexed queries for reliable operational reporting." },
      { title: "Adoption Loop", detail: "Led testing sessions and UX iterations based on user feedback." },
    ],
    links: [{ label: "GitHub Repository", href: "https://github.com/KhadijaManuel/project-1/tree/liso", kind: "github", external: true }],
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
      { title: "Cross-Platform UI", detail: "Single codebase app experience for mobile comparison workflows." },
      { title: "Retail Integrations", detail: "Integrated four major retailer sources into product search flow." },
      { title: "Search Performance", detail: "Maintained approximately 3-5 second search response behavior in testing." },
    ],
    links: [{ label: "GitHub Repository", href: "https://github.com/Liso2004/price-comparison", kind: "github", external: true }],
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
      { title: "Connection Lifecycle", detail: "Handled connect/reconnect/disconnect events for stable messaging behavior." },
      { title: "Architecture Trade-offs", detail: "Documented raw WebSocket vs Socket.io decisions for future production use." },
      { title: "Input Safety", detail: "Sanitized message payloads before processing and display." },
    ],
    links: [{ label: "GitHub Repository", href: "https://github.com/Liso2004/Quick-Simple-Chat-App-MVP-", kind: "github", external: true }],
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
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Session Authentication"],
    evidence: [
      { title: "Commerce Flow", detail: "Implemented catalog browsing, cart persistence, and order operations." },
      { title: "Role Separation", detail: "Designed admin and customer access boundaries for operational safety." },
      { title: "Security Baseline", detail: "Applied prepared statements and password hashing for safer data handling." },
    ],
    links: [{ label: "GitHub Repository", href: "https://github.com/Liso2004/BioFuel", kind: "github", external: true }],
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
      { title: "API Lifecycle", detail: "Implemented full request-response flow with explicit error states." },
      { title: "Frontend Structure", detail: "Built reusable components for maintainable UI composition." },
      { title: "Defensive Handling", detail: "Added validation and error paths for safer API interaction." },
    ],
    links: [{ label: "GitHub Repository", href: "https://github.com/Liso2004/MERN-Stack-Training", kind: "github", external: true }],
    serviceHref: "/services/web",
  },
];

export const featuredProjects = allProjects.filter((project) =>
  ["bluewatch-soc-lab", "findr-community-map", "moderntech-hr-platform"].includes(project.id),
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

export const projectFilterOptions: ProjectFilter[] = ["All", "Client", "Lab", "MVP", "Training", "Security", "Mobile", "Web"];

export const getProjectById = (id: string) => allProjects.find((project) => project.id === id);
