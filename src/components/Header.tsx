import { Link } from 'react-router-dom'
import Logo from './Logo'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logoLink}>
          <Logo />
        </Link>
        <nav className={styles.nav}>
          <Link to="/privacy" className={styles.navLink}>Privacy</Link>
          <Link to="/support" className={styles.navLink}>Support</Link>
        </nav>
        <span className={styles.cta}>Binnenkort beschikbaar</span>
      </div>
    </header>
  )
}
