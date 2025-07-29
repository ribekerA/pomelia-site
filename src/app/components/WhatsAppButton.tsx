// WhatsappButton.tsx
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton({ message, className = "" }) {
  const phone = "5511968633239"; // seu número com DDI Brasil
  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl shadow-xl px-8 py-3 text-lg transition-all ${className}`}
      aria-label="Falar no WhatsApp agora com a Pomélia"
    >
      <FaWhatsapp size={28} />
      Falar no WhatsApp
    </a>
  );
}
