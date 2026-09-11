// Services — editorial index rows instead of generic icon cards

const SERVICES = [
  {
    num: '01',
    title: 'Content',
    desc: 'Short-form video, Reels, TikTok, photography, creative concepts and social-first storytelling that stops the scroll.',
  },
  {
    num: '02',
    title: 'Social',
    desc: 'Social media management, publishing, community building and platform strategy that keeps your business top of mind.',
  },
  {
    num: '03',
    title: 'Brand',
    desc: 'Brand positioning, visual direction, and messaging that turns a business into a recognizable online identity.',
  },
  {
    num: '04',
    title: 'Growth',
    desc: 'Audience growth, outreach, conversion strategy, analytics and continuous optimization — turning attention into revenue.',
  },
]

export default function Services() {
  return (
    <section className="section section--darkalt" id="services">
      <div className="container">
        <div className="services__head">
          <div className="reveal">
            <span className="eyebrow">What We Do</span>
          </div>
          <h2 className="section-heading reveal d1">
            Built Around <span className="text-blue">Attention.</span>
          </h2>
          <p className="section-sub reveal d2">
            Everything we do ladders up to one goal — making your business
            impossible to scroll past.
          </p>
        </div>

        <div className="services-list">
          {SERVICES.map(({ num, title, desc }, i) => (
            <div key={num} className={`service-row reveal d${i + 1}`}>
              <span className="service-row__num">{num}</span>
              <div className="service-row__text">
                <h3 className="service-row__title">{title}</h3>
                <p className="service-row__desc">{desc}</p>
              </div>
              <span className="service-row__arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 14L14 4M14 4H6M14 4V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
