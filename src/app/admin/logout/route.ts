import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = cookies();
  cookieStore.set("pomelia_admin", "", { maxAge: -1, path: "/" });
  return NextResponse.json({ ok: true });
}
