const CALENDLY = 'https://calendly.com/edward-yuabov-eddiesites/30min?month=2026-06'

const TRUST = [
  {
    label: 'Free, No-Commitment Call',
    desc:  'Just a conversation about your business and what you want to achieve.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#4CC9F0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 2a7 7 0 100 14A7 7 0 009 2z"/><path d="M9 6v4l2 2"/>
      </svg>
    ),
  },
  {
    label: 'Response Within 24 Hours',
    desc:  'We take every inquiry seriously and get back to you fast.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#4CC9F0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h14v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3z"/><path d="M2 3l7 7 7-7"/>
      </svg>
    ),
  },
  {
    label: 'No Long-Term Contracts',
    desc:  'We earn your business every month, not through lock-in clauses.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#4CC9F0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 9l3 3 7-7"/>
      </svg>
    ),
  },
]

const WHAT_TO_EXPECT = [
  'Talk through your business goals',
  'Get a free marketing strategy outline',
  'Ask Eddie anything, no pressure',
]

// Calendly wordmark as inline SVG (official blue #006BFF)
function CalendlyLogo() {
  return (
    <svg width="90" height="20" viewBox="0 0 90 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Calendly">
      <circle cx="10" cy="10" r="9" fill="#006BFF" />
      <rect x="6.5" y="5" width="7" height="1.4" rx="0.7" fill="white" />
      <rect x="6.5" y="8.2" width="5" height="1.4" rx="0.7" fill="white" />
      <rect x="6.5" y="11.4" width="6" height="1.4" rx="0.7" fill="white" />
      <rect x="6.5" y="14" width="4" height="1.4" rx="0.7" fill="white" />
      <text x="24" y="14.5" fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif" fontSize="13" fontWeight="700" fill="#006BFF" letterSpacing="-0.3">
        Calendly
      </text>
    </svg>
  )
}

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact__inner">

          {/* Left column */}
          <div className="contact__left">
            <div className="reveal">
              <span className="section-tag">Get In Touch</span>
            </div>
            <h2 className="section-heading reveal d1">
              Ready to <span className="grad-text">Grow?</span>
            </h2>
            <p className="contact__desc reveal d2">
              Let's talk about your business and create a strategy that helps
              you attract more customers and build a brand people remember.
            </p>

            <div className="contact__trust reveal d3">
              {TRUST.map(({ label, desc, icon }) => (
                <div key={label} className="contact__trust-item">
                  <div className="contact__trust-icon">{icon}</div>
                  <div>
                    <strong style={{ color: 'var(--t1)', fontSize: '0.88rem', fontWeight: 600 }}>
                      {label}
                    </strong>
                    <p style={{ color: 'var(--t2)', fontSize: '0.82rem', marginTop: 3 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Calendly booking card */}
          <div className="contact__right reveal d2">
            <div className="booking-card">

              {/* Header */}
              <div className="booking-card__header">
                <div className="booking-card__cal-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="22" height="20" rx="3"/>
                    <path d="M3 11h22"/>
                    <path d="M9 3v4M19 3v4"/>
                    <rect x="7" y="15" width="4" height="4" rx="1" fill="white" stroke="none"/>
                  </svg>
                </div>
                <div>
                  <div className="booking-card__title">Free Consultation</div>
                  <div className="booking-card__meta">30 min · Video or Phone Call</div>
                </div>
              </div>

              <div className="booking-card__divider" />

              {/* What to expect */}
              <div className="booking-card__expect-label">What we'll cover</div>
              <ul className="booking-card__list">
                {WHAT_TO_EXPECT.map((item) => (
                  <li key={item} className="booking-card__list-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="7.5" stroke="rgba(0,107,255,0.3)"/>
                      <path d="M5 8l2 2 4-4" stroke="#006BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="booking-card__divider" />

              {/* Calendly CTA */}
              <button
                className="booking-card__btn"
                onClick={() => window.open(CALENDLY, '_blank')}
              >
                <span>Book Your Free Call</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Powered by Calendly */}
              <div className="booking-card__powered">
                <span>Powered by</span>
                <CalendlyLogo />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
