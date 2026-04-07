import { Newspaper, Wrench, BrainCircuit } from "lucide-react";

const features = [
  {
    title: "Daily Newsletter",
    description: "Your shortcut to staying ahead—delivered every morning.",
    linkText: "Get Daily Briefs",
    icon: <Newspaper className="w-5 h-5 text-purple-300" />,
    // Deep Royal Purple Glow
    glowClass: "shadow-[0_0_30px_-10px_rgba(147,51,234,0.5)] border-purple-500/30 bg-gradient-to-b from-purple-900/20 to-black",
    accentColor: "text-purple-400"
  },
  {
    title: "Curated Tools",
    description: "The most powerful AI apps and platforms—tested and reviewed for you.",
    linkText: "Find My Tools",
    icon: <Wrench className="w-5 h-5 text-fuchsia-300" />,
    // Bright Violet/Amethyst Glow
    glowClass: "shadow-[0_0_30px_-10px_rgba(192,38,211,0.5)] border-fuchsia-500/30 bg-gradient-to-b from-fuchsia-900/20 to-black",
    accentColor: "text-fuchsia-400"
  },
  {
    title: "Expert Insights",
    description: "Actionable analysis from researchers and founders shaping the future of AI.",
    linkText: "Unlock Insights",
    icon: <BrainCircuit className="w-5 h-5 text-indigo-300" />,
    // Indigo/Deep Lavender Glow
    glowClass: "shadow-[0_0_30px_-10px_rgba(99,102,241,0.5)] border-indigo-500/30 bg-gradient-to-b from-indigo-900/20 to-black",
    accentColor: "text-indigo-400"
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-[#05050A] flex justify-center">
      <div className="container max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item) => (
            <div 
              key={item.title} 
              className={`relative group p-8 rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${item.glowClass}`}
            >
              {/* Glassmorphism Icon Container */}
              <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-8">
                {item.description}
              </p>

              <button className={`flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80 ${item.accentColor}`}>
                {item.linkText} <span className="text-lg">→</span>
              </button>

              {/* Bottom Glow Effect (Matching the reference image) */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] blur-md opacity-50 ${item.accentColor.replace('text', 'bg')}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}