export const metadata = {
  title: "Termos de Uso – Pomélia",
  description: "Saiba as condições e responsabilidades do uso do site Pomélia. Compromisso, clareza e confiança para você adquirir seu Spitz Alemão Anão.",
};

export default function Termos() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4 bg-white rounded-2xl shadow-xl mt-8 mb-8">
      <h1 className="text-3xl font-bold mb-4">Termos de Uso</h1>
      <p className="mb-3">
        Ao acessar o site <strong>Pomélia</strong>, você concorda com os termos e condições aqui descritos.
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>
          Todas as informações e imagens são protegidas por direitos autorais. Reprodução ou uso não autorizado é proibido.
        </li>
        <li>
          Os valores e disponibilidade dos filhotes podem variar sem aviso prévio.
        </li>
        <li>
          Ao preencher formulários, você autoriza o contato via WhatsApp, telefone ou e-mail.
        </li>
        <li>
          Todo o conteúdo é para fins informativos, não substituindo orientação profissional veterinária.
        </li>
      </ul>
      <p>
        Em caso de dúvidas, consulte nossa equipe antes de fechar negócio. Compromisso Pomélia: ética, clareza e responsabilidade sempre.
      </p>
    </main>
  );
}
