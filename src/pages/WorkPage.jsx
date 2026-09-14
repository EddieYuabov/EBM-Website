import { useState } from 'react'
import { Link } from 'react-router-dom'
import PhoneFrame from '../components/PhoneFrame'
import FinalCTA from '../components/FinalCTA'
import { PlatformIcon } from '../components/icons/PlatformIcons'
import { PROJECTS, INDUSTRIES, PLATFORMS } from '../data/projects'
import useReveal from '../hooks/useReveal'
import useHoverCount from '../hooks/useHoverCount'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ProjectMedia({ project, hovered, liveCount }) {
  if (project.personality === 'fast') {
    const [featured, ...rest] = project.contentPieces
    return (
      <div className={`project-media project-media--stack${hovered ? ' is-hovered' : ''}`}>
        {rest.map((c, i) => (
          <PhoneFrame key={i} hook={c.label} poster={c.poster} link={c.link} className={`project-media__frame frame-${i}`} />
        ))}
        <PhoneFrame featured hook={featured.label} poster={featured.poster} link={featured.link} className="project-media__frame frame-featured" />
        {project.hoverStat && (
          <div className={`project-media__live${hovered ? ' show' : ''}`}>
            <span className="project-media__live-val">{liveCount.toLocaleString()}</span>
            <span className="project-media__live-lbl">{project.hoverStat.label}</span>
          </div>
        )}
      </div>
    )
  }

  if (project.personality === 'fun') {
    return (
      <div className="project-media project-media--scatter">
        {project.contentPieces.map((c, i) => (
          <PhoneFrame key={i} hook={c.label} poster={c.poster} link={c.link} className={`project-media__frame scatter-${i}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="project-media project-media--cinematic">
      <span className="project-media__quote" aria-hidden="true">“</span>
      <span className="project-media__cinematic-label">Lecture Clips Coming Soon</span>
    </div>
  )
}

function ProjectInfo({ project }) {
  return (
    <div className="project-info">
      {project.logo && (
        <div>
          <span className="client-logo-badge client-logo-badge--sm">
            <img src={project.logo} alt={`${project.name} logo`} loading="lazy" decoding="async" />
          </span>
        </div>
      )}
      <span className="project-info__industry">{project.industry}</span>
      <h3 className="project-info__headline">{project.headline}</h3>
      <p className="project-info__desc">{project.description}</p>

      {project.heroStats ? (
        <div className="project-info__stats">
          {project.heroStats.map((s) => (
            <div key={s.label} className="project-info__stat">
              <div className="project-info__stat-val">{s.value}</div>
              <div className="project-info__stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="project-info__pending">Full results coming soon.</p>
      )}

      {project.secondaryStat && <p className="project-info__secondary">{project.secondaryStat}</p>}

      <div className="project-info__platforms">
        {project.platforms.map((p) => (
          <PlatformIcon key={p} name={p} className="project-info__platform-icon" />
        ))}
      </div>

      <Link to={`/work/${project.slug}`} className="project-info__link">
        {project.linkLabel || 'View Project'}
        <ArrowIcon />
      </Link>
    </div>
  )
}

function ProjectBlock({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const liveCount = useHoverCount(project.hoverStat?.value ?? 0, hovered)

  const media = <ProjectMedia project={project} hovered={hovered} liveCount={liveCount} />
  const info = <ProjectInfo project={project} />

  return (
    <div
      className={`project-block project-block--${project.layout} project-block--${project.personality}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${Math.min(index, 3) * 0.06}s` }}
    >
      {project.layout === 'full-bleed' ? (
        <>
          {media}
          <div className="project-block__overlay">{info}</div>
        </>
      ) : project.layout === 'info-left' ? (
        <>{info}{media}</>
      ) : (
        <>{media}{info}</>
      )}
    </div>
  )
}

// Flatten project content into wall tiles. Views are intentionally omitted —
// only aggregate campaign totals are verified, not per-video numbers.
function buildWallItems() {
  const sizes = ['tall', 'short', 'med', 'tall', 'med', 'short']
  const items = []
  PROJECTS.forEach((project) => {
    project.contentPieces.forEach((piece, i) => {
      items.push({
        slug: project.slug,
        client: project.name,
        platform: project.platforms[i % project.platforms.length],
        hook: piece.label || null,
        poster: piece.poster || null,
        size: sizes[items.length % sizes.length],
      })
    })
  })
  return items
}

function WallTile({ item }) {
  return (
    <Link
      to={`/work/${item.slug}`}
      className={`wall-tile wall-tile--${item.size}`}
      style={item.poster ? { backgroundImage: `url(${item.poster})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      <span className="wall-tile__platform">
        <PlatformIcon name={item.platform} className="wall-tile__platform-icon" />
      </span>
      {item.hook && !item.poster && <span className="wall-tile__hook">{item.hook}</span>}
      <div className="wall-tile__overlay">
        <span className="wall-tile__client">{item.client}</span>
        <span className="wall-tile__platform-name">{item.platform}</span>
        <span className="wall-tile__cta">View Project <ArrowIcon /></span>
      </div>
    </Link>
  )
}

export default function WorkPage() {
  useReveal()
  const [industry, setIndustry] = useState('all')
  const [platform, setPlatform] = useState(null)

  const visible = PROJECTS.filter(
    (p) =>
      (industry === 'all' || p.industryKey === industry) &&
      (!platform || p.platforms.includes(platform))
  )

  const wallItems = buildWallItems()

  return (
    <>
      <section className="section section--dark work-hero">
        <div className="container">
          <span className="eyebrow reveal">Selected Work</span>
          <h1 className="display display-xl reveal d1">
            We Don't Just<br />Make Content.<br />We Make People<br />Pay Attention.
          </h1>
          <p className="section-sub reveal d2">
            Explore how Empower turns ideas into content, content into attention,
            and attention into growth.
          </p>
        </div>
      </section>

      <div className="work-filters-bar section--dark">
        <div className="container work-filters">
          <div className="work-filter-group">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.key}
                className={`work-filter-pill${industry === ind.key ? ' active' : ''}`}
                onClick={() => setIndustry(ind.key)}
              >
                {ind.label}
              </button>
            ))}
          </div>
          <div className="work-filter-group">
            <button
              className={`work-filter-pill${platform === null ? ' active' : ''}`}
              onClick={() => setPlatform(null)}
            >
              All Platforms
            </button>
            {PLATFORMS.map((p) => (
              <button
                key={p}
                className={`work-filter-pill${platform === p ? ' active' : ''}`}
                onClick={() => setPlatform(platform === p ? null : p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section section--dark work-showcase">
        <div className="container work-showcase__list">
          {visible.map((project, i) => (
            <ProjectBlock key={project.slug} project={project} index={i} />
          ))}
          {visible.length === 0 && (
            <p className="work-empty">No projects match these filters yet.</p>
          )}
        </div>
      </section>

      <section className="section section--dark content-wall">
        <div className="container">
          <span className="eyebrow reveal">More From Our Feed</span>
          <h2 className="section-heading reveal d1">The Scroll-Stoppers.</h2>
          <p className="section-sub reveal d2">A few things we've put into the world.</p>
        </div>
        <div className="content-wall__grid reveal d3">
          {wallItems.map((item, i) => (
            <WallTile key={i} item={item} />
          ))}
        </div>
      </section>

      <FinalCTA
        lines={['Seen Enough?']}
        accent="Let's Make Your Business The Next Case Study."
        sub=""
        showSecondary
        showPhone={false}
      />
    </>
  )
}
