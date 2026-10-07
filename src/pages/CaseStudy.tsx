import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import NotFound from "./NotFound";
import { allProjects } from "@/lib/projects";
import { buildProjectInquiryHref } from "@/lib/lead-routing";
import { absoluteUrl } from "@/lib/site";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = allProjects.find(item => item.id === slug && item.caseStudy);
  if (!project?.caseStudy) return <NotFound />;
  const detail = project.caseStudy;
  return <>
    <SEO title={`${project.title} Case Study | ImpactStack Africa`} description={project.summary} url={absoluteUrl(`/case-studies/${project.id}`)} />
    <PageShell>
      <div className="restored-content restored-portfolio">
        <div className="container-narrow py-12 md:py-20">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-purple-200 mb-10"><ArrowLeft size={16} /> All case studies</Link>
          <header className="max-w-3xl mb-12">
            <p className="tag-label mb-5">{project.type}</p>
            <h1 className="text-4xl md:text-6xl mb-5 tracking-tight">{project.title}</h1>
            <p className="text-purple-200 text-lg mb-4">{project.subtitle}</p>
            <p className="leading-relaxed mb-6">{project.summary}</p>
            {detail.statusProminent && <aside className="border-l-2 border-purple-400 bg-purple-500/10 p-5 mb-6"><h2 className="text-lg mb-3">Development status</h2><p className="text-base leading-relaxed">{detail.status}</p></aside>}
            {project.links.filter(link => link.kind === "live" || link.kind === "github").map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="button-secondary gap-2">{link.label}<ArrowUpRight size={18} /></a>)}
          </header>
          {project.image && <div className="grid md:grid-cols-[minmax(0,1fr)_240px] gap-6 items-start mb-12">
            {project.image && <figure className="overflow-hidden rounded-2xl border border-purple-400/20"><img src={project.image.src} alt={project.image.alt} width="1440" height="1000" className="w-full h-auto" /><figcaption className="p-4 text-sm text-purple-200 bg-[#0a0014]">Desktop — {project.title}.</figcaption></figure>}
            {detail.mobileImage && <figure className="max-w-[280px] md:max-w-none mx-auto overflow-hidden rounded-2xl border border-purple-400/20"><img src={detail.mobileImage.src} alt={detail.mobileImage.alt} width="390" height="844" loading="lazy" className="w-full h-auto" /><figcaption className="p-4 text-sm text-purple-200 bg-[#0a0014]">Mobile — the same visual identity on a smaller screen.</figcaption></figure>}
          </div>}
          <nav aria-label="On this page" className="flex flex-wrap gap-3 border-y border-white/10 py-5 mb-12 text-sm text-purple-200">
            {[['brief','The brief'],['contribution','Our contribution'],['features','Key features'],['design','Design decisions'],['technology','Technology'], ...(detail.sections ?? []).map(section => [section.id, section.title])].map(([id,label]) => <a key={id} href={`#${id}`} className="px-3 py-2 rounded-full border border-purple-400/20 hover:bg-purple-500/20">{label}</a>)}
          </nav>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <section id="brief" className="surface-card p-6 md:p-8 scroll-mt-28"><h2 className="text-2xl mb-4">The brief</h2><p className="leading-relaxed">{project.challenge}</p><p className="leading-relaxed mt-4">{detail.audience}</p></section>
            <section id="contribution" className="surface-card p-6 md:p-8 scroll-mt-28"><h2 className="text-2xl mb-4">Our contribution</h2><p className="leading-relaxed">{project.implementation}</p><p className="text-sm text-purple-200 mt-5">Role: {project.role}</p></section>
          </div>
          {project.security && <section className="mb-12 border-l-2 border-purple-400 pl-5"><h2 className="text-2xl mb-4">Security & governance</h2><p className="leading-relaxed">{project.security}</p></section>}
          <section id="features" className="scroll-mt-28 mb-14"><h2 className="text-3xl mb-6">Key features & delivered work</h2><div className="grid md:grid-cols-3 gap-5">{project.evidence.map(item => <article key={item.title} className="surface-card p-6"><h3 className="text-xl mb-3">{item.title}</h3><p className="text-sm leading-relaxed">{item.detail}</p></article>)}</div></section>
          <section id="design" className="scroll-mt-28 mb-14"><h2 className="text-3xl mb-6">Design decisions</h2><div className="grid md:grid-cols-3 gap-5">{detail.designDecisions.map(item => <article key={item.title} className="rounded-2xl border border-white/10 bg-[#0a0014] p-6"><h3 className="text-xl mb-3">{item.title}</h3><p className="text-sm leading-relaxed">{item.detail}</p></article>)}</div></section>
          <section id="technology" className="scroll-mt-28 mb-14"><h2 className="text-3xl mb-5">Technology</h2><ul className="flex flex-wrap gap-3">{project.technologies.map(tool => <li key={tool} className="tag-label normal-case tracking-normal">{tool}</li>)}</ul></section>
          {detail.sections?.map(section => <section key={section.id} id={section.id} className="scroll-mt-28 mb-14">
            <h2 className="text-3xl mb-6">{section.title}</h2>
            {section.paragraphs?.map(paragraph => <p key={paragraph} className="text-base leading-relaxed max-w-3xl mb-5">{paragraph}</p>)}
            {section.steps && <ol className="list-decimal pl-6 space-y-4 max-w-3xl">{section.steps.map(step => <li key={step} className="pl-2 text-base leading-relaxed">{step}</li>)}</ol>}
            {section.items && <div className="grid md:grid-cols-2 gap-5">{section.items.map(item => <article key={item.title} className="surface-card p-6"><h3 className="text-xl mb-3">{item.title}</h3><p className="text-base leading-relaxed">{item.detail}</p></article>)}</div>}
            {section.table && <div className="overflow-x-auto rounded-2xl border border-white/10"><table className="w-full text-left text-base"><caption className="sr-only">{section.title}</caption><thead className="bg-purple-500/10"><tr>{section.table.headers.map(header => <th key={header} scope="col" className="p-4 font-semibold">{header}</th>)}</tr></thead><tbody>{section.table.rows.map(row => <tr key={row[0]} className="border-t border-white/10">{row.map((cell, index) => index === 0 ? <th key={index} scope="row" className="p-4 font-medium align-top">{cell}</th> : <td key={index} className="p-4 leading-relaxed align-top">{cell}</td>)}</tr>)}</tbody></table></div>}
          </section>)}
          {!detail.statusProminent && <aside className="border-l-2 border-purple-400 pl-5 mb-14"><h2 className="text-lg mb-3">Project status</h2><p className="text-sm leading-relaxed max-w-3xl">{detail.status}</p></aside>}
          <section className="surface-card p-7 md:p-12 text-center"><h2 className="text-3xl mb-4">Need something similar?</h2><p className="mb-7 max-w-2xl mx-auto">Tell us about your goals. We’ll help scope the platform, business system or security work your organisation needs.</p><Link to={buildProjectInquiryHref(project,"case-study")} className="button-primary gap-2">Build something similar<ArrowUpRight size={18}/></Link></section>
        </div>
      </div>
    </PageShell>
  </>;
}
