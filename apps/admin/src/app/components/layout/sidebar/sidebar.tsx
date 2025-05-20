import { Divider } from "../../ui/divider";
import { SideBarUser } from "./footer/sidebar-user";
import { SideBarCompany } from "./header/company";
import { SideBarMain } from "./main/main";

export const SideBar = () => {
  return (
    <aside className="h-full w-sidebar min-w-sidebar border-r border-stroke-soft-200 flex flex-col">
      <SideBarCompany />
      <Divider />
      <SideBarMain />
      <Divider />
      <SideBarUser />
    </aside>
  );
};
