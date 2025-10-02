"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // close helpers
  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  // scroll state → deepen glass + add subtle shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll when mobile nav is open + close on Esc
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const navLinks: { href: string; label: string }[] = [
    { href: "/eco-compliance", label: "Eco-Compliance" },
    { href: "/#work", label: "Work" },
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "/#team", label: "Team" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-white/10 backdrop-blur transition-colors",
        "supports-[backdrop-filter]:bg-black/40",
        scrolled ? "bg-black/50" : "bg-black/30",
      ].join(" ")}
    >
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        {/* Logo / Brand */}
        <Link href="/#home" className="font-medium tracking-tight" onClick={close}>
          summit<span className="text-white/60">studios</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link" onClick={close}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/brief" className="btn-primary text-xs" onClick={close}>
            Brief
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 md:hidden"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* Mobile sheet + overlay */}
      {/* overlay */}
      {open && (
        <button
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          aria-label="Close menu overlay"
          onClick={close}
        />
      )}

      {/* panel */}
      <div
        id="mobile-nav"
        className={[
          "md:hidden z-50 border-t border-white/10 bg-black/80 backdrop-blur-sm",
          "transition-[transform,opacity] duration-200",
          open ? "opacity-100 translate-y-0" : "pointer-events-none -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <div className="container mx-auto grid gap-3 px-6 py-4 text-sm">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} className="nav-link">
              {l.label}
            </Link>
          ))}
          <Link href="/brief" onClick={close} className="btn-primary w-fit text-xs">
            Brief
          </Link>
        </div>
      </div>
    </header>
  );
}
