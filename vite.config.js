import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Read every markdown file in /content/blog at config-load time so each
// post is included in the prerender route list. The prerenderer will then
// emit a static HTML file for /insights/<slug> matching every post.
const blogDir = path.resolve(__dirname, 'content/blog')
const blogSlugs = fs.existsSync(blogDir)
  ? fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace(/\.md$/, ''))
  : []

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/consulting',
        '/services',
        '/about',
        '/insights',
        '/tools',
        '/contact',
        ...blogSlugs.map((slug) => `/insights/${slug}`),
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        // App.jsx fires this event after the first paint so the snapshot
        // captures the fully-rendered DOM rather than an empty <div id="root">.
        renderAfterDocumentEvent: 'render-event',
        maxConcurrentRoutes: 2,
        headless: true,
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html.replace(
          /http:\/\/localhost:\d+\//g,
          '/',
        )
      },
    }),
  ],
})
