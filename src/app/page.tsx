// src/app/page.tsx
import Link from "next/link";
import Reveal from "../components/Reveal";
import Team from "@/components/Team";
import { ShieldCheck, Inbox, Headset, Radar } from "lucide-react";

const AGENTS = [
  {
    name: "Eco-Compliance Agent",
    desc: "Automates ESG/CSRD/GRI reporting, flags risks, and highlights circular economy opportunities.",
    Icon: ShieldCheck,
  },
  { name: "Inbox Copilot", desc: "Triage, draft, and route with CRM sync.", Icon: Inbox },
  { name: "Support Analyst", desc: "Instant answers from docs, tickets, and past chats.", Icon: Headset },
  { name: "Market Scanner", desc: "Monitor sources, summarize change, and flag risks/opportunities.", Icon: Radar },
];

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
        className="h-20 w-20 rounded-full md:h-24 md:w-24"
        style={{
          background: `conic-gradient(${dim} 0deg ${degMin}deg, ${bright} ${degMin}deg ${degMax}deg, ${rest} ${degMax}deg 360deg)`,
          WebkitMask: "radial-gradient(farthest-side, transparent 62%, black 63%)",
          mask: "radial-gradient(farthest-side, transparent 62%, black 63%)",
        }}
        aria-hidden
      />
      <div className="absolute text-sm font-semibold md:text-base">
        {a === b ? `${a}%` : `${a}–${b}%`}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      {/* -------------------- HERO */}
      <section id="home" className="relative min-h-[100svh] overflow-hidden">
        <div className="hero-scrim absolute inset-0 -z-10" aria-hidden />
        <div
          aria-hidden
          className="absolute bottom-0 left-1/2 -z-10 w-[110vw] -translate-x-1/2 overflow-hidden"
          style={{
            backgroundImage: "url('/art/mountains-hero.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundSize: "110vw auto",
            height: "clamp(220px, 40vw, 460px)",
            clipPath: "inset(0 8px 6px 0)",
          }}
        />
        <div className="container mx-auto px-6 pt-[16svh] pb-[26svh]">
          <div className="text-center md:sticky md:top-20">
            <h1
              className="font-semibold tracking-tight leading-[1.05]"
              style={{ fontSize: "var(--step-4)" }}
            >
              Summit Studios
            </h1>

            <Reveal delay={0.02}>
              <p className="measure mx-auto mt-4 text-[var(--step-0)] text-white/80">
                We blend social science + engineering to turn messy operations and compliance
                into measurable wins.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/brief" className="btn-primary">Start a brief →</Link>
                <Link href="/eco-compliance" className="btn-ghost">See Eco-Compliance →</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className="container mx-auto px-6 py-16 md:py-24 tech-grid">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Adoption-first", "Onboarding & change enablement so agents actually get used."],
            ["Guardrails", "Source-linked outputs, approvals, and evaluation loops."],
            ["Measured impact", "ROI-ranked actions, weekly digests, audit-ready exports."],
          ].map(([title, description]) => (
            <div key={title} className="glass-card p-6 md:p-8">
              <Reveal>
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">{description}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* TREES BAND / ECO-COMPLIANCE PROMO */}
      <section id="launch" className="relative overflow-hidden">
        <div aria-hidden className="eco-bg absolute inset-0 -z-10" />
        <div aria-hidden className="tree-band z-0" />
        <div className="launch-pad container mx-auto px-6 pb-24 md:pb-32">
          <Reveal><h2 className="section-title">Eco-Compliance Agent</h2></Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              ["Why it exists", "CSRD is heavy. The agent automates evidence collection & reporting so teams can focus on real reductions."],
              ["What you get", "ROI-ranked actions, regulator-ready exports, and a traceable audit trail with human approval gates."],
              ["Works with", "ERP/IoT/utility data, supplier files, and your internal APIs, no rip-and-replace required."],
            ].map(([title, desc], i) => (
              <div key={title} className="glass-card h-full p-6">
                <Reveal delay={0.05 + i * 0.05}>
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="mt-2 text-sm text-white/70">{desc}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/eco-compliance" className="btn-primary">Learn more</Link>
              <a href="#impact" className="btn-ghost">See impact</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal><h2 className="section-title">Impact, not just reports</h2></Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: "Energy", text: "5–15% reduction (mid-market case: ~500 tCO₂/year).", min: 5, max: 15 },
            { title: "Water", text: "10–20% sustained savings from agent-driven tasks.", min: 10, max: 20 },
            { title: "Operations", text: "≈75% reporting workload reduction (reinvested into actions).", min: 75, max: 75 },
          ].map((o, i) => (
            <div key={o.title} className="glass-card flex h-full items-center gap-5 p-6">
              <Donut min={o.min} max={o.max} />
              <Reveal delay={0.05 + i * 0.05}>
                <div>
                  <h3 className="font-semibold tracking-tight">{o.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{o.text}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/50">
          Ranges based on internal pilots;{" "}
          <Link href="/#contact" className="underline underline-offset-4">details on request</Link>.
        </p>
      </section>

      {/* SELECTED OUTCOMES */}
      <section id="work" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal><h2 className="section-title">Selected outcomes</h2></Reveal>
        <div className="mt-10 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {[
            {
              title: "Compliance Automation",
              desc: "–75% prep time (ESRS draft in <4 weeks) with automated ingestion and templated filings.",
              metric: "-75%", kicker: "prep time", tag: "Compliance",
            },
            {
              title: "Sustainability Insights",
              desc: "€250k annualized savings (supplier actions) identified across circular opportunities.",
              metric: "€250k", kicker: "annualized value", tag: "Sustainability",
            },
            {
              title: "Support Deflection",
              desc: "Faster answers, CSAT ↑ with a doc-trained MCP assistant over docs + tickets.",
              metric: "Faster", kicker: "answers • CSAT ↑", tag: "Support",
            },
            {
              title: "Forecasting",
              desc: "Weekly predictions with human-in-the-loop QA and clear performance monitoring.",
              metric: "Weekly", kicker: "predictions", tag: "Ops",
            },
          ].map((o, i) => (
            <article
              key={o.title}
              className={[
                "min-w-0 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6",
                "transition will-change-transform hover:-translate-y-0.5",
                "before:absolute before:inset-0 before:-z-10 before:opacity-0 hover:before:opacity-100",
                "before:bg-gradient-to-br before:from-white/8 before:to-transparent",
              ].join(" ")}
            >
              <Reveal delay={i * 0.05}>
                <div>
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] tracking-wide text-white/70">
                      {o.tag}
                    </span>
                    <svg className="size-4 text-white/30" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M10 1.5l1.6 4.4 4.9.2-3.9 2.9 1.4 4.6-4-2.7-4 2.7 1.4-4.6-3.9-2.9 4.9-.2L10 1.5z" />
                    </svg>
                  </div>

                  <div className="mt-4 flex items-end gap-2">
                    <div className="text-3xl font-semibold leading-none md:text-4xl">{o.metric}</div>
                    <div className="text-sm text-white/60 md:text-base">{o.kicker}</div>
                  </div>

                  <h3 className="mt-3 font-medium">{o.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{o.desc}</p>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="services" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal><h2 className="section-title">Capabilities</h2></Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {([
            ["Problem Discovery", "Stakeholder interviews, process mapping, and ROI modeling to define the right problem before any build."],
            ["Data Analysis", "Audits, cleaning, feature engineering, and causal/behavioral insights to turn raw data into decisions."],
            ["Machine Learning", "Classification, forecasting, clustering, and evaluation loops—simple first, then scale what works."],
            ["AI Automations", "Integrations with Slack, Gmail, Notion, HubSpot, and your APIs to remove busywork and create leverage."],
            ["Custom AI Agents", "Retrieval over your knowledge base, tool use, guardrails, and analytics; scoped for safety, cost, and outcomes."],
            ["Full-Stack Development", "Design, frontend, backend, dashboards, auth, billing, and deploy; we ship product, not prototypes."],
          ] as [string, string][])
            .map(([title, desc], i) => (
              <div key={title} className="glass-card h-full p-6">
                <Reveal delay={i * 0.05}>
                  <div>
                    <h3 className="font-semibold tracking-tight">{title}</h3>
                    <p className="mt-2 text-[var(--step--1)] text-white/70">{desc}</p>
                  </div>
                </Reveal>
              </div>
            ))}
        </div>
      </section>

      {/* PREBUILT AGENTS (with icons) */}
      <section id="agents" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal><h2 className="section-title">Prebuilt agents we tailor to you</h2></Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AGENTS.map(({ name, desc, Icon }, i) => (
            <article
              key={name}
              className="group glass-card p-6 transition will-change-transform hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Reveal delay={i * 0.05}>
                <div>
                  {/* icon well */}
                  <div className="mb-4 aspect-[16/10] rounded-xl relative overflow-hidden bg-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" aria-hidden />
                    <Icon
                      aria-hidden
                      className="absolute inset-0 m-auto size-12 md:size-14 text-white/50 transition group-hover:text-white/70"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="text-lg font-medium group-hover:underline/20">{name}</h3>
                  <p className="text-sm text-white/70">{desc}</p>
                </div>
              </Reveal>
            </article>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-10">
            <Link href="/eco-compliance" className="btn-primary">Learn more about Eco-Compliance</Link>
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section id="about" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal><h2 className="section-title">How we work</h2></Reveal>
        <Reveal delay={0.1}>
          <ol className="mt-8 space-y-6">
            {[
              ["01 — Define", "Align on the problem, users, data, and success metrics. If the ROI isn’t clear, we revise scope."],
              ["02 — Prototype", "A working POC with real data and users. Simple first, then compound wins."],
              ["03 — Ship & Scale", "Harden, integrate, train your team, and monitor. We iterate on measured impact."],
            ].map(([step, desc]) => (
              <li key={step} className="flex gap-4">
                <div className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 text-xs">
                  {step.slice(0, 2)}
                </div>
                <div>
                  <h3 className="font-medium">{step}</h3>
                  <p className="text-sm text-white/70">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* TEAM */}
      <Team />

      {/* CONTACT */}
      <section id="contact" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <div className="glass-card p-8 text-center md:p-12">
            <h2 className="text-2xl font-semibold md:text-3xl">Tell us the problem. We’ll scope the win.</h2>
            <p className="mt-3 text-white/70">
              Share your goal, data sources, and timeline. We’ll respond with an approach and estimate.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/brief" className="btn-primary">Start a brief</Link>
              <Link href="/eco-compliance" className="btn-ghost">Learn more about the agent</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
