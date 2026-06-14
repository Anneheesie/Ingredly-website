import Layout from '../components/Layout'
import styles from './Privacy.module.css'

interface SectionProps {
  heading: string
  children: React.ReactNode
}

function Section({ heading, children }: SectionProps) {
  return (
    <div className={styles.block}>
      <h3 className={styles.blockHeading}>{heading}</h3>
      <div className={styles.blockBody}>{children}</div>
    </div>
  )
}

export default function Privacy() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.inner}>

          <div className={styles.pageHeader}>
            <div className={styles.eyebrow}>Juridisch</div>
            <h1 className={styles.title}>Privacyverklaring</h1>
            <p className={styles.intro}>
              Ingredly is een persoonlijk hulpmiddel om voedingsinformatie te begrijpen.
              We verzamelen zo min mogelijk gegevens en zijn transparant over wat we doen.
            </p>
          </div>

          <div className={styles.card}>

            <Section heading="Welke gegevens Ingredly gebruikt">
              <p>
                Ingredly verwerkt de volgende categorieën van gegevens, afhankelijk van hoe je de app gebruikt:
              </p>
              <ul>
                <li>Je e-mailadres, als je een account aanmaakt</li>
                <li>Barcodes van producten die je scant, om productinformatie op te halen</li>
                <li>Lokaal opgeslagen gegevens op je telefoon: scangeschiedenis, favorieten en allergievoorkeursinstellingen</li>
              </ul>
            </Section>

            <div className={styles.divider} />

            <Section heading="Accountgegevens via Supabase">
              <p>
                Als je een account aanmaakt, wordt je e-mailadres opgeslagen bij Supabase.
                Supabase is onze authenticatieprovider en verwerkt gegevens in de EU.
                Je e-mailadres wordt alleen gebruikt voor inloggen en wachtwoordherstel.
              </p>
              <p>
                Supabase slaat geen productscans, scangeschiedenis of favorieten op.
                Die gegevens blijven lokaal op je telefoon.
              </p>
            </Section>

            <div className={styles.divider} />

            <Section heading="Productdata via Open Food Facts">
              <p>
                Productinformatie wordt opgehaald via de Open Food Facts API.
                Wanneer je een barcode scant, wordt deze barcode naar de servers van Open Food Facts
                verstuurd om productgegevens op te halen. Open Food Facts is een open-source
                voedingsmiddelenproject met een eigen privacybeleid.
              </p>
              <p>
                Ingredly slaat barcodes niet zelf op buiten je lokale apparaat.
              </p>
            </Section>

            <div className={styles.divider} />

            <Section heading="Lokale appgegevens">
              <p>
                Je scangeschiedenis, favorieten en allergievoorkeuren worden lokaal opgeslagen
                op je telefoon met MMKV, een versleutelde key-value opslag. Deze gegevens
                worden niet naar externe servers verstuurd, tenzij expliciet anders vermeld.
              </p>
            </Section>

            <div className={styles.divider} />

            <Section heading="Analyses en crashrapportages">
              <p>
                Ingredly kan gebruik maken van:
              </p>
              <ul>
                <li>
                  <strong>PostHog</strong> — voor geanonimiseerde gebruiksanalyses, om de app te
                  verbeteren. Als PostHog actief is, worden er geen persoonsgegevens verstuurd.
                </li>
                <li>
                  <strong>Sentry</strong> — voor crashrapportages. Bij een crash kan technische
                  informatie worden verstuurd om fouten op te sporen. Er worden geen persoonlijke
                  of medische gegevens opgenomen in crashlogs.
                </li>
              </ul>
              <p>
                We gebruiken geen advertentienetwerken en volgen je gedrag niet voor
                commerciële doeleinden.
              </p>
            </Section>

            <div className={styles.divider} />

            <Section heading="Geen verkoop van persoonsgegevens">
              <p>
                We verkopen geen persoonsgegevens aan derden.
                We verstrekken geen gegevens aan adverteerders.
                We delen gegevens alleen met de hierboven genoemde diensten, uitsluitend
                voor de werking van de app.
              </p>
            </Section>

            <div className={styles.divider} />

            <Section heading="Account verwijderen">
              <p>
                Je kunt je account verwijderen door contact op te nemen via{' '}
                <a href="mailto:support@ingredly.nl" className={styles.link}>
                  support@ingredly.nl
                </a>
                . We verwijderen dan je accountgegevens bij Supabase zo snel mogelijk.
              </p>
              <p>
                Lokale gegevens (scangeschiedenis, favorieten, voorkeuren) worden opgeslagen
                op je telefoon en kunnen worden gewist door de app te verwijderen.
              </p>
            </Section>

            <div className={styles.divider} />

            <Section heading="Contact">
              <p>
                Heb je vragen over je privacy of over de gegevens die Ingredly gebruikt?
                Stuur een e-mail naar{' '}
                <a href="mailto:support@ingredly.nl" className={styles.link}>
                  support@ingredly.nl
                </a>
                .
              </p>
            </Section>

          </div>

          <p className={styles.lastUpdated}>Laatst bijgewerkt: juni 2026</p>

        </div>
      </div>
    </Layout>
  )
}
