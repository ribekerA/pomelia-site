import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { data: "desc" }
    });
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao listar leads" }, { status: 500 });
  }
}
