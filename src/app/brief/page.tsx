"use client";

import { useState } from "react";

export default function BriefPage() {
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    await fetch("/api/brief", { method: "POST", body: form });
    setSent(true);
  }

  if (sent) {
    return (
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-semibold">Thanks — we’ll be in touch.</h1>
        <p className="text-white/70 mt-4">
          We usually reply within one business day.
        </p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-6 py-24">
      <h1 className="text-3xl md:text-4xl font-semibold">Project brief</h1>
      <form onSubmit={submit} className="mt-10 grid gap-6 max-w-2xl">
        <input name="name" placeholder="Your name" className="input" required />
        <input name="email" placeholder="Email" className="input" type="email" required />
        <input name="company" placeholder="Company" className="input" />
        <textarea name="summary" placeholder="What are you building?" className="input min-h-32" />
        <button className="btn-primary w-fit">Send brief</button>
      </form>
    </main>
  );
}
