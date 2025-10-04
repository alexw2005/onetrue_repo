// apps/website/app/nav.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // Close on Esc and when resizing to md+
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="block rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 md:px-3 md:py-2"
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-lg"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-sm">1T</span>
          <span>
            <span className="text-slate-900">One</span>
            <span className="text-blue-600">True</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink href="#overview">Overview</NavLink>
            </li>
            <li>
              <NavLink href="#why">Why OneTrue</NavLink>
            </li>
            <li>
              <NavLink href="#how">How it works</NavLink>
            </li>
            <li>
              <NavLink href="#get-started">Get Started</NavLink>
            </li>
            <li>
              <Link
                href="/signin"
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden rounded-xl border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <span className="inline-block h-5 w-5">
            <span className={`block h-0.5 w-5 bg-slate-900 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`mt-1 block h-0.5 w-5 bg-slate-900 transition ${open ? "opacity-0" : ""}`} />
            <span className={`mt-1 block h-0.5 w-5 bg-slate-900 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/20 transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t bg-white transition-[max-height,opacity] duration-200 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 py-2">
          <ul className="flex flex-col divide-y divide-slate-200">
            <li><NavLink href="#overview">Overview</NavLink></li>
            <li><NavLink href="#why">Why OneTrue</NavLink></li>
            <li><NavLink href="#how">How it works</NavLink></li>
            <li><NavLink href="#get-started">Get Started</NavLink></li>
            <li className="py-2">
              <Link
                href="/signin"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-slate-900 px-4 py-3 text-center text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
