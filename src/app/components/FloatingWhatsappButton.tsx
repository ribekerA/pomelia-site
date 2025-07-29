import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsappButton() {
  const phone = "5511968633239";
  const message = "Olá! Quero saber mais sobre os filhotes Pomélia 🐶✨";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed z-50
        right-8 bottom-4
        sm:right-6 sm:bottom-6
        w-14 h-14 sm:w-16 sm:h-16
        rounded-full bg-green-600 hover:bg-green-700
        shadow-xl flex items-center justify-center
        transition-all animate-bounce
      "
      style={{
        // Para suportar notch e safe area em iOS/Android
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)",
      }}
      aria-label="Fale com Pomélia no WhatsApp"
    >
      <FaWhatsapp
        className="text-white"
        size={28}
        style={{ minWidth: 28, minHeight: 28 }}
      />
    </a>
  );
}
