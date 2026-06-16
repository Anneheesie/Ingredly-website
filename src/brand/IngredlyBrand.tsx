/**
 * Ingredly brand components — ported from Ingredly-Real/Design/IngredlyBrand.jsx
 * Source of truth: the JSX file above. Do not edit values here independently.
 */

// ── Color tokens ──────────────────────────────────────────────────────────────

export const ingredlyColors = {
  sageLight:  '#BBC8B5',
  sageMid:    '#6F9079',
  moss:       '#2F5340',
  cream:      '#F2EDDE',
  brandSoft:  '#E3F2E8',
  brand:      '#4A9D6C',
  brandDeep:  '#2F7A4E',
  canvas:     '#F4FAF6',
  brandMist:  '#F0F8F3',
  surface:    '#FFFFFF',
  ink:        '#1C2B22',
  inkSoft:    '#6B7A71',
  inkMuted:   '#9BA8A0',
  line:       '#E4EEE7',
  lineSoft:   '#EFF5F1',
} as const

const c = ingredlyColors

// ── Mark ──────────────────────────────────────────────────────────────────────

type MarkVariant = 'default' | 'appAligned' | 'monochrome' | 'onDark'

interface MarkProps {
  size?: number
  variant?: MarkVariant
  color?: string
}

export function IngredlyMark({ size = 100, variant = 'default', color }: MarkProps) {
  let tone1: string, tone2: string, tone3: string

  if (variant === 'monochrome') {
    tone1 = color ?? c.moss
    tone2 = color ?? c.moss
    tone3 = color ?? c.moss
  } else if (variant === 'onDark') {
    tone1 = c.cream
    tone2 = c.sageLight
    tone3 = c.sageMid
  } else if (variant === 'appAligned') {
    tone1 = c.brandSoft
    tone2 = c.brand
    tone3 = c.brandDeep
  } else {
    tone1 = c.sageLight
    tone2 = c.sageMid
    tone3 = c.moss
  }

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" role="img" aria-label="Ingredly">
      <rect x="14" y="28" width="72" height="13" rx="6.5" fill={tone1} />
      <rect x="22" y="44" width="56" height="13" rx="6.5" fill={tone2} />
      <rect x="30" y="60" width="40" height="13" rx="6.5" fill={tone3} />
    </svg>
  )
}

// ── Wordmark ──────────────────────────────────────────────────────────────────

interface WordmarkProps {
  size?: number
  color?: string
}

export function IngredlyWordmark({ size = 28, color = c.ink }: WordmarkProps) {
  return (
    <span
      style={{
        fontFamily: "'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif",
        fontSize: size,
        fontWeight: 700,
        color,
        letterSpacing: '-0.02em',
        lineHeight: 1,
        display: 'inline-block',
      }}
    >
      Ingredly
    </span>
  )
}

// ── Horizontal lockup ─────────────────────────────────────────────────────────

interface LockupHorizontalProps {
  size?: number
  variant?: MarkVariant
  color?: string
  wordmarkColor?: string
}

export function IngredlyLockupHorizontal({
  size = 36,
  variant = 'default',
  color,
  wordmarkColor,
}: LockupHorizontalProps) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.3 }}>
      <IngredlyMark size={size} variant={variant} color={color} />
      <IngredlyWordmark size={size * 0.78} color={wordmarkColor} />
    </div>
  )
}
