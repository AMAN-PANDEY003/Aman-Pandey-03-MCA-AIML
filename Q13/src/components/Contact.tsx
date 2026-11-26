import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, Check } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { Section } from './Section';

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    if (!name || !message) return;

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk."
      lead="Whether it's an opportunity, a collaboration idea, or a question about my work — my inbox is open."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        {/* Contact details */}
        <div className="reveal space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="card card-hover flex items-center gap-4 p-5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-accent-300">
              <Mail size={18} />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-400">Email</p>
              <p className="text-sm text-white">{profile.email}</p>
            </div>
          </a>

          <div className="card flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink-300">
              <MapPin size={18} />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-ink-400">Location</p>
              <p className="text-sm text-white">{profile.location}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="card card-hover flex items-center gap-3 p-5"
            >
              <Github size={18} className="text-ink-300" />
              <span className="text-sm text-white">GitHub</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="card card-hover flex items-center gap-3 p-5"
            >
              <Linkedin size={18} className="text-ink-300" />
              <span className="text-sm text-white">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Message form (mail client) */}
        <form onSubmit={onSubmit} className="reveal card flex flex-col gap-4 p-6">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-300">
              Your name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-white/10 bg-ink-900 px-3.5 py-2.5 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-accent-500/50"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-white/10 bg-ink-900 px-3.5 py-2.5 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-accent-500/50"
              placeholder="What would you like to talk about?"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            {sent ? (
              <>
                <Check size={16} /> Opening your mail app…
              </>
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>
          <p className="text-center font-mono text-[11px] text-ink-500">
            Opens your email client — no data is stored on this site.
          </p>
        </form>
      </div>
    </Section>
  );
}
