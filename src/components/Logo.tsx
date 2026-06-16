import { IngredlyLockupHorizontal } from '../brand/IngredlyBrand'

interface LogoProps {
  size?: number
}

export default function Logo({ size = 36 }: LogoProps) {
  return <IngredlyLockupHorizontal size={size} />
}
