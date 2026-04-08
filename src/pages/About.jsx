import { usePageMeta } from '../lib/usePageMeta.js'

const milestones = [
  {
    year: '2004',
    title: 'The Practitioner',
    body: 'Cut my teeth running in-house growth at a regional litigation firm — learning what actually moves cases vs. what looks good in a quarterly slide deck.',
  },
  {
    year: '2010',
    title: 'Digital Growth Expert',
    body: 'Built one of the first organic-first acquisition systems for a multi-state plaintiff network, replacing six-figure ad spend with compounding inbound.',
  },
  {
    year: '2018',
    title: 'Fractional CMO',
    body: 'Stepped into senior strategy seats for $40M+ professional services firms — translating market data into board-level decisions.',
  },
  {
    year: '2022',
    title: 'Agency Founder',
    body: 'Launched Bear Impact to consolidate two decades of high-stakes growth playbooks into a single sovereign system for elite firms.',
  },
  {
    year: '2025',
    title: 'Bear Impact Today',
    body: 'A focused practice serving a deliberately small roster of partners. Quality over quantity. Authority over noise.',
  },
]

const beliefs = [
  {
    icon: 'flag',
    title: 'Strategy First',
    body: 'Tactics without strategy is just expensive guessing. Every system we build starts with a clear thesis on the market.',
  },
  {
    icon: 'hourglass_top',
    title: 'Long-Term Compounding',
    body: 'We measure success in years, not weeks. Authority is an asset you build once and harvest forever.',
  },
  {
    icon: 'workspace_premium',
    title: 'Editorial Excellence',
    body: 'Every piece of content meets a publishable standard. Mediocrity is invisible — and invisibility is fatal.',
  },
  {
    icon: 'handshake',
    title: 'True Partnership',
    body: 'We work with a small number of firms deeply, not many shallowly. Your wins are our wins; your roadmap is our roadmap.',
  },
]

export default function About() {
  usePageMeta({
    title: 'About Bear Impact — Legal Marketing Agency for Elite Firms',
    description:
      'Bear Impact is a legal marketing agency built on 20+ years of in-house growth strategy for high-stakes law firms and B2B service companies.',
    path: '/about',
  })

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary-container/10 to-transparent blur-[140px] -z-10"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-primary-container tracking-[0.3em] uppercase text-xs font-bold">
              About Bear Impact
            </span>
            <h1 className="serif-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mt-6">
              20+ Years Building{' '}
              <span className="text-gold italic">Market Leaders</span>.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light mt-10 max-w-2xl leading-relaxed">
              Established in growth strategy, refined in high-stakes litigation
              marketing, and built for the long horizon.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#E8C05A]/20 to-transparent rounded-2xl blur-2xl"></div>
              <img
                src="/bear-profile.png"
                alt="Bear at Bear Impact"
                className="relative w-full max-w-md rounded-2xl shadow-2xl border border-[#E8C05A]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story + Timeline */}
      <section className="bg-surface-container-lowest py-32 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="text-primary-container tracking-[0.2em] uppercase text-xs font-bold">
              The Story
            </span>
            <h2 className="serif-display text-5xl font-bold mt-4 mb-8 leading-tight">
              From Practitioner to Partner
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>
                Bear Impact didn&apos;t start as an agency. It started as a
                practitioner&apos;s notebook — two decades of figuring out what
                actually drives qualified case volume in markets where
                everything is on the line.
              </p>
              <p>
                After years of running growth functions inside law firms, B2B
                service companies, and high-end professional practices, the
                pattern became unmistakable: the firms that won weren&apos;t
                the ones outspending their competitors. They were the ones who
                built sovereign systems they actually owned.
              </p>
              <p>
                Today, Bear Impact is the consolidation of that thesis — a
                small, deliberately constrained practice serving leadership
                teams who are done renting their growth from ad networks.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative border-l border-primary-container/30 pl-10 space-y-12">
              {milestones.map((m) => (
                <li key={m.year} className="relative">
                  <span className="absolute -left-[3.25rem] flex items-center justify-center w-10 h-10 bg-surface-container-highest rounded-full ghost-border">
                    <span className="text-primary-container text-xs font-bold tracking-widest">
                      •
                    </span>
                  </span>
                  <div className="serif-display text-3xl font-bold text-gold mb-2">
                    {m.year}
                  </div>
                  <h3 className="serif-display text-2xl font-bold mb-3">
                    {m.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {m.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-background py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary-container tracking-[0.2em] uppercase text-xs font-bold">
              Our Principles
            </span>
            <h2 className="serif-display text-5xl md:text-6xl font-bold mt-4">
              What We Believe
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beliefs.map((b) => (
              <div key={b.title} className="glass-card p-10 rounded-xl">
                <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-gold">
                    {b.icon}
                  </span>
                </div>
                <h3 className="serif-display text-2xl font-bold mb-4">
                  {b.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-surface-container-lowest px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif-display text-5xl md:text-7xl font-bold mb-10 leading-tight">
            Ready to architect your{' '}
            <span className="text-gold italic">sovereign growth?</span>
          </h2>
          <p className="text-2xl text-on-surface-variant font-light mb-12">
            Book a Blueprint Session and get a candid read on whether Bear
            Impact is the right fit.
          </p>
          <button className="bg-primary-container text-on-primary px-12 py-6 rounded-lg font-bold text-2xl hover:brightness-110 shadow-2xl transition-all">
            Book Your Blueprint Session
          </button>
        </div>
      </section>
    </main>
  )
}
