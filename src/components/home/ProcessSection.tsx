import { Link } from "react-router-dom";
import { ArrowUpRight, Search, PenTool, Code2, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    icon: Search,
    description: "We start with your goals, audience and existing systems, then agree on the scope and priorities.",
    outcome: "A clear brief and delivery plan",
  },
  {
    title: "Design",
    icon: PenTool,
    description: "We map the user journey and develop the visual direction, so you can review the experience before we build.",
    outcome: "User flows and a design direction",
  },
  {
    title: "Development",
    icon: Code2,
    description: "We build the agreed features and integrations, with progress reviews to keep the work aligned with your goals.",
    outcome: "A working solution to review",
  },
  {
    title: "Testing & launch",
    icon: Rocket,
    description: "We check the key journeys, responsive layouts and functionality, then prepare the solution for deployment.",
    outcome: "A tested launch and handover",
  },
  {
    title: "Ongoing support",
    icon: LifeBuoy,
    description: "We agree on the maintenance, updates and improvements you need as your business and solution grow.",
    outcome: "Support that fits your needs",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="process-heading"
      className="restored-content section-padding border-t border-white/10 scroll-mt-28"
    >
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs text-purple-300 uppercase tracking-[0.25em] mb-4">How we work</p>
            <h2 id="process-heading" className="text-4xl md:text-5xl tracking-tight mb-5">From the first conversation<br className="hidden sm:block" /> to a solution that works.</h2>
            <p className="leading-relaxed">A clear process, shared decisions and room for feedback at each stage. Here’s what to expect when we work together.</p>
          </div>
          <Link to="/contact?source=how-we-work" className="button-secondary gap-2 self-start shrink-0">
            Discuss your project <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map(({ title, icon: Icon, description, outcome }, index) => (
            <li key={title} className="surface-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-7">
                <span className="text-sm font-mono text-purple-200">{String(index + 1).padStart(2, "0")}</span>
                <Icon size={24} className="text-purple-200" aria-hidden="true" />
              </div>
              <h3 className="text-xl mb-4">{title}</h3>
              <p className="text-sm leading-relaxed mb-6">{description}</p>
              <p className="text-xs leading-relaxed border-t border-white/15 pt-4 mt-auto">{outcome}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
