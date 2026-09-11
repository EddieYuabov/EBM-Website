// About — founder-led, on a light section for contrast against the dark sections around it

const PILLARS = [
  { emoji: '🎯', label: 'Founder & Brand Strategist' },
  { emoji: '🎬', label: 'Content-Led Growth' },
  { emoji: '📊', label: 'Data-Backed Iteration' },
  { emoji: '🤖', label: 'AI-Powered Execution' },
  { emoji: '🤝', label: 'Direct Partner, Not a Vendor' },
]

export default function About() {
  return (
    <section className="section section--light" id="about">
      <div className="container">
        <div className="about__layout">
          <div className="about__image-wrap reveal">
            <div className="about__photo">
              <img
                src="/frontshot.png"
                alt="Eddie Yuabov, Founder of Empower"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  position: 'absolute',
                  inset: 0,
                }}
              />
              <div style={{ position: 'relative', textAlign: 'center', padding: '0 16px 24px', marginTop: 'auto' }}>
                <div className="about__photo-name">Eddie Yuabov</div>
                <div className="about__photo-role">Founder & Brand Strategist</div>
              </div>
            </div>
          </div>

          <div className="about__content">
            <div className="reveal">
              <span className="eyebrow">The Founder</span>
            </div>
            <h2 className="section-heading reveal d1">Meet Eddie</h2>

            <p className="about__bio reveal d2">
              I started <strong>Empower</strong> to work directly with
              businesses — understanding what makes them genuinely
              interesting, building content around that advantage, and
              studying what performs so the strategy keeps getting sharper.
            </p>

            <p className="about__bio reveal d3">
              From plumbers and restaurants to fitness coaches and boutique
              retailers, I've seen the same story play out over and over: a
              great business with almost no online presence, leaving money on
              the table every single day.
            </p>

            <p className="about__bio reveal d4">
              <strong>My goal is simple:</strong> make marketing understandable,
              affordable, and effective. No bloated retainers, no confusing
              jargon — just content that earns attention and a strategy that
              turns it into customers.
            </p>

            <div className="about__pillars reveal d5">
              {PILLARS.map(({ emoji, label }) => (
                <span key={label} className="about__pillar">
                  <span aria-hidden="true">{emoji}</span> {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
