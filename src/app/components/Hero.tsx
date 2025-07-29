"use client";
import { motion } from "framer-motion";
import WhatsappButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-yellow-50 to-yellow-100 py-20 md:py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center"
      >
        <img
          src="/images/spitz-hero.png"
          alt="Filhote Spitz Alemão Anão Pomélia premium"
          className="w-52 h-52 object-cover rounded-full shadow-2xl border-4 border-yellow-200 mb-7"
          loading="eager"
          fetchPriority="high"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
          Filhotes Spitz Alemão Anão <br />
          Lulu da Pomerânia
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-800 font-medium max-w-2xl mx-auto">
          Conheça o verdadeiro significado de exclusividade, carinho e suporte vitalício. Seu filhote Pomélia vai transformar sua rotina e sua vida.
        </p>
        <WhatsappButton message="Olá! Quero saber mais sobre os filhotes Spitz Alemão disponíveis na Pomélia." />
        <div className="mt-10 text-base md:text-lg text-gray-500 italic">
          Muitas famílias Pomélia em todo o Brasil | Entrega nacional premium
        </div>
      </motion.div>
    </section>
  );
}
