"use client";
import { useState } from "react";
import Image from "next/image";
import WhatsappButton from "./WhatsAppButton";

const filhotes = [
  {
    cor: "Branco",
    sexo: "Fêmea",
    valor: "R$ 9.500",
    imagens: ["/images/filhotes/branco.webp", "/images/filhotes/branco2.webp"],
  },
  {
    cor: "Laranja",
    sexo: "Macho",
    valor: "R$ 7.800",
    imagens: ["/images/filhotes/laranja.webp", "/images/filhotes/laranja2.webp"],
  },
  {
    cor: "Preto",
    sexo: "Macho",
    valor: "R$ 7.500",
    imagens: ["/images/filhotes/preto.webp", "/images/filhotes/preto2.webp"],
  },
  {
    cor: "Creme",
    sexo: "Fêmea",
    valor: "R$ 8.900",
    imagens: ["/images/filhotes/creme.webp", "/images/filhotes/creme2.webp"],
  },
  // Adicione mais filhotes!
];

export default function FilhotesGrid() {
  const [modal, setModal] = useState<{ imagens: string[]; cor: string; sexo: string; valor: string } | null>(null);

  return (
    <section className="w-full max-w-7xl mx-auto px-3 py-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A2C1C] mb-8 text-center drop-shadow-lg">
        Filhotes Disponíveis para Venda <span className="text-pink-700">Pomélia</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {filhotes.map((f, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-2xl p-5 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-pink-200">
            <div
              className="relative w-full h-64 rounded-2xl overflow-hidden mb-4 cursor-pointer group"
              onClick={() => setModal({ imagens: f.imagens, cor: f.cor, sexo: f.sexo, valor: f.valor })}
            >
              <Image
                src={f.imagens[0]}
                alt={`Filhote Spitz ${f.cor} ${f.sexo} Pomélia`}
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={idx === 0}
              />
              <div className="absolute bottom-2 right-2 bg-white bg-opacity-80 px-2 py-1 rounded-md text-xs text-pink-700 font-bold shadow">
                Clique para ver mais fotos
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 mb-3">
              <span className="font-semibold text-lg text-[#664D36]">{f.cor}</span>
              <span className="text-pink-700 font-bold">{f.sexo}</span>
              <span className="text-xl font-extrabold text-green-700 drop-shadow-sm">{f.valor}</span>
            </div>
            <WhatsappButton
              message={`Olá! Vi o filhote ${f.cor} ${f.sexo} por ${f.valor} no site Pomélia. Quero saber mais!`}
              className="w-full mt-2"
            />
          </div>
        ))}
      </div>
        {/* Modal de galeria */}
      {modal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition-all">
          <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-6 relative w-[98vw] max-w-2xl flex flex-col items-center">
            <button
              onClick={() => setModal(null)}
              className="absolute top-2 right-2 bg-pink-700 text-white p-2 rounded-full text-lg font-bold z-10"
              aria-label="Fechar"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4 text-center">
              {modal.cor} - Fotos
            </h3>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide w-full pb-3 mb-2">
              {modal.imagens.map((img, i) => (
                <div
                  key={i}
                  className="relative min-w-[70vw] md:min-w-[320px] h-[45vw] md:h-[320px] rounded-2xl overflow-hidden border border-pink-200"
                  style={{ maxWidth: 420, maxHeight: 340 }}
                >
                  <Image
                    src={img}
                    alt={`${modal.cor} Pomélia - Foto ${i + 1}`}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
            <WhatsappButton
              message={`Olá! Vi o filhote ${modal.cor} ${modal.sexo} por ${modal.valor} no site Pomélia. Quero reservar!`}
              className="w-full mt-3"
            />
          </div>
          <div
            className="fixed inset-0"
            onClick={() => setModal(null)}
            aria-label="Fechar galeria"
          />
        </div>
      )}
    </section>
  );
}
