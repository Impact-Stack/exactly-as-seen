import { useState, useEffect, useRef, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { toast } from "@/components/ui/sonner";
import { event as trackEvent } from "@/lib/analytics";
import { absoluteUrl } from "@/lib/site";
import { Button, MenuItem, Select } from "@mui/material";

const PROJECT_TYPE_OPTIONS = [
  { value: "Web Application", label: "Web Application" },
  { value: "Mobile App", label: "Mobile App" },
  { value: "Security and Compliance", label: "Security & Compliance" },
  { value: "Government Project", label: "Government Project" },
  { value: "InvestSwipe Partnership", label: "InvestSwipe Partnership" },
  { value: "Other", label: "Other" },
];

const FADE_DURATION = 1500; // ms for the crossfade
const PRELOAD_SECS = 2; // seconds before end to start fading

function CrossfadeVideo({ src }: { src: string }) {
  const refA = useRef<HTMLVideoElement>(null);
  const refB = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<"a" | "b">("a");
  const fadingRef = useRef(false);
  const srcRef = useRef(src);

  useEffect(() => {
    srcRef.current = src;
  }, [src]);

  useEffect(() => {
    const a = refA.current;
    const b = refB.current;
    if (!a || !b) return;

    const init = async () => {
      a.style.opacity = "1";
      b.style.opacity = "0";
      try {
        await a.play();
      } catch (e) {
        console.warn("Autoplay blocked, waiting for interaction");
      }
    };
    init();

    const crossfade = async () => {
      if (fadingRef.current) return;
      fadingRef.current = true;

      const current = activeRef.current === "a" ? a : b;
      const next = activeRef.current === "a" ? b : a;

      next.currentTime = 0;
      try {
        await next.play();
        const duration = 2500;
        const start = performance.now();

        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          next.style.opacity = String(t);
          current.style.opacity = String(1 - t);

          if (t < 1) {
            requestAnimationFrame(tick);
          } else {
            activeRef.current = activeRef.current === "a" ? "b" : "a";
            current.pause();
            current.currentTime = 0;
            fadingRef.current = false;
          }
        };
        requestAnimationFrame(tick);
      } catch (e) {
        fadingRef.current = false;
      }
    };

    const onTimeUpdate = () => {
      const current = activeRef.current === "a" ? a : b;
      const preloadSecs = 3;
      if (
        !fadingRef.current &&
        current.duration > 0 &&
        current.currentTime >= current.duration - preloadSecs
      ) {
        crossfade();
      }
    };

    a.addEventListener("timeupdate", onTimeUpdate);
    b.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      a.removeEventListener("timeupdate", onTimeUpdate);
      b.removeEventListener("timeupdate", onTimeUpdate);
      a.pause();
      b.pause();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-[90%] pointer-events-none">
      <video
        ref={refA}
        src={src}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
        style={{ opacity: 1, willChange: "opacity" }}
      />
      <video
        ref={refB}
        src={src}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
        style={{ opacity: 0, willChange: "opacity" }}
      />
    </div>
  );
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [searchParams] = useSearchParams();

  const requestedProjectType = searchParams.get("projectType")?.trim() || "";
  const requestedProjectInterest =
    searchParams.get("projectInterest")?.trim() || "";
  const leadSource = searchParams.get("source")?.trim() || "website";

  const prefilledProjectType = PROJECT_TYPE_OPTIONS.some(
    (opt) => opt.value === requestedProjectType,
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
    if (!payload.fullName) newErrors.fullName = "Required";
    if (!payload.email) newErrors.email = "Required";
    if (!payload.projectType) newErrors.projectType = "Required";
    if (!payload.message) newErrors.message = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const resp = await fetch(`https://formspree.io/f/xykbvpby`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!resp.ok) throw new Error();
      trackEvent({
        action: "submit_contact_form",
        category: "Contact",
        label: "Website",
      });
      toast.success("Message sent. We will respond within 24 hours.");
      form.reset();
    } catch {
      toast.error("Error sending. Email business@impactstack.africa directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-[#0B0B12] border border-white/[0.08] rounded-md px-4 py-2.5 text-sm text-white placeholder:text-[#A1A1B5] focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] transition-all";

  const selectSx = {
    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
    "& .MuiSelect-select": { padding: "0 !important", color: "white" },
    "& .MuiSvgIcon-root": { color: "white" },
  };

  const menuProps = {
    PaperProps: {
      sx: {
        bgcolor: "#0B0B12",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        color: "white",
        marginTop: "8px",
        "& .MuiMenuItem-root": { fontSize: "13px", padding: "10px 16px" },
        "& .MuiMenuItem-root:hover": { bgcolor: "rgba(139, 92, 246, 0.1)" },
        "& .Mui-selected": { bgcolor: "#8B5CF6 !important", color: "white" },
      },
    },
  };

  return (
    <>
      <SEO
        title="Contact ImpactStack Africa"
        description="Discuss your software project."
        url={absoluteUrl("/contact")}
      />
      <PageShell>
        <div className="bg-[#05050A] px-3 lg:px-12 py-4 min-h-screen max-h-[1080px] flex flex-col">
          <div className="flex flex-col lg:flex-row gap-2 rounded-xl flex-1 justify-center">
            {/* LEFT PANEL */}
            <div className="hidden lg:block lg:w-[42%] relative">
              <CrossfadeVideo src="/contact-bg-compressed..mp4" />
              <div className="absolute inset-0 rounded-xl h-[90%] bg-black/40 bg-gradient-to-t from-[#05050A] via-transparent to-black/20" />
              <div className="absolute top-6 left-6 z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium font-mono">
                  ImpactStack Africa
                </span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 space-y-10 w-80">
                <div className="text-center space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-white text-lg font-medium tracking-tight">
                      Want to know more?
                    </h2>
                    <p className="text-white/70 text-sm">Direct contact US</p>
                  </div>
                  <div className="flex flex-col py-6 px-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden gap-4">
                    <a
                      href="mailto:business@impactstack.africa"
                      className="flex flex-col items-center"
                    >
                      <p className="text-[#8B5CF6] text-[10px] font-bold uppercase mb-1 tracking-widest">
                        Email
                      </p>
                      <p className="text-white text-sm">
                        business@impactstack.africa
                      </p>
                    </a>
                    <a
                      href="https://wa.me/27838947546"
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center py-3 px-4"
                    >
                      <p className="text-[#4CAF50] text-[10px] font-bold uppercase mb-1 tracking-widest">
                        WhatsApp
                      </p>
                      <p className="text-white text-sm">Chat with US</p>
                    </a>
                    <a
                      href="tel:+27895262589"
                      className="flex flex-col items-center"
                    >
                      <p className="text-white/40 text-[10px] font-bold uppercase mb-1 tracking-widest">
                        Phone
                      </p>
                      <p className="text-white text-sm">+27 89 526 2589</p>
                    </a>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h2 className="text-white text-lg font-medium tracking-tight">
                    Find US Here
                  </h2>
                  <div className="py-6 px-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col gap-5">
                    <div>
                      <span className="text-white/40 block text-[10px] uppercase font-bold tracking-widest mb-1">
                        Location
                      </span>
                      <span className="text-white text-sm font-medium">
                        Cape Town, SA
                      </span>
                    </div>
                    <div>
                      <span className="text-white/40 block text-[10px] uppercase font-bold tracking-widest mb-1">
                        Office Hours
                      </span>
                      <span className="text-white text-sm font-medium">
                        Mon-Fri: 8AM-5PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL (FORM) */}
            <div className="flex-1 lg:w-[45%] bg-[#05050A] flex flex-col h-full">
              <div className="overflow-y-auto px-6 py-8 lg:px-12 lg:py-10">
                <div className="max-w-lg mx-auto">
                  <header className="mb-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#8B5CF6] mb-2 font-bold">
                      Get In Touch
                    </p>
                    <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                      Let&apos;s Build Something Great
                    </h1>
                    <p className="text-[#A1A1B5] text-sm mt-2">
                      Book a consultation and get a practical delivery path.
                    </p>
                  </header>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="_gotcha"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <input
                      type="hidden"
                      name="projectInterest"
                      defaultValue={prefilledProjectInterest}
                    />
                    <input
                      type="hidden"
                      name="leadSource"
                      defaultValue={leadSource}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-small font-medium text-white/80 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-small font-medium text-white/80 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-small font-medium text-white/80 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-small font-medium text-white/80 mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block text-small font-medium text-white/80 mb-2"
                        >
                          Project Type *
                        </label>
                        <Select
                          id="projectType"
                          name="projectType"
                          displayEmpty
                          required
                          defaultValue={prefilledProjectType || ""}
                          className={inputClass}
                          sx={selectSx}
                          MenuProps={menuProps}
                        >
                          <MenuItem value="" disabled>
                            Select project type
                          </MenuItem>
                          {PROJECT_TYPE_OPTIONS.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>

                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-small font-medium text-white/80 mb-2"
                        >
                          Delivery Timeline
                        </label>
                        <Select
                          id="budget"
                          name="budget"
                          displayEmpty
                          defaultValue=""
                          className={inputClass}
                          sx={selectSx}
                          MenuProps={menuProps}
                        >
                          <MenuItem value="" disabled>
                            Select timeline
                          </MenuItem>
                          <MenuItem value="Urgent - under 1 month">
                            Urgent - under 1 month
                          </MenuItem>
                          <MenuItem value="1 to 3 months">
                            1 to 3 months
                          </MenuItem>
                          <MenuItem value="3 to 6 months">
                            3 to 6 months
                          </MenuItem>
                          <MenuItem value="6 months+">6 months+</MenuItem>
                          <MenuItem value="Not sure yet">Not sure yet</MenuItem>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-small font-medium text-white/80 mb-2"
                      >
                        Project Description *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      variant="outlined"
                      className="button-secondary w-full px-10 py-4 text-base inline-block border border-gray-500 rounded hover:border-white transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                      style={{ textTransform: "none" }}
                    >
                      {loading ? "Sending..." : "Send Inquiry"}
                    </Button>

                    <p className="text-small text-[#A1A1B5] text-center">
                      We typically respond within 24 hours on business days
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-auto px-6 py-8">
          <div className="w-full max-w-5xl border-t border-white/5 pt-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {[
              { s: "01", t: "Reach Out", d: "Fill the form or email us." },
              { s: "02", t: "Consultation", d: "30-min strategy call." },
              { s: "03", t: "Proposal", d: "Scope & quote in 48h." },
            ].map((item) => (
              <div
                key={item.s}
                className="flex flex-col items-center md:items-center gap-1"
              >
                <span className="text-xl font-black text-[#8B5CF6]">
                  {item.s}
                </span>
                <h3 className="text-white text-xs font-bold uppercase tracking-wider">
                  {item.t}
                </h3>
                <p className="text-[11px] text-white/50 leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageShell>
    </>
  );
}
