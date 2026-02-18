import { MessageCircle } from "lucide-react";
import { event as trackEvent } from "@/lib/analytics";

const WHATSAPP_NUMBER = "27838947546";
const WHATSAPP_TEXT = encodeURIComponent("Hi ImpactStack, I would like to discuss a project.");

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105"
      aria-label="Chat on WhatsApp"
      onClick={() =>
        trackEvent({
          action: "click_whatsapp_button",
          category: "Engagement",
          label: "Floating WhatsApp Button",
        })
      }
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
