"use client";
import { useState } from "react";

export default function LeadForm() {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, whatsapp, mensagem }),
    });
    setLoading(false);
    setEnviado(true);
  }

  function maskWhatsapp(value: string) {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  }

  if (enviado) return (
    <div className="bg-green-100 text-green-900 rounded-xl p-8 text-center font-bold text-xl shadow-lg border-2 border-green-200 max-w-xl mx-auto">
      <span>Recebemos seu interesse! 💛</span>
      <br />
      <span className="text-base font-normal">
        Em poucos minutos uma consultora Pomélia vai te chamar no WhatsApp com as opções de filhotes, fotos e valores exclusivos.
      </span>
      <div className="mt-6">
        <a
          href="/"
          className="inline-block mt-2 bg-yellow-700 hover:bg-yellow-800 text-white rounded-xl px-6 py-3 font-bold shadow transition-all"
        >
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} id="form" className="bg-white rounded-3xl shadow-2xl max-w-xl mx-auto p-8 flex flex-col gap-5 border-2 border-yellow-100">
      <h3 className="text-2xl font-black text-center mb-2 text-yellow-800 drop-shadow">Receba as opções de filhotes Spitz</h3>
      <input
        type="text"
        value={nome}
        onChange={e => setNome(e.target.value)}
        placeholder="Seu nome completo"
        className="p-4 rounded-xl border-2 border-yellow-200 focus:border-yellow-600 transition font-medium"
        required
        autoComplete="name"
      />
      <input
        type="tel"
        value={whatsapp}
        onChange={e => setWhatsapp(maskWhatsapp(e.target.value))}
        placeholder="WhatsApp com DDD"
        className="p-4 rounded-xl border-2 border-yellow-200 focus:border-yellow-600 transition font-medium"
        required
        autoComplete="tel"
        maxLength={15}
      />
      <textarea
        value={mensagem}
        onChange={e => setMensagem(e.target.value)}
        placeholder="Prefere macho, fêmea ou cor? Alguma dúvida?"
        className="p-4 rounded-xl border-2 border-yellow-200 focus:border-yellow-600 transition font-medium min-h-[70px]"
        rows={3}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold rounded-xl px-6 py-4 text-xl shadow-lg transition-all disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Quero receber as opções no WhatsApp"}
      </button>
      <div className="text-center text-sm text-gray-400 mt-2">
        100% sigiloso e seguro • Nenhum dado é compartilhado com terceiros.
      </div>
    </form>
  );
}
