import { Code, Shield, Zap, Workflow } from 'lucide-react'

const features = [
  {
    title: 'AI-Powered Workflows',
    description: 'Automate setup and scaffolding so you can focus on what matters.',
    icon: Workflow,
    color: 'from-indigo-500 to-sky-500',
  },
  {
    title: 'Blazing Performance',
    description: 'Fast dev server with instant reloads and optimized builds.',
    icon: Zap,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Secure by Design',
    description: 'Best practices and sensible defaults baked in from the start.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Modern Stack',
    description: 'Vite, React, Tailwind, and more—ready out of the box.',
    icon: Code,
    color: 'from-fuchsia-500 to-pink-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Everything you need to ship faster
          </h2>
          <p className="mt-4 text-slate-600">
            Opinionated defaults with flexible building blocks so you can create without friction.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${f.color} text-white grid place-items-center shadow`}> 
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.description}</p>
              <div className="mt-4 text-sm font-medium text-indigo-600 group-hover:underline">Learn more →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
