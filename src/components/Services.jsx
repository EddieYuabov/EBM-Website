// Services , 6-card grid with icon, title, and description

const SERVICES = [
  {
    title: 'Content Creation',
    desc:  'Create engaging short-form content for TikTok, Instagram, Facebook, and YouTube that stops the scroll and drives action.',
    gradient: 'linear-gradient(135deg, #4361EE 0%, #4CC9F0 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
      </svg>
    ),
  },
  {
    title: 'Social Media Management',
    desc:  'Consistent posting, engagement strategy, and community management that keeps your business visible and top of mind.',
    gradient: 'linear-gradient(135deg, #7209B7 0%, #4361EE 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    title: 'Brand Building',
    desc:  'Develop a recognizable online presence customers trust , from visual identity to messaging that tells your story.',
    gradient: 'linear-gradient(135deg, #4CC9F0 0%, #06D6A0 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'AI-Powered Marketing',
    desc:  'Use cutting-edge AI tools to increase efficiency, automate workflows, and amplify marketing performance across every channel.',
    gradient: 'linear-gradient(135deg, #f72585 0%, #7209B7 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
        <circle cx="17" cy="17" r="1" fill="white"/>
      </svg>
    ),
  },
  {
    title: 'Local Business Growth',
    desc:  'Targeted strategies that help local businesses generate more leads, attract foot traffic, and turn online attention into paying customers.',
    gradient: 'linear-gradient(135deg, #06D6A0 0%, #4361EE 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Website & Digital Presence',
    desc:  'Build and optimize websites that convert visitors into customers , fast, mobile-friendly, and designed to rank.',
    gradient: 'linear-gradient(135deg, #4361EE 0%, #7209B7 100%)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="section section--alt" id="services">
      <div className="container">
        <div className="services__header">
          <div className="reveal">
            <span className="section-tag">What We Do</span>
          </div>
          <h2 className="section-heading reveal d1">
            Services Built for{' '}
            <span className="grad-text">Small Business Growth</span>
          </h2>
          <p className="section-sub reveal d2">
            Everything your business needs to attract customers, build trust,
            and grow online , handled by one dedicated team.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ title, desc, gradient, icon }, i) => (
            <div
              key={title}
              className={`service-card reveal d${(i % 3) + 1}`}
            >
              <div
                className="service-card__icon"
                style={{ background: gradient }}
                aria-hidden="true"
              >
                {icon}
              </div>
              <h3 className="service-card__title">{title}</h3>
              <p  className="service-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
