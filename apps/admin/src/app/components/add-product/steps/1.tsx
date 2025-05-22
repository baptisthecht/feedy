import { appear } from "@/motions/appear";
import {
  Button,
  CharCounter,
  cn,
  Input,
  InputRoot,
  InputWrapper,
  LabelRoot,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  TextArea,
} from "@feedy/shared";
import { RiInformation2Fill, RiShoppingBag3Fill } from "@remixicon/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAddProduct } from "../context";

export function AddProductEditionStep1() {
  const { product, editProduct, categories, setStep } = useAddProduct();
  const [AI, setAI] = useState(false);

  const generateDescription = async () => {
    const response = await fetch("/api/product/generate-description", {
      method: "POST",
      body: JSON.stringify({
        name: product.name,
        category: product.categoryId,
      }),
    });
    const data = await response.json();
    editProduct("description", data.description);
    setAI(false);
  };

  return (
    <motion.div
      className="h-full w-[372px] flex flex-col justify-center gap-8"
      {...appear}
    >
      <div className="flex flex-col">
        <div className="flex flex-col gap-6">
          <RiShoppingBag3Fill className="text-primary" size={28} />
          <div className="flex flex-col gap-2">
            <p className="text-title-h5 text-text-strong-950">
              Ajouter des détails du produit
            </p>
            <p className="text-text-sub-600 text-paragraph-md">
              Augmentez vos ventes avec des produits détaillés.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-stroke-soft-200 border-dashed" />
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <LabelRoot htmlFor="email" className="gap-1">
            <span>Nom du produit</span>
            <RiInformation2Fill className="text-text-disabled-300 size-4" />
          </LabelRoot>

          <InputRoot>
            <InputWrapper>
              <Input
                name="product-name"
                id="product-name"
                type="text"
                placeholder="Entrer le nom du produit"
                value={product.name}
                onChange={(e) => editProduct("name", e.target.value)}
              />
            </InputWrapper>
          </InputRoot>
        </div>
        <div className="flex flex-col gap-1">
          <LabelRoot htmlFor="email" className="gap-1">
            <span>Catégorie</span>
            <RiInformation2Fill className="text-text-disabled-300 size-4" />
          </LabelRoot>

          <Select
            value={product.categoryId || ""}
            onValueChange={(value) => editProduct("categoryId", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner une catégorie" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <LabelRoot htmlFor="product-description" className="gap-1">
            <span>Description</span>
            <RiInformation2Fill className="text-text-disabled-300 size-4" />
            {product.name && (
              <p
                className="text-text-sub-600 text-paragraph-xs cursor-pointer hover:underline underline-offset-4 ml-auto"
                onClick={() => {
                  if (!product.name) return;
                  setAI(true);
                  generateDescription();
                }}
              >
                Générer avec IA
              </p>
            )}
          </LabelRoot>

          <TextArea
            id="product-description"
            name="product-description"
            placeholder="Entrer la description du produit"
            value={product.description}
            disabled={AI}
            onChange={(e) => editProduct("description", e.target.value)}
            shining={AI}
            className={cn(AI && "cursor-progress")}
          >
            <CharCounter current={78} max={200} />
          </TextArea>
        </div>
      </div>
      <Button onClick={() => setStep(2)}>Continuer</Button>
    </motion.div>
  );
}
