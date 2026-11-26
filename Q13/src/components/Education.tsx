import { GraduationCap, Award } from 'lucide-react';
import { education } from '@/data/portfolio';
import { Section } from './Section';

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic background."
      lead="From a BCA foundation to a specialized MCA in Artificial Intelligence & Machine Learning."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e) => (
          <div key={e.degree + e.school} className="reveal card card-hover p-6">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-300">
                <GraduationCap size={20} />
              </span>
              <span className="tag">{e.period}</span>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white">
              {e.degree} <span className="text-ink-400">—</span>{' '}
              <span className="text-accent-300">{e.field}</span>
            </h3>
            <p className="mt-1 text-sm text-ink-300">{e.school}</p>

            {e.detail ? (
              <p className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-sm text-ink-200">
                <Award size={14} className="text-accent-400" />
                {e.detail}
              </p>
            ) : (
              <p className="mt-4 text-xs text-ink-400">
                Currently pursuing — specialization in Artificial Intelligence & Machine Learning.
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
