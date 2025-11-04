import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Your Name</span>
          <span>Built with React • Tailwind • Framer Motion</span>
        </div>
      </footer>
    </div>
  );
}
