// src/app/eco-compliance/page.tsx
import Link from "next/link";
import Reveal from "../../components/Reveal";

function Donut({ min, max }: { min: number; max: number }) {
  const clamp = (v: number) => Math.max(0, Math.min(100, v));
  const a = clamp(min);
  const b = clamp(max);
  const degMin = (a / 100) * 360;
  const degMax = (b / 100) * 360;
  const dim = "rgba(34,197,94,0.35)";
  const bright = "rgba(34,197,94,0.95)";
  const rest = "rgba(255,255,255,0.06)";
  return (
    <div className="relative grid place-items-center">
      <div
        className="w-16 h-16 md:w-20 md:h-20 rounded-full"
        style={{
          background: `conic-gradient(${dim} 0deg ${degMin}deg, ${bright} ${degMin}deg ${degMax}deg, ${rest} ${degMax}deg 360deg)`,
          WebkitMask: "radial-gradient(farthest-side, transparent 62%, black 63%)",
          mask: "radial-gradient(farthest-side, transparent 62%, black 63%)",
        }}
        aria-hidden
      />
      <div className="absolute text-xs md:text-sm font-semibold">
        {a === b ? `${a}%` : `${a}–${b}%`}
      </div>
    </div>
  );
}

export default function EcoCompliancePage() {
  const howItWorks: [string, string][] = [
    ["Connect data", "Secure connectors for ERP, IoT, invoices & supplier files. Auto-normalize and version evidence."],
    ["Scan & map", "Assess against CSRD/ESRS. Identify gaps, hotspots, and data coverage in minutes."],
    ["Recommend & act", "Generate ROI-ranked actions, owners, and timelines. Automate report sections."],
    ["Benchmark", "Compare sites & suppliers. Track materiality and trend movements over time."],
    ["Monitor", "Dashboards, alerts and weekly digests. Human-in-the-loop approvals by default."],
    ["Audit trail", "Every change is traceable; optional immutable log for regulator-ready evidence."],
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10 eco-bg" />

      {/* HERO */}
      <section className="container mx-auto px-6 pt-16 md:pt-24 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Eco-Compliance Agent</h1>
        <p className="text-white/70 mt-3 max-w-2xl">
          Automate CSRD evidence & reporting, uncover savings, and keep a traceable audit trail. Built for teams that want
          measurable impact, not just documents.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {/* same-page fragments can stay as <a> */}
          <a href="#how" className="btn-primary">How it works</a>
          <a href="#pilot" className="btn-ghost">Pilot details</a>
          <a href="#security" className="btn-ghost">Security</a>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-card p-6 flex items-center gap-4">
            <Donut min={5} max={15} />
            <div>
              <h3 className="font-medium">Energy</h3>
              <p className="text-white/70 text-sm">5–15% reduction potential with site-level actions.</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-center gap-4">
            <Donut min={10} max={20} />
            <div>
              <h3 className="font-medium">Water</h3>
              <p className="text-white/70 text-sm">10–20% sustained savings via agent-driven tasks.</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-center gap-4">
            <Donut min={75} max={75} />
            <div>
              <h3 className="font-medium">Operations</h3>
              <p className="text-white/70 text-sm">~75% reporting workload reduction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="container mx-auto px-6 py-16 md:py-24">
        <Reveal><h2 className="section-title">How it works</h2></Reveal>
        <Reveal delay={0.05}>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {howItWorks.map(([title, desc], i) => (
              <li key={title} className="glass-card p-6">
                <div className="size-8 rounded-full border border-white/10 grid place-items-center text-xs mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold tracking-tight">{title}</h3>
                <p className="text-white/70 text-sm mt-2">{desc}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* PILOT */}
      <section id="pilot" className="container mx-auto px-6 py-16 md:py-24">
        <Reveal><h2 className="section-title">Pilot at a glance</h2></Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="glass-card p-6 h-full">
              <h3 className="font-medium">Timeline</h3>
              <p className="text-white/70 text-sm mt-2">4–6 weeks. Week 1 onboarding, week 2–3 data, week 4 impact readout.</p>
            </div>
            <div className="glass-card p-6 h-full">
              <h3 className="font-medium">Success criteria</h3>
              <p className="text-white/70 text-sm mt-2">Agreed up front: % workload reduction, % data coverage, draft CSRD sections.</p>
            </div>
            <div className="glass-card p-6 h-full">
              <h3 className="font-medium">Deliverables</h3>
              <p className="text-white/70 text-sm mt-2">Actions & savings, compliance gap map, report exports, audit trail, rollout plan.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8">
            {/* INTERNAL route → Link */}
            <Link href="/brief" className="btn-primary">Get pilot scope</Link>
          </div>
        </Reveal>
      </section>

      {/* SECURITY */}
      <section id="security" className="container mx-auto px-6 py-16 md:py-24">
        <Reveal><h2 className="section-title">Security & auditability</h2></Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="glass-card p-6 h-full">
              <h3 className="font-medium">Data & access</h3>
              <p className="text-white/70 text-sm mt-2">
                Role-based access, least-privilege by default. Evidence versioning and export. No surprise data movement.
              </p>
            </div>
            <div className="glass-card p-6 h-full">
              <h3 className="font-medium">Model guardrails</h3>
              <p className="text-white/70 text-sm mt-2">
                Source-linked outputs, approval gates, and evaluation loops. Every change is attributable and reversible.
              </p>
            </div>
            <div className="glass-card p-6 h-full">
              <h3 className="font-medium">Compliance posture</h3>
              <p className="text-white/70 text-sm mt-2">
                CSRD/ESRS mapping, audit-ready exports, and regulator-friendly evidence bundles for reviews.
              </p>
            </div>
            <div className="glass-card p-6 h-full">
              <h3 className="font-medium">Optional on-chain log</h3>
              <p className="text-white/70 text-sm mt-2">
                Tamper-evident records for high-assurance environments. Off by default; enable when your policy requires it.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ICP */}
      <section id="fit" className="container mx-auto px-6 py-16 md:py-24">
        <Reveal><h2 className="section-title">Who it’s for</h2></Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["EU/UK companies facing CSRD", "Groups preparing 2025–2026 reporting with distributed data across sites & suppliers."],
              ["Ops & sustainability leaders", "Who need reporting done, but also real reductions and ROI-ranked actions."],
              ["IT & compliance teams", "Who want guardrails, auditability, and minimal change-management friction."],
            ].map(([title, desc]) => (
              <div key={title} className="glass-card p-6 h-full">
                <h3 className="font-medium">{title}</h3>
                <p className="text-white/70 text-sm mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <Reveal>
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">See the agent in action</h2>
            <p className="text-white/70 mt-3">Book a quick demo or send your context—we’ll scope a pilot you can measure.</p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/brief" className="btn-primary">Start a brief</Link>
              <Link href="/#contact" className="btn-ghost">Contact us</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
