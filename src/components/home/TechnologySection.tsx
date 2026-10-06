import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiFlutter,
  SiGit,
  SiGithub,
} from "react-icons/si";
import type { IconType } from "react-icons";

const technologies: { name: string; icon: IconType }[] = [
  { name: "React", icon: SiReact },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Flutter", icon: SiFlutter },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Python", icon: SiPython },
  { name: "PHP", icon: SiPhp },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Supabase", icon: SiSupabase },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];
const categories = [
  {
    title: "Interfaces & mobile",
    text: "React, Vue.js, JavaScript, TypeScript, Tailwind CSS and Flutter.",
  },
  {
    title: "Backends & integrations",
    text: "Node.js, Express, Python, PHP, REST APIs and WebSockets.",
  },
  {
    title: "Databases & data",
    text: "PostgreSQL, MySQL, MongoDB, Supabase and Google Sheets API.",
  },
  {
    title: "Security & delivery",
    text: "Authentication, role-based access, Git/GitHub, testing and deployment workflows.",
  },
];
export default function TechnologySection() {
  return (
    <section
      className="restored-content section-padding bg-[#0a0a12] border-y border-white/10"
      aria-labelledby="technology-heading"
    >
      <div className="container-narrow grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-purple-300 mb-5">
            Our technology & capabilities
          </p>
          <h2
            id="technology-heading"
            className="text-4xl md:text-5xl tracking-tight leading-[1.1] mb-6"
          >
            The right tools.
            <br />
            For your next move.
          </h2>
          <p className="leading-relaxed mb-6">
            Your goals shape the technology we choose. We build with proven
            tools and connect the systems you already use, so your solution fits
            your business.
          </p>
          <p className="leading-relaxed mb-8">
            From a responsive website to a data-driven application, our
            capabilities cover the interface, the backend and the connections
            between them.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 border-t border-white/15 pt-6">
            {categories.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm mb-2">{category.title}</h3>
                <p className="text-xs leading-relaxed">{category.text}</p>
              </div>
            ))}
          </div>
        </div>
        <ul
          aria-label="Technologies we work with"
          className="tech-constellation grid grid-cols-3 sm:grid-cols-4 gap-3 md:gap-5 relative"
        >
          {technologies.map(({ name, icon: Icon }, index) => (
            <li
              key={name}
              className="tech-tile flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#11111b] aspect-square text-white p-3"
              style={{ animationDelay: `${index * -0.6}s` }}
            >
              <Icon size={34} className="text-[#ddd8ef]" aria-hidden="true" />
              <span className="text-[11px] text-[#c3c1d1] text-center">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
