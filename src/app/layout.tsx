import type { ReactNode } from "react";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import TrackingPixels from "@/app/components/TrackingPixels";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://pomelia.com.br/" />
        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Pomélia",
                "url": "https://pomelia.com.br",
                "logo": "https://pomelia.com.br/logo.png",
                "sameAs": [
                  "https://www.instagram.com/pomelia.oficial/"
                ]
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <TrackingPixels />
        {children}
      </body>
    </html>
  );
}
