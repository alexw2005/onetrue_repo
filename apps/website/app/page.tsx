import Link from "next/link";
import Image from "next/image";
import { Card, Button } from "@onetrue/ui";

export default function Page() {
  return (
    <main className="min-h-screen">
    

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Born authentic. Proven at every step.
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                OneTrue is <span className="font-semibold text-slate-900">Authentication-as-a-Service</span> for physical goods.
                Verify authenticity, track provenance, and transfer ownership—securely.
              </p>
              <div className="mt-8 flex gap-3">
                <a
                  href="#get-started"
                  className="rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition"
                >
                  Get started
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-xl border border-slate-300 px-5 py-3 hover:bg-slate-50 transition"
                >
                  How it works
                </a>
              </div>
            </div>
      <div className="rounded-2xl border bg-white p-1 shadow-sm">
        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden relative">
          <Image 
            src="/images/auth_demo.png" 
            alt="OneTrue operator console and mobile scan flow"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-center text-sm text-slate-500">
          Operator Console + Mobile Scan Flow
        </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section id="how-it-works" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Why OneTrue</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature title="Verify with Confidence" desc="Per-scan nonce + rules engine + signatures prevent replay and tampering." />
            <Feature title="Provenance & Ownership" desc="Track item history; transfer to the next owner with auditable records." />
            <Feature title="Enterprise-Ready" desc="Cognito SSO, AWS WAF, CloudWatch/X-Ray, S3/CloudFront—built to scale." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h3 className="text-2xl font-semibold">Ready to pilot OneTrue?</h3>
          <p className="mt-3 text-slate-600">
            Set up your first registry and scan flow in under an hour.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/signup"
              className="rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800 transition"
            >
              Start free pilot
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-300 px-6 py-3 hover:bg-slate-50 transition"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
          © {new Date().getFullYear()} OneTrue. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}