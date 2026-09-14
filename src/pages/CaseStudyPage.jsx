import { useParams, Link, Navigate } from 'react-router-dom'
import PhoneFrame from '../components/PhoneFrame'
import CountStat from '../components/CountStat'
import FinalCTA from '../components/FinalCTA'
import { PlatformIcon } from '../components/icons/PlatformIcons'
import { getProjectBySlug } from '../data/projects'
import useReveal from '../hooks/useReveal'

function CaseSection({ eyebrow, text, alt }) {
  return (
    <section className={`section ${alt ? 'section--darkalt' : 'section--dark'} case-section`}>
      <div className="container">
        <span className="eyebrow reveal">{eyebrow}</span>
        <p className="case-section__text reveal d1">{text}</p>
      </div>
    </section>
  )
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  useReveal([slug])

  if (!project) return <Navigate to="/work" replace />

  const { caseStudy: cs } = project
  const oneLiner = project.heroStats
    ? `${project.heroStats[0].value} ${project.heroStats[0].label.toLowerCase()} — and counting.`
    : 'Full results are still coming in.'

  return (
    <>
      <section className="section section--dark case-open">
        <div className="container">
          <Link to="/work" className="case-back reveal">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M11 2L3 7l8 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Work
          </Link>

          {project.logo && (
            <div className="reveal d1">
              <span className="client-logo-badge client-logo-badge--sm">
                <img src={project.logo} alt={`${project.name} logo`} loading="lazy" decoding="async" />
              </span>
            </div>
          )}
          <span className="eyebrow reveal d1">{project.industry}</span>
          <h1 className="display display-lg reveal d2">{project.name}</h1>
          <p className="case-open__oneliner reveal d3">{oneLiner}</p>

          <div className="case-open__platforms reveal d3">
            {project.platforms.map((p) => (
              <PlatformIcon key={p} name={p} className="case-open__platform-icon" />
            ))}
          </div>

          <div className="case-open__media reveal d4">
            {project.contentPieces.map((c, i) => (
              <PhoneFrame key={i} hook={c.label} poster={c.poster} link={c.link} featured={c.featured} className={`case-open__frame f-${i}`} />
            ))}
          </div>
        </div>
      </section>

      <CaseSection eyebrow="The Client" text={cs.client} />
      <CaseSection eyebrow="The Challenge" text={cs.challenge} alt />
      <CaseSection eyebrow="The Idea" text={cs.idea} />

      <section className="section section--darkalt case-content">
        <div className="container">
          <span className="eyebrow reveal">The Content</span>
          <p className="case-section__text reveal d1">{cs.contentNote}</p>
          <div className="case-content__grid reveal d2">
            {project.contentPieces.map((c, i) => (
              <PhoneFrame key={i} hook={c.label} poster={c.poster} link={c.link} className="case-content__frame" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark case-results">
        <div className="container">
          <span className="eyebrow reveal">The Results</span>
          <h2 className="section-heading reveal d1">Numbers, Not Guesses.</h2>

          {cs.results.length > 0 ? (
            <>
              <div className="results__grid reveal d2">
                {cs.results.map((r) => (
                  <div key={r.label} className="result-card">
                    <CountStat display={r.value} label={r.label} sublabel={r.period} />
                  </div>
                ))}
              </div>

              {cs.standoutReel && (
                <div className="case-standout reveal d3">
                  <span className="case-standout__label">One standout Reel generated approximately</span>
                  <span className="case-standout__val">
                    {cs.standoutReel.views} views · {cs.standoutReel.follows} follows
                  </span>
                </div>
              )}

              {cs.disclaimers.map((d, i) => (
                <p key={i} className="results__note">{d}</p>
              ))}
            </>
          ) : (
            <p className="section-sub reveal d2">
              Full results are being finalized and will be added here once verified.
            </p>
          )}
        </div>
      </section>

      {cs.learned && <CaseSection eyebrow="What We Learned" text={cs.learned} alt />}

      <FinalCTA
        lines={['Like What You See?']}
        accent="Let's Build Your Case Study Next."
        sub=""
        showSecondary
        showPhone={false}
      />
    </>
  )
}
