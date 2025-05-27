"use client";
import { Slot } from "@radix-ui/react-slot";
import { RiLoader2Line } from "@remixicon/react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { useState } from "react";
import { cn } from "../../utils";
const BUTTON_ROOT_NAME = "ButtonRoot";
const BUTTON_ICON_NAME = "ButtonIcon";

// Root button variants
export const buttonVariants = cva(
  "group relative inline-flex items-center justify-center whitespace-nowrap outline-none transition duration-200 ease-out focus:outline-none disabled:pointer-events-none disabled:bg-bg-weak-50 disabled:text-text-disabled-300 disabled:ring-transparent",
  {
    variants: {
      variant: {
        primary: "",
        neutral: "",
        error: "",
      },
      mode: {
        filled: "",
        stroke: "ring-1 ring-inset",
        lighter: "ring-1 ring-inset",
        ghost: "ring-1 ring-inset",
      },
      size: {
        medium: "h-10 gap-3 rounded-10 px-3.5 text-label-sm",
        small: "h-9 gap-3 rounded-lg px-3 text-label-sm",
        xsmall: "h-8 gap-2.5 rounded-lg px-2.5 text-label-sm",
        xxsmall: "h-7 gap-2.5 rounded-lg px-2 text-label-sm",
      },
    },
    compoundVariants: [
      // PRIMARY
      {
        variant: "primary",
        mode: "filled",
        class:
          "bg-primary-base text-static-white hover:bg-primary-darker focus-visible:shadow-button-primary-focus",
      },
      {
        variant: "primary",
        mode: "stroke",
        class:
          "bg-bg-white-0 text-primary-base ring-primary-base hover:bg-primary-alpha-10 hover:ring-transparent focus-visible:shadow-button-primary-focus",
      },
      {
        variant: "primary",
        mode: "lighter",
        class:
          "bg-primary-alpha-10 text-primary-base ring-transparent hover:bg-bg-white-0 hover:ring-primary-base focus-visible:bg-bg-white-0 focus-visible:shadow-button-primary-focus focus-visible:ring-primary-base",
      },
      {
        variant: "primary",
        mode: "ghost",
        class:
          "bg-transparent text-primary-base ring-transparent hover:bg-primary-alpha-10 focus-visible:bg-bg-white-0 focus-visible:shadow-button-primary-focus focus-visible:ring-primary-base",
      },
      // NEUTRAL
      {
        variant: "neutral",
        mode: "filled",
        class:
          "bg-bg-strong-950 text-text-white-0 hover:bg-bg-surface-800 focus-visible:shadow-button-important-focus",
      },
      {
        variant: "neutral",
        mode: "stroke",
        class:
          "bg-bg-white-0 text-text-sub-600 shadow-regular-xs ring-stroke-soft-200 hover:bg-bg-weak-50 hover:text-text-strong-950 hover:shadow-none hover:ring-transparent focus-visible:text-text-strong-950 focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950",
      },
      {
        variant: "neutral",
        mode: "lighter",
        class:
          "bg-bg-weak-50 text-text-sub-600 ring-transparent hover:bg-bg-white-0 hover:text-text-strong-950 hover:shadow-regular-xs hover:ring-stroke-soft-200 focus-visible:bg-bg-white-0 focus-visible:text-text-strong-950 focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950",
      },
      {
        variant: "neutral",
        mode: "ghost",
        class:
          "bg-transparent text-text-sub-600 ring-transparent hover:bg-bg-weak-50 hover:text-text-strong-950 focus-visible:bg-bg-white-0 focus-visible:text-text-strong-950 focus-visible:shadow-button-important-focus focus-visible:ring-stroke-strong-950",
      },
      // ERROR
      {
        variant: "error",
        mode: "filled",
        class:
          "bg-error-base text-static-white hover:bg-red-700 focus-visible:shadow-button-error-focus",
      },
      {
        variant: "error",
        mode: "stroke",
        class:
          "bg-bg-white-0 text-error-base ring-error-base hover:bg-red-alpha-10 hover:ring-transparent focus-visible:shadow-button-error-focus",
      },
      {
        variant: "error",
        mode: "lighter",
        class:
          "bg-red-alpha-10 text-error-base ring-transparent hover:bg-bg-white-0 hover:ring-error-base focus-visible:bg-bg-white-0 focus-visible:shadow-button-error-focus focus-visible:ring-error-base",
      },
      {
        variant: "error",
        mode: "ghost",
        class:
          "bg-transparent text-error-base ring-transparent hover:bg-red-alpha-10 focus-visible:bg-bg-white-0 focus-visible:shadow-button-error-focus focus-visible:ring-error-base",
      },
    ],
    defaultVariants: {
      variant: "primary",
      mode: "filled",
      size: "medium",
    },
  },
);

export const buttonIconVariants = cva("flex items-center justify-center", {
  variants: {
    size: {
      medium: "size-5 -mx-1",
      small: "size-5 -mx-1",
      xsmall: "size-5 -mx-1",
      xxsmall: "size-5 -mx-1",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, mode, size, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, mode, size, className }))}
        {...rest}
      />
    );
  },
);
Button.displayName = BUTTON_ROOT_NAME;

type ButtonIconProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> &
    VariantProps<typeof buttonIconVariants> & {
      as?: T;
    };

function ButtonIcon<T extends React.ElementType = "div">({
  as,
  size,
  className,
  ...rest
}: ButtonIconProps<T>) {
  const Comp = as || "div";
  return (
    <Comp className={cn(buttonIconVariants({ size, className }))} {...rest} />
  );
}
ButtonIcon.displayName = BUTTON_ICON_NAME;

const LoadingButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, mode, size, children, disabled, onClick, ...rest },
    ref,
  ) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setIsLoading(true);
      await (
        onClick as (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
      )?.(e);
      setIsLoading(false);
    };
    return (
      <Button
        ref={ref}
        className={cn(buttonVariants({ variant, mode, size, className }))}
        {...rest}
        onClick={handleClick}
        disabled={isLoading || disabled}
      >
        {isLoading ? (
          <RiLoader2Line className="size-4 animate-spin" />
        ) : (
          children
        )}
      </Button>
    );
  },
);
LoadingButton.displayName = "LoadingButton";

export { Button, ButtonIcon, LoadingButton };
