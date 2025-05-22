import { PageHeader } from "@/app/components/layout/page-header";
import { getProducts } from "@/app/services/product";
import { getRequiredUser } from "@/lib/auth-session";
import { RiAddLine } from "@remixicon/react";
import { DataTableDemo } from "./table";

export default async function Products() {
  const user = await getRequiredUser();
  if (!user.lastManagedOrganizationId) {
    throw new Error("User has no last managed organization");
  }
  const products = await getProducts(user.lastManagedOrganizationId);
  const fullName = user.firstname + " " + user.lastname;
  return (
    <main className="w-full h-full flex flex-col">
      <PageHeader
        type="image"
        title={fullName}
        description="Quoi de neuf aujourd'hui ? 👋"
        image="https://avatar.iran.liara.run/public/1"
        actions={[
          {
            label: "Nouveau produit",
            icon: <RiAddLine className="size-4.5 text-static-white" />,
            href: "/products/new",
            variant: "primary",
          },
        ]}
      />
      <section className="p-4 h-full">
        <div className="rounded-xl p-4 h-full border border-stroke-soft-200 bg-bg-white-0">
          <DataTableDemo products={products} />
        </div>
      </section>
    </main>
  );
}
