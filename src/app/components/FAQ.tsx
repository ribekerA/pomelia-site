"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Qual o valor de um filhote de Spitz Alemão Anão?",
    a: "Os filhotes Pomélia variam de R$ 6.000 a R$ 10.000, conforme pedigree, cor e exclusividade. Consulte disponibilidade pelo WhatsApp."
  },
  {
    q: "Vocês entregam em todo o Brasil?",
    a: "Sim, enviamos filhotes para todo o Brasil com transporte especializado e seguro, priorizando o bem-estar do filhote."
  },
  {
    q: "O Spitz vem com pedigree e vacinas?",
    a: "Todos os nossos filhotes são entregues com pedigree CBKC, vacinas em dia, vermifugação e laudo de saúde assinado por veterinário."
  },
  {
    q: "Qual a garantia de saúde?",
    a: "Garantimos filhotes saudáveis, socializados e com acompanhamento pós-venda. Caso haja qualquer intercorrência, oferecemos suporte imediato."
  },
  {
    q: "Posso visitar antes de fechar?",
    a: "Atendemos visitas agendadas em Bragança Paulista, respeitando o bem-estar dos animais. Agende pelo WhatsApp."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-yellow-50 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Perguntas Frequentes sobre Spitz Alemão Pomélia
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((f, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl shadow p-5 mb-2 border border-yellow-100 cursor-pointer transition-all duration-300 ${open === i ? 'ring-2 ring-yellow-600' : ''}`}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="font-semibold mb-1 flex items-center">
              <span className="mr-2">{open === i ? "▼" : "►"}</span> {f.q}
            </div>
            {open === i && (
              <div className="text-gray-700 mt-2">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
