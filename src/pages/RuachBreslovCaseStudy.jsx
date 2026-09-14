import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PhoneFrame from '../components/PhoneFrame'
import CountStat from '../components/CountStat'
import FinalCTA from '../components/FinalCTA'
import { PlatformIcon } from '../components/icons/PlatformIcons'
import { PROJECTS } from '../data/projects'
import { RB } from '../data/ruachBreslovCaseStudy'
import useReveal from '../hooks/useReveal'

const CURRENT_SLUG = 'ruach-breslov'

function ApproachArrow() {
  return (
    <span className="process__arrow" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 11h18M13 4l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

export default function RuachBreslovCaseStudy() {
  useReveal([CURRENT_SLUG])
  const idx = PROJECTS.findIndex((p) => p.slug === CURRENT_SLUG)
  const project = PROJECTS[idx]
  const next = PROJECTS[(idx + 1) % PROJECTS.length]

  return (
    <>
      {/* HERO */}
      <section className="section section--dark case-open">
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
                <img src={project.logo} alt={`${project.name} logo`} loading="lazy" decoding="async" />
              </span>
            </div>
          )}
          <span className="eyebrow reveal d1">Jewish Education / Nonprofit</span>
          <h1 className="display display-lg reveal d2">Ruach Breslov</h1>
          <p className="case-open__oneliner reveal d3">
            We transformed long-form spiritual and philosophical lectures into
            engaging short-form content designed for Instagram and TikTok —
            helping Ruach Breslov reach audiences far beyond its existing community.
          </p>

          <div className="case-open__platforms reveal d3">
            {project.platforms.map((p) => (
              <PlatformIcon key={p} name={p} className="case-open__platform-icon" />
            ))}
          </div>

          <div className="case-open__media reveal d4">
            {project.contentPieces.map((c, i) => (
              <PhoneFrame key={i} hook={c.label} featured={c.featured} className={`f-${i}`} />
            ))}
          </div>

          <div className="results__grid reveal d4" style={{ marginBottom: 10 }}>
            {RB.hero.stats.map((s) => (
              <div key={s.label} className="result-card">
                <CountStat display={s.display} label={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="section section--darkalt case-section">
        <div className="container">
          <span className="eyebrow reveal">The Challenge</span>
          <h2 className="case-section__text reveal d1" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800 }}>
            {RB.challenge.headline}
          </h2>
          <p className="section-sub reveal d2" style={{ marginTop: 18 }}>{RB.challenge.body}</p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section section--dark">
        <div className="container">
          <span className="eyebrow reveal">The Approach</span>
          <h2 className="section-heading reveal d1">From Lecture To Discoverable Content.</h2>

          <div className="process__flow reveal d2">
            {RB.approach.steps.map((step, i) => (
              <Fragment key={step}>
                <div className="process-step">
                  <span className="process-step__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="process-step__label" style={{ marginBottom: 0 }}>{step}</h3>
                </div>
                {i < RB.approach.steps.length - 1 && <ApproachArrow />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section section--darkalt case-results" id="results">
        <div className="container">
          <span className="eyebrow reveal">The Results</span>
          <h2 className="section-heading reveal d1">
            {RB.results.headline.map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
          </h2>
          <p className="section-sub reveal d2">{RB.results.body}</p>

          <div className="results__grid reveal d3">
            {RB.results.metrics.map((m) => (
              <div key={m.label} className="result-card">
                <CountStat display={m.display} label={m.label} />
              </div>
            ))}
          </div>

          <div className="hp-audience__row reveal d4" style={{ marginTop: 40 }}>
            {RB.results.discovery.map((d) => (
              <CountStat key={d.label} display={d.display} label={d.label} emphasize />
            ))}
          </div>

          <p className="results__note">{RB.results.disclaimer}</p>
        </div>
      </section>

      {/* PLATFORM BREAKDOWN */}
      <section className="section section--dark">
        <div className="container">
          <span className="eyebrow reveal">Platform Breakdown</span>
          <h2 className="section-heading reveal d1">Instagram &amp; TikTok, Side By Side.</h2>

          <div className="rb-platform-cols reveal d2">
            <div className="rb-platform-col">
              <div className="rb-platform-col__head">
                <PlatformIcon name="Instagram" className="rb-platform-col__icon" />
                <span className="rb-platform-col__name">Instagram</span>
                <span className="rb-platform-col__period">{RB.platforms.instagram.period}</span>
              </div>
              <div className="results__grid">
                {RB.platforms.instagram.items.map((it) => (
                  <div key={it.label} className="result-card">
                    <CountStat display={it.display} label={it.label} />
                  </div>
                ))}
              </div>
              <p className="results__note">{RB.platforms.instagram.note}</p>
            </div>

            <div className="rb-platform-col">
              <div className="rb-platform-col__head">
                <PlatformIcon name="TikTok" className="rb-platform-col__icon" />
                <span className="rb-platform-col__name">TikTok</span>
                <span className="rb-platform-col__period">{RB.platforms.tiktok.period}</span>
              </div>
              <div className="results__grid">
                {RB.platforms.tiktok.items.map((it) => (
                  <div key={it.label} className="result-card">
                    <CountStat display={it.display} label={it.label} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE GROWTH */}
      <section className="section section--darkalt">
        <div className="container">
          <span className="eyebrow reveal">Audience Growth</span>
          <h2 className="section-heading reveal d1">{RB.audience.headline}</h2>
          <div className="results__grid reveal d2">
            {RB.audience.metrics.map((m) => (
              <div key={m.label} className="result-card">
                <CountStat display={m.display} label={m.label} />
              </div>
            ))}
          </div>
          <p className="section-sub reveal d3" style={{ marginTop: 26 }}>{RB.audience.body}</p>
        </div>
      </section>

      {/* CONTENT THAT CONNECTED */}
      <section className="section section--dark hp-formats">
        <div className="container">
          <span className="eyebrow reveal">Content That Connected</span>
          <h2 className="section-heading reveal d1">{RB.content.headline}</h2>
          <p className="section-sub reveal d2">{RB.content.body}</p>
        </div>
        <div className="hp-formats__grid reveal d3">
          {RB.content.topics.map((t) => (
            <div key={t.title} className="hp-formats__card" style={{ cursor: 'default' }}>
              <PhoneFrame className="hp-formats__frame" />
              <span className="hp-formats__title">{t.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* KEY TAKEAWAY */}
      <section className="section section--darkalt">
        <div className="container">
          <div className="hp-next-kpi reveal">
            <span className="hp-next-kpi__label">{RB.takeaway.label}</span>
            <h2 className="display display-md hp-next-kpi__value">{RB.takeaway.value}</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>{RB.takeaway.body}</p>
          </div>
        </div>
      </section>

      <FinalCTA
        lines={['Ready For Your', 'Ideas To Travel?']}
        accent="Let's Build Your Case Study Next."
        sub=""
        showSecondary
        showPhone={false}
        nextProject={{ to: `/work/${next.slug}`, label: next.name }}
      />
    </>
  )
}
