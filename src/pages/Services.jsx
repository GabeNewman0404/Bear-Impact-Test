const fill1 = { fontVariationSettings: '"FILL" 1' }

const tiers = [
  {
    name: 'Grizzly Growth Partner',
    tagline: 'For established firms ready to build organic presence',
    badge: null,
    inherits: null,
    bullets: [
      'Technical infrastructure monitoring',
      '5,000–10,000 words of optimized content/mo',
      'Ongoing technical & CRO improvements',
      'Structured citation building & cleanup',
      'High-quality authority signal management',
      'Google Business Profile optimization & posting',
      'Monthly performance reporting',
      'Quarterly roadmap reviews',
    ],
  },
  {
    name: 'Kodiak Market Leader',
    tagline: 'High-intensity growth for competitive markets',
    badge: 'MOST POPULAR',
    inherits: 'Everything in Grizzly, plus:',
    bullets: [
      'Market Leader-level infrastructure foundation',
      '10,000–15,000 words of optimized content/mo',
      'Advanced Google Business Profile management',
      'Aggressive authority acquisition campaigns',
      'Large-scale citation creation & monitoring',
      'Content refreshing & optimization',
      'Monthly reporting by location',
    ],
  },
  {
    name: 'Polar Authority',
    tagline: 'Dominant positioning across your market',
    badge: null,
    inherits: 'Everything in Kodiak, plus:',
    bullets: [
      'Enterprise-grade conversion infrastructure',
      '20,000–25,000 words of optimized content/mo',
      'Aggressive authority acquisition at scale',
      'Full citation saturation & cleanup',
      'Multi-location GBP domination',
      'Advanced reporting by market/location',
      'Executive-level strategy & control',
    ],
  },
  {
    name: 'Bear Dominance',
    tagline: 'Full-market control — multi-metro growth',
    badge: 'RECOMMENDED',
    inherits: 'Everything in Polar, plus:',
    bullets: [
      '30,000–40,000 words of optimized content/mo',
      'Continuous digital PR & outreach',
      'Active CRO testing & implementation',
      'Quarterly leadership strategy intensives',
      'Cross-channel growth alignment',
      'Direct communication channel access',
    ],
  },
  {
    name: 'Apex Predator',
    tagline: 'Reserved for firms that dominate.',
    badge: 'INVITE ONLY',
    inherits: 'Everything in Bear Dominance, plus:',
    bullets: [
      '50,000+ words of optimized content/mo',
      'Aggressive thought-leadership & PR',
      'Full technical & site architecture overhaul',
      'Weekly strategy calls & direct access',
      'War-room planning for market pushes',
      'Real-time case attribution dashboard',
      'End-to-end intake optimization',
    ],
  },
]

