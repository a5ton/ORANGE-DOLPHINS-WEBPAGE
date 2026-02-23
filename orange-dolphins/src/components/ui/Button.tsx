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
    "bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white shadow-md",
  secondary:
    "bg-ocean-700 hover:bg-ocean-900 active:bg-ocean-900 text-white shadow-md",
  outline:
    "border-2 border-orange-500 text-orange-500 hover:bg-orange-50 active:bg-orange-100",
  ghost: "text-ocean-700 hover:bg-ocean-50 active:bg-ocean-100",
  white: "bg-white hover:bg-orange-50 text-orange-500 shadow-md",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
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
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
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
