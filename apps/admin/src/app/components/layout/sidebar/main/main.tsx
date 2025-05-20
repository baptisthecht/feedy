import { SideBarBottom } from "./bottom";
import { SideBarNav } from "./nav";

export const SideBarMain = () => {
  return (
    <main className="p-5 pb-4 flex flex-col gap-5 flex-1">
      {/* Navigation */}
      <SideBarNav />

      <SideBarBottom />
    </main>
  );
};
