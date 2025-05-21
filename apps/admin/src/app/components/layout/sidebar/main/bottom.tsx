"use client";
import { RiHeadphoneLine, RiSettings2Line } from "@remixicon/react";
import { NavItem } from "./nav";

export const SideBarBottom = () => {
  return (
    <ul className="flex-1 flex flex-col justify-end gap-1.5">
      <NavItem
        item={{
          label: "Settings",
          href: "/settings",
          icon: RiSettings2Line,
        }}
      />
      <NavItem
        item={{
          label: "Support",
          href: "/support",
          icon: RiHeadphoneLine,
        }}
      />
    </ul>
  );
};
