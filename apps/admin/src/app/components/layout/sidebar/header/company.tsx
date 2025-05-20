import { getRequiredUser } from "@/lib/auth-session";
import {
  CompactButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@feedy/shared";

import { ChevronsUpDown } from "lucide-react";
import { OrganizationButton } from "./organization-button";

export const SideBarCompany = async () => {
  const user = await getRequiredUser();
  const organization =
    user.lastManagedOrganization || user.organizations[0]?.organization;
  const organizationName = organization?.name || "Aucun établissement";
  const organizationAddress = organization?.address || "Aucune adresse";

  return (
    <div className="p-3">
      <header className="p-3 flex gap-3 items-center w-full">
        {/* Logo */}
        <figure className="size-10 rounded-full bg-primary shrink-0" />

        {/* Company Name */}
        <div className="flex flex-col gap-1 flex-1 truncate">
          <h1 className="text-label-sm text-bg-strong-950">
            {organizationName}
          </h1>
          <p className="text-paragraph-xs text-text-sub-600 truncate">
            {organizationAddress}
          </p>
        </div>

        {/* Menu */}
        <Popover>
          <PopoverTrigger asChild>
            <CompactButton>
              <ChevronsUpDown className="size-4 text-text-sub-600" />
            </CompactButton>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col p-2 gap-1">
            {user.organizations.map((organization) => (
              <OrganizationButton
                key={organization.organization.id}
                name={organization.organization.name}
                role={organization.role.name}
                id={organization.organization.id}
                userId={user.id}
              />
            ))}
          </PopoverContent>
        </Popover>
      </header>
    </div>
  );
};
