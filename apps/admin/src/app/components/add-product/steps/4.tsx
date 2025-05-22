import { appear } from "@/motions/appear";
import {
  Button,
  Input,
  InputRoot,
  InputWrapper,
  Tag,
  TagDismissButton,
} from "@feedy/shared";
import { Ingredient } from "@feedy/shared/prisma/client/client";
import { RiPieChartFill } from "@remixicon/react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { RESTRICTIONS, useAddProduct } from "../context";

export function AddProductEditionStep4() {
  const {
    product,
    ingredients,
    ingredientsToAdd,
    setIngredientsToAdd,
    setStep,
    restrictionsState,
  } = useAddProduct();
  const [inputValue, setInputValue] = useState("");

  const addIngredient = (ingredient: Ingredient) => {
    setInputValue("");
    setIngredientsToAdd((prev) => [...prev, ingredient]);
  };

  const removeIngredient = (ingredient: Ingredient) => {
    setIngredientsToAdd((prev) => prev.filter((i) => i.id !== ingredient.id));
  };

  const ingredientSearch = useMemo(() => {
    if (!inputValue)
      return ingredients.filter(
        (ingredient) =>
          !ingredientsToAdd.map((i) => i.id).includes(ingredient.id),
      );
    return ingredients.filter(
      (ingredient) =>
        ingredient.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        !ingredientsToAdd.map((i) => i.id).includes(ingredient.id),
    );
  }, [ingredients, inputValue, ingredientsToAdd]);

  return (
    <motion.div
      className="h-full w-[372px] flex flex-col justify-center gap-8"
      {...appear}
    >
      <div className="flex flex-col">
        <div className="flex flex-col gap-6">
          <RiPieChartFill className="text-primary" size={28} />
          <div className="flex flex-col gap-2">
            <p className="text-title-h5 text-text-strong-950">
              Ajoutez des ingrédients
            </p>
            <p className="text-text-sub-600 text-paragraph-md">
              Ajoutez des ingrédients pour informer vos convives sur les
              restrictions et allergènes.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <InputRoot>
          <InputWrapper>
            <Input
              id="ingredients"
              placeholder="Ajouter un ingrédient"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputValue.trim()) {
                  const ingredientFound = ingredientSearch.find(
                    (i) => i.name === inputValue.trim(),
                  );
                  if (ingredientFound) {
                    addIngredient(ingredientFound);
                  }
                }
              }}
            />
          </InputWrapper>
        </InputRoot>
        <div className="mt-2 flex flex-wrap gap-2">
          {ingredientSearch.map((ingredient) => (
            <Tag
              key={ingredient.id}
              onClick={() => addIngredient(ingredient)}
              className="cursor-pointer"
            >
              {ingredient.name}
              <Plus className="size-3" />
            </Tag>
          ))}
        </div>
      </div>
      <hr className="border-stroke-soft-200 border-dashed" />
      <div className="mt-2 flex flex-wrap gap-2">
        {ingredientsToAdd.map((ingredient) => (
          <Tag key={ingredient.id} variant="gray">
            {ingredient.name}
            <TagDismissButton onClick={() => removeIngredient(ingredient)} />
          </Tag>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {[...RESTRICTIONS]
          .sort((a, b) => {
            const aActive = a.isActive(restrictionsState);
            const bActive = b.isActive(restrictionsState);
            return bActive ? 1 : aActive ? -1 : 0;
          })
          .map((restriction: (typeof RESTRICTIONS)[number]) => {
            const Icon = restriction.icon;
            const isActive = restriction.isActive(restrictionsState);
            return (
              <div key={restriction.id} className="flex gap-2 items-center">
                <Icon
                  className={
                    isActive
                      ? restriction.activeClassName
                      : "text-text-soft-400"
                  }
                  size={16}
                />
                <p
                  className={`text-paragraph-sm ${
                    isActive ? "text-text-sub-600" : "text-text-soft-400"
                  }`}
                >
                  {isActive
                    ? "Votre produit est certifié "
                    : "Votre produit n'est pas certifié "}
                  {restriction.label}
                </p>
              </div>
            );
          })}
      </div>
      <Button disabled={!product.basePrice} onClick={() => setStep(5)}>
        Continuer
      </Button>
    </motion.div>
  );
}
