"use client";
import { RiLayoutGridLine, RiShoppingBag2Line } from "@remixicon/react";
import { ChevronRightIcon, SettingsIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { cn } from "../../../../../../../../packages/shared";
import { SideBarListTitle } from "./list-title";

const navItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: RiLayoutGridLine,
  },
  {
    label: "Produits",
    href: "/products",
    icon: RiShoppingBag2Line,
  },
  {
    label: "Customers",
    href: "/customers",
    icon: UsersIcon,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  },
];
export const SideBarNav = () => {
  return (
    <nav className="flex flex-col gap-2">
      <SideBarListTitle>main</SideBarListTitle>
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavItem key={item.href} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export const NavItem = ({ item }: { item: (typeof navItems)[number] }) => {
  const pathname = usePathname();
  const isActive = useMemo(() => pathname === item.href, [pathname, item.href]);
  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          "py-2 px-3 rounded-lg flex justify-between items-center hover:bg-bg-weak-50 relative",
          {
            "bg-bg-weak-50": isActive,
          },
        )}
      >
        <div className="flex gap-2 items-center">
          <item.icon
            className={cn("size-5 p-px", {
              "text-primary": isActive,
              "text-text-sub-600": !isActive,
            })}
          />
          <span
            className={cn("text-label-sm", {
              "text-text-strong-950": isActive,
              "text-text-sub-600": !isActive,
            })}
          >
            {item.label}
          </span>
        </div>
        {isActive && <ChevronRightIcon className="size-4 text-text-sub-600" />}
        {isActive && (
          <figure className="absolute w-1 h-5 rounded-tr-sm rounded-br-sm -translate-x-8 bg-primary" />
        )}
      </Link>
    </li>
  );
};
