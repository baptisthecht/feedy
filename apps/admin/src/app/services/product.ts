import { prisma } from "@feedy/shared/prisma/prisma";

export async function getProducts(organizationId: string) {
  return prisma.product.findMany({
    where: {
      organizationId,
    },
    include: {
      category: true,
      ingredients: {
        include: {
          ingredient: true,
        },
      },
    },
  });
}

export async function getProduct(id: string) {
  return prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      ingredients: {
        include: {
          ingredient: true,
        },
      },
    },
  });
}
