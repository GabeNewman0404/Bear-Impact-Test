import { Link } from 'react-router-dom'
import { posts, formatDate } from '../lib/posts.js'
import { usePageMeta } from '../lib/usePageMeta.js'

export default function Insights() {
  usePageMeta({
    title: 'Legal Marketing Insights & Blog | Bear Impact',
    description:
      'Deep-dive articles on legal marketing, SEO for law firms, reducing ad dependence, and building sustainable case growth through inbound authority.',
    path: '/insights',
  })

  const [featured, ...rest] = posts

  return (
    <main className="min-h-screen">
      {/* Hero Section (Dark) */}
      <section className="relative pt-24 pb-12 px-8 max-w-screen-2xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-primary-container/10 to-transparent blur-[120px] -z-10"></div>
        <div className="max-w-4xl">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-8">
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
        {/* Blog Grid */}
        <section className="px-8 py-20 max-w-screen-2xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-slate-500 text-lg">
                No blog posts yet. Check back soon — or sign in at{' '}
                <code className="bg-slate-100 px-2 py-1 rounded text-sm">/admin</code>{' '}
                to publish the first one.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Featured (most recent) post */}
              <article className="md:col-span-8 group">
                <Link to={`/insights/${featured.slug}`} className="block">
                  <div className="light-article-card rounded-xl overflow-hidden h-full flex flex-col">
                    <div className="aspect-video w-full overflow-hidden relative bg-gradient-to-br from-[#001633] via-[#0a2548] to-[#001633]">
                      {featured.featured_image ? (
                        <img
                          src={featured.featured_image}
                          alt={featured.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,192,90,0.22),transparent_60%)]" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[#E8C05A]/60 text-7xl">
                              trending_up
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="p-10 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-6">
                        {featured.tags && featured.tags[0] && (
                          <>
                            <span className="text-xs uppercase tracking-[0.2em] text-[#E8C05A] font-bold">
                              {featured.tags[0]}
                            </span>
                            <span className="h-px w-8 bg-slate-200"></span>
                          </>
                        )}
                        {featured.date && (
                          <time
                            dateTime={featured.date}
                            className="text-xs text-slate-500 font-medium tracking-wider uppercase"
                          >
                            {formatDate(featured.date)}
                          </time>
                        )}
                      </div>
                      <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-[#001633] group-hover:text-[#E8C05A] transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow">
                        {featured.summary}
                      </p>
                      <div className="flex items-center gap-2 text-[#001633] font-bold group-hover:text-[#E8C05A] transition-colors">
                        <span>Read Full Article</span>
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>

              {/* Side column — next post (if any) */}
              <aside className="md:col-span-4 grid grid-cols-1 gap-8">
                {rest.slice(0, 2).map((post) => (
                  <article key={post.slug} className="group">
                    <Link to={`/insights/${post.slug}`} className="block">
                      <div className="light-article-card rounded-xl overflow-hidden h-full flex flex-col">
                        <div className="aspect-square w-full overflow-hidden relative bg-gradient-to-br from-[#001633] via-[#0a2548] to-[#001633]">
                          {post.featured_image ? (
                            <img
                              src={post.featured_image}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <>
                              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(232,192,90,0.22),transparent_60%)]" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[#E8C05A]/60 text-6xl">
                                  query_stats
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="p-8">
                          {post.tags && post.tags[0] && (
                            <div className="mb-4 text-xs tracking-widest text-[#E8C05A] font-bold uppercase">
                              {post.tags[0]}
                            </div>
                          )}
                          <h3 className="font-headline text-xl font-bold mb-4 text-[#001633] group-hover:text-[#E8C05A] transition-colors">
                            {post.title}
                          </h3>
                          {post.date && (
                            <div className="text-slate-500 text-sm flex items-center gap-2">
                              <span className="material-symbols-outlined text-xs">
                                calendar_today
                              </span>
                              {formatDate(post.date)}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </aside>

              {/* Remaining posts as a 3-up grid */}
              {rest.length > 2 &&
                rest.slice(2).map((post) => (
                  <article key={post.slug} className="md:col-span-4 group">
                    <Link to={`/insights/${post.slug}`} className="block h-full">
                      <div className="light-article-card rounded-xl p-8 flex flex-col h-full">
                        <div className="mb-6 text-xs tracking-widest text-[#E8C05A] font-bold uppercase">
                          {post.tags && post.tags[0] ? post.tags[0] : 'INSIGHT'}
                        </div>
                        <h3 className="font-headline text-2xl font-bold mb-6 text-[#001633] group-hover:text-[#E8C05A] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-8 flex-grow">
                          {post.summary}
                        </p>
                        <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                          {post.date && (
                            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                              {formatDate(post.date)}
                            </span>
                          )}
                          <span className="material-symbols-outlined text-[#001633] group-hover:text-[#E8C05A] transition-colors">
                            arrow_forward
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
            </div>
          )}
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
