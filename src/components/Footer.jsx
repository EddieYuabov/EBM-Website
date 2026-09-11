// Footer — clean, centered layout with nav links and copyright
import { useNavigate, useLocation } from 'react-router-dom'

const NAV = [
  { label: 'Work',     to: '/work'  },
  { label: 'Services', id: 'services' },
  { label: 'Results',  id: 'results'  },
  { label: 'About',    id: 'about'    },
  { label: 'Contact',  id: 'contact'  },
]

const PHONE = '9294137656'
const PHONE_DISPLAY = '(929) 413-7656'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()
  const onHome = location.pathname === '/'

  const handleNavClick = ({ to, id }) => {
    if (to) {
      navigate(to)
      return
    }
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80)
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            <img className="footer__logo-mark" src="/logo-mark-white.png" alt="" />
            <span className="footer__logo-text">Empower</span>
          </div>

          <p className="footer__tagline">
            Social Media · Content · Growth
          </p>

          <nav className="footer__nav" aria-label="Footer navigation">
            {NAV.map((link) => (
              <button
                key={link.label}
                className="footer__nav-link"
                onClick={() => handleNavClick(link)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a className="footer__nav-link" href={`tel:+1${PHONE}`}>{PHONE_DISPLAY}</a>

          <div className="footer__divider" />

          <p className="footer__copy">
            © {new Date().getFullYear()} Empower. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
