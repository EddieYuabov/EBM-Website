// Process — how Empower takes a business from overlooked to unmissable
import { Fragment } from 'react'

const STEPS = [
  { label: 'Attention',  desc: 'Scroll-stopping content built around what makes your business genuinely interesting.' },
  { label: 'Engagement', desc: 'Consistent presence and community management that turns viewers into followers.' },
  { label: 'Trust',      desc: 'A recognizable brand and voice that makes people believe in what you offer.' },
  { label: 'Growth',     desc: 'Strategy and analytics that convert attention into real, measurable customers.' },
]

function Arrow() {
  return (
    <span className="process__arrow" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 11h18M13 4l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

export default function Process() {
  return (
    <section className="section section--dark" id="process">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">How We Work</span>
        </div>
        <h2 className="section-heading reveal d1">From Overlooked To Unmissable.</h2>
        <p className="section-sub reveal d2">
          A simple path we take every business through — no guesswork, no vanity metrics.
        </p>

        <div className="process__flow">
          {STEPS.map(({ label, desc }, i) => (
            <Fragment key={label}>
              <div className={`process-step reveal d${i + 1}`}>
                <span className="process-step__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="process-step__label">{label}</h3>
                  <p className="process-step__desc">{desc}</p>
                </div>
              </div>
              {i < STEPS.length - 1 && <Arrow />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
