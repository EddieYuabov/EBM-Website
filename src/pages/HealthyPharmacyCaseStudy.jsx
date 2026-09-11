import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PhoneFrame from '../components/PhoneFrame'
import CountStat from '../components/CountStat'
import FinalCTA from '../components/FinalCTA'
import { PlatformIcon } from '../components/icons/PlatformIcons'
import { PROJECTS } from '../data/projects'
import { HP } from '../data/healthyPharmacyCaseStudy'
import useReveal from '../hooks/useReveal'

const CURRENT_SLUG = 'healthy-pharmacy'

// Deterministic, illustrative 90-day trend line with three breakout bumps —
// no literal day-by-day dataset was supplied, only the highlighted periods
// and the single-day peak, so the curve is generated rather than hand-traced.
const BUMPS = [
  { center: 0.20, height: 68,  width: 0.045 }, // late June
  { center: 0.54, height: 82,  width: 0.045 }, // late July
  { center: 0.86, height: 128, width: 0.03 },  // late August / Aug 27 peak
]
function buildGraphPoints() {
  const width = 600, height = 160, n = 70
  const pts = []
  for (let i = 0; i <= n; i++) {
    const t = i / n
    let y = 14
    BUMPS.forEach((b) => {
      const d = (t - b.center) / b.width
      y += b.height * Math.exp(-d * d)
    })
    y += Math.sin(i * 12.9) * 2.5
    const x = t * width
    const yPos = Math.max(6, height - y)
    pts.push(`${x.toFixed(1)},${yPos.toFixed(1)}`)
  }
  return pts.join(' ')
}
const GRAPH_POINTS = buildGraphPoints()

function GraphLine() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const length = el.getTotalLength()
    el.style.strokeDasharray = String(length)
    el.style.strokeDashoffset = String(length)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        requestAnimationFrame(() => {
          el.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1)'
          el.style.strokeDashoffset = '0'
        })
        observer.disconnect()
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <polyline
      ref={ref}
      points={GRAPH_POINTS}
      fill="none"
      stroke="url(#hp-line-grad)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

