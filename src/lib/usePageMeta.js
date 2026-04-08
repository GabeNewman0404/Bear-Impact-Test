import { useLayoutEffect } from 'react'

// Canonical site origin used for absolute URLs in og:url and og:image. Update
// this if the production domain changes.
const SITE_URL = 'https://bearimpact.com'

// Default Open Graph image used unless a page passes its own. The file lives
// in /public so it ships at the site root.
const DEFAULT_OG_IMAGE = '/bear-impact-logo.jpg'

const SITE_NAME = 'Bear Impact'

// Helper: find or create a <meta> tag matching a name/property selector and
// set its content. Tagging managed elements with data-managed="page-meta"
// makes it easy to reason about (and would let us clean them up later if we
// ever needed to).
function upsertMeta(attr, key, value) {
  if (!value) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    el.setAttribute('data-managed', 'page-meta')
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    el.setAttribute('data-managed', 'page-meta')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets per-page <title>, meta description, canonical URL, and Open Graph /
 * Twitter Card tags. Call once at the top of a page component.
 *
 * Uses useLayoutEffect so tags are written before useEffects fire — the
 * Puppeteer prerender signal in App.jsx uses a regular useEffect, so this
 * ensures the prerendered HTML snapshot for each route contains the correct
 * page-specific metadata.
 *
 * @param {object} opts
 * @param {string} opts.title       Full <title> string (already includes brand)
 * @param {string} opts.description Meta description (<= 160 chars)
 * @param {string} [opts.path]      Route path, e.g. "/contact". Used for canonical + og:url.
 * @param {string} [opts.image]     Absolute or root-relative og:image URL.
 * @param {string} [opts.type]      og:type, defaults to "website" ("article" for blog posts).
 */
export function usePageMeta({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
}) {
  useLayoutEffect(() => {
    if (typeof document === 'undefined') return

    const url = `${SITE_URL}${path}`
    const absoluteImage = image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`

    // <title>
    if (title) document.title = title

    // Standard meta description
    upsertMeta('name', 'description', description)

    // Canonical URL
    upsertLink('canonical', url)

    // Open Graph
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', absoluteImage)
    upsertMeta('property', 'og:site_name', SITE_NAME)

    // Twitter Card (summary_large_image renders the og:image as a hero card)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', absoluteImage)
  }, [title, description, path, image, type])
}
