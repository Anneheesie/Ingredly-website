import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#2F7A4E" />
        <rect x="14" y="14" width="4" height="13" rx="2" fill="white" />
        <circle cx="16" cy="9" r="3.5" fill="#4A9D6C" />
      </svg>
      <span className={styles.wordmark}>Ingredly</span>
    </div>
  )
}
