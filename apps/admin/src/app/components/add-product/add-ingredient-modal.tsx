"use client";

import { AddIngredientDto } from "@/app/api/ingredient/route";
import {
  Avatar,
  AvatarImage,
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
  Switch,
} from "@feedy/shared";
import {
  RiChatSettingsLine,
  RiErrorWarningFill,
  RiLeafFill,
} from "@remixicon/react";
import { Carrot } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useAddProduct } from "./context";

export function AddIngredientModal({
  value,
  resetValue,
}: {
  value: string;
  resetValue: () => void;
}) {
  const { ingredients, setIngredients, setIngredientsToAdd } = useAddProduct();
  const [ingredientDto, setIngredientDto] = useState<Partial<AddIngredientDto>>(
    {
      name: value,
      isGlutenFree: true,
      isLactoseFree: true,
      isVegan: true,
      isVegetarian: true,
      isHalal: true,
      isKosher: true,
      description: "",
    },
  );
  const [open, setOpen] = useState(false);

  const handleCreateIngredient = async () => {
    await fetch("/api/ingredient", {
      method: "POST",
      body: JSON.stringify(ingredientDto),
    })
      .then((res) => res.json())
      .then((ingredient) => {
        setIngredients((prev) => [...prev, ingredient]);
        setIngredientDto({
          name: "",
          isGlutenFree: true,
          isLactoseFree: true,
          isVegan: true,
          isVegetarian: true,
          isHalal: true,
          isKosher: true,
          description: "",
        });
        setIngredientsToAdd((prev) => [...prev, ingredient]);
        resetValue();
      });
  };

  const alreadyExists = useMemo(
    () =>
      ingredients.some((ingredient) => ingredient.name === ingredientDto.name),
    [ingredients, ingredientDto.name],
  );

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ingredientDto.isVegan && !ingredientDto.isVegetarian) {
      setIngredientDto({ ...ingredientDto, isVegetarian: true });
    }
  }, [ingredientDto, ingredientDto.isVegan]);

  useEffect(() => {
    setIngredientDto((prev) => ({
      ...prev,
      name: value,
    }));
  }, [value]);

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger asChild>
        <p className="text-text-sub-600 text-paragraph-xs cursor-pointer hover:underline underline-offset-4 ml-auto">
          {value ? '+ Créer "' + value + '"' : "+ Nouveau"}
        </p>
      </ModalTrigger>
      <ModalContent className="max-w-md">
        <ModalHeader
          icon={RiChatSettingsLine}
          title="Créer un ingrédient"
          description="Créer un nouvel ingrédient pour vos produits."
        />
        <ModalBody className="space-y-1.5">
          <Label htmlFor="ingredient-name">Nom de l&apos;ingrédient</Label>
          <InputRoot>
            <InputWrapper>
              <InputIcon as={Carrot} />
              <Input
                id="ingredient-name"
                type="text"
                placeholder="Ex: Carotte"
                value={ingredientDto.name}
                onChange={(e) =>
                  setIngredientDto({
                    ...ingredientDto,
                    name: e.target.value,
                  })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" && ingredientDto.name) {
                    buttonRef.current?.click();
                  }
                }}
              />
            </InputWrapper>
          </InputRoot>
          <div className="mt-5 flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <Avatar size="40" className="bg-orange-100 ">
                <Carrot className="size-4.5 text-orange-700" />
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="text-label-sm text-text-strong-950">
                  Végétarien
                </div>
                <div className="text-paragraph-xs text-text-sub-600">
                  Votre ingrédient est végétarien.
                </div>
              </div>
              <Switch
                disabled={ingredientDto.isVegan}
                checked={ingredientDto.isVegetarian}
                onCheckedChange={(checked) =>
                  setIngredientDto({ ...ingredientDto, isVegetarian: checked })
                }
              />
            </div>
            <div className="flex items-center gap-3.5">
              <Avatar size="40" className="bg-success-100">
                <RiLeafFill className="size-4.5 text-success-700" />
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="text-label-sm text-text-strong-950">Végan</div>
                <div className="text-paragraph-xs text-text-sub-600">
                  Votre ingrédient est végan.
                </div>
              </div>
              <Switch
                checked={ingredientDto.isVegan}
                onCheckedChange={(checked) =>
                  setIngredientDto({ ...ingredientDto, isVegan: checked })
                }
              />
            </div>
            <div className="flex items-center gap-3.5">
              <Avatar size="40">
                <AvatarImage src="/images/logo/apex.svg" />
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="text-label-sm text-text-strong-950">Halal</div>
                <div className="text-paragraph-xs text-text-sub-600">
                  Votre ingrédient est halal.
                </div>
              </div>
              <Switch
                checked={ingredientDto.isHalal}
                onCheckedChange={(checked) =>
                  setIngredientDto({ ...ingredientDto, isHalal: checked })
                }
              />
            </div>
            <div className="flex items-center gap-3.5">
              <Avatar size="40">
                <AvatarImage src="/images/logo/apex.svg" />
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="text-label-sm text-text-strong-950">Kosher</div>
                <div className="text-paragraph-xs text-text-sub-600">
                  Votre ingrédient est kasher.
                </div>
              </div>
              <Switch
                checked={ingredientDto.isKosher}
                onCheckedChange={(checked) =>
                  setIngredientDto({ ...ingredientDto, isKosher: checked })
                }
              />
            </div>
            <div className="flex items-center gap-3.5">
              <Avatar size="40">
                <AvatarImage src="/images/logo/apex.svg" />
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="text-label-sm text-text-strong-950">
                  Sans gluten
                </div>
                <div className="text-paragraph-xs text-text-sub-600">
                  Votre ingrédient est sans gluten.
                </div>
              </div>
              <Switch
                checked={ingredientDto.isGlutenFree}
                onCheckedChange={(checked) =>
                  setIngredientDto({ ...ingredientDto, isGlutenFree: checked })
                }
              />
            </div>
            <div className="flex items-center gap-3.5">
              <Avatar size="40">
                <AvatarImage src="/images/logo/apex.svg" />
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="text-label-sm text-text-strong-950">
                  Sans lactose
                </div>
                <div className="text-paragraph-xs text-text-sub-600">
                  Votre ingrédient est sans lactose.
                </div>
              </div>
              <Switch
                checked={ingredientDto.isLactoseFree}
                onCheckedChange={(checked) =>
                  setIngredientDto({ ...ingredientDto, isLactoseFree: checked })
                }
              />
            </div>
          </div>
          {alreadyExists && (
            <HintRoot hasError>
              <HintIcon as={RiErrorWarningFill} />
              Cet ingrédient existe déjà.
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
            disabled={!ingredientDto.name || alreadyExists}
            onClick={async () => {
              await handleCreateIngredient();
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
