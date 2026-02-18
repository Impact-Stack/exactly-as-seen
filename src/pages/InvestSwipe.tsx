import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { Link } from "react-router-dom";
import investswipeMockup from "@/assets/investswipe-mockup.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is InvestSwipe safe and legal?", a: "Yes. We partner with a licensed FSCA-regulated broker. Your investments are held by the broker in segregated accounts." },
  { q: "What is the minimum investment?", a: "R10 per asset. Buy fractional shares. No account minimums." },
  { q: "Are there fees?", a: "R49/month subscription for premium (ad-free, analytics). Free tier available. Small transaction fee (R2-5 per trade)." },
  { q: "Can I lose money?", a: "Yes. All investing carries risk. Only invest what you can afford to lose. Our 60-second videos explain risks for each asset." },
  { q: "When does it launch?", a: "Q3 2026 for beta (500 users). Q4 2026 for public launch. Join waitlist for early access." },
  { q: "Who built this?", a: "ImpactStack Africa, a youth-led Cape Town tech company. Led by Google Cybersecurity certified developer Liso Hlatshwayo, 21." },
];

export default function InvestSwipePage() {
  return (
    <>
      <SEO title="InvestSwipe | ImpactStack Africa" description="InvestSwipe makes investing accessible to young South Africans through a simple swipe-based experience." url={absoluteUrl("/investswipe")} />
      <PageShell>
        <section className="bg-gradient-to-br from-blue-950 to-[#0A0A0A] py-24 px-4">
          <div className="container-narrow text-center">
            <h1 className="text-hero text-white mb-4">The Future of Investing in South Africa</h1>
            <p className="text-card-title text-slate-400 font-light mb-8">Making wealth creation accessible to 18 million young South Africans</p>
            <Link to="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-md text-body font-semibold hover:shadow-xl transition-shadow">Join Waitlist</Link>
            <p className="text-small text-slate-500 mt-4">Launching Q3 2026 | Be among the first 500 beta users</p>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-narrow text-center">
            <p className="tag-label text-blue-400 mb-3">THE CHALLENGE</p>
            <h2 className="text-section text-white mb-12">Why 18 Million Young South Africans Do Not Invest</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "18M", label: "Youth Ages 18-35", desc: "Do not currently invest in stocks or crypto" },
                { num: "R10B+", label: "Lost Wealth Opportunity", desc: "Annual compound growth not captured" },
                { num: "83%", label: "Feel Excluded", desc: "Traditional platforms are not designed for them" },
              ].map((s) => (
                <div key={s.num} className="glass p-8">
                  <p className="text-hero text-blue-400">{s.num}</p>
                  <p className="text-subtitle text-white mt-2">{s.label}</p>
                  <p className="text-small text-slate-500 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0D0D0D]">
          <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src={investswipeMockup} alt="InvestSwipe app" className="max-w-[300px] drop-shadow-2xl" />
            </div>
            <div>
              <h2 className="text-section text-white mb-4">Swipe Right to Build Wealth</h2>
              <p className="text-lg text-slate-400 mb-6">Familiar interface. Revolutionary impact.</p>
              <ul className="space-y-4">
                {[
                  "Tinder-style swipe interface. Swipe right to invest R10, left to skip.",
                  "60-second education videos. Every stock explained simply.",
                  "R10 minimum investment. Lower barrier than any SA competitor.",
                  "Social trading. See friends portfolios and learn together.",
                  "Gamified learning. Earn credits toward your first investment.",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-body text-slate-300">
                    <span className="text-green-400 font-bold mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-narrow max-w-[800px] mx-auto">
            <h2 className="text-section text-white mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white/5 rounded-lg border border-white/10 px-6">
                  <AccordionTrigger className="text-body font-semibold text-white">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-body text-slate-400">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-950 to-[#0A0A0A] py-24 px-4 text-center">
          <h2 className="text-section text-white mb-4">Join the Financial Revolution</h2>
          <p className="text-subtitle text-slate-400 font-normal mb-8">500 beta spots. Be among the first to invest with InvestSwipe.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-md text-body font-semibold hover:shadow-xl transition-shadow">Join Waitlist Now</Link>
        </section>
      </PageShell>
    </>
  );
}
