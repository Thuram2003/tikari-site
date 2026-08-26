"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-95 rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-tikari-green text-white hover:bg-tikari-green-light shadow-[0_10px_30px_-10px_rgba(27,67,50,0.15)] hover:shadow-[0_15px_40px_-10px_rgba(27,67,50,0.25)]",
        secondary: "bg-tikari-gold text-white hover:bg-tikari-gold-dark shadow-[0_10px_30px_-10px_rgba(206,160,88,0.15)] hover:shadow-[0_15px_40px_-10px_rgba(206,160,88,0.25)]",
        outline: "bg-white/90 backdrop-blur-sm border border-tikari-green text-tikari-green hover:bg-tikari-green hover:text-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]",
        ghost: "bg-transparent text-tikari-green hover:bg-tikari-sage-light hover:text-tikari-green-dark",
        sage: "bg-tikari-sage text-white hover:bg-tikari-green-light shadow-[0_10px_30px_-10px_rgba(142,168,157,0.15)]",
        cream: "bg-tikari-cream text-tikari-green hover:bg-tikari-sage-light border border-tikari-green/10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]",
      },
      size: {
        default: "px-6 py-3 has-[>svg]:px-5",
        sm: "gap-1.5 px-4 py-2 has-[>svg]:px-3 text-xs",
        lg: "px-8 py-3.5 has-[>svg]:px-6 text-base",
        xl: "px-10 py-4 has-[>svg]:px-8 text-lg",
        icon: "size-10",
        "icon-sm": "size-9",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

function Button({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  href,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  if (href && !asChild) {
    return (
      <a
        href={href}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonVariants({ variant, size, className }))}
        {...(props as any)}
      >
        {props.children}
      </a>
    );
  }

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export default Button;