function FunnelStage({ stage, detail, pending, isLast }) {
  return (
    <>
      <div className={`hp-funnel__stage${pending ? ' is-pending' : ''}`}>
        <span className="hp-funnel__stage-label">{stage}</span>
        <span className="hp-funnel__stage-detail">{detail}</span>
      </div>
      {!isLast && (
        <span className="hp-funnel__arrow" aria-hidden="true">
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M8 2v14M2 11l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </>
  )
}

export default function HealthyPharmacyCaseStudy() {
  useReveal([CURRENT_SLUG])
  const [tappedFrame, setTappedFrame] = useState(null)

  const idx = PROJECTS.findIndex((p) => p.slug === CURRENT_SLUG)
  const project = PROJECTS[idx]
  const next = PROJECTS[(idx + 1) % PROJECTS.length]

  return (
    <>
      {/* HERO */}
      <section className="section section--dark case-open hp-hero">
        <div className="container">
          <Link to="/work" className="case-back reveal">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M11 2L3 7l8 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Work
          </Link>

          {project.logo && (
            <div className="reveal d1">
              <span className="client-logo-badge client-logo-badge--sm">
                <img src={project.logo} alt={`${project.name} logo`} />
              </span>
            </div>
          )}
          <span className="eyebrow reveal d1">Pharmacy / Healthcare</span>
          <h1 className="display display-lg reveal d2">
            Making A Pharmacy<br />Worth Following.
          </h1>
          <p className="case-open__oneliner reveal d3">
            We turned everyday pharmacy experiences into entertaining, relatable
            short-form content—and built a repeatable audience engine around it.
          </p>

          <div className="case-open__platforms reveal d3">
            {project.platforms.map((p) => (
              <PlatformIcon key={p} name={p} className="case-open__platform-icon" />
            ))}
          </div>

          <div className="case-open__media hp-hero__media reveal d4">
            {HP.contentFormats.map((c, i) => (
              <PhoneFrame key={i} hook={c.title} featured={i === 0} className={`f-${i}`} />
            ))}
          </div>

          <div className="results__grid hp-hero__stats reveal d4">
            {HP.hero.metrics.map((m) => (
              <div key={m.label} className="result-card">
                <CountStat display={m.display} label={m.label} />
              </div>
            ))}
          </div>
          <p className="results__note">{HP.hero.period}</p>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="section section--darkalt case-section">
        <div className="container">
          <span className="eyebrow reveal">The Challenge</span>
          <h2 className="case-section__text reveal d1" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800 }}>
            {HP.challenge.headline}
          </h2>
          <p className="section-sub reveal d2" style={{ marginTop: 18 }}>{HP.challenge.body}</p>
        </div>
      </section>

      {/* IDEA */}
      <section className="section section--dark case-section">
        <div className="container hp-idea">
          <div>
            <span className="eyebrow reveal">The Idea</span>
            <h2 className="display display-md reveal d1">
              {HP.idea.headline.map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h2>
            <p className="section-sub reveal d2">{HP.idea.body}</p>
          </div>
          <div className="hp-idea__media reveal d3">
            {HP.contentFormats.slice(0, 3).map((c, i) => (
              <PhoneFrame key={i} hook={c.title} className={`hp-idea__frame idea-${i}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT FORMATS */}
      <section className="section section--darkalt hp-formats" id="content-formats">
        <div className="container">
          <span className="eyebrow reveal">The Content</span>
          <h2 className="section-heading reveal d1">Recurring Formats, Not One-Off Videos.</h2>
        </div>
        <div className="hp-formats__grid reveal d2">
          {HP.contentFormats.map((c, i) => (
            <button
              key={c.title}
              className={`hp-formats__card${tappedFrame === i ? ' is-active' : ''}`}
              onClick={() => setTappedFrame(tappedFrame === i ? null : i)}
            >
              <PhoneFrame hook={c.title} className="hp-formats__frame" />
              <span className="hp-formats__title">{c.title}</span>
              <span className="hp-formats__desc">{c.desc}</span>
            </button>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="section section--dark case-results" id="results">
        <div className="container">
          <span className="eyebrow reveal">The Results</span>
          <h2 className="section-heading reveal d1">
            {HP.results.lines.map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="section-sub reveal d2">{HP.results.body}</p>

          <div className="results__grid reveal d3">
            {HP.results.metrics.map((m) => (
              <div key={m.label} className="result-card">
                <CountStat display={m.display} label={m.label} />
              </div>
            ))}
          </div>
          <p className="results__note">{HP.results.period}</p>
        </div>
      </section>

      {/* GRAPH — repeatable virality */}
      <section className="section section--darkalt hp-graph">
        <div className="container">
          <span className="eyebrow reveal">Visualize Repeatable Virality</span>
          <h2 className="section-heading reveal d1">
            {HP.graph.headline.map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="section-sub reveal d2">{HP.graph.body}</p>

          <div className="hp-graph__chart reveal d3">
            <svg viewBox="0 0 600 160" preserveAspectRatio="none" width="100%" height="100%">
              <defs>
                <linearGradient id="hp-line-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
              </defs>
              <GraphLine />
            </svg>
          </div>

          <div className="hp-graph__legend reveal d4">
            {HP.graph.spikes.map((s) => (
              <span key={s} className="hp-graph__legend-item">
                <span className="hp-graph__legend-dot" />{s}
              </span>
            ))}
          </div>

          <div className="case-standout reveal d4">
            <span className="case-standout__label">{HP.graph.peak.label} — {HP.graph.peak.date}</span>
            <CountStat display={HP.graph.peak.display} label="" className="hp-graph__peak-val" />
          </div>

          <p className="results__note">{HP.graph.caption}</p>
        </div>
      </section>

      {/* MOMENTUM */}
      <section className="section section--dark hp-momentum">
        <div className="container">
          <span className="eyebrow reveal">Show Momentum</span>
          <h2 className="section-heading reveal d1">{HP.momentum.periodLabel}</h2>
          <div className="results__grid reveal d2">
            {HP.momentum.stats.map((s) => (
              <div key={s.label} className="result-card">
                <CountStat display={s.display} label={s.label} delta={s.delta} emphasize={s.emphasize} />
              </div>
            ))}
          </div>
          <p className="section-sub reveal d3" style={{ marginTop: 26 }}>{HP.momentum.body}</p>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="section section--darkalt case-results">
        <div className="container">
          <span className="eyebrow reveal">Instagram</span>
          <h2 className="section-heading reveal d1">{HP.instagram.headline}</h2>
          <p className="section-sub reveal d2">{HP.instagram.body}</p>
          <div className="results__grid reveal d3">
            {HP.instagram.stats.map((s) => (
              <div key={s.label} className="result-card">
                <CountStat display={s.display} label={s.label} />
              </div>
            ))}
          </div>
          <p className="results__note">{HP.instagram.period}</p>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="section section--dark">
        <div className="container">
          <span className="eyebrow reveal">Audience</span>
          <h2 className="section-heading reveal d1">{HP.audience.headline}</h2>
          <p className="section-sub reveal d2">{HP.audience.body}</p>
          <div className="hp-audience__row reveal d3">
            {HP.audience.stats.map((s) => (
              <CountStat key={s.label} display={s.display} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSION OPPORTUNITY */}
      <section className="section section--darkalt hp-conversion">
        <div className="container">
          <span className="eyebrow reveal">The Most Important Part</span>
          <h2 className="section-heading reveal d1">{HP.conversion.headline}</h2>
          <p className="section-sub reveal d2">{HP.conversion.body}</p>

          <div className="hp-funnel reveal d3">
            {HP.conversion.funnel.map((f, i) => (
              <FunnelStage key={f.stage} {...f} isLast={i === HP.conversion.funnel.length - 1} />
            ))}
          </div>

          <div className="case-standout reveal d4">
            <CountStat display={HP.conversion.tapRate.display} label={HP.conversion.tapRate.label} />
          </div>

          <p className="section-sub reveal d4" style={{ marginTop: 26 }}>{HP.conversion.closingBody}</p>
        </div>
      </section>

      {/* TAKEAWAYS */}
      <section className="section section--dark">
        <div className="container">
          <span className="eyebrow reveal">What The Data Changed</span>
          <h2 className="section-heading reveal d1">{HP.takeaways.headline}</h2>
          <div className="hp-takeaways__grid reveal d2">
            {HP.takeaways.items.map((t) => (
              <div key={t.num} className="hp-takeaway">
                <span className="hp-takeaway__num">{t.num}</span>
                <h3 className="hp-takeaway__title">{t.title}</h3>
                <p className="hp-takeaway__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT KPI */}
      <section className="section section--darkalt">
        <div className="container">
          <div className="hp-next-kpi reveal">
            <span className="hp-next-kpi__label">{HP.nextKPI.label}</span>
            <h2 className="display display-md hp-next-kpi__value">{HP.nextKPI.value}</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>{HP.nextKPI.body}</p>
          </div>
        </div>
      </section>

      {/* WHAT EMPOWER DID */}
      <section className="section section--dark">
        <div className="container">
          <span className="eyebrow reveal">What Empower Did</span>
          <div className="hp-tags reveal d1">
            {HP.whatWeDid.map((t) => (
              <span key={t} className="hp-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        lines={['If We Can Make', 'A Pharmacy This Interesting...']}
        accent="Imagine What We Can Do With Your Business."
        sub=""
        showPhone={false}
        nextProject={{ to: `/work/${next.slug}`, label: next.name }}
      />
    </>
  )
}
