// src/app/politica/page.tsx

export const metadata = {
  title: "Política de Privacidade | Pomélia",
  description: "Conheça nossa política de privacidade e saiba como protegemos seus dados ao comprar seu Spitz Alemão Anão na Pomélia.",
};

export default function PoliticaPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4 text-primary">Política de Privacidade</h1>
      <p className="mb-4 text-gray-700">
        Na Pomélia, levamos sua privacidade a sério. Coletamos apenas as informações essenciais para realizar seu atendimento, manter contato e garantir a segurança de sua compra. Seus dados não são vendidos ou compartilhados com terceiros.
      </p>
      <h2 className="font-semibold text-primary mb-2">Dados coletados</h2>
      <p className="mb-4">
        Utilizamos seu nome, telefone, e e-mail apenas para contato sobre filhotes, envio de novidades e acompanhamento do pedido. Todos os dados são protegidos conforme a <strong>LGPD</strong> (Lei Geral de Proteção de Dados).
      </p>
      <h2 className="font-semibold text-primary mb-2">Cookies e Pixels</h2>
      <p className="mb-4">
        Usamos cookies para melhorar sua experiência e pixels para análise de tráfego, anúncios e personalização do atendimento. Você pode desabilitar cookies a qualquer momento em seu navegador.
      </p>
      <h2 className="font-semibold text-primary mb-2">Segurança</h2>
      <p className="mb-4">
        Todo o tráfego do site é protegido com criptografia SSL. Não solicitamos informações bancárias ou dados sensíveis pelo site.
      </p>
      <p className="mb-4">
        Caso tenha dúvidas sobre nossa política, entre em contato pelo WhatsApp ou e-mail informado no rodapé.
      </p>
      <span className="text-xs text-gray-400">Atualizado em {new Date().toLocaleDateString("pt-BR")}</span>
    </main>
  );
}
