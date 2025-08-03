// src/app/components/Hero.tsx
import Image from "next/image";
import WhatsappButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="w-full bg-[#FFF9ED] py-12 md:py-20 px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12 rounded-3xl shadow-xl mt-8 mb-12">
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl mx-auto md:mx-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#3A2C1C] leading-tight mb-6 drop-shadow-xl">
          Spitz Alemão Anão <span className="text-pink-700">&</span> Lulu da Pomerânia Premium em SP
        </h1>
        <p className="text-lg md:text-2xl text-[#664D36] mb-8 font-medium drop-shadow">
          O melhor da raça, entrega nacional, acompanhamento profissional e suporte vitalício. Seu novo filhote com saúde, pedigree e carinho.
        </p>
        <WhatsappButton
          message="Olá! Quero garantir meu filhote Spitz/Lulu com padrão Pomélia. Pode me passar as opções disponíveis?"
          className="animate-bounce"
        />
        <div className="mt-5 text-base md:text-lg text-gray-500 italic">
          Filhotes com socialização, garantia de saúde, entrega segura e atendimento premiado.
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end items-center">
        <Image
          src="/images/spitz-hero.jpg"
          width={500}
          height={500}
          priority
          alt="Filhote de Spitz Alemão Anão Lulu da Pomerânia Pomélia"
          className="rounded-3xl shadow-2xl object-cover w-full max-w-[350px] h-[340px] md:h-[410px] transition-transform hover:scale-105 duration-300"
        />
      </div>
    </section>
  );
}
