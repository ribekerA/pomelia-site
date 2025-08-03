// src/app/page.tsx

import Hero from "./components/Hero";
import FilhotesGrid from "./components/FilhotesGrid";
import Depoimentos from "./components/Depoimentos";
import FAQ from "./components/FAQ";
import TrackingPixels from "./components/TrackingPixels";

export const metadata = {
  title: "Pomélia | Spitz Alemão Anão e Lulu da Pomerânia Premium em SP",
  description:
    "Filhotes de Spitz Alemão Anão e Lulu da Pomerânia premium. Qualidade, saúde, suporte vitalício e entrega nacional. Compre com quem entende de excelência.",
  alternates: {
    canonical: "https://pomelia.com.br/",
  },
  openGraph: {
    title: "Pomélia | Spitz Alemão Anão e Lulu da Pomerânia Premium em SP",
    description:
      "Encontre filhotes de Spitz Alemão Anão e Lulu da Pomerânia com padrão de excelência, socialização e suporte. Entregamos para todo o Brasil.",
    url: "https://pomelia.com.br/",
    siteName: "Pomélia",
    images: [
      {
        url: "/images/og-pomelia.jpg",
        width: 1200,
        height: 630,
        alt: "Spitz Alemão Anão Lulu da Pomerânia Pomélia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@pomelia",
    title: "Pomélia | Spitz Alemão Anão Premium",
    description:
      "Filhotes premium de Spitz Alemão Anão e Lulu da Pomerânia em SP. Conheça nossos diferenciais.",
    images: ["/images/og-pomelia.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <TrackingPixels />
      <Hero />
      <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <FilhotesGrid />
        <Depoimentos />
        <FAQ />
      </main>
    </>
  );
}
