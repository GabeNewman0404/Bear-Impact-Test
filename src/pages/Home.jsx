import { usePageMeta } from '../lib/usePageMeta.js'

export default function Home() {
  usePageMeta({
    title: 'Case Growth Systems for Personal Injury Law Firms | Bear Impact',
    description:
      'Bear Impact builds case growth systems for personal injury law firms — predictable, compounding inbound that replaces ad spend with sovereign authority.',
    path: '/',
  })

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="serif-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
                Own Your Market. Build a{' '}
                <span className="text-gold italic">Case Growth Engine</span> That
                Compounds.
              </h1>
              <p className="text-on-surface-variant text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-2xl">
                Stop gambling on ads and referrals. Build a predictable inbound
                system that drives qualified cases month after month.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
                  Book Your Blueprint Session
                </button>
                <button className="ghost-border text-on-surface px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-variant transition-all">
                  See How It Works
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] glass-card rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  alt=""
                  className="w-full h-full object-cover"
                  src="https://www.bearimpact.com/assets/founder-headshot-BQkhVtYB.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute glass-card p-6 border-l-4 border-l-primary-container bottom-0 inset-x-0">
                  <p className="serif-display italic text-lg leading-relaxed text-on-surface mb-2">
                    &quot;Strategy first, implementation second. Every successful
                    growth system starts with understanding the terrain.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center">
                      <span className="material-symbols-outlined text-xs text-gold">
                        verified
                      </span>
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase">
                      Bear Newman, Founder
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-surface-container-lowest py-16 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ['20+', 'Years Experience'],
              ['$400M+', 'Client Revenue Served'],
              ['100%', 'Senior-Level Strategy'],
              ['24hr', 'Response Time'],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="serif-display text-4xl text-gold font-bold mb-1">
                  {num}
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-on-surface-variant">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Steps to Market Dominance */}
      <section className="py-32 relative bg-white text-navy">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-24">
            <h2 className="serif-display text-5xl md:text-6xl font-bold mb-8">
              Three Steps to Market Dominance
            </h2>
            <p className="text-xl opacity-70 font-light">
              Unlike firms that chase every lead, we build territory. Our system
              creates lasting market presence that compounds over time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Case Growth Blueprint',
                body: 'A comprehensive reconnaissance mission that maps your competitive landscape, identifies growth gaps, and charts a 24-month path to market leadership.',
                phase: 'Assess',
                icon: 'trending_up',
              },
              {
                num: '02',
                title: '60-Day Recon and Roadmap',
                body: 'Quick wins and infrastructure upgrades that build momentum. We establish the systems that will support years of compounding inbound case growth.',
                phase: 'Build',
                icon: 'construction',
              },
              {
                num: '03',
                title: '12-24 Month Market Authority',
                body: 'Strategic content and authority building that positions you as the undisputed market leader, reducing dependence on paid channels and referrals.',
                phase: 'Dominate',
                icon: 'workspace_premium',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="relative group p-10 bg-slate-50 border border-slate-200 hover:border-[#765a00]/30 transition-all duration-500 rounded-lg"
              >
                <div className="relative z-10">
                  <div className="serif-display text-6xl text-slate-200/80 mb-4 font-bold leading-none">
                    {step.num}
                  </div>
                  <h3 className="serif-display text-2xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="opacity-80 leading-relaxed mb-6">{step.body}</p>
                  <span className="text-[#765a00] flex items-center gap-2 font-bold text-sm tracking-widest uppercase">
                    Phase: {step.phase}{' '}
                    <span className="material-symbols-outlined text-sm">
                      {step.icon}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Bear vs. The Hunter */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="serif-display text-5xl font-bold leading-tight">
                The Strategy Spectrum: <br />
                <span className="text-gold italic">Bear vs. Hunter</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 p-8 glass-card rounded-xl">
                  <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-gold">
                      target
                    </span>
                  </div>
                  <div>
                    <h4 className="serif-display text-xl font-bold mb-2 text-on-surface">
                      The Hunter — PPC &amp; Paid Channels
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Fleeting attention, rising costs, and a constant battle
                      for the next lead. When the spending stops, the cases
                      stop.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 p-8 bg-surface-container-high rounded-xl border border-primary-container/20">
                  <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-primary">
                      castle
                    </span>
                  </div>
                  <div>
                    <h4 className="serif-display text-xl font-bold mb-2 text-on-surface">
                      The Bear — Strategic Growth Systems
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Untouchable market position',
                        'Long-lasting market position',
                        'Predictable compounding authority',
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-on-surface text-sm"
                        >
                          <span
                            className="material-symbols-outlined text-gold text-sm"
                            style={{ fontVariationSettings: '"FILL" 1' }}
                          >
                            check_circle
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-tr from-primary-container/20 to-transparent rounded-full absolute -top-20 -right-20 w-96 h-96 blur-3xl opacity-50"></div>
              <img
                alt="Strategic chess move"
                className="rounded-2xl relative z-10 ghost-border w-full aspect-[4/5] object-cover"
                src="https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=900&h=1125&fit=crop&q=80&auto=format"
              />
              <div className="absolute -bottom-10 -left-10 z-20 glass-card p-10 rounded-2xl shadow-2xl space-y-8 min-w-[320px]">
                {[
                  ['320%', 'Increase in qualified leads'],
                  ['3.2x', 'Positive value increase'],
                  ['840%', 'Inbound case growth'],
                ].map(([num, label]) => (
                  <div key={label}>
                    <div className="serif-display text-4xl text-gold font-bold">
                      {num}
                    </div>
                    <div className="text-[10px] tracking-widest uppercase font-bold">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Growth Blueprint Session */}
      <section className="py-32 bg-white text-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20">
                <span className="text-[#765a00] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                  Strategic Offering
                </span>
                <h2 className="serif-display text-5xl font-bold mb-8">
                  The Case Growth Blueprint Session
                </h2>
                <p className="text-xl opacity-70 font-light mb-12">
                  A one-time, high-level strategic session that identifies your
                  biggest growth gaps and maps a 24-month system for predictable
                  inbound cases.
                </p>
                <button className="bg-[#765a00] text-white px-10 py-5 rounded-lg font-bold text-xl hover:scale-105 transition-all mb-12">
                  Book Your Blueprint Session
                </button>
                <div className="pt-12 border-t border-slate-200">
                  <h4 className="font-bold tracking-widest uppercase text-xs mb-8 opacity-60">
                    What&apos;s Included
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {[
                      'Complete technical infrastructure analysis',
                      'Competitive landscape reconnaissance',
                      'Case growth opportunity mapping',
                      '12-24 month strategic roadmap',
                      'Priority action plan with quick wins',
                      'Executive presentation for leadership',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <span className="material-symbols-outlined text-[#765a00] text-lg">
                          check
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-slate-100 relative min-h-[400px]">
                <img
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=900&fit=crop&q=80&auto=format"
                />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="bg-white p-12 rounded-2xl text-center max-w-sm border border-slate-200 shadow-xl">
                    <span className="material-symbols-outlined text-5xl text-[#765a00] mb-6">
                      workspace_premium
                    </span>
                    <h4 className="serif-display text-2xl font-bold mb-4">
                      Limited Availability
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="serif-display text-5xl md:text-7xl font-bold mb-10 leading-tight">
            Ready to Build Your Inbound Engine?
          </h2>
          <p className="text-2xl text-on-surface-variant font-light mb-12">
            Schedule your Case Growth Blueprint Session today and stop leaving
            your growth to chance.
          </p>
          <button className="bg-primary-container text-on-primary px-12 py-6 rounded-lg font-bold text-2xl hover:brightness-110 shadow-2xl transition-all">
            Book Your Blueprint Session
          </button>
        </div>
      </section>
    </main>
  )
}
