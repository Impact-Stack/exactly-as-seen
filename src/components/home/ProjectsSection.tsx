import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import {
  Users,
  ShoppingCart,
  MessageSquare,
  Layers,
  ExternalLink,
  Shield,
  GitBranch,
  Lightbulb,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ModernTech Solutions - HR Management",
    subtitle: "Life Choices Academy | June 2025",
    icon: Users,
    description:
      "Comprehensive HR management platform covering employee data, leave, attendance, and operational workflows.",
    problem:
      "Organizations were running fragmented HR processes across disconnected tools, creating data inconsistency and compliance risks.",
    approach:
      "Designed a unified role-based platform with secure access controls and workflows aligned to operational realities.",
    techStack: ["Node.js", "Express", "PostgreSQL", "Vue.js", "Tailwind CSS", "JWT"],
    highlights: [
      "Secure authentication with role-based access",
      "Automated leave workflows and approvals",
      "Operational visibility through central dashboards",
    ],
    security:
      "Token-based authentication, strong password hashing, prepared statements, and input validation against common web attacks.",
    github: "https://github.com/KhadijaManuel/project-1/tree/liso",
  },
  {
    title: "BioFuel E-Commerce Platform",
    subtitle: "Life Choices Academy | August 2025",
    icon: ShoppingCart,
    description:
      "Full e-commerce platform with catalog management, shopping cart, secure checkout design, and order operations.",
    problem:
      "Small businesses needed scalable e-commerce systems with lower delivery cost and clean admin operations.",
    approach:
      "Implemented a modular backend and practical UI flows for discovery, cart, checkout, and stock management.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Session Auth"],
    highlights: [
      "Server-side cart persistence and order processing",
      "Admin and customer access separation",
      "Prepared for payment gateway integrations",
    ],
    security:
      "Session hardening, CSRF protection, SQL injection mitigation using prepared statements, and hashed passwords.",
    github: "https://github.com/Liso2004/BioFuel",
  },
  {
    title: "Real-Time Chat Application",
    subtitle: "Personal Project | November 2025",
    icon: MessageSquare,
    description:
      "Lightweight real-time chat platform focused on bi-directional communication and connection lifecycle handling.",
    problem:
      "Needed practical understanding of low-latency messaging and real-time event handling between client and server.",
    approach:
      "Built with WebSocket fundamentals and clear state handling to keep latency low and behavior predictable.",
    techStack: ["React", "Vite", "Node.js", "Express", "WebSockets"],
    highlights: [
      "Real-time message delivery without reloads",
      "Concurrent multi-user support",
      "Connection status awareness",
    ],
    security:
      "Handshake validation, sanitization of message payloads, and anti-spam considerations via rate limiting concepts.",
    github: "https://github.com/Liso2004/Quick-Simple-Chat-App-MVP-",
  },
  {
    title: "MERN Stack Training Project",
    subtitle: "Falsebay College | September 2024",
    icon: Layers,
    description:
      "End-to-end MERN training system to strengthen React architecture, API design, and full request lifecycle management.",
    problem:
      "Required deeper practical experience with full-stack JavaScript patterns and production-style API interaction.",
    approach:
      "Implemented modular APIs and reusable frontend architecture with explicit error handling and validation.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Chakra UI"],
    highlights: [
      "RESTful API design with proper HTTP semantics",
      "Reusable React component architecture",
      "Clear backend-to-frontend flow with robust error states",
    ],
    security:
      "Environment-driven secret management, request validation, and defensive server-side checks.",
    github: "https://github.com/Liso2004/MERN-Stack-Training",
  },
  {
    title: "ShopWise Price Comparison App",
    subtitle: "Academic and Portfolio Project",
    icon: Layers,
    description:
      "Mobile-first price comparison product aggregating retailer data and exposing consistent product comparisons for consumers.",
    problem:
      "Users needed a simpler way to compare product prices across retailers while respecting ethical data use.",
    approach:
      "Delivered a Flutter front end with structured data extraction and project coordination across contributors.",
    techStack: ["Flutter", "Dart", "Web Scraping", "JSON", "Project Management"],
    highlights: [
      "Cross-platform mobile UI for price comparison",
      "Structured output with consistent fields",
      "Delivery planning and team coordination as project manager",
    ],
    security:
      "Ethical scraping practices, constrained data handling, and explicit legal-awareness checks in workflows.",
    github: "https://github.com/Liso2004/price-comparison",
  },
];

export default function ProjectsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-section font-display mb-4">Project Delivery Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real problems solved through secure architecture, pragmatic technical choices, and disciplined execution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
              className="glass rounded-xl p-6 card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <project.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-subtitle">{project.title}</h3>
                  <p className="text-small text-muted-foreground">{project.subtitle}</p>
                </div>
              </div>
              <p className="text-body text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary font-semibold">
                    {tech}
                  </span>
                ))}
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value={`details-${project.title}`} className="border-border">
                  <AccordionTrigger className="text-sm font-semibold">Technical Brief</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-1">
                          <Lightbulb className="w-4 h-4 text-primary" />
                          Problem
                        </h4>
                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-1">
                          <GitBranch className="w-4 h-4 text-primary" />
                          Approach
                        </h4>
                        <p className="text-sm text-muted-foreground">{project.approach}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-1">
                          <Shield className="w-4 h-4 text-primary" />
                          Security
                        </h4>
                        <p className="text-sm text-muted-foreground">{project.security}</p>
                      </div>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">-</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-4">
                <Button asChild variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Source Repository
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
