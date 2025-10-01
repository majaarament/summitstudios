"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/#home" className="font-medium" onClick={close}>
          summit<span className="text-white/60">studios</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/eco-compliance" className="nav-link">Eco-Compliance</Link>
          <Link href="/#work" className="nav-link">Work</Link>
          <Link href="/#services" className="nav-link">Services</Link>
          <Link href="/#about" className="nav-link">About</Link>
          <Link href="/#team" className="nav-link">Team</Link>
          <Link href="/#contact" className="nav-link">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/brief" className="btn-ghost text-xs">Brief</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-1 text-sm"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur"
        >
          <div className="container mx-auto px-6 py-3 grid gap-3 text-sm">
            <Link href="/eco-compliance" onClick={close} className="nav-link">Eco-Compliance</Link>
            <Link href="/#work" onClick={close} className="nav-link">Work</Link>
            <Link href="/#services" onClick={close} className="nav-link">Services</Link>
            <Link href="/#about" onClick={close} className="nav-link">About</Link>
            <Link href="/#team" onClick={close} className="nav-link">Team</Link>
            <Link href="/#contact" onClick={close} className="nav-link">Contact</Link>
            <Link href="/brief" onClick={close} className="btn-ghost w-fit text-xs">Brief</Link>
          </div>
        </div>
      )}
    </header>
  );
}
