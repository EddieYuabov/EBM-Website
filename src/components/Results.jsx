// Results — animated metric cards. Values are intentionally left blank until
// real campaign data exists; swap `value`/`suffix` in RESULTS to populate them.
import { useEffect, useRef, useState } from 'react'

const RESULTS = [
  { value: null, suffix: '', label: 'Views Generated' },
  { value: null, suffix: '', label: 'Audience Growth' },
  { value: null, suffix: '', label: 'Profile Visits' },
  { value: null, suffix: '', label: 'Leads Generated' },
]

function ResultCard({ value, suffix, label, delayClass }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (value == null || !ref.current) return
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const duration = 1400
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className={`result-card reveal ${delayClass}`}>
      <div className={`result-card__value${value == null ? ' is-placeholder' : ''}`}>
        {value == null ? '—' : `${display.toLocaleString()}${suffix}`}
      </div>
      <div className="result-card__label">{label}</div>
    </div>
  )
}

export default function Results() {
  return (
    <section className="section section--dark" id="results">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Proof, Not Promises</span>
        </div>
        <h2 className="section-heading reveal d1">
          Creativity Gets Attention.<br />
          <span className="text-blue">Data</span> Tells Us What To Do Next.
        </h2>
        <p className="section-sub reveal d2">
          Every campaign is measured against real numbers — not vanity metrics.
        </p>

        <div className="results__grid">
          {RESULTS.map((r, i) => (
            <ResultCard key={r.label} {...r} delayClass={`d${i + 1}`} />
          ))}
        </div>
        <p className="results__note">
          * Real client results will populate this section as campaigns launch.
        </p>
      </div>
    </section>
  )
}
