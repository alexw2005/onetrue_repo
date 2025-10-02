import * as React from "react";
import { cn } from "../../utils/cn";

export type NavItem = { label: string; href: string };
export type NavbarProps = {
  brand?: React.ReactNode;
  items?: NavItem[];
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ brand = "OneTrue", items = [], className }) => {
  return (
    <header className={cn("border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60", className)}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="font-semibold">{brand}</a>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="hover:text-slate-900">
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
