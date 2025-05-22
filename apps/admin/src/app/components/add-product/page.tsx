"use client";
import { Category, Ingredient } from "@feedy/shared/prisma/client/client";
import { AddProductProvider } from "./context";
import { AddProductEdition } from "./edition";
import { AddProductPreview } from "./preview";
import { AddProductSidebar } from "./sidebar";

export function AddProductPage({
  categories,
  ingredients,
}: {
  categories: Category[];
  ingredients: Ingredient[];
}) {
  return (
    <AddProductProvider categories={categories} ingredients={ingredients}>
      <main className="flex bg-bg-white-0 h-dvh w-dvw p-3">
        <AddProductSidebar />
        <AddProductPreview />
        <AddProductEdition />
      </main>
    </AddProductProvider>
  );
}
