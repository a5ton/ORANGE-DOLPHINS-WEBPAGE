import { cn } from "@/lib/utils";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white",
  secondary:
    "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white",
  outline:
    "border-2 border-orange-500 text-orange-500 hover:bg-orange-500/5 active:bg-orange-500/10",
  ghost: "text-blue-500 hover:bg-blue-500/5 active:bg-blue-500/10",
  white: "bg-white hover:bg-grey-50 text-orange-500",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[0.85rem]",
  md: "px-6 py-2.75 text-[0.9rem]",
  lg: "px-8 py-3.5 text-[1rem]",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
