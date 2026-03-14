import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { MdVerified, MdCheckCircle, MdBusiness } from "react-icons/md";
import awsLogo from "@/assets/logos/aws-svgrepo-com.svg";
import azureLogo from "@/assets/logos/azure-svgrepo-com.svg";
import gcpLogo from "@/assets/logos/google-cloud-svgrepo-com.svg";
import reactLogo from "@/assets/logos/react.svg";
import nodeLogo from "@/assets/logos/nodedotjs.svg";
import dockerLogo from "@/assets/logos/docker.svg";
import { Card, CardContent, Chip } from "@mui/material";

const certs = [
  { icon: MdVerified, name: "Google Cybersecurity", sub: "Professional Certificate" },
  { icon: MdCheckCircle, name: "CISCO Cybersecurity", sub: "Introduction Certification" },
  { icon: MdBusiness, name: "Central Supplier Database", sub: "Registered supplier MAAA1691173" },
];

const logoItems = [
  { label: "AWS", src: awsLogo },
  { label: "Azure", src: azureLogo },
  { label: "Google Cloud", src: gcpLogo },
  { label: "React", src: reactLogo },
  { label: "Node.js", src: nodeLogo },
  { label: "Docker", src: dockerLogo },
];

export default function CertificationsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 bg-[#05050A] border-t border-white/5" ref={ref}>
      <div className="container-narrow">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-section font-display text-center mb-12 text-white">
          Certifications and Credentials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.article key={c.name} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.1 }}>
              <Card className="surface-card text-center">
                <CardContent className="p-8">
                  <div className="icon-shell w-12 h-12 mx-auto mb-4">
                    <c.icon className="w-6 h-6" />
                  </div>
                  <p className="text-body font-bold text-white">{c.name}</p>
                  <p className="text-small text-[#A1A1B5]">{c.sub}</p>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
          <div className="flex justify-center mb-4">
            <Chip label="Trusted Software & Technical Skills (Not Limited To)" size="small" variant="outlined" sx={{ borderColor: "rgba(139,92,246,0.35)", color: "#C4B5FD", letterSpacing: "0.08em" }} />
          </div>
          <div className="marquee">
            <div className="marquee-track">
              {logoItems.concat(logoItems).map((item, index) => (
                <div key={`${item.label}-${index}`} className="logo-chip" aria-hidden={index >= logoItems.length}>
                  <img className="logo-chip-img" src={item.src} alt={item.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
