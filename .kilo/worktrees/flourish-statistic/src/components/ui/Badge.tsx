import * as React from "react";

type Variant = "default" | "lime" | "blue" | "gray";
type Size = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  default: "bg-brand-gray-soft text-brand-black border border-brand-gray-border",
  lime: "bg-brand-lime text-brand-black",
  blue: "bg-brand-blue text-white",
  gray: "bg-[#F1F5F9] text-brand-black/80",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-5 px-2 text-xs",
  md: "h-6 px-2.5 text-xs",
};

export function Badge({
  className = "",
  variant = "default",
  size = "sm",
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center rounded-pill font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ")}
      {...props}
    />
  );
}
