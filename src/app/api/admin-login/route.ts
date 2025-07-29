// src/app/api/admin-login/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { user, password } = await req.json();

  // Pegue as variáveis do ambiente
  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASSWORD;
  const cookieName = process.env.ADMIN_COOKIE_NAME || "pomelia_admin";

  if (!adminUser || !adminPass) {
    console.error("Variáveis de ambiente não definidas!");
    return NextResponse.json({ error: "Server config error" }, { status: 500 });
  }

  // Checagem segura
  if (user === adminUser && password === adminPass) {
    // Set cookie httpOnly
    const res = NextResponse.json({ ok: true });
    res.cookies.set(cookieName, "ok", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 2, // 2h
    });
    return res;
  } else {
    return NextResponse.json({ error: "Usuário ou senha inválidos." }, { status: 401 });
  }
}
