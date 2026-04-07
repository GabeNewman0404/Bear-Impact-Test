export default function Insights() {
  return (
    <main className="min-h-screen">
      {/* Hero Section (Dark) */}
      <section className="relative pt-24 pb-12 px-8 max-w-screen-2xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-primary-container/10 to-transparent blur-[120px] -z-10"></div>
        <div className="max-w-4xl">
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tight text-on-surface mb-8">
            Strategic Thinking for{' '}
            <span className="text-primary-container italic">Market Leaders</span>.
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-on-surface-variant max-w-3xl mb-12">
            Deep-dive articles on B2B case growth strategy, reducing ad
            dependence, and building sustainable market authority.
          </p>
        </div>
      </section>

      {/* Content Area (White Background) */}
      <div className="bg-white">
        {/* Filter Tags */}
        <section className="px-8 py-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 rounded-full border border-primary-container/20 bg-[#001633] text-primary-container text-sm font-medium transition-all">
              All Insights
            </button>
            {[
              'B2B Growth Strategy',
              'Reducing Ad Dependence',
              'Market Authority',
            ].map((tag) => (
              <button
                key={tag}
                className="px-6 py-2 rounded-full border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:text-[#001633] hover:border-slate-300 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-8 pb-32 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Featured Article */}
            <article className="md:col-span-8 group cursor-pointer">
              <div className="light-article-card rounded-xl overflow-hidden h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    alt="Growth roadmap visualization"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-dZozGEeIMtCN_LZS-1U3NaVLJ1FDdLd2XdFIDA_VhItV2KFS8xYMUrzrTX7TFFK7IjVbFBwAlmCKRl6F7SoW6Cnlth5k8pppYaT42UPsEv14l47znrhAf91MEcr5BgLm-SM8R2pIJY9cxYyOYaFgwjCq7Yko0nD0pJHNTCoB3OVuioKB6NoseL4IC7hSPrKLSvgthwwfRxIbqh1568zjn8wqaHO7lQNyF4rtLZLu73Ptvr_V2DfbcqzLuT0qNyENVEXY_5TY3SM"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#E8C05A] font-bold">
                      Growth Strategy
                    </span>
                    <span className="h-px w-8 bg-slate-200"></span>
                    <span className="text-xs text-slate-500 font-medium tracking-wider">
                      12 MIN READ
                    </span>
                  </div>
                  <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-[#001633] group-hover:text-[#E8C05A] transition-colors">
                    The 12-Month Roadmap: What to Expect from a High-End Growth
                    System Investment
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow">
                    Enterprise growth isn&apos;t built in a week. We break down
                    the specific milestones, infrastructure requirements, and
                    compound returns expected over a year-long partnership.
                  </p>
                  <div className="flex items-center gap-2 text-[#001633] font-bold group-hover:text-[#E8C05A] transition-colors">
                    <span>Read Full Strategy</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Side Article */}
            <article className="md:col-span-4 group cursor-pointer">
              <div className="light-article-card rounded-xl overflow-hidden h-full flex flex-col">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    alt="Financial metrics chart"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi9_But7kirU2LN0qzNx1c3ihL9ZAafHKv2xc5pshWu7Lq3PazDNxoJJwm2INKe0ZSFRuf4YcBOjbaKyf1KhAimGrEBdiYViErFxvpj6VUeiVMQ_IDU0ic_Is7P_CtZZak6csCmKA0Ztp_f0M44IO_15Th9ajzLYwI2Jh7CRkiDtxCgACP76T4_CtQyfT15TbeXv2dr1LD-SeVK7hPJpzXQPDCu9i_5BHT4wsPnplKh9GIcXAkDnE6lOGkCv7j9evlVAmRtzB3DjM"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 text-xs tracking-widest text-[#E8C05A] font-bold">
                    ORGANIC ROI
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4 text-[#001633] group-hover:text-[#E8C05A] transition-colors">
                    Why $10M+ Companies Are Shifting Budget from PPC to Organic
                    Growth Systems
                  </h3>
                  <div className="text-slate-500 text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-xs">
                      calendar_today
                    </span>
                    May 14, 2026
                  </div>
                </div>
              </div>
            </article>

            {/* Bottom row */}
            {[
              {
                icon: 'article',
                tag: 'AUTHORITY',
                title:
                  'Building Topical Authority: The Content Strategy That Actually Works',
                body: 'Move beyond keyword stuffing. Learn how to map high-intent clusters that establish dominance in complex B2B niches.',
                kind: 'Insight Paper',
              },
              {
                icon: 'settings_suggest',
                tag: 'TECHNICAL',
                title:
                  'Technical Infrastructure for Enterprise: What Your Dev Team Needs to Know',
                body: 'The tech stack requirements for scaling to millions of monthly visitors without compromising security or speed.',
                kind: 'Technical Guide',
              },
              {
                icon: 'trending_up',
                tag: 'VALUE CREATION',
                title:
                  'The Compounding Effect: How Organic Growth Builds Enterprise Value',
                body: 'Why organic systems are treated as balance sheet assets rather than simple marketing expenses in M&A valuations.',
                kind: 'Market Analysis',
              },
            ].map((card) => (
              <article
                key={card.title}
                className="md:col-span-4 group cursor-pointer"
              >
                <div className="light-article-card rounded-xl p-8 flex flex-col h-full">
                  <div className="mb-8">
                    <span className="material-symbols-outlined text-4xl text-[#001633]">
                      {card.icon}
                    </span>
                  </div>
                  <div className="mb-4 text-xs tracking-widest text-[#E8C05A] font-bold">
                    {card.tag}
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-6 text-[#001633] group-hover:text-[#E8C05A] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-8 flex-grow">
                    {card.body}
                  </p>
                  <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                      {card.kind}
                    </span>
                    <span className="material-symbols-outlined text-[#001633]">
                      add
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Newsletter CTA */}
      <section className="bg-surface-container-lowest py-24 px-8 border-y border-outline-variant/20">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6">
            Receive Strategic Insights
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">
            Join 4,000+ market leaders receiving our bi-weekly breakdown of
            high-stakes growth strategy.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              className="flex-grow bg-surface-container text-on-surface border border-outline-variant/30 rounded-lg focus:ring-primary-container focus:border-primary-container py-4 px-6"
              placeholder="Corporate Email Address"
              type="email"
            />
            <button
              type="button"
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-bold hover:brightness-110 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
