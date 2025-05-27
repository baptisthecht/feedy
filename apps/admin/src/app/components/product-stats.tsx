import { Product } from "@feedy/shared/prisma/client/client";

export function ProductStats({ products }: { products: Product[] }) {
  return (
    <div className="mx-8 py-6 flex gap-7 border-y border-y-stroke-soft-200 border-dashed">
      <Stat label="Produits" value={products.length.toString()} />
      <Divider />
      <Stat
        label="Actifs"
        value={products
          .filter((product) => product.status === "ACTIVE")
          .length.toString()}
      />
      <Divider />
      <Stat label="Total des ventes" value="10" />
      <Divider />
      <Stat label="Total des revenus" value="10,00 €" />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <p className="text-label-sm text-text-sub-600">{label}</p>
      <div className="flex items-center gap-1.5">
        <p className="text-title-h5 text-text-strong-950">{value}</p>
        <p className="text-label-xs text-text-sub-600">
          <span className="text-success-base">+12 %</span> cette semaine
        </p>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="w-px h-full bg-stroke-soft-200" />;
}
