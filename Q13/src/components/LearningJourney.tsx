import { Check, Loader2, Circle } from 'lucide-react';
import { journeySteps, type JourneyStep } from '@/data/portfolio';
import { Section } from './Section';

const statusConfig: Record<
  JourneyStep['status'],
  { label: string; icon: typeof Check; nodeClass: string; ringClass: string; labelClass: string }
> = {
  done: {
    label: 'Completed',
    icon: Check,
    nodeClass: 'border-accent-500/40 bg-accent-500/15 text-accent-300',
    ringClass: 'bg-accent-500/50',
    labelClass: 'text-accent-300',
  },
  active: {
    label: 'In progress',
    icon: Loader2,
    nodeClass: 'border-violet-500/50 bg-violet-500/15 text-violet-300',
    ringClass: 'bg-violet-500/60',
    labelClass: 'text-violet-300',
  },
  next: {
    label: 'Up next',
    icon: Circle,
    nodeClass: 'border-white/15 bg-white/[0.03] text-ink-400',
    ringClass: 'bg-ink-600',
    labelClass: 'text-ink-400',
  },
};

export function LearningJourney() {
  return (
    <Section
      id="journey"
      eyebrow="Learning Journey"
      title="How I'm getting to Data Science."
      lead="An honest map of my progression — what I've covered, what I'm actively learning, and what comes next. This is an ongoing journey, not finished expertise."
    >
      <ol className="relative ml-3 space-y-2 sm:ml-4">
        {/* Vertical line */}
        <span
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/50 via-violet-500/40 to-white/[0.06] sm:left-[11px]"
          aria-hidden
        />
        {journeySteps.map((step, i) => {
          const cfg = statusConfig[step.status];
          const Icon = cfg.icon;
          return (
            <li
              key={step.label}
              className="reveal relative pl-8 sm:pl-12"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Node */}
              <span
                className={`absolute left-0 top-1 flex h-[15px] w-[15px] items-center justify-center rounded-full border ${cfg.nodeClass} sm:h-[23px] sm:w-[23px]`}
              >
                <Icon
                  size={11}
                  className={step.status === 'active' ? 'animate-spin [animation-duration:3s]' : ''}
                  strokeWidth={step.status === 'next' ? 0 : 2.5}
                />
              </span>

              <div className="card card-hover mb-2 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    {step.label}
                  </h3>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider ${cfg.labelClass}`}
                  >
                    {cfg.label}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="reveal mt-6 font-mono text-xs text-ink-400">
        Last updated as learning progresses — this timeline reflects current status, not a finish line.
      </p>
    </Section>
  );
}
