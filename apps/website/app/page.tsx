// apps/website/app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* ===== OVERVIEW (Hero) ===== */}
      <section id="overview" className="relative overflow-hidden">
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

              <ul className="mt-6 space-y-2 text-slate-600">
                <li>• Per-scan nonce prevents replay; signed requests stop tampering</li>
                <li>• Item registry, ownership transfer, and full audit trail</li>
   
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#get-started" className="rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800">
                  Start free pilot
                </a>
                <a href="#how" className="rounded-xl border border-slate-300 px-5 py-3 transition hover:bg-slate-50">
                  How it works
                </a>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-1 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/auth_demo.png"
                  alt="OneTrue operator console and mobile scan flow"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-slate-500">Operator Console + Mobile Scan Flow</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY ===== */}
      <section id="why" className="border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Why OneTrue</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature title="Verify with Confidence" desc="Per-scan nonce + rules engine + signatures prevent replay and tampering." />
            <Feature title="Provenance & Ownership" desc="Track item history and transfer to the next owner with auditable records." />
            <Feature title="Enterprise-Ready" desc="Trusted security, reliability, and scale to support your business from pilot to global rollout."/>     
           </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold">Where it fits</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Pill>Luxury goods & collectibles</Pill>
              <Pill>Warehouse & retail operations</Pill>
              <Pill>Resale marketplaces</Pill>
              <Pill>Warranty & service records</Pill>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW ===== */}
      <section id="how" className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Step n="1" title="Register & bind" desc="Create an item in the registry and bind a tag (RFID/QR). Publish a verifiable passport." />
            <Step n="2" title="Scan with nonce" desc="The app requests a per-scan nonce, reads the tag, signs the request, and submits for verification." />
            <Step n="3" title="Verify & transfer" desc="Server validates signatures and rules, logs the event, returns a verdict, and can transfer ownership." />
          </div>


        </div>
      </section>


      {/* ===== CTA (Get started) ===== */}
      <section id="get-started" className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h3 className="text-2xl font-semibold">Ready to pilot OneTrue?</h3>
          <p className="mt-3 text-slate-600">Set up your first registry and scan flow in under an hour.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/signup" className="rounded-xl bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800">
              Start free pilot
            </Link>
            <Link href="/contact" className="rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-slate-50">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
          © {new Date().getFullYear()} OneTrue. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

/* ---------- Little components ---------- */

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm">{n}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600">{desc}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700">
      {children}
    </span>
  );
}
