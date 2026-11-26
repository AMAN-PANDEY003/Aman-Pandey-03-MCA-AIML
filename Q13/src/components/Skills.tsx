import {
  BookOpen,
  Database,
  LayoutTemplate,
  LineChart,
  Server,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories, type SkillCategory } from '@/data/portfolio';
import { Section } from './Section';

const iconMap: Record<SkillCategory['icon'], LucideIcon> = {
  python: BookOpen,
  database: Database,
  analytics: LineChart,
  server: Server,
  layout: LayoutTemplate,
  wrench: Wrench,
};

export function Skills() {
  const learningCount = skillCategories
    .flatMap((c) => c.skills)
    .filter((s) => s.learning).length;

  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title="What I'm working with right now."
      lead="Organized by area — no inflated percentages or proficiency bars. Items marked as learning are exactly that: in progress, not claimed as expertise."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => {
          const Icon = iconMap[cat.icon];
          const hasLearning = cat.skills.some((s) => s.learning);
          return (
            <div key={cat.title} className="reveal card card-hover p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-500/20 bg-accent-500/10 text-accent-300">
                    <Icon size={17} />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                </div>
                {hasLearning ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-violet-400">
                    <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-violet-400" />
                    learning
                  </span>
                ) : null}
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li key={s.name}>
                    <span
                      className={`tag ${
                        s.learning
                          ? 'border-violet-500/30 bg-violet-500/[0.07] text-violet-300'
                          : ''
                      }`}
                    >
                      {s.name}
                      {s.learning ? (
                        <span className="ml-1.5 text-violet-400" aria-hidden>
                          •
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="reveal mt-6 font-mono text-xs text-ink-400">
        {learningCount > 0
          ? `${learningCount} technologies currently being learned — clearly marked above.`
          : 'Skill list kept current as learning progresses.'}
      </p>
    </Section>
  );
}
