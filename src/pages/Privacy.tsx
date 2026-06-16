import { useEffect } from 'react'
import Layout from '../components/Layout'
import styles from './Privacy.module.css'

// ── Component helpers ─────────────────────────────────────────────────────────

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className={styles.block}>
      <h2 className={styles.sectionHeading}>{heading}</h2>
      <div className={styles.blockBody}>{children}</div>
    </div>
  )
}

function Sub({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className={styles.subBlock}>
      <h3 className={styles.subHeading}>{heading}</h3>
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

export default function Privacy() {
  useEffect(() => {
    const prev = document.title
    document.title = 'Privacyverklaring | Ingredly'
    return () => { document.title = prev }
  }, [])

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.inner}>

          {/* ── Page header ────────────────────────────────────────────────── */}
          <div className={styles.pageHeader}>
            <div className={styles.eyebrow}>Juridisch</div>
            <h1 className={styles.title}>Privacyverklaring Ingredly</h1>
            <span className={styles.dateBadge}>Laatst bijgewerkt: juni 2026</span>
            <p className={styles.intro}>
              Ingredly helpt gebruikers om voedingsproducten te scannen en beter te begrijpen
              wat er in een product zit. In deze privacyverklaring leggen we uit welke gegevens
              we gebruiken, waarom we dat doen en welke keuzes en rechten je hebt.
            </p>
            <p className={styles.introDisclaimer}>
              Ingredly is bedoeld als informatieve app. Ingredly geeft geen medisch advies,
              dieetadvies of persoonlijk gezondheidsadvies. Controleer bij allergieën,
              intoleranties of medische vragen altijd het productetiket en raadpleeg indien
              nodig een deskundige.
            </p>
          </div>

          {/* ── Content card ───────────────────────────────────────────────── */}
          <div className={styles.card}>

            {/* 1 */}
            <Section heading="1. Wie is verantwoordelijk voor je gegevens?">
              <p>Ingredly wordt aangeboden door:</p>
              <div className={styles.infoBlock}>
                <span className={styles.infoLine}>Happyshare</span>
                <span className={styles.infoLine}>KvK-nummer: 81792530</span>
              </div>
              <p>
                Voor vragen over privacy of je gegevens kun je contact opnemen via:{' '}
                <Email />
              </p>
            </Section>

            <Divider />

            {/* 2 */}
            <Section heading="2. Welke gegevens gebruikt Ingredly?">
              <p>
                Ingredly probeert zo min mogelijk persoonsgegevens te gebruiken. Welke
                gegevens worden verwerkt, hangt af van hoe je de app gebruikt.
              </p>

              <Sub heading="Accountgegevens">
                <p>
                  Als je een Ingredly-account aanmaakt, verwerken we gegevens die nodig zijn
                  om je account te laten werken, zoals:
                </p>
                <ul>
                  <li>je e-mailadres;</li>
                  <li>je gebruikers-ID;</li>
                  <li>je gekozen weergavenaam, als je die instelt;</li>
                  <li>je gekozen profielicoon, als je die instelt;</li>
                  <li>
                    technische gegevens die nodig zijn om inloggen, uitloggen en
                    wachtwoordherstel mogelijk te maken.
                  </li>
                </ul>
                <p>
                  Deze accountfunctionaliteit wordt technisch ondersteund door Supabase. Het
                  Supabase-project voor Ingredly staat in de regio <strong>West-EU</strong>.
                </p>
              </Sub>

              <Sub heading="Product- en scangegevens">
                <p>
                  Wanneer je een product scant, gebruikt Ingredly de barcode om
                  productinformatie op te halen. Hiervoor kan de barcode worden gebruikt om
                  informatie op te vragen bij externe productdatabronnen, zoals Open Food Facts.
                </p>
                <p>Ingredly kan productinformatie tonen zoals:</p>
                <ul>
                  <li>productnaam;</li>
                  <li>ingrediënten;</li>
                  <li>allergenen;</li>
                  <li>voedingswaarden;</li>
                  <li>additieven;</li>
                  <li>signalen over bewerkingsniveau;</li>
                  <li>vergelijkingsinformatie tussen producten.</li>
                </ul>
                <p>
                  De inhoud van externe productdatabronnen kan onvolledig, verouderd of
                  onjuist zijn. Controleer daarom altijd het productetiket.
                </p>
              </Sub>

              <Sub heading="Lokale appgegevens op je apparaat">
                <p>
                  Ingredly bewaart bepaalde gegevens lokaal op je apparaat om de app prettig
                  te laten werken, zoals:
                </p>
                <ul>
                  <li>recente scans;</li>
                  <li>favorieten;</li>
                  <li>gekozen allergie- of dieetvoorkeuren;</li>
                  <li>lokale instellingen;</li>
                  <li>tijdelijke appstatus.</li>
                </ul>
                <p>
                  Deze gegevens worden lokaal op je apparaat opgeslagen en worden niet
                  automatisch gesynchroniseerd met onze servers, tenzij dit duidelijk in de
                  app wordt aangegeven.
                </p>
                <p>
                  Als je de app verwijdert, kunnen lokaal opgeslagen gegevens verdwijnen.
                </p>
              </Sub>

              <Sub heading="Camera">
                <p>
                  Ingredly gebruikt de camera van je apparaat om barcodes te scannen. De
                  camera wordt alleen gebruikt om producten te scannen.
                </p>
                <p>
                  Ingredly gebruikt de camera niet om foto's van jou te maken en uploadt geen
                  camerabeelden voor profiel- of marketingdoeleinden.
                </p>
              </Sub>

              <Sub heading="Wachtwoordherstel">
                <p>
                  Als je je wachtwoord wilt herstellen, gebruiken we je e-mailadres om een
                  herstelmail te sturen. Via de herstelmail kun je een nieuw wachtwoord
                  instellen in de app.
                </p>
              </Sub>

              <Sub heading="Crashrapportage">
                <p>
                  Ingredly gebruikt crashrapportage om technische problemen op te sporen en
                  op te lossen. Hiervoor kan Sentry worden gebruikt.
                </p>
                <p>Crashrapporten kunnen technische gegevens bevatten, zoals:</p>
                <ul>
                  <li>appversie;</li>
                  <li>apparaattype;</li>
                  <li>besturingssysteem;</li>
                  <li>foutmeldingen;</li>
                  <li>technische stacktraces.</li>
                </ul>
                <p>
                  Deze gegevens helpen ons om fouten in de app te vinden en te verhelpen.
                </p>
              </Sub>

              <Sub heading="Analytics">
                <p>
                  In de MVP-versie gebruikt Ingredly geen productanalytics in productie,
                  tenzij dit later expliciet wordt ingeschakeld en in deze privacyverklaring
                  wordt vermeld.
                </p>
                <p>
                  De website <strong>ingredly.nl</strong> gebruikt in de MVP-versie geen
                  analyticscookies of marketingtracking.
                </p>
                <p>Ingredly verkoopt geen persoonsgegevens.</p>
              </Sub>

              <Sub heading="Websitegegevens">
                <p>
                  Als je de website <strong>ingredly.nl</strong> bezoekt, kunnen technische
                  gegevens worden verwerkt die nodig zijn om de website te tonen, zoals je
                  IP-adres, browserinformatie en serverlogs.
                </p>
                <p>
                  De website gebruikt in de MVP-versie geen analyticscookies of
                  marketingtracking.
                </p>
              </Sub>
            </Section>

            <Divider />

            {/* 3 */}
            <Section heading="3. Waarvoor gebruiken we je gegevens?">
              <p>We gebruiken gegevens voor de volgende doelen:</p>
              <ul>
                <li>het aanmaken en beheren van je account;</li>
                <li>het mogelijk maken van inloggen, uitloggen en wachtwoordherstel;</li>
                <li>het ophalen en tonen van productinformatie;</li>
                <li>het tonen van scanresultaten, allergenen en vergelijkingen;</li>
                <li>
                  het bewaren van voorkeuren, favorieten en recente scans op je apparaat;
                </li>
                <li>het opsporen en oplossen van technische problemen;</li>
                <li>het beantwoorden van supportvragen;</li>
                <li>het voldoen aan wettelijke verplichtingen.</li>
              </ul>
            </Section>

            <Divider />

            {/* 4 */}
            <Section heading="4. Op welke grondslag verwerken we gegevens?">
              <p>
                Voor zover de Algemene Verordening Gegevensbescherming van toepassing is,
                verwerken we persoonsgegevens op basis van een of meer van de volgende
                grondslagen:
              </p>
              <ul>
                <li>
                  <strong>Uitvoering van een overeenkomst:</strong> om de app, je account en
                  de belangrijkste functies van Ingredly te kunnen leveren.
                </li>
                <li>
                  <strong>Gerechtvaardigd belang:</strong> om de app veilig, betrouwbaar en
                  bruikbaar te houden, fouten op te lossen en de dienstverlening te
                  verbeteren.
                </li>
                <li>
                  <strong>Toestemming:</strong> wanneer toestemming wettelijk vereist is,
                  bijvoorbeeld voor bepaalde vormen van tracking of communicatie.
                </li>
                <li>
                  <strong>Wettelijke verplichting:</strong> wanneer we gegevens moeten
                  verwerken of bewaren om aan wettelijke verplichtingen te voldoen.
                </li>
              </ul>
            </Section>

            <Divider />

            {/* 5 */}
            <Section heading="5. Delen we gegevens met anderen?">
              <p>Ingredly verkoopt je persoonsgegevens niet.</p>
              <p>
                We kunnen gegevens delen met dienstverleners die nodig zijn om de app en
                website te laten werken. Deze partijen verwerken gegevens alleen voor de
                doelen waarvoor ze zijn ingeschakeld.
              </p>
              <p>
                Voorbeelden van dienstverleners of externe bronnen zijn:
              </p>
              <ul>
                <li>Supabase, voor accountfunctionaliteit en authenticatie;</li>
                <li>Open Food Facts, voor productinformatie op basis van barcodes;</li>
                <li>Sentry, voor crashrapportage;</li>
                <li>hosting- en infrastructuurproviders voor de app en website.</li>
              </ul>
              <p>
                Wanneer gegevens buiten de Europese Economische Ruimte worden verwerkt,
                nemen we passende maatregelen waar dat vereist is.
              </p>
            </Section>

            <Divider />

            {/* 6 */}
            <Section heading="6. Hoe lang bewaren we gegevens?">
              <p>
                We bewaren gegevens niet langer dan nodig is voor de doelen waarvoor ze zijn
                verzameld.
              </p>
              <p>In hoofdlijnen geldt:</p>
              <ul>
                <li>accountgegevens worden bewaard zolang je account bestaat;</li>
                <li>
                  lokale appgegevens blijven op je apparaat staan totdat je ze verwijdert,
                  de app verwijdert of de appgegevens wist;
                </li>
                <li>
                  crash- en foutgegevens worden bewaard zolang nodig is om technische
                  problemen te analyseren en op te lossen;
                </li>
                <li>
                  supportcommunicatie wordt bewaard zolang nodig is om je vraag te
                  behandelen en administratief af te handelen;
                </li>
                <li>
                  gegevens die wettelijk bewaard moeten worden, worden alleen bewaard zolang
                  dat wettelijk verplicht is.
                </li>
              </ul>
              <p>
                Als je je account verwijdert, verwijderen we je accountgegevens voor zover
                mogelijk en wettelijk toegestaan. Sommige gegevens kunnen langer bewaard
                blijven als dat noodzakelijk is voor beveiliging, administratie,
                geschillenafhandeling of wettelijke verplichtingen.
              </p>
            </Section>

            <Divider />

            {/* 7 */}
            <Section heading="7. Account verwijderen">
              <p>
                Je kunt je Ingredly-account verwijderen via de accountinstellingen in de app.
              </p>
              <p>
                Na verwijdering kun je mogelijk geen toegang meer krijgen tot je account,
                voorkeuren of gegevens die aan je account gekoppeld zijn. Lokale gegevens op
                je apparaat kunnen daarnaast verdwijnen wanneer je de app verwijdert of
                appgegevens wist.
              </p>
              <p>
                Als het verwijderen van je account niet lukt, kun je contact opnemen via:{' '}
                <Email />
              </p>
              <p>
                Gebruik bij voorkeur het onderwerp: <strong>Account verwijderen</strong>
              </p>
            </Section>

            <Divider />

            {/* 8 */}
            <Section heading="8. Je rechten">
              <p>
                Afhankelijk van je situatie en de toepasselijke wetgeving heb je rechten met
                betrekking tot je persoonsgegevens. Je kunt bijvoorbeeld vragen om:
              </p>
              <ul>
                <li>inzage in je gegevens;</li>
                <li>correctie van onjuiste gegevens;</li>
                <li>verwijdering van je gegevens;</li>
                <li>beperking van verwerking;</li>
                <li>bezwaar tegen verwerking;</li>
                <li>overdraagbaarheid van gegevens;</li>
                <li>
                  intrekking van toestemming, als verwerking op toestemming is gebaseerd.
                </li>
              </ul>
              <p>
                Je kunt een verzoek sturen naar: <Email />
              </p>
              <p>
                We kunnen je vragen om aanvullende informatie om te controleren dat het
                verzoek echt van jou komt.
              </p>
              <p>
                Als je vindt dat we niet goed omgaan met je persoonsgegevens, kun je ook een
                klacht indienen bij de Autoriteit Persoonsgegevens.
              </p>
            </Section>

            <Divider />

            {/* 9 */}
            <Section heading="9. Beveiliging">
              <p>
                We nemen passende technische en organisatorische maatregelen om je gegevens
                te beschermen. Geen enkele digitale dienst is echter volledig zonder risico.
                Als je denkt dat er sprake is van een beveiligingsprobleem, neem dan contact
                met ons op via: <Email />
              </p>
            </Section>

            <Divider />

            {/* 10 */}
            <Section heading="10. Kinderen">
              <p>Ingredly is niet specifiek gericht op kinderen onder de 16 jaar.</p>
              <p>
                Als je denkt dat een kind zonder passende toestemming persoonsgegevens aan
                ons heeft verstrekt, neem dan contact met ons op via: <Email />
              </p>
            </Section>

            <Divider />

            {/* 11 */}
            <Section heading="11. Marketing, advertenties en verkoop van gegevens">
              <p>
                Ingredly stuurt in de MVP-versie geen marketingmails of nieuwsbrieven.
              </p>
              <p>Ingredly toont geen advertenties in de MVP-versie.</p>
              <p>Ingredly verkoopt geen persoonsgegevens.</p>
              <p>
                Als dit in de toekomst verandert, wordt deze privacyverklaring aangepast
                voordat die wijziging ingaat.
              </p>
            </Section>

            <Divider />

            {/* 12 */}
            <Section heading="12. Betalingen en abonnementen">
              <p>
                Ingredly biedt in de MVP-versie geen betaalde functies, abonnementen of
                in-app aankopen aan.
              </p>
              <p>
                Als Ingredly in de toekomst betaalde functies introduceert, wordt deze
                privacyverklaring aangepast waar nodig.
              </p>
            </Section>

            <Divider />

            {/* 13 */}
            <Section heading="13. Pushmeldingen">
              <p>Ingredly gebruikt in de MVP-versie geen pushmeldingen.</p>
              <p>
                Als pushmeldingen later worden toegevoegd, vragen we daarvoor toestemming
                waar dat vereist is.
              </p>
            </Section>

            <Divider />

            {/* 14 */}
            <Section heading="14. Wijzigingen in deze privacyverklaring">
              <p>
                We kunnen deze privacyverklaring aanpassen wanneer de app, website, gebruikte
                diensten of wettelijke vereisten veranderen.
              </p>
              <p>
                De meest recente versie staat altijd op:{' '}
                <a
                  href="https://ingredly.nl/privacy"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ingredly.nl/privacy
                </a>
              </p>
              <p>
                Bij belangrijke wijzigingen kunnen we gebruikers op een passende manier
                informeren.
              </p>
            </Section>

            <Divider />

            {/* 15 */}
            <Section heading="15. Contact">
              <p>
                Voor vragen over deze privacyverklaring of over je gegevens kun je contact
                opnemen via: <Email />
              </p>
            </Section>

          </div>

          <p className={styles.lastUpdated}>Privacyverklaring Ingredly · juni 2026</p>

        </div>
      </div>
    </Layout>
  )
}
