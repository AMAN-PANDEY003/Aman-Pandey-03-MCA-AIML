import { ArrowDown, Download, FolderGit2, Github, Linkedin, Sparkles } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:56px_56px] opacity-60 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent_75%)]"
        aria-hidden
      />

      <div className="section-container relative flex min-h-[100svh] flex-col justify-center pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-ink-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities & collaboration
          </div>

          <h1 className="reveal mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="reveal mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-ink-200 sm:text-xl">
            <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-violet-400 bg-clip-text font-medium text-transparent">
              {profile.headline}
            </span>
          </p>

          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
            {profile.intro}
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              <FolderGit2 size={16} /> View Projects
            </a>
            <a href="#skills" className="btn-ghost">
              <Sparkles size={16} /> Explore My Skills
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="btn-ghost group"
              aria-label="Download resume"
            >
              <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </div>

          <div className="reveal mt-8 flex items-center gap-4">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-white"
            >
              <Github size={18} />
              <span className="underline-offset-4 group-hover:underline">GitHub</span>
            </a>
            <span className="h-4 w-px bg-white/10" />
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-white"
            >
              <Linkedin size={18} />
              <span className="underline-offset-4 group-hover:underline">LinkedIn</span>
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="reveal mt-16 inline-flex items-center gap-2 font-mono text-xs text-ink-400 transition-colors hover:text-ink-200"
        >
          <ArrowDown size={14} className="animate-float" /> scroll to explore
        </a>
      </div>
    </section>
  );
}
