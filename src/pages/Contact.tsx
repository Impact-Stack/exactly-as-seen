import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { toast } from "@/components/ui/sonner";
import { event as trackEvent } from "@/lib/analytics";
import { absoluteUrl } from "@/lib/site";

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
  const [searchParams] = useSearchParams();
  const requestedProjectType = searchParams.get("projectType")?.trim() || "";
  const prefilledProjectType = PROJECT_TYPE_OPTIONS.some((option) => option.value === requestedProjectType) ? requestedProjectType : "";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    try {
      if (!FORMSPREE_ID) throw new Error("Formspree is not configured");
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Form submission failed");
      trackEvent({ action: "submit_contact_form", category: "Contact", label: "Website Contact Form" });
      toast.success("Message sent. We will respond within 24 hours.");
      form.reset();
    } catch {
      toast.error("Unable to send right now. Please email hello@impactstack.africa directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-body text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <>
      <SEO title="Contact ImpactStack Africa | Free Project Consultation" description="Get a free consultation and custom quote for your software, mobile app, or security project." url={absoluteUrl("/contact")} />
      <PageShell>
        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-narrow">
            <div className="text-center mb-16">
              <h1 className="text-hero text-white mb-4">Let&apos;s Build Something Great</h1>
              <p className="text-subtitle text-slate-400 font-normal">Get a free consultation and custom quote for your project</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                  {prefilledProjectType && (
                    <p className="text-small text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-md px-4 py-3">
                      Project type preselected from your previous page: <span className="font-semibold">{prefilledProjectType}</span>
                    </p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-small font-medium text-slate-300 mb-2">Full Name *</label>
                      <input id="fullName" name="fullName" type="text" required className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-small font-medium text-slate-300 mb-2">Email Address *</label>
                      <input id="email" name="email" type="email" required className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-small font-medium text-slate-300 mb-2">Phone Number</label>
                      <input id="phone" name="phone" type="tel" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-small font-medium text-slate-300 mb-2">Company Name</label>
                      <input id="company" name="company" type="text" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-small font-medium text-slate-300 mb-2">Project Type *</label>
                      <select id="projectType" name="projectType" required defaultValue={prefilledProjectType || ""} className={inputClass}>
                        <option value="" disabled>Select project type</option>
                        {PROJECT_TYPE_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-small font-medium text-slate-300 mb-2">Budget Range</label>
                      <select id="budget" name="budget" defaultValue="" className={inputClass}>
                        <option value="" disabled>Select budget</option>
                        <option value="Less than R50,000">Less than R50,000</option>
                        <option value="R50,000 - R100,000">R50,000 - R100,000</option>
                        <option value="R100,000 - R250,000">R100,000 - R250,000</option>
                        <option value="R250,000 - R500,000">R250,000 - R500,000</option>
                        <option value="R500,000+">R500,000+</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-small font-medium text-slate-300 mb-2">Project Description *</label>
                    <textarea id="message" name="message" rows={5} required className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white py-4 rounded-md text-body font-semibold hover:bg-blue-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0A12 12 0 000 12h4zm2 5.291A7.961 7.961 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                        Sending...
                      </span>
                    ) : "Send Inquiry"}
                  </button>
                  <p className="text-small text-slate-500 text-center">We typically respond within 24 hours on business days</p>
                </form>
              </div>

              <div className="lg:col-span-2">
                <div className="glass p-8 space-y-6">
                  <h3 className="text-card-title text-white mb-4">Direct Contact</h3>
                  <div className="space-y-4 text-body text-slate-400">
                    <p><a href="mailto:hello@impactstack.africa" className="hover:text-white transition-colors">hello@impactstack.africa</a></p>
                    <p><a href="tel:+27838947546" className="hover:text-white transition-colors">+27 83 894 7546</a></p>
                    <a href="https://wa.me/27838947546" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white px-6 py-3 rounded-md text-small font-semibold mt-2 shadow-lg shadow-green-500/25">Click to Chat on WhatsApp</a>
                  </div>
                  <hr className="border-white/10" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Office Hours</h4>
                    <p className="text-small text-slate-500">Mon-Fri, 8AM-5PM SAST</p>
                    <p className="text-small text-slate-500">Emergency support for active clients</p>
                  </div>
                  <hr className="border-white/10" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Location</h4>
                    <p className="text-small text-slate-500">Kommetjie, Cape Town, South Africa</p>
                    <p className="text-small text-slate-500 italic mt-1">Proudly based in Cape Town&apos;s creative southern peninsula</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-section text-white text-center mb-12">What Happens Next?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { step: "1", title: "You Reach Out", desc: "Fill the form or email directly. Tell us about your project." },
                  { step: "2", title: "Free Consultation", desc: "We schedule a 30-minute call to understand your needs and goals." },
                  { step: "3", title: "Custom Proposal", desc: "Within 48 hours, you receive a detailed proposal with timeline and pricing." },
                ].map((s) => (
                  <div key={s.step} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                    <h3 className="text-subtitle text-white mb-2">{s.title}</h3>
                    <p className="text-body text-slate-400">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
