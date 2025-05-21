import { getUser } from "@/lib/auth-session";
import { BadgeCheck, ChevronRight } from "lucide-react";
import Image from "next/image";

export const SideBarUser = async () => {
  const user = await getUser();
  const username = `${user?.name}`;
  const image = user?.image || "https://avatar.iran.liara.run/public/1";
  return (
    <div className="p-3">
      <header className="p-3 flex gap-3 items-center w-full">
        {/* Logo */}
        <figure className="size-10 rounded-full bg-bg-white-0">
          <Image src={image} alt={username} width={48} height={48} />
        </figure>

        {/* Company Name */}
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex gap-1 items-center">
            <h1 className="text-label-sm text-bg-strong-950">{username}</h1>
            <BadgeCheck className="size-4.5 text-white fill-verified-base" />
          </div>
          <p className="text-paragraph-xs text-text-sub-600">{user?.email}</p>
        </div>

        {/* Menu */}
        <ChevronRight className="size-4 text-text-sub-600" />
      </header>
    </div>
  );
};
