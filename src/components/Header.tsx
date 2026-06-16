import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import styles from './Header.module.css'

function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logoLink}>
          <Logo />
        </Link>
        <nav className={styles.nav}>
          <NavLink to="/privacy" end className={navClass}>Privacy</NavLink>
          <NavLink to="/terms" end className={navClass}>Gebruiksvoorwaarden</NavLink>
          <NavLink to="/support" end className={navClass}>Support</NavLink>
        </nav>
        <span className={styles.cta}>Binnenkort beschikbaar</span>
      </div>
    </header>
  )
}
