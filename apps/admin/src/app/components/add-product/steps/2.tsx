import { appear } from "@/motions/appear";
import {
  Button,
  HintIcon,
  HintRoot,
  Input,
  InputInlineAffix,
  InputRoot,
  InputWrapper,
  LabelRoot,
} from "@feedy/shared";
import {
  RiInformation2Fill,
  RiInformationFill,
  RiPriceTag3Fill,
} from "@remixicon/react";
import { motion } from "framer-motion";
import { useAddProduct } from "../context";

export function AddProductEditionStep2() {
  const { product, editProduct, setStep } = useAddProduct();

  return (
    <motion.div
      className="h-full w-[372px] flex flex-col justify-center gap-8"
      {...appear}
    >
      <div className="flex flex-col">
        <div className="flex flex-col gap-6">
          <RiPriceTag3Fill className="text-primary" size={28} />
          <div className="flex flex-col gap-2">
            <p className="text-title-h5 text-text-strong-950">
              Ajouter un tarif
            </p>
            <p className="text-text-sub-600 text-paragraph-md">
              Définissez le bon prix pour ce produit.
            </p>
          </div>
        </div>
      </div>
      <hr className="border-stroke-soft-200 border-dashed" />
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <LabelRoot htmlFor="email" className="gap-1">
            <span>Prix du produit</span>
            <RiInformation2Fill className="text-text-disabled-300 size-4" />
          </LabelRoot>

          <InputRoot>
            <InputWrapper>
              <InputInlineAffix>€</InputInlineAffix>
              <Input
                name="product-name"
                id="product-name"
                type="number"
                placeholder="0.00"
                value={product.basePrice?.toString()}
                onChange={(e) =>
                  editProduct("basePrice", parseFloat(e.target.value))
                }
              />
            </InputWrapper>
          </InputRoot>
          <HintRoot>
            <HintIcon as={RiInformationFill} />
            Le prix est exprimé en euros (TTC).
          </HintRoot>
        </div>
      </div>
      <Button disabled={!product.basePrice} onClick={() => setStep(3)}>
        Continuer
      </Button>
    </motion.div>
  );
}
