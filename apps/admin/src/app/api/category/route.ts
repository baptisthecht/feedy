import { prisma } from "@feedy/shared/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name } = await request.json();

  if (!name) {
    return NextResponse.json(
      { error: "Nom de la catégorie est requis" },
      { status: 400 },
    );
  }

  const category = await prisma.category.create({
    data: { name },
  });

  return NextResponse.json(category);
}
