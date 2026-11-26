import { ArrowUpRight, Github, CheckCircle2 } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { Section } from './Section';

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="reveal card card-hover group flex flex-col overflow-hidden p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent-300">
          {project.title}
        </h3>
        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-ink-400 transition-all group-hover:border-accent-500/40 group-hover:text-accent-300">
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink-300">{project.blurb}</p>

      <ul className="mt-4 space-y-2">
        {project.details.map((d) => (
          <li key={d} className="flex gap-2.5 text-sm text-ink-400">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-400/70" />
            <span className="leading-relaxed">{d}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-white/[0.06] pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-ghost h-9 px-3 text-xs"
        >
          <Github size={14} />
          {project.githubPlaceholder ? 'GitHub (add link)' : 'View Code'}
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-ghost h-9 px-3 text-xs"
          >
            <ArrowUpRight size={14} />
            {project.demoPlaceholder ? 'Live Demo (add link)' : 'Live Demo'}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built so far."
      lead="A small, honest set of projects from my development background. This section is structured to grow as I add Data Science, SQL and Python work."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}

        {/* Future-project placeholder */}
        <div className="reveal card flex flex-col items-center justify-center gap-3 border-dashed border-white/10 p-6 text-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-ink-400">
            <ArrowUpRight size={18} />
          </span>
          <p className="text-sm font-medium text-ink-200">More on the way</p>
          <p className="max-w-xs text-xs leading-relaxed text-ink-400">
            Future Data Science, SQL and Python projects will appear here as I build them.
          </p>
        </div>
      </div>
    </Section>
  );
}
