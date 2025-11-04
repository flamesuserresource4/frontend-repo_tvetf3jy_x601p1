import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Simulate submission for now
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Get in touch
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
          >
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Want to collaborate or have a project in mind? Drop a message and I’ll get back within 24 hours.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> your@email.com</div>
              <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Your City, Country</div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/70 dark:bg-neutral-900/70 backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-xs text-neutral-500">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-800/60 px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>
              <div>
                <label className="text-xs text-neutral-500">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-800/60 px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>
              <div>
                <label className="text-xs text-neutral-500">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-800/60 px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 font-medium hover:opacity-90 transition"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
              {sent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-emerald-600"
                >
                  Message sent! I’ll be in touch soon.
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-[1] opacity-60">
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent via-transparent to-fuchsia-300/20 dark:to-fuchsia-400/10" />
      </div>
    </section>
  );
}
