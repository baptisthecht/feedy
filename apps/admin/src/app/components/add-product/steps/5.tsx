import { appear } from "@/motions/appear";
import { Button, Label, Switch, Tag } from "@feedy/shared";
import { RiShoppingBasket2Fill } from "@remixicon/react";
import { motion } from "framer-motion";
import { RESTRICTIONS, useAddProduct } from "../context";

export function AddProductEditionStep5() {
  const {
    product,
    ingredientsToAdd,
    handleCreateProduct,
    categories,
    restrictionsState,
    available,
    setAvailable,
  } = useAddProduct();

  return (
    <motion.div
      className="h-full w-[372px] flex flex-col justify-center gap-8"
      {...appear}
    >
      <div className="flex flex-col">
        <div className="flex flex-col gap-6">
          <RiShoppingBasket2Fill className="text-primary" size={28} />
          <div className="flex flex-col gap-2">
            <p className="text-title-h5 text-text-strong-950">Résumé</p>
            <p className="text-text-sub-600 text-paragraph-md">
              Vérifiez les informations de votre produit avant de le publier.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-stroke-soft-200 border-dashed" />
      <div className="flex flex-col gap-1">
        <p className="text-label-xs text-text-soft-400">Nom</p>
        <p className="text-label-md text-text-strong-950">{product.name}</p>
      </div>
      <hr className="border-stroke-soft-200 border-dashed" />
      <div className="flex flex-col gap-1">
        <p className="text-label-xs text-text-soft-400">Description</p>
        <p className="text-label-md text-text-strong-950">
          {product.description || "Aucune description"}
        </p>
      </div>
      <hr className="border-stroke-soft-200 border-dashed" />
      <div className="flex gap-7">
        <div className="flex flex-col gap-1 flex-1">
          <p className="text-label-xs text-text-soft-400">Catégorie</p>
          <p className="text-label-md text-text-strong-950">
            {categories.find((cat) => cat.id === product.categoryId)?.name ||
              "Aucune"}
          </p>
        </div>
        <div className="w-px h-full bg-stroke-soft-200" />
        <div className="flex flex-col gap-1 flex-1">
          <p className="text-label-xs text-text-soft-400">Prix de base</p>
          <p className="text-label-md text-text-strong-950">
            {product.basePrice?.toFixed(2)} €
          </p>
        </div>
        <div className="w-px h-full bg-stroke-soft-200" />
        <div className="flex flex-col gap-1 flex-1">
          <p className="text-label-xs text-text-soft-400">Certifications</p>
          <div className="text-label-md text-text-strong-950 grid grid-cols-3 gap-y-1.5">
            {[...RESTRICTIONS]
              .filter((restriction) => restriction.isActive(restrictionsState))
              .map((restriction) => {
                const Icon = restriction.icon;
                return (
                  <div key={restriction.id} className="flex">
                    <Icon className={restriction.activeClassName} size={16} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <hr className="border-stroke-soft-200 border-dashed" />
      <div className="flex flex-col gap-2.5">
        <p className="text-label-xs text-text-soft-400">Ingrédients</p>
        {ingredientsToAdd.length ? (
          <div className="flex flex-wrap gap-2">
            {ingredientsToAdd.map((ingredient) => (
              <Tag
                key={ingredient.id}
                variant="gray"
                className="hover:bg-bg-weak-50 hover:border-none hover:ring-transparent"
              >
                {ingredient.name}
              </Tag>
            ))}
          </div>
        ) : (
          <p className="text-label-md text-text-strong-950">Aucun ingrédient</p>
        )}
      </div>
      <hr className="border-stroke-soft-200 border-dashed" />
      <div className="flex items-center gap-2">
        <Switch
          id={"available"}
          checked={available}
          onCheckedChange={setAvailable}
        />
        <Label className="text-paragraph-sm" htmlFor={"available"}>
          Publier le produit immédiatement
        </Label>
      </div>
      <Button disabled={!product.basePrice} onClick={handleCreateProduct}>
        Confirmer la création
      </Button>
    </motion.div>
  );
}
