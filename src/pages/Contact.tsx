import PageShell from "@/components/PageShell";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h1 className="text-hero mb-4">Let's Build Something Great</h1>
            <p className="text-subtitle text-muted-foreground font-normal">Get a free consultation and custom quote for your project</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-small font-medium mb-2">Full Name *</label>
                    <input type="text" className="w-full border border-input rounded-md px-4 py-3 text-body bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-small font-medium mb-2">Email Address *</label>
                    <input type="email" className="w-full border border-input rounded-md px-4 py-3 text-body bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-small font-medium mb-2">Phone Number</label>
                    <input type="tel" className="w-full border border-input rounded-md px-4 py-3 text-body bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-small font-medium mb-2">Company Name</label>
                    <input type="text" className="w-full border border-input rounded-md px-4 py-3 text-body bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-small font-medium mb-2">Project Type *</label>
                    <select className="w-full border border-input rounded-md px-4 py-3 text-body bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Web Application</option>
                      <option>Mobile App</option>
                      <option>Security & Compliance</option>
                      <option>Government Project</option>
                      <option>InvestSwipe Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-small font-medium mb-2">Budget Range</label>
                    <select className="w-full border border-input rounded-md px-4 py-3 text-body bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Less than R50,000</option>
                      <option>R50,000 - R100,000</option>
                      <option>R100,000 - R250,000</option>
                      <option>R250,000 - R500,000</option>
                      <option>R500,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-small font-medium mb-2">Project Description *</label>
                  <textarea rows={5} className="w-full border border-input rounded-md px-4 py-3 text-body bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-md text-body font-semibold hover:bg-primary-dark transition-colors duration-300">
                  Send Inquiry
                </button>
                <p className="text-small text-muted-foreground text-center">We typically respond within 24 hours on business days</p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-muted rounded-lg p-8 space-y-6">
                <h3 className="text-card-title mb-4">Direct Contact</h3>
                <div className="space-y-4 text-body">
                  <p>📧 lisowycliff@gmail.com</p>
                  <p>📱 083 894 7546</p>
                  <a href="https://wa.me/27838947546" className="inline-block bg-success text-success-foreground px-6 py-3 rounded-md text-small font-semibold mt-2">
                    💬 Click to Chat on WhatsApp
                  </a>
                </div>
                <hr className="border-border" />
                <div>
                  <h4 className="font-semibold mb-2">Office Hours</h4>
                  <p className="text-small text-muted-foreground">🕐 Mon-Fri, 8AM-5PM SAST</p>
                  <p className="text-small text-muted-foreground">⚡ Emergency support for active clients</p>
                </div>
                <hr className="border-border" />
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-small text-muted-foreground">📍 Kommetjie, Cape Town, South Africa</p>
                  <p className="text-small text-muted-foreground italic mt-1">Proudly based in Cape Town's creative southern peninsula</p>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="mt-20">
            <h2 className="text-section text-center mb-12">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "You Reach Out", desc: "Fill the form or email directly. Tell us about your project." },
                { step: "2", title: "Free Consultation", desc: "We schedule a 30-minute call to understand your needs and goals." },
                { step: "3", title: "Custom Proposal", desc: "Within 48 hours, you receive a detailed proposal with timeline and pricing." },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                  <h3 className="text-subtitle mb-2">{s.title}</h3>
                  <p className="text-body text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
