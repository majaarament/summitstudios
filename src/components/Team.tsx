"use client";
import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

type Member = {
  name: string;
  role: string;
  email: string;
  img: string;
  link?: string;
};

const TEAM: Member[] = [
  {
    name: "Maja Arament",
    role: "Co-founder",
    email: "maja@summitstudios.com",
    img: "/team/maja.jpg",
    link: "https://www.linkedin.com/in/majaarament",
  },
  {
    name: "Emilie Taffouraud",
    role: "Co-founder",
    email: "emilie@summitstudios.com",
    img: "/team/emilie.jpg",
    link: "https://www.linkedin.com/in/emilietaffouraud/",
  },
];

export default function Team() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleEmail = (email: string) => {
    // Build at click-time so it's not visible in the DOM
    const [user, domain] = email.split("@");
    window.location.href = `mailto:${user}@${domain}`;
  };

  const handleCopy = async (email: string, name: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(name);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      // clipboard not available — no-op
    }
  };

  return (
    <section id="team" className="container mx-auto px-6 py-24 md:py-32">
      <Reveal>
        <h2 className="section-title">Team</h2>
      </Reveal>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.05}>
            <article className="rounded-2xl border border-white/10 p-6 text-center hover:bg-white/5 transition">
              <div className="mx-auto size-28 md:size-32 rounded-full overflow-hidden ring-1 ring-white/10">
                <Image
                  src={m.img}
                  alt={m.name}
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-4 font-medium">{m.name}</h3>
              <p className="text-white/60 text-sm">{m.role}</p>

              {/* Actions (no raw email text shown) */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {m.link && (
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost !px-3 !py-1.5 text-xs"
                    aria-label={`Open ${m.name}'s profile`}
                  >
                    View profile
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => handleEmail(m.email)}
                  className="btn-primary !px-3 !py-1.5 text-xs"
                  aria-label={`Email ${m.name}`}
                  title={`Email ${m.name}`}
                >
                  Email
                </button>

                <button
                  type="button"
                  onClick={() => handleCopy(m.email, m.name)}
                  className="btn-ghost !px-3 !py-1.5 text-xs"
                  aria-label={`Copy email for ${m.name}`}
                  title={copied === m.name ? "Copied!" : "Copy email"}
                >
                  {copied === m.name ? "Copied" : "Copy"}
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
