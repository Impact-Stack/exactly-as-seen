import { FaWhatsapp } from "react-icons/fa";
import { Fab } from "@mui/material";
import { event as trackEvent } from "@/lib/analytics";

const WHATSAPP_NUMBER = "27838947546";
const WHATSAPP_TEXT = encodeURIComponent(
  "Hi ImpactStack, I would like to discuss a project.",
);

export default function WhatsAppButton() {
  return (
    <Fab
      component="a"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat on WhatsApp"
      sx={{
        backgroundColor: "#00A651",
        color: "#FFFFFF",
        boxShadow: "0 12px 28px rgba(0,0,0,0.5)",
        "&:hover": { backgroundColor: "#008A44" },
      }}
      onClick={() =>
        trackEvent({
          action: "click_whatsapp_button",
          category: "Engagement",
          label: "Floating WhatsApp Button",
        })
      }
    >
      <FaWhatsapp className="w-6 h-6" />
    </Fab>
  );
}
