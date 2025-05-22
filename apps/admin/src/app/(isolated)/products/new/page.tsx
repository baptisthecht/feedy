import { AddProductPage } from "@/app/components/add-product/page";
import { getRequiredUser } from "@/lib/auth-session";
import { prisma } from "@feedy/shared/prisma/prisma";

export const generateMetadata = async () => {
  const user = await getRequiredUser();
  return {
    title: `Nouveau produit - ${user.lastManagedOrganization?.name}`,
    description: "Créer un nouveau produit",
  };
};

export default async function NewProduct() {
  const categories = await prisma.category.findMany();
  const ingredients = await prisma.ingredient.findMany();
  return <AddProductPage categories={categories} ingredients={ingredients} />;
}
