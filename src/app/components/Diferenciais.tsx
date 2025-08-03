// src/app/components/Diferenciais.tsx

export default function Diferenciais() {
  return (
    <section className="bg-gradient-to-b from-[#FFF9ED] to-[#F5F1EB] py-16 px-4 border-t border-primary/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">
          Por que escolher a Pomélia?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-3xl shadow-xl border border-primary/10">
            <img src="/icons/garantia.svg" alt="Garantia e Saúde" className="w-14 h-14 mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Saúde e Garantia</h3>
            <p className="text-gray-700 text-base">
              Filhotes com pedigree CBKC, vacinas em dia, atestado veterinário, garantia de saúde e suporte vitalício.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-3xl shadow-xl border border-primary/10">
            <img src="/icons/premium.svg" alt="Exclusividade Premium" className="w-14 h-14 mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Exclusividade Premium</h3>
            <p className="text-gray-700 text-base">
              Criatório familiar, seleção genética, acompanhamento personalizado e entrega nacional com transporte VIP.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-3xl shadow-xl border border-primary/10">
            <img src="/icons/suporte.svg" alt="Suporte completo" className="w-14 h-14 mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Atendimento e Suporte</h3>
            <p className="text-gray-700 text-base">
              Atendimento humanizado, acompanhamento pós-venda e suporte no WhatsApp em todas as etapas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
