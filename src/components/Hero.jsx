// Hero - full-viewport first impression with animated card graphic

const CALENDLY = 'https://calendly.com/edward-yuabov-eddiesites/30min?month=2026-06'
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

// Floating background icons — social media + marketing themed
// cls: 'bg-icon--desktop' = hidden below 900px, no cls = always visible
const BG_ICONS = [
  {
    // Instagram
    style: { top: '10%', left: '5%', animationDuration: '18s', animationDelay: '0s' },
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    // TikTok
    style: { top: '70%', left: '88%', animationDuration: '22s', animationDelay: '3s' },
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.84 1.56V6.79a4.85 4.85 0 01-1.07-.1z"/>
      </svg>
    ),
  },
  {
    // Facebook
    style: { top: '75%', left: '4%', animationDuration: '20s', animationDelay: '6s' },
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    // Reddit
    style: { top: '20%', left: '85%', animationDuration: '25s', animationDelay: '1s' },
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
  },
  {
    // YouTube
    style: { top: '38%', left: '91%', animationDuration: '17s', animationDelay: '4s' },
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
        <polygon fill="currentColor" stroke="none" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
  {
    // LinkedIn
    style: { top: '15%', left: '72%', animationDuration: '19s', animationDelay: '2s' },
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    // Trending chart
    style: { top: '48%', left: '8%', animationDuration: '21s', animationDelay: '5s' },
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    // Lightning bolt
    cls: 'bg-icon--desktop',
    style: { top: '82%', left: '55%', animationDuration: '16s', animationDelay: '7s' },
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    // Star
    cls: 'bg-icon--desktop',
    style: { top: '30%', left: '2%', animationDuration: '24s', animationDelay: '9s' },
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    // Chat bubble
    cls: 'bg-icon--desktop',
    style: { top: '65%', left: '40%', animationDuration: '20s', animationDelay: '11s' },
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    // TikTok
    style: { top: '30%', left: '50%', animationDuration: '26s', animationDelay: '4s' },
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.84 1.56V6.79a4.85 4.85 0 01-1.07-.1z"/>
      </svg>
    ),
  },
  {
    // TikTok
    cls: 'bg-icon--desktop',
    style: { top: '80%', left: '75%', animationDuration: '18s', animationDelay: '13s' },
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.84 1.56V6.79a4.85 4.85 0 01-1.07-.1z"/>
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Animated gradient orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      {/* Floating background icons */}
      <div className="hero__bg-icons" aria-hidden="true">
        {BG_ICONS.map(({ icon, style, cls }, i) => (
          <div key={i} className={`hero__bg-icon${cls ? ` ${cls}` : ''}`} style={style}>{icon}</div>
        ))}
      </div>

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
