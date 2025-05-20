"use client";
import { FancyButtonRoot } from "@feedy/shared";
import { updateLastManagedOrganization } from "./actions";

export const OrganizationButton = ({
  name,
  role,
  id,
  userId,
}: {
  name: string;
  role: string;
  id: string;
  userId: string;
}) => {
  const handleClick = async () => {
    await updateLastManagedOrganization(userId, id);
  };
  return (
    <FancyButtonRoot
      variant={"basic"}
      key={id}
      className="py-2 h-auto"
      onClick={handleClick}
    >
      <figure className="size-10 rounded-full bg-primary shrink-0" />
      <div className="flex flex-col gap-1 flex-1 truncate text-start">
        <h1 className="text-label-sm text-bg-strong-950">{name}</h1>
        <p className="text-paragraph-xs text-text-sub-600 truncate">{role}</p>
      </div>
    </FancyButtonRoot>
  );
};
