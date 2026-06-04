// Hero - full-viewport first impression with animated card graphic

const CALENDLY = 'https://calendly.com/edward-yuabov-eddiesites/30min?month=2026-06'
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Animated gradient orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      <div className="hero__inner">
        {/* Left: copy */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Digital Marketing Agency
          </div>

          <h1 className="hero__headline">
            Social marketing for small businesses who have{' '}
            <mark>no idea how to market.</mark>
          </h1>

          <p className="hero__sub">
            Most business owners are great at what they do. Marketing isn't one
            of those things. We help local businesses create content, build their
            brand, and generate more customers online.
          </p>

          <div className="hero__ctas">
            <button
              className="btn btn-primary"
              onClick={() => window.open(CALENDLY, '_blank')}
            >
              Book a Free Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => scrollTo('services')}
            >
              View Services
            </button>
          </div>
        </div>

        {/* Right: floating dashboard card */}
        <div className="hero__visual">
          <div className="hero__card">

            {/* Main card rendered first — floats come after so they sit on top */}
            <div className="hero__card-main">
              <div className="hero__card-label">Campaign Overview</div>
              <div className="hero__card-title">Local Business Growth Dashboard</div>

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
                  { label: 'Content',  pct: 88 },
                  { label: 'Social',   pct: 74 },
                  { label: 'SEO',      pct: 61 },
                  { label: 'Branding', pct: 95 },
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

            {/* Floating chips — after main card so they render on top */}
            <div className="hero__card-float hero__card-float--1">
              <div className="hero__float-label">Monthly Reach</div>
              <div className="hero__float-value">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 10l3-3 2 2 5-6" stroke="#4CC9F0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                18.4k
                <span className="hero__float-tag">+34%</span>
              </div>
            </div>

            <div className="hero__card-float hero__card-float--2">
              <div className="hero__float-label">New Leads</div>
              <div className="hero__float-value">
                47
                <span className="hero__float-tag">+12</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
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
