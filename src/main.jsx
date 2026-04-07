import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')

const tree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If the page was prerendered, the root already has markup — hydrate it.
// Otherwise (dev mode, or first run before prerender) do a fresh render.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, tree)
} else {
  ReactDOM.createRoot(container).render(tree)
}
