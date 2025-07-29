"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = process.env.ADMIN_COOKIE_NAME || "pomelia_admin";

// Função para verificar se está logado
export async function isAdmin() {
  const cookiesList = await cookies();
  const value = cookiesList.get(COOKIE_NAME)?.value;
  return value === "ok";
}

// Função de logout apenas dispara chamada para API
export async function logoutAdmin() {
  // Só chama a rota de logout, não manipula cookie aqui!
  await fetch("/api/admin-logout", { method: "POST" });
}
