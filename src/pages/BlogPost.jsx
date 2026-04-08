import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost, formatDate } from '../lib/posts.js'

const mdComponents = {
  h1: (props) => <h1 className="font-headline text-4xl md:text-5xl font-bold text-[#001633] mt-12 mb-6" {...props} />,
  h2: (props) => <h2 className="font-headline text-3xl font-bold text-[#001633] mt-10 mb-4" {...props} />,
  h3: (props) => <h3 className="font-headline text-2xl font-bold text-[#001633] mt-8 mb-3" {...props} />,
  p:  (props) => <p className="text-lg text-slate-700 leading-relaxed mb-6" {...props} />,
  a:  (props) => <a className="text-[#765a00] underline underline-offset-4 hover:text-[#E8C05A] transition-colors" {...props} />,
  ul: (props) => <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-lg text-slate-700" {...props} />,
  ol: (props) => <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-lg text-slate-700" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-[#E8C05A] pl-6 italic text-xl text-[#001633] my-8"
      {...props}
    />
  ),
  code: (props) => (
    <code className="bg-slate-100 text-[#001633] rounded px-1.5 py-0.5 text-base font-mono" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-[#001633] text-slate-100 rounded-lg p-6 overflow-x-auto my-6 text-sm" {...props} />
  ),
  hr: () => <hr className="my-12 border-slate-200" />,
  img: (props) => <img className="rounded-lg my-8 w-full" alt="" {...props} />,
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <main className="bg-white min-h-screen pt-32 pb-32 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-headline text-5xl font-bold text-[#001633] mb-6">
            Post not found
          </h1>
          <p className="text-slate-600 text-lg mb-10">
            We couldn&apos;t find a blog post at <code>/insights/{slug}</code>.
          </p>
          <Link
            to="/insights"
            className="inline-block bg-[#001633] text-white px-8 py-4 rounded-lg font-bold hover:brightness-110 transition-all"
          >
            ← Back to Insights
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-8 bg-[#001633] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-[#E8C05A] text-sm font-semibold tracking-wider uppercase mb-8 hover:brightness-110"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            All Insights
          </Link>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#E8C05A] border border-[#E8C05A]/40 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/70">
            {post.author && <span className="font-semibold">{post.author}</span>}
            {post.author && post.date && <span className="opacity-50">·</span>}
            {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
          </div>
        </div>
      </section>

      {/* Featured image */}
      {post.featured_image && (
        <div className="max-w-4xl mx-auto px-8 -mt-8 mb-12 relative z-10">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full rounded-xl shadow-2xl border border-slate-200"
          />
        </div>
      )}

      {/* Body */}
      <article className="max-w-3xl mx-auto px-8 pb-32 pt-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {post.body}
        </ReactMarkdown>

        <div className="mt-16 pt-10 border-t border-slate-200">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-[#001633] font-bold hover:text-[#E8C05A] transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to all Insights
          </Link>
        </div>
      </article>
    </main>
  )
}
