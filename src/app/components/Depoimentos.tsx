"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const depoimentos = [
  {
    nome: "Ana Paula",
    texto:
      "Nunca fui tão bem atendida! Meu Spitz chegou super saudável, sociável e virou o xodó da casa. Recomendo de olhos fechados!",
    foto: "/images/depoimentos/ana.jpeg",
  },
  {
    nome: "João Marcos",
    texto:
      "A Pomélia me deu todo o suporte desde o primeiro contato até depois da entrega. Filhote lindo, só gratidão!",
    foto: "/images/depoimentos/joao.jpeg",
  },
  {
    nome: "Paula Souza",
    texto:
      "Transparência e carinho em cada detalhe. Meu Lulu é a alegria da família. Muito obrigada!",
    foto: "/images/depoimentos/paula.jpeg",
  },
  {
    nome: "Camila Dias",
    texto:
      "Adorei a experiência! Equipe atenciosa e filhote saudável. Recomendo para todos que buscam excelência.",
    foto: "/images/depoimentos/camila.jpeg",
  },
  {
    nome: "Roberto Lima",
    texto:
      "O Spitz chegou rápido, limpo e já vacinado. Atendimento impecável. Parabéns Pomélia!",
    foto: "/images/depoimentos/roberto.jpeg",
  },
  {
    nome: "Marina Santos",
    texto:
      "Meu sonho realizado! Só tenho elogios para a Pomélia. Apoio em cada etapa.",
    foto: "/images/depoimentos/marina.jpeg",
  },
  {
    nome: "Lucas Vieira",
    texto:
      "Minha família ficou encantada com o filhote. Atendimento humanizado e de confiança.",
    foto: "/images/depoimentos/lucas.jpeg",
  },
  {
    nome: "Fernanda Prado",
    texto:
      "Escolhi a Pomélia pela reputação e fiquei surpresa com tanta dedicação e carinho.",
    foto: "/images/depoimentos/fernanda.jpeg",
  },
  {
    nome: "Ricardo S.",
    texto:
      "Acompanhamento pós-venda nota 10! Sempre disponíveis para dúvidas.",
    foto: "/images/depoimentos/ricardo.jpeg",
  },
  {
    nome: "Lívia Costa",
    texto:
      "Recomendo de olhos fechados. Filhote feliz, sociável e muito fofo!",
    foto: "/images/depoimentos/livia.jpeg",
  },
  {
    nome: "Bruno Mendonça",
    texto:
      "Serviço diferenciado, transparente e filhote entregue com pedigree e vacinas.",
    foto: "/images/depoimentos/bruno.jpeg",
  },
  {
    nome: "Patrícia G.",
    texto:
      "O Spitz Pomélia mudou nosso lar. Atendimento exemplar do começo ao fim.",
    foto: "/images/depoimentos/patricia.jpeg",
  },
];

export default function Depoimentos() {
  // Carrossel automático
  const [current, setCurrent] = useState(0);
  const length = depoimentos.length;

  // Responsividade: 1 card no mobile, 2 no tablet, 3+ no desktop
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    // Ajusta quantos cards aparecem de acordo com o tamanho da tela
    function handleResize() {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Avança o carrossel automaticamente a cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + cardsPerView) % length);
    }, 4000);
    return () => clearInterval(timer);
  }, [cardsPerView, length]);

  // Gera os cards visíveis no carrossel
  const visibleCards = [];
  for (let i = 0; i < cardsPerView; i++) {
    const idx = (current + i) % length;
    visibleCards.push(
      <div
        key={idx}
        className="bg-white shadow-lg rounded-3xl overflow-hidden max-w-xs w-full flex flex-col border-2 border-yellow-100"
        style={{ minWidth: "280px" }}
      >
        <div className="relative w-full h-56 sm:h-64 md:h-72">
          <Image
            src={depoimentos[idx].foto}
            alt={depoimentos[idx].nome}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={i === 0}
          />
          {/* Badge verificado */}
          <span className="absolute top-4 right-4 bg-white rounded-full p-1 shadow">
            <FaCheckCircle className="text-green-500 text-2xl" />
          </span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-2xl font-bold text-yellow-900 mb-2">
            {depoimentos[idx].nome}
          </h3>
          <p className="text-lg text-neutral-700">{depoimentos[idx].texto}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 px-2 sm:px-6 md:px-10 lg:px-24 bg-[#fffde6] flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-10 text-center">
        O que dizem as famílias Pomélia
      </h2>
      <div className="w-full flex justify-center gap-6">
        {visibleCards}
      </div>
    </section>
  );
}
