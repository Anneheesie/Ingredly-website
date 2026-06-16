import { Link } from 'react-router-dom'
import { IngredlyLockupHorizontal } from '../brand/IngredlyBrand'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brandLink}>
          <IngredlyLockupHorizontal size={24} />
        </Link>
        <nav className={styles.nav}>
          <Link to="/privacy" className={styles.link}>Privacyverklaring</Link>
          <Link to="/terms" className={styles.link}>Gebruiksvoorwaarden</Link>
          <Link to="/support" className={styles.link}>Support</Link>
          <a href="mailto:support@ingredly.nl" className={styles.link}>support@ingredly.nl</a>
        </nav>
        <span className={styles.copy}>© {year} Ingredly</span>
      </div>
    </footer>
  )
}
