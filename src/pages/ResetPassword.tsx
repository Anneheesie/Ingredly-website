import Layout from '../components/Layout'
import styles from './ResetPassword.module.css'

export default function ResetPassword() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.inner}>

          <div className={styles.iconMark} aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M14 4C10.134 4 7 7.134 7 11v1H5v12h18V12h-2v-1c0-3.866-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5v1H9v-1c0-2.761 2.239-5 5-5zm0 9a2 2 0 0 1 1 3.732V21h-2v-2.268A2 2 0 0 1 14 15z"
                fill="#2F7A4E"
                fillRule="evenodd"
              />
            </svg>
          </div>

          <div className={styles.eyebrow}>Wachtwoord</div>
          <h1 className={styles.title}>Wachtwoord herstellen</h1>

          <div className={styles.card}>
            <p className={styles.body}>
              Open deze link op je telefoon met de Ingredly-app geïnstalleerd.
              De app opent dan het scherm om je wachtwoord opnieuw in te stellen.
            </p>

            <a href="ingredly://reset-password" className={styles.appBtn}>
              Open Ingredly-app
            </a>
          </div>

          <div className={styles.fallbackCard}>
            <p className={styles.fallbackText}>
              Lukt dat niet? Vraag een nieuwe herstelmail aan via de app, of neem contact op via{' '}
              <a href="mailto:support@ingredly.nl" className={styles.link}>
                support@ingredly.nl
              </a>
              .
            </p>
          </div>

        </div>
      </div>
    </Layout>
  )
}
