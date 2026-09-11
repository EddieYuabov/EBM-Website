// Hero — full-viewport opener with analytics/engagement chips instead of generic social logos
import { useNavigate } from 'react-router-dom'

const CALENDLY = 'https://calendly.com/edward-yuabov-eddiesites/30min?month=2026-06'

// Floating background chips — engagement notifications, view counters, growth metrics
// cls: 'chip--desktop' = hidden below 900px
// Positioned in top/bottom safe bands only — the vertical middle is reserved
// for the headline column, so chips never drift behind the text.
const BG_CHIPS = [
  {
    style: { top: '12%', left: '4%', animationDuration: '17s', animationDelay: '0s' },
    content: <>▲ <strong>12.4K</strong> views</>,
  },
  {
    cls: 'chip--desktop',
    style: { top: '10%', left: '44%', animationDuration: '22s', animationDelay: '11s' },
    content: <>Reach <span className="up">182K</span></>,
  },
  {
    style: { top: '12%', left: '82%', animationDuration: '19s', animationDelay: '1s' },
    content: <>Followers <span className="up">+248</span></>,
  },
  {
    style: { top: '87%', left: '6%', animationDuration: '20s', animationDelay: '7s' },
    content: <>Engagement <span className="up">+18%</span></>,
  },
  {
    cls: 'chip--desktop',
    style: { top: '90%', left: '36%', animationDuration: '23s', animationDelay: '5s' },
    content: <>▶ Reel · <strong>0:14</strong></>,
  },
  {
    cls: 'chip--desktop',
    style: { top: '85%', left: '66%', animationDuration: '18s', animationDelay: '9s' },
    content: <>❤ <strong>1,902</strong> likes</>,
  },
  {
    style: { top: '90%', left: '87%', animationDuration: '21s', animationDelay: '3s' },
    content: <>💬 New comment</>,
  },
]

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero" id="home">
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      <img className="hero__watermark" src="/logo-mark-white.png" alt="" aria-hidden="true" />

      <div className="hero__bg-chips" aria-hidden="true">
        {BG_CHIPS.map(({ content, style, cls }, i) => (
          <div key={i} className={`hero__chip${cls ? ` ${cls}` : ''}`} style={style}>{content}</div>
        ))}
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Social Media · Content · Growth
          </div>

          <h1 className="hero__headline">
            We Make Businesses<br />
            <mark>Impossible To Ignore.</mark>
          </h1>

          <p className="hero__sub">
            Content that earns attention. Strategy that builds brands.
            Growth you can measure.
          </p>

          <div className="hero__ctas">
            <button className="btn btn-primary" onClick={() => window.open(CALENDLY, '_blank')}>
              Empower My Brand
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/work')}>
              View Our Work
            </button>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-main">
              <div className="hero__card-label">Live Overview</div>
              <div className="hero__card-title">Attention → Growth Dashboard</div>

              <div className="hero__metric-row">
                <div className="hero__metric">
                  <div className="hero__metric-val">3.2x</div>
                  <div className="hero__metric-lbl">Avg. ROI</div>
                </div>
                <div className="hero__metric">
                  <div className="hero__metric-val">89%</div>
                  <div className="hero__metric-lbl">Retention</div>
                </div>
                <div className="hero__metric">
                  <div className="hero__metric-val">24h</div>
                  <div className="hero__metric-lbl">Turnaround</div>
                </div>
              </div>

              <div className="hero__bar-group">
                {[
                  { label: 'Content', pct: 88 },
                  { label: 'Social',  pct: 74 },
                  { label: 'Brand',   pct: 61 },
                  { label: 'Growth',  pct: 95 },
                ].map(({ label, pct }) => (
                  <div key={label} className="hero__bar-row">
                    <span className="hero__bar-label">{label}</span>
                    <div className="hero__bar-track">
                      <div className="hero__bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="hero__bar-pct">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero__card-float hero__card-float--1">
              <div className="hero__float-label">Monthly Reach</div>
              <div className="hero__float-value">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 10l3-3 2 2 5-6" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                18.4k
                <span className="hero__float-tag">+34%</span>
              </div>
            </div>

            <div className="hero__card-float hero__card-float--2">
              <div className="hero__float-label"><span className="hero__float-live" /> Live now</div>
              <div className="hero__float-value">
                47 new leads
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-label">Scroll</span>
        <div className="hero__scroll-arrow">
          <svg width="14" height="8" viewBox="0 0 20 12" fill="none">
            <path d="M2 2l8 8 8-8" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="14" height="8" viewBox="0 0 20 12" fill="none">
            <path d="M2 2l8 8 8-8" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
