// Testimonials — reserved slots. Replace each card's placeholder with a real
// client photo/logo, quote, name, company, and result once available.

const SLOTS = [1, 2, 3]

function QuoteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="testimonial-card__quote-icon" aria-hidden="true">
      <path d="M8 9c-2.2 0-4 1.8-4 4v6h6v-6H6.5C6.5 11.5 8 10 10 10V9H8zm11 0c-2.2 0-4 1.8-4 4v6h6v-6h-3.5c0-1.5 1.5-3 3.5-3V9h-2z" fill="currentColor"/>
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="section section--dark" id="testimonials">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">What Clients Say</span>
        </div>
        <h2 className="section-heading reveal d1">Results People Talk About.</h2>
        <p className="section-sub reveal d2">
          Client testimonials will land here as campaigns wrap.
        </p>

        <div className="testimonials__grid">
          {SLOTS.map((i) => (
            <div key={i} className={`testimonial-card reveal d${i}`}>
              <QuoteIcon />
              <p className="testimonial-card__text">
                Client testimonial coming soon.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
