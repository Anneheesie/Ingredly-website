import { useEffect } from 'react'
import Layout from '../components/Layout'
import styles from './Privacy.module.css'

// ── Component helpers (mirror Privacy.tsx) ────────────────────────────────────

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className={styles.block}>
      <h2 className={styles.sectionHeading}>{heading}</h2>
      <div className={styles.blockBody}>{children}</div>
    </div>
  )
}

function Divider() {
  return <div className={styles.divider} />
}

function Email() {
  return (
    <a href="mailto:support@ingredly.nl" className={styles.link}>
      support@ingredly.nl
    </a>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Terms() {
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Gebruiksvoorwaarden | Ingredly'

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content') ?? ''
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute(
      'content',
      'Gebruiksvoorwaarden voor het gebruik van de Ingredly-app en ingredly.nl.',
    )

    return () => {
      document.title = prevTitle
      meta?.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.inner}>

          {/* ── Page header ────────────────────────────────────────────────── */}
          <div className={styles.pageHeader}>
            <div className={styles.eyebrow}>Juridisch</div>
            <h1 className={styles.title}>Gebruiksvoorwaarden Ingredly</h1>
            <span className={styles.dateBadge}>Laatst bijgewerkt: juni 2026</span>
            <p className={styles.intro}>
              Welkom bij Ingredly. In deze gebruiksvoorwaarden leggen we uit onder welke
              voorwaarden je de Ingredly-app en de website <strong>ingredly.nl</strong> mag
              gebruiken.
            </p>
            <p className={styles.introDisclaimer}>
              Door Ingredly te gebruiken, ga je akkoord met deze gebruiksvoorwaarden.
            </p>
          </div>

          {/* ── Content card ───────────────────────────────────────────────── */}
          <div className={styles.card}>

            {/* 1 */}
            <Section heading="1. Wie biedt Ingredly aan?">
              <p>Ingredly wordt aangeboden door:</p>
              <div className={styles.infoBlock}>
                <span className={styles.infoLine}>Happyshare</span>
                <span className={styles.infoLine}>KvK-nummer: 81792530</span>
              </div>
              <p>
                Voor vragen kun je contact opnemen via: <Email />
              </p>
            </Section>

            <Divider />

            {/* 2 */}
            <Section heading="2. Wat is Ingredly?">
              <p>
                Ingredly is een app waarmee je voedingsproducten kunt scannen en informatie
                kunt bekijken over onder andere ingrediënten, allergenen, voedingswaarden,
                additieven en hoe bewerkt een product is.
              </p>
              <p>
                Ingredly is bedoeld als hulpmiddel om productinformatie begrijpelijker te
                maken. De app is informatief en vervangt niet het productetiket, professioneel
                advies of je eigen beoordeling.
              </p>
            </Section>

            <Divider />

            {/* 3 */}
            <Section heading="3. Geen medisch, dieet- of allergieadvies">
              <p>
                Ingredly geeft geen medisch advies, dieetadvies, voedingsadvies of persoonlijk
                gezondheidsadvies.
              </p>
              <p>
                Gebruik Ingredly niet als enige bron voor beslissingen over allergieën,
                intoleranties, medische aandoeningen, dieetkeuzes of gezondheid. Controleer
                altijd het productetiket, de verpakking en informatie van de fabrikant.
              </p>
              <p>
                Heb je een allergie, intolerantie, medische vraag of twijfel je of een product
                geschikt is voor jou? Raadpleeg dan een arts, diëtist, allergoloog of andere
                deskundige.
              </p>
            </Section>

            <Divider />

            {/* 4 */}
            <Section heading="4. Productinformatie en externe bronnen">
              <p>
                Ingredly haalt productinformatie onder andere op via externe databronnen, zoals
                Open Food Facts, en verwerkt deze informatie om scanresultaten te tonen.
              </p>
              <p>
                We doen ons best om informatie duidelijk en nuttig weer te geven, maar we
                kunnen niet garanderen dat alle productinformatie volledig, actueel of foutloos
                is. Producten, recepturen, ingrediënten en allergenen kunnen wijzigen zonder
                dat dit direct zichtbaar is in externe databronnen of in Ingredly.
              </p>
              <p>
                De fabrikant en het actuele productetiket blijven de belangrijkste bron voor
                productinformatie.
              </p>
            </Section>

            <Divider />

            {/* 5 */}
            <Section heading="5. Gebruik van Ingredly">
              <p>Je mag Ingredly gebruiken voor persoonlijk en normaal gebruik.</p>
              <p>Je gaat ermee akkoord dat je Ingredly niet gebruikt om:</p>
              <ul>
                <li>de app, website of achterliggende systemen te verstoren;</li>
                <li>ongeautoriseerde toegang te krijgen tot systemen of gegevens;</li>
                <li>
                  misbruik te maken van fouten, beveiligingslekken of technische beperkingen;
                </li>
                <li>
                  de app te kopiëren, reverse-engineeren of commercieel te exploiteren zonder
                  toestemming;
                </li>
                <li>
                  onjuiste, misleidende of schadelijke informatie te verspreiden alsof die van
                  Ingredly afkomstig is;
                </li>
                <li>
                  Ingredly te gebruiken op een manier die in strijd is met toepasselijke wet-
                  en regelgeving.
                </li>
              </ul>
              <p>
                Als we misbruik vermoeden, kunnen we maatregelen nemen, zoals het beperken of
                beëindigen van toegang tot de app.
              </p>
            </Section>

            <Divider />

            {/* 6 */}
            <Section heading="6. Account">
              <p>
                Voor sommige functies kan een Ingredly-account nodig zijn. Je bent zelf
                verantwoordelijk voor het veilig houden van je inloggegevens en voor het gebruik
                van je account.
              </p>
              <p>
                Gebruik een e-mailadres waar je toegang toe hebt. Als je denkt dat iemand anders
                toegang heeft tot je account, neem dan contact op via:{' '}
                <strong><Email /></strong>
              </p>
              <p>
                Je kunt je account verwijderen via de accountinstellingen in de app. Als dit
                niet lukt, kun je contact opnemen via <Email />.
              </p>
            </Section>

            <Divider />

            {/* 7 */}
            <Section heading="7. Beschikbaarheid en wijzigingen">
              <p>
                We proberen Ingredly goed en betrouwbaar beschikbaar te houden, maar we
                garanderen niet dat de app of website altijd zonder onderbrekingen, fouten of
                vertraging werkt.
              </p>
              <p>
                We mogen Ingredly op elk moment aanpassen, uitbreiden, beperken of beëindigen.
                Dit kan bijvoorbeeld nodig zijn voor onderhoud, beveiliging, technische
                verbeteringen, wijzigingen in externe databronnen of veranderingen in wet- en
                regelgeving.
              </p>
            </Section>

            <Divider />

            {/* 8 */}
            <Section heading="8. Intellectueel eigendom">
              <p>
                Alle rechten op Ingredly, waaronder de app, website, naam, vormgeving, teksten,
                logo's, software en andere onderdelen, blijven van Happyshare of de betreffende
                rechthebbenden.
              </p>
              <p>
                Je krijgt alleen het recht om Ingredly te gebruiken zoals bedoeld in deze
                gebruiksvoorwaarden. Je mag onderdelen van Ingredly niet kopiëren, verspreiden,
                verkopen, namaken of gebruiken voor commerciële doeleinden zonder voorafgaande
                schriftelijke toestemming.
              </p>
              <p>
                Productgegevens van externe bronnen blijven onderworpen aan de voorwaarden en
                licenties van die externe bronnen.
              </p>
            </Section>

            <Divider />

            {/* 9 */}
            <Section heading="9. Privacy">
              <p>
                Bij het gebruik van Ingredly verwerken we bepaalde gegevens. In onze
                privacyverklaring leggen we uit welke gegevens we gebruiken, waarom we dat doen
                en welke rechten je hebt.
              </p>
              <p>
                De privacyverklaring staat op:{' '}
                <a
                  href="https://ingredly.nl/privacy"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>https://ingredly.nl/privacy</strong>
                </a>
              </p>
            </Section>

            <Divider />

            {/* 10 */}
            <Section heading="10. Aansprakelijkheid">
              <p>
                Ingredly wordt met zorg ontwikkeld, maar het gebruik van de app is voor eigen
                rekening en risico.
              </p>
              <p>
                Voor zover wettelijk toegestaan, is Happyshare niet aansprakelijk voor schade
                die ontstaat door:
              </p>
              <ul>
                <li>onjuiste, onvolledige of verouderde productinformatie;</li>
                <li>wijzigingen in productrecepturen, ingrediënten of allergenen;</li>
                <li>beslissingen die je neemt op basis van informatie in Ingredly;</li>
                <li>het niet controleren van het productetiket of de verpakking;</li>
                <li>
                  tijdelijke onbeschikbaarheid of technische fouten in de app of website;
                </li>
                <li>fouten of tekortkomingen in externe databronnen of diensten.</li>
              </ul>
              <p>
                Niets in deze voorwaarden beperkt aansprakelijkheid die volgens de wet niet
                mag worden uitgesloten.
              </p>
            </Section>

            <Divider />

            {/* 11 */}
            <Section heading="11. App Stores">
              <p>
                Als je Ingredly downloadt via de Apple App Store of Google Play Store, kunnen
                ook de voorwaarden van Apple of Google van toepassing zijn. Deze voorwaarden
                staan naast deze gebruiksvoorwaarden.
              </p>
              <p>
                Apple en Google zijn niet verantwoordelijk voor de inhoud, ondersteuning of
                werking van Ingredly, behalve voor zover zij dat volgens hun eigen voorwaarden
                of toepasselijke wetgeving zijn.
              </p>
            </Section>

            <Divider />

            {/* 12 */}
            <Section heading="12. Beëindiging">
              <p>
                Je kunt op elk moment stoppen met het gebruiken van Ingredly en de app van je
                apparaat verwijderen.
              </p>
              <p>
                Wij kunnen je toegang tot Ingredly beperken of beëindigen als je deze
                gebruiksvoorwaarden schendt, misbruik maakt van de app, of als dit nodig is
                voor veiligheid, wetgeving of bescherming van Ingredly en andere gebruikers.
              </p>
            </Section>

            <Divider />

            {/* 13 */}
            <Section heading="13. Wijzigingen in deze voorwaarden">
              <p>
                We kunnen deze gebruiksvoorwaarden aanpassen wanneer Ingredly, onze
                dienstverlening of wettelijke vereisten veranderen.
              </p>
              <p>
                De meest recente versie staat altijd op:{' '}
                <a
                  href="https://ingredly.nl/terms"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>https://ingredly.nl/terms</strong>
                </a>
              </p>
              <p>
                Bij belangrijke wijzigingen kunnen we gebruikers op een passende manier
                informeren.
              </p>
            </Section>

            <Divider />

            {/* 14 */}
            <Section heading="14. Toepasselijk recht">
              <p>
                Op deze gebruiksvoorwaarden is Nederlands recht van toepassing, tenzij
                dwingend recht iets anders bepaalt.
              </p>
            </Section>

            <Divider />

            {/* 15 */}
            <Section heading="15. Contact">
              <p>
                Voor vragen over deze gebruiksvoorwaarden kun je contact opnemen via:{' '}
                <Email />
              </p>
            </Section>

          </div>

          <p className={styles.lastUpdated}>Gebruiksvoorwaarden Ingredly · juni 2026</p>

        </div>
      </div>
    </Layout>
  )
}
