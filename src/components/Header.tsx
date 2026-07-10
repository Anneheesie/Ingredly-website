import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import styles from './Header.module.css'

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logoLink}>
          <Logo />
        </Link>
        <nav className={styles.nav} aria-label="Hoofdnavigatie">
          <NavLink to="/privacy" end className={navClass}>Privacy</NavLink>
          <NavLink to="/terms" end className={navClass}>Gebruiksvoorwaarden</NavLink>
          <NavLink to="/support" end className={navClass}>Support</NavLink>
        </nav>
        <a
          href="https://apps.apple.com/nl/app/ingredly/id6783845454"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Ingredly in de App Store"
          className={styles.headerBadgeLink}
        >
          <img
            src="/assets/Download_on_the_App_Store_Badge_NL_RGB_blk_100317.svg"
            alt="Download in de App Store"
            className={styles.headerBadge}
          />
        </a>
        <button
          className={styles.menuBtn}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" className={styles.mobileNav} aria-label="Mobiele navigatie">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/privacy" end className={navClass}>Privacy</NavLink>
          <NavLink to="/terms" end className={navClass}>Gebruiksvoorwaarden</NavLink>
          <NavLink to="/support" end className={navClass}>Support</NavLink>
        </nav>
      )}
    </header>
  )
}
