"use client";
import { Category } from "@feedy/shared/prisma/client/client";
import { AddProductProvider } from "./context";
import { AddProductEdition } from "./edition";
import { AddProductPreview } from "./preview";
import { AddProductSidebar } from "./sidebar";

export function AddProductPage({ categories }: { categories: Category[] }) {
  return (
    <AddProductProvider categories={categories}>
      <main className="flex bg-bg-white-0 h-dvh w-dvw p-3">
        <AddProductSidebar />
        <AddProductPreview />
        <AddProductEdition />
      </main>
    </AddProductProvider>
  );
}
