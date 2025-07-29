// src/app/admin/auth.ts
"use server";

import { cookies } from "next/headers";

const COOKIE_NAME = process.env.ADMIN_COOKIE_NAME || "pomelia_admin";

// Função para verificar se está logado
export async function isAdmin() {
const cookiesList = await cookies();
const value = cookiesList.get(COOKIE_NAME)?.value;
  return value === "ok";
}

// Função de logout
export async function logoutAdmin() {
  cookies().set(COOKIE_NAME, "", { maxAge: -1, path: "/" });
}
