// Footer , clean, centered layout with nav links and copyright

const NAV = [
  { label: 'Home',     id: 'home'     },
  { label: 'Services', id: 'services' },
  { label: 'Why EBM',  id: 'why-ebm'  },
  { label: 'About',    id: 'about'    },
  { label: 'Contact',  id: 'contact'  },
]

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {/* Logo */}
          <div className="footer__logo">
            <div className="footer__logo-mark">EBM</div>
          </div>

          {/* Tagline */}
          <p className="footer__tagline">
            Social marketing for small businesses who have <br/> no idea how to market.
          </p>

          {/* Nav */}
          <nav className="footer__nav" aria-label="Footer navigation">
            {NAV.map(({ label, id }) => (
              <button
                key={id}
                className="footer__nav-link"
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="footer__divider" />

          <p className="footer__copy">
            © {new Date().getFullYear()} EBM , Eddie Brand & Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
