export const metadata = { title: "OneTrue Marketplace", description: "Buy & Verify" };
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="min-h-screen bg-white text-slate-900">{children}</body></html>);
}
