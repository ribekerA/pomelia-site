"use client";

import { useEffect, useRef, useState } from "react";

// Depoimentos: personalize com suas fotos reais na pasta /public/images/depoimentos/
const depoimentos = [
  {
    nome: "Ana Souza",
    texto: "Atendimento impecável, suporte até após a entrega. A Pomélia é referência para quem quer filhote saudável e bem cuidado.",
    img: "/images/depoimentos/ana.jpeg",
    alt: "Cliente Ana Souza com seu Spitz Alemão Pomélia no colo, sorrindo.",
  },
  {
    nome: "Carlos Henrique",
    texto: "Nunca fui tão bem atendido! Recebi fotos, vídeos e o filhote chegou em SP perfeito, super sociável.",
    img: "/images/depoimentos/carlos.jpeg",
    alt: "Cliente Carlos Henrique feliz ao receber seu Lulu da Pomerânia Pomélia.",
  },
  {
    nome: "Luciana P.",
    texto: "Recomendo de olhos fechados. Já indiquei para amigas! Atendimento humanizado e filhote lindo.",
    img: "/images/depoimentos/luciana.jpeg",
    alt: "Cliente Luciana segurando seu filhote Pomélia, ambos sorrindo.",
  },
  {
    nome: "Ricardo M.",
    texto: "Transparência total do início ao fim, recebi dicas de cuidados e acompanhamento pós-venda.",
    img: "/images/depoimentos/ricardo.jpeg",
    alt: "Ricardo e sua família com filhote Pomélia no quintal de casa.",
  },
  {
    nome: "Patrícia G.",
    texto: "Sonho realizado! Meu Spitz Pomélia é a alegria da casa. Obrigada pelo carinho e confiança.",
    img: "/images/depoimentos/patricia.jpeg",
    alt: "Patrícia com filhote branco Pomélia, ambos na sala de estar.",
  },
  {
    nome: "Thiago Lima",
    texto: "Todo processo foi seguro, rápido e com muita informação. Pomélia tem padrão elevado.",
    img: "/images/depoimentos/thiago.jpeg",
    alt: "Thiago sorrindo ao lado do filhote Pomélia em seu sofá.",
  },
  {
    nome: "Fernanda R.",
    texto: "Me senti acolhida. Entrega dentro do prazo e filhote com pedigree de verdade!",
    img: "/images/depoimentos/fernanda.jpeg",
    alt: "Fernanda com o filhote Pomélia, mostrando o pedigree.",
  },
  {
    nome: "João Pedro",
    texto: "Recomendo! Serviço diferenciado e filhotes realmente premium.",
    img: "/images/depoimentos/joao.jpeg",
    alt: "João Pedro passeando no parque com o filhote Pomélia.",
  },
  {
    nome: "Gabriela N.",
    texto: "Superaram todas as expectativas! Atendimento e pós-venda excelentes.",
    img: "/images/depoimentos/gabriela.jpeg",
    alt: "Gabriela sorrindo segurando seu Lulu Pomélia.",
  },
  {
    nome: "Felipe T.",
    texto: "A melhor escolha! Filhote entregue em MG com todo suporte.",
    img: "/images/depoimentos/felipe.jpeg",
    alt: "Felipe e filhote Pomélia no jardim, muito felizes.",
  },
  {
    nome: "Maria Clara",
    texto: "Fui surpreendida pela dedicação e seriedade. Indico para todos que buscam qualidade.",
    img: "/images/depoimentos/maria.jpeg",
    alt: "Maria Clara abraçando o filhote Pomélia.",
  },
  {
    nome: "Eduardo S.",
    texto: "Meu Lulu Pomélia virou celebridade no condomínio! Obrigado por tudo.",
    img: "/images/depoimentos/eduardo.jpeg",
    alt: "Eduardo com seu filhote Pomélia no colo, em um ambiente externo.",
  },
];

export default function Depoimentos() {
  const [atual, setAtual] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Responsivo: 1 card mobile, 2 tablet, 3 desktop
  const getCardsToShow = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll
  useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setAtual((prev) => (prev + cardsToShow) % depoimentos.length);
    }, 3800);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [atual, cardsToShow]);

  // Garante loop infinito no carrossel
  const depoimentosExibidos = [];
  for (let i = 0; i < cardsToShow; i++) {
    depoimentosExibidos.push(
      depoimentos[(atual + i) % depoimentos.length]
    );
  }

  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-5 w-full max-w-5xl overflow-hidden">
        {depoimentosExibidos.map((d, i) => (
          <div
            key={i}
            className="rounded-2xl shadow-xl bg-white w-full max-w-xs md:max-w-sm transition-all duration-500 overflow-hidden border-2 border-primary/20"
            style={{
              minWidth: 0,
              flex: 1,
            }}
          >
            <div className="relative h-56 w-full">
              <img
                src={d.img}
                alt={d.alt}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              {/* Opcional: selo de verificado */}
              <span className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-xl text-xs font-semibold shadow">
                Cliente Verificado
              </span>
            </div>
            <div className="p-5 flex flex-col gap-3">
              <p className="text-gray-800 text-base font-medium leading-snug">
                “{d.texto}”
              </p>
              <span className="font-bold text-primary text-sm mt-2">{d.nome}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
