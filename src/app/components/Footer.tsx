"use client";
export default function Footer() {
  return (
    <footer className="bg-yellow-100 py-8 text-center mt-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-gray-700 text-base font-medium mb-2">
        <a href="/politica" className="underline hover:text-yellow-900 mx-2">Política de Privacidade</a>
        <a href="/termos" className="underline hover:text-yellow-900 mx-2">Termos de Uso</a>
      </div>
      <div className="text-gray-700 mb-1">&copy; 2025 Pomélia • Spitz Alemão</div>
      <div className="text-gray-500 text-sm">CNPJ 22.587.478/0001-00 — Bragança Paulista/SP</div>
    </footer>
  );
}
