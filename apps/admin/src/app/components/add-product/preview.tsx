import { appearFirst } from "@/motions/appear";
import { RiAddLine } from "@remixicon/react";
import { motion } from "framer-motion";
import Image from "next/image";
import DottedPattern from "../dots";
import { RESTRICTIONS, useAddProduct } from "./context";
export function AddProductPreview() {
  const { product, categories, restrictionsState, step } = useAddProduct();
  return (
    <section className="w-[600px] h-full bg-bg-weak-50 rounded-2xl hidden lg:flex flex-col justify-center items-center pb-12 gap-6 z-0 overflow-hidden">
      <motion.div className="w-[325px] flex flex-col gap-1" {...appearFirst}>
        <p className="text-text-sub-600 text-label-md">Prévisualisation</p>
        <p className="text-text-soft-400 text-label-sm">
          Voici comment votre produit apparaîtra.
        </p>
      </motion.div>
      <motion.div
        className="w-[325px] bg-bg-white-0 rounded-3xl p-6 pb-7 flex flex-col gap-6 shadow-custom-md relative"
        {...appearFirst}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt="Product image"
            width={300}
            height={300}
            objectFit=""
            className="mx-auto rounded-xl"
          />
        ) : (
          <div className="border border-dashed border-stroke-soft-200 gap-3 flex flex-col items-center justify-center h-[224px] w-full rounded-xl">
            <div className="rounded-full size-11 bg-bg-weak-50 flex items-center justify-center">
              <RiAddLine className="text-icon-disabled-300" size={24} />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-text-soft-400 text-label-sm">
                Image du produit
              </p>
              <p className="text-text-soft-400 text-paragraph-sm">400x400px</p>
            </div>
          </div>
        )}

        <div className="p-3 gap-2 flex flex-col w-full ">
          <p className="text-text-soft-400 text-label-md">
            {categories.find((c) => c.id === product.categoryId)?.name ||
              "Nom de la catégorie"}
          </p>
          <p className="text-text-sub-600 text-label-lg">
            {product.name || "Produit"}
            {step > 3 && (
              <span className="text-label-md text-text-strong-950 inline-flex items-center gap-1 ml-2">
                {[...RESTRICTIONS]
                  .filter((restriction) =>
                    restriction.isActive(restrictionsState),
                  )
                  .map((restriction) => {
                    const Icon = restriction.icon;
                    return (
                      <Icon
                        key={restriction.id}
                        className={restriction.activeClassName}
                        size={14}
                      />
                    );
                  })}
              </span>
            )}
          </p>
          <p className="text-title-h4 text-text-sub-600">
            {(product.basePrice || 0).toFixed(2)} €
          </p>
        </div>
        <DottedPattern />
      </motion.div>
    </section>
  );
}
