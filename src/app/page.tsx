import Hero from "./components/Hero";
import Depoimentos from "./components/Depoimentos";
import FilhotesGrid from "./components/FilhotesGrid";
import Diferenciais from "./components/Diferenciais";
import LeadForm from "./components/LeadForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingWhatsappButton from "./components/FloatingWhatsappButton"

// SEO Avançado
export const metadata = {
  title: "Spitz Alemão Anão | Lulu da Pomerânia Premium - Pomélia Bragança Paulista",
  description: "Compre filhotes Spitz Alemão Anão (Lulu da Pomerânia) com pedigree CBKC, saúde garantida, entrega nacional e atendimento exclusivo. Criatório familiar em Bragança Paulista - Pomélia.",
  openGraph: {
    title: "Spitz Alemão Anão | Lulu da Pomerânia Premium - Pomélia Bragança Paulista",
    description: "Filhotes selecionados, socializados, com pedigree e suporte vitalício. Descubra a experiência Pomélia!",
    url: "https://pomelia.com.br",
    images: [
      {
        url: "/og-pomelia.jpg",
        width: 1200,
        height: 630,
        alt: "Spitz Alemão Pomélia",
      },
    ],
    siteName: "Pomélia",
    type: "website",
    locale: "pt_BR",
  },
};

// JSON-LD SEO (Organization e FAQPage)
function JsonLdScripts() {
  return (
    <>
      {/* Organization Schema */}
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Pomélia",
          url: "https://pomelia.com.br",
          logo: "https://pomelia.com.br/logo.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bragança Paulista",
            addressRegion: "SP",
            addressCountry: "BR"
          },
          sameAs: [
            "https://www.instagram.com/pomelia"
          ]
        })
      }} />
      {/* FAQ Schema */}
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Qual o valor de um filhote de Spitz Alemão?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Os filhotes Spitz Alemão Anão Pomélia variam de R$ 6.000 a R$ 10.000, conforme pedigree, cor e exclusividade. Consulte disponibilidade pelo WhatsApp."
              }
            },
            {
              "@type": "Question",
              name: "Vocês entregam em todo o Brasil?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim, enviamos filhotes para todo o Brasil com transporte especializado e seguro, priorizando o bem-estar do filhote."
              }
            },
            {
              "@type": "Question",
              name: "O Spitz vem com pedigree e vacinas?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim, todos nossos filhotes são entregues com pedigree CBKC, vacinas em dia, vermifugação e laudo de saúde assinado por veterinário."
              }
            },
            {
              "@type": "Question",
              name: "Qual a garantia de saúde?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Garantimos filhotes saudáveis, socializados e com acompanhamento pós-venda. Caso haja qualquer intercorrência, oferecemos suporte imediato."
              }
            },
            {
              "@type": "Question",
              name: "Posso visitar antes de fechar?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Atendemos visitas agendadas em Bragança Paulista, respeitando o bem-estar dos animais. Agende pelo WhatsApp."
              }
            }
          ]
        })
      }} />
    </>
  );
}

export default function Home() {
  return (
    <>
      <JsonLdScripts />
      <main>
        <Hero />
        <Depoimentos />
        <FilhotesGrid />
        <Diferenciais />
        <div className="py-10 bg-yellow-50" id="form">
          <LeadForm />
        </div>
        <FAQ />
        <Footer />
        <FloatingWhatsappButton />
      </main>
    </>
  );
}
