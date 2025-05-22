import { Category, Product } from "@feedy/shared/prisma/client/client";
import { createContext, useContext, useState } from "react";

const AddProductContext = createContext<ReturnType<
  typeof useAddProductState
> | null>(null!);

const useAddProductState = (categories: Category[]) => {
  const [step, setStep] = useState<number>(1);
  const [product, setProduct] = useState<Partial<Product>>({
    name: "",
    description: "",
    categoryId: "",
    basePrice: 0,
    image: "",
  });

  const editProduct = <K extends keyof Product>(key: K, value: Product[K]) => {
    setProduct({ ...product, [key]: value });
  };
  return { step, product, editProduct, setStep, categories };
};

const AddProductProvider = ({
  children,
  categories,
}: {
  children: React.ReactNode;
  categories: Category[];
}) => {
  const state = useAddProductState(categories);
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
