"use client";

import {
  Button,
  HintIcon,
  HintRoot,
  Input,
  InputIcon,
  InputRoot,
  InputWrapper,
  Label,
  LoadingButton,
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTrigger,
} from "@feedy/shared";
import {
  RiChatSettingsLine,
  RiErrorWarningFill,
  RiInstanceLine,
} from "@remixicon/react";
import { useMemo, useRef, useState } from "react";
import { useAddProduct } from "./context";

export function AddCategoryModal() {
  const { categories, setCategories, editProduct } = useAddProduct();
  const [categoryName, setCategoryName] = useState("");
  const [open, setOpen] = useState(false);

  const handleCreateCategory = async () => {
    await fetch("/api/category", {
      method: "POST",
      body: JSON.stringify({ name: categoryName }),
    })
      .then((res) => res.json())
      .then((category) => {
        setCategories((prev) => [...prev, category]);
        setCategoryName("");
        editProduct("categoryId", category.id);
      });
  };

  const alreadyExists = useMemo(
    () => categories.some((category) => category.name === categoryName),
    [categories, categoryName],
  );

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger asChild>
        <p className="text-text-sub-600 text-paragraph-xs cursor-pointer hover:underline underline-offset-4 ml-auto">
          + Créer une catégorie
        </p>
      </ModalTrigger>
      <ModalContent className="max-w-md">
        <ModalHeader
          icon={RiChatSettingsLine}
          title="Créer une catégorie"
          description="Créer une catégorie pour organiser vos produits."
        />
        <ModalBody className="space-y-1.5">
          <Label htmlFor="category-name">Nom de la catégorie</Label>
          <InputRoot>
            <InputWrapper>
              <InputIcon as={RiInstanceLine} />
              <Input
                id="category-name"
                type="text"
                placeholder="Ex: Pizzas, Salades, etc."
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && categoryName && !alreadyExists) {
                    buttonRef.current?.click();
                  }
                }}
              />
            </InputWrapper>
          </InputRoot>
          {alreadyExists && (
            <HintRoot hasError>
              <HintIcon as={RiErrorWarningFill} />
              Cette catégorie existe déjà.
            </HintRoot>
          )}
        </ModalBody>
        <ModalFooter>
          <ModalClose asChild>
            <Button className="w-full" variant="neutral" mode="stroke">
              Annuler
            </Button>
          </ModalClose>
          <LoadingButton
            ref={buttonRef}
            className="w-full"
            disabled={!categoryName || alreadyExists}
            onClick={async () => {
              await handleCreateCategory();
              setOpen(false);
            }}
          >
            Créer
          </LoadingButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
