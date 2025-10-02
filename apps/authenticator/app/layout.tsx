export const metadata = { title: "OneTrue Authenticator", description: "Ops console" };
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="min-h-screen bg-slate-50 text-slate-900">{children}</body></html>);
}
