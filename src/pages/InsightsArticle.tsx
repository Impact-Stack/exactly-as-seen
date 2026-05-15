import { useParams, Link, Navigate } from "react-router-dom";
import { getArticleBySlug, type ArticleContentBlock } from "@/lib/articles";

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  "Digital Transformation": { bg: "#E1F5EE", text: "#0F6E56", dot: "#1D9E75" },
  "Cybersecurity": { bg: "#E6F1FB", text: "#185FA5", dot: "#378ADD" },
  "Cloud & Infrastructure": { bg: "#FAEEDA", text: "#854F0B", dot: "#EF9F27" },
};

function renderBlock(block: ArticleContentBlock, i: number, dotColor: string) {
  switch (block.type) {
    case "intro":
      return (
        <p key={i} className="text-base md:text-lg leading-relaxed text-white/80 mb-8 font-medium">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2 key={i} className="text-2xl font-black text-white tracking-tight mt-12 mb-4">
          {block.text}
        </h2>
      );
    case "body":
      return (
        <div key={i} className="mb-6">
          <p className="text-base leading-[1.85] text-white/70">{block.text}</p>
          {block.source && (
            <p className="text-xs text-white/30 mt-2 italic">Source: {block.source}</p>
          )}
        </div>
      );
    case "closing":
      return (
        <div
          key={i}
          className="mt-12 mb-8 rounded-2xl p-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderLeft: `3px solid ${dotColor}`,
          }}
        >
          <p className="text-base leading-[1.8] text-white/80">{block.text}</p>
        </div>
      );
    case "sources":
      return (
        <div key={i} className="mt-12 pt-8 border-t border-white/10">
          <p className="text-[10px] uppercase tracking-[0.2em] font-black text-white/30 mb-4">
            Sources &amp; Further Reading
          </p>
          <div className="flex flex-col gap-3">
            {block.links.map((l, j) => (
              <a
                key={j}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
                style={{ color: dotColor }}
              >
                <span>↗</span>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function InsightArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <Navigate to="/insights" replace />;

  const c = categoryColors[article.category] ?? { bg: "#f0f0f0", text: "#333", dot: "#999" };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/gradient.webp')` }}
      />
      <div className="absolute inset-0 z-10 bg-black/70 backdrop-blur-2xl" />

      <div className="relative z-20 max-w-3xl mx-auto px-6 py-16">
        {/* Back link */}
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors mb-12"
        >
          <span>←</span> All Insights
        </Link>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className="text-[11px] font-bold px-3 py-1 rounded-full"
            style={{ background: c.bg + "22", color: c.dot }}
          >
            {article.category}
          </span>
          <span className="text-[11px] text-white/30">{article.tag}</span>
          <span className="text-white/20">·</span>
          <span className="text-[11px] text-white/30">{article.date}</span>
          <span className="text-white/20">·</span>
          <span className="text-[11px] text-white/30">{article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-6">
          {article.title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg text-white/60 leading-relaxed mb-10 pl-4"
          style={{ borderLeft: `3px solid ${c.dot}` }}
        >
          {article.subtitle}
        </p>

        <div className="h-px bg-white/10 mb-10" />

        {/* Content */}
        <div>
          {article.content.map((block, i) => renderBlock(block, i, c.dot))}
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
          >
            <span>←</span> All Insights
          </Link>
          <span className="text-[11px] text-white/20 font-mono">{article.id}</span>
        </div>
      </div>
    </div>
  );
}