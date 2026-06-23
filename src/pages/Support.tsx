import Layout from '../components/Layout'
import styles from './Support.module.css'

export default function Support() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.inner}>

          <div className={styles.eyebrow}>Contact</div>
          <h1 className={styles.title}>Support</h1>

          <div className={styles.card}>
            <p className={styles.body}>
              Heb je een vraag over Ingredly of wil je hulp met je account?
              Mail ons via{' '}
              <a href="mailto:support@ingredly.nl" className={styles.emailLink}>
                support@ingredly.nl
              </a>
              .
            </p>
            <p className={styles.sub}>
              We zijn een klein team en reageren zo snel mogelijk.
            </p>
            <a href="mailto:support@ingredly.nl" className={styles.mailBtn}>
              Mail ons
            </a>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Veelgestelde vragen</h2>
            <div className={styles.faqItem}>
              <strong>Hoe verwijder ik mijn account?</strong>
              <p>
                Stuur een e-mail naar{' '}
                <a href="mailto:support@ingredly.nl" className={styles.link}>support@ingredly.nl</a>
                {' '}met het verzoek je account te verwijderen. We handelen dit zo snel mogelijk af.
              </p>
            </div>
            <div className={styles.divider} />
            <div className={styles.faqItem}>
              <strong>Een product wordt niet gevonden. Wat kan ik doen?</strong>
              <p>
                Ingredly haalt productinformatie op via Open Food Facts. Als een product niet
                gevonden wordt, staat het nog niet in hun database. Je kunt het product zelf
                toevoegen via{' '}
                <a href="https://world.openfoodfacts.org" className={styles.link} target="_blank" rel="noopener noreferrer">
                  openfoodfacts.org
                </a>
                .
              </p>
            </div>
            <div className={styles.divider} />
            <div className={styles.faqItem}>
              <strong>Ik ben mijn wachtwoord vergeten. Wat nu?</strong>
              <p>
                Gebruik de "Wachtwoord vergeten"-optie in de Ingredly-app om je wachtwoord te herstellen.
              </p>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}
