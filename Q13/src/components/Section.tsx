import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="section-container">
        <div className="reveal max-w-2xl">
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-accent-500/60" />
            {eyebrow}
          </span>
          <h2 className="section-title">{title}</h2>
          {lead ? <p className="section-lead">{lead}</p> : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
