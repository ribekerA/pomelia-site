// src/app/components/WhatsappButton.tsx
import { FaWhatsapp } from "react-icons/fa";

type WhatsappButtonProps = {
  message: string;
  className?: string;
};

export default function WhatsappButton({ message, className = "" }: WhatsappButtonProps) {
  const phone = "5511968633239";
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
