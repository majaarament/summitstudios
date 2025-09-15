import Reveal from "../components/Reveal";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="container mx-auto px-6 min-h-[80svh] grid place-items-center text-center">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              AI products that start with the <span className="text-white/70">right problem</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl mx-auto text-white/70">
              We’re computational social scientists who design, analyze, and ship.
              From problem definition and data analysis to machine learning, automations, and full-stack apps—we build AI that actually moves metrics.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="/brief" className="btn-primary">Start a brief</a>
              <a href="#services" className="btn-ghost">What we deliver</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="section-title">Capabilities</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Problem Discovery",
              "Stakeholder interviews, process mapping, and ROI modeling to define the right problem—before we write a line of code."
            ],
            [
              "Data Analysis",
              "Data audits, cleaning, feature engineering, causal/behavioral insights. Turn raw data into decisions."
            ],
            [
              "Machine Learning",
              "Classification, forecasting, clustering, evaluation loops. We pick simple models first—then escalate when it pays off."
            ],
            [
              "AI Automations",
              "Integrate with Slack, Gmail, Notion, HubSpot & your APIs. Agents and workflows that cut busywork and create leverage."
            ],
            [
              "Custom AI Agents",
              "Retrieval over your knowledge base, tool use, guardrails, analytics. Scoped for safety, cost, and measurable outcomes."
            ],
            [
              "Full-Stack Development",
              "Design, frontend, backend, dashboards, auth, billing, and deploy. We ship product, not prototypes."
            ],
          ].map(([title, desc], i) => (
            <Reveal key={title as string} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 p-6 h-full">
                <h3 className="font-medium">{title}</h3>
                <p className="text-white/60 mt-2 text-sm">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PREBUILT AGENTS */}
      <section id="agents" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="section-title">Prebuilt agents we tailor to you</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Inbox Copilot", "Triage, draft, and route with CRM sync."],
            ["Support Analyst", "Instant answers from docs, tickets, and past chats."],
            ["Market Scanner", "Monitor sources, summarize change, flag risks/opps."],
            ["Ops Automator", "Move data between tools, update records, nudge owners."],
          ].map(([name, desc], i) => (
            <Reveal key={name as string} delay={i * 0.05}>
              <article className="group rounded-2xl border border-white/10 p-6 hover:bg-white/5 transition">
                <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-white/10 to-transparent mb-4" aria-hidden />
                <h3 className="text-lg font-medium">{name}</h3>
                <p className="text-sm text-white/60">{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.25}>
          <div className="mt-10">
            <a href="/brief" className="btn-primary">Apply an agent to my workflow</a>
          </div>
        </Reveal>
      </section>

      {/* CASE STUDIES */}
      <section id="work" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="section-title">Selected outcomes</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            ["Lead Prioritization", "Lifted reply rates by 22% with a data-enriched scoring model and AI-drafted outreach."],
            ["Ops Automation", "Cut manual processing time by 40% via multi-step approvals and system integrations."],
            ["Support Deflection", "Deployed a RAG assistant trained on docs + tickets; faster answers, higher CSAT."],
            ["Forecasting", "Weekly demand predictions with clear performance monitoring and human-in-the-loop review."],
          ].map(([name, result], i) => (
            <Reveal key={name as string} delay={i * 0.05}>
              <article className="group rounded-2xl border border-white/10 p-6 hover:bg-white/5 transition">
                <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-white/10 to-transparent mb-4" aria-hidden />
                <h3 className="text-lg font-medium">{name}</h3>
                <p className="text-sm text-white/60">{result}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="about" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="section-title">How we work</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ol className="mt-8 space-y-6">
            {[
              ["01 — Define", "We align on the problem, users, data, and success metrics. If the ROI isn’t clear, we revise scope."],
              ["02 — Prototype", "A working POC with real data and users. Simple first, then compound wins."],
              ["03 — Ship & Scale", "Harden, integrate, train your team, and monitor. We iterate on measured impact."],
            ].map(([step, desc]) => (
              <li key={step as string} className="flex gap-4">
                <div className="size-8 shrink-0 rounded-full border border-white/10 grid place-items-center text-xs">
                  {(step as string).slice(0,2)}
                </div>
                <div>
                  <h3 className="font-medium">{step}</h3>
                  <p className="text-white/60 text-sm">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* STACK */}
      <section id="stack" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="section-title">Stack & integrations</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-white/60 mt-4 max-w-3xl">
            Next.js • TypeScript • Python • Postgres • Prisma • Vercel • AWS • Docker • RAG • Vector DBs • Slack • Notion • HubSpot • Google Workspace • Your internal APIs.
          </p>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <div className="rounded-2xl border border-white/10 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Tell us the problem. We’ll scope the win.</h2>
            <p className="text-white/70 mt-3">
              Share your goal, data sources, and timeline—we’ll respond with an approach and estimate.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="/brief" className="btn-primary">Start a brief</a>
              <a href="#services" className="btn-ghost">See capabilities</a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
