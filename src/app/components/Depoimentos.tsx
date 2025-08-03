// src/app/components/Depoimentos.tsx

"use client";
import { useEffect, useRef, useState } from "react";

const depoimentos = [
  {
    img: "/images/clientes/cliente1.jpg",
    texto: "A Pomélia mudou nossa rotina! O filhote chegou super saudável, cheio de energia e carinho. Atendimento nota 1000!",
    nome: "Patrícia – Campinas/SP"
  },
  {
    img: "/images/clientes/cliente2.jpg",
    texto: "Atendimento humano, entrega rápida e muito carinho em cada detalhe. Recomendo para quem quer exclusividade.",
    nome: "André – São Paulo/SP"
  },
  {
    img: "/images/clientes/cliente3.jpg",
    texto: "Tive suporte desde o início, até depois da entrega. Meu Spitz está lindo, saudável e super adaptado. Gratidão!",
    nome: "Juliana – Sorocaba/SP"
  },
  {
    img: "/images/clientes/cliente4.jpg",
    texto: "O processo foi todo transparente, recebi fotos e vídeos diários. Meu Lulu é um verdadeiro sonho.",
    nome: "Renata – Belo Horizonte/MG"
  },
  {
    img: "/images/clientes/cliente5.jpg",
    texto: "Achei que nunca teria um Spitz premium. Com a Pomélia realizei meu sonho, recomendo de olhos fechados.",
    nome: "Leonardo – Rio de Janeiro/RJ"
  },
  {
    img: "/images/clientes/cliente6.jpg",
    texto: "A equipe é sensacional! Me deram segurança, suporte e o filhote já chegou socializado.",
    nome: "Camila – Ribeirão Preto/SP"
  },
  {
    img: "/images/clientes/cliente7.jpg",
    texto: "Só tenho elogios! Contrato digital, pedigree, fotos dos pais... Muito melhor do que esperava.",
    nome: "Amanda – Santos/SP"
  },
  {
    img: "/images/clientes/cliente8.jpg",
    texto: "Vale cada centavo. Atendimento diferenciado e entrega com todo o suporte pós-venda.",
    nome: "Rodrigo – Brasília/DF"
  },
  {
    img: "/images/clientes/cliente9.jpg",
    texto: "A Pomélia superou minhas expectativas. Fui muito bem tratada e recebi dicas valiosas!",
    nome: "Tatiane – Salvador/BA"
  },
  {
    img: "/images/clientes/cliente10.jpg",
    texto: "Recomendo de olhos fechados. Responsabilidade, carinho e confiança definem.",
    nome: "Rafael – Curitiba/PR"
  },
  {
    img: "/images/clientes/cliente11.jpg",
    texto: "Recebi acompanhamento em todo o processo, fiquei super segura na compra!",
    nome: "Gabriela – Florianópolis/SC"
  },
  {
    img: "/images/clientes/cliente12.jpg",
    texto: "O filhote chegou perfeito e a família está apaixonada. Pomélia é referência!",
    nome: "Bianca – Porto Alegre/RS"
  },
];

export default function Depoimentos() {
  const [atual, setAtual] = useState(0);
  const intervalo = useRef<NodeJS.Timeout | null>(null);

  // Define quantos depoimentos por tela
  function getQtdPorTela() {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  const [porTela, setPorTela] = useState(getQtdPorTela());

  useEffect(() => {
    const handleResize = () => setPorTela(getQtdPorTela());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll
  useEffect(() => {
    intervalo.current = setInterval(() => {
      setAtual(a => (a + porTela) % depoimentos.length);
    }, 5000);
    return () => intervalo.current && clearInterval(intervalo.current);
  }, [porTela]);

  // Exibe só os depoimentos visíveis
  const visiveis = [];
  for (let i = 0; i < porTela; i++) {
    visiveis.push(depoimentos[(atual + i) % depoimentos.length]);
  }

  return (
    <section className="py-16 px-4 bg-[#F5F1EB] border-t border-primary/10">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
        O que dizem nossos clientes
      </h2>
      <div className="flex justify-center gap-6 overflow-hidden max-w-5xl mx-auto">
        {visiveis.map((dep, idx) => (
          <div
            key={idx}
            className="w-full max-w-xs flex-shrink-0 bg-white rounded-3xl shadow-xl border border-primary/10 overflow-hidden transition-transform duration-700"
            style={{ minHeight: 370 }}
          >
            <img
              src={dep.img}
              alt={`Depoimento de ${dep.nome}`}
              className="w-full h-56 object-cover object-center"
              loading="lazy"
            />
            <div className="p-6 flex flex-col h-[120px]">
              <p className="text-gray-800 text-base italic mb-4">&quot;{dep.texto}&quot;</p>
              <span className="font-bold text-primary text-sm mt-auto">{dep.nome}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-sm text-gray-400 mt-6">
        Mais de 500 famílias satisfeitas em todo Brasil.
      </div>
    </section>
  );
}
