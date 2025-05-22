import { appear } from "@/motions/appear";
import {
  Button,
  Input,
  InputRoot,
  InputWrapper,
  Tag,
  TagDismissButton,
} from "@feedy/shared";
import { RiPieChartFill } from "@remixicon/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAddProduct } from "../context";
export function AddProductEditionStep4() {
  const { product } = useAddProduct();
  const [tags, setTags] = useState(["Berlin", "London", "Paris"]);
  const [inputValue, setInputValue] = useState("");

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

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
              id="tags"
              placeholder="Ajouter un ingrédient"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={addTag}
            />
          </InputWrapper>
        </InputRoot>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>
              {tag}
              <TagDismissButton onClick={() => removeTag(tag)} />
            </Tag>
          ))}
        </div>
      </div>
      <Button disabled={!product.basePrice}>Continuer</Button>
    </motion.div>
  );
}
