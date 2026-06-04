// Why EBM , four differentiating feature cards

const FEATURES = [
  {
    title: 'Results Over Vanity Metrics',
    desc:  'We focus on customers, leads, and real revenue growth, not just views and follower counts that don\'t pay the bills.',
    gradient: 'linear-gradient(135deg, #4361EE 0%, #4CC9F0 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    title: 'Modern Marketing Strategies',
    desc:  'We stay on top of current trends, AI tools, and platform algorithm updates so your business always has a competitive edge.',
    gradient: 'linear-gradient(135deg, #7209B7 0%, #f72585 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: 'Personal Partnership',
    desc:  'We work closely with every client and become a true extension of your team , you\'ll always know who you\'re working with.',
    gradient: 'linear-gradient(135deg, #06D6A0 0%, #4361EE 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Fast Execution',
    desc:  'We move quickly, iterate based on real data, and adapt our strategy to what actually works for your specific market.',
    gradient: 'linear-gradient(135deg, #f72585 0%, #4361EE 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
]

export default function WhyEBM() {
  return (
    <section className="section" id="why-ebm">
      <div className="container">
        <div className="why__header">
          <div className="reveal">
            <span className="section-tag">Why Choose Us</span>
          </div>
          <h2 className="section-heading reveal d1">
            Why Work With <span className="grad-text">EBM?</span>
          </h2>
          <p className="section-sub reveal d2">
            We're not a faceless agency. We're a dedicated partner who cares
            about your growth as much as you do.
          </p>
        </div>

        <div className="why__grid">
          {FEATURES.map(({ title, desc, gradient, icon }, i) => (
            <div key={title} className={`why-card reveal d${i + 1}`}>
              <div
                className="why-card__icon"
                style={{ background: gradient }}
                aria-hidden="true"
              >
                {icon}
              </div>
              <div className="why-card__body">
                <h3 className="why-card__title">{title}</h3>
                <p  className="why-card__desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
