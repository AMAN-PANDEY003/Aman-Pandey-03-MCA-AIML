import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { navItems, profile } from '@/data/portfolio';
import { useActiveSection, useScrolled } from '@/hooks/useReveal';

export function Navbar() {
  const scrolled = useScrolled(16);
  const active = useActiveSection(navItems.map((n) => n.href.slice(1)));
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Aman Pandey — home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-500/30 bg-accent-500/10 font-mono text-sm font-semibold text-accent-300 transition-colors group-hover:border-accent-500/60">
            AP
          </span>
          <span className="hidden text-sm font-medium text-ink-100 sm:block">
            {profile.name}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-ink-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-ghost h-9 w-9 px-0"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-ghost h-9 w-9 px-0"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="btn-ghost h-9 w-9 px-0 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl md:hidden">
          <ul className="section-container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-ink-200 hover:bg-white/[0.04] hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-2 px-1">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost flex-1"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost flex-1"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
