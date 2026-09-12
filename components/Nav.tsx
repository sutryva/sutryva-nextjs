"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-graphite-900/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-2 font-display font-bold text-lg tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-cobalt" />
          sutryva
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm text-graphite-200/80 font-body">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-1 bg-cobalt hover:bg-deep-cobalt text-white rounded-md font-body text-sm font-medium px-4 py-2 transition-colors"
          >
            Start a project <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-graphite-900 px-6 py-4 space-y-3">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-graphite-200/80 font-body text-sm">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block text-cobalt font-semibold text-sm pt-1">
            Start a project →
          </a>
        </div>
      )}
    </header>
  );
}
