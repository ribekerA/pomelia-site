// src/components/SeoHead.tsx
"use client";
import Head from "next/head";

export default function SeoHead() {
  return (
    <Head>
      <title>Pomélia • Spitz Alemão Anão e Lulu da Pomerânia de Elite</title>
      <meta name="description" content="Filhotes de Spitz Alemão (Lulu da Pomerânia) com saúde, pedigree e suporte. Envie seu interesse! Bragança Paulista • Entrega em todo Brasil." />
      <meta property="og:title" content="Pomélia • Spitz Alemão Anão e Lulu da Pomerânia de Elite" />
      <meta property="og:description" content="Compre filhote de Spitz Alemão (Lulu da Pomerânia) direto de criador responsável. Entrega nacional, socialização, suporte vitalício." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/banner-pomelia.jpg" />
      <meta property="og:url" content="https://www.pomelia.com.br/" />
      <link rel="canonical" href="https://www.pomelia.com.br/" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
      <link rel="icon" href="/favicon.ico" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual o valor de um filhote de Spitz Alemão?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os filhotes de Spitz Alemão Anão Pomélia variam de R$ 6.000 a R$ 10.000, conforme pedigree, cor e exclusividade. Consulte disponibilidade pelo WhatsApp."
      }
    },
    {
      "@type": "Question",
      "name": "Vocês entregam em todo o Brasil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, enviamos filhotes para todo o Brasil com transporte especializado e seguro, priorizando o bem-estar do filhote."
      }
    },
    {
      "@type": "Question",
      "name": "O Spitz vem com pedigree e vacinas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, todos nossos filhotes são entregues com pedigree CBKC, vacinas em dia, vermifugação e laudo de saúde assinado por veterinário."
      }
    },
    {
      "@type": "Question",
      "name": "Posso visitar antes de fechar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Atendemos visitas agendadas em Bragança Paulista, respeitando o bem-estar dos animais. Agende pelo WhatsApp."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a garantia de saúde?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Garantimos filhotes saudáveis, socializados e com acompanhamento pós-venda. Caso haja qualquer intercorrência, oferecemos suporte imediato."
      }
    }
  ]
}
`
      }}/>
    </Head>
  );
}
