export const metadata = {
  title: "Obrigado pelo contato – Pomélia",
  description: "Recebemos sua mensagem. Em breve, uma consultora Pomélia irá falar com você para apresentar os filhotes de Spitz Alemão Anão disponíveis.",
};

export default function Obrigado() {
  return (
    <main className="max-w-xl mx-auto py-16 px-4 flex flex-col items-center justify-center bg-yellow-50 rounded-2xl shadow-2xl mt-10 mb-10">
      <h1 className="text-3xl font-black text-yellow-700 mb-3">Contato enviado com sucesso!</h1>
      <p className="text-lg mb-4 text-gray-700 text-center">
        Muito obrigado pelo interesse em um filhote Pomélia.  
        <br />
        Em breve, uma consultora irá te chamar no WhatsApp para apresentar as opções exclusivas e tirar todas as suas dúvidas.
      </p>
      <a
        href="/"
        className="mt-6 bg-yellow-700 hover:bg-yellow-800 text-white px-8 py-3 rounded-xl font-bold shadow transition"
      >
        Voltar para a página inicial
      </a>
    </main>
  );
}
