import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile, navItems } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" aria-hidden />
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-500/30 bg-accent-500/10 font-mono text-sm font-semibold text-accent-300">
                AP
              </span>
              <span className="text-sm font-medium text-white">{profile.name}</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              {profile.role}. Building foundations in Data Science, one step at a time.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-ink-400 transition-colors hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-6 sm:flex-row">
          <p className="font-mono text-xs text-ink-500">
            © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-3">
            <a href={profile.links.github} target="_blank" rel="noreferrer noopener" className="text-ink-400 transition-colors hover:text-white" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer noopener" className="text-ink-400 transition-colors hover:text-white" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${profile.email}`} className="text-ink-400 transition-colors hover:text-white" aria-label="Email">
              <Mail size={16} />
            </a>
            <a href="#top" className="btn-ghost h-8 w-8 px-0" aria-label="Back to top">
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
