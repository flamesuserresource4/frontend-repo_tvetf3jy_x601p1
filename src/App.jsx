import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold">Simple, transparent pricing</h2>
              <p className="mt-2 text-slate-600">Start free and scale as you grow.</p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold">Hobby</h3>
                  <p className="mt-1 text-sm text-slate-600">For personal projects</p>
                  <div className="mt-4 text-3xl font-bold">$0</div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li>• Unlimited previews</li>
                    <li>• Community support</li>
                    <li>• Basic templates</li>
                  </ul>
                  <button className="mt-6 w-full rounded-md bg-slate-900 text-white py-2 font-medium hover:bg-slate-800">Get started</button>
                </div>
                <div className="rounded-xl border-2 border-slate-900 bg-white p-6 shadow">
                  <h3 className="font-semibold">Pro</h3>
                  <p className="mt-1 text-sm text-slate-600">For growing teams</p>
                  <div className="mt-4 text-3xl font-bold">$19<span className="text-base font-medium text-slate-500">/mo</span></div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li>• Everything in Hobby</li>
                    <li>• AI-assisted workflows</li>
                    <li>• Team collaboration</li>
                  </ul>
                  <button className="mt-6 w-full rounded-md bg-slate-900 text-white py-2 font-medium hover:bg-slate-800">Upgrade</button>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold">Enterprise</h3>
                  <p className="mt-1 text-sm text-slate-600">For organizations</p>
                  <div className="mt-4 text-3xl font-bold">Custom</div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li>• SSO and advanced security</li>
                    <li>• SLA & priority support</li>
                    <li>• Custom integrations</li>
                  </ul>
                  <button className="mt-6 w-full rounded-md bg-white border border-slate-300 py-2 font-medium hover:bg-slate-50">Contact sales</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
