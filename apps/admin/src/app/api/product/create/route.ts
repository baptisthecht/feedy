import { getRequiredUser } from "@/lib/auth-session";
import { Ingredient, ProductStatus } from "@feedy/shared/prisma/client/client";
import { prisma } from "@feedy/shared/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export type AddProductRequest = {
  name: string;
  description: string | undefined;
  image: string;
  basePrice: number;
  ingredients: Ingredient[];
  status: ProductStatus;
  categoryId: string;
};

export async function POST(request: NextRequest) {
  const user = await getRequiredUser();
  if (!user || !user.lastManagedOrganizationId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body: AddProductRequest = await request.json();

  const productCreated = await prisma.product.create({
    data: {
      name: body.name,
      description: body.description,
      image: body.image,
      basePrice: body.basePrice,
      status: body.status,
      organizationId: user.lastManagedOrganizationId,
      ingredients: {
        create: body.ingredients.map((ingredient) => ({
          ingredientId: ingredient.id,
        })),
      },
      categoryId: body.categoryId,
    },
    include: {
      ingredients: {
        include: {
          ingredient: true,
        },
      },
    },
  });

  return NextResponse.json({
    message: "Product created",
    data: productCreated,
  });
}