export default function Services() {
  return (
    <main className="bg-[#001633] text-on-surface">
      {/* 1. Hero */}
      <section className="relative min-h-[819px] flex items-center overflow-hidden py-24 bg-[#001633]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#001633] via-[#001633]/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-block text-[#eac25c] tracking-[0.3em] font-medium text-sm mb-6">
              CASE GROWTH SYSTEMS
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-bold leading-tight text-on-surface mb-8">
              One System. Two Phases. <br />
              <span className="text-primary-container italic">Predictable</span>{' '}
              Inbound Growth.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface/80 mb-12 max-w-2xl leading-relaxed">
              Bear Impact doesn&apos;t sell services à la carte. We build
              high-performance infrastructure for legal elite who demand market
              dominance through a unified sovereign strategy.
            </p>
            <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 group hover:scale-[1.02] transition-transform">
              Book Your Blueprint Session
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Two-Phase Overview */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-[#eac25c] tracking-[0.3em] font-bold text-sm uppercase">
              How It Works
            </span>
            <h2 className="font-headline text-5xl font-bold mt-4 text-[#001633]">
              The Bear Impact Case Growth System
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                num: '01',
                title: 'Phase 1: 60-Day Recon & Roadmap',
                cadence: 'One-Time Sprint',
                body: 'Every engagement starts here. We dismantle your current systems, map the missed case volume, and architect your blueprint.',
                bullets: [
                  'Comprehensive Market Opportunity Audit',
                  'The "Missed Case" Revenue Map',
                  'Custom Growth Operating System Specs',
                ],
                progress: 'w-1/3',
              },
              {
                num: '02',
                title: 'Phase 2: Case Growth OS',
                cadence: '12-Month Ongoing Process',
                body: 'Execution of the blueprint. We become your sovereign growth partner, managing the entirety of your market authority engine.',
                bullets: [
                  'Full-Stack Content & Authority Building',
                  'High-Intensity Case Acquisition Management',
                  'Real-Time Performance Dashboards',
                ],
                progress: 'w-full',
              },
            ].map((p) => (
              <div
                key={p.num}
                className="light-glass-card p-10 rounded-xl relative group"
              >
                <div className="absolute top-4 right-6 opacity-20 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="text-6xl font-headline font-bold text-primary-container leading-none">
                    {p.num}
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-bold mb-2 text-[#001633] pr-20">
                  {p.title}
                </h3>
                <div className="text-primary-container font-headline text-2xl mb-8">
                  {p.cadence}
                </div>
                <p className="text-[#001633]/70 mb-10 text-lg">{p.body}</p>
                <ul className="space-y-4 mb-12">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-4">
                      <span
                        className="material-symbols-outlined text-primary-container"
                        style={fill1}
                      >
                        check_circle
                      </span>
                      <span className="text-[#001633]/80 font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="h-1 w-full bg-primary-container/20 rounded-full overflow-hidden">
                  <div className={`h-full bg-primary-container ${p.progress}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Phase 1 Deep Dive */}
      <section className="bg-[#001633] py-32">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-24">
            <span className="text-[#eac25c] tracking-[0.3em] font-medium text-sm">
              PHASE 1
            </span>
            <h2 className="font-headline text-5xl font-bold mt-4">
              What Happens During the 60-Day Sprint
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-outline-variant/20"></div>
            <div className="grid md:grid-cols-4 gap-12">
              {[
                ['1', 'Weeks 1-2', 'Deep Forensic Audit. We dissect every previous marketing dollar to find the leak in your current funnel.'],
                ['2', 'Weeks 3-4', 'The Missed Case Map. Identifying the exact high-value case segments you are currently ignoring.'],
                ['3', 'Weeks 5-6', 'Infrastructure Buildout. Crafting the landing environments and conversion triggers for your new OS.'],
                ['4', 'Weeks 7-8', 'The Master Roadmap. A 12-month strategic plan for market dominance, delivered in person.'],
              ].map(([n, h, b]) => (
                <div key={n} className="relative pt-16">
                  <div className="absolute top-0 left-0 w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center font-bold text-xl z-10">
                    {n}
                  </div>
                  <h4 className="font-headline text-2xl font-bold mb-4">{h}</h4>
                  <p className="text-on-surface/60 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Retainer Tiers */}
      <section className="bg-white py-32" id="programs-section">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <span className="bg-primary-container text-on-primary-container text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">
              PHASE 2 PROGRAMS
            </span>
            <h2 className="font-headline text-5xl font-bold mt-4 mb-6 text-[#001633]">
              Choose Your Level of Market Intensity
            </h2>
            <p className="text-lg text-[#001633]/70 leading-relaxed">
              After the 60-Day Sprint, Bear recommends the right program based
              on your competitive landscape, growth goals, and market
              opportunity. Every tier runs the same system — the difference is
              speed, scale, and strategic access.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mb-20">
            <div className="bg-[#001633]/5 border border-primary-container rounded-xl p-6 text-center">
              <p className="text-[#001633] font-bold italic">
                Pricing is custom based on what we uncover during your Recon &amp;
                Roadmap. Book a Blueprint Session to get started.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-6 mb-20 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="navy-glass-card p-6 rounded-xl flex flex-col h-full relative bg-[#001633]"
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#eac25c] text-[#001633] text-[9px] font-bold px-3 py-1 rounded-full uppercase whitespace-nowrap">
                    {tier.badge}
                  </span>
                )}
                <h4 className="font-headline text-xl font-bold text-white mb-2 mt-2">
                  {tier.name}
                </h4>
                <p className="text-xs text-white/60 italic mb-6">{tier.tagline}</p>
                <ul className="space-y-3 text-[11px] text-white/80 flex-grow">
                  {tier.inherits && (
                    <li className="font-bold text-[#eac25c] mb-1">
                      {tier.inherits}
                    </li>
                  )}
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#eac25c] text-sm">
                        check
                      </span>{' '}
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-[#001633]/60 italic mb-10">
              All programs begin with a 60-Day Case Growth Recon &amp; Roadmap.
              We don&apos;t recommend a tier until we understand your competitive
              landscape.
            </p>
            <button className="bg-[#001633] text-white px-10 py-5 rounded-lg font-bold text-xl hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
              Book Your Blueprint Session{' '}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Every Partnership Starts */}
      <section className="bg-[#001633] py-32">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-[#eac25c] tracking-[0.3em] font-medium text-sm">
              GET STARTED
            </span>
            <h2 className="font-headline text-5xl font-bold mt-4">
              Every Partnership Starts with Reconnaissance
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-primary-container/30 -z-10"></div>
            {[
              ['01', 'The Blueprint Call', 'A 30-minute high-level assessment to see if your firm is ready for sovereign growth.', false],
              ['02', 'Recon & Roadmapping', 'Phase 1 kickoff. We dive deep into your market to build the 12-month Operating System.', false],
              ['03', 'Retainer Execution', 'Phase 2 deployment. We take over the heavy lifting while you focus on litigating.', true],
            ].map(([num, title, body, solid]) => (
              <div key={num} className="flex flex-col items-center text-center max-w-xs">
                <div
                  className={
                    solid
                      ? 'w-20 h-20 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-6'
                      : 'w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center mb-6 ghost-border'
                  }
                >
                  <span className={`font-headline text-3xl font-bold ${solid ? '' : 'text-primary-container'}`}>
                    {num}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3">{title}</h4>
                <p className="text-on-surface/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bear vs. Hunter */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-8 max-w-7xl">
          <h2 className="font-headline text-5xl font-bold text-center mb-20 text-[#001633]">
            The Bear <span className="serif-italic">vs.</span> The Hunter
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="p-10 rounded-xl bg-[#001633]/5">
              <h3 className="text-2xl font-headline font-bold mb-10 flex items-center gap-3 text-[#001633]">
                The &quot;Agency&quot; Model
              </h3>
              <ul className="space-y-6">
                {[
                  ['Fragmented à la carte services', 'Buying "SEO" from one person and "Ads" from another with no central strategy.'],
                  ['Transactional Relationships', 'Vendor mindset that only cares about their specific monthly deliverables.'],
                  ['Lack of Industry Context', 'They work with plumbers, dentists, and lawyers using the same playbook.'],
                ].map(([h, b]) => (
                  <li key={h} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#b00020] mt-1">
                      close
                    </span>
                    <div>
                      <span className="font-bold block mb-1 text-[#001633]">{h}</span>
                      <p className="text-[#001633]/60 text-sm">{b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-xl bg-[#001633] text-white shadow-2xl">
              <h3 className="text-2xl font-headline font-bold mb-10 flex items-center gap-3">
                The Bear Impact System
              </h3>
              <ul className="space-y-6">
                {[
                  ['Unified Case Growth OS', 'A single, integrated infrastructure where every dollar supports the entire ecosystem.'],
                  ['Strategic Sovereign Partner', 'We act as your Fractional CMO and execution arm, fully aligned with your revenue goals.'],
                  ['Deep Legal Specialist', 'Purpose-built for High-Stakes Litigation firms. We speak the language of juries and judges.'],
                ].map(([h, b]) => (
                  <li key={h} className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-primary-container mt-1"
                      style={fill1}
                    >
                      check_circle
                    </span>
                    <div>
                      <span className="font-bold block mb-1 text-primary-container">
                        {h}
                      </span>
                      <p className="text-white/70 text-sm">{b}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="bg-[#001633] relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#001633] via-[#001633]/60 to-[#001633]"></div>
        </div>
        <div className="container mx-auto px-8 max-w-4xl relative z-10 text-center">
          <h2 className="font-headline text-5xl md:text-7xl font-bold mb-8">
            Ready to Build Your{' '}
            <span className="text-primary-container">Inbound Engine?</span>
          </h2>
          <p className="text-xl text-on-surface/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Schedule your Case Growth Blueprint Session to discover the gaps in
            your market and reclaim your sovereign authority.
          </p>
          <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-lg font-bold text-xl hover:scale-105 transition-transform">
            Book Your Blueprint Session →
          </button>
        </div>
      </section>
    </main>
  )
}
