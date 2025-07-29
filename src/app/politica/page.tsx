export const metadata = {
  title: "Política de Privacidade – Pomélia",
  description: "Conheça como protegemos e utilizamos seus dados na Pomélia. Transparência, ética e segurança para você e seu filhote Spitz Alemão Anão.",
};

export default function Politica() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4 bg-white rounded-2xl shadow-xl mt-8 mb-8">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>
      <p className="mb-2">
        A <strong>Pomélia</strong> valoriza a transparência, ética e segurança dos seus dados. Todas as informações coletadas em nosso site têm o objetivo de proporcionar a melhor experiência possível, comunicação personalizada e garantir a segurança da sua escolha.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>
          Utilizamos seus dados apenas para contato direto, envio de informações sobre filhotes, pedidos e suporte pós-venda.
        </li>
        <li>
          Não compartilhamos, vendemos ou repassamos dados pessoais a terceiros.
        </li>
        <li>
          Todos os dados são armazenados em ambientes seguros, com tecnologia de ponta.
        </li>
        <li>
          Você pode solicitar a exclusão ou alteração dos seus dados a qualquer momento pelo nosso WhatsApp.
        </li>
      </ul>
      <p>
        Ao preencher nossos formulários, você concorda com esta política. Dúvidas? Fale com a equipe Pomélia pelo WhatsApp para qualquer esclarecimento.
      </p>
    </main>
  );
}
