// Attention — the unexpected transition after the hero: a philosophy statement on a light section

const MARQUEE_ITEMS = [
  'A meme', 'An ad', 'A friend\'s story', 'Your business', 'A recipe video',
  'A stranger\'s vacation', 'A hot take', 'Your business', 'A product drop', 'A meme',
]

export default function Attention() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section className="section section--light attention" id="attention">
      <div className="container attention__inner">
        <div className="reveal">
          <span className="eyebrow">Our Philosophy</span>
        </div>
        <h2 className="display display-xl reveal d1">
          Attention Is<br /><span className="text-blue">Currency.</span>
        </h2>

        <div className="attention__marquee reveal d2" aria-hidden="true">
          <div className="attention__marquee-track">
            {items.map((item, i) => (
              <span key={i} className={`attention__marquee-item${item === 'Your business' ? ' is-you' : ''}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="attention__body reveal d3">
          <p>
            Your customers scroll past thousands of things every day.
            <strong> We make sure your business isn't one of them.</strong>
          </p>
          <p>
            Empower combines scroll-stopping creative with a data-backed
            strategy — so every piece of content earns attention, and every
            result tells us exactly what to do next.
          </p>
        </div>
      </div>
    </section>
  )
}
