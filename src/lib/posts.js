// Loads every markdown file under /content/blog at build time, parses
// front-matter, and exposes a sorted list of posts plus a slug lookup.
//
// Vite's `import.meta.glob` with `eager: true` inlines the file contents
// into the bundle, so this works in the browser AND during prerendering
// (puppeteer just sees an already-built JS module).

const modules = import.meta.glob('/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

/**
 * Tiny YAML front-matter parser.
 *
 * Supports:
 *  - key: value         (strings, with optional surrounding quotes)
 *  - key:               (followed by indented `- item` lines for lists)
 *
 * That covers the schema we configure in Decap. We deliberately avoid
 * gray-matter / js-yaml so the bundle stays small and there are no
 * Node-only polyfills.
 */
function parseFrontMatter(raw) {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const yaml = match[1]
  const content = match[2]
  const data = {}

  const lines = yaml.split(/\r?\n/)
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i++; continue }

    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!kv) { i++; continue }

    const key = kv[1]
    let val = kv[2].trim()

    if (val === '') {
      // Possibly a list — collect following indented `- item` lines
      const items = []
      i++
      while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
        const item = lines[i].replace(/^\s*-\s+/, '').trim().replace(/^['"]|['"]$/g, '')
        items.push(item)
        i++
      }
      data[key] = items
      continue
    }

    // Strip wrapping quotes
    val = val.replace(/^['"]|['"]$/g, '')
    data[key] = val
    i++
  }
  return { data, content }
}

function buildPost(filePath, raw) {
  const slug = filePath.split('/').pop().replace(/\.md$/, '')
  const { data, content } = parseFrontMatter(raw)
  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    author: data.author || '',
    featured_image: data.featured_image || '',
    summary: data.summary || '',
    tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
    body: content.trim(),
  }
}

export const posts = Object.entries(modules)
  .map(([path, raw]) => buildPost(path, raw))
  .sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0
    const db = b.date ? new Date(b.date).getTime() : 0
    return db - da
  })

export function getPost(slug) {
  return posts.find((p) => p.slug === slug)
}

export function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
