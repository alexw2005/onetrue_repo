import * as React from "react";
import { cn } from "../../utils/cn";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export const Button: React.FC<ButtonProps> = ({ variant = "primary", className, ...props }) => {
  const base = "rounded-xl px-4 py-2 text-sm transition";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "border border-slate-300 hover:bg-slate-50";
  return <button className={cn(base, styles, className)} {...props} />;
};
