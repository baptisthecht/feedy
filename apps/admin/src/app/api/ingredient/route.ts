import { Ingredient } from "@feedy/shared/prisma/client/client";
import { prisma } from "@feedy/shared/prisma/prisma";
import { NextResponse } from "next/server";

export type AddIngredientDto = Omit<
  Ingredient,
  "id" | "createdAt" | "updatedAt"
>;

export async function POST(request: Request) {
  const data = (await request.json()) as AddIngredientDto;

  const ingredient = await prisma.ingredient.create({
    data,
  });

  return NextResponse.json(ingredient);
}
