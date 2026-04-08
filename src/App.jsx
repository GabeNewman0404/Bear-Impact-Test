import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Consulting from './pages/Consulting.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Insights from './pages/Insights.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Tools from './pages/Tools.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function SiteAnimations() {
  const { pathname } = useLocation()
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Wait one frame so the new route's DOM is mounted
    const raf = requestAnimationFrame(() => {
      // 1) Tag scroll-reveal targets (skip nav/footer)
      const candidates = Array.from(
        document.querySelectorAll('section, article, .glass-card, .light-glass-card, .navy-glass-card, .light-article-card')
      ).filter((el) => !el.closest('nav') && !el.closest('footer'))

      candidates.forEach((el) => {
        if (!el.classList.contains('reveal')) el.classList.add('reveal')
      })

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target
              el.classList.add('is-visible')
              io.unobserve(el)
              // After the transition completes, drop transform/transition entirely
              // so the element no longer sits on its own GPU layer.
              const onEnd = () => {
                el.classList.add('reveal-done')
                el.removeEventListener('transitionend', onEnd)
              }
              el.addEventListener('transitionend', onEnd)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      )
      candidates.forEach((el) => io.observe(el))

      // 2) Image fade-in for not-yet-loaded images
      const imgs = Array.from(document.querySelectorAll('img'))
      const imgHandlers = []
      imgs.forEach((img) => {
        if (img.complete && img.naturalWidth > 0) return
        img.classList.add('img-fade')
        const onLoad = () => img.classList.add('is-loaded')
        img.addEventListener('load', onLoad, { once: true })
        img.addEventListener('error', onLoad, { once: true })
        imgHandlers.push([img, onLoad])
      })

      // Cleanup on unmount / route change
      cleanup = () => {
        io.disconnect()
        imgHandlers.forEach(([img, fn]) => {
          img.removeEventListener('load', fn)
          img.removeEventListener('error', fn)
        })
      }
    })

    let cleanup = null
    return () => {
      cancelAnimationFrame(raf)
      if (cleanup) cleanup()
    }
  }, [pathname])
  return null
}

function PrerenderSignal() {
  // Tells @prerenderer/rollup-plugin that the page is fully rendered and
  // safe to snapshot. Harmless in dev / production runtime.
  useEffect(() => {
    document.dispatchEvent(new Event('render-event'))
  }, [])
  return null
}

export default function App() {
  return (
    <>
      <div className="bg-aurora" aria-hidden="true">
        <div className="aurora-shimmer" />
      </div>
      <ScrollToTop />
      <SiteAnimations />
      <PrerenderSignal />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<BlogPost />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
      <Footer />
    </>
  )
}
