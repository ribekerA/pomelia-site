"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import WhatsappButton from "./WhatsAppButton";

type ModalGaleriaProps = {
  modal: {
    cor: string;
    sexo: string;
    valor: string;
    imagens: string[];
  } | null;
  setModal: (modal: null) => void;
};

export default function ModalGaleria({ modal, setModal }: ModalGaleriaProps) {
  const [imgIdx, setImgIdx] = useState(0);
  const [zoomIdx, setZoomIdx] = useState<number | null>(null);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [loadingImg, setLoadingImg] = useState(false);

  // Responsividade
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setImgIdx(0); // Reset index ao abrir outro filhote
  }, [modal]);

  if (!modal) return null;

  const getSlides = () => {
    if (modal.imagens.length <= itemsPerView) return modal.imagens;
    const start = Math.max(
      0,
      Math.min(imgIdx - Math.floor(itemsPerView / 2), modal.imagens.length - itemsPerView)
    );
    return modal.imagens.slice(start, start + itemsPerView);
  };

  function handleDialogClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
  }

  return (
    <Dialog open={!!modal} onClose={() => setModal(null)} className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fundo escuro */}
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" onClick={() => setModal(null)} />
      <div
        className="relative z-10 bg-white rounded-3xl shadow-2xl p-4 md:p-10 max-w-3xl w-full flex flex-col items-center"
        onClick={handleDialogClick}
      >
        {/* Botão fechar */}
        <button
          onClick={() => setModal(null)}
          className="absolute top-4 right-4 bg-pink-700 text-white p-2 rounded-full text-lg font-bold z-10"
          aria-label="Fechar"
          tabIndex={0}
        >×</button>
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
          {modal.cor} - Fotos
        </h3>

        {/* Carrossel */}
        <div className="flex items-center w-full gap-2 md:gap-6 justify-center">
          <button
            onClick={() => setImgIdx(i => Math.max(i - 1, 0))}
            disabled={imgIdx === 0}
            className="text-pink-700 disabled:opacity-30 text-3xl md:text-4xl px-1"
            aria-label="Anterior"
            tabIndex={0}
            style={{ pointerEvents: imgIdx === 0 ? "none" : "auto" }}
          >‹</button>
          <div className="flex-1 flex gap-2 md:gap-6 justify-center">
            {getSlides().map((src, idx) => {
              const absoluteIdx = Math.max(
                0,
                Math.min(imgIdx - Math.floor(itemsPerView / 2), modal.imagens.length - itemsPerView)
              ) + idx;

              // Definição responsiva do tamanho das imagens no carrossel
              const customClass =
                modal.imagens.length === 1
                  ? "w-[85vw] h-[60vw] md:w-[420px] md:h-[320px]"
                  : modal.imagens.length === 2
                  ? "w-[44vw] h-[44vw] md:w-[210px] md:h-[210px]"
                  : "w-[28vw] h-[28vw] md:w-[140px] md:h-[140px]";

              return (
                <div
                  key={src}
                  className={`relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer hover:scale-105 transition-all ${customClass} border-2 border-pink-100`}
                  onClick={() => setZoomIdx(absoluteIdx)}
                  tabIndex={0}
                  aria-label={`Expandir imagem ${idx + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${modal.cor} Pomélia - Foto ${absoluteIdx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 220px"
                    onLoad={() => setLoadingImg(true)}
                    onLoadingComplete={() => setLoadingImg(false)}
                  />
                  {/* Loading Spinner */}
                  {loadingImg && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/60">
                      <svg className="animate-spin h-8 w-8 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-white text-lg font-bold">
                    Zoom
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => setImgIdx(i => Math.min(i + 1, modal.imagens.length - 1))}
            disabled={imgIdx >= modal.imagens.length - 1}
            className="text-pink-700 disabled:opacity-30 text-3xl md:text-4xl px-1"
            aria-label="Próxima"
            tabIndex={0}
            style={{ pointerEvents: imgIdx >= modal.imagens.length - 1 ? "none" : "auto" }}
          >›</button>
        </div>

        {/* Bullets */}
        <div className="flex justify-center gap-1 mt-4">
          {modal.imagens.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${imgIdx === i ? "bg-pink-700 scale-125" : "bg-pink-200"}`}
              onClick={() => setImgIdx(i)}
              aria-label={`Ver foto ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA WhatsApp */}
        <div className="w-full mt-6 z-10">
          {/* O botão NÃO fecha o modal */}
          <WhatsappButton
            message={`Olá! Vi o filhote ${modal.cor} ${modal.sexo} por ${modal.valor} no site Pomélia. Quero reservar!`}
            className="w-full"
          />
        </div>
      </div>

      {/* Lightbox (Zoom) */}
      {zoomIdx !== null && (
        <Dialog open={true} onClose={() => setZoomIdx(null)} className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="fixed inset-0 bg-black/90" aria-hidden="true" onClick={() => setZoomIdx(null)} />
          <div className="relative z-10" onClick={e => e.stopPropagation()}>
            <Image
              src={modal.imagens[zoomIdx]}
              alt={`Foto ampliada ${zoomIdx + 1}`}
              width={900}
              height={900}
              className="rounded-3xl max-h-[90vh] max-w-[90vw] object-contain shadow-2xl cursor-zoom-out"
              style={{ background: "#fff" }}
            />
            <button
              onClick={() => setZoomIdx(null)}
              className="absolute top-2 right-2 bg-pink-700 text-white p-2 rounded-full text-lg font-bold z-10"
              aria-label="Fechar"
            >×</button>
          </div>
        </Dialog>
      )}
    </Dialog>
  );
}
