import { useState } from 'react'

// Netlify Forms notes:
// - The form is detected at deploy time from the prerendered HTML for /contact
//   (vite.config.js includes /contact in the prerender routes list).
// - `data-netlify="true"` and a hidden `form-name` field are required so Netlify
//   accepts the AJAX-style POST below.
// - `data-netlify-honeypot="bot-field"` adds a simple honeypot trap.

const FORM_NAME = 'contact'

function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key] ?? ''),
    )
    .join('&')
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.target
    const data = {
      'form-name': FORM_NAME,
      'bot-field': form['bot-field']?.value || '',
      fullName: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      firmName: form.firmName.value,
      attorneyCount: form.attorneyCount.value,
      message: form.message.value,
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      })
      if (!response.ok) {
        throw new Error(`Submission failed (${response.status})`)
      }
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary-container/10 to-transparent blur-[140px] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary-container tracking-[0.3em] uppercase text-xs font-bold">
            Contact Bear Impact
          </span>
          <h1 className="serif-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mt-6">
            Let&apos;s Build Your{' '}
            <span className="text-gold italic">Inbound Engine</span>.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-light mt-8 max-w-2xl mx-auto leading-relaxed">
            Tell us about your firm and what you&apos;re trying to solve. We
            review every inquiry personally and respond within two business
            days.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-surface-container-lowest pb-32 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="navy-glass-card rounded-xl p-8 md:p-12">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="serif-display text-4xl font-bold text-gold mb-4">
                  Thank you.
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mx-auto">
                  Your message is in. We&apos;ll review it personally and reply
                  within two business days from a real human at Bear Impact.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-10 bg-primary-container text-on-primary px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                name={FORM_NAME}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Required by Netlify so the function knows which form this is */}
                <input type="hidden" name="form-name" value={FORM_NAME} />
                {/* Honeypot — real users won't see or fill this */}
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human:{' '}
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Field
                    label="Full Name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                  />
                  <Field
                    label="Firm Name"
                    name="firmName"
                    type="text"
                    autoComplete="organization"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="attorneyCount"
                    className="block text-primary-container tracking-[0.2em] uppercase text-xs font-bold mb-2"
                  >
                    Number of Attorneys
                  </label>
                  <select
                    id="attorneyCount"
                    name="attorneyCount"
                    required
                    defaultValue=""
                    className="w-full bg-surface-container-highest border border-outline-variant/40 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary-container transition-colors"
                  >
                    <option value="" disabled>
                      Select range…
                    </option>
                    <option value="1-5">1–5</option>
                    <option value="6-15">6–15</option>
                    <option value="16-50">16–50</option>
                    <option value="51-150">51–150</option>
                    <option value="150+">150+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-primary-container tracking-[0.2em] uppercase text-xs font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your firm, your current growth challenges, and what you're hoping to achieve."
                    className="w-full bg-surface-container-highest border border-outline-variant/40 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary-container transition-colors resize-y placeholder:text-on-surface-variant/50"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-error text-sm">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed w-full md:w-auto"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function Field({ label, name, type, autoComplete, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-primary-container tracking-[0.2em] uppercase text-xs font-bold mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full bg-surface-container-highest border border-outline-variant/40 text-on-surface px-4 py-3 rounded-lg focus:outline-none focus:border-primary-container transition-colors"
      />
    </div>
  )
}
