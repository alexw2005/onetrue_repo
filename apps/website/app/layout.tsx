import "./globals.css";
import Nav from "./nav";

export const metadata = { title: "OneTrue", description: "Born authentic. Proven at every step." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <Nav />
        {children}
      </body>
    </html>
  );
}