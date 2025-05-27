import { PageHeader } from "@/app/components/layout/page-header";
import { ProductStats } from "@/app/components/product-stats";
import { getProducts } from "@/app/services/product";
import { getRequiredUser } from "@/lib/auth-session";
import { RiAddLine, RiShoppingBag2Line } from "@remixicon/react";
import { DataTableDemo } from "./table";

export default async function Products() {
  const user = await getRequiredUser();
  if (!user.lastManagedOrganizationId) {
    throw new Error("User has no last managed organization");
  }
  const products = await getProducts(user.lastManagedOrganizationId);
  return (
    <main className="w-full h-full flex flex-col">
      <PageHeader
        title={"Mes produits"}
        description="Gérez vos produits et leurs ingrédients"
        icon={RiShoppingBag2Line}
        actions={[
          {
            label: "Nouveau produit",
            icon: <RiAddLine className="size-4.5 text-static-white" />,
            href: "/products/new",
            variant: "primary",
          },
        ]}
      />
      <ProductStats products={products} />
      <DataTableDemo products={products} />
    </main>
  );
}
