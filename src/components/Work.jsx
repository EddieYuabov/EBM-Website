// Work — case study slots. Replace PROJECTS entries with real client work as it launches.
// Description and video-clip thumbnails are pulled from the shared project
// data (src/data/projects.js) by slug so there's one source of truth.
import { Link } from 'react-router-dom'
import { PROJECTS as ALL_PROJECTS } from '../data/projects'

const PROJECTS = [
  {
    slug: 'aronov-associates',
    name: 'Aronov & Associates',
    tag: 'TikTok · Instagram · Facebook',
    logo: '/aronov-law-logo.png',
    stats: [
      { val: '2M+',    label: 'Views' },
      { val: '+1151',  label: 'Followers' },
      { val: '9,663',  label: 'Profile Views' },
    ],
  },
  {
    slug: 'healthy-pharmacy',
    name: 'Healthy Pharmacy',
    tag: 'TikTok · Instagram',
    logo: '/healthy-pharmacy-logo.png',
    stats: [
      { val: '4.13M', label: 'Views' },
      { val: '407K',  label: 'Likes' },
      { val: '61.1K', label: 'Shares' },
    ],
  },
  {
    slug: 'ruach-breslov',
    name: 'Ruach Breslov',
    tag: 'Instagram · TikTok',
    logo: '/ruach-breslov-logo.png',
    stats: [
      { val: '56.6K+', label: 'Views' },
      { val: '752',    label: 'Followers' },
      { val: '86%+',   label: 'Discovery' },
    ],
  },
]

function CardMedia({ p }) {
  if (p.logo) {
    return (
      <div className="project-card__media project-card__media--logo">
        <img className="project-card__logo-img" src={p.logo} alt={`${p.name} logo`} />
      </div>
    )
  }
  return (
    <div className="project-card__media">
      {!p.slug && <span className="project-card__badge">Case Study Coming Soon</span>}
      <img className="project-card__watermark" src="/logo-mark-white.png" alt="" aria-hidden="true" />
    </div>
  )
}

function ClipStrip({ pieces }) {
  const clips = (pieces || []).filter((c) => c.poster).slice(0, 4)
  if (!clips.length) return null
  return (
    <div className="project-card__clips">
      {clips.map((c) => (
        <button
          key={c.label}
          className="project-card__clip"
          style={{ backgroundImage: `url(${c.poster})` }}
          aria-label={`Watch: ${c.label}`}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            window.open(c.link, '_blank', 'noopener,noreferrer')
          }}
        />
      ))}
    </div>
  )
}

function CardBody({ p, full }) {
  return (
    <div className="project-card__body">
      <span className="project-card__tag">{p.tag}</span>
      <h3 className="project-card__name">{p.name}</h3>
      {full?.description && <p className="project-card__desc">{full.description}</p>}
      <div className="project-card__stats">
        {p.stats.map((s) => (
          <div key={s.label}>
            <div className="project-card__stat-val">{s.val}</div>
            <div className="project-card__stat-lbl">{s.label}</div>
          </div>
        ))}
      </div>
      <ClipStrip pieces={full?.contentPieces} />
      <span className="project-card__link">
        View Project
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  )
}

export default function Work() {
  return (
    <section className="section section--light" id="work">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow">Selected Work</span>
        </div>
        <h2 className="section-heading reveal d1">The Work Speaks.</h2>
        <p className="section-sub reveal d2">
          Selected projects and the results behind them.
        </p>

        <div className="work__grid">
          {PROJECTS.map((p, i) => {
            const full = ALL_PROJECTS.find((fp) => fp.slug === p.slug)
            return p.slug ? (
              <Link key={i} to={`/work/${p.slug}`} className={`project-card project-card--live reveal d${(i % 3) + 1}`}>
                <CardMedia p={p} />
                <CardBody p={p} full={full} />
              </Link>
            ) : (
              <div key={i} className={`project-card reveal d${(i % 3) + 1}`}>
                <CardMedia p={p} />
                <CardBody p={p} full={full} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
