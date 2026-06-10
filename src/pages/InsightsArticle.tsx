import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getArticleBySlug, type ArticleContentBlock } from "@/lib/articles";

// High-end dark editorial colors
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Digital Transformation": { bg: "rgba(29, 158, 117, 0.1)", text: "#22C55E", border: "#1D9E75" },
  "Cybersecurity": { bg: "rgba(55, 138, 221, 0.1)", text: "#60A5FA", border: "#378ADD" },
  "Cloud & Infrastructure": { bg: "rgba(239, 159, 39, 0.1)", text: "#FBBF24", border: "#EF9F27" },
};

// ─── Reading progress bar ─────────────────────────────────────────────────────
function ReadingProgress({ accent }: { accent: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(pct, 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-neutral-900">
      <div
        className="h-full transition-all duration-100 ease-out"
        style={{ width: `${progress}%`, background: accent }}
      />
    </div>
  );
}

// ─── Scroll-triggered Fade In ─────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(16px)" : "translateY(0)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function renderBlock(block: ArticleContentBlock, i: number, themeColor: string) {
  switch (block.type) {
    case "intro":
      return (
        <FadeIn key={i} delay={i * 30}>
          <p className="text-xl md:text-2xl font-serif text-neutral-100 leading-relaxed mb-10 antialiased">
            {block.text}
          </p>
        </FadeIn>
      );

    case "heading":
      return (
        <FadeIn key={i} delay={i * 30}>
          <h2 className="text-2xl md:text-3xl font-sans font-black tracking-tight text-white mt-14 mb-6 pt-6 border-t border-neutral-900">
            {block.text}
          </h2>
        </FadeIn>
      );

    case "body":
      return (
        <FadeIn key={i} delay={i * 30}>
          <div className="mb-6 font-serif">
            <p className="text-base md:text-lg leading-loose text-neutral-400 antialiased selection:bg-neutral-800 selection:text-white">
              {block.text}
            </p>
            {block.source && (
              <p className="text-xs text-neutral-600 mt-2 font-sans italic">
                — Source: {block.source}
              </p>
            )}
          </div>
        </FadeIn>
      );

    case "closing":
      return (
        <FadeIn key={i} delay={i * 30}>
          {/* Elegant dark pull-quote option mimicking image structural blocks */}
          <div
            className="my-12 py-4 pl-6 md:pl-8 border-l-[3px]"
            style={{ borderColor: themeColor }}
          >
            <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed tracking-tight">
              “{block.text}”
            </p>
          </div>
        </FadeIn>
      );

    case "sources":
      return (
        <FadeIn key={i} delay={i * 30}>
          <div className="mt-16 pt-8 border-t border-neutral-800">
            <p className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-neutral-600 mb-4">
              References & Literature
            </p>
            <div className="flex flex-col gap-2.5 font-sans">
              {block.links.map((l, j) => (
                <a
                  key={j}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-all w-fit"
                  style={{ color: themeColor }}
                >
                  <span className="text-xs">↗</span>
                  <span className="decoration-neutral-800 hover:decoration-current">{l.label}</span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      );

    default:
      return null;
  }
}

export default function InsightArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  
  const relatedArticles = [
    { title: "The Disparate Impact of Modern Cloud Infrastructures", date: "Jan 12, 2026", url: "#" },
    { title: "Building Resilient Frameworks Against Cyber Ecosystems", date: "Feb 05, 2026", url: "#" }
  ];

  const article = slug ? getArticleBySlug(slug) : undefined;
  if (!article) return <Navigate to="/insights" replace />;

  const c = categoryColors[article.category] ?? {
    bg: "rgba(255,255,255,0.05)",
    text: "#ffffff",
    border: "#a3a3a3",
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-neutral-400 selection:bg-neutral-800 selection:text-white">
      <ReadingProgress accent={c.border} />

      {/* Main Container Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-12 pb-24">
        
        {/* Navigation Header */}
        <header className="mb-16 border-b border-neutral-900 pb-6 flex justify-between items-center font-sans">
          <Link
            to="/insights"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 hover:text-neutral-200 transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Insights
          </Link>
          <div className="text-xs uppercase tracking-widest font-black text-white">
            ImpactStack Africa
          </div>
        </header>

        {/* Dynamic Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* 1. LEFT SIDEBAR: Article Meta */}
          <aside className="lg:col-span-3 lg:sticky lg:top-12 space-y-8 font-sans lg:border-r lg:border-neutral-900 lg:pr-8">
            <div className="space-y-2">
              <span 
                className="inline-block text-xs font-bold px-2.5 py-0.5 rounded backdrop-blur-md"
                style={{ backgroundColor: c.bg, color: c.text }}
              >
                {article.category}
              </span>
              <p className="text-xs text-neutral-500 font-medium tracking-wide pt-1">{article.tag}</p>
            </div>

            <div className="h-px bg-neutral-900 w-12 lg:w-full" />

            <div className="text-xs space-y-4">
              <div>
                <span className="uppercase tracking-wider text-[10px] text-neutral-600 block font-bold">Published</span>
                <span className="font-medium text-neutral-300">{article.date}</span>
              </div>
              <div>
                <span className="uppercase tracking-wider text-[10px] text-neutral-600 block font-bold">Reading Time</span>
                <span className="font-medium text-neutral-300">{article.readTime}</span>
              </div>
            </div>
          </aside>

          {/* 2. CENTER COLUMN: Main Text Component */}
          <main className="lg:col-span-6 space-y-6">
            {/* Massive modern typography title */}
            <FadeIn>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-sans font-black tracking-tighter text-white leading-[1.08] mb-6">
                {article.title}
              </h1>
            </FadeIn>

            {/* Subtitle / Deck */}
            <FadeIn delay={60}>
              <p className="text-lg md:text-xl font-serif text-neutral-400 leading-relaxed mb-10 antialiased">
                {article.subtitle}
              </p>
            </FadeIn>

            <div className="w-full h-px bg-neutral-900 mb-10" />

            {/* Rendered Body Content */}
            <article className="prose prose-invert max-w-none">
              {article.content.map((block, i) =>
                renderBlock(block, i, c.border)
              )}
            </article>
          </main>

          {/* 3. RIGHT SIDEBAR: Related Materials (Image 2/3 Sidebar Feed) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-12 space-y-6 font-sans bg-neutral-950/40 p-6 rounded-xl border border-neutral-900">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-600 border-b border-neutral-900 pb-2">
              Related Entries
            </h3>
            <div className="space-y-5">
              {relatedArticles.map((rel, index) => (
                <div key={index} className="group space-y-1">
                  <span className="text-[10px] text-neutral-600 font-medium">{rel.date}</span>
                  <a 
                    href={rel.url} 
                    className="block text-sm font-bold text-neutral-300 leading-snug group-hover:text-white group-hover:underline transition-all"
                  >
                    {rel.title}
                  </a>
                </div>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}