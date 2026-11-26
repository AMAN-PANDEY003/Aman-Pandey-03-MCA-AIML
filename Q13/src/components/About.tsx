import { Code2, Database, LineChart, MapPin, GraduationCap } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { Section } from './Section';

const pillars = [
  {
    icon: Code2,
    title: 'Programming',
    text: 'Python is my primary language — I write clean, structured code with OOP, solid error handling and a problem-solving mindset.',
  },
  {
    icon: Database,
    title: 'Data & SQL',
    text: 'Comfortable with intermediate SQL — joins, subqueries, window functions and aggregates — for querying and shaping data.',
  },
  {
    icon: LineChart,
    title: 'Data Science',
    text: 'Building hands-on fluency with NumPy, Pandas, Matplotlib and Seaborn, with statistics and EDA as the next frontier.',
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="A student turning curiosity into capability."
      lead="I'm an MCA student specializing in Artificial Intelligence & Machine Learning, in the early stage of a deliberate transition toward Data Science — backed by a development foundation from my BCA."
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div className="reveal space-y-5 text-base leading-relaxed text-ink-300">
          <p>
            My academic path started with a{' '}
            <span className="text-ink-100">BCA from Makhanlal Chaturvedi University</span>{' '}
            (CGPA 7.98), where I developed a working foundation in web development and
            programming. That grounding led me to pursue an{' '}
            <span className="text-ink-100">MCA in Artificial Intelligence & Machine Learning
            at GLA University</span> — a step I chose intentionally to move closer to data and
            intelligent systems.
          </p>
          <p>
            What pulls me toward Data Science isn't hype — it's the process. I enjoy the
            analytical thinking it demands: framing a question, understanding the data,
            exploring it carefully, and arriving at a conclusion that holds up. I like
            problems that reward patience and structure rather than guesswork.
          </p>
          <p>
            Right now I'm being honest about where I am: a student with strong fundamentals
            in Python and SQL, actively learning the data-science toolkit, and not yet an
            experienced practitioner. I'd rather show real, incremental progress than
            overstate where I stand.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-sm text-ink-400">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-accent-400" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <GraduationCap size={15} className="text-accent-400" /> MCA (AI/ML), GLA University
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {pillars.map((p) => (
            <div key={p.title} className="reveal card card-hover p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-500/20 bg-accent-500/10 text-accent-300">
                  <p.icon size={18} />
                </span>
                <h3 className="text-sm font-semibold text-white">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
