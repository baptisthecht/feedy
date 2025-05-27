import { AddProductRequest } from "@/app/api/product/create/route";
import {
  Category,
  Ingredient,
  Product,
  ProductStatus,
} from "@feedy/shared/prisma/client/client";
import { RiKnifeBloodFill, RiLeafFill } from "@remixicon/react";
import { Beef, Carrot, Milk, Wheat } from "lucide-react";
import { redirect } from "next/navigation";
import { createContext, useContext, useMemo, useState } from "react";

type RestrictionsState = {
  isVegetarian: boolean;
  isVegan: boolean;
  isGlutenFree: boolean;
  isLactoseFree: boolean;
  isHalal: boolean;
  isKosher: boolean;
};
export const RESTRICTIONS = [
  {
    id: "vegetarian",
    icon: Carrot,
    label: "végétarien",
    isActive: (state: RestrictionsState) => state.isVegetarian,
    activeClassName: "text-orange-400",
  },
  {
    id: "vegan",
    icon: RiLeafFill,
    label: "végan",
    isActive: (state: RestrictionsState) => state.isVegan,
    activeClassName: "text-success-base",
  },
  {
    id: "halal",
    icon: RiKnifeBloodFill,
    label: "halal",
    isActive: (state: RestrictionsState) => state.isHalal,
    activeClassName: "text-orange-600",
  },
  {
    id: "kosher",
    icon: Beef,
    label: "kasher",
    isActive: (state: RestrictionsState) => state.isKosher,
    activeClassName: "text-error-dark",
  },
  {
    id: "gluten-free",
    icon: Wheat,
    label: "sans gluten",
    isActive: (state: RestrictionsState) => state.isGlutenFree,
    activeClassName: "text-yellow-400",
  },
  {
    id: "lactose-free",
    icon: Milk,
    label: "sans lactose",
    isActive: (state: RestrictionsState) => state.isLactoseFree,
    activeClassName: "text-blue-400",
  },
] as const;

const AddProductContext = createContext<ReturnType<
  typeof useAddProductState
> | null>(null!);

const useAddProductState = (
  categoriesDefault: Category[],
  ingredientsDefault: Ingredient[],
) => {
  const [step, setStep] = useState<number>(1);
  const [file, setFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<Category[]>(categoriesDefault);
  const [ingredients, setIngredients] =
    useState<Ingredient[]>(ingredientsDefault);
  const [ingredientsToAdd, setIngredientsToAdd] = useState<Ingredient[]>([]);
  const [product, setProduct] = useState<Partial<Product>>({
    name: "",
    description: "",
    categoryId: "",
    basePrice: 0,
    image: "",
  });
  const [available, setAvailable] = useState<boolean>(false);

  const editProduct = <K extends keyof Product>(key: K, value: Product[K]) => {
    setProduct({ ...product, [key]: value });
  };

  const restrictionsState = useMemo(() => {
    return {
      isVegetarian: ingredientsToAdd.every((i) => i.isVegetarian),
      isVegan: ingredientsToAdd.every((i) => i.isVegan),
      isGlutenFree: ingredientsToAdd.every((i) => i.isGlutenFree),
      isLactoseFree: ingredientsToAdd.every((i) => i.isLactoseFree),
      isHalal: ingredientsToAdd.every((i) => i.isHalal),
      isKosher: ingredientsToAdd.every((i) => i.isKosher),
    };
  }, [ingredientsToAdd]);

  const handleCreateProduct = async () => {
    await fetch("/api/product/create", {
      method: "POST",
      body: JSON.stringify({
        name: product.name,
        description: product.description,
        image: product.image,
        basePrice: product.basePrice,
        ingredients: ingredientsToAdd,
        status: available ? ProductStatus.ACTIVE : ProductStatus.INACTIVE,
        categoryId: product.categoryId,
      } as AddProductRequest),
    }).then(() => redirect("/products"));
  };

  return {
    step,
    product,
    editProduct,
    setStep,
    categories,
    file,
    setFile,
    setCategories,
    ingredients,
    setIngredients,
    ingredientsToAdd,
    setIngredientsToAdd,
    restrictionsState,
    handleCreateProduct,
    available,
    setAvailable,
  };
};

const AddProductProvider = ({
  children,
  categories,
  ingredients,
}: {
  children: React.ReactNode;
  categories: Category[];
  ingredients: Ingredient[];
}) => {
  const state = useAddProductState(categories, ingredients);
  return (
    <AddProductContext.Provider value={state}>
      {children}
    </AddProductContext.Provider>
  );
};

const useAddProduct = () => {
  const context = useContext(AddProductContext);
  if (!context) {
    throw new Error("useAddProduct must be used within a AddProductProvider");
  }
  return context;
};

export { AddProductProvider, useAddProduct };
