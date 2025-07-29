// src/app/api/admin-logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set("pomelia_admin", "", { maxAge: -1, path: "/" });
  return response;
}
