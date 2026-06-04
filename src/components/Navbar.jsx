import { useState, useEffect, useCallback } from 'react'

const CALENDLY = 'https://calendly.com/edward-yuabov-eddiesites/30min?month=2026-06'

const NAV_LINKS = [
  { label: 'Home',     id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Why EBM',  id: 'why-ebm' },
  { label: 'About',    id: 'about' },
  { label: 'Contact',  id: 'contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 820) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      {/* Logo */}
      <button className="navbar__logo-btn" onClick={() => scrollTo('home')} aria-label="Go to top">
        <div className="navbar__logo-mark">EBM</div>
      </button>

      <div className="navbar__spacer" />

      {/* Desktop links */}
      <ul className="navbar__links">
        {NAV_LINKS.map(({ label, id }) => (
          <li key={id}>
            <button className="navbar__link" onClick={() => scrollTo(id)}>{label}</button>
          </li>
        ))}
      </ul>

      <button className="navbar__cta" onClick={() => window.open(CALENDLY, '_blank')}>
        Get Started
      </button>

      {/* Hamburger */}
      <button
        className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile drawer */}
      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`} role="menu">
        {NAV_LINKS.map(({ label, id }) => (
          <button key={id} className="navbar__mobile-link" onClick={() => scrollTo(id)} role="menuitem">
            {label}
          </button>
        ))}
        <button className="navbar__mobile-cta" onClick={() => window.open(CALENDLY, '_blank')}>
          Get Started , It's Free
        </button>
      </div>
    </nav>
  )
}
