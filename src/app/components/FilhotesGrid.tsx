"use client";
import { motion } from "framer-motion";
import WhatsappButton from "../components/WhatsAppButton"; // ajuste o path conforme seu projeto

// Troque pelos dados reais dos filhotes
const filhotes = [
  {
    cor: "Branco",
    sexo: "Macho",
    valor: "R$ 8.900",
    fotos: ["/images/spitz-branco.png"],
    alt: "Filhote Spitz Alemão Anão Branco Macho disponível Pomélia",
    whatsMsg: "Olá! Vi o filhote branco macho disponível na Pomélia e quero mais informações.",
  },
  {
    cor: "Laranja",
    sexo: "Fêmea",
    valor: "R$ 9.500",
    fotos: ["/images/spitz-laranja.png"],
    alt: "Filhote Spitz Alemão Anão Laranja Fêmea disponível Pomélia",
    whatsMsg: "Olá! Vi o filhote laranja fêmea disponível na Pomélia e quero mais informações.",
  },
  {
    cor: "Preto",
    sexo: "Macho",
    valor: "R$ 7.800",
    fotos: ["/images/spitz-preto.png"],
    alt: "Filhote Spitz Alemão Anão Preto Macho disponível Pomélia",
    whatsMsg: "Olá! Vi o filhote preto macho disponível na Pomélia e quero mais informações.",
  },
  {
    cor: "Creme",
    sexo: "Fêmea",
    valor: "R$ 10.000",
    fotos: ["/images/spitz-creme.png"],
    alt: "Filhote Spitz Alemão Anão Creme Fêmea disponível Pomélia",
    whatsMsg: "Olá! Vi o filhote creme fêmea disponível na Pomélia e quero mais informações.",
  },
];

export default function FilhotesGrid() {
  return (
    <section className="bg-yellow-50 py-12">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-yellow-800 drop-shadow">
        Filhotes disponíveis Pomélia
      </h2>
      <div className="flex flex-wrap justify-center gap-10 md:gap-12 mb-10">
        {filhotes.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-sm md:max-w-md xl:max-w-lg flex flex-col items-center p-6 border-4 border-yellow-100 hover:border-yellow-600 transition-all cursor-pointer"
            style={{ minHeight: "520px" }}
          >
            <div className="w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-200 flex items-center justify-center bg-neutral-50">
              <img
                src={f.fotos[0]}
                alt={f.alt}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-center gap-2 mb-6">
              <span className="text-xl md:text-2xl font-black text-yellow-900">{f.cor}</span>
              <span className="text-yellow-700 font-bold text-lg">{f.sexo}</span>
              <span className="text-green-700 font-bold text-lg">{f.valor}</span>
            </div>
            <WhatsappButton
              message={f.whatsMsg}
              className="mt-auto w-full"
            />
          </motion.div>
        ))}
      </div>
      <div className="text-center text-yellow-800 text-lg mt-10">
        <b>Dica:</b> Clique no filhote desejado para solicitar mais fotos, vídeos ou agendar uma visita exclusiva!
      </div>
    </section>
  );
}
