import { appear } from "@/motions/appear";
import { Button } from "@feedy/shared";
import { fileToBase64 } from "@feedy/shared/utils/file-to-base-64";
import { RiCloseLine, RiImageAddFill } from "@remixicon/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { UploadImageCard } from "../../upload-image-card";
import { useAddProduct } from "../context";

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Ko";
  const k = 1024;
  const sizes = ["Ko", "Mo", "Go"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i - 1]}`;
};

export function AddProductEditionStep3() {
  const { product, editProduct, setStep, file, setFile } = useAddProduct();
  const [AI, setAI] = useState(false);

  const generatePicture = async () => {
    try {
      const response = await fetch("/api/product/generate-picture", {
        method: "POST",
        body: JSON.stringify({
          name: product.name,
          description: product.description,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const blob = await response.blob();
      const generatedFile = new File([blob], "image", {
        type: "image/png",
      });
      setFile(generatedFile);
      editProduct("image", await fileToBase64(generatedFile));
    } catch (error) {
      console.error(error);
    } finally {
      setAI(false);
    }
  };

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
            <p className="text-paragraph-md text-text-sub-600">
              Mettez en valeur le produit avec des visuels de qualité.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p
          className="text-text-sub-600 text-paragraph-xs cursor-pointer hover:underline underline-offset-4 w-full text-end mb-1.5"
          onClick={() => {
            if (!product.name) return;
            setAI(true);
            generatePicture();
          }}
        >
          Générer avec IA
        </p>
        <UploadImageCard
          shining={AI}
          onUpload={async (file) => {
            const base64 = await fileToBase64(file);
            setFile(file);
            editProduct("image", base64);
          }}
        />
      </div>
      {product.image && file && (
        <div className="flex gap-4 items-center max-w-full">
          <Image
            src={product.image}
            alt="Product image"
            width={48}
            height={48}
            className="bg-bg-weak-50 rounded-lg"
          />
          <div className="flex flex-col gap-1 w-full max-w-full overflow-hidden">
            <p className="flex items-center gap-1 min-w-0">
              <span className="text-label-md text-text-sub-600 truncate block">
                {file?.name}
              </span>
              <span className="text-label-md text-text-soft-400 flex-shrink-0">
                .{file?.type.split("/")[1]}
              </span>
            </p>
            <p className="text-paragraph-sm text-text-soft-400">
              {formatFileSize(file.size)}
            </p>
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
