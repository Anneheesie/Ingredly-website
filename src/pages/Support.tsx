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
            <span className={styles.dateBadge}>Laatst bijgewerkt: juni 2026</span>
            <p className={styles.faqIntro}>
              Hier vind je antwoorden op veelgestelde vragen over Ingredly. Staat je vraag er niet tussen?
              Mail ons via{' '}
              <a href="mailto:support@ingredly.nl" className={styles.link}>support@ingredly.nl</a>.
            </p>

            <div className={styles.divider} />

            <div className={styles.faqItem}>
              <strong>Hoe verwijder ik mijn account?</strong>
              <p>
                Je kunt je account verwijderen via de accountinstellingen in de Ingredly-app.
                Je accountgegevens worden verwijderd en je wordt uitgelogd. Lokale gegevens op je apparaat,
                zoals recente scans en favorieten, worden waar mogelijk gewist.
              </p>
              <p>
                Lukt het niet? Mail ons via{' '}
                <a href="mailto:support@ingredly.nl" className={styles.link}>support@ingredly.nl</a>.
              </p>
            </div>
            <div className={styles.divider} />

            <div className={styles.faqItem}>
              <strong>Een product wordt niet gevonden. Wat kan ik doen?</strong>
              <p>
                Ingredly haalt productinformatie op via Open Food Facts. Als een product niet
                gevonden wordt, staat het mogelijk nog niet in hun database of is de barcode niet
                goed herkend. Je kunt het product zelf toevoegen via{' '}
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
                Gebruik de optie "Wachtwoord vergeten" in de Ingredly-app om een herstelmail te
                ontvangen en een nieuw wachtwoord in te stellen.
              </p>
            </div>
            <div className={styles.divider} />

            <div className={styles.faqItem}>
              <strong>Hoe werkt de Ingredly-score?</strong>
              <p>
                De Ingredly-score kijkt naar ingrediënten, bewerking en voedingswaarden. De score
                is vooral handig om vergelijkbare producten met elkaar te vergelijken.
              </p>
              <p>
                Ingrediëntwaarde kijkt naar de ingrediëntenlijst, additieven en signalen van sterke
                bewerking. Voedingswaarde kijkt naar suiker, zout, verzadigd vet, energie, eiwit en vezels.
              </p>
            </div>
            <div className={styles.divider} />

            <div className={styles.faqItem}>
              <strong>Waarom kan een snack soms nog redelijk scoren?</strong>
              <p>
                Sommige snacks hebben een korte ingrediëntenlijst, maar kunnen nog steeds veel
                energie, vet of zout bevatten. Daarom kijkt Ingredly ook naar voedingswaarden.
                Bij snacks betekent een hogere score vooral dat het product binnen die categorie
                gunstiger kan zijn, niet dat het automatisch een gezonde keuze is.
              </p>
            </div>
            <div className={styles.divider} />

            <div className={styles.faqItem}>
              <strong>Kan ik de score gebruiken om alle producten met elkaar te vergelijken?</strong>
              <p>
                De score is het meest nuttig als je producten binnen dezelfde productcategorie
                vergelijkt, bijvoorbeeld twee soorten yoghurt of twee soorten chips. Bij
                verschillende productcategorieën geeft Ingredly extra context waar mogelijk.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Meer hulp nodig?</h2>
            <p className={styles.body}>
              Bekijk de supportpagina of mail ons direct via{' '}
              <a href="mailto:support@ingredly.nl" className={styles.emailLink}>
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
