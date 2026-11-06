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

// Official mark from the Ingredly logo kit (public/brand/logo/svg/ingredly-mark.svg).
// Paths are copied verbatim — do not edit. Variant A on light, variant B on dark.
// 'appAligned' renders variant A (kept for compatibility).
export function IngredlyMark({ size = 100, variant = 'default', color }: MarkProps) {
  let back: string, middle: string, front: string

  if (variant === 'monochrome') {
    back = color ?? '#000000'
    middle = color ?? '#000000'
    front = color ?? '#000000'
  } else if (variant === 'onDark') {
    // Variant B
    back = c.brandDeep   // #2F7A4E
    middle = c.brand     // #4A9D6C
    front = c.brandSoft  // #E3F2E8
  } else {
    // Variant A
    back = '#7AA688'
    middle = c.brand     // #4A9D6C
    front = c.moss       // #2F5340
  }

  return (
    <svg width={size} height={size} viewBox="0 0 1000 1000" fill="none" role="img" aria-label="Ingredly">
      <path fill={back} fillRule="evenodd" d="M373.31 869.73A423.3 423.3 0 0 1 174.35 751.76A423.3 423.3 0 0 1 104.78 653.51A423.3 423.3 0 0 1 85.7 310.43A423.3 423.3 0 0 1 334.58 396.01A420.48 420.48 0 0 0 410.93 605.4A527.63 527.63 0 0 0 390.5 663.36A527.63 527.63 0 0 0 372.54 756.45A527.63 527.63 0 0 0 373.31 869.73Z" />
      <path fill={middle} fillRule="evenodd" d="M424.59 575.48A392.35 392.35 0 0 1 529.21 40A392.35 392.35 0 0 1 675.2 330.97A527.63 527.63 0 0 0 424.59 575.48Z" />
      <path fill={front} fillRule="evenodd" d="M421.03 959.46A499.5 499.5 0 0 1 400.3 761.5A499.5 499.5 0 0 1 424.47 649.01A499.5 499.5 0 0 1 595.19 411.84A499.5 499.5 0 0 1 694.71 352.99A499.5 499.5 0 0 1 918.62 310.43A499.5 499.5 0 0 1 904.7 649.01A499.5 499.5 0 0 1 840.72 761.5A499.5 499.5 0 0 1 694.71 891.36A499.5 499.5 0 0 1 595.19 935.89A499.5 499.5 0 0 1 421.03 959.46ZM595.19 525.38A51.92 51.92 0 0 0 694.71 525.38A51.92 51.92 0 0 0 694.71 495.72A51.92 51.92 0 0 0 595.19 495.72A51.92 51.92 0 0 0 595.19 525.38ZM694.71 761.5L694.71 649.01A49.76 49.76 0 0 0 595.19 649.01L595.19 761.5A49.76 49.76 0 1 0 694.71 761.5Z" />
    </svg>
  )
}

// ── Wordmark ──────────────────────────────────────────────────────────────────
// Official wordmark from the logo kit (Poppins Bold, outlined, lowercase).
// Rendered from the original SVG file — never as live text. Variant A only.

interface WordmarkProps {
  /** Rendered height in px. */
  size?: number
}

export function IngredlyWordmark({ size = 28 }: WordmarkProps) {
  return (
    <img
      src="/brand/logo/svg/ingredly-wordmark.svg"
      alt="Ingredly"
      height={size}
      style={{ height: size, width: 'auto', display: 'inline-block' }}
    />
  )
}

// ── Horizontal lockup ─────────────────────────────────────────────────────────
// Official lockup from the logo kit. Variant A ('default') on light
// backgrounds, variant B ('onDark') on dark backgrounds.

interface LockupHorizontalProps {
  /** Rendered height in px (the mark's height). Minimum width per guide: 90px. */
  size?: number
  variant?: 'default' | 'onDark'
}

export function IngredlyLockupHorizontal({ size = 36, variant = 'default' }: LockupHorizontalProps) {
  const src = variant === 'onDark'
    ? '/brand/logo/svg/ingredly-logo-horizontal-white.svg'
    : '/brand/logo/svg/ingredly-logo-horizontal.svg'
  return (
    <img
      src={src}
      alt="Ingredly"
      height={size}
      style={{ height: size, width: 'auto', display: 'inline-block' }}
    />
  )
}
