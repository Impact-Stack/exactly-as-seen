import PageShell from "@/components/PageShell";
import SEO from "@/components/SEO";
import { absoluteUrl } from "@/lib/site";
import { useParams } from "react-router-dom";
import { Accordion as MuiAccordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import heroBg from "@/assets/hero-bg.jpg";

interface LegalDoc { title: string; description: string; updated: string; sections: Array<{ heading: string; body: string }>; }

const legalDocs: Record<string, LegalDoc> = {
  "privacy-policy": { title: "Privacy Policy", description: "How ImpactStack Africa collects, uses, and protects your information.", updated: "February 14, 2026", sections: [{ heading: "Information We Collect", body: "We collect contact details you submit through our forms, including your name, email, phone number, company information, and project details." }, { heading: "How We Use Information", body: "We use your information to respond to inquiries, provide proposals, deliver contracted services, and improve our operations." }, { heading: "Data Security", body: "We apply industry-standard safeguards to protect your data. Access to personal data is restricted to team members who need it for service delivery." }, { heading: "Your Rights", body: "You can request access, correction, or deletion of your personal information by contacting hello@impactstack.africa." }] },
  "terms-of-service": { title: "Terms of Service", description: "Terms governing the use of ImpactStack Africa services and website.", updated: "February 14, 2026", sections: [{ heading: "Service Scope", body: "Project scope, timelines, and deliverables are defined in signed proposals or statements of work." }, { heading: "Payments", body: "Payment terms are outlined in project agreements. Late payments may delay delivery timelines." }, { heading: "Intellectual Property", body: "Ownership and licensing terms are defined per project contract. Unless otherwise stated, third-party tools remain property of their respective owners." }, { heading: "Liability", body: "To the maximum extent permitted by law, liability is limited to fees paid for the specific service in question." }] },
  "cookie-policy": { title: "Cookie Policy", description: "How cookies and analytics technologies are used on the ImpactStack Africa website.", updated: "February 14, 2026", sections: [{ heading: "What Cookies Are", body: "Cookies are small files stored on your device to help websites function, remember preferences, and understand usage." }, { heading: "How We Use Cookies", body: "We use essential cookies for site functionality and optional analytics tools to understand traffic and improve content." }, { heading: "Managing Cookies", body: "You can control or remove cookies through your browser settings. Disabling certain cookies may affect site functionality." }, { heading: "Updates", body: "This policy may be updated as our tooling evolves. Material updates will be reflected in the last updated date." }] },
};

export default function LegalPage() {
  const { slug } = useParams<{ slug: string }>();
  const safeSlug = slug && legalDocs[slug] ? slug : "privacy-policy";
  const doc = legalDocs[safeSlug];

  return (
    <>
      <SEO title={`${doc.title} | ImpactStack Africa`} description={doc.description} url={absoluteUrl(`/legal/${safeSlug}`)} />
      <PageShell>
        <section className="section-padding bg-[#05050A] border-t border-white/5 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-15">
            <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="container-narrow max-w-[900px] relative">
            <h1 className="text-hero text-white mb-4">{doc.title}</h1>
            <p className="text-[#A1A1B5] mb-10">Last updated: {doc.updated}</p>
            <div className="space-y-3">
              {doc.sections.map((section) => (
                <MuiAccordion
                  key={section.heading}
                  defaultExpanded
                  className="surface-card"
                  disableGutters
                  sx={{ "&:before": { display: "none" } }}
                >
                  <AccordionSummary expandIcon={<MdExpandMore className="text-[#C4B5FD]" />}>
                    <h2 className="text-subtitle text-white">{section.heading}</h2>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text-body text-[#B5B7C6] leading-relaxed">{section.body}</p>
                  </AccordionDetails>
                </MuiAccordion>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
