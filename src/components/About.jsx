import { motion } from 'framer-motion';
import { Code, Sparkles, Brain, Palette } from 'lucide-react';

const skills = [
  { icon: Code, label: 'Frontend (React, Next.js, Vite)' },
  { icon: Palette, label: 'UI/UX & Design Systems' },
  { icon: Brain, label: 'Animations (Framer Motion)' },
  { icon: Sparkles, label: 'Performance & Accessibility' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          About Me
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
          >
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I’m a product-minded developer who blends design and engineering to build polished experiences. I enjoy translating ideas into clean interfaces and interactive stories that feel effortless.
            </p>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Currently focusing on modern frontend stacks, component-driven design, and micro-animations that amplify usability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="flex items-center gap-3 rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
              >
                <s.icon className="h-5 w-5 text-violet-600" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-[1] opacity-60">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[40%] bg-gradient-to-t from-violet-200/30 via-transparent to-transparent dark:from-violet-400/10" />
      </div>
    </section>
  );
}
