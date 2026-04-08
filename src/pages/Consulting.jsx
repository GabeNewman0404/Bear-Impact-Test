import { usePageMeta } from '../lib/usePageMeta.js'

const pillars = [
  {
    icon: 'insights',
    title: 'Demand Strategy',
    body: 'A diagnostic-driven plan that maps where qualified demand actually lives in your market — and how to capture it before competitors do.',
  },
  {
    icon: 'architecture',
    title: 'Authority Architecture',
    body: 'The editorial, technical, and distribution scaffolding that turns your firm into the default reference in your category.',
  },
  {
    icon: 'monitoring',
    title: 'Revenue Operations',
    body: 'Closed-loop tracking from first touch to signed retainer, so every strategic decision is grounded in real attribution data.',
  },
]

const idealClient = [
  '8-figure law firms or B2B service companies',
  'Senior leadership ready to invest in long-horizon growth',
  'A real product or service the market already values',
  'Tired of à la carte agencies and one-off campaigns',
]

const wrongClient = [
  'Looking for a quick PPC turnaround in 30 days',
  'Pre-product or pre-revenue startups',
  'Want to outsource strategy without internal alignment',
  'Comfortable being the cheapest option in the market',
]

export default function Consulting() {
  usePageMeta({
    title: 'Case Growth Blueprint Session for PI Firms | Bear Impact',
    description:
      'Book a Case Growth Blueprint session for your personal injury firm. One engagement, one operating system, one sovereign market position. No retainers.',
    path: '/consulting',
  })

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary-container/10 to-transparent blur-[140px] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <span className="text-primary-container tracking-[0.3em] uppercase text-xs font-bold">
            Strategic Consulting
          </span>
          <h1 className="serif-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mt-6 max-w-5xl">
            Strategic Growth &amp;{' '}
            <span className="text-gold italic">Demand Consulting</span> for
            8-Figure Law Firms &amp; B2B Service Companies.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light mt-10 max-w-3xl leading-relaxed">
            High-stakes consulting for leadership teams who are done renting
            their growth from ad networks. One engagement. One operating system.
            One sovereign market position.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <button className="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
              Book Your Blueprint Session
            </button>
            <button className="ghost-border text-on-surface px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-variant transition-all">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Ideal Client Alignment */}
      <section className="bg-surface-container-lowest py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-w-3xl">
            <span className="text-primary-container tracking-[0.2em] uppercase text-xs font-bold">
              Ideal Client Alignment
            </span>
            <h2 className="serif-display text-5xl font-bold mt-4 leading-tight">
              We&apos;re not for everyone — and that&apos;s the point.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-xl">
              <h3 className="serif-display text-2xl font-bold mb-6 text-gold">
                Built For You If…
              </h3>
              <ul className="space-y-4">
                {idealClient.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-on-surface text-sm leading-relaxed"
                  >
                    <span
                      className="material-symbols-outlined text-gold text-base mt-0.5"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-container-high p-10 rounded-xl ghost-border">
              <h3 className="serif-display text-2xl font-bold mb-6 text-on-surface-variant">
                Probably Not a Fit If…
              </h3>
              <ul className="space-y-4">
                {wrongClient.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-on-surface-variant text-sm leading-relaxed"
                  >
                    <span className="material-symbols-outlined text-on-surface-variant/60 text-base mt-0.5">
                      remove
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment / Pricing Card */}
      <section className="bg-white text-navy py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden">
            <div className="p-12 lg:p-20 text-center">
              <span className="text-[#765a00] tracking-[0.2em] uppercase text-xs font-bold">
                The Investment
              </span>
              <h2 className="serif-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                The Bear Impact Growth Investment
              </h2>
              <p className="text-lg text-navy/70 max-w-2xl mx-auto mb-12">
                A single fixed-fee engagement that produces a complete demand
                strategy, authority architecture, and 12-month execution plan.
              </p>
              <div className="serif-display text-7xl md:text-8xl font-bold text-[#765a00] mb-2">
                $8,500
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-navy/60 font-bold mb-12">
                One-time Blueprint engagement
              </div>
              <button className="bg-[#765a00] text-white px-10 py-5 rounded-lg font-bold text-xl hover:scale-105 transition-all">
                Book Your Blueprint Session
              </button>
            </div>
            <div className="bg-white border-t border-slate-200 grid md:grid-cols-2">
              <div className="p-10 border-b md:border-b-0 md:border-r border-slate-200">
                <h4 className="serif-display text-xl font-bold mb-4">
                  Why this…
                </h4>
                <ul className="space-y-3 text-sm text-navy/70">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#765a00] text-base mt-0.5">
                      check
                    </span>
                    Senior strategist on every engagement — no juniors
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#765a00] text-base mt-0.5">
                      check
                    </span>
                    Deliverables you actually own and can execute
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#765a00] text-base mt-0.5">
                      check
                    </span>
                    Real attribution, not vanity dashboards
                  </li>
                </ul>
              </div>
              <div className="p-10">
                <h4 className="serif-display text-xl font-bold mb-4">
                  …not that.
                </h4>
                <ul className="space-y-3 text-sm text-navy/60">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-base mt-0.5">
                      remove
                    </span>
                    Recycled "discovery" decks from a junior account manager
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-base mt-0.5">
                      remove
                    </span>
                    Templated SEO audits that sit in a Drive folder
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-base mt-0.5">
                      remove
                    </span>
                    Lock-in retainers before strategy is even validated
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars of Impact */}
      <section className="bg-background py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary-container tracking-[0.2em] uppercase text-xs font-bold">
              The Methodology
            </span>
            <h2 className="serif-display text-5xl md:text-6xl font-bold mt-4">
              The Three Pillars of Impact
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="glass-card p-10 rounded-xl">
                <div className="w-14 h-14 bg-primary-container rounded-lg flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-on-primary">
                    {p.icon}
                  </span>
                </div>
                <h3 className="serif-display text-2xl font-bold mb-4">
                  {p.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architects of Authority Band */}
      <section className="bg-surface-container-lowest py-24 px-8 border-y border-outline-variant/20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="serif-display text-4xl md:text-5xl font-bold leading-tight">
            Architects of <span className="text-gold italic">Authority</span> —
            not vendors of attention.
          </h2>
          <p className="mt-8 text-on-surface-variant text-lg max-w-3xl mx-auto leading-relaxed">
            Every Bear Impact engagement is built around a single principle:
            authority compounds, attention evaporates. We build the former.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-background px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif-display text-5xl md:text-7xl font-bold mb-10 leading-tight">
            Secure Your{' '}
            <span className="text-gold italic">Market Dominance</span>.
          </h2>
          <p className="text-2xl text-on-surface-variant font-light mb-12">
            One engagement. One operating system. One sovereign market position.
          </p>
          <button className="bg-primary-container text-on-primary px-12 py-6 rounded-lg font-bold text-2xl hover:brightness-110 shadow-2xl transition-all">
            Book Your Blueprint Session
          </button>
        </div>
      </section>
    </main>
  )
}
