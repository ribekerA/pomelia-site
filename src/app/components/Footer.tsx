// src/app/components/Footer.tsx

import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FFF9ED] border-t border-primary/10 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Marca e descrição curta */}
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold text-primary">Pomélia</span>
          <span className="text-sm text-gray-500 max-w-xs">
            Exclusividade em Spitz Alemão Anão (Lulu da Pomerânia) — Filhotes premium, suporte vitalício, entrega em todo Brasil.
          </span>
        </div>

        {/* Navegação e links rápidos */}
        <nav className="flex flex-col gap-2 md:flex-row md:gap-6 text-base">
          <Link href="/politica" className="hover:text-primary transition">Política de Privacidade</Link>
          <Link href="/termos" className="hover:text-primary transition">Termos de Uso</Link>
          <Link href="/faq" className="hover:text-primary transition">FAQ</Link>
          <a
            href="https://wa.me/5511968633239"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-green-600 transition"
            aria-label="Falar no WhatsApp Pomélia"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/pomeliaoficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition"
            aria-label="Instagram Pomélia"
          >
            <FaInstagram size={18} />
            Instagram
          </a>
        </nav>
      </div>
      {/* Créditos, SEO Local e Copyright */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row md:justify-between gap-2 text-xs text-gray-400">
        <div>
          © {new Date().getFullYear()} Pomélia • Filhotes Spitz Alemão Anão em SP, RJ, MG, Interior e Entrega Nacional
        </div>
        <div>
          CNPJ 00.000.000/0000-00 • Atendimento digital • Bragança Paulista/SP
        </div>
      </div>
    </footer>
  );
}
