"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#home" className="font-medium">summit<span className="text-white/60">studio</span></a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#work" className="nav-link">Work</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <a href="/brief" className="btn-ghost text-xs">Brief</a>
      </div>
    </header>
  );
}
