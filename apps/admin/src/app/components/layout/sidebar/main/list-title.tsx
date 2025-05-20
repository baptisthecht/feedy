import { forwardRef } from "react";

type SideBarListTitleProps = {
  children: React.ReactNode;
};

export const SideBarListTitle = forwardRef<
  HTMLDivElement,
  SideBarListTitleProps
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className="p-1">
      <span className="text-subheading-xs text-text-soft-400 uppercase">
        {children}
      </span>
    </div>
  );
});

SideBarListTitle.displayName = "SideBarListTitle";
