// src/app/layout.tsx OU src/app/admin/layout.tsx

import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-yellow-50 text-brown-800">
        {children}
      </body>
    </html>
  );
}
