// Final CTA — oversized closing statement + booking action + direct contact info.
// Reused on the homepage and the Work page with different copy via props.
import { Link } from 'react-router-dom'

const CALENDLY = 'https://calendly.com/edward-yuabov-eddiesites/30min?month=2026-06'
const PHONE = '9294137656'
const PHONE_DISPLAY = '(929) 413-7656'

export default function FinalCTA({
  lines = ['Your Business Already', 'Has Something Worth Seeing.'],
  accent = "Let's Make People Notice It.",
  sub = 'One free call. No pressure, no long-term contracts.',
  showSecondary = false,
  showPhone = true,
  nextProject = null,
}) {
  return (
    <section className="section section--dark final-cta" id="contact">
      <img className="final-cta__watermark" src="/logo-mark-white.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />

      <div className="container final-cta__inner">
        <h2 className="final-cta__statement reveal">
          {lines.map((line, i) => (
            <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
          ))}
        </h2>
        {accent && (
          <p className="final-cta__statement reveal d1" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginTop: '-6px' }}>
            <span className="accent">{accent}</span>
          </p>
        )}

        {sub && <p className="final-cta__sub reveal d2">{sub}</p>}

        <div className="final-cta__btn final-cta__btn-row reveal d3">
          <button className="btn btn-primary" onClick={() => window.open(CALENDLY, '_blank')}>
            Empower My Brand
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {showSecondary && (
            <button className="btn btn-ghost" onClick={() => window.open(CALENDLY, '_blank')}>
              Let's Talk
            </button>
          )}
        </div>

        {showPhone && (
          <div className="final-cta__contact reveal d4">
            <a href={`tel:+1${PHONE}`}>{PHONE_DISPLAY}</a>
          </div>
        )}

        {nextProject && (
          <Link to={nextProject.to} className="final-cta__next reveal d4">
            Next Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        )}
      </div>
    </section>
  )
}
