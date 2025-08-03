// src/app/termos/page.tsx

export const metadata = {
  title: "Termos de Uso | Pomélia",
  description: "Termos e condições para navegação e compra de filhotes Spitz Alemão Anão na Pomélia. Transparência e segurança.",
};

export default function TermosPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4 text-primary">Termos de Uso</h1>
      <p className="mb-4 text-gray-700">
        Ao acessar e utilizar o site Pomélia, você concorda com os seguintes termos:
      </p>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li className="mb-2">
          <strong>Compra responsável:</strong> A venda dos filhotes é feita após contato e avaliação de perfil do tutor, visando sempre o bem-estar animal.
        </li>
        <li className="mb-2">
          <strong>Propriedade intelectual:</strong> Todo o conteúdo do site, incluindo imagens, textos e marcas, é protegido por direitos autorais.
        </li>
        <li className="mb-2">
          <strong>Limitação de responsabilidade:</strong> Não nos responsabilizamos por decisões do tutor após a entrega do filhote, mas fornecemos suporte e orientação vitalícios.
        </li>
        <li className="mb-2">
          <strong>Alterações:</strong> Os termos podem ser atualizados a qualquer momento. Recomenda-se a leitura periódica.
        </li>
      </ul>
      <p className="mb-4">
        Dúvidas? Entre em contato conosco pelo WhatsApp ou pelos canais oficiais.
      </p>
      <span className="text-xs text-gray-400">Atualizado em {new Date().toLocaleDateString("pt-BR")}</span>
    </main>
  );
}
