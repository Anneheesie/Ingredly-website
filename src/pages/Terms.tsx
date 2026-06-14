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

export default function Terms() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.inner}>

          <div className={styles.pageHeader}>
            <div className={styles.eyebrow}>Juridisch</div>
            <h1 className={styles.title}>Gebruiksvoorwaarden</h1>
            <p className={styles.intro}>
              Door Ingredly te gebruiken ga je akkoord met deze voorwaarden.
              Lees ze kort door — ze zijn bewust kort en begrijpelijk gehouden.
            </p>
          </div>

          <div className={styles.card}>

            <Section heading="Ingredly is informatief, geen advies">
              <p>
                Ingredly is een hulpmiddel om voedingsinformatie inzichtelijk te maken.
                De app toont informatie over ingrediënten, allergenen, glutenrisico's en
                bewerkingsniveau van producten.
              </p>
              <p>
                Deze informatie is uitsluitend bedoeld als algemene toelichting.
                Ingredly geeft geen medisch advies, dieetadvies of allergologisch advies.
                Gebruik de app niet als vervanging voor professioneel advies.
              </p>
            </Section>

            <div className={styles.divider} />

            <Section heading="Nauwkeurigheid van gegevens">
              <p>
                Productinformatie in Ingredly is afkomstig van Open Food Facts, een
                open-source database die wordt bijgehouden door vrijwilligers en fabrikanten.
                Deze gegevens kunnen onvolledig, verouderd of onjuist zijn.
              </p>
              <p>
                In het bijzonder geldt dat:
              </p>
              <ul>
                <li>Ingrediëntenlijsten mogelijk niet volledig of actueel zijn</li>
                <li>Allergeneninformatie mogelijk ontbreekt of niet correct is</li>
                <li>Glutenrisico-aanduidingen gebaseerd zijn op beschikbare gegevens, niet op laboratoriumanalyse</li>
                <li>Bewerkingsniveau (NOVA-classificatie) een indicatie is, geen officieel oordeel</li>
                <li>Voedingswaarden kunnen afwijken van de werkelijke samenstelling</li>
              </ul>
            </Section>

            <div className={styles.divider} />

            <Section heading="Controleer altijd het productetiket">
              <p>
                Vertrouw nooit uitsluitend op Ingredly voor aankoop- of consumptiekeuzes.
                Controleer altijd de actuele ingrediëntenlijst en allergeninformatie op de
                verpakking van het product zelf. De verpakking is de enige juridisch bindende
                bron van productinformatie.
              </p>
            </Section>

            <div className={styles.divider} />

            <Section heading="Raadpleeg professionals bij twijfel">
              <p>
                Heb je een voedselallergie, intolerantie, medische aandoening of dieetvereiste?
                Raadpleeg dan altijd een arts, diëtist of allergoloog voordat je beslissingen
                neemt op basis van informatie in de app.
              </p>
              <p>
                Ingredly is niet bedoeld voor gebruik bij ernstige of levensbedreigende allergieën
                zonder aanvullend professioneel advies.
              </p>
            </Section>

            <div className={styles.divider} />

            <Section heading="Acceptabel gebruik">
              <p>
                Je mag Ingredly gebruiken voor persoonlijk, niet-commercieel gebruik.
                Het is niet toegestaan om:
              </p>
              <ul>
                <li>De app te gebruiken voor geautomatiseerde dataverzameling of scraping</li>
                <li>De app te misbruiken op een manier die schade toebrengt aan andere gebruikers of aan Ingredly</li>
                <li>Valse of misleidende informatie in te voeren waar de app dat toelaat</li>
              </ul>
            </Section>

            <div className={styles.divider} />

            <Section heading="Beperking van aansprakelijkheid">
              <p>
                Ingredly wordt aangeboden zoals het is ("as is"), zonder garanties van welke aard dan ook.
                We spannen ons in om de app correct en beschikbaar te houden, maar kunnen dit niet garanderen.
              </p>
              <p>
                Voor zover wettelijk toegestaan zijn wij niet aansprakelijk voor schade die
                voortvloeit uit het gebruik of niet-kunnen-gebruiken van Ingredly, waaronder
                schade door onjuiste of ontbrekende productinformatie.
              </p>
              <p>
                Dit sluit nadrukkelijk in: beslissingen over aankoop, consumptie of gezondheid
                die zijn gebaseerd op informatie uit de app.
              </p>
            </Section>

            <div className={styles.divider} />

            <Section heading="Wijzigingen">
              <p>
                We kunnen deze voorwaarden aanpassen als de app of onze dienstverlening verandert.
                Bij ingrijpende wijzigingen proberen we gebruikers hiervan op de hoogte te stellen
                via de app. De meest recente versie staat altijd op deze pagina.
              </p>
            </Section>

            <div className={styles.divider} />

            <Section heading="Contact">
              <p>
                Vragen over deze gebruiksvoorwaarden? Neem contact op via{' '}
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
