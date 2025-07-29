// src/app/admin/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, password }),
    });
    if (res.ok) {
      router.replace("/admin");
    } else {
      const data = await res.json();
      setError(data.error || "Erro ao logar");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50">
      <form
        className="bg-white p-8 rounded-xl shadow-xl flex flex-col w-full max-w-md gap-4"
        onSubmit={handleLogin}
      >
        <h1 className="text-2xl font-bold text-center text-yellow-900 mb-4">
          Painel Administrativo Pomélia
        </h1>
        <input
          className="p-3 border rounded"
          type="text"
          placeholder="Usuário"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <input
          className="p-3 border rounded"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="bg-yellow-800 text-white py-3 rounded hover:bg-yellow-900 font-bold"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
