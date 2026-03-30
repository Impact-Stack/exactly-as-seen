import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { toast } from "@/components/ui/sonner";
import { event as trackEvent } from "@/lib/analytics";
import { absoluteUrl } from "@/lib/site";
import { Button } from "@mui/material";


const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID?.trim();
const PROJECT_TYPE_OPTIONS = [
  { value: "Web Application", label: "Web Application" },
  { value: "Mobile App", label: "Mobile App" },
  { value: "Security and Compliance", label: "Security & Compliance" },
  { value: "Government Project", label: "Government Project" },
  { value: "InvestSwipe Partnership", label: "InvestSwipe Partnership" },
  { value: "Other", label: "Other" },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [searchParams] = useSearchParams();
  const requestedProjectType = searchParams.get("projectType")?.trim() || "";
  const requestedProjectInterest =
    searchParams.get("projectInterest")?.trim() || "";
  const leadSource = searchParams.get("source")?.trim() || "website";
  const prefilledProjectType = PROJECT_TYPE_OPTIONS.some(
    (option) => option.value === requestedProjectType,
  )
    ? requestedProjectType
    : "";
  const prefilledProjectInterest = requestedProjectInterest;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const newErrors: Record<string, string> = {};
    if (!payload.fullName) newErrors.fullName = "Full name is required";
    if (!payload.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email as string))
      newErrors.email = "Invalid email format";
    if (!payload.projectType)
      newErrors.projectType = "Project type is required";
    if (!payload.message) newErrors.message = "Project description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      if (!FORMSPREE_ID) throw new Error("Formspree is not configured");
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Form submission failed");
      trackEvent({
        action: "submit_contact_form",
        category: "Contact",
        label: "Website Contact Form",
      });
      if (
        prefilledProjectType ||
        prefilledProjectInterest ||
        leadSource !== "website"
      ) {
        trackEvent({
          action: "contact_prefill_submit",
          category: "Contact",
          label: `${prefilledProjectType || "unspecified"}|${prefilledProjectInterest || "unspecified"}|${leadSource}`,
        });
      }
      toast.success("Message sent. We will respond within 24 hours.");
      form.reset();
    } catch {
      toast.error(
        "Unable to send right now. Please email hello@impactstack.africa directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-[#0B0B12] border border-white/[0.08] rounded-md px-4 py-3 text-body text-white placeholder:text-[#A1A1B5] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]";

  return (
    <>
      <SEO
        title="Contact ImpactStack Africa | Enterprise Consultation"
        description="Discuss your software, mobile, compliance, or public sector project with ImpactStack Africa."
        url={absoluteUrl("/contact")}
      />
      <PageShell>
        {/* ── Main Split Layout ── */}
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#05050A]">

          {/* ── FORM PANEL — right side ── */}
          <div className="flex-1 lg:w-[55%] overflow-y-auto px-6 py-16 lg:px-14 xl:px-20 border-l border-white/5 lg:order-2">
            {/* Header */}
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8B5CF6] mb-3 font-medium">
                Get In Touch
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Let&apos;s Build<br />Something Great
              </h1>
              <p className="text-[#B5B7C6] text-base">
                Book a consultation and get a practical delivery path for your project.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="projectInterest" defaultValue={prefilledProjectInterest} />
              <input type="hidden" name="leadSource" defaultValue={leadSource} />

              {(prefilledProjectType || prefilledProjectInterest || leadSource !== "website") && (
                <p className="text-small text-[#C4B5FD] bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-md px-4 py-3">
                  {prefilledProjectType && (
                    <>Project type preselected: <span className="font-semibold">{prefilledProjectType}</span>.</>
                  )}
                  {prefilledProjectInterest && (
                    <> Project interest: <span className="font-semibold">{prefilledProjectInterest}</span>.</>
                  )}
                  {leadSource !== "website" && (
                    <> Source: <span className="font-semibold">{leadSource}</span>.</>
                  )}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium text-white/70 mb-2 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input id="fullName" name="fullName" type="text" required className={inputClass} />
                  {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-white/70 mb-2 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input id="email" name="email" type="email" required className={inputClass} />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-white/70 mb-2 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input id="phone" name="phone" type="tel" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-white/70 mb-2 uppercase tracking-wide">
                    Company Name
                  </label>
                  <input id="company" name="company" type="text" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="projectType" className="block text-xs font-medium text-white/70 mb-2 uppercase tracking-wide">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue={prefilledProjectType || ""}
                    className={inputClass}
                  >
                    <option value="" disabled>Select project type</option>
                    {PROJECT_TYPE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="text-xs text-red-400 mt-1">{errors.projectType}</p>}
                </div>
                <div>
                  <label htmlFor="budget" className="block text-xs font-medium text-white/70 mb-2 uppercase tracking-wide">
                    Delivery Timeline
                  </label>
                  <select id="budget" name="budget" defaultValue="" className={inputClass}>
                    <option value="" disabled>Select timeline</option>
                    <option value="Urgent - under 1 month">Urgent — under 1 month</option>
                    <option value="1 to 3 months">1 to 3 months</option>
                    <option value="3 to 6 months">3 to 6 months</option>
                    <option value="6 months+">6 months+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-white/70 mb-2 uppercase tracking-wide">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={loading}
                variant="contained"
                sx={{
                  width: "100%",
                  py: 1.8,
                  background: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "none",
                  borderRadius: "8px",
                  boxShadow: "0 8px 32px rgba(139,92,246,0.35)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
                    boxShadow: "0 12px 40px rgba(139,92,246,0.5)",
                  },
                  "&:disabled": { opacity: 0.5 },
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0A12 12 0 000 12h4zm2 5.291A7.961 7.961 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Inquiry"
                )}
              </Button>

              <p className="text-xs text-[#A1A1B5] text-center">
                We typically respond within 24 hours on business days
              </p>
            </form>

            {/* What Happens Next */}
            <div className="mt-20 pt-16 border-t border-white/5">
              <h2 className="text-2xl font-bold text-white mb-10">What Happens Next?</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "You Reach Out",
                    desc: "Fill the form or email directly. Tell us about your project.",
                  },
                  {
                    step: "02",
                    title: "Free Consultation",
                    desc: "We schedule a 30-minute call to understand your needs and goals.",
                  },
                  {
                    step: "03",
                    title: "Custom Proposal",
                    desc: "Within 48 hours, you receive a detailed proposal with timeline and scope.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-5 items-start">
                    <span
                      className="text-3xl font-black shrink-0 leading-none"
                      style={{
                        background: "linear-gradient(135deg, #8B5CF6, #4C1D95)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {s.step}
                    </span>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{s.title}</h3>
                      <p className="text-sm text-[#B5B7C6]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── VIDEO PANEL — left side ── */}
          <div className="hidden lg:flex lg:w-[45%] relative flex-col overflow-hidden lg:order-1">
            {/* Sticky container that fills the viewport height */}
            <div className="sticky top-0 h-screen flex flex-col">
              {/* Video fills the entire right panel */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/contact-bg.mp4"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Dark gradient overlay — heavier at bottom to anchor the cards */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(5,5,10,0.15) 0%, rgba(5,5,10,0.25) 40%, rgba(5,5,10,0.72) 68%, rgba(5,5,10,0.92) 100%)",
                }}
              />

              {/* Top brand watermark */}
              <div className="relative z-10 p-8">
                <span className="text-xs uppercase tracking-[0.25em] text-white/40 font-medium">
                  ImpactStack Africa
                </span>
              </div>

              {/* Glass cards anchored to bottom */}
              <div className="relative z-10 mt-auto p-6 space-y-3">

                {/* Direct Contact card */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.13)",
                    borderRadius: "16px",
                  }}
                  className="p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#C4B5FD" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xs uppercase tracking-[0.18em] text-white/60 font-semibold">
                      Direct Contact
                    </h3>
                  </div>
                  <div className="space-y-1.5">
                    <a
                      href="mailto:hello@impactstack.africa"
                      className="block text-sm text-white/90 hover:text-white transition-colors font-medium"
                    >
                      hello@impactstack.africa
                    </a>
                    <a
                      href="tel:+27838947546"
                      className="block text-sm text-white/75 hover:text-white transition-colors"
                    >
                      +27 83 894 7546
                    </a>
                  </div>
                  <a
                    href="https://wa.me/27838947546"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all"
                    style={{
                      background: "rgba(0,166,81,0.85)",
                      border: "1px solid rgba(0,166,81,0.5)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Office Hours + Location — side by side */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Office Hours */}
                  <div
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.11)",
                      borderRadius: "14px",
                    }}
                    className="p-4"
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#C4B5FD" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-[10px] uppercase tracking-[0.18em] text-white/55 font-semibold">
                        Office Hours
                      </h3>
                    </div>
                    <p className="text-sm text-white/85 font-medium leading-snug">Mon–Fri</p>
                    <p className="text-xs text-white/55 mt-0.5">8AM – 5PM SAST</p>
                    <p className="text-[10px] text-white/40 mt-2 leading-snug">
                      Emergency support for active clients
                    </p>
                  </div>

                  {/* Location */}
                  <div
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.11)",
                      borderRadius: "14px",
                    }}
                    className="p-4"
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#C4B5FD" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-[10px] uppercase tracking-[0.18em] text-white/55 font-semibold">
                        Location
                      </h3>
                    </div>
                    <p className="text-sm text-white/85 font-medium leading-snug">Cape Town</p>
                    <p className="text-xs text-white/55 mt-0.5">South Africa</p>
                    <p className="text-[10px] text-white/40 mt-2 leading-snug italic">
                      Southern Peninsula
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── MOBILE — Contact info below form ── */}
          <div className="lg:hidden px-6 py-10 border-t border-white/5 bg-[#08080F]">
            <div className="space-y-4">
              {/* Direct Contact */}
              <div className="rounded-2xl p-5 border border-white/10 bg-white/5">
                <h3 className="text-xs uppercase tracking-widest text-[#8B5CF6] mb-3 font-semibold">
                  Direct Contact
                </h3>
                <a href="mailto:hello@impactstack.africa" className="block text-sm text-white/90 mb-1">
                  hello@impactstack.africa
                </a>
                <a href="tel:+27838947546" className="block text-sm text-white/65 mb-3">
                  +27 83 894 7546
                </a>
                <a
                  href="https://wa.me/27838947546"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white"
                  style={{ background: "#00A651" }}
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl p-4 border border-white/10 bg-white/5">
                  <h3 className="text-[10px] uppercase tracking-widest text-[#8B5CF6] mb-2 font-semibold">Office Hours</h3>
                  <p className="text-sm text-white/85 font-medium">Mon–Fri</p>
                  <p className="text-xs text-white/50 mt-0.5">8AM – 5PM SAST</p>
                </div>
                <div className="rounded-2xl p-4 border border-white/10 bg-white/5">
                  <h3 className="text-[10px] uppercase tracking-widest text-[#8B5CF6] mb-2 font-semibold">Location</h3>
                  <p className="text-sm text-white/85 font-medium">Cape Town</p>
                  <p className="text-xs text-white/50 mt-0.5">South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}