import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const CALENDLY = 'https://calendly.com/edward-yuabov-eddiesites/30min?month=2026-06'

const NAV_LINKS = [
  { label: 'Work',     to: '/work' },
  { label: 'Results',  id: 'results' },
  { label: 'About',    id: 'about' },
  { label: 'Contact',  id: 'contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 860) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const goToSection = useCallback((id) => {
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80)
    }
    setMenuOpen(false)
  }, [onHome, navigate])

  const goHome = useCallback(() => {
    if (onHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
    setMenuOpen(false)
  }, [onHome, navigate])

  const handleNavClick = useCallback(({ to, id }) => {
    if (to) {
      navigate(to)
      setMenuOpen(false)
    } else {
      goToSection(id)
    }
  }, [navigate, goToSection])

  return (
    <nav className={`navbar${scrolled || !onHome ? ' scrolled' : ''}`}>
      <button className="navbar__logo-btn" onClick={goHome} aria-label="Go to homepage">
        <img className="navbar__logo-mark" src="/logo-mark-white.png" alt="" />
        <span className="navbar__logo-text">Empower</span>
      </button>

      <div className="navbar__spacer" />

      <ul className="navbar__links">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <button className="navbar__link" onClick={() => handleNavClick(link)}>{link.label}</button>
          </li>
        ))}
      </ul>

      <button className="navbar__cta" onClick={() => window.open(CALENDLY, '_blank')}>
        Let's Talk
      </button>

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

      <div className={`navbar__mobile${menuOpen ? ' open' : ''}`} role="menu">
        {NAV_LINKS.map((link) => (
          <button key={link.label} className="navbar__mobile-link" onClick={() => handleNavClick(link)} role="menuitem">
            {link.label}
          </button>
        ))}
        <button className="navbar__mobile-cta" onClick={() => window.open(CALENDLY, '_blank')}>
          Let's Talk
        </button>
      </div>
    </nav>
  )
}
