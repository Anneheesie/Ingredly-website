import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import styles from './Home.module.css'

function AppMockup() {
  return (
    <div className={styles.mockupShell}>
      <div className={styles.mockupScreen}>
        <div className={styles.mockupStatusBar}>
          <span>9:41</span>
          <span>100%</span>
        </div>

        <div className={styles.mockupContent}>
          {/* Product hero */}
          <div className={styles.mockupBrand}>NATUURWINKEL · ONTBIJTGRANEN</div>
          <div className={styles.mockupRow}>
            <div className={styles.mockupProductName}>Granola Mix</div>
            <div className={styles.mockupRing}>
              <svg width="64" height="64" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="27" stroke="#EFF5F1" strokeWidth="5" fill="none" />
                <circle
                  cx="32" cy="32" r="27"
                  stroke="#C9872E" strokeWidth="5" fill="none"
                  strokeDasharray="84.8 84.8"
                  strokeLinecap="round"
                  transform="rotate(-90 32 32)"
                />
              </svg>
              <div className={styles.mockupScore}>
                <span className={styles.mockupScoreNum}>52</span>
                <span className={styles.mockupScoreLabel}>score</span>
              </div>
            </div>
          </div>

          <div className={styles.mockupPill} data-tone="amber">Let op</div>
          <div className={styles.mockupSub}>Bevat 3 ultrabewerkte ingrediënten.</div>

          {/* Insight cards */}
          <div className={styles.mockupEyebrow}>INZICHTEN</div>
          <div className={styles.mockupInsightRow}>
            <div className={styles.mockupInsightCard}>
              <div className={styles.mockupInsightLabel}>
                <span className={styles.mockupDot} data-tone="amber" />
                ULTRABEWERKT
              </div>
              <div className={styles.mockupInsightValue}>3/8</div>
              <div className={styles.mockupInsightSub}>ingrediënten</div>
            </div>
            <div className={styles.mockupInsightCard}>
              <div className={styles.mockupInsightLabel}>
                <span className={styles.mockupDot} data-tone="amber" />
                SUIKERS
              </div>
              <div className={styles.mockupInsightValue}>14g</div>
              <div className={styles.mockupInsightSub}>per 100g</div>
            </div>
          </div>

          {/* Ingredients */}
          <div className={styles.mockupEyebrow} style={{ marginTop: 14 }}>INGREDIËNTEN</div>
          <div className={styles.mockupIngredientList}>
            {[
              { n: 1, name: 'Havervlokken', tag: 'Natuurlijk', tone: 'green' },
              { n: 2, name: 'Noten mix', tag: 'Natuurlijk', tone: 'green' },
              { n: 3, name: 'Glucosestroop', tag: 'Ultrabewerkt', tone: 'red' },
              { n: 4, name: 'Invertsuiker', tag: 'Ultrabewerkt', tone: 'red' },
            ].map((item) => (
              <div key={item.n} className={styles.mockupIngredientRow}>
                <span className={styles.mockupIngredientIndex} data-tone={item.tone}>{item.n}</span>
                <span className={styles.mockupIngredientName}>{item.name}</span>
                <span className={styles.mockupIngredientTag} data-tone={item.tone}>{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    icon: '⊡',
    title: 'Scan producten',
    body: 'Gebruik de barcode om snel productinformatie op te halen.',
  },
  {
    icon: '≡',
    title: 'Begrijp ingrediënten',
    body: 'Zie in gewone taal wat ingrediënten zijn en waarom ze worden gebruikt.',
  },
  {
    icon: '◬',
    title: 'Let op allergenen',
    body: 'Ingredly maakt mogelijke allergenen duidelijk zichtbaar.',
  },
  {
    icon: '⇄',
    title: 'Vergelijk producten',
    body: 'Vergelijk twee producten op ingrediënten, voedingswaarden en bewerkingsniveau.',
  },
]

const trustItems = [
  'Geen advertenties',
  'Geen dataverkoop',
  'Heldere uitleg, geen bangmakerij',
  'Raadpleeg altijd het productetiket',
]

export default function Home() {
  return (
    <Layout>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.eyebrow}>Voor de bewuste shopper</div>
            <h1 className={styles.headline}>
              Begrijp wat er in je eten zit.
            </h1>
            <p className={styles.subheadline}>
              Scan een product en krijg snel inzicht in ingrediënten, allergenen
              en hoe bewerkt een product is.
            </p>
            <div className={styles.heroCtas}>
              <span className={styles.btnPrimary}>Binnenkort beschikbaar</span>
              <Link to="/privacy" className={styles.btnSecondary}>
                Bekijk privacyverklaring
              </Link>
            </div>
            <p className={styles.trustLine}>Gratis. Geen abonnement. Geen reclame.</p>
          </div>
          <div className={styles.heroVisual}>
            <AppMockup />
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <section className={styles.features}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>Wat Ingredly doet</div>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon} aria-hidden="true">{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust ─────────────────────────────────────────────────────────── */}
      <section className={styles.trust}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>Onze uitgangspunten</div>
          <div className={styles.trustGrid}>
            {trustItems.map((item) => (
              <div key={item} className={styles.trustItem}>
                <span className={styles.trustDot} />
                <span className={styles.trustText}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.ctaHeadline}>Ingredly komt binnenkort beschikbaar.</h2>
          <span className={styles.btnPrimary}>Binnenkort beschikbaar</span>
          <p className={styles.ctaSub}>
            Vragen?{' '}
            <a href="mailto:support@ingredly.nl" className={styles.emailLink}>
              Mail support@ingredly.nl
            </a>
          </p>
        </div>
      </section>
    </Layout>
  )
}
