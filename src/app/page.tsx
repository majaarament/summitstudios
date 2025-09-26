import Reveal from "../components/Reveal";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="container mx-auto px-6 min-h-[80svh] grid place-items-center text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <img src="/logo.png" alt="Summit Studios" className="h-18 md:h-16 opacity-90" />
            </div>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Summit Studios, amplifying human capabilities.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl mx-auto text-white/70">
              We start with real human problems, then blend social science and technology to build AI agents that turn complexity into clear, measurable action.
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

      {/* OVERVIEW */}
      <section id="overview" className="container mx-auto px-6 py-16 md:py-24">
        <Reveal>
          <div className="rounded-2xl border border-white/10 p-6 md:p-8">
            <p className="text-white/70 max-w-4xl mx-auto">
              Our platform scales from a single agent to an ecosystem across management, sales, marketing, and sustainability. We focus on adoption, not hype, onboarding and change enablement are built in so agents actually get used.
            </p>
          </div>
        </Reveal>
      </section>

      {/* LAUNCH PRODUCT */}
      <section id="launch" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="section-title">Launch product: Eco‑Compliance Agent</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-6 h-full">
              <h3 className="font-medium">Ingests data</h3>
              <p className="text-white/60 mt-2 text-sm">IoT, ERP, invoices, supplier spreadsheets.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 h-full">
              <h3 className="font-medium">Understands impact</h3>
              <p className="text-white/60 mt-2 text-sm">Learns drivers of energy, water, waste, emissions.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 h-full">
              <h3 className="font-medium">Finds actions</h3>
              <p className="text-white/60 mt-2 text-sm">Uncovers savings & circular‑economy opportunities; automates compliance reporting (CSRD/ESG).</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-6 h-full">
              <h3 className="font-medium">Compliance core</h3>
              <p className="text-white/60 mt-2 text-sm">CSRD/ESRS alignment, risk scoring, auditability.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 h-full">
              <h3 className="font-medium">Optimization</h3>
              <p className="text-white/60 mt-2 text-sm">ROI‑backed actions, benchmarks, partner integrations.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/brief" className="btn-primary">Pilot the Eco‑Compliance Agent</a>
            <a href="#impact" className="btn-ghost">See impact</a>
          </div>
        </Reveal>
      </section>

      {/* CAPABILITIES */}
      <section id="services" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="section-title">Capabilities</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Problem Discovery",
              "Stakeholder interviews, process mapping, and ROI modeling to define the right problem before any build."
            ],
            [
              "Data Analysis",
              "Audits, cleaning, feature engineering, and causal/behavioral insights to turn raw data into decisions."
            ],
            [
              "Machine Learning",
              "Classification, forecasting, clustering, and evaluation loops, simple first, then scale what works."
            ],
            [
              "AI Automations",
              "Integrations with Slack, Gmail, Notion, HubSpot, and your APIs to remove busywork and create leverage."
            ],
            [
              "Custom AI Agents",
              "Retrieval over your knowledge base, tool use, guardrails, and analytics; scoped for safety, cost, and outcomes."
            ],
            [
              "Full‑Stack Development",
              "Design, frontend, backend, dashboards, auth, billing, and deploy; we ship product, not prototypes."
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
            ["Eco‑Compliance Agent", "Automates ESG/CSRD/GRI reporting, flags risks, and highlights circular economy opportunities."],
            ["Inbox Copilot", "Triage, draft, and route with CRM sync."],
            ["Support Analyst", "Instant answers from docs, tickets, and past chats."],
            ["Market Scanner", "Monitor sources, summarize change, and flag risks/opportunities."],
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

      {/* IMPACT */}
      <section id="impact" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="section-title">Impact, not just reports</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[ 
            ["Energy", "5–15% reduction; up to 500 tons CO₂ saved annually for a mid‑sized company."],
            ["Water", "10–20% savings sustained via agent‑driven actions."],
            ["Operations", "~75% reporting workload reduction—teams focus on action, not admin."],
          ].map(([label, text], i) => (
            <Reveal key={label as string} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 p-6 h-full">
                <h3 className="font-medium">{label}</h3>
                <p className="text-white/60 mt-2 text-sm">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section id="work" className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="section-title">Selected outcomes</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            ["Compliance Automation", "Cut reporting prep time by 75% with automated data ingestion and templated filings."],
            ["Sustainability Insights", "Identified cost‑savings and circular opportunities worth €250k annually across suppliers."],
            ["Support Deflection", "Deployed a MCP assistant trained on docs + tickets; faster answers, higher CSAT."],
            ["Forecasting", "Weekly demand predictions with clear performance monitoring and human‑in‑the‑loop review."],
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
              ["01 — Define", "Align on the problem, users, data, and success metrics. If the ROI isn’t clear, we revise scope."],
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
              Share your goal, data sources, and timeline. We’ll respond with an approach and estimate.
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
