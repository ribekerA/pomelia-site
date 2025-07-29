'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginAdmin() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (user === 'admin' && pass === '@@Chowchow02') {
      document.cookie = "pomelia_admin=ok; path=/";
      router.push('/admin');
    } else {
      setError('Usuário ou senha incorretos!');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pomelia">
      <form className="bg-white/80 rounded-2xl shadow-xl p-10 w-full max-w-xs border border-gold" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-serif text-center mb-4 text-gold">Painel Pomélia</h1>
        <input
          className="w-full p-2 rounded border mb-3 focus:outline-gold"
          placeholder="Usuário"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <input
          className="w-full p-2 rounded border mb-3 focus:outline-gold"
          placeholder="Senha"
          type="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        <button type="submit" className="w-full bg-gold text-white rounded p-2 font-semibold hover:brightness-90 transition">
          Entrar
        </button>
      </form>
    </div>
  );
}
