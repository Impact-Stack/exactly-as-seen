import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { BookOpen, Check, RotateCcw, Layers, Hand } from "lucide-react";

/** A self-contained educational example; no prices, accounts or trades. */
export default function LearningPreview() {
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState<"single" | "spread" | null>(null);
  const reducedMotion = useReducedMotion();
  const advance = () => setStep(1);
  return <div className="is-preview" aria-label="Interactive investing lesson preview">
    <div className="is-preview-top"><span>INVEST<span className="is-cyan">SWIPE</span></span><span className="is-preview-tag">Learning preview</span></div>
    <div className="is-preview-progress" aria-label={`Step ${step + 1} of 3`}>{[0, 1, 2].map(i => <span key={i} className={i <= step ? "is-active" : ""} />)}</div>
    <div className="is-preview-stage">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={step} initial={reducedMotion ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: reducedMotion ? 0 : -20 }} transition={{ duration: .2 }}
          drag={step === 0 ? "x" : false} dragConstraints={{ left: 0, right: 0 }} dragElastic={.25} onDragEnd={(_, info) => { if (step === 0 && Math.abs(info.offset.x) > 60) advance(); }} className="is-lesson-card" style={{ touchAction: "pan-y" }}>
          {step === 0 && <><div className="is-card-eyebrow"><BookOpen size={17} /> THE 60-SECOND IDEA</div><h3>One basket.<br />Or a few?</h3><p>If all your investments depend on one company, a setback there can affect your whole portfolio.</p><div className="is-baskets" aria-hidden="true"><div><span>A</span><span>A</span><span>A</span><small>One company</small></div><div><span>A</span><span>B</span><span>C</span><small>Different companies</small></div></div><p className="is-card-note">Diversification means spreading investments. It can reduce concentration risk, but cannot remove all risk.</p><button className="is-demo-primary" onClick={advance}>Try a practice decision</button><span className="is-swipe-hint"><Hand size={16} /> Swipe this card, or use the button</span></>}
          {step === 1 && <><div className="is-card-eyebrow"><Layers size={17} /> PUT THE IDEA INTO PRACTICE</div><h3>Spread your<br />paper credits.</h3><p>In this example, which choice reduces dependence on a single company?</p><div className="is-choices"><button onClick={() => { setChoice("single"); setStep(2); }}><strong>One company</strong><span>All 1,000 simulated credits in A</span></button><button onClick={() => { setChoice("spread"); setStep(2); }}><strong>Several companies</strong><span>Split 1,000 simulated credits across A, B and C</span></button></div><p className="is-card-note">An illustrative exercise, not an investment recommendation.</p><button className="is-demo-back" onClick={() => setStep(0)}>Read the idea again</button></>}
          {step === 2 && <><div className="is-card-eyebrow"><Check size={17} /> LEARN FROM YOUR DECISION</div><h3>{choice === "spread" ? <>Less dependence.<br />Still some risk.</> : <>One company.<br />More concentration.</>}</h3><p>{choice === "spread" ? "Spreading the credits makes this example less dependent on company A alone. Different companies can still fall together." : "Putting every credit in A leaves the example dependent on that company's performance. Spreading them would reduce that concentration."}</p><div className="is-takeaway"><span>YOUR TAKEAWAY</span><strong>Diversification reduces concentration. It does not guarantee a profit.</strong></div><button className="is-demo-primary" onClick={() => { setStep(0); setChoice(null); }}><RotateCcw size={17} /> Try the lesson again</button><a className="is-demo-back" href="#waitlist">Join the beta waitlist</a></>}
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="is-preview-bottom"><span>LEARN</span><span>PRACTISE</span><span>UNDERSTAND</span></div>
    <p className="is-preview-caption">Illustrative website demo · app in development</p>
  </div>;
}
