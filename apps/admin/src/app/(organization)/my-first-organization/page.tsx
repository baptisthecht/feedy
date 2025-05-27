import { getRequiredUserWithoutOrganization } from "@/lib/auth-session";
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
  LabelAsterisk,
} from "@feedy/shared";
import { RiBuildingLine, RiInformationFill } from "@remixicon/react";
import Image from "next/image";
import { createOrganization } from "./actions";

export default async function MyFirstOrganization() {
  const user = await getRequiredUserWithoutOrganization();

  return (
    <main className="flex flex-col bg-gray-50 gap-6 w-dvw h-dvh items-center justify-center">
      <form
        action={createOrganization}
        className="flex w-full max-w-sm shrink-0 flex-col items-center gap-5 bg-gray-0 md:w-[416px] md:max-w-full md:gap-6 md:rounded-[28px] md:px-7 md:pb-7 md:pt-8 md:shadow-xs"
      >
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/feedy.png"
            alt="feedy"
            width={100}
            height={100}
            className="w-10 h-10 bg-gradient-to-br from-primary-darker to-primary-base p-1.5 rounded-lg shadow-md mb-4"
          />
          <h1 className="text-title-h6 text-gray-900">
            Bonjour {user.firstname} 👋
          </h1>
          <p className="text-paragraph-sm text-gray-600 max-w-68 text-center">
            Créez votre premier établissement pour commencer à gérer vos
            projets.
          </p>
        </div>
        <div className="flex justify-between w-full gap-1">
          {Array.from({ length: 30 }).map((_, index) => (
            <Divider key={index} />
          ))}
        </div>
        <div className="flex w-full flex-col gap-1">
          <Label>
            Nom de l&apos;établissement <LabelAsterisk />
          </Label>
          <InputRoot>
            <InputWrapper>
              <InputIcon as={RiBuildingLine} />
              <Input
                id="organization-name"
                name="name"
                type="text"
                placeholder="La bonne bouffe"
                required
              />
            </InputWrapper>
          </InputRoot>
          <HintRoot>
            <HintIcon as={RiInformationFill} />
            Ce nom sera affiché sur votre carte en ligne.
          </HintRoot>
        </div>
        <FancyButtonRoot type="submit" className="w-full">
          Créer mon établissement
        </FancyButtonRoot>
      </form>
    </main>
  );
}
