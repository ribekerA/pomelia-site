// src/app/politica-de-privacidade/page.tsx

export const metadata = {
  title: "Política de Privacidade | Pomélia",
  description: "Conheça nossa política de privacidade e saiba como protegemos seus dados ao adquirir seu filhote Spitz Alemão Anão com a Pomélia.",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Política de Privacidade</h1>
      <section className="text-gray-700 space-y-5 text-justify">
        <p>
          A Pomélia tem o compromisso com a privacidade e a proteção dos dados pessoais dos seus clientes, em total conformidade com a Lei Geral de Proteção de Dados (LGPD). Ao utilizar nossos serviços e site, você concorda com a coleta e uso das informações conforme esta política.
        </p>
        <h2 className="text-lg font-semibold mt-6">Coleta de Informações</h2>
        <p>
          Coletamos apenas as informações necessárias para realizar atendimento, vendas e suporte dos nossos filhotes Spitz Alemão Anão e Lulu da Pomerânia. Isso inclui nome, telefone, e-mail e endereço para entrega.
        </p>
        <h2 className="text-lg font-semibold mt-6">Uso das Informações</h2>
        <p>
          Os dados são utilizados exclusivamente para contato, envio de propostas, entrega, suporte pós-venda e envio de novidades quando autorizado. Não compartilhamos, vendemos ou transferimos suas informações a terceiros.
        </p>
        <h2 className="text-lg font-semibold mt-6">Proteção dos Dados</h2>
        <p>
          Adotamos medidas técnicas e administrativas para manter a segurança e confidencialidade dos seus dados, garantindo integridade, sigilo e proteção contra acesso não autorizado.
        </p>
        <h2 className="text-lg font-semibold mt-6">Seus Direitos</h2>
        <p>
          Você pode solicitar a qualquer momento acesso, correção ou exclusão dos seus dados, bem como retirar o consentimento para uso. Basta solicitar pelo WhatsApp ou formulário de contato.
        </p>
        <h2 className="text-lg font-semibold mt-6">Alterações</h2>
        <p>
          Reservamo-nos o direito de atualizar esta política para aprimorar nossos processos e garantir sempre a melhor experiência.
        </p>
        <h2 className="text-lg font-semibold mt-6">Contato</h2>
        <p>
          Para dúvidas ou solicitações sobre privacidade e proteção de dados, entre em contato pelo WhatsApp <a href="https://wa.me/5511968633239" className="text-accent underline" target="_blank" rel="noopener noreferrer">11 96863-3239</a>.
        </p>
      </section>
      <div className="mt-10 text-center text-gray-400 text-xs">Atualizado em 29/07/2025</div>
    </main>
  );
}
