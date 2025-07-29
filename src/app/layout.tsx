import '../styles/globals.css'
export const metadata = {
  title: "Spitz Alemão Anão Premium | Pomélia Bragança Paulista",
  description: "Filhotes Spitz Alemão Anão (Lulu da Pomerânia) em Bragança Paulista. CBKC, entrega nacional, saúde impecável, suporte vitalício. Viva a experiência Pomélia!",
  openGraph: {
    title: "Spitz Alemão Anão Premium | Pomélia",
    description: "Filhotes exclusivos com pedigree, saúde impecável e entrega nacional.",
    images: ["/og-image.jpg"], // imagem og otimizada
  },
  keywords: ["spitz alemão anão", "lulu da pomerania", "filhotes", "bragança paulista", "CBKC", "premium"],
  robots: "index,follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="min-h-screen flex flex-col bg-yellow-50 text-brown-800">
        {children}
      </body>
    </html>
  );
}
