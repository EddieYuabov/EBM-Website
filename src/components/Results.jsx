// Results — animated metric cards. Update RESULTS to keep these current as
// campaigns wrap; each `display` string drives the count-up animation.
import CountStat from './CountStat'

const RESULTS = [
  { display: '6.6M+',  label: 'Views & Viewers' },
  { display: '3,000+', label: 'TikTok Followers Built' },
  { display: '8,400+', label: 'Profile Visits' },
]

export default function Results() {
  return (
    <section className="section section--dark" id="results">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Proof, Not Promises</span>
        </div>
        <h2 className="section-heading reveal d1">
          Creativity Gets Attention.<br />
          <span className="text-blue">Data</span> Tells Us What To Do Next.
        </h2>
        <p className="section-sub reveal d2">
          Every campaign is measured against real numbers — not vanity metrics.
        </p>

        <div className="results__grid reveal d3">
          {RESULTS.map((r) => (
            <div key={r.label} className="result-card">
              <CountStat display={r.display} label={r.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
