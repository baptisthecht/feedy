"use client";

import {
  Divider,
  FancyButtonRoot,
  HintIcon,
  HintRoot,
  Input,
  InputIcon,
  InputRoot,
  InputWrapper,
  Label,
} from "@feedy/shared";
import { RiInformationFill, RiMapPinLine } from "@remixicon/react";
import Link from "next/link";
import { updateOrganization } from "./actions";

export default function Onboarding() {
  return (
    <main className="flex flex-col bg-gray-50 gap-6 w-dvw h-dvh items-center justify-center">
      <form
        action={updateOrganization}
        className="flex w-full max-w-sm shrink-0 flex-col items-center gap-5 bg-gray-0 md:w-[416px] md:max-w-full md:gap-6 md:rounded-[28px] md:px-7 md:pb-7 md:pt-8 md:shadow-xs"
      >
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-title-h6 text-gray-900">
            Complétez vos informations
          </h1>
          <p className="text-paragraph-sm text-gray-600 max-w-68 text-center">
            Ajoutez l&apos;adresse de votre établissement pour améliorer votre
            visibilité en ligne.
          </p>
        </div>
        <div className="flex justify-between w-full gap-1">
          {Array.from({ length: 30 }).map((_, index) => (
            <Divider key={index} />
          ))}
        </div>
        <div className="flex w-full flex-col gap-1">
          <Label>Adresse de l&apos;établissement</Label>
          <InputRoot>
            <InputWrapper>
              <InputIcon as={RiMapPinLine} />
              <Input
                id="organization-address"
                name="address"
                type="text"
                placeholder="123 rue de la Paix, 75001 Paris"
                required
              />
            </InputWrapper>
          </InputRoot>
          <HintRoot>
            <HintIcon as={RiInformationFill} />
            Cette adresse sera utilisée pour afficher votre établissement sur la
            carte.
          </HintRoot>
        </div>
        <div className="flex w-full gap-4">
          <Link href="/" className="w-full">
            <FancyButtonRoot variant="basic" className="w-full">
              Ignorer
            </FancyButtonRoot>
          </Link>
          <FancyButtonRoot type="submit" className="w-full">
            Enregistrer
          </FancyButtonRoot>
        </div>
      </form>
    </main>
  );
}
