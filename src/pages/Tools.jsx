import { useState, useRef, useEffect } from 'react'
import { usePageMeta } from '../lib/usePageMeta.js'

const fmt = (n) => {
  if (Math.abs(n) >= 1000) return '$' + Math.round(n).toLocaleString('en-US')
  return '$' + n.toFixed(0)
}
const fmtShort = (n) => {
  if (Math.abs(n) >= 1_000_000) return '$' + (n / 1_000_000).toFixed(1) + 'M'
  if (Math.abs(n) >= 1_000) return '$' + (n / 1_000).toFixed(1) + 'K'
  return '$' + n.toFixed(0)
}
const fmtNum = (n) => Math.round(n).toLocaleString('en-US')

export default function Tools() {
  usePageMeta({
    title: 'Legal Marketing Tools & Resources | Bear Impact',
    description:
      'Free tools and resources for law firm marketing, including the Lost-Case Revenue Calculator that quantifies the cases your organic channel is missing.',
    path: '/tools',
  })

  const [sessions, setSessions] = useState('')
  const [intent, setIntent] = useState('30')
  const [crSite, setCrSite] = useState('3')
  const [crSales, setCrSales] = useState('30')
  const [caseValue, setCaseValue] = useState('')
  const [ltvMult, setLtvMult] = useState('1')
  const [tChange, setTChange] = useState('-25')
  const [results, setResults] = useState(null)
  const resultsRef = useRef(null)

  const calculate = () => {
    const S = parseFloat(sessions) || 0
    const PI = parseFloat(intent) || 0
    const CRsite = parseFloat(crSite) || 0
    const CRsales = parseFloat(crSales) || 0
    const Vcase = parseFloat(caseValue) || 0
    const LTV = parseFloat(ltvMult) || 1
    const Tchg = parseFloat(tChange) || 0

    if (S === 0 || Vcase === 0) {
      alert("Please enter at least your monthly organic visitors and average case fee.")
      return
    }

    const Q = S * (PI / 100)
    const Leads = Q * (CRsite / 100)
    const Cases = Leads * (CRsales / 100)
    const RevMonth = Cases * Vcase * LTV
    const RevYear = RevMonth * 12
    const RevDeltaMo = RevMonth * (Tchg / 100)
    const RevDelta24 = RevDeltaMo * 24

    setResults({
      Q, Leads, Cases, RevMonth, RevYear, RevDeltaMo, RevDelta24,
      Vcase, LTV, Tchg,
    })
  }

  useEffect(() => {
    if (results && resultsRef.current) {
      const t = setTimeout(() => {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return () => clearTimeout(t)
    }
  }, [results])

  const handleKey = (e) => { if (e.key === 'Enter') calculate() }

  const isLoss = results && results.Tchg < 0
  const afterRev = results ? results.RevMonth + results.RevDeltaMo : 0
  const maxRev = results ? Math.max(results.RevMonth, afterRev) || 1 : 1
  const pctCurrent = results ? (results.RevMonth / maxRev) * 100 : 0
  const pctAfter = results ? (afterRev / maxRev) * 100 : 0

  return (
    <div className="bg-[#f8f6f1] min-h-screen text-[#1a1a2e] font-['DM_Sans']">
      {/* HERO */}
      <section className="bg-[#001633] text-white pt-14 pb-12 px-6 text-center relative overflow-hidden">
        <div className="inline-block text-[11px] font-bold tracking-[2.5px] uppercase text-[#E8C05A] border-[1.5px] border-[#E8C05A] px-[18px] py-[6px] rounded-full mb-5">
          Free Assessment Tool
        </div>
        <h1 className="font-['DM_Serif_Display'] font-normal leading-[1.15] max-w-[680px] mx-auto mb-3.5 text-[clamp(24px,4vw,36px)]">
          Law Firm Lost-Case Revenue Calculator
        </h1>
        <p className="text-[#b0afc0] text-[15px] max-w-[540px] mx-auto">
          See exactly how much revenue your organic search channel produces — and what a traffic shift means in signed cases and collected fees.
        </p>
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-[#f8f6f1] rounded-t-[50%]" />
      </section>

      {/* MAIN */}
      <div className="max-w-[960px] mx-auto px-5 pb-16">
        {/* INPUT CARD */}
        <div className="bg-white rounded-[10px] shadow-[0_2px_20px_rgba(26,26,46,.06)] p-9 -mt-3 relative z-[2]">
          <h2 className="font-['DM_Serif_Display'] text-[22px] font-normal mb-1">Your firm's numbers</h2>
          <p className="text-[#7a7a8c] text-[13.5px] mb-7">
            Enter your current metrics below. If you're unsure, use the suggested defaults.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">
            <Field
              label="Monthly organic visitors from Google"
              help={`Grab last month's "Organic Search" sessions from GA4.`}
            >
              <InputWrap>
                <input
                  type="number"
                  value={sessions}
                  onChange={(e) => setSessions(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="e.g. 4,000"
                  min="0"
                  className={inputCls}
                />
              </InputWrap>
            </Field>

            <Field
              label="Percent of visitors actively looking for a lawyer"
              help="What share of your traffic is real case intent vs. blog browsers? If unsure, use 25–35%."
            >
              <InputWrap suffix="%">
                <input
                  type="number"
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="30"
                  min="0"
                  max="100"
                  className={`${inputCls} pr-8`}
                />
              </InputWrap>
            </Field>

            <Field
              label="Website visitors who contact your firm"
              help="Contact form submissions + calls ÷ total visitors. If unsure, use 2–5%."
            >
              <InputWrap suffix="%">
                <input
                  type="number"
                  value={crSite}
                  onChange={(e) => setCrSite(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="3"
                  min="0"
                  max="100"
                  step="0.1"
                  className={`${inputCls} pr-8`}
                />
              </InputWrap>
            </Field>

            <Field
              label="Inquiries that become signed cases"
              help="What percent of inquiries does your intake turn into paying clients? If unsure, use 20–40%."
            >
              <InputWrap suffix="%">
                <input
                  type="number"
                  value={crSales}
                  onChange={(e) => setCrSales(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="30"
                  min="0"
                  max="100"
                  className={`${inputCls} pr-8`}
                />
              </InputWrap>
            </Field>

            <Field
              label="Average fee collected per case"
              help="Last 12 months of collected fees ÷ number of new cases."
            >
              <InputWrap prefix="$">
                <input
                  type="number"
                  value={caseValue}
                  onChange={(e) => setCaseValue(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="5,000"
                  min="0"
                  className={`${inputCls} pl-7`}
                />
              </InputWrap>
            </Field>

            <Field
              label="Average number of cases per new client"
              help="If most clients are one-and-done, use 1. If you see repeat matters, 1.2–1.5."
            >
              <InputWrap>
                <input
                  type="number"
                  value={ltvMult}
                  onChange={(e) => setLtvMult(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="1"
                  min="0"
                  step="0.1"
                  className={inputCls}
                />
              </InputWrap>
            </Field>

            <div className="col-span-1 sm:col-span-2">
              <Field
                label="Traffic change you're worried about"
                help={
                  <>
                    For a 25% traffic drop, enter <strong>-25</strong>. For a 25% traffic gain, enter <strong>25</strong>.
                  </>
                }
              >
                <InputWrap suffix="%">
                  <input
                    type="number"
                    value={tChange}
                    onChange={(e) => setTChange(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="-25"
                    min="-100"
                    max="1000"
                    className={`${inputCls} pr-8`}
                  />
                </InputWrap>
              </Field>
            </div>
          </div>

          <button
            onClick={calculate}
            className="block w-full mt-7 py-4 font-['DM_Sans'] text-base font-bold tracking-[.4px] text-white bg-[#c8553d] hover:bg-[#e8735d] active:scale-[.985] transition-all rounded-lg"
          >
            Calculate My Revenue at Risk
          </button>
        </div>

        {/* RESULTS */}
        {results && (
          <div ref={resultsRef} className="mt-8 animate-[fadeUp_.45s_ease-out]">
            <div className="bg-white rounded-[10px] shadow-[0_2px_20px_rgba(26,26,46,.06)] p-9 border-t-4 border-[#1a1a2e]">
              <h2 className="font-['DM_Serif_Display'] text-[22px] font-normal mb-6">
                Your organic case pipeline
              </h2>

              {/* Pipeline funnel */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-[2px] mt-2 bg-[#ddd8d0] rounded-lg overflow-hidden">
                {[
                  { num: fmtNum(results.Q), label: 'Qualified Visitors' },
                  { num: fmtNum(results.Leads), label: 'Inquiries / mo' },
                  { num: results.Cases.toFixed(1), label: 'Signed Cases / mo' },
                  { num: fmt(results.RevMonth), label: 'Monthly Revenue' },
                ].map((s, i) => (
                  <div key={i} className="bg-white py-4 px-3 text-center">
                    <div className="font-['DM_Serif_Display'] text-2xl text-[#1a1a2e]">{s.num}</div>
                    <div className="text-[11px] font-semibold text-[#7a7a8c] uppercase tracking-[.8px] mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Big number tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7 mb-7">
                <div className="rounded-[10px] p-5 bg-[#1a1a2e] text-white">
                  <div className="text-xs font-bold tracking-[1.5px] uppercase mb-1.5 text-[#E8C05A]">
                    Current Monthly Revenue
                  </div>
                  <div className="font-['DM_Serif_Display'] leading-[1.1] text-[clamp(26px,4.5vw,36px)]">
                    {fmt(results.RevMonth)}
                  </div>
                  <div className="text-[13px] mt-1 opacity-70">
                    {results.Cases.toFixed(1)} cases × {fmt(results.Vcase)} × {results.LTV}
                  </div>
                </div>
                <div className="rounded-[10px] p-5 bg-[#eae7df] text-[#1a1a2e]">
                  <div className="text-xs font-bold tracking-[1.5px] uppercase mb-1.5 text-[#7a7a8c]">
                    Annualized Revenue
                  </div>
                  <div className="font-['DM_Serif_Display'] leading-[1.1] text-[clamp(26px,4.5vw,36px)]">
                    {fmt(results.RevYear)}
                  </div>
                  <div className="text-[13px] mt-1 opacity-70">from organic search alone</div>
                </div>
              </div>

              {/* Delta tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                {[
                  { label: `${isLoss ? 'Lost' : 'Gained'} Monthly Revenue`, value: fmtShort(Math.abs(results.RevDeltaMo)), sub: `from a ${Math.abs(results.Tchg)}% traffic ${isLoss ? 'drop' : 'gain'}` },
                  { label: `${isLoss ? 'Lost' : 'Gained'} Over 24 Months`, value: fmtShort(Math.abs(results.RevDelta24)), sub: 'cumulative impact in case fees' },
                ].map((t, i) => (
                  <div
                    key={i}
                    className={`rounded-[10px] p-5 border-[1.5px] ${
                      isLoss
                        ? 'bg-[#fdf0ee] text-[#c8553d] border-[#f5cdc5]'
                        : 'bg-[#edf5f0] text-[#2d6a4f] border-[#b7d9c5]'
                    }`}
                  >
                    <div className="text-xs font-bold tracking-[1.5px] uppercase mb-1.5">{t.label}</div>
                    <div className="font-['DM_Serif_Display'] leading-[1.1] text-[clamp(26px,4.5vw,36px)]">
                      {(isLoss ? '−' : '+') + t.value}
                    </div>
                    <div className="text-[13px] mt-1 opacity-70">{t.sub}</div>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="mt-2">
                <h3 className="text-sm font-bold mb-3.5 text-[#7a7a8c] uppercase tracking-[1px]">
                  Revenue comparison
                </h3>
                <div className="mb-3.5">
                  <div className="flex justify-between text-[13px] font-semibold mb-1">
                    <span>Current</span>
                    <span>{fmt(results.RevMonth)}/mo</span>
                  </div>
                  <div className="h-7 bg-[#eae7df] rounded-md overflow-hidden">
                    <div
                      className="h-full bg-[#1a1a2e] rounded-md transition-all duration-700"
                      style={{ width: `${pctCurrent}%` }}
                    />
                  </div>
                </div>
                <div className="mb-3.5">
                  <div className="flex justify-between text-[13px] font-semibold mb-1">
                    <span>After {Math.abs(results.Tchg)}% {isLoss ? 'drop' : 'gain'}</span>
                    <span>{fmt(afterRev)}/mo</span>
                  </div>
                  <div className="h-7 bg-[#eae7df] rounded-md overflow-hidden">
                    <div
                      className={`h-full rounded-md transition-all duration-700 ${
                        isLoss ? 'bg-[#c8553d]' : 'bg-[#2d6a4f]'
                      }`}
                      style={{ width: `${Math.max(pctAfter, 0)}%` }}
                    />
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[12.5px] text-[#7a7a8c] leading-[1.5] border-t border-[#ddd8d0] pt-4">
                This assumes your current intake and close rates stay the same. A focused SEO engagement typically improves both traffic <em>and</em> conversion — compounding results beyond what this model shows.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-7 bg-[#001633] text-white rounded-[10px] p-8 text-center animate-[fadeUp_.5s_ease-out_.15s_both]">
              <h3 className="font-['DM_Serif_Display'] text-xl font-normal mb-2">
                Want the full diagnostic — for free?
              </h3>
              <p className="text-[#b0afc0] text-sm mb-5 max-w-[480px] mx-auto">
                We'll run this analysis with your real GA4 data, audit your top-20 pages, and show you the fastest path to recovering (or growing) this revenue.
              </p>
              <a
                href="#"
                className="inline-block px-9 py-3.5 font-['DM_Sans'] text-[15px] font-bold text-[#1a1a2e] bg-[#E8C05A] hover:bg-[#c9a24c] rounded-lg transition-colors no-underline"
              >
                Book a 30-Minute Pipeline Review →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const inputCls =
  "w-full px-3.5 py-3 font-['DM_Sans'] text-[15px] font-semibold border-[1.5px] border-[#ddd8d0] rounded-lg bg-[#fafaf7] text-[#1a1a2e] focus:outline-none focus:border-[#c8553d] focus:shadow-[0_0_0_3px_rgba(200,85,61,.12)] transition-all [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"

function Field({ label, help, children }) {
  return (
    <div className="relative">
      <label className="block font-semibold text-[13.5px] mb-1.5 text-[#1a1a2e]">{label}</label>
      <div className="text-xs text-[#7a7a8c] mb-2 leading-[1.45]">{help}</div>
      {children}
    </div>
  )
}

function InputWrap({ children, prefix, suffix }) {
  return (
    <div className="relative flex items-center">
      {prefix && (
        <span className="absolute left-3.5 text-sm font-semibold text-[#7a7a8c] pointer-events-none">
          {prefix}
        </span>
      )}
      {children}
      {suffix && (
        <span className="absolute right-3.5 text-sm font-semibold text-[#7a7a8c] pointer-events-none">
          {suffix}
        </span>
      )}
    </div>
  )
}
