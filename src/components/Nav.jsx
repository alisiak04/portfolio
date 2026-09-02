import { useState } from 'react'

const LINKS = [
  { href: '#about', label: 'about', accent: 'accent-keyword' },
  { href: '#experience', label: 'experience', accent: 'accent-func' },
  { href: '#projects', label: 'projects', accent: 'accent-type' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-nav">
      <div className="nav-container mono">

        {/* Name */}
        <a href="#top" className="nav-name" onClick={closeMenu}>
          Alisia Kazimierek
        </a>

        {/* Desktop section links */}
        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={l.accent}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop social icons */}
        <div className="nav-socials">

          {/* Email */}
          <a
            href="mailto:alisiakazimierek2104@gmail.com"
            aria-label="Email"
            className="accent-keyword"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/alisiakazimierek"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="accent-keyword"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/alisiak04"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="accent-keyword"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`nav-menu-button ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile dropdown */}
        <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>

          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={l.accent}
              onClick={closeMenu}
            >
              {l.label}
            </a>
          ))}

          <div className="nav-mobile-divider" />

          <a
            href="mailto:alisiakazimierek2104@gmail.com"
            className="accent-keyword"
            onClick={closeMenu}
          >
            email
          </a>

          <a
            href="https://www.linkedin.com/in/alisiakazimierek"
            target="_blank"
            rel="noreferrer"
            className="accent-keyword"
            onClick={closeMenu}
          >
            linkedin ↗
          </a>

          <a
            href="https://github.com/alisiak04"
            target="_blank"
            rel="noreferrer"
            className="accent-keyword"
            onClick={closeMenu}
          >
            github ↗
          </a>

        </div>

      </div>
    </header>
  )
}