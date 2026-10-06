import { useEffect, useRef, useState, type CSSProperties } from "react";
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
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const orbitRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    if (orbitRef.current) observer.observe(orbitRef.current);
    return () => observer.disconnect();
  }, []);
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
        <div ref={orbitRef} className="tech-orbit-panel">
          <div className="tech-orbit" data-paused={paused || !visible}>
            <div className="tech-orbit-core" aria-hidden="true"><span>ISA</span></div>
            {[0, 1, 2].map(ring => <div key={ring} className={`tech-orbit-track tech-orbit-track-${ring}`} aria-hidden="true" />)}
            <ul aria-label="Technologies we work with" className="tech-orbit-list">
              {technologies.map(({ name, icon: Icon }, index) => {
                const ring = index < 4 ? 0 : index < 10 ? 1 : 2;
                const offset = ring === 0 ? index : ring === 1 ? index - 4 : index - 10;
                const count = ring === 0 ? 4 : 6;
                return <li key={name} className={`tech-orbit-node tech-orbit-node-${ring}`} style={{
                  "--orbit-duration": `${[56, 76, 96][ring]}s`,
                  "--orbit-delay": `${-(offset / count + ring * 0.07) * [56, 76, 96][ring]}s`,
                  "--orbit-direction": ring === 1 ? "reverse" : "normal",
                } as CSSProperties}>
                  <div className="tech-orbit-position"><div className="tech-orbit-label">
                    <Icon size={28} aria-hidden="true" /><span>{name}</span>
                  </div></div>
                </li>;
              })}
            </ul>
          </div>
          <button type="button" className="tech-orbit-toggle button-secondary text-sm mx-auto mt-5" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
            {paused ? "Resume orbit" : "Pause orbit"}
          </button>
        </div>
      </div>
    </section>
  );
}
