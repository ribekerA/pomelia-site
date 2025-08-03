// src/app/faq/page.tsx

export const metadata = {
  title: "Perguntas Frequentes | Pomélia",
  description: "Tire suas dúvidas sobre compra, entrega, suporte e cuidados com seu Spitz Alemão Anão na Pomélia. Atendimento premium!",
};

const FAQS = [
  {
    question: "Como funciona a reserva do filhote?",
    answer:
      "A reserva é feita após o preenchimento do formulário ou contato direto pelo WhatsApp. Após confirmarmos a disponibilidade, orientamos o próximo passo do processo e envio do sinal de reserva.",
  },
  {
    question: "Vocês entregam em todo o Brasil?",
    answer:
      "Sim, realizamos entrega nacional com transporte especializado e seguro. Consulte valores de frete para sua cidade no WhatsApp.",
  },
  {
    question: "Os filhotes têm pedigree?",
    answer:
      "Sim, todos os filhotes Pomélia possuem pedigree CBKC e documentação completa para garantir linhagem e procedência.",
  },
  {
    question: "O filhote vai vacinado e vermifugado?",
    answer:
      "Sim, todos os filhotes são entregues vacinados, vermifugados e com acompanhamento veterinário regular. Garantimos saúde e socialização.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos Pix, transferência bancária e cartão de crédito com possibilidade de parcelamento via plataformas seguras.",
  },
  {
    question: "Posso visitar os filhotes antes de comprar?",
    answer:
      "Sim, a visita pode ser agendada para tutores realmente interessados, visando o bem-estar dos filhotes e segurança de todos.",
  },
  {
    question: "Recebo suporte após a compra?",
    answer:
      "Sim! Oferecemos suporte vitalício para todos os clientes Pomélia: dúvidas sobre cuidados, alimentação e adaptação sempre que precisar.",
  },
  {
    question: "O que está incluído na entrega do filhote?",
    answer:
      "Entrega com kit inicial, carteira de vacinação, pedigree, laudo veterinário e orientação personalizada de adaptação.",
  },
  {
    question: "Qual o tamanho do Spitz Alemão Anão adulto?",
    answer:
      "O padrão oficial é até 22cm de altura na idade adulta, podendo variar conforme genética dos pais. Garantimos padrão e qualidade.",
  },
  {
    question: "Meus dados estão protegidos?",
    answer:
      "Sim! Seguimos a LGPD e jamais compartilhamos ou vendemos suas informações. Privacidade total e respeito ao cliente.",
  },
];

export default function FAQPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Perguntas Frequentes</h1>
      <ul className="space-y-6">
        {FAQS.map((faq, i) => (
          <li key={i} className="border-b pb-4">
            <details className="group">
              <summary className="flex items-center cursor-pointer text-lg font-semibold group-hover:text-accent transition-colors">
                <span>{faq.question}</span>
                <span className="ml-2 text-accent font-bold">+</span>
              </summary>
              <div className="mt-2 text-gray-700 leading-relaxed">{faq.answer}</div>
            </details>
          </li>
        ))}
      </ul>
      <div className="text-center mt-10">
        <span className="text-gray-500">
          Não encontrou sua dúvida? Fale direto pelo WhatsApp!
        </span>
      </div>
    </main>
  );
}
