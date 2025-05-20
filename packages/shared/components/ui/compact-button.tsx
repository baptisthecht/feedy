import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../../utils"
const compactButtonVariants = cva(
  "relative flex shrink-0 items-center justify-center outline-none transition duration-200 ease-out disabled:pointer-events-none disabled:border-transparent disabled:bg-transparent disabled:text-text-disabled-300 disabled:shadow-none focus:outline-none",
  {
    variants: {
      variant: {
        stroke:
          "border border-stroke-soft-200 bg-bg-white-0 text-text-sub-600 shadow-regular-xs hover:border-transparent hover:bg-bg-weak-50 hover:text-text-strong-950 hover:shadow-none focus-visible:border-transparent focus-visible:bg-bg-strong-950 focus-visible:text-text-white-0 focus-visible:shadow-none",
        ghost:
          "bg-transparent text-text-sub-600 hover:bg-bg-weak-50 hover:text-text-strong-950 focus-visible:bg-bg-strong-950 focus-visible:text-text-white-0",
        white:
          "bg-bg-white-0 text-text-sub-600 shadow-regular-xs hover:bg-bg-weak-50 hover:text-text-strong-950 focus-visible:bg-bg-strong-950 focus-visible:text-text-white-0",
        modifiable: "",
      },
      size: {
        large: "size-6",
        medium: "size-5",
      },
      fullRadius: {
        true: "rounded-full",
        false: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "stroke",
      size: "large",
      fullRadius: false,
    },
  }
)

export interface CompactButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof compactButtonVariants> {
  asChild?: boolean
}

const CompactButton = React.forwardRef<HTMLButtonElement, CompactButtonProps>(
  ({ className, variant, size, fullRadius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(compactButtonVariants({ variant, size, fullRadius, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
CompactButton.displayName = "CompactButton"

export { CompactButton, compactButtonVariants }
