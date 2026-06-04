// About - founder bio with photo placeholder and credential chips

const PILLARS = [
  { emoji: '📣', label: 'Brand & Marketing Strategist' },
  { emoji: '🎨', label: 'Creative Director' },
  { emoji: '📱', label: 'Social Media Expert' },
  { emoji: '🤖', label: 'AI-Powered Marketer' },
  { emoji: '📍', label: 'Local Business Advocate' },
]

export default function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="container">
        <div className="about__layout">
          {/* Photo side */}
          <div className="about__image-wrap reveal">
            <div className="about__photo">
              <img
                src="/frontshot.png"
                alt="Eddie Yuabov, Founder of EBM"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                }}
              />
              <div style={{ position: 'relative', textAlign: 'center', padding: '0 16px 24px', marginTop: 'auto' }}>
                <div className="about__photo-name">Eddie Yuabov</div>
                <div className="about__photo-role">Founder & Brand Strategist</div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="about__content">
            <div className="reveal">
              <span className="section-tag">The Founder</span>
            </div>
            <h2 className="section-heading reveal d1">Meet Eddie</h2>

            <p className="about__bio reveal d2">
              I'm a <strong>brand strategist and marketer</strong> who helps
              small businesses attract customers, build their identity, and grow
              online. I started EBM because I noticed that many small business
              owners are incredible at their craft, but struggle to market
              themselves online.
            </p>

            <p className="about__bio reveal d3">
              From plumbers and restaurants to fitness coaches and boutique
              retailers, I've seen the same story play out over and over: a
              great business with almost no online presence, leaving money on
              the table every single day.
            </p>

            <p className="about__bio reveal d4">
              <strong>My goal is simple:</strong> make marketing understandable,
              affordable, and effective for local businesses. No bloated
              retainers, no confusing jargon, just clear strategy and real
              results. My background in technology gives me an edge with
              AI tools and digital systems, but <strong>marketing is the mission.</strong>
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
