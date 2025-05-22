import { appear } from "@/motions/appear";
import { Button } from "@feedy/shared";
import { fileToBase64 } from "@feedy/shared/utils/file-to-base-64";
import { RiCloseLine, RiImageAddFill } from "@remixicon/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { UploadImageCard } from "../../upload-image-card";
import { useAddProduct } from "../context";

export function AddProductEditionStep3() {
  const { product, editProduct, setStep } = useAddProduct();

  return (
    <motion.div
      className="h-full w-[372px] flex flex-col justify-center gap-8"
      {...appear}
    >
      <div className="flex flex-col">
        <div className="flex flex-col gap-6">
          <RiImageAddFill className="text-primary" size={28} />
          <div className="flex flex-col gap-2">
            <p className="text-title-h5 text-text-strong-950">
              Ajouter une image
            </p>
            <p className="text-text-sub-600 text-paragraph-md">
              Mettez en valeur le produit avec des visuels de qualité.
            </p>
          </div>
        </div>
      </div>
      <UploadImageCard
        onUpload={async (file) => {
          const base64 = await fileToBase64(file);
          editProduct("image", base64);
        }}
      />
      {product.image && (
        <div className="flex gap-4 items-center">
          <Image
            src={product.image}
            alt="Product image"
            width={48}
            height={48}
            className="bg-bg-weak-50 rounded-lg"
          />
          <div className="flex flex-col flex-1 gap-1">
            <p>
              <span className="text-label-md text-text-sub-600">
                apple-watch
              </span>
              <span className="text-label-md text-text-soft-400">.jpg</span>
            </p>
            <p className="text-paragraph-sm text-text-soft-400">753.99KB</p>
          </div>
          <div
            className="rounded-full hover:bg-bg-weak-50 p-1 cursor-pointer"
            onClick={() => editProduct("image", null)}
          >
            <RiCloseLine className="text-text-sub-600" size={18} />
          </div>
        </div>
      )}
      <Button disabled={!product.image} onClick={() => setStep(4)}>
        Continuer
      </Button>
    </motion.div>
  );
}
