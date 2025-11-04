import { useState } from 'react';
import { Menu, X, Github, Mail, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400" />
          <span className="font-semibold tracking-tight">MyProfile</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
          <div className="h-5 w-px bg-black/10 dark:bg-white/10" />
          <a
            href="mailto:your@email.com"
            className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/yourhandle"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10"
              >
                <User className="h-4 w-4" /> About
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
