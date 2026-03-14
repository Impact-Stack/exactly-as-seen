import { Card, CardContent } from "@mui/material";
import caseHr from "@/assets/case-hr.jpg";
import caseEcommerce from "@/assets/case-ecommerce.jpg";
import caseNfc from "@/assets/case-nfc.jpg";

const proofItems = [
  { image: caseHr, label: "Enterprise Delivery", caption: "Secure HR platform execution" },
  { image: caseEcommerce, label: "Commerce Systems", caption: "Pricing and marketplace workflows" },
  { image: caseNfc, label: "Field Operations", caption: "Attendance + device integrations" },
];

export default function ProofStrip() {
  return (
    <section className="py-12 bg-[#05050A] border-t border-white/5">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {proofItems.map((item) => (
            <Card key={item.label} className="surface-card overflow-hidden">
              <img src={item.image} alt={item.caption} className="h-40 w-full object-cover" loading="lazy" />
              <CardContent>
                <p className="text-xs uppercase tracking-wide text-[#A1A1B5]">{item.label}</p>
                <p className="text-sm text-white mt-1">{item.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
