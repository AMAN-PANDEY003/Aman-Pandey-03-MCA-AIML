import { useReveal } from '@/hooks/useReveal';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { LearningJourney } from '@/components/LearningJourney';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function App() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="relative min-h-screen bg-ink-950">
      {/* Ambient top glow */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[60vh] bg-radial-fade"
        aria-hidden
      />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningJourney />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
