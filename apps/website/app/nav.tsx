// apps/website/app/layout.tsx
import "./globals.css";
// apps/website/app/nav.tsx
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
<Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight hover:opacity-80 transition">
  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-sm">
    1T
  </span>
  <span>
    <span className="text-slate-900">One</span><span className="text-blue-600">True</span>
  </span>
</Link>
          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-900 transition">
              How it works
            </a>
            <a href="#get-started" className="text-sm text-slate-600 hover:text-slate-900 transition">
              Get started
            </a>
  
            <Link href="/signin" className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800 transition">
              Sign in
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}