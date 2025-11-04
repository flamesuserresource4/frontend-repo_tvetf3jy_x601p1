import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-violet-500/40 blur-3xl"
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-fuchsia-500/40 blur-3xl"
          animate={{ x: [0, -20, 20, 0], y: [0, 15, -10, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-amber-400/30 blur-3xl"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-4 py-1.5 text-xs text-neutral-700 dark:text-neutral-300"
        >
          <Rocket className="h-4 w-4 text-violet-600" />
          Available for freelance projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-black via-neutral-700 to-neutral-400 dark:from-white dark:via-neutral-200 dark:to-neutral-400"
        >
          Hi, I’m Your Name
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
        >
          I craft delightful digital experiences as a Frontend Engineer and Designer. I love building fast, beautiful interfaces with delightful motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Let’s work together <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>
      </div>

      {/* subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_60%)]" />
    </section>
  );
}
