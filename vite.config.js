import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'

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
        // Strip the dev/prod hash from absolute asset URLs back to relative
        // and ensure each route's <title> stays untouched.
        renderedRoute.html = renderedRoute.html.replace(
          /http:\/\/localhost:\d+\//g,
          '/',
        )
      },
    }),
  ],
})
