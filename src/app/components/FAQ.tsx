// src/app/components/Faq.tsx

"use client";

import { useState } from "react";

const faqs = [
  {
    question: "A Pomélia é canil ou criatório?",
    answer:
      "Somos um criatório familiar focado em exclusividade, bem-estar e acompanhamento individual dos filhotes. Não trabalhamos como canil comercial.",
  },
  {
    question: "Como funciona a entrega dos filhotes?",
    answer:
      "Entregamos em todo o Brasil com transporte especializado e seguro. O filhote vai até você com acompanhamento e garantia total.",
  },
  {
    question: "Os filhotes têm pedigree e vacinas?",
    answer:
      "Sim! Todos filhotes Pomélia têm pedigree CBKC, vacinas em dia, vermifugados, microchipados e com atestado veterinário.",
  },
  {
    question: "Qual o suporte após a compra?",
    answer:
      "Você recebe suporte vitalício no WhatsApp e acompanhamento pós-venda para todas as dúvidas sobre saúde, adaptação e cuidados.",
  },
  {
    question: "Posso visitar ou conhecer os pais dos filhotes?",
    answer:
      "Por questões de biossegurança, priorizamos atendimento online, mas enviamos fotos, vídeos e fazemos videochamadas dos filhotes e dos pais.",
  },
  {
    question: "Como faço a reserva do meu filhote?",
    answer:
      "Basta preencher o formulário ou clicar no WhatsApp para atendimento. As reservas são realizadas por ordem de contato e análise do perfil do tutor.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">Perguntas Frequentes</h2>
      <ul className="space-y-4">
        {faqs.map((faq, i) => (
          <li key={i} className="bg-white rounded-2xl shadow-lg border border-primary/10 transition-all">
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-lg md:text-xl font-semibold text-left text-primary focus:outline-none"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              {faq.question}
              <span className={`ml-2 transform transition-transform ${open === i ? "rotate-90" : ""}`}>
                ▶
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all px-6 ${
                open === i ? "max-h-40 py-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-base">{faq.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
