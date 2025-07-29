import Link from "next/link";

export default function PomeliaHeader() {
  return (
    <header className="bg-yellow-50 border-b border-yellow-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          {/* Substitua pelo logo real se desejar */}
          <span className="text-3xl font-playfair font-bold">POMÉLIA</span>
        </div>
        <nav className="flex gap-8 items-center text-brown-800 font-serif">
          <Link href="/">Quem somos</Link>
          <Link href="/filhotes">Filhotes</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/depoimentos">Depoimentos</Link>
          <Link
            href="/#contato"
            className="bg-yellow-700 text-white font-bold px-4 py-2 rounded hover:bg-yellow-800 ml-4"
          >
            Entrar em contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
