import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Code, Database, Globe, Shield, Wrench, Server, Layout, GitBranch, BriefcaseBusiness } from "lucide-react";

const skillCategories = [
  { icon: Code, title: "Programming Languages", skills: ["JavaScript", "Python", "SQL", "HTML/CSS", "Dart"] },
  { icon: Layout, title: "Frontend Development", skills: ["Vue.js", "React", "Flutter", "Tailwind CSS", "Responsive Design"] },
  { icon: Server, title: "Backend Systems and Delivery", skills: ["Node.js", "Express.js", "REST APIs", "API Integration", "JWT Authentication", "Feature Scoping"] },
  { icon: Database, title: "Database and Data", skills: ["MySQL", "Database Design", "SQL Queries", "Data Modeling", "Google Sheets API"] },
  { icon: Globe, title: "Cloud and Infrastructure", skills: ["AWS", "Google Cloud Platform", "Cloud Services", "API Management", "Cloud Computing"] },
  { icon: Shield, title: "Security and Best Practices", skills: ["Authentication", "Access Control", "Security Protocols", "OWASP Guidelines", "Risk Assessment"] },
  { icon: Wrench, title: "IoT and Hardware", skills: ["Raspberry Pi", "NFC Technology", "Hardware Integration", "Real-time Systems", "Prototyping"] },
  { icon: GitBranch, title: "Delivery and Collaboration Tools", skills: ["Git and GitHub", "Agile or Scrum Workflows", "Task Tracking", "Testing and Debugging", "Documentation"] },
  { icon: BriefcaseBusiness, title: "Professional and Project Skills", skills: ["Project Planning and Coordination", "Stakeholder Communication", "Task Prioritization", "Technical Reporting", "Cross-functional Collaboration"] },
];

export default function SkillsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-[#0A0A0A] border-t border-white/5" ref={ref}>
      <div className="container-narrow">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-section font-display mb-4 text-white">
            Technical and Project Delivery Expertise
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-lg text-[#9CA3AF] max-w-3xl mx-auto">
            Core competencies across software engineering, cloud delivery, security, and project execution.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.article key={category.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }} className="glass p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-shell w-11 h-11">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 glass p-6 md:p-8">
          <h3 className="text-subtitle text-white mb-3">Current Growth Focus</h3>
          <p className="text-[#9CA3AF] leading-relaxed">
            DevOps and CI/CD delivery pipelines, algorithmic problem solving, and practical cybersecurity labs. The focus
            is to improve delivery speed, resilience, and enterprise security posture across real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
}
